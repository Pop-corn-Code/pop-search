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
exports.id = "pages/api/gemini-generate";
exports.ids = ["pages/api/gemini-generate"];
exports.modules = {

/***/ "@google/generative-ai":
/*!****************************************!*\
  !*** external "@google/generative-ai" ***!
  \****************************************/
/***/ ((module) => {

module.exports = import("@google/generative-ai");;

/***/ }),

/***/ "(api)/./pages/api/gemini-generate.js":
/*!**************************************!*\
  !*** ./pages/api/gemini-generate.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _google_generative_ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @google/generative-ai */ \"@google/generative-ai\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_google_generative_ai__WEBPACK_IMPORTED_MODULE_0__]);\n_google_generative_ai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n/*const { GoogleGenerativeAI } = require(\"@google/generative-ai\");\r\n\r\nconst genAI = new GoogleGenerativeAI(process.env.REACT_APP_OPENAI_API_KEY);\r\nconst model = genAI.getGenerativeModel({ model: \"gemini-1.5-flash\" });\r\n\r\nconst prompt = \"Explain how AI works\";\r\n\r\nconst result = await model.generateContent(prompt);\r\nconsole.log(result.response.text());*/ \n/*\r\n  1 - Configure Gemini with an API key\r\n  2 - Define a prompt\r\n  3 - Choose the model\r\n  4 - Call the Gemini API to generate content\r\n  5 - Handle API responses and errors\r\n*/ const apiKey = process.env.REACT_APP_OPENAI_API_KEY;\nconsole.log(apiKey); // Logs your API key\nconst genAI = new _google_generative_ai__WEBPACK_IMPORTED_MODULE_0__.GoogleGenerativeAI(apiKey);\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    if (!apiKey) {\n        res.status(500).json({\n            error: \"Gemini API key is required. Please add your key to the environment variables.\"\n        });\n        return;\n    }\n    if (!req.body.input) {\n        res.status(400).json({\n            error: \"Missing input.\"\n        });\n        return;\n    }\n    try {\n        const model = genAI.getGenerativeModel({\n            model: \"gemini-1.5-flash\"\n        });\n        // Define the prompt\n        const prompt = `Q: ${req.body.input}\\nA:`;\n        // Call the Gemini API\n        const result = await model.generateContent(prompt);\n        // Send the response back\n        console.log(result.response.text());\n        res.status(200).json({\n            result: result.response.text()\n        });\n    } catch (error) {\n        res.status(500).json({\n            error: error.message\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VtaW5pLWdlbmVyYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O29DQVFvQyxHQUV1QjtBQUUzRDs7Ozs7O0FBTUEsR0FFQSxNQUFNQyxTQUFTQyxRQUFRQyxJQUFJQztBQUMzQkMsUUFBUUMsSUFBSUwsU0FBUyxvQkFBb0I7QUFFekMsTUFBTU0sUUFBUSxJQUFJUCxxRUFBa0JBLENBQUNDO0FBRXJDLDZCQUFlLDBDQUFnQk8sR0FBRyxFQUFFQyxHQUFHO0lBQ25DLElBQUksQ0FBQ1IsUUFBUTtRQUNUUSxJQUFJQyxPQUFPLEtBQUtDLEtBQUs7WUFBRUMsT0FBTztRQUFnRjtRQUM5RztJQUNKO0lBQ0EsSUFBSSxDQUFDSixJQUFJSyxLQUFLQyxPQUFPO1FBQ2pCTCxJQUFJQyxPQUFPLEtBQUtDLEtBQUs7WUFBRUMsT0FBTztRQUFpQjtRQUMvQztJQUNKO0lBRUEsSUFBSTtRQUNBLE1BQU1HLFFBQVFSLE1BQU1TLG1CQUFtQjtZQUFFRCxPQUFPO1FBQW1CO1FBRW5FLG9CQUFvQjtRQUNwQixNQUFNRSxTQUFTLENBQUMsR0FBRyxFQUFFVCxJQUFJSyxLQUFLQyxNQUFNLElBQUksQ0FBQztRQUV6QyxzQkFBc0I7UUFDdEIsTUFBTUksU0FBUyxNQUFNSCxNQUFNSSxnQkFBZ0JGO1FBRTNDLHlCQUF5QjtRQUN6QlosUUFBUUMsSUFBSVksT0FBT0UsU0FBU0M7UUFDNUJaLElBQUlDLE9BQU8sS0FBS0MsS0FBSztZQUFFTyxRQUFRQSxPQUFPRSxTQUFTQztRQUFPO0lBQzFELEVBQUUsT0FBT1QsT0FBTztRQUNaSCxJQUFJQyxPQUFPLEtBQUtDLEtBQUs7WUFBRUMsT0FBT0EsTUFBTVU7UUFBUTtJQUNoRDtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3BlbmFpLXF1aWNrc3RhcnQtbm9kZS8uL3BhZ2VzL2FwaS9nZW1pbmktZ2VuZXJhdGUuanM/YzJkMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKmNvbnN0IHsgR29vZ2xlR2VuZXJhdGl2ZUFJIH0gPSByZXF1aXJlKFwiQGdvb2dsZS9nZW5lcmF0aXZlLWFpXCIpO1xyXG5cclxuY29uc3QgZ2VuQUkgPSBuZXcgR29vZ2xlR2VuZXJhdGl2ZUFJKHByb2Nlc3MuZW52LlJFQUNUX0FQUF9PUEVOQUlfQVBJX0tFWSk7XHJcbmNvbnN0IG1vZGVsID0gZ2VuQUkuZ2V0R2VuZXJhdGl2ZU1vZGVsKHsgbW9kZWw6IFwiZ2VtaW5pLTEuNS1mbGFzaFwiIH0pO1xyXG5cclxuY29uc3QgcHJvbXB0ID0gXCJFeHBsYWluIGhvdyBBSSB3b3Jrc1wiO1xyXG5cclxuY29uc3QgcmVzdWx0ID0gYXdhaXQgbW9kZWwuZ2VuZXJhdGVDb250ZW50KHByb21wdCk7XHJcbmNvbnNvbGUubG9nKHJlc3VsdC5yZXNwb25zZS50ZXh0KCkpOyovXHJcblxyXG5pbXBvcnQgeyBHb29nbGVHZW5lcmF0aXZlQUkgfSBmcm9tIFwiQGdvb2dsZS9nZW5lcmF0aXZlLWFpXCI7XHJcblxyXG4vKlxyXG4gIDEgLSBDb25maWd1cmUgR2VtaW5pIHdpdGggYW4gQVBJIGtleVxyXG4gIDIgLSBEZWZpbmUgYSBwcm9tcHRcclxuICAzIC0gQ2hvb3NlIHRoZSBtb2RlbFxyXG4gIDQgLSBDYWxsIHRoZSBHZW1pbmkgQVBJIHRvIGdlbmVyYXRlIGNvbnRlbnRcclxuICA1IC0gSGFuZGxlIEFQSSByZXNwb25zZXMgYW5kIGVycm9yc1xyXG4qL1xyXG5cclxuY29uc3QgYXBpS2V5ID0gcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX09QRU5BSV9BUElfS0VZO1xyXG5jb25zb2xlLmxvZyhhcGlLZXkpOyAvLyBMb2dzIHlvdXIgQVBJIGtleVxyXG5cclxuY29uc3QgZ2VuQUkgPSBuZXcgR29vZ2xlR2VuZXJhdGl2ZUFJKGFwaUtleSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxLCByZXMpIHtcclxuICAgIGlmICghYXBpS2V5KSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogXCJHZW1pbmkgQVBJIGtleSBpcyByZXF1aXJlZC4gUGxlYXNlIGFkZCB5b3VyIGtleSB0byB0aGUgZW52aXJvbm1lbnQgdmFyaWFibGVzLlwiIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICghcmVxLmJvZHkuaW5wdXQpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiBcIk1pc3NpbmcgaW5wdXQuXCIgfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgbW9kZWwgPSBnZW5BSS5nZXRHZW5lcmF0aXZlTW9kZWwoeyBtb2RlbDogXCJnZW1pbmktMS41LWZsYXNoXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIERlZmluZSB0aGUgcHJvbXB0XHJcbiAgICAgICAgY29uc3QgcHJvbXB0ID0gYFE6ICR7cmVxLmJvZHkuaW5wdXR9XFxuQTpgO1xyXG5cclxuICAgICAgICAvLyBDYWxsIHRoZSBHZW1pbmkgQVBJXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbW9kZWwuZ2VuZXJhdGVDb250ZW50KHByb21wdCk7XHJcblxyXG4gICAgICAgIC8vIFNlbmQgdGhlIHJlc3BvbnNlIGJhY2tcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQucmVzcG9uc2UudGV4dCgpKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgcmVzdWx0OiByZXN1bHQucmVzcG9uc2UudGV4dCgpIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJHb29nbGVHZW5lcmF0aXZlQUkiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfQVBQX09QRU5BSV9BUElfS0VZIiwiY29uc29sZSIsImxvZyIsImdlbkFJIiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiYm9keSIsImlucHV0IiwibW9kZWwiLCJnZXRHZW5lcmF0aXZlTW9kZWwiLCJwcm9tcHQiLCJyZXN1bHQiLCJnZW5lcmF0ZUNvbnRlbnQiLCJyZXNwb25zZSIsInRleHQiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/gemini-generate.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/gemini-generate.js"));
module.exports = __webpack_exports__;

})();