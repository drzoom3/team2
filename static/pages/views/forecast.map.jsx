/** @jsx React.DOM */

ForecastMap = React.createClass({
    render: function () {
        var map = this.props.map,
            lat = map.lat||55.76,
            long = map.long||37.64,
            temp = map.temp||0,
            icon = map.icon||"",
            geoid = map.geoid||213;      
    
        return (
            <div role="tabpanel" id="map" data-temp={temp} data-icon={icon} data-geoid={geoid} data-lat={lat} data-long={long} className="forecast-map tabs-panel fade" ></div>
        );
    }
});

module.exports = ForecastMap;