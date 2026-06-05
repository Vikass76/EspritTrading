const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Chercher les liens qui contiennent "appel" ou "cal.com" ou "calendly"
// et les remplacer par des ancres qui scrollent
html = html.replace(
  /(<a[^>]*)(href="#offres")([^>]*target="_blank"[^>]*>)/g,
  '$1$2$3'.replace('target="_blank"', '')
);
html = html.replace(
  /(<a[^>]*href="#offres"[^>]*)target="_blank"([^>]*>)/g,
  '$1$2'
);

fs.writeFileSync('index.html', html);
console.log('Done');
