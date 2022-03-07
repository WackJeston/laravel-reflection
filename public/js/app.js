/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/add-company.js":
/*!*************************************!*\
  !*** ./resources/js/add-company.js ***!
  \*************************************/
/***/ (() => {

var dashboard = document.querySelector('.dashboard-container');

if (dashboard) {
  // Inputs Appearing
  var inputsAppear = function inputsAppear() {
    inputContainer.style.display = "flex";
    inputContainer.style.animation = "add-comp-appear 500ms forwards";
    adCounter = true;
  }; // Inputs Disappearing


  var inputsDisappear = function inputsDisappear() {
    inputContainer.style.animation = "add-comp-disappear 500ms forwards";
    setTimeout(function () {
      inputContainer.style.display = "none";
    }, 500);
    adCounter = false;
  }; // VALIDATION FUNTIONS
  // Name Validation


  var nameValidation = function nameValidation() {
    if (compName.value == "") {
      compName.style.border = "1px solid red";
      adNameCounter = false;
    } else {
      compName.style.border = "1px solid rgba(133, 158, 189, 1)";
      adNameCounter = true;
    }
  }; // Email Validation


  var emailValidation = function emailValidation() {
    if (compEmail.value == "" || emailValidator.test(compEmail.value) == false) {
      compEmail.style.border = "1px solid red";
      adEmailCounter = false;
    } else {
      compEmail.style.border = "1px solid rgba(133, 158, 189, 1)";
      adEmailCounter = true;
    }
  }; // Website Validation


  var websiteValidation = function websiteValidation() {
    if (compWebsite.value == "") {
      compWebsite.style.border = "1px solid red";
      adWebsiteCounter = false;
    } else {
      compWebsite.style.border = "1px solid rgba(133, 158, 189, 1)";
      adWebsiteCounter = true;
    }
  }; // // Logo Validation
  // function logoValidation(){
  //   if (compLogo.files.length == 0){
  //     compLogo.style.border = "1px solid red";
  //     compLogoTick.style.display = "none";
  //     adLogoCounter = false;
  //   } else {
  //     compLogo.style.border = "1px solid rgba(133, 158, 189, 1)";
  //     compLogoTick.style.display = "flex";
  //     adLogoCounter = true;
  //   }
  // }


  var addCompSection = document.querySelector('.new-comp-section');
  var inputContainer = document.querySelector('.input-container');
  var compName = document.querySelector('#comp-name');
  var compEmail = document.querySelector('#comp-email');
  var compWebsite = document.querySelector('#comp-website');
  var compLogo = document.querySelector('#comp-logo');
  var compLogoTick = document.querySelector('.fa-check');
  var compSubmit = document.querySelector('#comp-submit');
  var compClose = document.querySelector('#comp-close');
  var completionNotification = document.querySelector('.completion-notification');
  var completionX = document.querySelector('#close-notification');
  var emailValidator = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var adCounter = false;
  var adNameCounter = false;
  var adEmailCounter = false;
  var adWebsiteCounter = false;
  var adLogoCounter = false; // Click Activation

  compSubmit.addEventListener("click", function (event) {
    if (adCounter == false) {
      event.preventDefault();
      inputsAppear();
    } else {
      nameValidation();
      emailValidation();
      websiteValidation();

      if (adNameCounter == false || adEmailCounter == false || adWebsiteCounter == false) {
        event.preventDefault();
      } else {
        inputsDisappear();
        completionNotification.style.display = "flex";
      }
    }
  }); // Close Form Event

  compClose.addEventListener("click", function () {
    inputsDisappear();
  }); // Close Message Event
  // if (isset(addCompSection)) {
  //   completionX.addEventListener("click", function(e){
  //     e.currentTarget.parentNode.style.display = "none";
  //   })
  // }

  completionX.addEventListener("click", function (e) {
    e.currentTarget.parentNode.style.display = "none";
  });
}

/***/ }),

/***/ "./resources/js/add-employee.js":
/*!**************************************!*\
  !*** ./resources/js/add-employee.js ***!
  \**************************************/
/***/ (() => {

var companyPage = document.querySelector('.company-container');

if (companyPage) {
  // Inputs Appearing
  var inputsAppear = function inputsAppear() {
    inputContainer.style.display = "flex";
    inputContainer.style.animation = "add-em-appear 500ms forwards";
    adCounter = true;
  }; // Inputs Disappearing


  var inputsDisappear = function inputsDisappear() {
    inputContainer.style.animation = "add-em-disappear 500ms forwards";
    setTimeout(function () {
      inputContainer.style.display = "none";
    }, 500);
    adCounter = false;
  }; // VALIDATION FUNTIONS
  // First Name Validation


  var firstNameValidation = function firstNameValidation() {
    if (emFirstName.value == "") {
      emFirstName.style.border = "1px solid red";
      adFirstNameCounter = false;
    } else {
      emFirstName.style.border = "1px solid rgba(133, 158, 189, 1)";
      adFirstNameCounter = true;
    }
  }; // Last Name Validation


  var lastNameValidation = function lastNameValidation() {
    if (emLastName.value == "") {
      emLastName.style.border = "1px solid red";
      adLastNameCounter = false;
    } else {
      emLastName.style.border = "1px solid rgba(133, 158, 189, 1)";
      adLastNameCounter = true;
    }
  }; // Email Validation


  var emailValidation = function emailValidation() {
    if (emEmail.value == "" || emailValidator.test(emEmail.value) == false) {
      emEmail.style.border = "1px solid red";
      adEmailCounter = false;
    } else {
      emEmail.style.border = "1px solid rgba(133, 158, 189, 1)";
      adEmailCounter = true;
    }
  }; // Phone Validation


  var phoneValidation = function phoneValidation() {
    if (emPhone.value == "") {
      emPhone.style.border = "1px solid red";
      adPhoneCounter = false;
    } else {
      emPhone.style.border = "1px solid rgba(133, 158, 189, 1)";
      adPhoneCounter = true;
    }
  }; // Company Validation


  var companyValidation = function companyValidation() {
    if (emCompany.value == "") {
      emCompany.style.border = "1px solid red";
      adCompanyCounter = false;
    } else {
      emCompany.style.border = "1px solid rgba(133, 158, 189, 1)";
      adCompanyCounter = true;
    }
  };

  var addEmployeeSection = document.querySelector('.new-employee-section');
  var inputContainer = document.querySelector('.input-container');
  var emFirstName = document.querySelector('#employee-firstname');
  var emLastName = document.querySelector('#employee-lastname');
  var emEmail = document.querySelector('#employee-email');
  var emPhone = document.querySelector('#employee-phone');
  var emCompany = document.querySelector('#employee-company');
  var emSubmit = document.querySelector('#employee-submit');
  var emClose = document.querySelector('#employee-close');
  var completionNotification = document.querySelector('.completion-notification');
  var completionX = document.querySelector('#close-notification');
  var emailValidator = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var adCounter = false;
  var adFirstNameCounter = false;
  var adLastNameCounter = false;
  var adEmailCounter = false;
  var adPhoneCounter = false;
  var adCompanyCounter = false; // Click Activation

  emSubmit.addEventListener("click", function (event) {
    if (adCounter == false) {
      event.preventDefault();
      inputsAppear();
    } else {
      firstNameValidation();
      lastNameValidation();
      emailValidation();
      phoneValidation();
      companyValidation();

      if (adFirstNameCounter == false || adLastNameCounter == false || adEmailCounter == false || adPhoneCounter == false || adCompanyCounter == false) {
        event.preventDefault();
      } else {
        inputsDisappear();
        completionNotification.style.display = "flex";
      }
    }
  }); // Close Form Event

  emClose.addEventListener("click", function () {
    inputsDisappear();
  }); // Close Message Event

  completionX.addEventListener("click", function (e) {
    e.currentTarget.parentNode.style.display = "none";
  });
}

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// require('./bootstrap');
__webpack_require__(/*! ./page-v */ "./resources/js/page-v.js");

__webpack_require__(/*! ./add-company */ "./resources/js/add-company.js");

__webpack_require__(/*! ./add-employee */ "./resources/js/add-employee.js");

/***/ }),

/***/ "./resources/js/page-v.js":
/*!********************************!*\
  !*** ./resources/js/page-v.js ***!
  \********************************/
/***/ (() => {

var loginPage = document.querySelector('.login-container');
var dashboard = document.querySelector('.dashboard-container');
var header = document.querySelector('header');
var dashboardButton = document.querySelector('#dashboard-button');

if (loginPage) {
  header.style.display = 'none';
}

if (dashboard) {
  dashboardButton.style.display = 'none';
}

if (dashboard) {
  dashboardButton.style.display = 'none';
}

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/sass/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;