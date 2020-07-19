import { Component, OnInit } from '@angular/core';
import { jarallax } from 'jarallax';

import { CDN } from 'src/app/__services/shared/api.shared';
import { BlogService } from 'src/app/__services/blog.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  // Blog Posts
  posts: any[];

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    // Get Blog Data
    this.blogService.getPosts().subscribe(res => {
      this.posts = res;
    });

    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.6
    });
  }

  getClass(colour): string {
    if (!colour) {
      return 'bg-primary';
    } else {
      return '';
    }
  }

  getColour(colour): string {
    if (!colour) {
      return colour;
    } else {
      return 'transparent';
    }
  }

  getCover(cover): string {
    if (!cover) {
      return "assets/img/exordium/backgrounds/mountain0.jpg";
    } else {
      return `${new CDN().endpoint}/public/uploads/blog/${cover}`;
    }
  }

  getProfile(link): string {
    if (!link) {
      return "assets/img/user-default/user-default.png";
    } else {
      return link;
    }
  }

}
