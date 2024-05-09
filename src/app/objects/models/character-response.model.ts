import { CharacterEntity } from "../entities/character.entity";

export interface CharacterResponseModel {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: CharacterEntity[];
}
