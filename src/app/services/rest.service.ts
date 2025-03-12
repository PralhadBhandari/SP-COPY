import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RestService {



  constructor(private http : HttpClient) { }


// API call without header
  getData(url:string , payload: any){
    return this.http.get<any>(url , {params : payload}).pipe(map((data:any)=> data))
  }

// API call with header
  getWithHeader(url:string){
    let header = new HttpHeaders();
    header = header.set('X-Api-Key','ZW4UGq2SM3CjabAb4MBiNGkPa9JXEliv3xYHHXWJ')
    return this.http.get<any>(url , { headers: header}).pipe(map((data:any)=> data))
  }

}
