const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoibmFscmFoYmkiLCJhIjoiY2p1enQ3dnFsMGJicjQ0b216NmpueDNzOSJ9.-8AvvKI8CWIgdAp5hQkKcQ&limit=1'

    request({url, json: true}, (error, data) => {
        
        if (error) {
            callback('Unable to connect to location service!', undefined)
        } else if (data.body.features.length === 0) {
            callback('Location is incorrect. Try again.', undefined)
        } else {
            callback(undefined, {
                longitude: data.body.features[0].center[0],
                latitude : data.body.features[0].center[1], 
                location : data.body.features[0].place_name

            })
        }
    })
}

module.exports = geocode