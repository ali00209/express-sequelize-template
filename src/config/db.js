import { Sequelize } from 'sequelize'
import config from './config.js'

const sequelize = new Sequelize(config.mySqlUri, {
  logging: false,
  dialect: 'mysql',
})

export const conectDB = async () => {
  try {
    await sequelize.authenticate()
    console.log('Database Connected...')
    // await sequelize.sync({ force: true })
  } catch (error) {
    console.log('Database Connection Failed', error)
  }
}
export default sequelize
