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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register-page/register-page.component */ "./src/app/components/register-page/register-page.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/about-page/about-page.component */ "./src/app/components/about-page/about-page.component.ts");
/* harmony import */ var _components_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/search-page/search-page.component */ "./src/app/components/search-page/search-page.component.ts");
/* harmony import */ var _components_chatroom_list_chatroom_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/chatroom-list/chatroom-list.component */ "./src/app/components/chatroom-list/chatroom-list.component.ts");
/* harmony import */ var _components_chatroom_item_chatroom_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/chatroom-item/chatroom-item.component */ "./src/app/components/chatroom-item/chatroom-item.component.ts");
/* harmony import */ var _components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login-page/login-page.component */ "./src/app/components/login-page/login-page.component.ts");
/* harmony import */ var _components_match_list_match_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/match-list/match-list.component */ "./src/app/components/match-list/match-list.component.ts");
/* harmony import */ var _components_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/profile-page/profile-page.component */ "./src/app/components/profile-page/profile-page.component.ts");
/* harmony import */ var _components_result_page_result_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/result-page/result-page.component */ "./src/app/components/result-page/result-page.component.ts");
/* harmony import */ var _components_impressum_page_impressum_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/impressum-page/impressum-page.component */ "./src/app/components/impressum-page/impressum-page.component.ts");
/* harmony import */ var _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/error-page/error-page.component */ "./src/app/components/error-page/error-page.component.ts");
















var routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_10__["LoginPageComponent"]
    },
    {
        path: 'register',
        component: _components_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_4__["RegisterPageComponent"]
    },
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    },
    {
        path: 'matches',
        component: _components_match_list_match_list_component__WEBPACK_IMPORTED_MODULE_11__["MatchListComponent"]
    },
    {
        path: 'chats',
        component: _components_chatroom_list_chatroom_list_component__WEBPACK_IMPORTED_MODULE_8__["ChatroomListComponent"]
    },
    {
        path: 'chats/:Id',
        component: _components_chatroom_item_chatroom_item_component__WEBPACK_IMPORTED_MODULE_9__["ChatroomItemComponent"]
    },
    {
        path: 'profile',
        component: _components_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_12__["ProfilePageComponent"]
    },
    {
        path: 'search',
        component: _components_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_7__["SearchPageComponent"]
    },
    {
        path: 'search/result',
        component: _components_result_page_result_page_component__WEBPACK_IMPORTED_MODULE_13__["ResultPageComponent"]
    },
    {
        path: 'impressum',
        component: _components_impressum_page_impressum_page_component__WEBPACK_IMPORTED_MODULE_14__["ImpressumPageComponent"]
    },
    {
        path: 'about',
        component: _components_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_6__["AboutPageComponent"]
    },
    {
        path: '**',
        component: _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_15__["ErrorPageComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'tandem-frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var _components_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/register-page/register-page.component */ "./src/app/components/register-page/register-page.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/login-page/login-page.component */ "./src/app/components/login-page/login-page.component.ts");
/* harmony import */ var _components_match_list_match_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/match-list/match-list.component */ "./src/app/components/match-list/match-list.component.ts");
/* harmony import */ var _components_chatroom_list_chatroom_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/chatroom-list/chatroom-list.component */ "./src/app/components/chatroom-list/chatroom-list.component.ts");
/* harmony import */ var _components_chatroom_item_chatroom_item_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/chatroom-item/chatroom-item.component */ "./src/app/components/chatroom-item/chatroom-item.component.ts");
/* harmony import */ var _components_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/profile-page/profile-page.component */ "./src/app/components/profile-page/profile-page.component.ts");
/* harmony import */ var _components_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/search-page/search-page.component */ "./src/app/components/search-page/search-page.component.ts");
/* harmony import */ var _components_result_page_result_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/result-page/result-page.component */ "./src/app/components/result-page/result-page.component.ts");
/* harmony import */ var _components_impressum_page_impressum_page_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/impressum-page/impressum-page.component */ "./src/app/components/impressum-page/impressum-page.component.ts");
/* harmony import */ var _components_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/about-page/about-page.component */ "./src/app/components/about-page/about-page.component.ts");
/* harmony import */ var _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/error-page/error-page.component */ "./src/app/components/error-page/error-page.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _services_user_store_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/user-store.service */ "./src/app/services/user-store.service.ts");
/* harmony import */ var _services_match_store_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/match-store.service */ "./src/app/services/match-store.service.ts");
/* harmony import */ var _services_activities_offers_cities_store_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/activities-offers-cities-store.service */ "./src/app/services/activities-offers-cities-store.service.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");













// components














// services






// imports for firebase




function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_13__["RegisterPageComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_15__["LoginPageComponent"],
                _components_match_list_match_list_component__WEBPACK_IMPORTED_MODULE_16__["MatchListComponent"],
                _components_chatroom_list_chatroom_list_component__WEBPACK_IMPORTED_MODULE_17__["ChatroomListComponent"],
                _components_chatroom_item_chatroom_item_component__WEBPACK_IMPORTED_MODULE_18__["ChatroomItemComponent"],
                _components_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_19__["ProfilePageComponent"],
                _components_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_20__["SearchPageComponent"],
                _components_result_page_result_page_component__WEBPACK_IMPORTED_MODULE_21__["ResultPageComponent"],
                _components_impressum_page_impressum_page_component__WEBPACK_IMPORTED_MODULE_22__["ImpressumPageComponent"],
                _components_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_23__["AboutPageComponent"],
                _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_24__["ErrorPageComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_25__["FooterComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_26__["NavbarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]]
                    }
                }),
                _angular_fire__WEBPACK_IMPORTED_MODULE_33__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_35__["environment"].firebase),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_34__["AngularFireAuthModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_36__["AngularFirestoreModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["NgxPaginationModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_11__["NgMultiSelectDropDownModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerModule"].forRoot()
            ],
            providers: [
                _services_user_store_service__WEBPACK_IMPORTED_MODULE_29__["UserStoreService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_27__["AuthService"],
                _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"],
                _services_match_store_service__WEBPACK_IMPORTED_MODULE_30__["MatchStoreService"],
                _services_activities_offers_cities_store_service__WEBPACK_IMPORTED_MODULE_31__["ActivitiesOffersCitiesStoreService"],
                // In the newest firebase version the timestampsInSnapshots setting defaults to true therefore it no longer needs to be set.
                { provide: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_36__["FirestoreSettingsToken"], useValue: {} },
                _services_search_service__WEBPACK_IMPORTED_MODULE_32__["SearchService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about-page/about-page.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/about-page/about-page.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-2 col-md-3\"></div>\r\n  <div class=\"col-8 col-md-6\">\r\n      <div class=\"card m-4 text-center\">\r\n\r\n      <h5 class=\"card-title\">Über uns:</h5>\r\n\r\n      <div class=\"card-body\">\r\n        <blockquote class=\"blockquote mb-0\">\r\n          <p>\"Eine Investition in Wissen bringt immer noch die besten Zinsen.\"</p>\r\n          <footer class=\"blockquote-footer\">Benjamin Fanklin</footer>\r\n        </blockquote>\r\n      </div>\r\n\r\n      Wir möchten dir diese Investition so einfach wie möglich machen und bieten dir deshalb eine Plattform,\r\n      mit dieser du jeder Zeit dein eigenes Wissen mit anderen teilen und auch neues erlangen kannst.\r\n\r\n      Das Tandem Team besteht aus Studenten des 6. Semester an der HWR Berlin.\r\n<br/>\r\n<br/>\r\n      <img src=\"../../../assets/images/Team-Foto.jpg\" class=\"card-img-top\" alt=\"...\" >\r\n      <div class=\"card-body\">\r\n        <p class=\"card-text\">Hier das Team von links nach rechts Arne, Eric, Pascal, Joe und Louis</p>\r\n      </div>\r\n\r\n      </div>\r\n  </div>\r\n  <div class=\"col-2 col-md-3\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/about-page/about-page.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/about-page/about-page.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQtcGFnZS9hYm91dC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/about-page/about-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/about-page/about-page.component.ts ***!
  \***************************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutPageComponent = /** @class */ (function () {
    function AboutPageComponent() {
    }
    AboutPageComponent.prototype.ngOnInit = function () {
    };
    AboutPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-page',
            template: __webpack_require__(/*! ./about-page.component.html */ "./src/app/components/about-page/about-page.component.html"),
            styles: [__webpack_require__(/*! ./about-page.component.scss */ "./src/app/components/about-page/about-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutPageComponent);
    return AboutPageComponent;
}());



/***/ }),

/***/ "./src/app/components/chatroom-item/chatroom-item.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/chatroom-item/chatroom-item.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  chatroom-item works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/chatroom-item/chatroom-item.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/chatroom-item/chatroom-item.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdHJvb20taXRlbS9jaGF0cm9vbS1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/chatroom-item/chatroom-item.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/chatroom-item/chatroom-item.component.ts ***!
  \*********************************************************************/
/*! exports provided: ChatroomItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatroomItemComponent", function() { return ChatroomItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChatroomItemComponent = /** @class */ (function () {
    function ChatroomItemComponent() {
    }
    ChatroomItemComponent.prototype.ngOnInit = function () {
    };
    ChatroomItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chatroom-item',
            template: __webpack_require__(/*! ./chatroom-item.component.html */ "./src/app/components/chatroom-item/chatroom-item.component.html"),
            styles: [__webpack_require__(/*! ./chatroom-item.component.scss */ "./src/app/components/chatroom-item/chatroom-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChatroomItemComponent);
    return ChatroomItemComponent;
}());



/***/ }),

/***/ "./src/app/components/chatroom-list/chatroom-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/chatroom-list/chatroom-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  chatroom-list works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/chatroom-list/chatroom-list.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/chatroom-list/chatroom-list.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdHJvb20tbGlzdC9jaGF0cm9vbS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/chatroom-list/chatroom-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/chatroom-list/chatroom-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: ChatroomListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatroomListComponent", function() { return ChatroomListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChatroomListComponent = /** @class */ (function () {
    function ChatroomListComponent() {
    }
    ChatroomListComponent.prototype.ngOnInit = function () {
    };
    ChatroomListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chatroom-list',
            template: __webpack_require__(/*! ./chatroom-list.component.html */ "./src/app/components/chatroom-list/chatroom-list.component.html"),
            styles: [__webpack_require__(/*! ./chatroom-list.component.scss */ "./src/app/components/chatroom-list/chatroom-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChatroomListComponent);
    return ChatroomListComponent;
}());



/***/ }),

/***/ "./src/app/components/error-page/error-page.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/error-page/error-page.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-2 col-md-3\"></div>\r\n  <div class=\"col-8 col-md-6 \" layout-align=\"center\" >\r\n    <br/>\r\n    <h2>\r\n      404 - Page not found\r\n    </h2>\r\n    <br/>\r\n    <img src=\"../../../assets/images/404-error.jpg\" class=\"img-fluid \" alt=\"image\">\r\n  </div>\r\n  <div class=\"col-2 col-md-3\"></div>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/error-page/error-page.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/error-page/error-page.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXJyb3ItcGFnZS9lcnJvci1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/error-page/error-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/error-page/error-page.component.ts ***!
  \***************************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorPageComponent = /** @class */ (function () {
    function ErrorPageComponent() {
    }
    ErrorPageComponent.prototype.ngOnInit = function () {
    };
    ErrorPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error-page',
            template: __webpack_require__(/*! ./error-page.component.html */ "./src/app/components/error-page/error-page.component.html"),
            styles: [__webpack_require__(/*! ./error-page.component.scss */ "./src/app/components/error-page/error-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer text-center small border-top\">\r\n  <ul class=\"nav flex-column\">\r\n    <li class=\"\">\r\n      <a class=\"text-dark\" [routerLink]=\"['/impressum']\">{{'footer.legalDisclosure' | translate }}</a>\r\n    </li>\r\n    <li class=\"\">\r\n      <a class=\"text-dark\" [routerLink]=\"['/about']\">{{'footer.aboutUs' | translate }}</a>\r\n    </li>\r\n  </ul>\r\n  <p> © 2018 | tandemPartner</p>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center font-weight-light my-3\">{{ 'home.openMatchrequests' | translate }}</h1>\r\n<div class=\"row\">\r\n  <div class=\"col-1\"></div>\r\n  <div class=\"col-10\">\r\n    <div *ngIf=\"matchRequests, else elseBlock\">\r\n      <!-- show all matchRequests which are saved in the Array of 'matchRequests'-->\r\n      <div *ngFor=\"let match of matchRequests | paginate: { itemsPerPage: 5, currentPage: pageNumber }\">\r\n        <div class=\"card shadow my-3\">\r\n            <h5 class=\"card-header\">\r\n                {{ 'home.requestTitle' | translate}} {{ match.matchedOffer }}\r\n            </h5>\r\n            <div class=\"card-body\">\r\n              <div class=\"card-text\">\r\n                  <div class=\"row\">\r\n                      <div class=\"col-8 col-md-10\">\r\n                        <a class=\"pointer-cursor\" (click)=\"openModal(match.initiatorID)\">\r\n                          <p class=\"my-0\"><small>{{ match.initiatorID }}</small></p>\r\n                          <p class=\"my-0\"><small>Age:</small></p>\r\n                          <p class=\"my-0\"><small>Aktivitäten:</small></p>\r\n                        </a>\r\n                      </div>\r\n                      <div class=\"col-4 col-md-2 d-flex justify-content-end my-auto\">\r\n                        <button type=\"button\" class=\"btn btn-success mr-2 homebutton\" (click)=\"acceptMatch()\">\r\n                          <fa-icon [icon]=\"faCheck\"></fa-icon>\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-outline-danger homebutton\" (click)=\"declineMatch()\">\r\n                          <fa-icon [icon]=\"faTimes\"></fa-icon>\r\n                        </button>\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n          </div>\r\n      </div><!--ngFor-->\r\n\r\n      <!--controls for pagination, which are only visible at the length of matchRequest-array bigger than 5-->\r\n      <pagination-controls autoHide=\"true\"\r\n        class=\"pagination justify-content-center\"\r\n        (pageChange)=\"pageNumber = $event\"\r\n        previousLabel=\"{{'home.previous' | translate }}\"\r\n        nextLabel=\"{{'home.next' | translate }}\"></pagination-controls>\r\n    </div><!--ngIf-->\r\n\r\n    <!-- if there are no matchrequests-->\r\n    <ng-template #elseBlock>\r\n      <p class=\"text-center\">{{ 'home.noRequests' | translate}}</p>\r\n    </ng-template>\r\n  </div>\r\n  <div class=\"col-1\"></div>\r\n</div>\r\n\r\n\r\n<!-- Modal -->\r\n<div class=\"modal-backdrop fade in\" [ngStyle]=\"{'display':display}\"></div>\r\n<div *ngIf=\"modalIsOpen\" class=\"modal\" [ngStyle]=\"{'display': display}\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\">{{ 'home.requestTitle' | translate}} Kochen</h5>\r\n          <button type=\"button\" class=\"close\" (click)=\"closeModal()\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n           <!-- {{ user.firstname }}-->\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeModal()\">Close</button>\r\n          <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_match_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/match-store.service */ "./src/app/services/match-store.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_user_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user-store.service */ "./src/app/services/user-store.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");







var HomeComponent = /** @class */ (function () {
    function HomeComponent(userStoreService, authService, matchStoreService) {
        this.userStoreService = userStoreService;
        this.authService = authService;
        this.matchStoreService = matchStoreService;
        // for fontawesome icons
        this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCheck"];
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTimes"];
        // for pagination
        this.pageNumber = 1;
        // for modal
        this.display = 'none';
        this.modalIsOpen = false;
    }
    // when home-component was called, the written methods in ngOnInit gonna start
    HomeComponent.prototype.ngOnInit = function () {
        this.showMatchRequestsForCurrentUser(this.authService.getUser().uid);
    };
    HomeComponent.prototype.showMatchRequestsForCurrentUser = function (id) {
        var _this = this;
        this.matchStoreService.getAllUnacceptedMatchesForUser(id).then(function (matches) { return _this.matchRequests = matches; });
        // this.matchRequests.forEach((i: Match) => {
        //   console.log('PREinitiatorID: ' + i.initiatorID);
        //   this.getInitiatorFirstname(i.initiatorID);
        //   i.initiatorID = this.initiatorFirstname;
        //   console.log('initiatorID: ' + i.initiatorID);
        // });
    };
    HomeComponent.prototype.getInitiatorFirstname = function (id) {
        var _this = this;
        this.userStoreService.getUserById(id).subscribe(function (recievedUser) {
            _this.initiatorFirstname = recievedUser.firstname;
            console.log('initiatorFirstname: ' + _this.initiatorFirstname);
        });
    };
    HomeComponent.prototype.acceptMatch = function () {
        // TODO: add functionality - update the match
        console.log('accepted');
        //  this.showMatchRequestsForCurrentUser(this.authService.currentUser.uid);
    };
    HomeComponent.prototype.declineMatch = function () {
        // TODO: add delete functionality - delete the match
        console.log('deleted');
        // this.showMatchRequestsForCurrentUser(this.authService.currentUser.uid);
    };
    HomeComponent.prototype.openModal = function (id) {
        var _this = this;
        console.log('id: ' + id);
        this.modalIsOpen = true;
        this.display = 'block';
        this.matchRequests.forEach(function (match) {
            if (match._id === id) {
                _this.openedModal = match;
            }
        });
    };
    HomeComponent.prototype.closeModal = function () {
        this.display = 'none';
        this.modalIsOpen = false;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_store_service__WEBPACK_IMPORTED_MODULE_3__["UserStoreService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_match_store_service__WEBPACK_IMPORTED_MODULE_1__["MatchStoreService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/impressum-page/impressum-page.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/impressum-page/impressum-page.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-2 col-md-3\"></div>\r\n  <div class=\"col-8 col-md-6\">\r\n      <div class=\"card m-4 text-center\">\r\n\r\n      <h5 class=\"card-title\">Entwicklerteam:</h5>\r\n\r\n        <br />Constantin Beer\r\n        <br />Eric Odschuk\r\n        <br />Luis Ramer\r\n        <br />Arne Schacher\r\n        <br />Pascal Vonholdt<br />\r\n        <br />HWR Berlin - 6. Semester Wirtschaftsinformatik\"\r\n        <br />Alt-Friedrichsfelde 60\r\n        <br />10315 Berlin\r\n      Kontakt:\r\n      <br />E-Mail: tandem.hwr@gmail.com\r\n      </div>\r\n  </div>\r\n  <div class=\"col-2 col-md-3\"></div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/impressum-page/impressum-page.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/impressum-page/impressum-page.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW1wcmVzc3VtLXBhZ2UvaW1wcmVzc3VtLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/impressum-page/impressum-page.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/impressum-page/impressum-page.component.ts ***!
  \***********************************************************************/
/*! exports provided: ImpressumPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImpressumPageComponent", function() { return ImpressumPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ImpressumPageComponent = /** @class */ (function () {
    function ImpressumPageComponent() {
    }
    ImpressumPageComponent.prototype.ngOnInit = function () {
    };
    ImpressumPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-impressum-page',
            template: __webpack_require__(/*! ./impressum-page.component.html */ "./src/app/components/impressum-page/impressum-page.component.html"),
            styles: [__webpack_require__(/*! ./impressum-page.component.scss */ "./src/app/components/impressum-page/impressum-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ImpressumPageComponent);
    return ImpressumPageComponent;
}());



/***/ }),

/***/ "./src/app/components/login-page/login-page.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/login-page/login-page.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-1\"></div>\r\n  <div class=\"col-10 d-flex justify-content-center\">\r\n    <div class=\"mx-auto my-5 card shadow\">\r\n      <img class=\"card-img-top mb-4 mt-3 rounded-circle mx-auto shadow\" src=\"../../../assets/images/tandemLogo.png\">\r\n      <div class=\"card-body\">\r\n        <div class=\"card-title text-center\">tandemPartner<i class=\"text-muted\">{{'login.tandemSlogan' | translate }}</i></div>\r\n        <form class=\"m-3\" [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\r\n          <div class=\"input-group mb-3\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\" id=\"mailIcon\">\r\n                <fa-icon [icon]=\"faAt\"></fa-icon>\r\n              </span>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control\" id=\"loginFormMail\" placeholder=\"{{'login.mailPlaceholder' | translate }}\" formControlName=\"loginFormMail\" aria-describedby=\"mailIcon\" autofocus>\r\n          </div>\r\n\r\n          <div class=\"input-group mb-3\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\" id=\"passwordIcon\">\r\n                <fa-icon [icon]=\"faLock\"></fa-icon>\r\n              </span>\r\n            </div>\r\n            <input type=\"password\" class=\"form-control\" id=\"loginFormPassword\" placeholder=\"{{'login.passwordPlaceholder' | translate }}\" formControlName=\"loginFormPassword\" aria-describedby=\"passwordIcon\" autofocus>\r\n          </div>\r\n\r\n          <div class=\"btn-toolbar d-flex justify-content-center\" role=\"toolbar\">\r\n            <div class=\"btn-group mr-2\">\r\n              <button type=\"button\" type=\"submit\" class=\"btn btn-warning d-flex mx-auto  mt-2\" >{{'login.loginButton' | translate }}</button>\r\n            </div>\r\n            <div class=\"btn-group\">\r\n              <button type=\"button\" [routerLink]=\"['/register']\" class=\"btn btn-outline-warning d-flex mx-auto mt-2\" >{{'login.registerButton' | translate }}</button>\r\n            </div>\r\n          </div>\r\n\r\n        </form>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"col-1\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/login-page/login-page.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/login-page/login-page.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  height: auto;\n  width: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi1wYWdlL0Q6XFxVc2Vyc1xcQktVXFxMdWlzUmFwaGFlbFJhbWVyXFxEZXNrdG9wXFxVbmktWmV1Z1xcNi4gU2VtZXN0ZXJcXFdlYlByb2dcXHRhbmRlbVBhcnRuZXIzXFxhbmd1bGFyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsb2dpbi1wYWdlXFxsb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/login-page/login-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/login-page/login-page.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");







var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(formBuilder, router, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        // for icons
        this.faAt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faAt"];
        this.faLock = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faLock"];
        this.loginForm = this.createLoginForm();
    }
    LoginPageComponent.prototype.ngOnInit = function () {
    };
    LoginPageComponent.prototype.createLoginForm = function () {
        return this.formBuilder.group({
            loginFormMail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            loginFormPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    LoginPageComponent.prototype.login = function () {
        var mail = this.loginForm.value.loginFormMail;
        var password = this.loginForm.value.loginFormPassword;
        this.authService.signInWithMailAndPassword(mail, password);
    };
    Object.defineProperty(LoginPageComponent.prototype, "loginFormMail", {
        get: function () {
            return this.loginForm.get('loginFormMail');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginPageComponent.prototype, "loginFormPassword", {
        get: function () {
            return this.loginForm.get('loginFormPassword');
        },
        enumerable: true,
        configurable: true
    });
    LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/components/login-page/login-page.component.html"),
            styles: [__webpack_require__(/*! ./login-page.component.scss */ "./src/app/components/login-page/login-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/components/match-list/match-list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/match-list/match-list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center font-weight-light mb-3 mt-4\">{{ 'matchlist.matchHeaderTitle' | translate }}</h1>\r\n<div class=\"row mb-3\">\r\n  <div class=\"col-1\"></div>\r\n  <div class=\"col-10 px-0\">\r\n    <div ><!--*ngIf=\"allMatches, else ElseBlock\"-->\r\n      <div class=\"accordion shadow\" id=\"matchAccordion\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header pointer-cursor bg-white border-warning\" id=\"headingOne\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n            <h3 class=\"mb-0 font-weight-light\">\r\n              {{ 'matchlist.accpetedMatches' | translate }}\r\n            </h3>\r\n          </div>\r\n          <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#matchAccordion\">\r\n            <div class=\"card-body\">\r\n              <!-- show all accepted matches which are saved in acceptedMatches[]-->\r\n              <div *ngFor=\"let match of acceptedMatches | paginate: { itemsPerPage: 5, currentPage: pageNumberAcceptedMatches, id: 'firstPagination' }\">\r\n                <div class=\"card shadow my-3\">\r\n                  <h5 class=\"card-header bg-white border-warning font-italic\">\r\n                    {{ 'matchlist.matchedOffer' | translate }}: {{ match.matchedOffer }}\r\n                  </h5>\r\n                  <div class=\"card-body accepted-match-cards\">\r\n                    <div class=\"card-text\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-8 col-md-10\">\r\n                          <a class=\"pointer-cursor\" (click)=\"openModal(match.initiatorID)\">\r\n                            <p class=\"my-0\"><small>{{ match.initiatorID }}</small></p>\r\n                            <p class=\"my-0\"><small>Age:</small></p>\r\n                            <p class=\"my-0\"><small>Aktivitäten:</small></p>\r\n                          </a>\r\n                        </div>\r\n                        <div class=\"col-4 col-md-2 d-flex justify-content-end my-auto\">\r\n                          <button type=\"button\" class=\"btn btn-outline-warning homebutton\"\r\n                                  (click)=\"contactUser(match.initiatorID, match.partnerID)\"\r\n                                  data-toggle=\"tooltip\" data-placement=\"top\" title=\"{{ 'matchlist.contactTooltip' | translate }}\">\r\n                            <fa-icon [icon]=\"faEnvelope\"></fa-icon>\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div><!--ngFor-->\r\n\r\n              <!--controls for pagination, which are only visible at the length of matchRequest-array bigger than 5-->\r\n              <pagination-controls autoHide=\"true\"\r\n                class=\"pagination justify-content-center\"\r\n                (pageChange)=\"pageNumberAcceptedMatches = $event\"\r\n                previousLabel=\"{{'home.previous' | translate }}\"\r\n                nextLabel=\"{{'home.next' | translate }}\" id=\"firstPagination\">\r\n              </pagination-controls>\r\n            </div>\r\n          </div>\r\n        </div><!--first row/card-->\r\n\r\n        <div class=\"card\">\r\n          <div class=\"card-header pointer-cursor bg-white border-info\" id=\"headingTwo\"  data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\r\n            <h3 class=\"mb-0 font-weight-light\">\r\n                {{ 'matchlist.unacceptedMatches' | translate }}\r\n            </h3>\r\n          </div>\r\n          <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#matchAccordion\">\r\n            <div class=\"card-body\">\r\n              <!---unaccepted matchrequests-->\r\n              <!-- show all unaccepted matchrequests which are saved in matchrequests[]-->\r\n              <div *ngFor=\"let matchrequest of matchrequests | paginate: { itemsPerPage: 5, currentPage: pageNumberRequests, id: 'secondPagination' }\">\r\n                <div class=\"card shadow my-3\">\r\n                  <h5 class=\"card-header bg-white border-info font-italic\">\r\n                    {{ 'matchlist.matchrequestFor' | translate }}: {{ matchrequest.matchedOffer }}\r\n                  </h5>\r\n                  <div class=\"card-body unaccepted-match-cards\">\r\n                    <div class=\"card-text\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-8 col-md-10\">\r\n                          <a class=\"pointer-cursor\" (click)=\"openModal(matchrequest.initiatorID)\">\r\n                            <p class=\"my-0\"><small>{{ matchrequest.initiatorID }}</small></p>\r\n                            <p class=\"my-0\"><small>Age:</small></p>\r\n                            <p class=\"my-0\"><small>Aktivitäten:</small></p>\r\n                          </a>\r\n                        </div>\r\n                        <div class=\"col-4 col-md-2 d-flex justify-content-end my-auto\">\r\n                          <button type=\"button\" class=\"btn btn-outline-danger homebutton\" (click)=\"deleteMatchrequest()\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"{{ 'matchlist.deleteTooltip' | translate }}\">\r\n                            <fa-icon [icon]=\"faTrash\"></fa-icon>\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div><!--ngFor-->\r\n\r\n              <!--controls for pagination, which are only visible at the length of matchRequest-array bigger than 5-->\r\n              <pagination-controls autoHide=\"true\"\r\n                class=\"pagination justify-content-center\"\r\n                (pageChange)=\"pageNumberRequests = $event\"\r\n                previousLabel=\"{{'home.previous' | translate }}\"\r\n                nextLabel=\"{{'home.next' | translate }}\" id=\"secondPagination\">\r\n              </pagination-controls>\r\n            </div>\r\n          </div>\r\n        </div><!--second row/card-->\r\n\r\n      </div><!--accordion-->\r\n    </div><!--ngIf allMatches=!null-->\r\n\r\n    <!-- if there are no matchrequests-->\r\n    <ng-template #elseBlock>\r\n      <p class=\"text-center\">{{ 'home.noRequests' | translate}}</p>\r\n    </ng-template>\r\n  </div><!--col-10-->\r\n  <div class=\"col-1\"></div>\r\n</div>\r\n\r\n\r\n<!-- Modal -->\r\n<div class=\"modal-backdrop fade in\" [ngStyle]=\"{'display':display}\"></div>\r\n<div *ngIf=\"modalIsOpen\" class=\"modal\" [ngStyle]=\"{'display': display}\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\">{{ 'home.requestTitle' | translate}} Kochen</h5>\r\n          <button type=\"button\" class=\"close\" (click)=\"closeModal()\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n           <!-- {{ user.firstname }}-->\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeModal()\">Close</button>\r\n          <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/components/match-list/match-list.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/match-list/match-list.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWF0Y2gtbGlzdC9tYXRjaC1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/match-list/match-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/match-list/match-list.component.ts ***!
  \***************************************************************/
/*! exports provided: MatchListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchListComponent", function() { return MatchListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_match__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../models/match */ "./src/app/models/match.ts");
/* harmony import */ var _services_match_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/match-store.service */ "./src/app/services/match-store.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







// import { ChatService } from './../../services/chat.service';
var MatchListComponent = /** @class */ (function () {
    function MatchListComponent(authService, matchStoreService, router) {
        this.authService = authService;
        this.matchStoreService = matchStoreService;
        this.router = router;
        // for fontawesome icons
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTrash"];
        this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEnvelope"];
        // for pagination
        this.pageNumberAcceptedMatches = 1;
        this.pageNumberRequests = 1;
        // for modal
        this.display = 'none';
        this.modalIsOpen = false;
    }
    MatchListComponent.prototype.ngOnInit = function () {
        // this.matchStoreService.getAllMatchesForSpecificUser(this.authService.currentUser.uid).then(matches => {
        //   this.allMatches = matches;
        // });
        this.acceptedMatches = [
            new _models_match__WEBPACK_IMPORTED_MODULE_1__["Match"]('kycsoFi1RPaNy3hJxwmFhbD032I3', 'xMFp4LlYHPXZ3ntVWvRsq0cwzl02', 'kochen', true),
            new _models_match__WEBPACK_IMPORTED_MODULE_1__["Match"]('kycsoFi1RPaNy3hJxwmFhbD032I3', 'xMFp4LlYHPXZ3ntVWvRsq0cwzl02', 'kochen', true),
            new _models_match__WEBPACK_IMPORTED_MODULE_1__["Match"]('kycsoFi1RPaNy3hJxwmFhbD032I3', 'xMFp4LlYHPXZ3ntVWvRsq0cwzl02', 'kochen', true)
        ];
        this.matchrequests = [
            new _models_match__WEBPACK_IMPORTED_MODULE_1__["Match"]('a5WsJoGC2kbu0zto57mP', 'xMFp4LlYHPXZ3ntVWvRsq0cwzl02', 'schwimmen', false)
        ];
        // this.pushMatchToAcceptedMatches();
        // this.pushMatchToMatchrequests();
    };
    MatchListComponent.prototype.pushMatchToAcceptedMatches = function () {
        for (var i = 0; i > this.allMatches.length; i++) {
            var j = 0;
            if (this.allMatches[i].accepted === true) {
                this.acceptedMatches[j] = this.allMatches[i];
                j++;
            }
        }
    };
    MatchListComponent.prototype.pushMatchToMatchrequests = function () {
        for (var i = 0; i > this.allMatches.length; i++) {
            var j = 0;
            if (this.allMatches[i].accepted === false) {
                this.matchrequests[i] = this.allMatches[i];
                j++;
            }
        }
    };
    MatchListComponent.prototype.contactUser = function (initiatorID, partnerID) {
        // TODO: cretae new chatroom and redirect to the chatroom
        // tslint:disable-next-line:max-line-length
        // this.chatservice.create(initiatorID, partnerID).subscribe( this.router.navigate(['/'])).catch( this.router.navigate(['/']);) currently only pseudocode
    };
    MatchListComponent.prototype.deleteMatchrequest = function (matchId) {
        // TODO: delete the specific matchrequest
        this.matchStoreService.deleteMatch(matchId);
    };
    MatchListComponent.prototype.openModal = function (id) {
        console.log('id: ' + id);
        this.modalIsOpen = true;
        this.display = 'block';
        // this.allMatches.forEach( match => {
        //   if (match.id === id) {
        //     this.openedModal = match;
        //   }
        // });
    };
    MatchListComponent.prototype.closeModal = function () {
        this.display = 'none';
        this.modalIsOpen = false;
    };
    MatchListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-match-list',
            template: __webpack_require__(/*! ./match-list.component.html */ "./src/app/components/match-list/match-list.component.html"),
            styles: [__webpack_require__(/*! ./match-list.component.scss */ "./src/app/components/match-list/match-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_match_store_service__WEBPACK_IMPORTED_MODULE_2__["MatchStoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], MatchListComponent);
    return MatchListComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <!--when the bug of new logging in is solved, we can use the following line\r\n  <nav *ngIf=\"router.url !== '/login'\" class=\"navbar navbar-light navbar-expand-lg shadow\">-->\r\n\r\n  <nav class=\"navbar fixed-top navbar-light navbar-expand-lg bg-white shadow\">\r\n    <!--toggle only visible for screens smaller than lg-->\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarLinks\" aria-controls=\"navbarLinks\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\">\r\n        <img src=\"../../../assets/images/navbarLogo.png\" width=\"40\" height=\"40\" class=\"d-inline-block align-top\" alt=\"Tandem Logo\">\r\n      </a>\r\n\r\n      <!--navbar links-->\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarLinks\">\r\n        <!--left aligned links-->\r\n        <ul *ngIf=\"isLoggedIn()\" class=\"navbar-nav mr-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/home']\" [routerLinkActive]=\"['active']\">{{ 'navbar.homeLink' | translate }}</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/profile']\" [routerLinkActive]=\"['active']\">{{ 'navbar.profileLink' | translate }}</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/search']\" [routerLinkActive]=\"['active']\">{{ 'navbar.searchLink' | translate }}</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/matches']\" [routerLinkActive]=\"['active']\">{{ 'navbar.matchesLink' | translate }}</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/chats']\" [routerLinkActive]=\"['active']\">{{ 'navbar.chatLink' | translate }}</a>\r\n          </li>\r\n        </ul>\r\n\r\n        <!-- right aligned links-->\r\n        <ul class=\"navbar-nav ml-auto\">\r\n          <!--dropdown menu-->\r\n          <li class=\"nav-item dropdown\">\r\n            <!--showing english or german language, via checking whether english language was clicked or not -->\r\n            <a *ngIf=\"showEnglish; else elseBlock\" class=\"nav-link dropdown-toggle pointer-cursor border-right\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n              En\r\n            </a>\r\n            <!--German language-->\r\n            <ng-template #elseBlock>\r\n                <a class=\"dropdown-toggle nav-link pointer-cursor border-right\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    De\r\n                </a>\r\n            </ng-template>\r\n            <!--dropdown links-->\r\n            <div class=\"dropdown-menu\">\r\n              <a class=\"dropdown-item pointer-cursor\" (click)=\"switchLanguage('de')\">De</a>\r\n              <div class=\"dropdown-divider\"></div>\r\n              <a class=\"dropdown-item pointer-cursor\" (click)=\"switchLanguage('en')\" >En</a>\r\n            </div>\r\n          </li>\r\n\r\n          <!--username-->\r\n          <span *ngIf=\"isLoggedIn()\" class=\"navbar-text font-italic mx-lg-2\">\r\n            Username\r\n          </span>\r\n\r\n          <!--Logout-->\r\n          <li *ngIf=\"isLoggedIn()\" class=\"nav-item border-left\">\r\n            <a class=\"nav-link pointer-cursor\" (click)=\"logout()\">{{ 'navbar.logout' | translate }}</a>\r\n          </li>\r\n          <!--Login-->\r\n          <li *ngIf=\"!isLoggedIn() \" class=\"nav-item border-left\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/login']\">{{ 'navbar.login' | translate }}</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n  </nav>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_user_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/user-store.service */ "./src/app/services/user-store.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(translateService, authService, router, userStoreService) {
        this.translateService = translateService;
        this.authService = authService;
        this.router = router;
        this.userStoreService = userStoreService;
        // default value for not showing the page in english
        this.showEnglish = false;
        translateService.setDefaultLang('de');
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.isLoggedIn = function () {
        return this.authService.isloggedIn();
    };
    NavbarComponent.prototype.switchLanguage = function (language) {
        this.translateService.use(language);
        if (language === 'en') {
            this.showEnglish = true;
        }
        else {
            this.showEnglish = false;
        }
    };
    NavbarComponent.prototype.logout = function () {
        this.authService.logout();
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_user_store_service__WEBPACK_IMPORTED_MODULE_1__["UserStoreService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile-page/profile-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/profile-page/profile-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-1\"></div>\r\n  <div class=\"col-10\">\r\n    <div class=\"card mx-auto my-5 shadow\">\r\n        <div class=\"card-header bg-warning text-center h5\">\r\n            {{'profile.headerTitle' | translate }}\r\n          </div>\r\n      <div class=\"card-body\">\r\n          <form class=\"\" [formGroup]=\"editForm\" (ngSubmit)=\"editFormSave()\" novalidate>\r\n            <div class=\"row\">\r\n              <div class=\"form-group col-md-6\">\r\n                  <label for=\"editFormFirstname\">{{'register.firstname' | translate }}*</label>\r\n                  <input type=\"text\" class=\"form-control shadow-sm\" id=\"editFormFirstname\" formControlName=\"editFormFirstname\" placeholder=\"{{'register.firstname' | translate }}\">\r\n              </div>\r\n              <div class=\"form-group col-md-6\">\r\n                  <label for=\"editFormLastname\">{{'register.lastname' | translate }}*</label>\r\n                  <input type=\"text\" class=\"form-control shadow-sm\" id=\"editFormLastname\" formControlName=\"editFormLastname\" placeholder=\"{{'register.lastname' | translate }}\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 form-group\">\r\n                <label for=\"editFormSex\">{{'register.sex' | translate }}*</label>\r\n                <div class=\"form-control shadow-sm bg-light\"id=\"editFormSex\" disabled>{{sex}}</div>\r\n\r\n              </div>\r\n              <div class=\"col-md-6 form-group\">\r\n                  <label>{{'register.mail' | translate }}*</label>\r\n                  <input type=\"text\" class=\"form-control shadow-sm\" id=\"editFormMail\" formControlName=\"editFormMail\" placeholder=\"name@example.com\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 form-group\">\r\n                <label for=\"editFormCity\">{{'register.city' | translate }}*</label>\r\n                <ng-multiselect-dropdown  class=\"form-control shadow-sm\" id=\"editFormCity\" #editFormCity=\"ngModel\"\r\n                  [placeholder]=\"'register.pleaseChoose' | translate\"\r\n                  [data]=\"cities\"\r\n                  [(ngModel)]=\"selectedCity\" [ngModelOptions]=\"{ standalone : true }\"\r\n                  [settings]=\"selectCitySettings\" required>\r\n                </ng-multiselect-dropdown>\r\n              </div>\r\n              <div class=\"col-md-6 form-group\">\r\n                  <label for=\"editFormBirthday\">{{'register.birthday' | translate }}*</label>\r\n                  <input type=\"text\"\r\n                  [placeholder]=\"'register.birthday' | translate\"\r\n                  class=\"form-control shadow-sm bg-light\"\r\n                  bsDatepicker id=\"editFormBirthday\" formControlName=\"editFormBirthday\"\r\n                  [bsConfig]=\"{ dateInputFormat: 'MM.DD.YYYY', colorTheme: 'theme-orange' }\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 form-group\">\r\n                <label for=\"editFormOffers\">{{'register.offers' | translate }}:*</label>\r\n                <ng-multiselect-dropdown  class=\"form-control shadow-sm\" id=\"editFormOffers\" #editFormOffers=\"ngModel\"\r\n                   [placeholder]=\"'register.pleaseChoose' | translate\"\r\n                   [data]=\"offers\"\r\n                   [(ngModel)]=\"selectedOffers\" [ngModelOptions]=\"{ standalone : true }\"\r\n                   [settings]=\"selectOffersActivitiesSettings\" required>\r\n                </ng-multiselect-dropdown>\r\n              </div>\r\n              <div class=\"col-md-6 form-group\">\r\n                <label for=\"editFormActivities\">{{'register.activities' | translate }}:*</label>\r\n                <ng-multiselect-dropdown  class=\"form-control shadow-sm\" id=\"editFormActivities\" #editFormActivities=\"ngModel\"\r\n                   [placeholder]=\"'register.pleaseChoose' | translate\"\r\n                   [data]=\"activities\"\r\n                   [(ngModel)]=\"selectedActivities\" [ngModelOptions]=\"{ standalone : true }\"\r\n                   [settings]=\"selectOffersActivitiesSettings\" required>\r\n                </ng-multiselect-dropdown>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 form-group\">\r\n                  <label>{{'profile.newPassword' | translate }}*</label>\r\n                  <input type=\"password\" class=\"form-control shadow-sm\" id=\"editFormPassword\" formControlName=\"editFormPassword\" placeholder=\"{{'register.password' | translate }}\">\r\n              </div>\r\n              <div class=\"col-md-6 form-group\">\r\n                  <label>{{'profile.newPasswordConfirm' | translate }}*</label>\r\n                  <input type=\"password\" class=\"form-control shadow-sm\" id=\"editFormPasswordConfirm\" formControlName=\"editFormPasswordConfirm\" placeholder=\"{{'register.passwordConfirm' | translate }}\">\r\n              </div>\r\n            </div>\r\n\r\n            <!--Validator messages-->\r\n            <div class=\"alert-danger pl-2\" *ngIf=\"editFormFirstname.errors && (editFormFirstname.touched || editFormFirstname.dirty)\">\r\n                <div *ngIf=\"editFormFirstname.errors.required\">{{'register.firstname' | translate }} {{'validators.required' | translate }}</div>\r\n                <div *ngIf=\"editFormFirstname.errors.pattern\">{{'validators.letterSpaces' | translate }}</div>\r\n              </div>\r\n\r\n              <div class=\"alert-danger pl-2\" *ngIf=\"editFormLastname.errors && (editFormLastname.touched || editFormLastname.dirty)\">\r\n                <div *ngIf=\"editFormLastname.errors.required\">{{'register.lastname' | translate }} {{'validators.required' | translate }}</div>\r\n                <div *ngIf=\"editFormLastname.errors.pattern\">{{'validators.letterSpaces' | translate }}</div>\r\n              </div>\r\n\r\n              <div class=\"alert-danger pl-2\" *ngIf=\"editFormMail.errors && (editFormMail.touched || editFormMail.dirty)\">\r\n                <div *ngIf=\"editFormMail.errors.required\">{{'register.mail' | translate }} {{'validators.required' | translate }}</div>\r\n                <div *ngIf=\"editFormMail.errors.email\">{{'validators.email' | translate }}</div>\r\n              </div>\r\n\r\n              <div class=\"alert-danger pl-2\" *ngIf=\"editFormPassword.errors && (editFormPassword.touched || editFormPassword.dirty)\">\r\n                <div *ngIf=\"editFormPassword.errors.minlength\">{{'validators.passwordPattern' | translate }}</div>\r\n              </div>\r\n\r\n              <div class=\"alert-danger pl-2\" *ngIf=\"editFormPasswordConfirm.errors && (editFormPasswordConfirm.touched || editFormPasswordConfirm.dirty)\">\r\n                <div *ngIf=\"editFormPasswordConfirm.errors.minlength\">{{'validators.passwordPattern' | translate }}</div>\r\n              </div>\r\n\r\n              <div class=\"alert-danger pl-2\" *ngIf=\"editFormPassword.value != editFormPasswordConfirm.value && editFormPasswordConfirm.value != null\">\r\n                  {{'validators.passwordMismatch' | translate }}\r\n              </div>\r\n\r\n              <div class=\"alert-danger pl-2\" *ngIf=\"editFormOffers.errors && (editFormOffers.touched || editFormOffers.dirty)\">\r\n                  <div *ngIf=\"editFormOffers.errors.required\" class=\"alert-danger\">{{'validators.minOffers' | translate }}</div>\r\n              </div>\r\n\r\n              <div class=\"alert-danger pl-2\" *ngIf=\"editFormCity.errors && (editFormCity.touched || editFormCity.dirty)\">\r\n                <div *ngIf=\"editFormCity.errors.required\" class=\"alert-danger\">{{'validators.city' | translate }}</div>\r\n            </div>\r\n\r\n              <div class=\"alert-danger pl-2\" *ngIf=\"editFormActivities.errors && (editFormActivities.touched || editFormActivities.dirty)\">\r\n                  <div *ngIf=\"editFormActivities.errors.required\" class=\"alert-danger\">{{'validators.minActivities' | translate }}</div>\r\n              </div>\r\n              <!--End-Validator messages-->\r\n\r\n              <div class=\"btn-toolbar d-flex justify-content-center\" role=\"toolbar\">\r\n              <div class=\"btn-group mr-1 mr-md-3\">\r\n                <button type=\"button\" type=\"submit\" class=\"btn btn-warning d-flex mx-auto mt-2\" [disabled]=\"(!editForm.valid || !editFormOffers.valid || !editFormActivities.valid || !editFormCity.valid)\">{{'register.saveButton' | translate }}</button>\r\n              </div>\r\n              <div class=\"btn-group ml-md-3 mr-1 mr-md-3\">\r\n                <button type=\"button\" [routerLink]=\"['/home']\" class=\"btn btn-outline-warning d-flex mx-auto mt-2\" >{{'register.quitButton' | translate }}</button>\r\n              </div>\r\n              <div class=\"btn-group ml-md-3\">\r\n                <button type=\"button\"  class=\"btn btn-outline-danger d-flex mx-auto mt-2\" >{{'profile.deleteButton' | translate }}</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-1\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/profile-page/profile-page.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/profile-page/profile-page.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#editFormOffers {\n  padding: 0;\n  border: none; }\n\n#editFormActivities {\n  padding: 0;\n  border: none; }\n\n#editFormCity {\n  padding: 0;\n  border: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlLXBhZ2UvRDpcXFVzZXJzXFxCS1VcXEx1aXNSYXBoYWVsUmFtZXJcXERlc2t0b3BcXFVuaS1aZXVnXFw2LiBTZW1lc3RlclxcV2ViUHJvZ1xcdGFuZGVtUGFydG5lcjNcXGFuZ3VsYXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHByb2ZpbGUtcGFnZVxccHJvZmlsZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFHZDtFQUNFLFVBQVU7RUFDVixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxVQUFVO0VBQ1YsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlLXBhZ2UvcHJvZmlsZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2VkaXRGb3JtT2ZmZXJze1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4jZWRpdEZvcm1BY3Rpdml0aWVze1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4jZWRpdEZvcm1DaXR5IHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/profile-page/profile-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/profile-page/profile-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProfilePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageComponent", function() { return ProfilePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user-store.service */ "./src/app/services/user-store.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_activities_offers_cities_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/activities-offers-cities-store.service */ "./src/app/services/activities-offers-cities-store.service.ts");







var ProfilePageComponent = /** @class */ (function () {
    function ProfilePageComponent(formBuilder, router, userStoreService, authService, activitiesOffersCitiesStoreService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userStoreService = userStoreService;
        this.authService = authService;
        this.activitiesOffersCitiesStoreService = activitiesOffersCitiesStoreService;
        // for selecting fields
        this.selectCitySettings = {};
        this.selectOffersActivitiesSettings = {};
        this.editForm = this.createEditForm();
    }
    ProfilePageComponent.prototype.ngOnInit = function () {
        // initialzie all available offers & activities
        this.offers = this.activitiesOffersCitiesStoreService.getAllOffers();
        this.activities = this.activitiesOffersCitiesStoreService.getAllActivities();
        this.cities = this.activitiesOffersCitiesStoreService.getAllCities();
        this.sex = this.parseSexValueForFrontend(this.authService.getUser().sex);
        this.selectedActivities = this.authService.getUser().activities;
        this.selectedOffers = this.authService.getUser().offers,
            this.selectedCity = this.authService.getUser().city;
        this.editForm.get('editFormFirstname').setValue(this.authService.getUser().firstname);
        this.editForm.get('editFormLastname').setValue(this.authService.getUser().lastname);
        this.editForm.get('editFormMail').setValue(this.authService.firebaseUser.email);
        this.editForm.get('editFormBirthday').setValue(this.authService.getUser().dateOfBirth);
        this.initializeMultiselectSettings();
    };
    ProfilePageComponent.prototype.createEditForm = function () {
        // create the formGroup
        return this.formBuilder.group({
            // the field only contains letters or spaces
            editFormFirstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*')]],
            // the field only contains letters or spaces
            editFormLastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*')]],
            editFormMail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            editFormBirthday: [{ value: '', disabled: true }],
            // at least 6 characters, must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number, can contain special characters
            // tslint:disable-next-line:max-line-length
            editFormPassword: ['', [/*Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$'),*/ _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(16)]],
            // at least 6 characters, must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number, can contain special characters
            // tslint:disable-next-line:max-line-length
            editFormPasswordConfirm: ['', [/*Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$'),*/ _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(16)]]
            // adds the custom validator for validating the passwords og their matching
        }, { validator: this.passwordMatchValidator });
    };
    ProfilePageComponent.prototype.initializeMultiselectSettings = function () {
        this.selectCitySettings = {
            singleSelection: true,
            idField: 'item_id',
            textField: 'item_text',
            enableCheckAll: false,
            allowSearchFilter: false,
            closeDropDownOnSelection: true
        };
        // selecting settings for the select fields of offers and activities
        this.selectOffersActivitiesSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            enableCheckAll: false,
            itemsShowLimit: 3,
            allowSearchFilter: false
        };
    };
    ProfilePageComponent.prototype.parseSexValueForFrontend = function (sex) {
        if (sex === 'm') {
            return 'male';
        }
        else if (sex === 'f') {
            return 'female';
        }
        else {
            return 'there was no choice of sex';
        }
    };
    ProfilePageComponent.prototype.parseSexValueForBackend = function (sex) {
        if (sex === 'male' || sex === 'männlich') {
            return 'm';
        }
        else if (sex === 'female' || sex === 'weiblich') {
            return 'f';
        }
        else {
            return 'there was no choice of sex';
        }
    };
    // validate the passwords whether they are matching
    ProfilePageComponent.prototype.passwordMatchValidator = function (control) {
        if (control.get('editFormPassword').value !== control.get('editFormPasswordConfirm').value) {
            return { invalid: true };
        }
    };
    // validate the input & select fields and send the mail & password to Firebase Authentication
    // after that the rest of userdata incl. the recieved UserID will be send to the API(Firebase Cloud Functions)
    ProfilePageComponent.prototype.editFormSave = function () {
        if (this.editForm.invalid) {
            return;
        }
        // get data from the inputfields
        var userdata = {
            firstname: this.editForm.value.editFormFirstname,
            lastname: this.editForm.value.editFormLastname,
            city: this.selectedCity[0],
            dateOfBirth: this.editForm.value.editFormBirthday,
            // get the only one item from selectedSex-Array
            sex: this.parseSexValueForBackend(this.sex),
            activities: this.selectedActivities,
            offers: this.selectedOffers
        };
        // mail and password are gonna be saved at Firebase Authentication and not in userdata
        var mail = this.editForm.value.editFormMail;
        var password = this.editForm.value.editFormPassword;
        if (password === !null || password === !undefined || password === !'') {
            console.log('ausgefülltes password');
            // this.authService.firebaseUser.updatePassword(password).then();
        }
        if (mail === !null || mail === !undefined || mail === !'') {
            console.log('ausgefüllte mail');
            // this.authService.firebaseUser.updateEmail(mail).then();
        }
        // // create new user in cloud firestore and take the UID from the new created User
        // this.userStoreService.updateUser(this.authService.currentUser.uid, userdata).subscribe(() => {
        //   // then go to page 'home'
        //   this.router.navigate(['/home']);
        // });
    };
    Object.defineProperty(ProfilePageComponent.prototype, "editFormFirstname", {
        // getter for the inputfields
        get: function () {
            return this.editForm.get('editFormFirstname');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfilePageComponent.prototype, "editFormLastname", {
        get: function () {
            return this.editForm.get('editFormLastname');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfilePageComponent.prototype, "editFormBirthday", {
        get: function () {
            return this.editForm.get('editFormBirthday');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfilePageComponent.prototype, "editFormMail", {
        get: function () {
            return this.editForm.get('editFormMail');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfilePageComponent.prototype, "editFormPassword", {
        get: function () {
            return this.editForm.get('editFormPassword');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfilePageComponent.prototype, "editFormPasswordConfirm", {
        get: function () {
            return this.editForm.get('editFormPasswordConfirm');
        },
        enumerable: true,
        configurable: true
    });
    ProfilePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-page',
            template: __webpack_require__(/*! ./profile-page.component.html */ "./src/app/components/profile-page/profile-page.component.html"),
            styles: [__webpack_require__(/*! ./profile-page.component.scss */ "./src/app/components/profile-page/profile-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_user_store_service__WEBPACK_IMPORTED_MODULE_4__["UserStoreService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _services_activities_offers_cities_store_service__WEBPACK_IMPORTED_MODULE_6__["ActivitiesOffersCitiesStoreService"]])
    ], ProfilePageComponent);
    return ProfilePageComponent;
}());



/***/ }),

/***/ "./src/app/components/register-page/register-page.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/register-page/register-page.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXItcGFnZS9yZWdpc3Rlci1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/register-page/register-page.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/register-page/register-page.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-1\"></div>\r\n  <div class=\"col-10\">\r\n    <div class=\"card mx-auto my-5 shadow\">\r\n        <div class=\"card-header bg-warning text-center h5\">\r\n            {{'register.headerTitle' | translate }}\r\n          </div>\r\n      <div class=\"card-body\">\r\n          <form class=\"\" [formGroup]=\"registerForm\" (ngSubmit)=\"registerFormSave()\" novalidate>\r\n            <div class=\"row\">\r\n              <div class=\"form-group col-md-6\">\r\n                  <label for=\"registerFormFirstname\">{{'register.firstname' | translate }}*</label>\r\n                  <input type=\"text\" class=\"form-control shadow-sm\" id=\"registerFormFirstname\" formControlName=\"registerFormFirstname\" placeholder=\"{{'register.firstname' | translate }}\">\r\n              </div>\r\n              <div class=\"form-group col-md-6\">\r\n                  <label for=\"registerFormLastname\">{{'register.lastname' | translate }}*</label>\r\n                  <input type=\"text\" class=\"form-control shadow-sm\" id=\"registerFormLastname\" formControlName=\"registerFormLastname\" placeholder=\"{{'register.lastname' | translate }}\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 form-group\">\r\n                <label for=\"registerFormSex\">{{'register.sex' | translate }}*</label>\r\n                <ng-multiselect-dropdown  class=\"form-control shadow-sm\" id=\"registerFormSex\" #registerFormSex=\"ngModel\"\r\n                  [placeholder]=\"'register.pleaseChoose' | translate\"\r\n                  [data]=\"sexes\"\r\n                  [(ngModel)]=\"selectedSex\" [ngModelOptions]=\"{ standalone : true }\"\r\n                  [settings]=\"selectSexSettings\" required>\r\n                </ng-multiselect-dropdown>\r\n\r\n              </div>\r\n              <div class=\"col-md-6 form-group\">\r\n                  <label>{{'register.mail' | translate }}*</label>\r\n                  <input type=\"text\" class=\"form-control shadow-sm\" id=\"registerFormMail\" formControlName=\"registerFormMail\" placeholder=\"name@example.com\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 form-group\">\r\n                <label for=\"registerFormCity\">{{'register.city' | translate }}*</label>\r\n                <ng-multiselect-dropdown  class=\"form-control shadow-sm\" id=\"registerFormCity\" #registerFormCity=\"ngModel\"\r\n                  [placeholder]=\"'register.pleaseChoose' | translate\"\r\n                  [data]=\"cities\"\r\n                  [(ngModel)]=\"selectedCity\" [ngModelOptions]=\"{ standalone : true }\"\r\n                  [settings]=\"selectCitySettings\" required>\r\n                </ng-multiselect-dropdown>\r\n              </div>\r\n              <div class=\"col-md-6 form-group\">\r\n                  <label for=\"registerFormBirthday\">{{'register.birthday' | translate }}*</label>\r\n                  <input type=\"text\"\r\n                  [placeholder]=\"'dd.mm.yyyy'\"\r\n                  class=\"form-control shadow-sm\"\r\n                  bsDatepicker id=\"registerFormBirthday\" formControlName=\"registerFormBirthday\"\r\n                  [bsConfig]=\"{ dateInputFormat: 'DD.MM.YYYY', colorTheme: 'theme-orange' }\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 form-group\">\r\n                <label for=\"registerFormOffers\">{{'register.offers' | translate }}:*</label>\r\n                <ng-multiselect-dropdown  class=\"form-control shadow-sm\" id=\"registerFormOffers\" #registerFormOffers=\"ngModel\"\r\n                   [placeholder]=\"'register.pleaseChoose' | translate\"\r\n                   [data]=\"offers\"\r\n                   [(ngModel)]=\"selectedOffers\" [ngModelOptions]=\"{ standalone : true }\"\r\n                   [settings]=\"selectOffersActivitiesSettings\" required>\r\n                </ng-multiselect-dropdown>\r\n              </div>\r\n              <div class=\"col-md-6 form-group\">\r\n                <label for=\"registerFormActivities\">{{'register.activities' | translate }}:*</label>\r\n                <ng-multiselect-dropdown  class=\"form-control shadow-sm\" id=\"registerFormActivities\" #registerFormActivities=\"ngModel\"\r\n                   [placeholder]=\"'register.pleaseChoose' | translate\"\r\n                   [data]=\"activities\"\r\n                   [(ngModel)]=\"selectedActivities\" [ngModelOptions]=\"{ standalone : true }\"\r\n                   [settings]=\"selectOffersActivitiesSettings\" required>\r\n                </ng-multiselect-dropdown>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 form-group\">\r\n                  <label>{{'register.password' | translate }}*</label>\r\n                  <input type=\"password\" class=\"form-control shadow-sm\" id=\"registerFormPassword\" formControlName=\"registerFormPassword\" placeholder=\"{{'register.password' | translate }}\">\r\n              </div>\r\n              <div class=\"col-md-6 form-group\">\r\n                  <label>{{'register.passwordConfirm' | translate }}*</label>\r\n                  <input type=\"password\" class=\"form-control shadow-sm\" id=\"registerFormPasswordConfirm\" formControlName=\"registerFormPasswordConfirm\" placeholder=\"{{'register.passwordConfirm' | translate }}\">\r\n              </div>\r\n            </div>\r\n\r\n            <!--Validator messages-->\r\n            <div class=\"alert-danger pl-2\" *ngIf=\"registerFormFirstname.errors && (registerFormFirstname.touched || registerFormFirstname.dirty)\">\r\n                <div *ngIf=\"registerFormFirstname.errors.required\">{{'register.firstname' | translate }} {{'validators.required' | translate }}</div>\r\n                <div *ngIf=\"registerFormFirstname.errors.pattern\">{{'validators.letterSpaces' | translate }}</div>\r\n              </div>\r\n\r\n              <div class=\"alert-danger pl-2\" *ngIf=\"registerFormLastname.errors && (registerFormLastname.touched || registerFormLastname.dirty)\">\r\n                <div *ngIf=\"registerFormLastname.errors.required\">{{'register.lastname' | translate }} {{'validators.required' | translate }}</div>\r\n                <div *ngIf=\"registerFormLastname.errors.pattern\">{{'validators.letterSpaces' | translate }}</div>\r\n              </div>\r\n\r\n              <div class=\"alert-danger pl-2\" *ngIf=\"registerFormMail.errors && (registerFormMail.touched || registerFormMail.dirty)\">\r\n                <div *ngIf=\"registerFormMail.errors.required\">{{'register.mail' | translate }} {{'validators.required' | translate }}</div>\r\n                <div *ngIf=\"registerFormMail.errors.email\">{{'validators.email' | translate }}</div>\r\n              </div>\r\n\r\n              <div class=\"alert-danger pl-2\" *ngIf=\"registerFormPassword.errors && (registerFormPassword.touched || registerFormPassword.dirty)\">\r\n                <div *ngIf=\"registerFormPassword.errors.required\">{{'register.password' | translate }} {{'validators.required' | translate }}</div>\r\n                <div *ngIf=\"registerFormPassword.errors.minlength\">{{'validators.passwordPattern' | translate }}</div>\r\n              </div>\r\n\r\n              <div class=\"alert-danger pl-2\" *ngIf=\"registerFormPasswordConfirm.errors && (registerFormPasswordConfirm.touched || registerFormPasswordConfirm.dirty)\">\r\n                <div *ngIf=\"registerFormPasswordConfirm.errors.required\">{{'register.passwordConfirm' | translate }} {{'validators.required' | translate }}</div>\r\n                <div *ngIf=\"registerFormPasswordConfirm.errors.minlength\">{{'validators.passwordPattern' | translate }}</div>\r\n              </div>\r\n\r\n              <div class=\"alert-danger pl-2\" *ngIf=\"registerFormPassword.value != registerFormPasswordConfirm.value && registerFormPasswordConfirm.value != null\">\r\n                  {{'validators.passwordMismatch' | translate }}\r\n              </div>\r\n\r\n              <div class=\"alert-danger pl-2\" *ngIf=\"registerFormSex.errors && (registerFormSex.touched || registerFormSex.dirty)\">\r\n                  <div *ngIf=\"registerFormSex.errors.required\" class=\"alert-danger\">{{'register.sex' | translate }} {{'validators.required' | translate }}</div>\r\n              </div>\r\n\r\n              <div class=\"alert-danger pl-2\" *ngIf=\"registerFormOffers.errors && (registerFormOffers.touched || registerFormOffers.dirty)\">\r\n                  <div *ngIf=\"registerFormOffers.errors.required\" class=\"alert-danger\">{{'validators.minOffers' | translate }}</div>\r\n              </div>\r\n\r\n              <div class=\"alert-danger pl-2\" *ngIf=\"registerFormActivities.errors && (registerFormActivities.touched || registerFormActivities.dirty)\">\r\n                  <div *ngIf=\"registerFormActivities.errors.required\" class=\"alert-danger\">{{'validators.minActivities' | translate }}</div>\r\n              </div>\r\n\r\n              <div class=\"alert-danger pl-2\" *ngIf=\"registerFormCity.errors && (registerFormCity.touched || registerFormCity.dirty)\">\r\n                <div *ngIf=\"registerFormCity.errors.required\" class=\"alert-danger\">{{'validators.city' | translate }}</div>\r\n              </div>\r\n\r\n              <div class=\"alert-danger pl-2\" *ngIf=\"registerFormBirthday.errors && (registerFormBirthday.touched || registerFormBirthday.dirty)\">\r\n                <div *ngIf=\"registerFormBirthday.errors.required\" class=\"alert-danger\">{{'validators.birthday' | translate }}</div>\r\n              </div>\r\n              <!--End-Validator messages-->\r\n\r\n              <div class=\"btn-toolbar d-flex justify-content-center\" role=\"toolbar\">\r\n              <div class=\"btn-group mr-1 mr-md-3\">\r\n                <button type=\"button\" type=\"submit\" class=\"btn btn-warning d-flex mx-auto mt-2\" [disabled]=\"(!registerForm.valid || !registerFormOffers.valid || !registerFormActivities.valid || !registerFormCity.valid)\">{{'register.saveButton' | translate }}</button>\r\n              </div>\r\n              <div class=\"btn-group ml-md-3\">\r\n                <button type=\"button\" [routerLink]=\"['/login']\" class=\"btn btn-outline-warning d-flex mx-auto mt-2\" >{{'register.quitButton' | translate }}</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-1\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/register-page/register-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/register-page/register-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: RegisterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function() { return RegisterPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user-store.service */ "./src/app/services/user-store.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_activities_offers_cities_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/activities-offers-cities-store.service */ "./src/app/services/activities-offers-cities-store.service.ts");
/* harmony import */ var ts_md5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ts-md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ts_md5__WEBPACK_IMPORTED_MODULE_7__);








var RegisterPageComponent = /** @class */ (function () {
    function RegisterPageComponent(formBuilder, router, userStoreService, authService, activitiesOffersCitiesStoreService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userStoreService = userStoreService;
        this.authService = authService;
        this.activitiesOffersCitiesStoreService = activitiesOffersCitiesStoreService;
        this.sexes = ['female', 'male'];
        this.selectOffersActivitiesSettings = {};
        this.selectSexSettings = {};
        this.selectCitySettings = {};
        this.registerForm = this.createRegisterForm();
    }
    RegisterPageComponent.prototype.ngOnInit = function () {
        // initialzie all available offers & activities
        this.offers = this.activitiesOffersCitiesStoreService.getAllOffers();
        this.activities = this.activitiesOffersCitiesStoreService.getAllActivities();
        this.cities = this.activitiesOffersCitiesStoreService.getAllCities();
        this.initializeMultiselectSettings();
    };
    RegisterPageComponent.prototype.createRegisterForm = function () {
        // create the formGroup
        return this.formBuilder.group({
            // the field only contains letters or spaces
            registerFormFirstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*')]],
            // the field only contains letters or spaces
            registerFormLastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*')]],
            registerFormMail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            registerFormBirthday: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // at least 6 characters, must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number, can contain special characters
            // tslint:disable-next-line:max-line-length
            registerFormPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, /*Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$'),*/ _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(16)]],
            // at least 6 characters, must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number, can contain special characters
            // tslint:disable-next-line:max-line-length
            registerFormPasswordConfirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, /*Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$'),*/ _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(16)]]
            // adds the custom validator for validating the passwords og their matching
        }, { validator: this.passwordMatchValidator });
    };
    RegisterPageComponent.prototype.initializeMultiselectSettings = function () {
        // selecting settings for the select fields of choosing the sex
        this.selectSexSettings = {
            singleSelection: true,
            idField: 'item_id',
            textField: 'item_text',
            enableCheckAll: false,
            allowSearchFilter: false,
            closeDropDownOnSelection: true
        };
        this.selectCitySettings = {
            singleSelection: true,
            idField: 'item_id',
            textField: 'item_text',
            enableCheckAll: false,
            allowSearchFilter: false,
            closeDropDownOnSelection: true
        };
        // selecting settings for the select fields of offers and activities
        this.selectOffersActivitiesSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            enableCheckAll: false,
            itemsShowLimit: 3,
            allowSearchFilter: false
        };
    };
    // validate the passwords whether they are matching
    RegisterPageComponent.prototype.passwordMatchValidator = function (control) {
        if (control.get('registerFormPassword').value !== control.get('registerFormPasswordConfirm').value) {
            return { invalid: true };
        }
    };
    // validate the input & select fields and send the mail & password to Firebase Authentication
    // after that the rest of userdata incl. the recieved UserID will be send to the API(Firebase Cloud Functions)
    RegisterPageComponent.prototype.registerFormSave = function () {
        var _this = this;
        if (this.registerForm.invalid) {
            return;
        }
        // get data from the inputfields
        var userdata = {
            firstname: this.registerForm.value.registerFormFirstname,
            lastname: this.registerForm.value.registerFormLastname,
            city: this.selectedCity,
            dateOfBirth: this.registerForm.value.registerFormBirthday,
            // get the only one item from selectedSex-Array
            sex: this.parseSexValueForBackend(this.selectedSex[0]),
            activities: this.selectedActivities,
            offers: this.selectedOffers,
            mail: this.registerForm.value.registerFormMail,
            password: ts_md5__WEBPACK_IMPORTED_MODULE_7__["Md5"].hashStr(this.registerForm.value.registerFormPassword)
        };
        // create new user in cloud firestore and take the UID from the new created User
        this.userStoreService.createUser(userdata).subscribe(function () {
            // then go to page 'home'
            _this.router.navigate(['/home']);
        });
    };
    // shorten the male/female-word and return one letter or 'no choice'
    RegisterPageComponent.prototype.parseSexValueForBackend = function (sex) {
        if (sex === 'male' || sex === 'männlich') {
            return 'm';
        }
        else if (sex === 'female' || sex === 'weiblich') {
            return 'f';
        }
        else {
            return 'there was no choice of sex';
        }
    };
    Object.defineProperty(RegisterPageComponent.prototype, "registerFormFirstname", {
        // getter for the inputfields
        get: function () {
            return this.registerForm.get('registerFormFirstname');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterPageComponent.prototype, "registerFormLastname", {
        get: function () {
            return this.registerForm.get('registerFormLastname');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterPageComponent.prototype, "registerFormBirthday", {
        get: function () {
            return this.registerForm.get('registerFormBirthday');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterPageComponent.prototype, "registerFormMail", {
        get: function () {
            return this.registerForm.get('registerFormMail');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterPageComponent.prototype, "registerFormPassword", {
        get: function () {
            return this.registerForm.get('registerFormPassword');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterPageComponent.prototype, "registerFormPasswordConfirm", {
        get: function () {
            return this.registerForm.get('registerFormPasswordConfirm');
        },
        enumerable: true,
        configurable: true
    });
    RegisterPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-page',
            template: __webpack_require__(/*! ./register-page.component.html */ "./src/app/components/register-page/register-page.component.html"),
            styles: [__webpack_require__(/*! ./register-page.component.css */ "./src/app/components/register-page/register-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_user_store_service__WEBPACK_IMPORTED_MODULE_4__["UserStoreService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _services_activities_offers_cities_store_service__WEBPACK_IMPORTED_MODULE_6__["ActivitiesOffersCitiesStoreService"]])
    ], RegisterPageComponent);
    return RegisterPageComponent;
}());



/***/ }),

/***/ "./src/app/components/result-page/result-page.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/result-page/result-page.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  result-page works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/result-page/result-page.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/result-page/result-page.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzdWx0LXBhZ2UvcmVzdWx0LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/result-page/result-page.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/result-page/result-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResultPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultPageComponent", function() { return ResultPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResultPageComponent = /** @class */ (function () {
    function ResultPageComponent() {
    }
    ResultPageComponent.prototype.ngOnInit = function () {
    };
    ResultPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-result-page',
            template: __webpack_require__(/*! ./result-page.component.html */ "./src/app/components/result-page/result-page.component.html"),
            styles: [__webpack_require__(/*! ./result-page.component.scss */ "./src/app/components/result-page/result-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResultPageComponent);
    return ResultPageComponent;
}());



/***/ }),

/***/ "./src/app/components/search-page/search-page.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/search-page/search-page.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-1\"></div>\r\n  <div class=\"col-10\">\r\n    <div class=\"card mx-auto my-5 shadow\">\r\n      <!--header-->\r\n      <div class=\"card-header h5 bg-transparent d-flex justify-content-between border-warning p-0\">\r\n        <div class=\"col-md-6 font-weight-light text-center pointer-cursor align-self-center border-right btn-outline-warning py-3\"\r\n          data-toggle=\"collapse\" href=\"#collapseNewSearch\"\r\n          [ngClass]=\"{'active':newSearchCollapsed === true}\"\r\n          role=\"button\" aria-expanded=\"false\"\r\n          aria-controls=\"collapseNewSearch\" (click)=\"recentRequestCollapsed=false\" (click)=\"newSearchCollapsed=true\">\r\n          {{'search.newSearch' | translate }}\r\n        </div>\r\n        <div class=\"col-md-6 font-weight-light text-center pointer-cursor btn-outline-warning py-3\"\r\n            [ngClass]=\"{'active':recentRequestCollapsed === true}\"\r\n            data-toggle=\"collapse\" href=\"#collapseRecentSearches\"\r\n            role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseRecentSearches\"\r\n            (click)=\"newSearchCollapsed=false\" (click)=\"recentRequestCollapsed=true\">\r\n            {{'search.recentSearches' | translate }}\r\n        </div>\r\n      </div><!--header-->\r\n\r\n      <!--new search area-->\r\n      <div *ngIf=\"newSearchCollapsed\" class=\"card-body collapse\" id=\"collapseNewSearch\">\r\n        <form class=\"\" [formGroup]=\"searchForm\" (ngSubmit)=\"newSearchSave()\" novalidate>\r\n          <div class=\"row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <label for=\"searchFormOffer\">{{'search.offer' | translate }}:*</label>\r\n              <ng-multiselect-dropdown  class=\"form-control shadow-sm\" id=\"searchFormOffer\" #searchFormOffer=\"ngModel\"\r\n                [placeholder]=\"'search.offer' | translate\"\r\n                [data]=\"offers\"\r\n                [(ngModel)]=\"selectedOffer\" [ngModelOptions]=\"{ standalone : true }\"\r\n                [settings]=\"selectOnlyOneSettings\" required>\r\n              </ng-multiselect-dropdown>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 form-group\">\r\n              <label for=\"searchFormCity\">{{'search.city' | translate }}</label>\r\n              <ng-multiselect-dropdown  class=\"form-control shadow-sm\" id=\"searchFormCity\" #searchFormCity=\"ngModel\"\r\n                [placeholder]=\"'register.pleaseChoose' | translate\"\r\n                [data]=\"cities\"\r\n                [(ngModel)]=\"selectedCity\" [ngModelOptions]=\"{ standalone : true }\"\r\n                [settings]=\"selectOnlyOneSettings\">\r\n              </ng-multiselect-dropdown>\r\n            </div>\r\n            <div class=\"col-md-6 form-group\">\r\n              <label for=\"searchFormActivities\">{{'search.activities' | translate }}:</label>\r\n              <ng-multiselect-dropdown  class=\"form-control shadow-sm\" id=\"searchFormActivities\" #searchFormActivities=\"ngModel\"\r\n                 [placeholder]=\"'register.pleaseChoose' | translate\"\r\n                 [data]=\"activities\"\r\n                 [(ngModel)]=\"selectedActivities\" [ngModelOptions]=\"{ standalone : true }\"\r\n                 [settings]=\"selectActivitiesSettings\">\r\n              </ng-multiselect-dropdown>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 form-group\">\r\n              <label for=\"searchFormSex\">{{'register.sex' | translate }}:</label>\r\n              <ng-multiselect-dropdown  class=\"form-control shadow-sm\" id=\"searchFormSex\" #searchFormSex=\"ngModel\"\r\n                [placeholder]=\"'register.pleaseChoose' | translate\"\r\n                [data]=\"sexes\"\r\n                [(ngModel)]=\"selectedSex\" [ngModelOptions]=\"{ standalone : true }\"\r\n                [settings]=\"selectOnlyOneSettings\">\r\n              </ng-multiselect-dropdown>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 form-group\">\r\n                <label>{{'search.minAge' | translate }}</label>\r\n                <input type=\"number\" class=\"form-control shadow-sm\" id=\"searchFormMinAge\" formControlName=\"searchFormMinAge\" placeholder=\"{{'search.minAge' | translate }}\">\r\n            </div>\r\n            <div class=\"col-md-6 form-group\">\r\n                <label>{{'search.maxAge' | translate }}</label>\r\n                <input type=\"number\" class=\"form-control shadow-sm\" id=\"searchFormMaxAge\" formControlName=\"searchFormMaxAge\" placeholder=\"{{'search.maxAge' | translate }}\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"alert-danger pl-2\" *ngIf=\"searchFormOffer.errors && (searchFormOffer.touched || searchFormOffer.dirty)\">\r\n            <div *ngIf=\"searchFormOffer.errors.required\" class=\"alert-danger\">{{'validators.minOffers' | translate }}</div>\r\n          </div>\r\n\r\n          <div class=\"alert-danger pl-2\" *ngIf=\"searchFormMinAge.value > searchFormMaxAge.value\">\r\n            {{'validators.ageMismatch' | translate }}\r\n          </div>\r\n\r\n          <div class=\"row\" role=\"toolbar\">\r\n            <div class=\"col-md-6\">\r\n              <button type=\"button\" type=\"submit\" class=\"btn btn-warning d-flex mx-auto ml-md-auto mt-2\"\r\n                      [disabled]=\"!searchFormOffer.valid || (searchFormMinAge.value > searchFormMaxAge.value)\">\r\n                      {{'search.searchButton' | translate }}\r\n              </button>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <button type=\"button\" [routerLink]=\"['/home']\" class=\"btn btn-outline-warning d-flex mx-auto mr-md-auto mt-2\" >{{'register.quitButton' | translate }}</button>\r\n            </div>\r\n          </div>\r\n\r\n        </form>\r\n      </div>\r\n\r\n      <!--recent searchrequests area-->\r\n      <div *ngIf=\"recentRequestCollapsed\" class=\"card-body collapse\" id=\"collapseRecentSearches\">\r\n        <div *ngFor=\"let request of recentSearchrequests\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\">\r\n              <a class=\"pointer-cursor\" (click)=\"useRecentSearchrequest(request)\">\r\n                <h5 class=\"font-weight-light\">{{request.offerParam}}</h5>\r\n                <h6 class=\"font-weight-light\">{{request.minAgeParam}} - {{request.maxAgeParam}} Jahre </h6>\r\n                <h6 class=\"font-weight-light\">{{request.sexParam}}</h6>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div><!--ngfor-->\r\n      </div><!--recent searchrequests-->\r\n\r\n    </div>\r\n  </div><!--col-10-->\r\n  <div class=\"col-1\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/search-page/search-page.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/search-page/search-page.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoLXBhZ2Uvc2VhcmNoLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/search-page/search-page.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/search-page/search-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: SearchPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageComponent", function() { return SearchPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_activities_offers_cities_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/activities-offers-cities-store.service */ "./src/app/services/activities-offers-cities-store.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/search.service */ "./src/app/services/search.service.ts");






var SearchPageComponent = /** @class */ (function () {
    function SearchPageComponent(formBuilder, router, activitiesOffersCitiesStoreService, searchService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.activitiesOffersCitiesStoreService = activitiesOffersCitiesStoreService;
        this.searchService = searchService;
        this.sexes = ['female', 'male', 'both'];
        this.selectOnlyOneSettings = {};
        this.selectActivitiesSettings = {};
        // getting active & collapsed state
        this.newSearchCollapsed = false;
        this.recentRequestCollapsed = false;
        this.searchForm = this.createSearchForm();
    }
    SearchPageComponent.prototype.ngOnInit = function () {
        // initialzie all available offers & activities
        this.offers = this.activitiesOffersCitiesStoreService.getAllOffers();
        this.activities = this.activitiesOffersCitiesStoreService.getAllActivities();
        this.cities = this.activitiesOffersCitiesStoreService.getAllCities();
        this.initializeMultiselectSettings();
        // TODO: implement the currentUser
        this.recentSearchrequests = this.searchService.getRecentSearchrequestsForSpecificUser('2');
    };
    SearchPageComponent.prototype.createSearchForm = function () {
        // create the formGroup
        return this.formBuilder.group({
            searchFormMinAge: [''],
            searchFormMaxAge: ['']
        }, { validator: this.ageCheckValidator });
    };
    SearchPageComponent.prototype.initializeMultiselectSettings = function () {
        this.selectOnlyOneSettings = {
            singleSelection: true,
            idField: 'item_id',
            textField: 'item_text',
            enableCheckAll: false,
            allowSearchFilter: false,
            closeDropDownOnSelection: true
        };
        // selecting settings for the select fields of offers and activities
        this.selectActivitiesSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            enableCheckAll: false,
            itemsShowLimit: 3,
            allowSearchFilter: false
        };
    };
    SearchPageComponent.prototype.ageCheckValidator = function (control) {
        if (control.get('searchFormMinAge').value > control.get('searchFormMaxAge').value) {
            return { invalid: true };
        }
    };
    SearchPageComponent.prototype.newSearchSave = function () {
        var searchdata = {
            offerParam: this.selectedOffer,
            activities: this.selectedActivities,
            sexParam: this.parseSexValueForBackend(this.selectedSex),
            minAgeParam: this.searchForm.value.searchFormMinAge,
            maxAgeParam: this.searchForm.value.searchFormMaxAge
        };
        this.searchService.createSearchrequest(searchdata);
    };
    SearchPageComponent.prototype.useRecentSearchrequest = function (request) {
        this.searchService.takeExistingSearchrequest(request);
    };
    // shorten the male/female-word and return one letter or 'no choice'
    SearchPageComponent.prototype.parseSexValueForBackend = function (sex) {
        if (sex === 'male' || sex === 'männlich') {
            return 'm';
        }
        else if (sex === 'female' || sex === 'weiblich') {
            return 'f';
        }
        else if (sex === 'both' || sex === 'egal') {
            return 'b';
        }
        else {
            return 'there was no choice of sex';
        }
    };
    Object.defineProperty(SearchPageComponent.prototype, "searchFormMinAge", {
        get: function () {
            return this.searchForm.get('searchFormMinAge');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchPageComponent.prototype, "searchFormMaxAge", {
        get: function () {
            return this.searchForm.get('searchFormMaxAge');
        },
        enumerable: true,
        configurable: true
    });
    SearchPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-search-page',
            template: __webpack_require__(/*! ./search-page.component.html */ "./src/app/components/search-page/search-page.component.html"),
            styles: [__webpack_require__(/*! ./search-page.component.scss */ "./src/app/components/search-page/search-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_activities_offers_cities_store_service__WEBPACK_IMPORTED_MODULE_1__["ActivitiesOffersCitiesStoreService"],
            src_app_services_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"]])
    ], SearchPageComponent);
    return SearchPageComponent;
}());



/***/ }),

/***/ "./src/app/models/match.ts":
/*!*********************************!*\
  !*** ./src/app/models/match.ts ***!
  \*********************************/
/*! exports provided: Match */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Match", function() { return Match; });
var Match = /** @class */ (function () {
    function Match(initiatorID, partnerID, matchedOffer, accepted) {
        this.initiatorID = initiatorID;
        this.partnerID = partnerID;
        this.matchedOffer = matchedOffer;
        this.accepted = accepted;
    }
    return Match;
}());



/***/ }),

/***/ "./src/app/models/searchrequest.ts":
/*!*****************************************!*\
  !*** ./src/app/models/searchrequest.ts ***!
  \*****************************************/
/*! exports provided: Searchrequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Searchrequest", function() { return Searchrequest; });
var Searchrequest = /** @class */ (function () {
    function Searchrequest(minAgeParam, maxAgeParam, sexParam, offerParam) {
        this.minAgeParam = minAgeParam;
        this.maxAgeParam = maxAgeParam;
        this.sexParam = sexParam;
        this.offerParam = offerParam;
    }
    return Searchrequest;
}());



/***/ }),

/***/ "./src/app/services/activities-offers-cities-store.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/services/activities-offers-cities-store.service.ts ***!
  \********************************************************************/
/*! exports provided: ActivitiesOffersCitiesStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitiesOffersCitiesStoreService", function() { return ActivitiesOffersCitiesStoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ActivitiesOffersCitiesStoreService = /** @class */ (function () {
    function ActivitiesOffersCitiesStoreService() {
        this.offers = ['spanisch', 'kochen'];
        this.activities = ['kochen', 'turnen', 'schwimmen', 'rudern'];
        this.cities = ['Hamburg', 'Berlin', 'München', 'Hannover'];
    }
    ActivitiesOffersCitiesStoreService.prototype.getAllOffers = function () {
        return this.offers;
    };
    ActivitiesOffersCitiesStoreService.prototype.getAllActivities = function () {
        return this.activities;
    };
    ActivitiesOffersCitiesStoreService.prototype.getAllCities = function () {
        return this.cities;
    };
    ActivitiesOffersCitiesStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ActivitiesOffersCitiesStoreService);
    return ActivitiesOffersCitiesStoreService;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var user = this.authService.getUser();
        if (!user) {
            this.router.navigate(['/']);
        }
        return !!user;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_user_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user-store.service */ "./src/app/services/user-store.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");





var AuthService = /** @class */ (function () {
    function AuthService(angularFireAuth, router, userStoreService) {
        var _this = this;
        this.angularFireAuth = angularFireAuth;
        this.router = router;
        this.userStoreService = userStoreService;
        this.firebaseUser = null;
        this.isLoggedIn = false;
        this.angularFireAuth.authState.subscribe(function (user) {
            if (user) {
                _this.firebaseUser = user;
                localStorage.setItem('user', JSON.stringify(_this.currentUser));
            }
            else {
                localStorage.setItem('user', null);
            }
        });
    }
    AuthService.prototype.getUser = function () {
        var _this = this;
        this.userStoreService.getUserById(this.firebaseUser.uid).subscribe(function (recievedUser) {
            _this.currentUser = recievedUser;
        });
        return this.currentUser;
    };
    AuthService.prototype.isloggedIn = function () {
        var user = this.angularFireAuth.auth.currentUser;
        if (user) {
            return this.isLoggedIn = true;
        }
        else {
            return this.isLoggedIn = false;
        }
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this.angularFireAuth.auth.signOut()
            .then(function () {
            localStorage.removeItem('user');
            _this.router.navigate(['/login']);
        });
    };
    AuthService.prototype.signUpWithMailAndPassword = function (mail, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.angularFireAuth.auth.createUserWithEmailAndPassword(mail, password)
                .then(function (res) {
                _this.isLoggedIn = true;
                resolve(res);
            }, function (error) { return reject(error); });
        });
    };
    AuthService.prototype.signInWithMailAndPassword = function (mail, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.angularFireAuth.auth.signInWithEmailAndPassword(mail, password)];
                    case 1:
                        _a.sent();
                        this.isLoggedIn = true;
                        this.router.navigate(['/home']);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        alert('Not able to sign in!' + error_1.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_user_store_service__WEBPACK_IMPORTED_MODULE_1__["UserStoreService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/match-store.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/match-store.service.ts ***!
  \*************************************************/
/*! exports provided: MatchStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchStoreService", function() { return MatchStoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_match__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../models/match */ "./src/app/models/match.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");




var MatchStoreService = /** @class */ (function () {
    function MatchStoreService(angularFireStore) {
        this.angularFireStore = angularFireStore;
        this.allMatchesForSpecificUser = [
            new _models_match__WEBPACK_IMPORTED_MODULE_1__["Match"]('kycsoFi1RPaNy3hJxwmFhbD032I3', 'xMFp4LlYHPXZ3ntVWvRsq0cwzl02', 'kochen', false),
            new _models_match__WEBPACK_IMPORTED_MODULE_1__["Match"]('a5WsJoGC2kbu0zto57mP', 'xMFp4LlYHPXZ3ntVWvRsq0cwzl02', 'schwimmen', false)
        ];
    }
    MatchStoreService.prototype.getAllUnacceptedMatchesForUser = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.angularFireStore.collection('matches').ref.where('partnerID', '==', id)
                                .get().then(function (snapshot) {
                                snapshot.docs.forEach(function (doc) {
                                    _this.unacceptedMatches.push(doc.data());
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.unacceptedMatches];
                    case 2:
                        error_1 = _a.sent();
                        console.log('Error getting unaccepted matches', error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MatchStoreService.prototype.getAllMatchesForSpecificUser = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_2, error_3;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.angularFireStore.collection('matches').ref.where('initiatorID', '==', id)
                                .get().then(function (snapshot) {
                                snapshot.docs.forEach(function (doc) {
                                    _this.allMatchesForSpecificUser.push(doc.data());
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log('Error getting  matches where initiatorID = UID', error_2);
                        return [3 /*break*/, 3];
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.angularFireStore.collection('matches').ref.where('partnerID', '==', id).where('accepted', '==', true)
                                .get().then(function (snapshot) {
                                snapshot.docs.forEach(function (doc) {
                                    _this.allMatchesForSpecificUser.push(doc.data());
                                });
                            })];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        error_3 = _a.sent();
                        console.log('Error getting accepted matches where partnerID = UID', error_3);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/, this.allMatchesForSpecificUser];
                }
            });
        });
    };
    MatchStoreService.prototype.updateMatch = function (id, data) {
        // TOD: add functionality
    };
    MatchStoreService.prototype.deleteMatch = function (matchId) {
        // TOD: add functionality
    };
    MatchStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], MatchStoreService);
    return MatchStoreService;
}());



/***/ }),

/***/ "./src/app/services/search.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/search.service.ts ***!
  \********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_searchrequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/searchrequest */ "./src/app/models/searchrequest.ts");



var SearchService = /** @class */ (function () {
    function SearchService() {
        this.recentSearchReaquets = [
            new _models_searchrequest__WEBPACK_IMPORTED_MODULE_2__["Searchrequest"](18, 40, 'both', 'kochen'),
            new _models_searchrequest__WEBPACK_IMPORTED_MODULE_2__["Searchrequest"](19, 20, 'female', 'schwimmen'),
            new _models_searchrequest__WEBPACK_IMPORTED_MODULE_2__["Searchrequest"](20, 30, 'male', 'rudern')
        ];
    }
    SearchService.prototype.createSearchRequest = function (searchdata) { };
    SearchService.prototype.getRecentSearchrequestsForSpecificUser = function (uid) {
        return this.recentSearchReaquets;
    };
    SearchService.prototype.createSearchrequest = function (searchdata) {
        console.log(searchdata);
    };
    SearchService.prototype.takeExistingSearchrequest = function (searchdata) {
        console.log(searchdata);
    };
    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/services/user-store.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/user-store.service.ts ***!
  \************************************************/
/*! exports provided: UserStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStoreService", function() { return UserStoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var UserStoreService = /** @class */ (function () {
    function UserStoreService(http) {
        this.http = http;
        this.apiUrl = 'https://us-central1-tandemdurchstichtest.cloudfunctions.net';
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    UserStoreService.prototype.getAllUsers = function () {
        return this.http.get(this.apiUrl + "/users");
    };
    UserStoreService.prototype.getUserById = function (id) {
        return this.http.get(this.apiUrl + "/users/" + id);
    };
    UserStoreService.prototype.createUser = function (user) {
        // generate new API-User
        var data = {
            firstname: user.firstname,
            lastname: user.lastname,
            dateOfBirth: user.dateOfBirth,
            sex: user.sex,
            city: user.city,
            activities: user.activities,
            offers: user.offers,
            mail: user.mail,
            password: user.password
        };
        return this.http.post(this.apiUrl + "/users", data);
    };
    UserStoreService.prototype.updateUser = function (id, user) {
        var data = {
            uid: id,
            firstname: user.firstname,
            lastname: user.lastname,
            dateOfBirth: user.dateOfBirth,
            sex: user.sex,
            city: user.city,
            activities: user.activities,
            offers: user.offers,
            mail: user.mail,
            password: user.password
        };
        return this.http.put(this.apiUrl + "/users/" + id, data);
    };
    UserStoreService.prototype.deleteUser = function (id) {
        return this.http.delete(this.apiUrl + "/users/" + id);
    };
    UserStoreService.prototype.errorHandler = function (error) {
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
    };
    UserStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserStoreService);
    return UserStoreService;
}());



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
    production: false,
    firebase: {
        apiKey: 'AIzaSyD3N0cvtiexqnzKGIE9iGfHgMHhu-ou8EU',
        authDomain: 'experimentaltandem.firebaseapp.com',
        databaseURL: 'https://experimentaltandem.firebaseio.com',
        projectId: 'experimentaltandem',
        storageBucket: 'experimentaltandem.appspot.com',
        messagingSenderId: '263344694119'
    }
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
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Users\BKU\LuisRaphaelRamer\Desktop\Uni-Zeug\6. Semester\WebProg\tandemPartner3\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map