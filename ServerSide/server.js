const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/users', userRouter);
app.use('/posts', postRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});



