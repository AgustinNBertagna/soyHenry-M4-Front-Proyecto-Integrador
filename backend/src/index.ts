import "reflect-metadata";
import { PORT } from "./config/envs";
import App from "./config/server";
import DB from "./config/typeorm";

DB.initialize()
  .then(() => {
    console.log("Database successfully connected.");
    App.listen(PORT, () =>
      console.log("App listening on: http://localhost:3000")
    );
  })
  .catch(() => console.log("Database refused connection"));
