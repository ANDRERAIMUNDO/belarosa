(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkbelarosa"] = self["webpackChunkbelarosa"] || []).push([["src_app_pages_categoria_categoria_module_ts"], {
    /***/
    41219:
    /*!*************************************************************!*\
      !*** ./src/app/pages/categoria/categoria-routing.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CategoriaPageRoutingModule": function CategoriaPageRoutingModule() {
          return (
            /* binding */
            _CategoriaPageRoutingModule
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


      var _categoria_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./categoria.page */
      45457);

      var routes = [{
        path: '',
        component: _categoria_page__WEBPACK_IMPORTED_MODULE_0__.CategoriaPage
      }];

      var _CategoriaPageRoutingModule = function CategoriaPageRoutingModule() {
        _classCallCheck(this, CategoriaPageRoutingModule);
      };

      _CategoriaPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CategoriaPageRoutingModule);
      /***/
    },

    /***/
    68925:
    /*!*****************************************************!*\
      !*** ./src/app/pages/categoria/categoria.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CategoriaPageModule": function CategoriaPageModule() {
          return (
            /* binding */
            _CategoriaPageModule
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


      var _categoria_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./categoria-routing.module */
      41219);
      /* harmony import */


      var _categoria_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./categoria.page */
      45457);
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      59885);

      var _CategoriaPageModule = function CategoriaPageModule() {
        _classCallCheck(this, CategoriaPageModule);
      };

      _CategoriaPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _categoria_routing_module__WEBPACK_IMPORTED_MODULE_0__.CategoriaPageRoutingModule, _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_2__.ExploreContainerComponentModule],
        declarations: [_categoria_page__WEBPACK_IMPORTED_MODULE_1__.CategoriaPage]
      })], _CategoriaPageModule);
      /***/
    },

    /***/
    45457:
    /*!***************************************************!*\
      !*** ./src/app/pages/categoria/categoria.page.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CategoriaPage": function CategoriaPage() {
          return (
            /* binding */
            _CategoriaPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_categoria_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./categoria.page.html */
      96354);
      /* harmony import */


      var _categoria_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./categoria.page.scss */
      35940);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _services_categoria_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/categoria.service */
      1875);

      var _CategoriaPage = /*#__PURE__*/function () {
        function CategoriaPage(menuController, categoriaService, router, route) {
          _classCallCheck(this, CategoriaPage);

          this.menuController = menuController;
          this.categoriaService = categoriaService;
          this.router = router;
          this.route = route;
        }

        _createClass(CategoriaPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.menuController.enable(true, 'menu');
            this.menuController.open('menu');
            this.categoriaService.findAll().subscribe(function (response) {
              _this.items = response;
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "showProdutos",
          value: function showProdutos(categoria_id) {
            this.router.navigate(['/dashboard/produto', {
              categoria_id: categoria_id
            }]);
          }
        }]);

        return CategoriaPage;
      }();

      _CategoriaPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController
        }, {
          type: _services_categoria_service__WEBPACK_IMPORTED_MODULE_2__.CategoriaService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
        }];
      };

      _CategoriaPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-categoria',
        template: _raw_loader_categoria_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_categoria_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CategoriaPage);
      /***/
    },

    /***/
    35940:
    /*!*****************************************************!*\
      !*** ./src/app/pages/categoria/categoria.page.scss ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --ion-background-color: rgb(252, 239, 250);\n}\n\nh5 {\n  color: #080808;\n  font-style: oblique;\n}\n\n.ion-text-center {\n  text-align: center;\n  left: 100px;\n  right: 100px;\n  position: absolute;\n}\n\nion-button {\n  color: #f0bfe9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQywwQ0FBQTtBQUFEOztBQUdBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7QUFBSiIsImZpbGUiOiJjYXRlZ29yaWEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tY29udGVudCB7XG4gLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjM5LCAyNTApOyAgIFxufVxuXG5oNSB7XG4gICAgY29sb3I6IHJnYig4LCA4LCA4KTtcbiAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xufVxuXG4uaW9uLXRleHQtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAgIGxlZnQ6IDEwMHB4O1xuICAgIHJpZ2h0OiAxMDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbmlvbi1idXR0b24ge1xuICAgIGNvbG9yOiByZ2IoMjQwLCAxOTEsIDIzMyk7XG4gIH0iXX0= */";
      /***/
    },

    /***/
    96354:
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categoria/categoria.page.html ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\">\n  <div>\n    <ion-list class=\"list\">\n      <ion-item *ngFor=\"let item of items\" (click)=\"showProdutos(item.id)\" >\n        <h5 class=\"ion-text-center\">{{item.name}}</h5>\n      </ion-item>\n    </ion-list>\n    <ion-button [routerLink]=\"['/dashboard/index']\" color=\"light\" block outline expand=\"block\" >Inicio</ion-button> \n  </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_categoria_categoria_module_ts-es5.js.map