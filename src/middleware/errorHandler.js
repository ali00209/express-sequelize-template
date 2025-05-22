import env from '../config/env.js'

const errorHandler = (err, req, res, next) => {
  const status = err.status
  const message = err.message
  const stack = env.env === 'development' ? err.stack : undefined
  res.status(status).json({ status, message, stack })
}

export default errorHandler
