//imports

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

const app = express();

//routes
app.use('/posts', postRoutes)

//bodyParser
app.use(bodyParser.json({ limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit:"30mb", extended: true}));
app.use(cors());


//Connection to database

const CONNECTION_URL = 'mongodb+srv://gaston:22808014@shareit.kvjfg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000 ;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
        .then (() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
        .catch((error) => console.log(error.message));

