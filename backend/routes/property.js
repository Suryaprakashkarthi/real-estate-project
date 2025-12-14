const router = require('express').Router();
const Property = require('../models/Property');


router.post('/', async (req, res) => {
const property = new Property(req.body);
await property.save();
res.json(property);
});


router.get('/', async (req, res) => {
res.json(await Property.find());
});


module.exports = router;