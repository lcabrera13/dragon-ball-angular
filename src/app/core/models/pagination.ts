import { Character } from "./character";
import { Links } from "./links";
import { Meta } from "./meta";

export interface Pagination {
  items: Character[];
  meta:  Meta;
  links: Links;
}
