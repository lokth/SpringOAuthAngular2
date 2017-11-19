import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { UserComponent } from './user/user.component';
import {Route, RouterModule, Routes} from '@angular/router';

import { HttpClient } from './services/htttpclient.service';
// import { UserService } from './services/user.service';
import {HttpModule} from '@angular/http';

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  // {path: '', component: UserComponent}
]


@NgModule({
  declarations: [
     AppComponent
    //UserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  // providers: [HttpClient, UserService],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
