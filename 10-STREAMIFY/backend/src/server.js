import express from 'express'
import dotenv from 'dotenv/config'
import authRoutes from './routes/auth.route.js'
import { dbconnection } from './config/db.connection.js'
import coookieParser from 'cookie-parser'
import userRoutes from './routes/user.route.js'

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(coookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)

app.listen(port, () => {
    dbconnection();
    console.log(`Example app listening on port ${port}`)
})