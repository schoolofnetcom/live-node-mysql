const sequelize = require('./../../models/index');
const Contact = sequelize.import('./../../models/contact');

module.exports = (req, res) => {
    Contact
        .destroy({ where: { id: req.params.id } })
        .then(() => res.json({ status: true }))
        .catch(() => console.log('Not found'));
}