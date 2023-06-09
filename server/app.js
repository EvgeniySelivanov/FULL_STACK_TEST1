const express = require('express');
const { errorHandle, errorValidateHandle } = require('./middlewares/error.handlers');
const router = require('./routes');


const app = express();
app.use(express.static('public'));
app.use(express.json());
//http://localhost:3000/api
app.use('/api', router);

app.use(errorValidateHandle);
app.use(errorHandle);

module.exports = app;