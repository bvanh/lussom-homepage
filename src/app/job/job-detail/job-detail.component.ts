import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from '../../services/job.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../navigation/modal/modal.component';
import { Location } from '@angular/common';
import { Jobs } from '../../../models/jobs';
import { api } from '../../services/api';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ApplicationsService } from '../../services/applications.service';
import { ValidationService } from '../../services/validation.service';
@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss'],
})
export class JobDetailComponent implements OnInit {
  jobs: Jobs[];
  jobsDetail = {
    id: null,
    title: '',
    reason: '',
    description: '',
    Skill: '',
    salary: null,
    location: '',
    experience: null,
    expired: '',
    categories: '',
    vacancies: null,
  };
  applications = {
    name: '',
    email: '',
    phone: Number = null,
  };
  intialIndexCv = {
    name: '',
    email: '',
    phone: Number = null,
  };
  fileToUpload: File = null;
  constructor(
    private route: ActivatedRoute,
    private jobsService: JobsService,
    private location: Location,
    private cvService: ApplicationsService,
    public dialog: MatDialog,
    public checkEmail: ValidationService
  ) {}
  checkTimestamp(strDate) {
    let today = new Date().getTime();
    let dateApply = new Date(strDate).getTime();
    let expried = today - dateApply;
    if (expried < 0) {
      return true;
    } else {
      return false;
    }
  }
  public id = +this.route.snapshot.paramMap.get('id');
  getJobsFromRoute(newsId): void {
    this.jobsService.getJobsFromId(newsId).subscribe((data: any) => {
      this.jobsDetail = data;
    });
  }
  getJobsFromServices(): void {
    this.jobsService
      .getJobs(`${api.API_ROOT}/recruitments?_limit=3&_start=0`)
      .subscribe((data: any[]) => {
        this.jobs = data;
        console.log(data);
      });
  }
  getCv(e): void {
    this.applications[e.target.name] = e.target.value;
    console.log(this.applications);
  }
  onFileChange(e) {
    this.fileToUpload = e.target.files[0];
    // const formData: FormData = new FormData();
    // formData.append('files', e.target.files[0],e.target.files[0].name);
    // formData.append('invoiceInfo', invoiceInfo)
    // this.applications = { ...this.applications, cv: formData };
    console.log(this.fileToUpload);
  }
  clearInputCv(): void {
    this.applications = { ...this.intialIndexCv };
    this.fileToUpload = null;
  }
  onSubmitCv(): void {
    const { name, email, phone } = this.applications;
    const checkMail = this.checkEmail.validateEmail(email);
    const checkPhone = this.checkEmail.validatePhone(phone);
    if (checkMail && checkPhone && name !== '' && this.fileToUpload !== null) {
      // this.cvService.postFile(this.fileToUpload).subscribe((data: any[]) => {
      // const formData: FormData = new FormData();
      // formData.append('files', cv, cv.name);
      console.log(this.applications);
      this.cvService
        .postFile(this.applications, this.fileToUpload)
        .pipe(
          // tap((data) => {
          //   console.log(data);
          //   this.openDialog('Gửi CV thành công!');
          //   this.applications = { ...this.intialIndexCv };
          //   this.fileToUpload = null;
          // }),
          catchError((err) => {
            console.log(err)
            this.openDialog(err.error.message);
            return of([]);
          })
        )
        .subscribe((data: any[]) => {
          console.log(data);
        });
      // });
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
  ngOnInit(): void {
    this.getJobsFromRoute(this.id);
    this.getJobsFromServices();
  }
}
