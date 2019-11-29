const error = require('../middleware/error');
const config = require('config');
const mongoose = require('mongoose');
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const users = require('./routes/users')
const auth = require('./routes/auth')
const express = require('express');
const app = express();

if (!config.get('jwtPrivateKey')) {
    console.error('FATAL ERROR: jwtPrivateKey is not defined.');
    process.exit(1);
}
mongoose.connect('mongodb://localhost/vidly')
.then(() => console.log('Connected to MongoDB...'))
.catch( err => console.error('Could not Connect to MongoDB...'));

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use(error);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));