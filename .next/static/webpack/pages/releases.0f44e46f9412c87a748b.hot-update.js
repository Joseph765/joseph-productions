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
var _jsxFileName = "/mnt/c/Users/josep/Documents/personal-projects/joseph-productions/pages/releases.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Purchase() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      currentSong = _useState[0],
      setCurrentSong = _useState[1];

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

  function changeSong(songName) {
    setCurrentSong(songName);
  }

  return __jsx("div", {
    className: _styles_Releases_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }), __jsx("h1", {
    className: _styles_Releases_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.releases,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, "Releases"), __jsx("audio", {
    ref: audioPLayer,
    controls: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("source", {
    src: currentSong,
    type: "audio/mp3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _styles_Releases_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.albums,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx("button", {
    onClick: function onClick() {
      return changeSong("/Ocean.mp3");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, "Ocean.wav"), createAlbum("/hawaii_part_ii.jpg"), createAlbum("/2020.jpg"), createAlbum("/USA.jpg"), createAlbum("/mystic_familiar.jpg"))));
}

_s(Purchase, "WelBWUlrGhpjnDS/nkR9ev4Rbsw=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVsZWFzZXMuanMiXSwibmFtZXMiOlsiUHVyY2hhc2UiLCJ1c2VTdGF0ZSIsImN1cnJlbnRTb25nIiwic2V0Q3VycmVudFNvbmciLCJjcmVhdGVBbGJ1bSIsImNvdmVyIiwic29uZ3MiLCJpIiwicHVzaCIsImRhdGEiLCJsaW5rIiwiYWxidW0iLCJzdHlsZXMiLCJhbGJ1bUNvdmVyIiwiY2hhbmdlU29uZyIsInNvbmdOYW1lIiwiY29udGFpbmVyIiwicmVsZWFzZXMiLCJhdWRpb1BMYXllciIsImFsYnVtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQUEsa0JBRUtDLHNEQUFRLENBQUMsRUFBRCxDQUZiO0FBQUEsTUFFMUJDLFdBRjBCO0FBQUEsTUFFYkMsY0FGYTs7QUFJakMsV0FBU0MsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFFMUIsUUFBSUMsS0FBSyxHQUFHLEVBQVo7O0FBQ0EsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEVBQXBCLEVBQXdCQSxDQUFDLEVBQXpCLEVBQThCO0FBQzVCRCxXQUFLLENBQUNFLElBQU4sQ0FBVztBQUFPLGdCQUFRLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNUO0FBQVEsV0FBRyxFQUFFQywwQ0FBSSxDQUFDLENBQUQsQ0FBSixDQUFRQyxJQUFyQjtBQUEyQixZQUFJLEVBQUMsV0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURTLENBQVg7QUFHRDs7QUFFRCxRQUFNQyxLQUFLLEdBQ1Q7QUFBSyxlQUFTLEVBQUVDLGtFQUFNLENBQUNELEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBRUMsa0VBQU0sQ0FBQ0MsVUFBdkI7QUFBbUMsU0FBRyxFQUFFUixLQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRTtBQUFLLGVBQVMsRUFBRU8sa0VBQU0sQ0FBQ04sS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHQSxLQURILENBRkYsQ0FERjs7QUFRRSxXQUFPSyxLQUFQO0FBQ0g7O0FBRUQsV0FBU0csVUFBVCxDQUFvQkMsUUFBcEIsRUFBOEI7QUFDNUJaLGtCQUFjLENBQUNZLFFBQUQsQ0FBZDtBQUNEOztBQUVELFNBQ0U7QUFBSyxhQUFTLEVBQUVILGtFQUFNLENBQUNJLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUksYUFBUyxFQUFFSixrRUFBTSxDQUFDSyxRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLEVBR0U7QUFBTyxPQUFHLEVBQUVDLFdBQVo7QUFBeUIsWUFBUSxNQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxPQUFHLEVBQUVoQixXQUFiO0FBQTBCLFFBQUksRUFBQyxXQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FIRixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRVUsa0VBQU0sQ0FBQ08sTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTUwsVUFBVSxDQUFDLFlBQUQsQ0FBaEI7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUdWLFdBQVcsQ0FBQyxxQkFBRCxDQUZkLEVBR0dBLFdBQVcsQ0FBQyxXQUFELENBSGQsRUFJR0EsV0FBVyxDQUFDLFVBQUQsQ0FKZCxFQUtHQSxXQUFXLENBQUMsc0JBQUQsQ0FMZCxDQURGLENBTkYsQ0FERjtBQWtCRDs7R0E5Q3VCSixROztLQUFBQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlbGVhc2VzLjBmNDRlNDZmOTQxMmM4N2E3NDhiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9SZWxlYXNlcy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcic7XHJcbmltcG9ydCBkYXRhIGZyb20gJy4uL2RiL2RhdGEuanNvbic7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQdXJjaGFzZSgpIHtcclxuXHJcbiAgY29uc3QgW2N1cnJlbnRTb25nLCBzZXRDdXJyZW50U29uZ10gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlQWxidW0oY292ZXIpIHtcclxuXHJcbiAgICB2YXIgc29uZ3MgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKyspIHtcclxuICAgICAgc29uZ3MucHVzaCg8YXVkaW8gY29udHJvbHM+XHJcbiAgICAgICAgPHNvdXJjZSBzcmM9e2RhdGFbMF0ubGlua30gdHlwZT1cImF1ZGlvL21wM1wiIC8+XHJcbiAgICAgIDwvYXVkaW8+KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhbGJ1bSA9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWxidW19PlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuYWxidW1Db3Zlcn0gc3JjPXtjb3Zlcn0gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNvbmdzfT5cclxuICAgICAgICAgIHtzb25nc31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+O1xyXG5cclxuICAgICAgcmV0dXJuIGFsYnVtO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hhbmdlU29uZyhzb25nTmFtZSkge1xyXG4gICAgc2V0Q3VycmVudFNvbmcoc29uZ05hbWUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMucmVsZWFzZXN9PlJlbGVhc2VzPC9oMT5cclxuICAgICAgPGF1ZGlvIHJlZj17YXVkaW9QTGF5ZXJ9IGNvbnRyb2xzPlxyXG4gICAgICAgIDxzb3VyY2Ugc3JjPXtjdXJyZW50U29uZ30gdHlwZT1cImF1ZGlvL21wM1wiIC8+XHJcbiAgICAgIDwvYXVkaW8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hbGJ1bXN9PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VTb25nKFwiL09jZWFuLm1wM1wiKX0+T2NlYW4ud2F2PC9idXR0b24+XHJcbiAgICAgICAgICB7Y3JlYXRlQWxidW0oXCIvaGF3YWlpX3BhcnRfaWkuanBnXCIpfVxyXG4gICAgICAgICAge2NyZWF0ZUFsYnVtKFwiLzIwMjAuanBnXCIpfVxyXG4gICAgICAgICAge2NyZWF0ZUFsYnVtKFwiL1VTQS5qcGdcIil9XHJcbiAgICAgICAgICB7Y3JlYXRlQWxidW0oXCIvbXlzdGljX2ZhbWlsaWFyLmpwZ1wiKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==