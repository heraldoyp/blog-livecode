var express = require('express');
var router = express.Router();
const User = require('../controllers/users')
const Article = require('../controllers/articles')
const authentication = require('../helpers/authentication')
/* GET home page. */
// router.get('/', function(req, res, next) {
//   // res.render('index', { title: 'Express' });
//   res.send({message: 'ini dari get'})
// });
router.get('/users', User.findAll)
router.post('/users', User.register)
router.post('/users/:idUser', User.signIn)

router.get('/articles/:idArticle', Article.findOne)
router.post('/articles', Article.create)
router.put('/articles/:idArticle', Article.update)
router.get('/articles/:idAuthor', Article.findAuthor)
router.get('/articles/category/:category', Article.findCategory)
router.delete('/articles/:idAuthor', Article.remove)

module.exports = router;
