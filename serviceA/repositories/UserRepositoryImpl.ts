import {UserRepository} from "./interfaces/UserRepository";
import {User} from "../models/User";
import {mongodbProvider} from "../providers";

export default class UserRepositoryImpl implements UserRepository {
  getListUsers = async () => mongodbProvider.retrieve<Array<User>>()
}