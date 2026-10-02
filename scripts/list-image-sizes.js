const fs = require('fs');

const files = fs.readdirSync('public/images').filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
console.log('Total images in public/images:', files.length);

// Let's print out all files with size
files.sort().forEach(f => {
  const stat = fs.statSync('public/images/' + f);
  console.log(`${f.padEnd(35)} : ${stat.size} bytes`);
});
