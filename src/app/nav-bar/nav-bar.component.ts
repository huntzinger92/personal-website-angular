import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public innerWidth: any;
  public showHamburger: any;
  constructor(

  ) {

  }

  @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.innerWidth = window.innerWidth;
    }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.showHamburger = false;
  }

  toggleHamburger() {
    this.showHamburger = !this.showHamburger;
  }
}
