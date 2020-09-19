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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      playing = _useState2[0],
      setPlaying = _useState2[1];

  var audioRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  function changeSong(songName) {
    if (songName === songPlaying) {
      if (playing) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    } else {
      audioRef.current.pause();
      audioRef.current.setAttribute('src', songName);
      audioRef.current.load();
      audioRef.current.play();
    }
  }

  return __jsx("div", {
    className: _styles_Releases_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx(_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }), __jsx("h1", {
    className: _styles_Releases_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.releases,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, "Releases"), __jsx("audio", {
    ref: audioRef,
    controls: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("source", {
    src: currentSong,
    type: "audio/mp3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_Releases_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.albums,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(_song_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    changeSong: changeSong,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }))));
}

_s(Purchase, "570Z9mW8YV5wZY6Ylif7FQQO2Ds=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVsZWFzZXMuanMiXSwibmFtZXMiOlsiUHVyY2hhc2UiLCJ1c2VTdGF0ZSIsImN1cnJlbnRTb25nIiwic2V0Q3VycmVudFNvbmciLCJwbGF5aW5nIiwic2V0UGxheWluZyIsImF1ZGlvUmVmIiwidXNlUmVmIiwiY2hhbmdlU29uZyIsInNvbmdOYW1lIiwic29uZ1BsYXlpbmciLCJjdXJyZW50IiwicGF1c2UiLCJwbGF5Iiwic2V0QXR0cmlidXRlIiwibG9hZCIsInN0eWxlcyIsImNvbnRhaW5lciIsInJlbGVhc2VzIiwiYWxidW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQSxrQkFFS0Msc0RBQVEsQ0FBQyxFQUFELENBRmI7QUFBQSxNQUUxQkMsV0FGMEI7QUFBQSxNQUViQyxjQUZhOztBQUFBLG1CQUdIRixzREFBUSxDQUFDLEtBQUQsQ0FITDtBQUFBLE1BRzFCRyxPQUgwQjtBQUFBLE1BR2pCQyxVQUhpQjs7QUFJakMsTUFBTUMsUUFBUSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBdkI7O0FBRUEsV0FBU0MsVUFBVCxDQUFvQkMsUUFBcEIsRUFBOEI7QUFDNUIsUUFBSUEsUUFBUSxLQUFLQyxXQUFqQixFQUE4QjtBQUM1QixVQUFJTixPQUFKLEVBQWE7QUFDWEUsZ0JBQVEsQ0FBQ0ssT0FBVCxDQUFpQkMsS0FBakI7QUFDRCxPQUZELE1BRU87QUFDTE4sZ0JBQVEsQ0FBQ0ssT0FBVCxDQUFpQkUsSUFBakI7QUFDRDtBQUNGLEtBTkQsTUFNTztBQUNMUCxjQUFRLENBQUNLLE9BQVQsQ0FBaUJDLEtBQWpCO0FBQ0FOLGNBQVEsQ0FBQ0ssT0FBVCxDQUFpQkcsWUFBakIsQ0FBOEIsS0FBOUIsRUFBcUNMLFFBQXJDO0FBQ0FILGNBQVEsQ0FBQ0ssT0FBVCxDQUFpQkksSUFBakI7QUFDQVQsY0FBUSxDQUFDSyxPQUFULENBQWlCRSxJQUFqQjtBQUNEO0FBQ0Y7O0FBRUQsU0FDRTtBQUFLLGFBQVMsRUFBRUcsa0VBQU0sQ0FBQ0MsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSSxhQUFTLEVBQUVELGtFQUFNLENBQUNFLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsRUFHRTtBQUFPLE9BQUcsRUFBRVosUUFBWjtBQUFzQixZQUFRLE1BQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLE9BQUcsRUFBRUosV0FBYjtBQUEwQixRQUFJLEVBQUMsV0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSEYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVjLGtFQUFNLENBQUNHLE1BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sY0FBVSxFQUFFWCxVQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQU5GLENBREY7QUFjRDs7R0FuQ3VCUixROztLQUFBQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlbGVhc2VzLmZlYWNmMGFiNzk3MzI2Mzg2NzEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9SZWxlYXNlcy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcic7XHJcbmltcG9ydCBkYXRhIGZyb20gJy4uL2RiL2RhdGEuanNvbic7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNvbmcgZnJvbSAnLi9zb25nLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFB1cmNoYXNlKCkge1xyXG5cclxuICBjb25zdCBbY3VycmVudFNvbmcsIHNldEN1cnJlbnRTb25nXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW3BsYXlpbmcsIHNldFBsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBmdW5jdGlvbiBjaGFuZ2VTb25nKHNvbmdOYW1lKSB7XHJcbiAgICBpZiAoc29uZ05hbWUgPT09IHNvbmdQbGF5aW5nKSB7XHJcbiAgICAgIGlmIChwbGF5aW5nKSB7XHJcbiAgICAgICAgYXVkaW9SZWYuY3VycmVudC5wYXVzZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGF1ZGlvUmVmLmN1cnJlbnQucGxheSgpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhdWRpb1JlZi5jdXJyZW50LnBhdXNlKCk7XHJcbiAgICAgIGF1ZGlvUmVmLmN1cnJlbnQuc2V0QXR0cmlidXRlKCdzcmMnLCBzb25nTmFtZSk7XHJcbiAgICAgIGF1ZGlvUmVmLmN1cnJlbnQubG9hZCgpO1xyXG4gICAgICBhdWRpb1JlZi5jdXJyZW50LnBsYXkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnJlbGVhc2VzfT5SZWxlYXNlczwvaDE+XHJcbiAgICAgIDxhdWRpbyByZWY9e2F1ZGlvUmVmfSBjb250cm9scz5cclxuICAgICAgICA8c291cmNlIHNyYz17Y3VycmVudFNvbmd9IHR5cGU9XCJhdWRpby9tcDNcIiAvPlxyXG4gICAgICA8L2F1ZGlvPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWxidW1zfT5cclxuICAgICAgICAgIDxTb25nIGNoYW5nZVNvbmc9e2NoYW5nZVNvbmd9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=