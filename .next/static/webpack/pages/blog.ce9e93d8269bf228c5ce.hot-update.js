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
    console.log(res.data.items[0].snippet.thumbnails.standard.url);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy5qcyJdLCJuYW1lcyI6WyJCbG9nIiwidXNlU3RhdGUiLCJ2aWRlb3MiLCJzZXRWaWRlb3MiLCJheGlvcyIsIm1ldGhvZCIsInVybCIsInByb2Nlc3MiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJpdGVtcyIsInNuaXBwZXQiLCJ0aHVtYm5haWxzIiwic3RhbmRhcmQiLCJlcnJvciIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1hcCIsIml0ZW0iLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxJQUFULEdBQWlCO0FBQUE7O0FBQUE7O0FBQUEsa0JBRWFDLHNEQUFRLENBQUMsRUFBRCxDQUZyQjtBQUFBLE1BRVJDLE1BRlE7QUFBQSxNQUVBQyxTQUZBOztBQUlmQyw4Q0FBSyxDQUFDO0FBQ0pDLFVBQU0sRUFBRSxLQURKO0FBRUpDLE9BQUcsbUlBQTRIQyx5Q0FBNUg7QUFGQyxHQUFELENBQUwsQ0FJQ0MsSUFKRCxDQUlNLFVBQUNDLEdBQUQsRUFBUztBQUNiQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBRyxDQUFDRyxJQUFKLENBQVNDLEtBQVQsQ0FBZSxDQUFmLEVBQWtCQyxPQUFsQixDQUEwQkMsVUFBMUIsQ0FBcUNDLFFBQXJDLENBQThDVixHQUExRDtBQUNBSCxhQUFTLENBQUNNLEdBQUcsQ0FBQ0csSUFBSixDQUFTQyxLQUFWLENBQVQ7QUFDRCxHQVBELFdBUU8sVUFBQUksS0FBSyxFQUFJO0FBQ2RQLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTSxLQUFaO0FBQ0QsR0FWRDtBQVlBUCxTQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFhVCxNQUF6QjtBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUVnQiw4REFBTSxDQUFDQyxTQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsRUFHR2pCLE1BQU0sQ0FBQ2tCLEdBQVAsQ0FBWSxVQUFBQyxJQUFJLEVBQUk7QUFFbkIsV0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLQSxJQUFJLENBQUNQLE9BQUwsQ0FBYVEsS0FBbEIsQ0FERixFQUVFO0FBQUssU0FBRyxFQUFFRCxJQUFJLENBQUNQLE9BQUwsQ0FBYUMsVUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLENBREY7QUFNRCxHQVJBLENBSEgsQ0FERjtBQWdCRCxDLENBRUQ7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0dBOURTZixJOztLQUFBQSxJO0FBZ0VNQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9nLmNlOWU5M2Q4MjY5YmYyMjhjNWNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9CbG9nLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5mdW5jdGlvbiBCbG9nICgpIHtcclxuXHJcbiAgY29uc3QgW3ZpZGVvcywgc2V0VmlkZW9zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgYXhpb3Moe1xyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHVybDogYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvcGxheWxpc3RJdGVtcz9wYXJ0PXNuaXBwZXQmbWF4UmVzdWx0cz0yMCZwbGF5bGlzdElkPVVVZkFkTEYtWXNfbXhqQlVIYVJSallwQSZrZXk9JHtwcm9jZXNzLmVudi5Zb3VUdWJlX0FQSV9LRVlfVjN9YCxcclxuICB9KVxyXG4gIC50aGVuKChyZXMpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLml0ZW1zWzBdLnNuaXBwZXQudGh1bWJuYWlscy5zdGFuZGFyZC51cmwpO1xyXG4gICAgc2V0VmlkZW9zKHJlcy5kYXRhLml0ZW1zKTtcclxuICB9KVxyXG4gIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKCdyZXN1bHQ6ICcgKyB2aWRlb3MpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxoMT5CbG9nPC9oMT5cclxuICAgICAge3ZpZGVvcy5tYXAoIGl0ZW0gPT4ge1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyPntpdGVtLnNuaXBwZXQudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uc25pcHBldC50aHVtYm5haWxzfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG59XHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG5cclxuLy8gICAvLyBHRVQgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My9jaGFubmVscz9wYXJ0PWNvbnRlbnREZXRhaWxzJm1pbmU9dHJ1ZSZrZXk9W1lPVVJfQVBJX0tFWV0gSFRUUC8xLjFcclxuLy8gICAvLyBHRVQgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My9jaGFubmVscz9wYXJ0PWNvbnRlbnREZXRhaWxzJmlkPVVDZkFkTEYtWXNfbXhqQlVIYVJSallwQSZrZXk9W1lPVVJfQVBJX0tFWV0gSFRUUC8xLjFcclxuLy8gICAvLyBVUExPQURTIElEOiBcIlVVZkFkTEYtWXNfbXhqQlVIYVJSallwQVwiXHJcblxyXG4vLyAgIC8vIEF1dGhvcml6YXRpb246IEJlYXJlciBbWU9VUl9BQ0NFU1NfVE9LRU5dXHJcbi8vICAgLy8gQWNjZXB0OiBhcHBsaWNhdGlvbi9qc29uXHJcblxyXG5cclxuLy8gICAvLyBDYWxsIGFuIGV4dGVybmFsIEFQSSBlbmRwb2ludCB0byBnZXQgcG9zdHMuXHJcbi8vICAgLy8gWW91IGNhbiB1c2UgYW55IGRhdGEgZmV0Y2hpbmcgbGlicmFyeVxyXG4vLyAgIGNvbnN0IHVwbG9hZElkID0gZmV0Y2goYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvcGxheWxpc3RJdGVtcz9wYXJ0PXNuaXBwZXQmbWF4UmVzdWx0cz0yMCZwbGF5bGlzdElkPVVVZkFkTEYtWXNfbXhqQlVIYVJSallwQSZrZXk9JHtwcm9jZXNzLmVudi5Zb3VUdWJlX0FQSV9LRVlfVjN9YCk7XHJcblxyXG4vLyAgIC8vR0VUIGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvcGxheWxpc3RJdGVtcz9wYXJ0PXNuaXBwZXQmbWF4UmVzdWx0cz0yMCZwbGF5bGlzdElkPVVVZkFkTEYtWXNfbXhqQlVIYVJSallwQSZrZXk9W1lPVVJfQVBJX0tFWV0gSFRUUC8xLjFcclxuXHJcblxyXG5cclxuXHJcbi8vICAgLy8gY29uc3QgdmlkZW9MaXN0ID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvcGxheWxpc3RJdGVtcz9wbGF5bGlzdElkPXske3VwbG9hZElkfX0ma2V5PXtBUEkga2V5fSZwYXJ0PXNuaXBwZXQmbWF4UmVzdWx0cz01MGApO1xyXG4vLyAgIC8vIGNvbnN0IHZpZGVvcyA9IGF3YWl0IHZpZGVvTGlzdC5qc29uKClcclxuXHJcbi8vICAgLy8gQnkgcmV0dXJuaW5nIHsgcHJvcHM6IHZpZGVvcyB9LCB0aGUgQmxvZyBjb21wb25lbnRcclxuLy8gICAvLyB3aWxsIHJlY2VpdmUgYHBvc3RzYCBhcyBhIHByb3AgYXQgYnVpbGQgdGltZVxyXG4vLyAgIGNvbnN0IHZpZGVvcyA9IEpTT04uc3RyaW5naWZ5KHVwbG9hZElkKTtcclxuLy8gICByZXR1cm4geyBwcm9wczogeyB2aWRlb3MgfSB9XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2c7Il0sInNvdXJjZVJvb3QiOiIifQ==