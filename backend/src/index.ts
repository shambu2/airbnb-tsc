import express,{Request,Response} from "express";
import userRoutes from "./routes/user-routes"
// import { User } from "./models/user-model";


const app = express();

app.use('/api/v1/',userRoutes)
app.use(express.json())


app.listen(5000,()=>{
    console.log("server started on 5000 port")
})