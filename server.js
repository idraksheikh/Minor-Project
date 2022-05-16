const app=require("./backEnd/app");
const PORT=process.env.PORT||8000;
const { Database } = require("./backEnd/config/database");
// const cloudinary=require("cloudinary");

Database();
// cloudinary.config({ 
//     cloud_name: process.env.CLOUDINARY_NAME, 
//     api_key: process.env.CLOUDINARY_KEY, 
//     api_secret: process.env.CLOUDINARY_SECRET 
// });
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
});