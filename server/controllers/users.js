
var mongoose = require('mongoose'),
User = mongoose.model('User');

module.exports ={
  index:function(req,res){
    console.log('User index');
    User.find({},function(err,data){
      if (err){
        console.log(err);
        res.json(err);
      }else{
        console.log(data)
        res.json(data);
      }
    })

  },
  create:function(req,res){// this is controller on the server side.
    console.log('User create');
    // console.log('REQ.body' req.body);
    User.findOne({email:req.body},function(err, data){
      if (data){
        console.log(error);
      }else {

    var user = new User({name:req.body.name, email: req.body.email,usertype:req.body.usertype, password:req.body.password});
    console.log(user);
    if (req.body.password != req.body.cpassword){
      err = "passwords do not match"
      res.json(err);
    }else{
      user.save(function(err){
          if(err){
            console.log(err);
            res.json(err);
          }else{
            res.json(user);
          }
      })

    }

}
})
},

login:function(req,res){
    console.log('login is happening!');
    User.findOne({email:req.body},function(err, data){
      if (err){
            console.log(err);
            res.json(err);
          }else{
            if (data){
                  console.log(data);
                  if (req.body.password == data.password)
                  res.json(data)
                }else{
                  console.log(err1= 'password does not exist! ');
                  res.json(err1);
                }
          }
})
}


}

//
// createbucketlist:function(req,res){
//   console.log('bucketlist create');
//   // console.log('REQ.body' req.body);
//   var bucketlist = new Bucketlist({title:req.body.newbucketlist.title, description:req.body.newbucketlist.description});
//   console.log(bucketlist);
//   Bucketlist.save(function(err){
//     if(err){
//       console.log(err);
//       res.json(err);
//     }else{
//       res.json({sucess:true});
//     }
//   })
// },
//
// show:function(req,res){
//   console.log(req.params);
//   User.findOne({_id: req.params.id}, function(err,data){
//     if (err){
//       console.log(err);
//       res.json(err);
//     }else{
//       console.log(data);
//       res.json(data);
//     }
//   })
// },
//
// update: function(req,res){
//   console.log(req.params,req.body);
//   User.findOne({_id:req.params.id}, function(err,data){
//     if (err){
//       console.log(err);
//       res.json(err);
//     }else{
//       for(var i in req.body){
//         if (req.body[i]!= data[i]){
//           data[i] = req.body[i];
//         }
//       }
//       console.log(data);
//       data.save(function(err,data){
//         if(err){
//           console.log(err);
//           res.json(err);
//         }else{
//           console.log(data);
//           res.json(data);
//         }
//       })
//     }
//   })
// },
//
// destroy:function(req,res){
//   console.log(req.params.id)
//   User.findOne({_id: req.params.id}, function(err,data){
//     if (err){
//       console.log(err);
//       res.json(err);
//     }else{
//       User.remove(data,function(err){
//         if(err){
//           console.log(err);
//           res.json(err);
//         }else{
//           console.log('deleted');
//           res.json({sucess:true});
//         }
//       })
//     }
//   })
// }
// }
