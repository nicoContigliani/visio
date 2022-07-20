const express = require('express');
const router = express.Router();


const auth = require('./authController');


router.get('/', auth.gets);
//  router.get('/sigin', user.sigin);
router.post('/register', auth.register);
router.post('/login', auth.login);
router.get('/login', auth.gets);

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('rutausuario');
// });


module.exports = router;