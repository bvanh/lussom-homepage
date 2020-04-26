import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from '../../services/job.service';
import { Location } from '@angular/common';
import { Jobs } from '../../../models/jobs';
import { api } from '../../services/api';

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
  constructor(
    private route: ActivatedRoute,
    private jobsService: JobsService,
    private location: Location
  ) {}
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
  goBack(): void {
    this.location.back();
  }
  ngOnInit(): void {
    this.getJobsFromRoute(this.id);
    this.getJobsFromServices();
  }
}
