import { Component, OnInit } from '@angular/core';

import Typed from 'typed.js';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let typed = new Typed("#typed", {
      strings: [
        'I am a ^300 Designer',
        'I am a ^300 Developer',
        'I am a ^300 Programmer',
        'I am a ^300 Creator... ^2000'
      ],
      smartBackspace: true,
      typeSpeed: 35,
      backSpeed: 80,
      loop: true,
    });

  }

}
