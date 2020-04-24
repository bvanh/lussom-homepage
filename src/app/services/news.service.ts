import { Injectable } from '@angular/core';
import { News } from '../../models/news';

//Get data asynchronously with Observable
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

//MessageService
// import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { api } from './api';

@Injectable()
export class NewsService {
  constructor(private http: HttpClient) {}
  getNews(apiNews): Observable<News[]> {
    return this.http.get<News[]>(apiNews).pipe(catchError((error) => of([])));
  }
  getNewsCount(apiNews) {
    return this.http.get(apiNews).pipe(catchError((error) => of([])));
  }
  getNewsFromId(id: Number): Observable<News[]> {
    const url = `${api.API_NEWS}/${id}`;
    return this.http.get<News[]>(url).pipe(
      tap((dataDetail) => {
        console.log(dataDetail);
        // this.getNews(dataDetail.categories[0].id)
      }),
      catchError((error) => of([]))
    );
  }
}
