import app from 'flarum/forum/app';
import { extend, override} from 'flarum/common/extend';
import humanTime from 'flarum/common/utils/humanTime';
import extractText from 'flarum/common/utils/extractText';
import ItemList from 'flarum/common/utils/ItemList';
import icon from 'flarum/common/helpers/icon';
import Button from 'flarum/common/components/Button';
import Link from 'flarum/common/components/Link';
import Tooltip from 'flarum/common/components/Tooltip';
import Model from 'flarum/common/Model';
import Discussion from 'flarum/common/models/Discussion';
import Post from 'flarum/common/models/Post';
import Forum from 'flarum/common/models/Forum';
import User from 'flarum/common/models/User';
import DiscussionControls from 'flarum/forum/utils/DiscussionControls';
import PostControls from 'flarum/forum/utils/PostControls';
import CommentPost from 'flarum/forum/components/CommentPost';
import Composer from 'flarum/forum/components/Composer';
import DiscussionComposer from 'flarum/forum/components/DiscussionComposer';
import ReplyComposer from 'flarum/forum/components/ReplyComposer';
import PostUser from 'flarum/forum/components/PostUser';
import DiscussionListItem from 'flarum/forum/components/DiscussionListItem';
import ReplyPlaceholder from 'flarum/forum/components/ReplyPlaceholder';
import TerminalPost from 'flarum/forum/components/TerminalPost';
import PostPreview from 'flarum/forum/components/PostPreview';
import PostsUserPage from 'flarum/forum/components/PostsUserPage';



function extendComposerHeaderItems(this: DiscussionComposer | ReplyComposer, items: ItemList<any>) {

    const helpText = app.translator.trans('clarkwinkelmann-anonymous-posting.forum.composerControls.anonymizeHelp');
    const helpTextPosition = app.forum.attribute('anonymousHelpTextPosition');

    items.add('anonymous-posting', Switch.component({
        className: helpTextPosition === 'visible' ? 'AnonymousCheckbox--multiline' : '',
        state: !!app.composer.fields!.isAnonymous,
        onchange: (value: boolean) => {
            app.composer.fields!.isAnonymous = value;
        },
    }, m('span.AnonymousCheckboxLabel', [
        app.translator.trans('clarkwinkelmann-anonymous-posting.forum.composerControls.anonymize'),
        helpTextPosition === 'tooltip' ? [' ', Tooltip.component({
            text: helpText,
        }, icon('fas fa-info-circle', {
            className: 'AnonymousCheckboxInfo',
        }))] : null,
        helpTextPosition === 'visible' ? m('.helpText', helpText) : null,
    ])), -10);
}

function extendComposerData(this: DiscussionComposer | ReplyComposer, data: any) {
    data.isAnonymous = !!app.composer.fields!.isAnonymous;
}

function extendComposerView(this: DiscussionComposer | ReplyComposer, vdom: any) {
  
    if (!vdom || !Array.isArray(vdom.children)) {
        return;
    }

    // Loop through <ConfirmDocumentUnload> children
    vdom.children.forEach(vdom => {
        if (!vdom || !Array.isArray(vdom.children)) {
            return;
        }

        // Loop through .ComposerBody children
        vdom.children.forEach((child, index) => {
             // ========== Composer 左侧头像 ==========
  const tagIds = getSelectedTagIds(this);
  const composerType = this instanceof DiscussionComposer ? 'Discussion' : 'Post';
  let selectedTags: any[] = [];

  if (composerType === 'Discussion' && app.composer.fields?.tags) {
    selectedTags = app.composer.fields.tags;
  } else if (
    composerType === 'Post' &&
    this.composer?.body?.attrs?.discussion?.data?.relationships?.tags?.data
  ) {
    selectedTags = this.composer.body.attrs.discussion.data.relationships.tags.data;
  }

  const anonVNode = anonymousAvatar(app.forum, '', composerType, selectedTags);
  

  if (anonVNode && anonVNode.attrs && anonVNode.attrs.src) {
    child.attrs.src = anonVNode.attrs.src;
    child.attrs.alt = anonVNode.attrs.alt;
    child.attrs.className += ' Avatar--anonymous';
  }
        });
    });
}

function getAnonymousProfile(profile: { [key: string]: any }) {
    return {
        url: profile.user_avatar_url,
        alt: profile.user_username,
    };
}

function anonymousAvatar(post, className = '', thirdArg: any = [],
  fourthArg: any[] = []) {
     // ---- 参数兼容层 ----
  let tagIds: number[] = [];
  let composerType: 'Discussion' | 'Post' = 'Discussion';
  let selectedTags: any[] = [];

  if (Array.isArray(thirdArg)) {
    // 新写法：anonymousAvatar(post, cls, tagIds)
    tagIds = thirdArg;
  } else {
    // 旧写法：anonymousAvatar(post, cls, composerType, selectedTags)
    composerType = thirdArg;
    selectedTags = fourthArg;
    // 把 selectedTags 转成 id 数组供后面复用
    tagIds = selectedTags.map((t: any) =>
      typeof t.id === 'function' ? Number(t.id()) : Number(t.id)
    );
  }
    const anonymousAvatarUrl = post.attribute('anonymousAvatarUrl');
    const imposters          = post.attribute('anonymousImposters') || {};
   /* ---------- 1. tag-specific imposter ---------- */
    let imageSrc: { url?: string; alt: string } | null = null;

    tagIds.forEach((id) => {
    if (imposters[id]) {
      imageSrc = {
        url: imposters[id].user_avatar_url,
        alt: imposters[id].user_username,
      };
     }
    });
    // fallback：通用匿名头像
    if (!imageSrc && anonymousAvatarUrl) {
    imageSrc = {
      url: anonymousAvatarUrl,
      alt: app.translator.trans(
        'clarkwinkelmann-anonymous-posting.lib.userMeta.username'
      ),
    };
  }
 /* ---------- 3. 渲染 ---------- */
  if (imageSrc) {
    if (imageSrc.url) {
      return m('img.Avatar.Avatar--anonymous' + className, {
        src: imageSrc.url,
        alt: imageSrc.alt,
      });
    }

    return m(
      'span.Avatar.Avatar--anonymous' + className,
      {
        alt: imageSrc.alt,
        style: '--avatar-bg:#D52B1E',
      },
      imageSrc.alt.charAt(0).toUpperCase()
    );
  }

  /* ---------- 4. 最后兜底：缩写字母 ---------- */
  return m(
    'span.Avatar.Avatar--anonymous' + className,
    app.translator.trans(
      'clarkwinkelmann-anonymous-posting.lib.userMeta.initials'
    )
  );
}

function processDisplayAvatar(anonymousAvatarUrl, composerType, allTags, selectedTags) {
    var imageSrc = null;
    if (selectedTags && allTags && composerType in allTags) {
        var composerTypeTags = allTags[composerType];
        for (const tag of selectedTags) {
            /* Different structure for Post and Discussion
             * .type = Post
             * .data.type = Discussion
             */
            var tagId = tag.type == "tags"? tag.id: (tag.data.type == "tags"? Number(tag.data.id): null);
            if (tagId in composerTypeTags) {
                imageSrc = getAnonymousProfile(composerTypeTags[tagId]);
                break;
            }
        }; 
    }
    if (imageSrc == null && anonymousAvatarUrl) {
        imageSrc = {
            url: anonymousAvatarUrl,
            alt: app.translator.trans('clarkwinkelmann-anonymous-posting.lib.userMeta.username'),
        };
    }
    return imageSrc;
}

function processDisplayName(post, selectedTags) {
    const allTags = post.attribute('anonymousImposters');
    if (selectedTags && allTags && 'Post' in allTags) {
        var composerTypeTags = allTags['Post'];
        for (const tag of selectedTags) {
            var tagId = tag.id;
            if (tagId in composerTypeTags) {
                return getAnonymousProfile(composerTypeTags[tagId]).alt;
            }
        }; 
    }
    return app.translator.trans('clarkwinkelmann-anonymous-posting.lib.userMeta.username');
}

app.initializers.add('anonymous-posting', () => {
    extend(CommentPost.prototype, 'headerItems', function (items) {
        const {post} = this.attrs;

        if (!post.attribute('isAnonymous')) {
            return;
        }

        items.setContent('user', m('.PostUser', m('h3', [
            anonymousAvatar(post, '.PostUser-avatar'),
            m('span.username', app.translator.trans('clarkwinkelmann-anonymous-posting.lib.userMeta.username')),
        ])));

        const anonymousUser = Model.hasOne<User>('anonymousUser').call(post);

        if (!anonymousUser) {
            if (!post.attribute('isAnonymousMe')) {
                return;
            }

            let className = '.AnonymousPostPrivacyMine';
            let tooltipText = app.translator.trans('clarkwinkelmann-anonymous-posting.forum.postPrivacy.mineHelp');
            let labelText = app.translator.trans('clarkwinkelmann-anonymous-posting.forum.postPrivacy.mine');

            if (app.current.matches(PostsUserPage)) {
                className = '.AnonymousPostPrivacyProfile';
                tooltipText = app.translator.trans('clarkwinkelmann-anonymous-posting.forum.postPrivacy.profileHelp');
                labelText = app.translator.trans('clarkwinkelmann-anonymous-posting.forum.postPrivacy.profile');
            }

            items.add(
                'anonymousUserPrivacy',
                Tooltip.component({
                    text: tooltipText,
                }, m('span.AnonymousPostPrivacy' + className, labelText)),
                90 // Just after the original user label
            );

            return;
        }

        // Provide an altered post object that the PostUser component can read the user from
        const alteredPost = new Post({
            ...post.data,
            relationships: {
                ...post.data.relationships,
                user: post.data.relationships!.anonymousUser,
            },
        });

        items.add(
            'anonymousUser',
            PostUser.component({
                post: alteredPost,
                cardVisible: this.cardVisible,
                oncardshow: () => {
                    this.cardVisible = true;
                    m.redraw();
                },
                oncardhide: () => {
                    this.cardVisible = false;
                    m.redraw();
                },
            }),
            90 // Just after the original user label
        );
    });

    extend(ReplyPlaceholder.prototype, 'view', function (vdom0) {
        if (!app.composer.fields!.isAnonymous) {
            return;
        }

        if (!vdom0 || !Array.isArray(vdom0.children)) {
            return;
        }

        // Loop through .Post children
        vdom0.children.forEach(vdom1 => {
            if (!vdom1 || !Array.isArray(vdom1.children)) {
                return;
            }

            // Loop through .Post-header children
            vdom1.children.forEach((vdom2) => {
                if (!vdom2 || !Array.isArray(vdom2.children)) {
                    return;
                }

                // Loop through .PostUser children
                vdom2.children.forEach((vdom3, index3) => {
                    if (!vdom3 || !Array.isArray(vdom3.children)) {
                        return;
                    }

                    // Loop through <h3> children
                    vdom3.children.forEach((child, index) => {
                        if (!child || !child.attrs || !child.attrs.className) {
                            return;
                        }

                        // Replace preview avatar
                        if (child.attrs.className.indexOf('Avatar') !== -1) {
                           // ① 先算 tagIds（无标签时就是 []）
                          const tagIds =
                          (app.composer.body.attrs.discussion.data.relationships.tags.data || [])
                          .map((t: any) => Number(t.id));

                        // ② 不再传 "Post" & tags 数组，而是只传 tagIds
                        vdom3.children[index] = anonymousAvatar(
                        app.forum,
                       '.PostUser-avatar',
                       tagIds
                        );
                       }

                        // Replace preview username
                        if (child.attrs.className === 'username') {
                            if (app.composer.body.attrs.discussion.data.relationships && "tags" in app.composer.body.attrs.discussion.data.relationships) {
                                // Replace preview display name with specific tags settings
                                child.text = processDisplayName(app.forum, app.composer.body.attrs.discussion.data.relationships.tags.data);
                            } else {
                                child.text = app.translator.trans('clarkwinkelmann-anonymous-posting.lib.userMeta.username');
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

    extend(DiscussionListItem.prototype, 'view', function (vdom) {
        // @ts-ignore
        const discussion = this.attrs.discussion as Discussion;

        if (!discussion.attribute('isAnonymous')) {
            return;
        }

        vdom.children.forEach(vdom => {
            if (!vdom || !vdom.attrs || !vdom.attrs.className || vdom.attrs.className.indexOf('DiscussionListItem-content') === -1) {
                return;
            }

            vdom.children.forEach(vdom => {
                if (!vdom || vdom.tag !== Tooltip) {
                    return;
                }

                vdom.attrs.text = app.translator.trans('core.forum.discussion_list.started_text', {
                    username: app.translator.trans('clarkwinkelmann-anonymous-posting.lib.userMeta.username'),
                    ago: humanTime(discussion.createdAt()),
                });

                vdom.children.forEach(vdom => {
                    if (!vdom || vdom.tag !== Link) {
                        return;
                    }

                    vdom.children = [
                        anonymousAvatar(discussion),
                    ];
                });
            });
        });
    });

    extend(PostPreview.prototype, 'view', function (vdom) {
        if (!this.attrs.post.attribute('isAnonymous')) {
            return;
        }

        vdom.children.forEach(preview => {
            if (!preview || !preview.attrs || !preview.attrs.className || preview.attrs.className.indexOf('PostPreview-content') === -1) {
                return;
            }

            preview.children.forEach((child, index) => {
                if (child && child.attrs && child.attrs.className && child.attrs.className.indexOf('Avatar') === 0) {
                    preview.children.splice(index, 1, anonymousAvatar(this.attrs.post));
                }
            });
        });
    });

    override(TerminalPost.prototype, 'view', function (original, ...args) {
        const discussion = this.attrs.discussion;

        if (this.attrs.lastPost && discussion.replyCount()) {
            if (discussion.lastPostedUser()) {
                return original(...args);
            }

            // Loading discussion.lastPost for the sole purpose of getting post.isAnonymous would be detrimental to performance
            // Instead we'll replace all "[deleted] replied" texts with a generic message that doesn't include a username

            return m('span', [
                icon('fas fa-reply'),
                ' ',
                app.translator.trans('clarkwinkelmann-anonymous-posting.forum.discussionList.genericReplyText', {
                    ago: humanTime(discussion.lastPostedAt()),
                }),
            ]);
        }

        if (!discussion.attribute('isAnonymous')) {
            return original(...args);
        }

        return m('span', [
            '', // Keep output the same as original method to maximise compatibility with other extensions
            ' ',
            app.translator.trans('core.forum.discussion_list.started_text', {
                username: m('span.username', app.translator.trans('clarkwinkelmann-anonymous-posting.lib.userMeta.username')),
                ago: humanTime(discussion.createdAt()),
            }),
        ]);
    });

    extend(CommentPost.prototype, 'oninit', function () {
        this.subtree!.check(() => {
            return this.attrs.post.attribute('isAnonymous');
        });
    });
    
  function getRules(): Record<number, number> {
  const arr = app.forum.attribute('anonymousUsers') || [];
  const map: Record<number, number> = {};

  if (!Array.isArray(arr)) return map;

  arr.forEach((r: any) => {
    let id: number | null = null;

    if (typeof r.tagId === 'number') {
      id = r.tagId;
    } else if (typeof r.tagName === 'string') {
      // 根据 tagName 找到对应模型
      const tag = app.store.all('tags').find((t: any) => t.name() === r.tagName);
      if (tag) id = Number(tag.id());
    }

    if (id !== null && typeof r.userId === 'string') {
      map[id] = Number(r.userId);
    }
  });

  return map;
}
function getSelectedTagIds(ctx: any): number[] {

 // DiscussionComposer：this.tags 是 Stream<Tag[]> (函数)，要调用再取数组
if (ctx.tags && typeof ctx.tags === 'function') {
  return ctx.tags().map((t: any) => Number(t.id()));
}

// （保持原来那段，用于 ReplyComposer 场景）
if (app.composer.fields?.tags && app.composer.fields.tags.map) {
  return app.composer.fields.tags.map((t: any) => Number(t.id()));
}

  // ② 回帖：标签从原讨论 relationships.tags 里拿
  if (
    ctx instanceof ReplyComposer &&
    ctx.composer?.body?.attrs?.discussion?.data?.relationships?.tags?.data
  ) {
    return ctx.composer.body.attrs.discussion.data.relationships.tags.data.map(
      (t: any) => Number(t.id)
    );
  }

  // ③ 兜底：如果组件自身有 this.tags（旧代码路径）
  if (ctx.tags) {
    return (ctx.tags as any[]).map((t) => Number(t.id()));
  }

  return [];
}
  function shouldBeAnonymous(tagIds: number[]) {
  const rules = getRules();           //  每次最新读取

   let hasEnable = false;   // 是否命中 ≥0

  for (const id of tagIds) {
    const mode = rules[id];
    if (mode === undefined) continue;

    if (mode >= 0) hasEnable = true;  // 标记可匿名
  }

  return hasEnable;        // 只要存在 ≥0 就匿名；否则不匿名
}

  [DiscussionComposer, ReplyComposer].forEach((Composer) => {
    // ① 初始化与 tag 变动时重算
    extend(Composer.prototype, 'oninit', function () {
      const update = () => {
        const tagIds = getSelectedTagIds(this);
        const anon = shouldBeAnonymous(tagIds);
        this.isAnonymous = anon;
        if (app.composer?.fields) app.composer.fields.isAnonymous = anon;
      };

      update();            // 首次

      if (this.tags && this.tags.map) {
        this.tags.map(() => {
          update();
          m.redraw();      // 重新渲染
        });
      }
        // ② 监听 app.composer.fields.tags (DiscussionComposer 场景)
      if (app.composer.fields?.tags && app.composer.fields.tags.map) {
    app.composer.fields.tags.map(() => {
      update();
      if (app.composer.body?.attrs?.composer) m.redraw();
      else m.redraw();  // fallback，桌面/移动都刷新
    });
  }
    });
    extend(Composer.prototype, 'onupdate', function () {
  // 每次重绘都再算一次匿名状态
  const tagIds = getSelectedTagIds(this);
  const anon   = shouldBeAnonymous(tagIds);
  this.isAnonymous = anon;
  if (app.composer?.fields) app.composer.fields.isAnonymous = anon;
});
extend(Composer.prototype, 'onupdate', function () {
    // 找到左侧头像 <span class="Avatar ComposerBody-avatar">
  const $avatar = this.$('.ComposerBody-avatar').first();
  if (!$avatar.length) return;   // 还没渲染出来
  if (this.isAnonymous) {
     // 匿名状态：显示“匿”字并套灰色背景
    $avatar
      .addClass('Avatar--anonymous')
      .text(app.translator.trans('clarkwinkelmann-anonymous-posting.lib.userMeta.initials'))
      .css('--avatar-bg', '#D52B1E');
  } else {
    // 取消匿名 → 恢复成登录用户头像
    const me = app.session.user!;
    $avatar   
      .removeClass('Avatar--anonymous')
      .text((me.username() || '').charAt(0).toUpperCase())
      .css('--avatar-bg', me.color() || '');
  }
});
    // ② 拿掉旧 toggle
extend(Composer.prototype, 'headerItems', function (items: any) {
    items.remove('anonymous'); // 保守：确保旧开关彻底消失
     
     // 每次渲染都重新计算匿名状态
  const tagIds = getSelectedTagIds(this);
  const anon   = shouldBeAnonymous(tagIds);
  // 同步到组件和 app.composer，供其他逻辑用
  this.isAnonymous = anon;
  if (app.composer?.fields) app.composer.fields.isAnonymous = anon;
    // 如果当前帖子会匿名 ⇒ 显示徽章
    if (this.isAnonymous) {
      items.add(
        'anonymous-indicator',
        m(
          'span.AnonIndicator',
          [
            m('i.fas.fa-user-secret'),   // font-awesome 图标
            m('span',{style:{marginLeft:'6px'}}, '已匿名'),
            m('span',{style:{marginLeft:'6px', fontWeight: 'lighter'}}, '匿名需要遵循组规；修改标题和分区无法匿名'),
          ]
        ),
        -5   // 放在最左边（数值比其他 header item 小）
      );
    }
   });

    // ③ 保存时确保写入 isAnonymous；支持 imposter
    extend(Composer.prototype, 'data', function (data: any) {
      const tagIds = getSelectedTagIds(this);
      const anon = shouldBeAnonymous(tagIds);
      data.isAnonymous = anon;  

      if (anon) {
       const map = getRules();
       const imposterId = tagIds.find((id) => map[id] > 0);
        if (imposterId) {
          data.relationships = data.relationships || {};
          data.relationships.user = {
            data: { type: 'users', id: String(map[imposterId]) },
          };
        }
      }
    });
  });
  /* ---------- end tag-based auto-anonymous ---------- */



    extend(DiscussionControls, 'moderationControls', function (items, discussion) {
        if (discussion.attribute('canDeAnonymize')) {
            items.add('deanonymize', Button.component({
                icon: 'fas fa-user-secret',
                onclick: () => {
                    if (!confirm(extractText(app.translator.trans('clarkwinkelmann-anonymous-posting.forum.discussionControls.deanonymizeConfirmation')))) {
                        return;
                    }

                    discussion.save({
                        isAnonymous: false,
                    }).then(() => {
                        m.redraw();
                    });
                },
            }, app.translator.trans('clarkwinkelmann-anonymous-posting.forum.discussionControls.deanonymize')));
        }

        if (discussion.attribute('canAnonymize')) {
            items.add('anonymize', Button.component({
                icon: 'fas fa-user-secret',
                onclick: () => {
                    if (!confirm(extractText(app.translator.trans('clarkwinkelmann-anonymous-posting.forum.discussionControls.anonymizeConfirmation')))) {
                        return;
                    }

                    discussion.save({
                        isAnonymous: true,
                    }).then(() => {
                        m.redraw();
                    });
                },
            }, app.translator.trans('clarkwinkelmann-anonymous-posting.forum.discussionControls.anonymize')));
        }
    });

    extend(PostControls, 'moderationControls', function (items, post) {
        if (post.attribute('canDeAnonymize')) {
            items.add('deanonymize', Button.component({
                icon: 'fas fa-user-secret',
                onclick: () => {
                    if (!confirm(extractText(app.translator.trans('clarkwinkelmann-anonymous-posting.forum.postControls.deanonymizeConfirmation')))) {
                        return;
                    }

                    post.save({
                        isAnonymous: false,
                    }).then(() => {
                        m.redraw();
                    });
                },
            }, app.translator.trans('clarkwinkelmann-anonymous-posting.forum.postControls.deanonymize')));
        }

        if (post.attribute('canAnonymize')) {
            items.add('anonymize', Button.component({
                icon: 'fas fa-user-secret',
                onclick: () => {
                    if (post.number() === 1) {
                        if (!confirm(extractText(app.translator.trans('clarkwinkelmann-anonymous-posting.forum.postControls.firstPostConfirmation')))) {
                            return;
                        }
                    }

                    post.save({
                        isAnonymous: true,
                    }).then(() => {
                        m.redraw();
                    });
                },
            }, app.translator.trans('clarkwinkelmann-anonymous-posting.forum.postControls.anonymize')));
        }
    });

    // Flarum will try to focus the checkbox in ReplyComposer instead of the body. To work around this, we'll temporarily disable the field while this method runs
    override(Composer.prototype, 'focus', function (original) {
        const $anonymousCheckbox = this.$('.item-anonymous-posting input');

        $anonymousCheckbox.prop('disabled', true);

        const returnValue = original();

        $anonymousCheckbox.prop('disabled', false);

        return returnValue;
    });
});

