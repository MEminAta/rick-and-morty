import { Component, EventEmitter, Output } from "@angular/core";
import { CharacterFilterModel } from "../../objects/models/character-filter.model";
import { DxSelectBoxModule, DxTextBoxModule } from "devextreme-angular";

@Component({
  selector: "app-search-bar",
  standalone: true,
  imports: [DxSelectBoxModule, DxTextBoxModule],
  templateUrl: "./search-bar.component.html",
  styleUrl: "./search-bar.component.scss"
})
export class SearchBarComponent {
  @Output() queryChange = new EventEmitter<CharacterFilterModel>();
  characterFilterModel = new CharacterFilterModel();

  constructor() {}

  onQueryChange(): void {
    this.queryChange.emit(this.characterFilterModel);
  }
}
