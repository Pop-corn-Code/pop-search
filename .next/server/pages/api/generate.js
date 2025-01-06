"use strict";
(() => {
var exports = {};
exports.id = 565;
exports.ids = [565];
exports.modules = {

/***/ 722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ generate)
});

;// CONCATENATED MODULE: external "openai"
const external_openai_namespaceObject = require("openai");
;// CONCATENATED MODULE: ./pages/api/generate.js

/*
    1 - Configurer OpenAI avec une clé API (https://platform.openai.com/account/api-keys)
    2 - Définir un prompt 
    3 - Faire le choix du modèle 
    4 - Définir les paramètres de génération de contenu
    5 - Définir la requête API
  */ const configuration = new external_openai_namespaceObject.Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY
});
const openai = new external_openai_namespaceObject.OpenAIApi(configuration);
/* harmony default export */ async function generate(req, res) {
    if (!configuration.apiKey) {
        res.status(500).json({
            error: "OpenAI API key is required, please follow the instructions: https://platform.openai.com/account/api-keys"
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
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Q: ${req.body.input} \nA:`,
            temperature: 0,
            max_tokens: 200
        });
        console.log(response.data.choices[0].text);
        res.status(200).json({
            result: response.data.choices[0].text
        });
    // console.log(response.data.choices[0].text)
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(722));
module.exports = __webpack_exports__;

})();