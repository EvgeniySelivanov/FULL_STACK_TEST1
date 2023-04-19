const { ValidationError,UniqueConstraintError } = require('sequelize');


module.exports.errorValidateHandle = async (error, req, res, next) => {
  console.log(error.message);
  if (error instanceof UniqueConstraintError) {
    return res.status(409).send({
      errors: [{ title: error.message }]
    })
  }
  if (error instanceof ValidationError) {
    return res.status(400).send({
      errors: [{ title: error.message }]
    })
  }
  next(error);
}


module.exports.errorHandle = async (error, req, res, next) => {
  // console.dir(error);
  const status = error.status || 500
  res.status(status).send({
    errors: [{ title: error.message || 'server dead' }]
  });
}