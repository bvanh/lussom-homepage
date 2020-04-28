import { Injectable } from '@angular/core';
import { feedbacks } from '../../models/jobs';

//Get data asynchronously with Observable
import { of, throwError } from 'rxjs';
@Injectable()
export class ValidationService {
  constructor() {}
  validateEmail(email) {
    let regex = /^[a-z][a-z0-9_\.]{3,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm;
    return regex.test(email);
  }
  // checkTimestamp(strDate){
  //   let newDate = new Date(strDate);
  // }
}
