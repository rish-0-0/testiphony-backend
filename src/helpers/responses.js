function respond(res, status, message, success=true) {
  return res.status(status).send({ ...message, success });
}

module.exports = { respond };
