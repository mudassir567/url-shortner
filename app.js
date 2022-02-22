const express = require('express')
const urlmodel=require('./model/url')
const cors=require('cors')
require("./db");
const port = 7000 || process.env.PORT


const app= express()
//body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', async(req,res)=>{
  console.log("getting data from the db ")
    try{    
      const allurls = await urlmodel.find({});
      res.status(200).json(allurls)
    }
    catch (error){
      res.status(404).json({message:error.message})
  
    }
  })

app.post('/url',async (req,res)=>{
  const full=req.body.fullurl 
  console.log(full)

  const newurl= new urlmodel({
    full:full
  })
  console.log(newurl)
  try{
    let obj =await newurl.save()
    res.status(201).json(obj)
    console.log(obj)
  }
  catch(error){
    res.status(409).json({message:error.message})
  }  
});

console.log("hello")
app.get("/:shortUrl", async (req, res) => {
  console.log("yeah finally")

  const shortUrl = await urlmodel.findOne({ short: req.params.shortUrl });
  if (shortUrl === null) return res.status(404).json({ message: 'URL not found!!' });

  shortUrl.count++;
  await shortUrl.save();
res.redirect(shortUrl.full);
});



app.listen(port,()=>{
console.log('listening on 7000')
})