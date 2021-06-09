// import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import postsRoutes from './routes/posts.js'


const app = express()


// middleware
app.use(express.json({limit:'30mb',extended:true}))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

// routes
app.use('/posts',postsRoutes)

// connect to mongodb
const CONNECTION_URL = "mongodb+srv://pranto:pranto140@sharestory.tzce8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.port || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
// returns a promise
    .then(() => app.listen(PORT,()=>{console.log(`Server started on port ${PORT}`)}))
    .catch((err) => console.log("Failed to start", err))
    
mongoose.set('useFindAndModify',true)