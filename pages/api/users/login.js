import nc from 'next-connect';
import db from '@util/db';
import User from 'models/User';
import bcrypt from 'bcryptjs';
import { signToken } from '@util/auth';

const handler = nc();

handler.post(async (req, res) => {
  const { email, password } = req.body;
  await db.connect();
  const user = await User.findOne({ email });
  await db.disconnect();
  if (user && bcrypt.compareSync(password, user.password)) {
    const token = signToken(user);

    res.send({
      token,
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401).send({ message: 'Invalid email or password' });
  }
});

export default handler;
