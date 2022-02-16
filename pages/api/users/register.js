import nc from 'next-connect';
import db from '@util/db';
import User from 'models/User';
import bcrypt from 'bcryptjs/dist/bcrypt';

const handler = nc();

handler.post(async (req,res) => {
  const { name, email, password } = req.body;
  await db.connect();
  const newUser = await new User({
    name,
    email,
    password: bcrypt.hashSync(password),
  });
  newUser.save();
  await db.disconnect();


  // zwaracnie user z json token
  res.send({ mes: 'sa' });
});

export default handler;
