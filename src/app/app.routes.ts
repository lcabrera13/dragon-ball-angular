import { Routes } from '@angular/router'
import { CharactersComponent } from './pages/characters/characters.component'

export const routes: Routes = [
  {
    path: '',
    component: CharactersComponent,
  },
  {
    path: '**',
    component: CharactersComponent,
  },
]
