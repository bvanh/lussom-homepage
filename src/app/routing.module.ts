import { ContactComponent } from './contact/contact/contact.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './news/detail/detail.component';
import { NewsComponent } from './news/news/news.component';
import { JobsComponent } from './job/jobs/jobs.component';

import { JobDetailComponent } from './job/job-detail/job-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/contact', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'news', component: NewsComponent },
  { path: 'news/detail/:id', component: DetailComponent },
  { path: 'careers', component: JobsComponent },
  { path: 'careers/detail/:id', component: JobDetailComponent },
  // { path: 'news/filter/:id', component: NewsComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule {}
