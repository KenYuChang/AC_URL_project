const express = require("express");
const exphbs = require("express-handlebars");

const routes = require("./routes");
const app = express();
require("./config/mongoose");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(routes);

app.listen(3000, (req, res) => {
  console.log("this app is listening on http://localhost:3000");
});
