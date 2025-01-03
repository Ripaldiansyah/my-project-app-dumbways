const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const hbs = require("hbs");

const projetsRouter = require("./src/routes/projects");
const contactRouter = require("./src/routes/contact");
const { renderHome } = require("./src/controllers/HomeController");
const { registerHelpers } = require("./src/config/handleBarsConfig");

require("./src/config/ViewConfig")(app, express, path, hbs);
require("./src/config/expressConfig")(app, express);
require("dotenv").config();
registerHelpers(hbs);

app.get("/", renderHome);

// projects
app.use("/projects", projetsRouter);
app.use("/contacts", contactRouter);

app.listen(port, () => {
  console.log("yeay connect");
});
