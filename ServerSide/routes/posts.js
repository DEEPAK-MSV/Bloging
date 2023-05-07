const express = require('express');
const { Post, User } = require('../models');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll({ include: User });
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findOne({ where: { id }, include: User });
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/', async (req, res) => {
  const { title, content, userId } = req.body;
  try {
    const post = await Post.create({ title, content, userId });
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Post creation failed' });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const [numRows, [updatedPost]] = await Post.update(
      { title, content },
      { where: { id }, returning: true }
    );
    if (numRows === 0) {
      res.status(404).json({ message: 'Post not found' });
    } else {
      res.json(updatedPost);
    }
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Post update failed' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const numRows = await Post.destroy({ where: { id } });
    if (numRows === 0) {
      res.status(404).json({ message: 'Post not found' });
    } else {
      res.json({ message: 'post deleted' });
    }
    } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
    }
    });
    
    module.exports = router;