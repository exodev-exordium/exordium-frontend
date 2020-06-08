import { Component, OnInit } from '@angular/core';
import { transition, trigger, query, style, animate } from '@angular/animations';
import { Event, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { Title } from '@angular/platform-browser';

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

  constructor(
    private router: Router,
    private titleService: Title
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

}
