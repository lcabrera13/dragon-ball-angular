import { Component, input } from '@angular/core';
import { Character } from '../../core/models';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './character-card.component.html',
})
export class CharacterCardComponent {
  character = input.required<Character>()
}
