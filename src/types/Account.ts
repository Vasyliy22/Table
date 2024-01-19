import { Profile } from "./Profile";

export interface Account {
  id: number,
  email: string,
  authToken: string,
  creationDate: string,
  profiles: Profile[],
}
