import { Injectable } from '@angular/core';
import { Jobs } from '../../models/jobs';

//Get data asynchronously with Observable
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

//MessageService
// import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { api } from './api';

@Injectable()
export class JobsService {
  constructor(private http: HttpClient) {}
  getJobs(apiJobs): Observable<Jobs[]> {
    return this.http.get<Jobs[]>(apiJobs).pipe(catchError((error) => of([])));
  }
  getJobsCount(apiJobs) {
    return this.http.get(apiJobs).pipe(catchError((error) => of([])));
  }
  getJobsFromId(id: Number): Observable<Jobs[]> {
    const url = `${api.API_ROOT}/jobs/${id}`;
    return this.http.get<Jobs[]>(url).pipe(
      tap((dataDetail) => {
        console.log(dataDetail);
        // this.getJobs(dataDetail.categories[0].id)
      }),
      catchError((error) => of([]))
    );
  }
}
