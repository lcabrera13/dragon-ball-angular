import { NgFor } from '@angular/common'
import { HttpClient } from '@angular/common/http'
import { Component, type OnInit } from '@angular/core'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faAnglesLeft, faChevronLeft, faChevronRight, faAnglesRight } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [FontAwesomeModule, NgFor],
  templateUrl: './characters.component.html',
})
export class CharactersComponent implements OnInit {
  faAnglesLeft = faAnglesLeft
  faChevronLeft = faChevronLeft
  faChevronRight = faChevronRight
  faAnglesRight = faAnglesRight

  links: any = {}
  items: any[] = []

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getCharacters('https://dragonball-api.com/api/characters?limit=12')
  }

  getCharacters(url: string): void {
    this.http
      .get(url)
      .subscribe((data: any) => {
        const { items, links, meta } = data
        this.items = items
        this.links = links
      })
  }
}
