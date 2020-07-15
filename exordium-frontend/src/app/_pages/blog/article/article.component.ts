import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    // Get Blog Data
    this.blogService.getPost(this.route.snapshot.paramMap.get("id")).subscribe(res => {
      this.post = res;

      if (!res.url) { // no response
        // redirect to error not found page
        this.router.navigate(['/error/404']);
      }
    });
  }

  jarallaxInit(): void {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.3
    });
    jarallaxElement();
  }

  getCover(cover): string {
    this.jarallaxInit();

    if (!cover) {
      return "assets/img/exordium/backgrounds/mountain0.jpg";
    } else {
      return cover;
    }
  }

  getProfile(link): string {
    if (!link) {
      return "assets/img/exordium/default-profile.png";
    } else {
      return link;
    }
  }

}
