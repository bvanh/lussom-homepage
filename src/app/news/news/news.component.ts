import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';
import { News } from '../../../models/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  news: News[];

  constructor(private newsService: NewsService) {}
  getNewsFromServices(): void {
    //this.movies = this.movieService.getMovies();
    this.newsService.getNews().subscribe((data: any[]) => {
      console.log(data);
      // this.products = data;
    });
  }
  ngOnInit(): void {
    this.getNewsFromServices();
  }
}
