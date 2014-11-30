/** @jsx React.DOM */
var moment = require('moment'),
    momentLocales = require('../../../server/locales/moment.locale.js'),
    ForecastShortItem;
console.log( momentLocales );
moment.locale( 'ru', momentLocales );

ForecastShortItem = React.createClass({
    render: function () {
        var day = this.props.day,
            date = moment( day.date );
        console.log( date.get('day'), date.format('dd'), date.get('date') );
        return (
            <div className={( (date.get('day') == 0 || date.get('day') == 6) ? 'forecast-short__day forecast-short__day_holiday': 'forecast-short__day' )}>
                <div className="forecast-short__date">
                    <div className="forecast-short__date__weekday">{date.format('dd')}</div>
                    <div className="forecast-short__date__monthday">{date.get('date')}</div>
                </div>
                <div className="forecast-short__day__body" style={{"background-color": day.color_max}}>
                    <div className="forecast-short__day__icon"><img src={"http://ekb.shri14.ru/icons/" + day.weather_icon + ".svg"} width="32" height="32" alt="{day.weather}" title="{day.weather}" /></div>
                    <div className="forecast-short__day__precipitation">{day.weather}</div>                    
                    <div className="forecast-short__day__degree">{day.temp_max}</div>
                </div>
                <div className="forecast-short__day__footer" style={{"background-color": day.color_min}}>{day.temp_min}</div>
            </div>
        );
    }
});

module.exports = ForecastShortItem;
