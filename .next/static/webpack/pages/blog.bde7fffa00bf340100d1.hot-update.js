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
      console.log(res);
      setVideos(res.data.items);
    })["catch"](function (error) {
      console.log(error);
    });
  }, []);
  return __jsx("div", {
    className: "videos",
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
      src: "\"https://www.youtube.com/embed/".concat(item.snippet.resourceId.videoId),
      title: item.snippet.title,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy92aWRlb3MuanMiXSwibmFtZXMiOlsiVmlkZW9zIiwidXNlU3RhdGUiLCJ2aWRlb3MiLCJzZXRWaWRlb3MiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIm1ldGhvZCIsInVybCIsInByb2Nlc3MiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJpdGVtcyIsImVycm9yIiwibWFwIiwiaXRlbSIsInNuaXBwZXQiLCJ0aXRsZSIsInJlc291cmNlSWQiLCJ2aWRlb0lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDLEVBQUQsQ0FETDtBQUFBLE1BQ3hCQyxNQUR3QjtBQUFBLE1BQ2hCQyxTQURnQjs7QUFHL0JDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxnREFBSyxDQUFDO0FBQ0pDLFlBQU0sRUFBRSxLQURKO0FBRUpDLFNBQUcsbUlBQTRIQyx5Q0FBNUg7QUFGQyxLQUFELENBQUwsQ0FJQ0MsSUFKRCxDQUlNLFVBQUNDLEdBQUQsRUFBUztBQUNiQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBUCxlQUFTLENBQUNPLEdBQUcsQ0FBQ0csSUFBSixDQUFTQyxLQUFWLENBQVQ7QUFDRCxLQVBELFdBUU8sVUFBQUMsS0FBSyxFQUFJO0FBQ2RKLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRyxLQUFaO0FBQ0QsS0FWRDtBQVdELEdBWlEsRUFZTixFQVpNLENBQVQ7QUFlQSxTQUNFO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHYixNQUFNLENBQUNjLEdBQVAsQ0FBWSxVQUFBQyxJQUFJLEVBQUk7QUFDbkIsV0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLQSxJQUFJLENBQUNDLE9BQUwsQ0FBYUMsS0FBbEIsQ0FERixFQUVFO0FBQVEsU0FBRyw0Q0FBb0NGLElBQUksQ0FBQ0MsT0FBTCxDQUFhRSxVQUFiLENBQXdCQyxPQUE1RCxDQUFYO0FBQWtGLFdBQUssRUFBRUosSUFBSSxDQUFDQyxPQUFMLENBQWFDLEtBQXRHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixDQURGO0FBT0QsR0FSQSxDQURILENBREY7QUFhRDs7R0EvQnVCbkIsTTs7S0FBQUEsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9nLmJkZTdmZmZhMDBiZjM0MDEwMGQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlkZW9zKCkge1xyXG4gIGNvbnN0IFt2aWRlb3MsIHNldFZpZGVvc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgIHVybDogYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvcGxheWxpc3RJdGVtcz9wYXJ0PXNuaXBwZXQmbWF4UmVzdWx0cz0yMCZwbGF5bGlzdElkPVVVZkFkTEYtWXNfbXhqQlVIYVJSallwQSZrZXk9JHtwcm9jZXNzLmVudi5Zb3VUdWJlX0FQSV9LRVlfVjN9YCxcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgIHNldFZpZGVvcyhyZXMuZGF0YS5pdGVtcyk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW9zXCI+XHJcbiAgICAgIHt2aWRlb3MubWFwKCBpdGVtID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyPntpdGVtLnNuaXBwZXQudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgPGlmcmFtZSBzcmM9e2BcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7aXRlbS5zbmlwcGV0LnJlc291cmNlSWQudmlkZW9JZH1gfSB0aXRsZT17aXRlbS5zbmlwcGV0LnRpdGxlfT48L2lmcmFtZT5cclxuICAgICAgICAgICAgey8qIDxpbWcgc3JjPXtpdGVtLnNuaXBwZXQudGh1bWJuYWlscy5zdGFuZGFyZC51cmx9IC8+ICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9