import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { CharacterEntity } from "../../objects/entities/character.entity";
import CharacterProvider from "../../providers/character.provider";
import { NgIf } from "@angular/common";

@Component({
  selector: "app-character",
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: "./character.component.html",
  styleUrl: "./character.component.scss"
})
export class CharacterComponent implements OnInit {
  constructor(private CharacterService: CharacterProvider) {}

  private route = inject(ActivatedRoute);
  character?: CharacterEntity;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    if (id) {
      this.CharacterService.getCharacter(id).subscribe(data => {
        this.character = data;
      });
    }
  }
}
