const express = require('express')
const router = express.Router();

router.get('/user', (req, res) => res.send('Hello World! User -GET'))
router.post('/user', (req, res) => res.send('Hello World! User -POST'))

module.exports = router;