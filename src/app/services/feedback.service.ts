import { Injectable } from '@angular/core';
import { feedbacks } from '../../models/jobs';

//Get data asynchronously with Observable
import { Observable } from 'rxjs';
import { of,throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

//MessageService
// import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { api } from './api';
import { error } from 'protractor';

@Injectable()
export class FeedbacksService {
  constructor(private http: HttpClient) {}
  submitFeedbacks(indexFeedbacks): Observable<feedbacks[]> {
    return this.http
      .post<any[]>(`${api.API_ROOT}/feedbacks`, indexFeedbacks)
      .pipe(
        catchError(this.handleError)
      );
  }
  handleError(error) {
    return throwError(error);
}
}
