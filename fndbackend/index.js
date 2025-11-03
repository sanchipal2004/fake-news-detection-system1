import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import {spawn} from 'child_process'
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.post('/api/analyze', (req, res) => {
  const {newstext} = req.body
  if(!newstext){
    return res.status(400).json({error:"text is not entered"})
  }
 const python =spawn("python",["predict.py",newstext]);

 let score ="";
 python.stdout.on("data",(data)=>{
  score += data.toString();
 });

 python.stderr.on("data",(data)=>{
  console.error("python error:", data.toString())
 })

 python.on("close",(code)=>{
  try{
    const output= JSON.parse(score);
    res.json(output);
  }catch(err){
    res.status(500).json({error:"model output error"})
  }
 })
})

app.listen(3000,()=> console.log("server running on http://localhost:3000"));