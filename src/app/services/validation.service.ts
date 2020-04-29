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
  validatePhone(phoneNumber) {
    let regex = /(09|03|08|03|07[2-9])+([0-9]{8})\b/g;
    return regex.test(phoneNumber);
  }
}
