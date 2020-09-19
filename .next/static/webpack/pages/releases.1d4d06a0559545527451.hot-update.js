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
    if (songName === currentSong) {
      if (playing) {
        audioRef.current.pause();
        setPlaying(false);
      } else {
        audioRef.current.play();
        setPlaying(true);
      }
    } else {
      setCurrentSong(songName);
      audioRef.current.pause();
      audioRef.current.setAttribute('src', songName);
      audioRef.current.load();
      audioRef.current.play();
      setPlaying(true);
    }
  }

  return __jsx("div", {
    className: _styles_Releases_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx(_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }), __jsx("h1", {
    className: _styles_Releases_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.releases,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, "Releases"), __jsx("audio", {
    ref: audioRef,
    controls: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx("source", {
    src: currentSong,
    type: "audio/mp3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_Releases_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.albums,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx(_song_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    changeSong: changeSong,
    isPlaying: playing,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVsZWFzZXMuanMiXSwibmFtZXMiOlsiUHVyY2hhc2UiLCJ1c2VTdGF0ZSIsImN1cnJlbnRTb25nIiwic2V0Q3VycmVudFNvbmciLCJwbGF5aW5nIiwic2V0UGxheWluZyIsImF1ZGlvUmVmIiwidXNlUmVmIiwiY2hhbmdlU29uZyIsInNvbmdOYW1lIiwiY3VycmVudCIsInBhdXNlIiwicGxheSIsInNldEF0dHJpYnV0ZSIsImxvYWQiLCJzdHlsZXMiLCJjb250YWluZXIiLCJyZWxlYXNlcyIsImFsYnVtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQUEsa0JBRUtDLHNEQUFRLENBQUMsRUFBRCxDQUZiO0FBQUEsTUFFMUJDLFdBRjBCO0FBQUEsTUFFYkMsY0FGYTs7QUFBQSxtQkFHSEYsc0RBQVEsQ0FBQyxLQUFELENBSEw7QUFBQSxNQUcxQkcsT0FIMEI7QUFBQSxNQUdqQkMsVUFIaUI7O0FBSWpDLE1BQU1DLFFBQVEsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXZCOztBQUVBLFdBQVNDLFVBQVQsQ0FBb0JDLFFBQXBCLEVBQThCO0FBQzVCLFFBQUlBLFFBQVEsS0FBS1AsV0FBakIsRUFBOEI7QUFDNUIsVUFBSUUsT0FBSixFQUFhO0FBQ1hFLGdCQUFRLENBQUNJLE9BQVQsQ0FBaUJDLEtBQWpCO0FBQ0FOLGtCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsT0FIRCxNQUdPO0FBQ0xDLGdCQUFRLENBQUNJLE9BQVQsQ0FBaUJFLElBQWpCO0FBQ0FQLGtCQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0Q7QUFDRixLQVJELE1BUU87QUFDTEYsb0JBQWMsQ0FBQ00sUUFBRCxDQUFkO0FBQ0FILGNBQVEsQ0FBQ0ksT0FBVCxDQUFpQkMsS0FBakI7QUFDQUwsY0FBUSxDQUFDSSxPQUFULENBQWlCRyxZQUFqQixDQUE4QixLQUE5QixFQUFxQ0osUUFBckM7QUFDQUgsY0FBUSxDQUFDSSxPQUFULENBQWlCSSxJQUFqQjtBQUNBUixjQUFRLENBQUNJLE9BQVQsQ0FBaUJFLElBQWpCO0FBQ0FQLGdCQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0Q7QUFDRjs7QUFFRCxTQUNFO0FBQUssYUFBUyxFQUFFVSxrRUFBTSxDQUFDQyxTQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFJLGFBQVMsRUFBRUQsa0VBQU0sQ0FBQ0UsUUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixFQUdFO0FBQU8sT0FBRyxFQUFFWCxRQUFaO0FBQXNCLFlBQVEsTUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsT0FBRyxFQUFFSixXQUFiO0FBQTBCLFFBQUksRUFBQyxXQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FIRixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRWEsa0VBQU0sQ0FBQ0csTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxjQUFVLEVBQUVWLFVBQWxCO0FBQThCLGFBQVMsRUFBRUosT0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FORixDQURGO0FBY0Q7O0dBdkN1QkosUTs7S0FBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWxlYXNlcy4xZDRkMDZhMDU1OTU0NTUyNzQ1MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvUmVsZWFzZXMubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xyXG5pbXBvcnQgZGF0YSBmcm9tICcuLi9kYi9kYXRhLmpzb24nO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTb25nIGZyb20gJy4vc29uZy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQdXJjaGFzZSgpIHtcclxuXHJcbiAgY29uc3QgW2N1cnJlbnRTb25nLCBzZXRDdXJyZW50U29uZ10gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IFtwbGF5aW5nLCBzZXRQbGF5aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBhdWRpb1JlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgZnVuY3Rpb24gY2hhbmdlU29uZyhzb25nTmFtZSkge1xyXG4gICAgaWYgKHNvbmdOYW1lID09PSBjdXJyZW50U29uZykge1xyXG4gICAgICBpZiAocGxheWluZykge1xyXG4gICAgICAgIGF1ZGlvUmVmLmN1cnJlbnQucGF1c2UoKTtcclxuICAgICAgICBzZXRQbGF5aW5nKGZhbHNlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhdWRpb1JlZi5jdXJyZW50LnBsYXkoKTtcclxuICAgICAgICBzZXRQbGF5aW5nKHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRDdXJyZW50U29uZyhzb25nTmFtZSk7XHJcbiAgICAgIGF1ZGlvUmVmLmN1cnJlbnQucGF1c2UoKTtcclxuICAgICAgYXVkaW9SZWYuY3VycmVudC5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNvbmdOYW1lKTtcclxuICAgICAgYXVkaW9SZWYuY3VycmVudC5sb2FkKCk7XHJcbiAgICAgIGF1ZGlvUmVmLmN1cnJlbnQucGxheSgpO1xyXG4gICAgICBzZXRQbGF5aW5nKHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMucmVsZWFzZXN9PlJlbGVhc2VzPC9oMT5cclxuICAgICAgPGF1ZGlvIHJlZj17YXVkaW9SZWZ9IGNvbnRyb2xzPlxyXG4gICAgICAgIDxzb3VyY2Ugc3JjPXtjdXJyZW50U29uZ30gdHlwZT1cImF1ZGlvL21wM1wiIC8+XHJcbiAgICAgIDwvYXVkaW8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hbGJ1bXN9PlxyXG4gICAgICAgICAgPFNvbmcgY2hhbmdlU29uZz17Y2hhbmdlU29uZ30gaXNQbGF5aW5nPXtwbGF5aW5nfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9