const express=require('express');
const mongoose=require('mongoose')
const app=express();

const authRout=require('./routes/auth')
const userRoute=require('./routes/users')
const movieRoute=require('./routes/movies');
const listRoute=require('./routes/lists');
const dotenv=require('dotenv');
dotenv.config();
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    // useCreateIndex: true
}).then(()=>console.log('DB connection successful')).catch((err)=>console.log(err));
app.use(express.json())

app.use('/api/auth',authRout);
app.use('/api/users',userRoute);
app.use('/api/movies',movieRoute);
app.use('/api/lists',listRoute);

app.listen(8800,()=>{
    console.log('backend server is running');
})