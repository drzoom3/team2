/** @jsx React.DOM */
var ForecastToday = React.createClass({
    render: function () {
        var weatherToday = this.props.today;

        return (
            <div className="today-weather-wrapper">
                <div className="weather-main">
                    <div className="weather-main__container">
                        <span className="weather-main__when">сегодня</span>
                        <div className="weather-main__forecast" style={{"backgroundColor": weatherToday.now.color}}>
                            <div className="weather-main__degree">{weatherToday.now.temp > 0 ? "+" : ""}{weatherToday.now.temp} °C</div>
                            <div className="weather-main__icon" style={{"backgroundImage": "url(http://ekb.shri14.ru/icons/" + weatherToday.now.weather_icon + ".svg)"}}></div>
                            <span className="weather-main__condensation">{weatherToday.now.weather}</span>
                        </div>
                    </div>
                    <div className="weather-main__container">
                        <span className="weather-main__when">днем</span>
                        <div className="weather-main__forecast" style={{"backgroundColor": weatherToday.parts[0].color}}>
                            <span className="weather-main__degree">{weatherToday.parts[0].temp > 0 ? "+" : ""}{weatherToday.parts[0].temp} °C</span>
                            <div className="weather-main__icon" style={{"backgroundImage": "url(http://ekb.shri14.ru/icons/" + weatherToday.parts[0].weather_icon + ".svg)"}}></div>
                        </div>
                    </div>
                    <div className="weather-main__container">
                        <span className="weather-main__when">вечером</span>
                        <div className="weather-main__forecast" style={{"backgroundColor": weatherToday.parts[1].color}}>
                            <span className="weather-main__degree">{weatherToday.parts[1].temp > 0 ? "+" : ""}{weatherToday.parts[1].temp} °C</span>
                            <div className="weather-main__icon" style={{"backgroundImage": "url(http://ekb.shri14.ru/icons/" + weatherToday.parts[1].weather_icon + ".svg)"}}></div>
                        </div>
                    </div>
                    <div className="weather-main__container">
                        <span className="weather-main__when">ночью</span>
                        <div className="weather-main__forecast" style={{"backgroundColor": weatherToday.parts[2].color}}>
                            <span className="weather-main__degree">{weatherToday.parts[2].temp > 0 ? "+" : ""}{weatherToday.parts[2].temp} °C</span>
                            <div className="weather-main__icon" style={{"backgroundImage": "url(http://ekb.shri14.ru/icons/" + weatherToday.parts[2].weather_icon + ".svg)"}}></div>
                        </div>
                    </div>
                    <div className="weather-main__additional">
                        <span className="weather-main__when"></span>
                        <p className="weather-main__line">Давление: {weatherToday.now.pressure} мм рт. ст.</p>
                        <p className="weather-main__line">Ветер: {weatherToday.now.wind}, {weatherToday.now.wind_speed} м/с ( {Math.round(weatherToday.now.wind_speed * 3600 / 10)/100} км/ч)</p>
                        <p className="weather-main__line">Влажность: {weatherToday.now.humidity}%</p>
                        <p className="weather-main__line--margin-5-bottom">Восход: {weatherToday.now.sunrise} Заход: {weatherToday.now.sunset}</p>
                        <p className="weather-main__line">Данные зарегистрированы недавно</p>
                        <div className="tip" title="Здесь рыбы нет &copy;"></div>
                    </div>
                    <div className="weather-main__yesterday">
                    вчера {weatherToday.yesterday} °C
                    </div>
                </div>
                <div className="banner-wrapper"></div>
            </div>
        );
    }
});

module.exports = ForecastToday;

