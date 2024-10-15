import { Component, Input, output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faAnglesLeft, faChevronLeft, faChevronRight, faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { Links } from '../../core/models';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [
    FontAwesomeModule,

  ],
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {
  @Input() links!: Links
  onChangePage = output<string>()

  faAnglesLeft = faAnglesLeft
  faChevronLeft = faChevronLeft
  faChevronRight = faChevronRight
  faAnglesRight = faAnglesRight

  changePage(name: string): void {
    this.onChangePage.emit(name)
  }
}
