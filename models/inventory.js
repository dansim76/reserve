'use strict';
//setting up sequelize database for inventory
module.exports = function(sequelize, DataTypes) {
  var Inventory = sequelize.define("inventory", {
    item: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,100]
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    expiration: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    username: {
      type: DataTypes.TEXT
    },
    usertype: {
      type: DataTypes.ENUM('grocery', 'pantry'),
      defaultValue: 'grocery'
    },
    reserved:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    pantryname:{
      type:DataTypes.TEXT
      allowNull: true
    }
    
  });
  //associating inventory with user table
  Inventory.associate = function (models){ 
    Inventory.belongsTo(models.user,{
      // onDelete: "cascade", //deletes everything that depends on this foreign key
      foreignKey: {
        allowNull: false
      }
    })
  };

  return Inventory;
};
