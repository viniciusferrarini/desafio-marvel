import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterComponent } from './character/character.component';
import { CharacterDetailsComponent } from './character-details/character.details.component';

const routes: Routes = [
  {path: '', component: CharacterComponent},
  {path: 'character/details/:id', component: CharacterDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
