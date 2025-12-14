const mongoose = require('mongoose');
const BookingSchema = new mongoose.Schema({
propertyId: String,
name: String,
phone: String,
email: String,
date: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Booking', BookingSchema);