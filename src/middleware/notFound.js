const notFound = (req, res, next) => {
  if (
    req.get('User-Agent').split('/')[0] === 'insomnia' ||
    req.get('User-Agent').split('/')[0] === 'postman'
  ) {
    return res.status(404).json({
      status: 404,
      message: `${req.method} ${req.originalUrl} Not Found`,
    })
  }
  res.status(404).send(`<h1>${req.method} ${req.originalUrl} Not Found</h1>`)
}

export default notFound
