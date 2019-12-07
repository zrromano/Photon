const auth = require('../middleware/auth.middleware');

module.exports = (app) => {
    const users = require('../controllers/user.controller.js');

    app.post("/api/users", users.create);

    app.get('/api/users/me', auth, users.find);

    app.put("/api/users/me", auth, users.update);

    app.delete("/api/users/me", auth, users.delete);
}