import mongoose from 'mongoose';

let isConnected = false;

export const connectDB = async () => {
    let url = process.env.MONGODB;
    if (!url)
        return console.log("MongoDb URL Not provided");
    if (isConnected)
        return;
    try {
        await mongoose.connect(url);
        isConnected = true;
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
    }
};