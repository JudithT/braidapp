// var mongoose = require( 'mongoose' );
var express = require('express');

var app  = express();
    path = require( 'path' );
    // root = __dirname,
    port = process.env.PORT || 8000,
//require a mongoose.js file from./server/config
    bp   = require('body-parser');//require body-parser
// static content
// setting up ejs and our views folder
// require the mongoose configuration file which does the rest for us
app.use( express.static( path.join( __dirname, './client' )));// be able to serve ./client
app.use( express.static( path.join( __dirname, './bower_components' )));//be able to serve ./bower
app.use(bp.json())
require('./server/config/mongoose.js');

require("./server/config/routes.js")(app);
// invoke the function stored in routes_setter and pass it the "app" variable


app.listen( 8000, function() {
  console.log('server running on port 8000')
  // console.log( `server running on port ${ port }` );//listen to a port of your choosing
});

// var mongoose = require( 'mongoose' ),
//     express  = require( 'express' ),
//     bp       = require('body-parser'),
//     path     = require( 'path' ),
//     root     = __dirname,
//     port     = process.env.PORT || 8000,
//     app      = express();
// app.use( express.static( path.join( root, 'client' )));
// app.use( express.static( path.join( root, 'bower_components' )));
// app.use(bp.json())
// app.listen( port, function() {
//   // console.log( `server running on port ${ port }` );
// });
