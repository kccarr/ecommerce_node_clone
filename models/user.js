var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

// The user schema attributes, characteristics, fields

var userSchema = new mongoose.Schema({
  email: {type: String, unique: true, lowercase: true},
  password: String,


  profile: {
    name: {type: String, default: ''},
    picture: {type: String, default: ''}
  }
})




// Hash the password before we even save it to the database



// compare password in the database and the one that the user type i
