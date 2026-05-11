const fs = require('fs');

// 1. Update all navbars
const pages = [
  "src/app/page.tsx",
  "src/app/programs/page.tsx",
  "src/app/team/page.tsx",
  "src/app/signup/page.tsx",
  "src/app/payment/page.tsx",
  "src/app/parents/page.tsx",
  "src/app/contact/page.tsx"
];

const newNavbarInner = 'className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#061128]/70 px-6 py-3 backdrop-blur-xl animate-navbar-float ring-1 ring-white/5"';

pages.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace navbar inner div class
    content = content.replace(
      /className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white\/10[^"]+"/g,
      newNavbarInner
    );

    // Also make sure header is px-6 py-4
    content = content.replace(
      /<header className="fixed top-0 left-0 right-0 z-50[^"]*">/g,
      '<header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 pointer-events-none">' // pointer events none on header so you can click through empty space
    );
    // Add pointer events auto to the inner div so it's clickable
    content = content.replace(
      /className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white\/10 bg-\[#061128\]\/70 px-6 py-3 backdrop-blur-xl animate-navbar-float ring-1 ring-white\/5"/g,
      'className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#061128]/70 px-6 py-3 backdrop-blur-xl animate-navbar-float ring-1 ring-white/5 pointer-events-auto"'
    );
    
    fs.writeFileSync(file, content, 'utf8');
    console.log("Updated navbar in", file);
  }
});
