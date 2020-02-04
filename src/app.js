const express = require('express');
const phoneRoutes = require('./routes/phoneRoute');

const app = express();
const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.header('Acess-Control-Allow-Methods', 'OPTIONS, GET');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Setting the routes to the app
phoneRoutes(app);

app.listen(PORT, () => {
  console.log(`Phones challenge backend running on port:  ${PORT}`);
});