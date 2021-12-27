import cors from 'cors';
import express from "express";
import compression from 'compression';
import invokeFunction, { InvokeParams } from 'invoke-function';

const app = express();

app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async function(req, res) {
  const invokeParams : InvokeParams<any> = {
    functionName: 'test-serviceA',
    path: '',
    querystring: {},
    data: {},
    method: 'GET'
  }
  const response = await invokeFunction(invokeParams);
  res.json(response);
});

export default app;