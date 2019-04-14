import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularBottomSheetConfig } from '../utility/angular-bottom-sheet.interface';
import { AngularBottomSheetComponent } from '../component/angular-bottom-sheet.component';

@Component({
  selector: 'app-root',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  options: AngularBottomSheetConfig;
  @ViewChild('test') testing: AngularBottomSheetComponent;
  constructor() { }

  ngOnInit() {
    this.options = {
      title: "English Card"
    }
  }

  toggle() {
    this.testing.toggle()
  }
}
