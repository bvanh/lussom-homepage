import { FeedbacksService } from './services/feedback.service';
import { JobsService } from './services/job.service';
import { ApplicationsService } from './services/applications.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { SwiperModule } from 'ngx-swiper-wrapper';
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
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { JobsComponent } from './job/jobs/jobs.component';
import { JobDetailComponent } from './job/job-detail/job-detail.component';
import { ContactComponent } from './contact/contact/contact.component';
import { ModalComponent } from './navigation/modal/modal.component';

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
    JobsComponent,
    JobDetailComponent,
    ContactComponent,
    ModalComponent,
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
    HttpClientModule,
    NgxPaginationModule,
    //
  ],
  providers: [NewsService, JobsService, ApplicationsService, FeedbacksService],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent],
})
export class AppModule {}
