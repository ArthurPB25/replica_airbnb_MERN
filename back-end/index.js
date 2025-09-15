import express from "express";
import "dotenv/config";
const app = express();
const {PORT} = process.env;

app.get('/', (req,req)=>{
    req.json("Server Working")
})

app.listen(PORT, () => {
    console.log( `Server is running on output ${PORT}`);
}); 