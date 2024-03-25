const express = require('express');
const router = require('./routes/routes');
const { dbConnect } = require('./config/database')

const app = express();

require('dotenv').config();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/api/v1', router);

app.listen(PORT , ()=>{
    console.log("Server Started");
});

dbConnect();