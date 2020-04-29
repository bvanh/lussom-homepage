import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from '../../services/job.service';
import { Location } from '@angular/common';
import { Jobs } from '../../../models/jobs';
import { api } from '../../services/api';
import { ApplicationsService } from '../../services/applications.service';

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
    skill: '',
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
    phone: '',
    cv: null,
  };
  fileToUpload: File = null;
  constructor(
    private route: ActivatedRoute,
    private jobsService: JobsService,
    private location: Location,
    private cvService: ApplicationsService
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
      .getJobs(`${api.API_ROOT}/jobs?_limit=3&_start=0`)
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
    console.log(e.target.files[0]);
  }
  onSubmitCv(): void {
    this.cvService.postFile(this.fileToUpload).subscribe((data: any[]) => {
      this.cvService.submitCv({ ...this.applications, cv: data[0].url }).subscribe((data:any[])=>{
        console.log(data)
      })
    });
  }
  ngOnInit(): void {
    this.getJobsFromRoute(this.id);
    this.getJobsFromServices();
  }
}
