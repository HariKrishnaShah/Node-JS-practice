const express = require("express");
const morgan = require("morgan");

const app = express();
const port = 4000;
const mainIndex = require("./routes/index");
const v1 = require("./routes/version1");
const v2 = require("./routes/version2")
app.use(express.json())
app.use(morgan("combined"));
app.set("view engine", "ejs")
app.set("views", "./views")
app.use(express.static("public"));
app.get("/", (req, res)=>{
 res.render("index.ejs", {data: "Hari"});
})
app.use("/v1/", v1);
app.use("/v2/", v2);

app.listen(port, ()=>
{
    console.log("Listening at http://localhost:4000")
})

