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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs */ \"./node_modules/prismjs/prism.js\");\n/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prismjs_themes_prism_tomorrow_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs/themes/prism-tomorrow.css */ \"./node_modules/prismjs/themes/prism-tomorrow.css\");\n/* harmony import */ var prismjs_themes_prism_tomorrow_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs_themes_prism_tomorrow_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n // For syntax highlighting\n // Prism.js theme for syntax highlighting\nconst Loading = (param)=>{\n    let { isVisible } = param;\n    return isVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: \"mt-4 text-center\",\n        children: \"Loading ...\"\n    }, void 0, false, {\n        fileName: \"F:\\\\Document\\\\Projects\\\\Text generator\\\\pop-search\\\\pages\\\\index.js\",\n        lineNumber: 8,\n        columnNumber: 16\n    }, undefined);\n};\n_c = Loading;\nconst Result = (param)=>{\n    let { result, isVisible } = param;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (result) {\n            prismjs__WEBPACK_IMPORTED_MODULE_3___default().highlightAll(); // Highlight syntax when the result updates\n        }\n    }, [\n        result\n    ]);\n    return isVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-5 text-center\",\n        style: {\n            width: \"60%\",\n            textAlign: \"left\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            dangerouslySetInnerHTML: {\n                __html: result\n            },\n            style: {\n                background: \"#f9f9f9\",\n                borderRadius: \"8px\",\n                padding: \"16px\",\n                fontFamily: \"monospace\",\n                overflowX: \"auto\"\n            }\n        }, void 0, false, {\n            fileName: \"F:\\\\Document\\\\Projects\\\\Text generator\\\\pop-search\\\\pages\\\\index.js\",\n            lineNumber: 20,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"F:\\\\Document\\\\Projects\\\\Text generator\\\\pop-search\\\\pages\\\\index.js\",\n        lineNumber: 19,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Result, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c1 = Result;\nfunction Home() {\n    _s1();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [isPending, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    async function generate() {\n        const response = await fetch(\"/api/gemini-generate\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                input\n            })\n        });\n        const data = await response.json();\n        if (response.status !== 200) {\n            throw data.error || new Error(\"Request failed with status \".concat(response.status));\n        }\n        return {\n            result: data.result\n        };\n    }\n    async function handleOnSubmit(event) {\n        event.preventDefault();\n        setLoading(true);\n        try {\n            const data = await generate();\n            setResult(data.result);\n            setLoading(false);\n            ref.current.value = null;\n        } catch (error) {\n            console.error(error);\n            setLoading(false);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \" \\uD83D\\uDD0D - OpenAI-Pop Search\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Document\\\\Projects\\\\Text generator\\\\pop-search\\\\pages\\\\index.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css\",\n                        rel: \"stylesheet\",\n                        integrity: \"sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3\",\n                        crossOrigin: \"anonymous\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Document\\\\Projects\\\\Text generator\\\\pop-search\\\\pages\\\\index.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\Document\\\\Projects\\\\Text generator\\\\pop-search\\\\pages\\\\index.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: {\n                                    color: \"#1abc9c\"\n                                },\n                                children: \"Pop\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Document\\\\Projects\\\\Text generator\\\\pop-search\\\\pages\\\\index.js\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: {\n                                    color: \"#e74c3c\"\n                                },\n                                children: \"~co\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Document\\\\Projects\\\\Text generator\\\\pop-search\\\\pages\\\\index.js\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: {\n                                    color: \"#f1c40f\",\n                                    fontSize: \"20px\"\n                                },\n                                children: \"⭐\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Document\\\\Projects\\\\Text generator\\\\pop-search\\\\pages\\\\index.js\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: {\n                                    color: \"#e74c3c\"\n                                },\n                                children: \"n's \"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Document\\\\Projects\\\\Text generator\\\\pop-search\\\\pages\\\\index.js\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: {\n                                    color: \"#f1c40f\"\n                                },\n                                children: \"Search\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Document\\\\Projects\\\\Text generator\\\\pop-search\\\\pages\\\\index.js\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\Document\\\\Projects\\\\Text generator\\\\pop-search\\\\pages\\\\index.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleOnSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                ref: ref,\n                                type: \"text\",\n                                name: \"title\",\n                                placeholder: \"search ...\",\n                                onChange: (e)=>setInput(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Document\\\\Projects\\\\Text generator\\\\pop-search\\\\pages\\\\index.js\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                children: \"Search\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Document\\\\Projects\\\\Text generator\\\\pop-search\\\\pages\\\\index.js\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\Document\\\\Projects\\\\Text generator\\\\pop-search\\\\pages\\\\index.js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Loading, {\n                        isVisible: isPending,\n                        input: input\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Document\\\\Projects\\\\Text generator\\\\pop-search\\\\pages\\\\index.js\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Result, {\n                        isVisible: !isPending,\n                        result: result\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Document\\\\Projects\\\\Text generator\\\\pop-search\\\\pages\\\\index.js\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\Document\\\\Projects\\\\Text generator\\\\pop-search\\\\pages\\\\index.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\Document\\\\Projects\\\\Text generator\\\\pop-search\\\\pages\\\\index.js\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this);\n}\n_s1(Home, \"toQ5EVdFldF6IivwVs0Qlj5hEfo=\");\n_c2 = Home;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Loading\");\n$RefreshReg$(_c1, \"Result\");\n$RefreshReg$(_c2, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQUs7Z0NBQ0xDLE1BQUs7Z0NBQ0xDLGFBQVk7Z0NBQ1pDLFVBQVUsQ0FBQ0MsSUFBTXJDLFNBQVNxQyxFQUFFQyxPQUFPcEI7Ozs7OzswQ0FFckMsOERBQUNxQjtnQ0FBT04sTUFBSzswQ0FBUzs7Ozs7Ozs7Ozs7O2tDQUV4Qiw4REFBQ3pEO3dCQUFRQyxXQUFXbUI7d0JBQVdHLE9BQU9BOzs7Ozs7a0NBQ3RDLDhEQUFDbkI7d0JBQU9ILFdBQVcsQ0FBQ21CO3dCQUFXZixRQUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSS9DO0lBeEV3QmE7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFByaXNtIGZyb20gXCJwcmlzbWpzXCI7IC8vIEZvciBzeW50YXggaGlnaGxpZ2h0aW5nXHJcbmltcG9ydCBcInByaXNtanMvdGhlbWVzL3ByaXNtLXRvbW9ycm93LmNzc1wiOyAvLyBQcmlzbS5qcyB0aGVtZSBmb3Igc3ludGF4IGhpZ2hsaWdodGluZ1xyXG5cclxuY29uc3QgTG9hZGluZyA9ICh7IGlzVmlzaWJsZSB9KSA9PlxyXG4gIGlzVmlzaWJsZSAmJiA8aDIgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LWNlbnRlclwiPkxvYWRpbmcgLi4uPC9oMj47XHJcblxyXG5jb25zdCBSZXN1bHQgPSAoeyByZXN1bHQsIGlzVmlzaWJsZSB9KSA9PiB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgUHJpc20uaGlnaGxpZ2h0QWxsKCk7IC8vIEhpZ2hsaWdodCBzeW50YXggd2hlbiB0aGUgcmVzdWx0IHVwZGF0ZXNcclxuICAgIH1cclxuICB9LCBbcmVzdWx0XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICBpc1Zpc2libGUgJiYgKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgdGV4dC1jZW50ZXJcIiBzdHlsZT17eyB3aWR0aDogXCI2MCVcIiwgdGV4dEFsaWduOiBcImxlZnRcIiB9fT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHJlc3VsdCB9fVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZjlmOWY5XCIsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI4cHhcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIxNnB4XCIsXHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwibW9ub3NwYWNlXCIsXHJcbiAgICAgICAgICAgIG92ZXJmbG93WDogXCJhdXRvXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBbaXNQZW5kaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGUoKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9nZW1pbmktZ2VuZXJhdGVcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaW5wdXQgfSksXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcclxuICAgICAgdGhyb3cgKFxyXG4gICAgICAgIGRhdGEuZXJyb3IgfHwgbmV3IEVycm9yKGBSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyAke3Jlc3BvbnNlLnN0YXR1c31gKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgcmVzdWx0OiBkYXRhLnJlc3VsdCB9O1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlT25TdWJtaXQoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdlbmVyYXRlKCk7XHJcbiAgICAgIHNldFJlc3VsdChkYXRhLnJlc3VsdCk7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICByZWYuY3VycmVudC52YWx1ZSA9IG51bGw7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPiDwn5SNIC0gT3BlbkFJLVBvcCBTZWFyY2g8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4xLjMvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtMUJtRTRrV0JxNzhpWWhGbGR2S3VoZlRBVTZhdVU4dFQ5NFdySGZ0akRickNFWFNVMW9Cb3F5bDJRdlo2aklXM1wiXHJcbiAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgPGgzPlxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiIzFhYmM5Y1wiIH19PlBvcDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiNlNzRjM2NcIiB9fT5+Y288L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjZjFjNDBmXCIsIGZvbnRTaXplOiBcIjIwcHhcIiB9fT7irZA8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjZTc0YzNjXCIgfX0+bidzIDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiNmMWM0MGZcIiB9fT5TZWFyY2g8L3NwYW4+XHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlT25TdWJtaXR9PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHJlZj17cmVmfVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwic2VhcmNoIC4uLlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8TG9hZGluZyBpc1Zpc2libGU9e2lzUGVuZGluZ30gaW5wdXQ9e2lucHV0fSAvPlxyXG4gICAgICAgIDxSZXN1bHQgaXNWaXNpYmxlPXshaXNQZW5kaW5nfSByZXN1bHQ9e3Jlc3VsdH0gLz5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiUHJpc20iLCJMb2FkaW5nIiwiaXNWaXNpYmxlIiwiaDIiLCJjbGFzc05hbWUiLCJSZXN1bHQiLCJyZXN1bHQiLCJoaWdobGlnaHRBbGwiLCJkaXYiLCJzdHlsZSIsIndpZHRoIiwidGV4dEFsaWduIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsImZvbnRGYW1pbHkiLCJvdmVyZmxvd1giLCJIb21lIiwicmVmIiwiaXNQZW5kaW5nIiwic2V0TG9hZGluZyIsInNldFJlc3VsdCIsImlucHV0Iiwic2V0SW5wdXQiLCJnZW5lcmF0ZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsInN0YXR1cyIsImVycm9yIiwiRXJyb3IiLCJoYW5kbGVPblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50IiwidmFsdWUiLCJjb25zb2xlIiwidGl0bGUiLCJsaW5rIiwiaHJlZiIsInJlbCIsImludGVncml0eSIsImNyb3NzT3JpZ2luIiwibWFpbiIsImgzIiwic3BhbiIsImNvbG9yIiwiZm9udFNpemUiLCJmb3JtIiwib25TdWJtaXQiLCJ0eXBlIiwibmFtZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});