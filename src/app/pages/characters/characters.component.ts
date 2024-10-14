import { NgFor } from '@angular/common'
import { Component, type OnInit } from '@angular/core'
import { RouterLink } from '@angular/router'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faAnglesLeft, faChevronLeft, faChevronRight, faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { CharactersService } from '../../core/services/characters.service'

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [FontAwesomeModule, NgFor, RouterLink],
  templateUrl: './characters.component.html',
})
export class CharactersComponent implements OnInit {
  faAnglesLeft = faAnglesLeft
  faChevronLeft = faChevronLeft
  faChevronRight = faChevronRight
  faAnglesRight = faAnglesRight

  links: any = {}
  items: any[] = []

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.getCharacters()
  }

  getCharacters(url?: string): void {
    this.charactersService.getCharacters(url).subscribe({
      next: (data) => {
        const { items, links, meta } = data
        this.items = items
        this.links = links
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
