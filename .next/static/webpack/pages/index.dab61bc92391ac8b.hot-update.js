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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/TextField */ \"./node_modules/@mui/material/TextField/index.js\");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typewriter-effect */ \"./node_modules/typewriter-effect/dist/react.js\");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typewriter_effect__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const submitEmail = async ()=>{\n        const statusCode = 200;\n        try {\n            const response = await fetch(\"https://74mshflwtg.execute-api.us-east-1.amazonaws.com/dev\", {\n                method: \"POST\",\n                body: JSON.stringify({\n                    email: email\n                }),\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            }).then((response)=>response.json()).then((data)=>{\n                if (data.status === 200) {\n                    (0,react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast)(\"You will recieve an email shortly.\", {\n                        position: react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.POSITION.TOP_CENTER,\n                        autoClose: 7000,\n                        hideProgressBar: true,\n                        closeOnClick: false,\n                        pauseOnHover: false,\n                        draggable: false,\n                        progressClassName: \"my-toast-progress\",\n                        bodyClassName: \"my-toast-body\"\n                    });\n                } else {\n                    (0,react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast)(\"Sorry the email address entered is invalid, please try again.\", {\n                        position: react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.POSITION.TOP_CENTER,\n                        autoClose: 7000,\n                        hideProgressBar: true,\n                        closeOnClick: false,\n                        pauseOnHover: false,\n                        draggable: false,\n                        progressClassName: \"my-toast-progress\",\n                        toastClassName: \"my-toast\",\n                        bodyClassName: \"my-toast-body\"\n                    });\n                } // logs the entire JSON object to the console\n            });\n        // console.log(data);\n        } catch (error) {\n            console.log(error);\n        }\n        setEmail(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Arpit Singh Resume\"\n                    }, void 0, false, {\n                        fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/footer.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().description),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((typewriter_effect__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            onInit: (typewriter)=>{\n                                typewriter.typeString(\"Hi! To receive my resume start by typing your email address below & Hit Go!\").callFunction(()=>{\n                                    console.log(\"String typed out!\");\n                                }).start();\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            required: true,\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().inputfield),\n                            id: \"outlined-basic\",\n                            color: \"secondary\",\n                            label: \"Email\",\n                            placeholder: \"abc@xyz.com\",\n                            value: email,\n                            onChange: (param)=>{\n                                let { target  } = param;\n                                return setEmail(target === null || target === void 0 ? void 0 : target.value);\n                            },\n                            children: \"Email\"\n                        }, void 0, false, {\n                            fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),\n                            variant: \"contained\",\n                            color: \"secondary\",\n                            onClick: submitEmail,\n                            children: \"Hit Go\"\n                        }, void 0, false, {\n                            fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"Pe1zWWKcsJK82m3WyFiCTurRPxo=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUVpQjtBQUNKO0FBQ007QUFDTDtBQUNWO0FBQ007QUFHeEIsU0FBU08sT0FBTzs7SUFDN0IsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1LLGNBQWMsVUFBWTtRQUM5QixNQUFNQyxhQUFhO1FBQ25CLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQ3JCLDhEQUNBO2dCQUNFQyxRQUFRO2dCQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVULE9BQU9BO2dCQUFNO2dCQUNwQ1UsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO1lBQ0YsR0FFQ0MsSUFBSSxDQUFDLENBQUNQLFdBQWFBLFNBQVNRLElBQUksSUFDaENELElBQUksQ0FBQyxDQUFDRSxPQUFTO2dCQUNkLElBQUlBLEtBQUtDLE1BQU0sS0FBSyxLQUFLO29CQUN2QmhCLHFEQUFLQSxDQUFDLHNDQUFzQzt3QkFDMUNpQixVQUFVakIscUVBQXlCO3dCQUNuQ29CLFdBQVc7d0JBQ1hDLGlCQUFpQixJQUFJO3dCQUNyQkMsY0FBYyxLQUFLO3dCQUNuQkMsY0FBYyxLQUFLO3dCQUNuQkMsV0FBVyxLQUFLO3dCQUNoQkMsbUJBQW1CO3dCQUNuQkMsZUFBZTtvQkFDakI7Z0JBQ0YsT0FBTztvQkFDTDFCLHFEQUFLQSxDQUNILGlFQUNBO3dCQUNFaUIsVUFBVWpCLHFFQUF5Qjt3QkFDbkNvQixXQUFXO3dCQUNYQyxpQkFBaUIsSUFBSTt3QkFDckJDLGNBQWMsS0FBSzt3QkFDbkJDLGNBQWMsS0FBSzt3QkFDbkJDLFdBQVcsS0FBSzt3QkFDaEJDLG1CQUFtQjt3QkFDbkJFLGdCQUFnQjt3QkFDaEJELGVBQWU7b0JBQ2pCO2dCQUVKLENBQUMsQ0FBQyw2Q0FBNkM7WUFDakQ7UUFFRixxQkFBcUI7UUFDdkIsRUFBRSxPQUFPRSxPQUFPO1lBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDZDtRQUNBekIsU0FBUztJQUNYO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDVCxrREFBSUE7O2tDQUNILDhEQUFDcUM7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFHeEIsOERBQUNDO2dCQUFLQyxXQUFXekMscUVBQVc7O2tDQUMxQiw4REFBQzBDO3dCQUFJRCxXQUFXekMsNEVBQWtCO2tDQUNoQyw0RUFBQ0csMERBQVVBOzRCQUNUeUMsUUFBUSxDQUFDQyxhQUFlO2dDQUN0QkEsV0FDR0MsVUFBVSxDQUNULCtFQUVEQyxZQUFZLENBQUMsSUFBTTtvQ0FDbEJiLFFBQVFDLEdBQUcsQ0FBQztnQ0FDZCxHQUNDYSxLQUFLOzRCQUNWOzs7Ozs7Ozs7OztrQ0FHSiw4REFBQ047a0NBQ0MsNEVBQUN4QywrREFBU0E7NEJBQ1IrQyxRQUFROzRCQUNSUixXQUFXekMsMkVBQWlCOzRCQUM1Qm1ELElBQUc7NEJBQ0hDLE9BQU07NEJBQ05DLE9BQU07NEJBQ05DLGFBQVk7NEJBQ1pDLE9BQU9oRDs0QkFDUGlELFVBQVU7b0NBQUMsRUFBRUMsT0FBTSxFQUFFO2dDQUFLakQsT0FBQUEsU0FBU2lELG1CQUFBQSxvQkFBQUEsS0FBQUEsSUFBQUEsT0FBUUYsS0FBSzs7c0NBQ2pEOzs7Ozs7Ozs7OztrQ0FJSCw4REFBQ2I7a0NBQ0MsNEVBQUN6Qyw0REFBTUE7NEJBQ0x3QyxXQUFXekMsdUVBQWE7NEJBQ3hCMkQsU0FBUTs0QkFDUlAsT0FBTTs0QkFDTlEsU0FBU25EO3NDQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1gsQ0FBQztHQXZHdUJIO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IENvbnRlbnQsIEludGVyIH0gZnJvbSBcIm5leHQvZm9udC9nb29nbGVcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkXCI7XG5pbXBvcnQgVHlwZXdyaXRlciBmcm9tIFwidHlwZXdyaXRlci1lZmZlY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IHsgcGFyc2VKc29uVGV4dCB9IGZyb20gXCJ0eXBlc2NyaXB0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3Qgc3VibWl0RW1haWwgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qgc3RhdHVzQ29kZSA9IDIwMDtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgXCJodHRwczovLzc0bXNoZmx3dGcuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vZGV2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWw6IGVtYWlsIH0pLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIHRvYXN0KFwiWW91IHdpbGwgcmVjaWV2ZSBhbiBlbWFpbCBzaG9ydGx5LlwiLCB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiB0b2FzdC5QT1NJVElPTi5UT1BfQ0VOVEVSLFxuICAgICAgICAgICAgICBhdXRvQ2xvc2U6IDcwMDAsXG4gICAgICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogdHJ1ZSxcbiAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrOiBmYWxzZSxcbiAgICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiBmYWxzZSxcbiAgICAgICAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgcHJvZ3Jlc3NDbGFzc05hbWU6IFwibXktdG9hc3QtcHJvZ3Jlc3NcIixcbiAgICAgICAgICAgICAgYm9keUNsYXNzTmFtZTogXCJteS10b2FzdC1ib2R5XCIsXG4gICAgICAgICAgICB9IGFzIGFueSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvYXN0KFxuICAgICAgICAgICAgICBcIlNvcnJ5IHRoZSBlbWFpbCBhZGRyZXNzIGVudGVyZWQgaXMgaW52YWxpZCwgcGxlYXNlIHRyeSBhZ2Fpbi5cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB0b2FzdC5QT1NJVElPTi5UT1BfQ0VOVEVSLFxuICAgICAgICAgICAgICAgIGF1dG9DbG9zZTogNzAwMCxcbiAgICAgICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NDbGFzc05hbWU6IFwibXktdG9hc3QtcHJvZ3Jlc3NcIixcbiAgICAgICAgICAgICAgICB0b2FzdENsYXNzTmFtZTogXCJteS10b2FzdFwiLFxuICAgICAgICAgICAgICAgIGJvZHlDbGFzc05hbWU6IFwibXktdG9hc3QtYm9keVwiLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IC8vIGxvZ3MgdGhlIGVudGlyZSBKU09OIG9iamVjdCB0byB0aGUgY29uc29sZVxuICAgICAgICB9KTtcblxuICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gICAgc2V0RW1haWwoXCJcIik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5BcnBpdCBTaW5naCBSZXN1bWU8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mb290ZXIuaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgIDxUeXBld3JpdGVyXG4gICAgICAgICAgICBvbkluaXQ9eyh0eXBld3JpdGVyKSA9PiB7XG4gICAgICAgICAgICAgIHR5cGV3cml0ZXJcbiAgICAgICAgICAgICAgICAudHlwZVN0cmluZyhcbiAgICAgICAgICAgICAgICAgIFwiSGkhIFRvIHJlY2VpdmUgbXkgcmVzdW1lIHN0YXJ0IGJ5IHR5cGluZyB5b3VyIGVtYWlsIGFkZHJlc3MgYmVsb3cgJiBIaXQgR28hXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmNhbGxGdW5jdGlvbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlN0cmluZyB0eXBlZCBvdXQhXCIpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dGZpZWxkfVxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1iYXNpY1wiXG4gICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiYWJjQHh5ei5jb21cIlxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PiBzZXRFbWFpbCh0YXJnZXQ/LnZhbHVlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBFbWFpbFxuICAgICAgICAgIDwvVGV4dEZpZWxkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259XG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3N1Ym1pdEVtYWlsfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEhpdCBHb1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwic3R5bGVzIiwiQnV0dG9uIiwiVGV4dEZpZWxkIiwiVHlwZXdyaXRlciIsInVzZVN0YXRlIiwidG9hc3QiLCJIb21lIiwiZW1haWwiLCJzZXRFbWFpbCIsInN1Ym1pdEVtYWlsIiwic3RhdHVzQ29kZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJ0aGVuIiwianNvbiIsImRhdGEiLCJzdGF0dXMiLCJwb3NpdGlvbiIsIlBPU0lUSU9OIiwiVE9QX0NFTlRFUiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInByb2dyZXNzQ2xhc3NOYW1lIiwiYm9keUNsYXNzTmFtZSIsInRvYXN0Q2xhc3NOYW1lIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJkZXNjcmlwdGlvbiIsIm9uSW5pdCIsInR5cGV3cml0ZXIiLCJ0eXBlU3RyaW5nIiwiY2FsbEZ1bmN0aW9uIiwic3RhcnQiLCJyZXF1aXJlZCIsImlucHV0ZmllbGQiLCJpZCIsImNvbG9yIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iLCJ2YXJpYW50Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});