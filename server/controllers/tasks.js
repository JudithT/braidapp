var mongoose = require('mongoose'),

Task = mongoose.model('Task');
module.exports ={

create:function(req,res){// this is controller on the server side.
  console.log('Task create');
  // console.log('REQ.body' req.body);
  // User.find({},function(err, data){
  //   if (data){
  //     console.log(error);
  //   }else {

  var task = new Task({title:req.body.title, description: req.body.description, detail:req.body.detail});
  console.log(task);
  // if (req.body.password != req.body.cpassword){
  //   err = "passwords do not match"
  //   res.json(err);
  // }else{
    task.save(function(err){
        if(err){
          console.log(err);
          res.json(err);
        }else{
          res.json(task);
        }
    })

  // }

// }
// })
},

getTask:function(req,res){

  Task.find({}, function(err, tasks) {

    if(err){
      console.log(err);
      res.json(err);
    }else{
      res.json(tasks);
    }
  //  // Retrieve an array of tasks
  //  // This code will run when the DB is done attempting to retrieve all matching records to {}
  })


}
}
