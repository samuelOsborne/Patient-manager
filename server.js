const app = require('express')()
const http = require('http').createServer(app)
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

require('./config/connection')

app.use(morgan('tiny'));
app.use(cors({
  credentials: true,
  origin: 'http://localhost:8080'
}));
app.use(bodyParser.json());


require("./startup/routes")(app);

const port = process.env.PORT || 5050;
http.listen(port, () => {
  console.log(`listening on ${port}`);
});
