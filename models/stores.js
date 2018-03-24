module.exports = function(sequelize, DataTypes) {
  var stores = sequelize.define("stores", {
     
        id: { //not sure if this is needed
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
 
        storeName: {
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

  stores.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    stores.hasMany(models.inventory, {
      onDelete: "cascade"
    });
  };

  return stores;
};