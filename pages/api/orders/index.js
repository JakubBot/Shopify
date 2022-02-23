import Order from 'models/Order';
import db from '@util/db';
import nc from 'next-connect';
import { isAuth } from '@util/auth';

const handler = nc();

handler.use(isAuth);
handler.post(async (req) => {
  const orderDetails = req.body;

  await db.connect();
  const order = await new Order({
    ...orderDetails,
    userId: req.user._id,
  });
  order.save();
  await db.disconnect();
});

export default handler;
