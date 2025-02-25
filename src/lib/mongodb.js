import mongoose from 'mongoose';

const MONGODB_URI =
  'mongodb+srv://ashishvason:mongodb@namastenode.mmrhz.mongodb.net/cskShares';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log('Connected to MongoDB');
};

export default connectDB;
