import { Component, OnInit } from '@angular/core';
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
  }

}
