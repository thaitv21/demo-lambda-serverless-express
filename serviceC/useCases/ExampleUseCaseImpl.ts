import { exampleRepository } from "../repositories";
import { ExampleUseCase } from "./interfaces/ExampleUseCase";

export default class ExampleUseCaseImpl implements ExampleUseCase {
  doSomething = async () => exampleRepository.doSomethingSQL();
}