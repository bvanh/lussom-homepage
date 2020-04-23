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
  news: News[];
  newsDetail = {
    id: 1,
    name: '',
    shortContent: '',
    content: '',
    categories: [
      {
        id: 1,
      },
    ],
  };
  constructor(
    private route: ActivatedRoute,
    private newsSerive: NewsService,
    private location: Location
  ) {}
  public id = +this.route.snapshot.paramMap.get('id');
  getNewsFromRoute(newsId): void {
    this.newsSerive.getNewsFromId(newsId).subscribe((data: any) => {
      this.newsDetail = data;
      this.newsSerive
        .getNews(`${api.API_CATEGORIES}/${data.categories[0].id}`)
        .subscribe((data: any) => {(this.news = data.news)
        console.log(data)
        });
    });
  }
  goBack(): void {
    this.location.back();
  }
  ngOnInit(): void {
    this.getNewsFromRoute(this.id);
  }
}
