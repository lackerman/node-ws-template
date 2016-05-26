'use strict';

const express = require('express');
const app = express();

const apiRoutes = require('./server/routes/api');
const staticRoutes = require('./server/routes/static');

app.use('/', staticRoutes);
app.use(process.env.API_ROOT_PATH || '/api/v1/', apiRoutes);

app.listen(process.env.PORT || 8080);
