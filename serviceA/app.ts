import cors from 'cors';
import express from "express";
import compression from 'compression';

const app = express();

app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.json({message: 'Hello World!'});
});

export default app;