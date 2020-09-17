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
      videoTitles = _useState[0],
      setVideoTitles = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_3___default()({
      method: 'get',
      url: "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=UUfAdLF-Ys_mxjBUHaRRjYpA&key=".concat("AIzaSyBCMKLOIvJ68HAzA_w6bSl4f1F2JQa-WnE")
    }).then(function (res) {
      console.log(res.data.items[0].snippet.thumbnails.standard.url);
      setVideoTitles(res.data.items);
    })["catch"](function (error) {
      console.log(error);
    });
  }, []);
  return __jsx("div", {
    className: _styles_Blog_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, "Blog"), videos.map(function (item) {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }
    }, item.snippet.title), __jsx("img", {
      src: item.snippet.thumbnails.standard.url,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
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


_s(Blog, "NRUEVfK3oLFwy3yF/zY/wylwIjg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy5qcyJdLCJuYW1lcyI6WyJCbG9nIiwidXNlU3RhdGUiLCJ2aWRlb1RpdGxlcyIsInNldFZpZGVvVGl0bGVzIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJwcm9jZXNzIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiaXRlbXMiLCJzbmlwcGV0IiwidGh1bWJuYWlscyIsInN0YW5kYXJkIiwiZXJyb3IiLCJzdHlsZXMiLCJjb250YWluZXIiLCJ2aWRlb3MiLCJtYXAiLCJpdGVtIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxHQUFpQjtBQUFBOztBQUFBOztBQUFBLGtCQUV1QkMsc0RBQVEsQ0FBQyxFQUFELENBRi9CO0FBQUEsTUFFUkMsV0FGUTtBQUFBLE1BRUtDLGNBRkw7O0FBSWZDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxnREFBSyxDQUFDO0FBQ0pDLFlBQU0sRUFBRSxLQURKO0FBRUpDLFNBQUcsbUlBQTRIQyx5Q0FBNUg7QUFGQyxLQUFELENBQUwsQ0FJQ0MsSUFKRCxDQUlNLFVBQUNDLEdBQUQsRUFBUztBQUNiQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBRyxDQUFDRyxJQUFKLENBQVNDLEtBQVQsQ0FBZSxDQUFmLEVBQWtCQyxPQUFsQixDQUEwQkMsVUFBMUIsQ0FBcUNDLFFBQXJDLENBQThDVixHQUExRDtBQUNBSixvQkFBYyxDQUFDTyxHQUFHLENBQUNHLElBQUosQ0FBU0MsS0FBVixDQUFkO0FBQ0QsS0FQRCxXQVFPLFVBQUFJLEtBQUssRUFBSTtBQUNkUCxhQUFPLENBQUNDLEdBQVIsQ0FBWU0sS0FBWjtBQUNELEtBVkQ7QUFXRCxHQVpRLEVBWU4sRUFaTSxDQUFUO0FBY0EsU0FDRTtBQUFLLGFBQVMsRUFBRUMsOERBQU0sQ0FBQ0MsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLEVBR0dDLE1BQU0sQ0FBQ0MsR0FBUCxDQUFZLFVBQUFDLElBQUksRUFBSTtBQUVuQixXQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtBLElBQUksQ0FBQ1IsT0FBTCxDQUFhUyxLQUFsQixDQURGLEVBRUU7QUFBSyxTQUFHLEVBQUVELElBQUksQ0FBQ1IsT0FBTCxDQUFhQyxVQUFiLENBQXdCQyxRQUF4QixDQUFpQ1YsR0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLENBREY7QUFPRCxHQVRBLENBSEgsQ0FERjtBQWlCRCxDLENBRUQ7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0dBL0RTUCxJOztLQUFBQSxJO0FBaUVNQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9nLjBjODI2NTQwODE5ZTE0M2NiNjEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9CbG9nLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmZ1bmN0aW9uIEJsb2cgKCkge1xyXG5cclxuICBjb25zdCBbdmlkZW9UaXRsZXMsIHNldFZpZGVvVGl0bGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgdXJsOiBgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My9wbGF5bGlzdEl0ZW1zP3BhcnQ9c25pcHBldCZtYXhSZXN1bHRzPTIwJnBsYXlsaXN0SWQ9VVVmQWRMRi1Zc19teGpCVUhhUlJqWXBBJmtleT0ke3Byb2Nlc3MuZW52LllvdVR1YmVfQVBJX0tFWV9WM31gLFxyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEuaXRlbXNbMF0uc25pcHBldC50aHVtYm5haWxzLnN0YW5kYXJkLnVybCk7XHJcbiAgICAgIHNldFZpZGVvVGl0bGVzKHJlcy5kYXRhLml0ZW1zKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPGgxPkJsb2c8L2gxPlxyXG4gICAgICB7dmlkZW9zLm1hcCggaXRlbSA9PiB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDI+e2l0ZW0uc25pcHBldC50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5zbmlwcGV0LnRodW1ibmFpbHMuc3RhbmRhcmQudXJsfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgfSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxufVxyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuXHJcbi8vICAgLy8gR0VUIGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvY2hhbm5lbHM/cGFydD1jb250ZW50RGV0YWlscyZtaW5lPXRydWUma2V5PVtZT1VSX0FQSV9LRVldIEhUVFAvMS4xXHJcbi8vICAgLy8gR0VUIGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvY2hhbm5lbHM/cGFydD1jb250ZW50RGV0YWlscyZpZD1VQ2ZBZExGLVlzX214akJVSGFSUmpZcEEma2V5PVtZT1VSX0FQSV9LRVldIEhUVFAvMS4xXHJcbi8vICAgLy8gVVBMT0FEUyBJRDogXCJVVWZBZExGLVlzX214akJVSGFSUmpZcEFcIlxyXG5cclxuLy8gICAvLyBBdXRob3JpemF0aW9uOiBCZWFyZXIgW1lPVVJfQUNDRVNTX1RPS0VOXVxyXG4vLyAgIC8vIEFjY2VwdDogYXBwbGljYXRpb24vanNvblxyXG5cclxuXHJcbi8vICAgLy8gQ2FsbCBhbiBleHRlcm5hbCBBUEkgZW5kcG9pbnQgdG8gZ2V0IHBvc3RzLlxyXG4vLyAgIC8vIFlvdSBjYW4gdXNlIGFueSBkYXRhIGZldGNoaW5nIGxpYnJhcnlcclxuLy8gICBjb25zdCB1cGxvYWRJZCA9IGZldGNoKGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL3BsYXlsaXN0SXRlbXM/cGFydD1zbmlwcGV0Jm1heFJlc3VsdHM9MjAmcGxheWxpc3RJZD1VVWZBZExGLVlzX214akJVSGFSUmpZcEEma2V5PSR7cHJvY2Vzcy5lbnYuWW91VHViZV9BUElfS0VZX1YzfWApO1xyXG5cclxuLy8gICAvL0dFVCBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL3BsYXlsaXN0SXRlbXM/cGFydD1zbmlwcGV0Jm1heFJlc3VsdHM9MjAmcGxheWxpc3RJZD1VVWZBZExGLVlzX214akJVSGFSUmpZcEEma2V5PVtZT1VSX0FQSV9LRVldIEhUVFAvMS4xXHJcblxyXG5cclxuXHJcblxyXG4vLyAgIC8vIGNvbnN0IHZpZGVvTGlzdCA9IGF3YWl0IGZldGNoKGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL3BsYXlsaXN0SXRlbXM/cGxheWxpc3RJZD17JHt1cGxvYWRJZH19JmtleT17QVBJIGtleX0mcGFydD1zbmlwcGV0Jm1heFJlc3VsdHM9NTBgKTtcclxuLy8gICAvLyBjb25zdCB2aWRlb3MgPSBhd2FpdCB2aWRlb0xpc3QuanNvbigpXHJcblxyXG4vLyAgIC8vIEJ5IHJldHVybmluZyB7IHByb3BzOiB2aWRlb3MgfSwgdGhlIEJsb2cgY29tcG9uZW50XHJcbi8vICAgLy8gd2lsbCByZWNlaXZlIGBwb3N0c2AgYXMgYSBwcm9wIGF0IGJ1aWxkIHRpbWVcclxuLy8gICBjb25zdCB2aWRlb3MgPSBKU09OLnN0cmluZ2lmeSh1cGxvYWRJZCk7XHJcbi8vICAgcmV0dXJuIHsgcHJvcHM6IHsgdmlkZW9zIH0gfVxyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9nOyJdLCJzb3VyY2VSb290IjoiIn0=