import {Model, model, Schema} from 'mongoose';
import {Example} from '../../../../models/Example';

const schema = new Schema<Example>({
  name: {type: String, required: true}
});

const ExampleModel = model<Example>('Example', schema);

export default ExampleModel;