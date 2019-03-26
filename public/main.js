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
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");
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
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    },
    {
        path: 'matches',
        component: _components_match_list_match_list_component__WEBPACK_IMPORTED_MODULE_11__["MatchListComponent"],
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    },
    {
        path: 'chats',
        component: _components_chatroom_list_chatroom_list_component__WEBPACK_IMPORTED_MODULE_8__["ChatroomListComponent"],
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    },
    {
        path: 'chats/:id',
        component: _components_chatroom_item_chatroom_item_component__WEBPACK_IMPORTED_MODULE_9__["ChatroomItemComponent"],
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    },
    {
        path: 'profile',
        component: _components_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_12__["ProfilePageComponent"],
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    },
    {
        path: 'search',
        component: _components_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_7__["SearchPageComponent"],
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    },
    {
        path: 'search/result/:id',
        component: _components_result_page_result_page_component__WEBPACK_IMPORTED_MODULE_13__["ResultPageComponent"],
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
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

module.exports = "<div class=\"footer-wrap\">\n<app-navbar></app-navbar>\n<div class=\"container container-wrap\">\n  <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n</div>\n"

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
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _services_user_store_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/user-store.service */ "./src/app/services/user-store.service.ts");
/* harmony import */ var _services_match_store_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/match-store.service */ "./src/app/services/match-store.service.ts");
/* harmony import */ var _services_activities_offers_cities_store_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/activities-offers-cities-store.service */ "./src/app/services/activities-offers-cities-store.service.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");













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
                _angular_fire__WEBPACK_IMPORTED_MODULE_34__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_37__["environment"].firebase),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_35__["AngularFireAuthModule"],
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
                _services_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"],
                _services_match_store_service__WEBPACK_IMPORTED_MODULE_30__["MatchStoreService"],
                _services_activities_offers_cities_store_service__WEBPACK_IMPORTED_MODULE_31__["ActivitiesOffersCitiesStoreService"],
                _services_chat_service__WEBPACK_IMPORTED_MODULE_33__["ChatService"],
                _services_search_service__WEBPACK_IMPORTED_MODULE_32__["SearchService"],
                { provide: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_36__["FirestoreSettingsToken"], useValue: {} } // To solve the timestampInSnapshot-Error
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

module.exports = "<div class=\"row mt-4\">\n  <div class=\"col-2 col-md-1\"></div>\n  <div class=\"col-8 col-md-10\">\n    <div class=\"card m-4 text-center shadow-sm\">\n\n      <h1 class=\"card-title font-weight-light mt-2\">Über uns</h1>\n      <hr class=\"my-1 border-warning\">\n      <div class=\"card-body\">\n        <blockquote class=\"blockquote mb-0\">\n          <p>\"Eine Investition in Wissen bringt immer noch die besten Zinsen.\"</p>\n          <footer class=\"blockquote-footer\">Benjamin Fanklin</footer>\n        </blockquote>\n\n        <br />\n        <div class=\"card-text\">\n          Wir möchten Dir deine Investition so einfach wie möglich machen und bieten Dir deshalb eine Plattform,\n          mit dieser Du jeder Zeit dein eigenes Wissen mit anderen teilen und auch neues erlangen kannst.\n\n          Das Tandem Team besteht aus Studenten des 6. Semester an der HWR Berlin.\n        </div>\n\n      </div>\n\n\n      <br />\n      <img src=\"../../../assets/images/Team-Foto.jpg\" class=\"card-img-top\" alt=\"...\">\n      <div class=\"card-body\">\n        <p class=\"card-text\">Hier das Team von links nach rechts: <br />\n          Arne, Eric, Pascal, Joe und Louis</p>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"col-2 col-md-1\"></div>\n</div>\n"

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

module.exports = "<h1>TandemPartner Chat</h1>\n\n<ng-container *ngIf=\"chatroom$ | async as chat\">\n  <ng-container *ngIf=\" authService.user$ | async as user\">\n\n    <div #chatBox class=\"chat\">\n\n      <div class=\"msg animated zoomInUp\" *ngFor=\"let message of chat.messages; trackBy: trackByCreated\"> <!-- TODO trackBy seems not working.-->\n\n        <div class=\"user\">\n          <!-- <img [src]=\"message.user?.photoURL\" width=\"50px\"> -->\n          <div><span class=\"tag is-dark\"> {{ message.user?.firstname || message.user?.uid }}</span></div>\n\n        </div>\n\n        <p>{{ message.content }}</p>\n\n      </div>\n\n    </div>\n\n    <div class=\"form\">\n      <input class=\"input\" [(ngModel)]=\"newMessage\" maxlength=\"100\" (keydown.enter)=\"submit(chat.id)\">\n\n      <button (click)=\"submit(chat.id)\" class=\"button is-info\" [disabled]=\"!newMessage\">Send</button>\n\n    </div>\n  </ng-container>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/components/chatroom-item/chatroom-item.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/chatroom-item/chatroom-item.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat {\n  padding: 10px;\n  margin: 70px auto 100px;\n  width: 100%; }\n\n.msg {\n  display: flex;\n  align-items: flex-start;\n  margin-left: auto;\n  order: 2;\n  text-align: left;\n  border-bottom: 1px solid #e9e9e9;\n  padding: 10px;\n  width: 90vw;\n  font-size: 1.3em;\n  -webkit-animation-delay: 0ms;\n          animation-delay: 0ms;\n  -webkit-animation-duration: 600ms;\n          animation-duration: 600ms; }\n\n.msg .user {\n    margin-right: 10px;\n    min-width: 100px;\n    border-right: 1px solid #e9e9e9; }\n\n.form {\n  display: flex;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100px;\n  padding: 20px 10vw;\n  background: rgba(255, 255, 255, 0.8); }\n\n.top {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 70px;\n  padding: 20px 10vw;\n  background: rgba(255, 255, 255, 0.8);\n  z-index: 99; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb25zdGFudGluYmVlci9XZWJQcm9nMTkvdGFuZGVtUGFydG5lcjMvYW5ndWxhci9zcmMvYXBwL2NvbXBvbmVudHMvY2hhdHJvb20taXRlbS9jaGF0cm9vbS1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixXQUFXLEVBQUE7O0FBR2I7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IsV0FBVztFQUNYLGdCQUFnQjtFQUNoQiw0QkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLGlDQUF5QjtVQUF6Qix5QkFBeUIsRUFBQTs7QUFYM0I7SUFjSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLCtCQUErQixFQUFBOztBQUluQztFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsU0FBUztFQUNULE9BQU87RUFDUCxXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixvQ0FBb0MsRUFBQTs7QUFHdEM7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGF0cm9vbS1pdGVtL2NoYXRyb29tLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogNzBweCBhdXRvIDEwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1zZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgb3JkZXI6IDI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllOWU5O1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogOTB2dztcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwbXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNjAwbXM7XG5cbiAgLnVzZXIge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlOWU5ZTk7XG4gIH1cbn1cblxuLmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIHBhZGRpbmc6IDIwcHggMTB2dztcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xufVxuXG4udG9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwcHg7XG4gIHBhZGRpbmc6IDIwcHggMTB2dztcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICB6LWluZGV4OiA5OTtcbn1cbiJdfQ== */"

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
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ChatroomItemComponent = /** @class */ (function () {
    function ChatroomItemComponent(chatService, route, authService) {
        this.chatService = chatService;
        this.route = route;
        this.authService = authService;
    }
    ChatroomItemComponent.prototype.ngOnInit = function () {
        var chatroomId = this.route.snapshot.paramMap.get("id");
        var source = this.chatService.getChatroomById(chatroomId);
        this.chatroom$ = this.chatService.joinUsers(source);
    };
    ChatroomItemComponent.prototype.submit = function (chatId) {
        if (!this.newMessage) {
            return alert('you need to enter something');
        }
        this.chatService.sendMessage(chatId, this.newMessage)
            .subscribe();
        this.newMessage = "";
        setTimeout(function () { return window.scrollTo(0, document.body.scrollHeight); }, 500);
    };
    ChatroomItemComponent.prototype.trackByCreated = function (message) {
        return message.createdAt;
    };
    ChatroomItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-chatroom-item',
            template: __webpack_require__(/*! ./chatroom-item.component.html */ "./src/app/components/chatroom-item/chatroom-item.component.html"),
            styles: [__webpack_require__(/*! ./chatroom-item.component.scss */ "./src/app/components/chatroom-item/chatroom-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
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

module.exports = "<div class=\"row mt-4\">\n  <div class=\"col-1\"></div>\n  <div class=\"col-10\">\n    <div class=\"card shadow my-3\" *ngFor=\"let chatroom of userChats$ | async\">\n      <div class=\"card-body py-2 accepted-match-cards\">\n        <div class=\"row\">\n          <div class=\"col-10\">\n            <!-- TODO map the userA or userB (depending on the currentUser) to a modal to display profile pic and name  -->\n            <a [routerLink]=\"chatroom.id\">\n              <span class=\"text-decoration-none text-dark\">{{ chatroom.userB }}</span>\n              <hr class=\"border-warning border-bottom mt-0 mb-1\">\n              <p class=\"text-muted mb-0\">{{ chatroom.messages.length }} {{'chatroomList.messages' | translate }}</p>\n            </a>\n          </div>\n          <div class=\"col-2 d-flex align-items-center justify-content-end\">\n            <button type=\"button\" class=\"btn btn-outline-danger homebutton\" (click)=\"openModal(chatroom.id)\"\n            data-toggle=\"tooltip\" data-placement=\"top\" title=\"{{ 'chatroomList.deleteTooltip' | translate }}\">\n              <fa-icon [icon]=\"faTimes\"></fa-icon>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-1\"></div>\n</div>\n\n<!-- Modal -->\n<div class=\"modal-backdrop fade in\" [ngStyle]=\"{'display':display}\"></div>\n<div *ngIf=\"modalIsOpen\" class=\"modal\" [ngStyle]=\"{'display': display}\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\">{{ 'home.requestTitle' | translate}} Kochen</h5>\n          <button type=\"button\" class=\"close\" (click)=\"closeModal()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeModal()\">Close</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteChatroom()\">DELETE</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n"

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
/* harmony import */ var _services_user_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/user-store.service */ "./src/app/services/user-store.service.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");






var ChatroomListComponent = /** @class */ (function () {
    function ChatroomListComponent(authService, chatService, userStoreService) {
        this.authService = authService;
        this.chatService = chatService;
        this.userStoreService = userStoreService;
        this.currentUser = this.authService.getCurrentUser();
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTimes"];
        // for modal
        this.display = 'none';
        this.modalIsOpen = false;
    }
    ChatroomListComponent.prototype.ngOnInit = function () {
        this.userChats$ = this.chatService.getAllChatrooms();
        this.getPartnerName();
    };
    ChatroomListComponent.prototype.getPartnerName = function () {
        var _this = this;
        var _loop_1 = function (i) {
            var partnerID = this_1.userChats$[i].userB;
            if (partnerID === this_1.authService.currentUserID) {
                partnerID = this_1.userChats$[i].userA;
                this_1.userStoreService.getUserById(partnerID).subscribe(function (user) {
                    _this.userChats$[i].userA = user.firstname;
                });
            }
            else {
                this_1.userStoreService.getUserById(partnerID).subscribe(function (user) {
                    _this.userChats$[i].userB = user.firstname;
                });
            }
        };
        var this_1 = this;
        // tslint:disable-next-line:prefer-for-of
        for (var i = 0; i < this.userChats$.length; i++) {
            _loop_1(i);
        }
    };
    ChatroomListComponent.prototype.deleteChatroom = function () {
        this.chatService.deleteChatroom(this.roomToBeDeleted).subscribe();
    };
    ChatroomListComponent.prototype.openModal = function (chatroomId) {
        console.log('id: ' + chatroomId);
        this.modalIsOpen = true;
        this.display = 'block';
        this.roomToBeDeleted = chatroomId;
    };
    ChatroomListComponent.prototype.closeModal = function () {
        this.display = 'none';
        this.modalIsOpen = false;
    };
    ChatroomListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-chatroom-list',
            template: __webpack_require__(/*! ./chatroom-list.component.html */ "./src/app/components/chatroom-list/chatroom-list.component.html"),
            styles: [__webpack_require__(/*! ./chatroom-list.component.scss */ "./src/app/components/chatroom-list/chatroom-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"],
            _services_user_store_service__WEBPACK_IMPORTED_MODULE_1__["UserStoreService"]])
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

module.exports = "<div class=\"row my-4\">\n  <div class=\"col-2\"></div>\n  <div class=\"col-8 text-center\">\n    <h1 class=\"card-title font-weight-light mt-2\">404 - Page not found</h1>\n    <br />\n    <img src=\"../../../assets/images/404-error.jpg\" class=\"img-fluid shadow\" alt=\"image\">\n  </div>\n  <div class=\"col-2\"></div>\n</div>\n"

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

module.exports = "<footer class=\"footer text-center small border-top absolute-bottom\">\n  <ul class=\"nav flex-column\">\n    <li class=\"\">\n      <a class=\"text-dark\" [routerLink]=\"['/impressum']\">{{'footer.legalDisclosure' | translate }}</a>\n    </li>\n    <li class=\"\">\n      <a class=\"text-dark\" [routerLink]=\"['/about']\">{{'footer.aboutUs' | translate }}</a>\n    </li>\n  </ul>\n  <p> © 2019 | tandemPartner</p>\n</footer>\n"

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

module.exports = "<h1 class=\"text-center font-weight-light mb-3 mt-4\">{{ 'home.openMatchrequests' | translate }}</h1>\n<div class=\"row\">\n  <div class=\"col-1\"></div>\n  <div class=\"col-10\">\n    <div *ngIf=\"matchRequests$, else elseBlock\">\n      <!-- show all matchRequests which are saved in the Array of 'matchRequests'-->\n      <div *ngFor=\"let match of matchRequests$ | async | paginate: { itemsPerPage: 5, currentPage: pageNumber }\">\n        <div class=\"card shadow my-3\">\n            <h5 class=\"card-header\">\n                {{ 'home.requestTitle' | translate}} {{ match.matchedOffer }}\n            </h5>\n            <div class=\"card-body\">\n              <div class=\"card-text\">\n                  <div class=\"row\">\n                      <div class=\"col-8 col-md-10\">\n                        <a class=\"pointer-cursor\" (click)=\"openModal(match.initiatorID)\">\n                          <p class=\"my-0\"><small>{{ match.initiatorID }}</small></p>\n                          <p class=\"my-0\"><small>Age:</small></p>\n                          <p class=\"my-0\"><small>Aktivitäten:</small></p>\n                        </a>\n                      </div>\n                      <div class=\"col-4 col-md-2 d-flex justify-content-end my-auto\">\n                        <button type=\"button\" class=\"btn btn-success mr-2 homebutton\" (click)=\"acceptMatch(match.id)\">\n                          <fa-icon [icon]=\"faCheck\"></fa-icon>\n                        </button>\n                        <button type=\"button\" class=\"btn btn-outline-danger homebutton\" (click)=\"declineMatch(match.id)\">\n                          <fa-icon [icon]=\"faTimes\"></fa-icon>\n                        </button>\n                      </div>\n                  </div>\n                </div>\n            </div>\n          </div>\n      </div><!--ngFor-->\n\n      <!--controls for pagination, which are only visible at the length of matchRequest-array bigger than 5-->\n      <pagination-controls autoHide=\"true\"\n        class=\"pagination justify-content-center\"\n        (pageChange)=\"pageNumber = $event\"\n        previousLabel=\"{{'home.previous' | translate }}\"\n        nextLabel=\"{{'home.next' | translate }}\"></pagination-controls>\n    </div><!--ngIf-->\n\n    <!-- if there are no matchrequests-->\n    <ng-template #elseBlock>\n      <p class=\"text-center\">{{ 'home.noRequests' | translate}}</p>\n    </ng-template>\n  </div>\n  <div class=\"col-1\"></div>\n</div>\n\n\n<!-- Modal -->\n<div class=\"modal-backdrop fade in\" [ngStyle]=\"{'display':display}\"></div>\n<div *ngIf=\"modalIsOpen\" class=\"modal\" [ngStyle]=\"{'display': display}\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\">{{ 'home.requestTitle' | translate}} Kochen</h5>\n          <button type=\"button\" class=\"close\" (click)=\"closeModal()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n           <!-- {{ user.firstname }}-->\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeModal()\">Close</button>\n          <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n        </div>\n      </div>\n    </div>\n  </div>\n"

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
        this.matchRequests$ = this.matchStoreService.getAllUnAcceptedMatches();
    };
    HomeComponent.prototype.getInitiatorFirstname = function (id) {
        // this.userStoreService.getUserById(id).subscribe((recievedUser: User) => {
        //   this.initiatorFirstname = recievedUser.firstname;
        //   console.log('initiatorFirstname: ' + this.initiatorFirstname);
        // });
    };
    HomeComponent.prototype.acceptMatch = function (matchId) {
        var data = {
            accepted: true
        };
        this.matchStoreService.updateMatch(matchId, data)
            .subscribe();
    };
    HomeComponent.prototype.declineMatch = function (matchId) {
        this.matchStoreService.deleteMatch(matchId)
            .subscribe();
    };
    HomeComponent.prototype.openModal = function (id) {
        console.log('id: ' + id);
        this.modalIsOpen = true;
        this.display = 'block';
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

module.exports = "<div class=\"row mt-4\">\n  <div class=\"col-1\"></div>\n  <div class=\"col-10\">\n    <div class=\"card-deck\">\n      <div class=\"card m-4 text-center py-2 shadow-sm\">\n        <h4 class=\"card-title font-weight-light\">Das Entwicklerteam</h4>\n        <hr class=\"my-1 border-warning\">\n        Constantin Beer\n        <br />Eric Odschuk\n        <br />Luis Ramer\n        <br />Arne Schacher\n        <br />Pascal Vonholdt<br />\n      </div>\n\n      <div class=\"card m-4 text-center py-2 shadow-sm\">\n        <h4 class=\"card-title font-weight-light\">Kontakt</h4>\n        <hr class=\"my-1 border-warning\">\n        <a href=\"mailto:tandem.hwr@gmail.com\">tandem.hwr@gmail.com</a>\n        HWR Berlin\n        <br />6. Semester Wirtschaftsinformatik\n        <br />Alt-Friedrichsfelde 60\n        <br />10315 Berlin\n      </div>\n\n    </div>\n    <div class=\"col-1\"></div>\n  </div>\n"

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

module.exports = "<div class=\"row\">\n  <div class=\"col-1\"></div>\n  <div class=\"col-10 d-flex justify-content-center\">\n    <div class=\"mx-auto my-5 card shadow\">\n      <img class=\"card-img-top mb-4 mt-3 rounded-circle mx-auto shadow\" src=\"../../../assets/images/tandemLogo.png\">\n      <div class=\"card-body\">\n        <div class=\"card-title text-center\">tandemPartner<i class=\"text-muted\">{{'login.tandemSlogan' | translate }}</i></div>\n        <form class=\"m-3\" [formGroup]=\"loginForm\" (ngSubmit)=\"loginFormSave()\">\n          <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"mailIcon\">\n                <fa-icon [icon]=\"faAt\"></fa-icon>\n              </span>\n            </div>\n            <input type=\"text\" class=\"form-control\" id=\"loginFormMail\" placeholder=\"{{'login.mailPlaceholder' | translate }}\" formControlName=\"loginFormMail\" aria-describedby=\"mailIcon\" autofocus>\n          </div>\n\n          <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\" id=\"passwordIcon\">\n                <fa-icon [icon]=\"faLock\"></fa-icon>\n              </span>\n            </div>\n            <input type=\"password\" class=\"form-control\" id=\"loginFormPassword\" placeholder=\"{{'login.passwordPlaceholder' | translate }}\" formControlName=\"loginFormPassword\" aria-describedby=\"passwordIcon\" autofocus>\n          </div>\n\n          <div class=\"btn-toolbar d-flex justify-content-center\" role=\"toolbar\">\n            <div class=\"btn-group mr-2\">\n              <button type=\"button\" type=\"submit\" class=\"btn btn-warning d-flex mx-auto  mt-2\" >{{'login.loginButton' | translate }}</button>\n            </div>\n            <div class=\"btn-group\">\n              <button type=\"button\" [routerLink]=\"['/register']\" class=\"btn btn-outline-warning d-flex mx-auto mt-2\" >{{'login.registerButton' | translate }}</button>\n            </div>\n          </div>\n\n        </form>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"col-1\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login-page/login-page.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/login-page/login-page.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  height: auto;\n  width: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb25zdGFudGluYmVlci9XZWJQcm9nMTkvdGFuZGVtUGFydG5lcjMvYW5ndWxhci9zcmMvYXBwL2NvbXBvbmVudHMvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuIl19 */"

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
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var ts_md5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ts-md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ts_md5__WEBPACK_IMPORTED_MODULE_5__);







var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(formBuilder, authService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.md5 = new ts_md5__WEBPACK_IMPORTED_MODULE_5__["Md5"]();
        // for icons
        this.faAt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faAt"];
        this.faLock = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faLock"];
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
    LoginPageComponent.prototype.loginFormSave = function () {
        var mail = this.loginForm.value.loginFormMail;
        var password = this.md5.appendStr(this.loginForm.value.loginFormMail)
            .appendStr(this.loginForm.value.loginFormPassword).end();
        // const password = this.loginForm.value.loginFormPassword;
        this.authService.login(mail, password);
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
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
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

module.exports = "<div class=\"row\">\n  <div class=\"col-1\"></div>\n  <div class=\"col-10 px-0\">\n    <div class=\"card mx-auto my-5 shadow\">\n      <div class=\"card-header h5 bg-transparent d-flex justify-content-between border-warning p-0\">\n        <div\n          class=\"col-md-6 font-weight-light text-center pointer-cursor align-self-center border-right btn-outline-warning py-3\"\n          data-toggle=\"collapse\" href=\"#collapseAccepted\" [ngClass]=\"{'active':acceptedCollapsed === true}\"\n          role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseAccepted\" (click)=\"requestsCollapsed=false\"\n          (click)=\"acceptedCollapsed=true\">\n          {{ 'matchlist.accpetedMatches' | translate }}\n        </div>\n        <div class=\"col-md-6 font-weight-light text-center pointer-cursor btn-outline-warning py-3\"\n          [ngClass]=\"{'active':requestsCollapsed === true}\" data-toggle=\"collapse\" href=\"#collapseRequests\"\n          role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseRequests\" (click)=\"acceptedCollapsed=false\"\n          (click)=\"requestsCollapsed=true\">\n          {{ 'matchlist.unacceptedMatches' | translate }}\n        </div>\n      </div>\n      <!--card-header-->\n\n      <!--show all accepted Matches-->\n      <div *ngIf=\"acceptedCollapsed\" class=\"card-body\" id=\"collapseAccepted\">\n        <!-- show all accepted matches which are saved in acceptedMatches[]-->\n        <div\n          *ngFor=\"let match of acceptedMatches$ | async | paginate: { itemsPerPage: 5, currentPage: pageNumberAcceptedMatches, id: 'firstPagination' }\">\n          <div class=\"card shadow my-3\">\n            <h5 class=\"card-header bg-white border-warning font-italic\">\n              {{ 'matchlist.matchedOffer' | translate }}: {{ match.matchedOffer }}\n            </h5>\n            <div *ngIf=\"acceptedMatches$, else noRequestBlock\" class=\"card-body accepted-match-cards\">\n              <div class=\"card-text\">\n                <div class=\"row\">\n                  <div class=\"col-8 col-md-10\">\n                    <a class=\"pointer-cursor\" (click)=\"openModal(match.initiatorID)\">\n                      <p class=\"my-0\"><small>{{ validateCurrentUser(match.initiatorID, match.partnerID) }}</small></p>\n                      <p class=\"my-0\"><small>Age:</small></p>\n                      <p class=\"my-0\"><small>Aktivitäten:</small></p>\n                    </a>\n                  </div>\n                  <div class=\"col-4 col-md-2 d-flex justify-content-end my-auto\">\n                    <button type=\"button\" class=\"btn btn-outline-warning homebutton\"\n                      (click)=\"contactUser(match.initiatorID, match.partnerID)\" data-toggle=\"tooltip\"\n                      data-placement=\"top\" title=\"{{ 'matchlist.contactTooltip' | translate }}\">\n                      <fa-icon [icon]=\"faEnvelope\"></fa-icon>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- if there are no matchrequests-->\n            <ng-template #noRequestBlock>\n              <p class=\"text-center\">{{ 'home.noRequests' | translate}}</p>\n            </ng-template>\n          </div>\n        </div>\n        <!--ngFor-->\n\n        <!--controls for pagination, which are only visible at the length of matchRequest-array bigger than 5-->\n        <pagination-controls autoHide=\"true\" class=\"pagination justify-content-center\"\n          (pageChange)=\"pageNumberAcceptedMatches = $event\" previousLabel=\"{{'home.previous' | translate }}\"\n          nextLabel=\"{{'home.next' | translate }}\" id=\"firstPagination\">\n        </pagination-controls>\n\n      </div>\n\n      <!--show all Matchrequests-->\n      <div *ngIf=\"requestsCollapsed\" class=\"card-body collapse\" id=\"collapseRequests\">\n\n\n\n        <!-- show all unaccepted matchrequests which are saved in matchrequests[]-->\n        <div\n          *ngFor=\"let matchrequest of matchRequests$ | async | paginate: { itemsPerPage: 5, currentPage: pageNumberRequests, id: 'secondPagination' }\">\n          <div class=\"card shadow my-3\">\n            <h5 class=\"card-header bg-white border-info font-italic\">\n              {{ 'matchlist.matchrequestFor' | translate }}: {{ matchrequest.matchedOffer }}\n            </h5>\n            <div class=\"card-body unaccepted-match-cards\">\n              <div class=\"card-text\">\n                <div class=\"row\">\n                  <div class=\"col-8 col-md-10\">\n                    <a class=\"pointer-cursor\" (click)=\"openModal(matchrequest.partnerID)\">\n                      <p class=\"my-0\"><small>{{ matchrequest.partnerID }}</small></p>\n                      <p class=\"my-0\"><small>Age:</small></p>\n                      <p class=\"my-0\"><small>Aktivitäten:</small></p>\n                    </a>\n                  </div>\n                  <div class=\"col-4 col-md-2 d-flex justify-content-end my-auto\">\n                    <button type=\"button\" class=\"btn btn-outline-danger homebutton\"\n                      (click)=\"deleteMatchrequest(matchrequest.id)\" data-toggle=\"tooltip\" data-placement=\"top\"\n                      title=\"{{ 'matchlist.deleteTooltip' | translate }}\">\n                      <fa-icon [icon]=\"faTrash\"></fa-icon>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!--ngFor-->\n\n        <!--controls for pagination, which are only visible at the length of matchRequest-array bigger than 5-->\n        <pagination-controls autoHide=\"true\" class=\"pagination justify-content-center\"\n          (pageChange)=\"pageNumberRequests = $event\" previousLabel=\"{{'home.previous' | translate }}\"\n          nextLabel=\"{{'home.next' | translate }}\" id=\"secondPagination\">\n        </pagination-controls>\n\n\n      </div>\n      <!--second row/card-->\n\n    </div>\n\n\n  </div>\n  <!--col-10-->\n\n  <div class=\"col-1\"></div>\n</div>\n\n\n<!-- Modal -->\n<div class=\"modal-backdrop fade in\" [ngStyle]=\"{'display':display}\"></div>\n<div *ngIf=\"modalIsOpen\" class=\"modal\" [ngStyle]=\"{'display': display}\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">{{ 'home.requestTitle' | translate}} Kochen</h5>\n        <button type=\"button\" class=\"close\" (click)=\"closeModal()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <!-- {{ user.firstname }}-->\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeModal()\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var _services_user_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/user-store.service */ "./src/app/services/user-store.service.ts");
/* harmony import */ var _services_match_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/match-store.service */ "./src/app/services/match-store.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/chat.service */ "./src/app/services/chat.service.ts");








// import { ChatService } from './../../services/chat.service';
var MatchListComponent = /** @class */ (function () {
    function MatchListComponent(authService, matchStoreService, router, chatservice, userStoreService) {
        this.authService = authService;
        this.matchStoreService = matchStoreService;
        this.router = router;
        this.chatservice = chatservice;
        this.userStoreService = userStoreService;
        // for fontawesome icons
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTrash"];
        this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEnvelope"];
        // for pagination
        this.pageNumberAcceptedMatches = 1;
        this.pageNumberRequests = 1;
        // getting active & collapsed state
        this.acceptedCollapsed = true;
        this.requestsCollapsed = false;
        // for modal
        this.display = 'none';
        this.modalIsOpen = false;
    }
    MatchListComponent.prototype.ngOnInit = function () {
        this.matchRequests$ = this.matchStoreService.getAllMatchrequests();
        this.acceptedMatches$ = this.matchStoreService.getAllAcceptedMatches();
        // this.matchStoreService.getAllAcceptedMatches().subscribe(); // TODO check if this is neccessary!
    };
    // calculateAgeForEachUser() {
    //   // tslint:disable-next-line:prefer-for-of
    //   for (let i = 0; i < this.userForSpecificRequest.length; i++) {
    //     const birthdate = this.userForSpecificRequest[i].dateOfBirth;
    //     const timeDiff = Math.abs(Date.now() - birthdate);
    //     const age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
    //     this.userForSpecificRequest[i].dateOfBirth = age;
    //   }
    // }
    //
    MatchListComponent.prototype.contactUser = function (initiatorID, partnerID) {
        var _this = this;
        var currentUserID = this.authService.currentUserID;
        var userB;
        if (initiatorID === currentUserID) {
            userB = partnerID;
        }
        if (partnerID === currentUserID) {
            userB = initiatorID;
        }
        this.chatservice.create(currentUserID, userB)
            .subscribe(function (response) {
            if (response.result) {
                _this.router.navigate(["chats/" + response.id]);
            }
            else if (!response.result) {
                _this.router.navigate(["chats/" + response.id]);
            }
        });
    };
    MatchListComponent.prototype.deleteMatchrequest = function (matchId) {
        this.matchStoreService.deleteMatch(matchId)
            .subscribe();
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
    // async validateCurrentUser(initiatorID: string, partnerID: string) {
    //   // let username: string;
    //   if (this.authService.currentUserID === initiatorID) {
    //    const user =  await this.userStoreService.getUserById(partnerID).toPromise()
    //     console.log(user)
    //    return 'partnerID';
    //   } else {
    //     this.userStoreService.getUserById(initiatorID)
    //     const user =  await this.userStoreService.getUserById(initiatorID).toPromise()
    //     console.log(user)
    //     return 'initiatorID';
    //   }
    // }
    MatchListComponent.prototype.validateCurrentUser = function (initiatorID, partnerID) {
        if (this.authService.currentUserID === initiatorID) {
            return partnerID;
        }
        else {
            return initiatorID;
        }
    };
    MatchListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-match-list',
            template: __webpack_require__(/*! ./match-list.component.html */ "./src/app/components/match-list/match-list.component.html"),
            styles: [__webpack_require__(/*! ./match-list.component.scss */ "./src/app/components/match-list/match-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_match_store_service__WEBPACK_IMPORTED_MODULE_2__["MatchStoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_7__["ChatService"],
            _services_user_store_service__WEBPACK_IMPORTED_MODULE_1__["UserStoreService"]])
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

module.exports = "<header>\n  <!--when the bug of new logging in is solved, we can use the following line\n  <nav *ngIf=\"router.url !== '/login'\" class=\"navbar navbar-light navbar-expand-lg shadow\">-->\n\n  <nav class=\"navbar fixed-top navbar-light navbar-expand-lg bg-white shadow\">\n    <!--toggle only visible for screens smaller than lg-->\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarLinks\" aria-controls=\"navbarLinks\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <a class=\"navbar-brand\" [routerLink]=\"['/home']\">\n        <img src=\"../../../assets/images/navbarLogo.png\" width=\"40\" height=\"40\" class=\"d-inline-block align-top\" alt=\"Tandem Logo\">\n      </a>\n\n      <!--navbar links-->\n      <div class=\"collapse navbar-collapse\" id=\"navbarLinks\">\n        <!--left aligned links-->\n        <ul *ngIf=\"isLoggedIn()\" class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/home']\" [routerLinkActive]=\"['active']\">{{ 'navbar.homeLink' | translate }}</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/profile']\" [routerLinkActive]=\"['active']\">{{ 'navbar.profileLink' | translate }}</a>\n          </li>\n          <li class=\"nav-item\">\n            <a *ngIf=\"router.url !== '/search/result', else resultBlock\" class=\"nav-link\" [routerLink]=\"['/search']\" [routerLinkActive]=\"['active']\">{{ 'navbar.searchLink' | translate }}</a>\n            <ng-template #resultBlock>\n              <a class=\"nav-link active\">{{ 'navbar.searchResults' | translate }}</a>\n            </ng-template>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/matches']\" [routerLinkActive]=\"['active']\">{{ 'navbar.matchesLink' | translate }}</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/chats']\" [routerLinkActive]=\"['active']\">{{ 'navbar.chatLink' | translate }}</a>\n          </li>\n        </ul>\n\n        <!-- right aligned links-->\n        <ul class=\"navbar-nav ml-auto\">\n          <!--dropdown menu-->\n          <li class=\"nav-item dropdown\">\n            <!--showing english or german language, via checking whether english language was clicked or not -->\n            <a class=\"nav-link dropdown-toggle pointer-cursor border-right\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" id=\"dropdownMenuLink\">\n              {{ 'navbar.lang' | translate }}\n            </a>\n            <!--dropdown links-->\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuLink\">\n              <a class=\"dropdown-item pointer-cursor\" (click)=\"switchLanguage('de')\">De</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item pointer-cursor\" (click)=\"switchLanguage('en')\" >En</a>\n            </div>\n          </li>\n\n          <!--username-->\n          <span *ngIf=\"isLoggedIn()\" class=\"navbar-text font-italic mx-lg-2\">\n            Username\n          </span>\n\n          <!--Logout-->\n          <li *ngIf=\"isLoggedIn()\" class=\"nav-item border-left\">\n            <a class=\"nav-link pointer-cursor\" (click)=\"logout()\">{{ 'navbar.logout' | translate }}</a>\n          </li>\n          <!--Login-->\n          <li *ngIf=\"!isLoggedIn() \" class=\"nav-item border-left\">\n            <a class=\"nav-link\" [routerLink]=\"['/login']\">{{ 'navbar.login' | translate }}</a>\n          </li>\n        </ul>\n      </div>\n  </nav>\n</header>\n"

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

module.exports = "<div class=\"row\">\n  <div class=\"col-1\"></div>\n  <div class=\"col-10\">\n    <div class=\"card mx-auto my-5 shadow\">\n        <div class=\"card-header bg-warning text-center h5\">\n            {{'profile.headerTitle' | translate }}\n          </div>\n      <div class=\"card-body\">\n          <form class=\"\" [formGroup]=\"editForm\" (ngSubmit)=\"editFormSave()\" novalidate>\n            <div class=\"row\">\n              <div class=\"form-group col-md-6\">\n                  <label for=\"editFormFirstname\">{{'register.firstname' | translate }}*</label>\n                  <input type=\"text\" class=\"form-control shadow-sm\" id=\"editFormFirstname\" formControlName=\"editFormFirstname\" placeholder=\"{{'register.firstname' | translate }}\">\n              </div>\n              <div class=\"form-group col-md-6\">\n                  <label for=\"editFormLastname\">{{'register.lastname' | translate }}*</label>\n                  <input type=\"text\" class=\"form-control shadow-sm\" id=\"editFormLastname\" formControlName=\"editFormLastname\" placeholder=\"{{'register.lastname' | translate }}\">\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-md-6 form-group\">\n                <label for=\"editFormSex\">{{'register.sex' | translate }}*</label>\n                <div class=\"form-control shadow-sm bg-light\"id=\"editFormSex\" disabled>{{sex}}</div>\n\n              </div>\n              <div class=\"col-md-6 form-group\">\n                  <label>{{'register.mail' | translate }}*</label>\n                  <input type=\"text\" class=\"form-control shadow-sm\" id=\"editFormMail\" formControlName=\"editFormMail\" placeholder=\"name@example.com\">\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-md-6 form-group\">\n                <label for=\"editFormCity\">{{'register.city' | translate }}*</label>\n                <ng-multiselect-dropdown  class=\"form-control shadow-sm\" id=\"editFormCity\" #editFormCity=\"ngModel\"\n                  [placeholder]=\"'register.pleaseChoose' | translate\"\n                  [data]=\"cities\"\n                  [(ngModel)]=\"selectedCity\" [ngModelOptions]=\"{ standalone : true }\"\n                  [settings]=\"selectCitySettings\" required>\n                </ng-multiselect-dropdown>\n              </div>\n              <div class=\"col-md-6 form-group\">\n                  <label for=\"editFormBirthday\">{{'register.birthday' | translate }}*</label>\n                  <input type=\"text\"\n                  [placeholder]=\"'register.birthday' | translate\"\n                  class=\"form-control shadow-sm bg-light\"\n                  bsDatepicker id=\"editFormBirthday\" formControlName=\"editFormBirthday\"\n                  [bsConfig]=\"{ dateInputFormat: 'MM.DD.YYYY', colorTheme: 'theme-orange' }\">\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-md-6 form-group\">\n                <label for=\"editFormOffers\">{{'register.offers' | translate }}:*</label>\n                <ng-multiselect-dropdown  class=\"form-control shadow-sm\" id=\"editFormOffers\" #editFormOffers=\"ngModel\"\n                   [placeholder]=\"'register.pleaseChoose' | translate\"\n                   [data]=\"offers\"\n                   [(ngModel)]=\"selectedOffers\" [ngModelOptions]=\"{ standalone : true }\"\n                   [settings]=\"selectOffersActivitiesSettings\" required>\n                </ng-multiselect-dropdown>\n              </div>\n              <div class=\"col-md-6 form-group\">\n                <label for=\"editFormActivities\">{{'register.activities' | translate }}:*</label>\n                <ng-multiselect-dropdown  class=\"form-control shadow-sm\" id=\"editFormActivities\" #editFormActivities=\"ngModel\"\n                   [placeholder]=\"'register.pleaseChoose' | translate\"\n                   [data]=\"activities\"\n                   [(ngModel)]=\"selectedActivities\" [ngModelOptions]=\"{ standalone : true }\"\n                   [settings]=\"selectOffersActivitiesSettings\" required>\n                </ng-multiselect-dropdown>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-md-6 form-group\">\n                  <label>{{'profile.newPassword' | translate }}*</label>\n                  <input type=\"password\" class=\"form-control shadow-sm\" id=\"editFormPassword\" formControlName=\"editFormPassword\" placeholder=\"{{'register.password' | translate }}\">\n              </div>\n              <div class=\"col-md-6 form-group\">\n                  <label>{{'profile.newPasswordConfirm' | translate }}*</label>\n                  <input type=\"password\" class=\"form-control shadow-sm\" id=\"editFormPasswordConfirm\" formControlName=\"editFormPasswordConfirm\" placeholder=\"{{'register.passwordConfirm' | translate }}\">\n              </div>\n            </div>\n\n            <!--Validator messages-->\n            <div class=\"alert-danger pl-2\" *ngIf=\"editFormFirstname.errors && (editFormFirstname.touched || editFormFirstname.dirty)\">\n                <div *ngIf=\"editFormFirstname.errors.required\">{{'register.firstname' | translate }} {{'validators.required' | translate }}</div>\n                <div *ngIf=\"editFormFirstname.errors.pattern\">{{'validators.letterSpaces' | translate }}</div>\n              </div>\n\n              <div class=\"alert-danger pl-2\" *ngIf=\"editFormLastname.errors && (editFormLastname.touched || editFormLastname.dirty)\">\n                <div *ngIf=\"editFormLastname.errors.required\">{{'register.lastname' | translate }} {{'validators.required' | translate }}</div>\n                <div *ngIf=\"editFormLastname.errors.pattern\">{{'validators.letterSpaces' | translate }}</div>\n              </div>\n\n              <div class=\"alert-danger pl-2\" *ngIf=\"editFormMail.errors && (editFormMail.touched || editFormMail.dirty)\">\n                <div *ngIf=\"editFormMail.errors.required\">{{'register.mail' | translate }} {{'validators.required' | translate }}</div>\n                <div *ngIf=\"editFormMail.errors.email\">{{'validators.email' | translate }}</div>\n              </div>\n\n              <div class=\"alert-danger pl-2\" *ngIf=\"editFormPassword.errors && (editFormPassword.touched || editFormPassword.dirty)\">\n                <div *ngIf=\"editFormPassword.errors.pattern\">{{'validators.passwordPattern' | translate }}</div>\n              </div>\n\n              <div class=\"alert-danger pl-2\" *ngIf=\"editFormPasswordConfirm.errors && (editFormPasswordConfirm.touched || editFormPasswordConfirm.dirty)\">\n                <div *ngIf=\"editFormPasswordConfirm.errors.pattern\">{{'validators.passwordPattern' | translate }}</div>\n              </div>\n\n              <div class=\"alert-danger pl-2\" *ngIf=\"editFormPassword.value != editFormPasswordConfirm.value && editFormPasswordConfirm.value != null\">\n                  {{'validators.passwordMismatch' | translate }}\n              </div>\n\n              <div class=\"alert-danger pl-2\" *ngIf=\"editFormOffers.errors && (editFormOffers.touched || editFormOffers.dirty)\">\n                  <div *ngIf=\"editFormOffers.errors.required\" class=\"alert-danger\">{{'validators.minOffers' | translate }}</div>\n              </div>\n\n              <div class=\"alert-danger pl-2\" *ngIf=\"editFormCity.errors && (editFormCity.touched || editFormCity.dirty)\">\n                <div *ngIf=\"editFormCity.errors.required\" class=\"alert-danger\">{{'validators.city' | translate }}</div>\n            </div>\n\n              <div class=\"alert-danger pl-2\" *ngIf=\"editFormActivities.errors && (editFormActivities.touched || editFormActivities.dirty)\">\n                  <div *ngIf=\"editFormActivities.errors.required\" class=\"alert-danger\">{{'validators.minActivities' | translate }}</div>\n              </div>\n              <!--End-Validator messages-->\n\n              <div class=\"btn-toolbar d-flex justify-content-center\" role=\"toolbar\">\n              <div class=\"btn-group mr-1 mr-md-3\">\n                <button type=\"button\" type=\"submit\" class=\"btn btn-warning d-flex mx-auto mt-2\" [disabled]=\"(!editForm.valid || !editFormOffers.valid || !editFormActivities.valid || !editFormCity.valid)\">{{'register.saveButton' | translate }}</button>\n              </div>\n              <div class=\"btn-group ml-md-3 mr-1 mr-md-3\">\n                <button type=\"button\" [routerLink]=\"['/home']\" class=\"btn btn-outline-warning d-flex mx-auto mt-2\" >{{'register.quitButton' | translate }}</button>\n              </div>\n              <div class=\"btn-group ml-md-3\">\n                <button type=\"button\"  class=\"btn btn-outline-danger d-flex mx-auto mt-2\" >{{'profile.deleteButton' | translate }}</button>\n              </div>\n            </div>\n          </form>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-1\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile-page/profile-page.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/profile-page/profile-page.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#editFormOffers {\n  padding: 0;\n  border: none; }\n\n#editFormActivities {\n  padding: 0;\n  border: none; }\n\n#editFormCity {\n  padding: 0;\n  border: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb25zdGFudGluYmVlci9XZWJQcm9nMTkvdGFuZGVtUGFydG5lcjMvYW5ndWxhci9zcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS1wYWdlL3Byb2ZpbGUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxVQUFVO0VBQ1YsWUFBWSxFQUFBOztBQUdkO0VBQ0UsVUFBVTtFQUNWLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS1wYWdlL3Byb2ZpbGUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNlZGl0Rm9ybU9mZmVyc3tcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuI2VkaXRGb3JtQWN0aXZpdGllc3tcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuI2VkaXRGb3JtQ2l0eSB7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuIl19 */"

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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // initialzie all available offers & activities
                        this.offers = this.activitiesOffersCitiesStoreService.getAllOffers();
                        this.activities = this.activitiesOffersCitiesStoreService.getAllActivities();
                        this.cities = this.activitiesOffersCitiesStoreService.getAllCities();
                        return [4 /*yield*/, this.authService.getCurrentUser()];
                    case 1:
                        user = _a.sent();
                        this.userStoreService.getUserById(user.uid).subscribe(function (recievedUser) {
                            _this.sex = _this.parseSexValueForFrontend(recievedUser.sex);
                            _this.selectedActivities = recievedUser.activities;
                            _this.selectedOffers = recievedUser.offers,
                                _this.selectedCity = Array.of(recievedUser.city);
                            _this.editForm.get('editFormFirstname').setValue(recievedUser.firstname);
                            _this.editForm.get('editFormLastname').setValue(recievedUser.lastname);
                            _this.editForm.get('editFormMail').setValue(user.mail);
                            _this.editForm.get('editFormBirthday').setValue(recievedUser.dateOfBirth);
                        });
                        this.initializeMultiselectSettings();
                        return [2 /*return*/];
                }
            });
        });
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
            editFormPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d).{6,16}$')]],
            // at least 6 characters, must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number, can contain special characters
            // tslint:disable-next-line:max-line-length
            editFormPasswordConfirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d).{6,16}$')]]
            // adds the custom validator for validating the passwords og their matching
        }, { validator: this.passwordMatchValidator });
    };
    ProfilePageComponent.prototype.initializeMultiselectSettings = function () {
        this.selectCitySettings = {
            singleSelection: true,
            idField: 'item_id',
            textField: 'item_text',
            enableCheckAll: false,
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        // selecting settings for the select fields of offers and activities
        this.selectOffersActivitiesSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            enableCheckAll: false,
            itemsShowLimit: 3,
            allowSearchFilter: true
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
            city: this.selectedCity,
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

module.exports = "<div class=\"row\">\n  <div class=\"col-1\"></div>\n  <div class=\"col-10\">\n    <div class=\"card mx-auto my-5 shadow\">\n      <div class=\"card-header bg-warning text-center h5\">\n        {{'register.headerTitle' | translate }}\n      </div>\n      <div class=\"card-body\">\n        <form class=\"\" [formGroup]=\"registerForm\" (ngSubmit)=\"registerFormSave()\" novalidate>\n          <div class=\"row\">\n            <div class=\"form-group col-md-6\">\n              <label for=\"registerFormFirstname\">{{'register.firstname' | translate }}*</label>\n              <input type=\"text\" class=\"form-control shadow-sm\" id=\"registerFormFirstname\"\n                formControlName=\"registerFormFirstname\" placeholder=\"{{'register.firstname' | translate }}\">\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"registerFormLastname\">{{'register.lastname' | translate }}*</label>\n              <input type=\"text\" class=\"form-control shadow-sm\" id=\"registerFormLastname\"\n                formControlName=\"registerFormLastname\" placeholder=\"{{'register.lastname' | translate }}\">\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group\">\n              <label for=\"registerFormSex\">{{'register.sex' | translate }}*</label>\n              <ng-multiselect-dropdown class=\"form-control shadow-sm\" id=\"registerFormSex\" #registerFormSex=\"ngModel\"\n                [placeholder]=\"'register.pleaseChoose' | translate\" [data]=\"sexes\" [(ngModel)]=\"selectedSex\"\n                [ngModelOptions]=\"{ standalone : true }\" [settings]=\"selectSexSettings\" required>\n              </ng-multiselect-dropdown>\n\n            </div>\n            <div class=\"col-md-6 form-group\">\n              <label>{{'register.mail' | translate }}*</label>\n              <input type=\"text\" class=\"form-control shadow-sm\" id=\"registerFormMail\" formControlName=\"registerFormMail\"\n                placeholder=\"name@example.com\">\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group\">\n              <label for=\"registerFormCity\">{{'register.city' | translate }}*</label>\n              <ng-multiselect-dropdown class=\"form-control shadow-sm\" id=\"registerFormCity\" #registerFormCity=\"ngModel\"\n                [placeholder]=\"'register.pleaseChoose' | translate\" [data]=\"cities\" [(ngModel)]=\"selectedCity\"\n                [ngModelOptions]=\"{ standalone : true }\" [settings]=\"selectCitySettings\" required>\n              </ng-multiselect-dropdown>\n            </div>\n            <div class=\"col-md-6 form-group\">\n              <label for=\"registerFormBirthday\">{{'register.birthday' | translate }}*</label>\n              <input type=\"text\" [placeholder]=\"'register.birthdayShort' | translate\" class=\"form-control shadow-sm\"\n                bsDatepicker id=\"registerFormBirthday\" formControlName=\"registerFormBirthday\"\n                [bsConfig]=\"{ dateInputFormat: 'DD.MM.YYYY', colorTheme: 'theme-orange' }\">\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group\">\n              <label for=\"registerFormOffers\">{{'register.offers' | translate }}:*</label>\n              <ng-multiselect-dropdown class=\"form-control shadow-sm\" id=\"registerFormOffers\"\n                #registerFormOffers=\"ngModel\" [placeholder]=\"'register.pleaseChoose' | translate\" [data]=\"offers\"\n                [(ngModel)]=\"selectedOffers\" [ngModelOptions]=\"{ standalone : true }\"\n                [settings]=\"selectOffersActivitiesSettings\" required>\n              </ng-multiselect-dropdown>\n            </div>\n            <div class=\"col-md-6 form-group\">\n              <label for=\"registerFormActivities\">{{'register.activities' | translate }}:*</label>\n              <ng-multiselect-dropdown class=\"form-control shadow-sm\" id=\"registerFormActivities\"\n                #registerFormActivities=\"ngModel\" [placeholder]=\"'register.pleaseChoose' | translate\"\n                [data]=\"activities\" [(ngModel)]=\"selectedActivities\" [ngModelOptions]=\"{ standalone : true }\"\n                [settings]=\"selectOffersActivitiesSettings\" required>\n              </ng-multiselect-dropdown>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group\">\n              <label>{{'register.password' | translate }}*</label>\n              <input type=\"password\" class=\"form-control shadow-sm\" id=\"registerFormPassword\"\n                formControlName=\"registerFormPassword\" placeholder=\"{{'register.password' | translate }}\">\n            </div>\n            <div class=\"col-md-6 form-group\">\n              <label>{{'register.passwordConfirm' | translate }}*</label>\n              <input type=\"password\" class=\"form-control shadow-sm\" id=\"registerFormPasswordConfirm\"\n                formControlName=\"registerFormPasswordConfirm\" placeholder=\"{{'register.passwordConfirm' | translate }}\">\n            </div>\n          </div>\n\n          <!--Validator messages-->\n          <div class=\"alert-danger pl-2\"\n            *ngIf=\"registerFormFirstname.errors && (registerFormFirstname.touched || registerFormFirstname.dirty)\">\n            <div *ngIf=\"registerFormFirstname.errors.required\">{{'register.firstname' | translate }}\n              {{'validators.required' | translate }}</div>\n            <div *ngIf=\"registerFormFirstname.errors.pattern\">{{'validators.letterSpaces' | translate }}</div>\n          </div>\n\n          <!--Validator messages-->\n          <div class=\"alert-danger pl-2\"\n            *ngIf=\"registerFormFirstname.errors && (registerFormFirstname.touched || registerFormFirstname.dirty)\">\n            <div *ngIf=\"registerFormFirstname.errors.required\">{{'register.firstname' | translate }}\n              {{'validators.required' | translate }}</div>\n            <div *ngIf=\"registerFormFirstname.errors.pattern\">{{'validators.letterSpaces' | translate }}</div>\n          </div>\n\n          <div class=\"alert-danger pl-2\"\n            *ngIf=\"registerFormLastname.errors && (registerFormLastname.touched || registerFormLastname.dirty)\">\n            <div *ngIf=\"registerFormLastname.errors.required\">{{'register.lastname' | translate }}\n              {{'validators.required' | translate }}</div>\n            <div *ngIf=\"registerFormLastname.errors.pattern\">{{'validators.letterSpaces' | translate }}</div>\n          </div>\n\n          <div class=\"alert-danger pl-2\"\n            *ngIf=\"registerFormMail.errors && (registerFormMail.touched || registerFormMail.dirty)\">\n            <div *ngIf=\"registerFormMail.errors.required\">{{'register.mail' | translate }}\n              {{'validators.required' | translate }}</div>\n            <div *ngIf=\"registerFormMail.errors.email\">{{'validators.email' | translate }}</div>\n          </div>\n\n          <div class=\"alert-danger pl-2\"\n            *ngIf=\"registerFormPassword.errors && (registerFormPassword.touched || registerFormPassword.dirty)\">\n            <div *ngIf=\"registerFormPassword.errors.required\">{{'register.password' | translate }}\n              {{'validators.required' | translate }}</div>\n            <div *ngIf=\"registerFormPassword.errors.pattern\">{{'validators.passwordPattern' | translate }}</div>\n          </div>\n\n          <div class=\"alert-danger pl-2\"\n            *ngIf=\"registerFormPasswordConfirm.errors && (registerFormPasswordConfirm.touched || registerFormPasswordConfirm.dirty)\">\n            <div *ngIf=\"registerFormPasswordConfirm.errors.required\">{{'register.passwordConfirm' | translate }}\n              {{'validators.required' | translate }}</div>\n            <div *ngIf=\"registerFormPassword.errors.pattern\">{{'validators.passwordPattern' | translate }}</div>\n          </div>\n\n          <div class=\"alert-danger pl-2\"\n            *ngIf=\"registerFormPassword.value != registerFormPasswordConfirm.value && registerFormPasswordConfirm.value != null\">\n            {{'validators.passwordMismatch' | translate }}\n          </div>\n\n          <div class=\"alert-danger pl-2\"\n            *ngIf=\"registerFormSex.errors && (registerFormSex.touched || registerFormSex.dirty)\">\n            <div *ngIf=\"registerFormSex.errors.required\" class=\"alert-danger\">{{'register.sex' | translate }}\n              {{'validators.required' | translate }}</div>\n          </div>\n\n          <div class=\"alert-danger pl-2\"\n            *ngIf=\"registerFormOffers.errors && (registerFormOffers.touched || registerFormOffers.dirty)\">\n            <div *ngIf=\"registerFormOffers.errors.required\" class=\"alert-danger\">{{'validators.minOffers' | translate }}\n            </div>\n          </div>\n\n          <div class=\"alert-danger pl-2\"\n            *ngIf=\"registerFormActivities.errors && (registerFormActivities.touched || registerFormActivities.dirty)\">\n            <div *ngIf=\"registerFormActivities.errors.required\" class=\"alert-danger\">\n              {{'validators.minActivities' | translate }}</div>\n          </div>\n\n          <div class=\"alert-danger pl-2\"\n            *ngIf=\"registerFormCity.errors && (registerFormCity.touched || registerFormCity.dirty)\">\n            <div *ngIf=\"registerFormCity.errors.required\" class=\"alert-danger\">{{'validators.city' | translate }}</div>\n          </div>\n\n          <div class=\"alert-danger pl-2\"\n            *ngIf=\"registerFormBirthday.errors && (registerFormBirthday.touched || registerFormBirthday.dirty)\">\n            <div *ngIf=\"registerFormBirthday.errors.required\" class=\"alert-danger\">\n              {{'validators.birthday' | translate }}</div>\n          </div>\n          <!--End-Validator messages-->\n\n          <div class=\"btn-toolbar d-flex justify-content-center\" role=\"toolbar\">\n            <div class=\"btn-group mr-1 mr-md-3\">\n              <button type=\"button\" type=\"submit\" class=\"btn btn-warning d-flex mx-auto mt-2\"\n                [disabled]=\"(!registerForm.valid || !registerFormOffers.valid || !registerFormActivities.valid || !registerFormCity.valid)\">{{'register.saveButton' | translate }}</button>\n            </div>\n            <div class=\"btn-group ml-md-3\">\n              <button type=\"button\" [routerLink]=\"['/login']\"\n                class=\"btn btn-outline-warning d-flex mx-auto mt-2\">{{'register.quitButton' | translate }}</button>\n            </div>\n          </div>\n        </form>\n      </div>\n      <p class=\"d-flex justify-content-end text-black-50 mr-4\"><small>*\n          {{'register.requiredExplanation' | translate }}</small></p>\n    </div>\n    <!--card-->\n  </div>\n  <!--col-10-->\n  <div class=\"col-1\"></div>\n</div>\n"

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
        this.md5 = new ts_md5__WEBPACK_IMPORTED_MODULE_7__["Md5"]();
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
            registerFormPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d).{6,16}$')]],
            // at least 6 characters, must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number, can contain special characters
            // tslint:disable-next-line:max-line-length
            registerFormPasswordConfirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d).{6,16}$')]]
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
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        // selecting settings for the select fields of offers and activities
        this.selectOffersActivitiesSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            enableCheckAll: false,
            itemsShowLimit: 3,
            allowSearchFilter: true
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
            city: this.selectedCity[0],
            dateOfBirth: this.registerForm.value.registerFormBirthday,
            // get the only one item from selectedSex-Array
            sex: this.parseSexValueForBackend(this.selectedSex[0]),
            activities: this.selectedActivities,
            offers: this.selectedOffers,
            mail: this.registerForm.value.registerFormMail,
            password: this.md5.appendStr(this.registerForm.value.registerFormMail)
                .appendStr(this.registerForm.value.registerFormPassword).end()
        };
        // create new user in Firebase Authentication and Cloud Firestore
        this.userStoreService.createUser(userdata).subscribe(function () {
            // then go to page 'login'
            _this.router.navigate(['/login']);
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

module.exports = "<div class=\"row my-5\">\n  <div class=\"col-1\"></div>\n  <div class=\"col-10\">\n    <div *ngIf=\"searchResults$, else elseBlock\"> <!-- TODO Need something else to check, if there are any results -->\n      <div class=\"card\">\n        <div class=\"card-header bg-transparent text-center border-warning\">\n          <h2 class=\"font-weight-light\">{{ 'result.results' | translate }}</h2>\n        </div>\n        <div class=\"card-body mx-5\">\n          <!-- show all accepted matches which are saved in acceptedMatches[]-->\n          <div\n            *ngFor=\"let user of searchResults$ | async | paginate: { itemsPerPage: 5, currentPage: pageNumber } \"> <!--  -->\n            <div class=\"card shadow my-3\">\n              <div class=\"card-body accepted-match-cards\">\n                <div class=\"card-text\">\n                  <div class=\"row\">\n                    <div class=\"col-8 col-md-10\">\n                      <p class=\"my-0\"><small><b>{{ user.firstname }} {{ user.lastname }}</b></small></p>\n                      <p class=\"my-0\"><small><i>{{ parseSexValueForFrontend(user.sex) }}</i></small></p>\n                      <p class=\"my-0\"><small><i>{{ user.city }}</i></small></p>\n                      <p class=\"my-0\"><small><i>{{ user.dateOfBirth }} {{ 'result.age' | translate }}</i></small></p>\n                      <p class=\"my-0\"><small><i>{{ 'result.activities' | translate }}</i>: {{ user.activities }}</small></p>\n                    </div>\n                    <div class=\"col-4 col-md-2 d-flex justify-content-end my-auto\">\n                      <button type=\"button\" class=\"btn btn-outline-success homebutton\" (click)=\"sendMatchrequest(user)\"\n                        data-toggle=\"tooltip\" data-placement=\"top\"\n                        title=\"{{ 'result.sendMatchrequestTooltip' | translate }}\">\n                        <fa-icon [icon]=\"faUserCheck\"></fa-icon>\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!--ngFor-->\n\n          <!--controls for pagination, which are only visible at the length of matchRequest-array bigger than 5-->\n          <pagination-controls autoHide=\"true\" class=\"pagination justify-content-center\"\n            (pageChange)=\"pageNumber = $event\" previousLabel=\"{{'home.previous' | translate }}\"\n            nextLabel=\"{{'home.next' | translate }}\">\n          </pagination-controls>\n        </div>\n      </div>\n    </div>\n    <!-- if there are no matchrequests-->\n    <ng-template #elseBlock>\n      <p class=\"text-center\">{{ 'result.noResults' | translate}}</p>\n    </ng-template>\n  </div>\n  <!--col-10-->\n  <div class=\"col-1\"></div>\n</div>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_match_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/match-store.service */ "./src/app/services/match-store.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _models_match__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../..//models/match */ "./src/app/models/match.ts");








var ResultPageComponent = /** @class */ (function () {
    function ResultPageComponent(matchStoreService, authService, searchService, route) {
        this.matchStoreService = matchStoreService;
        this.authService = authService;
        this.searchService = searchService;
        this.route = route;
        // input variables for searchparams and the Link for getting the result is required!!
        this.faUserCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faUserCheck"];
        this.userForSpecificRequest = [];
        this.usersToBeExcludedArray = [];
    }
    ResultPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var searchRequestId = this.route.snapshot.paramMap.get('id');
        this.searchService.getSearchRequestById(searchRequestId).subscribe(function (searchRequest) {
            console.log(searchRequest);
            _this.matchedOffer = searchRequest.offerParam; // TODO check, if the error message occures again
            _this.searchResults$ = _this.searchService.getSearchResult(searchRequest);
            _this.searchService.getSearchResult(searchRequest).subscribe();
        });
    };
    ResultPageComponent.prototype.calculateAgeForEachUser = function (birthdate) {
        var timeDiff = Math.abs(Date.now() - birthdate);
        var age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
        return age;
    };
    ResultPageComponent.prototype.parseSexValueForFrontend = function (sex) {
        if (sex === 'm') {
            return 'male';
        }
        else if (sex === 'f') {
            return 'female';
        }
    };
    ResultPageComponent.prototype.sendMatchrequest = function (partner) {
        var newMatch = new _models_match__WEBPACK_IMPORTED_MODULE_7__["Match"](this.authService.currentUserID, partner.uid, this.matchedOffer, false);
        this.matchStoreService.createMatch(newMatch).subscribe();
    };
    ResultPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-result-page',
            template: __webpack_require__(/*! ./result-page.component.html */ "./src/app/components/result-page/result-page.component.html"),
            styles: [__webpack_require__(/*! ./result-page.component.scss */ "./src/app/components/result-page/result-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_match_store_service__WEBPACK_IMPORTED_MODULE_4__["MatchStoreService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
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

module.exports = "<div *ngIf=\"router.url === '/search'\" class=\"row\">\n  <div class=\"col-1\"></div>\n  <div class=\"col-10\">\n    <div class=\"card mx-auto my-5 shadow\">\n      <!--header-->\n      <div class=\"card-header h5 bg-transparent d-flex justify-content-between border-warning p-0\">\n        <div class=\"col-md-6 font-weight-light text-center pointer-cursor align-self-center border-right btn-outline-warning py-3\"\n          data-toggle=\"collapse\" href=\"#collapseNewSearch\"\n          [ngClass]=\"{'active':newSearchCollapsed === true}\"\n          role=\"button\" aria-expanded=\"false\"\n          aria-controls=\"collapseNewSearch\" (click)=\"recentRequestCollapsed=false\" (click)=\"newSearchCollapsed=true\">\n          {{'search.newSearch' | translate }}\n        </div>\n        <div class=\"col-md-6 font-weight-light text-center pointer-cursor btn-outline-warning py-3\"\n            [ngClass]=\"{'active':recentRequestCollapsed === true}\"\n            data-toggle=\"collapse\" href=\"#collapseRecentSearches\"\n            role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseRecentSearches\"\n            (click)=\"newSearchCollapsed=false\" (click)=\"recentRequestCollapsed=true\">\n            {{'search.recentSearches' | translate }}\n        </div>\n      </div><!--header-->\n\n      <!--new search area-->\n      <div *ngIf=\"newSearchCollapsed\" class=\"card-body\" id=\"collapseNewSearch\">\n        <form class=\"\" [formGroup]=\"searchForm\" (ngSubmit)=\"newSearchSave()\" novalidate>\n          <div class=\"row\">\n            <div class=\"form-group col-md-6\">\n              <label for=\"searchFormOffer\">{{'search.offer' | translate }}:*</label>\n              <ng-multiselect-dropdown  class=\"form-control shadow-sm\" id=\"searchFormOffer\" #searchFormOffer=\"ngModel\"\n                [placeholder]=\"'search.offer' | translate\"\n                [data]=\"offers\"\n                [(ngModel)]=\"selectedOffer\" [ngModelOptions]=\"{ standalone : true }\"\n                [settings]=\"selectOnlyOneSettings\" required>\n              </ng-multiselect-dropdown>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group\">\n              <label for=\"searchFormCity\">{{'search.city' | translate }}</label>\n              <ng-multiselect-dropdown  class=\"form-control shadow-sm\" id=\"searchFormCity\" #searchFormCity=\"ngModel\"\n                [placeholder]=\"'register.pleaseChoose' | translate\"\n                [data]=\"cities\"\n                [(ngModel)]=\"selectedCity\" [ngModelOptions]=\"{ standalone : true }\"\n                [settings]=\"selectOnlyOneSettings\">\n              </ng-multiselect-dropdown>\n            </div>\n            <div class=\"col-md-6 form-group\">\n              <label for=\"searchFormSex\">{{'register.sex' | translate }}:</label>\n              <ng-multiselect-dropdown  class=\"form-control shadow-sm\" id=\"searchFormSex\" #searchFormSex=\"ngModel\"\n                [placeholder]=\"'register.pleaseChoose' | translate\"\n                [data]=\"sexes\"\n                [(ngModel)]=\"selectedSex\" [ngModelOptions]=\"{ standalone : true }\"\n                [settings]=\"selectSexSettings\">\n              </ng-multiselect-dropdown>\n            </div>\n            </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group\">\n                <label>{{'search.minAge' | translate }}</label>\n                <input type=\"number\" class=\"form-control shadow-sm\" id=\"searchFormMinAge\" formControlName=\"searchFormMinAge\" placeholder=\"{{'search.minAge' | translate }}\">\n            </div>\n            <div class=\"col-md-6 form-group\">\n                <label>{{'search.maxAge' | translate }}</label>\n                <input type=\"number\" class=\"form-control shadow-sm\" id=\"searchFormMaxAge\" formControlName=\"searchFormMaxAge\" placeholder=\"{{'search.maxAge' | translate }}\">\n            </div>\n          </div>\n\n          <div class=\"alert-danger pl-2\" *ngIf=\"searchFormOffer.errors && (searchFormOffer.touched || searchFormOffer.dirty)\">\n            <div *ngIf=\"searchFormOffer.errors.required\" class=\"alert-danger\">{{'validators.minOffers' | translate }}</div>\n          </div>\n\n          <div class=\"alert-danger pl-2\" *ngIf=\"searchFormMinAge.value > searchFormMaxAge.value && searchFormMaxAge.touched\">\n            {{'validators.ageMismatch' | translate }}\n          </div>\n\n          <div class=\"row\" role=\"toolbar\">\n            <div class=\"col-md-6\">\n              <button type=\"button\" type=\"submit\" class=\"btn btn-warning d-flex mx-auto ml-md-auto mt-2\"\n                      [disabled]=\"!searchFormOffer.valid || (searchFormMinAge.value > searchFormMaxAge.value  && searchFormMaxAge.touched)\">\n                      {{'search.searchButton' | translate }}\n              </button>\n            </div>\n            <div class=\"col-md-6\">\n              <button type=\"button\" [routerLink]=\"['/home']\" class=\"btn btn-outline-warning d-flex mx-auto mr-md-auto mt-2\" >{{'register.quitButton' | translate }}</button>\n            </div>\n          </div>\n\n        </form>\n      </div>\n\n      <!--recent searchrequests area-->\n      <div *ngIf=\"recentRequestCollapsed\" class=\"card-body collapse\" id=\"collapseRecentSearches\">\n        <div *ngFor=\"let request of recentSearchRequests$ | async\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <a class=\"pointer-cursor\" (click)=\"useRecentSearchrequest(request.id)\">\n                <h5 class=\"font-weight-light\">{{request.offerParam}}</h5>\n                <h6 class=\"font-weight-light\">{{request.minAgeParam}} - {{request.maxAgeParam}} Jahre </h6>\n                <h6 class=\"font-weight-light\">{{request.sexParam}}</h6>\n              </a>\n            </div>\n          </div>\n        </div><!--ngfor-->\n      </div><!--recent searchrequests-->\n\n    </div>\n  </div><!--col-10-->\n  <div class=\"col-1\"></div>\n</div>\n<app-result-page *ngIf=\"router.url === '/search/result'\"></app-result-page>\n"

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_activities_offers_cities_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/activities-offers-cities-store.service */ "./src/app/services/activities-offers-cities-store.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/search.service */ "./src/app/services/search.service.ts");







var SearchPageComponent = /** @class */ (function () {
    function SearchPageComponent(formBuilder, router, activitiesOffersCitiesStoreService, searchService, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.activitiesOffersCitiesStoreService = activitiesOffersCitiesStoreService;
        this.searchService = searchService;
        this.authService = authService;
        // where the data for the select fields comes from
        this.sexes = ['female', 'male', 'both'];
        // settings for select fields
        this.selectOnlyOneSettings = {};
        this.selectSexSettings = {};
        // getting active & collapsed state
        this.newSearchCollapsed = true;
        this.recentRequestCollapsed = false;
        this.searchForm = this.createSearchForm();
    }
    SearchPageComponent.prototype.ngOnInit = function () {
        // initialzie all available offers & cities
        this.offers = this.activitiesOffersCitiesStoreService.getAllOffers();
        this.cities = this.activitiesOffersCitiesStoreService.getAllCities();
        this.initializeMultiselectSettings();
        // tslint:disable-next-line:max-line-length
        // this.searchService.getRecentSearchrequestsForSpecificUser(this.authService.currentUserID)
        // .subscribe((requests: Searchrequest[]) => {
        //   this.recentSearchrequests = requests;
        // });
        this.recentSearchRequests$ = this.searchService.getRecentSearchRequests();
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
            allowSearchFilter: true,
            closeDropDownOnSelection: true
        };
        this.selectSexSettings = {
            singleSelection: true,
            idField: 'item_id',
            textField: 'item_text',
            enableCheckAll: false,
            allowSearchFilter: false,
            closeDropDownOnSelection: true,
        };
    };
    SearchPageComponent.prototype.ageCheckValidator = function (control) {
        if (control.get('searchFormMinAge').value > control.get('searchFormMaxAge').value) {
            return { invalid: true };
        }
    };
    SearchPageComponent.prototype.newSearchSave = function () {
        var _this = this;
        var searchdata = {
            offerParam: this.selectedOffer[0],
            cityParam: this.selectedCity[0],
            sexParam: this.parseSexValueForBackend(this.selectedSex[0]),
            minAgeParam: this.searchForm.value.searchFormMinAge,
            maxAgeParam: this.searchForm.value.searchFormMaxAge,
            createdAt: Date.now(),
            uid: this.authService.currentUserID
        };
        this.searchService.createSearchrequest(searchdata)
            .subscribe(function (response) {
            _this.router.navigate(["/search/result/" + response.id]);
        });
    };
    SearchPageComponent.prototype.useRecentSearchrequest = function (searchRequestId) {
        this.router.navigate(["/search/result/" + searchRequestId]);
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-search-page',
            template: __webpack_require__(/*! ./search-page.component.html */ "./src/app/components/search-page/search-page.component.html"),
            styles: [__webpack_require__(/*! ./search-page.component.scss */ "./src/app/components/search-page/search-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_activities_offers_cities_store_service__WEBPACK_IMPORTED_MODULE_2__["ActivitiesOffersCitiesStoreService"],
            src_app_services_search_service__WEBPACK_IMPORTED_MODULE_6__["SearchService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
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

/***/ "./src/app/services/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.getCurrentUser()];
                    case 1:
                        user = _a.sent();
                        // console.log('Auth Guard');
                        // console.log(user);
                        if (!user) {
                            this.router.navigate(['/']);
                        }
                        return [2 /*return*/, !!user];
                }
            });
        });
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var AuthService = /** @class */ (function () {
    function AuthService(angularFireAuth, angularFirestore, router) {
        var _this = this;
        this.angularFireAuth = angularFireAuth;
        this.angularFirestore = angularFirestore;
        this.router = router;
        this.isLoggedIn = false;
        this.user$ = this.angularFireAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (user) {
            if (user) {
                _this.currentUserID = user.uid;
                _this.currentUsername = user.displayName;
                return _this.angularFirestore.doc("users/" + user.uid).valueChanges();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
            }
        }));
    }
    AuthService.prototype.isloggedIn = function () {
        var user = this.angularFireAuth.auth.currentUser;
        // console.log(this.user$);
        if (user) {
            return this.isLoggedIn = true;
        }
        else {
            return this.isLoggedIn = false;
        }
    };
    AuthService.prototype.getCurrentUser = function () {
        return this.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).toPromise();
    };
    AuthService.prototype.getCurrentUsername = function () {
        return this.currentUsername;
    };
    AuthService.prototype.logout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.angularFireAuth.auth.signOut()];
                    case 1:
                        _a.sent();
                        this.isLoggedIn = false;
                        localStorage.removeItem('user');
                        this.router.navigate(['/login']);
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.login = function (mail, password) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/chat.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");







var ChatService = /** @class */ (function () {
    function ChatService(authService, angularFirestore, http) {
        this.authService = authService;
        this.angularFirestore = angularFirestore;
        this.http = http;
        // TODO change if using over web
        this.apiUrl = 'https://us-central1-livechattandem.cloudfunctions.net/chatrooms';
        // private apiUrl2 = 'http://localhost:5000/livechattandem/us-central1/chatrooms';
        this.apiUrl2 = 'https://us-central1-livechattandem.cloudfunctions.net/chatrooms';
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    // Create a new chatroom by calling the corresponding endpoint.
    ChatService.prototype.create = function (userA, userB) {
        var data = {
            userA: userA,
            userB: userB,
            updated: Date.now(),
            messages: []
        };
        return this.http.post("" + this.apiUrl2, data);
    };
    // Send a message to the Cloud Firestore database by valling the corresponding endpoint.
    ChatService.prototype.sendMessage = function (chatroomId, content) {
        var uid = this.authService.currentUserID;
        var data = {
            uid: uid,
            content: content,
            createdAt: Date.now()
        };
        return this.http.put(this.apiUrl2 + "/" + chatroomId, data);
    };
    // Get all chatrooms of the current user and return it as an observable array with realtime changes.
    ChatService.prototype.getAllChatrooms = function () {
        var resultA = this.queryChatrooms('userA');
        var resultB = this.queryChatrooms('userB');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(resultA, resultB).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_a) {
            var users = _a[0], otherUsers = _a[1];
            return users.concat(otherUsers);
        }));
    };
    // Query chatrooms by field name.
    ChatService.prototype.queryChatrooms = function (fieldName) {
        var _this = this;
        return this.authService.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (user) {
            return _this.angularFirestore
                .collection('chatrooms', function (ref) { return ref.where(fieldName, '==', user ? user.uid : ''); })
                .snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) {
                return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    var id = a.payload.doc.id;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
                });
            }));
        }));
    };
    // Get an chatroom by it's doc-id and return it as an observable with realtime changes.
    ChatService.prototype.getChatroomById = function (chatroomId) {
        return this.angularFirestore
            .collection("chatrooms")
            .doc(chatroomId)
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (doc) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: doc.payload.id }, doc.payload.data());
        }));
    };
    // Get the corresponding user to every message as an observable with realtime changes.
    ChatService.prototype.joinUsers = function (chat$) {
        var _this = this;
        var chat;
        var joinKeys = {};
        return chat$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (c) {
            // Unique User IDs
            chat = c;
            var uids = Array.from(new Set(c.messages.map(function (value) { return value.uid; })));
            // Firestore User Doc Reads
            var userDocs = uids.map(function (u) {
                return _this.angularFirestore.doc("users/" + u).valueChanges();
            });
            return userDocs.length ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(userDocs) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (array) {
            array.forEach(function (v) { return (joinKeys[v.uid] = v); });
            chat.messages = chat.messages.map(function (v) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, v, { user: joinKeys[v.uid] });
            });
            return chat;
        }));
    };
    ChatService.prototype.deleteChatroom = function (chatroomId) {
        return this.http.delete(this.apiUrl + "/" + chatroomId);
    };
    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], ChatService);
    return ChatService;
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
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var MatchStoreService = /** @class */ (function () {
    function MatchStoreService(http, angularFirestore, authService) {
        this.http = http;
        this.angularFirestore = angularFirestore;
        this.authService = authService;
        // private apiUrl = 'http://localhost:5000/livechattandem/us-central1';
        this.apiUrl = 'https://us-central1-livechattandem.cloudfunctions.net';
    }
    MatchStoreService.prototype.createMatch = function (match) {
        return this.http.post(this.apiUrl + "/matches/", match);
    };
    MatchStoreService.prototype.getAllUnAcceptedMatches = function () {
        return this.queryMatches('partnerID', false);
    };
    MatchStoreService.prototype.getAllAcceptedMatches = function () {
        var resultA = this.queryMatches('partnerID', true);
        var resultB = this.queryMatches('initiatorID', true);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])(resultA, resultB).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_a) {
            var users = _a[0], otherUsers = _a[1];
            return users.concat(otherUsers);
        }));
    };
    MatchStoreService.prototype.getAllMatchrequests = function () {
        return this.queryMatches('initiatorID', false);
    };
    MatchStoreService.prototype.queryMatches = function (fieldNameOfRole, boolValueOfAccepted) {
        var _this = this;
        return this.authService.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) {
            return _this.angularFirestore
                .collection('matches', function (ref) { return ref.where(fieldNameOfRole, '==', user ? user.uid : '')
                .where('accepted', '==', boolValueOfAccepted); })
                .snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (actions) {
                return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    var id = a.payload.doc.id;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
                });
            }));
        }));
    };
    MatchStoreService.prototype.updateMatch = function (matchId, data) {
        return this.http.put(this.apiUrl + "/matches/" + matchId, data);
    };
    MatchStoreService.prototype.deleteMatch = function (matchId) {
        return this.http.delete(this.apiUrl + "/matches/" + matchId);
    };
    MatchStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
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
/* harmony import */ var _match_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./match-store.service */ "./src/app/services/match-store.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");








var SearchService = /** @class */ (function () {
    function SearchService(http, angularFirestore, authService, matchStoreService) {
        this.http = http;
        this.angularFirestore = angularFirestore;
        this.authService = authService;
        this.matchStoreService = matchStoreService;
        // private apiUrl = 'http://localhost:5000/livechattandem/us-central1';
        this.apiUrl = 'https://us-central1-livechattandem.cloudfunctions.net';
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    SearchService.prototype.createSearchrequest = function (searchdata) {
        return this.http.post(this.apiUrl + "/searches/", searchdata);
    };
    SearchService.prototype.getRecentSearchRequests = function () {
        return this.angularFirestore
            .collection("users/" + this.authService.currentUserID + "/searches")
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
    };
    SearchService.prototype.getSearchRequestById = function (searchRequestId) {
        return this.angularFirestore
            .collection('users')
            .doc(this.authService.currentUserID)
            .collection('searches')
            .doc(searchRequestId).valueChanges();
    };
    SearchService.prototype.getSearchResult = function (searchRequest) {
        var _this = this;
        return this.getUsersToBeExcludedArray().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (userArray) {
            return _this.angularFirestore
                .collection('users', function (ref) { return ref.where('offers', 'array-contains', searchRequest.offerParam)
                .where('city', '==', searchRequest.cityParam)
                .where('sex', '==', searchRequest.sexParam); })
                .snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) {
                return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data);
                });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (users) {
                var filteredUsers = [];
                users.map(function (user) {
                    if (userArray.includes(user.uid) === false) {
                        filteredUsers.push(user);
                    }
                });
                return filteredUsers;
            }));
        }));
    };
    SearchService.prototype.getUsersToBeExcludedArray = function () {
        var allAcceptedMatches = this.matchStoreService.getAllAcceptedMatches().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (matches) {
            var userArray = [];
            matches.map(function (match) {
                userArray.push(match.initiatorID);
                userArray.push(match.partnerID);
            });
            return userArray;
        }));
        var allUnAcceptedMatches = this.matchStoreService.getAllUnAcceptedMatches().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (matches) {
            var userArray = [];
            matches.map(function (match) {
                userArray.push(match.initiatorID);
                userArray.push(match.partnerID);
            });
            return userArray;
        }));
        var matchRequests = this.matchStoreService.getAllMatchrequests().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (matches) {
            var userArray = [];
            matches.map(function (match) {
                userArray.push(match.initiatorID);
                userArray.push(match.partnerID);
            });
            return userArray;
        }));
        var resultA = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])(allAcceptedMatches, allUnAcceptedMatches).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_a) {
            var acceptedUser = _a[0], unAcceptedUser = _a[1];
            return acceptedUser.concat(unAcceptedUser);
        }));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])(resultA, matchRequests).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_a) {
            var resultAUser = _a[0], matchRequestUser = _a[1];
            return resultAUser.concat(matchRequestUser);
        }));
    };
    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _match_store_service__WEBPACK_IMPORTED_MODULE_1__["MatchStoreService"]])
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
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var UserStoreService = /** @class */ (function () {
    function UserStoreService(http, angularFirestore) {
        this.http = http;
        this.angularFirestore = angularFirestore;
        // private apiUrl = 'http://localhost:5000/livechattandem/us-central1';
        this.apiUrl = 'https://us-central1-livechattandem.cloudfunctions.net';
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    UserStoreService.prototype.getAllUsers = function () {
        return this.http.get(this.apiUrl + "/users");
    };
    UserStoreService.prototype.getUserById = function (uid) {
        return this.angularFirestore
            .collection("users")
            .doc(uid).valueChanges();
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
        return this.http.post(this.apiUrl + "/users/", data);
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
    UserStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
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
        apiKey: 'AIzaSyA60SCLQd6f7KOT_UmUml5RgMnAC3F5E_A',
        projectId: 'livechattandem'
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

module.exports = __webpack_require__(/*! /Users/constantinbeer/WebProg19/tandemPartner3/angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map