const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&units=metric&APPID=8b411bddb2cfe92b0147bc1a49a44eec'

    request({url, json: true}, (error, data) => {
        if (error) {
            callback('Unable to find weather service !', undefined)
        } else if (data.cod===400) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, data.body.weather[0].description + '. It is currently '+ data.body.main.temp + ' degrees out. There is a '+ data.body.clouds.all + '% cloudiness. The Humidity is '+ data.body.main.humidity + '. The wind speed is '+ data.body.wind.speed+'.')
        }
    })
}

module.exports = forecast