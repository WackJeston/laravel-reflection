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

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n   ╷\n17 │ @import '~@fortawesome/fontawesome-free/scss/brands';\r\n   │         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n   ╵\n  resources\\sass\\app.scss 17:9  root stylesheet\n    at processResult (C:\\laragon\\www\\laravel-reflection\\node_modules\\webpack\\lib\\NormalModule.js:758:19)\n    at C:\\laragon\\www\\laravel-reflection\\node_modules\\webpack\\lib\\NormalModule.js:860:5\n    at C:\\laragon\\www\\laravel-reflection\\node_modules\\loader-runner\\lib\\LoaderRunner.js:399:11\n    at C:\\laragon\\www\\laravel-reflection\\node_modules\\loader-runner\\lib\\LoaderRunner.js:251:18\n    at context.callback (C:\\laragon\\www\\laravel-reflection\\node_modules\\loader-runner\\lib\\LoaderRunner.js:124:13)\n    at C:\\laragon\\www\\laravel-reflection\\node_modules\\sass-loader\\dist\\index.js:54:7\n    at Function.call$2 (C:\\laragon\\www\\laravel-reflection\\node_modules\\sass\\sass.dart.js:99051:16)\n    at render_closure1.call$2 (C:\\laragon\\www\\laravel-reflection\\node_modules\\sass\\sass.dart.js:84557:12)\n    at _RootZone.runBinary$3$3 (C:\\laragon\\www\\laravel-reflection\\node_modules\\sass\\sass.dart.js:29579:18)\n    at _FutureListener.handleError$1 (C:\\laragon\\www\\laravel-reflection\\node_modules\\sass\\sass.dart.js:28099:21)");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./resources/js/app.js");
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/sass/app.scss");
/******/ 	
/******/ })()
;