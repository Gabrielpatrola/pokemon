import { AppDataSource } from "./data-source"
import { PORT } from './configs/env'

import app from "./app";
import "reflect-metadata"

AppDataSource.initialize()
  .then(async () => {
    console.log("Data Source has been initialized!");
    app.listen(PORT, () => {
      console.log("Server is running on http://localhost:" + PORT);
    });
  })
  .catch((error) => console.log(error));