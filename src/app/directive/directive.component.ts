import { Component, OnInit } from '@angular/core';
import {NgFor, NgIf} from "@angular/common";

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [
    NgFor,
    NgIf
  ],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {

  listCourses: string[] = ['TypeScript', 'JavaScript', 'Java SE', 'C#', 'PHP' ];

  enableList: boolean = true;

  constructor() {
  }

  setEnableList(): void {
    this.enableList = (this.enableList==true) ? false : true
  }


}
