const fs = require('fs');
const crypto = require('crypto');

const files = fs.readdirSync('public/images').filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
const hashCount = {};

const list = files.map(name => {
  const buf = fs.readFileSync('public/images/' + name);
  const hash = crypto.createHash('md5').update(buf).digest('hex');
  hashCount[hash] = (hashCount[hash] || 0) + 1;
  return {
    name,
    size: buf.length,
    hash
  };
});

list.forEach(item => {
  item.dup = hashCount[item.hash] > 1;
});

fs.writeFileSync('public/images-list.json', JSON.stringify(list, null, 2));
console.log('Saved public/images-list.json with', list.length, 'items');
