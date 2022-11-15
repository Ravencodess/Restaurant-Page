/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/general.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/general.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/Hogwarts_PM_B3C8M1_GreatHallHalloweenWithGhostsAndStudents_Moment.jpg */ "./src/assets/Hogwarts_PM_B3C8M1_GreatHallHalloweenWithGhostsAndStudents_Moment.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/v4vkca46vxi71.webp */ "./src/assets/v4vkca46vxi71.webp"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --clr-accent-400: #000A90;\r\n    --clr-accent-100: #ee9818;\r\n    --clr-accent-500: #4d1a00;\r\n\r\n    --clr-home-400: #002b5b;\r\n    --clr-home-300: #00344e;\r\n}\r\n\r\n*,\r\n*::after,\r\n*::before {\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n\r\n.title-container{\r\n    display: flex;\r\n}\r\n\r\n.title-container img{\r\n    width: 50px;\r\n}\r\n\r\n.header {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    width: 100%;\r\n    min-height: 20vh;\r\n    text-align: center;\r\n    background-color: var(--clr-accent-400);\r\n    border-bottom: 1px solid var(--clr-accent-500);\r\n    \r\n}\r\n\r\n.header h1 {\r\n    font-family: 'Permanent Marker', cursive;\r\n    font-size: 2.5rem;\r\n    color: var(--clr-accent-100);\r\n}\r\n\r\n.nav {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 30%;\r\n}\r\n\r\n.nav-item{\r\n    cursor: pointer;\r\n}\r\n\r\n[data-nav] {\r\n    transition: transform 0.3s;\r\n    padding-bottom: 6px;\r\n    color: var(--clr-accent-100);\r\n}\r\n\r\n[data-nav]:hover {\r\n    transform: translateY(-10%);\r\n}\r\n\r\n[data-nav].active {\r\n    border-bottom: 2px solid var(--clr-accent-100);\r\n}\r\n\r\n\r\n[data-content] {\r\n    display: none;\r\n}\r\n\r\n.active[data-content] {\r\n    display: block;\r\n}\r\n\r\n\r\n\r\n#home{\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center fixed;\r\n    background-size: cover;\r\n    height: 74vh;\r\n}\r\n\r\n#home button{\r\n    text-align: center;\r\n    margin-top: 2rem;\r\n    padding: 8px 22px;\r\n    border-radius: 25px;\r\n    background: var(--clr-accent-500);\r\n    text-decoration: none;\r\n    color: var(--clr-accent-100);\r\n    font-size: 1.8rem;\r\n    transition: 0.3s ease;\r\n    cursor: pointer;\r\n}\r\n\r\n#home button:hover{\r\n    background: var(--clr-accent-100);\r\n    color: azure;\r\n}\r\n\r\n#home .description {\r\n    font-family: 'Lobster', cursive;\r\n    font-size: 2rem;\r\n    color: var(--clr-accent-100);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    padding-top: 8rem;\r\n}\r\n\r\n.menu.active{\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    place-items: center;\r\n    justify-items: center;\r\n    column-gap: 5rem;\r\n    row-gap: 5rem;\r\n    padding: 4rem 20rem;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center center fixed;\r\n}\r\n\r\n.food-card{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center; \r\n    max-width: 100vw;\r\n    background-color: var(--clr-accent-500);\r\n    border-radius: .4rem;\r\n    overflow: hidden;\r\n    box-shadow: 0 3rem 6rem rgba(0, 0, 0, .1);\r\n    cursor: pointer;\r\n    transition: 0.25s ease;\r\n}\r\n\r\n.food-card:hover{\r\n    transform: translateY(-.5%);\r\n    box-shadow: 0 4rem 8rem rgba(0, 0, 0, .2);\r\n}\r\n\r\n.food-card img{\r\n    display: block;\r\n    width: 100%;\r\n    height: 18rem;\r\n    object-fit: cover;\r\n}\r\n\r\n.food-card p{\r\n    font-family: 'Lobster', cursive;\r\n    color: var(--clr-accent-100);\r\n    font-size: 1.5rem;\r\n    line-height: 1.7;\r\n    padding: 0.3rem 0;\r\n}\r\n\r\n.food-card span{\r\n    color: var(--clr-accent-100);\r\n    line-height: 2.3;\r\n    padding: 0 1rem;\r\n}\r\n\r\n.contact-container.active{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    min-height: 74vh;\r\n    background: var(--clr-accent-500);\r\n    gap: 1rem;\r\n}\r\n\r\n.contact{\r\n    display: flex;\r\n}\r\n\r\n.contact p{\r\n    color: var(--clr-accent-100);\r\n    font-size: 2rem;\r\n    padding-left: 10px;\r\n}\r\n\r\n.footer {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n    width: 100%;\r\n    padding: 0.5rem;\r\n    color: var(--clr-accent-100);\r\n    border-top: 1px solid var(--clr-accent-100);\r\n    background-color: var(--clr-accent-400);\r\n  }\r\n\r\n.footer>p {\r\n    display: inline-block;\r\n    font-size: 0.825rem;\r\n}\r\n\r\n.fa-solid {\r\n    font-size: 2rem;\r\n  }\r\n  \r\n  .fa-github:hover {\r\n    color: var(--font-color-dark);\r\n  }", "",{"version":3,"sources":["webpack://./src/styles/general.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,yBAAyB;IACzB,yBAAyB;;IAEzB,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;;;IAGI,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;;;AAGA;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;IAC7B,WAAW;IACX,gBAAgB;IAChB,kBAAkB;IAClB,uCAAuC;IACvC,8CAA8C;;AAElD;;AAEA;IACI,wCAAwC;IACxC,iBAAiB;IACjB,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,UAAU;AACd;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,0BAA0B;IAC1B,mBAAmB;IACnB,4BAA4B;AAChC;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,8CAA8C;AAClD;;;AAGA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;AAClB;;;;AAIA;IACI,iFAA8H;IAC9H,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;IACnB,iCAAiC;IACjC,qBAAqB;IACrB,4BAA4B;IAC5B,iBAAiB;IACjB,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,iCAAiC;IACjC,YAAY;AAChB;;AAEA;IACI,+BAA+B;IAC/B,eAAe;IACf,4BAA4B;IAC5B,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,mBAAmB;IACnB,qBAAqB;IACrB,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,iFAA2E;AAC/E;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;IAChB,uCAAuC;IACvC,oBAAoB;IACpB,gBAAgB;IAChB,yCAAyC;IACzC,eAAe;IACf,sBAAsB;AAC1B;;AAEA;IACI,2BAA2B;IAC3B,yCAAyC;AAC7C;;AAEA;IACI,cAAc;IACd,WAAW;IACX,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,+BAA+B;IAC/B,4BAA4B;IAC5B,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,4BAA4B;IAC5B,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;IAChB,iCAAiC;IACjC,SAAS;AACb;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,4BAA4B;IAC5B,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,WAAW;IACX,eAAe;IACf,4BAA4B;IAC5B,2CAA2C;IAC3C,uCAAuC;EACzC;;AAEF;IACI,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,eAAe;EACjB;;EAEA;IACE,6BAA6B;EAC/B","sourcesContent":[":root {\r\n    --clr-accent-400: #000A90;\r\n    --clr-accent-100: #ee9818;\r\n    --clr-accent-500: #4d1a00;\r\n\r\n    --clr-home-400: #002b5b;\r\n    --clr-home-300: #00344e;\r\n}\r\n\r\n*,\r\n*::after,\r\n*::before {\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n\r\n.title-container{\r\n    display: flex;\r\n}\r\n\r\n.title-container img{\r\n    width: 50px;\r\n}\r\n\r\n.header {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    width: 100%;\r\n    min-height: 20vh;\r\n    text-align: center;\r\n    background-color: var(--clr-accent-400);\r\n    border-bottom: 1px solid var(--clr-accent-500);\r\n    \r\n}\r\n\r\n.header h1 {\r\n    font-family: 'Permanent Marker', cursive;\r\n    font-size: 2.5rem;\r\n    color: var(--clr-accent-100);\r\n}\r\n\r\n.nav {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 30%;\r\n}\r\n\r\n.nav-item{\r\n    cursor: pointer;\r\n}\r\n\r\n[data-nav] {\r\n    transition: transform 0.3s;\r\n    padding-bottom: 6px;\r\n    color: var(--clr-accent-100);\r\n}\r\n\r\n[data-nav]:hover {\r\n    transform: translateY(-10%);\r\n}\r\n\r\n[data-nav].active {\r\n    border-bottom: 2px solid var(--clr-accent-100);\r\n}\r\n\r\n\r\n[data-content] {\r\n    display: none;\r\n}\r\n\r\n.active[data-content] {\r\n    display: block;\r\n}\r\n\r\n\r\n\r\n#home{\r\n    background: url(../assets/Hogwarts_PM_B3C8M1_GreatHallHalloweenWithGhostsAndStudents_Moment.jpg) no-repeat center center fixed;\r\n    background-size: cover;\r\n    height: 74vh;\r\n}\r\n\r\n#home button{\r\n    text-align: center;\r\n    margin-top: 2rem;\r\n    padding: 8px 22px;\r\n    border-radius: 25px;\r\n    background: var(--clr-accent-500);\r\n    text-decoration: none;\r\n    color: var(--clr-accent-100);\r\n    font-size: 1.8rem;\r\n    transition: 0.3s ease;\r\n    cursor: pointer;\r\n}\r\n\r\n#home button:hover{\r\n    background: var(--clr-accent-100);\r\n    color: azure;\r\n}\r\n\r\n#home .description {\r\n    font-family: 'Lobster', cursive;\r\n    font-size: 2rem;\r\n    color: var(--clr-accent-100);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    padding-top: 8rem;\r\n}\r\n\r\n.menu.active{\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    place-items: center;\r\n    justify-items: center;\r\n    column-gap: 5rem;\r\n    row-gap: 5rem;\r\n    padding: 4rem 20rem;\r\n    background: url(../assets/v4vkca46vxi71.webp) no-repeat center center fixed;\r\n}\r\n\r\n.food-card{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center; \r\n    max-width: 100vw;\r\n    background-color: var(--clr-accent-500);\r\n    border-radius: .4rem;\r\n    overflow: hidden;\r\n    box-shadow: 0 3rem 6rem rgba(0, 0, 0, .1);\r\n    cursor: pointer;\r\n    transition: 0.25s ease;\r\n}\r\n\r\n.food-card:hover{\r\n    transform: translateY(-.5%);\r\n    box-shadow: 0 4rem 8rem rgba(0, 0, 0, .2);\r\n}\r\n\r\n.food-card img{\r\n    display: block;\r\n    width: 100%;\r\n    height: 18rem;\r\n    object-fit: cover;\r\n}\r\n\r\n.food-card p{\r\n    font-family: 'Lobster', cursive;\r\n    color: var(--clr-accent-100);\r\n    font-size: 1.5rem;\r\n    line-height: 1.7;\r\n    padding: 0.3rem 0;\r\n}\r\n\r\n.food-card span{\r\n    color: var(--clr-accent-100);\r\n    line-height: 2.3;\r\n    padding: 0 1rem;\r\n}\r\n\r\n.contact-container.active{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    min-height: 74vh;\r\n    background: var(--clr-accent-500);\r\n    gap: 1rem;\r\n}\r\n\r\n.contact{\r\n    display: flex;\r\n}\r\n\r\n.contact p{\r\n    color: var(--clr-accent-100);\r\n    font-size: 2rem;\r\n    padding-left: 10px;\r\n}\r\n\r\n.footer {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n    width: 100%;\r\n    padding: 0.5rem;\r\n    color: var(--clr-accent-100);\r\n    border-top: 1px solid var(--clr-accent-100);\r\n    background-color: var(--clr-accent-400);\r\n  }\r\n\r\n.footer>p {\r\n    display: inline-block;\r\n    font-size: 0.825rem;\r\n}\r\n\r\n.fa-solid {\r\n    font-size: 2rem;\r\n  }\r\n  \r\n  .fa-github:hover {\r\n    color: var(--font-color-dark);\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/general.css":
/*!********************************!*\
  !*** ./src/styles/general.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./general.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/general.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createContactPage = () =>{
    const container = document.createElement('div');
    container.id = 'contact';
    container.classList.add('contact-container');
    container.setAttribute('data-content', '');

    const createContact = (content, class1, class2) =>{
        const contact = document.createElement('div');
        contact.classList.add('contact');
        const contactDetails = (info) =>{
            const p = document.createElement('p');
            p.textContent = info;
            return p
        };

        const details = contactDetails(content);

        contact.appendChild(createIcon(class1, class2));
        contact.appendChild(details);
        return contact;
    };

    
    
    const ravenName = createContact('Raven','fa-solid', 'fa-user');
    const ravenNumber = createContact(`+2345678909876`, 'fa-solid', 'fa-phone');
    const ravenEmail = createContact(`raven@gmail.com`, 'fa-solid', 'fa-envelope');
    container.appendChild(ravenName);
    container.appendChild(ravenNumber);
    container.appendChild(ravenEmail);
    return container
};

const createIcon = (class1, class2) =>{
    const i = document.createElement('i');
    i.classList.add(class1);
    i.classList.add(class2);
    return i;
}
const loadContact = () =>{
    const main = document.getElementById('main');
    main.appendChild(createContactPage());

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createHome = () =>{
    const home = document.createElement('div');
    home.id = 'home'
    home.classList.add('home');
    home.classList.add('active');
    home.setAttribute('data-content', '')

    const createParagraph = (content) => {
        const p = document.createElement('p');
        p.textContent = content;
        return p;
    };
    const orderBtn = document.createElement('button');
    orderBtn.classList.add('orderBtn');
    orderBtn.textContent = 'ORDER NOW';
    orderBtn.addEventListener('click', ()=>{
        document.querySelector('.home').classList.remove('active');
        document.getElementById('home-nav').classList.remove('active');
        document.getElementById('menu-nav').classList.add('active');
        document.querySelector('.menu').classList.add('active');

    })
    
    const description = document.createElement('div');
    description.classList.add('description');

    description.appendChild(createParagraph(`Welcome to Africa's very own wizardry themed restuarant`));
    description.appendChild(createParagraph(`Where we serve the finest spell bound cuisine`));
    description.appendChild(createParagraph(`as well as the most tasty indigenous African dishes`));
    description.appendChild(orderBtn)

    home.appendChild(description)

    return home;
}

const loadHome = () => {
    const main = document.getElementById('main');
    main.appendChild(createHome());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_amala_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/amala.jpg */ "./src/assets/amala.jpg");
/* harmony import */ var _assets_jollof_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/jollof.jpg */ "./src/assets/jollof.jpg");
/* harmony import */ var _assets_fried_rice_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/fried rice.jpg */ "./src/assets/fried rice.jpg");
/* harmony import */ var _assets_yam_and_egg_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/yam and egg.jpg */ "./src/assets/yam and egg.jpg");
/* harmony import */ var _assets_spag_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/spag.jpg */ "./src/assets/spag.jpg");
/* harmony import */ var _assets_ewa_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/ewa.jpg */ "./src/assets/ewa.jpg");
/* harmony import */ var _assets_plantain_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/plantain.jpg */ "./src/assets/plantain.jpg");
/* harmony import */ var _assets_poundedyam_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/poundedyam.jpg */ "./src/assets/poundedyam.jpg");









const createMenu = () =>{
    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.setAttribute('id', 'menu');
    menu.setAttribute('data-content', '');

    const amala = createMenuItem(_assets_amala_jpg__WEBPACK_IMPORTED_MODULE_0__, 'Amala and Ewedu', '₦1000', 'A south-western dish made from fine yam flour ')
    const jollofRice = createMenuItem(_assets_jollof_jpg__WEBPACK_IMPORTED_MODULE_1__, 'Jollof Rice', '₦2500', 'Critically acclaimed best jollof on the continent')
    const friedRice = createMenuItem(_assets_fried_rice_jpg__WEBPACK_IMPORTED_MODULE_2__, 'Fried Rice', '₦2000', 'It\'s available everyday not only on christmas!')
    const yamEgg = createMenuItem(_assets_yam_and_egg_jpg__WEBPACK_IMPORTED_MODULE_3__, 'Yam and Eggs', '₦1200', 'Known to be the meal that everyone enjoys')
    const spag = createMenuItem(_assets_spag_jpg__WEBPACK_IMPORTED_MODULE_4__, 'Spaghetti Bolognese', '₦900', 'Enjoy it stir fried just as you like it!')
    const ewaAgoyin = createMenuItem(_assets_ewa_jpg__WEBPACK_IMPORTED_MODULE_5__, 'Ewa-Agoyin', '₦500', 'A dish of mashed beans seasoned with palm oil and a lot of yumminess')
    const plantainPorrige = createMenuItem(_assets_plantain_jpg__WEBPACK_IMPORTED_MODULE_6__, 'Plantain Porridge', '₦1250', 'It tastes great while still hot')
    const egusi = createMenuItem(_assets_poundedyam_jpg__WEBPACK_IMPORTED_MODULE_7__, 'Pounded Yam and Egusi', '₦1500', 'Come enjoy the fastest selling dish in this part of the world!')
    
    menu.appendChild(amala);
    menu.appendChild(jollofRice);
    menu.appendChild(friedRice);
    menu.appendChild(yamEgg);
    menu.appendChild(spag);
    menu.appendChild(ewaAgoyin);
    menu.appendChild(plantainPorrige);
    menu.appendChild(egusi);
    return menu
}

const createMenuItem = (image, title, price, description) =>{
    const foodCard = document.createElement('div');
    foodCard.classList.add('food-card');
    const foodImage = document.createElement('img');
    foodImage.src = image;

    const foodTitle = document.createElement('p');
    foodTitle.textContent = title;

    const foodPrice = document.createElement('p');
    foodPrice.textContent = price;

    const foodInfo = document.createElement('span');
    foodInfo.textContent = description;

    foodCard.appendChild(foodImage);
    foodCard.appendChild(foodTitle);
    foodCard.appendChild(foodPrice);
    foodCard.appendChild(foodInfo);

    return foodCard;
}

const loadMenu = () =>{
    const main = document.getElementById('main');
    main.appendChild(createMenu())
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _assets_ravenclaw_crest_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/ravenclaw crest.png */ "./src/assets/ravenclaw crest.png");






const createHeader = (id) =>{
    const header = document.createElement('header');
    header.setAttribute('id', id);
    header.classList.add('header');

    const createTitle = (name) =>{
        const title = document.createElement('h1');
        title.textContent = name;
        return title;
    }

    const ravenCrest = document.createElement('img');
    ravenCrest.src = _assets_ravenclaw_crest_png__WEBPACK_IMPORTED_MODULE_3__;
    
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container')
    titleContainer.appendChild(ravenCrest);
    titleContainer.appendChild(createTitle(`Crow's Nest Restaurant`))

    header.appendChild(titleContainer);
    header.appendChild(createNav('nav'));
    return header;
}

const createNav = (id) =>{
    const nav = document.createElement('nav');
    nav.setAttribute('id', id);
    nav.classList.add('nav');
    nav.classList.add('links');
    
    const createTab = (id, name) =>{
        const tab = document.createElement('div');
        tab.setAttribute('id', `${id}-nav`);
        tab.setAttribute('data-nav', id);
        tab.classList.add('nav-item');
        tab.textContent = name;

        return tab
    }

    const homeTab = createTab('home','HOME');
    homeTab.classList.add('active');
    const menuTab = createTab('menu','MENU');
    const contactTab = createTab('contact','CONTACT US');

    nav.appendChild(homeTab);
    nav.appendChild(menuTab);
    nav.appendChild(contactTab);
    return nav;
}

const createMain = (id) =>{
    const main = document.createElement('main');
    main.setAttribute('id', id);
    main.classList.add(id)

    return main;
}

const createFooter = (id) =>{
    const footer = document.createElement('footer');
    footer.setAttribute('id', id);
    footer.classList.add(id)
    
    const createParagraph = (content) =>{
        const p = document.createElement('h3');
        p.textContent = content
        return p
    }

    const createLink = (link) =>{
        const l = document.createElement('a');
        l.setAttribute('href', link)
        l.appendChild(createIcon())
        return l
    }

    const createIcon = () =>{
        const i = document.createElement('i');
        i.classList.add("fa-brands");
        i.classList.add("fa-github");
        return i;
    }

    footer.appendChild(createParagraph(`Copyright © ${new Date().getFullYear()} Raven.js`))
    footer.appendChild(createLink('https://github.com/Ravencodess'))
    return footer
}

const runWebsite = () =>{
    const content = document.getElementById('content');
    content.appendChild(createHeader('header'));
    content.appendChild(createMain('main'));
    content.appendChild(createFooter('footer'));
    (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])()
    ;(0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])()
    ;(0,_contact__WEBPACK_IMPORTED_MODULE_1__["default"])()
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (runWebsite);

/***/ }),

/***/ "./src/assets/Hogwarts_PM_B3C8M1_GreatHallHalloweenWithGhostsAndStudents_Moment.jpg":
/*!******************************************************************************************!*\
  !*** ./src/assets/Hogwarts_PM_B3C8M1_GreatHallHalloweenWithGhostsAndStudents_Moment.jpg ***!
  \******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e37471d0efa047e2cae3.jpg";

/***/ }),

/***/ "./src/assets/amala.jpg":
/*!******************************!*\
  !*** ./src/assets/amala.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3dd0b3b3d4b4f383ed47.jpg";

/***/ }),

/***/ "./src/assets/ewa.jpg":
/*!****************************!*\
  !*** ./src/assets/ewa.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a8127ad34d7930655184.jpg";

/***/ }),

/***/ "./src/assets/fried rice.jpg":
/*!***********************************!*\
  !*** ./src/assets/fried rice.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "084d9f080395fd5ae7b6.jpg";

/***/ }),

/***/ "./src/assets/jollof.jpg":
/*!*******************************!*\
  !*** ./src/assets/jollof.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ad179358bafc96a7ecdd.jpg";

/***/ }),

/***/ "./src/assets/plantain.jpg":
/*!*********************************!*\
  !*** ./src/assets/plantain.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fe76b2cab49b5725f336.jpg";

/***/ }),

/***/ "./src/assets/poundedyam.jpg":
/*!***********************************!*\
  !*** ./src/assets/poundedyam.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d4c388eff9be2a3517e4.jpg";

/***/ }),

/***/ "./src/assets/ravenclaw crest.png":
/*!****************************************!*\
  !*** ./src/assets/ravenclaw crest.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "83965a82d4f2e50c2006.png";

/***/ }),

/***/ "./src/assets/spag.jpg":
/*!*****************************!*\
  !*** ./src/assets/spag.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1b2744133ea16f74c716.jpg";

/***/ }),

/***/ "./src/assets/v4vkca46vxi71.webp":
/*!***************************************!*\
  !*** ./src/assets/v4vkca46vxi71.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e9f14800dad0f89f9df0.webp";

/***/ }),

/***/ "./src/assets/yam and egg.jpg":
/*!************************************!*\
  !*** ./src/assets/yam and egg.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6644e52c812da80c67e6.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ "./src/website.js");
/* harmony import */ var _styles_general_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/general.css */ "./src/styles/general.css");




(0,_website__WEBPACK_IMPORTED_MODULE_0__["default"])()

const navlist = document.querySelectorAll('.nav-item');
const tabs = document.querySelectorAll('[data-content]');

navlist.forEach(nav =>{
    nav.addEventListener('click', (e)=>{
        const target = document.getElementById(e.target.dataset.nav)
        if(e.target.matches('.nav-item')){
            tabs.forEach(tab =>{
                tab.classList.remove('active')
            })
            navlist.forEach(nav =>{
                nav.classList.remove('active')
            })
            nav.classList.toggle('active')
        }
        
        target.classList.add('active');
    })
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQWtDO0FBQ0w7QUFDN0I7QUFDQTtBQUNBLG9EQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL2dlbmVyYWwuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL2dlbmVyYWwuY3NzP2YzZmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvd2Vic2l0ZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL0hvZ3dhcnRzX1BNX0IzQzhNMV9HcmVhdEhhbGxIYWxsb3dlZW5XaXRoR2hvc3RzQW5kU3R1ZGVudHNfTW9tZW50LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy92NHZrY2E0NnZ4aTcxLndlYnBcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgICAtLWNsci1hY2NlbnQtNDAwOiAjMDAwQTkwO1xcclxcbiAgICAtLWNsci1hY2NlbnQtMTAwOiAjZWU5ODE4O1xcclxcbiAgICAtLWNsci1hY2NlbnQtNTAwOiAjNGQxYTAwO1xcclxcblxcclxcbiAgICAtLWNsci1ob21lLTQwMDogIzAwMmI1YjtcXHJcXG4gICAgLS1jbHItaG9tZS0zMDA6ICMwMDM0NGU7XFxyXFxufVxcclxcblxcclxcbiosXFxyXFxuKjo6YWZ0ZXIsXFxyXFxuKjo6YmVmb3JlIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udGl0bGUtY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtY29udGFpbmVyIGltZ3tcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDIwdmg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudC00MDApO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY2xyLWFjY2VudC01MDApO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciBoMSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUGVybWFuZW50IE1hcmtlcicsIGN1cnNpdmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2xyLWFjY2VudC0xMDApO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB3aWR0aDogMzAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW17XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuW2RhdGEtbmF2XSB7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2xyLWFjY2VudC0xMDApO1xcclxcbn1cXHJcXG5cXHJcXG5bZGF0YS1uYXZdOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpO1xcclxcbn1cXHJcXG5cXHJcXG5bZGF0YS1uYXZdLmFjdGl2ZSB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1jbHItYWNjZW50LTEwMCk7XFxyXFxufVxcclxcblxcclxcblxcclxcbltkYXRhLWNvbnRlbnRdIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZVtkYXRhLWNvbnRlbnRdIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbiNob21le1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBoZWlnaHQ6IDc0dmg7XFxyXFxufVxcclxcblxcclxcbiNob21lIGJ1dHRvbntcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgICBwYWRkaW5nOiA4cHggMjJweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWFjY2VudC01MDApO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItYWNjZW50LTEwMCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWUgYnV0dG9uOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItYWNjZW50LTEwMCk7XFxyXFxuICAgIGNvbG9yOiBhenVyZTtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWUgLmRlc2NyaXB0aW9uIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJywgY3Vyc2l2ZTtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2xyLWFjY2VudC0xMDApO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nLXRvcDogOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUuYWN0aXZle1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDVyZW07XFxyXFxuICAgIHJvdy1nYXA6IDVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDRyZW0gMjByZW07XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XFxyXFxufVxcclxcblxcclxcbi5mb29kLWNhcmR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudC01MDApO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNHJlbTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAzcmVtIDZyZW0gcmdiYSgwLCAwLCAwLCAuMSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4yNXMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb2QtY2FyZDpob3ZlcntcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0uNSUpO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDRyZW0gOHJlbSByZ2JhKDAsIDAsIDAsIC4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb2QtY2FyZCBpbWd7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxOHJlbTtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb29kLWNhcmQgcHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJywgY3Vyc2l2ZTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1hY2NlbnQtMTAwKTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjc7XFxyXFxuICAgIHBhZGRpbmc6IDAuM3JlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vZC1jYXJkIHNwYW57XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItYWNjZW50LTEwMCk7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyLjM7XFxyXFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtY29udGFpbmVyLmFjdGl2ZXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDc0dmg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNsci1hY2NlbnQtNTAwKTtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QgcHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1hY2NlbnQtMTAwKTtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2xyLWFjY2VudC0xMDApO1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY2xyLWFjY2VudC0xMDApO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50LTQwMCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuLmZvb3Rlcj5wIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBmb250LXNpemU6IDAuODI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtc29saWQge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5mYS1naXRodWI6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1kYXJrKTtcXHJcXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2dlbmVyYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7O0lBRXpCLHVCQUF1QjtJQUN2Qix1QkFBdUI7QUFDM0I7O0FBRUE7OztJQUdJLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsU0FBUztBQUNiOzs7QUFHQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsdUNBQXVDO0lBQ3ZDLDhDQUE4Qzs7QUFFbEQ7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsaUJBQWlCO0lBQ2pCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksOENBQThDO0FBQ2xEOzs7QUFHQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOzs7O0FBSUE7SUFDSSxpRkFBOEg7SUFDOUgsc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsaUNBQWlDO0lBQ2pDLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpRkFBMkU7QUFDL0U7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVDQUF1QztJQUN2QyxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLHlDQUF5QztJQUN6QyxlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQiw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGlDQUFpQztJQUNqQyxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsV0FBVztJQUNYLGVBQWU7SUFDZiw0QkFBNEI7SUFDNUIsMkNBQTJDO0lBQzNDLHVDQUF1QztFQUN6Qzs7QUFFRjtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsNkJBQTZCO0VBQy9CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS1jbHItYWNjZW50LTQwMDogIzAwMEE5MDtcXHJcXG4gICAgLS1jbHItYWNjZW50LTEwMDogI2VlOTgxODtcXHJcXG4gICAgLS1jbHItYWNjZW50LTUwMDogIzRkMWEwMDtcXHJcXG5cXHJcXG4gICAgLS1jbHItaG9tZS00MDA6ICMwMDJiNWI7XFxyXFxuICAgIC0tY2xyLWhvbWUtMzAwOiAjMDAzNDRlO1xcclxcbn1cXHJcXG5cXHJcXG4qLFxcclxcbio6OmFmdGVyLFxcclxcbio6OmJlZm9yZSB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRpdGxlLWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLWNvbnRhaW5lciBpbWd7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtaW4taGVpZ2h0OiAyMHZoO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQtNDAwKTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNsci1hY2NlbnQtNTAwKTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgaDEge1xcclxcbiAgICBmb250LWZhbWlseTogJ1Blcm1hbmVudCBNYXJrZXInLCBjdXJzaXZlO1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1hY2NlbnQtMTAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVte1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbltkYXRhLW5hdl0ge1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDZweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1hY2NlbnQtMTAwKTtcXHJcXG59XFxyXFxuXFxyXFxuW2RhdGEtbmF2XTpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuW2RhdGEtbmF2XS5hY3RpdmUge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tY2xyLWFjY2VudC0xMDApO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5bZGF0YS1jb250ZW50XSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmVbZGF0YS1jb250ZW50XSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4jaG9tZXtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9Ib2d3YXJ0c19QTV9CM0M4TTFfR3JlYXRIYWxsSGFsbG93ZWVuV2l0aEdob3N0c0FuZFN0dWRlbnRzX01vbWVudC5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBoZWlnaHQ6IDc0dmg7XFxyXFxufVxcclxcblxcclxcbiNob21lIGJ1dHRvbntcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgICBwYWRkaW5nOiA4cHggMjJweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWFjY2VudC01MDApO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItYWNjZW50LTEwMCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWUgYnV0dG9uOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItYWNjZW50LTEwMCk7XFxyXFxuICAgIGNvbG9yOiBhenVyZTtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWUgLmRlc2NyaXB0aW9uIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJywgY3Vyc2l2ZTtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2xyLWFjY2VudC0xMDApO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nLXRvcDogOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUuYWN0aXZle1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDVyZW07XFxyXFxuICAgIHJvdy1nYXA6IDVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDRyZW0gMjByZW07XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCguLi9hc3NldHMvdjR2a2NhNDZ2eGk3MS53ZWJwKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb2QtY2FyZHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxcclxcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50LTUwMCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC40cmVtO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDNyZW0gNnJlbSByZ2JhKDAsIDAsIDAsIC4xKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjI1cyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vZC1jYXJkOmhvdmVye1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLS41JSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgNHJlbSA4cmVtIHJnYmEoMCwgMCwgMCwgLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vZC1jYXJkIGltZ3tcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDE4cmVtO1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb2QtY2FyZCBwe1xcclxcbiAgICBmb250LWZhbWlseTogJ0xvYnN0ZXInLCBjdXJzaXZlO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2xyLWFjY2VudC0xMDApO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNztcXHJcXG4gICAgcGFkZGluZzogMC4zcmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5mb29kLWNhcmQgc3BhbntcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1hY2NlbnQtMTAwKTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDIuMztcXHJcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1jb250YWluZXIuYWN0aXZle1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWluLWhlaWdodDogNzR2aDtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWFjY2VudC01MDApO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCBwe1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2xyLWFjY2VudC0xMDApO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItYWNjZW50LTEwMCk7XFxyXFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1jbHItYWNjZW50LTEwMCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQtNDAwKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4uZm9vdGVyPnAge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44MjVyZW07XFxyXFxufVxcclxcblxcclxcbi5mYS1zb2xpZCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmZhLWdpdGh1Yjpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLWRhcmspO1xcclxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nZW5lcmFsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2VuZXJhbC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY3JlYXRlQ29udGFjdFBhZ2UgPSAoKSA9PntcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFpbmVyLmlkID0gJ2NvbnRhY3QnO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtY29udGFpbmVyJyk7XHJcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLWNvbnRlbnQnLCAnJyk7XHJcblxyXG4gICAgY29uc3QgY3JlYXRlQ29udGFjdCA9IChjb250ZW50LCBjbGFzczEsIGNsYXNzMikgPT57XHJcbiAgICAgICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRhY3REZXRhaWxzID0gKGluZm8pID0+e1xyXG4gICAgICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBwLnRleHRDb250ZW50ID0gaW5mbztcclxuICAgICAgICAgICAgcmV0dXJuIHBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBkZXRhaWxzID0gY29udGFjdERldGFpbHMoY29udGVudCk7XHJcblxyXG4gICAgICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY3JlYXRlSWNvbihjbGFzczEsIGNsYXNzMikpO1xyXG4gICAgICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoZGV0YWlscyk7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRhY3Q7XHJcbiAgICB9O1xyXG5cclxuICAgIFxyXG4gICAgXHJcbiAgICBjb25zdCByYXZlbk5hbWUgPSBjcmVhdGVDb250YWN0KCdSYXZlbicsJ2ZhLXNvbGlkJywgJ2ZhLXVzZXInKTtcclxuICAgIGNvbnN0IHJhdmVuTnVtYmVyID0gY3JlYXRlQ29udGFjdChgKzIzNDU2Nzg5MDk4NzZgLCAnZmEtc29saWQnLCAnZmEtcGhvbmUnKTtcclxuICAgIGNvbnN0IHJhdmVuRW1haWwgPSBjcmVhdGVDb250YWN0KGByYXZlbkBnbWFpbC5jb21gLCAnZmEtc29saWQnLCAnZmEtZW52ZWxvcGUnKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyYXZlbk5hbWUpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJhdmVuTnVtYmVyKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyYXZlbkVtYWlsKTtcclxuICAgIHJldHVybiBjb250YWluZXJcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUljb24gPSAoY2xhc3MxLCBjbGFzczIpID0+e1xyXG4gICAgY29uc3QgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgIGkuY2xhc3NMaXN0LmFkZChjbGFzczEpO1xyXG4gICAgaS5jbGFzc0xpc3QuYWRkKGNsYXNzMik7XHJcbiAgICByZXR1cm4gaTtcclxufVxyXG5jb25zdCBsb2FkQ29udGFjdCA9ICgpID0+e1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3RQYWdlKCkpO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRDb250YWN0IiwiY29uc3QgY3JlYXRlSG9tZSA9ICgpID0+e1xyXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaG9tZS5pZCA9ICdob21lJ1xyXG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKCdob21lJyk7XHJcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgaG9tZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29udGVudCcsICcnKVxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZVBhcmFncmFwaCA9IChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBwLnRleHRDb250ZW50ID0gY29udGVudDtcclxuICAgICAgICByZXR1cm4gcDtcclxuICAgIH07XHJcbiAgICBjb25zdCBvcmRlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgb3JkZXJCdG4uY2xhc3NMaXN0LmFkZCgnb3JkZXJCdG4nKTtcclxuICAgIG9yZGVyQnRuLnRleHRDb250ZW50ID0gJ09SREVSIE5PVyc7XHJcbiAgICBvcmRlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS1uYXYnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1uYXYnKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuICAgIH0pXHJcbiAgICBcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xyXG5cclxuICAgIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZVBhcmFncmFwaChgV2VsY29tZSB0byBBZnJpY2EncyB2ZXJ5IG93biB3aXphcmRyeSB0aGVtZWQgcmVzdHVhcmFudGApKTtcclxuICAgIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZVBhcmFncmFwaChgV2hlcmUgd2Ugc2VydmUgdGhlIGZpbmVzdCBzcGVsbCBib3VuZCBjdWlzaW5lYCkpO1xyXG4gICAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoY3JlYXRlUGFyYWdyYXBoKGBhcyB3ZWxsIGFzIHRoZSBtb3N0IHRhc3R5IGluZGlnZW5vdXMgQWZyaWNhbiBkaXNoZXNgKSk7XHJcbiAgICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChvcmRlckJ0bilcclxuXHJcbiAgICBob21lLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxyXG5cclxuICAgIHJldHVybiBob21lO1xyXG59XHJcblxyXG5jb25zdCBsb2FkSG9tZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZSIsImltcG9ydCBhbWFsYUltZyBmcm9tIFwiLi9hc3NldHMvYW1hbGEuanBnXCI7XHJcbmltcG9ydCBqb2xsb2YgZnJvbSBcIi4vYXNzZXRzL2pvbGxvZi5qcGdcIjtcclxuaW1wb3J0IGZyaWVkIGZyb20gXCIuL2Fzc2V0cy9mcmllZCByaWNlLmpwZ1wiO1xyXG5pbXBvcnQgeWFtIGZyb20gXCIuL2Fzc2V0cy95YW0gYW5kIGVnZy5qcGdcIjtcclxuaW1wb3J0IHNwYWdJbWcgZnJvbSBcIi4vYXNzZXRzL3NwYWcuanBnXCI7XHJcbmltcG9ydCBld2EgZnJvbSBcIi4vYXNzZXRzL2V3YS5qcGdcIjtcclxuaW1wb3J0IHBsYW50YWluIGZyb20gXCIuL2Fzc2V0cy9wbGFudGFpbi5qcGdcIjtcclxuaW1wb3J0IHBvdW5kZWRZYW0gZnJvbSBcIi4vYXNzZXRzL3BvdW5kZWR5YW0uanBnXCI7XHJcblxyXG5jb25zdCBjcmVhdGVNZW51ID0gKCkgPT57XHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcclxuICAgIG1lbnUuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51Jyk7XHJcbiAgICBtZW51LnNldEF0dHJpYnV0ZSgnZGF0YS1jb250ZW50JywgJycpO1xyXG5cclxuICAgIGNvbnN0IGFtYWxhID0gY3JlYXRlTWVudUl0ZW0oYW1hbGFJbWcsICdBbWFsYSBhbmQgRXdlZHUnLCAn4oKmMTAwMCcsICdBIHNvdXRoLXdlc3Rlcm4gZGlzaCBtYWRlIGZyb20gZmluZSB5YW0gZmxvdXIgJylcclxuICAgIGNvbnN0IGpvbGxvZlJpY2UgPSBjcmVhdGVNZW51SXRlbShqb2xsb2YsICdKb2xsb2YgUmljZScsICfigqYyNTAwJywgJ0NyaXRpY2FsbHkgYWNjbGFpbWVkIGJlc3Qgam9sbG9mIG9uIHRoZSBjb250aW5lbnQnKVxyXG4gICAgY29uc3QgZnJpZWRSaWNlID0gY3JlYXRlTWVudUl0ZW0oZnJpZWQsICdGcmllZCBSaWNlJywgJ+KCpjIwMDAnLCAnSXRcXCdzIGF2YWlsYWJsZSBldmVyeWRheSBub3Qgb25seSBvbiBjaHJpc3RtYXMhJylcclxuICAgIGNvbnN0IHlhbUVnZyA9IGNyZWF0ZU1lbnVJdGVtKHlhbSwgJ1lhbSBhbmQgRWdncycsICfigqYxMjAwJywgJ0tub3duIHRvIGJlIHRoZSBtZWFsIHRoYXQgZXZlcnlvbmUgZW5qb3lzJylcclxuICAgIGNvbnN0IHNwYWcgPSBjcmVhdGVNZW51SXRlbShzcGFnSW1nLCAnU3BhZ2hldHRpIEJvbG9nbmVzZScsICfigqY5MDAnLCAnRW5qb3kgaXQgc3RpciBmcmllZCBqdXN0IGFzIHlvdSBsaWtlIGl0IScpXHJcbiAgICBjb25zdCBld2FBZ295aW4gPSBjcmVhdGVNZW51SXRlbShld2EsICdFd2EtQWdveWluJywgJ+KCpjUwMCcsICdBIGRpc2ggb2YgbWFzaGVkIGJlYW5zIHNlYXNvbmVkIHdpdGggcGFsbSBvaWwgYW5kIGEgbG90IG9mIHl1bW1pbmVzcycpXHJcbiAgICBjb25zdCBwbGFudGFpblBvcnJpZ2UgPSBjcmVhdGVNZW51SXRlbShwbGFudGFpbiwgJ1BsYW50YWluIFBvcnJpZGdlJywgJ+KCpjEyNTAnLCAnSXQgdGFzdGVzIGdyZWF0IHdoaWxlIHN0aWxsIGhvdCcpXHJcbiAgICBjb25zdCBlZ3VzaSA9IGNyZWF0ZU1lbnVJdGVtKHBvdW5kZWRZYW0sICdQb3VuZGVkIFlhbSBhbmQgRWd1c2knLCAn4oKmMTUwMCcsICdDb21lIGVuam95IHRoZSBmYXN0ZXN0IHNlbGxpbmcgZGlzaCBpbiB0aGlzIHBhcnQgb2YgdGhlIHdvcmxkIScpXHJcbiAgICBcclxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoYW1hbGEpO1xyXG4gICAgbWVudS5hcHBlbmRDaGlsZChqb2xsb2ZSaWNlKTtcclxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoZnJpZWRSaWNlKTtcclxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoeWFtRWdnKTtcclxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoc3BhZyk7XHJcbiAgICBtZW51LmFwcGVuZENoaWxkKGV3YUFnb3lpbik7XHJcbiAgICBtZW51LmFwcGVuZENoaWxkKHBsYW50YWluUG9ycmlnZSk7XHJcbiAgICBtZW51LmFwcGVuZENoaWxkKGVndXNpKTtcclxuICAgIHJldHVybiBtZW51XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZU1lbnVJdGVtID0gKGltYWdlLCB0aXRsZSwgcHJpY2UsIGRlc2NyaXB0aW9uKSA9PntcclxuICAgIGNvbnN0IGZvb2RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmb29kQ2FyZC5jbGFzc0xpc3QuYWRkKCdmb29kLWNhcmQnKTtcclxuICAgIGNvbnN0IGZvb2RJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgZm9vZEltYWdlLnNyYyA9IGltYWdlO1xyXG5cclxuICAgIGNvbnN0IGZvb2RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGZvb2RUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG5cclxuICAgIGNvbnN0IGZvb2RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGZvb2RQcmljZS50ZXh0Q29udGVudCA9IHByaWNlO1xyXG5cclxuICAgIGNvbnN0IGZvb2RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgZm9vZEluZm8udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcclxuXHJcbiAgICBmb29kQ2FyZC5hcHBlbmRDaGlsZChmb29kSW1hZ2UpO1xyXG4gICAgZm9vZENhcmQuYXBwZW5kQ2hpbGQoZm9vZFRpdGxlKTtcclxuICAgIGZvb2RDYXJkLmFwcGVuZENoaWxkKGZvb2RQcmljZSk7XHJcbiAgICBmb29kQ2FyZC5hcHBlbmRDaGlsZChmb29kSW5mbyk7XHJcblxyXG4gICAgcmV0dXJuIGZvb2RDYXJkO1xyXG59XHJcblxyXG5jb25zdCBsb2FkTWVudSA9ICgpID0+e1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUoKSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnUiLCJpbXBvcnQgbG9hZEhvbWUgZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgbG9hZGNvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xyXG5pbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vbWVudVwiO1xyXG5pbXBvcnQgY3Jlc3QgZnJvbSAnLi9hc3NldHMvcmF2ZW5jbGF3IGNyZXN0LnBuZydcclxuXHJcblxyXG5jb25zdCBjcmVhdGVIZWFkZXIgPSAoaWQpID0+e1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICBoZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcclxuXHJcbiAgICBjb25zdCBjcmVhdGVUaXRsZSA9IChuYW1lKSA9PntcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgICAgIHJldHVybiB0aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByYXZlbkNyZXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICByYXZlbkNyZXN0LnNyYyA9IGNyZXN0O1xyXG4gICAgXHJcbiAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGl0bGUtY29udGFpbmVyJylcclxuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhdmVuQ3Jlc3QpO1xyXG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGl0bGUoYENyb3cncyBOZXN0IFJlc3RhdXJhbnRgKSlcclxuXHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZU5hdignbmF2JykpO1xyXG4gICAgcmV0dXJuIGhlYWRlcjtcclxufVxyXG5cclxuY29uc3QgY3JlYXRlTmF2ID0gKGlkKSA9PntcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gICAgbmF2LnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XHJcbiAgICBuYXYuY2xhc3NMaXN0LmFkZCgnbmF2Jyk7XHJcbiAgICBuYXYuY2xhc3NMaXN0LmFkZCgnbGlua3MnKTtcclxuICAgIFxyXG4gICAgY29uc3QgY3JlYXRlVGFiID0gKGlkLCBuYW1lKSA9PntcclxuICAgICAgICBjb25zdCB0YWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0YWIuc2V0QXR0cmlidXRlKCdpZCcsIGAke2lkfS1uYXZgKTtcclxuICAgICAgICB0YWIuc2V0QXR0cmlidXRlKCdkYXRhLW5hdicsIGlkKTtcclxuICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZCgnbmF2LWl0ZW0nKTtcclxuICAgICAgICB0YWIudGV4dENvbnRlbnQgPSBuYW1lO1xyXG5cclxuICAgICAgICByZXR1cm4gdGFiXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaG9tZVRhYiA9IGNyZWF0ZVRhYignaG9tZScsJ0hPTUUnKTtcclxuICAgIGhvbWVUYWIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICBjb25zdCBtZW51VGFiID0gY3JlYXRlVGFiKCdtZW51JywnTUVOVScpO1xyXG4gICAgY29uc3QgY29udGFjdFRhYiA9IGNyZWF0ZVRhYignY29udGFjdCcsJ0NPTlRBQ1QgVVMnKTtcclxuXHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQoaG9tZVRhYik7XHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQobWVudVRhYik7XHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdFRhYik7XHJcbiAgICByZXR1cm4gbmF2O1xyXG59XHJcblxyXG5jb25zdCBjcmVhdGVNYWluID0gKGlkKSA9PntcclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICBtYWluLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XHJcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoaWQpXHJcblxyXG4gICAgcmV0dXJuIG1haW47XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZUZvb3RlciA9IChpZCkgPT57XHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuICAgIGZvb3Rlci5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xyXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoaWQpXHJcbiAgICBcclxuICAgIGNvbnN0IGNyZWF0ZVBhcmFncmFwaCA9IChjb250ZW50KSA9PntcclxuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBwLnRleHRDb250ZW50ID0gY29udGVudFxyXG4gICAgICAgIHJldHVybiBwXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3JlYXRlTGluayA9IChsaW5rKSA9PntcclxuICAgICAgICBjb25zdCBsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIGwuc2V0QXR0cmlidXRlKCdocmVmJywgbGluaylcclxuICAgICAgICBsLmFwcGVuZENoaWxkKGNyZWF0ZUljb24oKSlcclxuICAgICAgICByZXR1cm4gbFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZUljb24gPSAoKSA9PntcclxuICAgICAgICBjb25zdCBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgICAgIGkuY2xhc3NMaXN0LmFkZChcImZhLWJyYW5kc1wiKTtcclxuICAgICAgICBpLmNsYXNzTGlzdC5hZGQoXCJmYS1naXRodWJcIik7XHJcbiAgICAgICAgcmV0dXJuIGk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGNyZWF0ZVBhcmFncmFwaChgQ29weXJpZ2h0IMKpICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBSYXZlbi5qc2ApKVxyXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGNyZWF0ZUxpbmsoJ2h0dHBzOi8vZ2l0aHViLmNvbS9SYXZlbmNvZGVzcycpKVxyXG4gICAgcmV0dXJuIGZvb3RlclxyXG59XHJcblxyXG5jb25zdCBydW5XZWJzaXRlID0gKCkgPT57XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCdoZWFkZXInKSk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oJ21haW4nKSk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcignZm9vdGVyJykpO1xyXG4gICAgbG9hZEhvbWUoKVxyXG4gICAgbG9hZE1lbnUoKVxyXG4gICAgbG9hZGNvbnRhY3QoKVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJ1bldlYnNpdGUiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHJ1bldlYnNpdGUgZnJvbSAnLi93ZWJzaXRlJ1xyXG5pbXBvcnQgJy4vc3R5bGVzL2dlbmVyYWwuY3NzJ1xyXG5cclxuXHJcbnJ1bldlYnNpdGUoKVxyXG5cclxuY29uc3QgbmF2bGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtaXRlbScpO1xyXG5jb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY29udGVudF0nKTtcclxuXHJcbm5hdmxpc3QuZm9yRWFjaChuYXYgPT57XHJcbiAgICBuYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlLnRhcmdldC5kYXRhc2V0Lm5hdilcclxuICAgICAgICBpZihlLnRhcmdldC5tYXRjaGVzKCcubmF2LWl0ZW0nKSl7XHJcbiAgICAgICAgICAgIHRhYnMuZm9yRWFjaCh0YWIgPT57XHJcbiAgICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgbmF2bGlzdC5mb3JFYWNoKG5hdiA9PntcclxuICAgICAgICAgICAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfSlcclxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=