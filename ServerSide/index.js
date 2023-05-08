const express = require('express');
const multer = require('multer');
const path = require('path');
const jwt = require('jsonwebtoken');
const sequelize = require('./database');
const User = require('./User');
const Post = require('./posts');

sequelize.sync().then(() => console.log('Database is ready'));

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.post('/users', async (req, res) => {
  await User.create(req.body);
  res.send('User created');
});

app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

app.put('/users/:email', async (req, res) => {
  const requestedEmail = req.params.email;
  const user = await User.findOne({ where: { email: requestedEmail } });
  user.username = req.body.username;
  await user.save();
  res.send('User updated');
});

app.delete('/users/:email', async (req, res) => {
  const requestedEmail = req.params.email;
  await User.destroy({ where: { email: requestedEmail } });
  res.send('User removed');
});

// Create a new post
app.post('/posts', upload.single('image'), async (req, res) => {
  const { title, content } = req.body;
  const token = req.headers.authorization.split('')[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findByPk(decoded.userId);

  if (!user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const post = await Post.create({
    title,
    content,
    imageUrl: req.file ? req.file.filename : null,
    userId: user.id,
  });

  res.json(post);
});

// Get all posts
app.get('/posts', async (req, res) => {
  const posts = await Post.findAll({
    include: [{ model: User, attributes: ['id', 'username', 'email'] }],
  });

  res.json(posts);
});

app.listen(3000, () => {
  console.log('App is running');
});
