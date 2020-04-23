import { Injectable } from '@angular/core';
import { News } from '../../models/news';

//Get data asynchronously with Observable
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

//MessageService
// import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class NewsService {
  private newsUrl = 'http://localhost:1337/news';
  // private httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/xml',
  //   })
  // };
  // getMovieFromId(id: number): Observable<News> {
  //   // return of(fakeMovies.find(movie => movie.id === id));
  // }
  constructor(private http: HttpClient) {}
  getNews(): Observable<News[]> {
    // this.messageService.add(`${ new Date().toLocaleString()}. Get movie list`);
    // return of(fakeMovies);
    return this.http
      .get<News[]>(this.newsUrl)
      .pipe(
        tap((receivedMovies) =>
          console.log(`receivedMovies = ${JSON.stringify(receivedMovies)}`)
        ),
        catchError((error) => of([]))
      );
  }
}
