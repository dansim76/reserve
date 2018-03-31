module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("user", {
        //reference:
        //https://code.tutsplus.com/tutorials/using-passport-with-sequelize-and-mysql--cms-27537

        id: { //not sure if this is needed
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },

        usertype: {
            type: DataTypes.ENUM('grocery', 'pantry'),
            defaultValue: 'Grocery'
        },

        name: {
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
        },

        last_login: {
            type: DataTypes.DATE
        },

        status: { // not sure if this is needed
            type: DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }

    });
    User.associate = function(models) {
       // Associating Author with Posts
       // When an Author is deleted, also delete any associated Posts
        User.hasMany(models.inventory, {
            onDelete: "cascade"
        });
    };

    return User;
};
