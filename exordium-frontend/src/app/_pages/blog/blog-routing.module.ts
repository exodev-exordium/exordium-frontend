import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Blog
import { OverviewComponent } from './overview/overview.component';
import { ArticleComponent } from './article/article.component';
import { AuthorComponent } from './author/author.component';

const routes: Routes = [
  {
    path: 'blog',
    children: [
      {
        path: '',
        component: OverviewComponent,
        data: {
          title: 'Blog'
        }
      },
      {
        path: ':post',
        component: ArticleComponent,
        data: {
          title: 'Article'
        }
      },
      {
        path: 'author/:title/:username',
        component: AuthorComponent,
        data: {
          title: 'Author'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
