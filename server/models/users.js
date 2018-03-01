var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: String,
  password: String,
  ArticleList: [{type: Schema.Types.ObjectId, ref: 'Article'}]
});

var User = mongoose.model('User', userSchema);

module.exports = User