import {User} from "../../models/User";

export interface UserRepository {
  getListUsers: () => Promise<Array<User>>
}