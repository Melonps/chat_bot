
const http = require('http');
const fs = require('fs');
const config = require('./server-config.json');
const express = require('express');
const app = express();
const fetch = require('node-fetch');
const AREA_JSON_FILE = './public/data/area.json';
const areas = JSON.parse(fs.readFileSync(AREA_JSON_FILE, 'utf-8'));

app.use(express.static(__dirname + '/public'));

app.listen(config.PORT, () => {
    console.log(`Server Started on port:${config.PORT}`)
    console.log("http://localhost:8080/");
});

app.get('/chat', async function (req, res) {
    const text = req.query.text || '';
    const reply = await askForWeather(text);
    console.log(reply);
    res.json(reply);
});


function textToAreaCode(text) {
    if (!text) {
        return  config.WEATHER_DEFAULT_AREA;
    }
    for (const [code, value] of Object.entries(areas.offices)) {
        const name = value.name;
        console.log("###### name ######");
        console.log(name)
        const regexp = new RegExp(text);
        if (name.match(regexp)) {
            return { name, code };
        }
    }
    return config.WEATHER_DEFAULT_AREA;
}
async function askForWeather(areaName) {
    const { code, name } = textToAreaCode(areaName);

    try {
        const response = await fetch(config.WEATHER_URL + code + '.json');
        if (!response.ok) {
            return null;
        }
        const json = await response.json();
        //console.log(json);
        const latest = json[0].timeSeries[0].areas[0];
        //console.log(latest);
        const reply = createReply(`${name}の天気は${latest.weathers[1]}でしょう`);
        //console.log(reply);
        return reply;
    } catch (error) {
        console.error(error);
        return null;
    }
}

function createReply(text, linkUrl = null, imageUrl = null, score = -1.0) {
    return {
        text, linkUrl, imageUrl, score,
    };
}