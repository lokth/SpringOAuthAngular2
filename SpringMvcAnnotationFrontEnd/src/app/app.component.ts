import {Component, OnInit} from '@angular/core';
import { HttpClient } from './services/htttpclient.service';
import { environment } from '../environments/environment';
// import {Http} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  providers: [ HttpClient ]
})

export class AppComponent {
  title = 'Home - Spring Security Annotation Example ';

  REST_LOGIN_SERVICE_URI: string = environment.api_url + '/login';

  loginDetails: { login: string, pass: string; } = { login: 'bill', pass: 'abc123' };

  constructor(private httpService: HttpClient) {
    this.httpService.sendTokenRequest().subscribe(response => {
        response.json();
      },
      err => {
        console.log(err);
      });
  }

  // loginNow() {
  //   this.httpService.login(this.loginDetails, this.REST_LOGIN_SERVICE_URI).subscribe(() => {
  //       // this.router.navigateByUrl('/'); // login succeed
  //     }, error => {
  //       // this.error = "Bad credentials"; // or extract smth from <error> object
  //     });
  // }

}
