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
        path: 'result/:id',
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
/* harmony import */ var _services_utility_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/utility-store.service */ "./src/app/services/utility-store.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(utilitiesService) {
        this.utilitiesService = utilitiesService;
        this.title = 'tandem-frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_utility_store_service__WEBPACK_IMPORTED_MODULE_1__["UtilityStoreService"]])
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
/* harmony import */ var _services_utility_store_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/utility-store.service */ "./src/app/services/utility-store.service.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pipes/sort.pipe */ "./src/app/pipes/sort.pipe.ts");













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
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_26__["NavbarComponent"],
                _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_38__["SortPipe"]
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
                _services_utility_store_service__WEBPACK_IMPORTED_MODULE_31__["UtilityStoreService"],
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

module.exports = "<div class=\"row mt-4\">\n  <div class=\"col-1\"></div>\n  <div class=\"col-12 col-md-10\">\n    <div class=\"card m-4 text-center shadow-sm\">\n\n      <h1 class=\"card-title font-weight-light mt-2\">{{ 'about.heading' | translate }}</h1>\n      <hr class=\"my-1 border-warning\">\n      <div class=\"card-body\">\n        <blockquote class=\"blockquote mb-0\">\n          <p>{{ 'about.blockquote' | translate }}</p>\n          <footer class=\"blockquote-footer\">Benjamin Fanklin</footer>\n        </blockquote>\n\n        <br />\n        <div class=\"card-text\">\n          {{ 'about.explanation' | translate }}\n        </div>\n\n      </div>\n\n\n      <br />\n      <img src=\"../../../assets/images/Team-Foto.jpg\" class=\"card-img-top\" alt=\"...\">\n      <div class=\"card-body\">\n        <p class=\"card-text\">{{ 'about.imageExplanation' | translate }}<br />\n          Arne, Eric, Pascal, Joe und Luis</p>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"col-1\"></div>\n</div>\n"

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

module.exports = "<div class=\"row mt-4\">\n  <div class=\"col-1\"></div>\n  <div class=\"col-12\">\n    <ng-container *ngIf=\"chatroom$ | async as chat\">\n      <ng-container *ngIf=\" authService.user$ | async as user\">\n\n        <div #chatBox class=\"card shadow mb-2\">\n          <div class=\"card-body\">\n            <div *ngFor=\"let message of chat.messages; trackBy: trackByCreated\"><!-- TODO trackBy seems not working.-->\n              <div *ngIf=\"message.user?.uid !== authService.currentUserID; else positionRight\" class=\"card col-10 col-md-8 shadow-sm mb-3\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\"\n                data-autohide=\"false\">\n\n\n                <div class=\"toast-header border-info\">\n                  <strong class=\"mr-auto\">{{ message.user?.firstname }}</strong>\n                  <small class=\"text-muted\">{{ message.createdAt | date: 'dd.MM.yyyy' }}</small>\n                </div>\n                <div class=\"toast-body small\">\n                  {{ message.content }}\n                </div>\n              </div><!--ngif message.user.uid !== currentUserID-->\n              <ng-template #positionRight>\n                <div class=\"card col-10 offset-2 col-md-8 offset-md-4 shadow-sm mb-3\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\"\n                data-autohide=\"false\">\n\n\n                <div class=\"toast-header border-warning\">\n                  <strong class=\"mr-auto\">{{ 'chatroomItem.currentUser' | translate }}</strong>\n                  <small class=\"text-muted\">{{ message.createdAt | date: 'dd.MM.yyyy' }}</small>\n                </div>\n                <div class=\"toast-body small\">\n                  {{ message.content }}\n                </div>\n              </div>\n              </ng-template>\n            </div>\n          </div>\n\n\n        <form>\n          <div class=\"form-row mb-3 mx-3\">\n\n            <div class=\"col-md-8 offset-md-4\">\n              <div class=\"input-group\">\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newMessage\" name=\"messageInput\" maxlength=\"100\"\n                  (keydown.enter)=\"submit(chat.id)\" placeholder=\"{{ 'chatroomItem.inputPlaceholder' | translate }}\" autofocus>\n                <div class=\"input-group-append ml-2\">\n                    <button class=\"btn btn-outline-warning\" type=\"button\" (click)=\"submit(chat.id)\"\n                    [disabled]=\"!newMessage\">\n                    <fa-icon [icon]=\"faReply\"></fa-icon>\n                  </button>\n                </div>\n              </div>\n\n            </div>\n\n          </div>\n        </form>\n      </div>\n\n      </ng-container>\n    </ng-container>\n  </div>\n  <div class=\"col-1\"></div>\n</div>\n"

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
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");






var ChatroomItemComponent = /** @class */ (function () {
    function ChatroomItemComponent(chatService, route, authService) {
        this.chatService = chatService;
        this.route = route;
        this.authService = authService;
        this.faReply = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faReply"];
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

module.exports = "<div class=\"row mt-4\">\n  <div class=\"col-1\"></div>\n  <div class=\"col-10\">\n    <div class=\"card shadow my-3\" *ngFor=\"let chatroom of userChatsAsUserA$\">\n      <div class=\"card-body py-2 accepted-match-cards\">\n        <div class=\"row\">\n          <div class=\"col-10\">\n            <!-- TODO map the userA or userB (depending on the currentUser) to a modal to display profile pic and name  -->\n            <a [routerLink]=\"chatroom.id\">\n              <span class=\"text-decoration-none text-dark\">{{ chatroom.firstname }} {{ chatroom.lastname }}</span>\n              <hr class=\"border-warning border-bottom mt-0 mb-1\">\n              <p class=\"text-muted mb-0\">{{ chatroom.messages.length }} {{'chatroomList.messages' | translate }}</p>\n            </a>\n          </div>\n          <div class=\"col-2 d-flex align-items-center justify-content-end\">\n            <button type=\"button\" class=\"btn btn-outline-danger homebutton\" (click)=\"openModal(chatroom.id, 'userChatsAsUserA$')\"\n            data-toggle=\"tooltip\" data-placement=\"top\" title=\"{{ 'chatroomList.deleteTooltip' | translate }}\">\n              <fa-icon [icon]=\"faTimes\"></fa-icon>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"card shadow my-3\" *ngFor=\"let chatroom of userChatsAsUserB$\">\n      <div class=\"card-body py-2 accepted-match-cards\">\n        <div class=\"row\">\n          <div class=\"col-10\">\n            <!-- TODO map the userA or userB (depending on the currentUser) to a modal to display profile pic and name  -->\n            <a [routerLink]=\"chatroom.id\">\n              <span class=\"text-decoration-none text-dark\">{{ chatroom.firstname }} {{ chatroom.lastname }}</span>\n              <hr class=\"border-warning border-bottom mt-0 mb-1\">\n              <p class=\"text-muted mb-0\">{{ chatroom.messages.length }} {{'chatroomList.messages' | translate }}</p>\n            </a>\n          </div>\n          <div class=\"col-2 d-flex align-items-center justify-content-end\">\n            <button type=\"button\" class=\"btn btn-outline-danger homebutton\" (click)=\"openModal(chatroom.id, 'userChatsAsUserB$')\"\n            data-toggle=\"tooltip\" data-placement=\"top\" title=\"{{ 'chatroomList.deleteTooltip' | translate }}\">\n              <fa-icon [icon]=\"faTimes\"></fa-icon>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"col-1\"></div>\n</div>\n\n<!-- Modal -->\n<div class=\"modal-backdrop fade in\" [ngStyle]=\"{'display':display}\"></div>\n<div *ngIf=\"modalIsOpen\" class=\"modal\" [ngStyle]=\"{'display': display}\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\">{{ 'chatroomList.deleteModalHeader' | translate }}</h5>\n          <button type=\"button\" class=\"close\" (click)=\"closeModal()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          {{ 'chatroomList.deleteModalQuestion' | translate}}\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-outline-warning\" (click)=\"deleteChatroom()\">{{ 'chatroomList.deleteButton' | translate }}</button>\n          <button type=\"button\" class=\"btn btn-warning\" (click)=\"closeModal()\">{{ 'register.quitButton' | translate }}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");







var ChatroomListComponent = /** @class */ (function () {
    function ChatroomListComponent(authService, chatService, router, userStoreService) {
        var _this = this;
        this.authService = authService;
        this.chatService = chatService;
        this.router = router;
        this.userStoreService = userStoreService;
        this.currentUser = this.authService.getCurrentUser();
        this.userChatsAsUserA$ = [];
        this.userChatsAsUserB$ = [];
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTimes"];
        // for modal
        this.display = 'none';
        this.modalIsOpen = false;
        this.chatService.getAllChatroomsAsUserA().subscribe(function (chatrooms) {
            _this.userChatsAsUserALength = chatrooms.length;
            _this.userChatsAsUserA$ = chatrooms;
        }, function (error) {
            console.log('Error in profile-page - TODO delete this console.log() before finishing WebProg!');
        });
        this.chatService.getAllChatroomsAsUserB().subscribe(function (chatrooms) {
            _this.userChatsAsUserBLength = chatrooms.length;
            _this.userChatsAsUserB$ = chatrooms;
        }, function (error) {
            console.log('Error in profile-page - TODO delete this console.log() before finishing WebProg!');
        });
    }
    ChatroomListComponent.prototype.ngOnInit = function () {
    };
    // deleteChatroom() {
    //   this.chatService.deleteChatroom(this.roomToBeDeleted).subscribe(() => {
    //     if (this.userChatsAsUserALength === 1 || this.userChatsAsUserBLength === 1) {
    //       this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
    //         this.router.navigate(['/chats']));
    //     }
    //   });
    //   this.closeModal();
    // }
    // TODO doesn't work properly
    ChatroomListComponent.prototype.deleteChatroom = function () {
        var _this = this;
        var indexNumber;
        if (this.chatsArrayName === 'userChatsAsUserA$') {
            this.chatService.deleteChatroom(this.roomToBeDeleted).subscribe(function () {
                for (var index = 0; index < _this.userChatsAsUserA$.length; index++) {
                    if (_this.userChatsAsUserA$[index].id === _this.roomToBeDeleted) {
                        indexNumber = index;
                    }
                }
                _this.userChatsAsUserA$.splice(indexNumber, 1);
            });
        }
        else {
            this.chatService.deleteChatroom(this.roomToBeDeleted).subscribe(function () {
                for (var index = 0; index < _this.userChatsAsUserB$.length; index++) {
                    if (_this.userChatsAsUserB$[index].id === _this.roomToBeDeleted) {
                        indexNumber = index;
                    }
                }
                _this.userChatsAsUserB$.splice(indexNumber, 1);
            });
        }
        this.closeModal();
    };
    ChatroomListComponent.prototype.openModal = function (chatroomId, chatsArrayName) {
        console.log('id: ' + chatroomId);
        this.modalIsOpen = true;
        this.display = 'block';
        this.roomToBeDeleted = chatroomId;
        this.chatsArrayName = chatsArrayName;
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
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
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

module.exports = "<h1 class=\"text-center font-weight-light mb-3 mt-4\">{{ 'home.openMatchrequests' | translate }}</h1>\n<div class=\"row\">\n  <div class=\"col-1\"></div>\n  <div class=\"col-10\">\n    <div *ngIf=\"unAcceptedMatchesLength, else elseBlock\">\n      <!-- show all matchRequests which are saved in the Array of 'matchRequests'-->\n      <div *ngFor=\"let match of unAcceptedMatches$ | paginate: { itemsPerPage: 5, currentPage: pageNumber }\">\n        <div class=\"card shadow my-3\">\n          <h5 class=\"card-header bg-white border-warning font-italic\">\n            {{ 'home.requestTitle' | translate}} {{ parseOfferForFrontend(match.matchedOffer) }}\n          </h5>\n          <div class=\"card-body accepted-match-cards\">\n            <div class=\"card-text\">\n              <div class=\"row\">\n                <div class=\"col-8 col-md-10\">\n                  <a class=\"pointer-cursor\" (click)=\"openModal(match)\">\n                    <p class=\"my-0\"><small>{{ match.firstname }} {{ match.lastname }}</small></p>\n                    <!-- <p class=\"my-0\"><small>Age: {{calculateAgeForModal(match.dateOfBirth)}}</small></p> -->\n                    <p class=\"my-0\"><small>Aktivitäten: {{activitiesForModal(parseActivitiesForFrontend(match.activities))}}</small></p>\n                  </a>\n                </div>\n                <div class=\"col-4 col-md-2 d-flex justify-content-end my-auto\">\n                  <button type=\"button\" class=\"btn btn-success mr-2 homebutton\" (click)=\"acceptMatch(match.matchId)\">\n                    <fa-icon [icon]=\"faCheck\"></fa-icon>\n                  </button>\n                  <button type=\"button\" class=\"btn btn-outline-danger homebutton\" (click)=\"declineMatch(match.matchId)\">\n                    <fa-icon [icon]=\"faTimes\"></fa-icon>\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--ngFor-->\n\n      <!--controls for pagination, which are only visible at the length of matchRequest-array bigger than 5-->\n      <pagination-controls autoHide=\"true\" class=\"pagination justify-content-center\" (pageChange)=\"pageNumber = $event\"\n        previousLabel=\"{{'home.previous' | translate }}\" nextLabel=\"{{'home.next' | translate }}\"></pagination-controls>\n    </div>\n    <!--ngIf-->\n\n    <!-- if there are no matchrequests-->\n    <ng-template #elseBlock>\n      <p class=\"text-center\">{{ 'home.noRequests' | translate}}</p>\n    </ng-template>\n  </div>\n  <div class=\"col-1\"></div>\n</div>\n\n\n<div class=\"modal-backdrop fade in\" [ngStyle]=\"{'display':display}\"></div>\n<div *ngIf=\"modalIsOpen\" class=\"modal\" [ngStyle]=\"{'display': display}\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">{{ 'modals.details' | translate}} {{firstname}}</h5>\n        <button type=\"button\" class=\"close\" (click)=\"closeModal()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <table class=\"table table-light\">\n          <tbody>\n            <tr>\n              <th class=\"font-weight-normal\" scope=\"row\">{{ 'modals.details' | translate}}:</th>\n              <td>{{firstname}}</td>\n            </tr>\n            <tr>\n              <th class=\"font-weight-normal\" scope=\"row\">{{ 'register.lastname' | translate}}:</th>\n              <td>{{lastname}}</td>\n            </tr>\n            <tr>\n              <th class=\"font-weight-normal\" scope=\"row\">{{ 'modals.age' | translate}}:</th>\n              <td>{{age}}</td>\n            </tr>\n            <tr>\n              <th class=\"font-weight-normal\" scope=\"row\">Geschlecht:</th>\n              <td>{{matchSex}}</td>\n            </tr>\n            <tr>\n              <th class=\"font-weight-normal\" scope=\"row\">{{ 'search.city' | translate}}:</th>\n              <td>{{city}}</td>\n            </tr>\n            <tr>\n              <th class=\"font-weight-normal\" scope=\"row\">Interessen:</th>\n              <td>{{matchActivities}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-success mr-2\" (click)=\"acceptMatch(matchId)\">\n          {{ 'modals.accept' | translate}}\n        </button>\n        <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"declineMatch(matchId)\">\n          {{ 'modals.decline' | translate}}\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_utility_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/utility-store.service */ "./src/app/services/utility-store.service.ts");
/* harmony import */ var _services_match_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/match-store.service */ "./src/app/services/match-store.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_user_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user-store.service */ "./src/app/services/user-store.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");










var HomeComponent = /** @class */ (function () {
    function HomeComponent(userStoreService, authService, router, matchStoreService, utliltyStoreService, translateService) {
        var _this = this;
        this.userStoreService = userStoreService;
        this.authService = authService;
        this.router = router;
        this.matchStoreService = matchStoreService;
        this.utliltyStoreService = utliltyStoreService;
        this.translateService = translateService;
        this.unAcceptedMatches$ = [];
        // for fontawesome icons
        this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faCheck"];
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faTimes"];
        // for pagination
        this.pageNumber = 1;
        // for modal
        this.display = 'none';
        this.modalIsOpen = false;
        this.matchStoreService.getAllUnAcceptedMatches().subscribe(function (matches) {
            _this.unAcceptedMatchesLength = matches.length;
            _this.unAcceptedMatches$ = matches;
        }, function (error) {
            console.log('Error in profile-page - TODO delete this console.log() before finishing WebProg!');
        });
    }
    // when home-component was called, the written methods in ngOnInit gonna start
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setAllUtilities();
        this.translateService.onDefaultLangChange.subscribe(function (event) {
            _this.setAllUtilities();
        });
    };
    HomeComponent.prototype.setAllUtilities = function () {
        this.cities = this.utliltyStoreService.getAllCities(this.translateService.getDefaultLang());
        this.offers = this.utliltyStoreService.getAllOffers(this.translateService.getDefaultLang());
        this.activities = this.utliltyStoreService.getAllActivities(this.translateService.getDefaultLang());
        this.sex = this.utliltyStoreService.getAllSex(this.translateService.getDefaultLang());
    };
    HomeComponent.prototype.acceptMatch = function (matchId) {
        var _this = this;
        var indexNumber;
        var data = {
            accepted: true
        };
        this.matchStoreService.updateMatch(matchId, data)
            .subscribe(function () {
            // tslint:disable-next-line:prefer-for-of
            for (var index = 0; index < _this.unAcceptedMatches$.length; index++) {
                if (_this.unAcceptedMatches$[index].matchId === matchId) {
                    indexNumber = index;
                }
            }
            // delete match at indexNumber
            _this.unAcceptedMatches$.splice(indexNumber, 1);
            _this.closeModal();
        });
    };
    HomeComponent.prototype.declineMatch = function (matchId) {
        var _this = this;
        var indexNumber;
        this.matchStoreService.deleteMatch(matchId)
            .subscribe(function () {
            // tslint:disable-next-line:prefer-for-of
            for (var index = 0; index < _this.unAcceptedMatches$.length; index++) {
                if (_this.unAcceptedMatches$[index].matchId === matchId) {
                    indexNumber = index;
                }
            }
            // delete match at indexNumber
            _this.unAcceptedMatches$.splice(indexNumber, 1);
            _this.closeModal();
        });
    };
    HomeComponent.prototype.openModal = function (match) {
        // infos for modal
        this.matchId = match.matchId;
        this.modalIsOpen = true;
        this.display = 'block';
        this.firstname = match.firstname;
        this.lastname = match.lastname;
        this.matchSex = this.parseSexValueForFrontend(match.sex);
        this.city = this.parseCityForFrontend(match.city);
        this.matchActivities = this.activitiesForModal(this.parseActivitiesForFrontend(match.activities));
        this.age = this.parseDateOfBirthForFrontend(match.dateOfBirth);
    };
    HomeComponent.prototype.closeModal = function () {
        this.display = 'none';
        this.modalIsOpen = false;
    };
    HomeComponent.prototype.activitiesForModal = function (activities) {
        var arr;
        arr = '';
        activities.forEach(function (element) {
            arr = element + ', ' + arr;
        });
        return arr.substring(0, (arr.length - 2));
    };
    HomeComponent.prototype.parseSexValueForFrontend = function (sexIndex) {
        return this.sex[sexIndex];
    };
    HomeComponent.prototype.parseActivitiesForFrontend = function (activitiesIndex) {
        var _this = this;
        var activities = [];
        activitiesIndex.forEach(function (activityIndex) {
            activities.push(_this.activities[activityIndex]);
        });
        return activities;
    };
    HomeComponent.prototype.parseOfferForFrontend = function (selectedOfferIndex) {
        return this.offers[selectedOfferIndex];
    };
    HomeComponent.prototype.parseDateOfBirthForFrontend = function (dateOfBirth) {
        var ageDifMs = Date.now() - dateOfBirth;
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };
    HomeComponent.prototype.parseCityForFrontend = function (cityIndex) {
        return this.cities[cityIndex];
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_store_service__WEBPACK_IMPORTED_MODULE_5__["UserStoreService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _services_match_store_service__WEBPACK_IMPORTED_MODULE_3__["MatchStoreService"],
            _services_utility_store_service__WEBPACK_IMPORTED_MODULE_2__["UtilityStoreService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
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

module.exports = "<div class=\"row mt-4\">\n  <div class=\"col-1\"></div>\n  <div class=\"col-10\">\n    <div class=\"card-deck\">\n      <div class=\"card m-4 text-center py-2 shadow-sm\">\n        <h4 class=\"card-title font-weight-light\">{{ 'impressum.team' | translate }}</h4>\n        <hr class=\"my-1 border-warning\">\n        Constantin Beer\n        <br />Eric Odschuk\n        <br />Luis Ramer\n        <br />Arne Schacher\n        <br />Pascal Vonholdt<br />\n      </div>\n\n      <div class=\"card m-4 text-center py-2 shadow-sm\">\n        <h4 class=\"card-title font-weight-light\">{{ 'impressum.contact' | translate }}</h4>\n        <hr class=\"my-1 border-warning\">\n        <a href=\"mailto:tandem.hwr@gmail.com\">tandem.hwr@gmail.com</a>\n        HWR Berlin\n        <br />6. Semester {{ 'impressum.study' | translate }}\n        <br />Alt-Friedrichsfelde 60\n        <br />10315 Berlin\n      </div>\n\n    </div>\n    <div class=\"col-1\"></div>\n  </div>\n"

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

module.exports = "img {\n  height: auto;\n  width: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi1wYWdlL0Q6XFxVc2Vyc1xcQktVXFxBcm5lU2NoYWNoZXJcXERvY3VtZW50c1xcVU5JXFxXSS00MDMgV2ViYW53ZW5kdW5nZW5cXHRhbmRlbVBhcnRuZXIzLS0tRnJvbnRFbmRcXGFuZ3VsYXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGxvZ2luLXBhZ2VcXGxvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi1wYWdlL2xvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogYXV0bztcclxufVxyXG4iXX0= */"

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

module.exports = "<div class=\"row\">\n  <div class=\"col-1\"></div>\n  <div class=\"col-10 px-0\">\n    <div class=\"card mx-auto my-5 shadow\">\n      <div class=\"card-header h5 bg-transparent d-flex justify-content-between border-warning p-0\">\n        <div\n          class=\"col-md-6 font-weight-light text-center pointer-cursor align-self-center border-right btn-outline-warning py-3\"\n          data-toggle=\"collapse\" href=\"#collapseAccepted\" [ngClass]=\"{'active':acceptedCollapsed === true}\"\n          role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseAccepted\" (click)=\"requestsCollapsed=false\"\n          (click)=\"acceptedCollapsed=true\">\n          {{ 'matchlist.accpetedMatches' | translate }}\n        </div>\n        <div class=\"col-md-6 font-weight-light text-center pointer-cursor btn-outline-warning py-3\"\n          [ngClass]=\"{'active':requestsCollapsed === true}\" data-toggle=\"collapse\" href=\"#collapseRequests\"\n          role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseRequests\" (click)=\"acceptedCollapsed=false\"\n          (click)=\"requestsCollapsed=true\">\n          {{ 'matchlist.unacceptedMatches' | translate }}\n        </div>\n      </div>\n      <!--card-header-->\n\n      <!--show all accepted Matches-->\n      <div *ngIf=\"acceptedCollapsed\" class=\"card-body\" id=\"collapseAccepted\">\n        <!-- show all accepted matches which are saved in acceptedMatches[]-->\n        <div\n          *ngFor=\"let match of acceptedMatchesAsInitiator$ | paginate: { itemsPerPage: 5, currentPage: pageNumberAcceptedMatches, id: 'firstPagination' }\">\n          <div class=\"card shadow my-3\">\n            <h5 class=\"card-header bg-white border-warning font-italic\">\n              {{ 'matchlist.matchedOffer' | translate }}: {{ parseOfferForFrontend(match.matchedOffer) }}\n            </h5>\n            <div *ngIf=\"acceptedMatchesAsInitiator$, else noRequestBlock\" class=\"card-body accepted-match-cards\">\n              <div class=\"card-text\">\n                <div class=\"row\">\n                  <div class=\"col-8 col-md-10\">\n                    <a class=\"pointer-cursor\" (click)=\"openModal(match)\">\n                      <p class=\"my-0\"><small>{{ match.firstname }} {{ match.lastname }}</small></p>\n                      <!-- <p class=\"my-0\"><small>Age: {{calculateAgeForModal(match.dateOfBirth)}}</small></p> -->\n                      <p class=\"my-0\"><small>Aktivitäten: {{activitiesForModal(parseActivitiesForFrontend(match.activities))}}</small></p>\n                    </a>\n                  </div>\n                  <div class=\"col-4 col-md-2 d-flex justify-content-end my-auto\">\n                    <button type=\"button\" class=\"btn btn-outline-warning homebutton\"\n                      (click)=\"contactUser(match.uid)\" data-toggle=\"tooltip\"\n                      data-placement=\"top\" title=\"{{ 'matchlist.contactTooltip' | translate }}\">\n                      <fa-icon [icon]=\"faEnvelope\"></fa-icon>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- if there are no matchrequests-->\n            <ng-template #noRequestBlock>\n              <p class=\"text-center\">{{ 'home.noRequests' | translate}}</p>\n            </ng-template>\n          </div>\n        </div>\n        <!--ngFor-->\n\n        <!-- show all accepted matches which are saved in acceptedMatches[]-->\n        <div\n          *ngFor=\"let match of acceptedMatchesAsPartner$ | paginate: { itemsPerPage: 5, currentPage: pageNumberAcceptedMatches, id: 'firstPagination' }\">\n          <div class=\"card shadow my-3\">\n            <h5 class=\"card-header bg-white border-warning font-italic\">\n              {{ 'matchlist.matchedOffer' | translate }}: {{ parseOfferForFrontend(match.matchedOffer) }}\n            </h5>\n            <div *ngIf=\"acceptedMatchesAsPartner$, else noRequestBlock\" class=\"card-body accepted-match-cards\">\n              <div class=\"card-text\">\n                <div class=\"row\">\n                  <div class=\"col-8 col-md-10\">\n                    <a class=\"pointer-cursor\" (click)=\"openModal(match)\">\n                      <p class=\"my-0\"><small>{{ match.firstname }} {{ match.lastname }}</small></p>\n                      <!-- <p class=\"my-0\"><small>Age: {{calculateAgeForModal(match.dateOfBirth)}}</small></p> -->\n                      <p class=\"my-0\"><small>Aktivitäten: {{activitiesForModal(parseActivitiesForFrontend(match.activities))}}</small></p>\n                    </a>\n                  </div>\n                  <div class=\"col-4 col-md-2 d-flex justify-content-end my-auto\">\n                    <button type=\"button\" class=\"btn btn-outline-warning homebutton\"\n                      (click)=\"contactUser(match.uid)\" data-toggle=\"tooltip\"\n                      data-placement=\"top\" title=\"{{ 'matchlist.contactTooltip' | translate }}\">\n                      <fa-icon [icon]=\"faEnvelope\"></fa-icon>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- if there are no matchrequests-->\n            <ng-template #noRequestBlock>\n              <p class=\"text-center\">{{ 'home.noRequests' | translate}}</p>\n            </ng-template>\n          </div>\n        </div>\n        <!--ngFor-->\n\n        <!--controls for pagination, which are only visible at the length of matchRequest-array bigger than 5-->\n        <pagination-controls autoHide=\"true\" class=\"pagination justify-content-center\"\n          (pageChange)=\"pageNumberAcceptedMatches = $event\" previousLabel=\"{{'home.previous' | translate }}\"\n          nextLabel=\"{{'home.next' | translate }}\" id=\"firstPagination\">\n        </pagination-controls>\n\n      </div>\n\n      <!--show all Matchrequests-->\n      <div *ngIf=\"requestsCollapsed\" class=\"card-body collapse\" id=\"collapseRequests\">\n\n\n\n        <!-- show all unaccepted matchrequests which are saved in matchrequests[]-->\n        <div\n          *ngFor=\"let matchrequest of matchRequests$ | paginate: { itemsPerPage: 5, currentPage: pageNumberRequests, id: 'secondPagination' }\">\n          <div class=\"card shadow my-3\">\n            <h5 class=\"card-header bg-white border-info font-italic\">\n              {{ 'matchlist.matchrequestFor' | translate }}: {{ parseOfferForFrontend(matchrequest.matchedOffer) }}\n            </h5>\n            <div class=\"card-body unaccepted-match-cards\">\n              <div class=\"card-text\">\n                <div class=\"row\">\n                  <div class=\"col-8 col-md-10\">\n\n                    <p class=\"my-0\"><small>{{ matchrequest.firstname }} {{ matchrequest.lastname }}</small></p>\n                    <!-- <p class=\"my-0\"><small>Age: {{calculateAgeForModal(matchrequest.dateOfBirth)}}</small></p> -->\n                    <p class=\"my-0\"><small>Aktivitäten: {{activitiesForModal(parseActivitiesForFrontend(matchrequest.activities))}}</small></p>\n\n                  </div>\n                  <div class=\"col-4 col-md-2 d-flex justify-content-end my-auto\">\n                    <button type=\"button\" class=\"btn btn-outline-danger homebutton\"\n                      (click)=\"deleteMatchrequest(matchrequest.matchId)\" data-toggle=\"tooltip\" data-placement=\"top\"\n                      title=\"{{ 'matchlist.deleteTooltip' | translate }}\">\n                      <fa-icon [icon]=\"faTrash\"></fa-icon>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!--ngFor-->\n\n        <!--controls for pagination, which are only visible at the length of matchRequest-array bigger than 5-->\n        <pagination-controls autoHide=\"true\" class=\"pagination justify-content-center\"\n          (pageChange)=\"pageNumberRequests = $event\" previousLabel=\"{{'home.previous' | translate }}\"\n          nextLabel=\"{{'home.next' | translate }}\" id=\"secondPagination\">\n        </pagination-controls>\n\n\n      </div>\n      <!--second row/card-->\n\n    </div>\n\n\n  </div>\n  <!--col-10-->\n\n  <div class=\"col-1\"></div>\n</div>\n\n\n\n<!-- Modal -->\n<div class=\"modal-backdrop fade in\" [ngStyle]=\"{'display':display}\"></div>\n<div *ngIf=\"modalIsOpen\" class=\"modal\" [ngStyle]=\"{'display': display}\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">{{ 'modals.details' | translate}} {{firstname}}</h5>\n        <button type=\"button\" class=\"close\" (click)=\"closeModal()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <table class=\"table table-light\">\n          <tbody>\n            <tr>\n              <th class=\"font-weight-normal\" scope=\"row\">{{ 'modals.details' | translate}}:</th>\n              <td>{{firstname}}</td>\n            </tr>\n            <tr>\n              <th class=\"font-weight-normal\" scope=\"row\">{{ 'register.lastname' | translate}}:</th>\n              <td>{{lastname}}</td>\n            </tr>\n            <tr>\n              <th class=\"font-weight-normal\" scope=\"row\">{{ 'modals.age' | translate}}:</th>\n              <td>{{age}}</td>\n            </tr>\n            <tr>\n              <th class=\"font-weight-normal\" scope=\"row\">{{ 'register.sex' | translate}}:</th>\n              <td>{{matchSex}}</td>\n            </tr>\n            <tr>\n              <th class=\"font-weight-normal\" scope=\"row\">{{ 'search.city' | translate}}:</th>\n              <td>{{city}}</td>\n            </tr>\n            <tr>\n              <th class=\"font-weight-normal\" scope=\"row\">{{ 'result.activities' | translate}}:</th>\n              <td>{{matchActivities}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-warning homebutton\" (click)=\"contactUser(initiatorID, partnerID)\"\n          data-toggle=\"tooltip\" data-placement=\"top\" title=\"{{ 'matchlist.contactTooltip' | translate }}\">\n          <fa-icon [icon]=\"faEnvelope\"></fa-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_user_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/user-store.service */ "./src/app/services/user-store.service.ts");
/* harmony import */ var _services_match_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/match-store.service */ "./src/app/services/match-store.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var src_app_services_utility_store_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/utility-store.service */ "./src/app/services/utility-store.service.ts");









// import { ChatService } from './../../services/chat.service';

var MatchListComponent = /** @class */ (function () {
    // initiatorID: string;
    // partnerID: string;
    function MatchListComponent(authService, matchStoreService, router, chatservice, userStoreService, utliltyStoreService, translateService) {
        var _this = this;
        this.authService = authService;
        this.matchStoreService = matchStoreService;
        this.router = router;
        this.chatservice = chatservice;
        this.userStoreService = userStoreService;
        this.utliltyStoreService = utliltyStoreService;
        this.translateService = translateService;
        this.matchRequests$ = [];
        this.acceptedMatchesAsInitiator$ = [];
        this.acceptedMatchesAsPartner$ = [];
        // for fontawesome icons
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTrash"];
        this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEnvelope"];
        // for pagination
        this.pageNumberAcceptedMatches = 1;
        this.pageNumberRequests = 1;
        // getting active & collapsed state
        this.acceptedCollapsed = true;
        this.requestsCollapsed = false;
        // for modal
        this.display = 'none';
        this.modalIsOpen = false;
        this.matchStoreService.getAllMatchrequests().subscribe(function (matches) {
            _this.matchRequestLength = matches.length;
            _this.matchRequests$ = matches;
        }, function (error) {
            console.log('Error in profile-page - TODO delete this console.log() before finishing WebProg!');
        });
        this.matchStoreService.getAllAcceptedMatchesAsInitiator().subscribe(function (matches) {
            _this.acceptedMatchesAsInitiator$ = matches;
        }, function (error) {
            console.log('Error in profile-page - TODO delete this console.log() before finishing WebProg!');
        });
        this.matchStoreService.getAllAcceptedMatchesAsPartner().subscribe(function (matches) {
            _this.acceptedMatchesAsPartner$ = matches;
        }, function (error) {
            console.log('Error in profile-page - TODO delete this console.log() before finishing WebProg!');
        });
    }
    MatchListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setAllUtilities();
        this.translateService.onDefaultLangChange.subscribe(function (event) {
            _this.setAllUtilities();
        });
    };
    MatchListComponent.prototype.setAllUtilities = function () {
        this.cities = this.utliltyStoreService.getAllCities(this.translateService.getDefaultLang());
        this.offers = this.utliltyStoreService.getAllOffers(this.translateService.getDefaultLang());
        this.activities = this.utliltyStoreService.getAllActivities(this.translateService.getDefaultLang());
        this.sex = this.utliltyStoreService.getAllSex(this.translateService.getDefaultLang());
    };
    // TODO refactor, because we seperate know between accepted matches as initiator and as partner
    MatchListComponent.prototype.contactUser = function (matchUid) {
        var _this = this;
        var currentUserID = this.authService.currentUserID;
        this.chatservice.create(currentUserID, matchUid)
            .subscribe(function (response) {
            if (response.result) {
                _this.router.navigate(["chats/" + response.id]);
            }
            else if (!response.result) {
                _this.router.navigate(["chats/" + response.id]);
            }
        });
    };
    // deleteMatchrequest(matchId: string) {
    //   this.matchStoreService.deleteMatch(matchId)
    //     .subscribe(() => {
    //       if (this.matchRequestLength === 1) {
    //         this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
    //           this.router.navigate(['/matches']));
    //       }
    //     });
    // }
    MatchListComponent.prototype.deleteMatchrequest = function (matchId) {
        var _this = this;
        var indexNumber;
        this.matchStoreService.deleteMatch(matchId)
            .subscribe(function () {
            // tslint:disable-next-line:prefer-for-of
            for (var index = 0; index < _this.matchRequests$.length; index++) {
                if (_this.matchRequests$[index].matchId === matchId) {
                    indexNumber = index;
                }
            }
            // delete match at indexNumber
            _this.matchRequests$.splice(indexNumber, 1);
            // this.closeModal();
        });
    };
    MatchListComponent.prototype.openModal = function (match) {
        // save partnerID and initiatorID for Contact
        // this.initiatorID = initiatorID;
        // this.partnerID = partnerID;
        // infos for modal
        // this.activities = '';
        this.modalIsOpen = true;
        this.display = 'block';
        this.firstname = match.firstname;
        this.lastname = match.lastname;
        this.matchSex = this.parseSexValueForFrontend(match.sex);
        this.city = this.parseCityForFrontend(match.city);
        this.matchActivities = this.activitiesForModal(this.parseActivitiesForFrontend(match.activities));
        this.age = this.parseDateOfBirthForFrontend(match.dateOfBirth);
    };
    MatchListComponent.prototype.activitiesForModal = function (activities) {
        var arr;
        arr = '';
        activities.forEach(function (element) {
            arr = element + ', ' + arr;
        });
        return arr.substring(0, (arr.length - 2));
    };
    MatchListComponent.prototype.parseSexValueForFrontend = function (sexIndex) {
        return this.sex[sexIndex];
    };
    MatchListComponent.prototype.closeModal = function () {
        this.display = 'none';
        this.modalIsOpen = false;
    };
    MatchListComponent.prototype.validateCurrentUser = function (initiatorID, partnerID) {
        if (this.authService.currentUserID === initiatorID) {
            return partnerID;
        }
        else {
            return initiatorID;
        }
    };
    MatchListComponent.prototype.parseActivitiesForFrontend = function (activitiesIndex) {
        var _this = this;
        var activities = [];
        activitiesIndex.forEach(function (activityIndex) {
            activities.push(_this.activities[activityIndex]);
        });
        return activities;
    };
    MatchListComponent.prototype.parseOfferForFrontend = function (selectedOfferIndex) {
        return this.offers[selectedOfferIndex];
    };
    MatchListComponent.prototype.parseDateOfBirthForFrontend = function (dateOfBirth) {
        var ageDifMs = Date.now() - dateOfBirth;
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };
    MatchListComponent.prototype.parseCityForFrontend = function (cityIndex) {
        return this.cities[cityIndex];
    };
    MatchListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-match-list',
            template: __webpack_require__(/*! ./match-list.component.html */ "./src/app/components/match-list/match-list.component.html"),
            styles: [__webpack_require__(/*! ./match-list.component.scss */ "./src/app/components/match-list/match-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services_match_store_service__WEBPACK_IMPORTED_MODULE_3__["MatchStoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_8__["ChatService"],
            _services_user_store_service__WEBPACK_IMPORTED_MODULE_2__["UserStoreService"],
            src_app_services_utility_store_service__WEBPACK_IMPORTED_MODULE_9__["UtilityStoreService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
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

module.exports = "<header>\n  <!--when the bug of new logging in is solved, we can use the following line\n  <nav *ngIf=\"router.url !== '/login'\" class=\"navbar navbar-light navbar-expand-lg shadow\">-->\n\n  <nav class=\"navbar fixed-top navbar-light navbar-expand-lg bg-white shadow\">\n    <!--toggle only visible for screens smaller than lg-->\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarLinks\" aria-controls=\"navbarLinks\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <a class=\"navbar-brand\" [routerLink]=\"['/home']\">\n        <img src=\"../../../assets/images/navbarLogo.png\" width=\"40\" height=\"40\" class=\"d-inline-block align-top\" alt=\"Tandem Logo\">\n      </a>\n\n      <!--navbar links-->\n      <div class=\"collapse navbar-collapse\" id=\"navbarLinks\">\n        <!--left aligned links-->\n        <ul *ngIf=\"isLoggedIn()\" class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/home']\" [routerLinkActive]=\"['active']\">{{ 'navbar.homeLink' | translate }}</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/profile']\" [routerLinkActive]=\"['active']\">{{ 'navbar.profileLink' | translate }}</a>\n          </li>\n          <li class=\"nav-item\">\n            <a *ngIf=\"router.url !== '/search/result', else resultBlock\" class=\"nav-link\" [routerLink]=\"['/search']\" [routerLinkActive]=\"['active']\">{{ 'navbar.searchLink' | translate }}</a>\n            <ng-template #resultBlock>\n              <a class=\"nav-link active\">{{ 'navbar.searchResults' | translate }}</a>\n            </ng-template>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/matches']\" [routerLinkActive]=\"['active']\">{{ 'navbar.matchesLink' | translate }}</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/chats']\" [routerLinkActive]=\"['active']\">{{ 'navbar.chatLink' | translate }}</a>\n          </li>\n        </ul>\n\n        <!-- right aligned links-->\n        <ul class=\"navbar-nav ml-auto\">\n          <!--dropdown menu-->\n          <li class=\"nav-item dropdown\">\n            <!--showing english or german language, via checking whether english language was clicked or not -->\n            <a class=\"nav-link dropdown-toggle pointer-cursor\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" id=\"dropdownMenuLink\">\n              {{ 'navbar.lang' | translate }}\n            </a>\n            <!--dropdown links-->\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuLink\">\n              <a class=\"dropdown-item pointer-cursor\" (click)=\"switchLanguage('de')\">De</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item pointer-cursor\" (click)=\"switchLanguage('en')\" >En</a>\n            </div>\n          </li>\n\n          <!--username-->\n          <span *ngIf=\"isLoggedIn()\" class=\"navbar-text font-italic px-2 border-right border-left\">\n\n           {{ currentUserFirstname }}\n\n          </span>\n\n          <!--Logout-->\n          <li *ngIf=\"isLoggedIn()\" class=\"nav-item\">\n            <a class=\"nav-link pointer-cursor\" (click)=\"logout()\">{{ 'navbar.logout' | translate }}</a>\n          </li>\n          <!--Login-->\n          <li *ngIf=\"!isLoggedIn() \" class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/login']\">{{ 'navbar.login' | translate }}</a>\n          </li>\n        </ul>\n      </div>\n  </nav>\n</header>\n"

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
        var _this = this;
        this.authService.user$.subscribe(function (user) {
            try {
                _this.currentUserFirstname = user.firstname;
            }
            catch (_a) {
            }
        });
    };
    NavbarComponent.prototype.isLoggedIn = function () {
        return this.authService.isloggedIn();
    };
    NavbarComponent.prototype.switchLanguage = function (language) {
        this.translateService.use(language);
        if (language === 'en') {
            this.showEnglish = true;
            this.translateService.setDefaultLang('en');
        }
        else {
            this.showEnglish = false;
            this.translateService.setDefaultLang('de');
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

module.exports = "<div class=\"row\">\n  <div class=\"col-1\"></div>\n  <div class=\"col-10\">\n    <div class=\"card mx-auto my-5 shadow\">\n      <div class=\"card-header bg-warning text-center h5\">\n        {{'profile.headerTitle' | translate }}\n      </div>\n      <div class=\"card-body\">\n        <form class=\"\" [formGroup]=\"editForm\" novalidate>\n          <div class=\"row\">\n            <div class=\"form-group col-md-6\">\n              <label for=\"editFormFirstname\">{{'register.firstname' | translate }}*</label>\n              <input type=\"text\" class=\"form-control shadow-sm\" id=\"editFormFirstname\"\n                formControlName=\"editFormFirstname\" placeholder=\"{{'register.firstname' | translate }}\">\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"editFormLastname\">{{'register.lastname' | translate }}*</label>\n              <input type=\"text\" class=\"form-control shadow-sm\" id=\"editFormLastname\" formControlName=\"editFormLastname\"\n                placeholder=\"{{'register.lastname' | translate }}\">\n            </div>\n          </div>\n\n            <div class=\"row\">\n              <div class=\"col-md-6 form-group\">\n                <label for=\"editFormSex\">{{'register.sex' | translate }}*</label>\n                <div class=\"form-control shadow-sm bg-light\"id=\"editFormSex\" disabled>{{selectedSex}}</div>\n\n            </div>\n            <div class=\"col-md-6 form-group\">\n              <label>{{'register.mail' | translate }}*</label>\n              <input type=\"text\" class=\"form-control shadow-sm\" id=\"editFormMail\" formControlName=\"editFormMail\"\n                placeholder=\"name@example.com\">\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group\">\n              <label for=\"editFormCity\">{{'register.city' | translate }}*</label>\n              <ng-multiselect-dropdown class=\"form-control shadow-sm\" id=\"editFormCity\" #editFormCity=\"ngModel\"\n                [placeholder]=\"'register.pleaseChoose' | translate\" [data]=\"cities\" [(ngModel)]=\"selectedCity\"\n                [ngModelOptions]=\"{ standalone : true }\" [settings]=\"selectCitySettings\" required>\n              </ng-multiselect-dropdown>\n            </div>\n            <div class=\"col-md-6 form-group\">\n              <label for=\"editFormBirthday\">{{'register.birthday' | translate }}*</label>\n              <input type=\"text\" [placeholder]=\"'register.birthday' | translate\" class=\"form-control shadow-sm bg-light\"\n                bsDatepicker id=\"editFormBirthday\" formControlName=\"editFormBirthday\"\n                [bsConfig]=\"{ dateInputFormat: 'DD.MM.YYYY', containerClass: 'theme-orange' }\">\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group\">\n              <label for=\"editFormOffers\">{{'register.offers' | translate }}:*</label>\n              <ng-multiselect-dropdown class=\"form-control shadow-sm\" id=\"editFormOffers\" #editFormOffers=\"ngModel\"\n                [placeholder]=\"'register.pleaseChoose' | translate\" [data]=\"offers\" [(ngModel)]=\"selectedOffers\"\n                [ngModelOptions]=\"{ standalone : true }\" [settings]=\"selectOffersActivitiesSettings\" required>\n              </ng-multiselect-dropdown>\n            </div>\n            <div class=\"col-md-6 form-group\">\n              <label for=\"editFormActivities\">{{'register.activities' | translate }}:*</label>\n              <ng-multiselect-dropdown class=\"form-control shadow-sm\" id=\"editFormActivities\"\n                #editFormActivities=\"ngModel\" [placeholder]=\"'register.pleaseChoose' | translate\" [data]=\"activities\"\n                [(ngModel)]=\"selectedActivities\" [ngModelOptions]=\"{ standalone : true }\"\n                [settings]=\"selectOffersActivitiesSettings\" required>\n              </ng-multiselect-dropdown>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group\">\n              <label>{{'profile.newPassword' | translate }}*</label>\n              <input type=\"password\" class=\"form-control shadow-sm\" id=\"editFormPassword\"\n                formControlName=\"editFormPassword\" placeholder=\"{{'register.password' | translate }}\">\n            </div>\n            <div class=\"col-md-6 form-group\">\n              <label>{{'profile.newPasswordConfirm' | translate }}*</label>\n              <input type=\"password\" class=\"form-control shadow-sm\" id=\"editFormPasswordConfirm\"\n                formControlName=\"editFormPasswordConfirm\" placeholder=\"{{'register.passwordConfirm' | translate }}\">\n            </div>\n          </div>\n\n          <!--Validator messages-->\n          <div class=\"alert-danger pl-2\"\n            *ngIf=\"editFormFirstname.errors && (editFormFirstname.touched || editFormFirstname.dirty)\">\n            <div *ngIf=\"editFormFirstname.errors.required\">{{'register.firstname' | translate }}\n              {{'validators.required' | translate }}</div>\n            <div *ngIf=\"editFormFirstname.errors.pattern\">{{'validators.letterSpaces' | translate }}</div>\n          </div>\n\n          <div class=\"alert-danger pl-2\"\n            *ngIf=\"editFormLastname.errors && (editFormLastname.touched || editFormLastname.dirty)\">\n            <div *ngIf=\"editFormLastname.errors.required\">{{'register.lastname' | translate }}\n              {{'validators.required' | translate }}</div>\n            <div *ngIf=\"editFormLastname.errors.pattern\">{{'validators.letterSpaces' | translate }}</div>\n          </div>\n\n          <div class=\"alert-danger pl-2\" *ngIf=\"editFormMail.errors && (editFormMail.touched || editFormMail.dirty)\">\n            <div *ngIf=\"editFormMail.errors.required\">{{'register.mail' | translate }}\n              {{'validators.required' | translate }}</div>\n            <div *ngIf=\"editFormMail.errors.email\">{{'validators.email' | translate }}</div>\n          </div>\n\n          <div class=\"alert-danger pl-2\"\n            *ngIf=\"editFormPassword.errors && (editFormPassword.touched || editFormPassword.dirty)\">\n            <div *ngIf=\"editFormPassword.errors.pattern\">{{'validators.passwordPattern' | translate }}</div>\n          </div>\n\n          <div class=\"alert-danger pl-2\"\n            *ngIf=\"editFormPasswordConfirm.errors && (editFormPasswordConfirm.touched || editFormPasswordConfirm.dirty)\">\n            <div *ngIf=\"editFormPasswordConfirm.errors.pattern\">{{'validators.passwordPattern' | translate }}</div>\n          </div>\n\n          <div class=\"alert-danger pl-2\"\n            *ngIf=\"editFormPassword.value != editFormPasswordConfirm.value && editFormPasswordConfirm.value != null\">\n            {{'validators.passwordMismatch' | translate }}\n          </div>\n\n          <div class=\"alert-danger pl-2\"\n            *ngIf=\"editFormOffers.errors && (editFormOffers.touched || editFormOffers.dirty)\">\n            <div *ngIf=\"editFormOffers.errors.required\" class=\"alert-danger\">{{'validators.minOffers' | translate }}\n            </div>\n          </div>\n\n          <div class=\"alert-danger pl-2\" *ngIf=\"editFormCity.errors && (editFormCity.touched || editFormCity.dirty)\">\n            <div *ngIf=\"editFormCity.errors.required\" class=\"alert-danger\">{{'validators.city' | translate }}</div>\n          </div>\n\n          <div class=\"alert-danger pl-2\"\n            *ngIf=\"editFormActivities.errors && (editFormActivities.touched || editFormActivities.dirty)\">\n            <div *ngIf=\"editFormActivities.errors.required\" class=\"alert-danger\">\n              {{'validators.minActivities' | translate }}</div>\n          </div>\n\n\n          <div  *ngIf=\"updateSuccess\" class=\"alert alert-success mb-2\" role=\"alert\">\n              {{'validators.updateSuccess' | translate }}\n          </div>\n\n          <div  *ngIf=\"invalidPassword\" class=\"alert alert-danger mb-2\" role=\"alert\">\n              {{'validators.incorrectPassword' | translate }}\n          </div>\n          <!--End-Validator messages-->\n\n          <div class=\"btn-toolbar d-flex justify-content-center\" role=\"toolbar\">\n            <div class=\"btn-group mr-1 mr-md-3\">\n              <button type=\"button\" type=\"submit\" class=\"btn btn-warning d-flex mx-auto mt-2\" data-toggle=\"modal\"\n                data-target=\"#confirmModal\"\n                [disabled]=\"(!editForm.valid || !editFormOffers.valid || !editFormActivities.valid || !editFormCity.valid)\">{{'profile.saveButton' | translate }}</button>\n            </div>\n            <div class=\"btn-group ml-md-3 mr-1 mr-md-3\">\n              <button type=\"button\" [routerLink]=\"['/home']\"\n                class=\"btn btn-outline-warning d-flex mx-auto mt-2\">{{'register.quitButton' | translate }}</button>\n            </div>\n            <div class=\"btn-group ml-md-3\">\n              <button type=\"button\"  class=\"btn btn-outline-danger d-flex mx-auto mt-2\" (click)=\"openModal()\">{{'profile.deleteButton' | translate }}</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-1\"></div>\n</div>\n\n<!-- Confirm Modal -->\n<div class=\"modal fade\" id=\"confirmModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"confirmModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <form [formGroup]=\"modalForm\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"confirmModalLabel\">{{ 'profile.modalHeader' | translate }}</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n          <input type=\"password\" class=\"form-control shadow-sm\" id=\"modalFormPassword\" formControlName=\"modalFormPassword\"\n          placeholder=\"{{'register.passwordConfirm' | translate }}\">\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" type=\"submit\" (click)=\"confirmAndValidatePassword()\" class=\"btn btn-outline-warning\" data-dismiss=\"modal\" [disabled]=\"!modalForm.valid\">{{ 'profile.confirmButton' | translate }}</button>\n        <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\">{{ 'register.quitButton' | translate }}</button>\n      </div>\n    </form>\n    </div>\n  </div>\n</div>\n\n<!-- Deletemodal -->\n<div class=\"modal-backdrop fade in\" [ngStyle]=\"{'display':display}\"></div>\n<div *ngIf=\"modalIsOpen\" class=\"modal\" [ngStyle]=\"{'display': display}\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">{{ 'profile.deleteButton' | translate}}</h5>\n        <button type=\"button\" class=\"close\" (click)=\"closeModal()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n          {{ 'profile.deleteQuestion' | translate}}\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-warning\" (click)=\"deleteProfile()\">{{ 'profile.deleteButton' | translate}}</button>\n        <button type=\"button\" class=\"btn btn-warning\" (click)=\"closeModal()\">{{ 'register.quitButton' | translate}}</button>\n      </div>\n  </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile-page/profile-page.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/profile-page/profile-page.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#editFormOffers {\n  padding: 0;\n  border: none; }\n\n#editFormActivities {\n  padding: 0;\n  border: none; }\n\n#editFormCity {\n  padding: 0;\n  border: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlLXBhZ2UvRDpcXFVzZXJzXFxCS1VcXEFybmVTY2hhY2hlclxcRG9jdW1lbnRzXFxVTklcXFdJLTQwMyBXZWJhbndlbmR1bmdlblxcdGFuZGVtUGFydG5lcjMtLS1Gcm9udEVuZFxcYW5ndWxhci9zcmNcXGFwcFxcY29tcG9uZW50c1xccHJvZmlsZS1wYWdlXFxwcm9maWxlLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsWUFBWSxFQUFBOztBQUdkO0VBQ0UsVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFHZDtFQUNFLFVBQVU7RUFDVixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUtcGFnZS9wcm9maWxlLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZWRpdEZvcm1PZmZlcnN7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbiNlZGl0Rm9ybUFjdGl2aXRpZXN7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbiNlZGl0Rm9ybUNpdHkge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _services_utility_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/utility-store.service */ "./src/app/services/utility-store.service.ts");
/* harmony import */ var ts_md5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ts-md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ts_md5__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");









var ProfilePageComponent = /** @class */ (function () {
    function ProfilePageComponent(formBuilder, router, userStoreService, authService, utliltyStoreService, translateService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userStoreService = userStoreService;
        this.authService = authService;
        this.utliltyStoreService = utliltyStoreService;
        this.translateService = translateService;
        this.md5 = new ts_md5__WEBPACK_IMPORTED_MODULE_7__["Md5"]();
        this.md52 = new ts_md5__WEBPACK_IMPORTED_MODULE_7__["Md5"]();
        // for selecting fields
        this.selectCitySettings = {};
        this.selectOffersActivitiesSettings = {};
        // for passwordConfirming in confirmModal
        this.updateSuccess = false;
        this.invalidPassword = false;
        // for modal
        this.display = 'none';
        this.modalIsOpen = false;
        this.editForm = this.createEditForm();
        this.modalForm = this.createModalForm();
    }
    ProfilePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        // initialzie all available offers & activities
        this.setAllUtilities();
        this.translateService.onDefaultLangChange.subscribe(function (event) {
            _this.setAllUtilities();
        });
        this.userStoreService.getUserById(this.authService.currentUserID).subscribe(function (recievedUser) {
            _this.selectedSex = _this.parseSexValueForFrontend(recievedUser.sex);
            _this.selectedActivities = _this.parseActivitiesForFrontend(recievedUser.activities);
            _this.selectedOffers = _this.parseOffersForFrontend(recievedUser.offers);
            _this.selectedCity = Array.of(_this.cities[recievedUser.city]);
            _this.editForm.get('editFormFirstname').setValue(recievedUser.firstname);
            _this.editForm.get('editFormLastname').setValue(recievedUser.lastname);
            _this.editForm.get('editFormMail').setValue(_this.authService.currentUserMail);
            _this.editForm.get('editFormBirthday').setValue(new Date(recievedUser.dateOfBirth));
            // modalForm valid status will be validated, therefore has to be initialized in ngOnInit()
            _this.modalForm.get('modalFormPassword');
        }, function (error) {
            console.log('Error in profile-page - TODO delete this console.log() before finishing WebProg!');
        });
        this.initializeMultiselectSettings();
    };
    ProfilePageComponent.prototype.setAllUtilities = function () {
        this.cities = this.utliltyStoreService.getAllCities(this.translateService.getDefaultLang());
        this.offers = this.utliltyStoreService.getAllOffers(this.translateService.getDefaultLang());
        this.activities = this.utliltyStoreService.getAllActivities(this.translateService.getDefaultLang());
        this.sex = this.utliltyStoreService.getAllSex(this.translateService.getDefaultLang());
    };
    ProfilePageComponent.prototype.createEditForm = function () {
        // create the formGroup
        return this.formBuilder.group({
            // the field only contains letters or spaces
            editFormFirstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-ZäÄüÜöÖß]*')]],
            // the field only contains letters or spaces
            editFormLastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-ZäÄüÜöÖß]*')]],
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
    ProfilePageComponent.prototype.createModalForm = function () {
        return this.formBuilder.group({
            modalFormPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
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
    ProfilePageComponent.prototype.parseSexValueForFrontend = function (sexIndex) {
        return this.sex[sexIndex];
    };
    ProfilePageComponent.prototype.parseSexValueForBackend = function (sex) {
        return this.sex.indexOf(sex);
    };
    ProfilePageComponent.prototype.parseActivitiesForFrontend = function (selectedActivitiesIndexes) {
        var _this = this;
        var selectedActivities = [];
        selectedActivitiesIndexes.forEach(function (activitiyIndex) {
            selectedActivities.push(_this.activities[activitiyIndex]);
        });
        return selectedActivities;
    };
    ProfilePageComponent.prototype.parseActivitiesForBackend = function (selectedActivities) {
        var _this = this;
        var selectedActivitiesIndexes = [];
        selectedActivities.forEach(function (activity) {
            selectedActivitiesIndexes.push(_this.activities.indexOf(activity));
        });
        return selectedActivitiesIndexes;
    };
    ProfilePageComponent.prototype.parseOffersForFrontend = function (selectedOffersIndexes) {
        var _this = this;
        var selectedOffers = [];
        selectedOffersIndexes.forEach(function (offerIndex) {
            selectedOffers.push(_this.offers[offerIndex]);
        });
        return selectedOffers;
    };
    ProfilePageComponent.prototype.parseOffersForBackend = function (selectedOffers) {
        var _this = this;
        var selectedOffersIndexes = [];
        selectedOffers.forEach(function (offer) {
            selectedOffersIndexes.push(_this.offers.indexOf(offer));
        });
        return selectedOffersIndexes;
    };
    // validate the passwords whether they are matching
    ProfilePageComponent.prototype.passwordMatchValidator = function (control) {
        if (control.get('editFormPassword').value !== control.get('editFormPasswordConfirm').value) {
            return { invalid: true };
        }
    };
    ProfilePageComponent.prototype.confirmAndValidatePassword = function () {
        var _this = this;
        // hash the input for conclusion with the saved password in firebase's Auth
        var password = this.md52.appendStr(this.authService.currentUserMail)
            .appendStr(this.modalForm.value.modalFormPassword).end();
        this.authService.validatePassword(password)
            // when password was correct start editFormSave()
            .then(function () {
            _this.invalidPassword = false;
            _this.editFormSave();
        })
            // when the password was incorrect, show the specific message
            .catch(function () {
            _this.updateSuccess = false;
            _this.invalidPassword = true;
            setTimeout(function () {
                _this.invalidPassword = false;
            }, 3000);
            _this.modalForm.reset();
        });
    };
    // validate the input & select fields and send the mail & password to Firebase Authentication
    // after that the rest of userdata incl. the recieved UserID will be send to the API(Firebase Cloud Functions)
    ProfilePageComponent.prototype.editFormSave = function () {
        var _this = this;
        if (this.editForm.invalid) {
            return;
        }
        var userdata;
        var mail = this.editForm.value.editFormMail;
        var password = this.editForm.value.editFormPassword;
        if (!!mail && !!password) {
            // get data from the inputfields
            userdata = {
                firstname: this.editForm.value.editFormFirstname,
                lastname: this.editForm.value.editFormLastname,
                city: this.cities.indexOf(this.selectedCity[0]),
                dateOfBirth: this.editForm.value.editFormBirthday,
                // get the only one item from selectedSex-Array
                sex: this.parseSexValueForBackend(this.selectedSex),
                activities: this.parseActivitiesForBackend(this.selectedActivities),
                offers: this.parseOffersForBackend(this.selectedOffers),
                mail: mail,
                password: this.md5.appendStr(mail)
                    .appendStr(password).end()
            };
            this.userStoreService.updateUser(this.authService.currentUserID, userdata).subscribe(function () {
                // show the updateSuccess message
                _this.updateSuccess = true;
                setTimeout(function () {
                    _this.updateSuccess = false;
                }, 3000);
                _this.modalForm.reset();
                _this.authService.logout();
            });
        }
        else {
            userdata = {
                firstname: this.editForm.value.editFormFirstname,
                lastname: this.editForm.value.editFormLastname,
                city: this.cities.indexOf(this.selectedCity[0]),
                dateOfBirth: this.editForm.value.editFormBirthday,
                // get the only one item from selectedSex-Array
                sex: this.parseSexValueForBackend(this.selectedSex),
                activities: this.parseActivitiesForBackend(this.selectedActivities),
                offers: this.parseOffersForBackend(this.selectedOffers)
            };
            this.userStoreService.updateUser(this.authService.currentUserID, userdata).subscribe(function () {
                // show the updateSuccess message
                _this.updateSuccess = true;
                setTimeout(function () {
                    _this.updateSuccess = false;
                }, 3000);
                _this.modalForm.reset();
            });
        } // end else
    };
    Object.defineProperty(ProfilePageComponent.prototype, "editFormFirstname", {
        // deleteUser() {
        //   this.userStoreService.deleteUser(this.authService.currentUserID).subscribe(() => {
        //     this.authService.logout();
        //   });
        // }
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
    Object.defineProperty(ProfilePageComponent.prototype, "modalFormPassword", {
        get: function () {
            return this.editForm.get('modalFormPassword');
        },
        enumerable: true,
        configurable: true
    });
    ProfilePageComponent.prototype.openModal = function (id) {
        console.log('id: ' + id);
        this.modalIsOpen = true;
        this.display = 'block';
    };
    ProfilePageComponent.prototype.closeModal = function () {
        this.display = 'none';
        this.modalIsOpen = false;
    };
    ProfilePageComponent.prototype.deleteProfile = function () {
        var _this = this;
        this.userStoreService.deleteUser(this.authService.currentUserID).subscribe(function () {
            _this.closeModal();
            _this.authService.logout().then(function () {
                alert('Profil wurde gelöscht');
            });
        });
    };
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
            _services_utility_store_service__WEBPACK_IMPORTED_MODULE_6__["UtilityStoreService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]])
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

module.exports = "<div class=\"row\">\n  <div class=\"col-1\"></div>\n  <div class=\"col-10\">\n    <div class=\"card mx-auto my-5 shadow\">\n      <div class=\"card-header bg-warning text-center h5\">\n        {{'register.headerTitle' | translate }}\n      </div>\n      <div class=\"card-body\">\n        <form class=\"\" [formGroup]=\"registerForm\" (ngSubmit)=\"registerFormSave()\" novalidate>\n          <div class=\"row\">\n            <div class=\"form-group col-md-6\">\n              <label for=\"registerFormFirstname\">{{'register.firstname' | translate }}*</label>\n              <input type=\"text\" class=\"form-control shadow-sm\" id=\"registerFormFirstname\"\n                formControlName=\"registerFormFirstname\" placeholder=\"{{'register.firstname' | translate }}\">\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"registerFormLastname\">{{'register.lastname' | translate }}*</label>\n              <input type=\"text\" class=\"form-control shadow-sm\" id=\"registerFormLastname\"\n                formControlName=\"registerFormLastname\" placeholder=\"{{'register.lastname' | translate }}\">\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group\">\n              <label for=\"registerFormSex\">{{'register.sex' | translate }}*</label>\n              <ng-multiselect-dropdown class=\"form-control shadow-sm\" id=\"registerFormSex\" #registerFormSex=\"ngModel\"\n                [placeholder]=\"'register.pleaseChoose' | translate\" [data]=\"sex\" [(ngModel)]=\"selectedSex\"\n                [ngModelOptions]=\"{ standalone : true }\" [settings]=\"selectSexSettings\" required>\n              </ng-multiselect-dropdown>\n\n            </div>\n            <div class=\"col-md-6 form-group\">\n              <label>{{'register.mail' | translate }}*</label>\n              <input type=\"text\" class=\"form-control shadow-sm\" id=\"registerFormMail\" formControlName=\"registerFormMail\"\n                placeholder=\"name@example.com\">\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group\">\n              <label for=\"registerFormCity\">{{'register.city' | translate }}*</label>\n              <ng-multiselect-dropdown class=\"form-control shadow-sm\" id=\"registerFormCity\" #registerFormCity=\"ngModel\"\n                [placeholder]=\"'register.pleaseChoose' | translate\" [data]=\"cities\" [(ngModel)]=\"selectedCity\"\n                [ngModelOptions]=\"{ standalone : true }\" [settings]=\"selectCitySettings\" required>\n              </ng-multiselect-dropdown>\n            </div>\n            <div class=\"col-md-6 form-group\">\n              <label for=\"registerFormBirthday\">{{'register.birthday' | translate }}*</label>\n              <input type=\"text\" [placeholder]=\"'register.birthdayShort' | translate\" class=\"form-control shadow-sm\"\n                bsDatepicker id=\"registerFormBirthday\" formControlName=\"registerFormBirthday\"\n                [bsConfig]=\"{ dateInputFormat: 'DD.MM.YYYY', containerClass: 'theme-orange' }\">\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group\">\n              <label for=\"registerFormOffers\">{{'register.offers' | translate }}:*</label>\n              <ng-multiselect-dropdown class=\"form-control shadow-sm\" id=\"registerFormOffers\"\n                #registerFormOffers=\"ngModel\" [placeholder]=\"'register.pleaseChoose' | translate\" [data]=\"offers\"\n                [(ngModel)]=\"selectedOffers\" [ngModelOptions]=\"{ standalone : true }\"\n                [settings]=\"selectOffersActivitiesSettings\" required>\n              </ng-multiselect-dropdown>\n            </div>\n            <div class=\"col-md-6 form-group\">\n              <label for=\"registerFormActivities\">{{'register.activities' | translate }}:*</label>\n              <ng-multiselect-dropdown class=\"form-control shadow-sm\" id=\"registerFormActivities\"\n                #registerFormActivities=\"ngModel\" [placeholder]=\"'register.pleaseChoose' | translate\"\n                [data]=\"activities\" [(ngModel)]=\"selectedActivities\" [ngModelOptions]=\"{ standalone : true }\"\n                [settings]=\"selectOffersActivitiesSettings\" required>\n              </ng-multiselect-dropdown>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group\">\n              <label>{{'register.password' | translate }}*</label>\n              <input type=\"password\" class=\"form-control shadow-sm\" id=\"registerFormPassword\"\n                formControlName=\"registerFormPassword\" placeholder=\"{{'register.password' | translate }}\">\n            </div>\n            <div class=\"col-md-6 form-group\">\n              <label>{{'register.passwordConfirm' | translate }}*</label>\n              <input type=\"password\" class=\"form-control shadow-sm\" id=\"registerFormPasswordConfirm\"\n                formControlName=\"registerFormPasswordConfirm\" placeholder=\"{{'register.passwordConfirm' | translate }}\">\n            </div>\n          </div>\n\n          <!--Validator messages-->\n          <div class=\"alert-danger pl-2\"\n            *ngIf=\"registerFormFirstname.errors && (registerFormFirstname.touched || registerFormFirstname.dirty)\">\n            <div *ngIf=\"registerFormFirstname.errors.required\">{{'register.firstname' | translate }}\n              {{'validators.required' | translate }}</div>\n            <div *ngIf=\"registerFormFirstname.errors.pattern\">{{'validators.letterSpaces' | translate }}</div>\n          </div>\n\n          <!--Validator messages-->\n          <div class=\"alert-danger pl-2\"\n            *ngIf=\"registerFormFirstname.errors && (registerFormFirstname.touched || registerFormFirstname.dirty)\">\n            <div *ngIf=\"registerFormFirstname.errors.required\">{{'register.firstname' | translate }}\n              {{'validators.required' | translate }}</div>\n            <div *ngIf=\"registerFormFirstname.errors.pattern\">{{'validators.letterSpaces' | translate }}</div>\n          </div>\n\n          <div class=\"alert-danger pl-2\"\n            *ngIf=\"registerFormLastname.errors && (registerFormLastname.touched || registerFormLastname.dirty)\">\n            <div *ngIf=\"registerFormLastname.errors.required\">{{'register.lastname' | translate }}\n              {{'validators.required' | translate }}</div>\n            <div *ngIf=\"registerFormLastname.errors.pattern\">{{'validators.letterSpaces' | translate }}</div>\n          </div>\n\n          <div class=\"alert-danger pl-2\"\n            *ngIf=\"registerFormMail.errors && (registerFormMail.touched || registerFormMail.dirty)\">\n            <div *ngIf=\"registerFormMail.errors.required\">{{'register.mail' | translate }}\n              {{'validators.required' | translate }}</div>\n            <div *ngIf=\"registerFormMail.errors.email\">{{'validators.email' | translate }}</div>\n          </div>\n\n          <div class=\"alert-danger pl-2\"\n            *ngIf=\"registerFormPassword.errors && (registerFormPassword.touched || registerFormPassword.dirty)\">\n            <div *ngIf=\"registerFormPassword.errors.required\">{{'register.password' | translate }}\n              {{'validators.required' | translate }}</div>\n            <div *ngIf=\"registerFormPassword.errors.pattern\">{{'validators.passwordPattern' | translate }}</div>\n          </div>\n\n          <div class=\"alert-danger pl-2\"\n            *ngIf=\"registerFormPasswordConfirm.errors && (registerFormPasswordConfirm.touched || registerFormPasswordConfirm.dirty)\">\n            <div *ngIf=\"registerFormPasswordConfirm.errors.required\">{{'register.passwordConfirm' | translate }}\n              {{'validators.required' | translate }}</div>\n            <div *ngIf=\"registerFormPassword.errors.pattern\">{{'validators.passwordPattern' | translate }}</div>\n          </div>\n\n          <div class=\"alert-danger pl-2\"\n            *ngIf=\"registerFormPassword.value != registerFormPasswordConfirm.value && registerFormPasswordConfirm.value != null\">\n            {{'validators.passwordMismatch' | translate }}\n          </div>\n\n          <div class=\"alert-danger pl-2\"\n            *ngIf=\"registerFormSex.errors && (registerFormSex.touched || registerFormSex.dirty)\">\n            <div *ngIf=\"registerFormSex.errors.required\" class=\"alert-danger\">{{'register.sex' | translate }}\n              {{'validators.required' | translate }}</div>\n          </div>\n\n          <div class=\"alert-danger pl-2\"\n            *ngIf=\"registerFormOffers.errors && (registerFormOffers.touched || registerFormOffers.dirty)\">\n            <div *ngIf=\"registerFormOffers.errors.required\" class=\"alert-danger\">{{'validators.minOffers' | translate }}\n            </div>\n          </div>\n\n          <div class=\"alert-danger pl-2\"\n            *ngIf=\"registerFormActivities.errors && (registerFormActivities.touched || registerFormActivities.dirty)\">\n            <div *ngIf=\"registerFormActivities.errors.required\" class=\"alert-danger\">\n              {{'validators.minActivities' | translate }}</div>\n          </div>\n\n          <div class=\"alert-danger pl-2\"\n            *ngIf=\"registerFormCity.errors && (registerFormCity.touched || registerFormCity.dirty)\">\n            <div *ngIf=\"registerFormCity.errors.required\" class=\"alert-danger\">{{'validators.city' | translate }}</div>\n          </div>\n\n          <div class=\"alert-danger pl-2\"\n            *ngIf=\"registerFormBirthday.errors && (registerFormBirthday.touched || registerFormBirthday.dirty)\">\n            <div *ngIf=\"registerFormBirthday.errors.required\" class=\"alert-danger\">\n              {{'validators.birthday' | translate }}</div>\n          </div>\n          <!--End-Validator messages-->\n\n          <div class=\"btn-toolbar d-flex justify-content-center\" role=\"toolbar\">\n            <div class=\"btn-group mr-1 mr-md-3\">\n              <button type=\"button\" type=\"submit\" class=\"btn btn-warning d-flex mx-auto mt-2\"\n                [disabled]=\"(!registerForm.valid || !registerFormOffers.valid || !registerFormActivities.valid || !registerFormCity.valid)\">{{'register.saveButton' | translate }}</button>\n            </div>\n            <div class=\"btn-group ml-md-3\">\n              <button type=\"button\" [routerLink]=\"['/login']\"\n                class=\"btn btn-outline-warning d-flex mx-auto mt-2\">{{'register.quitButton' | translate }}</button>\n            </div>\n          </div>\n        </form>\n      </div>\n      <p class=\"d-flex justify-content-end text-black-50 mr-4\"><small>*\n          {{'register.requiredExplanation' | translate }}</small></p>\n    </div>\n    <!--card-->\n  </div>\n  <!--col-10-->\n  <div class=\"col-1\"></div>\n</div>\n"

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
/* harmony import */ var _services_utility_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/utility-store.service */ "./src/app/services/utility-store.service.ts");
/* harmony import */ var ts_md5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ts-md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ts_md5__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var RegisterPageComponent = /** @class */ (function () {
    function RegisterPageComponent(formBuilder, router, userStoreService, utliltyStoreService, translateService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userStoreService = userStoreService;
        this.utliltyStoreService = utliltyStoreService;
        this.translateService = translateService;
        this.md5 = new ts_md5__WEBPACK_IMPORTED_MODULE_6__["Md5"]();
        this.selectOffersActivitiesSettings = {};
        this.selectSexSettings = {};
        this.selectCitySettings = {};
        this.registerForm = this.createRegisterForm();
    }
    RegisterPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        // initialzie all available offers & activities
        this.setAllUtilities();
        this.translateService.onDefaultLangChange.subscribe(function (event) {
            _this.setAllUtilities();
        });
        this.initializeMultiselectSettings();
    };
    RegisterPageComponent.prototype.setAllUtilities = function () {
        this.cities = this.utliltyStoreService.getAllCities(this.translateService.getDefaultLang());
        this.offers = this.utliltyStoreService.getAllOffers(this.translateService.getDefaultLang());
        this.activities = this.utliltyStoreService.getAllActivities(this.translateService.getDefaultLang());
        this.sex = this.utliltyStoreService.getAllSex(this.translateService.getDefaultLang());
    };
    RegisterPageComponent.prototype.createRegisterForm = function () {
        // create the formGroup
        return this.formBuilder.group({
            // the field only contains letters or spaces
            registerFormFirstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-ZäÄüÜöÖß]*')]],
            // the field only contains letters or spaces
            registerFormLastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-ZäÄüÜöÖß]*')]],
            registerFormMail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            registerFormBirthday: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // at least 6 characters, must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number, can contain special characters
            // tslint:disable-next-line:max-line-length
            registerFormPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d).{6,}$')]],
            // at least 6 characters, must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number, can contain special characters
            // tslint:disable-next-line:max-line-length
            registerFormPasswordConfirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d).{6,}$')]]
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
            city: this.cities.indexOf(this.selectedCity[0]),
            dateOfBirth: Number(this.registerForm.value.registerFormBirthday),
            // get the only one item from selectedSex-Array
            sex: this.parseSexValueForBackend(this.selectedSex[0]),
            activities: this.parseActivitiesForBackend(this.selectedActivities),
            offers: this.parseOffersForBackend(this.selectedOffers),
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
    RegisterPageComponent.prototype.parseSexValueForBackend = function (sex) {
        return this.sex.indexOf(sex);
    };
    RegisterPageComponent.prototype.parseActivitiesForBackend = function (selectedActivities) {
        var _this = this;
        var selectedActivitiesIndexes = [];
        selectedActivities.forEach(function (activity) {
            selectedActivitiesIndexes.push(_this.activities.indexOf(activity));
        });
        return selectedActivitiesIndexes;
    };
    RegisterPageComponent.prototype.parseOffersForBackend = function (selectedOffers) {
        var _this = this;
        var selectedOffersIndexes = [];
        selectedOffers.forEach(function (offer) {
            selectedOffersIndexes.push(_this.offers.indexOf(offer));
        });
        return selectedOffersIndexes;
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
            _services_utility_store_service__WEBPACK_IMPORTED_MODULE_5__["UtilityStoreService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
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

module.exports = "<div class=\"row my-5\">\n  <div class=\"col-1\"></div>\n  <div class=\"col-10\">\n    <div *ngIf=\"searchResultLength, else elseBlock\"> <!-- TODO Need something else to check, if there are any results -->\n      <div class=\"card\">\n        <div class=\"card-header bg-transparent text-center border-warning\">\n          <h2 class=\"font-weight-light\">{{ 'result.results' | translate }}</h2>\n        </div>\n        <div class=\"card-body mx-5\">\n          <!-- show all accepted matches which are saved in acceptedMatches[]-->\n          <div\n            *ngFor=\"let user of searchResults$ | sort:'commonActivities' | paginate: { itemsPerPage: 5, currentPage: pageNumber } \"> <!--  -->\n            <div class=\"card shadow my-3\">\n              <div class=\"card-body accepted-match-cards\">\n                <div class=\"card-text\">\n                  <div class=\"row\">\n                    <div class=\"col-8 col-md-10\">\n                      <p class=\"my-0\"><small><b>{{ user.firstname }} {{ user.lastname }}</b></small></p>\n                      <p class=\"my-0\"><small><i>{{ parseSexValueForFrontend(user.sex) }}</i></small></p>\n                      <p class=\"my-0\"><small><i>{{ parseCityForFrontend(user.city) }}</i></small></p>\n                      <p class=\"my-0\"><small><i>{{ calculateAge(user.dateOfBirth) }} {{ 'result.age' | translate }}</i></small></p>\n                      <p class=\"my-0\"><small><i>{{ 'result.activities' | translate }}</i>: {{activitiesForModal(parseActivitiesForFrontend(user.activities))}}</small></p>\n                      <p class=\"my-0\"><small><i>{{ 'result.commonActivities' | translate }}</i>: <b>{{activitiesForModal(parseActivitiesForFrontend(user.commonActivities))}}</b></small></p>\n                    </div>\n                    <div class=\"col-4 col-md-2 d-flex justify-content-end my-auto\">\n                      <button type=\"button\" class=\"btn btn-outline-success homebutton\" (click)=\"sendMatchrequest(user)\"\n                        data-toggle=\"tooltip\" data-placement=\"top\"\n                        title=\"{{ 'result.sendMatchrequestTooltip' | translate }}\">\n                        <fa-icon [icon]=\"faUserCheck\"></fa-icon>\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!--ngFor-->\n\n          <!--controls for pagination, which are only visible at the length of matchRequest-array bigger than 5-->\n          <pagination-controls autoHide=\"true\" class=\"pagination justify-content-center\"\n            (pageChange)=\"pageNumber = $event\" previousLabel=\"{{'home.previous' | translate }}\"\n            nextLabel=\"{{'home.next' | translate }}\">\n          </pagination-controls>\n        </div>\n      </div>\n    </div>\n    <!-- if there are no matchrequests-->\n    <ng-template #elseBlock>\n      <p class=\"text-center\">{{ 'result.noResults' | translate}}</p>\n    </ng-template>\n  </div>\n  <!--col-10-->\n  <div class=\"col-1\"></div>\n</div>\n"

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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_utility_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/utility-store.service */ "./src/app/services/utility-store.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_match_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/match-store.service */ "./src/app/services/match-store.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _models_match__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../..//models/match */ "./src/app/models/match.ts");










var ResultPageComponent = /** @class */ (function () {
    function ResultPageComponent(matchStoreService, authService, searchService, route, utliltyStoreService, translateService) {
        this.matchStoreService = matchStoreService;
        this.authService = authService;
        this.searchService = searchService;
        this.route = route;
        this.utliltyStoreService = utliltyStoreService;
        this.translateService = translateService;
        // input variables for searchparams and the Link for getting the result is required!!
        this.faUserCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faUserCheck"];
        this.userForSpecificRequest = [];
        this.usersToBeExcludedArray = [];
    }
    ResultPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setAllUtilities();
        this.translateService.onDefaultLangChange.subscribe(function (event) {
            _this.setAllUtilities();
        });
        var searchRequestId = this.route.snapshot.paramMap.get('id');
        this.searchService.getSearchRequestById(searchRequestId).subscribe(function (searchRequest) {
            if (searchRequest.offerParam !== undefined) {
                _this.matchedOffer = searchRequest.offerParam; // TODO check, if the error message occures again, even inside the if-clause
            }
            // TODO subscribe in a subscribe is bad code. Try to fix this!
            _this.searchService.getSearchResult(searchRequest).subscribe(function (searchResults) {
                _this.searchResultLength = searchResults.length;
                _this.searchResults$ = searchResults;
            }, function (error) {
                console.log('Error in profile-page - TODO delete this console.log() before finishing WebProg!');
            });
        }, function (error) {
            console.log('Error in profile-page - TODO delete this console.log() before finishing WebProg!');
        });
    };
    ResultPageComponent.prototype.setAllUtilities = function () {
        this.cities = this.utliltyStoreService.getAllCities(this.translateService.getDefaultLang());
        this.activities = this.utliltyStoreService.getAllActivities(this.translateService.getDefaultLang());
        this.sex = this.utliltyStoreService.getAllSex(this.translateService.getDefaultLang());
    };
    ResultPageComponent.prototype.calculateAgeForEachUser = function (birthdate) {
        var timeDiff = Math.abs(Date.now() - birthdate);
        var age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
        return age;
    };
    ResultPageComponent.prototype.activitiesForModal = function (activities) {
        var arr;
        arr = '';
        activities.forEach(function (element) {
            arr = element + ', ' + arr;
        });
        return arr.substring(0, (arr.length - 2));
    };
    ResultPageComponent.prototype.parseSexValueForFrontend = function (sexIndex) {
        return this.sex[sexIndex];
    };
    ResultPageComponent.prototype.parseCityForFrontend = function (cityIndex) {
        return this.cities[cityIndex];
    };
    ResultPageComponent.prototype.parseActivitiesForFrontend = function (activitiesIndex) {
        var _this = this;
        var activities = [];
        activitiesIndex.forEach(function (activityIndex) {
            activities.push(_this.activities[activityIndex]);
        });
        return activities;
    };
    ResultPageComponent.prototype.parseDateOfBirthForFrontend = function (dateOfBirth) {
        var ageDifMs = Date.now() - dateOfBirth;
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };
    ResultPageComponent.prototype.sendMatchrequest = function (partner) {
        var newMatch = new _models_match__WEBPACK_IMPORTED_MODULE_9__["Match"](this.authService.currentUserID, partner.uid, this.matchedOffer, false);
        this.matchStoreService.createMatch(newMatch).subscribe();
    };
    ResultPageComponent.prototype.calculateAge = function (birthdate) {
        var BD = new Date(birthdate);
        var timeDiff = Math.abs(Date.now() - BD.getTime());
        var age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
        return age + '';
    };
    ResultPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
            selector: 'app-result-page',
            template: __webpack_require__(/*! ./result-page.component.html */ "./src/app/components/result-page/result-page.component.html"),
            styles: [__webpack_require__(/*! ./result-page.component.scss */ "./src/app/components/result-page/result-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_match_store_service__WEBPACK_IMPORTED_MODULE_6__["MatchStoreService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _services_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_utility_store_service__WEBPACK_IMPORTED_MODULE_2__["UtilityStoreService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
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

module.exports = "<div class=\"row\">\n  <div class=\"col-1\"></div>\n  <div class=\"col-10\">\n    <div class=\"card mx-auto my-5 shadow\">\n      <!--header-->\n      <div class=\"card-header h5 bg-transparent d-flex justify-content-between border-warning p-0\">\n        <div class=\"col-md-6 font-weight-light text-center pointer-cursor align-self-center border-right btn-outline-warning py-3\"\n          data-toggle=\"collapse\" href=\"#collapseNewSearch\"\n          [ngClass]=\"{'active':newSearchCollapsed === true}\"\n          role=\"button\" aria-expanded=\"false\"\n          aria-controls=\"collapseNewSearch\" (click)=\"recentRequestCollapsed=false\" (click)=\"newSearchCollapsed=true\">\n          {{'search.newSearch' | translate }}\n        </div>\n        <div class=\"col-md-6 font-weight-light text-center pointer-cursor btn-outline-warning py-3\"\n            [ngClass]=\"{'active':recentRequestCollapsed === true}\"\n            data-toggle=\"collapse\" href=\"#collapseRecentSearches\"\n            role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseRecentSearches\"\n            (click)=\"newSearchCollapsed=false\" (click)=\"recentRequestCollapsed=true\">\n            {{'search.recentSearches' | translate }}\n        </div>\n      </div><!--header-->\n\n      <!--new search area-->\n      <div *ngIf=\"newSearchCollapsed\" class=\"card-body\" id=\"collapseNewSearch\">\n        <form class=\"\" [formGroup]=\"searchForm\" (ngSubmit)=\"newSearchSave()\" novalidate>\n          <div class=\"row\">\n            <div class=\"form-group col-md-6\">\n              <label for=\"searchFormOffer\">{{'search.offer' | translate }}:*</label>\n              <ng-multiselect-dropdown  class=\"form-control shadow-sm\" id=\"searchFormOffer\" #searchFormOffer=\"ngModel\"\n                [placeholder]=\"'search.offer' | translate\"\n                [data]=\"offers\"\n                [(ngModel)]=\"selectedOffer\" [ngModelOptions]=\"{ standalone : true }\"\n                [settings]=\"selectOnlyOneSettings\" required>\n              </ng-multiselect-dropdown>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group\">\n              <label for=\"searchFormCity\">{{'search.city' | translate }}</label>\n              <ng-multiselect-dropdown  class=\"form-control shadow-sm\" id=\"searchFormCity\" #searchFormCity=\"ngModel\"\n                [placeholder]=\"'register.pleaseChoose' | translate\"\n                [data]=\"cities\"\n                [(ngModel)]=\"selectedCity\" [ngModelOptions]=\"{ standalone : true }\"\n                [settings]=\"selectOnlyOneSettings\">\n              </ng-multiselect-dropdown>\n            </div>\n            <div class=\"col-md-6 form-group\">\n              <label for=\"searchFormSex\">{{'register.sex' | translate }}:*</label>\n              <ng-multiselect-dropdown  class=\"form-control shadow-sm\" id=\"searchFormSex\" #searchFormSex=\"ngModel\"\n                [placeholder]=\"'register.pleaseChoose' | translate\"\n                [data]=\"sex\"\n                [(ngModel)]=\"selectedSex\" [ngModelOptions]=\"{ standalone : true }\"\n                [settings]=\"selectSexSettings\" required>\n              </ng-multiselect-dropdown>\n            </div>\n            </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group\">\n                <label>{{'search.minAge' | translate }}</label>\n                <input type=\"number\" class=\"form-control shadow-sm\" id=\"searchFormMinAge\" formControlName=\"searchFormMinAge\" placeholder=\"{{'search.minAge' | translate }}\">\n            </div>\n            <div class=\"col-md-6 form-group\">\n                <label>{{'search.maxAge' | translate }}</label>\n                <input type=\"number\" class=\"form-control shadow-sm\" id=\"searchFormMaxAge\" formControlName=\"searchFormMaxAge\" placeholder=\"{{'search.maxAge' | translate }}\">\n            </div>\n          </div>\n\n          <div class=\"alert-danger pl-2\" *ngIf=\"searchFormOffer.errors && (searchFormOffer.touched || searchFormOffer.dirty)\">\n            <div *ngIf=\"searchFormOffer.errors.required\" class=\"alert-danger\">{{'validators.minOffers' | translate }}</div>\n          </div>\n\n          <div class=\"alert-danger pl-2\" *ngIf=\"searchFormMinAge.value > searchFormMaxAge.value && searchFormMaxAge.touched\">\n            {{'validators.ageMismatch' | translate }}\n          </div>\n\n          <div class=\"alert-danger pl-2\" *ngIf=\"searchFormSex.errors && (searchFormSex.touched || searchFormSex.dirty)\">\n          <div *ngIf=\"searchFormSex.errors.required\" class=\"alert-danger\">{{'register.sex' | translate }}\n            {{'validators.required' | translate }}</div>\n          </div>\n\n          <div class=\"row mt-2\" role=\"toolbar\">\n            <div class=\"col-md-6\">\n              <button type=\"button\" type=\"submit\" class=\"btn btn-warning d-flex mx-auto ml-md-auto mt-2\"\n                      [disabled]=\"!searchFormOffer.valid || (searchFormMinAge.value > searchFormMaxAge.value  && searchFormMaxAge.touched)\">\n                      {{'search.searchButton' | translate }}\n              </button>\n            </div>\n            <div class=\"col-md-6\">\n              <button type=\"button\" [routerLink]=\"['/home']\" class=\"btn btn-outline-warning d-flex mx-auto mr-md-auto mt-2\" >{{'register.quitButton' | translate }}</button>\n            </div>\n          </div>\n\n        </form>\n        <p class=\"d-flex justify-content-end text-black-50 mr-4 mt-5 mb-0\"><small>*\n          {{'register.requiredExplanation' | translate }}</small></p>\n      </div>\n\n      <!--recent searchrequests area-->\n      <div *ngIf=\"recentRequestCollapsed\" class=\"card-body collapse\" id=\"collapseRecentSearches\">\n        <div *ngFor=\"let request of recentSearchRequests$ | async\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <a class=\"pointer-cursor\" (click)=\"useRecentSearchrequest(request.id)\">\n                <h5 class=\"font-weight-light\">{{ parseOfferForFrontend(request.offerParam) }}</h5>\n                <h6 *ngIf=\"request.minAgeParam > 0 && request.maxAgeParam > 0\" class=\"font-weight-light\">{{ request.minAgeParam }} - {{request.maxAgeParam}} {{'search.years' | translate }} </h6>\n                <h6 *ngIf=\"request.minAgeParam > 0 && request.maxAgeParam === 0\" class=\"font-weight-light\"> {{'search.from' | translate }} {{ request.minAgeParam }} {{'search.years' | translate }} </h6>\n                <h6 *ngIf=\"request.minAgeParam === 0 && request.maxAgeParam > 0\" class=\"font-weight-light\"> {{'search.until' | translate }} {{request.maxAgeParam}} {{'search.years' | translate }} </h6>\n                <h6 class=\"font-weight-light\">{{ parseSexValueForFrontend(request.sexParam) }}</h6>\n              </a>\n            </div>\n          </div>\n        </div><!--ngfor-->\n      </div><!--recent searchrequests-->\n\n    </div>\n  </div><!--col-10-->\n  <div class=\"col-1\"></div>\n</div>\n"

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
/* harmony import */ var _services_utility_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/utility-store.service */ "./src/app/services/utility-store.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var SearchPageComponent = /** @class */ (function () {
    function SearchPageComponent(formBuilder, router, utliltyStoreService, searchService, authService, translateService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.utliltyStoreService = utliltyStoreService;
        this.searchService = searchService;
        this.authService = authService;
        this.translateService = translateService;
        this.sexDe = ['weiblich', 'männlich', 'beide'];
        this.sexEn = ['female', 'male', 'both'];
        this.selectedCity = [];
        // settings for select fields
        this.selectOnlyOneSettings = {};
        this.selectSexSettings = {};
        // getting active & collapsed state
        this.newSearchCollapsed = true;
        this.recentRequestCollapsed = false;
        this.searchForm = this.createSearchForm();
    }
    SearchPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        // initialzie all available offers & cities
        this.setAllUtilities();
        this.translateService.onDefaultLangChange.subscribe(function (event) {
            _this.setAllUtilities();
        });
        this.initializeMultiselectSettings();
        this.recentSearchRequests$ = this.searchService.getRecentSearchRequests();
        // console.log('Aufruf - search');
    };
    SearchPageComponent.prototype.setAllUtilities = function () {
        this.cities = this.utliltyStoreService.getAllCities(this.translateService.getDefaultLang());
        this.offers = this.utliltyStoreService.getAllOffers(this.translateService.getDefaultLang());
        this.sex = this.getSex(this.translateService.getDefaultLang());
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
            offerParam: this.offers.indexOf(this.selectedOffer[0]),
            cityParam: this.cities.indexOf(this.selectedCity[0]),
            sexParam: this.sex.indexOf(this.selectedSex[0]),
            minAgeParam: Number(this.searchForm.value.searchFormMinAge),
            maxAgeParam: Number(this.searchForm.value.searchFormMaxAge),
            createdAt: Date.now(),
            uid: this.authService.currentUserID
        };
        this.searchService.createSearchrequest(searchdata)
            .subscribe(function (response) {
            _this.router.navigate(["/result/" + response.id]);
        });
    };
    SearchPageComponent.prototype.useRecentSearchrequest = function (searchRequestId) {
        this.router.navigate(["/result/" + searchRequestId]);
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
    SearchPageComponent.prototype.parseSexValueForFrontend = function (sexIndex) {
        return this.sex[sexIndex];
    };
    SearchPageComponent.prototype.parseOfferForFrontend = function (offerIndex) {
        return this.offers[offerIndex];
    };
    SearchPageComponent.prototype.getSex = function (language) {
        if (language === 'de') {
            return this.sexDe;
        }
        else {
            return this.sexEn;
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
            _services_utility_store_service__WEBPACK_IMPORTED_MODULE_2__["UtilityStoreService"],
            src_app_services_search_service__WEBPACK_IMPORTED_MODULE_6__["SearchService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
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

/***/ "./src/app/pipes/sort.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/sort.pipe.ts ***!
  \************************************/
/*! exports provided: SortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortPipe", function() { return SortPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SortPipe = /** @class */ (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (array, field) {
        if (!Array.isArray(array)) {
            return;
        }
        array.sort(function (a, b) {
            if (a[field] > b[field]) {
                return 1;
            }
            else if (a[field] < b[field]) {
                return -1;
            }
            else {
                return 0;
            }
        });
        return array.reverse();
    };
    SortPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'sort'
        })
    ], SortPipe);
    return SortPipe;
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
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var AuthService = /** @class */ (function () {
    function AuthService(angularFireAuth, angularFirestore, router) {
        var _this = this;
        this.angularFireAuth = angularFireAuth;
        this.angularFirestore = angularFirestore;
        this.router = router;
        this.isLoggedIn = false;
        this.user$ = this.angularFireAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (user) {
            if (user) {
                _this.currentUserID = user.uid;
                // this.currentUsername = user.displayName;
                _this.currentUserMail = user.email;
                return _this.angularFirestore.doc("users/" + user.uid).valueChanges();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(null);
            }
        }));
        this.user$.subscribe(function (user) {
            if (user !== null) {
                _this.currentUserActivities = user.activities;
            }
        });
    }
    AuthService.prototype.isloggedIn = function () {
        var user = this.angularFireAuth.auth.currentUser;
        if (user) {
            return this.isLoggedIn = true;
        }
        else {
            return this.isLoggedIn = false;
        }
    };
    AuthService.prototype.getCurrentUser = function () {
        return this.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).toPromise();
    };
    AuthService.prototype.validatePassword = function (password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var credential;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        credential = firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].EmailAuthProvider.credential(this.currentUserMail, password);
                        return [4 /*yield*/, this.angularFireAuth.auth.currentUser.reauthenticateAndRetrieveDataWithCredential(credential)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
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
/* harmony import */ var src_app_services_user_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user-store.service */ "./src/app/services/user-store.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");








var ChatService = /** @class */ (function () {
    function ChatService(authService, angularFirestore, http, userStoreService) {
        this.authService = authService;
        this.angularFirestore = angularFirestore;
        this.http = http;
        this.userStoreService = userStoreService;
        // TODO change if using over web
        // private apiUrl2 = 'http://localhost:5000/tandemfirebase/us-central1/chatrooms';
        this.apiUrl2 = 'https://us-central1-tandemfirebase.cloudfunctions.net/chatrooms';
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
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(resultA, resultB).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_a) {
            var users = _a[0], otherUsers = _a[1];
            return users.concat(otherUsers);
        }));
    };
    ChatService.prototype.getAllChatroomsAsUserA = function () {
        var _this = this;
        return this.authService.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (user) {
            return _this.angularFirestore
                .collection('chatrooms', function (ref) { return ref.where('userA', '==', user ? user.uid : ''); })
                .snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (actions) {
                return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    var id = a.payload.doc.id;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
                });
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (chatrooms) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(chatrooms.map(function (chatroom) {
                return _this.userStoreService.getUserById(chatroom.userB).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (user) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, chatroom, user);
                }));
            }));
        }));
    };
    ChatService.prototype.getAllChatroomsAsUserB = function () {
        var _this = this;
        return this.authService.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (user) {
            return _this.angularFirestore
                .collection('chatrooms', function (ref) { return ref.where('userB', '==', user ? user.uid : ''); })
                .snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (actions) {
                return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    var id = a.payload.doc.id;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
                });
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (chatrooms) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(chatrooms.map(function (chatroom) {
                return _this.userStoreService.getUserById(chatroom.userA).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (user) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, chatroom, user);
                }));
            }));
        }));
    };
    // Query chatrooms by field name.
    ChatService.prototype.queryChatrooms = function (fieldName) {
        var _this = this;
        return this.authService.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (user) {
            return _this.angularFirestore
                .collection('chatrooms', function (ref) { return ref.where(fieldName, '==', user ? user.uid : ''); })
                .snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (actions) {
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (doc) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: doc.payload.id }, doc.payload.data());
        }));
    };
    // Get the corresponding user to every message as an observable with realtime changes.
    ChatService.prototype.joinUsers = function (chat$) {
        var _this = this;
        var chat;
        var joinKeys = {};
        return chat$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (c) {
            // Unique User IDs
            chat = c;
            var uids = Array.from(new Set(c.messages.map(function (value) { return value.uid; })));
            // Firestore User Doc Reads
            var userDocs = uids.map(function (u) {
                return _this.angularFirestore.doc("users/" + u).valueChanges();
            });
            return userDocs.length ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(userDocs) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (array) {
            array.forEach(function (v) { return (joinKeys[v.uid] = v); });
            chat.messages = chat.messages.map(function (v) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, v, { user: joinKeys[v.uid] });
            });
            return chat;
        }));
    };
    ChatService.prototype.deleteChatroom = function (chatroomId) {
        return this.http.delete(this.apiUrl2 + "/" + chatroomId);
    };
    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            src_app_services_user_store_service__WEBPACK_IMPORTED_MODULE_1__["UserStoreService"]])
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
/* harmony import */ var src_app_services_user_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user-store.service */ "./src/app/services/user-store.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");








var MatchStoreService = /** @class */ (function () {
    // private apiUrl = 'https://us-central1-livechattandem.cloudfunctions.net';
    function MatchStoreService(http, angularFirestore, authService, userStoreService) {
        this.http = http;
        this.angularFirestore = angularFirestore;
        this.authService = authService;
        this.userStoreService = userStoreService;
        // private apiUrl = 'http://localhost:5000/tandemfirebase/us-central1';
        this.apiUrl = 'https://us-central1-tandemfirebase.cloudfunctions.net';
    }
    MatchStoreService.prototype.createMatch = function (match) {
        return this.http.post(this.apiUrl + "/matches/", match);
    };
    MatchStoreService.prototype.getAllMatches = function () {
        var resultA = this.queryAllMatches('initiatorID');
        var resultB = this.queryAllMatches('partnerID');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])(resultA, resultB).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_a) {
            var users = _a[0], otherUsers = _a[1];
            return users.concat(otherUsers);
        }));
    };
    MatchStoreService.prototype.getAllUnAcceptedMatches = function () {
        var _this = this;
        return this.authService.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (user) {
            return _this.angularFirestore
                .collection('matches', function (ref) { return ref.where('partnerID', '==', user ? user.uid : '')
                .where('accepted', '==', false); })
                .snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) {
                return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    var matchId = a.payload.doc.id;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ matchId: matchId }, data);
                });
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (matches) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])(matches.map(function (match) {
                return _this.userStoreService.getUserById(match.initiatorID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (user) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, match, user);
                }));
            }));
        }));
    };
    MatchStoreService.prototype.getAllAcceptedMatchesAsInitiator = function () {
        return this.queryMatches(true);
    };
    MatchStoreService.prototype.getAllAcceptedMatchesAsPartner = function () {
        var _this = this;
        return this.authService.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (user) {
            return _this.angularFirestore
                .collection('matches', function (ref) { return ref.where('partnerID', '==', user ? user.uid : '')
                .where('accepted', '==', true); })
                .snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) {
                return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    var matchId = a.payload.doc.id;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ matchId: matchId }, data);
                });
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (matches) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])(matches.map(function (match) {
                return _this.userStoreService.getUserById(match.initiatorID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (user) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, match, user);
                }));
            }));
        }));
    };
    MatchStoreService.prototype.getAllMatchrequests = function () {
        return this.queryMatches(false);
    };
    MatchStoreService.prototype.queryMatches = function (boolValueOfAccepted) {
        var _this = this;
        return this.authService.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (user) {
            return _this.angularFirestore
                .collection('matches', function (ref) { return ref.where('initiatorID', '==', user ? user.uid : '')
                .where('accepted', '==', boolValueOfAccepted); })
                .snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) {
                return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    var matchId = a.payload.doc.id;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ matchId: matchId }, data);
                });
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (matches) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])(matches.map(function (match) {
                return _this.userStoreService.getUserById(match.partnerID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (user) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, match, user);
                }));
            }));
        }));
    };
    MatchStoreService.prototype.queryAllMatches = function (fieldNameOfRole) {
        var _this = this;
        return this.authService.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (user) {
            return _this.angularFirestore
                .collection('matches', function (ref) { return ref.where(fieldNameOfRole, '==', user ? user.uid : ''); })
                .snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) {
                return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    var matchId = a.payload.doc.id;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ matchId: matchId }, data);
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            src_app_services_user_store_service__WEBPACK_IMPORTED_MODULE_1__["UserStoreService"]])
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
        // private apiUrl = 'http://localhost:5000/tandemfirebase/us-central1';
        this.apiUrl = 'https://us-central1-tandemfirebase.cloudfunctions.net';
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    SearchService.prototype.createSearchrequest = function (searchdata) {
        return this.http.post(this.apiUrl + "/searches/", searchdata);
    };
    SearchService.prototype.getRecentSearchRequests = function () {
        return this.angularFirestore
            .collection("users/" + this.authService.currentUserID + "/searches", function (ref) { return ref.orderBy('createdAt', 'desc'); })
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
        if (searchRequest.minAgeParam === 0 &&
            searchRequest.maxAgeParam !== 0 &&
            searchRequest.cityParam >= 0 &&
            searchRequest.sexParam < 2) {
            return this.searchQueryWithCityAndSexAndMaxButWithoutMin(searchRequest);
        }
        if (searchRequest.minAgeParam === 0 &&
            searchRequest.maxAgeParam !== 0 &&
            searchRequest.cityParam >= 0 &&
            searchRequest.sexParam === 2) {
            return this.searchQueryWithCityAndMaxButWithoutMinAndWithoutSex(searchRequest);
        }
        if (searchRequest.minAgeParam === 0 &&
            searchRequest.maxAgeParam !== 0 &&
            searchRequest.cityParam === -1 &&
            searchRequest.sexParam < 2) {
            return this.searchQueryWithSexAndMaxButWithoutMinAndWithoutCity(searchRequest);
        }
        if (searchRequest.minAgeParam === 0 &&
            searchRequest.maxAgeParam !== 0 &&
            searchRequest.cityParam === -1 &&
            searchRequest.sexParam === 2) {
            return this.searchQueryWithMaxButWithoutMinAndWithoutCityAndWithoutSex(searchRequest);
        }
        if (searchRequest.minAgeParam !== 0 &&
            searchRequest.maxAgeParam === 0 &&
            searchRequest.cityParam >= 0 &&
            searchRequest.sexParam < 2) {
            return this.searchQueryWithCityAndSexAndMinButWithoutMax(searchRequest);
        }
        if (searchRequest.minAgeParam !== 0 &&
            searchRequest.maxAgeParam === 0 &&
            searchRequest.cityParam >= 0 &&
            searchRequest.sexParam === 2) {
            return this.searchQueryWithCityAndMinButWithoutMaxAndWithoutSex(searchRequest);
        }
        if (searchRequest.minAgeParam !== 0 &&
            searchRequest.maxAgeParam === 0 &&
            searchRequest.cityParam === -1 &&
            searchRequest.sexParam < 2) {
            return this.searchQueryWithSexAndMinButWithoutMaxAndWithoutCity(searchRequest);
        }
        if (searchRequest.minAgeParam !== 0 &&
            searchRequest.maxAgeParam === 0 &&
            searchRequest.cityParam === -1 &&
            searchRequest.sexParam === 2) {
            return this.searchQueryWithMinButWithoutMaxAndWithoutCityAndWithoutSex(searchRequest);
        }
        if (searchRequest.minAgeParam !== 0 &&
            searchRequest.maxAgeParam !== 0 &&
            searchRequest.cityParam >= 0 &&
            searchRequest.sexParam < 2) {
            return this.searchQueryWithCityAndSexAndMinAndMax(searchRequest);
        }
        if (searchRequest.minAgeParam !== 0 &&
            searchRequest.maxAgeParam !== 0 &&
            searchRequest.cityParam >= 0 &&
            searchRequest.sexParam === 2) {
            return this.searchQueryWithCityAndMinAndMaxButWithoutSex(searchRequest);
        }
        if (searchRequest.minAgeParam !== 0 &&
            searchRequest.maxAgeParam !== 0 &&
            searchRequest.cityParam === -1 &&
            searchRequest.sexParam < 2) {
            return this.searchQueryWithSexAndMinAndMaxButWithoutCity(searchRequest);
        }
        if (searchRequest.minAgeParam !== 0 &&
            searchRequest.maxAgeParam !== 0 &&
            searchRequest.cityParam === -1 &&
            searchRequest.sexParam === 2) {
            return this.searchQueryWithMinAndMaxButWithoutCityAndWithoutSex(searchRequest);
        }
        if (searchRequest.cityParam === -1 &&
            searchRequest.sexParam === 2) {
            return this.searchQueryWithoutCityAndWithoutSex(searchRequest);
        }
        if (searchRequest.cityParam >= 0 &&
            searchRequest.sexParam < 2) {
            return this.searchQueryWithCityAndSex(searchRequest);
        }
        if (searchRequest.cityParam === -1) {
            return this.searchQueryWithoutCityButWithSex(searchRequest);
        }
        if (searchRequest.cityParam >= 0) {
            return this.searchQueryWithCityButWithoutSex(searchRequest);
        }
    };
    SearchService.prototype.searchQueryWithCityButWithoutSex = function (searchRequest) {
        var _this = this;
        return this.getUsersToBeExcludedArray().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (userArray) {
            var uniqueUsers = Array.from(new Set(userArray));
            return _this.angularFirestore
                .collection('users', function (ref) { return ref.where('offers', 'array-contains', searchRequest.offerParam)
                .where('city', '==', searchRequest.cityParam); })
                .snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) {
                return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data);
                });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (users) {
                var commonActivities = [];
                var currentUserActivities = _this.authService.currentUserActivities;
                var filteredUsers = [];
                users.map(function (user) {
                    if (uniqueUsers.includes(user.uid) === false) {
                        user.activities.forEach(function (activity) {
                            currentUserActivities.forEach(function (currentUserActivity) {
                                if (activity === currentUserActivity) {
                                    commonActivities.push(activity);
                                }
                            });
                        });
                        filteredUsers.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ commonActivities: commonActivities }, user));
                        commonActivities = [];
                    }
                });
                return filteredUsers;
            }));
        }));
    };
    SearchService.prototype.searchQueryWithoutCityAndWithoutSex = function (searchRequest) {
        var _this = this;
        return this.getUsersToBeExcludedArray().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (userArray) {
            var uniqueUsers = Array.from(new Set(userArray));
            return _this.angularFirestore
                .collection('users', function (ref) { return ref.where('offers', 'array-contains', searchRequest.offerParam); })
                .snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) {
                return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data);
                });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (users) {
                var commonActivities = [];
                var currentUserActivities = _this.authService.currentUserActivities;
                var filteredUsers = [];
                users.map(function (user) {
                    if (uniqueUsers.includes(user.uid) === false) {
                        user.activities.forEach(function (activity) {
                            currentUserActivities.forEach(function (currentUserActivity) {
                                if (activity === currentUserActivity) {
                                    commonActivities.push(activity);
                                }
                            });
                        });
                        filteredUsers.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ commonActivities: commonActivities }, user));
                        commonActivities = [];
                    }
                });
                return filteredUsers;
            }));
        }));
    };
    SearchService.prototype.searchQueryWithCityAndSex = function (searchRequest) {
        var _this = this;
        return this.getUsersToBeExcludedArray().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (userArray) {
            var uniqueUsers = Array.from(new Set(userArray));
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
                var commonActivities = [];
                var currentUserActivities = _this.authService.currentUserActivities;
                var filteredUsers = [];
                users.map(function (user) {
                    if (uniqueUsers.includes(user.uid) === false) {
                        user.activities.forEach(function (activity) {
                            currentUserActivities.forEach(function (currentUserActivity) {
                                if (activity === currentUserActivity) {
                                    commonActivities.push(activity);
                                }
                            });
                        });
                        filteredUsers.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ commonActivities: commonActivities }, user));
                        commonActivities = [];
                    }
                });
                return filteredUsers;
            }));
        }));
    };
    SearchService.prototype.searchQueryWithoutCityButWithSex = function (searchRequest) {
        var _this = this;
        return this.getUsersToBeExcludedArray().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (userArray) {
            var uniqueUsers = Array.from(new Set(userArray));
            return _this.angularFirestore
                .collection('users', function (ref) { return ref.where('offers', 'array-contains', searchRequest.offerParam)
                .where('sex', '==', searchRequest.sexParam); })
                .snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) {
                return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data);
                });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (users) {
                var commonActivities = [];
                var currentUserActivities = _this.authService.currentUserActivities;
                var filteredUsers = [];
                users.map(function (user) {
                    if (uniqueUsers.includes(user.uid) === false) {
                        user.activities.forEach(function (activity) {
                            currentUserActivities.forEach(function (currentUserActivity) {
                                if (activity === currentUserActivity) {
                                    commonActivities.push(activity);
                                }
                            });
                        });
                        filteredUsers.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ commonActivities: commonActivities }, user));
                        commonActivities = [];
                    }
                });
                return filteredUsers;
            }));
        }));
    };
    SearchService.prototype.searchQueryWithCityAndSexAndMinAndMax = function (searchRequest) {
        var _this = this;
        var minAge = searchRequest.minAgeParam;
        var maxAge = searchRequest.maxAgeParam + 1; // TODO Why does this shows the right results?
        var today = new Date();
        var todayYear = today.getFullYear();
        var todayMonth = today.getMonth();
        var todayDay = today.getDay();
        var minAgeDate = Number(new Date(todayYear - minAge, todayMonth, todayDay));
        var maxAgeDate = Number(new Date(todayYear - maxAge, todayMonth, todayDay));
        var minAgeUsers = this.getUsersToBeExcludedArray().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (userArray) {
            var uniqueUsers = Array.from(new Set(userArray));
            return _this.angularFirestore
                .collection('users', function (ref) { return ref.where('offers', 'array-contains', searchRequest.offerParam)
                .where('city', '==', searchRequest.cityParam)
                .where('sex', '==', searchRequest.sexParam)
                .where('dateOfBirth', '<=', minAgeDate); })
                .snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) {
                return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data);
                });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (users) {
                var commonActivities = [];
                var currentUserActivities = _this.authService.currentUserActivities;
                var filteredUsers = [];
                users.map(function (user) {
                    if (uniqueUsers.includes(user.uid) === false) {
                        user.activities.forEach(function (activity) {
                            currentUserActivities.forEach(function (currentUserActivity) {
                                if (activity === currentUserActivity) {
                                    commonActivities.push(activity);
                                }
                            });
                        });
                        filteredUsers.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ commonActivities: commonActivities }, user));
                        commonActivities = [];
                    }
                });
                return filteredUsers;
            }));
        }));
        var maxAgeUsers = this.getUsersToBeExcludedArray().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (userArray) {
            var uniqueUsers = Array.from(new Set(userArray));
            return _this.angularFirestore
                .collection('users', function (ref) { return ref.where('offers', 'array-contains', searchRequest.offerParam)
                .where('city', '==', searchRequest.cityParam)
                .where('sex', '==', searchRequest.sexParam)
                .where('dateOfBirth', '>=', maxAgeDate); })
                .snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) {
                return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data);
                });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (users) {
                var commonActivities = [];
                var currentUserActivities = _this.authService.currentUserActivities;
                var filteredUsers = [];
                users.map(function (user) {
                    if (uniqueUsers.includes(user.uid) === false) {
                        user.activities.forEach(function (activity) {
                            currentUserActivities.forEach(function (currentUserActivity) {
                                if (activity === currentUserActivity) {
                                    commonActivities.push(activity);
                                }
                            });
                        });
                        filteredUsers.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ commonActivities: commonActivities }, user));
                        commonActivities = [];
                    }
                });
                return filteredUsers;
            }));
        }));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])(minAgeUsers, maxAgeUsers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_a) {
            var minUsers = _a[0], maxUsers = _a[1];
            var usersResult = [];
            minUsers.forEach(function (minUser) {
                maxUsers.forEach(function (maxUser) {
                    if (minUser.uid === maxUser.uid) {
                        usersResult.push(minUser);
                    }
                });
            });
            return usersResult;
        }));
    };
    SearchService.prototype.searchQueryWithCityAndMinAndMaxButWithoutSex = function (searchRequest) {
        var _this = this;
        var minAge = searchRequest.minAgeParam;
        var maxAge = searchRequest.maxAgeParam + 1;
        var today = new Date();
        var todayYear = today.getFullYear();
        var todayMonth = today.getMonth();
        var todayDay = today.getDay();
        var minAgeDate = Number(new Date(todayYear - minAge, todayMonth, todayDay));
        var maxAgeDate = Number(new Date(todayYear - maxAge, todayMonth, todayDay));
        var minAgeUsers = this.getUsersToBeExcludedArray().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (userArray) {
            var uniqueUsers = Array.from(new Set(userArray));
            return _this.angularFirestore
                .collection('users', function (ref) { return ref.where('offers', 'array-contains', searchRequest.offerParam)
                .where('city', '==', searchRequest.cityParam)
                .where('dateOfBirth', '<=', minAgeDate); })
                .snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) {
                return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data);
                });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (users) {
                var commonActivities = [];
                var currentUserActivities = _this.authService.currentUserActivities;
                var filteredUsers = [];
                users.map(function (user) {
                    if (uniqueUsers.includes(user.uid) === false) {
                        user.activities.forEach(function (activity) {
                            currentUserActivities.forEach(function (currentUserActivity) {
                                if (activity === currentUserActivity) {
                                    commonActivities.push(activity);
                                }
                            });
                        });
                        filteredUsers.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ commonActivities: commonActivities }, user));
                        commonActivities = [];
                    }
                });
                return filteredUsers;
            }));
        }));
        var maxAgeUsers = this.getUsersToBeExcludedArray().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (userArray) {
            var uniqueUsers = Array.from(new Set(userArray));
            return _this.angularFirestore
                .collection('users', function (ref) { return ref.where('offers', 'array-contains', searchRequest.offerParam)
                .where('city', '==', searchRequest.cityParam)
                .where('dateOfBirth', '>=', maxAgeDate); })
                .snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) {
                return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data);
                });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (users) {
                var commonActivities = [];
                var currentUserActivities = _this.authService.currentUserActivities;
                var filteredUsers = [];
                users.map(function (user) {
                    if (uniqueUsers.includes(user.uid) === false) {
                        user.activities.forEach(function (activity) {
                            currentUserActivities.forEach(function (currentUserActivity) {
                                if (activity === currentUserActivity) {
                                    commonActivities.push(activity);
                                }
                            });
                        });
                        filteredUsers.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ commonActivities: commonActivities }, user));
                        commonActivities = [];
                    }
                });
                return filteredUsers;
            }));
        }));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])(minAgeUsers, maxAgeUsers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_a) {
            var minUsers = _a[0], maxUsers = _a[1];
            var usersResult = [];
            minUsers.forEach(function (minUser) {
                maxUsers.forEach(function (maxUser) {
                    if (minUser.uid === maxUser.uid) {
                        usersResult.push(minUser);
                    }
                });
            });
            return usersResult;
        }));
    };
    SearchService.prototype.searchQueryWithSexAndMinAndMaxButWithoutCity = function (searchRequest) {
        var _this = this;
        var minAge = searchRequest.minAgeParam;
        var maxAge = searchRequest.maxAgeParam + 1;
        var today = new Date();
        var todayYear = today.getFullYear();
        var todayMonth = today.getMonth();
        var todayDay = today.getDay();
        var minAgeDate = Number(new Date(todayYear - minAge, todayMonth, todayDay));
        var maxAgeDate = Number(new Date(todayYear - maxAge, todayMonth, todayDay));
        var minAgeUsers = this.getUsersToBeExcludedArray().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (userArray) {
            var uniqueUsers = Array.from(new Set(userArray));
            return _this.angularFirestore
                .collection('users', function (ref) { return ref.where('offers', 'array-contains', searchRequest.offerParam)
                .where('sex', '==', searchRequest.sexParam)
                .where('dateOfBirth', '<=', minAgeDate); })
                .snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) {
                return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data);
                });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (users) {
                var commonActivities = [];
                var currentUserActivities = _this.authService.currentUserActivities;
                var filteredUsers = [];
                users.map(function (user) {
                    if (uniqueUsers.includes(user.uid) === false) {
                        user.activities.forEach(function (activity) {
                            currentUserActivities.forEach(function (currentUserActivity) {
                                if (activity === currentUserActivity) {
                                    commonActivities.push(activity);
                                }
                            });
                        });
                        filteredUsers.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ commonActivities: commonActivities }, user));
                        commonActivities = [];
                    }
                });
                return filteredUsers;
            }));
        }));
        var maxAgeUsers = this.getUsersToBeExcludedArray().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (userArray) {
            var uniqueUsers = Array.from(new Set(userArray));
            return _this.angularFirestore
                .collection('users', function (ref) { return ref.where('offers', 'array-contains', searchRequest.offerParam)
                .where('sex', '==', searchRequest.sexParam)
                .where('dateOfBirth', '>=', maxAgeDate); })
                .snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) {
                return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data);
                });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (users) {
                var commonActivities = [];
                var currentUserActivities = _this.authService.currentUserActivities;
                var filteredUsers = [];
                users.map(function (user) {
                    if (uniqueUsers.includes(user.uid) === false) {
                        user.activities.forEach(function (activity) {
                            currentUserActivities.forEach(function (currentUserActivity) {
                                if (activity === currentUserActivity) {
                                    commonActivities.push(activity);
                                }
                            });
                        });
                        filteredUsers.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ commonActivities: commonActivities }, user));
                        commonActivities = [];
                    }
                });
                return filteredUsers;
            }));
        }));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])(minAgeUsers, maxAgeUsers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_a) {
            var minUsers = _a[0], maxUsers = _a[1];
            var usersResult = [];
            minUsers.forEach(function (minUser) {
                maxUsers.forEach(function (maxUser) {
                    if (minUser.uid === maxUser.uid) {
                        usersResult.push(minUser);
                    }
                });
            });
            return usersResult;
        }));
    };
    SearchService.prototype.searchQueryWithMinAndMaxButWithoutCityAndWithoutSex = function (searchRequest) {
        var _this = this;
        var minAge = searchRequest.minAgeParam;
        var maxAge = searchRequest.maxAgeParam + 1;
        var today = new Date();
        var todayYear = today.getFullYear();
        var todayMonth = today.getMonth();
        var todayDay = today.getDay();
        var minAgeDate = Number(new Date(todayYear - minAge, todayMonth, todayDay));
        var maxAgeDate = Number(new Date(todayYear - maxAge, todayMonth, todayDay));
        var minAgeUsers = this.getUsersToBeExcludedArray().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (userArray) {
            var uniqueUsers = Array.from(new Set(userArray));
            return _this.angularFirestore
                .collection('users', function (ref) { return ref.where('offers', 'array-contains', searchRequest.offerParam)
                .where('dateOfBirth', '<=', minAgeDate); })
                .snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) {
                return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data);
                });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (users) {
                var commonActivities = [];
                var currentUserActivities = _this.authService.currentUserActivities;
                var filteredUsers = [];
                users.map(function (user) {
                    if (uniqueUsers.includes(user.uid) === false) {
                        user.activities.forEach(function (activity) {
                            currentUserActivities.forEach(function (currentUserActivity) {
                                if (activity === currentUserActivity) {
                                    commonActivities.push(activity);
                                }
                            });
                        });
                        filteredUsers.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ commonActivities: commonActivities }, user));
                        commonActivities = [];
                    }
                });
                return filteredUsers;
            }));
        }));
        var maxAgeUsers = this.getUsersToBeExcludedArray().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (userArray) {
            var uniqueUsers = Array.from(new Set(userArray));
            return _this.angularFirestore
                .collection('users', function (ref) { return ref.where('offers', 'array-contains', searchRequest.offerParam)
                .where('dateOfBirth', '>=', maxAgeDate); })
                .snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) {
                return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data);
                });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (users) {
                var commonActivities = [];
                var currentUserActivities = _this.authService.currentUserActivities;
                var filteredUsers = [];
                users.map(function (user) {
                    if (uniqueUsers.includes(user.uid) === false) {
                        user.activities.forEach(function (activity) {
                            currentUserActivities.forEach(function (currentUserActivity) {
                                if (activity === currentUserActivity) {
                                    commonActivities.push(activity);
                                }
                            });
                        });
                        filteredUsers.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ commonActivities: commonActivities }, user));
                        commonActivities = [];
                    }
                });
                return filteredUsers;
            }));
        }));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])(minAgeUsers, maxAgeUsers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_a) {
            var minUsers = _a[0], maxUsers = _a[1];
            var usersResult = [];
            minUsers.forEach(function (minUser) {
                maxUsers.forEach(function (maxUser) {
                    if (minUser.uid === maxUser.uid) {
                        usersResult.push(minUser);
                    }
                });
            });
            return usersResult;
        }));
    };
    SearchService.prototype.searchQueryWithCityAndSexAndMinButWithoutMax = function (searchRequest) {
        var _this = this;
        var minAge = searchRequest.minAgeParam;
        var today = new Date();
        var todayYear = today.getFullYear();
        var todayMonth = today.getMonth();
        var todayDay = today.getDay();
        var minAgeDate = Number(new Date(todayYear - minAge, todayMonth, todayDay));
        return this.getUsersToBeExcludedArray().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (userArray) {
            var uniqueUsers = Array.from(new Set(userArray));
            return _this.angularFirestore
                .collection('users', function (ref) { return ref.where('offers', 'array-contains', searchRequest.offerParam)
                .where('city', '==', searchRequest.cityParam)
                .where('sex', '==', searchRequest.sexParam)
                .where('dateOfBirth', '<=', minAgeDate); })
                .snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) {
                return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data);
                });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (users) {
                var commonActivities = [];
                var currentUserActivities = _this.authService.currentUserActivities;
                var filteredUsers = [];
                users.map(function (user) {
                    if (uniqueUsers.includes(user.uid) === false) {
                        user.activities.forEach(function (activity) {
                            currentUserActivities.forEach(function (currentUserActivity) {
                                if (activity === currentUserActivity) {
                                    commonActivities.push(activity);
                                }
                            });
                        });
                        filteredUsers.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ commonActivities: commonActivities }, user));
                        commonActivities = [];
                    }
                });
                return filteredUsers;
            }));
        }));
    };
    SearchService.prototype.searchQueryWithCityAndMinButWithoutMaxAndWithoutSex = function (searchRequest) {
        var _this = this;
        var minAge = searchRequest.minAgeParam;
        var today = new Date();
        var todayYear = today.getFullYear();
        var todayMonth = today.getMonth();
        var todayDay = today.getDay();
        var minAgeDate = Number(new Date(todayYear - minAge, todayMonth, todayDay));
        return this.getUsersToBeExcludedArray().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (userArray) {
            var uniqueUsers = Array.from(new Set(userArray));
            return _this.angularFirestore
                .collection('users', function (ref) { return ref.where('offers', 'array-contains', searchRequest.offerParam)
                .where('city', '==', searchRequest.cityParam)
                .where('dateOfBirth', '<=', minAgeDate); })
                .snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) {
                return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data);
                });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (users) {
                var commonActivities = [];
                var currentUserActivities = _this.authService.currentUserActivities;
                var filteredUsers = [];
                users.map(function (user) {
                    if (uniqueUsers.includes(user.uid) === false) {
                        user.activities.forEach(function (activity) {
                            currentUserActivities.forEach(function (currentUserActivity) {
                                if (activity === currentUserActivity) {
                                    commonActivities.push(activity);
                                }
                            });
                        });
                        filteredUsers.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ commonActivities: commonActivities }, user));
                        commonActivities = [];
                    }
                });
                return filteredUsers;
            }));
        }));
    };
    SearchService.prototype.searchQueryWithSexAndMinButWithoutMaxAndWithoutCity = function (searchRequest) {
        var _this = this;
        var minAge = searchRequest.minAgeParam;
        var today = new Date();
        var todayYear = today.getFullYear();
        var todayMonth = today.getMonth();
        var todayDay = today.getDay();
        var minAgeDate = Number(new Date(todayYear - minAge, todayMonth, todayDay));
        return this.getUsersToBeExcludedArray().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (userArray) {
            var uniqueUsers = Array.from(new Set(userArray));
            return _this.angularFirestore
                .collection('users', function (ref) { return ref.where('offers', 'array-contains', searchRequest.offerParam)
                .where('sex', '==', searchRequest.sexParam)
                .where('dateOfBirth', '<=', minAgeDate); })
                .snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) {
                return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data);
                });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (users) {
                var commonActivities = [];
                var currentUserActivities = _this.authService.currentUserActivities;
                var filteredUsers = [];
                users.map(function (user) {
                    if (uniqueUsers.includes(user.uid) === false) {
                        user.activities.forEach(function (activity) {
                            currentUserActivities.forEach(function (currentUserActivity) {
                                if (activity === currentUserActivity) {
                                    commonActivities.push(activity);
                                }
                            });
                        });
                        filteredUsers.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ commonActivities: commonActivities }, user));
                        commonActivities = [];
                    }
                });
                return filteredUsers;
            }));
        }));
    };
    SearchService.prototype.searchQueryWithMinButWithoutMaxAndWithoutCityAndWithoutSex = function (searchRequest) {
        var _this = this;
        var minAge = searchRequest.minAgeParam;
        var today = new Date();
        var todayYear = today.getFullYear();
        var todayMonth = today.getMonth();
        var todayDay = today.getDay();
        var minAgeDate = Number(new Date(todayYear - minAge, todayMonth, todayDay));
        return this.getUsersToBeExcludedArray().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (userArray) {
            var uniqueUsers = Array.from(new Set(userArray));
            return _this.angularFirestore
                .collection('users', function (ref) { return ref.where('offers', 'array-contains', searchRequest.offerParam)
                .where('dateOfBirth', '<=', minAgeDate); })
                .snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) {
                return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data);
                });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (users) {
                var commonActivities = [];
                var currentUserActivities = _this.authService.currentUserActivities;
                var filteredUsers = [];
                users.map(function (user) {
                    if (uniqueUsers.includes(user.uid) === false) {
                        user.activities.forEach(function (activity) {
                            currentUserActivities.forEach(function (currentUserActivity) {
                                if (activity === currentUserActivity) {
                                    commonActivities.push(activity);
                                }
                            });
                        });
                        filteredUsers.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ commonActivities: commonActivities }, user));
                        commonActivities = [];
                    }
                });
                return filteredUsers;
            }));
        }));
    };
    SearchService.prototype.searchQueryWithCityAndSexAndMaxButWithoutMin = function (searchRequest) {
        var _this = this;
        var maxAge = searchRequest.maxAgeParam + 1;
        var today = new Date();
        var todayYear = today.getFullYear();
        var todayMonth = today.getMonth();
        var todayDay = today.getDay();
        var maxAgeDate = Number(new Date(todayYear - maxAge, todayMonth, todayDay));
        return this.getUsersToBeExcludedArray().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (userArray) {
            var uniqueUsers = Array.from(new Set(userArray));
            return _this.angularFirestore
                .collection('users', function (ref) { return ref.where('offers', 'array-contains', searchRequest.offerParam)
                .where('city', '==', searchRequest.cityParam)
                .where('sex', '==', searchRequest.sexParam)
                .where('dateOfBirth', '>=', maxAgeDate); })
                .snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) {
                return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data);
                });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (users) {
                var commonActivities = [];
                var currentUserActivities = _this.authService.currentUserActivities;
                var filteredUsers = [];
                users.map(function (user) {
                    if (uniqueUsers.includes(user.uid) === false) {
                        user.activities.forEach(function (activity) {
                            currentUserActivities.forEach(function (currentUserActivity) {
                                if (activity === currentUserActivity) {
                                    commonActivities.push(activity);
                                }
                            });
                        });
                        filteredUsers.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ commonActivities: commonActivities }, user));
                        commonActivities = [];
                    }
                });
                return filteredUsers;
            }));
        }));
    };
    SearchService.prototype.searchQueryWithCityAndMaxButWithoutMinAndWithoutSex = function (searchRequest) {
        var _this = this;
        var maxAge = searchRequest.maxAgeParam + 1;
        var today = new Date();
        var todayYear = today.getFullYear();
        var todayMonth = today.getMonth();
        var todayDay = today.getDay();
        var maxAgeDate = Number(new Date(todayYear - maxAge, todayMonth, todayDay));
        return this.getUsersToBeExcludedArray().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (userArray) {
            var uniqueUsers = Array.from(new Set(userArray));
            return _this.angularFirestore
                .collection('users', function (ref) { return ref.where('offers', 'array-contains', searchRequest.offerParam)
                .where('city', '==', searchRequest.cityParam)
                .where('dateOfBirth', '>=', maxAgeDate); })
                .snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) {
                return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data);
                });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (users) {
                var commonActivities = [];
                var currentUserActivities = _this.authService.currentUserActivities;
                var filteredUsers = [];
                users.map(function (user) {
                    if (uniqueUsers.includes(user.uid) === false) {
                        user.activities.forEach(function (activity) {
                            currentUserActivities.forEach(function (currentUserActivity) {
                                if (activity === currentUserActivity) {
                                    commonActivities.push(activity);
                                }
                            });
                        });
                        filteredUsers.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ commonActivities: commonActivities }, user));
                        commonActivities = [];
                    }
                });
                return filteredUsers;
            }));
        }));
    };
    SearchService.prototype.searchQueryWithSexAndMaxButWithoutMinAndWithoutCity = function (searchRequest) {
        var _this = this;
        var maxAge = searchRequest.maxAgeParam + 1;
        var today = new Date();
        var todayYear = today.getFullYear();
        var todayMonth = today.getMonth();
        var todayDay = today.getDay();
        var maxAgeDate = Number(new Date(todayYear - maxAge, todayMonth, todayDay));
        return this.getUsersToBeExcludedArray().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (userArray) {
            var uniqueUsers = Array.from(new Set(userArray));
            return _this.angularFirestore
                .collection('users', function (ref) { return ref.where('offers', 'array-contains', searchRequest.offerParam)
                .where('sex', '==', searchRequest.sexParam)
                .where('dateOfBirth', '>=', maxAgeDate); })
                .snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) {
                return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data);
                });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (users) {
                var commonActivities = [];
                var currentUserActivities = _this.authService.currentUserActivities;
                var filteredUsers = [];
                users.map(function (user) {
                    if (uniqueUsers.includes(user.uid) === false) {
                        user.activities.forEach(function (activity) {
                            currentUserActivities.forEach(function (currentUserActivity) {
                                if (activity === currentUserActivity) {
                                    commonActivities.push(activity);
                                }
                            });
                        });
                        filteredUsers.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ commonActivities: commonActivities }, user));
                        commonActivities = [];
                    }
                });
                return filteredUsers;
            }));
        }));
    };
    SearchService.prototype.searchQueryWithMaxButWithoutMinAndWithoutCityAndWithoutSex = function (searchRequest) {
        var _this = this;
        var maxAge = searchRequest.maxAgeParam + 1;
        var today = new Date();
        var todayYear = today.getFullYear();
        var todayMonth = today.getMonth();
        var todayDay = today.getDay();
        var maxAgeDate = Number(new Date(todayYear - maxAge, todayMonth, todayDay));
        return this.getUsersToBeExcludedArray().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (userArray) {
            var uniqueUsers = Array.from(new Set(userArray));
            return _this.angularFirestore
                .collection('users', function (ref) { return ref.where('offers', 'array-contains', searchRequest.offerParam)
                .where('dateOfBirth', '>=', maxAgeDate); })
                .snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) {
                return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data);
                });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (users) {
                var commonActivities = [];
                var currentUserActivities = _this.authService.currentUserActivities;
                var filteredUsers = [];
                users.map(function (user) {
                    if (uniqueUsers.includes(user.uid) === false) {
                        user.activities.forEach(function (activity) {
                            currentUserActivities.forEach(function (currentUserActivity) {
                                if (activity === currentUserActivity) {
                                    commonActivities.push(activity);
                                }
                            });
                        });
                        filteredUsers.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ commonActivities: commonActivities }, user));
                        commonActivities = [];
                    }
                });
                return filteredUsers;
            }));
        }));
    };
    SearchService.prototype.getUsersToBeExcludedArray = function () {
        var _this = this;
        return this.matchStoreService.getAllMatches().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (matches) {
            var userArray = [];
            userArray.push(_this.authService.currentUserID);
            matches.map(function (match) {
                userArray.push(match.initiatorID);
                userArray.push(match.partnerID);
            });
            return userArray;
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
        // private apiUrl = 'http://localhost:5000/tandemfirebase/us-central1';
        this.apiUrl = 'https://us-central1-tandemfirebase.cloudfunctions.net';
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    UserStoreService.prototype.getAllUsers = function () {
        return this.http.get(this.apiUrl + "/users/");
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
        return this.http.put(this.apiUrl + "/users/" + id, user);
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

/***/ "./src/app/services/utility-store.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/utility-store.service.ts ***!
  \***************************************************/
/*! exports provided: UtilityStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityStoreService", function() { return UtilityStoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var UtilityStoreService = /** @class */ (function () {
    function UtilityStoreService(angularFirestore) {
        var _this = this;
        this.angularFirestore = angularFirestore;
        this.angularFirestore.collection('utilities')
            .doc('utilitiesDoc')
            .get()
            .subscribe(function (doc) {
            var utilitiesDoc = doc.data();
            _this.offersDe = utilitiesDoc.offersDe;
            _this.offersEn = utilitiesDoc.offersEn;
            _this.activitiesDe = utilitiesDoc.activitiesDe;
            _this.activitiesEn = utilitiesDoc.activitiesEn;
            _this.citiesDe = utilitiesDoc.citiesDe;
            _this.citiesEn = utilitiesDoc.citiesEn;
            _this.sexDe = utilitiesDoc.sexDe;
            _this.sexEn = utilitiesDoc.sexEn;
        });
    }
    UtilityStoreService.prototype.getAllOffers = function (language) {
        if (language === 'de') {
            return this.offersDe;
        }
        else {
            return this.offersEn;
        }
    };
    UtilityStoreService.prototype.getAllActivities = function (language) {
        if (language === 'de') {
            return this.activitiesDe;
        }
        else {
            return this.activitiesEn;
        }
    };
    UtilityStoreService.prototype.getAllCities = function (language) {
        if (language === 'de') {
            return this.citiesDe;
        }
        else {
            return this.citiesEn;
        }
    };
    UtilityStoreService.prototype.getAllSex = function (language) {
        if (language === 'de') {
            return this.sexDe;
        }
        else {
            return this.sexEn;
        }
    };
    UtilityStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], UtilityStoreService);
    return UtilityStoreService;
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
        apiKey: 'AIzaSyCww8YKdmbCbawimU1yEzpNDb6jHpr8fzs',
        projectId: 'tandemfirebase'
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

module.exports = __webpack_require__(/*! D:\Users\BKU\ArneSchacher\Documents\UNI\WI-403 Webanwendungen\tandemPartner3---FrontEnd\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map