import { NgFor, NgIf } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../../core/services/characters.service';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [
    NgIf,
    NgFor
  ],
  templateUrl: './character.component.html',
})
export class CharacterComponent implements OnInit {
  character: any | null = null

  constructor(private charactersService: CharactersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.charactersService.getCharacter(id).subscribe({
      next: (data) => {
        this.character = data
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

}
