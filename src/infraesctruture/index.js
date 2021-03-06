import express from "express";
import "dotenv/config";
import routes from "./routes";
import "../infraesctruture/database";

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use("/api/v1", routes);
  }

  listen(port) {
    this.server.listen(port);
  }
}

export default App;
