import { Compaign } from "./Compaign";

export interface Profile {
  id: number,
  profileID: number,
  country: string,
  marketPlace: string,
  compaigns: Compaign[],
}
