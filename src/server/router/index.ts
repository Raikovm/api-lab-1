// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";
import { weatherForecastRouter } from "./weatherRouter";


export const appRouter = createRouter()
  .transformer(superjson)
  .merge('weather.', weatherForecastRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
