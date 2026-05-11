$files = @(
  "src/app/team/page.tsx",
  "src/app/signup/page.tsx",
  "src/app/programs/page.tsx",
  "src/app/payment/page.tsx",
  "src/app/parents/page.tsx",
  "src/app/contact/page.tsx"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        $content = $content.Replace('<h1 className="font-serif text-5xl leading-tight tracking-tight md:text-7xl">', '<h1 className="font-sans text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl lg:text-[4rem]">')
        $content = $content.Replace('<h1 className="font-serif text-5xl leading-tight md:text-7xl">', '<h1 className="font-sans text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl lg:text-[4rem]">')
        $content = $content.Replace('<h1 className="font-serif text-5xl leading-tight tracking-tight md:text-5xl lg:text-[4rem]">', '<h1 className="font-sans text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl lg:text-[4rem]">')
        Set-Content -Path $file -Value $content -NoNewline
        Write-Host "Updated $file"
    }
}
