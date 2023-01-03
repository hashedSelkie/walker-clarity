import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContractsComponent } from './components/contracts/contracts.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ServicesComponent,
    FooterComponent,
    ContractsComponent,
    AboutComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'services', component: ServicesComponent},
      {path: 'contracts', component: ContractsComponent},
      {path: 'about', component: AboutComponent},
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
