const express = require("express");
const router = express.Router();
const URL = require("../../models/URL");
const generateShortURL = require("../../shortURL");

router.get("/", (req, res) => {
  res.render("index");
});
router.post("/", (req, res) => {
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
router.get("/:shortURL", (req, res) => {
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

module.exports = router;
