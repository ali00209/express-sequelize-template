import app from './src/app.js'
import config from './src/config/config.js'
import { conectDB } from './src/config/db.js'

const port = config.port

;(async () => {
  await conectDB()
  app.listen(port, () => console.log(`listening on http://localhost:${port}`))
})()
