import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClickerComponent } from './components/clicker/clicker.component';

const routes: Routes = [
  {
    path: 'clicker',
    component: ClickerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
