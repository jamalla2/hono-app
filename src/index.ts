import { Hono } from 'hono'

const app = new Hono()

// app.use('*', logger());

app.get('/', (c) => c.text('Hello Hono!'))

// app.get('/test', (c) => c.text('Test'))

export default app
