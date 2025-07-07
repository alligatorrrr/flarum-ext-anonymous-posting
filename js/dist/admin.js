/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/admin/index.ts":
/*!****************************!*\
  !*** ./src/admin/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Select */ "flarum/common/components/Select");
/* harmony import */ var flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_2__);



var avatarsSettingKey = 'anonymous-posting.formulaireAvatars';
var anonymousUsersSettingKey = 'anonymous-posting.anonymousUsers';
var translationPrefix = 'clarkwinkelmann-anonymous-posting.admin.settings.';
flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('anonymous-posting', function () {
  flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().extensionData["for"]('clarkwinkelmann-anonymous-posting').registerSetting({
    setting: 'anonymous-posting.defaultAnonymity',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(translationPrefix + 'defaultAnonymity'),
    type: 'switch'
  }).registerSetting({
    setting: 'anonymous-posting.defaultAnonymityWhenAbleToSwitch',
    type: 'switch',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(translationPrefix + 'defaultAnonymityWhenAbleToSwitch')
  }).registerSetting({
    setting: 'anonymous-posting.alwaysAnonymiseEdits',
    type: 'switch',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(translationPrefix + 'alwaysAnonymiseEdits'),
    help: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(translationPrefix + 'alwaysAnonymiseEditsHelp')
  }).registerSetting({
    setting: 'anonymous-posting.composerHelpTextPosition',
    type: 'select',
    options: {
      visible: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(translationPrefix + 'composerHelpTextPositionVisible'),
      tooltip: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(translationPrefix + 'composerHelpTextPositionTooltip'),
      hidden: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(translationPrefix + 'composerHelpTextPositionHidden')
    },
    "default": 'visible',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(translationPrefix + 'composerHelpTextPosition'),
    help: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(translationPrefix + 'composerHelpTextPositionHelp')
  }).registerSetting({
    setting: 'anonymous-posting.defaultAnonymousUserProfile',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(translationPrefix + 'defaultAnonymousUserProfile'),
    required: false,
    type: 'number',
    help: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(translationPrefix + 'defaultAnonymousUserProfileHelp')
  }).registerSetting(function () {
    var _this = this;
    var tags = flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().store.all('tags');
    if (!tags.length && !this._loadingTags) {
      this._loadingTags = true; // 给自己打标记避免死循环
      flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().store.find('tags').then(function () {
        return m.redraw();
      });
    }
    var tagOptions = {};
    tags.forEach(function (tag) {
      tagOptions[tag.id()] = tag.name();
    });
    var anonymousUsers;
    try {
      anonymousUsers = JSON.parse(this.setting(anonymousUsersSettingKey)());
    } catch (e) {
      // do nothing, we'll reset to something usable
    }

    // @ts-ignore variable used before assignment, it's fine
    if (!Array.isArray(anonymousUsers)) {
      anonymousUsers = [];
    }
    return m('.Form-group', [m('label', flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(translationPrefix + 'anonymousUserProfileByTags')), m('.helpText', flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(translationPrefix + 'anonymousUserProfileByTagsHelp')), m('table', [m('thead', m('tr', [m('th', flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(translationPrefix + 'anonymousUserProfileTagName')), m('th', flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(translationPrefix + 'anonymousUserProfileUserId')), m('th', flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(translationPrefix + 'anonymousUserProfileIsCreatingDiscussion')), m('th', flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(translationPrefix + 'anonymousUserProfileIsCreatingPost')), m('th', flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(translationPrefix + 'anonymousUserProfileIsEnabled')), m('th')])), m('tbody', [anonymousUsers.map(function (rule, index) {
      return m('tr', [m('td', flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_2___default().component({
        options: tagOptions,
        // 下拉选项

        value: rule.tagId ? String(rule.tagId) : '',
        onchange: function onchange(val) {
          rule.tagId = parseInt(val, 10); // 存 ID
          // 立刻保存设置

          _this.setting(anonymousUsersSettingKey)(JSON.stringify(anonymousUsers));
        }
      })), m('td', m('input.FormControl', {
        type: 'number',
        value: rule.userId || '',
        onchange: function onchange(event) {
          rule.userId = event.target.value;
          _this.setting(anonymousUsersSettingKey)(JSON.stringify(anonymousUsers));
        }
      })), m('td', m('input', {
        type: 'checkbox',
        checked: rule.isCreatingDiscussion,
        onchange: function onchange(event) {
          rule.isCreatingDiscussion = event.target.checked;
          _this.setting(anonymousUsersSettingKey)(JSON.stringify(anonymousUsers));
        }
      })), m('td', m('input', {
        type: 'checkbox',
        checked: rule.isCreatingPost,
        onchange: function onchange(event) {
          rule.isCreatingPost = event.target.checked;
          _this.setting(anonymousUsersSettingKey)(JSON.stringify(anonymousUsers));
        }
      })), m('td', m('input', {
        type: 'checkbox',
        checked: rule.isEnabled,
        onchange: function onchange(event) {
          rule.isEnabled = event.target.checked;
          _this.setting(anonymousUsersSettingKey)(JSON.stringify(anonymousUsers));
        }
      })), m('td', flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default().component({
        className: 'Button Button--icon',
        icon: 'fas fa-times',
        onclick: function onclick() {
          anonymousUsers.splice(index, 1);
          _this.setting(anonymousUsersSettingKey)(anonymousUsers.length > 0 ? JSON.stringify(anonymousUsers) : null);
        }
      }))]);
    }), m('tr', m('td', {
      colspan: 5
    }, flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default().component({
      className: 'Button Button--block',
      onclick: function onclick() {
        anonymousUsers.push({
          tagName: '',
          userId: null,
          isCreatingDiscussion: false,
          isCreatingPost: false,
          isEnabled: false
        });
        _this.setting(anonymousUsersSettingKey)(JSON.stringify(anonymousUsers));
      }
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(translationPrefix + 'anonymousUserProfileByTagsAdd'))))])])]);
  }).registerSetting(function () {
    var _this2 = this;
    var avatars;
    try {
      avatars = JSON.parse(this.setting(avatarsSettingKey)());
    } catch (e) {
      // do nothing, we'll reset to something usable
    }

    // @ts-ignore variable used before assignment, it's fine
    if (!Array.isArray(avatars)) {
      avatars = [];
    }
    return m('.Form-group', [m('label', flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(translationPrefix + 'avatars')), m('.helpText', flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(translationPrefix + 'avatarsHelp', {
      a: m('a', {
        href: 'https://kilowhat.net/flarum/extensions/formulaire',
        target: '_blank',
        rel: 'noopener'
      })
    })), m('table', [m('thead', m('tr', [m('th', flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(translationPrefix + 'avatarFormId')), m('th', flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(translationPrefix + 'avatarFieldKey')), m('th', flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(translationPrefix + 'avatarFieldValue')), m('th', flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(translationPrefix + 'avatarAvatarUrl')), m('th')])), m('tbody', [avatars.map(function (sound, index) {
      return m('tr', [m('td', m('input.FormControl', {
        type: 'text',
        value: sound.formId || '',
        onchange: function onchange(event) {
          sound.formId = event.target.value;
          _this2.setting(avatarsSettingKey)(JSON.stringify(avatars));
        }
      })), m('td', m('input.FormControl', {
        type: 'text',
        value: sound.fieldKey || '',
        onchange: function onchange(event) {
          sound.fieldKey = event.target.value;
          _this2.setting(avatarsSettingKey)(JSON.stringify(avatars));
        }
      })), m('td', m('input.FormControl', {
        type: 'text',
        value: sound.fieldValue || '',
        onchange: function onchange(event) {
          sound.fieldValue = event.target.value;
          _this2.setting(avatarsSettingKey)(JSON.stringify(avatars));
        }
      })), m('td', m('input.FormControl', {
        type: 'text',
        value: sound.avatarUrl || '',
        onchange: function onchange(event) {
          sound.avatarUrl = event.target.value;
          _this2.setting(avatarsSettingKey)(JSON.stringify(avatars));
        }
      })), m('td', flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default().component({
        className: 'Button Button--icon',
        icon: 'fas fa-times',
        onclick: function onclick() {
          avatars.splice(index, 1);
          _this2.setting(avatarsSettingKey)(avatars.length > 0 ? JSON.stringify(avatars) : null);
        }
      }))]);
    }), m('tr', m('td', {
      colspan: 5
    }, flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default().component({
      className: 'Button Button--block',
      onclick: function onclick() {
        avatars.push({
          formId: '',
          fieldKey: '',
          fieldValue: '',
          avatarUrl: ''
        });
        _this2.setting(avatarsSettingKey)(JSON.stringify(avatars));
      }
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(translationPrefix + 'avatarAdd'))))])])]);
  }).registerPermission({
    permission: 'anonymous-posting.use',
    icon: 'fas fa-user-secret',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('clarkwinkelmann-anonymous-posting.admin.permissions.use')
  }, 'start').registerPermission({
    permission: 'anonymous-posting.reveal',
    icon: 'fas fa-user-secret',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('clarkwinkelmann-anonymous-posting.admin.permissions.reveal')
  }, 'moderate').registerPermission({
    permission: 'anonymous-posting.moderate',
    icon: 'fas fa-user-secret',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('clarkwinkelmann-anonymous-posting.admin.permissions.moderate')
  }, 'moderate');
});

/***/ }),

/***/ "flarum/admin/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['admin/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/app'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/Select":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Select']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Select'];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./admin.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.ts");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=admin.js.map