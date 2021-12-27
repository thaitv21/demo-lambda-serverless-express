import { mongoProvider, sequelizeProvider } from "../providers";
import { ExampleRepository } from "./interfaces/ExampleRepository";

export default class ExampleRepositoryImpl implements ExampleRepository {
  doSomethingNoSQL = async () => mongoProvider.models.ExampleModel.create({name: 'Example 1'});

  doSomethingSQL = async () => sequelizeProvider.models.ExampleModel.create({name: 'Example 2'});
}