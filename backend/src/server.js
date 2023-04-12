const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");


// routes
const { authRouter } = require('./routes/auth')
const { adminRouter } = require('./routes/admin/auth');
const { categoryRouter } = require("./routes/category");

// environment variable
env.config();

// mongodb connection
mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.ffekmtr.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`)
    .then(() => {
        console.log("Database Connected")
    })

app.use(express.json());
app.use('/api', authRouter);
app.use('/api', adminRouter);
app.use('/api', categoryRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})