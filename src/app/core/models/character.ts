import { Affiliation } from "./affiliation";
import { Gender } from "./gender";
import { Race } from "./race";

export interface Character {
  id:          number;
  name:        string;
  ki:          string;
  maxKi:       string;
  race:        Race;
  gender:      Gender;
  description: string;
  image:       string;
  affiliation: Affiliation;
  deletedAt:   null;
}


