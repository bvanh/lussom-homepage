import { Component, OnInit } from '@angular/core';
import { FeedbacksService } from '../../services/feedback.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../navigation/modal/modal.component';
import { error } from 'protractor';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  indexFeedbacks = {
    name: '',
    email: null,
    feedbacks: '',
  };
  constructor(
    private feedbacksService: FeedbacksService,
    public dialog: MatDialog
  ) {}
  getIndexFeedbacks(e) {
    this.indexFeedbacks[e.target.name] = e.target.value;
    // console.log(e.target.value);
  }
  onSubmitFeedback(): void {
    this.feedbacksService
      .submitFeedbacks(this.indexFeedbacks).pipe(
        catchError(err => {
            console.log('caught rethrown error, providing fallback value');
            return of([]);
        })
    )
      .subscribe((data: any[]) => {
        console.log(data);
      }
     );
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '350px',
      data: 'Do you confirm the deletion of this data?',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Yes clicked');
        // DO SOMETHING
      }
    },
    (error)=>{

    });
  }
  ngOnInit(): void {}
}
