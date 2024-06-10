const portNumber = 8080;
var express = require('express');
var app = express();
var path = require('path');
var cors = require('cors');
const allowCrossDomain = (req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
      res.header('Access-Control-Allow-Headers', 'Content - Type');
      next();
};

const rocketsRoutes = require("./routes/rockets.js");

bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(allowCrossDomain);
app.use(express.static(path.join(__dirname, '/dist/spacetrain')));

// Serving angular application (optional)
// app.get('/', function (req, res) {
//       res.sendFile('index.html', { root: dirname + '/dist/spacetrain' });
// });

// ROUTEN //
app.use('/rockets', rocketsRoutes);
app.get('/test', (req, res) => {
      res.json({message: 'ok'});
});



// Error Middleware
app.use((err, req, res, next) => {
      const statusCode = err.statusCode || 500;
      console.error(err.message, err.stack);
      res.status(statusCode).json({ message: err.message });
      return;
});

app.listen(portNumber, function () {
      console.log("Spacetrain API listening on port " + portNumber);
});