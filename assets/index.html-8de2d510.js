import{_ as l,X as o,Y as t,Z as e,$ as s,a0 as n,a1 as r,C as i}from"./framework-6ad2459b.js";const c="/assets/contact-me.png",p={},d=r(`<h2 id="最新版本" tabindex="-1"><a class="header-anchor" href="#最新版本" aria-hidden="true">#</a> 最新版本</h2><ul><li>maven</li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">dependency</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">groupId</span><span style="color:#ABB2BF;">&gt;io.github.linpeilie&lt;/</span><span style="color:#E06C75;">groupId</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">artifactId</span><span style="color:#ABB2BF;">&gt;mapstruct-plus-spring-boot-starter&lt;/</span><span style="color:#E06C75;">artifactId</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">version</span><span style="color:#ABB2BF;">&gt;1.1.6&lt;/</span><span style="color:#E06C75;">version</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">dependency</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>gradle</li></ul><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">implementation </span><span style="color:#D19A66;">group</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;io.github.linpeilie&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;mapstruct-plus-spring-boot-starter&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">version</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;1.1.6&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志" aria-hidden="true">#</a> 更新日志</h2><h3 id="_1-1-6" tabindex="-1"><a class="header-anchor" href="#_1-1-6" aria-hidden="true">#</a> 1.1.6</h3><ul><li>支持在添加 <code>AutoMapper</code> 的类中，配置目标类到当前类的转换规则，适配多种场景下的使用；</li><li><code>AutoMapper</code> 增加注解，提供可以配置是否生成转换接口的功能；</li><li><code>AutoMapping</code> 的 <code>target</code> 属性默认可以不填，不填则取当前字段</li><li>升级 mapstruct 版本为 1.5.3.FINAL</li></ul><p>……</p><h2 id="代码仓库" tabindex="-1"><a class="header-anchor" href="#代码仓库" aria-hidden="true">#</a> 代码仓库</h2>`,10),u={href:"https://github.com/linpeilie/mapstruct-plus",target:"_blank",rel:"noopener noreferrer"},h={href:"https://gitee.com/linpeilie/mapstruct-plus",target:"_blank",rel:"noopener noreferrer"},B=e("h2",{id:"参与贡献",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参与贡献","aria-hidden":"true"},"#"),s(" 参与贡献")],-1),_=e("ul",null,[e("li",null,"贡献代码：欢迎提交 Issue 或 Pull Requests"),e("li",null,"维护文档：项目目录下的 docs 目录，欢迎参与翻译与修订")],-1),g=e("h2",{id:"推荐文章",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#推荐文章","aria-hidden":"true"},"#"),s(" 推荐文章")],-1),y={href:"https://juejin.cn/post/7204307381688909882",target:"_blank",rel:"noopener noreferrer"},m=e("h2",{id:"友情链接",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#友情链接","aria-hidden":"true"},"#"),s(" 友情链接")],-1),b={href:"https://gitee.com/JavaLionLi/RuoYi-Vue-Plus/wikis/pages",target:"_blank",rel:"noopener noreferrer"},v={href:"https://gitee.com/JavaLionLi/RuoYi-Cloud-Plus/wikis/pages",target:"_blank",rel:"noopener noreferrer"},f=e("h2",{id:"联系我",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#联系我","aria-hidden":"true"},"#"),s(" 联系我")],-1),A=e("figure",null,[e("img",{src:c,alt:"Wechat --- Clue8a796d01",width:"346",height:"403",tabindex:"0",loading:"lazy"}),e("figcaption",null,"Wechat --- Clue8a796d01")],-1);function x(F,k){const a=i("ExternalLinkIcon");return o(),t("div",null,[d,e("ul",null,[e("li",null,[e("a",u,[s("Github"),n(a)])]),e("li",null,[e("a",h,[s("Gitee"),n(a)])])]),B,_,g,e("ul",null,[e("li",null,[e("a",y,[s("彻底干掉 BeanUtils，最优雅的 Mapstruct 增强工具全新出炉"),n(a)])])]),m,e("ul",null,[e("li",null,[e("a",b,[s("RuoYi-Vue-Plus"),n(a)])]),e("li",null,[e("a",v,[s("RuoYi-Cloud-Plus"),n(a)])])]),f,A])}const E=l(p,[["render",x],["__file","index.html.vue"]]);export{E as default};
