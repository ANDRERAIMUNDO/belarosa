(self["webpackChunkbelarosa"] = self["webpackChunkbelarosa"] || []).push([["src_app_pages_pagamentocartao_pagamentocartao_module_ts"],{

/***/ 98897:
/*!*************************************************************************!*\
  !*** ./src/app/pages/pagamentocartao/pagamentocartao-routing.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagamentocartaoPageRoutingModule": function() { return /* binding */ PagamentocartaoPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _pagamentocartao_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagamentocartao.page */ 46920);




const routes = [
    {
        path: '',
        component: _pagamentocartao_page__WEBPACK_IMPORTED_MODULE_0__.PagamentocartaoPage
    }
];
let PagamentocartaoPageRoutingModule = class PagamentocartaoPageRoutingModule {
};
PagamentocartaoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PagamentocartaoPageRoutingModule);



/***/ }),

/***/ 94404:
/*!*****************************************************************!*\
  !*** ./src/app/pages/pagamentocartao/pagamentocartao.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagamentocartaoPageModule": function() { return /* binding */ PagamentocartaoPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _pagamentocartao_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagamentocartao-routing.module */ 98897);
/* harmony import */ var _pagamentocartao_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagamentocartao.page */ 46920);







let PagamentocartaoPageModule = class PagamentocartaoPageModule {
};
PagamentocartaoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pagamentocartao_routing_module__WEBPACK_IMPORTED_MODULE_0__.PagamentocartaoPageRoutingModule
        ],
        declarations: [_pagamentocartao_page__WEBPACK_IMPORTED_MODULE_1__.PagamentocartaoPage]
    })
], PagamentocartaoPageModule);



/***/ }),

/***/ 46920:
/*!***************************************************************!*\
  !*** ./src/app/pages/pagamentocartao/pagamentocartao.page.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagamentocartaoPage": function() { return /* binding */ PagamentocartaoPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_pagamentocartao_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pagamentocartao.page.html */ 89180);
/* harmony import */ var _pagamentocartao_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagamentocartao.page.scss */ 28251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var ngx_mercadopago__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mercadopago */ 68160);
/* harmony import */ var _services_card_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/card.service */ 73671);









let PagamentocartaoPage = class PagamentocartaoPage {
    constructor(formBuilder, router, route, loadingController, ngxMpService, cardService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.loadingController = loadingController;
        this.ngxMpService = ngxMpService;
        this.cardService = cardService;
        this.data = []; //mercado pago
        this.payment = {
            email: "",
            docType: "",
            docNumber: "",
            cardholderName: "",
            cardExpirationMonth: "",
            cardExpirationYear: "",
            cardNumber: "",
            securityCode: "",
            issuer: 0,
            installments: 0,
            transactionAmount: 0,
            paymentMethodId: "",
            description: ""
        };
        this.route.queryParams.subscribe(params => {
            let getNav = this.router.getCurrentNavigation();
            if (getNav.extras.state) {
                this.pedido = getNav.extras.state.pedido;
            }
        });
    }
    ngOnInit() {
        this.ngxMpService.initialize(); //iniciar serviços do mercado pago
        this.loand();
        this.loadForm();
        this.loadFormCartao();
        let card = this.cardService.getCard();
        this.itens = card.itens;
        this.getTotal();
    }
    loadForm() {
        this.formGroup = this.formBuilder.group({
            numerosDeParcelas: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            "@type": ["pagamentoCartao"]
        });
    }
    loadFormCartao() {
        this.formGroupCartao = this.formBuilder.group({
            numero: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(16)]],
            titular: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            paymentMethodId: [""],
            validade: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
    }
    onChange() {
        this.cardNumber = this.formGroupCartao.get('numero').value;
        this.getPaymentMethod();
    }
    onChangeDataTime() {
        let cardExpiration = this.formGroupCartao.get('validade').value;
        this.payment.cardExpirationMonth = cardExpiration.slice(5, 7);
        this.payment.cardExpirationYear = cardExpiration.slice(2, 4);
    }
    onChangeInstalment() {
        let n = this.formGroup.get('numerosDeParcelas').value;
        this.installments = n;
        this.installment = this.installments;
        this.payment.installments = this.installment.installments;
        this.pedido.pagamento = this.formGroup.value; //salvando pedido
        let total = n.installment_rate / this.payment.installments + this.amount / this.payment.installments;
        this.total = total;
        this.installment_rate = n.installment_rate;
    }
    getPaymentMethod() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let cardNumber = this.cardNumber;
            const paymentMethod = yield this.ngxMpService.getPaymentMethod({
                bin: cardNumber
            }).toPromise();
            this.paymentMethodId = paymentMethod.data[0].id;
            this.payment_type_id = paymentMethod.data[0].payment_type_id;
            this.imageUrl = paymentMethod.data[0].secure_thumbnail;
            this.payment.cardNumber = cardNumber;
            this.payment.paymentMethodId = this.paymentMethodId;
            this.getInstallments();
        });
    }
    getInstallments() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const issuer = yield this.ngxMpService.getInstallments({
                payment_type_id: this.payment_type_id,
                payment_method_id: this.paymentMethodId,
                bin: this.cardNumber.slice(0, 6)
            }).toPromise();
            var x = issuer.data[0].issuer.id;
            var y = +x;
            this.issuerIstallment = y;
            this.payment.issuer = this.issuerIstallment;
            this.data = issuer.data[0].payer_costs;
            this.payment.issuer = this.issuerIstallment;
        });
    }
    getCardHolderName() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let cardHolderName = this.formGroupCartao.get('titular').value;
            this.payment.cardholderName = cardHolderName;
        });
    }
    getDescription() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let description = "pagamento com cartao " + this.paymentMethodId;
            this.payment.description = description;
        });
    }
    getTotal() {
        this.amount = this.cardService.total();
        this.payment.transactionAmount = this.cardService.total();
    }
    loand() {
        this.presentLoading();
    }
    onSubmit() {
        this.getCardHolderName();
        this.getDescription();
        this.dataCartao = this.formGroupCartao.value;
        let navigationExtras = {
            state: {
                pedido: this.pedido,
                dataCartao: this.dataCartao,
                payment: this.payment,
                installment: this.installment
            }
        };
        this.router.navigate(['/dashboard/payment-form/order-confirmation-page', { pedido: this.pedido }], navigationExtras);
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Aguarde...',
                keyboardClose: true,
                spinner: "lines-small",
                cssClass: 'my-custom-class',
                duration: 2000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
};
PagamentocartaoPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: ngx_mercadopago__WEBPACK_IMPORTED_MODULE_7__.NgxMercadopagoService },
    { type: _services_card_service__WEBPACK_IMPORTED_MODULE_2__.CardService }
];
PagamentocartaoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-pagamentocartao',
        template: _raw_loader_pagamentocartao_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pagamentocartao_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PagamentocartaoPage);



/***/ }),

/***/ 28251:
/*!*****************************************************************!*\
  !*** ./src/app/pages/pagamentocartao/pagamentocartao.page.scss ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  font-family: \"Lucida Sans Regular\";\n  font-size: x-small;\n  color: #080808;\n  text-align: center;\n  --ion-background-color: rgb(240, 191, 233);\n}\n\nion-content {\n  --ion-background-color: rgb(252, 239, 250);\n}\n\nion-list {\n  font-feature-settings: \"sups\";\n  font-variant-position: super;\n}\n\nion-select {\n  color: #0b21e0;\n  --placeholder-color: #971e49;\n  --placeholder-opacity: 1;\n  width: 100%;\n  justify-content: right;\n}\n\nion-card-title {\n  font-family: \"Lucida Sans Regular\";\n  font-size: medium;\n  color: #080808;\n  text-align: center;\n}\n\nion-label {\n  font-family: \"Lucida Sans Regular\";\n  font-size: medium;\n  color: #080808;\n  text-align: left;\n}\n\nh5 {\n  color: #080808;\n  font-style: oblique;\n}\n\nh6 {\n  font-family: \"Lucida Sans Regular\";\n  font-size: small;\n  text-align: center;\n  -moz-text-align-last: center;\n       text-align-last: center;\n  color: #0f0f0f;\n}\n\nh1 {\n  font-family: \"Lucida Sans Regular\";\n  font-size: small;\n  text-align: center;\n  -moz-text-align-last: center;\n       text-align-last: center;\n  color: #0f0f0f;\n}\n\n.ion-text-center {\n  text-align: center;\n}\n\nion-button {\n  color: #f0bfe9;\n}\n\n.ion-text-uppercase {\n  text-transform: uppercase;\n}\n\n.ion-thumbnail {\n  width: auto;\n  height: auto;\n}\n\nimg {\n  width: auto;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2FtZW50b2NhcnRhby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUU7RUFDRSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7QUFDSjs7QUFFRTtFQUNFLDBDQUFBO0FBQ0o7O0FBRUU7RUFDRSw2QkFBQTtFQUFBLDRCQUFBO0FBQ0o7O0FBRUU7RUFDRSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0NBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0Usa0NBQUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNFO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQ0U7RUFDRSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtPQUFBLHVCQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNFO0VBQ0Usa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7T0FBQSx1QkFBQTtFQUNBLGNBQUE7QUFFSjs7QUFDRTtFQUNFLGtCQUFBO0FBRUo7O0FBQ0E7RUFDRSxjQUFBO0FBRUY7O0FBQ0E7RUFDRSx5QkFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFFRjs7QUFDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBRUoiLCJmaWxlIjoicGFnYW1lbnRvY2FydGFvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgaW9uLWhlYWRlciB7XG4gICAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zIFJlZ3VsYXInO1xuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcbiAgICBjb2xvcjogcmdiKDgsIDgsIDgpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMTkxLCAyMzMpO1xuICB9XG5cbiAgaW9uLWNvbnRlbnQgeyAgXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjM5LCAyNTApO1xuICB9IFxuXG4gIGlvbi1saXN0e1xuICAgIGZvbnQtdmFyaWFudC1wb3NpdGlvbjogc3VwZXI7XG4gIH1cblxuICBpb24tc2VsZWN0IHtcbiAgICBjb2xvcjogIzBiMjFlMDtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjOTcxZTQ5O1xuICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xuICB9XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgICBmb250LWZhbWlseTonTHVjaWRhIFNhbnMgUmVndWxhcic7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgY29sb3I6IHJnYig4LCA4LCA4KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICB9XG4gIFxuaW9uLWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zIFJlZ3VsYXInO1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIGNvbG9yOiByZ2IoOCwgOCwgOCk7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbiAgaDUge1xuICAgIGNvbG9yOiByZ2IoOCwgOCwgOCk7XG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgfVxuXG4gIGg2IHtcbiAgICBmb250LWZhbWlseTonTHVjaWRhIFNhbnMgUmVndWxhcic7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7IFxuICAgIGNvbG9yOiByZ2IoMTUsIDE1LCAxNSk7XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zIFJlZ3VsYXInO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtYWxpZ24tbGFzdDogY2VudGVyOyBcbiAgICBjb2xvcjogcmdiKDE1LCAxNSwgMTUpO1xuICB9XG4gIFxuICAuaW9uLXRleHQtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1idXR0b24ge1xuICBjb2xvcjogcmdiKDI0MCwgMTkxLCAyMzMpO1xufVxuXG4uaW9uLXRleHQtdXBwZXJjYXNlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmlvbi10aHVtYm5haWwge1xuICB3aWR0aDogYXV0bzsgXG4gIGhlaWdodDogYXV0bztcbiAgfVxuICBcbiAgaW1nIHtcbiAgICB3aWR0aDogYXV0bzsgXG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9Il19 */");

/***/ }),

/***/ 89180:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pagamentocartao/pagamentocartao.page.html ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <h6>Pagamento com cartão de credito</h6>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  \n  <ion-card>\n    <ion-card-header>\n    <ion-card-subtitle>Dados do Cartão</ion-card-subtitle>\n    <form [formGroup]=\"formGroupCartao\">\n\n      <ion-item lines=\"full\">\n        <ion-label class=\"ion-text-center\" position=\"floating\">Número do cartão</ion-label>\n        <ion-input formControlName=\"numero\" inputmode=\"tel\" type=\"numeric\" maxlength=\"16\" required (ionChange)=\"onChange($event)\" ></ion-input>\n      </ion-item>  \n      <p *ngIf=\"formGroupCartao.controls.numero.dirty && formGroupCartao.controls.numero.errors\" margin-left>Obrigatório. </p>\n      \n      <ion-item lines=\"full\">\n        <ion-label class=\"ion-text-center\" position=\"floating\">Nome impresso no cartão</ion-label>\n        <ion-input formControlName=\"titular\" class=\"ion-text-uppercase\" inputmode=\"text\" type=\"text\" required></ion-input>\n      </ion-item>\n      <p *ngIf=\"formGroupCartao.controls.titular.dirty && formGroupCartao.controls.titular.errors\" margin-left>Obrigatório. </p>\n\n      <ion-item lines=\"full\">\n        <ion-thumbnail class=\"ion-thumbnail\" item-end> <img [src]=\"imageUrl\"> </ion-thumbnail>\n        <ion-input slot=\"start\" disabled formControlName=\"paymentMethodId\" type=\"hidden\" id=\"paymentMethodId\" name=\"paymentMethodId\" > {{ paymentMethodId }} </ion-input>\n      </ion-item>\n\n      <ion-item lines=\"full\">\n        <ion-icon name=\"calendar-outline\"></ion-icon>\n        <ion-label class=\"ion-text-center\" position=\"floating\">Validade</ion-label>\n        <ion-datetime locale=\"pt-BR\" formControlName=\"validade\" displayFormat=\"MM/YY\" min=\"2022\" max=\"2032-12-31\" doneText=\"Definir\" cancelText=\"Cancelar\" value=\"21-12\" (ionChange)=\"onChangeDataTime($event)\" required> </ion-datetime>\n      </ion-item>\n      <p *ngIf=\"formGroupCartao.controls.validade.dirty && formGroupCartao.controls.validade.errors\" margin-left>Obrigatório. </p>\n\n    </form>\n    </ion-card-header>\n  \n    <ion-card-content>\n      Lembre-se, não salvamos dados do seu cartão, não ligamos para você pedindos seus dados \n      e não enviamos links solicitando sua senha via sms ou notificação por aplicativo.\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-subtitle>Escolher a quantidade de parcelas</ion-card-subtitle>\n    <ion-list lines=\"none\">\n      <form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit()\">\n        <ion-item>\n          <ion-label>Parcelar em </ion-label>\n          <ion-select  [disabled]=\"formGroupCartao.invalid\" formControlName=\"numerosDeParcelas\" type=\"text\" name=\"numerosDeParcelas\" (ionChange)=\"onChangeInstalment($event)\" required >\n            <ion-select-option *ngFor=\"let item of data\" [value]=\"item\"> {{ item.installments }} de {{ item.installment_rate / item.installments + amount / item.installments | currency }} ({{item.installment_rate + amount}}) </ion-select-option>\n          </ion-select>\n        </ion-item>\n        <p *ngIf=\"formGroup.controls.numerosDeParcelas.dirty && formGroup.controls.numerosDeParcelas.errors\" margin-left>Obrigatório. </p>\n      </form> \n    </ion-list>  \n    <ion-card-header>\n      <ion-card-subtitle *ngIf =\"payment.installments >0\" >Total do seu pedido: R{{ amount + installment_rate| currency}}</ion-card-subtitle>\n      <ion-card-title *ngIf =\"payment.installments >0\" > você escolheu: {{payment.installments}} parcelas de: R{{total | currency}}</ion-card-title>\n    </ion-card-header>  \n    <ion-card-content>\n      Para segurança se você fechar ou abrir outra pagina, \n      ou reniciar apliacação, esses dados serão removidos.\n    </ion-card-content>\n  </ion-card>\n  <ion-button *ngIf =\"payment.installments >0\"  type=\"submit\" color=\"light\" expand=\"block\" (click)=\"onSubmit()\">Avançar na compra</ion-button>\n  <ion-button [routerLink]=\"['/dashboard/index']\" color=\"light\" expand=\"block\">Voltar novamente</ion-button>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_pagamentocartao_pagamentocartao_module_ts-es2015.js.map