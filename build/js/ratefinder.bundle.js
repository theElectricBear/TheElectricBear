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
	
	var _resumeService = __webpack_require__(2);
	
	var resume = _interopRequireWildcard(_resumeService);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var html = '';
	var templates = {
	  "jobs": function jobs() {
	    return function (job) {
	      return html += '<ul><li>' + job.company + '</li><li>' + job.title + '</li><li>' + job.type + '</li><li>' + job.location + '</li><li>' + job.date + '</li></ul>';
	    };
	  },
	  "refrences": function refrences() {
	    return function (refrence) {
	      return html += '<ul><li>' + refrence.name + '</li><li>' + refrence.email + '</li><li>' + refrence.phone + '</li><li>' + refrence.title + '</li><li>' + refrence.company + '</li></ul>';
	    };
	  },
	  "education": function education() {
	    return function (school) {
	      return html += '<ul><li>' + school.name + '</li><li>' + school.location + '</li><li>' + school.date + '</li><li>' + school.degree + '</li></ul>';
	    };
	  }
	};
	$('.control').click(function () {
	  document.getElementById("content").innerHTML = '';
	  var item = $(this).data('resume-item');
	  resume.findAll().then(function (resume) {
	    resume[item].forEach(templates[item]());
	    document.getElementById("content").innerHTML = html;
	    html = '';
	  }).catch(function (e) {
	    return console.log(e);
	  });
	});

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var resume = {
	    "cover": 'Lorem ipsum dolor sit amet, ei utinam cetero numquam nec, an docendi molestie intellegat pro. Sit patrioque voluptaria ad. Id inani officiis recusabo eum, at nec meis adhuc. Eros paulo labitur nec in. Eum no nisl tota, nam paulo primis admodum ad. \n Ut nisl soluta conclusionemque sit, et quo audire constituto. Vim no cetero aliquip, placerat senserit concludaturque an ius. Ei graeco definitiones est, ne duo possim integre interpretaris. Id reque mediocritatem eam. Eum justo blandit theophrastus te, bonorum nusquam dissentiunt est eu. Te ornatus scribentur duo, agam fastidii postulant per ad. \nHis ei semper albucius mentitum. At qualisque prodesset vel, atqui tation omnesque ne duo. Vim errem singulis ad. Id primis assentior adversarium duo, an sea modo melius bonorum, choro consequuntur te eam. Purto vidit possim no pro, eu luptatum mediocrem patrioque mea.',
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
//# sourceMappingURL=ratefinder.bundle.js.map