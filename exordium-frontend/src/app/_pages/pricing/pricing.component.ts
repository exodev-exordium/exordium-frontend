import { Component, OnInit } from '@angular/core';
import { jarallax } from 'jarallax';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.6
    });
  }

}
