import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FileUploadServiceService {

  constructor(private http: HttpClient) { }

  uploadImage(body:any): Observable<any>{
    return this.http.post('http://localhost:4000/uploadImage', body);
  }
}
