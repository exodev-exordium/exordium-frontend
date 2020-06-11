import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-scrollback',
  templateUrl: './scrollback.component.html',
  styleUrls: ['./scrollback.component.scss']
})
export class ScrollbackComponent implements OnInit {
  windowScrolled: boolean;

  constructor(
    @Inject (DOCUMENT) private document: Document
  ) { }

  @HostListener('window:scroll', [])

  onWindowScroll() {
    if (window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.windowScrolled = true;
    } else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.windowScrolled = false;
    }
  }

  scrollToTop() {
    (function smoothscroll() {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    })();
  }

  ngOnInit(): void {
  }

}
