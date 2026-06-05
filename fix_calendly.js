const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Remettre le vrai lien sur le bouton "Passer la sélection"
html = html.replace(
  /(<a[^>]*href="#offres"[^>]*>)\s*PASSER LA SÉLECTION/,
  '<a href="https://calendly.com/esprittrading-contact/30min" target="_blank" rel="noopener" style="display:block;width:100%;padding:18px;background:var(--gold);color:#000;font-family:\'Bricolage Grotesque\',sans-serif;font-weight:700;font-size:13px;letter-spacing:0.1em;text-transform:uppercase;text-decoration:none;border-radius:12px;text-align:center;transition:opacity 0.2s">PASSER LA SÉLECTION →'
);

fs.writeFileSync('index.html', html);
console.log('Done');
