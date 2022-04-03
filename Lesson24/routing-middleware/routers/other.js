const express = require('express')
const router = express.Router();


// app.get('/', (req, res) => res.send('Hello World!'))
router.get('/', (req, res) => res.render('index.pug'))
//?
router.get('/ab?out', (req, res) => res.send('Hello World from About Page!'))
router.get('/co(nt)?act', (req, res) => res.send('Hello World from Contact Page!'))
router.get('/u?se?r', (req, res) => res.send('Hello World from User Page!'))

//* ANY TEXT
router.get('/cont*act2', (req, res) => res.send('Hello World from Contact-2 Page!'))

// +
router.get('/contac+t3', (req, res) => res.send('Hello World from Contact-3 Page!'))


// GET/POST/PUT/DELETE
/*app.get('/helping', (req, res) => res.send('Hello World from Helping Page! (GET)'))
app.post('/helping', (req, res) => res.send('Hello World from Helping Page!(POST)'))
app.put('/helping', (req, res) => res.send('Hello World from Helping Page!(PUT)'))
app.delete('/helping', (req, res) => res.send('Hello World from Helping Page!(DELETE)'))*/

// GET/POST/PUT/DELETE
router.get('/helping', (req, res) => res.send('Hello World from Helping Page! (GET)'))
.post('/helping', (req, res) => res.send('Hello World from Helping Page!(POST)'))
.put('/helping', (req, res) => res.send('Hello World from Helping Page!(PUT)'))
.delete('/helping', (req, res) => res.send('Hello World from Helping Page!(DELETE)'))

// ALL method
// GET/POST/PUT/DELETE
router.all('/info', (req, res) => res.send('Hello World from Helping Page! (ALL)'))

//Send params with GET
router.get('/image/:imageId/:userId?', 
(req, res) => {console.log(req.params);
res.end('Image Id:'+req.params.imageId)})

module.exports = router


