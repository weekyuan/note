(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{521:function(t,v,_){"use strict";_.r(v);var a=_(42),r=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"不吹不黑聊聊前端框架-尤雨溪"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#不吹不黑聊聊前端框架-尤雨溪"}},[t._v("#")]),t._v(" 不吹不黑聊聊前端框架 - 尤雨溪")]),t._v(" "),_("h2",{attrs:{id:"组件的分类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#组件的分类"}},[t._v("#")]),t._v(" 组件的分类：")]),t._v(" "),_("ol",[_("li",[t._v("纯展示型组件。数据进，dom 出")]),t._v(" "),_("li",[t._v("接入型组件，与 Service Container 组件。")]),t._v(" "),_("li",[t._v("交互型组件。表单，element UI")]),t._v(" "),_("li",[t._v("功能性组件。路由组件，动画组件")])]),t._v(" "),_("p",[t._v("JSX 拥有灵活性，Javascript 适合功能性组件\n模板，适合展示性")]),t._v(" "),_("p",[t._v("collocation 把一个组件的 JS CSS HTMl 放在一个文件")]),t._v(" "),_("h2",{attrs:{id:"变化侦测和渲染机制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#变化侦测和渲染机制"}},[t._v("#")]),t._v(" 变化侦测和渲染机制")]),t._v(" "),_("p",[t._v("声明式\nview = render(state)")]),t._v(" "),_("p",[t._v("vertril dom 虚拟 dom")]),t._v(" "),_("p",[t._v("变化侦测\nhttps://docs.google.com/presentation/d/1_BlJxudppfKmAtfbNIcqNwzrC5vLrR_h1e09apcpdNY/edit?usp=sharing")]),t._v(" "),_("ol",[_("li",[t._v("push，（细粒度）哪些数据变动了")]),t._v(" "),_("li",[t._v("pull，（粗粒度） dom 可能变动，比对")])]),t._v(" "),_("p",[t._v("vue2 组件间，push\n组件内，pull")]),t._v(" "),_("h2",{attrs:{id:"状态管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#状态管理"}},[t._v("#")]),t._v(" 状态管理")]),t._v(" "),_("p",[t._v("Source event -> State change -> UI change")]),t._v(" "),_("p",[t._v("vuex 解决 Source -> State change")]),t._v(" "),_("p",[t._v("redux 数据不可变，命令式\nMobX 可变数据，副作用，声明式去写")]),t._v(" "),_("p",[t._v("问题：")]),t._v(" "),_("ol",[_("li",[t._v("复杂的异步，推荐用 rx.js 处理")]),t._v(" "),_("li",[t._v("数据放在主状态，还是组件 State")]),t._v(" "),_("li",[t._v("从服务端拿到数据，再存到 data 中，有点多此一举")])]),t._v(" "),_("p",[t._v("（服务端直接渲染出模板？）")]),t._v(" "),_("h2",{attrs:{id:"路由"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#路由"}},[t._v("#")]),t._v(" 路由")]),t._v(" "),_("p",[t._v("URL 映射到 组件树结构\nionic app 思路，卡片化路由")]),t._v(" "),_("h2",{attrs:{id:"css"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[t._v("#")]),t._v(" css")]),t._v(" "),_("p",[t._v("主流的 CSS 方案")]),t._v(" "),_("ul",[_("li",[t._v("跟 JS 完全解耦，靠预处理器和比如 BEM 这样的规范来保持可维护性，偏传统")]),t._v(" "),_("li",[t._v("CSS Modules，依然是 CSS，但是通过编译来避免 CSS 类名的全局冲突")]),t._v(" "),_("li",[t._v("各类 CSS-in-JS 方案，React 社区为代表，比较激进")]),t._v(" "),_("li",[t._v("Vue 的单文件组件 CSS，或是 Angular 的组件 CSS（写在装饰器里面），一种比较折中的方案")])]),t._v(" "),_("p",[t._v("传统 css 的一些问题：")]),t._v(" "),_("ol",[_("li",[t._v("作用域")]),t._v(" "),_("li",[t._v("Critical CSS(首屏直出，服务端渲染)")]),t._v(" "),_("li",[t._v("Atomic CSS（原子类）")]),t._v(" "),_("li",[t._v("分发复用")]),t._v(" "),_("li",[t._v("跨平台复用")])]),t._v(" "),_("h2",{attrs:{id:"构建工具"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#构建工具"}},[t._v("#")]),t._v(" 构建工具")]),t._v(" "),_("p",[t._v("构建工具解决的其实是几方面的问题：")]),t._v(" "),_("ul",[_("li",[t._v("任务的自动化")]),t._v(" "),_("li",[t._v("开发体验和效率（新的语言功能，语法糖，hot reload 等等）")]),t._v(" "),_("li",[t._v("部署相关的需求")]),t._v(" "),_("li",[t._v("编译时优化")])]),t._v(" "),_("h2",{attrs:{id:"部署"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[t._v("#")]),t._v(" 部署")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://www.zhihu.com/question/20790576",target:"_blank",rel:"noopener noreferrer"}},[t._v("大公司里怎样开发和部署前端代码？"),_("OutboundLink")],1)]),t._v(" "),_("p",[t._v("打包 js rollup.js")]),t._v(" "),_("h2",{attrs:{id:"服务端数据通信"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#服务端数据通信"}},[t._v("#")]),t._v(" 服务端数据通信")]),t._v(" "),_("p",[t._v("实时问题 rx.js")]),t._v(" "),_("p",[t._v("graph 数据量，数据层")]),t._v(" "),_("h2",{attrs:{id:"服务端渲染"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#服务端渲染"}},[t._v("#")]),t._v(" 服务端渲染")]),t._v(" "),_("p",[t._v("ssr.vuejs.org")]),t._v(" "),_("h2",{attrs:{id:"跨平台渲染"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#跨平台渲染"}},[t._v("#")]),t._v(" 跨平台渲染")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://www.zhihu.com/question/58731753",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web Component"),_("OutboundLink")],1)])])}),[],!1,null,null,null);v.default=r.exports}}]);