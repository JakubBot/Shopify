import nc from 'next-connect';
import db from '@util/db';
import User from 'models/User';

const handler = nc();

handler.post(async (req) => {
  const data = req.body;
  const { userName, email, password } = req.body;
  console.log(data);
  await db.connect();
  const newUser = await new User({
    name: userName,
    email,
    password,
  });
  newUser.save();
  await db.disconnect();
});

export default handler;
