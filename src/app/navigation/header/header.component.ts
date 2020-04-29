import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  constructor(private route: ActivatedRoute) {}
  isNav=this.route.snapshot.url
  ngOnInit() {
    console.log(this.isNav)
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  };
}
