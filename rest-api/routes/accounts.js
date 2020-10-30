var express = require("express");
var router = express.Router();
var db = require("../db");

/* GET users listing. */
router.get("/", function (req, res, next) {
  db.getAll()
    .then((result) => {
      var responseContent =
        result && result.rows && result.rows.length > 0
          ? [200, [null], result.rows]
          : [404, ["no records"], null];
      var body = { errors: responseContent[1], records: responseContent[2] };
      res.status(responseContent[0]).json(body);
    })
    .catch((e) => {
      console.log(e);
      var responseContent = [500, ["error occured fetching records"], null];
      var body = { errors: responseContent[1], records: responseContent[2] };
      res.status(responseContent[0]).json(body);
    })
    .finally(() => next());
});

module.exports = router;
