webpackJsonp([0],Array(32).concat([
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PageOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PageTwo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PageThree; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BasicPage = (function () {
    function BasicPage(app, menu) {
        menu.enable(true);
    }
    BasicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name='menu'></ion-icon>\n    </button>\n    <ion-title>\n      Menus\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <button ion-button block menuToggle>Toggle Menu</button>\n</ion-content>\n"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]])
    ], BasicPage);
    return BasicPage;
}());

var PageOne = (function () {
    function PageOne() {
    }
    PageOne = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name='menu'></ion-icon>\n    </button>\n    <ion-title>\n      Menus\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <button ion-button block menuToggle>Toggle Menu</button>\n</ion-content>\n"
        })
    ], PageOne);
    return PageOne;
}());

var PageTwo = (function () {
    function PageTwo() {
    }
    PageTwo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name='menu'></ion-icon>\n    </button>\n    <ion-title>\n      Friends\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <button ion-button block menuToggle>Toggle Menu</button>\n</ion-content>\n"
        })
    ], PageTwo);
    return PageTwo;
}());

var PageThree = (function () {
    function PageThree() {
    }
    PageThree = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name='menu'></ion-icon>\n    </button>\n    <ion-title>\n      Events\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <button ion-button block menuToggle>Toggle Menu</button>\n</ion-content>\n"
        })
    ], PageThree);
    return PageThree;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Page4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Page3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Page2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Page4 = (function () {
    function Page4(nav) {
        this.nav = nav;
    }
    Page4.prototype.goBack = function () {
        this.nav.setRoot(ColorsPage);
    };
    Page4 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n    <ion-header>\n      <ion-navbar color=\"light\">\n        <ion-title>Toolbar: Light</ion-title>\n      </ion-navbar>\n    </ion-header>\n\n    <ion-content padding>\n      <button ion-button block (click)=\"goBack()\">Go Back to Beginning</button>\n    </ion-content>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], Page4);
    return Page4;
}());

var Page3 = (function () {
    function Page3(nav) {
        this.nav = nav;
    }
    Page3.prototype.pushPage = function () {
        this.nav.push(Page4);
    };
    Page3 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n    <ion-header>\n      <ion-navbar color=\"danger\">\n        <ion-title>Toolbar: Danger</ion-title>\n      </ion-navbar>\n    </ion-header>\n\n    <ion-content padding>\n      <button ion-button block (click)=\"pushPage()\">Next Page</button>\n    </ion-content>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], Page3);
    return Page3;
}());

var Page2 = (function () {
    function Page2(nav) {
        this.nav = nav;
    }
    Page2.prototype.pushPage = function () {
        this.nav.push(Page3);
    };
    Page2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n    <ion-header>\n      <ion-navbar color=\"secondary\">\n        <ion-title>Toolbar: Secondary</ion-title>\n      </ion-navbar>\n    </ion-header>\n\n    <ion-content padding>\n      <button ion-button block (click)=\"pushPage()\">Next Page</button>\n    </ion-content>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], Page2);
    return Page2;
}());

var ColorsPage = (function () {
    function ColorsPage(nav) {
        this.nav = nav;
    }
    ColorsPage.prototype.pushPage = function () {
        this.nav.push(Page2);
    };
    ColorsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n    <ion-header>\n      <ion-navbar color=\"primary\">\n        <ion-title>Toolbar: Primary</ion-title>\n      </ion-navbar>\n    </ion-header>\n\n    <ion-content padding>\n      <button ion-button block (click)=\"pushPage()\">Next Page</button>\n    </ion-content>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], ColorsPage);
    return ColorsPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BasicPage = (function () {
    function BasicPage(platform, actionsheetCtrl) {
        this.platform = platform;
        this.actionsheetCtrl = actionsheetCtrl;
    }
    BasicPage.prototype.openMenu = function () {
        var actionSheet = this.actionsheetCtrl.create({
            title: 'Albums',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Delete',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'trash' : null,
                    handler: function () {
                        console.log('Delete clicked');
                    }
                },
                {
                    text: 'Share',
                    icon: !this.platform.is('ios') ? 'share' : null,
                    handler: function () {
                        console.log('Share clicked');
                    }
                },
                {
                    text: 'Play',
                    icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
                    handler: function () {
                        console.log('Play clicked');
                    }
                },
                {
                    text: 'Favorite',
                    icon: !this.platform.is('ios') ? 'heart-outline' : null,
                    handler: function () {
                        console.log('Favorite clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    icon: !this.platform.is('ios') ? 'close' : null,
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    BasicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\action-sheets\basic\basic.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Action Sheets</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="action-sheets-basic-page">\n  <button ion-button block (click)="openMenu()">\n    Show Action Sheet\n  </button>\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\action-sheets\basic\basic.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], BasicPage);
    return BasicPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BasicPage = (function () {
    function BasicPage(alerCtrl) {
        this.alerCtrl = alerCtrl;
    }
    BasicPage.prototype.doAlert = function () {
        var alert = this.alerCtrl.create({
            title: 'New Friend!',
            message: 'Your friend, Obi wan Kenobi, just approved your friend request!',
            buttons: ['Ok']
        });
        alert.present();
    };
    BasicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\alerts\basic\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Alerts</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button block color="dark" (click)="doAlert()">Show Basic Alert</button>\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\alerts\basic\template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], BasicPage);
    return BasicPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckboxPage = (function () {
    function CheckboxPage(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    CheckboxPage.prototype.doCheckbox = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Which planets have you visited?');
        alert.addInput({
            type: 'checkbox',
            label: 'Alderaan',
            value: 'value1',
            checked: true
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Bespin',
            value: 'value2'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Coruscant',
            value: 'value3'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Endor',
            value: 'value4'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Hoth',
            value: 'value5'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Jakku',
            value: 'value6'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Naboo',
            value: 'value6'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Takodana',
            value: 'value6'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Tatooine',
            value: 'value6'
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Okay',
            handler: function (data) {
                console.log('Checkbox data:', data);
                _this.testCheckboxOpen = false;
                _this.testCheckboxResult = data;
            }
        });
        alert.present().then(function () {
            _this.testCheckboxOpen = true;
        });
    };
    CheckboxPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\alerts\checkbox\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Checkbox</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button block color="danger" (click)="doCheckbox()">Show Checkbox Alert</button>\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\alerts\checkbox\template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], CheckboxPage);
    return CheckboxPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmPage = (function () {
    function ConfirmPage(alerCtrl) {
        this.alerCtrl = alerCtrl;
    }
    ConfirmPage.prototype.doConfirm = function () {
        var confirm = this.alerCtrl.create({
            title: 'Use this lightsaber?',
            message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
            buttons: [
                {
                    text: 'Disagree',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    ConfirmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\alerts\confirm\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Confirm</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button color="primary" block (click)="doConfirm()">Show Confirm Alert</button>\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\alerts\confirm\template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ConfirmPage);
    return ConfirmPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromptPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PromptPage = (function () {
    function PromptPage(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    PromptPage.prototype.doPrompt = function () {
        var prompt = this.alertCtrl.create({
            title: 'Login',
            message: "Enter a name for this new album you're so keen on adding",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Title'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    PromptPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\alerts\prompt\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Prompt</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button color="secondary" block (click)="doPrompt()">Show Prompt Alert</button>\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\alerts\prompt\template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], PromptPage);
    return PromptPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RadioPage = (function () {
    function RadioPage(alerCtrl) {
        this.alerCtrl = alerCtrl;
    }
    RadioPage.prototype.doRadio = function () {
        var _this = this;
        var alert = this.alerCtrl.create();
        alert.setTitle('Lightsaber color');
        alert.addInput({
            type: 'radio',
            label: 'Blue',
            value: 'blue',
            checked: true
        });
        alert.addInput({
            type: 'radio',
            label: 'Green',
            value: 'green'
        });
        alert.addInput({
            type: 'radio',
            label: 'Red',
            value: 'red'
        });
        alert.addInput({
            type: 'radio',
            label: 'Yellow',
            value: 'yellow'
        });
        alert.addInput({
            type: 'radio',
            label: 'Purple',
            value: 'purple'
        });
        alert.addInput({
            type: 'radio',
            label: 'White',
            value: 'white'
        });
        alert.addInput({
            type: 'radio',
            label: 'Black',
            value: 'black'
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                console.log('Radio data:', data);
                _this.testRadioOpen = false;
                _this.testRadioResult = data;
            }
        });
        alert.present().then(function () {
            _this.testRadioOpen = true;
        });
    };
    RadioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\alerts\radio\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Radio</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button block light (click)="doRadio()">Show Radio Alert</button>\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\alerts\radio\template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], RadioPage);
    return RadioPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BasicPage = (function () {
    function BasicPage() {
    }
    BasicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\badges\basic\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Badges</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n\n    <img src="assets/img/bjork-live.jpg"/>\n\n    <ion-card-content>\n      <ion-card-title>\n        Björk\n      </ion-card-title>\n      <p>\n        Björk first came to prominence as one of the lead vocalists of the avant pop Icelandic sextet the Sugarcubes, but when...\n      </p>\n    </ion-card-content>\n\n    <ion-item>\n      <ion-icon name=\'musical-notes\' item-start style="color: #d03e84"></ion-icon>\n      Albums\n      <ion-badge item-end>9</ion-badge>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'logo-twitter\' item-start style="color: #55acee"></ion-icon>\n      Followers\n      <ion-badge item-end>260k</ion-badge>\n    </ion-item>\n\n  </ion-card>\n\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\badges\basic\template.html"*/
        })
    ], BasicPage);
    return BasicPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BasicPage = (function () {
    function BasicPage() {
    }
    BasicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\buttons\basic\basic.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Buttons</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p>\n    <button ion-button color="light">Light</button>\n  </p>\n\n  <p>\n    <button ion-button>Default</button>\n  </p>\n\n  <p>\n    <button ion-button color="secondary">Secondary</button>\n  </p>\n\n  <p>\n    <button ion-button color="danger">Danger</button>\n  </p>\n\n  <p>\n    <button ion-button color="dark">Dark</button>\n  </p>\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\buttons\basic\basic.html"*/
        })
    ], BasicPage);
    return BasicPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BlockPage = (function () {
    function BlockPage() {
    }
    BlockPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\buttons\block\block.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Block Buttons</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p>\n    <button ion-button color="light" block>Light</button>\n  </p>\n\n  <p>\n    <button ion-button block>Default</button>\n  </p>\n\n  <p>\n    <button ion-button color="secondary" block>Secondary</button>\n  </p>\n\n  <p>\n    <button ion-button color="danger" block>Danger</button>\n  </p>\n\n  <p>\n    <button ion-button color="dark" block>Dark</button>\n  </p>\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\buttons\block\block.html"*/
        })
    ], BlockPage);
    return BlockPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClearPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ClearPage = (function () {
    function ClearPage() {
    }
    ClearPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\buttons\clear\clear.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Clear Buttons</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p>\n    <button ion-button color="light" clear>Light</button>\n  </p>\n\n  <p>\n    <button ion-button clear>Default</button>\n  </p>\n\n  <p>\n    <button ion-button color="secondary" clear>Secondary</button>\n  </p>\n\n  <p>\n    <button ion-button color="danger" clear>Danger</button>\n  </p>\n\n  <p>\n    <button ion-button color="dark" clear>Dark</button>\n  </p>\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\buttons\clear\clear.html"*/
        })
    ], ClearPage);
    return ClearPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComponentsPage = (function () {
    function ComponentsPage() {
    }
    ComponentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\buttons\components\components.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>Buttons In Components</ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only>\n        <ion-icon name=\'contact\'></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n    <button ion-button icon-only>\n      <ion-icon name=\'search\'></ion-icon>\n    </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="buttons-components-page">\n  <ion-card>\n    <ion-card-content>\n      <img src="assets/img/img-icon.png" />\n    </ion-card-content>\n\n    <ion-item>\n      <button ion-button clear item-start>Like</button>\n      <button ion-button clear item-end>Comment</button>\n    </ion-item>\n  </ion-card>\n\n  <ion-list>\n    <ion-item>\n      Inner Button\n      <button ion-button item-end outline>Outline</button>\n    </ion-item>\n\n    <ion-item>\n      Left Icon Button\n      <button ion-button item-end outline icon-start>\n        <ion-icon name=\'star\'></ion-icon>\n        Left Icon\n      </button>\n    </ion-item>\n\n    <ion-item>\n      Right Icon Button\n      <button ion-button item-end outline icon-end>\n        Right Icon\n        <ion-icon name=\'star\'></ion-icon>\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\buttons\components\components.html"*/
        })
    ], ComponentsPage);
    return ComponentsPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FullPage = (function () {
    function FullPage() {
    }
    FullPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\buttons\full\full.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Full Buttons</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <p>\n    <button ion-button color="light" full>Light</button>\n  </p>\n  <p>\n    <button ion-button full>Default</button>\n  </p>\n\n  <p>\n    <button ion-button color="secondary" full>Secondary</button>\n  </p>\n\n  <p>\n    <button ion-button color="danger" full>Danger</button>\n  </p>\n  <p>\n    <button ion-button color="dark" full>Dark</button>\n  </p>\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\buttons\full\full.html"*/
        })
    ], FullPage);
    return FullPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IconsPage = (function () {
    function IconsPage() {
    }
    IconsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\buttons\icons\icons.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Icon Buttons</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <p>\n    <button ion-button color="light" icon-start>\n      <ion-icon name=\'arrow-back\'></ion-icon>\n      Back\n    </button>\n\n    <button ion-button color="light" icon-only>\n      <ion-icon name=\'arrow-down\'></ion-icon>\n    </button>\n\n    <button ion-button color="light" icon-only>\n      <ion-icon name=\'arrow-up\'></ion-icon>\n    </button>\n\n    <button ion-button color="light" icon-end>\n      Next\n      <ion-icon name=\'arrow-forward\'></ion-icon>\n    </button>\n  </p>\n\n  <p>\n    <button ion-button icon-start>\n      <ion-icon name=\'home\'></ion-icon>\n      Home\n    </button>\n    <button ion-button outline icon-start>\n      <ion-icon name=\'briefcase\' is-active="false"></ion-icon>\n      Work\n    </button>\n    <button ion-button clear icon-start>\n      <ion-icon name=\'beer\' is-active="false"></ion-icon>\n      Pub\n    </button>\n  </p>\n\n  <p>\n    <button ion-button color="secondary" icon-start>\n      <ion-icon name=\'people\'></ion-icon>\n      Friends\n    </button>\n    <button ion-button color="secondary" outline icon-start>\n      <ion-icon name=\'paw\' is-active="false"></ion-icon>\n      Best Friend\n    </button>\n  </p>\n\n  <p>\n    <button ion-button color="danger" icon-start>\n      <ion-icon name=\'close\'></ion-icon>\n      Remove\n    </button>\n    <button ion-button color="danger" outline icon-only>\n      <ion-icon name=\'remove-circle\' is-active="false"></ion-icon>\n    </button>\n    <button ion-button color="danger" clear icon-only>\n      <ion-icon name=\'trash\' is-active="false"></ion-icon>\n    </button>\n  </p>\n\n  <p>\n    <button ion-button color="dark" round icon-start>\n      <ion-icon name=\'construct\' is-active="false"></ion-icon>\n      Tools\n    </button>\n    <button ion-button color="dark" clear icon-only>\n      <ion-icon name=\'hammer\' is-active="false"></ion-icon>\n    </button>\n  </p>\n\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\buttons\icons\icons.html"*/
        })
    ], IconsPage);
    return IconsPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutlinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OutlinePage = (function () {
    function OutlinePage() {
    }
    OutlinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\buttons\outline\outline.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Outline Buttons</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <p>\n    <button ion-button color="light" outline>Light</button>\n  </p>\n\n  <p>\n    <button ion-button outline>Default</button>\n  </p>\n\n  <p>\n    <button ion-button color="secondary" outline>Secondary</button>\n  </p>\n\n  <p>\n    <button ion-button color="danger" outline>Danger</button>\n  </p>\n\n  <p>\n    <button ion-button color="dark" outline>Dark</button>\n  </p>\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\buttons\outline\outline.html"*/
        })
    ], OutlinePage);
    return OutlinePage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoundPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RoundPage = (function () {
    function RoundPage() {
    }
    RoundPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\buttons\round\round.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Round Buttons</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p>\n    <button ion-button color="light" round>Light</button>\n  </p>\n  <p>\n    <button ion-button round>Default</button>\n  </p>\n\n  <p>\n    <button ion-button color="secondary" round>Secondary</button>\n  </p>\n\n  <p>\n    <button ion-button color="danger" round>Danger</button>\n  </p>\n\n  <p>\n    <button ion-button color="dark" round>Dark</button>\n  </p>\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\buttons\round\round.html"*/
        })
    ], RoundPage);
    return RoundPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SizesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SizesPage = (function () {
    function SizesPage() {
    }
    SizesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\buttons\sizes\sizes.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Button Sizes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p>\n    <button ion-button color="light" small>Light Small</button>\n  </p>\n  <p>\n    <button ion-button small>Default Small</button>\n  </p>\n  <p>\n    <button ion-button color="secondary">Secondary Medium</button>\n  </p>\n\n  <p>\n    <button ion-button color="danger" medium>Danger Medium</button>\n  </p>\n  <p>\n    <button ion-button color="dark" large>Dark Large</button>\n  </p>\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\buttons\sizes\sizes.html"*/
        })
    ], SizesPage);
    return SizesPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BasicPage = (function () {
    function BasicPage() {
    }
    BasicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\fabs\basic\template.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n      FABs\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-fab top right edge>\n    <button ion-fab color="vibrant" mini><ion-icon name="add"></ion-icon></button>\n    <ion-fab-list>\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-fab right bottom>\n    <button ion-fab color="light"><ion-icon name="arrow-dropleft"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-fab left top>\n    <button ion-fab color="secondary"><ion-icon name="arrow-dropright"></ion-icon></button>\n    <ion-fab-list side="right">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-fab left bottom>\n    <button ion-fab color="dark"><ion-icon name="arrow-dropup"></ion-icon></button>\n    <ion-fab-list side="top">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-fab center middle>\n    <button ion-fab color="danger"><ion-icon name="md-share"></ion-icon></button>\n    <ion-fab-list side="top">\n      <button ion-fab color="primary"><ion-icon name="logo-vimeo"></ion-icon></button>\n    </ion-fab-list>\n    <ion-fab-list side="bottom">\n      <button ion-fab color="secondary"><ion-icon name="logo-facebook"></ion-icon></button>\n    </ion-fab-list>\n    <ion-fab-list side="left">\n      <button ion-fab color="light"><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n    <ion-fab-list side="right">\n      <button ion-fab color="dark"><ion-icon name="logo-twitter"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-fab right middle>\n    <button ion-fab color="danger"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\fabs\basic\template.html"*/
        })
    ], BasicPage);
    return BasicPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvancedMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AdvancedMapPage = (function () {
    function AdvancedMapPage() {
    }
    AdvancedMapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\cards\advanced-map\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Map Card</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="cards-bg">\n\n<ion-card class="adv-map">\n  <div style="position: relative">\n    <img src="assets/img/advance-card-map-madison.png">\n    <ion-fab right top>\n      <button ion-fab class="fab-map">\n        <ion-icon name=\'pin\'></ion-icon>\n      </button>\n    </ion-fab>\n  </div>\n  <ion-item>\n    <ion-icon color="subtle" large item-start name=\'football\'></ion-icon>\n    <h2>Museum of Football</h2>\n    <p>11 N. Way St, Madison, WI 53703</p>\n  </ion-item>\n  <ion-item>\n    <ion-icon color="subtle" large item-start name=\'wine\'></ion-icon>\n    <h2>Institute of Fine Cocktails</h2>\n    <p>14 S. Hop Avenue, Madison, WI 53703</p>\n  </ion-item>\n  <ion-item actions>\n    <span ion-text item-start color="secondary" class="item-bold">18 min</span>\n    <span ion-text item-start color="subtle">(2.6 mi)</span>\n    <button ion-button color="primary" clear item-end icon-start>\n      <ion-icon name=\'navigate\'></ion-icon>\n      Start\n    </button>\n  </ion-item>\n\n</ion-card>\n\n<ion-card class="adv-map">\n  <div style="position: relative">\n    <img src="assets/img/advance-card-map-mario.png">\n\n    <ion-fab right top>\n      <button ion-fab color="danger" class="fab-map">\n        <ion-icon name="pin"></ion-icon>\n      </button>\n    </ion-fab>\n  </div>\n  <ion-item>\n    <ion-icon color="subtle" large item-start name=\'cloud\'></ion-icon>\n    <h2>Yoshi\'s Island</h2>\n    <p>Iggy Koopa</p>\n  </ion-item>\n  <ion-item>\n    <ion-icon color="subtle" large item-start name=\'leaf\'></ion-icon>\n    <h2>Forest of Illusion</h2>\n    <p>Roy Koopa</p>\n  </ion-item>\n  <ion-item actions>\n    <span ion-text item-start class="item-bold">3 hr</span>\n    <span ion-text item-start color="subtle">(4.8 mi)</span>\n    <button ion-button color="danger" clear item-end icon-start>\n      <ion-icon name=\'navigate\'></ion-icon>\n      Start\n    </button>\n  </ion-item>\n\n</ion-card>\n\n<ion-card class="adv-map">\n  <div style="position: relative">\n    <img src="assets/img/advance-card-map-paris.png">\n    <ion-fab right top>\n      <button ion-fab color="secondary">\n        <ion-icon name="pin"></ion-icon>\n      </button>\n    </ion-fab>\n  </div>\n  <ion-item>\n    <ion-icon color="subtle" large item-start name=\'information-circle\'></ion-icon>\n    <h2>Museum of Information</h2>\n    <p>44 Rue de Info, 75010 Paris, France</p>\n  </ion-item>\n  <ion-item>\n    <ion-icon color="subtle" large item-start name=\'leaf\'></ion-icon>\n    <h2>General Pharmacy</h2>\n    <p>1 Avenue Faux, 75010 Paris, France</p>\n  </ion-item>\n  <ion-item actions>\n    <span ion-text item-start color="secondary" class="item-bold">26 min</span>\n    <span ion-text item-start color="subtle">(8.1 mi)</span>\n    <button ion-button color="secondary" clear item-end icon-start>\n      <ion-icon name=\'navigate\'></ion-icon>\n      Start\n    </button>\n  </ion-item>\n\n</ion-card>\n\n\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\cards\advanced-map\template.html"*/
        })
    ], AdvancedMapPage);
    return AdvancedMapPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvancedSocialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AdvancedSocialPage = (function () {
    function AdvancedSocialPage() {
    }
    AdvancedSocialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\cards\advanced-social\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Social Card</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="cards-bg social-cards">\n\n<ion-card>\n\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/marty-avatar.png">\n    </ion-avatar>\n    <h2>Marty McFly</h2>\n    <p>November 5, 1955</p>\n  </ion-item>\n\n  <img src="assets/img/advance-card-bttf.png">\n\n  <ion-card-content>\n    <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n  </ion-card-content>\n\n  <ion-row>\n    <ion-col>\n      <button ion-button color="primary" clear small icon-start>\n        <ion-icon name=\'thumbs-up\'></ion-icon>\n        12 Likes\n      </button>\n    </ion-col>\n    <ion-col>\n      <button ion-button color="primary" clear small icon-start>\n        <ion-icon name=\'text\'></ion-icon>\n        4 Comments\n      </button>\n    </ion-col>\n    <ion-col align-self-center text-center>\n      <ion-note>\n        11h ago\n      </ion-note>\n    </ion-col>\n  </ion-row>\n\n</ion-card>\n\n\n<ion-card>\n\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/sarah-avatar.png.jpeg">\n    </ion-avatar>\n    <h2>Sarah Connor</h2>\n    <p>May 12, 1984</p>\n  </ion-item>\n\n  <img src="assets/img/advance-card-tmntr.jpg">\n\n  <ion-card-content>\n    <p>I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human life, maybe we can too.</p>\n  </ion-card-content>\n\n  <ion-row>\n    <ion-col>\n      <button ion-button color="primary" clear small icon-start>\n        <ion-icon name=\'thumbs-up\'></ion-icon>\n        30 Likes\n      </button>\n    </ion-col>\n    <ion-col>\n      <button ion-button color="primary" clear small icon-start>\n        <ion-icon name=\'text\'></ion-icon>\n        64 Comments\n      </button>\n    </ion-col>\n    <ion-col align-self-center text-center>\n      <ion-note>\n        30yr ago\n      </ion-note>\n    </ion-col>\n  </ion-row>\n\n</ion-card>\n\n\n<ion-card>\n\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/img/ian-avatar.png">\n    </ion-avatar>\n    <h2>Dr. Ian Malcolm</h2>\n    <p>June 28, 1990</p>\n  </ion-item>\n\n  <img src="assets/img/advance-card-jp.jpg">\n\n  <ion-card-content>\n    <p>Your scientists were so preoccupied with whether or not they could, that they didn\'t stop to think if they should.</p>\n  </ion-card-content>\n\n  <ion-row>\n    <ion-col>\n      <button ion-button color="primary" clear small icon-start>\n        <ion-icon name=\'thumbs-up\'></ion-icon>\n        46 Likes\n      </button>\n    </ion-col>\n    <ion-col>\n      <button ion-button color="primary" clear small icon-start>\n        <ion-icon name=\'text\'></ion-icon>\n        66 Comments\n      </button>\n    </ion-col>\n    <ion-col align-self-center text-center>\n      <ion-note>\n        2d ago\n      </ion-note>\n    </ion-col>\n  </ion-row>\n\n</ion-card>\n\n\n</ion-content>\n\n<style>\n  .social-cards ion-col {\n    padding: 0;\n  }\n</style>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\cards\advanced-social\template.html"*/
        })
    ], AdvancedSocialPage);
    return AdvancedSocialPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgroundPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BackgroundPage = (function () {
    function BackgroundPage() {
    }
    BackgroundPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\cards\background\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Background Images</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n\n  <ion-card>\n    <img src="assets/img/card-saopaolo.png"/>\n    <div class="card-title">São Paulo</div>\n    <div class="card-subtitle">41 Listings</div>\n  </ion-card>\n\n  <ion-card>\n    <img src="assets/img/card-amsterdam.png"/>\n    <div class="card-title">Amsterdam</div>\n    <div class="card-subtitle">64 Listings</div>\n  </ion-card>\n\n  <ion-card>\n    <img src="assets/img/card-sf.png"/>\n    <div class="card-title">San Francisco</div>\n    <div class="card-subtitle">72 Listings</div>\n  </ion-card>\n\n  <ion-card>\n    <img src="assets/img/card-madison.png"/>\n    <div class="card-title">Madison</div>\n    <div class="card-subtitle">28 Listings</div>\n  </ion-card>\n\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\cards\background\template.html"*/
        })
    ], BackgroundPage);
    return BackgroundPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BasicPage = (function () {
    function BasicPage() {
    }
    BasicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\cards\basic\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Basic Cards</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="cards-bg">\n\n<ion-card>\n\n  <ion-card-content>\n    This is just your basic card with some text to boot. Like it?  Keep scrolling...\n  </ion-card-content>\n\n</ion-card>\n\n\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\cards\basic\template.html"*/
        })
    ], BasicPage);
    return BasicPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderPage = (function () {
    function HeaderPage() {
    }
    HeaderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\cards\header\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Card Headers</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="cards-bg">\n\n<ion-card>\n\n  <ion-card-header>\n    Header\n  </ion-card-header>\n\n  <ion-card-content>\n    The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n  </ion-card-content>\n\n</ion-card>\n\n\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\cards\header\template.html"*/
        })
    ], HeaderPage);
    return HeaderPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ImagePage = (function () {
    function ImagePage() {
    }
    ImagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\cards\image\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Card Images</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="cards-bg">\n\n  <ion-card>\n\n    <img src="assets/img/nin-live.png"/>\n\n    <ion-card-content>\n      <ion-card-title>\n        Nine Inch Nails Live\n      </ion-card-title>\n      <p>\n        The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.\n      </p>\n    </ion-card-content>\n\n    <ion-row no-padding>\n      <ion-col>\n        <button ion-button clear small color="danger" icon-start>\n          <ion-icon name=\'star\'></ion-icon>\n          Favorite\n        </button>\n      </ion-col>\n      <ion-col text-center>\n        <button ion-button clear small color="danger" icon-start>\n          <ion-icon name=\'musical-notes\'></ion-icon>\n          Listen\n        </button>\n      </ion-col>\n      <ion-col text-right>\n        <button ion-button clear small color="danger" icon-start>\n          <ion-icon name=\'share-alt\'></ion-icon>\n          Share\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n  <ion-card>\n\n    <div>\n      <img src="assets/img/badu-live.png"/>\n    </div>\n\n    <ion-card-content>\n      <ion-card-title>\n        Erykah Badu\n      </ion-card-title>\n      <p>\n      American singer-songwriter, record producer, activist, and actress, Badu\'s style is a prime example of neo-soul.\n      </p>\n    </ion-card-content>\n\n    <ion-row no-padding>\n      <ion-col>\n        <button ion-button clear small color="danger" icon-start>\n          <ion-icon name=\'star\'></ion-icon>\n          Favorite\n        </button>\n      </ion-col>\n      <ion-col text-center>\n        <button ion-button clear small color="danger" icon-start>\n          <ion-icon name=\'musical-notes\'></ion-icon>\n          Listen\n        </button>\n      </ion-col>\n      <ion-col text-right>\n        <button ion-button clear small color="danger" icon-start>\n          <ion-icon name=\'share-alt\'></ion-icon>\n          Share\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n  <ion-card>\n\n    <div>\n      <img src="assets/img/queen-live.png"/>\n    </div>\n\n    <ion-card-content>\n      <ion-card-title>\n        Queen\n      </ion-card-title>\n      <p>\n        The British rock band formed in London in 1970, and is considered one of the biggest stadium rock bands in the world.\n      </p>\n    </ion-card-content>\n\n    <ion-row no-padding>\n      <ion-col>\n        <button ion-button clear small color="danger" icon-start>\n          <ion-icon name=\'star\'></ion-icon>\n          Favorite\n        </button>\n      </ion-col>\n      <ion-col text-center>\n        <button ion-button clear small color="danger" icon-start>\n          <ion-icon name=\'musical-notes\'></ion-icon>\n          Listen\n        </button>\n      </ion-col>\n      <ion-col text-right>\n        <button ion-button clear small color="danger" icon-start>\n          <ion-icon name=\'share-alt\'></ion-icon>\n          Share\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n  <ion-card>\n\n    <div>\n      <img src="assets/img/rundmc-live.png"/>\n    </div>\n\n    <ion-card-content>\n      <ion-card-title>\n        Run-D.M.C.\n      </ion-card-title>\n      <p>\n        The American hip hop group widely acknowledged as one of the most influential acts in the history of hip hop.\n      </p>\n    </ion-card-content>\n\n    <ion-row no-padding>\n      <ion-col>\n        <button ion-button clear small color="danger" icon-start>\n          <ion-icon name=\'star\'></ion-icon>\n          Favorite\n        </button>\n      </ion-col>\n      <ion-col text-center>\n        <button ion-button clear small color="danger" icon-start>\n          <ion-icon name=\'musical-notes\'></ion-icon>\n          Listen\n        </button>\n      </ion-col>\n      <ion-col text-right>\n        <button ion-button clear small color="danger" icon-start>\n          <ion-icon name=\'share-alt\'></ion-icon>\n          Share\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n\n\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\cards\image\template.html"*/
        })
    ], ImagePage);
    return ImagePage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ListPage = (function () {
    function ListPage() {
    }
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\cards\list\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Card Lists</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class=" cards-bg">\n\n  <ion-card class="cards-list-demo">\n    <ion-card-header>\n      Explore Nearby\n    </ion-card-header>\n\n    <ion-list>\n      <button ion-item>\n        <ion-icon name=\'cart\' item-start></ion-icon>\n        Shopping\n      </button>\n\n      <button ion-item>\n        <ion-icon name=\'medical\' item-start></ion-icon>\n        Hospital\n      </button>\n\n      <button ion-item>\n        <ion-icon name=\'cafe\' item-start></ion-icon>\n        Cafe\n      </button>\n\n      <button ion-item>\n        <ion-icon name=\'paw\' item-start></ion-icon>\n        Dog Park\n      </button>\n\n      <button ion-item>\n        <ion-icon name=\'beer\' item-start></ion-icon>\n        Pub\n      </button>\n\n      <button ion-item>\n        <ion-icon name=\'planet\' item-start></ion-icon>\n        Space\n      </button>\n\n    </ion-list>\n  </ion-card>\n\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\cards\list\template.html"*/
        })
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BasicPage = (function () {
    function BasicPage() {
    }
    BasicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\checkboxes\basic\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Checkboxes\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-list-header>\n      Characters\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label>Jon Snow</ion-label>\n      <ion-checkbox checked="true"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Daenerys Targaryen</ion-label>\n      <ion-checkbox color="dark" checked="true"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Arya Stark</ion-label>\n      <ion-checkbox value="cherry" disabled="true"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Tyrion Lannister</ion-label>\n      <ion-checkbox color="secondary"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Sansa Stark</ion-label>\n      <ion-checkbox color="danger" checked="true"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Khal Drogo</ion-label>\n      <ion-checkbox></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Cersei Lannister</ion-label>\n      <ion-checkbox color="energized" checked="true" color="dark"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Stannis Baratheon</ion-label>\n      <ion-checkbox color="royal" checked="true"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Petyr Baelish</ion-label>\n      <ion-checkbox disabled="true"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Hodor</ion-label>\n      <ion-checkbox color="dark" checked="true"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Catelyn Stark</ion-label>\n      <ion-checkbox color="secondary" checked="true"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Bronn</ion-label>\n      <ion-checkbox color="royal"></ion-checkbox>\n    </ion-item>\n\n\n  </ion-list>\n\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\checkboxes\basic\template.html"*/
        })
    ], BasicPage);
    return BasicPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BasicPage = (function () {
    function BasicPage() {
        this.event = {
            month: '1990-02-19',
            timeStarts: '07:43',
            timeEnds: '1990-02-20'
        };
    }
    BasicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\datetime\basic\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      DateTime\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="outer-content">\n\n  <ion-list>\n    <ion-item>\n      <ion-input placeholder="Title"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder="Location"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item>\n      <ion-label>Start Date</ion-label>\n      <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="event.month"></ion-datetime>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label>Start Time</ion-label>\n      <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="event.timeStarts"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Ends</ion-label>\n      <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="event.timeEnds"></ion-datetime>\n    </ion-item>\n\n    <button ion-item>\n      <ion-label>Repeat</ion-label>\n      <ion-note item-end>Never</ion-note>\n    </button>\n\n    <button ion-item>\n      <ion-label>Travel Time</ion-label>\n      <ion-note item-end>None</ion-note>\n    </button>\n  </ion-list>\n\n  <ion-list>\n    <button ion-item>\n      <ion-label>Alert</ion-label>\n      <ion-note item-end>None</ion-note>\n    </button>\n  </ion-list>\n\n</ion-content>\n\n<style>\n  ion-list:first-child {\n    margin-top: 32px;\n  }\n\n  ion-list + ion-list {\n    margin-top: 0;\n  }\n</style>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\datetime\basic\template.html"*/
        })
    ], BasicPage);
    return BasicPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BasicPage = (function () {
    function BasicPage() {
        this.press = 0;
        this.pan = 0;
        this.swipe = 0;
        this.tap = 0;
    }
    BasicPage.prototype.pressEvent = function (e) {
        this.press++;
    };
    BasicPage.prototype.panEvent = function (e) {
        this.pan++;
    };
    BasicPage.prototype.swipeEvent = function (e) {
        this.swipe++;
    };
    BasicPage.prototype.tapEvent = function (e) {
        this.tap++;
    };
    BasicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\gestures\basic\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Events</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card (tap)="tapEvent($event)">\n    <ion-item>\n      Tapped: {{tap}} times\n    </ion-item>\n  </ion-card>\n\n  <ion-card (press)="pressEvent($event)">\n    <ion-item>\n      Pressed: {{press}} times\n    </ion-item>\n  </ion-card>\n\n  <ion-card (pan)="panEvent($event)">\n    <ion-item>\n      Panned: {{pan}} times\n    </ion-item>\n  </ion-card>\n\n  <ion-card (swipe)="swipeEvent($event)">\n    <ion-item>\n      Swiped: {{swipe}} times\n    </ion-item>\n  </ion-card>\n\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\gestures\basic\template.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], BasicPage);
    return BasicPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BasicPage = (function () {
    function BasicPage() {
    }
    BasicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\grid\basic\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Grid</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="grid-basic-page">\n\n\n  <p padding>\n    Equal-width columns\n  </p>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div>1 of 2</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 2</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div>1 of 3</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 3</div>\n      </ion-col>\n      <ion-col>\n        <div>3 of 3</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <p padding>\n    Setting one column width\n  </p>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div>1 of 3</div>\n      </ion-col>\n      <ion-col col-6>\n        <div>2 of 3 (wider)</div>\n      </ion-col>\n      <ion-col>\n        <div>3 of 3</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <div>1 of 3 (wider)</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 3</div>\n      </ion-col>\n      <ion-col>\n        <div>3 of 3</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <p padding>\n    Variable-width columns\n  </p>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div>1 of 3</div>\n      </ion-col>\n      <ion-col col-auto>\n        <div>Variable width content</div>\n      </ion-col>\n      <ion-col>\n        <div>3 of 3</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div>1 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 4</div>\n      </ion-col>\n      <ion-col col-auto>\n        <div><ion-icon name="globe"></ion-icon></div>\n      </ion-col>\n      <ion-col>\n        <div>4 of 4</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <p padding>\n    Offsetting columns\n  </p>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div>1 of 2</div>\n      </ion-col>\n      <ion-col offset-4>\n        <div>2 of 2</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col offset-4>\n        <div>1 of 2</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 2</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <p padding>\n    Push and pull\n  </p>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-9 push-3>\n        <div>1 of 2</div>\n      </ion-col>\n      <ion-col col-3 pull-9>\n        <div>2 of 2</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6 push-3>\n        <div>1 of 3</div>\n      </ion-col>\n      <ion-col col-3 push-3>\n        <div>2 of 3</div>\n      </ion-col>\n      <ion-col col-3 pull-9>\n        <div>3 of 3</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <p padding>\n    Setting all column widths<br>\n  </p>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4>\n        <div>1 of 3</div>\n      </ion-col>\n      <ion-col col-3>\n        <div>2 of 3</div>\n      </ion-col>\n      <ion-col col-5>\n        <div>3 of 3</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <p padding>\n    Vertical alignment\n  </p>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div>1 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 4 <br>#</div>\n      </ion-col>\n      <ion-col>\n        <div>3 of 4 <br>#<br>#</div>\n      </ion-col>\n      <ion-col>\n        <div>4 of 4 <br>#<br>#<br>#</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row align-items-start>\n      <ion-col>\n        <div>1 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>3 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>4 of 4 <br>#<br>#<br>#</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row align-items-center>\n      <ion-col>\n        <div>1 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>3 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>4 of 4 <br>#<br>#<br>#</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row align-items-end>\n      <ion-col>\n        <div>1 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>3 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>4 of 4 <br>#<br>#<br>#</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col align-self-start>\n        <div>1 of 4</div>\n      </ion-col>\n      <ion-col align-self-center>\n        <div>2 of 4</div>\n      </ion-col>\n      <ion-col align-self-end>\n        <div>3 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>4 of 4 <br>#<br>#<br>#</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <p padding>\n    Horizontal Alignment\n  </p>\n  <ion-grid>\n    <ion-row justify-content-start>\n      <ion-col col-3>\n        <div>1 of 2</div>\n      </ion-col>\n      <ion-col col-3>\n        <div>2 of 2</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row justify-content-center>\n      <ion-col col-3>\n        <div>1 of 2</div>\n      </ion-col>\n      <ion-col col-3>\n        <div>2 of 2</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row justify-content-end>\n      <ion-col col-3>\n        <div>1 of 2</div>\n      </ion-col>\n      <ion-col col-3>\n        <div>2 of 2</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row justify-content-around>\n      <ion-col col-3>\n        <div>1 of 2</div>\n      </ion-col>\n      <ion-col col-3>\n        <div>2 of 2</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row justify-content-between>\n      <ion-col col-3>\n        <div>1 of 2</div>\n      </ion-col>\n      <ion-col col-3>\n        <div>2 of 2</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\grid\basic\template.html"*/
        })
    ], BasicPage);
    return BasicPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BasicPage = (function () {
    function BasicPage() {
    }
    BasicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\icons\basic\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Icons</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content text-center class="icons-basic-page">\n\n  <ion-row>\n    <ion-col><ion-icon name="ionic" color="primary"></ion-icon></ion-col>\n    <ion-col><ion-icon name="logo-angular"></ion-icon></ion-col>\n    <ion-col><ion-icon name="heart" color="danger"></ion-icon></ion-col>\n    <ion-col><ion-icon name="ionitron" color="primary"></ion-icon></ion-col>\n\n    <ion-col><ion-icon name="happy" color="vibrant"></ion-icon></ion-col>\n    <ion-col><ion-icon name="people"></ion-icon></ion-col>\n    <ion-col><ion-icon name="person"></ion-icon></ion-col>\n    <ion-col><ion-icon name="contact"></ion-icon></ion-col>\n\n    <ion-col><ion-icon name="apps"></ion-icon></ion-col>\n    <ion-col><ion-icon name="lock"></ion-icon></ion-col>\n    <ion-col><ion-icon name="key" color="bright"></ion-icon></ion-col>\n    <ion-col><ion-icon name="unlock"></ion-icon></ion-col>\n\n    <ion-col><ion-icon name="map" color="secondary"></ion-icon></ion-col>\n    <ion-col><ion-icon name="navigate"></ion-icon></ion-col>\n    <ion-col><ion-icon name="pin"></ion-icon></ion-col>\n    <ion-col><ion-icon name="locate"></ion-icon></ion-col>\n\n    <ion-col><ion-icon name="mic"></ion-icon></ion-col>\n    <ion-col><ion-icon name="musical-notes" color="vibrant"></ion-icon></ion-col>\n    <ion-col><ion-icon name="volume-up"></ion-icon></ion-col>\n    <ion-col><ion-icon name="microphone"></ion-icon></ion-col>\n\n    <ion-col><ion-icon name="cafe" color="bright"></ion-icon></ion-col>\n    <ion-col><ion-icon name="calculator"></ion-icon></ion-col>\n    <ion-col><ion-icon name="bus"></ion-icon></ion-col>\n    <ion-col><ion-icon name="wine" color="danger"></ion-icon></ion-col>\n\n    <ion-col><ion-icon name="camera"></ion-icon></ion-col>\n    <ion-col><ion-icon name="image" color="secondary"></ion-icon></ion-col>\n    <ion-col><ion-icon name="star" color="bright"></ion-icon></ion-col>\n    <ion-col><ion-icon name="pin"></ion-icon></ion-col>\n\n    <ion-col><ion-icon name="arrow-dropup-circle" color="vibrant"></ion-icon></ion-col>\n    <ion-col><ion-icon name="arrow-back"></ion-icon></ion-col>\n    <ion-col><ion-icon name="arrow-dropdown"></ion-icon></ion-col>\n    <ion-col><ion-icon name="arrow-forward"></ion-icon></ion-col>\n\n    <ion-col><ion-icon name="cloud"></ion-icon></ion-col>\n    <ion-col><ion-icon name="sunny" color="bright"></ion-icon></ion-col>\n    <ion-col><ion-icon name="umbrella"></ion-icon></ion-col>\n    <ion-col><ion-icon name="rainy" color="primary"></ion-icon></ion-col>\n  </ion-row>\n\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\icons\basic\template.html"*/
        })
    ], BasicPage);
    return BasicPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BasicPage = (function () {
    function BasicPage(alertCtrl) {
        this.alertCtrl = alertCtrl;
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            firstName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            lastName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
    }
    BasicPage.prototype.processForm = function () {
        var alert = this.alertCtrl.create({
            title: "Account Created",
            message: "Created Account for: " + this.form.value.firstName + " " + this.form.value.lastName,
            buttons: [{
                    text: 'Ok',
                }]
        });
        if (this.form.status === 'VALID') {
            alert.present();
        }
    };
    BasicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\inputs\basic\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Inputs</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form (submit)="processForm()" [formGroup]="form">\n      <ion-list>\n\n      <ion-item>\n        <ion-input formControlName="firstName" type="text" placeholder="First Name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input formControlName="lastName" type="text" placeholder="Last Name"></ion-input>\n      </ion-item>\n\n    </ion-list>\n    <div padding>\n      <button ion-button block type="submit">Create Account</button>\n    </div>\n  </form>\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\inputs\basic\template.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], BasicPage);
    return BasicPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FloatingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FloatingPage = (function () {
    function FloatingPage() {
    }
    FloatingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\inputs\floating\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Floating Labels</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-list>\n\n      <ion-item>\n        <ion-label floating>Username</ion-label>\n        <ion-input type="text" value=""></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input type="password" value=""></ion-input>\n      </ion-item>\n\n    </ion-list>\n\n    <div padding>\n      <button ion-button color="primary" block>Sign In</button>\n    </div>\n\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\inputs\floating\template.html"*/
        })
    ], FloatingPage);
    return FloatingPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixedInlinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FixedInlinePage = (function () {
    function FixedInlinePage() {
    }
    FixedInlinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\inputs\fixed-inline\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Fixed Labels</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label fixed>Username</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label fixed>Password</ion-label>\n      <ion-input type="password"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <div padding>\n    <button ion-button color="primary" block>Sign In</button>\n  </div>\n\n\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\inputs\fixed-inline\template.html"*/
        })
    ], FixedInlinePage);
    return FixedInlinePage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InlinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InlinePage = (function () {
    function InlinePage() {
    }
    InlinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\inputs\inline\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Inline Labels</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="masters">\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label>Username</ion-label>\n      <ion-input type="text" value=""></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Password</ion-label>\n      <ion-input type="password" value=""></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <div padding>\n    <button ion-button color="primary" block>Sign In</button>\n  </div>\n\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\inputs\inline\template.html"*/
        })
    ], InlinePage);
    return InlinePage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InsetPage = (function () {
    function InsetPage() {
    }
    InsetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\inputs\inset\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Inset Labels</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list inset>\n\n    <ion-item>\n      <ion-label>Username</ion-label>\n      <ion-input type="text" value=""></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Password</ion-label>\n      <ion-input type="password" value=""></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <div padding>\n    <button ion-button color="primary" block>Sign In</button>\n  </div>\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\inputs\inset\template.html"*/
        })
    ], InsetPage);
    return InsetPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceholderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PlaceholderPage = (function () {
    function PlaceholderPage() {
    }
    PlaceholderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\inputs\placeholder\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Placeholders</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-input type="text" placeholder="Username"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="password" placeholder="Password"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <div padding>\n    <button ion-button color="primary" block>Sign In</button>\n  </div>\n\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\inputs\placeholder\template.html"*/
        })
    ], PlaceholderPage);
    return PlaceholderPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StackedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StackedPage = (function () {
    function StackedPage() {
    }
    StackedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\inputs\stacked\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Stacked Labels</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n\n    <ion-item>\n      <ion-label stacked>Username</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Password</ion-label>\n      <ion-input type="password"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <div padding>\n    <button ion-button color="primary" block>Sign In</button>\n  </div>\n\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\inputs\stacked\template.html"*/
        })
    ], StackedPage);
    return StackedPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvatarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AvatarPage = (function () {
    function AvatarPage() {
    }
    AvatarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\lists\avatar\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Avatar List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="list-avatar-page">\n  <ion-list>\n\n    <ion-list-header>Today</ion-list-header>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-ts-woody.png">\n      </ion-avatar>\n      <h2>Woody</h2>\n      <p>This town ain\'t big enough for the two of us!</p>\n      <ion-note item-end>3:43 pm</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-ts-buzz.png">\n      </ion-avatar>\n      <h2>Buzz Lightyear</h2>\n      <p>My eyeballs could have been sucked from their sockets!</p>\n      <ion-note item-end>1:12 pm</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-ts-jessie.png">\n      </ion-avatar>\n      <h2>Jessie</h2>\n      <p>Well aren\'t you just the sweetest space toy I ever did meet!</p>\n      <ion-note item-end>10:03 am</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-ts-potatohead.png">\n      </ion-avatar>\n      <h2>Mr. Potato Head</h2>\n      <p>You\'re not turning me into a Mashed Potato.</p>\n      <ion-note item-end>5:47 am</ion-note>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-list-header>Yesterday</ion-list-header>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-ts-hamm.png">\n      </ion-avatar>\n      <h2>Hamm</h2>\n      <p>You heard of Kung Fu? Well get ready for pork chop.</p>\n      <ion-note item-end>11:11 pm</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-ts-slinky.png">\n      </ion-avatar>\n      <h2>Slinky Dog</h2>\n      <p>I may not be a smart dog, but I know what roadkill is.</p>\n      <ion-note item-end>8:54 pm</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-ts-rex.png">\n      </ion-avatar>\n      <h2>Rex</h2>\n      <p>Were you scared? Tell me honestly.</p>\n      <ion-note item-end>7:22 am</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-ts-bullseye.png">\n      </ion-avatar>\n      <h2>Bullseye</h2>\n      <p>Neigh!</p>\n      <ion-note item-end>2:08 am</ion-note>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-list-header>Last Week</ion-list-header>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-ts-barbie.png">\n      </ion-avatar>\n      <h2>Barbie</h2>\n      <p>So, who\'s ready for Ken\'s dream tour?</p>\n      <ion-note item-end>Sun</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-ts-squeeze.png">\n      </ion-avatar>\n      <h2>Squeeze</h2>\n      <p>The claw is our master.</p>\n      <ion-note item-end>Fri</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-ts-sarge.png">\n      </ion-avatar>\n      <h2>Sarge</h2>\n      <p>Code Red, repeat: We\'re at Code Red!</p>\n      <ion-note item-end>Wed</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-ts-bopeep.png">\n      </ion-avatar>\n      <h2>Bo Peep</h2>\n      <p>What would you say if I get someone else to watch the sheep for me tonight?</p>\n      <ion-note item-end>Mon</ion-note>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\lists\avatar\template.html"*/
        })
    ], AvatarPage);
    return AvatarPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BasicPage = (function () {
    function BasicPage() {
        this.items = [
            'Pokémon Yellow',
            'Super Metroid',
            'Mega Man X',
            'The Legend of Zelda',
            'Pac-Man',
            'Super Mario World',
            'Street Fighter II',
            'Half Life',
            'Final Fantasy VII',
            'Star Fox',
            'Tetris',
            'Donkey Kong III',
            'GoldenEye 007',
            'Doom',
            'Fallout',
            'GTA',
            'Halo'
        ];
    }
    BasicPage.prototype.itemSelected = function (item) {
        console.log("Selected Item", item);
    };
    BasicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\lists\basic\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Lists</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemSelected(item)">\n      {{ item }}\n    </button>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\lists\basic\template.html"*/
        })
    ], BasicPage);
    return BasicPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DividersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DividersPage = (function () {
    function DividersPage() {
    }
    DividersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\lists\dividers\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>List Dividers</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-item-group>\n      <ion-item-divider color="light">A</ion-item-divider>\n      <ion-item>Angola</ion-item>\n      <ion-item>Argentina</ion-item>\n      <ion-item>Armenia</ion-item>\n      <ion-item>Australia</ion-item>\n      <ion-item>Austria</ion-item>\n    </ion-item-group>\n\n    <ion-item-group>\n      <ion-item-divider color="light">B</ion-item-divider>\n      <ion-item>Bangladesh</ion-item>\n      <ion-item>Belarus</ion-item>\n      <ion-item>Belgium</ion-item>\n      <ion-item>Bhutan</ion-item>\n      <ion-item>Bolivia</ion-item>\n      <ion-item>Brazil</ion-item>\n    </ion-item-group>\n\n    <ion-item-group>\n      <ion-item-divider color="light">C</ion-item-divider>\n      <ion-item>Cambodia</ion-item>\n      <ion-item>Cameroon</ion-item>\n      <ion-item>Canada</ion-item>\n      <ion-item>Chile</ion-item>\n      <ion-item>China</ion-item>\n      <ion-item>Colombia</ion-item>\n      <ion-item>Costa Rica</ion-item>\n      <ion-item>Cuba</ion-item>\n      <ion-item>Cyprus</ion-item>\n      <ion-item>Czech Republic</ion-item>\n    </ion-item-group>\n\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\lists\dividers\template.html"*/
        })
    ], DividersPage);
    return DividersPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeadersPage = (function () {
    function HeadersPage() {
    }
    HeadersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\lists\headers\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>List Headers</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-list-header>Comedy</ion-list-header>\n    <ion-item>Airplane!</ion-item>\n    <ion-item>Caddyshack</ion-item>\n    <ion-item>Coming To America</ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>Action</ion-list-header>\n    <ion-item>Terminator II</ion-item>\n    <ion-item>The Empire Strikes Back</ion-item>\n    <ion-item>Blade Runner</ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>Horror</ion-list-header>\n    <ion-item>The Evil Dead</ion-item>\n    <ion-item>Poldergeist</ion-item>\n    <ion-item>Aliens</ion-item>\n  </ion-list>\n\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\lists\headers\template.html"*/
        })
    ], HeadersPage);
    return HeadersPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IconPage = (function () {
    function IconPage() {
    }
    IconPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\lists\icon\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Icon List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list no-border>\n\n    <ion-list-header>\n      Classes\n    </ion-list-header>\n\n    <ion-item>\n      <ion-icon name=\'planet\' item-start></ion-icon>\n      Astronomy\n      <ion-note item-end>\n      To the moon\n      </ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-toggle checked="false"></ion-toggle>\n      <ion-label>\n        Muggle Studies\n      </ion-label>\n      <ion-icon name=\'body\' item-start></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'leaf\' item-start></ion-icon>\n      Herbology\n      <ion-icon name=\'rose\' item-end color="secondary"></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'flask\' item-start></ion-icon>\n      Potions\n      <ion-note item-end>\n      Poisonous\n      </ion-note>\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n  <ion-list>\n\n    <ion-list-header>\n      Activities\n    </ion-list-header>\n\n    <ion-item>\n      Incantation\n      <ion-icon name=\'color-wand\' item-start></ion-icon>\n      <ion-note item-end>Crucio!</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-toggle checked="true"></ion-toggle>\n      <ion-label>\n        Quidditch Practice\n      </ion-label>\n      <ion-icon name=\'brush\' item-start></ion-icon>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-icon name=\'wine\' item-start></ion-icon>\n      Mead Drinking\n      <ion-note item-end>Yes please</ion-note>\n    </ion-item>\n\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-list-header>\n      Friends\n    </ion-list-header>\n\n    <ion-item>\n      <ion-icon name=\'flash\' item-start></ion-icon>\n      Harry\n      <ion-note item-end>The boy who lived</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'book\' item-start></ion-icon>\n      Hermoine\n      <ion-note item-end>Muggle-born</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'beer\' item-start></ion-icon>\n      Ron\n      <ion-note item-end>Brilliant!</ion-note>\n    </ion-item>\n\n\n  </ion-list>\n\n\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\lists\icon\template.html"*/
        })
    ], IconPage);
    return IconPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InsetPage = (function () {
    function InsetPage() {
        this.items = [
            'Pokémon Yellow',
            'Super Metroid',
            'Mega Man X',
            'The Legend of Zelda',
            'Pac-Man',
            'Super Mario World',
            'Street Fighter II',
            'Half Life',
            'Final Fantasy VII',
            'Star Fox',
            'Tetris',
            'Donkey Kong III',
            'GoldenEye 007',
            'Doom',
            'Fallout',
            'GTA',
            'Halo'
        ];
    }
    InsetPage.prototype.itemSelected = function (item) {
        console.log("Selected Item", item);
    };
    InsetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\lists\inset\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Inset List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list inset>\n    <button ion-item *ngFor="let item of items" (click)="itemSelected(item)">\n      {{ item }}\n    </button>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\lists\inset\template.html"*/
        })
    ], InsetPage);
    return InsetPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultilinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MultilinePage = (function () {
    function MultilinePage() {
    }
    MultilinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\lists\multiline\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Multiline Items</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>\n      Recent Conversations\n    </ion-list-header>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-finn.png">\n      </ion-avatar>\n      <h2>Finn</h2>\n      <h3>I\'m a big deal</h3>\n      <p>Listen, I\'ve had a pretty messed up day...</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-han.png">\n      </ion-avatar>\n      <h2>Han</h2>\n      <h3>Look, kid...</h3>\n      <p>I\'ve got enough on my plate as it is, and I...</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-rey.png">\n      </ion-avatar>\n      <h2>Rey</h2>\n      <h3>I can handle myself</h3>\n      <p>You will remove these restraints and leave...</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-luke.png">\n      </ion-avatar>\n      <h2>Luke</h2>\n      <h3>Your thoughts betray you</h3>\n      <p>I feel the good in you, the conflict...</p>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      Online\n    </ion-list-header>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-poe.png">\n      </ion-avatar>\n      <h2>Poe</h2>\n      <h3>New Ride</h3>\n      <p>I just upgraded my X-Wing. Next time...</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-ben.png">\n      </ion-avatar>\n      <h2>Ben</h2>\n      <h3>Move Along</h3>\n      <p>These aren\'t the droids you\'re looking for...</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-leia.png">\n      </ion-avatar>\n      <h2>Leia</h2>\n      <h3>You\'re My Only Hope</h3>\n      <p>I\'ve placed information vital to the survival...</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-yoda.png">\n      </ion-avatar>\n      <h2>Yoda</h2>\n      <h3>Size matters not</h3>\n      <p>Do or do not. There is no try...</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\lists\multiline\template.html"*/
        })
    ], MultilinePage);
    return MultilinePage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoLinesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NoLinesPage = (function () {
    function NoLinesPage() {
        this.items = [
            'Pokémon Yellow',
            'Super Metroid',
            'Mega Man X',
            'The Legend of Zelda',
            'Pac-Man',
            'Super Mario World',
            'Street Fighter II',
            'Half Life',
            'Final Fantasy VII',
            'Star Fox',
            'Tetris',
            'Donkey Kong III',
            'GoldenEye 007',
            'Doom',
            'Fallout',
            'GTA',
            'Halo'
        ];
    }
    NoLinesPage.prototype.itemSelected = function (item) {
        console.log("Selected Item", item);
    };
    NoLinesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\lists\no-lines\template.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>No Lines</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list no-lines>\n    <button ion-item *ngFor="let item of items" (click)="itemSelected(item)">\n      {{ item }}\n    </button>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\lists\no-lines\template.html"*/
        })
    ], NoLinesPage);
    return NoLinesPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SlidingPage = (function () {
    function SlidingPage() {
    }
    SlidingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\lists\sliding\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Sliding Items</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="outer-content">\n  <ion-list>\n    <ion-list-header>\n      Busters\n    </ion-list-header>\n\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/img/venkman.jpg">\n        </ion-avatar>\n        <h2>Venkman</h2>\n        <p>Back off man, I\'m a scientist.</p>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="light" icon-start>\n          <ion-icon name="ios-more"></ion-icon>\n          More\n        </button>\n        <button ion-button color="primary" icon-start>\n          <ion-icon name="text"></ion-icon>\n          Text\n        </button>\n        <button ion-button color="secondary" icon-start>\n          <ion-icon name="call"></ion-icon>\n          Call\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/img/spengler.jpg">\n        </ion-avatar>\n        <h2>Egon</h2>\n        <p>We\'re gonna go full stream.</p>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="light" icon-start>\n          <ion-icon name="ios-more"></ion-icon>\n          More\n        </button>\n        <button ion-button color="primary" icon-start>\n          <ion-icon name="text"></ion-icon>\n          Text\n        </button>\n        <button ion-button color="secondary" icon-start>\n          <ion-icon name="call"></ion-icon>\n          Call\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/img/stantz.jpg">\n        </ion-avatar>\n        <h2>Ray</h2>\n        <p>Ugly little spud, isn\'t he?</p>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="light" icon-start>\n          <ion-icon name="ios-more"></ion-icon>\n          More\n        </button>\n        <button ion-button color="primary" icon-start>\n          <ion-icon name="text"></ion-icon>\n          Text\n        </button>\n        <button ion-button color="secondary" icon-start>\n          <ion-icon name="call"></ion-icon>\n          Call\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/img/winston.jpg">\n        </ion-avatar>\n        <h2>Winston</h2>\n        <p>That\'s a big Twinkie.</p>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="light" icon-start>\n          <ion-icon name="ios-more"></ion-icon>\n          More\n        </button>\n        <button ion-button color="primary" icon-start>\n          <ion-icon name="text"></ion-icon>\n          Text\n        </button>\n        <button ion-button color="secondary" icon-start>\n          <ion-icon name="call"></ion-icon>\n          Call\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/img/tully.jpg">\n        </ion-avatar>\n        <h2>Tully</h2>\n        <p>Okay, who brought the dog?</p>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="light" icon-start>\n          <ion-icon name="ios-more"></ion-icon>\n          More\n        </button>\n        <button ion-button color="primary" icon-start>\n          <ion-icon name="text"></ion-icon>\n          Text\n        </button>\n        <button ion-button color="secondary" icon-start>\n          <ion-icon name="call"></ion-icon>\n          Call\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/img/barrett.jpg">\n        </ion-avatar>\n        <h2>Dana</h2>\n        <p>I am The Gatekeeper!</p>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="light" icon-start>\n          <ion-icon name="ios-more"></ion-icon>\n          More\n        </button>\n        <button ion-button color="primary" icon-start>\n          <ion-icon name="text"></ion-icon>\n          Text\n        </button>\n        <button ion-button color="secondary"icon-start >\n          <ion-icon name="call"></ion-icon>\n          Call\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      Ghosts\n    </ion-list-header>\n\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/img/slimer.jpg">\n        </ion-avatar>\n        <h2>Slimer</h2>\n        <p>Boo!</p>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="light" icon-start>\n          <ion-icon name="ios-more"></ion-icon>\n          More\n        </button>\n        <button ion-button color="primary" icon-start>\n          <ion-icon name="text"></ion-icon>\n          Text\n        </button>\n        <button ion-button color="secondary" icon-start>\n          <ion-icon name="call"></ion-icon>\n          Call\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/img/marshmallow-man.png">\n        </ion-avatar>\n        <h2>Stay Puft Marshmallow Man</h2>\n        <p>Never cross the streams!</p>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="light" icon-start>\n          <ion-icon name="ios-more"></ion-icon>\n          More\n        </button>\n        <button ion-button color="primary" icon-start>\n          <ion-icon name="text"></ion-icon>\n          Text\n        </button>\n        <button ion-button color="secondary" icon-start>\n          <ion-icon name="call"></ion-icon>\n          Call\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/img/gozer.png">\n        </ion-avatar>\n        <h2>Gozer</h2>\n        <p>Are you a God?</p>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button color="light" icon-start>\n          <ion-icon name="ios-more"></ion-icon>\n          More\n        </button>\n        <button ion-button color="primary" icon-start>\n          <ion-icon name="text"></ion-icon>\n          Text\n        </button>\n        <button ion-button color="secondary" icon-start>\n          <ion-icon name="call"></ion-icon>\n          Call\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\lists\sliding\template.html"*/
        })
    ], SlidingPage);
    return SlidingPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThumbnailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ThumbnailPage = (function () {
    function ThumbnailPage() {
    }
    ThumbnailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\lists\thumbnail\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Thumbnails</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/img/thumbnail-totoro.png">\n      </ion-thumbnail>\n      <h2>My Neighbor Totoro</h2>\n      <p>Hayao Miyazaki • 1988</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/img/thumbnail-rotla.png">\n      </ion-thumbnail>\n      <h2>Raiders of the Lost Ark</h2>\n      <p>Steven Spielberg • 1981</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/img/thumbnail-ghostbusters.png">\n      </ion-thumbnail>\n      <h2>Ghostbusters</h2>\n      <p>Ivan Reitman • 1984</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/img/thumbnail-batman.png">\n      </ion-thumbnail>\n      <h2>Batman</h2>\n      <p>Tim Burton • 1988</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/img/thumbnail-bttf.png">\n      </ion-thumbnail>\n      <h2>Back to the Future</h2>\n      <p>Robert Zemeckis • 1985</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/img/thumbnail-esb.png">\n      </ion-thumbnail>\n      <h2>The Empire Strikes Back</h2>\n      <p>Irvin Kershner • 1980</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/img/thumbnail-terminator.png">\n      </ion-thumbnail>\n      <h2>The Terminator</h2>\n      <p>James Cameron • 1984</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\lists\thumbnail\template.html"*/
        })
    ], ThumbnailPage);
    return ThumbnailPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BasicPage = (function () {
    function BasicPage(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    BasicPage.prototype.presentLoading = function () {
        this.loadingCtrl.create({
            content: 'Please wait...',
            duration: 3000,
            dismissOnPageChange: true
        }).present();
    };
    BasicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\loading\basic\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Loading</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button block (click)="presentLoading()">Show Loading</button>\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\loading\basic\template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], BasicPage);
    return BasicPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModalContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BasicPage = (function () {
    function BasicPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    BasicPage.prototype.openModal = function (characterNum) {
        var modal = this.modalCtrl.create(ModalContentPage, characterNum);
        modal.present();
    };
    BasicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\modals\basic\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Modals</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-list-header>\n      Hobbits\n    </ion-list-header>\n    <a ion-item (click)="openModal({charNum: 0})">\n      Gollum\n    </a>\n    <a ion-item (click)="openModal({charNum: 1})">\n      Frodo Baggins\n    </a>\n    <a ion-item (click)="openModal({charNum: 2})">\n      Sam\n    </a>\n  </ion-list>\n\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\modals\basic\template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], BasicPage);
    return BasicPage;
}());

var ModalContentPage = (function () {
    function ModalContentPage(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        var characters = [
            {
                name: 'Gollum',
                quote: 'Sneaky little hobbitses!',
                image: 'assets/img/avatar-gollum.jpg',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'River Folk' },
                    { title: 'Alter Ego', note: 'Smeagol' }
                ]
            },
            {
                name: 'Frodo',
                quote: 'Go back, Sam! I\'m going to Mordor alone!',
                image: 'assets/img/avatar-frodo.jpg',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'Shire Folk' },
                    { title: 'Weapon', note: 'Sting' }
                ]
            },
            {
                name: 'Samwise Gamgee',
                quote: 'What we need is a few good taters.',
                image: 'assets/img/avatar-samwise.jpg',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'Shire Folk' },
                    { title: 'Nickname', note: 'Sam' }
                ]
            }
        ];
        this.character = characters[this.params.get('charNum')];
    }
    ModalContentPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalContentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Description\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)=\"dismiss()\">\n        <span ion-text color=\"primary\" showWhen=\"ios\">Cancel</span>\n        <ion-icon name=\"md-close\" showWhen=\"android, windows\"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src=\"{{character.image}}\">\n        </ion-avatar>\n        <h2>{{character.name}}</h2>\n        <p>{{character.quote}}</p>\n      </ion-item>\n\n      <ion-item *ngFor=\"let item of character['items']\">\n        {{item.title}}\n        <ion-note item-end>\n          {{item.note}}\n        </ion-note>\n      </ion-item>\n  </ion-list>\n</ion-content>\n"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], ModalContentPage);
    return ModalContentPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NavigationDetailsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationDetailsPage = (function () {
    function NavigationDetailsPage(params) {
        this.item = params.data.item;
    }
    NavigationDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\navigation\basic\navigation-details.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{ item.title }}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-icon [name]="\'logo-\' + item.icon" [ngStyle]="{\'color\': item.color}"></ion-icon>\n  {{ item.description }}\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\navigation\basic\navigation-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], NavigationDetailsPage);
    return NavigationDetailsPage;
}());

var BasicPage = (function () {
    function BasicPage(nav) {
        this.nav = nav;
        this.items = [];
        this.items = [
            {
                'title': 'Angular',
                'icon': 'angular',
                'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
                'color': '#E63135'
            },
            {
                'title': 'CSS3',
                'icon': 'css3',
                'description': 'The latest version of cascading stylesheets - the styling language of the web!',
                'color': '#0CA9EA'
            },
            {
                'title': 'HTML5',
                'icon': 'html5',
                'description': 'The latest version of the web\'s markup language.',
                'color': '#F46529'
            },
            {
                'title': 'JavaScript',
                'icon': 'javascript',
                'description': 'One of the most popular programming languages on the Web!',
                'color': '#FFD439'
            },
            {
                'title': 'Sass',
                'icon': 'sass',
                'description': 'Syntactically Awesome Stylesheets - a mature, stable, and powerful professional grade CSS extension.',
                'color': '#CE6296'
            },
            {
                'title': 'NodeJS',
                'icon': 'nodejs',
                'description': 'An open-source, cross-platform runtime environment for developing server-side Web applications.',
                'color': '#78BD43'
            },
            {
                'title': 'Python',
                'icon': 'python',
                'description': 'A clear and powerful object-oriented programming language!',
                'color': '#3575AC'
            },
            {
                'title': 'Markdown',
                'icon': 'markdown',
                'description': 'A super simple way to add formatting like headers, bold, bulleted lists, and so on to plain text.',
                'color': '#412159'
            },
            {
                'title': 'Tux',
                'icon': 'tux',
                'description': 'The official mascot of the Linux kernel!',
                'color': '#000'
            },
        ];
    }
    BasicPage.prototype.openNavDetailsPage = function (item) {
        this.nav.push(NavigationDetailsPage, { item: item });
    };
    BasicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n<ion-header>\n  <ion-navbar>\n    <ion-title>Navigation</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor=\"let item of items\" (click)=\"openNavDetailsPage(item)\" icon-start>\n      <ion-icon [name]=\"'logo-' + item.icon\" [ngStyle]=\"{'color': item.color}\" item-start></ion-icon>\n      {{ item.title }}\n    </button>\n  </ion-list>\n</ion-content>\n"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], BasicPage);
    return BasicPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PopoverPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopoverPage = (function () {
    function PopoverPage(navParams) {
        this.navParams = navParams;
        this.colors = {
            'white': {
                'bg': 'rgb(255, 255, 255)',
                'fg': 'rgb(0, 0, 0)'
            },
            'tan': {
                'bg': 'rgb(249, 241, 228)',
                'fg': 'rgb(0, 0, 0)'
            },
            'grey': {
                'bg': 'rgb(76, 75, 80)',
                'fg': 'rgb(255, 255, 255)'
            },
            'black': {
                'bg': 'rgb(0, 0, 0)',
                'fg': 'rgb(255, 255, 255)'
            },
        };
    }
    PopoverPage.prototype.ngOnInit = function () {
        if (this.navParams.data) {
            this.contentEle = this.navParams.data.contentEle;
            this.textEle = this.navParams.data.textEle;
            this.background = this.getColorName(this.contentEle.style.backgroundColor);
            this.setFontFamily();
        }
    };
    PopoverPage.prototype.getColorName = function (background) {
        var colorName = 'white';
        if (!background)
            return 'white';
        for (var key in this.colors) {
            if (this.colors[key].bg == background) {
                colorName = key;
            }
        }
        return colorName;
    };
    PopoverPage.prototype.setFontFamily = function () {
        if (this.textEle.style.fontFamily) {
            this.fontFamily = this.textEle.style.fontFamily.replace(/'/g, "");
        }
    };
    PopoverPage.prototype.changeBackground = function (color) {
        this.background = color;
        this.contentEle.style.backgroundColor = this.colors[color].bg;
        this.textEle.style.color = this.colors[color].fg;
    };
    PopoverPage.prototype.changeFontSize = function (direction) {
        this.textEle.style.fontSize = direction;
    };
    PopoverPage.prototype.changeFontFamily = function () {
        if (this.fontFamily)
            this.textEle.style.fontFamily = this.fontFamily;
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n    <ion-list radio-group [(ngModel)]=\"fontFamily\" (ionChange)=\"changeFontFamily()\" class=\"popover-page\">\n      <ion-row>\n        <ion-col>\n          <button (click)=\"changeFontSize('smaller')\" ion-item detail-none class=\"text-button text-smaller\">A</button>\n        </ion-col>\n        <ion-col>\n          <button (click)=\"changeFontSize('larger')\" ion-item detail-none class=\"text-button text-larger\">A</button>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"row-dots\">\n        <ion-col>\n          <button ion-button=\"dot\" (click)=\"changeBackground('white')\" class=\"dot-white\" [class.selected]=\"background == 'white'\"></button>\n        </ion-col>\n        <ion-col>\n          <button ion-button=\"dot\" (click)=\"changeBackground('tan')\" class=\"dot-tan\" [class.selected]=\"background == 'tan'\"></button>\n        </ion-col>\n        <ion-col>\n          <button ion-button=\"dot\" (click)=\"changeBackground('grey')\" class=\"dot-grey\" [class.selected]=\"background == 'grey'\"></button>\n        </ion-col>\n        <ion-col>\n          <button ion-button=\"dot\" (click)=\"changeBackground('black')\" class=\"dot-black\" [class.selected]=\"background == 'black'\"></button>\n        </ion-col>\n      </ion-row>\n      <ion-item class=\"text-athelas\">\n        <ion-label>Athelas</ion-label>\n        <ion-radio value=\"Athelas\"></ion-radio>\n      </ion-item>\n      <ion-item class=\"text-charter\">\n        <ion-label>Charter</ion-label>\n        <ion-radio value=\"Charter\"></ion-radio>\n      </ion-item>\n      <ion-item class=\"text-iowan\">\n        <ion-label>Iowan</ion-label>\n        <ion-radio value=\"Iowan\"></ion-radio>\n      </ion-item>\n      <ion-item class=\"text-palatino\">\n        <ion-label>Palatino</ion-label>\n        <ion-radio value=\"Palatino\"></ion-radio>\n      </ion-item>\n      <ion-item class=\"text-san-francisco\">\n        <ion-label>San Francisco</ion-label>\n        <ion-radio value=\"San Francisco\"></ion-radio>\n      </ion-item>\n      <ion-item class=\"text-seravek\">\n        <ion-label>Seravek</ion-label>\n        <ion-radio value=\"Seravek\"></ion-radio>\n      </ion-item>\n      <ion-item class=\"text-times-new-roman\">\n        <ion-label>Times New Roman</ion-label>\n        <ion-radio value=\"Times New Roman\"></ion-radio>\n      </ion-item>\n    </ion-list>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], PopoverPage);
    return PopoverPage;
}());

var BasicPage = (function () {
    function BasicPage(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
    }
    BasicPage.prototype.presentPopover = function (ev) {
        var popover = this.popoverCtrl.create(PopoverPage, {
            contentEle: this.content.nativeElement,
            textEle: this.text.nativeElement
        });
        popover.present({
            ev: ev
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('popoverContent', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], BasicPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('popoverText', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], BasicPage.prototype, "text", void 0);
    BasicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\popovers\basic\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Popovers</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content #popoverContent padding class="popover-page">\n  <div #popoverText class="text-to-change">\n    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ipsum in purus mollis dictum eget vitae purus. Nulla ultrices est odio, a maximus velit pretium ac. Donec vel elementum mi. Proin elementum pulvinar neque, in lacinia nibh tempus auctor. Nam sapien velit, commodo ac nibh a, maximus ullamcorper nunc. Integer luctus tortor dignissim, dictum neque at, scelerisque purus. Vivamus nec erat vel magna posuere euismod. Sed ac augue eu tellus tincidunt fermentum eget sit amet nunc. Donec sit amet mi libero. Cras nunc arcu, ultrices nec sapien eu, convallis posuere libero. Pellentesque vulputate lacus eros, at lobortis lorem egestas et. Vestibulum tempus quam in efficitur lobortis. Maecenas consectetur consequat sem pharetra aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</div>\n\n    <div>Mauris ac ligula elit. Nulla pulvinar eget leo ut aliquet. Praesent sit amet luctus quam. Nam fringilla iaculis mi, ut maximus mauris molestie feugiat. Curabitur nec scelerisque elit. Nunc eu odio facilisis, tempor enim eget, venenatis sem. Sed vitae lorem vehicula, auctor orci ultrices, finibus mauris. Donec vitae pulvinar diam. Nulla luctus congue quam, sed lacinia arcu dictum a.</div>\n\n    <div>Morbi laoreet magna elit, id dapibus massa varius consequat. Praesent rhoncus nunc quam, eu mollis velit commodo ut. Etiam euismod elit mi, non auctor velit blandit ut. Aenean vitae pulvinar mi, ac pretium tellus. Morbi eu auctor sem, sollicitudin cursus felis. Praesent vestibulum velit sed eros iaculis ornare. Praesent diam diam, pellentesque eget scelerisque sed, bibendum ut risus. Sed sed fermentum sem. Integer vel justo felis. Proin eget quam est. In sit amet ipsum sagittis, convallis ipsum fringilla, interdum ante. Etiam vel tincidunt mauris. Nunc feugiat eros nunc, et vestibulum metus mollis et. Nullam eu viverra velit, id ultrices nisl. Donec non enim elementum, laoreet sapien id, feugiat tellus.</div>\n\n    <div>Sed pellentesque ipsum eget ante hendrerit maximus. Aliquam id venenatis nulla. Nullam in nibh at enim vestibulum ullamcorper. Nam felis dolor, lobortis vel est non, condimentum malesuada nisl. In metus sapien, malesuada at nulla in, pretium aliquam turpis. Quisque elementum purus mi, sed tristique turpis ultricies in. Donec feugiat dolor non ultricies ultricies. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin ut purus et diam porta cursus vitae semper mi. Donec fringilla tellus orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc vitae commodo sem. Duis vehicula quam sit amet imperdiet facilisis. Pellentesque eget dignissim neque, et scelerisque libero. Maecenas molestie metus sed orci cursus, in venenatis justo dapibus.</div>\n\n    <div>Aenean rhoncus urna at interdum blandit. Donec ac massa nec libero vehicula tincidunt. Sed sit amet hendrerit risus. Aliquam vitae vestibulum ipsum, non feugiat orci. Vivamus eu rutrum elit. Nulla dapibus tortor non dignissim pretium. Nulla in luctus turpis. Etiam non mattis tortor, at aliquet ex. Nunc ut ante varius, auctor dui vel, volutpat elit. Nunc laoreet augue sit amet ultrices porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum pellentesque lobortis est, ut tincidunt ligula mollis sit amet. In porta risus arcu, quis pellentesque dolor mattis non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</div>\n  </div>\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\popovers\basic\template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */]])
    ], BasicPage);
    return BasicPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BasicPage = (function () {
    function BasicPage() {
        this.langForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            "langs": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]({ value: 'rust', disabled: false })
        });
    }
    BasicPage.prototype.doSubmit = function (event) {
        console.log('Submitting form', this.langForm.value);
        event.preventDefault();
    };
    BasicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\radios\basic\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Radios\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <form (submit)="doSubmit($event)" [formGroup]="langForm">\n    <ion-list radio-group formControlName="langs">\n\n      <ion-list-header>\n        Language\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>Go</ion-label>\n        <ion-radio value="golang" checked="true"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Rust</ion-label>\n        <ion-radio value="rust"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Python</ion-label>\n        <ion-radio value="python"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Ruby</ion-label>\n        <ion-radio value="ruby"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Clojure</ion-label>\n        <ion-radio value="clojure"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Java</ion-label>\n        <ion-radio value="java"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>PHP</ion-label>\n        <ion-radio value="php"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>.NET</ion-label>\n        <ion-radio value="dotnet"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>C++</ion-label>\n        <ion-radio value="cplusplus"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Scala</ion-label>\n        <ion-radio value="scala"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Haskell</ion-label>\n        <ion-radio value="haskell"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Erlang</ion-label>\n        <ion-radio value="erlang"></ion-radio>\n      </ion-item>\n    </ion-list>\n  </form>\n\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\radios\basic\template.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], BasicPage);
    return BasicPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BasicPage = (function () {
    function BasicPage() {
        this.brightness = 20;
        this.contrast = 0;
        this.warmth = 1300;
        this.structure = { lower: 33, upper: 60 };
        this.text = 0;
    }
    BasicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\ranges\basic\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ranges\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="outer-content">\n  <ion-list>\n    <ion-list-header>\n      Adjust Display\n    </ion-list-header>\n    <ion-item>\n      <ion-range [(ngModel)]="brightness">\n        <ion-icon range-left small name="sunny"></ion-icon>\n        <ion-icon range-right name="sunny"></ion-icon>\n      </ion-range>\n    </ion-item>\n    <ion-item>\n      <ion-range min="-200" max="200" pin="true" [(ngModel)]="contrast" color="secondary">\n        <ion-icon range-left small name="contrast"></ion-icon>\n        <ion-icon range-right name="contrast"></ion-icon>\n      </ion-range>\n    </ion-item>\n    <ion-item>\n      <ion-range dualKnobs="true" pin="true" [(ngModel)]="structure" color="dark">\n        <ion-icon range-left small name="brush"></ion-icon>\n        <ion-icon range-right name="brush"></ion-icon>\n      </ion-range>\n    </ion-item>\n    <ion-item>\n      <ion-range min="1000" max="2000" step="100" snaps="true" [(ngModel)]="warmth" color="danger">\n        <ion-icon range-left small color="danger" name="thermometer"></ion-icon>\n        <ion-icon range-right color="danger" name="thermometer"></ion-icon>\n      </ion-range>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      Adjust Text\n    </ion-list-header>\n    <ion-item>\n      <ion-range min="-100" step="10" snaps="true" [(ngModel)]="text">\n        <ion-label range-left class="small-text">A</ion-label>\n        <ion-label range-right>A</ion-label>\n      </ion-range>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<style>\n  ion-list + ion-list {\n    margin-top: 0;\n  }\n\n  .small-text {\n    font-size: 10px;\n  }\n</style>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\ranges\basic\template.html"*/
        })
    ], BasicPage);
    return BasicPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BasicPage = (function () {
    function BasicPage() {
        this.initializeItems();
    }
    BasicPage.prototype.initializeItems = function () {
        this.items = [
            'Amsterdam',
            'Bogota',
            'Buenos Aires',
            'Cairo',
            'Dhaka',
            'Edinburgh',
            'Geneva',
            'Genoa',
            'Glasglow',
            'Hanoi',
            'Hong Kong',
            'Islamabad',
            'Istanbul',
            'Jakarta',
            'Kiel',
            'Kyoto',
            'Le Havre',
            'Lebanon',
            'Lhasa',
            'Lima',
            'London',
            'Los Angeles',
            'Madrid',
            'Manila',
            'New York',
            'Olympia',
            'Oslo',
            'Panama City',
            'Peking',
            'Philadelphia',
            'San Francisco',
            'Seoul',
            'Taipeh',
            'Tel Aviv',
            'Tokio',
            'Uelzen',
            'Washington'
        ];
    };
    BasicPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the ev target
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    BasicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\searchbars\basic\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Searchbars\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor="let item of items">\n      {{ item }}\n    </ion-item>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\searchbars\basic\template.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], BasicPage);
    return BasicPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BasicPage = (function () {
    function BasicPage(platform) {
        this.pet = "puppies";
        this.isAndroid = false;
        this.isAndroid = platform.is('android');
    }
    BasicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\segments\basic\template.html"*/`\n<ion-header>\n  <ion-navbar no-border-bottom>\n    <ion-title>\n      Segments\n    </ion-title>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="pet">\n      <ion-segment-button value="puppies">\n        Puppies\n      </ion-segment-button>\n      <ion-segment-button value="kittens">\n        Kittens\n      </ion-segment-button>\n      <ion-segment-button value="ducklings">\n        Ducklings\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div [ngSwitch]="pet">\n    <ion-list *ngSwitchCase="\'puppies\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-puppy-1.jpg">\n        </ion-thumbnail>\n        <h2>Ruby</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-puppy-2.jpg">\n        </ion-thumbnail>\n        <h2>Oscar</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-puppy-4.jpg">\n        </ion-thumbnail>\n        <h2>Zoey</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-puppy-3.jpg">\n        </ion-thumbnail>\n        <h2>Otto</h2>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'kittens\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-kitten-1.jpg">\n        </ion-thumbnail>\n        <h2>Luna</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-kitten-3.jpg">\n        </ion-thumbnail>\n        <h2>Milo</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-kitten-4.jpg">\n        </ion-thumbnail>\n        <h2>Bandit</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-kitten-2.jpg">\n        </ion-thumbnail>\n        <h2>Nala</h2>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'ducklings\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-duckling-1.jpg">\n        </ion-thumbnail>\n        <h2>Daffy</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-duckling-2.jpg">\n        </ion-thumbnail>\n        <h2>Huey</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-duckling-3.jpg">\n        </ion-thumbnail>\n        <h2>Dewey</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-duckling-4.jpg">\n        </ion-thumbnail>\n        <h2>Louie</h2>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\segments\basic\template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], BasicPage);
    return BasicPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BasicPage = (function () {
    function BasicPage() {
        this.gaming = "n64";
        this.gender = "f";
        this.musicAlertOpts = {
            title: '1994 Music',
            subTitle: 'Select your favorite'
        };
    }
    BasicPage.prototype.stpSelect = function () {
        console.log('STP selected');
    };
    BasicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\selects\basic\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Selects\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label>Gender</ion-label>\n      <ion-select [(ngModel)]="gender">\n        <ion-option value="f">Female</ion-option>\n        <ion-option value="m">Male</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Gaming</ion-label>\n      <ion-select [(ngModel)]="gaming" interface="popover">\n        <ion-option value="nes">NES</ion-option>\n        <ion-option value="n64">Nintendo64</ion-option>\n        <ion-option value="ps">PlayStation</ion-option>\n        <ion-option value="genesis">Sega Genesis</ion-option>\n        <ion-option value="saturn">Sega Saturn</ion-option>\n        <ion-option value="snes">SNES</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Notifications</ion-label>\n      <ion-select [(ngModel)]="notifications" interface="action-sheet">\n        <ion-option value="enable">Enable</ion-option>\n        <ion-option value="mute">Mute</ion-option>\n        <ion-option value="mute_week">Mute for a week</ion-option>\n        <ion-option value="mute_year" (ionSelect)="notificationSelect($event)">Mute for a year</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Operating System</ion-label>\n      <ion-select [(ngModel)]="os" submitText="Okay" cancelText="Nah">\n        <ion-option value="dos">DOS</ion-option>\n        <ion-option value="lunix">Linux</ion-option>\n        <ion-option value="mac7">Mac OS 7</ion-option>\n        <ion-option value="mac8">Mac OS 8</ion-option>\n        <ion-option value="win3.1">Windows 3.1</ion-option>\n        <ion-option value="win95">Windows 95</ion-option>\n        <ion-option value="win98">Windows 98</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Music</ion-label>\n      <ion-select [(ngModel)]="music" [selectOptions]="musicAlertOpts">\n        <ion-option>Alice in Chains</ion-option>\n        <ion-option>Green Day</ion-option>\n        <ion-option>Nirvana</ion-option>\n        <ion-option>Pearl Jam</ion-option>\n        <ion-option>Smashing Pumpkins</ion-option>\n        <ion-option>Soundgarden</ion-option>\n        <ion-option (select)="stpSelect()">Stone Temple Pilots</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Date</ion-label>\n      <ion-select [(ngModel)]="month">\n        <ion-option value="01">January</ion-option>\n        <ion-option value="02">February</ion-option>\n        <ion-option value="03">March</ion-option>\n        <ion-option value="04">April</ion-option>\n        <ion-option value="05">May</ion-option>\n        <ion-option value="06">June</ion-option>\n        <ion-option value="07">July</ion-option>\n        <ion-option value="08">August</ion-option>\n        <ion-option value="09">September</ion-option>\n        <ion-option value="10">October</ion-option>\n        <ion-option value="11">November</ion-option>\n        <ion-option value="12" checked="true">December</ion-option>\n      </ion-select>\n      <ion-select [(ngModel)]="year">\n        <ion-option>1989</ion-option>\n        <ion-option>1990</ion-option>\n        <ion-option>1991</ion-option>\n        <ion-option>1992</ion-option>\n        <ion-option>1993</ion-option>\n        <ion-option checked="true">1994</ion-option>\n        <ion-option>1995</ion-option>\n        <ion-option>1996</ion-option>\n        <ion-option>1997</ion-option>\n        <ion-option>1998</ion-option>\n        <ion-option>1999</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\selects\basic\template.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], BasicPage);
    return BasicPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BasicPage = (function () {
    function BasicPage() {
        this.slides = [
            {
                title: "Welcome to the Docs!",
                description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
                image: "assets/img/ica-slidebox-img-1.png",
            },
            {
                title: "What is Ionic?",
                description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
                image: "assets/img/ica-slidebox-img-2.png",
            },
            {
                title: "What is Ionic Cloud?",
                description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
                image: "assets/img/ica-slidebox-img-3.png",
            }
        ];
    }
    BasicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\slides\basic\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Slides</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="tutorial-page">\n\n  <ion-slides pager>\n    <ion-slide *ngFor="let slide of slides">\n      <ion-toolbar>\n      </ion-toolbar>\n      <img [src]="slide.image" class="slide-image"/>\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n      <p [innerHTML]="slide.description"></p>\n      <p>\n      \n        <button ion-button color="danger" icon-start>\n        <ion-icon name="logo-googleplus" role="img" \n          class="icon icon-md ion-logo-googleplus" aria-label="logo googleplus"\n          ng-reflect-name="logo-googleplus"></ion-icon>\n          google\n        </button>\n        <button ion-button icon-start>\n          <!-- <ion-icon name=\'home\'></ion-icon>  -->\n          <ion-icon name="logo-facebook" role="img" \n           class="icon icon-md ion-logo-facebook" \n           aria-label="logo facebook" \n           ng-reflect-name="logo-facebook"></ion-icon>\n          facebook\n        </button>\n      \n      </p>\n    </ion-slide>\n    <ion-slide>\n      <ion-toolbar>\n      </ion-toolbar>\n      <img src="assets/img/ica-slidebox-img-4.png" class="slide-image"/>\n      <h2 class="slide-title">Ready to Play?</h2>\n      <button ion-button large clear icon-end color="primary">\n        Continue\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n\n      <p>\n\n        <button ion-button color="danger" icon-start>\n          <ion-icon name="logo-googleplus" role="img" class="icon icon-md ion-logo-googleplus" aria-label="logo googleplus"\n            ng-reflect-name="logo-googleplus"></ion-icon>\n          google\n        </button>\n        <button ion-button icon-start>\n          <ion-icon name="logo-facebook" role="img" class="icon icon-md ion-logo-facebook" aria-label="logo facebook"\n            ng-reflect-name="logo-facebook"></ion-icon>\n          facebook\n        </button>\n      \n      </p>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\slides\basic\template.html"*/
        })
    ], BasicPage);
    return BasicPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TabBadgesContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BadgesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TabBadgesContent = (function () {
    function TabBadgesContent() {
    }
    TabBadgesContent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n    <ion-header>\n      <ion-navbar>\n        <ion-title>Tabs</ion-title>\n      </ion-navbar>\n    </ion-header>\n\n    <ion-content>\n    </ion-content>\n"
        })
    ], TabBadgesContent);
    return TabBadgesContent;
}());

var BadgesPage = (function () {
    function BadgesPage() {
        this.rootPage = TabBadgesContent;
    }
    BadgesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n    <ion-tabs>\n      <ion-tab tabIcon=\"call\" [root]=\"rootPage\" tabBadge=\"3\" tabBadgeStyle=\"danger\"></ion-tab>\n      <ion-tab tabIcon=\"chatbubbles\" [root]=\"rootPage\" tabBadge=\"14\" tabBadgeStyle=\"danger\"></ion-tab>\n      <ion-tab tabIcon=\"musical-notes\" [root]=\"rootPage\"></ion-tab>\n    </ion-tabs>\n"
        })
    ], BadgesPage);
    return BadgesPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TabBasicContentPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabBasicContentPage = (function () {
    function TabBasicContentPage(platform) {
        this.isAndroid = false;
        this.isAndroid = platform.is('android');
    }
    TabBasicContentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n    <ion-header>\n      <ion-navbar>\n        <ion-title>Tabs</ion-title>\n      </ion-navbar>\n    </ion-header>\n\n    <ion-content>\n    </ion-content>\n"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], TabBasicContentPage);
    return TabBasicContentPage;
}());

var BasicPage = (function () {
    function BasicPage() {
        this.rootPage = TabBasicContentPage;
    }
    BasicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n    <ion-tabs class=\"tabs-basic\">\n      <ion-tab tabTitle=\"Music\" [root]=\"rootPage\"></ion-tab>\n      <ion-tab tabTitle=\"Movies\" [root]=\"rootPage\"></ion-tab>\n      <ion-tab tabTitle=\"Games\" [root]=\"rootPage\"></ion-tab>\n    </ion-tabs>\n"
        })
    ], BasicPage);
    return BasicPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TabIconContentPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabIconContentPage = (function () {
    function TabIconContentPage(platform) {
        this.isAndroid = false;
        this.isAndroid = platform.is('android');
    }
    TabIconContentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n    <ion-header>\n      <ion-navbar [color]=\"isAndroid ? 'danger' : 'primary'\">\n        <ion-title>Tabs</ion-title>\n      </ion-navbar>\n    </ion-header>\n\n    <ion-content>\n    </ion-content>\n"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], TabIconContentPage);
    return TabIconContentPage;
}());

var IconPage = (function () {
    function IconPage(platform) {
        this.rootPage = TabIconContentPage;
        this.isAndroid = false;
        this.isAndroid = platform.is('android');
    }
    IconPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n  <ion-tabs class=\"tabs-icon\" [color]=\"isAndroid ? 'danger' : 'primary'\">\n    <ion-tab tabIcon=\"contact\" [root]=\"rootPage\"></ion-tab>\n    <ion-tab tabIcon=\"compass\" [root]=\"rootPage\"></ion-tab>\n    <ion-tab tabIcon=\"analytics\" [root]=\"rootPage\"></ion-tab>\n    <ion-tab tabIcon=\"settings\" [root]=\"rootPage\"></ion-tab>\n  </ion-tabs>\n"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], IconPage);
    return IconPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TabIconTextContentPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconTextPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabIconTextContentPage = (function () {
    function TabIconTextContentPage(platform) {
        this.isAndroid = false;
        this.isAndroid = platform.is('android');
    }
    TabIconTextContentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n    <ion-header>\n      <ion-navbar [color]=\"isAndroid ? 'royal' : 'primary'\">\n        <ion-title>Tabs</ion-title>\n      </ion-navbar>\n    </ion-header>\n\n    <ion-content>\n    </ion-content>\n"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], TabIconTextContentPage);
    return TabIconTextContentPage;
}());

var IconTextPage = (function () {
    function IconTextPage(platform) {
        this.rootPage = TabIconTextContentPage;
        this.isAndroid = false;
        this.isAndroid = platform.is('android');
    }
    IconTextPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n    <ion-tabs class=\"tabs-icon-text\" [color]=\"isAndroid ? 'royal' : 'primary'\">\n      <ion-tab tabIcon=\"water\" tabTitle=\"Water\" [root]=\"rootPage\"></ion-tab>\n      <ion-tab tabIcon=\"leaf\" tabTitle=\"Life\" [root]=\"rootPage\"></ion-tab>\n      <ion-tab tabIcon=\"flame\" tabTitle=\"Fire\" [root]=\"rootPage\"></ion-tab>\n      <ion-tab tabIcon=\"magnet\" tabTitle=\"Force\" [root]=\"rootPage\"></ion-tab>\n    </ion-tabs>\n"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], IconTextPage);
    return IconTextPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BasicPage = (function () {
    function BasicPage(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    BasicPage.prototype.showToast = function (position) {
        var toast = this.toastCtrl.create({
            message: 'Mmmm, buttered toast',
            duration: 2000,
            position: position
        });
        toast.present(toast);
    };
    BasicPage.prototype.showToastWithCloseButton = function () {
        var toast = this.toastCtrl.create({
            message: 'Your files were successfully saved',
            showCloseButton: true,
            closeButtonText: 'Ok'
        });
        toast.present();
    };
    BasicPage.prototype.showLongToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptatibus quibusdam eum nihil optio, ullam accusamus magni, nobis suscipit reprehenderit, sequi quam amet impedit. Accusamus dolorem voluptates laborum dolor obcaecati.',
            duration: 2000,
        });
        toast.present();
    };
    BasicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\toast\basic\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Toast\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button block (click)="showToast(\'top\')">Show Toast Top Position</button>\n  <button ion-button block (click)="showToast(\'middle\')">Show Toast Middle Position</button>\n  <button ion-button block (click)="showToast(\'bottom\')">Show Toast Bottom Position</button>\n  <button ion-button block (click)="showLongToast()">Show Long Toast</button>\n  <button ion-button block (click)="showToastWithCloseButton()">Show Toast W/ Close Button</button>\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\toast\basic\template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], BasicPage);
    return BasicPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BasicPage = (function () {
    function BasicPage() {
    }
    BasicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\toggles\basic\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Toggles\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-list-header>\n      Characters\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label>Frodo Baggins</ion-label>\n      <ion-toggle value="foo" checked="true"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Sam</ion-label>\n      <ion-toggle color="energized"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Éowyn</ion-label>\n      <ion-toggle color="danger" checked="true"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Legolas</ion-label>\n      <ion-toggle color="royal" checked="true"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Gimli</ion-label>\n      <ion-toggle color="danger"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Saruman</ion-label>\n      <ion-toggle color="dark" checked="true"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Gandalf</ion-label>\n      <ion-toggle color="energized" checked="true"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Arwen</ion-label>\n      <ion-toggle color="royal"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Treebeard</ion-label>\n      <ion-toggle color="secondary" checked="true"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Boromir</ion-label>\n      <ion-toggle color="royal"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Gollum</ion-label>\n      <ion-toggle color="dark" checked="true"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Galadriel</ion-label>\n      <ion-toggle color="energized"></ion-toggle>\n    </ion-item>\n\n\n  </ion-list>\n\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\toggles\basic\template.html"*/
        })
    ], BasicPage);
    return BasicPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 252 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BasicPage = (function () {
    function BasicPage() {
    }
    BasicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\toolbar\basic\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Toolbar</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content></ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title>Footer Toolbar</ion-title>\n  </ion-toolbar>\n</ion-footer>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\toolbar\basic\template.html"*/
        })
    ], BasicPage);
    return BasicPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 253 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ButtonsPage = (function () {
    function ButtonsPage(platform) {
        this.isAndroid = false;
        this.isAndroid = platform.is('android');
    }
    ButtonsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\toolbar\buttons\template.html"*/`\n<ion-header>\n  <ion-navbar [color]="isAndroid ? \'royal\' : \'light\'">\n    <ion-buttons start>\n      <button ion-button color="royal" icon-only showWhen="ios,windows">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button ion-button color="light" icon-only hideWhen="ios,windows">\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Send To...</ion-title>\n    <ion-buttons end>\n      <button ion-button color="royal" icon-only showWhen="ios,windows">\n        <ion-icon name="person-add"></ion-icon>\n      </button>\n      <button ion-button color="light" icon-only hideWhen="ios,windows">\n        <ion-icon name="person-add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar [color]="isAndroid ? \'royal\' : \'light\'" class="toolbar-buttons-page">\n    <ion-title class="footer-title">Ash, Misty, Brock</ion-title>\n    <ion-buttons end>\n      <button ion-button color="royal" large icon-end showWhen="ios">\n        Send\n        <ion-icon name="send"></ion-icon>\n      </button>\n      <button ion-button color="light" large icon-end hideWhen="ios">\n        Send\n        <ion-icon name="send"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\toolbar\buttons\template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], ButtonsPage);
    return ButtonsPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 254 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchbarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchbarPage = (function () {
    function SearchbarPage() {
        this.initializeItems();
    }
    SearchbarPage.prototype.initializeItems = function () {
        this.items = [
            'Angular 1.x',
            'Angular 2',
            'ReactJS',
            'EmberJS',
            'Meteor',
            'Typescript',
            'Dart',
            'CoffeeScript'
        ];
    };
    SearchbarPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the ev target
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    SearchbarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\toolbar\searchbar\template.html"*/`\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let item of items">\n      {{ item }}\n    </ion-item>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\toolbar\searchbar\template.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SearchbarPage);
    return SearchbarPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 255 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SegmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SegmentPage = (function () {
    function SegmentPage(platform) {
        this.isAndroid = false;
        this.selectedSegment = 'hot';
        this.isAndroid = platform.is('android');
    }
    SegmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\toolbar\segment\template.html"*/`\n<ion-header>\n  <ion-navbar [color]="isAndroid ? \'danger\' : \'\'">\n    <ion-buttons start>\n      <button ion-button color="danger" icon-only showWhen="ios">\n        <ion-icon name="create"></ion-icon>\n      </button>\n      <button ion-button icon-only hideWhen="ios">\n        <ion-icon name="create"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-segment [(ngModel)]="selectedSegment" [color]="isAndroid ? \'light\' : \'danger\'">\n      <ion-segment-button value="new" checked>\n        New\n      </ion-segment-button>\n      <ion-segment-button value="hot">\n        Hot\n      </ion-segment-button>\n    </ion-segment>\n    <ion-buttons end>\n      <button ion-button color="danger" icon-only showWhen="ios">\n        <ion-icon name="more"></ion-icon>\n      </button>\n      <button ion-button icon-only hideWhen="ios">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content></ion-content>\n\n<ion-footer>\n  <ion-toolbar [color]="isAndroid ? \'danger\' : \'light\'">\n    <ion-title>Karma Score: 2317</ion-title>\n  </ion-toolbar>\n</ion-footer>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\toolbar\segment\template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], SegmentPage);
    return SegmentPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 256 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(281);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_action_sheets_basic_pages__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_alerts_basic_pages__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_alerts_checkbox_pages__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_alerts_confirm_pages__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_alerts_prompt_pages__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_alerts_radio_pages__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_badges_basic_pages__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_buttons_basic_pages__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_buttons_block_pages__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_buttons_clear_pages__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_buttons_components_pages__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_buttons_full_pages__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_buttons_icons_pages__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_buttons_outline_pages__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_buttons_round_pages__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_buttons_sizes_pages__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_fabs_basic_pages__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_cards_advanced_map_pages__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_cards_advanced_social_pages__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_cards_advanced_weather_pages__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_cards_background_pages__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_cards_basic_pages__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_cards_header_pages__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_cards_image_pages__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_cards_list_pages__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_checkboxes_basic_pages__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_datetime_basic_pages__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_gestures_basic_pages__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_grid_basic_pages__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_icons_basic_pages__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_inputs_basic_pages__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_inputs_floating_pages__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_inputs_fixed_inline_pages__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_inputs_inline_pages__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_inputs_inset_pages__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_inputs_placeholder_pages__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_inputs_stacked_pages__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_lists_avatar_pages__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_lists_basic_pages__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_lists_dividers_pages__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_lists_headers_pages__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_lists_icon_pages__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_lists_inset_pages__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_lists_multiline_pages__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_lists_no_lines_pages__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_lists_sliding_pages__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_lists_thumbnail_pages__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_loading_basic_pages__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_menus_basic_pages__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_modals_basic_pages__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_navigation_basic_pages__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_popovers_basic_pages__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_radios_basic_pages__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_ranges_basic_pages__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_searchbars_basic_pages__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_segments_basic_pages__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_selects_basic_pages__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_slides_basic_pages__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pages_tabs_badges_pages__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_tabs_basic_pages__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__pages_tabs_icon_pages__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_tabs_icon_text_pages__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_toast_basic_pages__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__pages_toggles_basic_pages__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__pages_toolbar_basic_pages__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__pages_toolbar_buttons_pages__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__pages_toolbar_colors_pages__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__pages_toolbar_searchbar_pages__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__pages_toolbar_segment_pages__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__pipes_display_route__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// action sheets

// alerts





// badges

// buttons









// fabs

// cards








// checkboxes

// datetime

// gestures

// grid

// icons

// inputs







// lists










// loading

// menu




// modals

// navigation

// popover

// radios

// ranges

// searchbar

// segments

// selects

// slides

// tabs




// toast

// toggles

// toolbars








// pipes

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_action_sheets_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_alerts_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_alerts_checkbox_pages__["a" /* CheckboxPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_alerts_confirm_pages__["a" /* ConfirmPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_alerts_prompt_pages__["a" /* PromptPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_alerts_radio_pages__["a" /* RadioPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_badges_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_buttons_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_buttons_block_pages__["a" /* BlockPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_buttons_clear_pages__["a" /* ClearPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_buttons_components_pages__["a" /* ComponentsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_buttons_full_pages__["a" /* FullPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_buttons_icons_pages__["a" /* IconsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_buttons_outline_pages__["a" /* OutlinePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_buttons_round_pages__["a" /* RoundPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_buttons_sizes_pages__["a" /* SizesPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_fabs_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_cards_advanced_map_pages__["a" /* AdvancedMapPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_cards_advanced_social_pages__["a" /* AdvancedSocialPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_cards_advanced_weather_pages__["a" /* AdvancedWeatherPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_cards_background_pages__["a" /* BackgroundPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_cards_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_cards_header_pages__["a" /* HeaderPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_cards_image_pages__["a" /* ImagePage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_cards_list_pages__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_checkboxes_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_datetime_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_gestures_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_grid_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_icons_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_inputs_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_inputs_floating_pages__["a" /* FloatingPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_inputs_fixed_inline_pages__["a" /* FixedInlinePage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_inputs_inline_pages__["a" /* InlinePage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_inputs_inset_pages__["a" /* InsetPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_inputs_placeholder_pages__["a" /* PlaceholderPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_inputs_stacked_pages__["a" /* StackedPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_lists_avatar_pages__["a" /* AvatarPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_lists_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_lists_dividers_pages__["a" /* DividersPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_lists_headers_pages__["a" /* HeadersPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_lists_icon_pages__["a" /* IconPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_lists_inset_pages__["a" /* InsetPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_lists_multiline_pages__["a" /* MultilinePage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_lists_no_lines_pages__["a" /* NoLinesPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_lists_sliding_pages__["a" /* SlidingPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_lists_thumbnail_pages__["a" /* ThumbnailPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_loading_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_menus_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_menus_basic_pages__["b" /* PageOne */],
                __WEBPACK_IMPORTED_MODULE_52__pages_menus_basic_pages__["d" /* PageTwo */],
                __WEBPACK_IMPORTED_MODULE_52__pages_menus_basic_pages__["c" /* PageThree */],
                __WEBPACK_IMPORTED_MODULE_53__pages_modals_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_53__pages_modals_basic_pages__["b" /* ModalContentPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_navigation_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_navigation_basic_pages__["b" /* NavigationDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_popovers_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_popovers_basic_pages__["b" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_radios_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_57__pages_ranges_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_58__pages_searchbars_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_59__pages_segments_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_60__pages_selects_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_61__pages_slides_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_62__pages_tabs_badges_pages__["a" /* BadgesPage */],
                __WEBPACK_IMPORTED_MODULE_62__pages_tabs_badges_pages__["b" /* TabBadgesContent */],
                __WEBPACK_IMPORTED_MODULE_63__pages_tabs_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_63__pages_tabs_basic_pages__["b" /* TabBasicContentPage */],
                __WEBPACK_IMPORTED_MODULE_64__pages_tabs_icon_pages__["a" /* IconPage */],
                __WEBPACK_IMPORTED_MODULE_64__pages_tabs_icon_pages__["b" /* TabIconContentPage */],
                __WEBPACK_IMPORTED_MODULE_65__pages_tabs_icon_text_pages__["a" /* IconTextPage */],
                __WEBPACK_IMPORTED_MODULE_65__pages_tabs_icon_text_pages__["b" /* TabIconTextContentPage */],
                __WEBPACK_IMPORTED_MODULE_66__pages_toast_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_67__pages_toggles_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_68__pages_toolbar_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_69__pages_toolbar_buttons_pages__["a" /* ButtonsPage */],
                __WEBPACK_IMPORTED_MODULE_70__pages_toolbar_colors_pages__["a" /* ColorsPage */],
                __WEBPACK_IMPORTED_MODULE_70__pages_toolbar_colors_pages__["b" /* Page2 */],
                __WEBPACK_IMPORTED_MODULE_70__pages_toolbar_colors_pages__["c" /* Page3 */],
                __WEBPACK_IMPORTED_MODULE_70__pages_toolbar_colors_pages__["d" /* Page4 */],
                __WEBPACK_IMPORTED_MODULE_71__pages_toolbar_searchbar_pages__["a" /* SearchbarPage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_toolbar_segment_pages__["a" /* SegmentPage */],
                __WEBPACK_IMPORTED_MODULE_73__pipes_display_route__["a" /* DisplayRoutePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    statusbarPadding: true,
                }, {
                    links: [
                        { component: __WEBPACK_IMPORTED_MODULE_4__pages_action_sheets_basic_pages__["a" /* BasicPage */], name: 'ActionSheetBasicPage', segment: 'action-sheet-basic' },
                        { component: __WEBPACK_IMPORTED_MODULE_5__pages_alerts_basic_pages__["a" /* BasicPage */], name: 'AlertBasicPage', segment: 'alert-basic' },
                        { component: __WEBPACK_IMPORTED_MODULE_6__pages_alerts_checkbox_pages__["a" /* CheckboxPage */], name: 'AlertCheckboxPage', segment: 'alert-checkbox' },
                        { component: __WEBPACK_IMPORTED_MODULE_7__pages_alerts_confirm_pages__["a" /* ConfirmPage */], name: 'AlertConfirmPage', segment: 'alert-confirm' },
                        { component: __WEBPACK_IMPORTED_MODULE_8__pages_alerts_prompt_pages__["a" /* PromptPage */], name: 'AlertPromptPage', segment: 'alert-prompt' },
                        { component: __WEBPACK_IMPORTED_MODULE_9__pages_alerts_radio_pages__["a" /* RadioPage */], name: 'AlertRadioPage', segment: 'alert-radio' },
                        { component: __WEBPACK_IMPORTED_MODULE_10__pages_badges_basic_pages__["a" /* BasicPage */], name: 'BadgeBasicPage', segment: 'badge-basic' },
                        { component: __WEBPACK_IMPORTED_MODULE_11__pages_buttons_basic_pages__["a" /* BasicPage */], name: 'ButtonBasicPage', segment: 'button-basic' },
                        { component: __WEBPACK_IMPORTED_MODULE_12__pages_buttons_block_pages__["a" /* BlockPage */], name: 'ButtonBlockPage', segment: 'button-block' },
                        { component: __WEBPACK_IMPORTED_MODULE_13__pages_buttons_clear_pages__["a" /* ClearPage */], name: 'ButtonClearPage', segment: 'button-clear' },
                        { component: __WEBPACK_IMPORTED_MODULE_14__pages_buttons_components_pages__["a" /* ComponentsPage */], name: 'ButtonComponentsPage', segment: 'button-components' },
                        { component: __WEBPACK_IMPORTED_MODULE_15__pages_buttons_full_pages__["a" /* FullPage */], name: 'ButtonFullPage', segment: 'button-full' },
                        { component: __WEBPACK_IMPORTED_MODULE_16__pages_buttons_icons_pages__["a" /* IconsPage */], name: 'ButtonIconsPage', segment: 'button-icons' },
                        { component: __WEBPACK_IMPORTED_MODULE_17__pages_buttons_outline_pages__["a" /* OutlinePage */], name: 'ButtonOutlinePage', segment: 'button-outline' },
                        { component: __WEBPACK_IMPORTED_MODULE_18__pages_buttons_round_pages__["a" /* RoundPage */], name: 'ButtonRoundPage', segment: 'button-round' },
                        { component: __WEBPACK_IMPORTED_MODULE_19__pages_buttons_sizes_pages__["a" /* SizesPage */], name: 'ButtonSizesPage', segment: 'button-sizes' },
                        { component: __WEBPACK_IMPORTED_MODULE_20__pages_fabs_basic_pages__["a" /* BasicPage */], name: 'FabBasicPage', segment: 'fab-basic' },
                        { component: __WEBPACK_IMPORTED_MODULE_21__pages_cards_advanced_map_pages__["a" /* AdvancedMapPage */], name: 'CardAdvancedMapPage', segment: 'card-advanced-map' },
                        { component: __WEBPACK_IMPORTED_MODULE_22__pages_cards_advanced_social_pages__["a" /* AdvancedSocialPage */], name: 'CardAdvancedSocialPage', segment: 'card-advanced-social' },
                        { component: __WEBPACK_IMPORTED_MODULE_23__pages_cards_advanced_weather_pages__["a" /* AdvancedWeatherPage */], name: 'CardAdvancedWeatherPage', segment: 'card-advanced-weather' },
                        { component: __WEBPACK_IMPORTED_MODULE_24__pages_cards_background_pages__["a" /* BackgroundPage */], name: 'CardBackgroundPage', segment: 'card-background' },
                        { component: __WEBPACK_IMPORTED_MODULE_25__pages_cards_basic_pages__["a" /* BasicPage */], name: 'CardBasicPage', segment: 'card-basic' },
                        { component: __WEBPACK_IMPORTED_MODULE_26__pages_cards_header_pages__["a" /* HeaderPage */], name: 'CardHeaderPage', segment: 'card-header' },
                        { component: __WEBPACK_IMPORTED_MODULE_27__pages_cards_image_pages__["a" /* ImagePage */], name: 'CardImagePage', segment: 'card-image' },
                        { component: __WEBPACK_IMPORTED_MODULE_28__pages_cards_list_pages__["a" /* ListPage */], name: 'CardListPage', segment: 'card-list' },
                        { component: __WEBPACK_IMPORTED_MODULE_29__pages_checkboxes_basic_pages__["a" /* BasicPage */], name: 'CheckboxBasicPage', segment: 'checkbox-basic' },
                        { component: __WEBPACK_IMPORTED_MODULE_30__pages_datetime_basic_pages__["a" /* BasicPage */], name: 'DatetimeBasicPage', segment: 'datetime-basic' },
                        { component: __WEBPACK_IMPORTED_MODULE_31__pages_gestures_basic_pages__["a" /* BasicPage */], name: 'GestureBasicPage', segment: 'gesture-basic' },
                        { component: __WEBPACK_IMPORTED_MODULE_32__pages_grid_basic_pages__["a" /* BasicPage */], name: 'GridBasicPage', segment: 'grid-basic' },
                        { component: __WEBPACK_IMPORTED_MODULE_33__pages_icons_basic_pages__["a" /* BasicPage */], name: 'IconBasicPage', segment: 'icon-basic' },
                        { component: __WEBPACK_IMPORTED_MODULE_34__pages_inputs_basic_pages__["a" /* BasicPage */], name: 'InputBasicPage', segment: 'input-basic' },
                        { component: __WEBPACK_IMPORTED_MODULE_35__pages_inputs_floating_pages__["a" /* FloatingPage */], name: 'InputFloatingPage', segment: 'input-floating' },
                        { component: __WEBPACK_IMPORTED_MODULE_36__pages_inputs_fixed_inline_pages__["a" /* FixedInlinePage */], name: 'InputFixedInlinePage', segment: 'input-fixed-inline' },
                        { component: __WEBPACK_IMPORTED_MODULE_37__pages_inputs_inline_pages__["a" /* InlinePage */], name: 'InputInlinePage', segment: 'input-inline' },
                        { component: __WEBPACK_IMPORTED_MODULE_38__pages_inputs_inset_pages__["a" /* InsetPage */], name: 'InputInsetPage', segment: 'input-inset' },
                        { component: __WEBPACK_IMPORTED_MODULE_39__pages_inputs_placeholder_pages__["a" /* PlaceholderPage */], name: 'InputPlaceholderPage', segment: 'input-placeholder' },
                        { component: __WEBPACK_IMPORTED_MODULE_40__pages_inputs_stacked_pages__["a" /* StackedPage */], name: 'InputStackedPage', segment: 'input-stacked' },
                        { component: __WEBPACK_IMPORTED_MODULE_41__pages_lists_avatar_pages__["a" /* AvatarPage */], name: 'ListAvatarPage', segment: 'list-avatar' },
                        { component: __WEBPACK_IMPORTED_MODULE_42__pages_lists_basic_pages__["a" /* BasicPage */], name: 'ListBasicPage', segment: 'list-basic' },
                        { component: __WEBPACK_IMPORTED_MODULE_43__pages_lists_dividers_pages__["a" /* DividersPage */], name: 'ListDividersPage', segment: 'list-dividers' },
                        { component: __WEBPACK_IMPORTED_MODULE_44__pages_lists_headers_pages__["a" /* HeadersPage */], name: 'ListHeadersPage', segment: 'list-headers' },
                        { component: __WEBPACK_IMPORTED_MODULE_45__pages_lists_icon_pages__["a" /* IconPage */], name: 'ListIconPage', segment: 'list-icon' },
                        { component: __WEBPACK_IMPORTED_MODULE_46__pages_lists_inset_pages__["a" /* InsetPage */], name: 'ListInsetPage', segment: 'list-inset' },
                        { component: __WEBPACK_IMPORTED_MODULE_47__pages_lists_multiline_pages__["a" /* MultilinePage */], name: 'ListMultilinePage', segment: 'list-multiline' },
                        { component: __WEBPACK_IMPORTED_MODULE_48__pages_lists_no_lines_pages__["a" /* NoLinesPage */], name: 'ListNoLinesPage', segment: 'list-no-lines' },
                        { component: __WEBPACK_IMPORTED_MODULE_49__pages_lists_sliding_pages__["a" /* SlidingPage */], name: 'ListSlidingPage', segment: 'list-sliding' },
                        { component: __WEBPACK_IMPORTED_MODULE_50__pages_lists_thumbnail_pages__["a" /* ThumbnailPage */], name: 'ListThumbnailPage', segment: 'list-thumbnail' },
                        { component: __WEBPACK_IMPORTED_MODULE_51__pages_loading_basic_pages__["a" /* BasicPage */], name: 'LoadingBasicPage', segment: 'loading-basic' },
                        { component: __WEBPACK_IMPORTED_MODULE_52__pages_menus_basic_pages__["a" /* BasicPage */], name: 'MenuBasicPage', segment: 'menu-basic' },
                        { component: __WEBPACK_IMPORTED_MODULE_52__pages_menus_basic_pages__["b" /* PageOne */], name: 'MenuPageOne', segment: 'menu-one' },
                        { component: __WEBPACK_IMPORTED_MODULE_52__pages_menus_basic_pages__["d" /* PageTwo */], name: 'MenuPageTwo', segment: 'menu-two' },
                        { component: __WEBPACK_IMPORTED_MODULE_52__pages_menus_basic_pages__["c" /* PageThree */], name: 'MenuPageThree', segment: 'menu-three' },
                        { component: __WEBPACK_IMPORTED_MODULE_53__pages_modals_basic_pages__["a" /* BasicPage */], name: 'ModalBasicPage', segment: 'modal-basic' },
                        { component: __WEBPACK_IMPORTED_MODULE_53__pages_modals_basic_pages__["b" /* ModalContentPage */], name: 'ModalContentPage', segment: 'modal-content' },
                        { component: __WEBPACK_IMPORTED_MODULE_54__pages_navigation_basic_pages__["a" /* BasicPage */], name: 'NavigationBasicPage', segment: 'navigation-basic' },
                        { component: __WEBPACK_IMPORTED_MODULE_54__pages_navigation_basic_pages__["b" /* NavigationDetailsPage */], name: 'NavigationDetailsPage', segment: 'navigation-details' },
                        { component: __WEBPACK_IMPORTED_MODULE_55__pages_popovers_basic_pages__["a" /* BasicPage */], name: 'PopoverBasicPage', segment: 'popover-basic' },
                        { component: __WEBPACK_IMPORTED_MODULE_55__pages_popovers_basic_pages__["b" /* PopoverPage */], name: 'PopoverContentPage', segment: 'popover-content' },
                        { component: __WEBPACK_IMPORTED_MODULE_56__pages_radios_basic_pages__["a" /* BasicPage */], name: 'RadioBasicPage', segment: 'radio-basic' },
                        { component: __WEBPACK_IMPORTED_MODULE_57__pages_ranges_basic_pages__["a" /* BasicPage */], name: 'RangeBasicPage', segment: 'range-basic' },
                        { component: __WEBPACK_IMPORTED_MODULE_58__pages_searchbars_basic_pages__["a" /* BasicPage */], name: 'SearchbarBasicPage', segment: 'searchbar-basic' },
                        { component: __WEBPACK_IMPORTED_MODULE_59__pages_segments_basic_pages__["a" /* BasicPage */], name: 'SegmentBasicPage', segment: 'segment-basic' },
                        { component: __WEBPACK_IMPORTED_MODULE_60__pages_selects_basic_pages__["a" /* BasicPage */], name: 'SelectBasicPage', segment: 'select-basic' },
                        { component: __WEBPACK_IMPORTED_MODULE_61__pages_slides_basic_pages__["a" /* BasicPage */], name: 'SlideBasicPage', segment: 'slide-basic' },
                        { component: __WEBPACK_IMPORTED_MODULE_62__pages_tabs_badges_pages__["a" /* BadgesPage */], name: 'TabBadgesPage', segment: 'tab-badges' },
                        { component: __WEBPACK_IMPORTED_MODULE_63__pages_tabs_basic_pages__["a" /* BasicPage */], name: 'TabBasicPage', segment: 'tab-basic' },
                        { component: __WEBPACK_IMPORTED_MODULE_64__pages_tabs_icon_pages__["a" /* IconPage */], name: 'TabIconPage', segment: 'tab-icon' },
                        { component: __WEBPACK_IMPORTED_MODULE_65__pages_tabs_icon_text_pages__["a" /* IconTextPage */], name: 'TabIconTextPage', segment: 'tab-icon-text' },
                        { component: __WEBPACK_IMPORTED_MODULE_66__pages_toast_basic_pages__["a" /* BasicPage */], name: 'ToastBasicPage', segment: 'toast-basic' },
                        { component: __WEBPACK_IMPORTED_MODULE_67__pages_toggles_basic_pages__["a" /* BasicPage */], name: 'ToggleBasicPage', segment: 'toggle-basic' },
                        { component: __WEBPACK_IMPORTED_MODULE_68__pages_toolbar_basic_pages__["a" /* BasicPage */], name: 'ToolbarBasicPage', segment: 'toolbar-basic' },
                        { component: __WEBPACK_IMPORTED_MODULE_69__pages_toolbar_buttons_pages__["a" /* ButtonsPage */], name: 'ToolbarButtonsPage', segment: 'toolbar-buttons' },
                        { component: __WEBPACK_IMPORTED_MODULE_70__pages_toolbar_colors_pages__["a" /* ColorsPage */], name: 'ToolbarColorsPage', segment: 'toolbar-colors' },
                        { component: __WEBPACK_IMPORTED_MODULE_70__pages_toolbar_colors_pages__["b" /* Page2 */], name: 'ToolbarColorsPage2', segment: 'toolbar-colors2' },
                        { component: __WEBPACK_IMPORTED_MODULE_70__pages_toolbar_colors_pages__["c" /* Page3 */], name: 'ToolbarColorsPage3', segment: 'toolbar-colors3' },
                        { component: __WEBPACK_IMPORTED_MODULE_70__pages_toolbar_colors_pages__["d" /* Page4 */], name: 'ToolbarColorsPage4', segment: 'toolbar-colors4' },
                        { component: __WEBPACK_IMPORTED_MODULE_71__pages_toolbar_searchbar_pages__["a" /* SearchbarPage */], name: 'ToolbarSearchbarPage', segment: 'toolbar-searchbar' },
                        { component: __WEBPACK_IMPORTED_MODULE_72__pages_toolbar_segment_pages__["a" /* SegmentPage */], name: 'ToolbarSegmentPage', segment: 'toolbar-segment' }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_action_sheets_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_alerts_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_alerts_checkbox_pages__["a" /* CheckboxPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_alerts_confirm_pages__["a" /* ConfirmPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_alerts_prompt_pages__["a" /* PromptPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_alerts_radio_pages__["a" /* RadioPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_badges_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_buttons_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_buttons_block_pages__["a" /* BlockPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_buttons_clear_pages__["a" /* ClearPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_buttons_components_pages__["a" /* ComponentsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_buttons_full_pages__["a" /* FullPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_buttons_icons_pages__["a" /* IconsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_buttons_outline_pages__["a" /* OutlinePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_buttons_round_pages__["a" /* RoundPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_buttons_sizes_pages__["a" /* SizesPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_fabs_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_cards_advanced_map_pages__["a" /* AdvancedMapPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_cards_advanced_social_pages__["a" /* AdvancedSocialPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_cards_advanced_weather_pages__["a" /* AdvancedWeatherPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_cards_background_pages__["a" /* BackgroundPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_cards_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_cards_header_pages__["a" /* HeaderPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_cards_image_pages__["a" /* ImagePage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_cards_list_pages__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_checkboxes_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_datetime_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_gestures_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_grid_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_icons_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_inputs_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_inputs_floating_pages__["a" /* FloatingPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_inputs_fixed_inline_pages__["a" /* FixedInlinePage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_inputs_inline_pages__["a" /* InlinePage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_inputs_inset_pages__["a" /* InsetPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_inputs_placeholder_pages__["a" /* PlaceholderPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_inputs_stacked_pages__["a" /* StackedPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_lists_avatar_pages__["a" /* AvatarPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_lists_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_lists_dividers_pages__["a" /* DividersPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_lists_headers_pages__["a" /* HeadersPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_lists_icon_pages__["a" /* IconPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_lists_inset_pages__["a" /* InsetPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_lists_multiline_pages__["a" /* MultilinePage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_lists_no_lines_pages__["a" /* NoLinesPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_lists_sliding_pages__["a" /* SlidingPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_lists_thumbnail_pages__["a" /* ThumbnailPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_loading_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_menus_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_menus_basic_pages__["b" /* PageOne */],
                __WEBPACK_IMPORTED_MODULE_52__pages_menus_basic_pages__["d" /* PageTwo */],
                __WEBPACK_IMPORTED_MODULE_52__pages_menus_basic_pages__["c" /* PageThree */],
                __WEBPACK_IMPORTED_MODULE_53__pages_modals_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_53__pages_modals_basic_pages__["b" /* ModalContentPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_navigation_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_navigation_basic_pages__["b" /* NavigationDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_popovers_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_popovers_basic_pages__["b" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_radios_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_57__pages_ranges_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_58__pages_searchbars_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_59__pages_segments_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_60__pages_selects_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_61__pages_slides_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_62__pages_tabs_badges_pages__["a" /* BadgesPage */],
                __WEBPACK_IMPORTED_MODULE_62__pages_tabs_badges_pages__["b" /* TabBadgesContent */],
                __WEBPACK_IMPORTED_MODULE_63__pages_tabs_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_63__pages_tabs_basic_pages__["b" /* TabBasicContentPage */],
                __WEBPACK_IMPORTED_MODULE_64__pages_tabs_icon_pages__["a" /* IconPage */],
                __WEBPACK_IMPORTED_MODULE_64__pages_tabs_icon_pages__["b" /* TabIconContentPage */],
                __WEBPACK_IMPORTED_MODULE_65__pages_tabs_icon_text_pages__["a" /* IconTextPage */],
                __WEBPACK_IMPORTED_MODULE_65__pages_tabs_icon_text_pages__["b" /* TabIconTextContentPage */],
                __WEBPACK_IMPORTED_MODULE_66__pages_toast_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_67__pages_toggles_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_68__pages_toolbar_basic_pages__["a" /* BasicPage */],
                __WEBPACK_IMPORTED_MODULE_69__pages_toolbar_buttons_pages__["a" /* ButtonsPage */],
                __WEBPACK_IMPORTED_MODULE_70__pages_toolbar_colors_pages__["a" /* ColorsPage */],
                __WEBPACK_IMPORTED_MODULE_70__pages_toolbar_colors_pages__["b" /* Page2 */],
                __WEBPACK_IMPORTED_MODULE_70__pages_toolbar_colors_pages__["c" /* Page3 */],
                __WEBPACK_IMPORTED_MODULE_70__pages_toolbar_colors_pages__["d" /* Page4 */],
                __WEBPACK_IMPORTED_MODULE_71__pages_toolbar_searchbar_pages__["a" /* SearchbarPage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_toolbar_segment_pages__["a" /* SegmentPage */]
            ],
            providers: []
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_helpers__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_menus_basic_pages__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_action_sheets_basic_pages__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, config, zone) {
        this.platform = platform;
        this.config = config;
        this.zone = zone;
        this.isProductionMode = false;
        this.isLab = false;
        this.currentPlatform = 'android';
        this.currentPageIndex = 34;
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_3__pages_menus_basic_pages__["b" /* PageOne */] },
            { title: 'Friends', component: __WEBPACK_IMPORTED_MODULE_3__pages_menus_basic_pages__["d" /* PageTwo */] },
            { title: 'Events', component: __WEBPACK_IMPORTED_MODULE_3__pages_menus_basic_pages__["c" /* PageThree */] }
        ];
        //this.rootPage = BasicPage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__directives_helpers__["b" /* getPageFor */]("inline-labels"); //BasicPage;
    }
    MyApp.prototype.ngAfterContentInit = function () {
        var _this = this;
        // if viewing the preview app in lab, hide the statusbars
        this.isLab = window.parent.location.pathname === '/ionic-lab';
        //if (this.isLab)
        this.config.set('statusbarPadding', false);
        // production-only code
        // production is false unless viewed on the docs
        // http://ionicframework.com/docs/v2/components/
        if (this.platform.getQueryParam('production') === 'true') {
            this.isProductionMode = true;
            // Platform is ios by default
            // only change it if android or windows
            if (this.platform.is('android')) {
                this.currentPlatform = 'android';
            }
            else if (this.platform.is('windows')) {
                this.currentPlatform = 'windows';
            }
            if (__WEBPACK_IMPORTED_MODULE_2__directives_helpers__["d" /* hasScrollbar */]() === true) {
                setTimeout(function () {
                    var body = document.getElementsByTagName('body')[0];
                    body.className = body.className + ' has-scrollbar';
                }, 500);
            }
            window.parent.postMessage(this.currentPlatform, '*');
            window.addEventListener('message', function (e) {
                _this.zone.run(function () {
                    if (e.data) {
                        var data;
                        try {
                            data = JSON.parse(e.data);
                        }
                        catch (e) {
                            console.error(e);
                        }
                        if (data.hash) {
                            _this.nextPage = __WEBPACK_IMPORTED_MODULE_2__directives_helpers__["b" /* getPageFor */](data.hash.replace('#', ''));
                            if (data.hash !== 'menus') {
                                _this.menu.close();
                                _this.menu.enable(false);
                            }
                        }
                        else {
                            _this.currentPageIndex = 1;
                            _this.nextPage = __WEBPACK_IMPORTED_MODULE_4__pages_action_sheets_basic_pages__["a" /* BasicPage */];
                        }
                        setTimeout(function () {
                            //helpers.debounce(this.content.setRoot(this.nextPage), 60, false);
                            __WEBPACK_IMPORTED_MODULE_2__directives_helpers__["a" /* debounce */](_this.content.setRoot(__WEBPACK_IMPORTED_MODULE_2__directives_helpers__["b" /* getPageFor */]("inline-labels")), 60, false);
                        });
                    }
                });
            });
        }
    };
    MyApp.prototype.previousSection = function () {
        var previousPage = this.currentPageIndex - 1;
        if (previousPage < 0) {
            previousPage = 0;
        }
        var pageName = Object.keys(__WEBPACK_IMPORTED_MODULE_2__directives_helpers__["c" /* getPages */]())[previousPage];
        this.content.setRoot(__WEBPACK_IMPORTED_MODULE_2__directives_helpers__["b" /* getPageFor */](pageName), {}, { animate: false });
        this.currentPageIndex = previousPage;
    };
    MyApp.prototype.nextSection = function () {
        var nextPage = this.currentPageIndex + 1;
        var pageList = Object.keys(__WEBPACK_IMPORTED_MODULE_2__directives_helpers__["c" /* getPages */]());
        if (nextPage >= pageList.length) {
            nextPage = pageList.length - 1;
        }
        var pageName = pageList[nextPage];
        this.content.setRoot(__WEBPACK_IMPORTED_MODULE_2__directives_helpers__["b" /* getPageFor */](pageName), {}, { animate: false });
        this.currentPageIndex = nextPage;
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        __WEBPACK_IMPORTED_MODULE_2__directives_helpers__["a" /* debounce */](this.content.setRoot(page.component), 60, false);
        console.log(page.hash);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */])
    ], MyApp.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Menu */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Menu */])
    ], MyApp.prototype, "menu", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\app\app.template.html"*/`<!-- <img src="assets/img/android-statusbar.png" *ngIf="isLab" class="statusbar-img statusbar-img-md">\n<img src="assets/img/ios-statusbar.png" *ngIf="isLab" class="statusbar-img statusbar-img-ios">\n<img src="assets/img/wp-statusbar.png" *ngIf="isLab" class="statusbar-img statusbar-img-wp"> -->\n\n<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="primary">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <!-- Display the side menu pages if it is production -->\n    <ion-list *ngIf="isProductionMode">\n      <button ion-item *ngFor="let p of pages" menuClose (click)="openPage(p)">\n        {{p.title}}\n      </button>\n\n      <button ion-item menuClose detail-none>\n        Close Menu\n      </button>\n    </ion-list>\n\n    <!-- Display all of the sections if this isn\'t production -->\n    <ion-list *ngIf="!isProductionMode">\n      <button ion-item *ngFor="let route of routes" menuClose (click)="openPage(route)">\n        {{ route.path | displayRoute }}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content></ion-nav>\n\n<div *ngIf="!isProductionMode">\n  <ion-fab left middle>\n    <button ion-fab color="light" (click)="previousSection()">\n      <ion-icon name="arrow-back"></ion-icon>\n    </button>\n  </ion-fab>\n\n  <ion-fab right middle>\n    <button ion-fab color="light" (click)="nextSection()">\n      <ion-icon name="arrow-forward"></ion-icon>\n    </button>\n  </ion-fab>\n</div>`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\app\app.template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),
/* 325 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = hasScrollbar;
/* harmony export (immutable) */ __webpack_exports__["c"] = getPages;
/* harmony export (immutable) */ __webpack_exports__["b"] = getPageFor;
/* harmony export (immutable) */ __webpack_exports__["a"] = debounce;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_action_sheets_basic_pages__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_alerts_basic_pages__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_alerts_checkbox_pages__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_alerts_confirm_pages__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_alerts_prompt_pages__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_alerts_radio_pages__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_badges_basic_pages__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_buttons_basic_pages__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_buttons_block_pages__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_buttons_clear_pages__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_buttons_components_pages__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_buttons_full_pages__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_buttons_icons_pages__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_buttons_outline_pages__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_buttons_round_pages__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_buttons_sizes_pages__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_fabs_basic_pages__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_cards_advanced_map_pages__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_cards_advanced_social_pages__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_cards_background_pages__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_cards_basic_pages__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_cards_header_pages__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_cards_image_pages__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_cards_list_pages__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_checkboxes_basic_pages__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_datetime_basic_pages__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_gestures_basic_pages__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_grid_basic_pages__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_icons_basic_pages__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_inputs_basic_pages__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_inputs_floating_pages__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_inputs_fixed_inline_pages__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_inputs_inline_pages__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_inputs_inset_pages__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_inputs_placeholder_pages__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_inputs_stacked_pages__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_lists_avatar_pages__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_lists_basic_pages__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_lists_dividers_pages__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_lists_headers_pages__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_lists_icon_pages__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_lists_inset_pages__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_lists_multiline_pages__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_lists_no_lines_pages__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_lists_sliding_pages__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_lists_thumbnail_pages__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_loading_basic_pages__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_menus_basic_pages__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_modals_basic_pages__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_navigation_basic_pages__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_popovers_basic_pages__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_radios_basic_pages__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_ranges_basic_pages__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_searchbars_basic_pages__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_segments_basic_pages__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_selects_basic_pages__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_slides_basic_pages__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_tabs_badges_pages__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_tabs_basic_pages__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_tabs_icon_pages__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_tabs_icon_text_pages__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_toast_basic_pages__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pages_toggles_basic_pages__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_toolbar_basic_pages__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__pages_toolbar_buttons_pages__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_toolbar_colors_pages__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_toolbar_searchbar_pages__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__pages_toolbar_segment_pages__ = __webpack_require__(255);
// action sheets

// alerts





// badges

// buttons









// fabs

// cards


// import { AdvancedWeatherPage as CardAdvancedWeatherPage } from '../pages/cards/advanced-weather/pages';





// checkboxes

// datetime

// gestures

// grid

// icons

// inputs







// lists










// loading

// menu

// modals

// navigation

// popover

// radios

// ranges

// searchbar

// segments

// selects

// slides

// tabs




// toast

// toggles

// toolbars





function hasScrollbar() {
    if (typeof window.top.innerWidth === 'number') {
        return window.top.innerWidth > window.top.document.documentElement.clientWidth;
    }
    // rootElem for quirksmode
    var rootElem = window.top.document.documentElement || window.top.document.body;
    // Check overflow style property on body for fauxscrollbars
    var overflowStyle;
    if (typeof rootElem.style !== 'undefined') {
        overflowStyle = rootElem.style.overflow;
    }
    overflowStyle = overflowStyle || window.top.getComputedStyle(rootElem, '').overflow;
    // Also need to check the Y axis overflow
    var overflowYStyle;
    if (typeof rootElem.style !== 'undefined') {
        overflowYStyle = rootElem.style.overflowY;
    }
    overflowYStyle = overflowYStyle || window.top.getComputedStyle(rootElem, '').overflowY;
    var contentOverflows = rootElem.scrollHeight > rootElem.clientHeight;
    var overflowShown = /^(visible|auto)$/.test(overflowStyle) || /^(visible|auto)$/.test(overflowYStyle);
    var alwaysShowScroll = overflowStyle === 'scroll' || overflowYStyle === 'scroll';
    return (contentOverflows && overflowShown) || (alwaysShowScroll);
}
function getPages() {
    return {
        'overview': __WEBPACK_IMPORTED_MODULE_0__pages_action_sheets_basic_pages__["a" /* BasicPage */],
        'action-sheets': __WEBPACK_IMPORTED_MODULE_0__pages_action_sheets_basic_pages__["a" /* BasicPage */],
        'alert': __WEBPACK_IMPORTED_MODULE_1__pages_alerts_basic_pages__["a" /* BasicPage */],
        'alert-confirm': __WEBPACK_IMPORTED_MODULE_3__pages_alerts_confirm_pages__["a" /* ConfirmPage */],
        'alert-prompt': __WEBPACK_IMPORTED_MODULE_4__pages_alerts_prompt_pages__["a" /* PromptPage */],
        'alert-radio': __WEBPACK_IMPORTED_MODULE_5__pages_alerts_radio_pages__["a" /* RadioPage */],
        'alert-checkbox': __WEBPACK_IMPORTED_MODULE_2__pages_alerts_checkbox_pages__["a" /* CheckboxPage */],
        'badges': __WEBPACK_IMPORTED_MODULE_6__pages_badges_basic_pages__["a" /* BasicPage */],
        'buttons': __WEBPACK_IMPORTED_MODULE_7__pages_buttons_basic_pages__["a" /* BasicPage */],
        'block-buttons': __WEBPACK_IMPORTED_MODULE_8__pages_buttons_block_pages__["a" /* BlockPage */],
        'clear-buttons': __WEBPACK_IMPORTED_MODULE_9__pages_buttons_clear_pages__["a" /* ClearPage */],
        'full-buttons': __WEBPACK_IMPORTED_MODULE_11__pages_buttons_full_pages__["a" /* FullPage */],
        'outline-buttons': __WEBPACK_IMPORTED_MODULE_13__pages_buttons_outline_pages__["a" /* OutlinePage */],
        'round-buttons': __WEBPACK_IMPORTED_MODULE_14__pages_buttons_round_pages__["a" /* RoundPage */],
        'buttons-in-components': __WEBPACK_IMPORTED_MODULE_10__pages_buttons_components_pages__["a" /* ComponentsPage */],
        'button-sizes': __WEBPACK_IMPORTED_MODULE_15__pages_buttons_sizes_pages__["a" /* SizesPage */],
        'fabs': __WEBPACK_IMPORTED_MODULE_16__pages_fabs_basic_pages__["a" /* BasicPage */],
        'icon-buttons': __WEBPACK_IMPORTED_MODULE_12__pages_buttons_icons_pages__["a" /* IconsPage */],
        'cards': __WEBPACK_IMPORTED_MODULE_20__pages_cards_basic_pages__["a" /* BasicPage */],
        'card-header': __WEBPACK_IMPORTED_MODULE_21__pages_cards_header_pages__["a" /* HeaderPage */],
        'card-list': __WEBPACK_IMPORTED_MODULE_23__pages_cards_list_pages__["a" /* ListPage */],
        'card-image': __WEBPACK_IMPORTED_MODULE_22__pages_cards_image_pages__["a" /* ImagePage */],
        'card-background': __WEBPACK_IMPORTED_MODULE_19__pages_cards_background_pages__["a" /* BackgroundPage */],
        'advanced-cards': __WEBPACK_IMPORTED_MODULE_18__pages_cards_advanced_social_pages__["a" /* AdvancedSocialPage */],
        'card-advanced-map': __WEBPACK_IMPORTED_MODULE_17__pages_cards_advanced_map_pages__["a" /* AdvancedMapPage */],
        'card-advanced-social': __WEBPACK_IMPORTED_MODULE_18__pages_cards_advanced_social_pages__["a" /* AdvancedSocialPage */],
        // 'card-advanced-weather': CardAdvancedWeatherPage,
        'checkbox': __WEBPACK_IMPORTED_MODULE_24__pages_checkboxes_basic_pages__["a" /* BasicPage */],
        'datetime': __WEBPACK_IMPORTED_MODULE_25__pages_datetime_basic_pages__["a" /* BasicPage */],
        'gestures': __WEBPACK_IMPORTED_MODULE_26__pages_gestures_basic_pages__["a" /* BasicPage */],
        'inputs': __WEBPACK_IMPORTED_MODULE_29__pages_inputs_basic_pages__["a" /* BasicPage */],
        'fixed-inline-labels': __WEBPACK_IMPORTED_MODULE_31__pages_inputs_fixed_inline_pages__["a" /* FixedInlinePage */],
        'floating-labels': __WEBPACK_IMPORTED_MODULE_30__pages_inputs_floating_pages__["a" /* FloatingPage */],
        'inline-labels': __WEBPACK_IMPORTED_MODULE_32__pages_inputs_inline_pages__["a" /* InlinePage */],
        'inset-labels': __WEBPACK_IMPORTED_MODULE_33__pages_inputs_inset_pages__["a" /* InsetPage */],
        'placeholder-labels': __WEBPACK_IMPORTED_MODULE_34__pages_inputs_placeholder_pages__["a" /* PlaceholderPage */],
        'stacked-labels': __WEBPACK_IMPORTED_MODULE_35__pages_inputs_stacked_pages__["a" /* StackedPage */],
        'icons': __WEBPACK_IMPORTED_MODULE_28__pages_icons_basic_pages__["a" /* BasicPage */],
        'grid': __WEBPACK_IMPORTED_MODULE_27__pages_grid_basic_pages__["a" /* BasicPage */],
        'lists': __WEBPACK_IMPORTED_MODULE_37__pages_lists_basic_pages__["a" /* BasicPage */],
        'list-lines': __WEBPACK_IMPORTED_MODULE_37__pages_lists_basic_pages__["a" /* BasicPage */],
        'list-no-lines': __WEBPACK_IMPORTED_MODULE_43__pages_lists_no_lines_pages__["a" /* NoLinesPage */],
        'avatar-list': __WEBPACK_IMPORTED_MODULE_36__pages_lists_avatar_pages__["a" /* AvatarPage */],
        'icon-list': __WEBPACK_IMPORTED_MODULE_40__pages_lists_icon_pages__["a" /* IconPage */],
        'inset-list': __WEBPACK_IMPORTED_MODULE_41__pages_lists_inset_pages__["a" /* InsetPage */],
        'list-dividers': __WEBPACK_IMPORTED_MODULE_38__pages_lists_dividers_pages__["a" /* DividersPage */],
        'list-headers': __WEBPACK_IMPORTED_MODULE_39__pages_lists_headers_pages__["a" /* HeadersPage */],
        'multiline-list': __WEBPACK_IMPORTED_MODULE_42__pages_lists_multiline_pages__["a" /* MultilinePage */],
        'sliding-list': __WEBPACK_IMPORTED_MODULE_44__pages_lists_sliding_pages__["a" /* SlidingPage */],
        'thumbnail-list': __WEBPACK_IMPORTED_MODULE_45__pages_lists_thumbnail_pages__["a" /* ThumbnailPage */],
        'loading': __WEBPACK_IMPORTED_MODULE_46__pages_loading_basic_pages__["a" /* BasicPage */],
        'menus': __WEBPACK_IMPORTED_MODULE_47__pages_menus_basic_pages__["a" /* BasicPage */],
        'modals': __WEBPACK_IMPORTED_MODULE_48__pages_modals_basic_pages__["a" /* BasicPage */],
        'navigation': __WEBPACK_IMPORTED_MODULE_49__pages_navigation_basic_pages__["a" /* BasicPage */],
        'popovers': __WEBPACK_IMPORTED_MODULE_50__pages_popovers_basic_pages__["a" /* BasicPage */],
        'radio': __WEBPACK_IMPORTED_MODULE_51__pages_radios_basic_pages__["a" /* BasicPage */],
        'range': __WEBPACK_IMPORTED_MODULE_52__pages_ranges_basic_pages__["a" /* BasicPage */],
        'segment': __WEBPACK_IMPORTED_MODULE_54__pages_segments_basic_pages__["a" /* BasicPage */],
        'select': __WEBPACK_IMPORTED_MODULE_55__pages_selects_basic_pages__["a" /* BasicPage */],
        'searchbar': __WEBPACK_IMPORTED_MODULE_53__pages_searchbars_basic_pages__["a" /* BasicPage */],
        'toggle': __WEBPACK_IMPORTED_MODULE_62__pages_toggles_basic_pages__["a" /* BasicPage */],
        'slides': __WEBPACK_IMPORTED_MODULE_56__pages_slides_basic_pages__["a" /* BasicPage */],
        'tabs': __WEBPACK_IMPORTED_MODULE_58__pages_tabs_basic_pages__["a" /* BasicPage */],
        'tabs-icon': __WEBPACK_IMPORTED_MODULE_59__pages_tabs_icon_pages__["a" /* IconPage */],
        'tabs-icon-text': __WEBPACK_IMPORTED_MODULE_60__pages_tabs_icon_text_pages__["a" /* IconTextPage */],
        'tabs-badges': __WEBPACK_IMPORTED_MODULE_57__pages_tabs_badges_pages__["a" /* BadgesPage */],
        'toast': __WEBPACK_IMPORTED_MODULE_61__pages_toast_basic_pages__["a" /* BasicPage */],
        'toolbar': __WEBPACK_IMPORTED_MODULE_63__pages_toolbar_basic_pages__["a" /* BasicPage */],
        'toolbar-buttons': __WEBPACK_IMPORTED_MODULE_64__pages_toolbar_buttons_pages__["a" /* ButtonsPage */],
        'toolbar-segment': __WEBPACK_IMPORTED_MODULE_67__pages_toolbar_segment_pages__["a" /* SegmentPage */],
        'toolbar-searchbar': __WEBPACK_IMPORTED_MODULE_66__pages_toolbar_searchbar_pages__["a" /* SearchbarPage */],
        'toolbar-colors': __WEBPACK_IMPORTED_MODULE_65__pages_toolbar_colors_pages__["a" /* ColorsPage */]
    };
}
function getPageFor(hash) {
    return getPages()[hash];
}
function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate)
                func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow)
            func.apply(context, args);
    };
}
;
//# sourceMappingURL=helpers.js.map

/***/ }),
/* 326 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvancedWeatherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AdvancedWeatherPage = (function () {
    function AdvancedWeatherPage() {
    }
    AdvancedWeatherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\cards\advanced-weather\template.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>Weather Card</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="cards-bg preview-weather-cards">\n\n<ion-card class="advanced-background">\n  <img src="assets/img/advance-card-alaska.jpg"/>\n\n  <ion-item class="advanced-trans">\n    <p item-start>ALASKA, USA</p>\n    <p item-end>SUN</p>\n  </ion-item>\n\n  <p class="advanced-background-title advanced-background-title-large">\n    <ion-icon name=\'moon\'></ion-icon>\n    <span>23&deg;</span>\n  </p>\n\n  <ion-tabs color="light" class="advanced-weather-tabs" no-navbar>\n    <ion-tab color="light" tabTitle="Sun" tabIcon="sunny"></ion-tab>\n    <ion-tab tabTitle="Mon" tabIcon="snow"></ion-tab>\n    <ion-tab tabTitle="Tue" tabIcon="cloudy"></ion-tab>\n  </ion-tabs>\n</ion-card>\n\n<ion-card class="advanced-background">\n  <img src="assets/img/advance-card-machu-picchu-1.jpg"/>\n\n  <ion-item class="advanced-trans">\n    <p item-start>MACHU PICCHU, PERU</p>\n    <p item-end>TUE</p>\n  </ion-item>\n\n  <p class="advanced-background-title advanced-background-title-large">\n    <ion-icon name=\'sunny\'></ion-icon>\n    <span>78&deg;</span>\n  </p>\n\n  <ion-tabs color="light" class="advanced-weather-tabs" no-navbar>\n    <ion-tab color="light" tabTitle="Tue" tabIcon="sunny"></ion-tab>\n    <ion-tab tabTitle="Wed" tabIcon="partly-sunny"></ion-tab>\n    <ion-tab tabTitle="Thr" tabIcon="cloudy"></ion-tab>\n  </ion-tabs>\n</ion-card>\n\n<ion-card class="advanced-background">\n  <img src="assets/img/advance-card-london.jpg"/>\n\n  <ion-item class="advanced-trans">\n    <p item-start>LONDON, UK</p>\n    <p item-end>SUN</p>\n  </ion-item>\n\n  <p class="advanced-background-title advanced-background-title-large">\n    <ion-icon name=\'thunderstorm\'></ion-icon>\n    <span>41&deg;</span>\n  </p>\n\n  <ion-tabs color="light" class="advanced-weather-tabs" no-navbar>\n    <ion-tab color="light" tabTitle="Sun" tabIcon="thunderstorm"></ion-tab>\n    <ion-tab tabTitle="Mon" tabIcon="rainy"></ion-tab>\n    <ion-tab tabTitle="Tue" tabIcon="rainy"></ion-tab>\n  </ion-tabs>\n</ion-card>\n\n\n</ion-content>\n`/*ion-inline-end:"D:\Applications\ionic-preview-app-master\ionic-preview-app-master\src\pages\cards\advanced-weather\template.html"*/
        })
    ], AdvancedWeatherPage);
    return AdvancedWeatherPage;
}());

//# sourceMappingURL=pages.js.map

/***/ }),
/* 327 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayRoutePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DisplayRoutePipe = (function () {
    function DisplayRoutePipe() {
    }
    DisplayRoutePipe.prototype.transform = function (v) {
        // Convert path to string
        // i.e. /action-sheets/basic becomes Action Sheets: Basic
        v = v.replace("/", "").replace("/", ": ").replace("-", " ");
        v = this.capitalize(v);
        return v;
    };
    DisplayRoutePipe.prototype.capitalize = function (value) {
        return value.toLowerCase().replace(/\b\w/g, function (m) {
            return m.toUpperCase();
        });
    };
    DisplayRoutePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'displayRoute'
        })
    ], DisplayRoutePipe);
    return DisplayRoutePipe;
}());

//# sourceMappingURL=display-route.js.map

/***/ })
]),[256]);
//# sourceMappingURL=main.js.map