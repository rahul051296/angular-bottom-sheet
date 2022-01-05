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
  @ViewChild('test', { static: true }) testing: AngularBottomSheetComponent;
  constructor() { }

  ngOnInit() {
    this.options = {
      title: "Angular Bottom Sheet",
      enableCloseButton: true,
      darkTheme: false
    }
    this.open();
  }

  toggle() {
    this.testing.toggle()
  }

  open() {
    this.testing.open();
  }

  close() {
    this.testing.close();
  }

  toggleDarkTheme() {
    this.open();
    this.testing.toggleDarkTheme()
  }

  toggleCloseButton() {
    this.open();
    this.testing.toggleCloseButton();
  }

}
