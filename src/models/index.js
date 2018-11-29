const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysql://root:@localhost:3306/live-sequelize');

sequelize
    .authenticate()
    .then(() => console.log('Authenticated'))
    .catch(() => console.log('Error Auth'));

sequelize.sync();

module.exports = sequelize;
