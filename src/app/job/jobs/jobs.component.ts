import { ActivatedRoute } from '@angular/router';
import { JobsService } from './../../services/job.service';
import { Component, OnInit } from '@angular/core';
import { Jobs } from '../../../models/jobs';
import { api } from '../../services/api';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {
  jobs: Jobs[];
  currentPage = 0;
  positionItem = 0;
  count = null;
  displayedColumns: string[] = ['title', 'categories', 'location', 'date'];
  constructor(
    private jobsService: JobsService,
    private route: ActivatedRoute
  ) {}
  public search = this.route.snapshot.paramMap.get('id');
  // public filter = this.route.snapshot.url[1].path;
  getJobsFromServices(currentPage): void {
    // if (this.filter === 'filter') {
    //   this.newsService
    //     .getNews(
    //       `${api.API_NEWS}?name_containss=${this.search}&_limit=10&_start=${currentPage}`
    //     )
    //     .subscribe((data: any[]) => {
    //       this.news = data;
    //     });
    // } else {
    this.jobsService
      .getJobs(`${api.API_ROOT}/jobs?_limit=10&_start=${currentPage}`)
      .subscribe((data: any[]) => {
        console.log(data);
        this.jobs = data;
      });
  }
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
  getNewsCount(): void {
    this.jobsService
      .getJobsCount(`${api.API_NEWS_COUNT}`)
      .subscribe((data: any[]) => {
        this.count = data;
      });
  }
  async getPage(e) {
    if (e > this.currentPage) {
      this.getJobsFromServices(this.positionItem + 4);
      this.currentPage = e;
      this.positionItem += 4;
    } else {
      this.getJobsFromServices(this.positionItem - 4);
      this.currentPage = e;
      this.positionItem -= 4;
    }
  }
  demo(e): void {
    console.log(e);
  }
  ngOnInit(): void {
    this.getJobsFromServices(this.currentPage);
    this.getNewsCount();
  }
}
