(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/angular-bottom-sheet.module.ts":
/*!************************************************!*\
  !*** ./src/app/angular-bottom-sheet.module.ts ***!
  \************************************************/
/*! exports provided: AngularBottomSheetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularBottomSheetModule", function() { return AngularBottomSheetModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _component_angular_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/angular-bottom-sheet.component */ "./src/app/component/angular-bottom-sheet.component.ts");
/* harmony import */ var _testing_testing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./testing/testing.component */ "./src/app/testing/testing.component.ts");






var AngularBottomSheetModule = /** @class */ (function () {
    function AngularBottomSheetModule() {
    }
    AngularBottomSheetModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _component_angular_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_4__["AngularBottomSheetComponent"],
                _testing_testing_component__WEBPACK_IMPORTED_MODULE_5__["TestingComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
            ],
            exports: [
                _component_angular_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_4__["AngularBottomSheetComponent"]
            ],
            providers: [],
            bootstrap: [_testing_testing_component__WEBPACK_IMPORTED_MODULE_5__["TestingComponent"]]
        })
    ], AngularBottomSheetModule);
    return AngularBottomSheetModule;
}());



/***/ }),

/***/ "./src/app/component/angular-bottom-sheet.component.css":
/*!**************************************************************!*\
  !*** ./src/app/component/angular-bottom-sheet.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n@import url('https://fonts.googleapis.com/css?family=Rubik');\r\n\r\n\r\n.add-widget-popover {\r\n  background: #fff;\r\n  width: 100%;\r\n  position: fixed;\r\n  bottom: 0;\r\n  border-radius: 16px 16px 0px 0;\r\n  left: 50%;\r\n  margin-left: -35%;\r\n  width: 75%;\r\n  z-index: 4;\r\n  color: #363636;\r\n  box-shadow: 0px 1px 13px 1px rgba(0, 0, 0, 0.31);\r\n  font-family: 'Trebuchet MS', sans-serif;\r\n}\r\n\r\n\r\n.widget-popover-header h3.title {\r\n  display: inline-block;\r\n  font-weight: 500;\r\n}\r\n\r\n\r\n.close {\r\n  color: #363636;\r\n  opacity: 1;\r\n  background: none;\r\n  outline: none;\r\n  font-size: 24px;\r\n  border: none;\r\n  padding-top: 10px;\r\n  float: right;\r\n}\r\n\r\n\r\n.close:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n.widget-card-container {\r\n  height: 300px;\r\n  overflow-y: auto;\r\n  float: right;\r\n}\r\n\r\n\r\n.p-t-15 {\r\n  padding-top: 15px;\r\n}\r\n\r\n\r\n.p-l-15 {\r\n  padding-left: 15px;\r\n}\r\n\r\n\r\n.p-r-15 {\r\n  padding-right: 15px;\r\n}\r\n\r\n\r\n.p-all-16 {\r\n  padding: 16px\r\n}\r\n\r\n\r\n.m-t-0 {\r\n  margin-top: 0px;\r\n}\r\n\r\n\r\n.m-b-0 {\r\n  margin-bottom: 0;\r\n}\r\n\r\n\r\n/* width */\r\n\r\n\r\n::-webkit-scrollbar {\r\n  width: 4px;\r\n}\r\n\r\n\r\n/* Track */\r\n\r\n\r\n::-webkit-scrollbar-track {\r\n  background: #bdbdbd;\r\n}\r\n\r\n\r\n/* Handle */\r\n\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: #888;\r\n}\r\n\r\n\r\n/* Handle on hover */\r\n\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: rgb(92, 92, 92);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2FuZ3VsYXItYm90dG9tLXNoZWV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDREQUE0RDs7O0FBRzVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsU0FBUztFQUNULDhCQUE4QjtFQUM5QixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixVQUFVO0VBQ1YsY0FBYztFQUNkLGdEQUFnRDtFQUNoRCx1Q0FBdUM7QUFDekM7OztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7OztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7OztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7OztBQUVBO0VBQ0U7QUFDRjs7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7O0FBRUEsVUFBVTs7O0FBQ1Y7RUFDRSxVQUFVO0FBQ1o7OztBQUVBLFVBQVU7OztBQUNWO0VBQ0UsbUJBQW1CO0FBQ3JCOzs7QUFHQSxXQUFXOzs7QUFDWDtFQUNFLGdCQUFnQjtBQUNsQjs7O0FBRUEsb0JBQW9COzs7QUFDcEI7RUFDRSwyQkFBMkI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvYW5ndWxhci1ib3R0b20tc2hlZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJ1YmlrJyk7XHJcblxyXG5cclxuLmFkZC13aWRnZXQtcG9wb3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHggMTZweCAwcHggMDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC0zNSU7XHJcbiAgd2lkdGg6IDc1JTtcclxuICB6LWluZGV4OiA0O1xyXG4gIGNvbG9yOiAjMzYzNjM2O1xyXG4gIGJveC1zaGFkb3c6IDBweCAxcHggMTNweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMxKTtcclxuICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi53aWRnZXQtcG9wb3Zlci1oZWFkZXIgaDMudGl0bGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uY2xvc2Uge1xyXG4gIGNvbG9yOiAjMzYzNjM2O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uY2xvc2U6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLndpZGdldC1jYXJkLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnAtdC0xNSB7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5wLWwtMTUge1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG5cclxuLnAtci0xNSB7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxufVxyXG5cclxuLnAtYWxsLTE2IHtcclxuICBwYWRkaW5nOiAxNnB4XHJcbn1cclxuXHJcbi5tLXQtMCB7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG4ubS1iLTAge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi8qIHdpZHRoICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA0cHg7XHJcbn1cclxuXHJcbi8qIFRyYWNrICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICNiZGJkYmQ7XHJcbn1cclxuXHJcblxyXG4vKiBIYW5kbGUgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogIzg4ODtcclxufVxyXG5cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYig5MiwgOTIsIDkyKTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/component/angular-bottom-sheet.component.html":
/*!***************************************************************!*\
  !*** ./src/app/component/angular-bottom-sheet.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"add-widget-popover\" *ngIf=\"flags.isWidgetSelectedEnabled\" [style.backgroundColor]=\"options?.backgroundColor\"\r\n  [style.color]=\"options?.fontColor\" [@slideUpToggle]>\r\n  <div>\r\n    <div class=\"p-l-15 p-r-15 widget-popover-header\">\r\n      <h3 class=\"m-t-0 m-b-0 title  p-t-15\">{{options?.title}}</h3>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"flags.isWidgetSelectedEnabled = false\">\r\n        <i aria-hidden=\"true\" [style.color]=\"options?.fontColor\"><span>&times;</span></i>\r\n      </button>\r\n    </div>\r\n    <div class=\"widget-card-container p-all-16\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/angular-bottom-sheet.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/component/angular-bottom-sheet.component.ts ***!
  \*************************************************************/
/*! exports provided: AngularBottomSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularBottomSheetComponent", function() { return AngularBottomSheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utility_angular_bottom_sheet_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility/angular-bottom-sheet.animation */ "./src/app/utility/angular-bottom-sheet.animation.ts");



/**
 * Component
 */
var AngularBottomSheetComponent = /** @class */ (function () {
    function AngularBottomSheetComponent(changeDetector) {
        this.changeDetector = changeDetector;
        this.flags = {
            isWidgetSelectedEnabled: false
        };
    }
    /**
     * Opens bottom sheet component
     */
    AngularBottomSheetComponent.prototype.open = function () {
        this.flags.isWidgetSelectedEnabled = true;
        this.changeDetector.detectChanges();
    };
    /**
     * Closes bottom sheet component
     */
    AngularBottomSheetComponent.prototype.close = function () {
        this.flags.isWidgetSelectedEnabled = false;
        this.changeDetector.detectChanges();
    };
    /**
     * Toggles bottom sheet component
     */
    AngularBottomSheetComponent.prototype.toggle = function () {
        this.flags.isWidgetSelectedEnabled = !this.flags.isWidgetSelectedEnabled;
        this.changeDetector.detectChanges();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AngularBottomSheetComponent.prototype, "options", void 0);
    AngularBottomSheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'angular-bottom-sheet',
            template: __webpack_require__(/*! ./angular-bottom-sheet.component.html */ "./src/app/component/angular-bottom-sheet.component.html"),
            animations: [_utility_angular_bottom_sheet_animation__WEBPACK_IMPORTED_MODULE_2__["SlideUpToggleAnimation"]],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./angular-bottom-sheet.component.css */ "./src/app/component/angular-bottom-sheet.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], AngularBottomSheetComponent);
    return AngularBottomSheetComponent;
}());



/***/ }),

/***/ "./src/app/testing/testing.component.css":
/*!***********************************************!*\
  !*** ./src/app/testing/testing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RpbmcvdGVzdGluZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/testing/testing.component.html":
/*!************************************************!*\
  !*** ./src/app/testing/testing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"toggle()\">Toggle</button>\n<angular-bottom-sheet #test [options]=\"options\">\n  <h4>What is Lorem Ipsum?</h4>\n  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's\n  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a\n  type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining\n  essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum\n  passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n  <h4> Why do we use it?</h4>\n  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its\n  layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to\n  using 'Content here, content here'\n</angular-bottom-sheet>\n"

/***/ }),

/***/ "./src/app/testing/testing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/testing/testing.component.ts ***!
  \**********************************************/
/*! exports provided: TestingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestingComponent", function() { return TestingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _component_angular_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/angular-bottom-sheet.component */ "./src/app/component/angular-bottom-sheet.component.ts");



var TestingComponent = /** @class */ (function () {
    function TestingComponent() {
    }
    TestingComponent.prototype.ngOnInit = function () {
        this.options = {
            title: "Angular Bottom Card"
        };
    };
    TestingComponent.prototype.toggle = function () {
        this.testing.toggle();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('test'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _component_angular_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_2__["AngularBottomSheetComponent"])
    ], TestingComponent.prototype, "testing", void 0);
    TestingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./testing.component.html */ "./src/app/testing/testing.component.html"),
            styles: [__webpack_require__(/*! ./testing.component.css */ "./src/app/testing/testing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestingComponent);
    return TestingComponent;
}());



/***/ }),

/***/ "./src/app/utility/angular-bottom-sheet.animation.ts":
/*!***********************************************************!*\
  !*** ./src/app/utility/angular-bottom-sheet.animation.ts ***!
  \***********************************************************/
/*! exports provided: SlideUpToggleAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideUpToggleAnimation", function() { return SlideUpToggleAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var SlideUpToggleAnimation = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideUpToggle', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }))
        ])
    ])
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_angular_bottom_sheet_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/angular-bottom-sheet.module */ "./src/app/angular-bottom-sheet.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_angular_bottom_sheet_module__WEBPACK_IMPORTED_MODULE_2__["AngularBottomSheetModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Dev\UI\angular-bottom-sheet\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map