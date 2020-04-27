import { Injectable } from '@angular/core';
import { applications } from '../../models/jobs';

//Get data asynchronously with Observable
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

//MessageService
// import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { api } from './api';

@Injectable()
export class ApplicationsService {
  constructor(private http: HttpClient) {}
  postFile(fileToUpload: File): Observable<applications[]> {
    const formData: FormData = new FormData();
    formData.append('files', fileToUpload, fileToUpload.name);
    return this.http.post<any[]>(`${api.API_ROOT}/upload`, formData).pipe(
    //   tap((dataDetail) => {}),
      catchError((error) => of([]))
    );
  }
  submitCv(indexCv): Observable<applications[]> {
    return this.http
      .post<any[]>(`${api.API_ROOT}/applications`, indexCv)
      .pipe(catchError((error) => of([])));
  }
}
