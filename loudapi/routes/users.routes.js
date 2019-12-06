module.exports = (app) => {
    const users = require('../controllers/user.controller.js');

    app.get("/api/users", users.findAll);

    app.post("/api/users", users.create);

    app.get("/api/users/:id", users.findOne);

    app.put("/api/users/:id", users.update);

    app.delete("/api/users/:id", users.delete);
}