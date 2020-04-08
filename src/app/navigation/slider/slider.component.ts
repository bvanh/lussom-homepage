import { Component, OnInit, ViewChild } from '@angular/core';
import {
  SwiperComponent,
  SwiperDirective,
  SwiperConfigInterface,
  SwiperScrollbarInterface,
  SwiperPaginationInterface,
} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  public show: boolean = true;

  public slides = [
    {
      title: 'Game Experience',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    },
    {
      title: 'Game Experience 2',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    },
    {
      title: 'Game Experience 3',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    },
    {
      title: 'Game Experience 4',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    },
  ];

  public type: string = 'component';
  public class: string = 'demo';
  public disabled: boolean = false;

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    scrollbar: false,
    navigation: true,
    pagination: {
      el: '.slider-pagination',
      clickable: true,
      hideOnClick: false,
      // bulletClass: "slide-dots"
    },
    loop: true,
  };
  @ViewChild(SwiperComponent) componentRef: SwiperComponent;
  @ViewChild(SwiperDirective) directiveRef: SwiperDirective;

  constructor() {}
  public onIndexChange(index: number) {
    console.log('Swiper index: ', index);
  }
}
