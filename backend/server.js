const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4444;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

app.use('/api', require('./routes/contactus'));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
