import { ActivatedRoute } from '@angular/router';
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
  api = { ...api };
  news: News[];
  currentPage = 0;
  positionItem = 0;
  count = null;
  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute
  ) {}
  public search = this.route.snapshot.paramMap.get('id');
  // public filter = this.route.snapshot.url[1].path;
  getNewsFromServices(currentPage): void {
    // if (this.filter === 'filter') {
    //   this.newsService
    //     .getNews(
    //       `${api.API_NEWS}?name_containss=${this.search}&_limit=10&_start=${currentPage}`
    //     )
    //     .subscribe((data: any[]) => {
    //       this.news = data;
    //     });
    // } else {
    this.newsService
      .getNews(`${api.API_ROOT}/posts?_limit=10&_start=${currentPage}`)
      .subscribe((data: any[]) => {
        console.log(data);
        this.news = data;
      });
  }
  getNewsCount(): void {
    this.newsService
      .getNewsCount(`${api.API_NEWS_COUNT}`)
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
