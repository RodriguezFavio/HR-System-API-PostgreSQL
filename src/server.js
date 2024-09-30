const express = require('express');
const bodyParser = require('body-parser');
const coursesRoutes = require('./routes/courses');
const { errorMiddleware } = require('./middleware/error');
const app = express();

app.use(bodyParser.json());

app.use('/api', coursesRoutes);

app.use(errorMiddleware);

app.listen(8080);
