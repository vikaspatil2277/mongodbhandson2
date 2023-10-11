const express = require("express");
const Router = require("./Router/router");
const app = express();

const PORT = 8000;
app.use(express.json());
app.use("/",Router);



app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
});