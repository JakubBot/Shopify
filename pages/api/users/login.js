import nc from 'next-connect';
import db from '@util/db';
import User from 'models/User';
import bcrypt from 'bcryptjs/dist/bcrypt';

const handler = nc();

handler.post(async (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  console.log(password);
  await db.connect();
  const user = await User.findOne({ email });
  await db.disconnect();
  if (user && bcrypt.compareSync(password, user.password)) {
    res.send(user);
  } else {
    res.status(401).send({ message: 'Invalid email or password' });
  }
});

export default handler;
