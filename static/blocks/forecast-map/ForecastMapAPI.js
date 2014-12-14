var ForecastMapAPI = (function() {    
    return {
        init: function() {
            var $map = $("#map"),
                options = {
                    lat: $map.attr("data-lat"),
                    lon: $map.attr("data-long"),
                    geoid: $map.attr("data-geoid"),
                    temp: $map.attr("data-temp"),
                    weather_icon: $map.attr("data-icon")
                };
                
            var myMap = new ymaps.Map('map', {
                center: [options.lat, options.lon],
                zoom: 10,
                controls: ['zoomControl',  'typeSelector',  'fullscreenControl']
            });
            
            var pointLayout = ymaps.templateLayoutFactory.createClass('<div class="forecast-map__point"><img src="{{ properties.icon }}" width="24" height="24"/> <span>{{ properties.temp }}</span></div>'),
                baloonLayout = ymaps.templateLayoutFactory.createClass('<div>$[properties.balloonContent]</div>');
            
            var loadingObjectManager = new ymaps.LoadingObjectManager('/map-data?bbox=%b&zoom=%z', {
                clusterize: true,
                clusterHasBalloon: false,
                geoObjectIconLayout: pointLayout,
                geoObjectIconImageOffset: [-20, -40],
                geoObjectIconShape: {   
                    type: 'Polygon',
                    coordinates: [
                        [[-20,-40],[45,-40],[45,-12],[10,-12],[0,-2],[0,-12],[-20,-12]]
                    ]
                },
                geoObjectBalloonContentLayout: baloonLayout
                
            });
            
            loadingObjectManager.objects.events.add("click", function (e) {                
                var geoid = e.get('objectId');                
                loadingObjectManager.objects.setObjectProperties(geoid, {
                    balloonContent: "Идет загрузка данных..."
                });                
                $.get("/map/"+geoid)
                .always(function(data) {                    
                    loadingObjectManager.objects.setObjectProperties(geoid, {
                        balloonContent: data
                    });
                    loadingObjectManager.objects.balloon.open(geoid);
                });                
            });
            
            myMap.geoObjects.add(loadingObjectManager);
        }
    }
})()

ymaps.ready(ForecastMapAPI.init);
