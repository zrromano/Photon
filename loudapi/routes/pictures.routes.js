module.exports = app => {
  const pictures = require("../controllers/picture.controller.js");

  app.get("/pictures", pictures.findAll);

  app.post("/pictures", pictures.create);

  app.get("/pictures/:user", pictures.findUser);

  app.get("/pictures/:category", pictures.findCategory);

  app.get("/pictures/:id", pictures.findOne);

  app.put("/pictures/:id", pictures.update);

  app.delete("/pictures/:id", pictures.delete);
};
