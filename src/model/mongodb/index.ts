import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  uid: Number
})

export default mongoose.model('Index', schema)
