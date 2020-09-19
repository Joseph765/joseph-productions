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
  }, "Ocean.wav"), createAlbum("/hawaii_part_ii.jpg"), createAlbum("/2020.jpg"), createAlbum("/USA.jpg"), createAlbum("/mystic_familiar.jpg"))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVsZWFzZXMuanMiXSwibmFtZXMiOlsiUHVyY2hhc2UiLCJ1c2VTdGF0ZSIsImN1cnJlbnRTb25nIiwic2V0Q3VycmVudFNvbmciLCJhdWRpb1JlZiIsInVzZVJlZiIsImNoYW5nZVNvbmciLCJzb25nTmFtZSIsInBhdXNlIiwic2V0QXR0cmlidXRlIiwibG9hZCIsInBsYXkiLCJzdHlsZXMiLCJjb250YWluZXIiLCJyZWxlYXNlcyIsImFsYnVtcyIsImNyZWF0ZUFsYnVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQSxrQkFFS0Msc0RBQVEsQ0FBQyxFQUFELENBRmI7QUFBQSxNQUUxQkMsV0FGMEI7QUFBQSxNQUViQyxjQUZhOztBQUdqQyxNQUFNQyxRQUFRLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF2Qjs7QUFFQSxXQUFTQyxVQUFULENBQW9CQyxRQUFwQixFQUE4QjtBQUM1QkgsWUFBUSxDQUFDSSxLQUFUO0FBQ0FKLFlBQVEsQ0FBQ0ssWUFBVCxDQUFzQixLQUF0QixFQUE2QkYsUUFBN0I7QUFDQUgsWUFBUSxDQUFDTSxJQUFUO0FBQ0FOLFlBQVEsQ0FBQ08sSUFBVDtBQUNEOztBQUVELFNBQ0U7QUFBSyxhQUFTLEVBQUVDLGtFQUFNLENBQUNDLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUksYUFBUyxFQUFFRCxrRUFBTSxDQUFDRSxRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLEVBR0U7QUFBTyxPQUFHLEVBQUVWLFFBQVo7QUFBc0IsWUFBUSxNQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxPQUFHLEVBQUVGLFdBQWI7QUFBMEIsUUFBSSxFQUFDLFdBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUhGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFVSxrRUFBTSxDQUFDRyxNQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNVCxVQUFVLENBQUMsWUFBRCxDQUFoQjtBQUFBLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFR1UsV0FBVyxDQUFDLHFCQUFELENBRmQsRUFHR0EsV0FBVyxDQUFDLFdBQUQsQ0FIZCxFQUlHQSxXQUFXLENBQUMsVUFBRCxDQUpkLEVBS0dBLFdBQVcsQ0FBQyxzQkFBRCxDQUxkLENBREYsQ0FORixDQURGO0FBa0JEOztHQTlCdUJoQixROztLQUFBQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlbGVhc2VzLjFlMmQ1ZGJlODM4ZTdlNDdlNGFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9SZWxlYXNlcy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcic7XHJcbmltcG9ydCBkYXRhIGZyb20gJy4uL2RiL2RhdGEuanNvbic7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFB1cmNoYXNlKCkge1xyXG5cclxuICBjb25zdCBbY3VycmVudFNvbmcsIHNldEN1cnJlbnRTb25nXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBmdW5jdGlvbiBjaGFuZ2VTb25nKHNvbmdOYW1lKSB7XHJcbiAgICBhdWRpb1JlZi5wYXVzZSgpO1xyXG4gICAgYXVkaW9SZWYuc2V0QXR0cmlidXRlKCdzcmMnLCBzb25nTmFtZSk7XHJcbiAgICBhdWRpb1JlZi5sb2FkKCk7XHJcbiAgICBhdWRpb1JlZi5wbGF5KCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5yZWxlYXNlc30+UmVsZWFzZXM8L2gxPlxyXG4gICAgICA8YXVkaW8gcmVmPXthdWRpb1JlZn0gY29udHJvbHM+XHJcbiAgICAgICAgPHNvdXJjZSBzcmM9e2N1cnJlbnRTb25nfSB0eXBlPVwiYXVkaW8vbXAzXCIgLz5cclxuICAgICAgPC9hdWRpbz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFsYnVtc30+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGNoYW5nZVNvbmcoXCIvT2NlYW4ubXAzXCIpfT5PY2Vhbi53YXY8L2J1dHRvbj5cclxuICAgICAgICAgIHtjcmVhdGVBbGJ1bShcIi9oYXdhaWlfcGFydF9paS5qcGdcIil9XHJcbiAgICAgICAgICB7Y3JlYXRlQWxidW0oXCIvMjAyMC5qcGdcIil9XHJcbiAgICAgICAgICB7Y3JlYXRlQWxidW0oXCIvVVNBLmpwZ1wiKX1cclxuICAgICAgICAgIHtjcmVhdGVBbGJ1bShcIi9teXN0aWNfZmFtaWxpYXIuanBnXCIpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9