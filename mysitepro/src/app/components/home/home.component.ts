import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

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
  people;

  constructor() {
    
  }

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
  
    this.people = Array(100)
      .fill(1)
      .map(_ => {
        return {
          name: faker.name.findName(),
          bio: faker.hacker.phrase(),
        };
      });

    // particleJS.load('particles-js', particling, null);
  }

}
