webpackHotUpdate_N_E("pages/releases",{

/***/ "./pages/releases.js":
/*!***************************!*\
  !*** ./pages/releases.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Purchase; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Releases_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Releases.module.css */ "./styles/Releases.module.css");
/* harmony import */ var _styles_Releases_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Releases_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./pages/header.js");
/* harmony import */ var _db_data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../db/data.json */ "./db/data.json");
var _db_data_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../db/data.json */ "./db/data.json", 1);
/* harmony import */ var _song_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./song.js */ "./pages/song.js");
var _jsxFileName = "/mnt/c/Users/josep/Documents/personal-projects/joseph-productions/pages/releases.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Purchase() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      currentSong = _useState[0],
      setCurrentSong = _useState[1];

  var audioRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  function changeSong(songName) {
    audioRef.current.pause();
    audioRef.current.setAttribute('src', songName);
    audioRef.current.load();
    audioRef.current.play();
  }

  return __jsx("div", {
    className: _styles_Releases_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx("h1", {
    className: _styles_Releases_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.releases,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, "Releases"), __jsx("audio", {
    ref: audioRef,
    controls: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("source", {
    src: currentSong,
    type: "audio/mp3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_Releases_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.albums,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(Play, {
    changeSong: changeSong,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }))));
}

_s(Purchase, "c0hE4GnrqnXttvMWZpGg6zL81Sg=");

_c = Purchase;

var _c;

$RefreshReg$(_c, "Purchase");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/song.js":
/*!***********************!*\
  !*** ./pages/song.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return song; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/mnt/c/Users/josep/Documents/personal-projects/joseph-productions/pages/song.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function song(data) {
  return __jsx("button", {
    onClick: function onClick() {
      return changeSong("/Ocean.mp3");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, "Play");
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVsZWFzZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NvbmcuanMiXSwibmFtZXMiOlsiUHVyY2hhc2UiLCJ1c2VTdGF0ZSIsImN1cnJlbnRTb25nIiwic2V0Q3VycmVudFNvbmciLCJhdWRpb1JlZiIsInVzZVJlZiIsImNoYW5nZVNvbmciLCJzb25nTmFtZSIsImN1cnJlbnQiLCJwYXVzZSIsInNldEF0dHJpYnV0ZSIsImxvYWQiLCJwbGF5Iiwic3R5bGVzIiwiY29udGFpbmVyIiwicmVsZWFzZXMiLCJhbGJ1bXMiLCJzb25nIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQUEsa0JBRUtDLHNEQUFRLENBQUMsRUFBRCxDQUZiO0FBQUEsTUFFMUJDLFdBRjBCO0FBQUEsTUFFYkMsY0FGYTs7QUFHakMsTUFBTUMsUUFBUSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBdkI7O0FBRUEsV0FBU0MsVUFBVCxDQUFvQkMsUUFBcEIsRUFBOEI7QUFDNUJILFlBQVEsQ0FBQ0ksT0FBVCxDQUFpQkMsS0FBakI7QUFDQUwsWUFBUSxDQUFDSSxPQUFULENBQWlCRSxZQUFqQixDQUE4QixLQUE5QixFQUFxQ0gsUUFBckM7QUFDQUgsWUFBUSxDQUFDSSxPQUFULENBQWlCRyxJQUFqQjtBQUNBUCxZQUFRLENBQUNJLE9BQVQsQ0FBaUJJLElBQWpCO0FBQ0Q7O0FBRUQsU0FDRTtBQUFLLGFBQVMsRUFBRUMsa0VBQU0sQ0FBQ0MsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSSxhQUFTLEVBQUVELGtFQUFNLENBQUNFLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsRUFHRTtBQUFPLE9BQUcsRUFBRVgsUUFBWjtBQUFzQixZQUFRLE1BQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLE9BQUcsRUFBRUYsV0FBYjtBQUEwQixRQUFJLEVBQUMsV0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSEYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVXLGtFQUFNLENBQUNHLE1BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLElBQUQ7QUFBTSxjQUFVLEVBQUVWLFVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBTkYsQ0FERjtBQWNEOztHQTFCdUJOLFE7O0tBQUFBLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTlQsU0FBU2lCLElBQVQsQ0FBY0MsSUFBZCxFQUFvQjtBQUNqQyxTQUNFO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTVosVUFBVSxDQUFDLFlBQUQsQ0FBaEI7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFHRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWxlYXNlcy41ZTFmMDU2ZjJhOTYyY2Y4MTVhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvUmVsZWFzZXMubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xyXG5pbXBvcnQgZGF0YSBmcm9tICcuLi9kYi9kYXRhLmpzb24nO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTb25nIGZyb20gJy4vc29uZy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQdXJjaGFzZSgpIHtcclxuXHJcbiAgY29uc3QgW2N1cnJlbnRTb25nLCBzZXRDdXJyZW50U29uZ10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBhdWRpb1JlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgZnVuY3Rpb24gY2hhbmdlU29uZyhzb25nTmFtZSkge1xyXG4gICAgYXVkaW9SZWYuY3VycmVudC5wYXVzZSgpO1xyXG4gICAgYXVkaW9SZWYuY3VycmVudC5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNvbmdOYW1lKTtcclxuICAgIGF1ZGlvUmVmLmN1cnJlbnQubG9hZCgpO1xyXG4gICAgYXVkaW9SZWYuY3VycmVudC5wbGF5KCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5yZWxlYXNlc30+UmVsZWFzZXM8L2gxPlxyXG4gICAgICA8YXVkaW8gcmVmPXthdWRpb1JlZn0gY29udHJvbHM+XHJcbiAgICAgICAgPHNvdXJjZSBzcmM9e2N1cnJlbnRTb25nfSB0eXBlPVwiYXVkaW8vbXAzXCIgLz5cclxuICAgICAgPC9hdWRpbz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFsYnVtc30+XHJcbiAgICAgICAgICA8UGxheSBjaGFuZ2VTb25nPXtjaGFuZ2VTb25nfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzb25nKGRhdGEpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VTb25nKFwiL09jZWFuLm1wM1wiKX0+UGxheTwvYnV0dG9uPlxyXG4gICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9