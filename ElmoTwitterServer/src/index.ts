import express from "express";
import * as bodyParser from "body-parser";
import routes from "./controller/routes";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || "8000";

app.use(process.env.API_PREFIX, routes);

app.listen(port, (err) => {
  if (err) return console.error(err);
  return console.log(`Server is listening on ${port}`);
});
