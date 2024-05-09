export class CharacterEntity {
  id: number = 0;
  name: string = "";
  status: string = "";
  species: string = "";
  type: string = "";
  gender: string = "";
  origin: {
    name: string;
    url: string;
  } = { name: "", url: "" };
  location: {
    name: string;
    url: string;
  } = { name: "", url: "" };
  image: string = "";
  episode: string[] = [];
  url: string = "";
  created: string = "";
}
