import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { Location } from '@angular/common';
import { News } from '../../../models/news';
import { api } from '../../services/api';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  newsByCategories: News[];
  news:News[]
  newsDetail = {
    id: 1,
    name: '',
    shortContent: '',
    content: '',
    thumbnail:"",
    created_at:null,
    categories: [
      {
        id: 1,
        name:""
      },
    ],
  };
  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private location: Location
  ) {}
  public id = +this.route.snapshot.paramMap.get('id');
  getNewsFromRoute(newsId): void {
    this.newsService.getNewsFromId(newsId).subscribe((data: any) => {
      this.newsDetail = data;
      this.newsService
        .getNews(`${api.API_CATEGORIES}/${data.categories[0].id}`)
        .subscribe((data: any) => {
          this.newsByCategories = data.news;
          console.log(data);
        });
    });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  getNewsFromServices(): void {
    this.newsService
      .getNews(`${api.API_ROOT}/news?_limit=5&_start=0`)
      .subscribe((data: any[]) => {
        this.news = data;
        console.log(data)
      });
  }
  goBack(): void {
    this.location.back();
  }
  ngOnInit(): void {
    this.getNewsFromRoute(this.id);
    this.getNewsFromServices();
  }
}
