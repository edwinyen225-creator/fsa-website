$files = @(
  "src/app/programs/page.tsx",
  "src/app/team/page.tsx",
  "src/app/signup/page.tsx",
  "src/app/payment/page.tsx",
  "src/app/parents/page.tsx",
  "src/app/contact/page.tsx",
  "src/components/HeroSection.jsx"
)

$old1 = '<header className="fixed top-0 left-0 right-0 z-50 px-6 py-5">'
$new1 = '<header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">'
$old2 = 'className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 px-7 py-4 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] ring-1 ring-white/5"'
$new2 = 'className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 px-6 py-3 backdrop-blur-xl shadow-[0_4px_20px_rgba(6,17,40,0.4)] ring-1 ring-white/5"'

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        $content = $content.Replace($old1, $new1).Replace($old2, $new2)
        Set-Content -Path $file -Value $content -NoNewline
        Write-Host "Updated $file"
    }
}
