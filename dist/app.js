webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var tdbidStore = __webpack_require__(1);

	// Styles
	__webpack_require__(3);

	angular.module('tdbidApp', ['ui.router'])
	    .factory('tdbidStore', tdbidStore)
	    .config(config);

	function config($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider) {

	    $urlRouterProvider.otherwise('/');

	    $locationProvider.html5Mode(false);

	    $stateProvider
	        .state('tdbid', {
	            abstract: true,
	            url: '/',
	            template: '<ui-view />'
	        })
	        .state('tdbid.all', {
	            url: '',
	            component: 'tdbid',
	            resolve: {
	                filter: function() {
	                    return 'all'
	                }
	            }
	        })
	        .state('tdbid.active', {
	            url: 'active',
	            component: 'tdbid',
	            resolve: {
	                filter: function() {
	                    return 'active'
	                }
	            }
	        })
	        .state('tdbid.completed', {
	            url: 'completed',
	            component: 'tdbid',
	            resolve: {
	                filter: function() {
	                    return 'completed'
	                }
	            }
	        })
	}

	__webpack_require__(7)


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var mobx = __webpack_require__(2);

	function tdbidStore() {

	    var tdbidList = mobx.observable([]);

	    var factory = {
	        getAllTbids: getAllTbids,
	        addTdbid: addTdbid,
	        deleteTdbid: deleteTdbid,
	        updateTdbid: updateTdbid,
	        toggleTdbid: toggleTdbid,
	        toggleAllTdbids: toggleAllTdbids,
	        clearCompleted: clearCompleted,
	    }

	    return factory;

	    ////////////////////////////////////////////

	    function getAllTbids() {
	        return tdbidList;
	    };

	    function addTdbid(tdbid) {
	        var newTdbid = Object.assign({}, tdbid, {
	            completed: false
	        });

	        tdbidList.push(newTdbid);
	    }

	    function deleteTdbid(index) {
	        tdbidList.splice(index, 1);
	    }

	    function updateTdbid(index, tdbid) {
	        tdbidList[index].description = tdbid.description;
	    }

	    function toggleTdbid(index) {
	        tdbidList[index].completed = !tdbidList[index].completed;
	    }

	    function toggleAllTdbids() {
	        tdbidList.forEach(function(item) {
	            item.completed = !item.completed;
	        });
	    }

	    function clearCompleted() {
	        var filterArray = tdbidList.filter(function(item) {
	            return !item.completed;
	        });

	        tdbidList.replace(filterArray);
	    }
	}

	module.exports = tdbidStore;


/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./index.less", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "html,\nbody {\n  margin: 0;\n  padding: 0;\n}\nbutton {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: none;\n  font-size: 100%;\n  vertical-align: baseline;\n  font-family: inherit;\n  font-weight: inherit;\n  color: inherit;\n  -webkit-appearance: none;\n  appearance: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nbody {\n  font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  line-height: 1.4em;\n  background: #f5f5f5;\n  color: #4d4d4d;\n  min-width: 230px;\n  max-width: 550px;\n  margin: 0 auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 300;\n}\n:focus {\n  outline: 0;\n}\n.hidden {\n  display: none;\n}\n.tdbidapp {\n  background: #fff;\n  margin: 130px 0 40px 0;\n  position: relative;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n.tdbidapp input::-webkit-input-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6;\n}\n.tdbidapp input::-moz-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6;\n}\n.tdbidapp input::input-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6;\n}\n.tdbidapp h1 {\n  position: absolute;\n  top: -155px;\n  width: 100%;\n  font-size: 100px;\n  font-weight: 100;\n  text-align: center;\n  color: rgba(175, 47, 47, 0.15);\n  -webkit-text-rendering: optimizeLegibility;\n  -moz-text-rendering: optimizeLegibility;\n  text-rendering: optimizeLegibility;\n}\n.new-tdbid,\n.edit {\n  position: relative;\n  margin: 0;\n  width: 100%;\n  font-size: 24px;\n  font-family: inherit;\n  font-weight: inherit;\n  line-height: 1.4em;\n  border: 0;\n  color: inherit;\n  padding: 6px;\n  border: 1px solid #999;\n  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.new-tdbid {\n  padding: 16px 16px 16px 60px;\n  border: none;\n  background: rgba(0, 0, 0, 0.003);\n  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);\n}\n.main {\n  position: relative;\n  z-index: 2;\n  border-top: 1px solid #e6e6e6;\n}\nlabel[for='toggle-all'] {\n  display: none;\n}\n.toggle-all {\n  position: absolute;\n  top: -55px;\n  left: -12px;\n  width: 60px;\n  height: 34px;\n  text-align: center;\n  border: none;\n  /* Mobile Safari */\n}\n.toggle-all:before {\n  content: '\\276F';\n  font-size: 22px;\n  color: #e6e6e6;\n  padding: 10px 27px 10px 27px;\n}\n.toggle-all:checked:before {\n  color: #737373;\n}\n.tdbid-list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.tdbid-list li {\n  position: relative;\n  font-size: 24px;\n  border-bottom: 1px solid #ededed;\n}\n.tdbid-list li:last-child {\n  border-bottom: none;\n}\n.tdbid-list li.editing {\n  border-bottom: none;\n  padding: 0;\n  margin-left: 43px;\n}\n.tdbid-list li.editing .edit {\n  display: block;\n  width: 100%;\n  padding: 12px 16px;\n}\n.tdbid-list li.editing .view {\n  display: none;\n}\n.tdbid-list li .toggle {\n  text-align: center;\n  width: 40px;\n  /* auto, since non-WebKit browsers doesn't support input styling */\n  height: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  border: none;\n  /* Mobile Safari */\n  -webkit-appearance: none;\n  appearance: none;\n}\n.tdbid-list li .toggle:after {\n  content: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#ededed\" stroke-width=\"3\"/></svg>');\n}\n.tdbid-list li .toggle:checked:after {\n  content: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#bddad5\" stroke-width=\"3\"/><path fill=\"#5dc2af\" d=\"M72 25L42 71 27 56l-4 4 20 20 34-52z\"/></svg>');\n}\n.tdbid-list li label {\n  word-break: break-all;\n  padding: 15px 60px 15px 15px;\n  margin-left: 45px;\n  display: block;\n  line-height: 1.2;\n  transition: color 0.4s;\n}\n.tdbid-list li.completed label {\n  color: #d9d9d9;\n  text-decoration: line-through;\n}\n.tdbid-list li .destroy {\n  display: none;\n  position: absolute;\n  top: 0;\n  right: 10px;\n  bottom: 0;\n  width: 40px;\n  height: 40px;\n  margin: auto 0;\n  font-size: 30px;\n  color: #cc9a9a;\n  margin-bottom: 11px;\n  transition: color 0.2s ease-out;\n}\n.tdbid-list li .destroy:hover {\n  color: #af5b5e;\n}\n.tdbid-list li .destroy:after {\n  content: '\\D7';\n}\n.tdbid-list li:hover .destroy {\n  display: block;\n}\n.tdbid-list li .edit {\n  display: none;\n}\n.tdbid-list li.editing:last-child {\n  margin-bottom: -1px;\n}\n.footer {\n  color: #777;\n  padding: 10px 15px;\n  height: 20px;\n  text-align: center;\n  border-top: 1px solid #e6e6e6;\n}\n.footer:before {\n  content: '';\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 50px;\n  overflow: hidden;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);\n}\n.tdbid-count {\n  float: left;\n  text-align: left;\n}\n.tdbid-count strong {\n  font-weight: 300;\n}\n.filters {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: absolute;\n  right: 0;\n  left: 0;\n}\n.filters li {\n  display: inline;\n}\n.filters li a {\n  color: inherit;\n  margin: 3px;\n  padding: 3px 7px;\n  text-decoration: none;\n  border: 1px solid transparent;\n  border-radius: 3px;\n}\n.filters li a:hover {\n  border-color: rgba(175, 47, 47, 0.1);\n}\n.filters li a.selected {\n  border-color: rgba(175, 47, 47, 0.2);\n}\n.clear-completed,\nhtml .clear-completed:active {\n  float: right;\n  position: relative;\n  line-height: 20px;\n  text-decoration: none;\n  cursor: pointer;\n}\n.clear-completed:hover {\n  text-decoration: underline;\n}\n.info {\n  margin: 65px auto 0;\n  color: #bfbfbf;\n  font-size: 10px;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n  text-align: center;\n}\n.info p {\n  line-height: 1;\n}\n.info a {\n  color: inherit;\n  text-decoration: none;\n  font-weight: 400;\n}\n.info a:hover {\n  text-decoration: underline;\n}\n/*\n\tHack to remove background from Mobile Safari.\n\tCan't use it globally since it destroys checkboxes in Firefox\n*/\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  .toggle-all,\n  .tdbid-list li .toggle {\n    background: none;\n  }\n  .tdbid-list li .toggle {\n    height: 40px;\n  }\n  .toggle-all {\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n    -webkit-appearance: none;\n    appearance: none;\n  }\n}\n@media (max-width: 430px) {\n  .footer {\n    height: 50px;\n  }\n  .filters {\n    bottom: 10px;\n  }\n}\n", ""]);

	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var tdbidContainer = __webpack_require__(8);
	var tdbidForm = __webpack_require__(10);
	var tdbidForm = __webpack_require__(12);
	var tdbidForm = __webpack_require__(14);
	var tdbidFooter = __webpack_require__(16);

	angular.module('tdbidApp')
	    .component('tdbid', tdbidContainer)
	    .component('tdbidForm', tdbidForm)
	    .component('tdbidList', tdbidList)
	    .component('tdbidItem', tdbidItem)
	    .component('tdbidFooter', tdbidFooter)
	;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var mobx = __webpack_require__(2);

	var tdbidContainer = {
	    controller: tdbidContainerController,
	    template: __webpack_require__(9),
	    bindings: {
	        filter: '<'
	    }
	};

	function tdbidContainerController(tdbidStore, $state) {
	    var self = this;

	    var dispose = mobx.autorun(function() {
	        var tdbidList = tdbidStore.getAllTbids();
	        self.tdbidList = getListBasedOnFilter(tdbidList, self.filter);
	        self.incompletedItems = getListBasedOnFilter(tdbidList, 'active').length;

	        console.log('%cNEW STATE:', 'font-weight: bold');
	        console.log(JSON.stringify(mobx.toJS(tdbidList), null, 2));
	    });

	    self.$onDestroy = function $onDestroy() {
	        dispose();
	    };

	    self.addTdbid = function addTdbid(event) {
	        tdbidStore.addTdbid(event.tdbid);
	    }

	    self.deleteTdbid = function deleteTdbid(event) {
	        tdbidStore.deleteTdbid(event.index);
	    };

	    self.updateTdbid = function updateTdbid(event) {
	        tdbidStore.updateTdbid(event.index, event.tdbid);
	    };

	    self.toggleTdbid = function toggleTdbid(event) {
	        tdbidStore.toggleTdbid(event.index);
	    };

	    self.toggleAllTdbids = function toggleAllTdbids() {
	        tdbidStore.toggleAllTdbids();
	    };

	    self.clearCompleted = function clearCompleted() {
	        tdbidStore.clearCompleted();
	    };

	    function getListBasedOnFilter(list, filter) {
	        if (!filter) return list;

	        var filterMap = {
	            all: function (item) { return true; },
	            active: function (item) { return !item.completed },
	            completed: function (item) { return item.completed }
	        };

	        return list.filter(filterMap[filter]);
	    }
	}

	module.exports = tdbidContainer;


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "\n<section class=\"tdbidapp\">\n    <header class=\"header\">\n        <h1>tdbids</h1>\n        <tdbid-form on-submit=\"$ctrl.addTdbid($event)\"></tdbid-form>\n    </header>\n    <!-- This section should be hidden by default and shown when there are tdbids -->\n    <section class=\"main\" ng-if=\"$ctrl.tdbidList.length > 0\">\n        <input class=\"toggle-all\" type=\"checkbox\" ng-click=\"$ctrl.toggleAllTdbids()\">\n        <label for=\"toggle-all\">Mark all as complete</label>\n        <tdbid-list\n            list=\"$ctrl.tdbidList\"\n            on-delete=\"$ctrl.deleteTdbid($event)\"\n            on-update=\"$ctrl.updateTdbid($event)\"\n            on-toggle=\"$ctrl.toggleTdbid($event)\">\n        </tdbid-list>\n    </section>\n    <!-- This footer should hidden by default and shown when there are tdbids -->\n    <tdbid-footer\n        items-left=\"$ctrl.incompletedItems\"\n        on-clear-completed=\"$ctrl.clearCompleted()\">\n    </tdbid-footer>\n</section>\n";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var tdbidForm = {
	    controller: tdbidFormController,
	    template: __webpack_require__(11),
	    bindings: {
	        onSubmit: '&'
	    }
	};

	function tdbidFormController() {
	    var self = this;

	    self.$onInit = function $onInit() {
	        self.newTdbid = {};
	        resetTdbid();
	    }

	    self.submitForm = function submitForm() {
	        // Call parent
	        self.onSubmit({
	            $event: {
	                tdbid: self.newTdbid
	            }
	        });

	        resetTdbid();
	    }

	    function resetTdbid() {
	        self.newTdbid = {};
	    }
	}

	module.exports = tdbidForm;


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "<form ng-submit=\"$ctrl.submitForm()\">\n  <input class=\"new-tdbid\"\n    ng-model=\"$ctrl.newTdbid.description\"\n    placeholder=\"What needs to be done?\"\n    autofocus>\n</form>\n";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var tdbidList = {
	    controller: tdbidListController,
	    template: __webpack_require__(13),
	    bindings: {
	        list: '<',
	        onDelete: '&',
	        onUpdate: '&',
	        onToggle: '&'
	    }
	};

	function tdbidListController() {
	    var self = this;

	    self.deleteTdbid = function deleteTdbid(event) {
	        // Call parent
	        self.onDelete({
	            $event: {
	                index: event.index
	            }
	        });
	    };

	    self.updateTdbid = function updateTdbid(event) {
	        // Call parent
	        self.onUpdate({
	            $event: {
	                index: event.index,
	                tdbid: event.tdbid
	            }
	        });
	    };

	    self.toggleTdbid = function toggleTdbid(event) {
	        // Call parent
	        self.onToggle({
	            $event: {
	                index: event.index
	            }
	        });
	    };
	}

	module.exports = tdbidList;


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "<ul class=\"tdbid-list\">\n    <!-- These are here just to show the structure of the list items -->\n    <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->\n    <li ng-repeat=\"tdbid in $ctrl.list\">\n        <tdbid-item\n            index=\"$index\"\n            description=\"tdbid.description\"\n            completed=\"tdbid.completed\"\n            on-delete=\"$ctrl.deleteTdbid($event)\"\n            on-update=\"$ctrl.updateTdbid($event)\"\n            on-toggle=\"$ctrl.toggleTdbid($event)\">\n        </tdbid-item>\n    </li>\n</ul>\n";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var tdbidItem = {
	    controller: tdbidItemController,
	    template: __webpack_require__(15),
	    bindings: {
	        index: '<',
	        description: '<',
	        completed: '<',
	        onDelete: '&',
	        onUpdate: '&',
	        onToggle: '&'
	    }
	};

	function tdbidItemController() {
	    var self = this;

	    self.$onInit = function $onInit() {
	        self.editing = false;
	    };

	    self.enableEditing = function enableEditing() {
	        self.editing = true;
	    };

	    self.deleteTdbid = function deleteTdbid() {
	        // Call parent
	        self.onDelete({
	            $event: {
	                index: self.index
	            }
	        });
	    };

	    self.updateTdbid = function updateTdbid() {
	        // Call parent
	        self.onUpdate({
	            $event: {
	                index: self.index,
	                tdbid: {
	                    description: self.description
	                }
	            }
	        });

	        self.editing = false;
	    };

	    self.toggleTdbid = function toggleTdbid() {
	        // Call parent
	        self.onToggle({
	            $event: {
	                index: self.index
	            }
	        });
	    };
	}

	module.exports = tdbidItem;


/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "<li ng-class=\"{'editing': $ctrl.editing, 'completed': $ctrl.completed}\">\n    <div class=\"view\" ng-dblclick=\"$ctrl.enableEditing()\">\n        <input\n            class=\"toggle\"\n            type=\"checkbox\"\n            ng-checked=\"$ctrl.completed\"\n            ng-click=\"$ctrl.toggleTdbid()\">\n        <label>{{$ctrl.description}}</label>\n        <button class=\"destroy\" ng-click=\"$ctrl.deleteTdbid()\"></button>\n    </div>\n    <form ng-submit=\"$ctrl.updateTdbid()\">\n        <input class=\"edit\" ng-model=\"$ctrl.description\">\n    </form>\n</li>\n";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var tdbidFooter = {
	    controller: tdbidFooterController,
	    template: __webpack_require__(17),
	    bindings: {
	        itemsLeft: '<',
	        onClearCompleted: '&'
	    }
	};

	function tdbidFooterController() {
	    var self = this;

	    self.clearCompleted = function clearCompleted() {
	        // Call parent
	        self.onClearCompleted();
	    };
	}

	module.exports = tdbidFooter;


/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "<footer class=\"footer\">\n    <!-- This should be `0 items left` by default -->\n    <span class=\"tdbid-count\"><strong>{{$ctrl.itemsLeft}}</strong> items left</span>\n\n    <!-- Remove this if you don't implement routing -->\n    <ul class=\"filters\">\n        <li>\n            <a href ui-sref=\"tdbid.all\" ui-sref-active=\"selected\">All</a>\n        </li>\n        <li>\n            <a href ui-sref=\"tdbid.active\" ui-sref-active=\"selected\">Active</a>\n        </li>\n        <li>\n            <a href ui-sref=\"tdbid.completed\" ui-sref-active=\"selected\">Completed</a>\n        </li>\n    </ul>\n\n    <!-- Hidden if no completed items are left ↓ -->\n    <button class=\"clear-completed\" ng-click=\"$ctrl.clearCompleted()\">Clear completed</button>\n</footer>\n";

/***/ }
]);