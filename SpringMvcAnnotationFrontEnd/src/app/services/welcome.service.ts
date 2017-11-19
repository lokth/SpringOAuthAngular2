// import { Injectable } from '@angular/core';
// import { Http, Response, Headers, RequestOptions } from '@angular/http';
// import { Observable } from 'rxjs/Rx';
// import { environment } from '../../environments/environment';
//
// @Injectable()
// export class WelcomeService {
//
//   constructor(private http: Http) { }
//
//   getGreeting() {
//     return this.http.get(environment.api_url + '/')
//       .map((res: Response) => res.json())
//       .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
//   }
//
//   getAdmin() {
//     return this.http.get(environment.api_url + '/admin')
//       .map((res: Response) => res.json())
//       .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
//   }
//
//   getDba() {
//     return this.http.get(environment.api_url + '/dba')
//       .map((res: Response) => res.json())
//       .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
//   }
//
//   getAccessDeniedPage(){
//     return this.http.get(environment.api_url + '/Access_Denied')
//       .map((res: Response) => res.json())
//       .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
//   }
//
// }
