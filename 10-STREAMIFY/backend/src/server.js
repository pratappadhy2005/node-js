import express from 'express'
import dotenv from 'dotenv/config'
import authRoutes from '../routes/auth.route.js'
import { dbconnection } from '../config/db.connection.js'

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use("/api/auth", authRoutes)

app.listen(port, () => {
    dbconnection();
    console.log(`Example app listening on port ${port}`)
})