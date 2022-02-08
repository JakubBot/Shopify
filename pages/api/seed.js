import nc from 'next-connect'
import Product from 'models/Product'
import db from '@util/db'
import data from 'utils/data'

const handler = nc()

handler.get(async(req,res) => {
  await db.connect()
  await Product.deleteMany()
  await Product.insertMany(data.newProducts)
  await db.disconnect()

  return res.send({message: 'seeded'})

})

export default handler