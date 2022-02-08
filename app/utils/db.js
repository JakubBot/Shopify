import mongoose from 'mongoose';

let connection = {};

async function connect() {
  console.log(mongoose.connection.length);
  if (connection.isConnected) {
    return;
  }
  
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      return;
    }
    await mongoose.disconnect();
  }

  const db = await mongoose.connect(process.env.MONGODB_URI);

  connection.isConnected = db.connections[0].readyState;
}

async function disconnect() {
  if (process.env.NODE_ENV === 'production' && connection.isConnected) {
    await mongoose.disconnect();
    connection.isConnected = false;
  }
}

const db = { connect, disconnect };
export default db;
