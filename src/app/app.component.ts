import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'biodata';
  todayTime:any;
  ngOnInit(){
    this.getTodayTime();
  }
  getTodayTime(){
      // Create a new date object
      const now = new Date();

      // Format the date and time as a string
      const formatter = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        // second: 'numeric'
      });
      const currentTime = formatter.format(now);

      // Update the HTML element with the current time
      this.todayTime = currentTime;

  }
}
