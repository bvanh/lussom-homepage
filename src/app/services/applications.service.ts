import { Injectable } from '@angular/core';
import { applications } from '../../models/jobs';

//Get data asynchronously with Observable
import { Observable, throwError } from 'rxjs';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

//MessageService
// import { MessageService } from './message.service';
import {
  HttpClient,
  HttpHeaders,
  HttpUploadProgressEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { api } from './api';
const HttpUploadOptions = {
  headers: new HttpHeaders({ Accept: 'application/json' }),
};
@Injectable()
export class ApplicationsService {
  constructor(private http: HttpClient) {}

  postFile(application, file: File): Observable<applications[]> {
    const formData: FormData = new FormData();
    formData.append('name', application.name);
    formData.append('email', application.email);
    formData.append('phone', application.phone);
    formData.append('cv', file, file.name);
    // formData.append('data', application.name);
    return this.http
      .post<any[]>(`${api.API_ROOT}/cvs`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .pipe(
        tap((dataDetail) => console.log(dataDetail)),
        catchError(this.errorHandler)
      );
  }
  submitCv(indexCv): Observable<applications[]> {
    return this.http
      .post<any[]>(`${api.API_ROOT}/cvs`, indexCv)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
      console.log(error);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
