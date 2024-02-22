import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.get("/", (request, response) => {
  return response.json('teste 22');
});

export default app;