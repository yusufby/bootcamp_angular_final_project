import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobServiceService {
 
  constructor(private _http:HttpClient) { }
  addUser(data:any):Observable<any> {
    return this._http.post('http://localhost:3000/user_profiles',data);
  }
  updateUser(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/user_profiles/${id}`, data);
  }

  getUserList(): Observable<any> {
    return this._http.get('http://localhost:3000/user_profiles');
  }

  deleteUser(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/user_profiles/${id}`);
  }
}
