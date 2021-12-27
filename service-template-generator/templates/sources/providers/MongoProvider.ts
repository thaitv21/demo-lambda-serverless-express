import { Model, connect } from 'mongoose';
import { Example } from '../models/Example';
import ExampleModel from './database/mongo/models/ExampleModel';

interface Models {
  ExampleModel: Model<Example>
}

export default class MongoProvider {

  hasConnected = false;
  models: Models

  constructor() {
    this.models = {
      ExampleModel: ExampleModel
    };
    connect(process.env.MONGO_ENDPOINT || '').then(() => {
      this.hasConnected = true;
    });
  }

  waitForConnection = async () => {
    if (this.hasConnected) {
      return;
    }
    const interval = setInterval(() => {
      if (this.hasConnected) {
        clearInterval(interval);
      }
    }, 200);
  }
}