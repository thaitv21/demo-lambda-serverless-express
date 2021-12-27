export interface ExampleRepository {
  doSomethingNoSQL: () => Promise<any>
  doSomethingSQL: () => Promise<any>
}