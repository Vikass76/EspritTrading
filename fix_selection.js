const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(
  '<a href="#offres"  style="display:flex;align-items:center;justify-content:center;padding:14px 28px;background:var(--gold);color:#000;font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;text-decoration:none;border-radius:8px;transition:all 0.2s;box-shadow:0 4px 20px rgba(244,199,15,0.25)" onmouseover="this.style.background=\'#d4b050\';this.style.transform=\'translateY(-1px)\'" onmouseout="this.style.background=\'var(--gold)\';this.style.transform=\'translateY(0)\'">Passer la sélection →</a>',
  '<a href="https://calendly.com/esprittrading-contact/30min" target="_blank" rel="noopener" style="display:flex;align-items:center;justify-content:center;padding:14px 28px;background:var(--gold);color:#000;font-family:\'Bricolage Grotesque\',sans-serif;font-weight:800;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;text-decoration:none;border-radius:8px;transition:all 0.2s;box-shadow:0 4px 20px rgba(244,199,15,0.25)" onmouseover="this.style.background=\'#d4b050\';this.style.transform=\'translateY(-1px)\'" onmouseout="this.style.background=\'var(--gold)\';this.style.transform=\'translateY(0)\'">Passer la sélection →</a>'
);
fs.writeFileSync('index.html', html);
console.log('Done:', html.includes('calendly.com/esprittrading-contact/30min'));
