module.exports = (sequelize, DataTypes) => {
  const PostComment = sequelize.define('PostComment', {
    comment: {
      type: DataTypes.STRING,
      allowNull: !false,
      validate: {
        len: [1, 400]
      }
    }
  });

  PostComment.associate = models => {
    // We're saying that a PostComment should belong to user
    // A PostComment can't be created without an user due to the foreign key constraint
    PostComment.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });

    // A Post can't be created without an user due to the foreign key constraint
    PostComment.belongsTo(models.Post, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return PostComment;
};
