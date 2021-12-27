import { Schema, model } from 'mongoose';
import {User} from "../../models/User";

const schema = new Schema<User>({
  username: { type: String, required: true },
});

const UserModel = model<User>('User', schema);

export default UserModel;