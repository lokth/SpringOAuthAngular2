import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import 'rxjs/Rx';

@Injectable()
export class HttpClient {

  headers: any = new Headers();
  AUTH_SERVICE_URI: string = environment.auth_server_uri;
  qpm_password_grant = '?grant_type=password&username=bill&password=abc123';
  qpm_access_token = '?access_token=';

  requestUrl = this.AUTH_SERVICE_URI + this.qpm_password_grant;

  constructor(private http: Http) {
    console.log("Constructor is called");
    // this.createAuthorizationHeader(this.headers);
    // this.sendTokenRequest();
  }


  // login(loginDetails, url) {
  //
  //   let headers = new Headers({
  //     'Authorization': 'Basic ' + btoa(loginDetails.login + ':' + loginDetails.pass),
  //     'X-Requested-With': 'XMLHttpRequest' // to suppress 401 browser popup
  //   });
  //
  //   let options = new RequestOptions({
  //     headers: headers
  //   });
  //
  //   return this.http.post(url,{}, options)
  //             .catch((error: any) => Observable.throw(error.json().error || 'Server Error')); // handle 401 error - bad credentials
  // }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'Basic ' + btoa('my-trusted-client:secret'));
  }

  sendTokenRequest() {
    console.log("I am here: "+this.AUTH_SERVICE_URI + this.qpm_password_grant);
    // this.http.post(this.requestUrl, {}, {headers : this.headers});

    // console.log(this.headers);

    let headers = new Headers();
    headers.append('Content-Type', 'text/plain');
    headers.append('Accept', 'application/json');
    headers.append('authentication', 'Basic ' + btoa('my-trusted-client:secret'));

    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.requestUrl, {},  options).map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }

  get(url) {
    return this.http.get(url, {headers : this.headers});
  }

  post(url, data) {
    return this.http.post(url, data, {
      headers : this.headers
    });
  }

  put(url, data) {
    return this.http.put(url, data, {
      headers : this.headers
    });
  }

  delete(url) {
    return this.http.delete(url, {
      headers : this.headers
    });
  }

}
