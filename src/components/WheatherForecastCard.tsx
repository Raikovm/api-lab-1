import { WeatherForecastDto } from "../models";

const weatherIconsMap = new Map<number, string>([
    [200, '⛈'],    [201, '⛈'],    [202, '⛈'],    [230, '🌩'],    [231, '🌩'],    [232, '🌩'],    [233, '🌩'],
    [300, '🌧'],    [301, '🌧'],    [302, '🌧'],    
    [500, '🌧'],    [501, '🌧'],    [502, '🌧'],    [511, '🌧'],    [520, '🌧'],    [521, '🌦'],    [522, '🌧'],
    [600, '🌨'],    [601, '🌨'],    [602, '🌨'],    [610, '🌨'],    [611, '🌨'],    [612, '🌨'],    [621, '🌨'],    [622, '🌨'],    [623, '🌨'],
    [700, '🌫'],    [711, '🌫'],    [721, '🌫'],    [731, '🌫'],    [741, '🌫'],
    [800, '☀'],    [801, '🌤'],    [802, '⛅'],    [803, '🌥'],    [804, '🌥'],
    [900, '🌧'],
]);

type WeatherForecastCardProps = {
    forecast: WeatherForecastDto
}

export const WeatherForecastCard = ({ forecast }: WeatherForecastCardProps) =>     
<>
    <div className="shadow hover:shadow-lg rounded-md p-4 bg-blue-200 m-3 text-gray-700 flex ">
        <div className="text-left flex-auto">
            <span className="md:text-[1.5rem] font-bold">{weatherIconsMap.get(forecast.weather.code)} {forecast.weather.description} </span> <br />
            <span className="md:text-[1.2rem]">{new Date(forecast.datetime).toLocaleDateString('ru-RU')}</span> <br />
            <span className="md:text-[1.0rem]">Highest temperature: {forecast.max_temp.toString()}&nbsp;°C</span> <br />
            <span className="md:text-[1.0rem]">Lowest temperature: {forecast.low_temp.toString()}&nbsp;°C</span> <br />
            <span className="md:text-[1.0rem]">Wind: {forecast.wind_spd.toString()}&nbsp; m/s, {forecast.wind_cdir_full}</span>
        </div>
        <div className="md:text-[1.2rem] flex-auto text-right font-bold">
            <span>{forecast.temp.toString()}&nbsp;°C</span>
        </div>

    </div>
</>
