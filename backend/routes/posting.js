const express = require("express");
const router = express.Router();
const post = require("../data/posting_data.json");

router.get("/", function (req, res) {
  res.send(post);
});

// detail 데이터 요청
router.get("/detail/:id", function (req, res) {
  const data = req.params.id;
  const detailPost = post.filter((item) => {
    return item.data_id === parseInt(data);
  });
  res.send(detailPost);
});

module.exports = router;
