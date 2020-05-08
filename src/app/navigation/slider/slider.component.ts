import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements AfterViewInit {
  slideNo = 1;
  withAnim = true;
  resetAnim = true;
  @ViewChild('myCarousel') myCarousel: NguCarousel<any>;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 3,
    interval: { timing: 5000, initialDelay: 1000 },
    loop: true,
    easing: 'ease',
    touch: true,
    velocity: 0.2,
    speed: 700,
  };
  carouselItems = [
    {
      img: 'assets/slider/slide1.png',
      title: 'Tầm nhìn',
      content: `Thị trường game Việt Nam là một thị trường lớn với quy mô 215 triệu đô la, xếp số 1 Đông Nam Á và số 8 Thế Giới về lượt tải về. Nhờ vào cơ sở hạ tầng và kiến thức chuyên môn về ngành đã tích lũy được trong thời gian qua tại Việt Nam, chúng tôi tiến vào thị trường hứa hẹn này với mục tiêu kết nối, giới thiệu đến người dùng Việt Nam những sản phẩm game chất lượng cao từ khắp nơi trên thế giới.`,
      contentMobile: `Nhờ vào cơ sở hạ tầng và kiến thức chuyên môn về ngành đã tích lũy được trong thời gian qua tại Việt Nam, chúng tôi tiến vào thị trường hứa hẹn này với mục tiêu kết nối, giới thiệu đến người dùng Việt Nam những sản phẩm game chất lượng cao từ khắp nơi trên thế giới.`,
    },
    {
      img: 'assets/slider/slide2.png',
      title: 'Tổ chức',
      content: `Sở hữu nhân sự người Việt xuất thân từ các công ty game lớn tại Việt Nam có đầy đủ kinh nghiệm về phát hành game toàn cầu giúp giải quyết các khó khăn trong các lĩnh vực bản địa hóa sản phẩm game, phát hành game, tối ưu hóa doanh thu... đồng thời sở hữu mạng lưới các kênh marketing đa dạng giúp quảng bá hình ảnh sản phẩm hiệu quả nhất.`,
      contentMobile: `Sở hữu nhân sự người Việt xuất thân từ các công ty game lớn tại Việt Nam có đầy đủ kinh nghiệm về phát hành game toàn cầu giúp giải quyết các khó khăn trong các lĩnh vực bản địa hóa sản phẩm game, phát hành game, tối ưu hóa doanh thu...`,
    },
    {
      img: 'assets/slider/slide3.png',
      title: 'Định hướng',
      content: `Cung cấp không chỉ các sản phẩm game chất lượng mà còn đầu tư cho các chức năng thiết yếu cho công việc phát hành, vận hành, quảng bá dịch vụ game tại Việt Nam như xác nhận và quản lý thành viên, hệ thống thanh toán nội địa đa dạng, các loại hệ thống vận hành, phân tích thống kê… nhằm tạo nên một hệ sinh thái đa dạng, khỏe mạnh trong tương lai.`,
      contentMobile: `Cung cấp không chỉ các sản phẩm game chất lượng mà còn đầu tư cho các chức năng thiết yếu cho công việc phát hành, vận hành, quảng bá dịch vụ game tại Việt Nam như xác nhận và quản lý thành viên, hệ thống thanh toán nội địa đa dạng, các loại hệ thống vận hành, phân tích thống kê…`,
    },
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
  moveTo(slide) {
    this.myCarousel.moveTo(slide, !this.withAnim);
  }
}
