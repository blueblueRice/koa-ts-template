import Sequelize from 'sequelize'
import db from './db'

export default db.define('index', {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  }
}, {
  timestamps: false
})
