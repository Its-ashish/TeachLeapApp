import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FileUploadServiceService {

  constructor(private http: HttpClient) { }

  uploadImage(body:any): Observable<any>{
    const header = new HttpHeaders();
    header.append("Content-type","application/json");
    header.append("Accept","application/json")
    return this.http.post('http://localhost:4000/uploadImage', body, {headers: header});
  }

  getImage(): Observable<any>{
    return this.http.get('http://localhost:4000/retriveImage');
  }
}
