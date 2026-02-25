// const app = require("./src/app")
// const connectToDb = require("./src/config/database")
// require("dotenv").config()
// app.listen(3000,()=>{
//     console.log("server is running at port 3000")
// })
// connectToDb()
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server is running  on port ${PORT}`)
})