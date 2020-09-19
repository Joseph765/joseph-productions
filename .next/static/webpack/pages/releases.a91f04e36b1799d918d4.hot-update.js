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
    audioRef.pause();
    audioRef.setAttribute('src', songName);
    audioRef.load();
    audioRef.play();
  }

  return __jsx("div", {
    className: _styles_Releases_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx("h1", {
    className: _styles_Releases_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.releases,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, "Releases"), __jsx("audio", {
    ref: audioRef,
    controls: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("source", {
    src: currentSong,
    type: "audio/mp3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_Releases_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.albums,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("button", {
    onClick: function onClick() {
      return changeSong("/Ocean.mp3");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, "Ocean.wav"))));
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVsZWFzZXMuanMiXSwibmFtZXMiOlsiUHVyY2hhc2UiLCJ1c2VTdGF0ZSIsImN1cnJlbnRTb25nIiwic2V0Q3VycmVudFNvbmciLCJhdWRpb1JlZiIsInVzZVJlZiIsImNoYW5nZVNvbmciLCJzb25nTmFtZSIsInBhdXNlIiwic2V0QXR0cmlidXRlIiwibG9hZCIsInBsYXkiLCJzdHlsZXMiLCJjb250YWluZXIiLCJyZWxlYXNlcyIsImFsYnVtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQUEsa0JBRUtDLHNEQUFRLENBQUMsRUFBRCxDQUZiO0FBQUEsTUFFMUJDLFdBRjBCO0FBQUEsTUFFYkMsY0FGYTs7QUFHakMsTUFBTUMsUUFBUSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBdkI7O0FBRUEsV0FBU0MsVUFBVCxDQUFvQkMsUUFBcEIsRUFBOEI7QUFDNUJILFlBQVEsQ0FBQ0ksS0FBVDtBQUNBSixZQUFRLENBQUNLLFlBQVQsQ0FBc0IsS0FBdEIsRUFBNkJGLFFBQTdCO0FBQ0FILFlBQVEsQ0FBQ00sSUFBVDtBQUNBTixZQUFRLENBQUNPLElBQVQ7QUFDRDs7QUFFRCxTQUNFO0FBQUssYUFBUyxFQUFFQyxrRUFBTSxDQUFDQyxTQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFJLGFBQVMsRUFBRUQsa0VBQU0sQ0FBQ0UsUUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixFQUdFO0FBQU8sT0FBRyxFQUFFVixRQUFaO0FBQXNCLFlBQVEsTUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsT0FBRyxFQUFFRixXQUFiO0FBQTBCLFFBQUksRUFBQyxXQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FIRixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRVUsa0VBQU0sQ0FBQ0csTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTVQsVUFBVSxDQUFDLFlBQUQsQ0FBaEI7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLENBREYsQ0FORixDQURGO0FBa0JEOztHQTlCdUJOLFE7O0tBQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVsZWFzZXMuYTkxZjA0ZTM2YjE3OTlkOTE4ZDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL1JlbGVhc2VzLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJztcclxuaW1wb3J0IGRhdGEgZnJvbSAnLi4vZGIvZGF0YS5qc29uJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHVyY2hhc2UoKSB7XHJcblxyXG4gIGNvbnN0IFtjdXJyZW50U29uZywgc2V0Q3VycmVudFNvbmddID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgYXVkaW9SZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGZ1bmN0aW9uIGNoYW5nZVNvbmcoc29uZ05hbWUpIHtcclxuICAgIGF1ZGlvUmVmLnBhdXNlKCk7XHJcbiAgICBhdWRpb1JlZi5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNvbmdOYW1lKTtcclxuICAgIGF1ZGlvUmVmLmxvYWQoKTtcclxuICAgIGF1ZGlvUmVmLnBsYXkoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnJlbGVhc2VzfT5SZWxlYXNlczwvaDE+XHJcbiAgICAgIDxhdWRpbyByZWY9e2F1ZGlvUmVmfSBjb250cm9scz5cclxuICAgICAgICA8c291cmNlIHNyYz17Y3VycmVudFNvbmd9IHR5cGU9XCJhdWRpby9tcDNcIiAvPlxyXG4gICAgICA8L2F1ZGlvPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWxidW1zfT5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY2hhbmdlU29uZyhcIi9PY2Vhbi5tcDNcIil9Pk9jZWFuLndhdjwvYnV0dG9uPlxyXG4gICAgICAgICAgey8qIHtjcmVhdGVBbGJ1bShcIi9oYXdhaWlfcGFydF9paS5qcGdcIil9XHJcbiAgICAgICAgICB7Y3JlYXRlQWxidW0oXCIvMjAyMC5qcGdcIil9XHJcbiAgICAgICAgICB7Y3JlYXRlQWxidW0oXCIvVVNBLmpwZ1wiKX1cclxuICAgICAgICAgIHtjcmVhdGVBbGJ1bShcIi9teXN0aWNfZmFtaWxpYXIuanBnXCIpfSAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==