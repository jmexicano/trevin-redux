import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClickerComponent } from './components/clicker/clicker.component';
import { DrinksComponent } from './components/drinks/drinks.component';
import { JokeComponent } from './components/joke/joke.component';

const routes: Routes = [
  {
    path: 'clicker',
    component: ClickerComponent
  },
  {
    path: 'drinks',
    component: DrinksComponent
  },
  {
    path: 'jokes',
    component: JokeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
