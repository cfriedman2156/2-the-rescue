import mongoose from 'mongoose';

mongoose.set('debug', true);

const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/2therescueDB';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Successfully connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });

export default mongoose.connection;
