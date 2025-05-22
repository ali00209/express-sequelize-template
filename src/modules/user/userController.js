import createError from 'throw-http-error'
import models from '../index.js'

export const create = async (req, res, next) => {
  try {
    const { name, password } = req.body
    const user = await models.User.create({ name, password })
    res.status(201).json(user)
  } catch (error) {
    next(error)
  }
}

export const getAll = async (req, res, next) => {
  try {
    const user = await models.User.findAll()
    if (user.length === 0) return createError(404, 'no user found')
    res.status(200).json(user)
  } catch (error) {
    next(error)
  }
}

export const getById = async (req, res, next) => {
  try {
    const { id } = req.params
    const user = await models.User.findOne({ where: { id } })
    if (!user) return createError(404, 'user not found')
    res.status(200).json(user)
  } catch (error) {
    next(error)
  }
}

export const updateById = async (req, res, next) => {
  try {
    const { id } = req.params
    const { name, password } = req.body
    const user = await models.User.findOne({ where: { id } })
    if (!user) return createError(404, 'user not found')
    if (name) user.name = name
    if (password) user.password = password
    const updatedUser = await user.save()
    res.status(200).json(updatedUser)
  } catch (error) {
    next(error)
  }
}

export const deleteById = async (req, res, next) => {
  try {
    const { id } = req.params
    const user = await models.User.findOne({ where: { id } })
    if (!user) return createError(404, 'user not found')
    user.destroy()
    res.status(200).json('user deleted')
  } catch (error) {
    next(error)
  }
}
