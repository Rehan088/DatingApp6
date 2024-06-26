import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dating App';
  users:any;
  constructor(private http:HttpClient){
  }

  ngOnInit():void {
    debugger
    this.http.get('https://localhost:5001/api/users').subscribe({
      next:response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('Rrquest Has Completed')
    });
  }
}
