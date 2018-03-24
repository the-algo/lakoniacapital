import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SessionService } from './session.service';
import 'rxjs/Rx';

@Injectable()
export class RestServiceApiService {

  private http: Http = null;

  private apiLink = "http://192.168.0.5:2158/";
  private registerUser = this.apiLink + "oilwell/auth/users";
  private loginUser = this.apiLink + "oilwell/auth/login";

  constructor(@Inject(Http) http: Http, private session: SessionService) {
    this.http = http;
  }

  // Clearing Session
  clearSession() {
    localStorage.removeItem('jsakfjaslhsfjkaldshfjkdslfhjsdll');
  }


  genericGET(url: string) {
    return this.http.get(url, this.getOptionsWithToken()).map((response) => {
      return this.fiterResponse(response);
    }, (error) => { return { error: true, message: "Server Busy" } });
  }
  genericPOST(url: string, data): Observable<any> {
    return this.http.post(url, data, this.getOptionsWithToken()).map((response) => {
      return this.fiterResponse(response);
    }, (error) => { return { error: true, message: "Server Busy" } });
  }
  genericPUT(url: string, data): Observable<any> {
    return this.http.put(url, data, this.getOptionsWithToken()).map((response) => {
      return this.fiterResponse(response);
    }, (error) => {
      return { error: true, message: "Server Busy" }
    });
  }
  fiterResponse(response: any) {
    let json: any = response.json()
    if (json.hasOwnProperty('error')) {
      if (json.error === true) {
        this.session.clearSession()
      }
    }
    return json;
  }
  genericDELETE(url: any): Observable<any> {
    return this.http.delete(url, this.getOptionsWithToken()).map((response) => {
      return response.json();
    }, (error) => {
      return { error: true, message: 'Server Busy' }
    });
  }


  // Registration API
  signUp(param: any): Observable<any> {
    var para = {
      email: param.email,
      password: param.password,
      username: param.userName
    }
    return this.http.post(this.registerUser, para).map((response) => {
      return response.json();
    }, (error) => {
      return null
    });
  }

  // Login API
  signIn(param: any): Observable<any> {
    var data = {
      username: param.userName,
      password: param.password
    }
    //return this.genericPOST(this.loginUser, data);

    return this.http.post(this.loginUser, data).map((response) => {
      return response.json();
    }, (error) => {
      return null
    });
  }

  // Getting Token
  getOptionsWithToken() {
    var head = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.session.getToken() });
    return new RequestOptions({ headers: head });
  }

}
