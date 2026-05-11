$files = @(
  "src/app/page.tsx",
  "src/app/programs/page.tsx",
  "src/app/team/page.tsx",
  "src/app/signup/page.tsx",
  "src/app/payment/page.tsx",
  "src/app/parents/page.tsx",
  "src/app/contact/page.tsx"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        $content = $content.Replace("py-24 md:py-32", "py-20 md:py-24")
        $content = $content.Replace("py-28", "py-20 md:py-24")
        $content = $content.Replace("mb-20 text-center font-sans text-5xl", "mb-16 text-center font-sans text-4xl")
        $content = $content.Replace("mb-20 font-serif text-5xl", "mb-16 font-serif text-4xl")
        $content = $content.Replace("mb-16 text-center font-serif text-5xl", "mb-12 text-center font-serif text-4xl")
        $content = $content.Replace("font-sans text-5xl font-light", "font-sans text-4xl font-medium")
        $content = $content.Replace("text-5xl md:text-6xl", "text-4xl md:text-5xl")
        $content = $content.Replace("text-6xl md:text-7xl lg:text-8xl", "text-5xl md:text-6xl lg:text-7xl")
        Set-Content -Path $file -Value $content -NoNewline
        Write-Host "Updated $file"
    }
}
