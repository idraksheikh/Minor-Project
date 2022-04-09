const app=require("./app.js");
const PORT=process.env.PORT||8000;
const { Database } = require("./config/database.js");
Database();
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
});