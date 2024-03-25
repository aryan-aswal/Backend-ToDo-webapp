// cofig file is used to connect to the database

//import mongoose
const mongoose = require('mongoose');

// to load the process object with all the data in .env file
require('dotenv').config();

const dbConnect = () => {
    mongoose.connect(
        process.env.DATABASE_URL
    ).then(()=>{
        console.log("DB connection is successfull");
    }).catch((err)=>{
        console.log("DB connection is unsuccessfull");
        console.log(err.message);
        process.exit(1); // what does this means
    })
}
module.exports = {
    dbConnect
};