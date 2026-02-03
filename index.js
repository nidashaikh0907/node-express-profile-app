const express = require('express');
const app = express();
const path = require('path');
const port = 8080;

app.use(express.static('public'));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");



app.get("/ig/:username", (req,res) => {
  let {username}=req.params;
  const instadata = require("./views/data.json");
  const data = instadata[username];
  console.log(data);
  if(data){
  res.render("insta.ejs",{data});
  }else{
    res.render("error.ejs");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});