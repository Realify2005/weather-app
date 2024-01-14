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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("async function fetchData(city) {\n  try {\n    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=b08cce43980e41f7bb580301241401&q=${city}`, {\n      mode: \"cors\"\n    });\n    if (!response.ok) {\n      throw new Error(\"something went wrong\");\n    }\n    const data = await response.json();\n    console.log(data);\n    return data;\n  } catch (error) {\n    console.error(\"Error fetching data:\", error);\n  }\n}\nconst body = document.querySelector(\"body\");\nconst h1 = document.createElement(\"h1\");\nh1.textContent = \"Weather checker\";\nconst input = document.createElement(\"input\");\ninput.placeholder = \"Enter city\";\nconst button = document.createElement(\"button\");\nbutton.textContent = \"Search\";\nconst div = document.createElement(\"div\");\nbody.appendChild(h1);\nbody.appendChild(input);\nbody.appendChild(button);\nconst temp = document.createElement(\"p\");\nconst condition = document.createElement(\"p\");\nconst humidity = document.createElement(\"p\");\nasync function handleButtonClick() {\n  const data = await fetchData(input.value);\n  temp.textContent = `Temperature: ${data.current.temp_c} degrees Celcius`;\n  condition.textContent = `Condition: ${data.current.condition.text}`;\n  humidity.textContent = `Humidity: ${data.current.humidity}%`;\n}\nbutton.addEventListener(\"click\", handleButtonClick);\ndiv.appendChild(temp);\ndiv.appendChild(condition);\ndiv.appendChild(humidity);\nbody.appendChild(div);\n\n//# sourceURL=webpack://template/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;