// TODO: Declare use cases which can be used in this service here

import ExampleUseCaseImpl from "./ExampleUseCaseImpl";
import { ExampleUseCase } from "./interfaces/ExampleUseCase";

interface UseCases {
  exampleUseCase: ExampleUseCase,
}

const useCases : UseCases = {
  exampleUseCase: new ExampleUseCaseImpl(),
}

export const {
  exampleUseCase,
} = useCases;