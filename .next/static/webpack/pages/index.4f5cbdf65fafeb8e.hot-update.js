"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Footer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Footer() {\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        if (username === \"admin\" && password === \"princess\") {\n            // Save authentication state (if needed)\n            localStorage.setItem(\"auth\", \"true\");\n            router.push(\"/Admin\");\n        } else {\n            alert(\"Incorrect username or password\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n        className: \"footer footer-center gradient-footer pb-2 pt-2 text-base-content rounded\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-lg\",\n                children: \"Follow us on social media!\"\n            }, void 0, false, {\n                fileName: \"/Users/chasefriedman/projects/2-the-rescue/components/Footer.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"\",\n                style: {\n                    marginBottom: \"-2rem\",\n                    marginTop: \"-2rem\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-flow-col gap-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://www.facebook.com/RescueAnimalSanctuary/\",\n                            target: \"_blank\",\n                            rel: \"noopener noreferrer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faFacebookSquare,\n                                className: \"fa-3xl\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chasefriedman/projects/2-the-rescue/components/Footer.js\",\n                                lineNumber: 29,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/chasefriedman/projects/2-the-rescue/components/Footer.js\",\n                            lineNumber: 28,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://www.instagram.com/2therescueanimalsanctuary\",\n                            target: \"_blank\",\n                            rel: \"noopener noreferrer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faInstagram,\n                                className: \"fa-3xl\"\n                            }, void 0, false, {\n                                fileName: \"/Users/chasefriedman/projects/2-the-rescue/components/Footer.js\",\n                                lineNumber: 32,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/chasefriedman/projects/2-the-rescue/components/Footer.js\",\n                            lineNumber: 31,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/chasefriedman/projects/2-the-rescue/components/Footer.js\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/chasefriedman/projects/2-the-rescue/components/Footer.js\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Copyright \\xa9 2024 - All right reserved by 2 The Rescue Animal Sanctuary Inc.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/chasefriedman/projects/2-the-rescue/components/Footer.js\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/Admin\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Admin Page\"\n                        }, void 0, false, {\n                            fileName: \"/Users/chasefriedman/projects/2-the-rescue/components/Footer.js\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/chasefriedman/projects/2-the-rescue/components/Footer.js\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/chasefriedman/projects/2-the-rescue/components/Footer.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chasefriedman/projects/2-the-rescue/components/Footer.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this);\n}\n_s(Footer, \"pm5FkKtzkYfadaIOGThHB2S1qn0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Footer;\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDTztBQUN5QjtBQUNrQjtBQUN0RDtBQUVkLFNBQVNNOztJQUNwQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDUyxVQUFVQyxZQUFZLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU1XLFNBQVNWLHNEQUFTQTtJQUV4QixNQUFNVyxlQUFlLENBQUNDO1FBQ2xCQSxFQUFFQyxjQUFjO1FBQ2hCLElBQUlQLGFBQWEsV0FBV0UsYUFBYSxZQUFZO1lBQ2pELHdDQUF3QztZQUN4Q00sYUFBYUMsT0FBTyxDQUFDLFFBQVE7WUFDN0JMLE9BQU9NLElBQUksQ0FBQztRQUNoQixPQUFPO1lBQ0hDLE1BQU07UUFDVjtJQUNKO0lBRUEscUJBQ0ksOERBQUNDO1FBQU9DLFdBQVU7OzBCQUNkLDhEQUFDQztnQkFBRUQsV0FBVTswQkFBVTs7Ozs7OzBCQUN2Qiw4REFBQ0U7Z0JBQUlGLFdBQVU7Z0JBQUdHLE9BQU87b0JBQUVDLGNBQWM7b0JBQVNDLFdBQVc7Z0JBQVE7MEJBQ2pFLDRFQUFDQztvQkFBSU4sV0FBVTs7c0NBQ1gsOERBQUNPOzRCQUFFQyxNQUFLOzRCQUFrREMsUUFBTzs0QkFBU0MsS0FBSTtzQ0FDMUUsNEVBQUM1QiwyRUFBZUE7Z0NBQUM2QixNQUFNNUIsZ0ZBQWdCQTtnQ0FBRWlCLFdBQVU7Ozs7Ozs7Ozs7O3NDQUV2RCw4REFBQ087NEJBQUVDLE1BQUs7NEJBQXNEQyxRQUFPOzRCQUFTQyxLQUFJO3NDQUM5RSw0RUFBQzVCLDJFQUFlQTtnQ0FBQzZCLE1BQU0zQiwyRUFBV0E7Z0NBQUVnQixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUkxRCw4REFBQ1k7O2tDQUNHLDhEQUFDWDtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDaEIsa0RBQUlBO3dCQUFDdUIsTUFBSztrQ0FDUCw0RUFBQ1A7c0NBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkJ4QjtHQTdEd0JmOztRQUdMTCxrREFBU0E7OztLQUhKSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zvb3Rlci5qcz9lMWFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhRmFjZWJvb2tTcXVhcmUsIGZhSW5zdGFncmFtIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh1c2VybmFtZSA9PT0gJ2FkbWluJyAmJiBwYXNzd29yZCA9PT0gJ3ByaW5jZXNzJykge1xuICAgICAgICAgICAgLy8gU2F2ZSBhdXRoZW50aWNhdGlvbiBzdGF0ZSAoaWYgbmVlZGVkKVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2F1dGgnLCAndHJ1ZScpO1xuICAgICAgICAgICAgcm91dGVyLnB1c2goJy9BZG1pbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoJ0luY29ycmVjdCB1c2VybmFtZSBvciBwYXNzd29yZCcpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyIGZvb3Rlci1jZW50ZXIgZ3JhZGllbnQtZm9vdGVyIHBiLTIgcHQtMiB0ZXh0LWJhc2UtY29udGVudCByb3VuZGVkXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+Rm9sbG93IHVzIG9uIHNvY2lhbCBtZWRpYSE8L3A+XG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIlwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJy0ycmVtJywgbWFyZ2luVG9wOiAnLTJyZW0nIH19PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWZsb3ctY29sIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9SZXNjdWVBbmltYWxTYW5jdHVhcnkvJyB0YXJnZXQ9J19ibGFuaycgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUZhY2Vib29rU3F1YXJlfSBjbGFzc05hbWU9XCJmYS0zeGxcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tLzJ0aGVyZXNjdWVhbmltYWxzYW5jdHVhcnlcIiB0YXJnZXQ9J19ibGFuaycgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUluc3RhZ3JhbX0gY2xhc3NOYW1lPVwiZmEtM3hsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICA8YXNpZGU+XG4gICAgICAgICAgICAgICAgPHA+Q29weXJpZ2h0IMKpIDIwMjQgLSBBbGwgcmlnaHQgcmVzZXJ2ZWQgYnkgMiBUaGUgUmVzY3VlIEFuaW1hbCBTYW5jdHVhcnkgSW5jLjwvcD5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL0FkbWluXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwID5BZG1pbiBQYWdlPC9wPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB7LyogPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImlucHV0IG0tNiBpbnB1dC1ib3JkZXJlZCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzTmFtZT1cInctNCBoLTQgb3BhY2l0eS03MFwiPjxwYXRoIGQ9XCJNOCA4YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNlpNMTIuNzM1IDE0Yy42MTggMCAxLjA5My0uNTYxLjg3Mi0xLjEzOWE2LjAwMiA2LjAwMiAwIDAgMC0xMS4yMTUgMGMtLjIyLjU3OC4yNTQgMS4xMzkuODcyIDEuMTM5aDkuNDdaXCIgLz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3dcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiaW5wdXQgbS02IGlucHV0LWJvcmRlcmVkIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3NOYW1lPVwidy00IGgtNCBvcGFjaXR5LTcwXCI+PHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgZD1cIk0xNCA2YTQgNCAwIDAgMS00Ljg5OSAzLjg5OWwtMS45NTUgMS45NTVhLjUuNSAwIDAgMS0uMzUzLjE0Nkg1djEuNWEuNS41IDAgMCAxLS41LjVoLTJhLjUuNSAwIDAgMS0uNS0uNXYtMi4yOTNhLjUuNSAwIDAgMSAuMTQ2LS4zNTNsMy45NTUtMy45NTVBNCA0IDAgMSAxIDE0IDZabS00LTJhLjc1Ljc1IDAgMCAwIDAgMS41LjUuNSAwIDAgMSAuNS41Ljc1Ljc1IDAgMCAwIDEuNSAwIDIgMiAwIDAgMC0yLTJaXCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgLz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncm93XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeScgdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPiAqL31cbiAgICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJGb250QXdlc29tZUljb24iLCJmYUZhY2Vib29rU3F1YXJlIiwiZmFJbnN0YWdyYW0iLCJMaW5rIiwiRm9vdGVyIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJyb3V0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicHVzaCIsImFsZXJ0IiwiZm9vdGVyIiwiY2xhc3NOYW1lIiwicCIsIm5hdiIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiZGl2IiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJpY29uIiwiYXNpZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Footer.js\n"));

/***/ })

});