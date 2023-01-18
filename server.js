require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const userRouter = require('./server/api/user/user.router');
const port = process.env.PORT;
const pool = require('./server/config/database')



app.use(cors());
app.use(express.urlencoded({ extended: true }));    
app.use(express.json());

app.use('/api/users', userRouter);


app.listen(port, () => console.log(`Listening at http://localhost:${port}`));