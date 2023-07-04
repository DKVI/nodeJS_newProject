/** @format */

const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const handlebars = require('express-handlebars').engine;
const app = express();
const port = process.env.PORT || 3000;
console.log('env: ', process.env.PORT);
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
console.log(__dirname);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', handlebars());

app.set('view engine', 'handlebars');

app.set('views', path.join(__dirname, 'resources', 'views'));

const route = require('./routes');

// Route init
route(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
