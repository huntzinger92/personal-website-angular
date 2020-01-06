import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { current_projects } from '../current';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CurrentComponent implements OnInit {
  current_projects = current_projects;

  constructor() { }

  ngOnInit() {
  }

}
