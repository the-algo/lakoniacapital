import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers } from "@angular/http";
import {config} from '../../shared/smartadmin.config';
import {Observable} from "rxjs/Rx";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';

@Injectable()
export class JsonApiService {

    constructor(private http: Http) { }

    public fetch(url): Observable<any> {


        let headers = new Headers();
        //headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
        //headers.append('Access-Control-Allow-Credentials', 'true');
        //headers.append("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With");
        //headers.append("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        headers.append('Authorization', 'Basic ' + btoa('adtech:adtech123'));
        let opts = new RequestOptions();
        opts.headers = headers;
        console.log('url opts->', opts);
        return this.http.get("http://52.166.64.188/" + config.API_URL + url, opts)
        
       // return this.http.get(this.getBaseUrl() + config.API_URL + url, opts)
            .map(res => {
                console.log(res.status)
            })
           // .map(this.extractData)
            .catch(this.handleError)
    }

    private getBaseUrl() {
        return "http://52.166.64.188/"
    }

    private extractData(res: Response) {
        
        let body = res.json();
        console.log('body->', body);
        if (body) {
            return body.data || body
        } else {
            return {}
        }
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

}


