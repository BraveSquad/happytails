var router = app.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express App running" });
});
module.exports = router;
