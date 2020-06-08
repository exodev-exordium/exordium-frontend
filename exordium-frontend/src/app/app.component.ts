import { Component, OnInit, Inject, HostListener, Host } from '@angular/core';
import { transition, trigger, query, style, animate } from '@angular/animations';
import { Event, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Title } from '@angular/platform-browser';

import * as jQuery from 'jquery';
const $ = jQuery;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('myAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [style({ opacity: 0 })],
          { optional: true }
        ),
        query(
          ':leave',
           [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
          { optional: true }
        ),
        query(
          ':enter',
          [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
          { optional: true }
        )
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  loading: boolean;
  windowScrolled: boolean;

  constructor(
    private router: Router,
    private titleService: Title,
    @Inject (DOCUMENT) private document: Document,
  ) { }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          // this.loading = true;
          document.querySelector('body').classList.remove('loaded');
          break;
        }
        case event instanceof NavigationEnd: {
          const title = this.getTitle(this.router.routerState, this.router.routerState.root).join(' - ');
          this.titleService.setTitle(`Exordium - ${title}`);

          setTimeout(() => {
            document.querySelector('body').classList.add('loaded');
          }, 1000);
        }
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          setTimeout(() => {
            document.querySelector('body').classList.add('loaded');
          }, 1000);

          break;
        }
        default: {
          break;
        }
      }
    });

    $('.navbar-toggler').click(() => {
      $('nav.navbar').toggleClass('navbar-open');
    });
  }

  getTitle(state, parent) {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }

    return data;
  }

  @HostListener('window:scroll', [])
  onScroll() {
    if (window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.windowScrolled = true;

      if (!$('nav.navbar').hasClass('scrolled')) {
        $('nav.navbar').addClass('position-fixed scrolled');
      }

      if (!$('.nav-dashboard-wrapper').hasClass('scrolled')) {
        $('.nav-dashboard-wrapper').addClass('position-fixed scrolled');
      }

    } else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.windowScrolled = true;

      if ($('nav.navbar').hasClass('scrolled')) {
        $('nav.navbar').removeClass('position-fixed scrolled');
      }

      if ($('.nav-dashboard-wrapper').hasClass('scrolled')) {
        $('.nav-dashboard-wrapper').removeClass('position-fixed scrolled');
      }
    }
  }

}
