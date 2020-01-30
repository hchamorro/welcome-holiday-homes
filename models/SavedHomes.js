module.exports = (sequelize, DataTypes) => {
  const SavedHome = sequelize.define('SavedHome', {
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
    }
  });

  SavedHome.associate = function(models) {
    // We're saying that a Post should belong to an User
    // A Post can't be created without an User due to the foreign key constraint
    SavedHome.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return SavedHome;
};
