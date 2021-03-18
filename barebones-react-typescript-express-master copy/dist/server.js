/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/server/routes/chirps.ts":
/*!*************************************!*\
  !*** ./src/server/routes/chirps.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express = __webpack_require__(/*! express */ \"express\");\nvar chirpstore_1 = __webpack_require__(/*! ../utils/chirpstore */ \"./src/server/utils/chirpstore.js\");\nvar router = express.Router();\nrouter.get(\"/:id\", function (req, res) {\n    var id = req.params.id;\n    var chirp = chirpstore_1.GetChirp(id);\n    chirp.id = id;\n    res.status(200).send(chirp);\n});\n// Get all chirps /api => /chirps =>  /\nrouter.get(\"/\", function (req, res) {\n    var chirps = chirpstore_1.GetChirps();\n    delete chirps.nextid;\n    var tempArr = Object.entries(chirps);\n    var chirpArr = tempArr.map(function (chirp) {\n        var newChirp = {\n            id: chirp[0],\n            user: chirp[1].user,\n            text: chirp[1].text\n        };\n        return newChirp;\n    });\n    chirpArr.reverse();\n    res.send(chirpArr);\n});\n// Create a new chirp\nrouter.post(\"/\", function (req, res) {\n    chirpstore_1.CreateChirp(req.body);\n    res.sendStatus(200);\n});\n//Edit a chirp\nrouter.put(\"/:id\", function (req, res) {\n    var id = req.params.id;\n    var chirp = req.body;\n    chirpstore_1.UpdateChirp(id, chirp);\n    res.sendStatus(200);\n});\n// Delete a chirp\nrouter.delete(\"/:id\", function (req, res) {\n    var id = req.params.id;\n    chirpstore_1.DeleteChirp(id);\n    res.sendStatus(200);\n});\nexports.default = router;\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/routes/chirps.ts?");

/***/ }),

/***/ "./src/server/routes/index.ts":
/*!************************************!*\
  !*** ./src/server/routes/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express = __webpack_require__(/*! express */ \"express\");\nvar chirps_1 = __webpack_require__(/*! ./chirps */ \"./src/server/routes/chirps.ts\");\nvar router = express.Router();\n// route is already matched to /api\nrouter.use(\"/chirps\", chirps_1.default);\nexports.default = router;\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/routes/index.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express = __webpack_require__(/*! express */ \"express\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.ts\");\nvar app = express();\napp.use(express.json());\napp.use(express.urlencoded({ extended: true }));\napp.use(\"/api\", routes_1.default);\napp.use(express.static(\"public\"));\napp.use(\"*\", function (req, res) { return res.sendFile(path.join(__dirname, \"../public/index.html\")); });\napp.listen(3000);\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/server.ts?");

/***/ }),

/***/ "./src/server/utils/chirpstore.js":
/*!****************************************!*\
  !*** ./src/server/utils/chirpstore.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nlet chirps = { nextid: 0 };\n\nif (fs.existsSync('chirps.json')) {\n    chirps = JSON.parse(fs.readFileSync('chirps.json'));\n}\n\nlet getChirps = () => {\n    return Object.assign({}, chirps); //create a copy and return it\n}\n\nlet getChirp = id => {\n    return Object.assign({}, chirps[id]); //create a copy and return it\n}\n\nlet createChirp = (chirp) => {\n    chirps[chirps.nextid++] = chirp;\n    writeChirps();\n};\n\nlet updateChirp = (id, chirp) => {\n    chirps[id] = chirp;\n    writeChirps();\n}\n\nlet deleteChirp = id => {\n    delete chirps[id];\n    writeChirps();\n}\n\nlet writeChirps = () => {\n    fs.writeFileSync('chirps.json', JSON.stringify(chirps));\n};\n\nmodule.exports = {\n    CreateChirp: createChirp,\n    DeleteChirp: deleteChirp,\n    GetChirps: getChirps,\n    GetChirp: getChirp,\n    UpdateChirp: updateChirp\n}\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/utils/chirpstore.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/server.ts");
/******/ 	
/******/ })()
;