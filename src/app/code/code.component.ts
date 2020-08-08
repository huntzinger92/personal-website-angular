import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { coding_projects } from '../code';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CodeComponent implements OnInit {
  code_projects = coding_projects;

  constructor() { }

  ngOnInit() {
  }

}
