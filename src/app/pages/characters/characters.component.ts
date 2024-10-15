import { Component, type OnInit } from '@angular/core'
import { RouterLink } from '@angular/router'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
// import { faAnglesLeft, faChevronLeft, faChevronRight, faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { CharactersService } from '../../core/services/characters.service'
import { CharacterCardComponent } from "../../components/character-card/character-card.component";
import { Character, Links } from '../../core/models'
import { PaginationComponent } from "../../components/pagination/pagination.component";

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, CharacterCardComponent, PaginationComponent],
  templateUrl: './characters.component.html',
})
export class CharactersComponent implements OnInit {
  links: Links | null = null
  items: Character[] = []

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.getCharacters()
  }

  getCharacters(url?: string): void {
    this.charactersService.getCharacters(url).subscribe({
      next: (data) => {
        const { items, links } = data
        this.items = items
        this.links = links
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
