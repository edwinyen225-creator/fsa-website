"use client";

import { useRef, useEffect } from "react";

// shape index 3 = icosahedron
const SHAPE = 3;

const fragmentShader = `
#ifdef GL_ES
precision highp float;
#endif

uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_time;
uniform int u_shape;

#define TWO_PI 6.2831853071795864769252867665590

mat3 rotateX(float angle) {
    float s = sin(angle); float c = cos(angle);
    return mat3(1.0,0.0,0.0, 0.0,c,-s, 0.0,s,c);
}
mat3 rotateY(float angle) {
    float s = sin(angle); float c = cos(angle);
    return mat3(c,0.0,s, 0.0,1.0,0.0, -s,0.0,c);
}
mat3 rotateZ(float angle) {
    float s = sin(angle); float c = cos(angle);
    return mat3(c,-s,0.0, s,c,0.0, 0.0,0.0,1.0);
}

vec2 coord(in vec2 p) {
    p = p / u_resolution.xy;
    if (u_resolution.x > u_resolution.y) {
        p.x *= u_resolution.x / u_resolution.y;
        p.x += (u_resolution.y - u_resolution.x) / u_resolution.y / 2.0;
    } else {
        p.y *= u_resolution.y / u_resolution.x;
        p.y += (u_resolution.x - u_resolution.y) / u_resolution.x / 2.0;
    }
    p -= 0.5;
    return p;
}

vec2 project(vec3 p) {
    float perspective = 2.0 / (2.0 - p.z);
    return p.xy * perspective;
}

float distToSegment(vec2 p, vec2 a, vec2 b) {
    vec2 pa = p - a; vec2 ba = b - a;
    float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
    return length(pa - ba * h);
}

float drawLine(vec2 p, vec2 a, vec2 b, float thickness, float blur) {
    float d = distToSegment(p, a, b);
    return smoothstep(thickness + blur, thickness - blur, d);
}

void getIcosahedronVertices(out vec3 v[12]) {
    float t = (1.0 + sqrt(5.0)) / 2.0;
    float s = 1.0 / sqrt(1.0 + t * t);
    v[0]  = vec3(-s,  t*s, 0.0); v[1]  = vec3( s,  t*s, 0.0);
    v[2]  = vec3(-s, -t*s, 0.0); v[3]  = vec3( s, -t*s, 0.0);
    v[4]  = vec3(0.0, -s,  t*s); v[5]  = vec3(0.0,  s,  t*s);
    v[6]  = vec3(0.0, -s, -t*s); v[7]  = vec3(0.0,  s, -t*s);
    v[8]  = vec3( t*s, 0.0, -s); v[9]  = vec3( t*s, 0.0,  s);
    v[10] = vec3(-t*s, 0.0, -s); v[11] = vec3(-t*s, 0.0,  s);
}

float drawWireframe(vec2 p, mat3 rotation, float scale, float thickness, float blur) {
    float result = 0.0;
    vec3 v[12];
    getIcosahedronVertices(v);
    for (int i = 0; i < 12; i++) { v[i] = rotation * (v[i] * scale); }

    result += drawLine(p, project(v[0]),  project(v[1]),  thickness, blur);
    result += drawLine(p, project(v[0]),  project(v[5]),  thickness, blur);
    result += drawLine(p, project(v[0]),  project(v[7]),  thickness, blur);
    result += drawLine(p, project(v[0]),  project(v[10]), thickness, blur);
    result += drawLine(p, project(v[0]),  project(v[11]), thickness, blur);
    result += drawLine(p, project(v[1]),  project(v[5]),  thickness, blur);
    result += drawLine(p, project(v[1]),  project(v[7]),  thickness, blur);
    result += drawLine(p, project(v[1]),  project(v[8]),  thickness, blur);
    result += drawLine(p, project(v[1]),  project(v[9]),  thickness, blur);
    result += drawLine(p, project(v[2]),  project(v[3]),  thickness, blur);
    result += drawLine(p, project(v[2]),  project(v[4]),  thickness, blur);
    result += drawLine(p, project(v[2]),  project(v[6]),  thickness, blur);
    result += drawLine(p, project(v[2]),  project(v[10]), thickness, blur);
    result += drawLine(p, project(v[2]),  project(v[11]), thickness, blur);
    result += drawLine(p, project(v[3]),  project(v[4]),  thickness, blur);
    result += drawLine(p, project(v[3]),  project(v[6]),  thickness, blur);
    result += drawLine(p, project(v[3]),  project(v[8]),  thickness, blur);
    result += drawLine(p, project(v[3]),  project(v[9]),  thickness, blur);
    result += drawLine(p, project(v[4]),  project(v[5]),  thickness, blur);
    result += drawLine(p, project(v[4]),  project(v[11]), thickness, blur);
    result += drawLine(p, project(v[5]),  project(v[11]), thickness, blur);
    result += drawLine(p, project(v[6]),  project(v[7]),  thickness, blur);
    result += drawLine(p, project(v[6]),  project(v[8]),  thickness, blur);
    result += drawLine(p, project(v[6]),  project(v[10]), thickness, blur);
    result += drawLine(p, project(v[7]),  project(v[10]), thickness, blur);
    result += drawLine(p, project(v[8]),  project(v[9]),  thickness, blur);
    result += drawLine(p, project(v[9]),  project(v[11]), thickness, blur);
    result += drawLine(p, project(v[10]), project(v[11]), thickness, blur);

    return clamp(result, 0.0, 1.0);
}

void main() {
    vec2 st    = coord(gl_FragCoord.xy);
    vec2 mouse = coord(u_mouse * u_pixelRatio) * vec2(1., -1.);

    float mouseDist      = length(st - mouse);
    float mouseInfluence = 1.0 - smoothstep(0.0, 0.5, mouseDist);

    float time = u_time * 0.2;
    mat3 rotation = rotateY(time + (mouse.x - 0.5) * mouseInfluence)
                  * rotateX(time * 0.7 + (mouse.y - 0.5) * mouseInfluence)
                  * rotateZ(time * 0.1);

    float blur      = mix(0.0001, 0.05, mouseInfluence);
    float thickness = mix(0.002, 0.003, mouseInfluence);

    float shape   = drawWireframe(st, rotation, 0.22, thickness, blur);
    float dimming = 1.0 - mouseInfluence * 0.3;

    // Gold-tinted wireframe to match FSA brand (#C9A84C ≈ rgb(0.79, 0.66, 0.30))
    vec3 color = vec3(0.85, 0.72, 0.38) * shape * dimming;

    float vignette = 1.0 - length(st) * 0.2;
    color *= vignette;
    color  = pow(color, vec3(0.9));

    // Luminance as alpha: edges opaque, background transparent
    float alpha = max(max(color.r, color.g), color.b);
    gl_FragColor = vec4(color, alpha);
}
`;

const vertexShader = `
attribute vec3 a_position;
void main() { gl_Position = vec4(a_position, 1.0); }
`;

export function IcosahedronCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef    = useRef<HTMLCanvasElement>(null);
    const mouseRef     = useRef({ x: 0, y: 0 });
    const mouseDampRef = useRef({ x: 0, y: 0 });
    const rafRef       = useRef<number>(0);
    const glRef        = useRef<WebGLRenderingContext | null>(null);
    const programRef   = useRef<WebGLProgram | null>(null);
    const uniformsRef  = useRef<Record<string, WebGLUniformLocation | null>>({});
    const startRef     = useRef(Date.now());

    // WebGL init
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const gl = canvas.getContext('webgl', {
            antialias: true,
            alpha: true,
            premultipliedAlpha: false,
            preserveDrawingBuffer: false,
        });
        if (!gl) return;
        glRef.current = gl;

        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        gl.clearColor(0, 0, 0, 0);

        const compile = (type: number, src: string) => {
            const s = gl.createShader(type)!;
            gl.shaderSource(s, src);
            gl.compileShader(s);
            if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
                console.error(gl.getShaderInfoLog(s));
                return null;
            }
            return s;
        };

        const vs = compile(gl.VERTEX_SHADER, vertexShader);
        const fs = compile(gl.FRAGMENT_SHADER, fragmentShader);
        if (!vs || !fs) return;

        const prog = gl.createProgram()!;
        gl.attachShader(prog, vs);
        gl.attachShader(prog, fs);
        gl.linkProgram(prog);
        if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
            console.error(gl.getProgramInfoLog(prog));
            return;
        }
        programRef.current = prog;
        gl.useProgram(prog);

        uniformsRef.current = {
            u_mouse:      gl.getUniformLocation(prog, 'u_mouse'),
            u_resolution: gl.getUniformLocation(prog, 'u_resolution'),
            u_pixelRatio: gl.getUniformLocation(prog, 'u_pixelRatio'),
            u_time:       gl.getUniformLocation(prog, 'u_time'),
        };

        const verts = new Float32Array([-1,-1,0, 1,-1,0, -1,1,0, 1,1,0]);
        const buf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);
        const loc = gl.getAttribLocation(prog, 'a_position');
        gl.enableVertexAttribArray(loc);
        gl.vertexAttribPointer(loc, 3, gl.FLOAT, false, 0, 0);

        return () => { gl.deleteProgram(prog); gl.deleteShader(vs); gl.deleteShader(fs); };
    }, []);

    // Resize
    useEffect(() => {
        const resize = () => {
            const canvas = canvasRef.current;
            const container = containerRef.current;
            if (!canvas || !container) return;
            const dpr = Math.min(window.devicePixelRatio, 2);
            const w = container.clientWidth, h = container.clientHeight;
            canvas.width  = w * dpr;
            canvas.height = h * dpr;
            canvas.style.width  = `${w}px`;
            canvas.style.height = `${h}px`;
            glRef.current?.viewport(0, 0, canvas.width, canvas.height);
        };
        resize();
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, []);

    // Mouse
    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            const rect = canvasRef.current?.getBoundingClientRect();
            if (!rect) return;
            mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
        };
        window.addEventListener('mousemove', onMove);
        return () => window.removeEventListener('mousemove', onMove);
    }, []);

    // Animation loop
    useEffect(() => {
        let last = performance.now();
        const animate = (now: number) => {
            const dt = (now - last) / 1000;
            last = now;

            const canvas = canvasRef.current;
            const gl     = glRef.current;
            const prog   = programRef.current;
            if (!canvas || !gl || !prog) { rafRef.current = requestAnimationFrame(animate); return; }

            const damp = 8;
            mouseDampRef.current.x += (mouseRef.current.x - mouseDampRef.current.x) * damp * dt;
            mouseDampRef.current.y += (mouseRef.current.y - mouseDampRef.current.y) * damp * dt;

            gl.clearColor(0, 0, 0, 0);
            gl.clear(gl.COLOR_BUFFER_BIT);

            const dpr     = Math.min(window.devicePixelRatio, 2);
            const elapsed = (Date.now() - startRef.current) / 1000;
            const u       = uniformsRef.current;

            if (u.u_mouse)      gl.uniform2f(u.u_mouse, mouseDampRef.current.x, mouseDampRef.current.y);
            if (u.u_resolution) gl.uniform2f(u.u_resolution, canvas.width, canvas.height);
            if (u.u_pixelRatio) gl.uniform1f(u.u_pixelRatio, dpr);
            if (u.u_time)       gl.uniform1f(u.u_time, elapsed);

            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            rafRef.current = requestAnimationFrame(animate);
        };
        rafRef.current = requestAnimationFrame(animate);
        return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 z-0 w-full h-full pointer-events-none">
            <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{ mixBlendMode: 'screen' }}
            />
        </div>
    );
}
