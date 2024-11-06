const express = require("express");

const multer = require("multer");

const upload = multer({ dest: "images" });

const router = express.Router();

router.get("/", function (req, res) {
  res.render("profiles");
});

router.get("/new-user", function (req, res) {
  res.render("new-user");
});

router.post("/profiles", upload.single("image"), function (req, res) {
  const uploadedImage = req.file;
  const userData = req.body;

  console.log(uploadedImage);
  console.log(userData);
  res.redirect("/");
});

module.exports = router;
