var getMapData = require('../helpers/map.data.helper.js');

module.exports = function (req, res) {
    var zoom = req.query.zoom,
        box = req.query.bbox.split(","),
        lt = [box[1], box[2]].join(","),
        rb = [box[3], box[0]].join(","),
        callback = req.query.callback;
    
    getMapData({zoom: zoom, lt: lt, rb: rb}).then(function (result) {
        var places = [];
        result.map(function (object, i) {
            var o = {
                "type": "Feature",
                "id": object.geoid,                
                "geometry": {
                    "type": "Point",
                    "coordinates": [object.lat, object.lon]
                },
                "properties": {
                    "balloonContent": "Содержимое балуна",
                    "hintContent": object.name,
                    "icon": "http://ekb.shri14.ru/icons/" + object.weather_icon + ".svg",
                    "temp": object.temp,                
                    "balloonContent": ""
                }
            }
            places[places.length] = o;
        });
        
        var re = {
          "type": "FeatureCollection",
          "features": places
        }
        res.set('Content-Type', 'text/javascript');
        res.send(req.query.callback + '('+ JSON.stringify(re) + ');');
    });
};
