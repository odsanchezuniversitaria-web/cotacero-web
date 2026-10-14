const fs=require('node:fs');
const zlib=require('node:zlib');
const crypto=require('node:crypto');
for(const item of JSON.parse(fs.readFileSync('payload/manifest.json','utf8'))){
 const compressed=Buffer.concat(item.parts.map(p=>fs.readFileSync('payload/'+p)));
 if(crypto.createHash('sha256').update(compressed).digest('hex')!==item.sha256)throw new Error('Checksum: '+item.target);
 fs.writeFileSync('site/'+item.target,zlib.brotliDecompressSync(compressed));
 console.log(item.target,fs.statSync('site/'+item.target).size);
}
