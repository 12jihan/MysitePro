import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../../services/git-hub-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // particleJS: any;
  repos: Object;
  userInfo: Object;

  myWork0 = [
    "Html, CSS, JavaScript",
    "Angular@latest",
    "Node.js",
    "NoSql Database",
    "Vue.js"
  ];

  toDoList = [
    "Learn Python",
    "Learn Java",
    "More Internet of Things Projects",
    "Machine Learning and A.I.",
    "Frost OS",
    "Authentication and Security",
    "Bio-Hacking",
    "Electrical Engineering"
  ]

  constructor(private ghData: GitHubService) { }

  ngOnInit() {

    this.ghData.getData().subscribe(data => {
      console.log('list of repos: ', data);
      this.repos = data;
    });

    this.ghData.getUserData().subscribe(data => {
      console.log('user info: ', data);
      this.userInfo = data;
    });


  }

}
