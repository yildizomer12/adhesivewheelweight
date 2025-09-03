const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const compression = require('compression');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => {
    // Apply compression to all responses
    compression()(req, res, () => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    });
  });

  const port = process.env.PORT || 3000;
  
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Server ready on http://localhost:${port}`);
  });
});
