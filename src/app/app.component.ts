import { Component } from '@angular/core';
import { HelloService } from "./hello.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'deployAngular';
  constructor(private hello: HelloService) {
    this.hello.helloWorld().subscribe(res => {
      console.log(res);

      //this.title = res
    });
    //console.log(this.title)
  }
}
