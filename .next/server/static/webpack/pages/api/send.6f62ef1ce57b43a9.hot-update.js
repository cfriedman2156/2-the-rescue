"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/api/send",{

/***/ "(middleware)/./pages/api/send.js":
/*!***************************!*\
  !*** ./pages/api/send.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var resend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! resend */ \"(middleware)/./node_modules/resend/dist/index.mjs\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\n\nconst resend = new resend__WEBPACK_IMPORTED_MODULE_0__.Resend(process.env.RESEND_API_KEY);\nasync function handler(req) {\n    if (req.method === \"POST\") {\n        const { name, email, phone, subject, message } = await req.json();\n        try {\n            const data = await resend.emails.send({\n                from: \"info@2therescueanimalsanctuary.org\",\n                to: \"2therescueanimalsanctuary@gmail.com\",\n                subject: subject,\n                html: `\n                    <h1>Name: ${name}</h1>\n                    <h1>Email: ${email}</h1>\n                    <h1>Phone: ${phone}</h1>\n                    <h1>Message:</h1>\n                    <p>${message}</p>\n                `\n            });\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                data\n            }, {\n                status: 200\n            });\n        } catch (err) {\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                error: err.message\n            }, {\n                status: 500\n            });\n        }\n    } else {\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            error: `Method ${req.method} Not Allowed`\n        }, {\n            status: 405\n        });\n    }\n}\nconst config = {\n    runtime: \"edge\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vcGFnZXMvYXBpL3NlbmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFnQztBQUNXO0FBRTNDLE1BQU1FLFNBQVMsSUFBSUYsMENBQU1BLENBQUNHLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYztBQUVyQyxlQUFlQyxRQUFRQyxHQUFHO0lBQ3JDLElBQUlBLElBQUlDLE1BQU0sS0FBSyxRQUFRO1FBQ3ZCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUUsR0FBRyxNQUFNTixJQUFJTyxJQUFJO1FBRS9ELElBQUk7WUFDQSxNQUFNQyxPQUFPLE1BQU1iLE9BQU9jLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDO2dCQUNsQ0MsTUFBTTtnQkFDTkMsSUFBSTtnQkFDSlAsU0FBU0E7Z0JBQ1RRLE1BQU0sQ0FBQzs4QkFDTyxFQUFFWCxLQUFLOytCQUNOLEVBQUVDLE1BQU07K0JBQ1IsRUFBRUMsTUFBTTs7dUJBRWhCLEVBQUVFLFFBQVE7Z0JBQ2pCLENBQUM7WUFDTDtZQUVBLE9BQU9aLHFEQUFZQSxDQUFDYSxJQUFJLENBQUM7Z0JBQUVDO1lBQUssR0FBRztnQkFBRU0sUUFBUTtZQUFJO1FBQ3JELEVBQUUsT0FBT0MsS0FBSztZQUNWLE9BQU9yQixxREFBWUEsQ0FBQ2EsSUFBSSxDQUFDO2dCQUFFUyxPQUFPRCxJQUFJVCxPQUFPO1lBQUMsR0FBRztnQkFBRVEsUUFBUTtZQUFJO1FBQ25FO0lBQ0osT0FBTztRQUNILE9BQU9wQixxREFBWUEsQ0FBQ2EsSUFBSSxDQUFDO1lBQUVTLE9BQU8sQ0FBQyxPQUFPLEVBQUVoQixJQUFJQyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQUMsR0FBRztZQUFFYSxRQUFRO1FBQUk7SUFDMUY7QUFDSjtBQUVPLE1BQU1HLFNBQVM7SUFDbEJDLFNBQVM7QUFDYixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FwaS9zZW5kLmpzP2UzYTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVzZW5kIH0gZnJvbSAncmVzZW5kJztcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcblxuY29uc3QgcmVzZW5kID0gbmV3IFJlc2VuZChwcm9jZXNzLmVudi5SRVNFTkRfQVBJX0tFWSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxKSB7XG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgICBjb25zdCB7IG5hbWUsIGVtYWlsLCBwaG9uZSwgc3ViamVjdCwgbWVzc2FnZSB9ID0gYXdhaXQgcmVxLmpzb24oKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc2VuZC5lbWFpbHMuc2VuZCh7XG4gICAgICAgICAgICAgICAgZnJvbTogJ2luZm9AMnRoZXJlc2N1ZWFuaW1hbHNhbmN0dWFyeS5vcmcnLFxuICAgICAgICAgICAgICAgIHRvOiAnMnRoZXJlc2N1ZWFuaW1hbHNhbmN0dWFyeUBnbWFpbC5jb20nLFxuICAgICAgICAgICAgICAgIHN1YmplY3Q6IHN1YmplY3QsXG4gICAgICAgICAgICAgICAgaHRtbDogYFxuICAgICAgICAgICAgICAgICAgICA8aDE+TmFtZTogJHtuYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5FbWFpbDogJHtlbWFpbH08L2gxPlxuICAgICAgICAgICAgICAgICAgICA8aDE+UGhvbmU6ICR7cGhvbmV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGgxPk1lc3NhZ2U6PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPHA+JHttZXNzYWdlfTwvcD5cbiAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGRhdGEgfSwgeyBzdGF0dXM6IDIwMCB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogZXJyLm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBgTWV0aG9kICR7cmVxLm1ldGhvZH0gTm90IEFsbG93ZWRgIH0sIHsgc3RhdHVzOiA0MDUgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICAgIHJ1bnRpbWU6ICdlZGdlJyxcbn07XG4iXSwibmFtZXMiOlsiUmVzZW5kIiwiTmV4dFJlc3BvbnNlIiwicmVzZW5kIiwicHJvY2VzcyIsImVudiIsIlJFU0VORF9BUElfS0VZIiwiaGFuZGxlciIsInJlcSIsIm1ldGhvZCIsIm5hbWUiLCJlbWFpbCIsInBob25lIiwic3ViamVjdCIsIm1lc3NhZ2UiLCJqc29uIiwiZGF0YSIsImVtYWlscyIsInNlbmQiLCJmcm9tIiwidG8iLCJodG1sIiwic3RhdHVzIiwiZXJyIiwiZXJyb3IiLCJjb25maWciLCJydW50aW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./pages/api/send.js\n");

/***/ })

});