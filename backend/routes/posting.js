const express = require("express");
const router = express.Router();
const post = require("../data/posting_data.json");

router.get("/", function (req, res) {
  res.send(post);
});

module.exports = router;
