'use strict';

module.exports = function(sequelize, DataTypes) {
  var reserved = sequelize.define("reserved", {
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
    }

  });

  reserved.associate = function (models){ //this will create a foreign key
    models.reserved.belongsTo(models.foodbanks,{
      onDelete: "CASCADE", //deletes everything that depends on this foreign key
      foreignKey: {
        allowNull: false
      }
    });
  };

  // Example: https://github.com/sequelize/express-example/blob/master/models/task.js
  //http://docs.sequelizejs.com/manual/tutorial/associations.html
  return reserved;
};
