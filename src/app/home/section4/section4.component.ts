import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { JobsService } from './../../services/job.service';
import { Jobs } from '../../../models/jobs';
import { api } from '../../services/api';
@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.css'],
})
export class Section4Component implements OnInit {
  jobs: Jobs[];
  slideNo = 1;
  withAnim = true;
  resetAnim = true;
  @ViewChild('myCarousel') myCarousel: NguCarousel<any>;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 2, sm: 4, md: 4, lg: 4, all: 0 },
    load: 3,
    interval: { timing: 4000, initialDelay: 1000 },
    loop: true,
    touch: true,
    velocity: 0.2,
    speed: 700,
  };
  constructor(
    private cdr: ChangeDetectorRef,
    private jobsService: JobsService
  ) {}
  getJobsFromServices(currentPage): void {
    this.jobsService
      .getJobs(`${api.API_ROOT}/jobs?_limit=10&_start=${currentPage}`)
      .subscribe((data: any[]) => {
        console.log(data);
        this.jobs = data;
      });
  }
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
  moveTo(slide) {
    this.myCarousel.moveTo(slide, !this.withAnim);
  }
  ngOnInit(): void {
    this.getJobsFromServices(0);
  }
}
