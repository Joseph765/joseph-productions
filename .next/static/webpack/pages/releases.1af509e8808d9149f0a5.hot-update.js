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
var _jsxFileName = "/mnt/c/Users/josep/Documents/personal-projects/joseph-productions/pages/releases.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Purchase() {
  function createAlbum(cover) {
    var songs = [];

    for (var i = 0; i < 10; i++) {
      songs.push(__jsx("audio", {
        controls: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 18
        }
      }, __jsx("source", {
        src: _db_data_json__WEBPACK_IMPORTED_MODULE_3__[0].link,
        type: "audio/mp3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 9
        }
      })));
    }

    var album = __jsx("div", {
      className: _styles_Releases_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.album,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 7
      }
    }, __jsx("img", {
      className: _styles_Releases_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.albumCover,
      src: cover,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }
    }), __jsx("div", {
      className: _styles_Releases_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.songs,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    }, songs));

    return album;
  }

  return __jsx("div", {
    className: _styles_Releases_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx(_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), __jsx("h1", {
    className: _styles_Releases_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.releases,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, "Releases"), __jsx("audio", {
    controls: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("source", {
    src: _db_data_json__WEBPACK_IMPORTED_MODULE_3__[0].link,
    type: "audio/mp3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_Releases_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.albums,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, createAlbum("/hawaii_part_ii.jpg"), createAlbum("/2020.jpg"), createAlbum("/USA.jpg"), createAlbum("/mystic_familiar.jpg"))));
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVsZWFzZXMuanMiXSwibmFtZXMiOlsiUHVyY2hhc2UiLCJjcmVhdGVBbGJ1bSIsImNvdmVyIiwic29uZ3MiLCJpIiwicHVzaCIsImRhdGEiLCJsaW5rIiwiYWxidW0iLCJzdHlsZXMiLCJhbGJ1bUNvdmVyIiwiY29udGFpbmVyIiwicmVsZWFzZXMiLCJhbGJ1bXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFFBQVQsR0FBb0I7QUFJakMsV0FBU0MsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFFMUIsUUFBSUMsS0FBSyxHQUFHLEVBQVo7O0FBQ0EsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEVBQXBCLEVBQXdCQSxDQUFDLEVBQXpCLEVBQThCO0FBQzVCRCxXQUFLLENBQUNFLElBQU4sQ0FBVztBQUFPLGdCQUFRLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNUO0FBQVEsV0FBRyxFQUFFQywwQ0FBSSxDQUFDLENBQUQsQ0FBSixDQUFRQyxJQUFyQjtBQUEyQixZQUFJLEVBQUMsV0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURTLENBQVg7QUFHRDs7QUFFRCxRQUFNQyxLQUFLLEdBQ1Q7QUFBSyxlQUFTLEVBQUVDLGtFQUFNLENBQUNELEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBRUMsa0VBQU0sQ0FBQ0MsVUFBdkI7QUFBbUMsU0FBRyxFQUFFUixLQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRTtBQUFLLGVBQVMsRUFBRU8sa0VBQU0sQ0FBQ04sS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHQSxLQURILENBRkYsQ0FERjs7QUFRRSxXQUFPSyxLQUFQO0FBQ0g7O0FBRUQsU0FDRTtBQUFLLGFBQVMsRUFBRUMsa0VBQU0sQ0FBQ0UsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSSxhQUFTLEVBQUVGLGtFQUFNLENBQUNHLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsRUFHRTtBQUFPLFlBQVEsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxPQUFHLEVBQUVOLDBDQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFDLElBQXJCO0FBQTJCLFFBQUksRUFBQyxXQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FIRixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUUsa0VBQU0sQ0FBQ0ksTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHWixXQUFXLENBQUMscUJBQUQsQ0FEZCxFQUVHQSxXQUFXLENBQUMsV0FBRCxDQUZkLEVBR0dBLFdBQVcsQ0FBQyxVQUFELENBSGQsRUFJR0EsV0FBVyxDQUFDLHNCQUFELENBSmQsQ0FERixDQU5GLENBREY7QUFpQkQ7S0F6Q3VCRCxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlbGVhc2VzLjFhZjUwOWU4ODA4ZDkxNDlmMGE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9SZWxlYXNlcy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcic7XHJcbmltcG9ydCBkYXRhIGZyb20gJy4uL2RiL2RhdGEuanNvbic7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQdXJjaGFzZSgpIHtcclxuXHJcblxyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVBbGJ1bShjb3Zlcikge1xyXG5cclxuICAgIHZhciBzb25ncyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArKykge1xyXG4gICAgICBzb25ncy5wdXNoKDxhdWRpbyBjb250cm9scz5cclxuICAgICAgICA8c291cmNlIHNyYz17ZGF0YVswXS5saW5rfSB0eXBlPVwiYXVkaW8vbXAzXCIgLz5cclxuICAgICAgPC9hdWRpbz4pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFsYnVtID1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hbGJ1bX0+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5hbGJ1bUNvdmVyfSBzcmM9e2NvdmVyfSAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc29uZ3N9PlxyXG4gICAgICAgICAge3NvbmdzfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj47XHJcblxyXG4gICAgICByZXR1cm4gYWxidW07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5yZWxlYXNlc30+UmVsZWFzZXM8L2gxPlxyXG4gICAgICA8YXVkaW8gY29udHJvbHM+XHJcbiAgICAgICAgPHNvdXJjZSBzcmM9e2RhdGFbMF0ubGlua30gdHlwZT1cImF1ZGlvL21wM1wiIC8+XHJcbiAgICAgIDwvYXVkaW8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hbGJ1bXN9PlxyXG4gICAgICAgICAge2NyZWF0ZUFsYnVtKFwiL2hhd2FpaV9wYXJ0X2lpLmpwZ1wiKX1cclxuICAgICAgICAgIHtjcmVhdGVBbGJ1bShcIi8yMDIwLmpwZ1wiKX1cclxuICAgICAgICAgIHtjcmVhdGVBbGJ1bShcIi9VU0EuanBnXCIpfVxyXG4gICAgICAgICAge2NyZWF0ZUFsYnVtKFwiL215c3RpY19mYW1pbGlhci5qcGdcIil9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=