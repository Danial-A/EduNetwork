const express = require('express');
const cors = require('cors');
const mongoose  = require('mongoose')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.DB_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log("MongoDB Connection Successful")
});

const PostsRouter = require('./routes/posts');
const UsersRouter = require('./routes/users');
const LikesRouter = require('./routes/likes');
const commentsRouter = require('./routes/comments')

app.use('/posts', PostsRouter);
app.use('/users',UsersRouter);
app.use('/likes', LikesRouter)
app.use('/comments',commentsRouter)


app.listen(port, ()=>{
    console.log(`Server running at port ${port}`)
})