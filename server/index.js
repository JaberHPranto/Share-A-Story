// import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import postsRoutes from './routes/posts.js'


const app = express()
dotenv.config()

// middleware
app.use(express.json({limit:'30mb',extended:true}))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

// routes
app.use('/posts', postsRoutes)
app.get('/', (req, res) => {
    res.send(`<H1>Hello to Share Stories API </H1>`)
})

// connect to mongodb
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
// returns a promise
    .then(() => app.listen(PORT,()=>{console.log(`Server started on port ${PORT}`)}))
    .catch((err) => console.log("Failed to start", err))
    
mongoose.set('useFindAndModify',true)