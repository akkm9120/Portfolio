const express = require("express");
const app = express();
require('dotenv').config();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const lecturerRoute = require("./controller-layer/lecturer");

async function main(){
    app.get("/",function(req,res){
        res.send("hello to Heaven")
    });
    
    app.use("/lecturer", lecturerRoute);
    
}

main();
app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running...');
});
