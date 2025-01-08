"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/generate";
exports.ids = ["pages/api/generate"];
exports.modules = {

/***/ "@google/generative-ai":
/*!****************************************!*\
  !*** external "@google/generative-ai" ***!
  \****************************************/
/***/ ((module) => {

module.exports = import("@google/generative-ai");;

/***/ }),

/***/ "(api)/./pages/api/generate.js":
/*!*******************************!*\
  !*** ./pages/api/generate.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _google_generative_ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @google/generative-ai */ \"@google/generative-ai\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_google_generative_ai__WEBPACK_IMPORTED_MODULE_0__]);\n_google_generative_ai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n/*const { GoogleGenerativeAI } = require(\"@google/generative-ai\");\r\n\r\nconst genAI = new GoogleGenerativeAI(process.env.REACT_APP_OPENAI_API_KEY);\r\nconst model = genAI.getGenerativeModel({ model: \"gemini-1.5-flash\" });\r\n\r\nconst prompt = \"Explain how AI works\";\r\n\r\nconst result = await model.generateContent(prompt);\r\nconsole.log(result.response.text());*/ \n/*\r\n  1 - Configure Gemini with an API key\r\n  2 - Define a prompt\r\n  3 - Choose the model\r\n  4 - Call the Gemini API to generate content\r\n  5 - Handle API responses and errors\r\n*/ // const apiKey = process.env.REACT_APP_OPENAI_API_KEY;\nconst apiKey = \"AIzaSyCBgBFtYb-hkScQBi4wr0HGa-HpuRqNjmM\";\nconst genAI = new _google_generative_ai__WEBPACK_IMPORTED_MODULE_0__.GoogleGenerativeAI(apiKey);\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    if (!apiKey) {\n        res.status(500).json({\n            error: \"Gemini API key is required. Please add your key to the environment variables.\"\n        });\n        return;\n    }\n    if (!req.body.input) {\n        res.status(400).json({\n            error: \"Missing input.\"\n        });\n        return;\n    }\n    try {\n        const model = genAI.getGenerativeModel({\n            model: \"gemini-1.5-flash\"\n        });\n        // Define the prompt\n        const prompt = `Q: ${req.body.input}\\nA:`;\n        // Call the Gemini API\n        const result = await model.generateContent(prompt);\n        // Send the response back\n        // console.log(result.response.text())\n        res.status(200).json({\n            result: result.response.text()\n        });\n    } catch (error) {\n        res.status(500).json({\n            error: error.message\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7b0NBUW9DLEdBRXVCO0FBRTNEOzs7Ozs7QUFNQSxHQUVBLHVEQUF1RDtBQUN2RCxNQUFNQyxTQUFTO0FBRWYsTUFBTUMsUUFBUSxJQUFJRixxRUFBa0JBLENBQUNDO0FBRXJDLDZCQUFlLDBDQUFnQkUsR0FBRyxFQUFFQyxHQUFHO0lBQ25DLElBQUksQ0FBQ0gsUUFBUTtRQUNURyxJQUFJQyxPQUFPLEtBQUtDLEtBQUs7WUFBRUMsT0FBTztRQUFnRjtRQUM5RztJQUNKO0lBQ0EsSUFBSSxDQUFDSixJQUFJSyxLQUFLQyxPQUFPO1FBQ2pCTCxJQUFJQyxPQUFPLEtBQUtDLEtBQUs7WUFBRUMsT0FBTztRQUFpQjtRQUMvQztJQUNKO0lBRUEsSUFBSTtRQUNBLE1BQU1HLFFBQVFSLE1BQU1TLG1CQUFtQjtZQUFFRCxPQUFPO1FBQW1CO1FBRW5FLG9CQUFvQjtRQUNwQixNQUFNRSxTQUFTLENBQUMsR0FBRyxFQUFFVCxJQUFJSyxLQUFLQyxNQUFNLElBQUksQ0FBQztRQUV6QyxzQkFBc0I7UUFDdEIsTUFBTUksU0FBUyxNQUFNSCxNQUFNSSxnQkFBZ0JGO1FBRTNDLHlCQUF5QjtRQUN6QixzQ0FBc0M7UUFDdENSLElBQUlDLE9BQU8sS0FBS0MsS0FBSztZQUFFTyxRQUFRQSxPQUFPRSxTQUFTQztRQUFPO0lBQzFELEVBQUUsT0FBT1QsT0FBTztRQUNaSCxJQUFJQyxPQUFPLEtBQUtDLEtBQUs7WUFBRUMsT0FBT0EsTUFBTVU7UUFBUTtJQUNoRDtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3BlbmFpLXF1aWNrc3RhcnQtbm9kZS8uL3BhZ2VzL2FwaS9nZW5lcmF0ZS5qcz82MjdjIl0sInNvdXJjZXNDb250ZW50IjpbIi8qY29uc3QgeyBHb29nbGVHZW5lcmF0aXZlQUkgfSA9IHJlcXVpcmUoXCJAZ29vZ2xlL2dlbmVyYXRpdmUtYWlcIik7XHJcblxyXG5jb25zdCBnZW5BSSA9IG5ldyBHb29nbGVHZW5lcmF0aXZlQUkocHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX09QRU5BSV9BUElfS0VZKTtcclxuY29uc3QgbW9kZWwgPSBnZW5BSS5nZXRHZW5lcmF0aXZlTW9kZWwoeyBtb2RlbDogXCJnZW1pbmktMS41LWZsYXNoXCIgfSk7XHJcblxyXG5jb25zdCBwcm9tcHQgPSBcIkV4cGxhaW4gaG93IEFJIHdvcmtzXCI7XHJcblxyXG5jb25zdCByZXN1bHQgPSBhd2FpdCBtb2RlbC5nZW5lcmF0ZUNvbnRlbnQocHJvbXB0KTtcclxuY29uc29sZS5sb2cocmVzdWx0LnJlc3BvbnNlLnRleHQoKSk7Ki9cclxuXHJcbmltcG9ydCB7IEdvb2dsZUdlbmVyYXRpdmVBSSB9IGZyb20gXCJAZ29vZ2xlL2dlbmVyYXRpdmUtYWlcIjtcclxuXHJcbi8qXHJcbiAgMSAtIENvbmZpZ3VyZSBHZW1pbmkgd2l0aCBhbiBBUEkga2V5XHJcbiAgMiAtIERlZmluZSBhIHByb21wdFxyXG4gIDMgLSBDaG9vc2UgdGhlIG1vZGVsXHJcbiAgNCAtIENhbGwgdGhlIEdlbWluaSBBUEkgdG8gZ2VuZXJhdGUgY29udGVudFxyXG4gIDUgLSBIYW5kbGUgQVBJIHJlc3BvbnNlcyBhbmQgZXJyb3JzXHJcbiovXHJcblxyXG4vLyBjb25zdCBhcGlLZXkgPSBwcm9jZXNzLmVudi5SRUFDVF9BUFBfT1BFTkFJX0FQSV9LRVk7XHJcbmNvbnN0IGFwaUtleSA9IFwiQUl6YVN5Q0JnQkZ0WWItaGtTY1FCaTR3cjBIR2EtSHB1UnFOam1NXCI7XHJcblxyXG5jb25zdCBnZW5BSSA9IG5ldyBHb29nbGVHZW5lcmF0aXZlQUkoYXBpS2V5KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChyZXEsIHJlcykge1xyXG4gICAgaWYgKCFhcGlLZXkpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBcIkdlbWluaSBBUEkga2V5IGlzIHJlcXVpcmVkLiBQbGVhc2UgYWRkIHlvdXIga2V5IHRvIHRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMuXCIgfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZXEuYm9keS5pbnB1dCkge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6IFwiTWlzc2luZyBpbnB1dC5cIiB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBtb2RlbCA9IGdlbkFJLmdldEdlbmVyYXRpdmVNb2RlbCh7IG1vZGVsOiBcImdlbWluaS0xLjUtZmxhc2hcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gRGVmaW5lIHRoZSBwcm9tcHRcclxuICAgICAgICBjb25zdCBwcm9tcHQgPSBgUTogJHtyZXEuYm9keS5pbnB1dH1cXG5BOmA7XHJcblxyXG4gICAgICAgIC8vIENhbGwgdGhlIEdlbWluaSBBUElcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBtb2RlbC5nZW5lcmF0ZUNvbnRlbnQocHJvbXB0KTtcclxuXHJcbiAgICAgICAgLy8gU2VuZCB0aGUgcmVzcG9uc2UgYmFja1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdC5yZXNwb25zZS50ZXh0KCkpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyByZXN1bHQ6IHJlc3VsdC5yZXNwb25zZS50ZXh0KCkgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkdvb2dsZUdlbmVyYXRpdmVBSSIsImFwaUtleSIsImdlbkFJIiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiYm9keSIsImlucHV0IiwibW9kZWwiLCJnZXRHZW5lcmF0aXZlTW9kZWwiLCJwcm9tcHQiLCJyZXN1bHQiLCJnZW5lcmF0ZUNvbnRlbnQiLCJyZXNwb25zZSIsInRleHQiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/generate.js"));
module.exports = __webpack_exports__;

})();