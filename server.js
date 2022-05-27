
const http = require('http');
const fs = require('fs');
const config = require('./server-config.json');
const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));

app.listen(config.PORT, () => {
    console.log(`Server Started on port:${config.PORT}`)
});
