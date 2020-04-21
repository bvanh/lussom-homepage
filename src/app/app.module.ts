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
import { NguCarouselModule } from '@ngu/carousel';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { SliderComponent } from './navigation/slider/slider.component';
import { Section2Component } from './home/section2/section2.component';
import { Section3Component } from './home/section3/section3.component';
import { Section4Component } from './home/section4/section4.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { NewsComponent } from './news/news/news.component';
import { DetailComponent } from './news/detail/detail.component';
import { NewsService } from './services/news.service';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 1,
  centeredSlides: true,
  pagination: {
    type: 'custom',
  },
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
    Section4Component,
    FooterComponent,
    NewsComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RoutingModule,
    SwiperModule,
    NguCarouselModule,
    NgxScrollTopModule,
    //
  ],
  providers: [NewsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
