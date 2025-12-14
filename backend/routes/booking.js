const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');


router.post('/', async (req, res) => {
const booking = new Booking(req.body);
await booking.save();
res.json({ message: 'Booked Successfully' });
});


router.get('/all', async (req, res) => {
res.json(await Booking.find());
});


module.exports = router;