import { Component, OnInit } from '@angular/core';
import { HelloService } from "./hello.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'deployAngular';
  constructor(private hello: HelloService) {

  }

  ngOnInit() {
    this.hello.helloWorld().subscribe((res: any) => {
      console.log(res);
      this.title = res.msg;
    });
  }
}
