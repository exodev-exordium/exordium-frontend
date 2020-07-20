import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { CDN } from 'src/app/__services/shared/api.shared';
import { BlogService } from 'src/app/__services/blog.service';

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
    private titleService: Title,
    private router: Router,
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    // Get Blog Data
    this.blogService.getPost(this.route.snapshot.paramMap.get("post")).subscribe(res => {
      this.post = res;
      console.log(res);

      if (!res[0].url) { // no response for this url
        this.router.navigate(['/error/404']);
      } else {
        this.titleService.setTitle(`Exordium - ${res[0].title}`);
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
