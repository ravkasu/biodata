import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestAPIService  } from '../services/rest-api.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillsDataapi:any;

  constructor(private http: HttpClient, private restAPIService : RestAPIService ) {}

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.restAPIService .getSkillsAPI().subscribe((data: any) => {
      console.log(data);
      this.skillsDataapi = data;
    },
    (error: any) => {
      console.error(error);
    }
  );
  }
}
