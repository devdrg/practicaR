import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import routes from './routes';

const app = express();

mongoose.connect('mongodb://admin:parola1@ds131711.mlab.com:31711/internshipdb', () => {
    console.log("Connected to mongodb");
});

/// Middleware
app.use(bodyParser.json());

app.use('/api', routes);

export default app;