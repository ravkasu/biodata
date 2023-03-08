import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestAPIService {

  constructor(private http: HttpClient) { }

  getProjectsAPI() {
    return this.http.get(`${environment.apiUrl}/api/projects`);
  }
  getExperienceAPI() {
    return this.http.get(`${environment.apiUrl}/api/exp`);
  }
}
