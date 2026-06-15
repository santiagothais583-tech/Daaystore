// Gera dados/produtos-index.json listando os arquivos da pasta dados/produtos.
// Roda automaticamente no build do Cloudflare Pages a cada deploy.
const fs = require('fs');
const dir = 'dados/produtos';
let arquivos = [];
try {
  arquivos = fs.readdirSync(dir).filter(f => f.endsWith('.json')).sort();
} catch (e) {
  console.error('pasta de produtos não encontrada:', e.message);
}
fs.writeFileSync('dados/produtos-index.json', JSON.stringify({ arquivos }, null, 2));
console.log('Índice gerado com', arquivos.length, 'produtos.');
