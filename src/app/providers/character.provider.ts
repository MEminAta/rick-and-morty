import { Injectable } from "@angular/core";
import { HttpService } from "../services/http.service";
import { CharacterFilterModel } from "../objects/models/character-filter.model";
import endpointConst from "../constants/endpoint.const";
import { CharacterResponseModel } from "../objects/models/character-response.model";
import { CharacterEntity } from "../objects/entities/character.entity";

@Injectable({
  providedIn: "root"
})
export default class CharacterProvider {
  constructor(private httpService: HttpService) {}

  getCharacters(filters: CharacterFilterModel) {
    return this.httpService.get<CharacterResponseModel>(
      endpointConst.getCharacters +
        "?page=" +
        filters.page +
        "&name=" +
        filters.name +
        "&status=" +
        filters.status +
        "&species=" +
        filters.species +
        "&gender=" +
        filters.gender
    );
  }

  getCharacter(id: number) {
    return this.httpService.get<CharacterEntity>(endpointConst.getCharacter + id);
  }
}
