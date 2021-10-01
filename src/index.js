const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const app = express();
const port = 5000;

const route = require('./routes');
const db = require('./config/db');

// Connect to DB
db.connect();

// override with POST having ?_method=PUT or DELETE
app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname, 'public')));
// Midleware
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

// Http logger
app.use(morgan('combined'));

// Template engine
app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
    },
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/resources/views'));

// Route init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
