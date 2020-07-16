const app = require('express')()
const http = require('http').createServer(app)
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const io = require('socket.io')(http)

require('./config/connection')

app.use(morgan('tiny'));
app.use(cors({
  credentials: true,
  origin: 'http://localhost:8080'
}));
app.use(bodyParser.json());



require("./startup/routes")(app);

io.on('connection', (socket) => {
  console.log('A user has connected.');
  socket.on('disconnect', () => {
    console.log('User disconnected');
  })
})

const port = process.env.PORT || 5050;
http.listen(port, () => {
  console.log(`listening on ${port}`);
});
