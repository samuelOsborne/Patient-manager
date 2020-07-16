const express = require('express')
const app = express()

/**
 * Retrive list of lobbies and return them
 */
app.get('/', (req, res) => {
  sess = req.session
  username = sess.username
  console.log("SESSION USERNAME : " + sess.username)
  res.send({
    username: username
  })
});

app.post('/', (req, res) => {
  sess = req.session;
  sess.username = req.body.username
  console.log("BODY USERNAME : " + req.body.username)
  console.log("SESSION USERNAME : " + sess.username)

  res.status(200).send()
});

module.exports = app;
