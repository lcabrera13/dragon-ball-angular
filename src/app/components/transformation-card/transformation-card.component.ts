import { Component, input } from '@angular/core';
import { Transformation } from '../../core/models';

@Component({
  selector: 'app-transformation-card',
  standalone: true,
  imports: [
  ],
  templateUrl: './transformation-card.component.html',
})
export class TransformationCardComponent {
  transformation = input.required<Transformation>()
}
