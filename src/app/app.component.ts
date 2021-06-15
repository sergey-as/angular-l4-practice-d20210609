import {Component, OnInit} from '@angular/core';
import {DataTransferService} from "./services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-l4-practice-d20210609';
  userName: string;

  constructor(private dataTransferService: DataTransferService) {
  }

  ngOnInit() {
    this.dataTransferService.getState().subscribe(value => this.userName = value);
  }
}
