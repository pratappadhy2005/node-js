const express = require("express");
const { restrictToRoles } = require("../middlewares/auth");
const URL = require("../models/url");

const router = express.Router();

router.get("/", restrictToRoles(["NORMAL", "ADMIN"]), async (req, res) => {
  const allurls = await URL.find({ createdBy: req.user._id });
  return res.render("home", {
    urls: allurls,
  });
});

router.get("/admin/urls", restrictToRoles(["ADMIN"]), async (req, res) => {
  const allurls = await URL.find({});
  return res.render("admin", {
    urls: allurls,
  });
});


router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.get("/login", (req, res) => {
  return res.render("login");
});

module.exports = router;
