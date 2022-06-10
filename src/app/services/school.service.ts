import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { School } from '../models/school.model';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  selectSchool:School=new School();
  reqHeader=new HttpHeaders({
    'Content-Type':'aplication/json',
  })

  constructor(private http:HttpClient) { }
  baseurl='http://127.0.0.1:8000/api/';
  //baseurl='http://champions-fia.herokuapp.com/api/';

  //metodo GET
  GetSchools():Observable<School>{
    return this.http.get<School>(this.baseurl+'schools/');
  }
  //metodo POST
  CreateSchool(school:School):Observable<School>{
    return this.http.post(this.baseurl+'schools/',school,{headers:this.reqHeader});
  }

  //metodo DELETE
  DeleteSchool(id:number){
    return this.http.delete(this.baseurl+'schools/'+id+'/');
  }

  UpdateSchool(id:number,school:School){
    return this.http.put(this.baseurl+'schools/'+id+'/',school,{headers:this.reqHeader});
  }
}
