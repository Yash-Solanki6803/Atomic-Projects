const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/newsDB');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let currentNews = [];

const item1 ={
  currentNewsSource : "Yash Solanki",
  currentNewsBody : "Blog 1 go brr"
}
const item2 ={
  currentNewsSource : "Yash Solanki",
  currentNewsBody : "Blog 2 go brr"
}
const item3 ={
  currentNewsSource : "Yash Solanki",
  currentNewsBody : "Blog 3 go brr"
}
const item4 ={
  currentNewsSource : "Yash Solanki",
  currentNewsBody : "Blog 4 go brr"
}
const item5 ={
  currentNewsSource : "Yash Solanki",
  currentNewsBody : "Blog 5 go brr"
}

currentNews.push(item1);
currentNews.push(item2);
currentNews.push(item3);
currentNews.push(item4);
currentNews.push(item5);


app.get("/",async (req,res)=>{
    res.render("home",{currentNews:currentNews});
})

app.get("/composeCurrentNews",async(req,res)=>{
  res.render("composeCurrentNews",{currentNews:currentNews});
});

app.post("/composeCurrentNews",async(req,res)=>{
  const news ={
    currentNewsSource : req.body.currentNewsSource,
    currentNewsBody : req.body.currentNewsBody
  }

  currentNews.push(news);
  res.redirect("/");

})

app.post


app.listen(3000,()=>{
    console.log("server started at port 3000");
})