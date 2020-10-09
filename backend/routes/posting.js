const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const post = require("../data/posting_data.json");

router.get("/", function (req, res) {
  res.send(post);
});

router.get("/allList", function (req, res) {
  res.send(post);
});

router.post("/write", function (req, res) {
  const editData = req.body;

  const myPath = path.join(__dirname, "..", "data", "posting_data.json");

  fs.readFile(myPath, "utf8", (err, data) => {
    let parsedData = JSON.parse(data);
    parsedData.push(editData);
    fs.writeFile(myPath, JSON.stringify(parsedData), (err) => {
      if (err) throw err;
      res.send("end");
    });
  });
});

// detail 데이터 요청
router.get("/detail/:id", function (req, res) {
  const data = req.params.id;
  const detailPost = post.filter((item) => {
    return item.data_id === parseInt(data);
  });
  res.send(detailPost);
});

//게시글 수정하기
router.put("/edit/:id", function (req, res) {
  const editData = req.body;

  const myPath = path.join(__dirname, "..", "data", "posting_data.json");

  fs.readFile(myPath, "utf8", (err, data) => {
    let parsedData = JSON.parse(data);

    parsedData[editData.data_id - 1] = editData;

    fs.writeFile(myPath, JSON.stringify(parsedData), (err) => {
      if (err) throw err;
      res.send("end");
    });
  });
});

module.exports = router;
