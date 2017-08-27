//require the express nodejs module
var express = require('express'),
	//set an instance of exress
	
    app = express(),
	//require the body-parser nodejs module
	bodyParser = require('body-parser'),
	//require the path nodejs module
	path = require("path"),
	fs = require("fs");

'use strict';

var os = require('os');
var ifaces = os.networkInterfaces();

app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true })); 

//tell express that www is the root of our public web folder
app.use(express.static(path.join(__dirname, 'www')));
app.use(express.static(path.join(__dirname, '/../')));
//tell express what to do when the /form route is requested
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.post('/form',function(req, res){
    
 
    
    
	res.setHeader('Content-Type', 'text/plain');

	var chunk = '';

    req.on('data', function(data){
        chunk += data; // here you get your raw data.
    })        

    req.on('end', function(){

        //console.log(chunk); //just show in console
        fs.writeFile("../config.js", chunk, 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 

    })
    res.send("The file was updated!");
	//debugging output for the terminal
});

//wait for a connection
app.listen(3000, function () {
	   Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0;

  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }

    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
      //console.log(ifname + ':' + alias, iface.address);
    } else {
      // this interface has only one ipv4 adress
      console.log('Gunfigurator is running. Point your browser to: http://'+iface.address+':3000');
    }
    ++alias;
  })
})
  //console.log('Gunfigurator is running. Point your browser to: http://localhost:3000');
});
