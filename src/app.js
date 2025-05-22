import express from 'express'
import morgan from 'morgan'
import env from './config/env.js'
import errorHandler from './middleware/errorHandler.js'
import notFound from './middleware/notFound.js'

const app = express()

app
  .disable('x-powered-by')
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(morgan('dev'))

app.get('/health', (req, res, next) => {
  res.status(200).json({ ok: true, env: env.env })
})

app.use(notFound)
app.use(errorHandler)
export default app
