const Article = require('../models/articles')
const User = require('../models/users')

class ArticleController{
  static findOne (req, res) {
    Article.findOne({'author': req.params.idAuthor})
      .then(data=>{
        res.status(200).send({message: "data has found", data: data})
      })
      .catch(error=>{
        res.status(500).send({message: "data not found", error: error})
      })
  }
  static create (req, res) {
    let data = {
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      author: req.body.author
    }
    Article.create(data)
      .then(data=>{
        console.log(data._id)
        User.update({'_id': data.author}, {$push: {ArticleList: data._id}})
          .then(dataUser=>{
            res.status(200).send({message: "data has been created", data: data, dataUser: dataUser})
          })
          .catch(error=>{
            res.status(500).send({message: 'data ga masuk ke user', error: error})
          })
      })
      .catch(error=>{
        res.status(500).send({message: "data not created", error: error})
      })
  }

  static update (req, res){
    Article.findOne({'_id': req.params.idArticle})
      .then(dataOne=>{
        let data = {
          title: req.body.title || dataOne.title,
          content: req.body.content || dataOne.content,
          category: req.body.category || dataOne.category,
          author: req.body.author || dataOne.author
        }

        Article.update({'_id': req.params.idArticle}, data)
          .then(data=>{
            res.status(200).send({message: "data has been updated", data: data})
          })
          .catch(error=>{
            res.status(500).send({message: 'data failed to updated', error: error})
          })
      })
      .catch(error=>{
        res.status(500).send({message: "data not found article", error: error})
      })
  }
  static findAuthor(req, res){
    Article.find({'author': req.params.idAuthor})
      .then(data=>{
        res.status(200).send({message: "data has been found", data: data})
      })
      .catch(error=>{
        res.status(500).send({message: "data not found", error: error})
      })
  }
  static findCategory(req, res){
    Article.find({'category': req.params.category})
      .then(data=>{
        res.status(200).send({message: "data has been found", data: data})
      })
      .catch(error=>{
        res.status(404).send({message: "data not found", error: error})
      })
  }
  static remove(req, res){
    Article.remove({'_id': req.params._id})
      .then(data=>{
        res.status(200).send({message: 'data has been deleted', data: data})
      })
      .catch(error=>{
        res.status(500).send({message: 'data not deleted', error: error})
      })
  }
}

module.exports = ArticleController