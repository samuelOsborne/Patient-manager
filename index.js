const app = require('express')();
const http = require('http').createServer(app);
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const io = require('socket.io')(http)
const session = require('express-session')

app.use(morgan('tiny'));
app.use(cors({
  credentials: true,
  origin: 'http://localhost:8080'
}));
app.use(bodyParser.json());
app.use(session({
  secret: 'super secret',
  resave: false,
  saveUninitialized: false,
  cookie : {
    secure: false
  }
}))

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
