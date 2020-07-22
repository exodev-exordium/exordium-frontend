import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { CDN } from 'src/app/__services/shared/api.shared';
import { BlogService } from 'src/app/__services/blog.service';

import { jarallax, jarallaxElement } from 'jarallax';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  // Blog Author
  author: any[];

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private router: Router,
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.blogService.getAuthor(
      this.route.snapshot.paramMap.get("username"),
      this.route.snapshot.paramMap.get("title")
    ).subscribe(res => {
      this.author = res;

      if (!res[0].username) { // no response for this url
        this.router.navigate(['/error/404']);
      } else {
        this.titleService.setTitle(`Exordium - ${res[0].username}`);
      }
    });
  }

}
