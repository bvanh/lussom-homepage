import { Component, OnInit } from '@angular/core';
import {FeedbacksService} from '../../services/feedback.service'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  // indexFeedbacks = {
  //   name: '',
  //   email: '',
  //   feedbacks: '',
  // };
  constructor(
    private feedbacksService: FeedbacksService,
  ) {}
  getIndexFeedbacks(e){
    console.log(e)
  }
  // onSubmitFeedback():void{
  //   this.feedbacksService.submitFeedbacks(this.indexFeedbacks).subscribe((data:any[])=>{
  //     console.log(data)
  //   })
  // }
  ngOnInit(): void {}
}
