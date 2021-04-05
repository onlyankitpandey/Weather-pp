const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to Connect to Weather Services!', undefined)
        } else if (body.error) {
            callback('Unable to Find Location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + 'It is currently' + body.currently.temprature + 'degree out. There is a' + body.precProbability + '% chance of rain.')
        }

    })
}
module.exports = forecast