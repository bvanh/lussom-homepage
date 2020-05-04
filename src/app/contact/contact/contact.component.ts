import { Component, OnInit } from '@angular/core';
import { FeedbacksService } from '../../services/feedback.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../navigation/modal/modal.component';
import { catchError, map, tap } from 'rxjs/operators';
import { ValidationService } from '../../services/validation.service';
import { of } from 'rxjs';
import { feedbacks } from 'src/models/jobs';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  indexFeedbacks = {
    name: '',
    email: '',
    feedback: '',
  };
  constructor(
    private feedbacksService: FeedbacksService,
    public dialog: MatDialog,
    public checkEmail: ValidationService
  ) {}
  getIndexFeedbacks(e) {
    this.indexFeedbacks[e.target.name] = e.target.value;
  }
  onSubmitFeedback(): void {
    const intialIndex = {
      name: '',
      email: '',
      feedback: '',
    };
    const { name, email, feedback } = this.indexFeedbacks;
    var checkMail = this.checkEmail.validateEmail(email);
    if (checkMail && name !== '' && feedback !== '') {
      this.feedbacksService
        .submitFeedbacks(this.indexFeedbacks)
        .pipe(
          tap((data) => {
            console.log(data);
            this.openDialog('Gửi thành công!');
            this.indexFeedbacks = intialIndex;
          }),
          catchError((err) => {
            this.openDialog(err.error.message);
            return of([]);
          })
        )
        .subscribe((data: any[]) => {});
    } else {
      this.openDialog('Kiểm tra lại thông tin!');
    }
  }
  openDialog(errMessage): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '350px',
      data: errMessage,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }
  ngOnInit(): void {}
}
