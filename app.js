const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const URL = require("./models/URL");
const generateShortURL = require("./shortURL");
const app = express();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); //設定連線到mongoDB

const db = mongoose.connection;

db.on("error", () => {
  console.log("mongodb error!");
});

db.once("open", () => {
  console.log("mongodb connected!");
});

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});
app.post("/", (req, res) => {
  if (!req.body.url) return res.redirect("/");
  const shortURL = generateShortURL(5);
  URL.findOne({ originalURL: req.body.url })
    .then((data) => {
      if (data) {
        return data;
      } else {
        return URL.create({ shortURL, originalURL: req.body.url });
      }
    })
    .then((data) =>
      res.render("index", {
        origin: req.headers.origin,
        shortURL: data.shortURL,
      })
    )
    .catch((error) => console.log(error));
});
app.get("/:shortURL", (req, res) => {
  const { shortURL } = req.params;
  URL.findOne({ shortURL })
    .then((data) => {
      if (data) {
        return res.redirect(data.originalURL);
      } else {
        return res.render("error");
      }
    })
    .catch((error) => console.log(error));
});

app.listen(3000, (req, res) => {
  console.log("this app is listening on http://localhost:3000");
});
