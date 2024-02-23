import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import swaggerUi from 'swagger-ui-express';
import { specs } from './swaggerOptions';

import routes from "./routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(routes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

export default app;