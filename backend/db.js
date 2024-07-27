const mongoose = require('mongoose');
const mongoUri = process.env.MONGO_URI;

const connectToMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {});
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};

module.exports = connectToMongo;

// npm run dev => for nodemon index.js