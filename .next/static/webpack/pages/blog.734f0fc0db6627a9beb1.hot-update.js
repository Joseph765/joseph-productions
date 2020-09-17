webpackHotUpdate_N_E("pages/blog",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Blog.module.css */ "./styles/Blog.module.css");
/* harmony import */ var _styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./pages/header.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/mnt/c/Users/josep/Documents/personal-projects/joseph-productions/pages/blog.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Blog() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      videos = _useState[0],
      setVideos = _useState[1]; // useEffect(() => {
  // }, []);


  xios({
    method: 'get',
    url: "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=UUfAdLF-Ys_mxjBUHaRRjYpA&key=".concat("AIzaSyBCMKLOIvJ68HAzA_w6bSl4f1F2JQa-WnE")
  }).then(function (res) {
    console.log(res.data.items[0].snippet.thumbnails.standard.url);
    setVideoTitles(res.data.items);
  })["catch"](function (error) {
    console.log(error);
  });
  return __jsx("div", {
    className: _styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx(_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, "Blog"), videos.map(function (item) {
    console.log(item);
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }
    }, item.snippet.title), __jsx("img", {
      src: item.snippet.thumbnails.standard.url,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    }));
  }));
} // export async function getServerSideProps() {
//   // GET https://www.googleapis.com/youtube/v3/channels?part=contentDetails&mine=true&key=[YOUR_API_KEY] HTTP/1.1
//   // GET https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=UCfAdLF-Ys_mxjBUHaRRjYpA&key=[YOUR_API_KEY] HTTP/1.1
//   // UPLOADS ID: "UUfAdLF-Ys_mxjBUHaRRjYpA"
//   // Authorization: Bearer [YOUR_ACCESS_TOKEN]
//   // Accept: application/json
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const uploadId = fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=UUfAdLF-Ys_mxjBUHaRRjYpA&key=${process.env.YouTube_API_KEY_V3}`);
//   //GET https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=UUfAdLF-Ys_mxjBUHaRRjYpA&key=[YOUR_API_KEY] HTTP/1.1
//   // const videoList = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId={${uploadId}}&key={API key}&part=snippet&maxResults=50`);
//   // const videos = await videoList.json()
//   // By returning { props: videos }, the Blog component
//   // will receive `posts` as a prop at build time
//   const videos = JSON.stringify(uploadId);
//   return { props: { videos } }
// }


_s(Blog, "SbG6CMM6FaXD5465NFUm02FT42U=");

_c = Blog;
/* harmony default export */ __webpack_exports__["default"] = (Blog);

var _c;

$RefreshReg$(_c, "Blog");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy5qcyJdLCJuYW1lcyI6WyJCbG9nIiwidXNlU3RhdGUiLCJ2aWRlb3MiLCJzZXRWaWRlb3MiLCJ4aW9zIiwibWV0aG9kIiwidXJsIiwicHJvY2VzcyIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIml0ZW1zIiwic25pcHBldCIsInRodW1ibmFpbHMiLCJzdGFuZGFyZCIsInNldFZpZGVvVGl0bGVzIiwiZXJyb3IiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYXAiLCJpdGVtIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxHQUFpQjtBQUFBOztBQUFBOztBQUFBLGtCQUVhQyxzREFBUSxDQUFDLEVBQUQsQ0FGckI7QUFBQSxNQUVSQyxNQUZRO0FBQUEsTUFFQUMsU0FGQSxpQkFJZjtBQUVBOzs7QUFFQUMsTUFBSSxDQUFDO0FBQ0hDLFVBQU0sRUFBRSxLQURMO0FBRUhDLE9BQUcsbUlBQTRIQyx5Q0FBNUg7QUFGQSxHQUFELENBQUosQ0FJQ0MsSUFKRCxDQUlNLFVBQUNDLEdBQUQsRUFBUztBQUNiQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBRyxDQUFDRyxJQUFKLENBQVNDLEtBQVQsQ0FBZSxDQUFmLEVBQWtCQyxPQUFsQixDQUEwQkMsVUFBMUIsQ0FBcUNDLFFBQXJDLENBQThDVixHQUExRDtBQUNBVyxrQkFBYyxDQUFDUixHQUFHLENBQUNHLElBQUosQ0FBU0MsS0FBVixDQUFkO0FBQ0QsR0FQRCxXQVFPLFVBQUFLLEtBQUssRUFBSTtBQUNkUixXQUFPLENBQUNDLEdBQVIsQ0FBWU8sS0FBWjtBQUNELEdBVkQ7QUFZQSxTQUNFO0FBQUssYUFBUyxFQUFFQyw4REFBTSxDQUFDQyxTQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsRUFHR2xCLE1BQU0sQ0FBQ21CLEdBQVAsQ0FBWSxVQUFBQyxJQUFJLEVBQUk7QUFFbkJaLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVyxJQUFaO0FBRUEsV0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLQSxJQUFJLENBQUNSLE9BQUwsQ0FBYVMsS0FBbEIsQ0FERixFQUVFO0FBQUssU0FBRyxFQUFFRCxJQUFJLENBQUNSLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkMsUUFBeEIsQ0FBaUNWLEdBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixDQURGO0FBT0QsR0FYQSxDQUhILENBREY7QUFtQkQsQyxDQUVEO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztHQW5FU04sSTs7S0FBQUEsSTtBQXFFTUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy43MzRmMGZjMGRiNjYyN2E5YmViMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQmxvZy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcic7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5mdW5jdGlvbiBCbG9nICgpIHtcclxuXHJcbiAgY29uc3QgW3ZpZGVvcywgc2V0VmlkZW9zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgLy8gfSwgW10pO1xyXG5cclxuICB4aW9zKHtcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICB1cmw6IGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL3BsYXlsaXN0SXRlbXM/cGFydD1zbmlwcGV0Jm1heFJlc3VsdHM9MjAmcGxheWxpc3RJZD1VVWZBZExGLVlzX214akJVSGFSUmpZcEEma2V5PSR7cHJvY2Vzcy5lbnYuWW91VHViZV9BUElfS0VZX1YzfWAsXHJcbiAgfSlcclxuICAudGhlbigocmVzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyZXMuZGF0YS5pdGVtc1swXS5zbmlwcGV0LnRodW1ibmFpbHMuc3RhbmRhcmQudXJsKTtcclxuICAgIHNldFZpZGVvVGl0bGVzKHJlcy5kYXRhLml0ZW1zKTtcclxuICB9KVxyXG4gIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPGgxPkJsb2c8L2gxPlxyXG4gICAgICB7dmlkZW9zLm1hcCggaXRlbSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDI+e2l0ZW0uc25pcHBldC50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5zbmlwcGV0LnRodW1ibmFpbHMuc3RhbmRhcmQudXJsfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgfSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxufVxyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuXHJcbi8vICAgLy8gR0VUIGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvY2hhbm5lbHM/cGFydD1jb250ZW50RGV0YWlscyZtaW5lPXRydWUma2V5PVtZT1VSX0FQSV9LRVldIEhUVFAvMS4xXHJcbi8vICAgLy8gR0VUIGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvY2hhbm5lbHM/cGFydD1jb250ZW50RGV0YWlscyZpZD1VQ2ZBZExGLVlzX214akJVSGFSUmpZcEEma2V5PVtZT1VSX0FQSV9LRVldIEhUVFAvMS4xXHJcbi8vICAgLy8gVVBMT0FEUyBJRDogXCJVVWZBZExGLVlzX214akJVSGFSUmpZcEFcIlxyXG5cclxuLy8gICAvLyBBdXRob3JpemF0aW9uOiBCZWFyZXIgW1lPVVJfQUNDRVNTX1RPS0VOXVxyXG4vLyAgIC8vIEFjY2VwdDogYXBwbGljYXRpb24vanNvblxyXG5cclxuXHJcbi8vICAgLy8gQ2FsbCBhbiBleHRlcm5hbCBBUEkgZW5kcG9pbnQgdG8gZ2V0IHBvc3RzLlxyXG4vLyAgIC8vIFlvdSBjYW4gdXNlIGFueSBkYXRhIGZldGNoaW5nIGxpYnJhcnlcclxuLy8gICBjb25zdCB1cGxvYWRJZCA9IGZldGNoKGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL3BsYXlsaXN0SXRlbXM/cGFydD1zbmlwcGV0Jm1heFJlc3VsdHM9MjAmcGxheWxpc3RJZD1VVWZBZExGLVlzX214akJVSGFSUmpZcEEma2V5PSR7cHJvY2Vzcy5lbnYuWW91VHViZV9BUElfS0VZX1YzfWApO1xyXG5cclxuLy8gICAvL0dFVCBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL3BsYXlsaXN0SXRlbXM/cGFydD1zbmlwcGV0Jm1heFJlc3VsdHM9MjAmcGxheWxpc3RJZD1VVWZBZExGLVlzX214akJVSGFSUmpZcEEma2V5PVtZT1VSX0FQSV9LRVldIEhUVFAvMS4xXHJcblxyXG5cclxuXHJcblxyXG4vLyAgIC8vIGNvbnN0IHZpZGVvTGlzdCA9IGF3YWl0IGZldGNoKGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL3BsYXlsaXN0SXRlbXM/cGxheWxpc3RJZD17JHt1cGxvYWRJZH19JmtleT17QVBJIGtleX0mcGFydD1zbmlwcGV0Jm1heFJlc3VsdHM9NTBgKTtcclxuLy8gICAvLyBjb25zdCB2aWRlb3MgPSBhd2FpdCB2aWRlb0xpc3QuanNvbigpXHJcblxyXG4vLyAgIC8vIEJ5IHJldHVybmluZyB7IHByb3BzOiB2aWRlb3MgfSwgdGhlIEJsb2cgY29tcG9uZW50XHJcbi8vICAgLy8gd2lsbCByZWNlaXZlIGBwb3N0c2AgYXMgYSBwcm9wIGF0IGJ1aWxkIHRpbWVcclxuLy8gICBjb25zdCB2aWRlb3MgPSBKU09OLnN0cmluZ2lmeSh1cGxvYWRJZCk7XHJcbi8vICAgcmV0dXJuIHsgcHJvcHM6IHsgdmlkZW9zIH0gfVxyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9nOyJdLCJzb3VyY2VSb290IjoiIn0=