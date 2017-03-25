var users = require('../controllers/users.js');
var tasks = require('../controllers/tasks.js');

console.log('am i running?');

module.exports = function (myApp) {
  myApp.get('/', function(req,res){
    users.index(req,res);
  })

  myApp.post('/', function(req,res){
    users.index(req,res);
  })

  myApp.post('/login', function(req,res){
    console.log("login route");

  })


  myApp.post('/register', function(req,res){
    console.log("register route");
    users.create(req,res);
  })

  myApp.post('/tasks', function(req,res){
    console.log("tasks route");
    tasks.create(req,res);
  })

  myApp.get('/tasks', function(req,res){
    console.log("tasks route");
    tasks.getTask(req,res);
  })


}
