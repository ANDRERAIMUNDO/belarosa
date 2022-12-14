(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkbelarosa"] = self["webpackChunkbelarosa"] || []).push([["src_app_pages_dashboard_dashboard_module_ts"], {
    /***/
    99366:
    /*!*************************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardPageRoutingModule": function DashboardPageRoutingModule() {
          return (
            /* binding */
            _DashboardPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard.page */
      76446);

      var routes = [{
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage,
        children: [{
          path: 'profile',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../profile/profile.module */
            88558)).then(function (m) {
              return m.ProfilePageModule;
            });
          }
        }, {
          path: 'categorias',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_categoria_categoria_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../categoria/categoria.module */
            68925)).then(function (m) {
              return m.CategoriaPageModule;
            });
          }
        }, {
          path: 'cart',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_cart_cart_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../cart/cart.module */
            70313)).then(function (m) {
              return m.CartPageModule;
            });
          }
        }, {
          path: 'address',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_address_address_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../address/address.module */
            95633)).then(function (m) {
              return m.AddressPageModule;
            });
          }
        }, {
          path: 'payment-form',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_payment-form_payment-form_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../payment-form/payment-form.module */
            34287)).then(function (m) {
              return m.PaymentFormPageModule;
            });
          }
        }, {
          path: 'index',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_index_index_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../index/index.module */
            61023)).then(function (m) {
              return m.IndexPageModule;
            });
          }
        }, {
          path: 'produto',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_produto_produto_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../produto/produto.module */
            10900)).then(function (m) {
              return m.ProdutoPageModule;
            });
          }
        }, {
          path: 'produto-detail',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_produto-detail_produto-detail_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../produto-detail/produto-detail.module */
            42470)).then(function (m) {
              return m.ProdutoDetailPageModule;
            });
          }
        }, {
          path: 'loand',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_loand_loand_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../loand/loand.module */
            62474)).then(function (m) {
              return m.LoandPageModule;
            });
          }
        }, {
          path: 'circle-adress',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_circle_circle_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../circle/circle.module */
            26163)).then(function (m) {
              return m.CirclePageModule;
            });
          }
        }, {
          path: 'sniper-orde-confirmation',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_sniper-orde-confirmation_sniper-orde-confirmation_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../sniper-orde-confirmation/sniper-orde-confirmation.module */
            33755)).then(function (m) {
              return m.SniperOrdeConfirmationPageModule;
            });
          }
        }, {
          path: 'pedidos',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_pedidos_pedidos_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../pedidos/pedidos.module */
            87332)).then(function (m) {
              return m.PedidosPageModule;
            });
          }
        }, {
          path: 'circle-upload-image',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_circle-upload-image_circle-upload-image_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../circle-upload-image/circle-upload-image.module */
            74010)).then(function (m) {
              return m.CircleUploadImagePageModule;
            });
          }
        }, {
          path: 'circle-reload',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_circle-reload_circle-reload_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../circle-reload/circle-reload.module */
            71469)).then(function (m) {
              return m.CircleReloadPageModule;
            });
          }
        }]
      }];

      var _DashboardPageRoutingModule = function DashboardPageRoutingModule() {
        _classCallCheck(this, DashboardPageRoutingModule);
      };

      _DashboardPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _DashboardPageRoutingModule);
      /***/
    },

    /***/
    71659:
    /*!*****************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardPageModule": function DashboardPageModule() {
          return (
            /* binding */
            _DashboardPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard-routing.module */
      99366);
      /* harmony import */


      var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dashboard.page */
      76446);
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      59885);

      var _DashboardPageModule = function DashboardPageModule() {
        _classCallCheck(this, DashboardPageModule);
      };

      _DashboardPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule, _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_2__.ExploreContainerComponentModule],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage]
      })], _DashboardPageModule);
      /***/
    },

    /***/
    76446:
    /*!***************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardPage": function DashboardPage() {
          return (
            /* binding */
            _DashboardPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./dashboard.page.html */
      60419);
      /* harmony import */


      var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dashboard.page.scss */
      24494);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/auth.service */
      37556);

      var _DashboardPage = /*#__PURE__*/function () {
        function DashboardPage(authService, router) {
          _classCallCheck(this, DashboardPage);

          this.authService = authService;
          this.router = router;
        }

        _createClass(DashboardPage, [{
          key: "logout",
          value: function logout() {
            this.authService.logout();
            this.router.navigate(['/home']);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {// this.router.navigate(['/dashboard/index']);
          }
        }]);

        return DashboardPage;
      }();

      _DashboardPage.ctorParameters = function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }];
      };

      _DashboardPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _DashboardPage);
      /***/
    },

    /***/
    36713:
    /*!************************************************************************!*\
      !*** ./src/app/pages/explore-container/explore-container.component.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExploreContainerComponent": function ExploreContainerComponent() {
          return (
            /* binding */
            _ExploreContainerComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_explore_container_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./explore-container.component.html */
      88111);
      /* harmony import */


      var _explore_container_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./explore-container.component.scss */
      42285);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ExploreContainerComponent = /*#__PURE__*/function () {
        function ExploreContainerComponent() {
          _classCallCheck(this, ExploreContainerComponent);
        }

        _createClass(ExploreContainerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ExploreContainerComponent;
      }();

      _ExploreContainerComponent.ctorParameters = function () {
        return [];
      };

      _ExploreContainerComponent.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }]
      };
      _ExploreContainerComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-explore-container',
        template: _raw_loader_explore_container_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_explore_container_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ExploreContainerComponent);
      /***/
    },

    /***/
    59885:
    /*!*********************************************************************!*\
      !*** ./src/app/pages/explore-container/explore-container.module.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExploreContainerComponentModule": function ExploreContainerComponentModule() {
          return (
            /* binding */
            _ExploreContainerComponentModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _explore_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./explore-container.component */
      36713);

      var _ExploreContainerComponentModule = function ExploreContainerComponentModule() {
        _classCallCheck(this, ExploreContainerComponentModule);
      };

      _ExploreContainerComponentModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule],
        declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_0__.ExploreContainerComponent],
        exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_0__.ExploreContainerComponent]
      })], _ExploreContainerComponentModule);
      /***/
    },

    /***/
    24494:
    /*!*****************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard.page.scss ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\n  --ion-background-color: rgb(243, 156, 231);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFTSwwQ0FBQTtBQUFOIiwiZmlsZSI6ImRhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gICAgLy8tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMxLCAxNjMsIDIwMyk7XG4gICAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAxNTYsIDIzMSk7XG4gIH0gXG4gICJdfQ== */";
      /***/
    },

    /***/
    42285:
    /*!**************************************************************************!*\
      !*** ./src/app/pages/explore-container/explore-container.component.scss ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */";
      /***/
    },

    /***/
    60419:
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n<ion-content class=\"content\"></ion-content>\n\n<ion-router-outlet id=\"main\"></ion-router-outlet>\n<ion-tabs>\n  <ion-tab-bar slot=\"bottom\" >\n    <ion-tab-button tab=\"categorias\">\n      <ion-icon name=\"reorder-three-outline\"></ion-icon>\n      <ion-label>Categorias</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"cart\">\n      <ion-icon name=\"cart-outline\"></ion-icon>\n      <ion-label>Carinho</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"profile\" >\n      <ion-icon name=\"person-circle\"></ion-icon>\n      <ion-label>Meu Perfil</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"sair\" (click)=\"logout()\">\n      <ion-icon name=\"log-out-outline\"></ion-icon>\n      <ion-label>Sair</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n\n";
      /***/
    },

    /***/
    88111:
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/explore-container/explore-container.component.html ***!
      \****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"container\">\n  <strong>{{ name }}</strong>\n</div>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_dashboard_dashboard_module_ts-es5.js.map