const bodyParser = require("body-parser")

const articles = require("./articles")

module.exports = app => {
  app.use(
    bodyParser.json(),
    articles
  )
}