
const http = require('http');
const fs = require('fs');
const config = require('./server-config.json');
const express = require('express');
const app = express();

const AREA_JSON_FILE = __dirname + '/data/area.json';

app.use(express.static(__dirname + '/public'));

app.listen(config.PORT, () => {
    console.log(`Server Started on port:${config.PORT}`)
});

async function askForWeather(areaName) {
    const { code, name } = textToAreaCode(areaName);

    try {
        const response = await fetch(config.WEATHER_URL + code + '.json');
        if (!response.ok) {
            return null;
        }
        const json = await response.json();

        
    }
}

function textToAreaCode(text) {
    if (!text) {
        return config.WEATHER_DEFAULT_AREA;
    }
    for (const [code, value] of Object.entries(area.offices)) {
        const name = value.name;
        console.log(name)
        const regexp = new RegExp(text);
        if (name.match(regexp)) {
            return { name, code };
        }
    }
    return config.WEATHER_DEFAULT_AREA;
}