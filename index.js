const express = require("express");
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const feedbackRoutes = require('./routes/feedbackRoutes')
const customerRoutes = require('./routes/customerRoutes')
const lowRateFeedback = require('./routes/lowRateFeedback')
const cors = require('cors')

const app = express();
const port = process.env.PORT || 5000;
app.use(cors())


// Connect to MongoDB
mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use('/feedback', feedbackRoutes);
app.use('/customer', customerRoutes);
app.use('/lowrate', lowRateFeedback);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})   

