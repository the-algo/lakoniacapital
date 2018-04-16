import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SessionService } from './session.service';
import 'rxjs/Rx';
import { ObserveOnSubscriber } from 'rxjs/operator/observeOn';

@Injectable()
export class RestServiceApiService {

  private http: Http = null;

  renewsubitem:any;
  renewid:any;

  //private apiLink = "http://localhost:2158/";
  private apiLink = "http://107.170.218.205:2552/";
  private registerUser = this.apiLink + "oilwell/auth/users";
  private loginUser = this.apiLink + "oilwell/auth/login";
  private userList = this.apiLink + "oilwell/admin/api/users";
  private deleteUser = this.apiLink + "oilwell/admin/api/users/";
  private changePassword = this.apiLink + "oilwell/api/change_password";
  private activeUser = this.apiLink + "oilwell/admin/api/users/change_status";
  private changeUsername = this.apiLink + "oilwell/api/update_profile";
  private list = this.apiLink + "oilwell/api/subscription";
  private mySubscriptionUrl = this.apiLink + "oilwell/api/my/subscription";
  private createSubscription = this.apiLink + "oilwell/api/subscription";
  private mySubscription = this.apiLink + "oilwell/api/my/subscription";

  constructor(@Inject(Http) http: Http, private session: SessionService) {
    this.http = http;
  }

  // Clearing Session
  clearSession() {
    localStorage.removeItem('jsakfjaslhsfjkaldshfjkdslfhjsdll');
  }

  // Generic API Service for GET, PUT, POST and DELETE
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

  // Getting Token
  getOptionsWithToken() {
    var head = new Headers({ 'Content-Type': 'application/json', 'Authorization': this.session.getToken() });
    return new RequestOptions({ headers: head });
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

  // Get User List
  getUserList(): Observable<any> {
    return this.genericGET(this.userList);
  }

  getMySubscriptionList(): Observable<any> {
    return this.genericGET(this.mySubscriptionUrl);
  }


  // Delete User
  deleteUserFromList(id: string): Observable<any> {
    return this.genericDELETE(this.deleteUser + id)
  }

  // Update User Password
  updateUserPassword(password: any): Observable<any> {
    //return this.genericPOST(this.changePassword, password);
    return this.http.post(this.changePassword, password, this.getOptionsWithToken()).map((response) => {
      return response.json();
    }, (error) => {
      return null
    });
  }

  // Activate User
  activateUser(id: any): Observable<any> {
    return this.http.post(this.activeUser, id, this.getOptionsWithToken()).map((response) => {
      return response.json();
    }, (error) => {
      return null
    });
  }

  // Updating Username
  updateUsername(details: any): Observable<any> {
    //return this.genericPOST(this.changePassword, password);
    return this.http.post(this.changeUsername, details, this.getOptionsWithToken()).map((response) => {
      return response.json();
    }, (error) => {
      return null
    });
  }

  // Get List
  getSubscriptionList(): Observable<any> {
    return this.genericGET(this.list);
  }

  // Create Subscription
  createNewSubscription(details: any): Observable<any> {
    return this.http.post(this.createSubscription, details, this.getOptionsWithToken()).map((response) => {
      return response.json();
    }, (error) => {
      return null
    });
  }

  // Get My Subscriptions
  getMySubscriptions(): Observable<any> {
    return this.genericGET(this.mySubscription);
  }

}
