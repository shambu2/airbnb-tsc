import express,{Request,Response} from "express";
const app = express();
import userRoutes from "./routes/user-routes"
app.get('/',(req:Request,res:Response)=>{
    res.send("hello from tsc")
})
app.use('/api/v1/',userRoutes)

app.listen(5000,()=>{
    console.log("server started on 5000 port")
})