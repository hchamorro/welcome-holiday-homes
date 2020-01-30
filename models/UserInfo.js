module.exports = (sequelize, DataTypes) => {
  const UserInfo = sequelize.define('UserInfo', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    DOB: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    familyType: {
      type: DataTypes.STRING,
      allowNull: true
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
    userImage: {
      type: DataTypes.TEXT('long'),
      allowNull: true
    }
  });

  UserInfo.associate = models => {
    // We're saying that a UserInfo should belong to user
    // A PersonalInfo can't be created without an user due to the foreign key constraint
    UserInfo.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return UserInfo;
};
