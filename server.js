const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./routes/user.js");

let app = express();
app.listen(8080);

app.use(express.static("src"));

app.use(bodyParser.urlencoded({
    extended:false
}));

app.use("/user",userRouter);