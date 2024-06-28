const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost:27017/inotebook?readPreference=primary&directConnection=true&tls=false';

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoUri, {});
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};

module.exports = connectToMongo;

// npm run dev => for nodemon index.js