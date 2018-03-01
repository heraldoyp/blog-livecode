const User = require('../models/users')
var jwt = require('jsonwebtoken');
require('dotenv').config()

class UserController{
  static findAll(req, res) {
    User.find()
      .then(data=>{
        res.status(200).send({message: "data has been found", data: data})
      })
      .catch(error=>{
        res.status(500).send({message:"data not found", error: error})
      })
  }

  static register (req, res) {
    let data = {
      username: req.body.username,
      password: req.body.password,
      ArticleList: [],
    }
    User.create(data)
      .then(data=>{
        res.status(200).send({message: 'data has been created', data: data})
      })
      .catch(error=>{
        res.status(500).send({message: 'data cant be created', error: error})
      })
  }

  static signIn (req, res){
    User.findOne({'username': req.body.username})
      .then(data=>{
        if(data){
          jwt.sign({data: data}, 'heraldoyp', function(err, token){
            res.status(200).send({message: 'signedIn', data: data, token: token})
          })
        }else{
          res.status(404).send({message: "not found", data: data})
        }
        
      })
      .catch(error=>{
        res.status(500).send({message: 'signin error', error: error})
      })
  }
  
}

module.exports = UserController