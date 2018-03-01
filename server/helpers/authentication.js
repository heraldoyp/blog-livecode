var jwt = require('jsonwebtoken');

function authentication(req, res, next){
  jwt.verify(req.headers.token, 'heraldoyp', function(err, decoded) {
    if(!err){
      console.log("login success", decoded)
      next()
    }else{
      res.send({message:"authentication failed", error: err})
    }
  });
}

module.exports = authentication