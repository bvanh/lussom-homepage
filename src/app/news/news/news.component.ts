import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';
import { News } from '../../../models/news';
import { api } from '../../services/api';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  news: News[];
  currentPage = 0;
  positionItem = 0;
  count = null;
  constructor(private newsService: NewsService) {}
  getNewsFromServices(currentPage): void {
    this.newsService
      .getNews(`${api.API_NEWS}?_limit=10&_start=${currentPage}`)
      .subscribe((data: any[]) => {
        // console.log(data);
        this.news = data;
      });
  }
  getNewsCount(): void {
    this.newsService
      .getNewsCount(`${api.API_NEWS}/count`)
      .subscribe((data: any[]) => {
        this.count = data;
      });
  }
  async getPage(e) {
    if (e > this.currentPage) {
      this.getNewsFromServices(this.positionItem + 4);
      this.currentPage = e;
      this.positionItem += 4;
    } else {
      this.getNewsFromServices(this.positionItem - 4);
      this.currentPage = e;
      this.positionItem -= 4;
    }
  }
  ngOnInit(): void {
    this.getNewsFromServices(this.currentPage);
    this.getNewsCount();
  }
}
