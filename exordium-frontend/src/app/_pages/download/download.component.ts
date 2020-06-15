import { Component, OnInit } from '@angular/core';
import { jarallax } from 'jarallax';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.6
    });
  }

}
