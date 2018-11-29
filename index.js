const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());


// rotas
require('./src/models/index')(process.env.NODE_ENV);
require('./src/index')(app);

app.listen(9000, () => console.log('Express started at localhost:9000'));