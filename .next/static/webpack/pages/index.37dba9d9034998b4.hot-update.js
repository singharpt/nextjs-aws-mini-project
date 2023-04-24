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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/TextField */ \"./node_modules/@mui/material/TextField/index.js\");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typewriter-effect */ \"./node_modules/typewriter-effect/dist/react.js\");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typewriter_effect__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const submitEmail = async ()=>{\n        try {\n            const response = await fetch(\"https://74mshflwtg.execute-api.us-east-1.amazonaws.com/dev\", {\n                method: \"POST\",\n                body: JSON.stringify({\n                    email: email\n                }),\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            console.log(response.json());\n            if (response.status === 200) {\n                (0,react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast)(\"You will recieve an email shortly.\", {\n                    position: react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.POSITION.TOP_CENTER,\n                    autoClose: 7000,\n                    hideProgressBar: true,\n                    closeOnClick: false,\n                    pauseOnHover: false,\n                    draggable: false,\n                    progressClassName: \"my-toast-progress\",\n                    bodyClassName: \"my-toast-body\"\n                });\n            } else {\n                (0,react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast)(\"Sorry the email address entered is invalid, please try again.\", {\n                    position: react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.POSITION.TOP_CENTER,\n                    autoClose: 7000,\n                    hideProgressBar: true,\n                    closeOnClick: false,\n                    pauseOnHover: false,\n                    draggable: false,\n                    progressClassName: \"my-toast-progress\",\n                    toastClassName: \"my-toast\",\n                    bodyClassName: \"my-toast-body\"\n                });\n            }\n        } catch (error) {\n            console.log(error);\n        }\n        setEmail(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Arpit Singh Resume\"\n                    }, void 0, false, {\n                        fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/footer.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().description),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((typewriter_effect__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            onInit: (typewriter)=>{\n                                typewriter.typeString(\"Hi! To receive my resume start by typing your email address below & Hit Go!\").callFunction(()=>{\n                                    console.log(\"String typed out!\");\n                                }).start();\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            required: true,\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().inputfield),\n                            id: \"outlined-basic\",\n                            color: \"secondary\",\n                            label: \"Email\",\n                            placeholder: \"abc@xyz.com\",\n                            value: email,\n                            onChange: (param)=>{\n                                let { target  } = param;\n                                return setEmail(target === null || target === void 0 ? void 0 : target.value);\n                            },\n                            children: \"Email\"\n                        }, void 0, false, {\n                            fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),\n                            variant: \"contained\",\n                            color: \"secondary\",\n                            onClick: submitEmail,\n                            children: \"Hit Go\"\n                        }, void 0, false, {\n                            fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"Pe1zWWKcsJK82m3WyFiCTurRPxo=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUVpQjtBQUNKO0FBQ007QUFDTDtBQUNWO0FBQ007QUFFeEIsU0FBU08sT0FBTzs7SUFDN0IsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1LLGNBQWMsVUFBWTtRQUM5QixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUNyQiw4REFDQTtnQkFDRUMsUUFBUTtnQkFDUkMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFUixPQUFPQTtnQkFBTTtnQkFDcENTLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtZQUNGO1lBRUZDLFFBQVFDLEdBQUcsQ0FBQ1IsU0FBU1MsSUFBSTtZQUN6QixJQUFJVCxTQUFTVSxNQUFNLEtBQUssS0FBSztnQkFDM0JmLHFEQUFLQSxDQUFDLHNDQUFzQztvQkFDMUNnQixVQUFVaEIscUVBQXlCO29CQUNuQ21CLFdBQVc7b0JBQ1hDLGlCQUFpQixJQUFJO29CQUNyQkMsY0FBYyxLQUFLO29CQUNuQkMsY0FBYyxLQUFLO29CQUNuQkMsV0FBVyxLQUFLO29CQUNoQkMsbUJBQW1CO29CQUNuQkMsZUFBZTtnQkFDakI7WUFDRixPQUFPO2dCQUNMekIscURBQUtBLENBQUMsaUVBQWlFO29CQUNyRWdCLFVBQVVoQixxRUFBeUI7b0JBQ25DbUIsV0FBVztvQkFDWEMsaUJBQWlCLElBQUk7b0JBQ3JCQyxjQUFjLEtBQUs7b0JBQ25CQyxjQUFjLEtBQUs7b0JBQ25CQyxXQUFXLEtBQUs7b0JBQ2hCQyxtQkFBbUI7b0JBQ25CRSxnQkFBZ0I7b0JBQ2hCRCxlQUFlO2dCQUNqQjtZQUNGLENBQUM7UUFDSCxFQUFFLE9BQU9FLE9BQU87WUFDZGYsUUFBUUMsR0FBRyxDQUFDYztRQUNkO1FBQ0F4QixTQUFTO0lBQ1g7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNULGtEQUFJQTs7a0NBQ0gsOERBQUNrQztrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUd4Qiw4REFBQ0M7Z0JBQUtDLFdBQVd0QyxxRUFBVzs7a0NBQzFCLDhEQUFDdUM7d0JBQUlELFdBQVd0Qyw0RUFBa0I7a0NBQ2hDLDRFQUFDRywwREFBVUE7NEJBQ1RzQyxRQUFRLENBQUNDLGFBQWU7Z0NBQ3RCQSxXQUNHQyxVQUFVLENBQ1QsK0VBRURDLFlBQVksQ0FBQyxJQUFNO29DQUNsQjNCLFFBQVFDLEdBQUcsQ0FBQztnQ0FDZCxHQUNDMkIsS0FBSzs0QkFDVjs7Ozs7Ozs7Ozs7a0NBR0osOERBQUNOO2tDQUNDLDRFQUFDckMsK0RBQVNBOzRCQUNSNEMsUUFBUTs0QkFDUlIsV0FBV3RDLDJFQUFpQjs0QkFDNUJnRCxJQUFHOzRCQUNIQyxPQUFNOzRCQUNOQyxPQUFNOzRCQUNOQyxhQUFZOzRCQUNaQyxPQUFPN0M7NEJBQ1A4QyxVQUFVO29DQUFDLEVBQUVDLE9BQU0sRUFBRTtnQ0FBSzlDLE9BQUFBLFNBQVM4QyxtQkFBQUEsb0JBQUFBLEtBQUFBLElBQUFBLE9BQVFGLEtBQUs7O3NDQUNqRDs7Ozs7Ozs7Ozs7a0NBSUgsOERBQUNiO2tDQUNDLDRFQUFDdEMsNERBQU1BOzRCQUNMcUMsV0FBV3RDLHVFQUFhOzRCQUN4QndELFNBQVE7NEJBQ1JQLE9BQU07NEJBQ05RLFNBQVNoRDtzQ0FDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YLENBQUM7R0EvRnVCSDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBDb250ZW50LCBJbnRlciB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbXVpL21hdGVyaWFsL1RleHRGaWVsZFwiO1xuaW1wb3J0IFR5cGV3cml0ZXIgZnJvbSBcInR5cGV3cml0ZXItZWZmZWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBzdWJtaXRFbWFpbCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgXCJodHRwczovLzc0bXNoZmx3dGcuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vZGV2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWw6IGVtYWlsIH0pLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5qc29uKCkpO1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIHRvYXN0KFwiWW91IHdpbGwgcmVjaWV2ZSBhbiBlbWFpbCBzaG9ydGx5LlwiLCB7XG4gICAgICAgICAgcG9zaXRpb246IHRvYXN0LlBPU0lUSU9OLlRPUF9DRU5URVIsXG4gICAgICAgICAgYXV0b0Nsb3NlOiA3MDAwLFxuICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogdHJ1ZSxcbiAgICAgICAgICBjbG9zZU9uQ2xpY2s6IGZhbHNlLFxuICAgICAgICAgIHBhdXNlT25Ib3ZlcjogZmFsc2UsXG4gICAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgICBwcm9ncmVzc0NsYXNzTmFtZTogXCJteS10b2FzdC1wcm9ncmVzc1wiLFxuICAgICAgICAgIGJvZHlDbGFzc05hbWU6IFwibXktdG9hc3QtYm9keVwiLFxuICAgICAgICB9IGFzIGFueSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2FzdChcIlNvcnJ5IHRoZSBlbWFpbCBhZGRyZXNzIGVudGVyZWQgaXMgaW52YWxpZCwgcGxlYXNlIHRyeSBhZ2Fpbi5cIiwge1xuICAgICAgICAgIHBvc2l0aW9uOiB0b2FzdC5QT1NJVElPTi5UT1BfQ0VOVEVSLFxuICAgICAgICAgIGF1dG9DbG9zZTogNzAwMCxcbiAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IHRydWUsXG4gICAgICAgICAgY2xvc2VPbkNsaWNrOiBmYWxzZSxcbiAgICAgICAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLFxuICAgICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICAgICAgcHJvZ3Jlc3NDbGFzc05hbWU6IFwibXktdG9hc3QtcHJvZ3Jlc3NcIixcbiAgICAgICAgICB0b2FzdENsYXNzTmFtZTogXCJteS10b2FzdFwiLFxuICAgICAgICAgIGJvZHlDbGFzc05hbWU6IFwibXktdG9hc3QtYm9keVwiLFxuICAgICAgICB9IGFzIGFueSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gICAgc2V0RW1haWwoXCJcIik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5BcnBpdCBTaW5naCBSZXN1bWU8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mb290ZXIuaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgIDxUeXBld3JpdGVyXG4gICAgICAgICAgICBvbkluaXQ9eyh0eXBld3JpdGVyKSA9PiB7XG4gICAgICAgICAgICAgIHR5cGV3cml0ZXJcbiAgICAgICAgICAgICAgICAudHlwZVN0cmluZyhcbiAgICAgICAgICAgICAgICAgIFwiSGkhIFRvIHJlY2VpdmUgbXkgcmVzdW1lIHN0YXJ0IGJ5IHR5cGluZyB5b3VyIGVtYWlsIGFkZHJlc3MgYmVsb3cgJiBIaXQgR28hXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmNhbGxGdW5jdGlvbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlN0cmluZyB0eXBlZCBvdXQhXCIpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dGZpZWxkfVxuICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1iYXNpY1wiXG4gICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiYWJjQHh5ei5jb21cIlxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PiBzZXRFbWFpbCh0YXJnZXQ/LnZhbHVlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBFbWFpbFxuICAgICAgICAgIDwvVGV4dEZpZWxkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259XG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3N1Ym1pdEVtYWlsfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEhpdCBHb1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwic3R5bGVzIiwiQnV0dG9uIiwiVGV4dEZpZWxkIiwiVHlwZXdyaXRlciIsInVzZVN0YXRlIiwidG9hc3QiLCJIb21lIiwiZW1haWwiLCJzZXRFbWFpbCIsInN1Ym1pdEVtYWlsIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwic3RhdHVzIiwicG9zaXRpb24iLCJQT1NJVElPTiIsIlRPUF9DRU5URVIiLCJhdXRvQ2xvc2UiLCJoaWRlUHJvZ3Jlc3NCYXIiLCJjbG9zZU9uQ2xpY2siLCJwYXVzZU9uSG92ZXIiLCJkcmFnZ2FibGUiLCJwcm9ncmVzc0NsYXNzTmFtZSIsImJvZHlDbGFzc05hbWUiLCJ0b2FzdENsYXNzTmFtZSIsImVycm9yIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJkZXNjcmlwdGlvbiIsIm9uSW5pdCIsInR5cGV3cml0ZXIiLCJ0eXBlU3RyaW5nIiwiY2FsbEZ1bmN0aW9uIiwic3RhcnQiLCJyZXF1aXJlZCIsImlucHV0ZmllbGQiLCJpZCIsImNvbG9yIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iLCJ2YXJpYW50Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});