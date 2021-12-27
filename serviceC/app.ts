import cors from 'cors';
import express, { Request, Response } from "express";
import compression from 'compression';
import invokeFunction, { InvokeParams } from 'invoke-function';
import { exampleUseCase } from './useCases';

const app = express();

app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async function(req: Request, res: Response) {
  const example = await exampleUseCase.doSomething();
  res.json({message: example});
});

export default app;