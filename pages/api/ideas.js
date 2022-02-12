import nc from 'next-connect'
import Idea from 'models/Ideas'
import db from '@util/db'
const handler = nc()

handler.post(async (req,res) => {
  const data = req.body
  await db.connect();
  const idea = await new Idea(data)
  idea.save()
  await db.disconnect()


  res.send(idea);
})

export default handler