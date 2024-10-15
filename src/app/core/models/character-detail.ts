import { Affiliation } from "./affiliation";
import { Gender } from "./gender";
import { OriginPlanet } from "./origin-planet";
import { Race } from "./race";
import { Transformation } from "./transformation";

export interface CharacterDetail {
  id:              number;
  name:            string;
  ki:              string;
  maxKi:           string;
  race:            Race;
  gender:          Gender;
  description:     string;
  image:           string;
  affiliation:     Affiliation;
  deletedAt:       null;
  originPlanet:    OriginPlanet;
  transformations: Transformation[];
}


