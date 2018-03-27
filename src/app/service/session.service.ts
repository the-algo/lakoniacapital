import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Router } from '@angular/router';

@Injectable()
export class SessionService {

  public apiLink = 'http://192.168.0.5:2158/';
  // public apiLink = 'http://itbuildtech.com/angel/cgi-bin/v1/';

  userDetails = {};

  private TOKEN = '';

  private http: Http = null;

  constructor(@Inject(Http) http: Http, private _router: Router) {
    this.http = http;

  }
  setSession(data: any) {
    //console.log(data);
    sessionStorage.setItem("jsakfjaslhsfjkaldshfjkdslfhjsdll", JSON.stringify(data.userDetail));
    sessionStorage.setItem("TOKEN", data.token);
  }
  getToken() {
    return sessionStorage.getItem("TOKEN");
  }
  checkSession() {
    if (!this.isSession())
      this._router.navigate(['/auth/login']);
  }

  isSession() {
    if (sessionStorage.getItem("jsakfjaslhsfjkaldshfjkdslfhjsdll") != null)
      return true;
    return false;
  }
  getUser(): any {
    return JSON.parse(sessionStorage.getItem("jsakfjaslhsfjkaldshfjkdslfhjsdll"));
  }

  clearSession() {
    sessionStorage.removeItem("jsakfjaslhsfjkaldshfjkdslfhjsdll");
    sessionStorage.removeItem("Token");
    sessionStorage.clear();
    this._router.navigate(['/auth/login']);
  }
}