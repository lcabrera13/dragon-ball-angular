import { OriginPlanet } from "./origin-planet";
import { Transformation } from "./transformation";

export interface CharacterDetail {
  id:              number;
  name:            string;
  ki:              string;
  maxKi:           string;
  race:            string;
  gender:          string;
  description:     string;
  image:           string;
  affiliation:     string;
  deletedAt:       null;
  originPlanet:    OriginPlanet;
  transformations: Transformation[];
}


