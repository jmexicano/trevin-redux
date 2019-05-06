import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickerComponent } from './components/clicker/clicker.component';
import { DrinksComponent } from './components/drinks/drinks.component';
import { NavComponent } from './components/nav/nav.component';
import './include/bootstrap';
import { metaReducers, reducers } from './reducers';


@NgModule({
  declarations: [
    AppComponent,
    ClickerComponent,
    NavComponent,
    DrinksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
