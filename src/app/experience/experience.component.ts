import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestAPIService  } from '../services/rest-api.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  expData: any;

  constructor(private http: HttpClient, private restAPIService : RestAPIService ) {}

  ngOnInit(): void {
    this.getProjectsData();
  }
  getProjectsData(){
    this.restAPIService .getProjectsAPI().subscribe((data: any) => {
      console.log(data);
    });
    this.http.get('assets/json/experienceData.json').subscribe((response: any) => {
        this.expData = response;
        console.log(response);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
