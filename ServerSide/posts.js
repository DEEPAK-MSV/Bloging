const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');
const User = require('./User');

class Post extends Model { }

Post.init({
  heading: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  aname :{
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
  timestamps: true,
});

Post.belongsTo(User);
User.hasMany(Post);

module.exports = Post;
