import { Injectable,Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })

export class GridService{
   constructor(private http: HttpClient) { }
    GetLeadGridDetails(){
      return this.http.get('http://localhost:16426/api/ResourceProfile/GetLeadGridDetails');
    }

}