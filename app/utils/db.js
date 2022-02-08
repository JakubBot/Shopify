import mongoose from 'mongoose';

let connection = {};

async function connect() {
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

function convertToObj(doc) {
  doc._id = doc._id.toString();
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();

  return doc;
}

const db = { connect, disconnect, convertToObj };
export default db;
