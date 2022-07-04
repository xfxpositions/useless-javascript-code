const express = require('express')
const app = express()
const request = require('request')
const os = require('os')
require('dotenv').config()
const port = process.env.PORT || 80
	app.get("/",(req,res)=>{
	request('https://ifconfig.me/', function (error, response, body) {
  		console.error('error:', error); // Print the error if one occurred
  		console.log('statusCode:', response && response.statusCode); 
  		console.log('body:', body); 
  				res.send(`it works! client info is => ${os.arch()} ${os.platform()} ${body}  http headers => ${req.headers}`)
		
	})

});
app.listen(port,(()=>console.log('running')))
