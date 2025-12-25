import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 5173
  },
  preview: {
    port: 5173
  },
  plugins: [
    {
      name: 'mock-rsvp-api',
      configureServer(server) {
        server.middlewares.use('/api/rsvp', async (req, res, next) => {
          if (req.method !== 'POST') return next()
          let body = ''
          req.on('data', (chunk) => {
            body += chunk
          })
          req.on('end', () => {
            try {
              const data = JSON.parse(body || '{}')
              console.log('RSVP received:', data)
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ ok: true }))
            } catch (e) {
              res.statusCode = 400
              res.end(JSON.stringify({ ok: false, error: 'Invalid JSON' }))
            }
          })
        })
      },
      configurePreviewServer(server) {
        server.middlewares.use('/api/rsvp', async (req, res, next) => {
          if (req.method !== 'POST') return next()
          let body = ''
          req.on('data', (chunk) => {
            body += chunk
          })
          req.on('end', () => {
            try {
              const data = JSON.parse(body || '{}')
              console.log('RSVP received (preview):', data)
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ ok: true }))
            } catch (e) {
              res.statusCode = 400
              res.end(JSON.stringify({ ok: false, error: 'Invalid JSON' }))
            }
          })
        })
      }
    }
  ]
})
