import { WeatherDescriptionDto } from "./WeatherDescriptionDto";

export interface WeatherForecastDto {
    /**
     * Wind direction string.
     */
    wind_cdir_full: string,

    /**
     * Wind speed.
     */    
    wind_spd: number,

    /**
     * Date.
     */
    datetime: Date,

    /**
     * Current temperature. 
     */
    temp: number,

    /**
     * Max temperature.
     */
    max_temp: number,

    /**
     * Min temperature.
     */
    low_temp: number,

    /**
     * Weather description.
     */
    weather: WeatherDescriptionDto,
}
