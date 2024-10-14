import { Affiliation } from "./affiliation";
import { Gender } from "./gender";

export interface Character {
  id:          number;
  name:        string;
  ki:          string;
  maxKi:       string;
  race:        string;
  gender:      Gender;
  description: string;
  image:       string;
  affiliation: Affiliation;
  deletedAt:   null;
}


