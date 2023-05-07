const express = require('express');
const { User } = require('../models');

const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: 'Signup failed' });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (user && user.password === password) {
            res.json(user);
        } else {
            res.status(401).json({ message: 'Login failed' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;