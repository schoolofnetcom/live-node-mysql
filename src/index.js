module.exports = (app) => {
    app.use('/contacts', require('./routes/contacts/index'));
}