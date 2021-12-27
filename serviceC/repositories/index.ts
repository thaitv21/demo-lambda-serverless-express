// TODO: Declare repository objects which can be used in this service here

import ExampleRepositoryImpl from "./ExampleRepositoryImpl";
import { ExampleRepository } from "./interfaces/ExampleRepository";

interface Repositories {
  exampleRepository: ExampleRepository,
}

const repositories : Repositories = {
  exampleRepository: new ExampleRepositoryImpl(),
}

export const {
  exampleRepository,
} = repositories;