console.log('User model');
console.log('Braider model');
console.log('Task model');


var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
  usertype: {type:String, required:true},
  name: {type:String, required:true},
  location:{type:String},

  phone: {type:Number},
  address:{ type: String},
  braiders: [{type: Boolean, ref: 'braiders'}],
  task: [{type: Schema.Types.ObjectId, ref: 'task'}],
  password:{type:String, required:true},
  email:{type:String, required:true},


},{timestamps:true});

var User = mongoose.model('User',UserSchema)

// var BraiderSchema = new mongoose.Schema({
//   name: {type:String, required:true},
//   phone number:{type:Number, required:true},
//   address:{ type: String, required:true},
//   users: [{type: Schema.Types.ObjectId, ref: 'braiders'}],
//
//   tasks: [{type: Schema.Types.ObjectId, ref: 'tasks'}],
//
// },{timestamps:true});

// var TaskSchema = mongoose.model('Task',TaskSchema)

var TaskSchema = new mongoose.Schema({
  title: {type:String},
  description:{type:String},
  hairstyle:{type:String},
  location:{type:String},
  date:{type:Date},
  time:{type:Number},
  detail:{type:String},
  wtravel:{type:Number},
   braidee:{type:Schema.Types.ObjectId},
  _braider:{type:Schema.Types.ObjectId},

},{timestamps:true});

var Task = mongoose.model('Task',TaskSchema)
