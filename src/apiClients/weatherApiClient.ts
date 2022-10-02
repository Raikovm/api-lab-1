import { WeatherForecastDto } from "../models";
import { httpGet } from "./apiClients";

const weatherApiKey = process.env.WEATHERBIT_API_KEY;

export const getWeatherForecast = (cityName: string): Promise <WeatherForecastDto[]> => {
    return httpGet<WeatherForecastDto[]>(`https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName}&key=${weatherApiKey}`);
}
  