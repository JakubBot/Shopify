import nc from 'next-connect';
import db from '@util/db';
import User from 'models/User';
import bcrypt from 'bcryptjs/dist/bcrypt';
import { signToken } from '@util/auth';

const handler = nc();

handler.post(async (req, res) => {
  const { name, email, password } = req.body;
  await db.connect();

  const newUser = await new User({
    name,
    email,
    password: bcrypt.hashSync(password),
  });
  try {
    await newUser.save();
  } catch (e) {
    res.status(401).send({ message: 'Email address already exists' });
  }

  await db.disconnect();

  const token = signToken(newUser);
  // zwaracnie user z json token
  res.send({
    token,
    name,
    email,
  });
});

export default handler;
