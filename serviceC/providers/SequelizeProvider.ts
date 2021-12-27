import { Sequelize, ModelCtor } from "sequelize-typescript";
import { Example } from "../models/Example";
import ExampleModel from "./database/sequelize/models/ExampleModel";

interface Models {
  ExampleModel: ModelCtor<ExampleModel>
}

export default class SequelizeProvider {
  models: Models

  constructor() {
    const sequelize = new Sequelize(process.env.DB_NAME || '', process.env.DB_USERNAME || '', process.env.DB_PASSWORD, {
      host: process.env.DB_HOST,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      dialect: 'mysql',
      dialectOptions: {
        requestTimeout: 3000
      },
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
    });
    this.models = { ExampleModel };
    sequelize.addModels(Object.values(this.models));
    sequelize.authenticate().then(() => {
      sequelize.sync();
      console.log('Connection has been established successfully.');
    }).catch((err) => {
      console.error('Unable to connect to the database:', err);
    });
  }
}