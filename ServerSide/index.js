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
app.use(express.urlencoded({ extended: true }))
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


app.post("/login", async (req, res) => {
  const { mail, password } = req.body;

  // validate the credentials

  // create a jwt token

  // add it token to response and send it
  const token = jwt.sign({ mail }, "super-secret",)

  res.json({ "status": "ok", token: token })
});



// Create a new post
app.post('/posts', upload.single('image'), async (req, res) => {
  const { title, content } = req.body;
  const token = req.headers["authorization"].split(' ')[1];
  console.log("token", token);
  const decoded = jwt.verify(token, "super-secret");
  const user = await User.findByPk(decoded.userId);


  // generate a random string -> 83ksdkfsdf25 

  // save the file with random string name (blog_images -> 83ksdkfsdf25.png, sdfsdf23ssdf.png)

  // in database you store the file name in the image column

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
    include: [{ model: User, attributes: ['id', 'f_name', 'email'] }],
  });

  "http://127.0.0.1:3000/image/" + "83ksdkfsdf25"

  res.json(posts);
});

// create separate route for getting images
app.get("/image", (req,res) => {
  // how to image from folder in express js


})



app.listen(3000, () => {
  console.log('App is running');
});





//  /posts -> get, post
//  /users -> get, post
