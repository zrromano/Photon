module.exports = (app) => {
    const auth = require('../controllers/auth.controller.js');

    app.post('/auth', auth.login);
}