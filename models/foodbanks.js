//this script for creating sequeqlize model
//for the foodbanks table in reserve database

module.exports = function(sequelize, DataTypes) {
  var foodbanks = sequelize.define("foodbanks", {
     
        id: { //not sure if this is needed
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
 
        bankName: {
            type: DataTypes.STRING,
            notEmpty: true
        },

        addressNumber: {
            type: DataTypes.STRING,
            notEmpty: false
        },

        addressStreet: {
            type: DataTypes.STRING,
            notEmpty: true
        },

        city: {
            type: DataTypes.STRING,
            notEmpty: true
        },

        state: {
            type: DataTypes.STRING,
            notEmpty: true
        },

        zip: {
            type: DataTypes.STRING,
            notEmpty: true
        },
 
        username: {
            type: DataTypes.TEXT
        },
 
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
 
  });

  foodbanks.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    foodbanks.hasMany(models.reserved, {
      onDelete: "cascade"
    });
  };

  return foodbanks;
};