import { Column, Model, Table } from 'sequelize-typescript';
import { Example } from '../../../../models/Example';

@Table({tableName: 'examples'})
export default class ExampleModel extends Model implements Example {

  @Column
  name!: string

  @Column
  date!: Date

  toEntity = () => {
    const example : Example = {
      name: this.name,
    }
    return example;
  }
}