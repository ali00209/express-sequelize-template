import User from './user/user.js'

const models = {
  User,
}

Object.keys(models).forEach((model) => {
  if (model.associate) {
    model.associate(model)
  }
})

export default models
