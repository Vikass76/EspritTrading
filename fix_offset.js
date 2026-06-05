const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Remplacer id="offres" sur la pricing-grid par une section parente avec scroll-margin
html = html.replace(
  'id="offres" class="pricing-grid"',
  'class="pricing-grid"'
);

// Ajouter l'ancre avec offset juste avant la section offres
html = html.replace(
  '<div class="pricing-grid"',
  '<div id="offres" style="scroll-margin-top:80px"></div><div class="pricing-grid"'
);

fs.writeFileSync('index.html', html);
console.log('Done');
