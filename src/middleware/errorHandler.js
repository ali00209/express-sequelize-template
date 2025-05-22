import config from '../config/config.js'

const errorHandler = (err, req, res, next) => {
  const status = err.status || 500
  const message = err.message || 'Server Error'
  const stack = config.env === 'development' ? err.stack : undefined
  console.log('message', message)
  console.log('stack', err.stack)
  res.status(status).json({ status, message, stack })
}

export default errorHandler
