import { Component, OnInit } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg';

import Typed from 'typed.js';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.typedjsInit();
  }

  typedjsInit() {
    const options = {
      strings: [
        'Secure Internet.^2000',
        'Private Data.^2000',
        'Military Grade.^2000',
        'Environmental.^2000',
      ],
      loop: true,
      typeSpeed: 45
    };
    const typed = new Typed('.typed', options);
  }

}
