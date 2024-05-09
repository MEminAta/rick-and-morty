import { Component, HostListener, inject, OnInit } from "@angular/core";
import { CommonModule, ViewportScroller } from "@angular/common";
import CharacterProvider from "../../providers/character.provider";
import { CharacterFilterModel } from "../../objects/models/character-filter.model";
import { catchError, map } from "rxjs";
import { CharacterResponseModel } from "../../objects/models/character-response.model";
import { CharacterEntity } from "../../objects/entities/character.entity";
import { RouterLink } from "@angular/router";
import { SearchBarComponent } from "../../components/search-bar/search-bar.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, RouterLink, SearchBarComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss"
})
export class HomeComponent implements OnInit {
  private readonly viewport = inject(ViewportScroller);
  characters: CharacterEntity[] = [];
  characterFilter: CharacterFilterModel = new CharacterFilterModel();
  maxPage = 0;

  isGoToTopActive = false;

  constructor(private readonly characterProvider: CharacterProvider) {}

  ngOnInit(): void {
    this.fetchCharacters().subscribe(data => (this.characters = data));
  }

  fetchCharacters() {
    return this.characterProvider.getCharacters(this.characterFilter).pipe(
      catchError(() => (this.characters = [])),
      map((data: CharacterResponseModel): CharacterEntity[] => {
        this.maxPage = data.info.pages;
        return data.results;
      })
    );
  }

  @HostListener("window:scroll", [])
  onScroll(): void {
    if (this.characterFilter.page == this.maxPage) return;

    if (this.bottomReached()) {
      this.characterFilter.page++;

      this.fetchCharacters().subscribe(data => {
        this.characters = [...this.characters, ...data];
      });
    }
    this.isGoToTopActive = this.leavedTop();
  }

  bottomReached(): boolean {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
  }

  leavedTop(): boolean {
    return window.scrollY >= 500;
  }

  scrollToTop(): void {
    this.viewport.scrollToPosition([0, 0]);
  }

  search(data: CharacterFilterModel): void {
    data.page = 1;
    this.characterFilter = data;

    console.log(data);
    this.fetchCharacters().subscribe(data => {
      this.characters = data;
    });
  }
}
