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
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  public show: boolean = true;

  public slides = [
    {
      title: 'Game Experience',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      title: 'Game Experience 2',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      title: 'Game Experience 3',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      title: 'Game Experience 4',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];

  public type: string = 'component';
  public class: string = 'demo';
  public disabled: boolean = false;
  // public pagination: SwiperPaginationInterface = {
  //   el: '.slider-pagination',
  //   clickable: true,
  //   hideOnClick: false,
  //   bulletClass: 'slide-dots',
  //   bulletActiveClass: 'slide-dots-active',
  // };

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    // effect:"slide",
    keyboard: true,
    scrollbar: false,
    navigation: true,
    slideNextClass:"dmeo",
    pagination: {
      type: "bullets",
      el: '.slide-pagination',
      clickable: true,
      hideOnClick: false,
      // renderBullet: function (index, className) {
      //   return `<span class="dot">${index}</span>`;
      // },
      // renderCustom: function (index, className) {
      //   return '<div class="demo">demo' + (index + 1) + '</div>';
      // },

      // bulletClass: 'slide-dots',
      // bulletActiveClass: 'slide-dots-active',
      // bulletElement:`<button>demo</button>`
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
