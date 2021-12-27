import {connect, Model} from "mongoose";
import UserModel from "./mongo/UserModel";
import {User} from "../models/User";

export default class MongoDatabaseProvider {
  constructor() {
    connect('mongodb://localhost:27017/test').then();
  }

  persist = async <T>(object: T) => {
    const model = this.mapper(object);
    if (model) {
      await model.save();
    }
  }

  retrieve = async <T>() : Promise<T> => {
    return Promise.reject()
  }

  private mapper = <T>(object: T) => {
    if (object instanceof User) {
      return new UserModel(object);
    }
  }
}