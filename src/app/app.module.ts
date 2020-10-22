import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { CassandraClientComponent } from './components/cassandra-client/cassandra-client.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CassandraClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path : 'home',
        component: MainComponent
      },
      {
        path : 'main',
        component: MainComponent
      },
      {
        path: '',
        redirectTo : '/home',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
