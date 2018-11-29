const sequelize = require('./index');

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('contact', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING
    }, {});
}