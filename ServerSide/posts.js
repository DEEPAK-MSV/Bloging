const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');
const User = require('./User');

class Post extends Model { }

Post.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
}, {
  sequelize,
  modelName: 'post',
  timestamps: false,
});

Post.belongsTo(User);
User.hasMany(Post);

module.exports = Post;
