//setting up the sequelize for the user table
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("user", {
        id: {
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
        status: { 
            type: DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
    });
    //associating user with inventory table 
    User.associate = function(models) {
        User.hasMany(models.inventory, {
            onDelete: "cascade"
        });
    };
    return User;
};