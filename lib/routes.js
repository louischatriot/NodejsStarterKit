var getHome = function (req, res, next) {
  var values = {};

  res.render('website/layout', { values: values
                               , partials: {}
                               });

  //return res.json(200, { message: "BLOUP" });
}


module.exports.getHome = getHome;
