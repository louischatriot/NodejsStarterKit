// Handle All errors coming from next(err) calls
function handleErrors (err, req, res, next) {
  if (err.statusCode && err.body) {
    return res.json(err.statusCode, err.body);
  } else if (err.message) {
    return res.send(500, err.message);
  } else {
    return res.send(500, 'Unknown error');
  }
}

module.exports.handleErrors = handleErrors;
