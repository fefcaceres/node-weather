const request = require(`request`);
const argv = require(`yargs`).argv;
require(`dotenv`).load();

let api = process.env.MY_API_KEY;
let city = argv.c || `atlanta`;
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${api}`

request(url, function (err, response, body) {
    if (err) {
        console.log(`error:`, err);
    } else {
        let weather = JSON.parse(body);
        let message = `It's ${weather.main.temp} degrees in ${weather.name}!`
        console.log(message);
    }
});
