"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Horses/[name]",{

/***/ "./pages/Horses/[name].js":
/*!********************************!*\
  !*** ./pages/Horses/[name].js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HorseDetail; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/react/hooks/useQuery.js\");\n/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graphql/queries */ \"./graphql/queries.js\");\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Nav */ \"./components/Nav.js\");\n/* harmony import */ var _components_DonateFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/DonateFooter */ \"./components/DonateFooter.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _components_Carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Carousel */ \"./components/Carousel.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction HorseDetail() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { name } = router.query;\n    const { loading, error, data } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useQuery)(_graphql_queries__WEBPACK_IMPORTED_MODULE_2__.GET_HORSE_BY_NAME, {\n        variables: {\n            name\n        },\n        skip: !name\n    });\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/chasefriedman/projects/2-the-rescue/pages/Horses/[name].js\",\n        lineNumber: 18,\n        columnNumber: 25\n    }, this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\n            \"Error: \",\n            error.message\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chasefriedman/projects/2-the-rescue/pages/Horses/[name].js\",\n        lineNumber: 19,\n        columnNumber: 23\n    }, this);\n    const horse = data === null || data === void 0 ? void 0 : data.horseByName;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"leading-normal tracking-normal text-white gradient\",\n            style: {\n                fontFamily: \"'Source Sans Pro', sans-serif\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/chasefriedman/projects/2-the-rescue/pages/Horses/[name].js\",\n                    lineNumber: 27,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container mx-auto px-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex mt-12 flex-wrap\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: horse.profileImage,\n                                    alt: horse.name,\n                                    className: \"w-1/2 rounded-xl mb-4\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/chasefriedman/projects/2-the-rescue/pages/Horses/[name].js\",\n                                    lineNumber: 63,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"p-6\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"text-6xl font-bold text-center\",\n                                            children: horse.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/chasefriedman/projects/2-the-rescue/pages/Horses/[name].js\",\n                                            lineNumber: 65,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-lg\",\n                                            children: horse.description\n                                        }, void 0, false, {\n                                            fileName: \"/Users/chasefriedman/projects/2-the-rescue/pages/Horses/[name].js\",\n                                            lineNumber: 66,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-lg\",\n                                            children: [\n                                                \"Age: \",\n                                                horse.age\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/chasefriedman/projects/2-the-rescue/pages/Horses/[name].js\",\n                                            lineNumber: 67,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-lg\",\n                                            children: [\n                                                \"Available for Adoption: \",\n                                                horse.adoption ? \"Yes\" : \"No\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/chasefriedman/projects/2-the-rescue/pages/Horses/[name].js\",\n                                            lineNumber: 68,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/chasefriedman/projects/2-the-rescue/pages/Horses/[name].js\",\n                                    lineNumber: 64,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/chasefriedman/projects/2-the-rescue/pages/Horses/[name].js\",\n                            lineNumber: 62,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-4\",\n                            children: horse.photos && horse.photos.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-2xl font-bold mb-2\",\n                                        children: \"Photos\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chasefriedman/projects/2-the-rescue/pages/Horses/[name].js\",\n                                        lineNumber: 74,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4\",\n                                        children: horse.photos.map((photo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: photo,\n                                                alt: \"\".concat(horse.name, \" photo \").concat(index + 1),\n                                                className: \"w-full rounded-xl\"\n                                            }, index, false, {\n                                                fileName: \"/Users/chasefriedman/projects/2-the-rescue/pages/Horses/[name].js\",\n                                                lineNumber: 77,\n                                                columnNumber: 41\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/chasefriedman/projects/2-the-rescue/pages/Horses/[name].js\",\n                                        lineNumber: 75,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true)\n                        }, void 0, false, {\n                            fileName: \"/Users/chasefriedman/projects/2-the-rescue/pages/Horses/[name].js\",\n                            lineNumber: 71,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/chasefriedman/projects/2-the-rescue/pages/Horses/[name].js\",\n                    lineNumber: 60,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DonateFooter__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/chasefriedman/projects/2-the-rescue/pages/Horses/[name].js\",\n                    lineNumber: 84,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/chasefriedman/projects/2-the-rescue/pages/Horses/[name].js\",\n                    lineNumber: 85,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/chasefriedman/projects/2-the-rescue/pages/Horses/[name].js\",\n            lineNumber: 26,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(HorseDetail, \"3cmGJmCPbWz07HwSwgYwWOwFKhw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_7__.useQuery\n    ];\n});\n_c = HorseDetail;\nvar _c;\n$RefreshReg$(_c, \"HorseDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Ib3JzZXMvW25hbWVdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNFO0FBQ2dCO0FBQ25CO0FBQ2tCO0FBQ1o7QUFDQTtBQUU5QixTQUFTTzs7SUFDcEIsTUFBTUMsU0FBU1Isc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRVMsSUFBSSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFFN0IsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFLEdBQUdaLHdEQUFRQSxDQUFDQywrREFBaUJBLEVBQUU7UUFDekRZLFdBQVc7WUFBRUw7UUFBSztRQUNsQk0sTUFBTSxDQUFDTjtJQUNYO0lBRUEsSUFBSUUsU0FBUyxxQkFBTyw4REFBQ0s7a0JBQUU7Ozs7OztJQUN2QixJQUFJSixPQUFPLHFCQUFPLDhEQUFDSTs7WUFBRTtZQUFRSixNQUFNSyxPQUFPOzs7Ozs7O0lBRTFDLE1BQU1DLFFBQVFMLGlCQUFBQSwyQkFBQUEsS0FBTU0sV0FBVztJQUUvQixxQkFDSTtrQkFFSSw0RUFBQ0M7WUFBS0MsV0FBVTtZQUFxREMsT0FBTztnQkFBRUMsWUFBWTtZQUFnQzs7OEJBQzFILDhEQUFDcEIsdURBQUdBOzs7Ozs4QkFpQ0EsOERBQUNxQjtvQkFBSUgsV0FBVTs7c0NBRVgsOERBQUNHOzRCQUFJSCxXQUFVOzs4Q0FDWCw4REFBQ0k7b0NBQUlDLEtBQUtSLE1BQU1TLFlBQVk7b0NBQUVDLEtBQUtWLE1BQU1ULElBQUk7b0NBQUVZLFdBQVU7Ozs7Ozs4Q0FDekQsOERBQUNHO29DQUFJSCxXQUFVOztzREFDWCw4REFBQ1E7NENBQUdSLFdBQVU7c0RBQWtDSCxNQUFNVCxJQUFJOzs7Ozs7c0RBQzFELDhEQUFDTzs0Q0FBRUssV0FBVTtzREFBV0gsTUFBTVksV0FBVzs7Ozs7O3NEQUN6Qyw4REFBQ2Q7NENBQUVLLFdBQVU7O2dEQUFVO2dEQUFNSCxNQUFNYSxHQUFHOzs7Ozs7O3NEQUN0Qyw4REFBQ2Y7NENBQUVLLFdBQVU7O2dEQUFVO2dEQUF5QkgsTUFBTWMsUUFBUSxHQUFHLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBR2pGLDhEQUFDUjs0QkFBSUgsV0FBVTtzQ0FDVkgsTUFBTWUsTUFBTSxJQUFJZixNQUFNZSxNQUFNLENBQUNDLE1BQU0sR0FBRyxtQkFDbkM7O2tEQUNJLDhEQUFDQzt3Q0FBR2QsV0FBVTtrREFBMEI7Ozs7OztrREFDeEMsOERBQUNHO3dDQUFJSCxXQUFVO2tEQUNWSCxNQUFNZSxNQUFNLENBQUNHLEdBQUcsQ0FBQyxDQUFDQyxPQUFPQyxzQkFDdEIsOERBQUNiO2dEQUFnQkMsS0FBS1c7Z0RBQU9ULEtBQUssR0FBdUJVLE9BQXBCcEIsTUFBTVQsSUFBSSxFQUFDLFdBQW1CLE9BQVY2QixRQUFRO2dEQUFLakIsV0FBVTsrQ0FBdEVpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBT2xDLDhEQUFDbEMsZ0VBQVlBOzs7Ozs4QkFDYiw4REFBQ0MsMERBQU1BOzs7Ozs7Ozs7Ozs7QUFLdkI7R0FqRndCRTs7UUFDTFAsa0RBQVNBO1FBR1NDLG9EQUFRQTs7O0tBSnJCTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Ib3JzZXMvW25hbWVdLmpzPzBmOGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgeyBHRVRfSE9SU0VfQllfTkFNRSB9IGZyb20gJy4uLy4uL2dyYXBocWwvcXVlcmllcyc7XG5pbXBvcnQgTmF2IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2JztcbmltcG9ydCBEb25hdGVGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Eb25hdGVGb290ZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnQC9jb21wb25lbnRzL0Nhcm91c2VsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9yc2VEZXRhaWwoKSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgeyBuYW1lIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfSE9SU0VfQllfTkFNRSwge1xuICAgICAgICB2YXJpYWJsZXM6IHsgbmFtZSB9LFxuICAgICAgICBza2lwOiAhbmFtZSxcbiAgICB9KTtcblxuICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gICAgaWYgKGVycm9yKSByZXR1cm4gPHA+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvcD47XG5cbiAgICBjb25zdCBob3JzZSA9IGRhdGE/LmhvcnNlQnlOYW1lO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwibGVhZGluZy1ub3JtYWwgdHJhY2tpbmctbm9ybWFsIHRleHQtd2hpdGUgZ3JhZGllbnRcIiBzdHlsZT17eyBmb250RmFtaWx5OiBcIidTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmXCIgfX0+XG4gICAgICAgICAgICA8TmF2IC8+ICAgIFxuICAgICAgICAgICAgICAgIHsvKiA8c2VjdGlvbiBjbGFzc05hbWU9J214LTEwIHB0LTI0Jz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbCB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzbGlkZTFcIiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pdGVtIHJlbGF0aXZlIHctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuZGFpc3l1aS5jb20vaW1hZ2VzL3N0b2NrL3Bob3RvLTE2MjU3MjY0MTE4NDctOGNiYjYwY2M3MWU2LmpwZ1wiIGNsYXNzTmFtZT1cInctZnVsbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBmbGV4IGp1c3RpZnktYmV0d2VlbiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTEvMiBsZWZ0LTUgcmlnaHQtNSB0b3AtMS8yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjc2xpZGU0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1jaXJjbGVcIj7ina48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjc2xpZGUyXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1jaXJjbGVcIj7ina88L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzbGlkZTJcIiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pdGVtIHJlbGF0aXZlIHctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuZGFpc3l1aS5jb20vaW1hZ2VzL3N0b2NrL3Bob3RvLTE2MDk2MjE4Mzg1MTAtNWFkNDc0YjdkMjVkLmpwZ1wiIGNsYXNzTmFtZT1cInctZnVsbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBmbGV4IGp1c3RpZnktYmV0d2VlbiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTEvMiBsZWZ0LTUgcmlnaHQtNSB0b3AtMS8yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjc2xpZGUxXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1jaXJjbGVcIj7ina48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjc2xpZGUzXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1jaXJjbGVcIj7ina88L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzbGlkZTNcIiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pdGVtIHJlbGF0aXZlIHctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuZGFpc3l1aS5jb20vaW1hZ2VzL3N0b2NrL3Bob3RvLTE0MTQ2OTQ3NjIyODMtYWNjY2MyN2JjYTg1LmpwZ1wiIGNsYXNzTmFtZT1cInctZnVsbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBmbGV4IGp1c3RpZnktYmV0d2VlbiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTEvMiBsZWZ0LTUgcmlnaHQtNSB0b3AtMS8yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjc2xpZGUyXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1jaXJjbGVcIj7ina48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjc2xpZGU0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1jaXJjbGVcIj7ina88L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzbGlkZTRcIiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pdGVtIHJlbGF0aXZlIHctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuZGFpc3l1aS5jb20vaW1hZ2VzL3N0b2NrL3Bob3RvLTE2NjU1NTMzNjU2MDItYjJmYjhlNWQxNzA3LmpwZ1wiIGNsYXNzTmFtZT1cInctZnVsbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBmbGV4IGp1c3RpZnktYmV0d2VlbiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTEvMiBsZWZ0LTUgcmlnaHQtNSB0b3AtMS8yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjc2xpZGUzXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1jaXJjbGVcIj7ina48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjc2xpZGUxXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1jaXJjbGVcIj7ina88L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPiAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBtdC0xMiBmbGV4LXdyYXAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2hvcnNlLnByb2ZpbGVJbWFnZX0gYWx0PXtob3JzZS5uYW1lfSBjbGFzc05hbWU9XCJ3LTEvMiByb3VuZGVkLXhsIG1iLTRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3AtNic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNnhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlclwiPntob3JzZS5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZ1wiPntob3JzZS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZ1wiPkFnZToge2hvcnNlLmFnZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZ1wiPkF2YWlsYWJsZSBmb3IgQWRvcHRpb246IHtob3JzZS5hZG9wdGlvbiA/ICdZZXMnIDogJ05vJ308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2hvcnNlLnBob3RvcyAmJiBob3JzZS5waG90b3MubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi0yXCI+UGhvdG9zPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aG9yc2UucGhvdG9zLm1hcCgocGhvdG8sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBrZXk9e2luZGV4fSBzcmM9e3Bob3RvfSBhbHQ9e2Ake2hvcnNlLm5hbWV9IHBob3RvICR7aW5kZXggKyAxfWB9IGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLXhsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxEb25hdGVGb290ZXIgLz5cbiAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlUXVlcnkiLCJHRVRfSE9SU0VfQllfTkFNRSIsIk5hdiIsIkRvbmF0ZUZvb3RlciIsIkZvb3RlciIsIkNhcm91c2VsIiwiSG9yc2VEZXRhaWwiLCJyb3V0ZXIiLCJuYW1lIiwicXVlcnkiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwidmFyaWFibGVzIiwic2tpcCIsInAiLCJtZXNzYWdlIiwiaG9yc2UiLCJob3JzZUJ5TmFtZSIsIm1haW4iLCJjbGFzc05hbWUiLCJzdHlsZSIsImZvbnRGYW1pbHkiLCJkaXYiLCJpbWciLCJzcmMiLCJwcm9maWxlSW1hZ2UiLCJhbHQiLCJoMSIsImRlc2NyaXB0aW9uIiwiYWdlIiwiYWRvcHRpb24iLCJwaG90b3MiLCJsZW5ndGgiLCJoMiIsIm1hcCIsInBob3RvIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Horses/[name].js\n"));

/***/ })

});