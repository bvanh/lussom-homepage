import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import {
  SwiperModule,
  SwiperConfigInterface,
  SWIPER_CONFIG,
} from 'ngx-swiper-wrapper';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { SliderComponent } from './navigation/slider/slider.component';
import { Section2Component } from './home/section2/section2.component';
import { Section3Component } from './home/section3/section3.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 1,
  centeredSlides: true,
  pagination:{
  totalClass:'dmeo'
  }
};
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    SliderComponent,
    Section2Component,
    Section3Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RoutingModule,
    SwiperModule,
  ],
  // providers: [
  //   {
  //     provide: SWIPER_CONFIG,
  //     useValue: DEFAULT_SWIPER_CONFIG,
  //   },
  // ],
  bootstrap: [AppComponent],
})
export class AppModule {}
