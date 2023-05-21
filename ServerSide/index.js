const express = require('express');
const multer = require('multer');
const path = require('path');
const jwt = require('jsonwebtoken');
const sequelize = require('./database');
const User = require('./User');
const Post = require('./posts');
const { Op } = require("sequelize");

function generateRandomString(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}

sequelize.sync().then(() => console.log('Database is ready'));

const app = express();

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    const fileName = generateRandomString(12) + ".png";
    cb(null, fileName);
  }
});

const upload = multer({ storage: storage });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.post("/login", async (req, res) => {
  const { mail, password } = req.body;
  
  // validate the credentials (db)
  const user = await User.findOne({
    where: {
      email: {
        [Op.eq]: mail
      },
      password: {
        [Op.eq]: password
      }
    }
  });

  if (user === null) {
    res.json({ "message": "email or password invalid", "status": "failed" });
    return;
  }

  // create a jwt token
  const token = jwt.sign({ userId: user.id }, "super-secret", { expiresIn: "1d" });

  // add it token to response and send it
  res.json({ "status": "ok", token: token });
});


// Create a new post
app.post('/posts', upload.single('post_image'), async (req, res) => {
  const { title, content, heading } = req.body;
  const token = req.headers["authorization"].split(' ')[1];
  
  // token verification
  const decoded = jwt.verify(token, "super-secret");

  // get the userId from the token payload
  const user = await User.findByPk(decoded.userId);

  // if user is not valid show message Unauthorized
  if (!user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const fileName = generateRandomString(12) + ".png";

  const post = await Post.create({
    title,
    content,
    heading,
    image_url: fileName,
    userId: user.id,
  });
  
  res.json(post);
});

// Get all posts
app.get('/posts', async (req, res) => {
  const posts = await Post.findAll({
    include: [{ model: User, attributes: ['id', 'f_name', 'email'] }],
  });

  res.json(posts);
});

// create separate route for getting images
app.get("/image/:imageName", (req, res) => {
  const imageName = req.params.imageName;
  const imagePath = path.join(__dirname, 'uploads', imageName);
  res.sendFile(imagePath);
});

app.listen(3000, () => {
  console.log('App is running');
});
