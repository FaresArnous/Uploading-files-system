const express = require("express");

const multer = require("multer");

const db = require("../data/database");

const storegConfig = multer.diskStorage({
  destination: function (req, file, cd) {
    cd(null, "images");
  },
  filename: function (req, file, cd) {
    cd(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storegConfig });

const router = express.Router();

router.get("/", function (req, res) {
  res.render("profiles");
});

router.get("/new-user", function (req, res) {
  res.render("new-user");
});

router.post("/profiles", upload.single("image"), async function (req, res) {
  const uploadedImage = req.file;
  const userData = req.body;

  await db.getDb().collection("users").insertOne({
    name: userData.username,
    image: uploadedImage.path,
  });
  res.redirect("/");
});

module.exports = router;
