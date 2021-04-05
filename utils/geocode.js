const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoib25seWFua2l5cGFuZGV5IiwiYSI6ImNrbWMwejFsNTF2NjYyem16dnJzZHo3MTAifQ.4oZcj6bjFNPJQs2BBmZq1Q&item=1'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location servicess!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location.Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

geocode('philadelphiya', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)

})

module.exports = geocode