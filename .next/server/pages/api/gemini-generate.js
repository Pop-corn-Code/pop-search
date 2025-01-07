"use strict";
(() => {
var exports = {};
exports.id = 752;
exports.ids = [752];
exports.modules = {

/***/ 23:
/***/ ((module) => {

module.exports = import("@google/generative-ai");;

/***/ }),

/***/ 503:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _google_generative_ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_google_generative_ai__WEBPACK_IMPORTED_MODULE_0__]);
_google_generative_ai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/*const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_OPENAI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Explain how AI works";

const result = await model.generateContent(prompt);
console.log(result.response.text());*/ 
/*
  1 - Configure Gemini with an API key
  2 - Define a prompt
  3 - Choose the model
  4 - Call the Gemini API to generate content
  5 - Handle API responses and errors
*/ const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
console.log(apiKey); // Logs your API key
const genAI = new _google_generative_ai__WEBPACK_IMPORTED_MODULE_0__.GoogleGenerativeAI(apiKey);
/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {
    if (!apiKey) {
        res.status(500).json({
            error: "Gemini API key is required. Please add your key to the environment variables."
        });
        return;
    }
    if (!req.body.input) {
        res.status(400).json({
            error: "Missing input."
        });
        return;
    }
    try {
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash"
        });
        // Define the prompt
        const prompt = `Q: ${req.body.input}\nA:`;
        // Call the Gemini API
        const result = await model.generateContent(prompt);
        // Send the response back
        // console.log(result.response.text())
        res.status(200).json({
            result: result.response.text()
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(503));
module.exports = __webpack_exports__;

})();