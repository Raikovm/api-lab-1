import { createRouter } from "./context";
import { getWeatherForecast } from "../../apiClients";
import { z } from "zod";

export const weatherForecastRouter = createRouter().query("Forecast", {
  input: z
    .object({
      cityName: z.string(),
    }),
  async resolve({ input }) {
    return await getWeatherForecast(input.cityName);
  },
});
