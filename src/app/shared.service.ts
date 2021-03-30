import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="https://randomuser.me/api/?results=8";
  constructor(private http:HttpClient) { }

  getPeopleList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl);
  }
}
