/** @jsx React.DOM */
var DefaultLayout = require('../layouts/default/main'),
    Navigator = require('./navigator'),
    ForecastToday= require('./forecast.today.jsx'),
    ForecastFull = require('./forecast.full.jsx'),
    ForecastShort = require('./forecast.short.jsx'),
    CityDropDown = require('./city.dropdown.jsx'),
    ForecastHourly = require('./forecast.hourly.jsx'),
    DetailsMenu = require('./details.menu.jsx'),
    ForecastMap = require('./forecast.map.jsx');

var Index = React.createClass({
    render: function() {
        return (            
            <DefaultLayout title={this.props.title} info={this.props.info}>
                <Navigator city={this.props.info.name} ></Navigator>
                <ForecastToday today={this.props.today}></ForecastToday>                
                <CityDropDown></CityDropDown>                
                <div id="hint__forecast-base" className="hint" style={{"top": "198px", "left": "524px", "display": "none"}}>
                    <p className="hint__text">На основе прогноза</p>
                </div>
                <DetailsMenu></DetailsMenu>
                <ForecastFull full={this.props.full}></ForecastFull>
                <ForecastShort short={this.props.short}></ForecastShort>                
                <ForecastHourly hours={this.props.hourly.hours} min={this.props.hourly.min} max={this.props.hourly.max} half={this.props.hourly.half}></ForecastHourly>
                <ForecastMap map={this.props.map}></ForecastMap>
            </DefaultLayout>
        );
    }
});

module.exports = Index;
