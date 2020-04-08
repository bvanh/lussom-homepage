import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.css'],
})
export class Section4Component implements OnInit {
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
  constructor() {}

  ngOnInit(): void {}
}
