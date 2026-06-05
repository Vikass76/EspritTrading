const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Ajouter un ID sur la section pricing
html = html.replace(
  '<div class="pricing-grid"',
  '<div id="offres" class="pricing-grid"'
);

// Tous les boutons "appel" pointent vers #offres
html = html.replace(/href="https:\/\/cal\.com[^"]*"/g, 'href="#offres"');
html = html.replace(/href="https:\/\/calendly[^"]*"/g, 'href="#offres"');

fs.writeFileSync('index.html', html);
console.log('Done:', html.includes('id="offres"'));
