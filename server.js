const express = require('express');
const app = express();
const path = require('path');
const api = require('./server/routes/api');

app.use(express.static(path.join(__dirname, 'node_modules')));
app.use('/', api);
app.set('view engine', 'ejs');

const port = 3000;
app.listen(port, function() {
    console.log(`Running on port ${port}`);
})