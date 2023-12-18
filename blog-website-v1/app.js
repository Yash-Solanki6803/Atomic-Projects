//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
var _ = require('lodash');

const homeStartingContent = "Our relentless efforts always strive to well connect with our audience and offer them informative news and also entertainment media that is worth knowing and sharing. ";
const aboutStartingContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactStartingContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let posts = [];
 

app.get("/",(req,res)=>{
  res.render('home',{StartingContent:homeStartingContent,
                    posts:posts
  });
});

app.get("/about",(req,res)=>{
  res.render('about',{aboutContent:aboutStartingContent});
});

app.get("/contact",(req,res)=>{
  res.render('contact',{contactContent:contactStartingContent});
});

app.get("/compose",(req,res)=>{
  res.render('compose');
});

app.get("/posts/:postName",(req,res)=>{
  const requestedTitle =  _.lowerCase(req.params.postName);
  posts.forEach(function(post){
    const storedTitle = _.lowerCase(post.postTitle);
    if(storedTitle===requestedTitle){
      res.render('post',{
        title:post.postTitle,
        mainContent:post.mainContent,
        subContent : post.subContent
      });
    }
    
  })
  
})

app.post("/compose",(req,res)=>{
  const post = 
  {
    postTitle: req.body.postTitle,
    mainContent : req.body.mainContent,
    subContent : req.body.subContent
  }

  posts.push(post);
  res.redirect('/');
})









app.listen(3000, function() {
  console.log("Server started on port 3000");
});
