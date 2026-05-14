const fs = require('fs');
const path = require('path');
const file = path.join('src', 'lib', 'programs-i18n.ts');
let content = fs.readFileSync(file, 'utf8');

const p1 = `
    p1_tagline: "Active 1-on-1 English or Chinese communication coaching.",
    p1_f1: "Natural conversation & listening", p1_f2: "Pronunciation & self-expression",
    p1_f3: "Culture & school life", p1_f4: "Work-life communication", p1_f5: "Useful phrases",
    p1_outcome: "Conversation confidence, phrase bank, pronunciation feedback, short speaking clip, monthly progress note.",
`;

const p2 = `
    p2_tagline: "Active 1-on-1 program with English or Chinese support for TOEIC preparation.",
    p2_f1: "TOEIC Listening & Reading", p2_f2: "Vocabulary & grammar",
    p2_f3: "Test strategy & timing", p2_f4: "Weak-point diagnosis", p2_f5: "Score improvement plan",
    p2_outcome: "TOEIC diagnostic profile, target score plan, part-by-part strategy, weak-point map, monthly progress check.",
`;

const p3 = `
    p3_tagline: "Active 1-on-1 program on how to use AI responsibly and practically.",
    p3_f1: "AI for research & writing", p3_f2: "Presentations & video creation",
    p3_f3: "Coding support", p3_f4: "Productivity workflows", p3_f5: "AI safety and ethics",
    p3_outcome: "AI prompt library, AI research workflow, presentation outline, video script, coding log, AI safety checklist.",
`;

const p4 = `
    p4_tagline: "Flagship premium 1-on-1 program combining language, AI, research, and portfolio-building.",
    p4_f1: "Language communication coaching", p4_f2: "AI & project coaching",
    p4_f3: "Research & writing", p4_f4: "Presentations & video", p4_f5: "CV/profile & portfolio building",
    p4_outcome: "Presentation deck, research brief, AI workflow sample, video script, CV material, speaking clip, final showcase artifact.",
`;

const p5 = `
    p5_tagline: "Future group class for matched learning, peer feedback, and public speaking.",
    p5_f1: "Matched group learning", p5_f2: "Collaboration & networking",
    p5_f3: "Peer feedback", p5_f4: "Public speaking", p5_f5: "Group projects & showcase",
    p5_outcome: "Team presentation, peer feedback report, showcase event participation.",
`;

const replacements = [p1, p2, p3, p4, p5].join('\n');

const regex = /    p1_tagline:[\s\S]*?p3_outcome:.*?,/g;
content = content.replace(regex, replacements);

fs.writeFileSync(file, content);
console.log('Done');
