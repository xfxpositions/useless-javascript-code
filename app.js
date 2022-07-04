const express = require('express')
const app = express()

const os = require('os')

app.get("/",(req,res)=>{
	res.send(`it works ${os.arch()} ${os.platform()}`)
})

app.listen(80,(()=>console.log('running')))
