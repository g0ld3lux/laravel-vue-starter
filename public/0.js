webpackJsonp([0,3],{

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(476)(
  /* script */
  __webpack_require__(477),
  /* template */
  __webpack_require__(488),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\uriah\\sites\\www\\fb\\resources\\assets\\js\\views\\Layouts\\main.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] main.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d28f084e", Component.options)
  } else {
    hotAPI.reload("data-v-d28f084e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(476)(
  /* script */
  null,
  /* template */
  __webpack_require__(485),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\uriah\\sites\\www\\fb\\resources\\assets\\js\\views\\errors\\404.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] 404.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5bb7d4ce", Component.options)
  } else {
    hotAPI.reload("data-v-5bb7d4ce", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(490)

var Component = __webpack_require__(476)(
  /* script */
  __webpack_require__(480),
  /* template */
  __webpack_require__(486),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\uriah\\sites\\www\\fb\\resources\\assets\\js\\views\\pages\\home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6313b184", Component.options)
  } else {
    hotAPI.reload("data-v-6313b184", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 476:
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 477:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _AppHeader = __webpack_require__(484);

var _AppHeader2 = _interopRequireDefault(_AppHeader);

var _AppFooter = __webpack_require__(483);

var _AppFooter2 = _interopRequireDefault(_AppFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    components: {
        AppHeader: _AppHeader2.default, AppFooter: _AppFooter2.default
    },
    mounted: function mounted() {
        console.log('Layout Loaded!');
    }
};

/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            'footer': 'footer'
        };
    }
};

/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            'header': 'header'
        };
    }
};

/***/ }),

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vueFacebookSigninButton = __webpack_require__(482);

var _vueFacebookSigninButton2 = _interopRequireDefault(_vueFacebookSigninButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.use(_vueFacebookSigninButton2.default); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            'content': 'content',
            fbSignInParams: {
                scope: 'email,public_profile',
                return_scopes: true
            },
            showButton: true,
            uid: null,
            accessToken: null
        };
    },

    methods: {
        onSignInSuccess: function onSignInSuccess(response) {
            var _this = this;

            if (response.status === 'connected') {
                this.showButton = false;
            }
            FB.api('/me/permissions', function (response) {
                var data = response.data;
                var granted = [];
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var permission = _step.value;

                        if (_this.hasGranted(permission)) {
                            granted.push(permission.permission);
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                var allowedPermissions = _.intersection(_this.neededPermissions(), granted);
                if (!_.isEqual(_this.neededPermissions(), allowedPermissions)) {
                    // If we Dont Have the Right Permission Granted then...
                    console.log('Do Not Allow Them To Use the App!');
                }
            });
        },
        onSignInError: function onSignInError(error) {
            console.log('Whoops! You Need to Login To Facebook!', error);
        },
        hasGranted: function hasGranted(data) {
            if (data.status === 'granted') return true;
        },
        neededPermissions: function neededPermissions() {
            return ['manage_pages', 'email'];
        },
        checkStatus: function checkStatus() {
            // Check login Status
            FB.getLoginStatus(function (response) {
                if (response.status === 'connected') {
                    // the user is logged in and has authenticated your
                    // app, and response.authResponse supplies
                    // the user's ID, a valid access token, a signed
                    // request, and the time the access token 
                    // and signed request each expire
                    this.showButton = false;
                    this.uid = response.authResponse.userID;
                    this.accessToken = response.authResponse.accessToken;
                } else if (response.status === 'not_authorized') {
                    // the user is logged in to Facebook, 
                    // but has not authenticated your app
                } else {
                        // the user isn't logged in to Facebook.
                    }
            });
        }
    },
    components: {
        FBSignInButton: _vueFacebookSigninButton2.default
    },
    mounted: function mounted() {
        this.checkStatus();
    }
};

/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(252)(true);
// imports


// module
exports.push([module.i, "\n.fb-signin-button {\r\n  /* This is where you control how the button looks. Be creative! */\r\n  display: inline-block;\r\n  padding: 4px 8px;\r\n  border-radius: 3px;\r\n  background-color: #4267b2;\r\n  color: #fff;\n}\r\n", "", {"version":3,"sources":["C:/Users/uriah/sites/www/fb/resources/assets/js/views/pages/home.vue?2bc2398c"],"names":[],"mappings":";AAuGA;EACA,kEAAA;EACA,sBAAA;EACA,iBAAA;EACA,mBAAA;EACA,0BAAA;EACA,YAAA;CACA","file":"home.vue","sourcesContent":["<template>\r\n<div>\r\n<article class=\"message\">\r\n  <div class=\"message-header\">\r\n    <p>Hi Heaven</p>\r\n    <button class=\"delete\"></button>\r\n  </div>\r\n  <div class=\"message-body\">\r\n    <fb-signin-button\r\n    :params=\"fbSignInParams\"\r\n    @success=\"onSignInSuccess\"\r\n    @error=\"onSignInError\"\r\n    v-if=\"showButton\">\r\n    Sign in with Facebook\r\n  </fb-signin-button>\r\n  </div>\r\n  <fb-signin-button></fb-signin-button>\r\n</article>\r\n\r\n</div>\r\n</template>\r\n\r\n<script>\r\nimport FBSignInButton from 'vue-facebook-signin-button'\r\nVue.use(FBSignInButton)\r\n\r\n    export default {\r\n        data() {\r\n            return {\r\n                'content' : 'content',\r\n                fbSignInParams: {\r\n                    scope: 'email,public_profile',\r\n                    return_scopes: true\r\n                },\r\n                showButton: true,\r\n                uid: null,\r\n                accessToken: null\r\n                }\r\n        },\r\n        methods: {\r\n        onSignInSuccess (response) {\r\n        if(response.status === 'connected'){\r\n            this.showButton = false\r\n        }\r\n        FB.api('/me/permissions', response => {\r\n        let data = response.data\r\n        let granted = []\r\n        for(let permission of data)\r\n        {\r\n            if(this.hasGranted(permission)){\r\n                granted.push(permission.permission)\r\n            }\r\n        }\r\n        let allowedPermissions = _.intersection(this.neededPermissions(),granted)\r\n        if(!_.isEqual(this.neededPermissions(), allowedPermissions))\r\n        {\r\n            // If we Dont Have the Right Permission Granted then...\r\n            console.log('Do Not Allow Them To Use the App!')\r\n        }\r\n        })\r\n        },\r\n        onSignInError (error) {\r\n        console.log('Whoops! You Need to Login To Facebook!', error)\r\n        },\r\n        hasGranted(data){\r\n            if(data.status === 'granted')\r\n            return true\r\n        },\r\n        neededPermissions(){\r\n            return ['manage_pages','email']\r\n        },\r\n        checkStatus(){\r\n        // Check login Status\r\n        FB.getLoginStatus(function(response) {\r\n        if (response.status === 'connected') {\r\n        // the user is logged in and has authenticated your\r\n        // app, and response.authResponse supplies\r\n        // the user's ID, a valid access token, a signed\r\n        // request, and the time the access token \r\n        // and signed request each expire\r\n        this.showButton = false\r\n        this.uid = response.authResponse.userID\r\n        this.accessToken = response.authResponse.accessToken\r\n        } else if (response.status === 'not_authorized') {\r\n        // the user is logged in to Facebook, \r\n        // but has not authenticated your app\r\n        } else {\r\n        // the user isn't logged in to Facebook.\r\n        }\r\n        })\r\n        }\r\n\r\n        },\r\n        components: {\r\n            FBSignInButton\r\n        },\r\n        mounted() {\r\n            this.checkStatus()\r\n        }\r\n    }\r\n</script>\r\n\r\n<style>\r\n.fb-signin-button {\r\n  /* This is where you control how the button looks. Be creative! */\r\n  display: inline-block;\r\n  padding: 4px 8px;\r\n  border-radius: 3px;\r\n  background-color: #4267b2;\r\n  color: #fff;\r\n}\r\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&'function'==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?'symbol':typeof obj};(function(){function a(b){b.component('fb-signin-button',{name:'fb-signin-button',render:function render(c){return c('div',{attrs:{class:'fb-signin-button'},ref:'signinBtn'},this.$slots.default)},props:{params:{type:Object,required:!0,default:function _default(){return{}}}},mounted:function mounted(){var _this=this;this.$refs.signinBtn.addEventListener('click',function(){window.FB.login(function(d){_this.$emit(d.authResponse?'success':'error',d)},_this.params)})}})}'object'==( false?'undefined':_typeof(exports))?module.exports=a: true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return a}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):window.Vue&&window.Vue.use(a)})();


/***/ }),

/***/ 483:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(476)(
  /* script */
  __webpack_require__(478),
  /* template */
  __webpack_require__(489),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\uriah\\sites\\www\\fb\\resources\\assets\\js\\views\\Layouts\\partials\\AppFooter.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AppFooter.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d47d1d42", Component.options)
  } else {
    hotAPI.reload("data-v-d47d1d42", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(476)(
  /* script */
  __webpack_require__(479),
  /* template */
  __webpack_require__(487),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\uriah\\sites\\www\\fb\\resources\\assets\\js\\views\\Layouts\\partials\\AppHeader.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AppHeader.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9218555e", Component.options)
  } else {
    hotAPI.reload("data-v-9218555e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 485:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content"
  }, [_c('p', [_vm._v("404 PAGE")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5bb7d4ce", module.exports)
  }
}

/***/ }),

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('article', {
    staticClass: "message"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "message-body"
  }, [(_vm.showButton) ? _c('fb-signin-button', {
    attrs: {
      "params": _vm.fbSignInParams
    },
    on: {
      "success": _vm.onSignInSuccess,
      "error": _vm.onSignInError
    }
  }, [_vm._v("\r\n    Sign in with Facebook\r\n  ")]) : _vm._e()], 1), _vm._v(" "), _c('fb-signin-button')], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "message-header"
  }, [_c('p', [_vm._v("Hi Heaven")]), _vm._v(" "), _c('button', {
    staticClass: "delete"
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6313b184", module.exports)
  }
}

/***/ }),

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "hero is-primary is-medium"
  }, [_c('div', {
    staticClass: "hero-head"
  }, [_c('header', {
    staticClass: "nav"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "nav-left"
  }, [_c('a', {
    staticClass: "nav-item"
  }, [_c('img', {
    attrs: {
      "src": "http://bulma.io/images/bulma-type-white.png",
      "alt": "Logo"
    }
  })])]), _vm._v(" "), _c('span', {
    staticClass: "nav-toggle"
  }, [_c('span'), _vm._v(" "), _c('span'), _vm._v(" "), _c('span')]), _vm._v(" "), _c('div', {
    staticClass: "nav-right nav-menu"
  }, [_c('a', {
    staticClass: "nav-item is-active"
  }, [_vm._v("\r\n            FB\r\n          ")]), _vm._v(" "), _c('a', {
    staticClass: "nav-item"
  }, [_vm._v("\r\n            Examples\r\n          ")]), _vm._v(" "), _c('a', {
    staticClass: "nav-item"
  }, [_vm._v("\r\n            Documentation\r\n          ")]), _vm._v(" "), _c('span', {
    staticClass: "nav-item"
  }, [_c('a', {
    staticClass: "button is-primary is-inverted"
  }, [_c('span', {
    staticClass: "icon"
  }, [_c('i', {
    staticClass: "fa fa-github"
  })]), _vm._v(" "), _c('span', [_vm._v("Download")])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "hero-body"
  }, [_c('div', {
    staticClass: "container has-text-centered"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("\r\n        Title\r\n      ")]), _vm._v(" "), _c('h2', {
    staticClass: "subtitle"
  }, [_vm._v("\r\n        Subtitle\r\n      ")])])]), _vm._v(" "), _c('div', {
    staticClass: "hero-foot"
  }, [_c('nav', {
    staticClass: "tabs"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('ul', [_c('li', {
    staticClass: "is-active"
  }, [_c('a', [_vm._v("Overview")])]), _vm._v(" "), _c('li', [_c('a', [_vm._v("Modifiers")])]), _vm._v(" "), _c('li', [_c('a', [_vm._v("Grid")])]), _vm._v(" "), _c('li', [_c('a', [_vm._v("Elements")])]), _vm._v(" "), _c('li', [_c('a', [_vm._v("Components")])]), _vm._v(" "), _c('li', [_c('a', [_vm._v("Layout")])])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9218555e", module.exports)
  }
}

/***/ }),

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('app-header'), _vm._v(" "), _c('router-view'), _vm._v(" "), _c('app-footer')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d28f084e", module.exports)
  }
}

/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('footer', {
    staticClass: "footer"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "content has-text-centered"
  }, [_c('p', [_c('strong', [_vm._v("Laravel Full Blown Api Starter App")]), _vm._v(" by "), _c('a', {
    attrs: {
      "href": "http://www.facebook.com/midascodebreakear"
    }
  }, [_vm._v("Uriah Galang")]), _vm._v(". The source code is licensed\r\n        "), _c('a', {
    attrs: {
      "href": "http://opensource.org/licenses/mit-license.php"
    }
  }, [_vm._v("MIT")]), _vm._v(". The website content\r\n        is licensed "), _c('a', {
    attrs: {
      "href": "http://creativecommons.org/licenses/by-nc-sa/4.0/"
    }
  }, [_vm._v("CC ANS 4.0")]), _vm._v(".\r\n      ")]), _vm._v(" "), _c('p', [_c('a', {
    staticClass: "icon",
    attrs: {
      "href": "https://github.com/jgthms/bulma"
    }
  }, [_c('i', {
    staticClass: "fa fa-github"
  })])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d47d1d42", module.exports)
  }
}

/***/ }),

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(481);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(491)("6e762f1c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-6313b184\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./home.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-6313b184\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./home.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(492)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 492:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZpZXdzL0xheW91dHMvbWFpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92aWV3cy9lcnJvcnMvNDA0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZpZXdzL3BhZ2VzL2hvbWUudnVlIiwid2VicGFjazovLy8uL34vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vL21haW4udnVlIiwid2VicGFjazovLy9BcHBGb290ZXIudnVlIiwid2VicGFjazovLy9BcHBIZWFkZXIudnVlIiwid2VicGFjazovLy9ob21lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZpZXdzL3BhZ2VzL2hvbWUudnVlPzgyMjMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtZmFjZWJvb2stc2lnbmluLWJ1dHRvbi9kaXN0L3Z1ZS1mYWNlYm9vay1zaWduaW4tYnV0dG9uLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZpZXdzL0xheW91dHMvcGFydGlhbHMvQXBwRm9vdGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZpZXdzL0xheW91dHMvcGFydGlhbHMvQXBwSGVhZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZpZXdzL2Vycm9ycy80MDQudnVlPzZmNDEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92aWV3cy9wYWdlcy9ob21lLnZ1ZT9iMGYzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvdmlld3MvTGF5b3V0cy9wYXJ0aWFscy9BcHBIZWFkZXIudnVlP2MzZmYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92aWV3cy9MYXlvdXRzL21haW4udnVlPzM2ZGMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92aWV3cy9MYXlvdXRzL3BhcnRpYWxzL0FwcEZvb3Rlci52dWU/Mzk3MiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZpZXdzL3BhZ2VzL2hvbWUudnVlP2FhMDQiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFzRztBQUN0RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBc0c7QUFDdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7OztBQzFCQTtBQUNBLHVCQUFpTDs7QUFFakw7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBc0c7QUFDdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN0TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyx3QkFBd0I7QUFDM0QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL21haW4udnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1kMjhmMDg0ZVxcXCJ9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9tYWluLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQzpcXFxcVXNlcnNcXFxcdXJpYWhcXFxcc2l0ZXNcXFxcd3d3XFxcXGZiXFxcXHJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxcdmlld3NcXFxcTGF5b3V0c1xcXFxtYWluLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIG1haW4udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWQyOGYwODRlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZDI4ZjA4NGVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92aWV3cy9MYXlvdXRzL21haW4udnVlXG4vLyBtb2R1bGUgaWQgPSA0NzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgbnVsbCxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWJiN2Q0Y2VcXFwifSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vNDA0LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQzpcXFxcVXNlcnNcXFxcdXJpYWhcXFxcc2l0ZXNcXFxcd3d3XFxcXGZiXFxcXHJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxcdmlld3NcXFxcZXJyb3JzXFxcXDQwNC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSA0MDQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTViYjdkNGNlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNWJiN2Q0Y2VcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92aWV3cy9lcnJvcnMvNDA0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj97XFxcImlkXFxcIjpcXFwiZGF0YS12LTYzMTNiMTg0XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2hvbWUudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2hvbWUudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi02MzEzYjE4NFxcXCJ9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9ob21lLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQzpcXFxcVXNlcnNcXFxcdXJpYWhcXFxcc2l0ZXNcXFxcd3d3XFxcXGZiXFxcXHJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxcdmlld3NcXFxccGFnZXNcXFxcaG9tZS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBob21lLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02MzEzYjE4NFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTYzMTNiMTg0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvdmlld3MvcGFnZXMvaG9tZS52dWVcbi8vIG1vZHVsZSBpZCA9IDQ3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHJhd1NjcmlwdEV4cG9ydHMsXG4gIGNvbXBpbGVkVGVtcGxhdGUsXG4gIHNjb3BlSWQsXG4gIGNzc01vZHVsZXNcbikge1xuICB2YXIgZXNNb2R1bGVcbiAgdmFyIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyB8fCB7fVxuXG4gIC8vIEVTNiBtb2R1bGVzIGludGVyb3BcbiAgdmFyIHR5cGUgPSB0eXBlb2YgcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIGlmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXNNb2R1bGUgPSByYXdTY3JpcHRFeHBvcnRzXG4gICAgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICB9XG5cbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChjb21waWxlZFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSBjb21waWxlZFRlbXBsYXRlLnJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gY29tcGlsZWRUZW1wbGF0ZS5zdGF0aWNSZW5kZXJGbnNcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9IHNjb3BlSWRcbiAgfVxuXG4gIC8vIGluamVjdCBjc3NNb2R1bGVzXG4gIGlmIChjc3NNb2R1bGVzKSB7XG4gICAgdmFyIGNvbXB1dGVkID0gT2JqZWN0LmNyZWF0ZShvcHRpb25zLmNvbXB1dGVkIHx8IG51bGwpXG4gICAgT2JqZWN0LmtleXMoY3NzTW9kdWxlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgbW9kdWxlID0gY3NzTW9kdWxlc1trZXldXG4gICAgICBjb21wdXRlZFtrZXldID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbW9kdWxlIH1cbiAgICB9KVxuICAgIG9wdGlvbnMuY29tcHV0ZWQgPSBjb21wdXRlZFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBlc01vZHVsZTogZXNNb2R1bGUsXG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qc1xuLy8gbW9kdWxlIGlkID0gNDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPCEtLSBIZXJlIFdlIExvYWQgTmF2IE1lbnUgQmFyIC0tPlxyXG4gICAgICAgIDxhcHAtaGVhZGVyPjwvYXBwLWhlYWRlcj5cclxuICAgICAgICA8IS0tIEhlcmUgV2UgTG9hZCBPdXIgVmlldyAtLT5cclxuICAgICAgICA8cm91dGVyLXZpZXc+PC9yb3V0ZXItdmlldz5cclxuICAgICAgICA8IS0tIEhlcmUgV2UgTG9hZCBPdXIgRm9vdGVyIC0tPlxyXG4gICAgICAgIDxhcHAtZm9vdGVyPjwvYXBwLWZvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IEFwcEhlYWRlciBmcm9tICcuL3BhcnRpYWxzL0FwcEhlYWRlci52dWUnXHJcbmltcG9ydCBBcHBGb290ZXIgZnJvbSAnLi9wYXJ0aWFscy9BcHBGb290ZXIudnVlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY29tcG9uZW50cyA6IHtcclxuICAgICAgICBBcHBIZWFkZXIgLCBBcHBGb290ZXJcclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdMYXlvdXQgTG9hZGVkIScpXHJcbiAgICB9XHJcbn1cclxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG1haW4udnVlP2FhMzVlNDY0IiwiPHRlbXBsYXRlPlxyXG48Zm9vdGVyIGNsYXNzPVwiZm9vdGVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnQgaGFzLXRleHQtY2VudGVyZWRcIj5cclxuICAgICAgPHA+XHJcbiAgICAgICAgPHN0cm9uZz5MYXJhdmVsIEZ1bGwgQmxvd24gQXBpIFN0YXJ0ZXIgQXBwPC9zdHJvbmc+IGJ5IDxhIGhyZWY9XCJodHRwOi8vd3d3LmZhY2Vib29rLmNvbS9taWRhc2NvZGVicmVha2VhclwiPlVyaWFoIEdhbGFuZzwvYT4uIFRoZSBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZFxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXCI+TUlUPC9hPi4gVGhlIHdlYnNpdGUgY29udGVudFxyXG4gICAgICAgIGlzIGxpY2Vuc2VkIDxhIGhyZWY9XCJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1uYy1zYS80LjAvXCI+Q0MgQU5TIDQuMDwvYT4uXHJcbiAgICAgIDwvcD5cclxuICAgICAgPHA+XHJcbiAgICAgICAgPGEgY2xhc3M9XCJpY29uXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9qZ3RobXMvYnVsbWFcIj5cclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtZ2l0aHViXCI+PC9pPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZm9vdGVyPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgJ2Zvb3RlcicgOiAnZm9vdGVyJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICB9XHJcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBBcHBGb290ZXIudnVlPzVhODJiM2I5IiwiPHRlbXBsYXRlPlxyXG48c2VjdGlvbiBjbGFzcz1cImhlcm8gaXMtcHJpbWFyeSBpcy1tZWRpdW1cIj5cclxuICA8IS0tIEhlcm8gaGVhZGVyOiB3aWxsIHN0aWNrIGF0IHRoZSB0b3AgLS0+XHJcbiAgPGRpdiBjbGFzcz1cImhlcm8taGVhZFwiPlxyXG4gICAgPGhlYWRlciBjbGFzcz1cIm5hdlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi1sZWZ0XCI+XHJcbiAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL2J1bG1hLmlvL2ltYWdlcy9idWxtYS10eXBlLXdoaXRlLnBuZ1wiIGFsdD1cIkxvZ29cIj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdi10b2dnbGVcIj5cclxuICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi1yaWdodCBuYXYtbWVudVwiPlxyXG4gICAgICAgICAgPGEgY2xhc3M9XCJuYXYtaXRlbSBpcy1hY3RpdmVcIj5cclxuICAgICAgICAgICAgRkJcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgRXhhbXBsZXNcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgRG9jdW1lbnRhdGlvblxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImJ1dHRvbiBpcy1wcmltYXJ5IGlzLWludmVydGVkXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWdpdGh1YlwiPjwvaT5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+RG93bmxvYWQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPCEtLSBIZXJvIGNvbnRlbnQ6IHdpbGwgYmUgaW4gdGhlIG1pZGRsZSAtLT5cclxuICA8ZGl2IGNsYXNzPVwiaGVyby1ib2R5XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGhhcy10ZXh0LWNlbnRlcmVkXCI+XHJcbiAgICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+XHJcbiAgICAgICAgVGl0bGVcclxuICAgICAgPC9oMT5cclxuICAgICAgPGgyIGNsYXNzPVwic3VidGl0bGVcIj5cclxuICAgICAgICBTdWJ0aXRsZVxyXG4gICAgICA8L2gyPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDwhLS0gSGVybyBmb290ZXI6IHdpbGwgc3RpY2sgYXQgdGhlIGJvdHRvbSAtLT5cclxuICA8ZGl2IGNsYXNzPVwiaGVyby1mb290XCI+XHJcbiAgICA8bmF2IGNsYXNzPVwidGFic1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpIGNsYXNzPVwiaXMtYWN0aXZlXCI+PGE+T3ZlcnZpZXc8L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YT5Nb2RpZmllcnM8L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YT5HcmlkPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGE+RWxlbWVudHM8L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YT5Db21wb25lbnRzPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGE+TGF5b3V0PC9hPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj5cclxuICA8L2Rpdj5cclxuPC9zZWN0aW9uPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgJ2hlYWRlcicgOiAnaGVhZGVyJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICB9XHJcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBBcHBIZWFkZXIudnVlP2I2YzU1NWZjIiwiPHRlbXBsYXRlPlxyXG48ZGl2PlxyXG48YXJ0aWNsZSBjbGFzcz1cIm1lc3NhZ2VcIj5cclxuICA8ZGl2IGNsYXNzPVwibWVzc2FnZS1oZWFkZXJcIj5cclxuICAgIDxwPkhpIEhlYXZlbjwvcD5cclxuICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGVcIj48L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwibWVzc2FnZS1ib2R5XCI+XHJcbiAgICA8ZmItc2lnbmluLWJ1dHRvblxyXG4gICAgOnBhcmFtcz1cImZiU2lnbkluUGFyYW1zXCJcclxuICAgIEBzdWNjZXNzPVwib25TaWduSW5TdWNjZXNzXCJcclxuICAgIEBlcnJvcj1cIm9uU2lnbkluRXJyb3JcIlxyXG4gICAgdi1pZj1cInNob3dCdXR0b25cIj5cclxuICAgIFNpZ24gaW4gd2l0aCBGYWNlYm9va1xyXG4gIDwvZmItc2lnbmluLWJ1dHRvbj5cclxuICA8L2Rpdj5cclxuICA8ZmItc2lnbmluLWJ1dHRvbj48L2ZiLXNpZ25pbi1idXR0b24+XHJcbjwvYXJ0aWNsZT5cclxuXHJcbjwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IEZCU2lnbkluQnV0dG9uIGZyb20gJ3Z1ZS1mYWNlYm9vay1zaWduaW4tYnV0dG9uJ1xyXG5WdWUudXNlKEZCU2lnbkluQnV0dG9uKVxyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgJ2NvbnRlbnQnIDogJ2NvbnRlbnQnLFxyXG4gICAgICAgICAgICAgICAgZmJTaWduSW5QYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBzY29wZTogJ2VtYWlsLHB1YmxpY19wcm9maWxlJyxcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5fc2NvcGVzOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2hvd0J1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHVpZDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgb25TaWduSW5TdWNjZXNzIChyZXNwb25zZSkge1xyXG4gICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PT0gJ2Nvbm5lY3RlZCcpe1xyXG4gICAgICAgICAgICB0aGlzLnNob3dCdXR0b24gPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBGQi5hcGkoJy9tZS9wZXJtaXNzaW9ucycsIHJlc3BvbnNlID0+IHtcclxuICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICBsZXQgZ3JhbnRlZCA9IFtdXHJcbiAgICAgICAgZm9yKGxldCBwZXJtaXNzaW9uIG9mIGRhdGEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZih0aGlzLmhhc0dyYW50ZWQocGVybWlzc2lvbikpe1xyXG4gICAgICAgICAgICAgICAgZ3JhbnRlZC5wdXNoKHBlcm1pc3Npb24ucGVybWlzc2lvbilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYWxsb3dlZFBlcm1pc3Npb25zID0gXy5pbnRlcnNlY3Rpb24odGhpcy5uZWVkZWRQZXJtaXNzaW9ucygpLGdyYW50ZWQpXHJcbiAgICAgICAgaWYoIV8uaXNFcXVhbCh0aGlzLm5lZWRlZFBlcm1pc3Npb25zKCksIGFsbG93ZWRQZXJtaXNzaW9ucykpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBJZiB3ZSBEb250IEhhdmUgdGhlIFJpZ2h0IFBlcm1pc3Npb24gR3JhbnRlZCB0aGVuLi4uXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEbyBOb3QgQWxsb3cgVGhlbSBUbyBVc2UgdGhlIEFwcCEnKVxyXG4gICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25TaWduSW5FcnJvciAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnV2hvb3BzISBZb3UgTmVlZCB0byBMb2dpbiBUbyBGYWNlYm9vayEnLCBlcnJvcilcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhhc0dyYW50ZWQoZGF0YSl7XHJcbiAgICAgICAgICAgIGlmKGRhdGEuc3RhdHVzID09PSAnZ3JhbnRlZCcpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBuZWVkZWRQZXJtaXNzaW9ucygpe1xyXG4gICAgICAgICAgICByZXR1cm4gWydtYW5hZ2VfcGFnZXMnLCdlbWFpbCddXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGVja1N0YXR1cygpe1xyXG4gICAgICAgIC8vIENoZWNrIGxvZ2luIFN0YXR1c1xyXG4gICAgICAgIEZCLmdldExvZ2luU3RhdHVzKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gJ2Nvbm5lY3RlZCcpIHtcclxuICAgICAgICAvLyB0aGUgdXNlciBpcyBsb2dnZWQgaW4gYW5kIGhhcyBhdXRoZW50aWNhdGVkIHlvdXJcclxuICAgICAgICAvLyBhcHAsIGFuZCByZXNwb25zZS5hdXRoUmVzcG9uc2Ugc3VwcGxpZXNcclxuICAgICAgICAvLyB0aGUgdXNlcidzIElELCBhIHZhbGlkIGFjY2VzcyB0b2tlbiwgYSBzaWduZWRcclxuICAgICAgICAvLyByZXF1ZXN0LCBhbmQgdGhlIHRpbWUgdGhlIGFjY2VzcyB0b2tlbiBcclxuICAgICAgICAvLyBhbmQgc2lnbmVkIHJlcXVlc3QgZWFjaCBleHBpcmVcclxuICAgICAgICB0aGlzLnNob3dCdXR0b24gPSBmYWxzZVxyXG4gICAgICAgIHRoaXMudWlkID0gcmVzcG9uc2UuYXV0aFJlc3BvbnNlLnVzZXJJRFxyXG4gICAgICAgIHRoaXMuYWNjZXNzVG9rZW4gPSByZXNwb25zZS5hdXRoUmVzcG9uc2UuYWNjZXNzVG9rZW5cclxuICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gJ25vdF9hdXRob3JpemVkJykge1xyXG4gICAgICAgIC8vIHRoZSB1c2VyIGlzIGxvZ2dlZCBpbiB0byBGYWNlYm9vaywgXHJcbiAgICAgICAgLy8gYnV0IGhhcyBub3QgYXV0aGVudGljYXRlZCB5b3VyIGFwcFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gdGhlIHVzZXIgaXNuJ3QgbG9nZ2VkIGluIHRvIEZhY2Vib29rLlxyXG4gICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgIEZCU2lnbkluQnV0dG9uXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrU3RhdHVzKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4uZmItc2lnbmluLWJ1dHRvbiB7XHJcbiAgLyogVGhpcyBpcyB3aGVyZSB5b3UgY29udHJvbCBob3cgdGhlIGJ1dHRvbiBsb29rcy4gQmUgY3JlYXRpdmUhICovXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjY3YjI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gaG9tZS52dWU/MmJjMjM5OGMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmZiLXNpZ25pbi1idXR0b24ge1xcclxcbiAgLyogVGhpcyBpcyB3aGVyZSB5b3UgY29udHJvbCBob3cgdGhlIGJ1dHRvbiBsb29rcy4gQmUgY3JlYXRpdmUhICovXFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBwYWRkaW5nOiA0cHggOHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNjdiMjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXHJcXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovVXNlcnMvdXJpYWgvc2l0ZXMvd3d3L2ZiL3Jlc291cmNlcy9hc3NldHMvanMvdmlld3MvcGFnZXMvaG9tZS52dWU/MmJjMjM5OGNcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXVHQTtFQUNBLGtFQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0NBQ0FcIixcImZpbGVcIjpcImhvbWUudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG48ZGl2PlxcclxcbjxhcnRpY2xlIGNsYXNzPVxcXCJtZXNzYWdlXFxcIj5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcIm1lc3NhZ2UtaGVhZGVyXFxcIj5cXHJcXG4gICAgPHA+SGkgSGVhdmVuPC9wPlxcclxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJkZWxldGVcXFwiPjwvYnV0dG9uPlxcclxcbiAgPC9kaXY+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJtZXNzYWdlLWJvZHlcXFwiPlxcclxcbiAgICA8ZmItc2lnbmluLWJ1dHRvblxcclxcbiAgICA6cGFyYW1zPVxcXCJmYlNpZ25JblBhcmFtc1xcXCJcXHJcXG4gICAgQHN1Y2Nlc3M9XFxcIm9uU2lnbkluU3VjY2Vzc1xcXCJcXHJcXG4gICAgQGVycm9yPVxcXCJvblNpZ25JbkVycm9yXFxcIlxcclxcbiAgICB2LWlmPVxcXCJzaG93QnV0dG9uXFxcIj5cXHJcXG4gICAgU2lnbiBpbiB3aXRoIEZhY2Vib29rXFxyXFxuICA8L2ZiLXNpZ25pbi1idXR0b24+XFxyXFxuICA8L2Rpdj5cXHJcXG4gIDxmYi1zaWduaW4tYnV0dG9uPjwvZmItc2lnbmluLWJ1dHRvbj5cXHJcXG48L2FydGljbGU+XFxyXFxuXFxyXFxuPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcbmltcG9ydCBGQlNpZ25JbkJ1dHRvbiBmcm9tICd2dWUtZmFjZWJvb2stc2lnbmluLWJ1dHRvbidcXHJcXG5WdWUudXNlKEZCU2lnbkluQnV0dG9uKVxcclxcblxcclxcbiAgICBleHBvcnQgZGVmYXVsdCB7XFxyXFxuICAgICAgICBkYXRhKCkge1xcclxcbiAgICAgICAgICAgIHJldHVybiB7XFxyXFxuICAgICAgICAgICAgICAgICdjb250ZW50JyA6ICdjb250ZW50JyxcXHJcXG4gICAgICAgICAgICAgICAgZmJTaWduSW5QYXJhbXM6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlOiAnZW1haWwscHVibGljX3Byb2ZpbGUnLFxcclxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuX3Njb3BlczogdHJ1ZVxcclxcbiAgICAgICAgICAgICAgICB9LFxcclxcbiAgICAgICAgICAgICAgICBzaG93QnV0dG9uOiB0cnVlLFxcclxcbiAgICAgICAgICAgICAgICB1aWQ6IG51bGwsXFxyXFxuICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiBudWxsXFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBtZXRob2RzOiB7XFxyXFxuICAgICAgICBvblNpZ25JblN1Y2Nlc3MgKHJlc3BvbnNlKSB7XFxyXFxuICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT09ICdjb25uZWN0ZWQnKXtcXHJcXG4gICAgICAgICAgICB0aGlzLnNob3dCdXR0b24gPSBmYWxzZVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgRkIuYXBpKCcvbWUvcGVybWlzc2lvbnMnLCByZXNwb25zZSA9PiB7XFxyXFxuICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmRhdGFcXHJcXG4gICAgICAgIGxldCBncmFudGVkID0gW11cXHJcXG4gICAgICAgIGZvcihsZXQgcGVybWlzc2lvbiBvZiBkYXRhKVxcclxcbiAgICAgICAge1xcclxcbiAgICAgICAgICAgIGlmKHRoaXMuaGFzR3JhbnRlZChwZXJtaXNzaW9uKSl7XFxyXFxuICAgICAgICAgICAgICAgIGdyYW50ZWQucHVzaChwZXJtaXNzaW9uLnBlcm1pc3Npb24pXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgbGV0IGFsbG93ZWRQZXJtaXNzaW9ucyA9IF8uaW50ZXJzZWN0aW9uKHRoaXMubmVlZGVkUGVybWlzc2lvbnMoKSxncmFudGVkKVxcclxcbiAgICAgICAgaWYoIV8uaXNFcXVhbCh0aGlzLm5lZWRlZFBlcm1pc3Npb25zKCksIGFsbG93ZWRQZXJtaXNzaW9ucykpXFxyXFxuICAgICAgICB7XFxyXFxuICAgICAgICAgICAgLy8gSWYgd2UgRG9udCBIYXZlIHRoZSBSaWdodCBQZXJtaXNzaW9uIEdyYW50ZWQgdGhlbi4uLlxcclxcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEbyBOb3QgQWxsb3cgVGhlbSBUbyBVc2UgdGhlIEFwcCEnKVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgfSlcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBvblNpZ25JbkVycm9yIChlcnJvcikge1xcclxcbiAgICAgICAgY29uc29sZS5sb2coJ1dob29wcyEgWW91IE5lZWQgdG8gTG9naW4gVG8gRmFjZWJvb2shJywgZXJyb3IpXFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgaGFzR3JhbnRlZChkYXRhKXtcXHJcXG4gICAgICAgICAgICBpZihkYXRhLnN0YXR1cyA9PT0gJ2dyYW50ZWQnKVxcclxcbiAgICAgICAgICAgIHJldHVybiB0cnVlXFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgbmVlZGVkUGVybWlzc2lvbnMoKXtcXHJcXG4gICAgICAgICAgICByZXR1cm4gWydtYW5hZ2VfcGFnZXMnLCdlbWFpbCddXFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgY2hlY2tTdGF0dXMoKXtcXHJcXG4gICAgICAgIC8vIENoZWNrIGxvZ2luIFN0YXR1c1xcclxcbiAgICAgICAgRkIuZ2V0TG9naW5TdGF0dXMoZnVuY3Rpb24ocmVzcG9uc2UpIHtcXHJcXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09ICdjb25uZWN0ZWQnKSB7XFxyXFxuICAgICAgICAvLyB0aGUgdXNlciBpcyBsb2dnZWQgaW4gYW5kIGhhcyBhdXRoZW50aWNhdGVkIHlvdXJcXHJcXG4gICAgICAgIC8vIGFwcCwgYW5kIHJlc3BvbnNlLmF1dGhSZXNwb25zZSBzdXBwbGllc1xcclxcbiAgICAgICAgLy8gdGhlIHVzZXIncyBJRCwgYSB2YWxpZCBhY2Nlc3MgdG9rZW4sIGEgc2lnbmVkXFxyXFxuICAgICAgICAvLyByZXF1ZXN0LCBhbmQgdGhlIHRpbWUgdGhlIGFjY2VzcyB0b2tlbiBcXHJcXG4gICAgICAgIC8vIGFuZCBzaWduZWQgcmVxdWVzdCBlYWNoIGV4cGlyZVxcclxcbiAgICAgICAgdGhpcy5zaG93QnV0dG9uID0gZmFsc2VcXHJcXG4gICAgICAgIHRoaXMudWlkID0gcmVzcG9uc2UuYXV0aFJlc3BvbnNlLnVzZXJJRFxcclxcbiAgICAgICAgdGhpcy5hY2Nlc3NUb2tlbiA9IHJlc3BvbnNlLmF1dGhSZXNwb25zZS5hY2Nlc3NUb2tlblxcclxcbiAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT09ICdub3RfYXV0aG9yaXplZCcpIHtcXHJcXG4gICAgICAgIC8vIHRoZSB1c2VyIGlzIGxvZ2dlZCBpbiB0byBGYWNlYm9vaywgXFxyXFxuICAgICAgICAvLyBidXQgaGFzIG5vdCBhdXRoZW50aWNhdGVkIHlvdXIgYXBwXFxyXFxuICAgICAgICB9IGVsc2Uge1xcclxcbiAgICAgICAgLy8gdGhlIHVzZXIgaXNuJ3QgbG9nZ2VkIGluIHRvIEZhY2Vib29rLlxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgfSlcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBjb21wb25lbnRzOiB7XFxyXFxuICAgICAgICAgICAgRkJTaWduSW5CdXR0b25cXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBtb3VudGVkKCkge1xcclxcbiAgICAgICAgICAgIHRoaXMuY2hlY2tTdGF0dXMoKVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlPlxcclxcbi5mYi1zaWduaW4tYnV0dG9uIHtcXHJcXG4gIC8qIFRoaXMgaXMgd2hlcmUgeW91IGNvbnRyb2wgaG93IHRoZSBidXR0b24gbG9va3MuIEJlIGNyZWF0aXZlISAqL1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcGFkZGluZzogNHB4IDhweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjY3YjI7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz97XCJpZFwiOlwiZGF0YS12LTYzMTNiMTg0XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92aWV3cy9wYWdlcy9ob21lLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jzt2YXIgX3R5cGVvZj0nZnVuY3Rpb24nPT10eXBlb2YgU3ltYm9sJiYnc3ltYm9sJz09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihvYmope3JldHVybiB0eXBlb2Ygb2JqfTpmdW5jdGlvbihvYmope3JldHVybiBvYmomJidmdW5jdGlvbic9PXR5cGVvZiBTeW1ib2wmJm9iai5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmb2JqIT09U3ltYm9sLnByb3RvdHlwZT8nc3ltYm9sJzp0eXBlb2Ygb2JqfTsoZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGIpe2IuY29tcG9uZW50KCdmYi1zaWduaW4tYnV0dG9uJyx7bmFtZTonZmItc2lnbmluLWJ1dHRvbicscmVuZGVyOmZ1bmN0aW9uIHJlbmRlcihjKXtyZXR1cm4gYygnZGl2Jyx7YXR0cnM6e2NsYXNzOidmYi1zaWduaW4tYnV0dG9uJ30scmVmOidzaWduaW5CdG4nfSx0aGlzLiRzbG90cy5kZWZhdWx0KX0scHJvcHM6e3BhcmFtczp7dHlwZTpPYmplY3QscmVxdWlyZWQ6ITAsZGVmYXVsdDpmdW5jdGlvbiBfZGVmYXVsdCgpe3JldHVybnt9fX19LG1vdW50ZWQ6ZnVuY3Rpb24gbW91bnRlZCgpe3ZhciBfdGhpcz10aGlzO3RoaXMuJHJlZnMuc2lnbmluQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe3dpbmRvdy5GQi5sb2dpbihmdW5jdGlvbihkKXtfdGhpcy4kZW1pdChkLmF1dGhSZXNwb25zZT8nc3VjY2Vzcyc6J2Vycm9yJyxkKX0sX3RoaXMucGFyYW1zKX0pfX0pfSdvYmplY3QnPT0oJ3VuZGVmaW5lZCc9PXR5cGVvZiBleHBvcnRzPyd1bmRlZmluZWQnOl90eXBlb2YoZXhwb3J0cykpP21vZHVsZS5leHBvcnRzPWE6J2Z1bmN0aW9uJz09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sZnVuY3Rpb24oKXtyZXR1cm4gYX0pOndpbmRvdy5WdWUmJndpbmRvdy5WdWUudXNlKGEpfSkoKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtZmFjZWJvb2stc2lnbmluLWJ1dHRvbi9kaXN0L3Z1ZS1mYWNlYm9vay1zaWduaW4tYnV0dG9uLm1pbi5qc1xuLy8gbW9kdWxlIGlkID0gNDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0FwcEZvb3Rlci52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XFxcImlkXFxcIjpcXFwiZGF0YS12LWQ0N2QxZDQyXFxcIn0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0FwcEZvb3Rlci52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkM6XFxcXFVzZXJzXFxcXHVyaWFoXFxcXHNpdGVzXFxcXHd3d1xcXFxmYlxcXFxyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXHZpZXdzXFxcXExheW91dHNcXFxccGFydGlhbHNcXFxcQXBwRm9vdGVyLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIEFwcEZvb3Rlci52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZDQ3ZDFkNDJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1kNDdkMWQ0MlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZpZXdzL0xheW91dHMvcGFydGlhbHMvQXBwRm9vdGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0FwcEhlYWRlci52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XFxcImlkXFxcIjpcXFwiZGF0YS12LTkyMTg1NTVlXFxcIn0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0FwcEhlYWRlci52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkM6XFxcXFVzZXJzXFxcXHVyaWFoXFxcXHNpdGVzXFxcXHd3d1xcXFxmYlxcXFxyZXNvdXJjZXNcXFxcYXNzZXRzXFxcXGpzXFxcXHZpZXdzXFxcXExheW91dHNcXFxccGFydGlhbHNcXFxcQXBwSGVhZGVyLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIEFwcEhlYWRlci52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtOTIxODU1NWVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi05MjE4NTU1ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZpZXdzL0xheW91dHMvcGFydGlhbHMvQXBwSGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfdm0uX20oMClcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIlxuICB9LCBbX2MoJ3AnLCBbX3ZtLl92KFwiNDA0IFBBR0VcIildKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNWJiN2Q0Y2VcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/e1wiaWRcIjpcImRhdGEtdi01YmI3ZDRjZVwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92aWV3cy9lcnJvcnMvNDA0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdhcnRpY2xlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1lc3NhZ2VcIlxuICB9LCBbX3ZtLl9tKDApLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1lc3NhZ2UtYm9keVwiXG4gIH0sIFsoX3ZtLnNob3dCdXR0b24pID8gX2MoJ2ZiLXNpZ25pbi1idXR0b24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGFyYW1zXCI6IF92bS5mYlNpZ25JblBhcmFtc1xuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwic3VjY2Vzc1wiOiBfdm0ub25TaWduSW5TdWNjZXNzLFxuICAgICAgXCJlcnJvclwiOiBfdm0ub25TaWduSW5FcnJvclxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcclxcbiAgICBTaWduIGluIHdpdGggRmFjZWJvb2tcXHJcXG4gIFwiKV0pIDogX3ZtLl9lKCldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2ZiLXNpZ25pbi1idXR0b24nKV0sIDEpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1lc3NhZ2UtaGVhZGVyXCJcbiAgfSwgW19jKCdwJywgW192bS5fdihcIkhpIEhlYXZlblwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlbGV0ZVwiXG4gIH0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi02MzEzYjE4NFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz97XCJpZFwiOlwiZGF0YS12LTYzMTNiMTg0XCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZpZXdzL3BhZ2VzL2hvbWUudnVlXG4vLyBtb2R1bGUgaWQgPSA0ODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF92bS5fbSgwKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdzZWN0aW9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImhlcm8gaXMtcHJpbWFyeSBpcy1tZWRpdW1cIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJoZXJvLWhlYWRcIlxuICB9LCBbX2MoJ2hlYWRlcicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJuYXZcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJuYXYtbGVmdFwiXG4gIH0sIFtfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJuYXYtaXRlbVwiXG4gIH0sIFtfYygnaW1nJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBcImh0dHA6Ly9idWxtYS5pby9pbWFnZXMvYnVsbWEtdHlwZS13aGl0ZS5wbmdcIixcbiAgICAgIFwiYWx0XCI6IFwiTG9nb1wiXG4gICAgfVxuICB9KV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm5hdi10b2dnbGVcIlxuICB9LCBbX2MoJ3NwYW4nKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1yaWdodCBuYXYtbWVudVwiXG4gIH0sIFtfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJuYXYtaXRlbSBpcy1hY3RpdmVcIlxuICB9LCBbX3ZtLl92KFwiXFxyXFxuICAgICAgICAgICAgRkJcXHJcXG4gICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtXCJcbiAgfSwgW192bS5fdihcIlxcclxcbiAgICAgICAgICAgIEV4YW1wbGVzXFxyXFxuICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJuYXYtaXRlbVwiXG4gIH0sIFtfdm0uX3YoXCJcXHJcXG4gICAgICAgICAgICBEb2N1bWVudGF0aW9uXFxyXFxuICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJuYXYtaXRlbVwiXG4gIH0sIFtfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtcHJpbWFyeSBpcy1pbnZlcnRlZFwiXG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpY29uXCJcbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWdpdGh1YlwiXG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywgW192bS5fdihcIkRvd25sb2FkXCIpXSldKV0pXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaGVyby1ib2R5XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyIGhhcy10ZXh0LWNlbnRlcmVkXCJcbiAgfSwgW19jKCdoMScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJcXHJcXG4gICAgICAgIFRpdGxlXFxyXFxuICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdoMicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzdWJ0aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJcXHJcXG4gICAgICAgIFN1YnRpdGxlXFxyXFxuICAgICAgXCIpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImhlcm8tZm9vdFwiXG4gIH0sIFtfYygnbmF2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRhYnNcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIlxuICB9LCBbX2MoJ3VsJywgW19jKCdsaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpcy1hY3RpdmVcIlxuICB9LCBbX2MoJ2EnLCBbX3ZtLl92KFwiT3ZlcnZpZXdcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGknLCBbX2MoJ2EnLCBbX3ZtLl92KFwiTW9kaWZpZXJzXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2xpJywgW19jKCdhJywgW192bS5fdihcIkdyaWRcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGknLCBbX2MoJ2EnLCBbX3ZtLl92KFwiRWxlbWVudHNcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGknLCBbX2MoJ2EnLCBbX3ZtLl92KFwiQ29tcG9uZW50c1wiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdsaScsIFtfYygnYScsIFtfdm0uX3YoXCJMYXlvdXRcIildKV0pXSldKV0pXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTkyMTg1NTVlXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP3tcImlkXCI6XCJkYXRhLXYtOTIxODU1NWVcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvdmlld3MvTGF5b3V0cy9wYXJ0aWFscy9BcHBIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA0ODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2FwcC1oZWFkZXInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3JvdXRlci12aWV3JyksIF92bS5fdihcIiBcIiksIF9jKCdhcHAtZm9vdGVyJyldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1kMjhmMDg0ZVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz97XCJpZFwiOlwiZGF0YS12LWQyOGYwODRlXCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZpZXdzL0xheW91dHMvbWFpbi52dWVcbi8vIG1vZHVsZSBpZCA9IDQ4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX3ZtLl9tKDApXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2Zvb3RlcicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmb290ZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250ZW50IGhhcy10ZXh0LWNlbnRlcmVkXCJcbiAgfSwgW19jKCdwJywgW19jKCdzdHJvbmcnLCBbX3ZtLl92KFwiTGFyYXZlbCBGdWxsIEJsb3duIEFwaSBTdGFydGVyIEFwcFwiKV0pLCBfdm0uX3YoXCIgYnkgXCIpLCBfYygnYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IFwiaHR0cDovL3d3dy5mYWNlYm9vay5jb20vbWlkYXNjb2RlYnJlYWtlYXJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlVyaWFoIEdhbGFuZ1wiKV0pLCBfdm0uX3YoXCIuIFRoZSBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZFxcclxcbiAgICAgICAgXCIpLCBfYygnYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IFwiaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTUlUXCIpXSksIF92bS5fdihcIi4gVGhlIHdlYnNpdGUgY29udGVudFxcclxcbiAgICAgICAgaXMgbGljZW5zZWQgXCIpLCBfYygnYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IFwiaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktbmMtc2EvNC4wL1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiQ0MgQU5TIDQuMFwiKV0pLCBfdm0uX3YoXCIuXFxyXFxuICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywgW19jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImljb25cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2pndGhtcy9idWxtYVwiXG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtZ2l0aHViXCJcbiAgfSldKV0pXSldKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtZDQ3ZDFkNDJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/e1wiaWRcIjpcImRhdGEtdi1kNDdkMWQ0MlwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92aWV3cy9MYXlvdXRzL3BhcnRpYWxzL0FwcEZvb3Rlci52dWVcbi8vIG1vZHVsZSBpZCA9IDQ4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz97XFxcImlkXFxcIjpcXFwiZGF0YS12LTYzMTNiMTg0XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2hvbWUudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI2ZTc2MmYxY1wiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNjMxM2IxODRcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vaG9tZS52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz97XFxcImlkXFxcIjpcXFwiZGF0YS12LTYzMTNiMTg0XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2hvbWUudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP3tcImlkXCI6XCJkYXRhLXYtNjMxM2IxODRcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZpZXdzL3BhZ2VzL2hvbWUudnVlXG4vLyBtb2R1bGUgaWQgPSA0OTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuICBNb2RpZmllZCBieSBFdmFuIFlvdSBAeXl4OTkwODAzXG4qL1xuXG52YXIgaGFzRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG5cbmlmICh0eXBlb2YgREVCVUcgIT09ICd1bmRlZmluZWQnICYmIERFQlVHKSB7XG4gIGlmICghaGFzRG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3Z1ZS1zdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudC4gJyArXG4gICAgXCJVc2UgeyB0YXJnZXQ6ICdub2RlJyB9IGluIHlvdXIgV2VicGFjayBjb25maWcgdG8gaW5kaWNhdGUgYSBzZXJ2ZXItcmVuZGVyaW5nIGVudmlyb25tZW50LlwiXG4gICkgfVxufVxuXG52YXIgbGlzdFRvU3R5bGVzID0gcmVxdWlyZSgnLi9saXN0VG9TdHlsZXMnKVxuXG4vKlxudHlwZSBTdHlsZU9iamVjdCA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgcGFydHM6IEFycmF5PFN0eWxlT2JqZWN0UGFydD5cbn1cblxudHlwZSBTdHlsZU9iamVjdFBhcnQgPSB7XG4gIGNzczogc3RyaW5nO1xuICBtZWRpYTogc3RyaW5nO1xuICBzb3VyY2VNYXA6ID9zdHJpbmdcbn1cbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHsvKlxuICBbaWQ6IG51bWJlcl06IHtcbiAgICBpZDogbnVtYmVyLFxuICAgIHJlZnM6IG51bWJlcixcbiAgICBwYXJ0czogQXJyYXk8KG9iaj86IFN0eWxlT2JqZWN0UGFydCkgPT4gdm9pZD5cbiAgfVxuKi99XG5cbnZhciBoZWFkID0gaGFzRG9jdW1lbnQgJiYgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSlcbnZhciBzaW5nbGV0b25FbGVtZW50ID0gbnVsbFxudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwXG52YXIgaXNQcm9kdWN0aW9uID0gZmFsc2VcbnZhciBub29wID0gZnVuY3Rpb24gKCkge31cblxuLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG52YXIgaXNPbGRJRSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9tc2llIFs2LTldXFxiLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSlcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocGFyZW50SWQsIGxpc3QsIF9pc1Byb2R1Y3Rpb24pIHtcbiAgaXNQcm9kdWN0aW9uID0gX2lzUHJvZHVjdGlvblxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIGxpc3QpXG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgICAgZG9tU3R5bGUucmVmcy0tXG4gICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSlcbiAgICB9XG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbmV3TGlzdClcbiAgICAgIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzID0gW11cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXVxuICAgICAgaWYgKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKClcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMgLyogQXJyYXk8U3R5bGVPYmplY3Q+ICovKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pXG4gICAgICB9XG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIGlmIChkb21TdHlsZS5wYXJ0cy5sZW5ndGggPiBpdGVtLnBhcnRzLmxlbmd0aCkge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5sZW5ndGggPSBpdGVtLnBhcnRzLmxlbmd0aFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHsgaWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0cyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAoKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHN0eWxlRWxlbWVudC50eXBlID0gJ3RleHQvY3NzJ1xuICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudClcbiAgcmV0dXJuIHN0eWxlRWxlbWVudFxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICB2YXIgdXBkYXRlLCByZW1vdmVcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlW2RhdGEtdnVlLXNzci1pZH49XCInICsgb2JqLmlkICsgJ1wiXScpXG5cbiAgaWYgKHN0eWxlRWxlbWVudCkge1xuICAgIGlmIChpc1Byb2R1Y3Rpb24pIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGFuZCBpbiBwcm9kdWN0aW9uIG1vZGUuXG4gICAgICAvLyBzaW1wbHkgZG8gbm90aGluZy5cbiAgICAgIHJldHVybiBub29wXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGJ1dCBpbiBkZXYgbW9kZS5cbiAgICAgIC8vIGZvciBzb21lIHJlYXNvbiBDaHJvbWUgY2FuJ3QgaGFuZGxlIHNvdXJjZSBtYXAgaW4gc2VydmVyLXJlbmRlcmVkXG4gICAgICAvLyBzdHlsZSB0YWdzIC0gc291cmNlIG1hcHMgaW4gPHN0eWxlPiBvbmx5IHdvcmtzIGlmIHRoZSBzdHlsZSB0YWcgaXNcbiAgICAgIC8vIGNyZWF0ZWQgYW5kIGluc2VydGVkIGR5bmFtaWNhbGx5LiBTbyB3ZSByZW1vdmUgdGhlIHNlcnZlciByZW5kZXJlZFxuICAgICAgLy8gc3R5bGVzIGFuZCBpbmplY3QgbmV3IG9uZXMuXG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgaWYgKGlzT2xkSUUpIHtcbiAgICAvLyB1c2Ugc2luZ2xldG9uIG1vZGUgZm9yIElFOS5cbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrK1xuICAgIHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKSlcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSlcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKVxuICB9IGVsc2Uge1xuICAgIC8vIHVzZSBtdWx0aS1zdHlsZS10YWcgbW9kZSBpbiBhbGwgb3RoZXIgY2FzZXNcbiAgICBzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShvYmopXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcbiAgICAgICAgICBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuICAgICAgICAgIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKVxuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKVxuICAgIH1cbiAgfVxufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgdGV4dFN0b3JlID0gW11cblxuICByZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudFxuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpXG4gIH1cbn0pKClcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzc1xuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKVxuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKVxuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXNcbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSlcbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZUVsZW1lbnQsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzc1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWFcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXBcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKVxuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZGV2dG9vbHMvZG9jcy9qYXZhc2NyaXB0LWRlYnVnZ2luZ1xuICAgIC8vIHRoaXMgbWFrZXMgc291cmNlIG1hcHMgaW5zaWRlIHN0eWxlIHRhZ3Mgd29yayBwcm9wZXJseSBpbiBDaHJvbWVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VVUkw9JyArIHNvdXJjZU1hcC5zb3VyY2VzWzBdICsgJyAqLydcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArICcgKi8nXG4gIH1cblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzXG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpXG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA0OTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBsaXN0IGZvcm1hdCBwcm9kdWNlZCBieSBjc3MtbG9hZGVyIGludG8gc29tZXRoaW5nXG4gKiBlYXNpZXIgdG8gbWFuaXB1bGF0ZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsaXN0VG9TdHlsZXMgKHBhcmVudElkLCBsaXN0KSB7XG4gIHZhciBzdHlsZXMgPSBbXVxuICB2YXIgbmV3U3R5bGVzID0ge31cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgdmFyIGlkID0gaXRlbVswXVxuICAgIHZhciBjc3MgPSBpdGVtWzFdXG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXVxuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdXG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBpZDogcGFyZW50SWQgKyAnOicgKyBpLFxuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH1cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7IGlkOiBpZCwgcGFydHM6IFtwYXJ0XSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0eWxlc1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gNDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=