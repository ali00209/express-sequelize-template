import sequelize from '../../config/db.js'
import { DataTypes } from 'sequelize'

const User = sequelize.define(
  'User',
  {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  { tableName: 'users', timestamps: true }
)

User.associate = (models) => {
  // User.hasMany(models.Role, { foreignKey: 'userId' })
}

export default User
