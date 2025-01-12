const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const movieRoutes = require('./routes/movieRoutes');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', movieRoutes);

const PORT = process.env.PORT || 4002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
