import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { musical_works } from '../music';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MusicComponent implements OnInit {
  musical_works = musical_works;

  constructor() { }

  ngOnInit() {
  }

}
