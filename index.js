const express = require('express');
const router = require('./routers');
const app = express();
const port = 3000;

// EXAMPLE MIDDLEWARE 
var myLogger = (req, res, next) => {
    console.log('LOGGED');
    next();
}

// USE EXAMPLE MIDDLEWARE
app.use(myLogger);

app.use(router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});