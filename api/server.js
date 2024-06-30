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
const toursRoutes = require("./routes/tours.js");
const staffRoutes = require("./routes/staff.js");
const userRoutes = require("./routes/user.js");
const bookingRoutes = require("./routes/booking.js");

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
app.use('/tours', toursRoutes);
app.use('/staff', staffRoutes);
app.use('/user', userRoutes);
app.use('/booking', bookingRoutes)

// Error Middleware
app.use((err, req, res, next) => {
      const statusCode = err.status || 500;
      console.error(err.message, err.stack);
      res.status(statusCode).json({ message: err.message });
});

app.listen(portNumber, function () {
      console.log("Spacetrain API listening on port " + portNumber);
});