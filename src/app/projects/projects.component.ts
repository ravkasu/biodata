import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestAPIService  } from '../services/rest-api.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projectsData: any;

  constructor(private http: HttpClient, private restAPIService : RestAPIService ) {}

  ngOnInit(): void {
    this.getProjectsData();
  }
  getProjectsData(){
    this.restAPIService .getProjectsAPI().subscribe((data: any) => {
      console.log(data);
    });
    this.http.get('assets/json/projectsData.json').subscribe((response: any) => {
        this.projectsData = response;
        console.log(response);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}





