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
  projDataapi:any;

  constructor(private http: HttpClient, private restAPIService : RestAPIService ) {}

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.restAPIService .getProjectsAPI().subscribe((data: any) => {
      console.log(data);
      this.projDataapi = data;
    },
    (error: any) => {
      console.error(error);
    }
  );
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





