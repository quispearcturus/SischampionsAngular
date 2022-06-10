import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Place } from '../models/places.model';
//
//
@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  selectPLace:Place=new Place();
  reqHeader=new HttpHeaders({
    'Content-Type':'aplication/json',
  })

  constructor(private http:HttpClient) { }
  baseurl='http://127.0.0.1:8000/api/';
  //baseurl='http://champions-fia.herokuapp.com/api/';

  //metodo GET
  GetPlace():Observable<Place>{
    return this.http.get<Place>(this.baseurl+'places/');
  }
  //metodo POST
  CreatePlace(place:Place):Observable<Place>{
    return this.http.post(this.baseurl+'places/',place,{headers:this.reqHeader});
  }

  //metodo DELETE
  DeletePlace(id:number){
    return this.http.delete(this.baseurl+'places/'+id+'/');
  }

  UpdatePlace(id:number,place:Place){
    return this.http.put(this.baseurl+'places/'+id+'/',place,{headers:this.reqHeader});
  }
}
