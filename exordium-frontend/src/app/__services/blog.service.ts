import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// rxjs
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// Shared Variables
import { API } from './shared/api.shared';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private endpoint = new API().endpoint;
  private headers = new API().headers;

  constructor(
    private http: HttpClient
  ) { }

  // Error Handler
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
        // client-side error
        msg = error.error.message;
    } else {
        // server-side error
        msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    return throwError(msg);
  }

    // Get 5 Recent Posts
    getPosts(): Observable<any> {
      const api = `${this.endpoint}/public/blog`;
      return this.http.get(api, { headers: this.headers }).pipe(
          map(
              (res: Response) => {
                  return res || {};
              }
          ),
          catchError(this.handleError)
      );
    }
  
    // Get Specific Post
    getPost(id): Observable<any> {
      const api = `${this.endpoint}/public/blog/post/${id}`;
      return this.http.get(api, { headers: this.headers }).pipe(
          map(
              (res: Response) => {
                  return res || {};
              }
          ),
          catchError(this.handleError)
      );
    }
}
