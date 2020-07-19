import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CDN } from 'src/app/__services/shared/api.shared';
import { BlogService } from 'src/app/__services/blog.service';

import * as $ from 'jquery';
import { jarallax, jarallaxElement } from 'jarallax';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  // Blog Posts
  post: any[];
  execute: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    // Get Blog Data
    this.blogService.getPost(this.route.snapshot.paramMap.get("post")).subscribe(res => {
      this.post = res;
      console.log(res);

      if (!res[0].url) { // no response
        // redirect to error not found page
        this.router.navigate(['/error/404']);
      }
    });
  }

  jarallaxInit() {
    if (!this.execute) {
      this.execute = true;

      jarallax(document.querySelectorAll('.jarallax'), {
        speed: 0.3
      });
      jarallaxElement();
    }
  }

  getCover(cover): string {
    this.jarallaxInit();

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
