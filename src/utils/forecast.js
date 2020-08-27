const request = require("request")

const forecast = (latitude,longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=2dd493ed3e9292d7b4545314316df009&query='+ latitude + ',' + longitude + '&units=m'

    request({ url, json:true}, (error, {body}) =>{
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error){
            callback('Unable to find a location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ',' +'It is currently ' + body.current.temperature + ' degrees out.There is a ' + body.current.precip + '% chance of rain.'+ 'It feels like ' + body.current.feelslike + ' degrees out.')   
        }
    })

}

module.exports = forecast