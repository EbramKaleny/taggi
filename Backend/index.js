import express from 'express';
import connectDB from './DB/connection.js';

const app = express()
const port = 8888

connectDB()
app.use(express.json())

app.use("*", (req,res) => res.status(404).json({msg:"404 not found"}))
app.listen(port, () => console.log(`app listening on port ${port}`))