import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuditService {

  public headers:HttpHeaders= new HttpHeaders({
    'Content-Type':'application/json',
    'Accept':"application/json",
    'Access-Control-Allow-Methods':'GET,POST,PUT,DELETE',
    'Authorization':''
  });
  
  constructor(private http:HttpClient) { }

  public getAudits(pageIndex,pageSize,filter?){
    console.log(filter)
    let params= new HttpParams();
    if(filter){
      if(filter.statusCode){
        params = params.append('statusCode',filter.statusCode);
      }
      if(filter.statusMessage){
        params = params.append('statusMessage',filter.statusMessage);
      }
      if(filter.email){
        params = params.append('email',filter.email);
      }
    }
    return this.http.get(`http://localhost:3000/public/audits/${pageIndex}/${pageSize}`,{headers :this.headers,params})
  }

  public getAuditFilterValues(){
    return this.http.get(`http://localhost:3000/public/audits/filter-values`,{headers :this.headers})
  }

}
