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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/TextField */ \"./node_modules/@mui/material/TextField/index.js\");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typewriter-effect */ \"./node_modules/typewriter-effect/dist/react.js\");\n/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typewriter_effect__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const submitEmail = async ()=>{\n        try {\n            const response = await fetch(\"https://74mshflwtg.execute-api.us-east-1.amazonaws.com/dev\", {\n                method: \"POST\",\n                body: JSON.stringify({\n                    email: email\n                }),\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            }).then((response)=>response.json()).then((data)=>{\n                console.log(data.status); // logs the entire JSON object to the console\n            });\n        //const data = response.json()\n        // console.log(data);\n        // if (response.status === 200) {\n        //   toast(\"You will recieve an email shortly.\", {\n        //     position: toast.POSITION.TOP_CENTER,\n        //     autoClose: 7000,\n        //     hideProgressBar: true,\n        //     closeOnClick: false,\n        //     pauseOnHover: false,\n        //     draggable: false,\n        //     progressClassName: \"my-toast-progress\",\n        //     bodyClassName: \"my-toast-body\",\n        //   } as any);\n        // } else {\n        //   toast(\"Sorry the email address entered is invalid, please try again.\", {\n        //     position: toast.POSITION.TOP_CENTER,\n        //     autoClose: 7000,\n        //     hideProgressBar: true,\n        //     closeOnClick: false,\n        //     pauseOnHover: false,\n        //     draggable: false,\n        //     progressClassName: \"my-toast-progress\",\n        //     toastClassName: \"my-toast\",\n        //     bodyClassName: \"my-toast-body\",\n        //   } as any);\n        // }\n        } catch (error) {\n            console.log(error);\n        }\n        setEmail(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Arpit Singh Resume\"\n                    }, void 0, false, {\n                        fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/footer.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().description),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((typewriter_effect__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            onInit: (typewriter)=>{\n                                typewriter.typeString(\"Hi! To receive my resume start by typing your email address below & Hit Go!\").callFunction(()=>{\n                                    console.log(\"String typed out!\");\n                                }).start();\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            required: true,\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputfield),\n                            id: \"outlined-basic\",\n                            color: \"secondary\",\n                            label: \"Email\",\n                            placeholder: \"abc@xyz.com\",\n                            value: email,\n                            onChange: (param)=>{\n                                let { target  } = param;\n                                return setEmail(target === null || target === void 0 ? void 0 : target.value);\n                            },\n                            children: \"Email\"\n                        }, void 0, false, {\n                            fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n                            variant: \"contained\",\n                            color: \"secondary\",\n                            onClick: submitEmail,\n                            children: \"Hit Go\"\n                        }, void 0, false, {\n                            fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/arpit/Desktop/my-portfolio/pages/index.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"Pe1zWWKcsJK82m3WyFiCTurRPxo=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBRWlCO0FBQ0o7QUFDTTtBQUNMO0FBQ1Y7QUFJbEIsU0FBU00sT0FBTzs7SUFDN0IsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdILCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1JLGNBQWMsVUFBWTtRQUM5QixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUNyQiw4REFDQTtnQkFDRUMsUUFBUTtnQkFDUkMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFUixPQUFPQTtnQkFBTTtnQkFDcENTLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtZQUNGLEdBRUNDLElBQUksQ0FBQyxDQUFDUCxXQUFhQSxTQUFTUSxJQUFJLElBQ2hDRCxJQUFJLENBQUMsQ0FBQ0UsT0FBUztnQkFDZEMsUUFBUUMsR0FBRyxDQUFDRixLQUFLRyxNQUFNLEdBQUcsNkNBQTZDO1lBQ3pFO1FBQ0YsOEJBQThCO1FBRTlCLHFCQUFxQjtRQUNyQixpQ0FBaUM7UUFDakMsa0RBQWtEO1FBQ2xELDJDQUEyQztRQUMzQyx1QkFBdUI7UUFDdkIsNkJBQTZCO1FBQzdCLDJCQUEyQjtRQUMzQiwyQkFBMkI7UUFDM0Isd0JBQXdCO1FBQ3hCLDhDQUE4QztRQUM5QyxzQ0FBc0M7UUFDdEMsZUFBZTtRQUNmLFdBQVc7UUFDWCw2RUFBNkU7UUFDN0UsMkNBQTJDO1FBQzNDLHVCQUF1QjtRQUN2Qiw2QkFBNkI7UUFDN0IsMkJBQTJCO1FBQzNCLDJCQUEyQjtRQUMzQix3QkFBd0I7UUFDeEIsOENBQThDO1FBQzlDLGtDQUFrQztRQUNsQyxzQ0FBc0M7UUFDdEMsZUFBZTtRQUNmLElBQUk7UUFDTixFQUFFLE9BQU9DLE9BQU87WUFDZEgsUUFBUUMsR0FBRyxDQUFDRTtRQUNkO1FBQ0FmLFNBQVM7SUFDWDtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ1Isa0RBQUlBOztrQ0FDSCw4REFBQ3dCO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBR3hCLDhEQUFDQztnQkFBS0MsV0FBVzVCLHFFQUFXOztrQ0FDMUIsOERBQUM2Qjt3QkFBSUQsV0FBVzVCLDRFQUFrQjtrQ0FDaEMsNEVBQUNHLDBEQUFVQTs0QkFDVDRCLFFBQVEsQ0FBQ0MsYUFBZTtnQ0FDdEJBLFdBQ0dDLFVBQVUsQ0FDVCwrRUFFREMsWUFBWSxDQUFDLElBQU07b0NBQ2xCZixRQUFRQyxHQUFHLENBQUM7Z0NBQ2QsR0FDQ2UsS0FBSzs0QkFDVjs7Ozs7Ozs7Ozs7a0NBR0osOERBQUNOO2tDQUNDLDRFQUFDM0IsK0RBQVNBOzRCQUNSa0MsUUFBUTs0QkFDUlIsV0FBVzVCLDJFQUFpQjs0QkFDNUJzQyxJQUFHOzRCQUNIQyxPQUFNOzRCQUNOQyxPQUFNOzRCQUNOQyxhQUFZOzRCQUNaQyxPQUFPcEM7NEJBQ1BxQyxVQUFVO29DQUFDLEVBQUVDLE9BQU0sRUFBRTtnQ0FBS3JDLE9BQUFBLFNBQVNxQyxtQkFBQUEsb0JBQUFBLEtBQUFBLElBQUFBLE9BQVFGLEtBQUs7O3NDQUNqRDs7Ozs7Ozs7Ozs7a0NBSUgsOERBQUNiO2tDQUNDLDRFQUFDNUIsNERBQU1BOzRCQUNMMkIsV0FBVzVCLHVFQUFhOzRCQUN4QjhDLFNBQVE7NEJBQ1JQLE9BQU07NEJBQ05RLFNBQVN2QztzQ0FDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YLENBQUM7R0FyR3VCSDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBDb250ZW50LCBJbnRlciB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbXVpL21hdGVyaWFsL1RleHRGaWVsZFwiO1xuaW1wb3J0IFR5cGV3cml0ZXIgZnJvbSBcInR5cGV3cml0ZXItZWZmZWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCB7IHBhcnNlSnNvblRleHQgfSBmcm9tIFwidHlwZXNjcmlwdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IHN1Ym1pdEVtYWlsID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBcImh0dHBzOi8vNzRtc2hmbHd0Zy5leGVjdXRlLWFwaS51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS9kZXZcIixcbiAgICAgICAge1xuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbDogZW1haWwgfSksXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLnN0YXR1cyk7IC8vIGxvZ3MgdGhlIGVudGlyZSBKU09OIG9iamVjdCB0byB0aGUgY29uc29sZVxuICAgICAgICB9KTtcbiAgICAgIC8vY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKVxuXG4gICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIC8vIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgLy8gICB0b2FzdChcIllvdSB3aWxsIHJlY2lldmUgYW4gZW1haWwgc2hvcnRseS5cIiwge1xuICAgICAgLy8gICAgIHBvc2l0aW9uOiB0b2FzdC5QT1NJVElPTi5UT1BfQ0VOVEVSLFxuICAgICAgLy8gICAgIGF1dG9DbG9zZTogNzAwMCxcbiAgICAgIC8vICAgICBoaWRlUHJvZ3Jlc3NCYXI6IHRydWUsXG4gICAgICAvLyAgICAgY2xvc2VPbkNsaWNrOiBmYWxzZSxcbiAgICAgIC8vICAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLFxuICAgICAgLy8gICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICAvLyAgICAgcHJvZ3Jlc3NDbGFzc05hbWU6IFwibXktdG9hc3QtcHJvZ3Jlc3NcIixcbiAgICAgIC8vICAgICBib2R5Q2xhc3NOYW1lOiBcIm15LXRvYXN0LWJvZHlcIixcbiAgICAgIC8vICAgfSBhcyBhbnkpO1xuICAgICAgLy8gfSBlbHNlIHtcbiAgICAgIC8vICAgdG9hc3QoXCJTb3JyeSB0aGUgZW1haWwgYWRkcmVzcyBlbnRlcmVkIGlzIGludmFsaWQsIHBsZWFzZSB0cnkgYWdhaW4uXCIsIHtcbiAgICAgIC8vICAgICBwb3NpdGlvbjogdG9hc3QuUE9TSVRJT04uVE9QX0NFTlRFUixcbiAgICAgIC8vICAgICBhdXRvQ2xvc2U6IDcwMDAsXG4gICAgICAvLyAgICAgaGlkZVByb2dyZXNzQmFyOiB0cnVlLFxuICAgICAgLy8gICAgIGNsb3NlT25DbGljazogZmFsc2UsXG4gICAgICAvLyAgICAgcGF1c2VPbkhvdmVyOiBmYWxzZSxcbiAgICAgIC8vICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgLy8gICAgIHByb2dyZXNzQ2xhc3NOYW1lOiBcIm15LXRvYXN0LXByb2dyZXNzXCIsXG4gICAgICAvLyAgICAgdG9hc3RDbGFzc05hbWU6IFwibXktdG9hc3RcIixcbiAgICAgIC8vICAgICBib2R5Q2xhc3NOYW1lOiBcIm15LXRvYXN0LWJvZHlcIixcbiAgICAgIC8vICAgfSBhcyBhbnkpO1xuICAgICAgLy8gfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICAgIHNldEVtYWlsKFwiXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QXJwaXQgU2luZ2ggUmVzdW1lPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZm9vdGVyLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICA8VHlwZXdyaXRlclxuICAgICAgICAgICAgb25Jbml0PXsodHlwZXdyaXRlcikgPT4ge1xuICAgICAgICAgICAgICB0eXBld3JpdGVyXG4gICAgICAgICAgICAgICAgLnR5cGVTdHJpbmcoXG4gICAgICAgICAgICAgICAgICBcIkhpISBUbyByZWNlaXZlIG15IHJlc3VtZSBzdGFydCBieSB0eXBpbmcgeW91ciBlbWFpbCBhZGRyZXNzIGJlbG93ICYgSGl0IEdvIVwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5jYWxsRnVuY3Rpb24oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTdHJpbmcgdHlwZWQgb3V0IVwiKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRmaWVsZH1cbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtYmFzaWNcIlxuICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImFiY0B4eXouY29tXCJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT4gc2V0RW1haWwodGFyZ2V0Py52YWx1ZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgRW1haWxcbiAgICAgICAgICA8L1RleHRGaWVsZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufVxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBvbkNsaWNrPXtzdWJtaXRFbWFpbH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBIaXQgR29cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInN0eWxlcyIsIkJ1dHRvbiIsIlRleHRGaWVsZCIsIlR5cGV3cml0ZXIiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJlbWFpbCIsInNldEVtYWlsIiwic3VibWl0RW1haWwiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwidGhlbiIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImVycm9yIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJkZXNjcmlwdGlvbiIsIm9uSW5pdCIsInR5cGV3cml0ZXIiLCJ0eXBlU3RyaW5nIiwiY2FsbEZ1bmN0aW9uIiwic3RhcnQiLCJyZXF1aXJlZCIsImlucHV0ZmllbGQiLCJpZCIsImNvbG9yIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iLCJ2YXJpYW50Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});