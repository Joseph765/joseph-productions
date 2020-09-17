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
      setVideos = _useState[1];

  axios__WEBPACK_IMPORTED_MODULE_3___default()({
    method: 'get',
    url: "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=UUfAdLF-Ys_mxjBUHaRRjYpA&key=".concat("AIzaSyBCMKLOIvJ68HAzA_w6bSl4f1F2JQa-WnE")
  }).then(function (res) {
    console.log(res.data.items);
    setVideos(res.data.items);
  })["catch"](function (error) {
    console.log(error);
  });
  console.log('result: ' + videos);
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
      src: item.snippet.thumbnails,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy5qcyJdLCJuYW1lcyI6WyJCbG9nIiwidXNlU3RhdGUiLCJ2aWRlb3MiLCJzZXRWaWRlb3MiLCJheGlvcyIsIm1ldGhvZCIsInVybCIsInByb2Nlc3MiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJpdGVtcyIsImVycm9yIiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFwIiwiaXRlbSIsInNuaXBwZXQiLCJ0aXRsZSIsInRodW1ibmFpbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxHQUFpQjtBQUFBOztBQUFBOztBQUFBLGtCQUVhQyxzREFBUSxDQUFDLEVBQUQsQ0FGckI7QUFBQSxNQUVSQyxNQUZRO0FBQUEsTUFFQUMsU0FGQTs7QUFJZkMsOENBQUssQ0FBQztBQUNKQyxVQUFNLEVBQUUsS0FESjtBQUVKQyxPQUFHLG1JQUE0SEMseUNBQTVIO0FBRkMsR0FBRCxDQUFMLENBSUNDLElBSkQsQ0FJTSxVQUFDQyxHQUFELEVBQVM7QUFDYkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQUcsQ0FBQ0csSUFBSixDQUFTQyxLQUFyQjtBQUNBVixhQUFTLENBQUNNLEdBQUcsQ0FBQ0csSUFBSixDQUFTQyxLQUFWLENBQVQ7QUFDRCxHQVBELFdBUU8sVUFBQUMsS0FBSyxFQUFJO0FBQ2RKLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRyxLQUFaO0FBQ0QsR0FWRDtBQVlBSixTQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFhVCxNQUF6QjtBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUVhLDhEQUFNLENBQUNDLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixFQUdHZCxNQUFNLENBQUNlLEdBQVAsQ0FBWSxVQUFBQyxJQUFJLEVBQUk7QUFFbkIsV0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLQSxJQUFJLENBQUNDLE9BQUwsQ0FBYUMsS0FBbEIsQ0FERixFQUVFO0FBQUssU0FBRyxFQUFFRixJQUFJLENBQUNDLE9BQUwsQ0FBYUUsVUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLENBREY7QUFNRCxHQVJBLENBSEgsQ0FERjtBQWdCRCxDLENBRUQ7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0dBOURTckIsSTs7S0FBQUEsSTtBQWdFTUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy5mYWRhYjY4Mzg2NTljZDg2MmMyZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQmxvZy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcic7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZnVuY3Rpb24gQmxvZyAoKSB7XHJcblxyXG4gIGNvbnN0IFt2aWRlb3MsIHNldFZpZGVvc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGF4aW9zKHtcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICB1cmw6IGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL3BsYXlsaXN0SXRlbXM/cGFydD1zbmlwcGV0Jm1heFJlc3VsdHM9MjAmcGxheWxpc3RJZD1VVWZBZExGLVlzX214akJVSGFSUmpZcEEma2V5PSR7cHJvY2Vzcy5lbnYuWW91VHViZV9BUElfS0VZX1YzfWAsXHJcbiAgfSlcclxuICAudGhlbigocmVzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyZXMuZGF0YS5pdGVtcyk7XHJcbiAgICBzZXRWaWRlb3MocmVzLmRhdGEuaXRlbXMpO1xyXG4gIH0pXHJcbiAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICB9KTtcclxuXHJcbiAgY29uc29sZS5sb2coJ3Jlc3VsdDogJyArIHZpZGVvcyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPGgxPkJsb2c8L2gxPlxyXG4gICAgICB7dmlkZW9zLm1hcCggaXRlbSA9PiB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDI+e2l0ZW0uc25pcHBldC50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5zbmlwcGV0LnRodW1ibmFpbHN9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbn1cclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcblxyXG4vLyAgIC8vIEdFVCBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL2NoYW5uZWxzP3BhcnQ9Y29udGVudERldGFpbHMmbWluZT10cnVlJmtleT1bWU9VUl9BUElfS0VZXSBIVFRQLzEuMVxyXG4vLyAgIC8vIEdFVCBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL2NoYW5uZWxzP3BhcnQ9Y29udGVudERldGFpbHMmaWQ9VUNmQWRMRi1Zc19teGpCVUhhUlJqWXBBJmtleT1bWU9VUl9BUElfS0VZXSBIVFRQLzEuMVxyXG4vLyAgIC8vIFVQTE9BRFMgSUQ6IFwiVVVmQWRMRi1Zc19teGpCVUhhUlJqWXBBXCJcclxuXHJcbi8vICAgLy8gQXV0aG9yaXphdGlvbjogQmVhcmVyIFtZT1VSX0FDQ0VTU19UT0tFTl1cclxuLy8gICAvLyBBY2NlcHQ6IGFwcGxpY2F0aW9uL2pzb25cclxuXHJcblxyXG4vLyAgIC8vIENhbGwgYW4gZXh0ZXJuYWwgQVBJIGVuZHBvaW50IHRvIGdldCBwb3N0cy5cclxuLy8gICAvLyBZb3UgY2FuIHVzZSBhbnkgZGF0YSBmZXRjaGluZyBsaWJyYXJ5XHJcbi8vICAgY29uc3QgdXBsb2FkSWQgPSBmZXRjaChgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My9wbGF5bGlzdEl0ZW1zP3BhcnQ9c25pcHBldCZtYXhSZXN1bHRzPTIwJnBsYXlsaXN0SWQ9VVVmQWRMRi1Zc19teGpCVUhhUlJqWXBBJmtleT0ke3Byb2Nlc3MuZW52LllvdVR1YmVfQVBJX0tFWV9WM31gKTtcclxuXHJcbi8vICAgLy9HRVQgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My9wbGF5bGlzdEl0ZW1zP3BhcnQ9c25pcHBldCZtYXhSZXN1bHRzPTIwJnBsYXlsaXN0SWQ9VVVmQWRMRi1Zc19teGpCVUhhUlJqWXBBJmtleT1bWU9VUl9BUElfS0VZXSBIVFRQLzEuMVxyXG5cclxuXHJcblxyXG5cclxuLy8gICAvLyBjb25zdCB2aWRlb0xpc3QgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My9wbGF5bGlzdEl0ZW1zP3BsYXlsaXN0SWQ9eyR7dXBsb2FkSWR9fSZrZXk9e0FQSSBrZXl9JnBhcnQ9c25pcHBldCZtYXhSZXN1bHRzPTUwYCk7XHJcbi8vICAgLy8gY29uc3QgdmlkZW9zID0gYXdhaXQgdmlkZW9MaXN0Lmpzb24oKVxyXG5cclxuLy8gICAvLyBCeSByZXR1cm5pbmcgeyBwcm9wczogdmlkZW9zIH0sIHRoZSBCbG9nIGNvbXBvbmVudFxyXG4vLyAgIC8vIHdpbGwgcmVjZWl2ZSBgcG9zdHNgIGFzIGEgcHJvcCBhdCBidWlsZCB0aW1lXHJcbi8vICAgY29uc3QgdmlkZW9zID0gSlNPTi5zdHJpbmdpZnkodXBsb2FkSWQpO1xyXG4vLyAgIHJldHVybiB7IHByb3BzOiB7IHZpZGVvcyB9IH1cclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZzsiXSwic291cmNlUm9vdCI6IiJ9