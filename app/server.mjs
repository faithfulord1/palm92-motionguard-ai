import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('./public/', import.meta.url));
const port = Number(process.env.PORT || 3000);
const types = { '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.json':'application/json; charset=utf-8', '.svg':'image/svg+xml' };

http.createServer(async (req, res) => {
  try {
    const rawPath = decodeURIComponent((req.url || '/').split('?')[0]);
    const requestPath = rawPath === '/' ? 'index.html' : rawPath.replace(/^\/+/, '');
    const safePath = normalize(requestPath).replace(/^(\.\.[/\\])+/, '');
    const file = join(root, safePath);
    if (!file.startsWith(root)) throw new Error('Invalid path');
    const body = await readFile(file);
    res.writeHead(200, { 'content-type': types[extname(file)] || 'application/octet-stream', 'cache-control':'no-store' });
    res.end(body);
  } catch {
    try {
      const body = await readFile(join(root, 'index.html'));
      res.writeHead(200, { 'content-type':'text/html; charset=utf-8', 'cache-control':'no-store' });
      res.end(body);
    } catch {
      res.writeHead(404); res.end('Not found');
    }
  }
}).listen(port, '0.0.0.0', () => console.log(`Palm92 MotionGuard AI running on port ${port}`));
