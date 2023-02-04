const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class BlogComment extends Model {}

BlogComment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    blogPostId: {
      type: DataTypes.INTEGER,
      references: {
        model: "blogpost",
        key: "id",
      },
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true, 
    underscored: false,
    modelname: "blogcomment",
  }
);

module.exports = BlogComment;