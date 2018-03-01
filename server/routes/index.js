var express = require('express');
var router = express.Router();
const User = require('../controllers/users')
const authentication = require('../helpers/authentication')
/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send({message: 'ini dari get'})
});
router.get('/users', authentication, User.findAll)
router.post('/users', User.register)
router.post('/users/:idUser', User.signIn)

module.exports = router;
