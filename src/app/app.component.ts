import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Desafio Marvel';
  public loading = false;

  loader() {
    this.loading = !this.loading;
    console.log(this.loading);
  }
  
}
