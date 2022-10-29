"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[610],{9703:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(5999),l=a(2244);function s(e){const{metadata:t}=e,{previousPage:a,nextPage:s}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(l.Z,{permalink:a,title:n.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&n.createElement(l.Z,{permalink:s,title:n.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},9985:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(9460),l=a(3313);function s(e){let{items:t,component:a=l.Z}=e;return n.createElement(n.Fragment,null,t.map((e=>{let{content:t}=e;return n.createElement(r.n,{key:t.metadata.permalink,content:t},n.createElement(a,null,n.createElement(t,null)))})))}},1714:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Z});var n=a(7294),r=a(6010),l=a(5999),s=a(8824),o=a(1944),i=a(5281),c=a(9960),m=a(9058),u=a(9703),g=a(197),p=a(9985);function d(e){const t=function(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,l.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,l.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function E(e){let{tag:t}=e;const a=d(t);return n.createElement(n.Fragment,null,n.createElement(o.d,{title:a}),n.createElement(g.Z,{tag:"blog_tags_posts"}))}function h(e){let{tag:t,items:a,sidebar:r,listMetadata:s}=e;const o=d(t);return n.createElement(m.Z,{sidebar:r},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,o),n.createElement(c.Z,{href:t.allTagsPath},n.createElement(l.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),n.createElement(p.Z,{items:a}),n.createElement(u.Z,{metadata:s}))}function Z(e){return n.createElement(o.FG,{className:(0,r.Z)(i.k.wrapper.blogPages,i.k.page.blogTagPostListPage)},n.createElement(E,e),n.createElement(h,e))}},3313:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7294),r=a(6010),l=a(9460),s=a(5289),o=a(9224),i=a(9714),c=a(4881),m=a(1526),u=a(2584);const g="blogPostFooterDetailsFull_Wr5y";function p(){const{metadata:e,isBlogPostPage:t}=(0,l.C)(),{tags:a,title:s,editUrl:o,hasTruncateMarker:i}=e,p=!t&&i,d=a.length>0;return d||p||o?n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",t&&g)},d&&n.createElement("div",{className:(0,r.Z)("col",{"col--9":p})},n.createElement(m.Z,{tags:a})),t&&o&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(c.Z,{editUrl:o})),p&&n.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":d})},n.createElement(u.Z,{blogPostTitle:s,to:e.permalink}))):null}function d(e){let{children:t,className:a}=e;const c=function(){const{isBlogPostPage:e}=(0,l.C)();return e?void 0:"margin-bottom--xl"}();return n.createElement(s.Z,{className:(0,r.Z)(c,a)},n.createElement(o.Z,null),n.createElement(i.Z,null,t),n.createElement(p,null))}},7694:(e,t,a)=>{a.d(t,{Z:()=>E});var n=a(7462),r=a(7294),l=a(5742);var s=a(814);var o=a(9960);var i=a(4673);var c=a(2503);function m(e){return r.createElement(c.Z,e)}var u=a(7390),g=a(1470),p=a(3612),d=a(6222);const E={head:function(e){const t=r.Children.map(e.children,(e=>r.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){const{mdxType:t,originalType:a,...n}=e.props;return r.createElement(e.props.originalType,n)}return e}(e):e));return r.createElement(l.Z,e,t)},code:function(e){const t=["a","b","big","i","span","em","strong","sup","sub","small"];return r.Children.toArray(e.children).every((e=>{var a;return"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(null==(a=e.props)?void 0:a.mdxType)}))?r.createElement("code",e):r.createElement(s.Z,e)},a:function(e){return r.createElement(o.Z,e)},pre:function(e){var t;return r.createElement(s.Z,(0,r.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:{...e})},details:function(e){const t=r.Children.toArray(e.children),a=t.find((e=>{var t;return r.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),l=r.createElement(r.Fragment,null,t.filter((e=>e!==a)));return r.createElement(i.Z,(0,n.Z)({},e,{summary:a}),l)},ul:u.Z,img:g.Z,h1:e=>r.createElement(m,(0,n.Z)({as:"h1"},e)),h2:e=>r.createElement(m,(0,n.Z)({as:"h2"},e)),h3:e=>r.createElement(m,(0,n.Z)({as:"h3"},e)),h4:e=>r.createElement(m,(0,n.Z)({as:"h4"},e)),h5:e=>r.createElement(m,(0,n.Z)({as:"h5"},e)),h6:e=>r.createElement(m,(0,n.Z)({as:"h6"},e)),admonition:p.Z,Whimsical:d.wB,AirtableForm:d.ow,AirtableBase:d.vp}},6706:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(5042);function l(e){return n.createElement(n.Fragment,null,n.createElement(r.Z,e))}}}]);