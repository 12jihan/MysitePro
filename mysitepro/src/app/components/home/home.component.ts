import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { GitHubService } from '../../services/git-hub-service.service';

import * as particleJS from 'particles.js';
import { particling } from '../../../assets/particlesjs-config';
import * as faker from 'faker';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // particleJS: any;
  repos: Object;
  userInfo: Object;

  constructor(private ghData: GitHubService) { }

  ngOnInit() {

    let typed = new Typed("#typed", {
      strings: [
        'I am a ^300 Designer',
        'I am a ^300 Developer',
        'I am a ^300 Programmer',
        'I am a ^300 Creator'
      ],
      smartBackspace: true,
      typeSpeed: 35,
      backSpeed: 80,
      loop: true,
    });

    this.ghData.getData().subscribe(data => {
      console.log('list of repos: ', data);
      this.repos = data;
    });

    this.ghData.getUserData().subscribe(data => {
      console.log('user info: ', data);
      this.userInfo = data;
    })

    

    // particleJS.load('particles-js', particling, null);
  }

}
