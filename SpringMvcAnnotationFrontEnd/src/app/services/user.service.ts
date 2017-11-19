import { Injectable } from '@angular/core';
import { Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { HttpClient } from './htttpclient.service';
import { IUser } from '../model/IUser';

@Injectable()
export class UserService {

  REST_SERVICE_URI: string = environment.api_url + '/user/';
  // httpClient: HttpClient;

  constructor(private http: HttpClient) {
     // this.http = this.httpClient;
  }

  fetchAllUsers(): Observable<IUser[]> {
    return this.http.get(this.REST_SERVICE_URI)
      .map((res: Response) => <IUser[]> res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }

  createUser(user) {
    return this.http.post(this.REST_SERVICE_URI, user)
      .map((res: Response) => res)
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }

  updateUser(user, id) {
    return this.http.put(this.REST_SERVICE_URI + id, user)
      .map((res: Response) => <IUser[]> res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }

  deleteUser(id) {
    return this.http.delete(this.REST_SERVICE_URI + id)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }


}
