module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: !false,
      validate: {
        len: [1, 400]
      }
    },
    image: {
      type: DataTypes.TEXT('long'),
      allowNull: false
    },
    holidayType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: 1 }
    },
    streetAddress: {
      type: DataTypes.STRING
    },
    postalZipCode: {
      type: DataTypes.INTEGER
    },
    state: {
      type: DataTypes.STRING
    },
    lat: {
      type: DataTypes.INTEGER
    },
    lng: {
      type: DataTypes.INTEGER
    },
    likes: {
      type: DataTypes.INTEGER
    }
  });

  Post.associate = function(models) {
    // We're saying that a Post should belong to an User
    // A Post can't be created without an User due to the foreign key constraint
    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
};
