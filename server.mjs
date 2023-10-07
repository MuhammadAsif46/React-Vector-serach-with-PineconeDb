import express from 'express';
import cors from 'cors';
import path from 'path';
import "dotenv/config";

import authRouter from './routes/auth.mjs';
import commentRouter from './routes/comment.mjs';
import feedRouter from './routes/feed.mjs';
import postRouter from './routes/post.mjs';


const __dirname = path.resolve();

//await: (means) response anay ka intizaar kro jb tak nhi ati agay nhi barhna 
// not await: (means) direct chalo intizaar nhi krna


const app = express();
app.use(express.json()); // body parser
app.use(cors()) 

// /api/v1/login
app.use("/api/v1", authRouter);

app.use((req, res, next) => { // bayriyar : yha sy agay na ja paye
    const token = "valid";
    if(token === "valid"){
        next();
    }else{
        res.status(401).send({message: "invalid token"});
    }
});

app.use("/api/v1", postRouter);



//     /static/vscode_windows.exe
app.use("/static", express.static(path.join(__dirname, 'static')))

app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
    console.log(`Example server listening on port ${PORT}`)
})

