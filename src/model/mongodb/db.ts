import mongoose from 'mongoose'
import uri from '../../../config/mongo-config'
mongoose.Promise = global.Promise

const options = {
  useNewUrlParser: true,
  auth: { authdb: "admin" },
  authSource: 'admin'
}
mongoose.connect(uri, options)

const db = mongoose.connection

export default db
