/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _controller = __webpack_require__(1);
	
	var controller = _interopRequireWildcard(_controller);
	
	var _resumeService = __webpack_require__(2);
	
	var resume = _interopRequireWildcard(_resumeService);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	controller.contentConstructor('cover', resume);
	$('.control').click(function () {
	    controller.contentConstructor($(this).data('resume-item'), resume);
	});
	// document.getElementById('calcBtn').addEventListener('click', () => {
	//     let principal = document.getElementById("principal").value;
	//     let years = document.getElementById("years").value;
	//     let rate = document.getElementById("rate").value;
	//     let {monthlyPayment, monthlyRate, amortization} = mortgage.calculateAmortization(principal, years, rate);
	//     document.getElementById("monthlyPayment").innerHTML = monthlyPayment.toFixed(2);
	//     document.getElementById("monthlyRate").innerHTML = (monthlyRate * 100).toFixed(2);
	//     let html = "";
	//         amortization.forEach((year, index) => html += `
	//             <tr>
	//                 <td>${index + 1}</td>
	//                 <td class="currency">${Math.round(year.principalY)}</td>
	//                 <td class="stretch">
	//                     <div class="flex">
	//                         <div class="bar principal"
	//                              style="flex:${year.principalY};-webkit-flex:${year.principalY}">
	//                         </div>
	//                         <div class="bar interest"
	//                              style="flex:${year.interestY};-webkit-flex:${year.interestY}">
	//                         </div>
	//                     </div>
	//                 </td>
	//                 <td class="currency left">${Math.round(year.interestY)}</td>
	//                 <td class="currency">${Math.round(year.balance)}</td>
	//             </tr>
	//         `);
	// document.getElementById("amortization").innerHTML = html;
	// });

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var html = '';
	var templates = {
	    "cover": function cover() {
	        return function (copy) {
	            return html += "<p>" + copy.copy + "</p>";
	        };
	    },
	    "jobs": function jobs() {
	        return function (job) {
	            return html += "<ul>\n            " + (job.company ? "<li>" + job.company + "</li>" : '') + "\n            " + (job.title ? "<li>" + job.title + "</li>" : '') + "\n            " + (job.type ? "<li>" + job.type + "</li>" : '') + "\n            " + (job.location ? "<li>" + job.location + "</li>" : '') + "\n            " + (job.date ? "<li>" + job.date + "</li>" : '') + "\n        </ul>";
	        };
	    },
	    "refrences": function refrences() {
	        return function (refrence) {
	            return html += "<ul>\n            " + (refrence.name ? "<li>" + refrence.name + "</li>" : '') + "\n            " + (refrence.email ? "<li>" + refrence.email + "</li>" : '') + "\n            " + (refrence.phone ? "<li>" + refrence.phone + "</li>" : '') + "\n            " + (refrence.title ? "<li>" + refrence.title + "</li>" : '') + "\n            " + (refrence.company ? "<li>" + refrence.company + "</li>" : '') + "\n        </ul>";
	        };
	    },
	    "education": function education() {
	        return function (school) {
	            return html += "<ul>\n            " + (school.name ? "<li>" + school.name + "</li>" : '') + "\n            " + (school.location ? "<li>" + school.location + "</li>" : '') + "\n            " + (school.date ? "<li>" + school.date + "</li>" : '') + "\n            " + (school.degree ? "<li>" + school.degree + "</li>" : '') + "\n        </ul>";
	        };
	    }
	};
	
	var contentConstructor = exports.contentConstructor = function contentConstructor(caller, resume) {
	    document.getElementById("content").innerHTML = '';
	    resume.findAll().then(function (resume) {
	        resume[caller].forEach(templates[caller]());
	        document.getElementById("content").innerHTML = html;
	        html = '';
	    }).catch(function (e) {
	        return console.log(e);
	    });
	};
	
	var contentModel = exports.contentModel = function contentModel() {};

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var resume = {
	    "cover": [{ "copy": 'Lorem ipsum dolor sit amet, ei utinam cetero numquam nec, an docendi molestie intellegat pro. Sit patrioque voluptaria ad. Id inani officiis recusabo eum, at nec meis adhuc. Eros paulo labitur nec in. Eum no nisl tota, nam paulo primis admodum ad. \n Ut nisl soluta conclusionemque sit, et quo audire constituto. Vim no cetero aliquip, placerat senserit concludaturque an ius. Ei graeco definitiones est, ne duo possim integre interpretaris. Id reque mediocritatem eam. Eum justo blandit theophrastus te, bonorum nusquam dissentiunt est eu. Te ornatus scribentur duo, agam fastidii postulant per ad. \nHis ei semper albucius mentitum. At qualisque prodesset vel, atqui tation omnesque ne duo. Vim errem singulis ad. Id primis assentior adversarium duo, an sea modo melius bonorum, choro consequuntur te eam. Purto vidit possim no pro, eu luptatum mediocrem patrioque mea.' }],
	    "jobs": [{
	        "company": "The Garrigan Lyman Group",
	        "title": "Web Developer",
	        "type": "",
	        "location": "Seattle",
	        "date": "2014-Current",
	        "descriptions": []
	
	    }, {
	        "company": "R.E.I",
	        "title": "Front End Developer",
	        "type": "Contract",
	        "location": "Seattle",
	        "date": "2013-2014",
	        "descriptions": []
	    }, {
	        "company": "",
	        "title": "Web Developer",
	        "type": "Freelance",
	        "location": "Seattle",
	        "date": "2011-Current",
	        "descriptions": []
	    }, {
	        "company": "",
	        "title": "Event Producer",
	        "type": "",
	        "location": "Seattle",
	        "date": "2004-2014",
	        "descriptions": []
	    }],
	    "education": [{
	        "name": "SCCC",
	        "location": "Seattle",
	        "date": "2010-2012",
	        "degree": "Web Developement Certification"
	    }, {
	        "name": "TEFL Express",
	        "location": "Seattle",
	        "date": "2008",
	        "degree": "TEFL Certification"
	    }, {
	        "name": "SAIC",
	        "location": "Chicago",
	        "date": "1999-2003",
	        "degree": "BFA - Sound/Film/New Media"
	    }, {
	        "name": "PCC",
	        "location": "Tucson",
	        "date": "1997-1999",
	        "degree": "AA"
	    }],
	    "refrences": [{ "name": "Robb Charnock",
	        "email": "robb.charnock@nordstrom.com",
	        "phone": "206.627.0971",
	        "title": "Engineer",
	        "company": "Nordstrom"
	    }, { "name": "Joshua Krautwurst",
	        "email": "joshua@krautwur.st",
	        "phone": "828.606.7116",
	        "title": "Senior Developer",
	        "company": "Impinj"
	    }, { "name": "Allie Gibson",
	        "email": "allisondianne@gmail.com",
	        "phone": "206.953.9015",
	        "title": "Project Manager",
	        "company": "Studio216"
	    }, { "name": "Michael Chandler",
	        "email": "mike@nwfolklife.org",
	        "phone": "206.856.5858",
	        "title": "Production Director",
	        "company": "NW Folklife"
	    }]
	};
	
	var findAll = exports.findAll = function findAll() {
	    return new Promise(function (resolve, reject) {
	        if (resume) {
	            resolve(resume);
	        } else {
	            reject("Missing Resume-Service");
	        }
	    });
	};

/***/ }
/******/ ]);
//# sourceMappingURL=app.bundle.js.map