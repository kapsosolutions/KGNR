import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function apiDevPlugin() {
  return {
    name: 'api-dev-server',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url.startsWith('/api')) {
          return next();
        }

        const url = new URL(req.url, `http://${req.headers.host || 'localhost:5173'}`);
        const pathname = url.pathname;

        if (!res.status) {
          res.status = function (code) {
            this.statusCode = code;
            return this;
          };
        }
        if (!res.json) {
          res.json = function (data) {
            this.setHeader('Content-Type', 'application/json');
            this.end(JSON.stringify(data));
            return this;
          };
        }

        req.query = Object.fromEntries(url.searchParams.entries());

        if (['POST', 'PUT', 'DELETE', 'PATCH'].includes(req.method)) {
          let body = '';
          req.on('data', chunk => {
            body += chunk;
          });
          req.on('end', async () => {
            try {
              req.body = body ? JSON.parse(body) : {};
            } catch (e) {
              req.body = body;
            }
            await routeRequest();
          });
        } else {
          await routeRequest();
        }

        async function routeRequest() {
          try {
            if (pathname.startsWith('/api/videos')) {
              const { default: handler } = await import('./api/videos.js');
              await handler(req, res);
            } else if (pathname.startsWith('/api/auth')) {
              const { default: handler } = await import('./api/auth.js');
              await handler(req, res);
            } else {
              res.status(404).json({ error: 'API route not found' });
            }
          } catch (err) {
            console.error('API middleware error:', err);
            if (!res.writableEnded) {
              res.status(500).json({ error: err.message });
            }
          }
        }
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    apiDevPlugin(),
    react(),
    tailwindcss(),
  ],
})
