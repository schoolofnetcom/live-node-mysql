const sequelize = require('./../../models/index');
const Contact = sequelize.import('./../../models/contact');

module.exports = (req, res) => {
    Contact
        .create(req.body)
        .then((data) => res.json({ data }));
}