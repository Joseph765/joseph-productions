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

  axios__WEBPACK_IMPORTED_MODULE_3___default()({
    method: 'get',
    url: "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=UUfAdLF-Ys_mxjBUHaRRjYpA&key=".concat("AIzaSyBCMKLOIvJ68HAzA_w6bSl4f1F2JQa-WnE")
  }).then(function (res) {
    console.log(res.data.items[0].snippet.thumbnails.standard.url);
    setVideoTitles(res.data.items);
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


_s(Blog, "7Ml1S8iJv1mYFpCQ54x/ryj7cEQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy5qcyJdLCJuYW1lcyI6WyJCbG9nIiwidXNlU3RhdGUiLCJ2aWRlb1RpdGxlcyIsInNldFZpZGVvVGl0bGVzIiwiYXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJwcm9jZXNzIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiaXRlbXMiLCJzbmlwcGV0IiwidGh1bWJuYWlscyIsInN0YW5kYXJkIiwiZXJyb3IiLCJ2aWRlb3MiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYXAiLCJpdGVtIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxHQUFpQjtBQUFBOztBQUFBOztBQUFBLGtCQUV1QkMsc0RBQVEsQ0FBQyxFQUFELENBRi9CO0FBQUEsTUFFUkMsV0FGUTtBQUFBLE1BRUtDLGNBRkw7O0FBSWZDLDhDQUFLLENBQUM7QUFDSkMsVUFBTSxFQUFFLEtBREo7QUFFSkMsT0FBRyxtSUFBNEhDLHlDQUE1SDtBQUZDLEdBQUQsQ0FBTCxDQUlDQyxJQUpELENBSU0sVUFBQ0MsR0FBRCxFQUFTO0FBQ2JDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFHLENBQUNHLElBQUosQ0FBU0MsS0FBVCxDQUFlLENBQWYsRUFBa0JDLE9BQWxCLENBQTBCQyxVQUExQixDQUFxQ0MsUUFBckMsQ0FBOENWLEdBQTFEO0FBQ0FILGtCQUFjLENBQUNNLEdBQUcsQ0FBQ0csSUFBSixDQUFTQyxLQUFWLENBQWQ7QUFDRCxHQVBELFdBUU8sVUFBQUksS0FBSyxFQUFJO0FBQ2RQLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTSxLQUFaO0FBQ0QsR0FWRDtBQVlBUCxTQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFhTyxNQUF6QjtBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUVDLDhEQUFNLENBQUNDLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixFQUdHRixNQUFNLENBQUNHLEdBQVAsQ0FBWSxVQUFBQyxJQUFJLEVBQUk7QUFFbkIsV0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLQSxJQUFJLENBQUNSLE9BQUwsQ0FBYVMsS0FBbEIsQ0FERixFQUVFO0FBQUssU0FBRyxFQUFFRCxJQUFJLENBQUNSLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkMsUUFBeEIsQ0FBaUNWLEdBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixDQURGO0FBT0QsR0FUQSxDQUhILENBREY7QUFpQkQsQyxDQUVEO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztHQS9EU04sSTs7S0FBQUEsSTtBQWlFTUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy4yNjkwZGRiYTVkNTlmOTc4ZDZiMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQmxvZy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcic7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5mdW5jdGlvbiBCbG9nICgpIHtcclxuXHJcbiAgY29uc3QgW3ZpZGVvVGl0bGVzLCBzZXRWaWRlb1RpdGxlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGF4aW9zKHtcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICB1cmw6IGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL3BsYXlsaXN0SXRlbXM/cGFydD1zbmlwcGV0Jm1heFJlc3VsdHM9MjAmcGxheWxpc3RJZD1VVWZBZExGLVlzX214akJVSGFSUmpZcEEma2V5PSR7cHJvY2Vzcy5lbnYuWW91VHViZV9BUElfS0VZX1YzfWAsXHJcbiAgfSlcclxuICAudGhlbigocmVzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyZXMuZGF0YS5pdGVtc1swXS5zbmlwcGV0LnRodW1ibmFpbHMuc3RhbmRhcmQudXJsKTtcclxuICAgIHNldFZpZGVvVGl0bGVzKHJlcy5kYXRhLml0ZW1zKTtcclxuICB9KVxyXG4gIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKCdyZXN1bHQ6ICcgKyB2aWRlb3MpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxoMT5CbG9nPC9oMT5cclxuICAgICAge3ZpZGVvcy5tYXAoIGl0ZW0gPT4ge1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyPntpdGVtLnNuaXBwZXQudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uc25pcHBldC50aHVtYm5haWxzLnN0YW5kYXJkLnVybH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuXHJcbiAgICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbn1cclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcblxyXG4vLyAgIC8vIEdFVCBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL2NoYW5uZWxzP3BhcnQ9Y29udGVudERldGFpbHMmbWluZT10cnVlJmtleT1bWU9VUl9BUElfS0VZXSBIVFRQLzEuMVxyXG4vLyAgIC8vIEdFVCBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL2NoYW5uZWxzP3BhcnQ9Y29udGVudERldGFpbHMmaWQ9VUNmQWRMRi1Zc19teGpCVUhhUlJqWXBBJmtleT1bWU9VUl9BUElfS0VZXSBIVFRQLzEuMVxyXG4vLyAgIC8vIFVQTE9BRFMgSUQ6IFwiVVVmQWRMRi1Zc19teGpCVUhhUlJqWXBBXCJcclxuXHJcbi8vICAgLy8gQXV0aG9yaXphdGlvbjogQmVhcmVyIFtZT1VSX0FDQ0VTU19UT0tFTl1cclxuLy8gICAvLyBBY2NlcHQ6IGFwcGxpY2F0aW9uL2pzb25cclxuXHJcblxyXG4vLyAgIC8vIENhbGwgYW4gZXh0ZXJuYWwgQVBJIGVuZHBvaW50IHRvIGdldCBwb3N0cy5cclxuLy8gICAvLyBZb3UgY2FuIHVzZSBhbnkgZGF0YSBmZXRjaGluZyBsaWJyYXJ5XHJcbi8vICAgY29uc3QgdXBsb2FkSWQgPSBmZXRjaChgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My9wbGF5bGlzdEl0ZW1zP3BhcnQ9c25pcHBldCZtYXhSZXN1bHRzPTIwJnBsYXlsaXN0SWQ9VVVmQWRMRi1Zc19teGpCVUhhUlJqWXBBJmtleT0ke3Byb2Nlc3MuZW52LllvdVR1YmVfQVBJX0tFWV9WM31gKTtcclxuXHJcbi8vICAgLy9HRVQgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My9wbGF5bGlzdEl0ZW1zP3BhcnQ9c25pcHBldCZtYXhSZXN1bHRzPTIwJnBsYXlsaXN0SWQ9VVVmQWRMRi1Zc19teGpCVUhhUlJqWXBBJmtleT1bWU9VUl9BUElfS0VZXSBIVFRQLzEuMVxyXG5cclxuXHJcblxyXG5cclxuLy8gICAvLyBjb25zdCB2aWRlb0xpc3QgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My9wbGF5bGlzdEl0ZW1zP3BsYXlsaXN0SWQ9eyR7dXBsb2FkSWR9fSZrZXk9e0FQSSBrZXl9JnBhcnQ9c25pcHBldCZtYXhSZXN1bHRzPTUwYCk7XHJcbi8vICAgLy8gY29uc3QgdmlkZW9zID0gYXdhaXQgdmlkZW9MaXN0Lmpzb24oKVxyXG5cclxuLy8gICAvLyBCeSByZXR1cm5pbmcgeyBwcm9wczogdmlkZW9zIH0sIHRoZSBCbG9nIGNvbXBvbmVudFxyXG4vLyAgIC8vIHdpbGwgcmVjZWl2ZSBgcG9zdHNgIGFzIGEgcHJvcCBhdCBidWlsZCB0aW1lXHJcbi8vICAgY29uc3QgdmlkZW9zID0gSlNPTi5zdHJpbmdpZnkodXBsb2FkSWQpO1xyXG4vLyAgIHJldHVybiB7IHByb3BzOiB7IHZpZGVvcyB9IH1cclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZzsiXSwic291cmNlUm9vdCI6IiJ9