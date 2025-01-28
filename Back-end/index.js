const port = 4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { error } = require('console');
const { type } = require('os');

app.use(express.json());
app.use(cors());


// Database Connection With MongoDB
mongoose.connect("mongodb+srv://subaganesh:Ganesh126@cluster0.pd9ot.mongodb.net/");


//API Creation

app.get("/",(req,res)=> {
      res.send("Express App is Running")
})



// image storage engine

const storage = multer.diskStorage({
    destination:'./upload/images',
    filename:(reg,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})


//creating upload endpoint 
app.use('/images',express.static('upload/images'))
app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

// schema for creating products


const Product = mongoose.model("product",{
    id:{
        type: Number,
        required:true,
    },
    name: {
        type:String,
        required:true,
    },
    category: {
        type:String,
        required:true,
    },
    new_price: {
        type:Number,
        required:true,
    },
    old_price: {
        type:Number,
        required:true,
    },
    date: {
         type:Date,
         default:Date.now,
    },
    available: {
        type:Boolean,
        default:true,
    }
})

app.post('/addproduct',async (req,res)=> {
    let products = await Product.find({});
    let id;
    if(products.length>0)
        {
              let last_product_array = products.slice(-1);
              let last_product = last_product_array[0];
              id = last_product.id+1;

    }
    else {
        id=1;
    }
  const product = new Product({
    id:id,
    id:req.body.id,
    name:req.body.name,
    image:req.body.image,
    category:req.body.category,
    new_price:req.body.new_price,
    old_price:req.body.old_price,
  });
  console.log(product);
  await product.save();
  console.log("Saved");
  res.json({
    success:true,
    name:req.body.name,
  })
})


//creating API for deleting product

app.post('/removeproduct',async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
        res.json({
        success:true,
        name:req.body.name
    })
})


// creating API for getting allproducts
app.get('/allproducts',async (req,res)=>{
    let products = await Product.find({});
    console.log("All Products Fetched");
    res.send(products);
})

app.listen(port,(error)=> {
    if (!error) {
        console.log("Server Running on Port" +port)
    }
    else {
        console.log("Error:"+error)
    }
})



