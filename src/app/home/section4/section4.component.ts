import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
// import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { OwlOptions } from 'ngx-owl-carousel-o';
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
  customOptions: OwlOptions = {
    loop: true,
    margin: 80,
    stagePadding:16,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay: true,
    // autoplaySpeed: 100,
    // navSpeed: 100,

    // navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    // nav: true,
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
  ngOnInit(): void {
    this.getJobsFromServices(0);
  }
}
