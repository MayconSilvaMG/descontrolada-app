(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\workspace\descontrolada-app\Descontrolada-App\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    apiURL: 'https://localhost:5001/',
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

/***/ "BX34":
/*!*********************************************!*\
  !*** ./src/app/shared/nav/nav.component.ts ***!
  \*********************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class NavComponent {
    constructor(router) {
        this.router = router;
        this.isCollapsed = true;
    }
    ngOnInit() { }
    logout() {
        this.router.navigateByUrl('/user/login');
    }
    showMenu() {
        return this.router.url !== '/user/login';
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 13, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], [1, "container-fluid"], [1, "navbar-brand", "text"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], ["routerLink", "/produtos/detalhe", "href", "#", 1, "nav-link", "text-white"], ["routerLink", "/produtos/lista", "href", "#", 1, "nav-link", "text-white"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Descontrolada Varejo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Adicionar produto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Listar produtos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["i[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQUNGIiwiZmlsZSI6Im5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImkge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "OkhI":
/*!***********************************************************************************!*\
  !*** ./src/app/components/produtos/produtos-detalhe/produto-detalhe.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ProdutoDetalheComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoDetalheComponent", function() { return ProdutoDetalheComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "hzby");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");








function ProdutoDetalheComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Nome \u00E9 obrigat\u00F3rio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProdutoDetalheComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Pre\u00E7o \u00E9 obrigat\u00F3rio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProdutoDetalheComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Quantidade \u00E9 obrigat\u00F3rio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProdutoDetalheComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Tipo \u00E9 obrigat\u00F3rio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProdutoDetalheComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Descri\u00E7\u00E3o \u00E9 obrigat\u00F3rio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class ProdutoDetalheComponent {
    constructor(fb, localeService, router, http) {
        this.fb = fb;
        this.localeService = localeService;
        this.router = router;
        this.http = http;
        this.produto = {};
        this.localeService.use('pt-br');
    }
    get f() {
        return this.form.controls;
    }
    ngOnInit() {
        this.validation();
    }
    validation() {
        this.form = this.fb.group({
            tema: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required
                ],
            ],
            nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            preco: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            descricao: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            quantidade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            tipo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
        });
    }
    resetForm() {
        this.form.reset();
    }
    return() {
        window.history.back();
    }
    cssValidator(campoForm) {
        return { 'is-invalid': campoForm.errors && campoForm.touched };
    }
    saveProduct() {
        debugger;
        this.http.post('http://localhost:5000/v1/CreateProduct', this.produto).subscribe(data => {
            console.log('Produto criado:', data);
            this.router.navigate(['/lista-produtos']);
        }, error => {
            console.error('Erro ao criar produto:', error);
        });
    }
}
ProdutoDetalheComponent.ɵfac = function ProdutoDetalheComponent_Factory(t) { return new (t || ProdutoDetalheComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_3__["BsLocaleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
ProdutoDetalheComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProdutoDetalheComponent, selectors: [["app-produto-detalhe"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]])], decls: 42, vars: 11, consts: [[1, "row"], [1, "container"], [1, "card", "rounded", "shadow-sm"], [3, "formGroup"], [1, "p-3"], [1, "form-row"], [1, "form-group", "col-md-12"], ["type", "text", "formControlName", "nome", "placeholder", "Insira um nome", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group", "col-md-3"], ["type", "number", "formControlName", "preco", "placeholder", "Insira um pre\u00E7o", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "formControlName", "quantidade", "placeholder", "Insira uma quantidade", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "col-md-6"], ["type", "text", "formControlName", "tipo", "placeholder", "Insira um tipo(Org\u00E2nico ou N\u00E3o Org\u00E2nico)", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "formControlName", "descricao", "placeholder", "Insira uma descri\u00E7\u00E3o", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "card-footer"], [1, "d-flex"], [1, "btn", "btn-outline-secondary", "mr-auto", "border", 3, "click"], ["routerLink", "/produtos/lista", 1, "btn", "btn-success", "mx-2"], ["routerLink", "/produtos/lista", 1, "btn", "btn-success", 3, "click"], [1, "invalid-feedback"]], template: function ProdutoDetalheComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProdutoDetalheComponent_Template_input_ngModelChange_9_listener($event) { return ctx.produto.ProductName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ProdutoDetalheComponent_div_10_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Pre\u00E7o");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProdutoDetalheComponent_Template_input_ngModelChange_15_listener($event) { return ctx.produto.ProductPrice = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ProdutoDetalheComponent_div_16_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Quantidade");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProdutoDetalheComponent_Template_input_ngModelChange_20_listener($event) { return ctx.produto.ProductQtd = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ProdutoDetalheComponent_div_21_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Tipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProdutoDetalheComponent_Template_input_ngModelChange_25_listener($event) { return ctx.produto.ProductType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, ProdutoDetalheComponent_div_26_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Descri\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProdutoDetalheComponent_Template_input_ngModelChange_31_listener($event) { return ctx.produto.ProductDescription = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, ProdutoDetalheComponent_div_32_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProdutoDetalheComponent_Template_button_click_35_listener() { return ctx.resetForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " Cancelar Altera\u00E7\u00E3o ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " Voltar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProdutoDetalheComponent_Template_button_click_39_listener() { return ctx.saveProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " Salvar Produto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.produto.ProductName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f.tema.errors == null ? null : ctx.f.tema.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.produto.ProductPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.f.preco.errors == null ? null : ctx.f.preco.errors.required) && ctx.f.preco.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.produto.ProductQtd);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.f.quantidade.errors == null ? null : ctx.f.quantidade.errors.required) && ctx.f.quantidade.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.produto.ProductType);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.f.tipo.errors == null ? null : ctx.f.tipo.errors.required) && ctx.f.tipo.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.produto.ProductDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.f.descricao.errors == null ? null : ctx.f.descricao.errors.required) && ctx.f.descricao.touched);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: [".iconesSociais[_ngcontent-%COMP%] {\n  color: #5e5e5e;\n}\n\n.capitalize[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  border-bottom: 1px solid #e2e2e2;\n  color: silver;\n}\n\n.tab-pane[_ngcontent-%COMP%] {\n  padding: 20px 8px 8px;\n  border-top: 0px;\n  border-right: 1px solid #dee2e6;\n  border-bottom: 1px solid #dee2e6;\n  border-left: 1px solid #dee2e6;\n}\n\n.card-evento[_ngcontent-%COMP%] {\n  position: sticky;\n  --default-height: 25px;\n  top: var(--default-height);\n}\n\n.card-evento-view[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 10px;\n}\n\n.card-img-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-radius: 3px 3px 0 0;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJvZHV0by1kZXRhbGhlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFHRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUFBSiIsImZpbGUiOiJwcm9kdXRvLWRldGFsaGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbmVzU29jaWFpcyB7XHJcbiAgY29sb3I6IHJnYig5NCwgOTQsIDk0KTtcclxufVxyXG5cclxuLmNhcGl0YWxpemUge1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjI2LCAyMjYsIDIyNik7XHJcbiAgY29sb3I6IHNpbHZlcjtcclxufVxyXG5cclxuLnRhYi1wYW5lIHtcclxuICBwYWRkaW5nOiAyMHB4IDhweCA4cHg7XHJcbiAgYm9yZGVyLXRvcDogMHB4O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG59XHJcblxyXG4uY2FyZC1ldmVudG8ge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgLS1kZWZhdWx0LWhlaWdodDogMjVweDtcclxuICB0b3A6IHZhcigtLWRlZmF1bHQtaGVpZ2h0KTtcclxufVxyXG5cclxuLmNhcmQtZXZlbnRvLXZpZXcge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uY2FyZC1pbWctYmxvY2sge1xyXG4gIGltZyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/nav/nav.component */ "BX34");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "JqCM");




class AppComponent {
    constructor() { }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [[1, "container"], ["bdColor", "rgba(51,51,51,0.8)", "size", "medium", "color", "#fff", "type", "ball-scale-multiple"], [2, "font-size", "20px", "color", "white"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ngx-spinner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Carregando...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "XUx/":
/*!*******************************************************************************!*\
  !*** ./src/app/components/produtos/produtos-lista/produto-lista.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProdutoListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoListaComponent", function() { return ProdutoListaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_services_produtos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/produtos.service */ "rbjm");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "Lm2G");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function ProdutoListaComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.productPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.productDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.productQtd);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.productType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 7, product_r1.dateRegister, "dd/MM/yyyy"));
} }
class ProdutoListaComponent {
    constructor(produtoService, modalService, router) {
        this.produtoService = produtoService;
        this.modalService = modalService;
        this.router = router;
        this.produtos = [];
        this.produtoId = 0;
        this.pagination = {};
    }
    ngOnInit() {
        this.pagination = {
            currentPage: 1,
            itemsPerPage: 3,
            totalItems: 1,
        };
        this.productList$ = this.produtoService.getProductList();
    }
    openModal(event, template, produtoId) {
        event.stopPropagation();
        this.produtoId = produtoId;
        this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    }
    pageChanged(event) {
        this.pagination.currentPage = event.page;
        this.produtoService.getProductList();
    }
    decline() {
        this.modalRef.hide();
    }
    detalheProduto(id) {
        this.router.navigate([`produtos/detalhe/${id}`]);
    }
}
ProdutoListaComponent.ɵfac = function ProdutoListaComponent_Factory(t) { return new (t || ProdutoListaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_produtos_service__WEBPACK_IMPORTED_MODULE_1__["ProdutosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ProdutoListaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProdutoListaComponent, selectors: [["app-produto-lista"]], decls: 30, vars: 7, consts: [[1, "card", "rounded", "shadow-sm", "p-3"], [1, "d-flex"], [1, "flex-fill", "pr-3"], ["routerLink", "/produtos/detalhe", 1, "d-flex", "btn", "btn-outline-primary"], [1, "fa", "fa-plus-circle", "my-1"], [1, "ml-1", "d-none", "d-sm-block"], [1, "card", "rounded"], [1, "table", "table-striped", "table-hover"], [1, "thead-dark"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center"], ["pageBtnClass", "btn", "previousText", "\u2039", "nextText", "\u203A", "firstText", "\u00AB", "lastText", "\u00BB", 3, "boundaryLinks", "totalItems", "itemsPerPage", "ngModel", "ngModelChange", "pageChanged"]], template: function ProdutoListaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Novo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Pre\u00E7o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Descri\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Quantidade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Tipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Data do registro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ProdutoListaComponent_tr_26_Template, 16, 10, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "pagination", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProdutoListaComponent_Template_pagination_ngModelChange_29_listener($event) { return ctx.pagination.currentPage = $event; })("pageChanged", function ProdutoListaComponent_Template_pagination_pageChanged_29_listener($event) { return ctx.pageChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 5, ctx.productList$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("boundaryLinks", true)("totalItems", ctx.pagination.totalItems)("itemsPerPage", ctx.pagination.itemsPerPage)("ngModel", ctx.pagination.currentPage);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdXRvLWxpc3RhLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _app_services_produtos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/services/produtos.service */ "rbjm");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "+Cnu");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "Mfq2");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "Lm2G");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "44PX");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "hzby");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "U9ZV");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/locale */ "RWcO");
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-currency */ "TT0I");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_produtos_produtos_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/produtos/produtos.component */ "irgz");
/* harmony import */ var _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/nav/nav.component */ "BX34");
/* harmony import */ var _components_produtos_produtos_detalhe_produto_detalhe_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/produtos/produtos-detalhe/produto-detalhe.component */ "OkhI");
/* harmony import */ var _components_produtos_produtos_lista_produto_lista_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/produtos/produtos-lista/produto-lista.component */ "XUx/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ "fXoL");
































Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_12__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_13__["ptBrLocale"]);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _app_services_produtos_service__WEBPACK_IMPORTED_MODULE_0__["ProdutosService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__["CollapseModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(),
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__["BsDropdownModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginationModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_10__["TabsModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"].forRoot({
                timeOut: 4000,
                positionClass: 'toast-bottom-right',
                preventDuplicates: true,
                progressBar: true,
            }),
            ngx_spinner__WEBPACK_IMPORTED_MODULE_16__["NgxSpinnerModule"],
            ngx_currency__WEBPACK_IMPORTED_MODULE_14__["NgxCurrencyModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"],
        _components_produtos_produtos_component__WEBPACK_IMPORTED_MODULE_19__["ProdutosComponent"],
        _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_20__["NavComponent"],
        _components_produtos_produtos_detalhe_produto_detalhe_component__WEBPACK_IMPORTED_MODULE_21__["ProdutoDetalheComponent"],
        _components_produtos_produtos_lista_produto_lista_component__WEBPACK_IMPORTED_MODULE_22__["ProdutoListaComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__["CollapseModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__["BsDropdownModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__["BsDatepickerModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginationModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_10__["TabsModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_16__["NgxSpinnerModule"],
        ngx_currency__WEBPACK_IMPORTED_MODULE_14__["NgxCurrencyModule"]] }); })();


/***/ }),

/***/ "irgz":
/*!***********************************************************!*\
  !*** ./src/app/components/produtos/produtos.component.ts ***!
  \***********************************************************/
/*! exports provided: ProdutosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosComponent", function() { return ProdutosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class ProdutosComponent {
    ngOnInit() {
    }
}
ProdutosComponent.ɵfac = function ProdutosComponent_Factory(t) { return new (t || ProdutosComponent)(); };
ProdutosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProdutosComponent, selectors: [["app-produto"]], decls: 1, vars: 0, template: function ProdutosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdXRvcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "rbjm":
/*!**********************************************!*\
  !*** ./src/app/services/produtos.service.ts ***!
  \**********************************************/
/*! exports provided: ProdutosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosService", function() { return ProdutosService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ProdutosService {
    constructor(http) {
        this.http = http;
        this.descontroladaApiUrl = "http://localhost:5000";
    }
    getProductList() {
        return this.http.get(this.descontroladaApiUrl + '/v1/GetProduct');
    }
    /*public getProductList(page?: number, itemsPerPage?: number, term?: string): Observable<PaginatedResult<Produto[]>> {
      const paginatedResult: PaginatedResult<Produto[]> = new PaginatedResult<Produto[]>();
  
      let params = new HttpParams;
  
      if (page != null && itemsPerPage != null) {
        params = params.append('pageNumber', page.toString());
        params = params.append('pageSize', itemsPerPage.toString());
      }
  
      if (term != null && term != '')
        params = params.append('term', term)
  
      return this.http
        .get<Produto[]>(this.descontroladaApiUrl, {observe: 'response', params })
        .pipe(
          take(1),
          map((response) => {
            paginatedResult.result = response.body;
            if(response.headers.has('Pagination')) {
              paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
            }
            return paginatedResult;
          }));
    }*/
    getProdutoById(id) {
        return this.http
            .get(`${this.descontroladaApiUrl}/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    post(produto) {
        return this.http
            .post(this.descontroladaApiUrl, produto)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    put(produto) {
        return this.http
            .put(`${this.descontroladaApiUrl}/${produto.id}`, produto)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    deleteProduto(id) {
        return this.http
            .delete(`${this.descontroladaApiUrl}/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
}
ProdutosService.ɵfac = function ProdutosService_Factory(t) { return new (t || ProdutosService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ProdutosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProdutosService, factory: ProdutosService.ɵfac });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_produtos_produtos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/produtos/produtos.component */ "irgz");
/* harmony import */ var _components_produtos_produtos_detalhe_produto_detalhe_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/produtos/produtos-detalhe/produto-detalhe.component */ "OkhI");
/* harmony import */ var _components_produtos_produtos_lista_produto_lista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/produtos/produtos-lista/produto-lista.component */ "XUx/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: '', redirectTo: 'produtos', pathMatch: 'full' },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        children: [
            { path: 'produtos', redirectTo: 'produtos/lista' },
            {
                path: 'produtos',
                component: _components_produtos_produtos_component__WEBPACK_IMPORTED_MODULE_1__["ProdutosComponent"],
                children: [
                    { path: 'detalhe/:id', component: _components_produtos_produtos_detalhe_produto_detalhe_component__WEBPACK_IMPORTED_MODULE_2__["ProdutoDetalheComponent"] },
                    { path: 'detalhe', component: _components_produtos_produtos_detalhe_produto_detalhe_component__WEBPACK_IMPORTED_MODULE_2__["ProdutoDetalheComponent"] },
                    { path: 'lista', component: _components_produtos_produtos_lista_produto_lista_component__WEBPACK_IMPORTED_MODULE_3__["ProdutoListaComponent"] },
                ],
            },
        ],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map