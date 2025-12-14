const express = require('express');
const cors = require('cors');


const adminRoutes = require('./routes/admin');
const propertyRoutes = require('./routes/property');
const bookingRoutes = require('./routes/booking');


const app = express();
app.use(cors());
app.use(express.json());


const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://admin:surya211105@realestate-cluster.icauomd.mongodb.net/realestate?retryWrites=true&w=majority'
)
.then(() => console.log('MongoDB Atlas Connected'))
.catch(err => console.error('MongoDB connection error:', err));



app.use('/admin', adminRoutes);
app.use('/properties', propertyRoutes);
app.use('/book', bookingRoutes);


app.listen(5000, () => console.log('Backend running on port 5000'));