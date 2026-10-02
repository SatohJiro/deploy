const fs = require('fs');
const content = fs.readFileSync('src/data/menuData.ts', 'utf8');

// Split by item blocks
const blocks = content.split(/\{\s*id:\s*"/g).slice(1);
const items = [];

for (const b of blocks) {
  const idMatch = b.match(/^([^"]+)"/);
  const nameMatch = b.match(/name:\s*"([^"]+)"/);
  const catMatch = b.match(/category:\s*"([^"]+)"/);
  const imgMatch = b.match(/image:\s*([^\n,]+)/);

  if (idMatch && nameMatch && catMatch) {
    items.push({
      id: idMatch[1],
      name: nameMatch[1],
      cat: catMatch[1],
      image: imgMatch ? imgMatch[1].trim().replace(/^"|"$/g, '') : 'undefined'
    });
  }
}

console.log(`Parsed ${items.length} items.\n`);
items.forEach((it, idx) => {
  console.log(`${idx + 1}. [${it.cat}] ${it.name} (${it.id}) => ${it.image}`);
});
