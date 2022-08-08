"use strict";
(self["webpackChunkfake_tube"] = self["webpackChunkfake_tube"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/page-not-found/page-not-found.component */ 5816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_private_private_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/private/private.module */ 5306)).then((m) => m.PrivateModule),
    },
    {
        path: 'generic/:motivation',
        component: _shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__.PageNotFoundComponent,
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: 'generic/pageNotFound',
        pathMatch: 'full',
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ 4696);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/footer/footer.component */ 5227);




class AppComponent {
    constructor() {
        this.title = 'FakeTube';
        this.isChanged = false;
        this.milano = '../assets/images/milano.jpeg';
        this.omnia = '../assets/images/omnia.png';
    }
    changeTitle() {
        this.isChanged = !this.isChanged;
        this.title = this.isChanged ? 'OmniaTube' : 'FakeTube';
    }
    changeMyTitle(event) {
        console.log(event);
        this.title = event;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 1, consts: [[3, "title"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "omnia-navbar", 0)(1, "router-outlet")(2, "omnia-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.title);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: [".responsive-image[_ngcontent-%COMP%] {\n  width: 10rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzcG9uc2l2ZS1pbWFnZSB7XG4gICAgd2lkdGg6IDEwcmVtO1xufSJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ }),

/***/ 3707:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/private/home/comp-video-item/comp-video-item.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompVideoItemComponent": () => (/* binding */ CompVideoItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/pipes/truncate.pipe */ 2821);




const _c0 = function () { return { end: 50, dots: true }; };
function CompVideoItemComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "truncate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r0.video.description, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0)));
} }
const _c1 = function () { return { end: 20, dots: true }; };
class CompVideoItemComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    goToVideo(id) {
        this.router.navigate(['private', 'watch', id]);
    }
}
CompVideoItemComponent.ɵfac = function CompVideoItemComponent_Factory(t) { return new (t || CompVideoItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
CompVideoItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CompVideoItemComponent, selectors: [["omnia-comp-video-item"]], inputs: { video: "video" }, decls: 12, vars: 13, consts: [[1, "card"], ["alt", "Card image cap", 1, "card-img-top", 3, "src", "click"], [1, "px-3", "pt-2", "text-end"], [1, "card-body"], [1, "card-title"], ["class", "card-text", 4, "ngIf"], [1, "card-text"]], template: function CompVideoItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompVideoItemComponent_Template_img_click_1_listener() { return ctx.goToVideo(ctx.video.videoId); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3)(8, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "truncate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, CompVideoItemComponent_p_11_Template, 3, 5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.video.imagePreview, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 6, ctx.video.publishedAt, "yyyy-MMMM-dd")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](10, 9, ctx.video.title, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c1)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.video.description);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe, _shared_pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_0__.TruncatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wLXZpZGVvLWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 5227:
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["omnia-footer"]], decls: 7, vars: 0, consts: [[1, "d-flex", "flex-wrap", "justify-content-between", "align-items-center", "py-3", "my-4", "border-top"], [1, "col-md-4", "d-flex", "align-items-center"], ["href", "/", 1, "mb-3", "me-2", "mb-md-0", "text-muted", "text-decoration-none", "lh-1"], ["width", "30", "height", "24", 1, "bi"], [0, "xlink", "href", "#bootstrap"], [1, "text-muted"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "use", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A9 2021 Company, Inc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 1682:
/*!***********************************************!*\
  !*** ./src/app/shared/like/like.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LikeComponent": () => (/* binding */ LikeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class LikeComponent {
    constructor() {
        this.likeCount = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.id = 0;
        this.like = 0;
    }
    ngOnInit() { }
    pushLike() {
        this.like++;
        this.likeCount.emit(this.like);
    }
}
LikeComponent.ɵfac = function LikeComponent_Factory(t) { return new (t || LikeComponent)(); };
LikeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LikeComponent, selectors: [["omnia-like"]], inputs: { id: "id" }, outputs: { likeCount: "likeCount" }, decls: 2, vars: 0, consts: [[1, "btn", "btn-info", 3, "click"]], template: function LikeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LikeComponent_Template_button_click_0_listener() { return ctx.pushLike(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Like");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWtlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 4696:
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


const _c0 = function () { return [""]; };
const _c1 = function () { return ["private", "esercizi"]; };
class NavbarComponent {
    constructor() {
        this.title = '';
    }
    ngOnInit() { }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["omnia-navbar"]], inputs: { title: "title" }, decls: 13, vars: 5, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item", "active"], ["routerLinkActive", "router-link-active", 1, "nav-link", 3, "routerLink"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "ul", 5)(7, "li", 6)(8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 8)(11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Esercizi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 5816:
/*!*******************************************************************!*\
  !*** ./src/app/shared/page-not-found/page-not-found.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundComponent": () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class PageNotFoundComponent {
    constructor(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.messageMotivation = '';
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe({
            next: (message) => {
                if (message.motivation === 'pageNotFound') {
                    this.messageMotivation = 'Pagina non trovata';
                }
            },
        });
    }
    goToHome() {
        this.router.navigate(['home']);
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
PageNotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["omnia-page-not-found"]], decls: 5, vars: 1, consts: [[1, "container"], [1, "btn", "btn-warning", 3, "click"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageNotFoundComponent_Template_button_click_3_listener() { return ctx.goToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Torna a Homepage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.messageMotivation || "ciao");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 2821:
/*!***********************************************!*\
  !*** ./src/app/shared/pipes/truncate.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TruncatePipe": () => (/* binding */ TruncatePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class TruncatePipe {
    transform(value, args = { end: 15, dots: false }) {
        const valueTransform = value.length > args.end ? value.substring(0, args.end) : value;
        return args.dots ? `${valueTransform}...` : valueTransform;
    }
}
TruncatePipe.ɵfac = function TruncatePipe_Factory(t) { return new (t || TruncatePipe)(); };
TruncatePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "truncate", type: TruncatePipe, pure: true });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar/navbar.component */ 4696);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 5227);
/* harmony import */ var _like_like_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./like/like.component */ 1682);
/* harmony import */ var _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/truncate.pipe */ 2821);
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ 5816);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _pages_private_home_comp_video_item_comp_video_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/private/home/comp-video-item/comp-video-item.component */ 3707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);











const COMPONENTS = [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _like_like_component__WEBPACK_IMPORTED_MODULE_2__.LikeComponent, _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__.PageNotFoundComponent, _pages_private_home_comp_video_item_comp_video_item_component__WEBPACK_IMPORTED_MODULE_5__.CompVideoItemComponent];
const PIPES = [_pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_3__.TruncatePipe];
const MODULES = [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule];
class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, MODULES, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _like_like_component__WEBPACK_IMPORTED_MODULE_2__.LikeComponent, _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__.PageNotFoundComponent, _pages_private_home_comp_video_item_comp_video_item_component__WEBPACK_IMPORTED_MODULE_5__.CompVideoItemComponent, _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_3__.TruncatePipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule], exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _like_like_component__WEBPACK_IMPORTED_MODULE_2__.LikeComponent, _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__.PageNotFoundComponent, _pages_private_home_comp_video_item_comp_video_item_component__WEBPACK_IMPORTED_MODULE_5__.CompVideoItemComponent, _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_3__.TruncatePipe, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    YT_BASE: 'https://www.googleapis.com/youtube/v3',
    API_KEY: 'AIzaSyD0Cit74Xo6TjhGzXcNNdDyF0AmiY5ULK8',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1736), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map