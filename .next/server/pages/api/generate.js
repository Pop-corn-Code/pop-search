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

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/generate.js":
/*!*******************************!*\
  !*** ./pages/api/generate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\n/*\r\n    1 - Configurer OpenAI avec une clé API (https://platform.openai.com/account/api-keys)\r\n    2 - Définir un prompt \r\n    3 - Faire le choix du modèle \r\n    4 - Définir les paramètres de génération de contenu\r\n    5 - Définir la requête API\r\n  */ const configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.REACT_APP_OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    if (!configuration.apiKey) {\n        res.status(500).json({\n            error: \"OpenAI API key is required, please follow the instructions: https://platform.openai.com/account/api-keys\"\n        });\n        return;\n    }\n    if (!req.body.input) {\n        res.status(400).json({\n            error: \"Missing input.\"\n        });\n        return;\n    }\n    try {\n        const response = await openai.createCompletion({\n            model: \"text-davinci-003\",\n            prompt: `Q: ${req.body.input} \\nA:`,\n            temperature: 0,\n            max_tokens: 200\n        });\n        console.log(response.data.choices[0].text);\n        res.status(200).json({\n            result: response.data.choices[0].text\n        });\n    // console.log(response.data.choices[0].text)\n    } catch (error) {\n        res.status(500).json({\n            error: error.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBRWhEOzs7Ozs7RUFNQSxHQUNGLE1BQU1FLGdCQUFnQixJQUFJRixpREFBYUEsQ0FBQztJQUN0Q0csUUFBUUMsUUFBUUMsSUFBSUM7QUFDdEI7QUFDQSxNQUFNQyxTQUFTLElBQUlOLDZDQUFTQSxDQUFDQztBQUU3Qiw2QkFBZSwwQ0FBZ0JNLEdBQUcsRUFBRUMsR0FBRztJQUNyQyxJQUFJLENBQUNQLGNBQWNDLFFBQVE7UUFDekJNLElBQUlDLE9BQU8sS0FBS0MsS0FBSztZQUFFQyxPQUFPO1FBQTJHO1FBQ3pJO0lBQ0Y7SUFDQSxJQUFJLENBQUNKLElBQUlLLEtBQUtDLE9BQU87UUFDbkJMLElBQUlDLE9BQU8sS0FBS0MsS0FBSztZQUFFQyxPQUFPO1FBQWlCO1FBQy9DO0lBQ0Y7SUFDQSxJQUFJO1FBRUYsTUFBTUcsV0FBVyxNQUFNUixPQUFPUyxpQkFBaUI7WUFDN0NDLE9BQU87WUFDUEMsUUFBUSxDQUFDLEdBQUcsRUFBRVYsSUFBSUssS0FBS0MsTUFBTSxLQUFLLENBQUM7WUFDbkNLLGFBQWE7WUFDYkMsWUFBWTtRQUtkO1FBQ0FDLFFBQVFDLElBQUlQLFNBQVNRLEtBQUtDLE9BQU8sQ0FBQyxFQUFFLENBQUNDO1FBQ3JDaEIsSUFBSUMsT0FBTyxLQUFLQyxLQUFLO1lBQUVlLFFBQVFYLFNBQVNRLEtBQUtDLE9BQU8sQ0FBQyxFQUFFLENBQUNDO1FBQUs7SUFDN0QsNkNBQTZDO0lBQy9DLEVBQUUsT0FBT2IsT0FBTztRQUNkSCxJQUFJQyxPQUFPLEtBQUtDLEtBQUs7WUFBRUMsT0FBT0EsTUFBTWU7UUFBUTtJQUM5QztBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3BlbmFpLXF1aWNrc3RhcnQtbm9kZS8uL3BhZ2VzL2FwaS9nZW5lcmF0ZS5qcz82MjdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZ3VyYXRpb24sIE9wZW5BSUFwaSB9IGZyb20gXCJvcGVuYWlcIjtcclxuXHJcbiAgLypcclxuICAgIDEgLSBDb25maWd1cmVyIE9wZW5BSSBhdmVjIHVuZSBjbMOpIEFQSSAoaHR0cHM6Ly9wbGF0Zm9ybS5vcGVuYWkuY29tL2FjY291bnQvYXBpLWtleXMpXHJcbiAgICAyIC0gRMOpZmluaXIgdW4gcHJvbXB0IFxyXG4gICAgMyAtIEZhaXJlIGxlIGNob2l4IGR1IG1vZMOobGUgXHJcbiAgICA0IC0gRMOpZmluaXIgbGVzIHBhcmFtw6h0cmVzIGRlIGfDqW7DqXJhdGlvbiBkZSBjb250ZW51XHJcbiAgICA1IC0gRMOpZmluaXIgbGEgcmVxdcOqdGUgQVBJXHJcbiAgKi9cclxuY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKHtcclxuICBhcGlLZXk6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9PUEVOQUlfQVBJX0tFWSxcclxufSlcclxuY29uc3Qgb3BlbmFpID0gbmV3IE9wZW5BSUFwaShjb25maWd1cmF0aW9uKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XHJcbiAgaWYgKCFjb25maWd1cmF0aW9uLmFwaUtleSkge1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogXCJPcGVuQUkgQVBJIGtleSBpcyByZXF1aXJlZCwgcGxlYXNlIGZvbGxvdyB0aGUgaW5zdHJ1Y3Rpb25zOiBodHRwczovL3BsYXRmb3JtLm9wZW5haS5jb20vYWNjb3VudC9hcGkta2V5c1wiIH0pXHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgaWYgKCFyZXEuYm9keS5pbnB1dCkge1xyXG4gICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogXCJNaXNzaW5nIGlucHV0LlwiIH0pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICB0cnkge1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgb3BlbmFpLmNyZWF0ZUNvbXBsZXRpb24oe1xyXG4gICAgICBtb2RlbDogXCJ0ZXh0LWRhdmluY2ktMDAzXCIsXHJcbiAgICAgIHByb21wdDogYFE6ICR7cmVxLmJvZHkuaW5wdXR9IFxcbkE6YCxcclxuICAgICAgdGVtcGVyYXR1cmU6IDAsXHJcbiAgICAgIG1heF90b2tlbnM6IDIwMCwgICAgXHJcbiAgICAgIC8vIHRvcF9wIDogMSxcclxuICAgICAgLy8gZnJlcXVlbmN5X3BlbmFsdHkgOiAwLjAsXHJcbiAgICAgIC8vIHByZXNlbmNlX3BlbmFsdHkgOiAwLjAsXHJcbiAgICAgIC8vIHN0b3AgOiBbXCJcXG5cIl1cclxuICAgIH0pXHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLmNob2ljZXNbMF0udGV4dClcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgcmVzdWx0OiByZXNwb25zZS5kYXRhLmNob2ljZXNbMF0udGV4dCB9KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEuY2hvaWNlc1swXS50ZXh0KVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xyXG4gIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRpb24iLCJPcGVuQUlBcGkiLCJjb25maWd1cmF0aW9uIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIlJFQUNUX0FQUF9PUEVOQUlfQVBJX0tFWSIsIm9wZW5haSIsInJlcSIsInJlcyIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImJvZHkiLCJpbnB1dCIsInJlc3BvbnNlIiwiY3JlYXRlQ29tcGxldGlvbiIsIm1vZGVsIiwicHJvbXB0IiwidGVtcGVyYXR1cmUiLCJtYXhfdG9rZW5zIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJjaG9pY2VzIiwidGV4dCIsInJlc3VsdCIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate.js\n");

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