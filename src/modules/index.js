import User from './user/user.js'

const models = {
  User,
}

Object.keys(models).forEach((model) => {
  if (models[model].associate) {
    models[model].associate(models)
  }
})

export default models
