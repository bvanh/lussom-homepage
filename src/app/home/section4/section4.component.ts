import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.css'],
})
export class Section4Component implements OnInit {
  slideNo = 1;
  withAnim = true;
  resetAnim = true;
  @ViewChild('myCarousel') myCarousel: NguCarousel<any>;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 2, sm: 4, md: 4, lg: 4, all: 0 },
    load: 3,
    interval: { timing: 400000, initialDelay: 1000 },
    loop: true,
    touch: true,
    velocity: 0.2,
  };
  public cards = [
    {
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      job: 'Senior Customer Service Excutive Ha Noi City',
      date: '28/02/2020',
    },
    {
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      job: 'Senior Customer Service Excutive Ha Noi City',
      date: '28/02/2020',
    },
    {
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      job: 'Senior Customer Service Excutive Ha Noi City',
      date: '28/02/2020',
    },
    {
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      job: 'Senior Customer Service Excutive Ha Noi City',
      date: '28/02/2020',
    },
  ];
  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
  moveTo(slide) {
    this.myCarousel.moveTo(slide, !this.withAnim);
  }
  ngOnInit(): void {}
}
