const auth = require('../middleware/auth.middleware');

module.exports = app => {
  const pictures = require("../controllers/picture.controller.js");

  app.get("/api/pictures", pictures.list);

  app.post("/api/pictures", auth, pictures.create);

  app.get("/api/pictures/:title", pictures.find);

  app.put("/api/pictures/:title", auth, pictures.update);

  app.delete("/api/pictures/:title", auth, pictures.delete);
};
