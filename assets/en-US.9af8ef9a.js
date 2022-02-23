import{_ as c}from"./elevation.eb606728.js";import{e as a,o,c as r,a as t,i as d,j as l,U as n,m as e}from"./vendor.49f89f0d.js";const h={components:{}},i={class:"varlet-site-doc"},p=t("h1",null,"Cell",-1),m=t("div",{class:"card"},[t("h3",null,"Intro"),t("p",null,"The cell is a single display item in the list.")],-1),_={class:"card"},j=t("h3",null,"Install",-1),g=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-keyword"},"import"),e(" { createApp } "),t("span",{class:"hljs-keyword"},"from"),e(),t("span",{class:"hljs-string"},"'vue'"),e(`
`),t("span",{class:"hljs-keyword"},"import"),e(" { Cell } "),t("span",{class:"hljs-keyword"},"from"),e(),t("span",{class:"hljs-string"},"'@varlet/ui'"),e(`

createApp().use(Cell)
`)])],-1),u={class:"card"},f=t("h3",null,"Basic Usage",-1),v=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-cell"),e(">")]),e(" This is Cell "),t("span",{class:"hljs-tag"},[e("</"),t("span",{class:"hljs-name"},"var-cell"),e(">")]),e(`
`)])],-1),b={class:"card"},y=t("h3",null,"Show Icon",-1),x=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-cell"),e(),t("span",{class:"hljs-attr"},"icon"),e("="),t("span",{class:"hljs-string"},'"fire"'),e(),t("span",{class:"hljs-attr"},"title"),e("="),t("span",{class:"hljs-string"},'"This is Cell"'),e(">")]),e(`
  `),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"template"),e(" #"),t("span",{class:"hljs-attr"},"extra"),e(">")]),e(`
    `),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-icon"),e(),t("span",{class:"hljs-attr"},"name"),e("="),t("span",{class:"hljs-string"},'"information"'),e(" />")]),e(`
  `),t("span",{class:"hljs-tag"},[e("</"),t("span",{class:"hljs-name"},"template"),e(">")]),e(`
`),t("span",{class:"hljs-tag"},[e("</"),t("span",{class:"hljs-name"},"var-cell"),e(">")]),e(`
`)])],-1),S={class:"card"},k=t("h3",null,"Show Description",-1),C=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-cell"),e(),t("span",{class:"hljs-attr"},"title"),e("="),t("span",{class:"hljs-string"},'"This is Cell"'),e(),t("span",{class:"hljs-attr"},"desc"),e("="),t("span",{class:"hljs-string"},'"description"'),e(" />")]),e(`
`)])],-1),w={class:"card"},N=t("h3",null,"Show Border",-1),T=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[e("<"),t("span",{class:"hljs-name"},"var-cell"),e(),t("span",{class:"hljs-attr"},"border"),e(">")]),e(" This is Cell "),t("span",{class:"hljs-tag"},[e("</"),t("span",{class:"hljs-name"},"var-cell"),e(">")]),e(`
`)])],-1),D=n('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>title</code></td><td>Title</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>Icon name</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>desc</code></td><td>Description</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>border</code></td><td>Whether to show border</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>icon-class</code></td><td>Icon className</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>title-class</code></td><td>Title className</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>desc-class</code></td><td>Description className</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>extra-class</code></td><td>Extra className</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Content of cell</td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>Icon of cell</td><td><code>-</code></td></tr><tr><td><code>desc</code></td><td>Description of cell</td><td><code>-</code></td></tr><tr><td><code>extra</code></td><td>Extra of cell</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--cell-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--cell-desc-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--cell-desc-color</code></td><td><code>rgba(0, 0, 0, 0.6)</code></td></tr><tr><td><code>--cell-padding</code></td><td><code>10px 12px</code></td></tr><tr><td><code>--cell-min-height</code></td><td><code>40px</code></td></tr><tr><td><code>--cell-border-color</code></td><td><code>#bcc2cb</code></td></tr><tr><td><code>--cell-border-left</code></td><td><code>12px</code></td></tr><tr><td><code>--cell-border-right</code></td><td><code>12px</code></td></tr><tr><td><code>--cell-icon-right</code></td><td><code>8px</code></td></tr><tr><td><code>--cell-extra-left</code></td><td><code>8px</code></td></tr></tbody></table></div>',4);function I(V,z,B,P,U,$){const s=a("var-site-code-example");return o(),r("div",i,[p,m,t("div",_,[j,d(s,null,{default:l(()=>[g]),_:1})]),t("div",u,[f,d(s,null,{default:l(()=>[v]),_:1})]),t("div",b,[y,d(s,null,{default:l(()=>[x]),_:1})]),t("div",S,[k,d(s,null,{default:l(()=>[C]),_:1})]),t("div",w,[N,d(s,null,{default:l(()=>[T]),_:1})]),D])}var H=c(h,[["render",I]]);export{H as default};