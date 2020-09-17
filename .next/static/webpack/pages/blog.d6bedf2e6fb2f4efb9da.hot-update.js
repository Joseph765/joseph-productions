webpackHotUpdate_N_E("pages/blog",{

/***/ "./components/videos.js":
/*!******************************!*\
  !*** ./components/videos.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Videos; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_videos_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/videos.module.css */ "./components/styles/videos.module.css");
/* harmony import */ var _styles_videos_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_videos_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/mnt/c/Users/josep/Documents/personal-projects/joseph-productions/components/videos.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Videos() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      videos = _useState[0],
      setVideos = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_1___default()({
      method: 'get',
      url: "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=UUfAdLF-Ys_mxjBUHaRRjYpA&key=".concat("AIzaSyBCMKLOIvJ68HAzA_w6bSl4f1F2JQa-WnE")
    }).then(function (res) {
      setVideos(res.data.items);
    })["catch"](function (error) {
      console.log(error);
    });
  }, []);
  return __jsx("div", {
    className: _styles_videos_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.videos,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, videos.map(function (item) {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }, item.snippet.title), __jsx("iframe", {
      width: "460",
      height: "315",
      src: "https://www.youtube.com/embed/".concat(item.snippet.resourceId.videoId),
      frameBorder: "0",
      allowFullScreen: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }
    }));
  }));
}

_s(Videos, "39g9r2hk3cJXA16k+db4Z3Rqykw=");

_c = Videos;

var _c;

$RefreshReg$(_c, "Videos");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy92aWRlb3MuanMiXSwibmFtZXMiOlsiVmlkZW9zIiwidXNlU3RhdGUiLCJ2aWRlb3MiLCJzZXRWaWRlb3MiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIm1ldGhvZCIsInVybCIsInByb2Nlc3MiLCJ0aGVuIiwicmVzIiwiZGF0YSIsIml0ZW1zIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwibWFwIiwiaXRlbSIsInNuaXBwZXQiLCJ0aXRsZSIsInJlc291cmNlSWQiLCJ2aWRlb0lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDSEMsc0RBQVEsQ0FBQyxFQUFELENBREw7QUFBQSxNQUN4QkMsTUFEd0I7QUFBQSxNQUNoQkMsU0FEZ0I7O0FBRy9CQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsZ0RBQUssQ0FBQztBQUNKQyxZQUFNLEVBQUUsS0FESjtBQUVKQyxTQUFHLG1JQUE0SEMseUNBQTVIO0FBRkMsS0FBRCxDQUFMLENBSUNDLElBSkQsQ0FJTSxVQUFDQyxHQUFELEVBQVM7QUFDYlAsZUFBUyxDQUFDTyxHQUFHLENBQUNDLElBQUosQ0FBU0MsS0FBVixDQUFUO0FBQ0QsS0FORCxXQU9PLFVBQUFDLEtBQUssRUFBSTtBQUNkQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNELEtBVEQ7QUFVRCxHQVhRLEVBV04sRUFYTSxDQUFUO0FBY0EsU0FDRTtBQUFLLGFBQVMsRUFBRUcsZ0VBQU0sQ0FBQ2QsTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxNQUFNLENBQUNlLEdBQVAsQ0FBWSxVQUFBQyxJQUFJLEVBQUk7QUFDbkIsV0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLQSxJQUFJLENBQUNDLE9BQUwsQ0FBYUMsS0FBbEIsQ0FERixFQUVFO0FBQVEsV0FBSyxFQUFDLEtBQWQ7QUFBb0IsWUFBTSxFQUFDLEtBQTNCO0FBQWlDLFNBQUcsMENBQW1DRixJQUFJLENBQUNDLE9BQUwsQ0FBYUUsVUFBYixDQUF3QkMsT0FBM0QsQ0FBcEM7QUFBMEcsaUJBQVcsRUFBQyxHQUF0SDtBQUEwSCxxQkFBZSxNQUF6STtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkYsQ0FERjtBQVFELEdBVEEsQ0FESCxDQURGO0FBY0Q7O0dBL0J1QnRCLE07O0tBQUFBLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy5kNmJlZGYyZTZmYjJmNGVmYjlkYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy92aWRlb3MubW9kdWxlLmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWRlb3MoKSB7XHJcbiAgY29uc3QgW3ZpZGVvcywgc2V0VmlkZW9zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgdXJsOiBgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My9wbGF5bGlzdEl0ZW1zP3BhcnQ9c25pcHBldCZtYXhSZXN1bHRzPTIwJnBsYXlsaXN0SWQ9VVVmQWRMRi1Zc19teGpCVUhhUlJqWXBBJmtleT0ke3Byb2Nlc3MuZW52LllvdVR1YmVfQVBJX0tFWV9WM31gLFxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgc2V0VmlkZW9zKHJlcy5kYXRhLml0ZW1zKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWRlb3N9PlxyXG4gICAgICB7dmlkZW9zLm1hcCggaXRlbSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMj57aXRlbS5zbmlwcGV0LnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgIDxpZnJhbWUgd2lkdGg9XCI0NjBcIiBoZWlnaHQ9XCIzMTVcIiBzcmM9e2BodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke2l0ZW0uc25pcHBldC5yZXNvdXJjZUlkLnZpZGVvSWR9YH0gZnJhbWVCb3JkZXI9XCIwXCIgYWxsb3dGdWxsU2NyZWVuPlxyXG5cclxuICAgICAgICAgICAgPC9pZnJhbWU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=