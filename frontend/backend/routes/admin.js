const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin');


router.post('/login', async (req, res) => {
const admin = await Admin.findOne({ username: req.body.username });
if (!admin) return res.status(401).json({ msg: 'Invalid credentials' });


const valid = bcrypt.compareSync(req.body.password, admin.password);
if (!valid) return res.status(401).json({ msg: 'Invalid credentials' });


const token = jwt.sign({ id: admin._id }, 'SECRET', { expiresIn: '1d' });
res.json({ token });
});


module.exports = router;