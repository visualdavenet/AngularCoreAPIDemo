import { Injectable } from '@angular/core';
import {HttpClient, JsonpClientBackend} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly randomNum = Math.floor(Math.random() * 10) + 8;
  readonly APIUrl = "https://randomuser.me/api/?results=" + this.randomNum;
  readonly DemoAPIUrl = "https://apihost.somee.com/mainapi"
  //readonly DemoAPIUrl = "http://localhost:59367/mainapi"

  constructor(private http:HttpClient) { }

  getPeopleList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl);
  }

  getPropertyList():Observable<any[]>{
    return this.http.get<any>(this.DemoAPIUrl);
   }
}
