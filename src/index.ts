import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { serveStatic } from '@hono/node-server/serve-static'
import { logger } from 'hono/logger'

const app = new Hono()

app.use(logger())

app.use("/mics2.png", serveStatic({ path: './static/mics2.png' }))
app.use("/image.jpeg", serveStatic({ path: './static/image.jpeg' }))
app.use("/static/*", serveStatic({ root: './' }))

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

serve({
  fetch: app.fetch,
  port: 80
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
