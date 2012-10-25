var getHome = function (req, res, next) {
  return res.json(200, { message: "BLOUP" });
}


module.exports.getHome = getHome;
