const Joi = require("joi");
const express = require("express");
const app = express();

app.use(express.json());

// Auth Requests
app.post("/api/auth", (res, req) => {});

// User Requests
app.post("/api/users", (res, req) => {});

app.get("/api/users/:id", (res, req) => {});

app.put("/api/users/:id", (res, req) => {});

app.delete("/api/users/:id", (res, req) => {});

// Picture Requests
app.get("/api/pictures", (res, req) => {});

app.post("/api/pictures", (res, req) => {});

app.get("/api/pictures/:user", (res, req) => {});

app.get("/api/pictures/:category", (res, req) => {});

app.get("/api/pictures/:id", (res, req) => {});

app.put("/api/pictures/:id", (res, req) => {});

app.delete("/api/pictures/:id", (res, req) => {});
