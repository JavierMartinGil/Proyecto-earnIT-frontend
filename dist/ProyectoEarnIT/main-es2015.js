(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<app-logos></app-logos>\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/claim-index/claim-index.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/claim-index/claim-index.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"claim_index\">\n    <div class=\"container\">\n        <h3>Gracias a ti, podemos hacer que earnIT crezca</h3>\n        <h4>Tanto si deseas compartir información sobre tu salario con nuestra comunidad, como si deseas recibir información sobre los sueldos del mercado IT, puedes ayudarnos a\n            crecer.</h4>\n        <p class=\"btns\">\n            <a [routerLink]=\"['/colabora']\" class=\"btn_trans\">Comparte tu info</a>\n            <a [routerLink]=\"['/compara']\" class=\"btn_trans\">Haz una consulta</a>\n        </p>\n    </div>\n</div>\n<div class=\"texto_index container\">\n    <div class=\"texto_left\">\n        <h4>Consulta, compara y comparte</h4>\n        <hr>\n        <p>En earnIT, con la ayuda de todos, intentamos que el sector IT sea una comunidad más abierta, más transparente y más colaborativa. Gracias a la generosidad de los que\n            decidís compartir con los demás, hacemos el sector mas amigable para nuevos y veteranos.</p>\n        <a [routerLink]=\"['/compara']\">Compara salarios <span>➞</span></a>\n    </div>\n    <div>\n        <img src=\"../../assets/img/developer.png\" alt=\"Sueldo medio developer\">\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/colabora/colabora.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/colabora/colabora.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<div class=\"banner_col\">\n    <div class=\"container\">\n        <h1>Colabora con la comunidad IT</h1>\n        <hr>\n        <h2>Enviando tu información, nos ayudas a crecer y así poder ser de más ayuda tanto a empresas como a profesionales.</h2>\n    </div>\n</div>\n<app-formcol></app-formcol>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/compara/compara.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/compara/compara.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n\n<div class=\"banner_comp\">\n    <div class=\"container\">\n        <h1>Compara tu salario</h1>\n        <hr>\n        <h2>Comprueba si estás siendo valorado o valorando a tus desarrolladores de acuerdo al mercado actual, o cuanto puedes pedir en tu próxima entrevista de trabajo</h2>\n    </div>\n</div>\n<app-formcomp></app-formcomp>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/error404/error404.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/error404/error404.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<div class=\"error_container\">\n    <div class=\"container\">\n        <h1>ERROR 404</h1>\n        <h2>La página que buscas no existe</h2>\n        <a [routerLink]=\"['/']\">Volver al inicio</a>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div class=\"footer_container container\">\n        <div>\n            <h4>Sobre nosotros</h4>\n            <p>earnIT es una iniciativa sin ánimo de lucro que intenta hacer más fácil el acceso a la información por parte de trabajadores y empresas.</p>\n            <p>Entre todos, podemos hacer que la remuneración percibida en el sector del desarrollo sea más justa y equitativa.</p>\n            <p class=\"social\">\n                <a href=\"#\"><i class=\"fab fa-facebook\"></i></a>\n                <a href=\"#\"><i class=\"fab fa-twitter\"></i></a>\n                <a href=\"https://github.com/JavierMartinGil\" target=\"new\"><i class=\"fab fa-github\"></i></a>\n                <a href=\"https://www.linkedin.com/in/javier-martin-gil-developer\" target=\"new\"><i class=\"fab fa-linkedin\"></i></a>\n            </p>\n        </div>\n        <div>\n            <h4>Menu</h4>\n            <ul class=\"menu_footer\">\n                <li><a [routerLink]=\"['/']\">Inicio </a></li>\n                <li><a [routerLink]=\"['/colabora']\">Colabora con earnIT</a></li>\n                <li><a [routerLink]=\"['/compara']\">Compara tu salario</a></li>\n            </ul>\n            <img src=\"../../assets/img/earnit_log_footer.png\" alt=\"earnIT comparador de sueldos de IT\" id=\"logo_footer\">\n        </div>\n        <div>\n            <h4>Legal</h4>\n            <ul class=\"menu_legal\">\n                <li><a href=\"#\">Aviso legal</a></li>\n                <li><a href=\"#\">Política de privacidad</a></li>\n                <li><a href=\"#\">Política de cookies</a></li>\n                <li><a href=\"#\">Contacta con nosotros</a></li>\n            </ul>\n\n        </div>\n    </div>\n    <div class=\"subfooter\">\n        <div class=\"container\">\n\n            <p>&copy; 2019 earnIT</p>\n        </div>\n    </div>\n\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/formcol/formcol.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/formcol/formcol.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"formulario_colabora\">\n    <div class=\"container\">\n        <form novalidate [formGroup]=\"formulario_colabora\" (ngSubmit)=\"onSubmit()\" method=\"POST\">\n            <div class=\"formcol\">\n                <label><i class=\"fas fa-list\"></i> Selecciona una profesión</label>\n                <select formControlName=\"cargo\">\n                    <option value=\"\" disabled>Ej. Full-stack</option>\n                    <option value=\"Full-stack\">Full-stack</option>\n                    <option value=\"Front-end\">Front-end</option>\n                    <option value=\"Back-end\">Back-end</option>\n                </select>\n                <p class=\"error\" *ngIf=\"formulario_colabora.controls['cargo'].errors?.required && formulario_colabora.controls['cargo'].touched\">\n                    ⚠ El campo profesión es requerido ⚠\n                </p>\n\n                <label><i class=\"far fa-calendar-check\"></i> Selecciona tu experiencia</label>\n                <select formControlName=\"experiencia\">\n                    <option value=\"\" disabled>Ej. 2 años</option>\n                    <option value=\"0\">Sin experiencia</option>\n                    <option value=\"1\">1 año</option>\n                    <option value=\"2\">2 años</option>\n                    <option value=\"3\">3 años</option>\n                    <option value=\"4\">4 años</option>\n                    <option value=\"5\">Más de 4 años</option>\n                </select>\n                <p class=\"error\" *ngIf=\"formulario_colabora.controls['experiencia'].errors?.required && formulario_colabora.controls['experiencia'].touched\">\n                    ⚠ El campo experiencia es requerido ⚠\n                </p>\n            </div>\n            <div class=\"formcol\">\n                <label><i class=\"far fa-file-code\"></i> Selecciona la tecnología con la que trabajas</label>\n                <select formControlName=\"tecnologia\">\n                    <option value=\"\" disabled>Ej. JavaScript</option>\n                    <option value=\"Javascript\" [disabled]=\"formulario_colabora.controls['cargo'].value=='Back-end'\">JavaScript</option>\n                    <option value=\"Angular\" [disabled]=\"formulario_colabora.controls['cargo'].value=='Back-end'\">Angular</option>\n                    <option value=\"React\" [disabled]=\"formulario_colabora.controls['cargo'].value=='Back-end'\">React</option>\n                    <option value=\"Vue.js\" [disabled]=\"formulario_colabora.controls['cargo'].value=='Back-end'\">VueJS</option>\n                    <option value=\"PHP\" [disabled]=\"formulario_colabora.controls['cargo'].value=='Front-end'\">PHP</option>\n                    <option value=\"NodeJS\" [disabled]=\"formulario_colabora.controls['cargo'].value=='Front-end'\">NodeJS</option>\n                    <option value=\"Java\" [disabled]=\"formulario_colabora.controls['cargo'].value=='Front-end'\">Java</option>\n                    <option value=\".Net\" [disabled]=\"formulario_colabora.controls['cargo'].value=='Front-end'\">.Net</option>\n                    <option value=\"Python\" [disabled]=\"formulario_colabora.controls['cargo'].value=='Front-end'\">Python</option>\n                </select>\n                <p class=\"error\" *ngIf=\"formulario_colabora.controls['tecnologia'].errors?.required && formulario_colabora.controls['tecnologia'].touched\">\n                    ⚠ El campo tecnologías es requerido ⚠\n                </p>\n                <label><i class=\"far fa-money-bill-alt\"></i> Selecciona tu sueldo bruto anual</label>\n                <input type=\"number\" formControlName=\"bruto\" min=\"12000\" max=\"60000\" placeholder=\"Ej. 20000\">\n            </div>\n            <p class=\"error\" *ngIf=\"formulario_colabora.controls['bruto'].errors?.required && formulario_colabora.controls['bruto'].touched\">\n                ⚠ El campo sueldo es requerido ⚠\n            </p>\n            <div class=\"formcol\">\n                <label><i class=\"fas fa-desktop\"></i> Seleciona el sector donde trabajas</label>\n                <select formControlName=\"sector\">\n                    <option value=\"\" disabled><span>Ej. Consultora</span></option>\n                    <option value=\"Consultora\">Consultora</option>\n                    <option value=\"Start-up\">Start-up</option>\n                    <option value=\"Agencia\">Agencia</option>\n                    <option value=\"Otros\">Otros</option>\n                </select>\n                <p class=\"error\" *ngIf=\"formulario_colabora.controls['sector'].errors?.required && formulario_colabora.controls['sector'].touched\">\n                    ⚠ El campo sector es requerido ⚠\n                </p>\n                <input type=\"submit\" value=\"Enviar\" [disabled]=\"!formulario_colabora.valid\">\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/formcomp/formcomp.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/formcomp/formcomp.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"formulario\">\n    <div class=\"container\">\n        <form novalidate [formGroup]=\"formulario_solicitud\" (ngSubmit)=\"onSubmit()\" method=\"POST\">\n            <div>\n                <label for=\"\"><i class=\"fas fa-list\"></i> Selecciona una profesión</label>\n                <select formControlName=\"cargo\">\n                    <option value=\"\" disabled>Ej. Full-stack</option>\n                    <option value=\"Full-stack\">Full-stack</option>\n                    <option value=\"Front-end\">Front-end</option>\n                    <option value=\"Back-end\">Back-end</option>\n                </select>\n                <p class=\"error\" *ngIf=\"formulario_solicitud.controls['cargo'].errors?.required && formulario_solicitud.controls['cargo'].touched\">\n                    ⚠ El campo profesión es requerido ⚠\n                </p>\n            </div>\n            <div>\n                <label for=\"\"><i class=\"far fa-calendar-alt\"></i> Seleciona tu experiencia</label>\n                <select formControlName=\"experiencia\">\n                    <option value=\"\" disabled>Ej. 2 años</option>\n                    <option value=\"0\">Sin experiencia</option>\n                    <option value=\"1\">1 año</option>\n                    <option value=\"2\">2 años</option>\n                    <option value=\"3\">3 años</option>\n                    <option value=\"4\">4 años</option>\n                    <option value=\"5\">Más de 4 años</option>\n                </select>\n                <p class=\"error\" *ngIf=\"formulario_solicitud.controls['experiencia'].errors?.required && formulario_solicitud.controls['experiencia'].touched\">\n                    ⚠ El campo experiencia es requerido ⚠\n                </p>\n            </div>\n            <div> <label for=\"\"><i class=\"fas fa-desktop\"></i> Seleciona la tecnología con la que trabajas</label>\n                <select formControlName=\"tecnologia\">\n                    <option value=\"\" disabled>Ej. JavaScript</option>\n                    <option value=\"Javascript\" [disabled]=\"formulario_solicitud.controls['cargo'].value=='Back-end'\">JavaScript</option>\n                    <option value=\"Angular\" [disabled]=\"formulario_solicitud.controls['cargo'].value=='Back-end'\">Angular</option>\n                    <option value=\"React\" [disabled]=\"formulario_solicitud.controls['cargo'].value=='Back-end'\">React</option>\n                    <option value=\"Vue.js\" [disabled]=\"formulario_solicitud.controls['cargo'].value=='Back-end'\">VueJS</option>\n                    <option value=\"PHP\" [disabled]=\"formulario_solicitud.controls['cargo'].value=='Front-end'\">PHP</option>\n                    <option value=\"NodeJS\" [disabled]=\"formulario_solicitud.controls['cargo'].value=='Front-end'\">NodeJS</option>\n                    <option value=\"Java\" [disabled]=\"formulario_solicitud.controls['cargo'].value=='Front-end'\">Java</option>\n                    <option value=\".Net\" [disabled]=\"formulario_solicitud.controls['cargo'].value=='Front-end'\">.Net</option>\n                    <option value=\"Python\" [disabled]=\"formulario_solicitud.controls['cargo'].value=='Front-end'\">Python</option>\n                </select>\n                <p class=\"error\" *ngIf=\"formulario_solicitud.controls['tecnologia'].errors?.required && formulario_solicitud.controls['tecnologia'].touched\">\n                    ⚠ El campo tecnologias es requerido ⚠\n                </p>\n            </div>\n            <div>\n                <input type=\"submit\" value=\"Buscar\" [disabled]=\"!formulario_solicitud.valid\" (click)=\"scroll(respuesta)\">\n            </div>\n        </form>\n    </div>\n</div>\n<div #respuesta></div>\n<div class=\"container res\" *ngIf=\"salario_medio\">\n    <h2>Resultados de la búsqueda</h2>\n    <div class=\"resultados\">\n        <div>\n            <h3>Título de la ocupación</h3>\n            <h4><i class=\"fas fa-laptop-code\"></i> {{datos_devs.cargo || 'Cargo'}}</h4>\n        </div>\n        <div>\n            <h3>Sueldo promedio b/a</h3>\n            <h4>{{salario_medio | currency:'EUR':'symbol':'5.0-0'}}</h4>\n        </div>\n        <div>\n            <h3>Tecnología usada</h3>\n            <h4><i class=\"fas fa-code\"></i> {{datos_devs.tecnologia || 'Tecnología'}}</h4>\n        </div>\n    </div>\n</div>\n<app-tablaresultados [datos_totales]=\"datos_totales\" [no_results]=\"no_results\" [salario_medio]=\"salario_medio\"></app-tablaresultados>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/gracias/gracias.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gracias/gracias.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<div class=\"imagen_gracias\">\n    <div class=\"container\">\n        <h3>¡Gracias por tu colaboración!</h3>\n        <hr>\n        <h4>Tu información ha sido añadida a nuestra base de datos</h4>\n        <a [routerLink]=\"['/']\" class=\"boton\">Volver al inicio</a>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/hero/hero.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/hero/hero.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hero\">\n    <app-menu></app-menu>\n    <div class=\"container\">\n        <h1>¿Cuanto cobra un desarrollador?</h1>\n        <h2>Con earnIT, comprueba cual es el salario medio según tu experiencia, tus conocimientos y tu sector</h2>\n        <button class=\"boton\" (click)=scroll(more)>MÁS INFO</button>\n        <div #more></div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/index/index.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/index/index.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-hero></app-hero>\n<app-presentacion></app-presentacion>\n<app-claim-index></app-claim-index>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/logos/logos.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/logos/logos.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logos\">\n    <div class=\"container lista_logos\">\n        <div><img src=\"../../assets/img/javascript-logo.png\" alt=\"JavaScript\"></div>\n        <div><img src=\"../../assets/img/java-logo.png\" alt=\"Java\"></div>\n        <div><img src=\"../../assets/img/node-logo.png\" alt=\"NodeJS\"></div>\n        <div><img src=\"../../assets/img/angular-logo.png\" alt=\"Angular\"></div>\n        <div><img src=\"../../assets/img/react-logo.png\" alt=\"React\"></div>\n        <div><img src=\"../../assets/img/php-logo.png\" alt=\"Php\"></div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/menu/menu.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/menu/menu.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menu\">\n    <div class=\"container\">\n        <div class=\"logo\">\n            <a [routerLink]=\"['/']\"><img src=\"../../assets/img/earnit_logo.png\" alt=\"Comparador sueldos IT\"></a>\n        </div>\n        <div>\n            <div class=\"btn_menu_res\" (click)=\"cambiaestado()\">\n                <div></div>\n                <div></div>\n                <div></div>\n            </div>\n        </div>\n        <div class=\"navmenu\">\n            <nav>\n                <ul [ngClass]=\"{visible: estadobtn}\">\n                    <li>\n                        <a [routerLink]=\"['/']\">Inicio</a>\n                    </li>\n                    <li>\n                        <a [routerLink]=\"['/colabora']\">Colabora</a>\n                    </li>\n                    <li>\n                        <a [routerLink]=\"['/compara']\">Compara</a>\n                    </li>\n                </ul>\n            </nav>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/presentacion/presentacion.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/presentacion/presentacion.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"presentacion\" id=\"more\">\n    <div class=\"container pres_index\">\n        <h3>Conoce <span>earnIT</span></h3>\n        <hr>\n        <p>El valor de tu trabajo en el mercado está en constante cambio. Mantente actualizado con <strong>earnIT</strong> Si eres una empresa, con salarios acordes al mercado,\n            conseguirás atraer\n            talento.</p>\n        <div class=\"icons\">\n            <div class=\"single_icon\">\n                <img src=\"../../assets/img/earnit-empresas.png\" alt=\"earnIt para empresas\">\n                <h4>Para empresas</h4>\n                <p>Comprueba el valor real de tus actuales trabajadores y de posibles nuevas contrataciones</p>\n            </div>\n            <div class=\"single_icon\">\n                <img src=\"../../assets/img/earnit-senior.png\" alt=\"earnIt para seniors\">\n                <h4>Para seniors</h4>\n                <p>Con earnIT podrás averiguar si estás cobrando acorde a lo que marca el mercado</p>\n            </div>\n            <div class=\"single_icon\">\n                <img src=\"../../assets/img/earnit-junior.png\" alt=\"earnIt para juniors\">\n                <h4>Para juniors</h4>\n                <p>Averigua qué cantidad puedes negociar en tu incorporación al sector IT</p>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tablaresultados/tablaresultados.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tablaresultados/tablaresultados.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h3 class=\"no_res\" *ngIf=\"no_results\">{{no_results}}</h3>\n</div>\n<div class=\"container tabla_res\" *ngIf=\"salario_medio\">\n    <h3>Algunos de los datos en los que nos hemos basado</h3>\n    <table>\n        <tr>\n            <th>Profesión</th>\n            <th>Sueldo anual bruto</th>\n            <th>Tecnología</th>\n            <th>Experiencia (años)</th>\n            <th>Sector</th>\n        </tr>\n        <tr *ngFor=\"let dev of datos_totales\">\n            <td>{{dev.cargo}}</td>\n            <td>{{dev.bruto | currency:'EUR':'symbol':'5.0-0'}}</td>\n            <td>{{dev.tecnologia}}</td>\n            <td>{{dev.experiencia}}</td>\n            <td>{{dev.sector}}</td>\n        </tr>\n    </table>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _colabora_colabora_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./colabora/colabora.component */ "./src/app/colabora/colabora.component.ts");
/* harmony import */ var _compara_compara_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./compara/compara.component */ "./src/app/compara/compara.component.ts");
/* harmony import */ var _error404_error404_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error404/error404.component */ "./src/app/error404/error404.component.ts");
/* harmony import */ var _gracias_gracias_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gracias/gracias.component */ "./src/app/gracias/gracias.component.ts");








const routes = [
    { path: '', component: _index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"] },
    { path: 'colabora', component: _colabora_colabora_component__WEBPACK_IMPORTED_MODULE_4__["ColaboraComponent"] },
    { path: 'compara', component: _compara_compara_component__WEBPACK_IMPORTED_MODULE_5__["ComparaComponent"] },
    { path: 'gracias', component: _gracias_gracias_component__WEBPACK_IMPORTED_MODULE_7__["GraciasComponent"] },
    { path: '**', component: _error404_error404_component__WEBPACK_IMPORTED_MODULE_6__["Error404Component"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                scrollPositionRestoration: 'enabled',
            })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'ProyectoEarnIT';
        this.titulo = "";
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hero/hero.component */ "./src/app/hero/hero.component.ts");
/* harmony import */ var _presentacion_presentacion_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./presentacion/presentacion.component */ "./src/app/presentacion/presentacion.component.ts");
/* harmony import */ var _claim_index_claim_index_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./claim-index/claim-index.component */ "./src/app/claim-index/claim-index.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _logos_logos_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./logos/logos.component */ "./src/app/logos/logos.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _colabora_colabora_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./colabora/colabora.component */ "./src/app/colabora/colabora.component.ts");
/* harmony import */ var _compara_compara_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./compara/compara.component */ "./src/app/compara/compara.component.ts");
/* harmony import */ var _formcomp_formcomp_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./formcomp/formcomp.component */ "./src/app/formcomp/formcomp.component.ts");
/* harmony import */ var _tablaresultados_tablaresultados_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tablaresultados/tablaresultados.component */ "./src/app/tablaresultados/tablaresultados.component.ts");
/* harmony import */ var _formcol_formcol_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./formcol/formcol.component */ "./src/app/formcol/formcol.component.ts");
/* harmony import */ var _error404_error404_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./error404/error404.component */ "./src/app/error404/error404.component.ts");
/* harmony import */ var _gracias_gracias_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./gracias/gracias.component */ "./src/app/gracias/gracias.component.ts");





















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"],
            _hero_hero_component__WEBPACK_IMPORTED_MODULE_8__["HeroComponent"],
            _presentacion_presentacion_component__WEBPACK_IMPORTED_MODULE_9__["PresentacionComponent"],
            _claim_index_claim_index_component__WEBPACK_IMPORTED_MODULE_10__["ClaimIndexComponent"],
            _index_index_component__WEBPACK_IMPORTED_MODULE_11__["IndexComponent"],
            _logos_logos_component__WEBPACK_IMPORTED_MODULE_12__["LogosComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
            _colabora_colabora_component__WEBPACK_IMPORTED_MODULE_14__["ColaboraComponent"],
            _compara_compara_component__WEBPACK_IMPORTED_MODULE_15__["ComparaComponent"],
            _formcomp_formcomp_component__WEBPACK_IMPORTED_MODULE_16__["FormcompComponent"],
            _tablaresultados_tablaresultados_component__WEBPACK_IMPORTED_MODULE_17__["TablaresultadosComponent"],
            _formcol_formcol_component__WEBPACK_IMPORTED_MODULE_18__["FormcolComponent"],
            _error404_error404_component__WEBPACK_IMPORTED_MODULE_19__["Error404Component"],
            _gracias_gracias_component__WEBPACK_IMPORTED_MODULE_20__["GraciasComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/claim-index/claim-index.component.css":
/*!*******************************************************!*\
  !*** ./src/app/claim-index/claim-index.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".claim_index {\r\n    background-color: #2d4084;\r\n    padding: 80px 0;\r\n    background-image: url('background-earnit.png');\r\n    background-size: cover;\r\n}\r\n\r\n.claim_index h3{\r\n    color: white;\r\n    text-align: center;\r\n    font-weight: 800;\r\n    font-size: 2.5em;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.claim_index h4{\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 1.5em;\r\n    margin-bottom: 50px;\r\n    line-height: 1.5em;\r\n}\r\n\r\np.btns{\r\n    text-align: center;\r\n    margin: 20px 0;\r\n}\r\n\r\ndiv.texto_index{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    margin: 40px auto;\r\n    margin-bottom: -5px;\r\n}\r\n\r\ndiv.texto_index div{\r\n    width: 50%;    \r\n}\r\n\r\n.texto_index h4 {\r\n    font-size: 2em;\r\n    font-weight: 800;\r\n    color: #696969;\r\n    margin-bottom: 30px;\r\n    margin-top: 50px;\r\n}\r\n\r\n.texto_index p {\r\n    line-height: 1.8em;\r\n    color: #6a7692;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.texto_left hr {\r\n    width: 100px;\r\n    text-align: left;\r\n    display: inline-block;\r\n    margin-bottom: 30px;\r\n    border: 3px solid #2D4084;\r\n}\r\n\r\n.texto_left a {\r\n    font-size: 1.2em;\r\n    -webkit-transition: .3s;\r\n    transition: .3s;\r\n}\r\n\r\n.texto_left a:hover {\r\n    color: #F03C79;\r\n}\r\n\r\n.texto_left a span{\r\n    font-size: 1.3em;\r\n    -webkit-transition: .3s;\r\n    transition: .3s;\r\n}\r\n\r\n.texto_left a:hover span{\r\n    font-size: 1.3em;\r\n    padding-left: 10px;    \r\n}\r\n\r\n@media (max-width: 900px){\r\n\r\n    .texto_index h4 {    \r\n    margin-top: 30px;\r\n    }\r\n\r\n}\r\n\r\n@media (max-width: 650px){\r\n\r\n.btn_trans {   \r\n    display: block;\r\n    width: 18em;\r\n    margin: 15px auto;\r\n}\r\n\r\ndiv.texto_index {    \r\n    display: block;   \r\n}\r\n\r\ndiv.texto_index div {\r\n    width: 100%;\r\n}\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xhaW0taW5kZXgvY2xhaW0taW5kZXguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsOENBQTZEO0lBQzdELHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBZTtJQUFmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUFlO0lBQWYsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUk7SUFDQSxnQkFBZ0I7SUFDaEI7O0FBRUo7O0FBRUE7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUEiLCJmaWxlIjoic3JjL2FwcC9jbGFpbS1pbmRleC9jbGFpbS1pbmRleC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsYWltX2luZGV4IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDQwODQ7XHJcbiAgICBwYWRkaW5nOiA4MHB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kLWVhcm5pdC5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmNsYWltX2luZGV4IGgze1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uY2xhaW1faW5kZXggaDR7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxufVxyXG5cclxucC5idG5ze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuXHJcbmRpdi50ZXh0b19pbmRleHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDQwcHggYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IC01cHg7XHJcbn1cclxuXHJcbmRpdi50ZXh0b19pbmRleCBkaXZ7XHJcbiAgICB3aWR0aDogNTAlOyAgICBcclxufVxyXG5cclxuLnRleHRvX2luZGV4IGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGNvbG9yOiAjNjk2OTY5O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi50ZXh0b19pbmRleCBwIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcclxuICAgIGNvbG9yOiAjNmE3NjkyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLnRleHRvX2xlZnQgaHIge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMkQ0MDg0O1xyXG59XHJcblxyXG4udGV4dG9fbGVmdCBhIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICB0cmFuc2l0aW9uOiAuM3M7XHJcbn1cclxuXHJcbi50ZXh0b19sZWZ0IGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICNGMDNDNzk7XHJcbn1cclxuXHJcbi50ZXh0b19sZWZ0IGEgc3BhbntcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICB0cmFuc2l0aW9uOiAuM3M7XHJcbn1cclxuXHJcbi50ZXh0b19sZWZ0IGE6aG92ZXIgc3BhbntcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7ICAgIFxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpe1xyXG5cclxuICAgIC50ZXh0b19pbmRleCBoNCB7ICAgIFxyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCl7XHJcblxyXG4uYnRuX3RyYW5zIHsgICBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDE4ZW07XHJcbiAgICBtYXJnaW46IDE1cHggYXV0bztcclxufVxyXG5cclxuZGl2LnRleHRvX2luZGV4IHsgICAgXHJcbiAgICBkaXNwbGF5OiBibG9jazsgICBcclxufVxyXG5cclxuZGl2LnRleHRvX2luZGV4IGRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/claim-index/claim-index.component.ts":
/*!******************************************************!*\
  !*** ./src/app/claim-index/claim-index.component.ts ***!
  \******************************************************/
/*! exports provided: ClaimIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimIndexComponent", function() { return ClaimIndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ClaimIndexComponent = class ClaimIndexComponent {
    constructor() { }
    ngOnInit() {
    }
};
ClaimIndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-claim-index',
        template: __webpack_require__(/*! raw-loader!./claim-index.component.html */ "./node_modules/raw-loader/index.js!./src/app/claim-index/claim-index.component.html"),
        styles: [__webpack_require__(/*! ./claim-index.component.css */ "./src/app/claim-index/claim-index.component.css")]
    })
], ClaimIndexComponent);



/***/ }),

/***/ "./src/app/colabora.service.ts":
/*!*************************************!*\
  !*** ./src/app/colabora.service.ts ***!
  \*************************************/
/*! exports provided: ColaboraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColaboraService", function() { return ColaboraService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ColaboraService = class ColaboraService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "http://localhost:3000/colabora";
    }
    nuevo(values) {
        return this.http.post(`${this.baseUrl}/nuevo`, values).toPromise();
    }
};
ColaboraService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ColaboraService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ColaboraService);



/***/ }),

/***/ "./src/app/colabora/colabora.component.css":
/*!*************************************************!*\
  !*** ./src/app/colabora/colabora.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".banner_col h1 {\r\n    font-size: 2.5em;\r\n    font-weight: 800;\r\n    text-align: center;\r\n    padding-top: 50px;\r\n    margin-bottom: 20px;\r\n    color: #2d4084;\r\n}\r\n\r\n.banner_col hr {\r\n    width: 170px;\r\n    border: 3px solid #f03c79;\r\n    margin-bottom: 25px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.banner_col h2 {\r\n    max-width: 800px;\r\n    text-align: center;\r\n    margin: 15px auto;\r\n    font-size: 1.5em;\r\n    line-height: 1.4em;\r\n    color: #6e6e6e;\r\n    padding-bottom: 40px;\r\n}\r\n\r\n.banner_col {\r\n    background-color: #f2f0f0;\r\n    background-image: url('comparador-sueldos-it.jpg');\r\n    background-size: cover;\r\n    background-position: 50% 50%;\r\n    margin-top: 75px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29sYWJvcmEvY29sYWJvcmEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0RBQW1FO0lBQ25FLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29sYWJvcmEvY29sYWJvcmEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYW5uZXJfY29sIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgY29sb3I6ICMyZDQwODQ7XHJcbn1cclxuXHJcbi5iYW5uZXJfY29sIGhyIHtcclxuICAgIHdpZHRoOiAxNzBweDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNmMDNjNzk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5iYW5uZXJfY29sIGgyIHtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDE1cHggYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS40ZW07XHJcbiAgICBjb2xvcjogIzZlNmU2ZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4uYmFubmVyX2NvbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMGYwO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9jb21wYXJhZG9yLXN1ZWxkb3MtaXQuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiA3NXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/colabora/colabora.component.ts":
/*!************************************************!*\
  !*** ./src/app/colabora/colabora.component.ts ***!
  \************************************************/
/*! exports provided: ColaboraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColaboraComponent", function() { return ColaboraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ColaboraComponent = class ColaboraComponent {
    constructor() {
        this.titulo = "";
    }
    ngOnInit() {
    }
};
ColaboraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-colabora',
        template: __webpack_require__(/*! raw-loader!./colabora.component.html */ "./node_modules/raw-loader/index.js!./src/app/colabora/colabora.component.html"),
        styles: [__webpack_require__(/*! ./colabora.component.css */ "./src/app/colabora/colabora.component.css")]
    })
], ColaboraComponent);



/***/ }),

/***/ "./src/app/compara.service.ts":
/*!************************************!*\
  !*** ./src/app/compara.service.ts ***!
  \************************************/
/*! exports provided: ComparaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComparaService", function() { return ComparaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ComparaService = class ComparaService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "http://localhost:3000/compara";
    }
    comparar(values) {
        return this.http.post(`${this.baseUrl}/salarios`, values).toPromise();
    }
};
ComparaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComparaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ComparaService);



/***/ }),

/***/ "./src/app/compara/compara.component.css":
/*!***********************************************!*\
  !*** ./src/app/compara/compara.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.banner_comp h1 {\r\n    font-size: 2.5em;\r\n    font-weight: 800;\r\n    text-align: center;\r\n    padding-top: 50px;\r\n    margin-bottom: 20px;\r\n    color: #2d4084;\r\n}\r\n\r\n.banner_comp hr {\r\n    width: 170px;\r\n    border: 3px solid #f03c79;\r\n    margin-bottom: 25px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.banner_comp h2 {\r\n    max-width: 800px;\r\n    text-align: center;\r\n    margin: 15px auto;\r\n    font-size: 1.5em;\r\n    line-height: 1.4em;\r\n    color: #6e6e6e;\r\n    padding-bottom: 40px;\r\n}\r\n\r\n.banner_comp {\r\n    background-color: #f2f0f0;\r\n    background-image: url('comparador-sueldos-it.jpg');\r\n    background-size: cover;\r\n    background-position: 50% 50%;\r\n    margin-top: 75px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFyYS9jb21wYXJhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0RBQW1FO0lBQ25FLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcGFyYS9jb21wYXJhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5iYW5uZXJfY29tcCBoMSB7XHJcbiAgICBmb250LXNpemU6IDIuNWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGNvbG9yOiAjMmQ0MDg0O1xyXG59XHJcblxyXG4uYmFubmVyX2NvbXAgaHIge1xyXG4gICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2YwM2M3OTtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmJhbm5lcl9jb21wIGgyIHtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDE1cHggYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS40ZW07XHJcbiAgICBjb2xvcjogIzZlNmU2ZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4uYmFubmVyX2NvbXAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjBmMDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvY29tcGFyYWRvci1zdWVsZG9zLWl0LmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogNzVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/compara/compara.component.ts":
/*!**********************************************!*\
  !*** ./src/app/compara/compara.component.ts ***!
  \**********************************************/
/*! exports provided: ComparaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComparaComponent", function() { return ComparaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ComparaComponent = class ComparaComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
ComparaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-compara',
        template: __webpack_require__(/*! raw-loader!./compara.component.html */ "./node_modules/raw-loader/index.js!./src/app/compara/compara.component.html"),
        styles: [__webpack_require__(/*! ./compara.component.css */ "./src/app/compara/compara.component.css")]
    })
], ComparaComponent);



/***/ }),

/***/ "./src/app/error404/error404.component.css":
/*!*************************************************!*\
  !*** ./src/app/error404/error404.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.error_container{\r\n    background-image: url('error_404.jpg');\r\n    padding: 200px 0;\r\n    background-size: cover;\r\n    background-position: center center;\r\n}\r\n\r\n.error_container h1{\r\n    font-size: 3em;\r\n    text-align: center;\r\n    font-weight: 800;\r\n    color: #333;\r\n}\r\n\r\n.error_container h2{\r\n    font-size: 2em;\r\n    text-align: center;\r\n    margin: 20px 0;\r\n    color: #333;\r\n}\r\n\r\n.error_container a{\r\n    background: transparent -webkit-gradient(linear, left top, right top, from(#2D4085), to(#4155A2)) 0% 0% no-repeat padding-box;\r\n    background: transparent linear-gradient(90deg, #2D4085 0%, #4155A2 100%) 0% 0% no-repeat padding-box;\r\n    border-radius: 45px;\r\n    color: white;\r\n    padding: 20px 30px;\r\n    display: block;\r\n    margin: 0 auto;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-weight: 800;\r\n    margin-bottom: 190px;\r\n    -webkit-transition: .5s;\r\n    transition: .5s;\r\n    max-width: 220px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.error_container a:hover{\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3I0MDQvZXJyb3I0MDQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNDQUFxRDtJQUNyRCxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUVJLDZIQUFvRztJQUFwRyxvR0FBb0c7SUFDcEcsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGNBQWM7SUFDZCxvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksNkJBQXFCO1lBQXJCLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yNDA0L2Vycm9yNDA0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuZXJyb3JfY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvZXJyb3JfNDA0LmpwZyk7XHJcbiAgICBwYWRkaW5nOiAyMDBweCAwO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbn1cclxuXHJcbi5lcnJvcl9jb250YWluZXIgaDF7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLmVycm9yX2NvbnRhaW5lciBoMntcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLmVycm9yX2NvbnRhaW5lciBhe1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20oIzJENDA4NSksIHRvKCM0MTU1QTIpKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMyRDQwODUgMCUsICM0MTU1QTIgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTkwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC41cztcclxuICAgIHRyYW5zaXRpb246IC41cztcclxuICAgIG1heC13aWR0aDogMjIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uZXJyb3JfY29udGFpbmVyIGE6aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/error404/error404.component.ts":
/*!************************************************!*\
  !*** ./src/app/error404/error404.component.ts ***!
  \************************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Error404Component = class Error404Component {
    constructor() { }
    ngOnInit() {
    }
};
Error404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error404',
        template: __webpack_require__(/*! raw-loader!./error404.component.html */ "./node_modules/raw-loader/index.js!./src/app/error404/error404.component.html"),
        styles: [__webpack_require__(/*! ./error404.component.css */ "./src/app/error404/error404.component.css")]
    })
], Error404Component);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer{    \r\n    background-color: #eee;\r\n    padding: 30px 0;\r\n    padding-bottom: 0;\r\n}\r\n\r\nfooter p{\r\n    color: #6e6e6e;\r\n}\r\n\r\n.subfooter p {\r\n    border-top: 1px solid rgb(206, 206, 206);\r\n    padding-top: 10px;\r\n}\r\n\r\n.subfooter {\r\n    padding: 15px 0;\r\n    text-align: center;\r\n    font-size: .8em;\r\n}\r\n\r\n.footer_container{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    text-align: left;\r\n    background-image: url('fondo-footer1.png');\r\n    background-repeat: no-repeat;\r\n    background-position: bottom right;\r\n}\r\n\r\n.footer_container div{\r\n    width: 33%;\r\n    padding: 10px;\r\n    font-size: .8em;\r\n    margin-bottom: 30px;\r\n    line-height: 1.3em;\r\n    border-right: 1px solid rgb(206, 206, 206);\r\n}\r\n\r\n.footer_container div:last-child{\r\n    border-right: none;\r\n}\r\n\r\nfooter .footer_container h4{\r\n    font-weight: 800;\r\n    font-size: 1.1em;\r\n    color: #666;\r\n    margin-bottom: 25px;\r\n    text-align: left;\r\n}\r\n\r\np.social{\r\n    margin-top: 10px;\r\n}\r\n\r\np.social a i{\r\n    font-size: 1.5em;\r\n    color: #6e6e6e;\r\n    padding: 0px 10px;\r\n    -webkit-transition: .5s;\r\n    transition: .5s;\r\n}\r\n\r\np.social a:hover i{\r\n    color: #F03C79;\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n}\r\n\r\nul.menu_footer li,\r\nul.menu_legal li{\r\n    margin: 10px 0px;\r\n}\r\n\r\nul.menu_footer li a:before{\r\n    content: \">_\";\r\n}\r\n\r\nul.menu_footer li a,\r\nul.menu_legal li a{\r\n    -webkit-transition: .5s;\r\n    transition: .5s;\r\n    color: #6e6e6e;\r\n}\r\n\r\ni.fab.fa-facebook {\r\n    color: #3b5998!important;\r\n}\r\n\r\ni.fab.fa-twitter {\r\n    color: #00acee!important;\r\n}\r\n\r\ni.fab.fa-github {\r\n    color: #333!important;\r\n}\r\n\r\ni.fab.fa-linkedin {\r\n    color: #0e76a8!important;\r\n}\r\n\r\nul.menu_footer li a:hover,\r\nul.menu_legal li a:hover{\r\n    color: #F03C79;\r\n}\r\n\r\nimg#logo_footer{\r\n    width: 200px;    \r\n    max-width: 100%;\r\n}\r\n\r\n@media (max-width: 550px){\r\n.footer_container {    \r\n    display: block;   \r\n}\r\n\r\n.footer_container div{\r\n    width: 100%;\r\n    border-right: none;\r\n    border-bottom: 1px solid grey;\r\n}\r\n\r\n.footer_container div:last-child{\r\n    border-bottom: none;\r\n}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLDBDQUF5RDtJQUN6RCw0QkFBNEI7SUFDNUIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQiwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsdUJBQWU7SUFBZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLDZCQUFxQjtZQUFyQixxQkFBcUI7QUFDekI7O0FBRUE7O0lBRUksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSx1QkFBZTtJQUFmLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBOztJQUVJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0EiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXJ7ICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIHBhZGRpbmc6IDMwcHggMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcblxyXG5mb290ZXIgcHtcclxuICAgIGNvbG9yOiAjNmU2ZTZlO1xyXG59XHJcblxyXG4uc3ViZm9vdGVyIHAge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigyMDYsIDIwNiwgMjA2KTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uc3ViZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogLjhlbTtcclxufVxyXG5cclxuLmZvb3Rlcl9jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1nL2ZvbmRvLWZvb3RlcjEucG5nKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gcmlnaHQ7XHJcbn1cclxuXHJcbi5mb290ZXJfY29udGFpbmVyIGRpdntcclxuICAgIHdpZHRoOiAzMyU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAuOGVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjNlbTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYigyMDYsIDIwNiwgMjA2KTtcclxufVxyXG5cclxuLmZvb3Rlcl9jb250YWluZXIgZGl2Omxhc3QtY2hpbGR7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbn1cclxuXHJcbmZvb3RlciAuZm9vdGVyX2NvbnRhaW5lciBoNHtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxucC5zb2NpYWx7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG5wLnNvY2lhbCBhIGl7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgY29sb3I6ICM2ZTZlNmU7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgIHRyYW5zaXRpb246IC41cztcclxufVxyXG5cclxucC5zb2NpYWwgYTpob3ZlciBpe1xyXG4gICAgY29sb3I6ICNGMDNDNzk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcbnVsLm1lbnVfZm9vdGVyIGxpLFxyXG51bC5tZW51X2xlZ2FsIGxpe1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxufVxyXG5cclxudWwubWVudV9mb290ZXIgbGkgYTpiZWZvcmV7XHJcbiAgICBjb250ZW50OiBcIj5fXCI7XHJcbn1cclxuXHJcbnVsLm1lbnVfZm9vdGVyIGxpIGEsXHJcbnVsLm1lbnVfbGVnYWwgbGkgYXtcclxuICAgIHRyYW5zaXRpb246IC41cztcclxuICAgIGNvbG9yOiAjNmU2ZTZlO1xyXG59XHJcblxyXG5pLmZhYi5mYS1mYWNlYm9vayB7XHJcbiAgICBjb2xvcjogIzNiNTk5OCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmkuZmFiLmZhLXR3aXR0ZXIge1xyXG4gICAgY29sb3I6ICMwMGFjZWUhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pLmZhYi5mYS1naXRodWIge1xyXG4gICAgY29sb3I6ICMzMzMhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pLmZhYi5mYS1saW5rZWRpbiB7XHJcbiAgICBjb2xvcjogIzBlNzZhOCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnVsLm1lbnVfZm9vdGVyIGxpIGE6aG92ZXIsXHJcbnVsLm1lbnVfbGVnYWwgbGkgYTpob3ZlcntcclxuICAgIGNvbG9yOiAjRjAzQzc5O1xyXG59XHJcblxyXG5pbWcjbG9nb19mb290ZXJ7XHJcbiAgICB3aWR0aDogMjAwcHg7ICAgIFxyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTUwcHgpe1xyXG4uZm9vdGVyX2NvbnRhaW5lciB7ICAgIFxyXG4gICAgZGlzcGxheTogYmxvY2s7ICAgXHJcbn1cclxuXHJcbi5mb290ZXJfY29udGFpbmVyIGRpdntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XHJcbn1cclxuXHJcbi5mb290ZXJfY29udGFpbmVyIGRpdjpsYXN0LWNoaWxke1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/formcol/formcol.component.css":
/*!***********************************************!*\
  !*** ./src/app/formcol/formcol.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".formulario_colabora{\r\n    padding: 15px 0;\r\n    background: -webkit-gradient(linear, left top, right bottom, from(#fff), color-stop(50%, #fff), color-stop(50%, #eee), to(#eee));\r\n    background: linear-gradient(to bottom right, #fff 0%, #fff 50%, #eee 50%, #eee 100%);\r\n}\r\n\r\n.formulario_colabora .container {\r\n    max-width: 95%;\r\n    margin: 50px auto;\r\n    padding: 40px 20px;\r\n    box-shadow: 6px 3px 36px #929292;\r\n    border-radius: 25px;\r\n    background: #fff;\r\n    max-width: 75%;\r\n}\r\n\r\noption[disabled]{\r\n    color: #e0e0e0;\r\n}\r\n\r\ndiv.formcol input[type=number],\r\ndiv.formcol select{\r\n    display: block;\r\n    width: 50%;\r\n    margin: 5px auto;\r\n    font-size: 1.1em;\r\n    height: 50px;\r\n    outline: none; \r\n    margin-bottom: 40px;\r\n    padding-left: 10px;\r\n    border: none;\r\n    border-bottom: 3px solid #f03c79;    \r\n    color: #6e6e6e;\r\n    font-weight: bold;\r\n    -webkit-transition: .5s;\r\n    transition: .5s;   \r\n}\r\n\r\n.error {\r\n    width: 50%;\r\n    color: #f8faff;\r\n    margin: 20px auto;\r\n    background-color: crimson;\r\n    border: 1px solid #d30932;\r\n    padding: 10px 5px;\r\n    border-radius: 5px;\r\n}\r\n\r\ndiv.formcol input[type=number]:hover,\r\ndiv.formcol select:hover{\r\n    background-color: #f8f7f7;\r\n    border-bottom: 3px solid #2d4084;\r\n    padding-left: 15px;\r\n}\r\n\r\ndiv.formcol label{\r\n    display: block;\r\n    width: 50%;\r\n    margin: 0px auto;    \r\n    color: #6e6e6e;    \r\n    padding-bottom: 4px;\r\n    font-size: .9em;\r\n}\r\n\r\nlabel .far,label .fas,label .fa {\r\n    color: #f03c79;\r\n}\r\n\r\ndiv.formcol input[type=number],\r\ndiv.formcol select{\r\n    cursor: pointer;\r\n}\r\n\r\ndiv.formcol input[type=submit]{\r\n    background-color: #2d4084;\r\n    color: white;\r\n    height: 60px;\r\n    border: none;\r\n    width: 48%;\r\n    text-align: center;\r\n    display: block;\r\n    border-radius: 80px;\r\n    font-size: 1.3em;\r\n    margin: 15px auto;\r\n    border: 5px solid #2d4084;\r\n    -webkit-transition: .5s;\r\n    transition: .5s;\r\n}\r\n\r\ndiv.formcol input[type=submit]:hover{\r\n    cursor: pointer;\r\n    background-color: #f03c79;\r\n    border: 5px solid #f03c79;\r\n}\r\n\r\ndiv.formcol input[type=number]{\r\n    height: 50px;\r\n}\r\n\r\n.imagen_gracias img{\r\n    width: 60%;\r\n    margin: 0 auto;\r\n    display: block;\r\n}\r\n\r\n.imagen_gracias h3{\r\n    font-size: 4em;\r\n    text-align: center;\r\n    padding: 50px 0;\r\n    font-weight: 800;\r\n    color: #2d4084;\r\n}\r\n\r\ninput[disabled]{\r\n    background-color: #929292!important;\r\n    border-color: #929292!important;\r\n    cursor: no-drop!important;\r\n}\r\n\r\n@media (max-width: 900px){\r\n    .formulario_colabora .container {\r\n    max-width: 95%;    \r\n}\r\n\r\n.error{\r\n    width: 50%;\r\n    color: red;\r\n    margin: 20px auto;\r\n}\r\n\r\n.imagen_gracias h3{\r\n    font-size: 2em;\r\n}\r\n\r\n.banner_col {\r\n    margin-top: 50px;\r\n}\r\n\r\n}\r\n\r\n@media (max-width:650px){\r\ndiv.formcol {\r\n    display: block;\r\n}\r\n\r\ndiv.formcol input[type=number],\r\ndiv.formcol input[type=submit],\r\ndiv.formcol select,\r\ndiv.formcol label {\r\n    width:100%;\r\n}\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybWNvbC9mb3JtY29sLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsZ0lBQW9GO0lBQXBGLG9GQUFvRjtBQUN4Rjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBOztJQUVJLGNBQWM7SUFDZCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHVCQUFlO0lBQWYsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSx5QkFBeUI7SUFDekIsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtBQUN0Qjs7QUFHQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsdUJBQWU7SUFBZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsK0JBQStCO0lBQy9CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJO0lBQ0EsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTs7QUFFQTtBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTs7OztJQUlJLFVBQVU7QUFDZDs7QUFFQSIsImZpbGUiOiJzcmMvYXBwL2Zvcm1jb2wvZm9ybWNvbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm11bGFyaW9fY29sYWJvcmF7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjZmZmIDAlLCAjZmZmIDUwJSwgI2VlZSA1MCUsICNlZWUgMTAwJSk7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlvX2NvbGFib3JhIC5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDQwcHggMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDZweCAzcHggMzZweCAjOTI5MjkyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBtYXgtd2lkdGg6IDc1JTtcclxufVxyXG5cclxub3B0aW9uW2Rpc2FibGVkXXtcclxuICAgIGNvbG9yOiAjZTBlMGUwO1xyXG59XHJcblxyXG5kaXYuZm9ybWNvbCBpbnB1dFt0eXBlPW51bWJlcl0sXHJcbmRpdi5mb3JtY29sIHNlbGVjdHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTsgXHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmMDNjNzk7ICAgIFxyXG4gICAgY29sb3I6ICM2ZTZlNmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRyYW5zaXRpb246IC41czsgICBcclxufVxyXG5cclxuLmVycm9yIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBjb2xvcjogI2Y4ZmFmZjtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMzA5MzI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuZGl2LmZvcm1jb2wgaW5wdXRbdHlwZT1udW1iZXJdOmhvdmVyLFxyXG5kaXYuZm9ybWNvbCBzZWxlY3Q6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmN2Y3O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMyZDQwODQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcblxyXG5kaXYuZm9ybWNvbCBsYWJlbHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87ICAgIFxyXG4gICAgY29sb3I6ICM2ZTZlNmU7ICAgIFxyXG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICAgIGZvbnQtc2l6ZTogLjllbTtcclxufVxyXG5cclxubGFiZWwgLmZhcixsYWJlbCAuZmFzLGxhYmVsIC5mYSB7XHJcbiAgICBjb2xvcjogI2YwM2M3OTtcclxufVxyXG5cclxuZGl2LmZvcm1jb2wgaW5wdXRbdHlwZT1udW1iZXJdLFxyXG5kaXYuZm9ybWNvbCBzZWxlY3R7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmRpdi5mb3JtY29sIGlucHV0W3R5cGU9c3VibWl0XXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDQwODQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogNDglO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4MHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgIG1hcmdpbjogMTVweCBhdXRvO1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgIzJkNDA4NDtcclxuICAgIHRyYW5zaXRpb246IC41cztcclxufVxyXG5cclxuZGl2LmZvcm1jb2wgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwM2M3OTtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNmMDNjNzk7XHJcbn1cclxuXHJcbmRpdi5mb3JtY29sIGlucHV0W3R5cGU9bnVtYmVyXXtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLmltYWdlbl9ncmFjaWFzIGltZ3tcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uaW1hZ2VuX2dyYWNpYXMgaDN7XHJcbiAgICBmb250LXNpemU6IDRlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDUwcHggMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBjb2xvcjogIzJkNDA4NDtcclxufVxyXG5cclxuaW5wdXRbZGlzYWJsZWRde1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkyOTI5MiFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICM5MjkyOTIhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBuby1kcm9wIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KXtcclxuICAgIC5mb3JtdWxhcmlvX2NvbGFib3JhIC5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiA5NSU7ICAgIFxyXG59XHJcblxyXG4uZXJyb3J7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG59XHJcblxyXG4uaW1hZ2VuX2dyYWNpYXMgaDN7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxufVxyXG5cclxuLmJhbm5lcl9jb2wge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NjUwcHgpe1xyXG5kaXYuZm9ybWNvbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuZGl2LmZvcm1jb2wgaW5wdXRbdHlwZT1udW1iZXJdLFxyXG5kaXYuZm9ybWNvbCBpbnB1dFt0eXBlPXN1Ym1pdF0sXHJcbmRpdi5mb3JtY29sIHNlbGVjdCxcclxuZGl2LmZvcm1jb2wgbGFiZWwge1xyXG4gICAgd2lkdGg6MTAwJTtcclxufVxyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/formcol/formcol.component.ts":
/*!**********************************************!*\
  !*** ./src/app/formcol/formcol.component.ts ***!
  \**********************************************/
/*! exports provided: FormcolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormcolComponent", function() { return FormcolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _colabora_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../colabora.service */ "./src/app/colabora.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let FormcolComponent = class FormcolComponent {
    constructor(colaboraService, router) {
        this.colaboraService = colaboraService;
        this.router = router;
        this.formulario_colabora = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            cargo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            experiencia: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            tecnologia: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            sector: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            bruto: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
        });
    }
    onSubmit() {
        this.colaboraService.nuevo(this.formulario_colabora.value)
            .then(response => {
            if (response) {
                this.router.navigate(['/gracias']);
            }
        })
            .catch(err => {
            alert('Error en el registro. Inténtalo de nuevo más tarde.');
        });
    }
    ngOnInit() {
    }
};
FormcolComponent.ctorParameters = () => [
    { type: _colabora_service__WEBPACK_IMPORTED_MODULE_3__["ColaboraService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
FormcolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-formcol',
        template: __webpack_require__(/*! raw-loader!./formcol.component.html */ "./node_modules/raw-loader/index.js!./src/app/formcol/formcol.component.html"),
        styles: [__webpack_require__(/*! ./formcol.component.css */ "./src/app/formcol/formcol.component.css")]
    })
], FormcolComponent);



/***/ }),

/***/ "./src/app/formcomp/formcomp.component.css":
/*!*************************************************!*\
  !*** ./src/app/formcomp/formcomp.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".formulario {\r\n    padding-top: 20px;\r\n    padding-bottom: 90px;\r\n    background: -webkit-gradient(linear, left top, right bottom, from(#fff), color-stop(50%, #fff), color-stop(50%, #eee), to(#eee));\r\n    background: linear-gradient(to bottom right, #fff 0%, #fff 50%, #eee 50%, #eee 100%);\r\n}\r\n\r\n.formulario .container{\r\n    margin: 10px auto;\r\n    padding: 60px 20px;\r\n    box-shadow: 6px 3px 36px #929292;\r\n    border-radius: 25px;\r\n    background: #fff;\r\n    max-width: 75%;\r\n}\r\n\r\ndiv.formcol select{\r\n    display: block;\r\n    width: 50%;\r\n    margin: 5px auto;\r\n    font-size: 1.1em;\r\n    height: 50px;\r\n    outline: none; \r\n    margin-bottom: 50px;\r\n}\r\n\r\ndiv.formcol input[type=number]:hover,\r\ndiv.formcol select:hover{\r\n    background-color: #eee;\r\n}\r\n\r\noption[disabled]{\r\n    color: #e0e0e0;\r\n}\r\n\r\n.error {\r\n    width: 50%;\r\n    color: #f8faff;\r\n    margin: 20px auto;\r\n    background-color: crimson;\r\n    border: 1px solid #d30932;\r\n    padding: 10px 5px;\r\n    border-radius: 5px;\r\n}\r\n\r\ninput[disabled]{\r\n    background-color: #929292!important;\r\n    border-color: #929292!important;\r\n    cursor: no-drop!important;\r\n}\r\n\r\nform select, input {\r\n    border: none;\r\n    border-bottom: 3px solid #f03c79;    \r\n    color: #6e6e6e;\r\n    font-weight: bold;\r\n    margin: 0 auto;\r\n    margin-bottom: 40px;\r\n    width: 50%;\r\n}\r\n\r\nlabel{\r\n    display: block;\r\n    width: 50%;\r\n    margin: 0px auto;    \r\n    color: #6e6e6e;    \r\n    padding-bottom: 4px;\r\n    font-size: .9em;\r\n    width: 50%;\r\n}\r\n\r\nlabel .fas, label .fa, label .far {\r\n    color: #f03c79;\r\n}\r\n\r\n.formulario select{    \r\n    font-size: 1.1em;\r\n    height: 60px;\r\n    outline: none;\r\n    display: block;\r\n    padding-left: 10px;\r\n    -webkit-transition: .5s;\r\n    transition: .5s;\r\n}\r\n\r\n.formulario select:hover{\r\n    cursor: pointer;\r\n    background-color: #f8f7f7;\r\n    border-bottom: 3px solid #2d4084;\r\n    padding-left: 15px;\r\n}\r\n\r\ninput[type=\"submit\"] {\r\n    font-weight: 800;\r\n    font-size: 1.2em;\r\n    background-color: #2d4084;\r\n    border: none;\r\n    color: white;\r\n    padding: 17px 20px;\r\n    border-radius: 31px;\r\n    -webkit-transition: .5s;\r\n    transition: .5s;\r\n    height: 60px;\r\n    outline: none;\r\n    display: block;\r\n    margin: 0 auto;  \r\n}\r\n\r\ninput[type=\"submit\"]:hover{\r\n    background-color: #f03c79;\r\n    cursor: pointer;\r\n}\r\n\r\n.container.res {\r\n    margin: 50px auto;\r\n}\r\n\r\n.resultados {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n\r\n.container.res h2 {\r\n    text-align: center;\r\n    padding: 20px 50px 60px;\r\n    font-size: 2em;\r\n    font-weight: bold;\r\n    color: #6e6e6e;\r\n}\r\n\r\n.resultados h3 {\r\n    color: #6e6e6e;\r\n    font-size: 1.5em;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.resultados h4 {\r\n    font-weight: 800;\r\n    font-size: 2em;\r\n    color: #2d4084;\r\n    padding-bottom: 30px;\r\n}\r\n\r\n@media (max-width: 1080px){\r\n.formulario select{    \r\n    border-width: 3px;\r\n    font-size: 1em;\r\n    font-weight: normal;\r\n    margin: 0px auto;\r\n    margin-bottom: 50px;\r\n}\r\n}\r\n\r\n@media (max-width: 900px){\r\n\r\n.formulario .container{\r\n    max-width: 95%;\r\n}\r\n\r\n.error{\r\n    width: 100%;\r\n    color: red;\r\n    margin: 20px auto;\r\n}\r\n\r\n.formulario .container form {   \r\n    display: block;   \r\n}\r\n\r\n.formulario select {\r\n    border-width: 3px;\r\n    font-size: 1.2em;\r\n    margin: 0px auto;\r\n    margin-bottom: 50px;\r\n    width: 100%;\r\n}\r\n\r\nlabel{\r\n    display: block;\r\n    width: 100%;\r\n    margin: 0px auto;\r\n}\r\n\r\ninput[type=\"submit\"] {\r\n    font-weight: 800;\r\n    font-size: 1.4em;\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\n}\r\n\r\n@media (max-width: 600px){\r\n.resultados {    \r\n    display: block;    \r\n}\r\n\r\n}\r\n\r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybWNvbXAvZm9ybWNvbXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFFcEIsZ0lBQW9GO0lBQXBGLG9GQUFvRjtBQUN4Rjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLCtCQUErQjtJQUMvQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztJQUNkLGtCQUFrQjtJQUNsQix1QkFBZTtJQUFmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUNoQyxrQkFBa0I7QUFDdEI7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsdUJBQWU7SUFBZixlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2QsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsY0FBYztJQUNkLG9CQUFvQjtBQUN4Qjs7QUFFQTtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBOztBQUVBOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTs7QUFFQTtBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQSIsImZpbGUiOiJzcmMvYXBwL2Zvcm1jb21wL2Zvcm1jb21wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybXVsYXJpbyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA5MHB4O1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCBib3R0b20sIGZyb20oI2ZmZiksIGNvbG9yLXN0b3AoNTAlLCAjZmZmKSwgY29sb3Itc3RvcCg1MCUsICNlZWUpLCB0bygjZWVlKSk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjZmZmIDAlLCAjZmZmIDUwJSwgI2VlZSA1MCUsICNlZWUgMTAwJSk7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlvIC5jb250YWluZXJ7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDYwcHggMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDZweCAzcHggMzZweCAjOTI5MjkyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBtYXgtd2lkdGg6IDc1JTtcclxufVxyXG5cclxuZGl2LmZvcm1jb2wgc2VsZWN0e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lOyBcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbmRpdi5mb3JtY29sIGlucHV0W3R5cGU9bnVtYmVyXTpob3ZlcixcclxuZGl2LmZvcm1jb2wgc2VsZWN0OmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxufVxyXG5cclxub3B0aW9uW2Rpc2FibGVkXXtcclxuICAgIGNvbG9yOiAjZTBlMGUwO1xyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGNvbG9yOiAjZjhmYWZmO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QzMDkzMjtcclxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5pbnB1dFtkaXNhYmxlZF17XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTI5MjkyIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogIzkyOTI5MiFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IG5vLWRyb3AhaW1wb3J0YW50O1xyXG59XHJcblxyXG5mb3JtIHNlbGVjdCwgaW5wdXQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmMDNjNzk7ICAgIFxyXG4gICAgY29sb3I6ICM2ZTZlNmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbmxhYmVse1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bzsgICAgXHJcbiAgICBjb2xvcjogIzZlNmU2ZTsgICAgXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gICAgZm9udC1zaXplOiAuOWVtO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxubGFiZWwgLmZhcywgbGFiZWwgLmZhLCBsYWJlbCAuZmFyIHtcclxuICAgIGNvbG9yOiAjZjAzYzc5O1xyXG59XHJcblxyXG4uZm9ybXVsYXJpbyBzZWxlY3R7ICAgIFxyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHRyYW5zaXRpb246IC41cztcclxufSBcclxuXHJcbi5mb3JtdWxhcmlvIHNlbGVjdDpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY3Zjc7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzJkNDA4NDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG5cclxuXHJcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQ0MDg0O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTdweCAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzFweDtcclxuICAgIHRyYW5zaXRpb246IC41cztcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvOyAgXHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjAzYzc5O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVyLnJlcyB7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0bztcclxufVxyXG5cclxuLnJlc3VsdGFkb3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4uY29udGFpbmVyLnJlcyBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDUwcHggNjBweDtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzZlNmU2ZTtcclxufVxyXG5cclxuLnJlc3VsdGFkb3MgaDMge1xyXG4gICAgY29sb3I6ICM2ZTZlNmU7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5yZXN1bHRhZG9zIGg0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGNvbG9yOiAjMmQ0MDg0O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDgwcHgpe1xyXG4uZm9ybXVsYXJpbyBzZWxlY3R7ICAgIFxyXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpe1xyXG5cclxuLmZvcm11bGFyaW8gLmNvbnRhaW5lcntcclxuICAgIG1heC13aWR0aDogOTUlO1xyXG59XHJcblxyXG4uZXJyb3J7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxufVxyXG5cclxuLmZvcm11bGFyaW8gLmNvbnRhaW5lciBmb3JtIHsgICBcclxuICAgIGRpc3BsYXk6IGJsb2NrOyAgIFxyXG59XHJcblxyXG4uZm9ybXVsYXJpbyBzZWxlY3Qge1xyXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubGFiZWx7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCl7XHJcbi5yZXN1bHRhZG9zIHsgICAgXHJcbiAgICBkaXNwbGF5OiBibG9jazsgICAgXHJcbn1cclxuXHJcbn1cclxuXHJcblxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/formcomp/formcomp.component.ts":
/*!************************************************!*\
  !*** ./src/app/formcomp/formcomp.component.ts ***!
  \************************************************/
/*! exports provided: FormcompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormcompComponent", function() { return FormcompComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _compara_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../compara.service */ "./src/app/compara.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let FormcompComponent = class FormcompComponent {
    constructor(comparaService, router) {
        this.comparaService = comparaService;
        this.router = router;
        this.salario_medio = 0;
        this.datos_devs = [];
        this.formulario_solicitud = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            cargo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            experiencia: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            tecnologia: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
        });
    }
    onSubmit() {
        this.comparaService.comparar(this.formulario_solicitud.value)
            .then(response => {
            this.salario_medio = response[0][0]['salario_medio'];
            this.datos_devs = response[1][0];
            this.datos_totales = response[1];
            if (this.salario_medio == null) {
                this.no_results = 'Lo sentimos, no hay resultados para tu búsqueda :\'(';
            }
            else {
                this.no_results = '';
            }
        })
            .catch(err => {
            this.no_results = 'Lo sentimos, ocurrió un error enviando el formulario, inténtalo de nuevo más tarde';
        });
    }
    scroll(element) {
        element.scrollIntoView();
    }
    ngOnInit() {
    }
};
FormcompComponent.ctorParameters = () => [
    { type: _compara_service__WEBPACK_IMPORTED_MODULE_3__["ComparaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
FormcompComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-formcomp',
        template: __webpack_require__(/*! raw-loader!./formcomp.component.html */ "./node_modules/raw-loader/index.js!./src/app/formcomp/formcomp.component.html"),
        styles: [__webpack_require__(/*! ./formcomp.component.css */ "./src/app/formcomp/formcomp.component.css")]
    })
], FormcompComponent);



/***/ }),

/***/ "./src/app/gracias/gracias.component.css":
/*!***********************************************!*\
  !*** ./src/app/gracias/gracias.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imagen_gracias{\r\n    margin-top:25px;\r\n    background-image: url('earnit-gracias.jpg');\r\n    background-size: cover;\r\n    padding: 150px 0;\r\n}\r\n\r\n.imagen_gracias hr{\r\n    width: 250px;\r\n    display: block;\r\n    border: 3px solid #F03C79;\r\n}\r\n\r\n.imagen_gracias h3{\r\n    font-size: 4em;\r\n    padding: 35px 0;\r\n    font-weight: 800;\r\n    color: #2d4084;\r\n    max-width: 60%;\r\n    line-height: 1.5em;\r\n}\r\n\r\n.imagen_gracias h4{\r\n    font-size: 2em;\r\n    margin-top: 25px;\r\n    color: #6e6e6e;\r\n    max-width: 60%;\r\n}\r\n\r\n.imagen_gracias .boton{\r\n    background: transparent -webkit-gradient(linear, left top, right top, from(#2D4085), to(#4155A2)) 0% 0% no-repeat padding-box;\r\n    background: transparent linear-gradient(90deg, #2D4085 0%, #4155A2 100%) 0% 0% no-repeat padding-box;\r\n    border-radius: 45px;\r\n    color: white;\r\n    padding: 20px 30px;\r\n    display: inline-block;\r\n    margin-top: 40px;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-weight: 800;\r\n    margin-bottom: 50px;\r\n    -webkit-transition: .5s;\r\n    transition: .5s;\r\n}\r\n\r\n.imagen_gracias .boton:hover{\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n}\r\n\r\n@media (max-width: 900px){\r\n    \r\n.imagen_gracias h3{\r\n    font-size: 2.5em;\r\n}\r\n\r\n.banner_col {\r\n    margin-top: 50px;\r\n}\r\n\r\n}\r\n\r\n@media (max-width: 800px){\r\n\r\n.imagen_gracias h3, .imagen_gracias h4{    \r\n    max-width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.imagen_gracias h4{\r\n    color: #333;\r\n}\r\n\r\n.imagen_gracias hr{\r\n    margin: auto;\r\n}\r\n\r\n.imagen_gracias .boton{\r\n    margin: 30px auto;\r\n    display: block;\r\n    max-width: 270px;\r\n    text-align: center;\r\n}\r\n\r\n.imagen_gracias{   \r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JhY2lhcy9ncmFjaWFzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsMkNBQTBEO0lBQzFELHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsY0FBYztBQUNsQjs7QUFFQTtJQUVJLDZIQUFvRztJQUFwRyxvR0FBb0c7SUFDcEcsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDZCQUFxQjtZQUFyQixxQkFBcUI7QUFDekI7O0FBRUE7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0FBRUE7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QiwyQkFBMkI7QUFDL0I7O0FBRUEiLCJmaWxlIjoic3JjL2FwcC9ncmFjaWFzL2dyYWNpYXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZW5fZ3JhY2lhc3tcclxuICAgIG1hcmdpbi10b3A6MjVweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1nL2Vhcm5pdC1ncmFjaWFzLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcGFkZGluZzogMTUwcHggMDtcclxufVxyXG5cclxuLmltYWdlbl9ncmFjaWFzIGhye1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjRjAzQzc5O1xyXG59XHJcblxyXG4uaW1hZ2VuX2dyYWNpYXMgaDN7XHJcbiAgICBmb250LXNpemU6IDRlbTtcclxuICAgIHBhZGRpbmc6IDM1cHggMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBjb2xvcjogIzJkNDA4NDtcclxuICAgIG1heC13aWR0aDogNjAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG59XHJcblxyXG4uaW1hZ2VuX2dyYWNpYXMgaDR7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBjb2xvcjogIzZlNmU2ZTtcclxuICAgIG1heC13aWR0aDogNjAlO1xyXG59XHJcblxyXG4uaW1hZ2VuX2dyYWNpYXMgLmJvdG9ue1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20oIzJENDA4NSksIHRvKCM0MTU1QTIpKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMyRDQwODUgMCUsICM0MTU1QTIgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjVzO1xyXG4gICAgdHJhbnNpdGlvbjogLjVzO1xyXG59XHJcblxyXG4uaW1hZ2VuX2dyYWNpYXMgLmJvdG9uOmhvdmVye1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpe1xyXG4gICAgXHJcbi5pbWFnZW5fZ3JhY2lhcyBoM3tcclxuICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbn1cclxuXHJcbi5iYW5uZXJfY29sIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCl7XHJcblxyXG4uaW1hZ2VuX2dyYWNpYXMgaDMsIC5pbWFnZW5fZ3JhY2lhcyBoNHsgICAgXHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbWFnZW5fZ3JhY2lhcyBoNHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4uaW1hZ2VuX2dyYWNpYXMgaHJ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5pbWFnZW5fZ3JhY2lhcyAuYm90b257XHJcbiAgICBtYXJnaW46IDMwcHggYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWF4LXdpZHRoOiAyNzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmltYWdlbl9ncmFjaWFzeyAgIFxyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/gracias/gracias.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gracias/gracias.component.ts ***!
  \**********************************************/
/*! exports provided: GraciasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraciasComponent", function() { return GraciasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GraciasComponent = class GraciasComponent {
    constructor() { }
    ngOnInit() {
    }
};
GraciasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gracias',
        template: __webpack_require__(/*! raw-loader!./gracias.component.html */ "./node_modules/raw-loader/index.js!./src/app/gracias/gracias.component.html"),
        styles: [__webpack_require__(/*! ./gracias.component.css */ "./src/app/gracias/gracias.component.css")]
    })
], GraciasComponent);



/***/ }),

/***/ "./src/app/hero/hero.component.css":
/*!*****************************************!*\
  !*** ./src/app/hero/hero.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hero{\r\n    background-image: url('comparador-sueldos-it-hero.jpg');\r\n    background-size: cover;\r\n    background-position: top;\r\n}\r\n\r\n.hero h1{\r\n    color: white;\r\n    font-weight: 800;\r\n    max-width: 800px;\r\n    font-size: 4em;\r\n    padding-top: 100px;\r\n    margin-bottom: 30px;\r\n    line-height: 1.2em;\r\n}\r\n\r\n.hero h2{\r\n    color: white;    \r\n    max-width: 800px;\r\n    font-size: 2em;    \r\n    margin-bottom: 30px;\r\n    font-weight: 300;\r\n    line-height: 1.3em;\r\n}\r\n\r\n.boton{\r\n    background: transparent -webkit-gradient(linear, left top, right top, from(#2D4085), to(#4155A2)) 0% 0% no-repeat padding-box;\r\n    background: transparent linear-gradient(90deg, #2D4085 0%, #4155A2 100%) 0% 0% no-repeat padding-box;\r\n    border-radius: 45px;\r\n    color: white;\r\n    padding: 20px 30px;\r\n    display: inline-block;\r\n    margin-top: 15px;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-weight: 800;\r\n    margin-bottom: 190px;\r\n    -webkit-transition: .5s;\r\n    transition: .5s;\r\n}\r\n\r\n.boton:hover{\r\n-webkit-transform: scale(1.1);\r\n        transform: scale(1.1);\r\ncursor: pointer;\r\n}\r\n\r\n@media (max-width: 900px){\r\n\r\n.hero h1{\r\n    font-size: 3.4em;\r\n}\r\n\r\n.hero h2 {\r\n    color: white;\r\n    max-width: 670px;\r\n    font-size: 1.7em;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n\r\n}\r\n\r\n@media (max-width: 500px){\r\n\r\n.hero h1 {\r\n    font-size: 2.8em;\r\n}\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyby9oZXJvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1REFBc0U7SUFDdEUsc0JBQXNCO0lBQ3RCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksNkhBQW9HO0lBQXBHLG9HQUFvRztJQUNwRyxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLHVCQUFlO0lBQWYsZUFBZTtBQUNuQjs7QUFFQTtBQUNBLDZCQUFxQjtRQUFyQixxQkFBcUI7QUFDckIsZUFBZTtBQUNmOztBQUVBOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOzs7QUFHQTs7QUFFQTs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQSIsImZpbGUiOiJzcmMvYXBwL2hlcm8vaGVyby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlcm97XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9jb21wYXJhZG9yLXN1ZWxkb3MtaXQtaGVyby5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxufVxyXG5cclxuLmhlcm8gaDF7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgIGZvbnQtc2l6ZTogNGVtO1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcclxufVxyXG5cclxuLmhlcm8gaDJ7XHJcbiAgICBjb2xvcjogd2hpdGU7ICAgIFxyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgIGZvbnQtc2l6ZTogMmVtOyAgICBcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuM2VtO1xyXG59XHJcblxyXG4uYm90b257XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMyRDQwODUgMCUsICM0MTU1QTIgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTkwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAuNXM7XHJcbn1cclxuXHJcbi5ib3Rvbjpob3ZlcntcclxudHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCl7XHJcblxyXG4uaGVybyBoMXtcclxuICAgIGZvbnQtc2l6ZTogMy40ZW07XHJcbn1cclxuXHJcbi5oZXJvIGgyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1heC13aWR0aDogNjcwcHg7XHJcbiAgICBmb250LXNpemU6IDEuN2VtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCl7XHJcblxyXG4uaGVybyBoMSB7XHJcbiAgICBmb250LXNpemU6IDIuOGVtO1xyXG59XHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/hero/hero.component.ts":
/*!****************************************!*\
  !*** ./src/app/hero/hero.component.ts ***!
  \****************************************/
/*! exports provided: HeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroComponent", function() { return HeroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeroComponent = class HeroComponent {
    constructor() { }
    ngOnInit() {
    }
    scroll(element) {
        element.scrollIntoView();
    }
};
HeroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hero',
        template: __webpack_require__(/*! raw-loader!./hero.component.html */ "./node_modules/raw-loader/index.js!./src/app/hero/hero.component.html"),
        styles: [__webpack_require__(/*! ./hero.component.css */ "./src/app/hero/hero.component.css")]
    })
], HeroComponent);



/***/ }),

/***/ "./src/app/index/index.component.css":
/*!*******************************************!*\
  !*** ./src/app/index/index.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZGV4L2luZGV4LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IndexComponent = class IndexComponent {
    constructor() { }
    ngOnInit() {
    }
};
IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-index',
        template: __webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/index.js!./src/app/index/index.component.html"),
        styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/index/index.component.css")]
    })
], IndexComponent);



/***/ }),

/***/ "./src/app/logos/logos.component.css":
/*!*******************************************!*\
  !*** ./src/app/logos/logos.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logos{\r\n    background-color: #F8FAFF;\r\n    padding: 25px 0;\r\n}\r\n\r\n.lista_logos{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n\r\n.lista_logos img{\r\n    -webkit-filter: grayscale(100);\r\n            filter: grayscale(100);\r\n    opacity: .7;\r\n    -webkit-transition: .3s;\r\n    transition: .3s;\r\n    width: 60%;\r\n}\r\n\r\n.lista_logos img:hover{\r\n    -webkit-filter: grayscale(0);\r\n            filter: grayscale(0);\r\n    opacity: .9;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nb3MvbG9nb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsdUJBQWU7SUFBZixlQUFlO0lBQ2YsVUFBVTtBQUNkOztBQUVBO0lBQ0ksNEJBQW9CO1lBQXBCLG9CQUFvQjtJQUNwQixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9sb2dvcy9sb2dvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ29ze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RkFGRjtcclxuICAgIHBhZGRpbmc6IDI1cHggMDtcclxufVxyXG5cclxuLmxpc3RhX2xvZ29ze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4ubGlzdGFfbG9nb3MgaW1ne1xyXG4gICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwKTtcclxuICAgIG9wYWNpdHk6IC43O1xyXG4gICAgdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuLmxpc3RhX2xvZ29zIGltZzpob3ZlcntcclxuICAgIGZpbHRlcjogZ3JheXNjYWxlKDApO1xyXG4gICAgb3BhY2l0eTogLjk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/logos/logos.component.ts":
/*!******************************************!*\
  !*** ./src/app/logos/logos.component.ts ***!
  \******************************************/
/*! exports provided: LogosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogosComponent", function() { return LogosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LogosComponent = class LogosComponent {
    constructor() { }
    ngOnInit() {
    }
};
LogosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logos',
        template: __webpack_require__(/*! raw-loader!./logos.component.html */ "./node_modules/raw-loader/index.js!./src/app/logos/logos.component.html"),
        styles: [__webpack_require__(/*! ./logos.component.css */ "./src/app/logos/logos.component.css")]
    })
], LogosComponent);



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu .container {\r\n    max-width: 1100px;\r\n    padding: 0 15px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n\r\n.menu{\r\n    background: -webkit-gradient(linear, left top, right top, from(#f03c79) , to(#2d4084));\r\n    background: linear-gradient(90deg, #f03c79 , #2d4084);\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    z-index: 1000;\r\n}\r\n\r\n.navmenu ul li {\r\n    display: inline-block;\r\n    padding: 20px 15px;\r\n}\r\n\r\n.navmenu ul li a{\r\n    color: white;\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    letter-spacing: 1px;\r\n    font-family: 'Open Sans', sans-serif;\r\n    -webkit-transition: .5s;\r\n    transition: .5s;\r\n}\r\n\r\n.navmenu ul li a:hover{\r\n    color: #F03C79;    \r\n}\r\n\r\n.logo {\r\n    margin-top: 0px;\r\n}\r\n\r\n@media (max-width:650px){\r\n\r\n.menu {    \r\n    padding-bottom: 10px;   \r\n}\r\n\r\n.logo {\r\n    margin-top: 10px;\r\n}\r\n\r\n.menu .container {    \r\n    display: -webkit-box;    \r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;   \r\n}\r\n\r\n.btn_menu_res div{\r\n    width: 30px;\r\n    height: 3px;\r\n    background: white;\r\n    margin: 5px auto;\r\n}\r\n\r\n.btn_menu_res{\r\n    border: 3px solid white;\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    padding-top: 7px;\r\n    -webkit-transition: .5s;\r\n    transition: .5s;\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px; \r\n}\r\n\r\n.navmenu ul{\r\n        display: none;\r\n}\r\n.navmenu ul li {\r\n    display: block;\r\n    padding: 10px 15px;\r\n    background-color: white;\r\n    text-align: center;\r\n    border-bottom: 1px solid grey;\r\n}\r\n\r\n.navmenu ul li a{\r\n    color: #2D4084;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: block;\r\n}\r\n\r\n.logo {\r\n    display: block;\r\n    margin-left: 5px;\r\n    width: 200px;\r\n}\r\n\r\n.visible{\r\n    display: block!important;\r\n   \r\n}\r\n\r\n.navmenu ul{\r\n    position: absolute;\r\n    top: 60px;\r\n    right: 40px;\r\n    width: 70%;\r\n    z-index: 1; \r\n}\r\n\r\n.navmenu ul li{\r\n    padding: 15px 0;\r\n}\r\n\r\n.navmenu ul li a{\r\n    height: 100%;\r\n    width: 100%;\r\n    font-size: 1.2em;\r\n}\r\n\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUE4QjtZQUE5Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxzRkFBcUQ7SUFBckQscURBQXFEO0lBQ3JELGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsdUJBQWU7SUFBZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBR0E7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBOEI7WUFBOUIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQix1QkFBZTtJQUFmLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7QUFDZDs7QUFFQTtRQUNRLGFBQWE7QUFDckI7QUFDQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksd0JBQXdCOztBQUU1Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLFVBQVU7SUFDVixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7OztBQUdBIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudSAuY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMTEwMHB4O1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLm1lbnV7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmMDNjNzkgLCAjMmQ0MDg0KTtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxufVxyXG5cclxuLm5hdm1lbnUgdWwgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMjBweCAxNXB4O1xyXG59XHJcblxyXG4ubmF2bWVudSB1bCBsaSBhe1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIHRyYW5zaXRpb246IC41cztcclxufVxyXG5cclxuLm5hdm1lbnUgdWwgbGkgYTpob3ZlcntcclxuICAgIGNvbG9yOiAjRjAzQzc5OyAgICBcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NjUwcHgpe1xyXG5cclxuLm1lbnUgeyAgICBcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4OyAgIFxyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ubWVudSAuY29udGFpbmVyIHsgICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAgIFxyXG59XHJcblxyXG4uYnRuX21lbnVfcmVzIGRpdntcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbn1cclxuXHJcbi5idG5fbWVudV9yZXN7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcGFkZGluZy10b3A6IDdweDtcclxuICAgIHRyYW5zaXRpb246IC41cztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgcmlnaHQ6IDVweDsgXHJcbn1cclxuXHJcbi5uYXZtZW51IHVse1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLm5hdm1lbnUgdWwgbGkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xyXG59XHJcblxyXG4ubmF2bWVudSB1bCBsaSBhe1xyXG4gICAgY29sb3I6ICMyRDQwODQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi52aXNpYmxle1xyXG4gICAgZGlzcGxheTogYmxvY2shaW1wb3J0YW50O1xyXG4gICBcclxufVxyXG5cclxuLm5hdm1lbnUgdWx7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDYwcHg7XHJcbiAgICByaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICB6LWluZGV4OiAxOyBcclxufVxyXG5cclxuLm5hdm1lbnUgdWwgbGl7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbn1cclxuXHJcbi5uYXZtZW51IHVsIGxpIGF7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbn1cclxuXHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MenuComponent = class MenuComponent {
    constructor() {
        this.estadobtn = false;
    }
    cambiaestado() {
        this.estadobtn = !this.estadobtn;
    }
    ngOnInit() {
    }
};
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/menu/menu.component.html"),
        styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
    })
], MenuComponent);



/***/ }),

/***/ "./src/app/presentacion/presentacion.component.css":
/*!*********************************************************!*\
  !*** ./src/app/presentacion/presentacion.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container.pres_index {\r\n    padding: 50px;\r\n    margin-top: -75px;\r\n    margin-bottom: 50px;\r\n    background-color: white;\r\n    box-shadow: 6px 3px 36px #929292;\r\n    border-radius: 25px;\r\n    max-width: 95%;\r\n}\r\n\r\n.pres_index h3 {\r\n    text-align: center;\r\n    font-size: 2.5em;\r\n    color: #2D4084;\r\n    margin: 10px 0;\r\n}\r\n\r\n.pres_index h3 span{   \r\n    font-weight: 800;    \r\n}\r\n\r\n.pres_index hr {\r\n    width: 250px;\r\n    border: 3px solid #F03C79;\r\n    margin-top: 20px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.pres_index p {\r\n    font-size: 1.2em;\r\n    text-align: center;\r\n    margin: 40px auto;\r\n    max-width: 900px;\r\n    color: #6a7692;\r\n    padding-bottom: 25px;\r\n    line-height: 1.5em;\r\n}\r\n\r\n.pres_index .icons{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    max-width: 900px;\r\n    margin:0 auto;\r\n}\r\n\r\n.single_icon img {\r\n    max-width: 60px;\r\n}\r\n\r\n.pres_index .icons h4{\r\n    text-align: left;\r\n    font-size: 1.3em;\r\n    font-weight: bold;\r\n    margin-top: 15px;\r\n    color: #696969;\r\n}\r\n\r\n.pres_index .icons p{\r\n    color: #6a7692;\r\n    font-size: 0.9em;\r\n    line-height: 1.5em;\r\n    text-align: left;\r\n    margin-top: 20px;\r\n}\r\n\r\n.pres_index .icons .single_icon{\r\n    padding: 8px;\r\n}\r\n\r\n@media (max-width: 650px){\r\n.pres_index .icons {\r\n    display: -webkit-box;\r\n    display: block;\r\n    margin: 0 auto;\r\n}\r\n\r\n.pres_index .icons p {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlc2VudGFjaW9uL3ByZXNlbnRhY2lvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGdDQUFnQztJQUNoQyxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBIiwiZmlsZSI6InNyYy9hcHAvcHJlc2VudGFjaW9uL3ByZXNlbnRhY2lvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci5wcmVzX2luZGV4IHtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNzVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDZweCAzcHggMzZweCAjOTI5MjkyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIG1heC13aWR0aDogOTUlO1xyXG59XHJcblxyXG4ucHJlc19pbmRleCBoMyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIuNWVtO1xyXG4gICAgY29sb3I6ICMyRDQwODQ7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxufVxyXG5cclxuLnByZXNfaW5kZXggaDMgc3BhbnsgICBcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7ICAgIFxyXG59XHJcblxyXG4ucHJlc19pbmRleCBociB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjRjAzQzc5O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ucHJlc19pbmRleCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDQwcHggYXV0bztcclxuICAgIG1heC13aWR0aDogOTAwcHg7XHJcbiAgICBjb2xvcjogIzZhNzY5MjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG59XHJcblxyXG4ucHJlc19pbmRleCAuaWNvbnN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWF4LXdpZHRoOiA5MDBweDtcclxuICAgIG1hcmdpbjowIGF1dG87XHJcbn1cclxuXHJcbi5zaW5nbGVfaWNvbiBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiA2MHB4O1xyXG59XHJcblxyXG4ucHJlc19pbmRleCAuaWNvbnMgaDR7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGNvbG9yOiAjNjk2OTY5O1xyXG59XHJcblxyXG4ucHJlc19pbmRleCAuaWNvbnMgcHtcclxuICAgIGNvbG9yOiAjNmE3NjkyO1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ucHJlc19pbmRleCAuaWNvbnMgLnNpbmdsZV9pY29ue1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpe1xyXG4ucHJlc19pbmRleCAuaWNvbnMge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ucHJlc19pbmRleCAuaWNvbnMgcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/presentacion/presentacion.component.ts":
/*!********************************************************!*\
  !*** ./src/app/presentacion/presentacion.component.ts ***!
  \********************************************************/
/*! exports provided: PresentacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentacionComponent", function() { return PresentacionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PresentacionComponent = class PresentacionComponent {
    constructor() { }
    ngOnInit() {
    }
};
PresentacionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-presentacion',
        template: __webpack_require__(/*! raw-loader!./presentacion.component.html */ "./node_modules/raw-loader/index.js!./src/app/presentacion/presentacion.component.html"),
        styles: [__webpack_require__(/*! ./presentacion.component.css */ "./src/app/presentacion/presentacion.component.css")]
    })
], PresentacionComponent);



/***/ }),

/***/ "./src/app/tablaresultados/tablaresultados.component.css":
/*!***************************************************************!*\
  !*** ./src/app/tablaresultados/tablaresultados.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\ntable{\r\n    width: 100%;\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n    background: #4801ff;\r\n    background: linear-gradient(-68deg, #f03c79 , #2d4084);\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 1.2em;\r\n    margin: 50px 0;\r\n}\r\n\r\ntable tr{\r\n    border-top: 1px solid #fafafa;\r\n}\r\n\r\ntable th{\r\n    padding: 15px;\r\n    background-color: #2d4084;\r\n    font-weight: bold;\r\n}\r\n\r\ntable td{\r\n    padding: 20px 10px;\r\n}\r\n\r\ntable td:hover, table tr:hover,table th:hover{\r\n    background-color: rgba(255, 255, 255, 0.25);\r\n}\r\n\r\n.tabla_res h3 {\r\n    font-size: 2em;\r\n    color: #f03c79;\r\n    margin-top: 15px;\r\n}\r\n\r\nh3.no_res {\r\n    font-size: 2em;\r\n    margin: 60px 0;\r\n    color: #2d4084;\r\n    text-align: center;\r\n}\r\n\r\n@media (max-width: 900px){\r\n    table td {\r\n        padding: 20px 5px;\r\n}\r\n}\r\n\r\n@media (max-width: 800px){\r\n    table{\r\n        display: none;\r\n    }\r\n\r\n    .tabla_res h3 {\r\n        display: none;\r\n}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGFyZXN1bHRhZG9zL3RhYmxhcmVzdWx0YWRvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFJbkIsc0RBQXNEO0lBQ3RELFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7QUFDekI7QUFDQTs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7QUFDckI7QUFDQSIsImZpbGUiOiJzcmMvYXBwL3RhYmxhcmVzdWx0YWRvcy90YWJsYXJlc3VsdGFkb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxudGFibGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDgwMWZmO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTY4ZGVnLCAjZjAzYzc5ICwgIzJkNDA4NCk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoLTY4ZGVnLCAjZjAzYzc5ICwgIzJkNDA4NCk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgtNjhkZWcsICNmMDNjNzkgLCAjMmQ0MDg0KTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNjhkZWcsICNmMDNjNzkgLCAjMmQ0MDg0KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBtYXJnaW46IDUwcHggMDtcclxufVxyXG5cclxudGFibGUgdHJ7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZhZmFmYTtcclxufVxyXG5cclxudGFibGUgdGh7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkNDA4NDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG50YWJsZSB0ZHtcclxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcclxufVxyXG5cclxudGFibGUgdGQ6aG92ZXIsIHRhYmxlIHRyOmhvdmVyLHRhYmxlIHRoOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcclxufVxyXG5cclxuLnRhYmxhX3JlcyBoMyB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGNvbG9yOiAjZjAzYzc5O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuaDMubm9fcmVzIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgbWFyZ2luOiA2MHB4IDA7XHJcbiAgICBjb2xvcjogIzJkNDA4NDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KXtcclxuICAgIHRhYmxlIHRkIHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDVweDtcclxufVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpe1xyXG4gICAgdGFibGV7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAudGFibGFfcmVzIGgzIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tablaresultados/tablaresultados.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/tablaresultados/tablaresultados.component.ts ***!
  \**************************************************************/
/*! exports provided: TablaresultadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablaresultadosComponent", function() { return TablaresultadosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TablaresultadosComponent = class TablaresultadosComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TablaresultadosComponent.prototype, "datos_totales", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TablaresultadosComponent.prototype, "no_results", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TablaresultadosComponent.prototype, "salario_medio", void 0);
TablaresultadosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tablaresultados',
        template: __webpack_require__(/*! raw-loader!./tablaresultados.component.html */ "./node_modules/raw-loader/index.js!./src/app/tablaresultados/tablaresultados.component.html"),
        styles: [__webpack_require__(/*! ./tablaresultados.component.css */ "./src/app/tablaresultados/tablaresultados.component.css")]
    })
], TablaresultadosComponent);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\javie\Desktop\NEOLAND\ProyectoEarnIT\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map