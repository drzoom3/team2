var info = require('../helpers/locality.info.helper.js');

module.exports = function (req, res) {
    var geoid = req.params.geoid;
    
    info(geoid).then(function (result) {        
        if (result) {
            var fact = result.fact;
            var data = [
                fact.temp + "ºC, " + fact.weather,
                "Ветер: " + fact.wind_speed + " м/с " + fact.wind,
                "Влажность: " + fact.humidity + "%",
                "Давление: " + fact.pressure + " мм рт. ст.",
                "<a href=\"/" + geoid + "\">Подробнее</a>"
            ];
        } else {
            var data = []
        }
        res.json(data.join("<br/>"));
    });
};