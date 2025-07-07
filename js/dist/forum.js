/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forum/index.ts":
/*!****************************!*\
  !*** ./src/forum/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_humanTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/humanTime */ "flarum/common/utils/humanTime");
/* harmony import */ var flarum_common_utils_humanTime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_humanTime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/components/Tooltip */ "flarum/common/components/Tooltip");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_common_models_Post__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/common/models/Post */ "flarum/common/models/Post");
/* harmony import */ var flarum_common_models_Post__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_Post__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! flarum/forum/utils/DiscussionControls */ "flarum/forum/utils/DiscussionControls");
/* harmony import */ var flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var flarum_forum_utils_PostControls__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! flarum/forum/utils/PostControls */ "flarum/forum/utils/PostControls");
/* harmony import */ var flarum_forum_utils_PostControls__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_utils_PostControls__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! flarum/forum/components/CommentPost */ "flarum/forum/components/CommentPost");
/* harmony import */ var flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var flarum_forum_components_Composer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! flarum/forum/components/Composer */ "flarum/forum/components/Composer");
/* harmony import */ var flarum_forum_components_Composer__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_Composer__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! flarum/forum/components/DiscussionComposer */ "flarum/forum/components/DiscussionComposer");
/* harmony import */ var flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var flarum_forum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! flarum/forum/components/ReplyComposer */ "flarum/forum/components/ReplyComposer");
/* harmony import */ var flarum_forum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var flarum_forum_components_PostUser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! flarum/forum/components/PostUser */ "flarum/forum/components/PostUser");
/* harmony import */ var flarum_forum_components_PostUser__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_PostUser__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! flarum/forum/components/DiscussionListItem */ "flarum/forum/components/DiscussionListItem");
/* harmony import */ var flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var flarum_forum_components_ReplyPlaceholder__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! flarum/forum/components/ReplyPlaceholder */ "flarum/forum/components/ReplyPlaceholder");
/* harmony import */ var flarum_forum_components_ReplyPlaceholder__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_ReplyPlaceholder__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var flarum_forum_components_TerminalPost__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! flarum/forum/components/TerminalPost */ "flarum/forum/components/TerminalPost");
/* harmony import */ var flarum_forum_components_TerminalPost__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_TerminalPost__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var flarum_forum_components_PostPreview__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! flarum/forum/components/PostPreview */ "flarum/forum/components/PostPreview");
/* harmony import */ var flarum_forum_components_PostPreview__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_PostPreview__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var flarum_forum_components_PostsUserPage__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! flarum/forum/components/PostsUserPage */ "flarum/forum/components/PostsUserPage");
/* harmony import */ var flarum_forum_components_PostsUserPage__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_PostsUserPage__WEBPACK_IMPORTED_MODULE_22__);

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }






















function extendComposerHeaderItems(items) {
  if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('canAnonymousSwitch')) {
    return;
  }
  var helpText = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('clarkwinkelmann-anonymous-posting.forum.composerControls.anonymizeHelp');
  var helpTextPosition = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('anonymousHelpTextPosition');
  items.add('anonymous-posting', Switch.component({
    className: helpTextPosition === 'visible' ? 'AnonymousCheckbox--multiline' : '',
    state: !!(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer.fields.isAnonymous),
    onchange: function onchange(value) {
      (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer.fields.isAnonymous) = value;
    }
  }, m('span.AnonymousCheckboxLabel', [flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('clarkwinkelmann-anonymous-posting.forum.composerControls.anonymize'), helpTextPosition === 'tooltip' ? [' ', flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_8___default().component({
    text: helpText
  }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_5___default()('fas fa-info-circle', {
    className: 'AnonymousCheckboxInfo'
  }))] : null, helpTextPosition === 'visible' ? m('.helpText', helpText) : null])), -10);
}
function extendComposerData(data) {
  data.isAnonymous = !!(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer.fields.isAnonymous);
}
function extendComposerView(vdom) {
  var _this = this;
  if (!(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer.fields.isAnonymous)) {
    return;
  }
  if (!vdom || !Array.isArray(vdom.children)) {
    return;
  }

  // Loop through <ConfirmDocumentUnload> children
  vdom.children.forEach(function (vdom) {
    if (!vdom || !Array.isArray(vdom.children)) {
      return;
    }

    // Loop through .ComposerBody children
    vdom.children.forEach(function (child, index) {
      if (!child || !child.attrs || !child.attrs.className || child.attrs.className.indexOf('ComposerBody-avatar') === -1) {
        return;
      }
      if ("tags" in (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer.fields)) {
        vdom.children[index] = anonymousAvatar((flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum), '.ComposerBody-avatar', "Discussion", (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer.fields.tags));
      } else if (_this instanceof (flarum_forum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_16___default()) && (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer.body.attrs.discussion.data.relationships) && "tags" in (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer.body.attrs.discussion.data.relationships)) {
        vdom.children[index] = anonymousAvatar((flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum), '.ComposerBody-avatar', "Post", (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer.body.attrs.discussion.data.relationships.tags.data));
      } else {
        vdom.children[index] = anonymousAvatar((flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum), '.ComposerBody-avatar');
      }
    });
  });
}
function getAnonymousProfile(profile) {
  return {
    url: profile.user_avatar_url,
    alt: profile.user_username
  };
}
function anonymousAvatar(post, className, composerType, selectedTags) {
  if (className === void 0) {
    className = '';
  }
  var anonymousAvatarUrl = post.attribute('anonymousAvatarUrl');
  var allTags = post.attribute('anonymousImposters');
  var imageSrc = processDisplayAvatar(anonymousAvatarUrl, composerType, allTags, selectedTags);
  if (imageSrc) {
    if (imageSrc.url) {
      return m('img.Avatar.Avatar--anonymous' + className, {
        src: imageSrc.url,
        alt: imageSrc.alt
      });
    } else {
      return m('span.Avatar ComposerBody-avatar' + className, {
        alt: imageSrc.alt,
        style: '--avatar-bg: #a0e5b3;'
      }, imageSrc.alt.charAt(0).toUpperCase());
    }
  }
  return m('span.Avatar.Avatar--anonymous' + className, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('clarkwinkelmann-anonymous-posting.lib.userMeta.initials'));
}
function processDisplayAvatar(anonymousAvatarUrl, composerType, allTags, selectedTags) {
  var imageSrc = null;
  if (selectedTags && allTags && composerType in allTags) {
    var composerTypeTags = allTags[composerType];
    for (var _iterator = _createForOfIteratorHelperLoose(selectedTags), _step; !(_step = _iterator()).done;) {
      var tag = _step.value;
      /* Different structure for Post and Discussion
       * .type = Post
       * .data.type = Discussion
       */
      var tagId = tag.type == "tags" ? tag.id : tag.data.type == "tags" ? Number(tag.data.id) : null;
      if (tagId in composerTypeTags) {
        imageSrc = getAnonymousProfile(composerTypeTags[tagId]);
        break;
      }
    }
    ;
  }
  if (imageSrc == null && anonymousAvatarUrl) {
    imageSrc = {
      url: anonymousAvatarUrl,
      alt: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('clarkwinkelmann-anonymous-posting.lib.userMeta.username')
    };
  }
  return imageSrc;
}
function processDisplayName(post, selectedTags) {
  var allTags = post.attribute('anonymousImposters');
  if (selectedTags && allTags && 'Post' in allTags) {
    var composerTypeTags = allTags['Post'];
    for (var _iterator2 = _createForOfIteratorHelperLoose(selectedTags), _step2; !(_step2 = _iterator2()).done;) {
      var tag = _step2.value;
      var tagId = tag.id;
      if (tagId in composerTypeTags) {
        return getAnonymousProfile(composerTypeTags[tagId]).alt;
      }
    }
    ;
  }
  return flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('clarkwinkelmann-anonymous-posting.lib.userMeta.username');
}
flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().initializers.add('anonymous-posting', function () {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__.extend)((flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_13___default().prototype), 'headerItems', function (items) {
    var _this2 = this;
    var post = this.attrs.post;
    if (!post.attribute('isAnonymous')) {
      return;
    }
    items.setContent('user', m('.PostUser', m('h3', [anonymousAvatar(post, '.PostUser-avatar'), m('span.username', flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('clarkwinkelmann-anonymous-posting.lib.userMeta.username'))])));
    var anonymousUser = flarum_common_Model__WEBPACK_IMPORTED_MODULE_9___default().hasOne('anonymousUser').call(post);
    if (!anonymousUser) {
      if (!post.attribute('isAnonymousMe')) {
        return;
      }
      var className = '.AnonymousPostPrivacyMine';
      var tooltipText = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('clarkwinkelmann-anonymous-posting.forum.postPrivacy.mineHelp');
      var labelText = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('clarkwinkelmann-anonymous-posting.forum.postPrivacy.mine');
      if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().current.matches((flarum_forum_components_PostsUserPage__WEBPACK_IMPORTED_MODULE_22___default()))) {
        className = '.AnonymousPostPrivacyProfile';
        tooltipText = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('clarkwinkelmann-anonymous-posting.forum.postPrivacy.profileHelp');
        labelText = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('clarkwinkelmann-anonymous-posting.forum.postPrivacy.profile');
      }
      items.add('anonymousUserPrivacy', flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_8___default().component({
        text: tooltipText
      }, m('span.AnonymousPostPrivacy' + className, labelText)), 90 // Just after the original user label
      );

      return;
    }

    // Provide an altered post object that the PostUser component can read the user from
    var alteredPost = new (flarum_common_models_Post__WEBPACK_IMPORTED_MODULE_10___default())((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, post.data, {
      relationships: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, post.data.relationships, {
        user: post.data.relationships.anonymousUser
      })
    }));
    items.add('anonymousUser', flarum_forum_components_PostUser__WEBPACK_IMPORTED_MODULE_17___default().component({
      post: alteredPost,
      cardVisible: this.cardVisible,
      oncardshow: function oncardshow() {
        _this2.cardVisible = true;
        m.redraw();
      },
      oncardhide: function oncardhide() {
        _this2.cardVisible = false;
        m.redraw();
      }
    }), 90 // Just after the original user label
    );
  });

  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__.extend)((flarum_forum_components_ReplyPlaceholder__WEBPACK_IMPORTED_MODULE_19___default().prototype), 'view', function (vdom0) {
    if (!(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer.fields.isAnonymous)) {
      return;
    }
    if (!vdom0 || !Array.isArray(vdom0.children)) {
      return;
    }

    // Loop through .Post children
    vdom0.children.forEach(function (vdom1) {
      if (!vdom1 || !Array.isArray(vdom1.children)) {
        return;
      }

      // Loop through .Post-header children
      vdom1.children.forEach(function (vdom2) {
        if (!vdom2 || !Array.isArray(vdom2.children)) {
          return;
        }

        // Loop through .PostUser children
        vdom2.children.forEach(function (vdom3, index3) {
          if (!vdom3 || !Array.isArray(vdom3.children)) {
            return;
          }

          // Loop through <h3> children
          vdom3.children.forEach(function (child, index) {
            if (!child || !child.attrs || !child.attrs.className) {
              return;
            }

            // Replace preview avatar
            if (child.attrs.className.indexOf('PostUser-avatar') !== -1) {
              if ((flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer.body.attrs.discussion.data.relationships) && "tags" in (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer.body.attrs.discussion.data.relationships)) {
                // Replace preview avatar with specific tags settings
                vdom3.children[index] = anonymousAvatar((flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum), '.PostUser-avatar', "Post", (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer.body.attrs.discussion.data.relationships.tags.data));
              } else {
                vdom3.children[index] = anonymousAvatar((flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum), '.PostUser-avatar');
              }
            }

            // Replace preview username
            if (child.attrs.className === 'username') {
              if ((flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer.body.attrs.discussion.data.relationships) && "tags" in (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer.body.attrs.discussion.data.relationships)) {
                // Replace preview display name with specific tags settings
                child.text = processDisplayName((flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum), (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer.body.attrs.discussion.data.relationships.tags.data));
              } else {
                child.text = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('clarkwinkelmann-anonymous-posting.lib.userMeta.username');
              }
            }
          });

          // Remove ul.PostUser-badges which would show the actor's badges
          if (vdom3.attrs && vdom3.attrs.className && vdom3.attrs.className.indexOf('PostUser-badges') !== -1) {
            vdom2.children.splice(index3, 1);
          }
        });
      });
    });
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__.extend)((flarum_forum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_18___default().prototype), 'view', function (vdom) {
    // @ts-ignore
    var discussion = this.attrs.discussion;
    if (!discussion.attribute('isAnonymous')) {
      return;
    }
    vdom.children.forEach(function (vdom) {
      if (!vdom || !vdom.attrs || !vdom.attrs.className || vdom.attrs.className.indexOf('DiscussionListItem-content') === -1) {
        return;
      }
      vdom.children.forEach(function (vdom) {
        if (!vdom || vdom.tag !== (flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_8___default())) {
          return;
        }
        vdom.attrs.text = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('core.forum.discussion_list.started_text', {
          username: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('clarkwinkelmann-anonymous-posting.lib.userMeta.username'),
          ago: flarum_common_utils_humanTime__WEBPACK_IMPORTED_MODULE_3___default()(discussion.createdAt())
        });
        vdom.children.forEach(function (vdom) {
          if (!vdom || vdom.tag !== (flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_7___default())) {
            return;
          }
          vdom.children = [anonymousAvatar(discussion)];
        });
      });
    });
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__.extend)((flarum_forum_components_PostPreview__WEBPACK_IMPORTED_MODULE_21___default().prototype), 'view', function (vdom) {
    var _this3 = this;
    if (!this.attrs.post.attribute('isAnonymous')) {
      return;
    }
    vdom.children.forEach(function (preview) {
      if (!preview || !preview.attrs || !preview.attrs.className || preview.attrs.className.indexOf('PostPreview-content') === -1) {
        return;
      }
      preview.children.forEach(function (child, index) {
        if (child && child.attrs && child.attrs.className && child.attrs.className.indexOf('Avatar') === 0) {
          preview.children.splice(index, 1, anonymousAvatar(_this3.attrs.post));
        }
      });
    });
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__.override)((flarum_forum_components_TerminalPost__WEBPACK_IMPORTED_MODULE_20___default().prototype), 'view', function (original) {
    var discussion = this.attrs.discussion;
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (this.attrs.lastPost && discussion.replyCount()) {
      if (discussion.lastPostedUser()) {
        return original.apply(void 0, args);
      }

      // Loading discussion.lastPost for the sole purpose of getting post.isAnonymous would be detrimental to performance
      // Instead we'll replace all "[deleted] replied" texts with a generic message that doesn't include a username

      return m('span', [flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_5___default()('fas fa-reply'), ' ', flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('clarkwinkelmann-anonymous-posting.forum.discussionList.genericReplyText', {
        ago: flarum_common_utils_humanTime__WEBPACK_IMPORTED_MODULE_3___default()(discussion.lastPostedAt())
      })]);
    }
    if (!discussion.attribute('isAnonymous')) {
      return original.apply(void 0, args);
    }
    return m('span', ['',
    // Keep output the same as original method to maximise compatibility with other extensions
    ' ', flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('core.forum.discussion_list.started_text', {
      username: m('span.username', flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('clarkwinkelmann-anonymous-posting.lib.userMeta.username')),
      ago: flarum_common_utils_humanTime__WEBPACK_IMPORTED_MODULE_3___default()(discussion.createdAt())
    })]);
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__.extend)((flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_13___default().prototype), 'oninit', function () {
    var _this4 = this;
    this.subtree.check(function () {
      return _this4.attrs.post.attribute('isAnonymous');
    });
  });
  function getRules() {
    var arr = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('anonymousUsers') || [];
    var map = {};
    if (!Array.isArray(arr)) return map;
    arr.forEach(function (r) {
      var id = null;
      if (typeof r.tagId === 'number') {
        id = r.tagId;
      } else if (typeof r.tagName === 'string') {
        // 根据 tagName 找到对应模型
        var tag = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store.all('tags').find(function (t) {
          return t.name() === r.tagName;
        });
        if (tag) id = Number(tag.id());
      }
      if (id !== null && typeof r.userId === 'string') {
        map[id] = Number(r.userId);
      }
    });
    return map;
  }
  function getSelectedTagIds(ctx) {
    var _app$composer$fields, _ctx$composer, _ctx$composer$body, _ctx$composer$body$at, _ctx$composer$body$at2, _ctx$composer$body$at3, _ctx$composer$body$at4, _ctx$composer$body$at5;
    // DiscussionComposer：this.tags 是 Stream<Tag[]> (函数)，要调用再取数组
    if (ctx.tags && typeof ctx.tags === 'function') {
      return ctx.tags().map(function (t) {
        return Number(t.id());
      });
    }

    // （保持原来那段，用于 ReplyComposer 场景）
    if ((_app$composer$fields = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer.fields)) != null && _app$composer$fields.tags && (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer.fields.tags.map)) {
      return flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer.fields.tags.map(function (t) {
        return Number(t.id());
      });
    }

    // ② 回帖：标签从原讨论 relationships.tags 里拿
    if (ctx instanceof (flarum_forum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_16___default()) && (_ctx$composer = ctx.composer) != null && (_ctx$composer$body = _ctx$composer.body) != null && (_ctx$composer$body$at = _ctx$composer$body.attrs) != null && (_ctx$composer$body$at2 = _ctx$composer$body$at.discussion) != null && (_ctx$composer$body$at3 = _ctx$composer$body$at2.data) != null && (_ctx$composer$body$at4 = _ctx$composer$body$at3.relationships) != null && (_ctx$composer$body$at5 = _ctx$composer$body$at4.tags) != null && _ctx$composer$body$at5.data) {
      return ctx.composer.body.attrs.discussion.data.relationships.tags.data.map(function (t) {
        return Number(t.id);
      });
    }

    // ③ 兜底：如果组件自身有 this.tags（旧代码路径）
    if (ctx.tags) {
      return ctx.tags.map(function (t) {
        return Number(t.id());
      });
    }
    return [];
  }
  function shouldBeAnonymous(tagIds) {
    var rules = getRules(); //  每次最新读取

    var hasEnable = false; // 是否命中 ≥0

    for (var _iterator3 = _createForOfIteratorHelperLoose(tagIds), _step3; !(_step3 = _iterator3()).done;) {
      var id = _step3.value;
      var mode = rules[id];
      if (mode === undefined) continue;
      if (mode >= 0) hasEnable = true; // 标记可匿名
    }

    return hasEnable; // 只要存在 ≥0 就匿名；否则不匿名
  }

  [(flarum_forum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_15___default()), (flarum_forum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_16___default())].forEach(function (Composer) {
    // ① 初始化与 tag 变动时重算
    (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__.extend)(Composer.prototype, 'oninit', function () {
      var _this5 = this,
        _app$composer$fields2;
      var update = function update() {
        var _app$composer;
        var tagIds = getSelectedTagIds(_this5);
        var anon = shouldBeAnonymous(tagIds);
        _this5.isAnonymous = anon;
        if ((_app$composer = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer)) != null && _app$composer.fields) (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer.fields.isAnonymous) = anon;
      };
      update(); // 首次

      if (this.tags && this.tags.map) {
        this.tags.map(function () {
          update();
          m.redraw(); // 重新渲染
        });
      }
      // ② 监听 app.composer.fields.tags (DiscussionComposer 场景)
      if ((_app$composer$fields2 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer.fields)) != null && _app$composer$fields2.tags && (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer.fields.tags.map)) {
        flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer.fields.tags.map(function () {
          var _app$composer$body, _app$composer$body$at;
          update();
          if ((_app$composer$body = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer.body)) != null && (_app$composer$body$at = _app$composer$body.attrs) != null && _app$composer$body$at.composer) m.redraw();else m.redraw(); // fallback，桌面/移动都刷新
        });
      }
    });

    (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__.extend)(Composer.prototype, 'onupdate', function () {
      var _app$composer2;
      // 每次重绘都再算一次匿名状态
      var tagIds = getSelectedTagIds(this);
      var anon = shouldBeAnonymous(tagIds);
      this.isAnonymous = anon;
      if ((_app$composer2 = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer)) != null && _app$composer2.fields) (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer.fields.isAnonymous) = anon;
    });

    // ② 拿掉旧 toggle
    (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__.extend)(Composer.prototype, 'headerItems', function (items) {
      items.remove('anonymous'); // 保守：确保旧开关彻底消失
      console.log('headerItems', this.isAnonymous);
      // 如果当前帖子会匿名 ⇒ 显示徽章
      if (this.isAnonymous) {
        items.add('anonymous-indicator', m('span.AnonIndicator', [m('i.fas.fa-user-secret'),
        // font-awesome 图标
        m('span', {
          style: {
            marginLeft: '6px'
          }
        }, '已匿名')]), -5 // 放在最左边（数值比其他 header item 小）
        );
      }
    });

    // ③ 保存时确保写入 isAnonymous；支持 imposter
    (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__.extend)(Composer.prototype, 'data', function (data) {
      var tagIds = getSelectedTagIds(this);
      var anon = shouldBeAnonymous(tagIds);
      data.isAnonymous = anon;
      if (anon) {
        var map = getRules();
        var imposterId = tagIds.find(function (id) {
          return map[id] > 0;
        });
        if (imposterId) {
          data.relationships = data.relationships || {};
          data.relationships.user = {
            data: {
              type: 'users',
              id: String(map[imposterId])
            }
          };
        }
      }
    });
  });
  /* ---------- end tag-based auto-anonymous ---------- */

  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__.extend)((flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_11___default()), 'moderationControls', function (items, discussion) {
    if (discussion.attribute('canDeAnonymize')) {
      items.add('deanonymize', flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6___default().component({
        icon: 'fas fa-user-secret',
        onclick: function onclick() {
          if (!confirm(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('clarkwinkelmann-anonymous-posting.forum.discussionControls.deanonymizeConfirmation')))) {
            return;
          }
          discussion.save({
            isAnonymous: false
          }).then(function () {
            m.redraw();
          });
        }
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('clarkwinkelmann-anonymous-posting.forum.discussionControls.deanonymize')));
    }
    if (discussion.attribute('canAnonymize')) {
      items.add('anonymize', flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6___default().component({
        icon: 'fas fa-user-secret',
        onclick: function onclick() {
          if (!confirm(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('clarkwinkelmann-anonymous-posting.forum.discussionControls.anonymizeConfirmation')))) {
            return;
          }
          discussion.save({
            isAnonymous: true
          }).then(function () {
            m.redraw();
          });
        }
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('clarkwinkelmann-anonymous-posting.forum.discussionControls.anonymize')));
    }
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__.extend)((flarum_forum_utils_PostControls__WEBPACK_IMPORTED_MODULE_12___default()), 'moderationControls', function (items, post) {
    if (post.attribute('canDeAnonymize')) {
      items.add('deanonymize', flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6___default().component({
        icon: 'fas fa-user-secret',
        onclick: function onclick() {
          if (!confirm(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('clarkwinkelmann-anonymous-posting.forum.postControls.deanonymizeConfirmation')))) {
            return;
          }
          post.save({
            isAnonymous: false
          }).then(function () {
            m.redraw();
          });
        }
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('clarkwinkelmann-anonymous-posting.forum.postControls.deanonymize')));
    }
    if (post.attribute('canAnonymize')) {
      items.add('anonymize', flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_6___default().component({
        icon: 'fas fa-user-secret',
        onclick: function onclick() {
          if (post.number() === 1) {
            if (!confirm(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_4___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('clarkwinkelmann-anonymous-posting.forum.postControls.firstPostConfirmation')))) {
              return;
            }
          }
          post.save({
            isAnonymous: true
          }).then(function () {
            m.redraw();
          });
        }
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('clarkwinkelmann-anonymous-posting.forum.postControls.anonymize')));
    }
  });

  // Flarum will try to focus the checkbox in ReplyComposer instead of the body. To work around this, we'll temporarily disable the field while this method runs
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__.override)((flarum_forum_components_Composer__WEBPACK_IMPORTED_MODULE_14___default().prototype), 'focus', function (original) {
    var $anonymousCheckbox = this.$('.item-anonymous-posting input');
    $anonymousCheckbox.prop('disabled', true);
    var returnValue = original();
    $anonymousCheckbox.prop('disabled', false);
    return returnValue;
  });
});

/***/ }),

/***/ "flarum/common/Model":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['common/Model']" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Model'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/Link":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/components/Link']" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Link'];

/***/ }),

/***/ "flarum/common/components/Tooltip":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['common/components/Tooltip']" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Tooltip'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/helpers/icon":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/icon']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/icon'];

/***/ }),

/***/ "flarum/common/models/Post":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['common/models/Post']" ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/models/Post'];

/***/ }),

/***/ "flarum/common/utils/extractText":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/utils/extractText']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/extractText'];

/***/ }),

/***/ "flarum/common/utils/humanTime":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/utils/humanTime']" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/humanTime'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/CommentPost":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/CommentPost']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/CommentPost'];

/***/ }),

/***/ "flarum/forum/components/Composer":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/Composer']" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/Composer'];

/***/ }),

/***/ "flarum/forum/components/DiscussionComposer":
/*!****************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/DiscussionComposer']" ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/DiscussionComposer'];

/***/ }),

/***/ "flarum/forum/components/DiscussionListItem":
/*!****************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/DiscussionListItem']" ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/DiscussionListItem'];

/***/ }),

/***/ "flarum/forum/components/PostPreview":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/PostPreview']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/PostPreview'];

/***/ }),

/***/ "flarum/forum/components/PostUser":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/PostUser']" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/PostUser'];

/***/ }),

/***/ "flarum/forum/components/PostsUserPage":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/PostsUserPage']" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/PostsUserPage'];

/***/ }),

/***/ "flarum/forum/components/ReplyComposer":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/ReplyComposer']" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/ReplyComposer'];

/***/ }),

/***/ "flarum/forum/components/ReplyPlaceholder":
/*!**************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/ReplyPlaceholder']" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/ReplyPlaceholder'];

/***/ }),

/***/ "flarum/forum/components/TerminalPost":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/TerminalPost']" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/TerminalPost'];

/***/ }),

/***/ "flarum/forum/utils/DiscussionControls":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['forum/utils/DiscussionControls']" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/utils/DiscussionControls'];

/***/ }),

/***/ "flarum/forum/utils/PostControls":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['forum/utils/PostControls']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/utils/PostControls'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

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
  !*** ./forum.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.ts");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map