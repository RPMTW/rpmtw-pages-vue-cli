(function(e){function t(t){for(var a,o,s=t[0],i=t[1],d=t[2],l=0,u=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&u.push(c[o][0]),c[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);b&&b(t);while(u.length)u.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==c[s]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},o={app:0},c={app:0},r=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0f22cefa":"1228ff94","chunk-14a9ab82":"a4ba28fc","chunk-171017a7":"3749df0e","chunk-25ec0fd0":"ed0aa62a","chunk-2d0da7d0":"4a4264e3","chunk-2d0daa96":"3e52fbe2","chunk-2d225de6":"190f6fc8","chunk-34b39702":"97c651da","chunk-37bdf470":"8c64d9d2","chunk-3dec1e6a":"48f73ba5","chunk-42c1148d":"426797c6","chunk-4d98b84f":"cd390977","chunk-61da2e50":"a041f9ca","chunk-8d136a46":"2358c79c","chunk-a5fd38e4":"5d0d5312","chunk-dec42738":"61fc98fb"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-0f22cefa":1,"chunk-14a9ab82":1,"chunk-171017a7":1,"chunk-25ec0fd0":1,"chunk-34b39702":1,"chunk-37bdf470":1,"chunk-3dec1e6a":1,"chunk-42c1148d":1,"chunk-4d98b84f":1,"chunk-61da2e50":1,"chunk-a5fd38e4":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-0f22cefa":"da65980b","chunk-14a9ab82":"514e3527","chunk-171017a7":"b56e6ab2","chunk-25ec0fd0":"5480ca5c","chunk-2d0da7d0":"31d6cfe0","chunk-2d0daa96":"31d6cfe0","chunk-2d225de6":"31d6cfe0","chunk-34b39702":"51fb7cc4","chunk-37bdf470":"6d2ddf05","chunk-3dec1e6a":"423e0b38","chunk-42c1148d":"d22e2d79","chunk-4d98b84f":"47b9471d","chunk-61da2e50":"3077142f","chunk-8d136a46":"31d6cfe0","chunk-a5fd38e4":"c511b695","chunk-dec42738":"31d6cfe0"}[e]+".css",c=i.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var d=r[s],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===a||l===c))return t()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){d=u[s],l=d.getAttribute("data-href");if(l===a||l===c)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var a=t&&t.target&&t.target.src||c,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete o[e],b.parentNode.removeChild(b),n(r)},b.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(b)})).then((function(){o[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=r);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var u=new Error;d=function(t){l.onerror=l.onload=null,clearTimeout(b);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",u.name="ChunkLoadError",u.type=a,u.request=o,n[1](u)}c[e]=void 0}};var b=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/RPMTW-Website/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=t,d=d.slice();for(var u=0;u<d.length;u++)t(d[u]);var b=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"10ee":function(e){e.exports=JSON.parse('{"public.Game.version":"遊戲版本","public.goto.discord":"加入官方社群 (Discord)","plug.header.menu.home":"首頁","plug.header.menu.assistance":"協助翻譯","plug.header.menu.Wikipedia":"維基百科","plug.header.menu.tool":"實用工具","plug.header.menu.rank":"翻譯者排名","plug.header.menu.about":"關於我們","Home.include.public.DL-STAT":"立即下載","Home.include.public.read-more":"閱讀更多","Home.include.mod.name":"自動中文化更新模組","Home.include.mod.description":"體驗前所未見的模組翻譯，讓你的模組通通變中文吧！","Home.include.atr.name.0":"ATR 1 - All The RPMTW","Home.include.atr.name.1":"模組包","Home.include.atr.description":"1.17 全新模組包，結合各種元素，盡情在織物上探險吧！","Home.top12.title":"翻譯貢獻者前12名 - 感謝你們的貢獻","Home.top12.show-more":"查看更多翻譯貢獻者","Home.announcement.title":"公告","Home.announcement.datas":["文言文：菘之幻界->白話文：白菜的幻想世界!?!?","網頁的手機頁面??就差Wiki阿!!!!","RPMTW 官方模組啟動器製作中...","ATR官方伺服器目前為關閉狀態","較安全的模組下載平台: 作者授權平台、Modrinth、CurseForge 黑名單模組下載平台：9Minecraft"],"Home.scroll.texts":["前所未見的模組繁中化","社群協力合作","翻譯全自動更新","跳脫傳統框架","遊戲內翻譯模組","專屬為您設計","與我們一起當個創世神！"],"ProgressQuery.please.enter.CurseForgeID":"請輸入CurseForgeID","ProgressQuery.title":"RPMTW 模組個別翻譯進度查詢器","ProgressQuery.description.0":"不知道自己喜歡的模組有沒有被翻譯呢?或者想了解模組的翻譯進度，那用這個工具就對了","ProgressQuery.description.1":"(目前仍處測試版狀態，資料庫尚未齊全，因此部分模組查無資料屬正常現象)","ProgressQuery.Filter.condition":"過濾條件","RPMTWUpdateMod.buttons.Participate":"參與模組翻譯","RPMTWUpdateMod.main.title":"體驗前所未見的模組繁中化","RPMTWUpdateMod.schedule.Full.version":"全版本模組翻譯進度"}')},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("7a23");const o=Object(a["f"])("div",{class:"flex flex-down"},[Object(a["f"])("img",{src:"https://cdn.discordapp.com/avatars/645588343228334080/f56a0b0223d5f32b902edcb362d08a5d.webp?size=128",alt:""})],-1),c=[o];function r(e,t,n,o,r,s){const i=Object(a["A"])("Header"),d=Object(a["A"])("router-view"),l=Object(a["A"])("Footer");return Object(a["s"])(),Object(a["e"])(a["a"],null,[Object(a["i"])(i),Object(a["i"])(d,{class:"wrapper"}),Object(a["i"])(l,{class:"footer"}),Object(a["f"])("div",{class:Object(a["o"])(["goTop",{showGoTop:r.showGoTop}]),onClick:t[0]||(t[0]=(...e)=>s.goTop&&s.goTop(...e))},c,2)],64)}Object(a["v"])("data-v-0c574f6f");const s={id:"header",class:"flex"},i={class:"header-nav-left"},d=Object(a["f"])("a",{href:"#"},[Object(a["f"])("div",{class:"menuStyle"})],-1),l=Object(a["g"])('<div class="links flex" data-v-0c574f6f><a href="https://discord.com/invite/5xApZtgV2u" data-v-0c574f6f><img src="https://discord.com/assets/847541504914fd33810e70a0ea73177e.ico" alt="" data-v-0c574f6f></a><a href="https://github.com/RPMTW" data-v-0c574f6f><img src="https://github.com/fluidicon.png" alt="" data-v-0c574f6f></a><a href="https://modrinth.com/mod/rpmtw-update-mod" data-v-0c574f6f><img src="https://modrinth.com/favicon.ico" alt="" data-v-0c574f6f></a><a href="https://www.curseforge.com/minecraft/modpacks/atr1" data-v-0c574f6f><img src="https://media.forgecdn.net/avatars/thumbnails/396/29/64/64/637595082272657724.png" alt="" data-v-0c574f6f></a><a href="https://crowdin.com/project/resourcepack-mod-zhtw?already_accepted=14797842" data-v-0c574f6f><img src="https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png" alt="" data-v-0c574f6f></a></div>',1),u={class:"div-select flex flex-down"},b=["value"],h=Object(a["f"])("div",{class:"txt-logo user-select"},[Object(a["f"])("strong",{class:"main-title"},[Object(a["f"])("span",{class:"notranslate",style:{color:"#ff9900"}},"RPM"),Object(a["f"])("span",{style:{color:"#00ffff"},class:"notranslate"},"TW")])],-1),f={class:"header-nav-right"},m=Object(a["f"])("i",{class:"fas fa-sun"},null,-1),p=[m];function g(e,t,n,o,c,r){const m=Object(a["A"])("router-link");return Object(a["s"])(),Object(a["e"])("header",s,[Object(a["f"])("div",i,[Object(a["f"])("div",{class:"menuButton",onClick:t[4]||(t[4]=(...e)=>r.menuButtonHtmlToggle&&r.menuButtonHtmlToggle(...e))},[d,Object(a["f"])("div",{class:"menu",onMouseleave:t[2]||(t[2]=(...e)=>r.menuButtonHtmlToggle&&r.menuButtonHtmlToggle(...e))},[(Object(a["s"])(!0),Object(a["e"])(a["a"],null,Object(a["y"])(c.menuList,e=>(Object(a["s"])(),Object(a["e"])("div",{key:e,class:Object(a["o"])([{active:c.breadcrumb===e.breadcrumb},"activeBreadcrumb"])},[Object(a["i"])(m,{to:e.to,class:"go-to"},{default:Object(a["H"])(()=>[Object(a["h"])(Object(a["C"])(e.name),1)]),_:2},1032,["to"])],2))),128)),l,Object(a["f"])("div",u,[Object(a["f"])("h1",{class:"nowLang notranslate langMenu",onClick:t[0]||(t[0]=(...e)=>r.showLangOptions&&r.showLangOptions(...e))},Object(a["C"])(c.lang),1),(Object(a["s"])(!0),Object(a["e"])(a["a"],null,Object(a["y"])(c.langs,(e,n)=>(Object(a["s"])(),Object(a["e"])("div",{class:"div-option none langMenu notranslate",value:n,key:n,onClick:t[1]||(t[1]=(...e)=>r.setChoose&&r.setChoose(...e))},Object(a["C"])(e),9,b))),128))])],32),Object(a["f"])("div",{class:"blurry",onClick:t[3]||(t[3]=(...e)=>r.menuButtonHtmlToggle&&r.menuButtonHtmlToggle(...e))})])]),h,Object(a["f"])("div",f,[Object(a["f"])("div",{class:"header-nav-setMode",onClick:t[5]||(t[5]=(...e)=>r.headerSetMode_click&&r.headerSetMode_click(...e)),rod:""},[Object(a["f"])("span",{class:Object(a["o"])({"mode-bright":c.bright,"mode-dark":!c.bright})},p,2)])])])}Object(a["t"])();var O=n("9225"),j=n("8b64");function v(e,t=""){return O["a"].i18nData[O["a"].getLang()][e]||O["a"].i18nData[O["a"].set.main][e]||t}let k=0;var T={name:"Header",data(){return{langs:O["a"].set.langs,lang:`${O["a"].set.langs[O["a"].getLang()]} (${O["a"].getLang()})`,menuList:j,breadcrumb:null,bright:!1}},methods:{i18n:v,showLangOptions(){$("div.div-option.langMenu").toggleClass("none")},setChoose(e){let t=$(e.target).attr("value");this.lang=`${O["a"].set.langs[t]} (${t})`,O["a"].setLang(t)},headerSetMode_click(){let e=$("html").toggleClass("bright").attr("class").split(" ").includes("bright");this.bright=e,document.cookie=e?"mode=bright":"mode=dark"},menuButtonHtmlToggle(){$("html").toggleClass("is-menu")},setBreadcrumb(){this.breadcrumb=this.$route.meta.breadcrumb}},mounted(){$((function(){function e(){let e=Math.floor($(window).scrollTop()),t=$("#header"),n="slider--up",a="slider--down";0===e?(setTimeout(()=>{t.addClass(n)},250),t.removeClass(a)):k>e?(t.addClass(n),t.removeClass(a)):$("html").hasClass("is-menu")||(t.addClass(a),t.removeClass(n)),k=e}$(window).on("scroll",()=>e()),e()})),this.setBreadcrumb();let e=("; "+document.cookie).split("; mode=");2===e.length&&"bright"===e.pop().split(";").shift()?$("html").addClass("bright"):document.cookie="mode=dark",document.cookie.length<=0&&alert("建議開啟 cookie 已獲得更好的體驗");let t=$("html").attr("class");this.bright=t&&t.split(" ").includes("bright")},watch:{$route(){this.setBreadcrumb()}}};n("e90b"),n("6040");T.render=g,T.__scopeId="data-v-0c574f6f";var w=T;Object(a["v"])("data-v-7d26f03e");const y={key:0,class:"Footer"},M={class:"flex flex-down"},P=Object(a["f"])("a",{href:"https://github.com/RPMTW"},"RPMTW Team",-1),C=Object(a["h"])(" and "),H=Object(a["f"])("a",{href:"https://github.com/a3510377"},"猴子#3807",-1);function W(e,t,n,o,c,r){return c.notFooter?(Object(a["s"])(),Object(a["e"])("div",y,[Object(a["f"])("footer",M,[Object(a["f"])("p",null,[Object(a["h"])(" Copyright © RPMTW "+Object(a["C"])(c.newYear)+" Powered by The ",1),P,C,H])])])):Object(a["d"])("",!0)}Object(a["t"])();var A={name:"Footer",data(){return{notFooter:!0,newYear:(new Date).getFullYear()}},watch:{$route(){this.notFooter=!this.$route.meta.notFooter}}};n("58db");A.render=W,A.__scopeId="data-v-7d26f03e";var R=A,_=(n("a0f1"),n("c1c3"),{name:"Main",components:{Header:w,Footer:R},methods:{goTop(){$("html").animate({scrollTop:0},400)}},data(){return{showGoTop:!1}},mounted(){let e=this;$((function(){$(window).on("scroll",()=>e.showGoTop=$(window).scrollTop()>=600)}))}});n("a2b8");_.render=r;var x=_,F=n("6c02"),S=n("b9ac"),L=n.n(S);const B={id:"AssistTranslation",class:"wiki"},Q={class:"content"},D=Object(a["f"])("section",{class:"section",id:"what-is-RPMTW"},[Object(a["f"])("h1",null,"什麼是 RPMTW 自動中文化更新模組?"),Object(a["f"])("p",null," 此模組是一個Minecraft模組繁體中文化的新興模組，主打「方便、快速、簡單、合作」，希望能夠打破傳統翻譯模組的方式，以及解決許多新/老手想翻譯模組但卻覺得很難/遊玩模組時被看不懂的文字困惑。 ")],-1),E={class:"section",id:"install-method"},I=Object(a["f"])("h1",null,"這模組要如何安裝?",-1),N=Object(a["h"])("<<點我查看教學>>"),z=Object(a["f"])("section",{class:"section",id:"server-need-install"},[Object(a["f"])("h1",null,"伺服器端需要安裝嗎?"),Object(a["f"])("p",null," 伺服器不用安裝，因為伺服器端不會顯示內容並不需要安裝此模組，只需客戶端安裝就能享受漢化體驗。 ")],-1),U=Object(a["f"])("section",{class:"section",id:"RPMTW-version"},[Object(a["f"])("h1",null,"RPMTW 支援 1.12.2 以下的版本嗎? RPMTW支援那些Minecraft版本?"),Object(a["f"])("p",null,[Object(a["h"])(" RPMTW 「不打算」支援 1.12.2 以下的Minecraft版本。"),Object(a["f"])("br"),Object(a["h"])(" 目前RPMTW支援的版本有 1.12、1.16、1.17，未來有新版本釋出也會盡快更新。 ")])],-1),J=Object(a["f"])("section",{class:"section",id:"support-forge-or-fabric"},[Object(a["f"])("h1",null,"RPMTW 支援Forge嗎? 支援Fabric嗎?"),Object(a["f"])("p",null,[Object(a["f"])("span",{style:{"text-decoration":"line-through"}},"小孩子才做選擇，RPMTW 全都要"),Object(a["h"])(" (Forge/Fabric雙平台都支援)。 ")])],-1),G={class:"section",id:"discord-or-line"},V=Object(a["f"])("h1",null,"有Discord或Line嗎? 我想詢問相關問題/建議",-1),Y=Object(a["h"])(" 如果需要聯繫我們 "),q=Object(a["h"])(" <<點我查看聯繫方式>> "),K=Object(a["h"])("。 "),Z=Object(a["f"])("section",{class:"section",id:"translation-process"},[Object(a["f"])("h1",null,"這什麼原理，可以全自動化的翻譯流程?"),Object(a["f"])("p",null,"下方有一張簡易的示意圖喔w"),Object(a["f"])("br"),Object(a["f"])("img",{src:L.a,alt:"簡易的示意圖"})],-1);function X(e,t,n,o,c,r){const s=Object(a["A"])("router-link");return Object(a["s"])(),Object(a["e"])("div",B,[Object(a["f"])("div",Q,[D,Object(a["f"])("section",E,[I,Object(a["i"])(s,{to:"/install/version"},{default:Object(a["H"])(()=>[N]),_:1})]),z,U,J,Object(a["f"])("section",G,[V,Object(a["f"])("p",null,[Y,Object(a["i"])(s,{to:"/About"},{default:Object(a["H"])(()=>[q]),_:1}),K])]),Z])])}var ee={name:"QandA",data(){return{}}};ee.render=X;var te=ee;const ne=[{path:"/",name:"Home",component:()=>n.e("chunk-3dec1e6a").then(n.bind(null,"bb51")),meta:{breadcrumb:"Home"}},{path:"/about",name:"About",component:()=>n.e("chunk-34b39702").then(n.bind(null,"f820")),meta:{breadcrumb:"About"}},{path:"/Contributor",name:"Contributor",component:()=>n.e("chunk-42c1148d").then(n.bind(null,"dd86")),meta:{breadcrumb:"Contributor"}},{path:"/Translation-assistance",name:"Assistance",component:()=>n.e("chunk-a5fd38e4").then(n.bind(null,"f74e")),meta:{breadcrumb:"Assistance"}},{path:"/Translation-assistance/Translation-Tutorials",name:"Tutorials",component:()=>n.e("chunk-25ec0fd0").then(n.bind(null,"2d34"))},{path:"/ProgressQuery",name:"ProgressQuery",component:()=>n.e("chunk-61da2e50").then(n.bind(null,"964f")),meta:{breadcrumb:"ProgressQuery"}},{path:"/Wiki",name:"WikiMenuList",meta:{breadcrumb:"Wiki",notFooter:!0},component:()=>n.e("chunk-4d98b84f").then(n.bind(null,"c89e")),children:[{path:"",components:{data:te}},{path:"QandA",components:{data:te}},{path:"AssistTranslation",components:{data:()=>n.e("chunk-dec42738").then(n.bind(null,"1b8e"))}},{path:"InstallAndUse",components:{data:()=>n.e("chunk-2d225de6").then(n.bind(null,"e5dd"))}},{path:"ModInfo",components:{data:()=>n.e("chunk-8d136a46").then(n.bind(null,"38c0"))}},{path:"OtherInfo",components:{data:()=>n.e("chunk-2d0da7d0").then(n.bind(null,"6c8e"))}}]},{path:"/RPMTWUpdateMod",name:"RPMTWUpdateMod",component:()=>n.e("chunk-14a9ab82").then(n.bind(null,"752c"))},{path:"/install/version",name:"Version",component:()=>n.e("chunk-37bdf470").then(n.bind(null,"733e")),meta:{breadcrumb:"Version",notFooter:!0}},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>n.e("chunk-171017a7").then(n.bind(null,"4b62")),meta:{breadcrumb:"ProgressQuery",notFooter:!0}},{path:"/atr1",name:"ATR1",component:()=>n.e("chunk-0f22cefa").then(n.bind(null,"a951"))},{path:"/test",name:"TEST",component:()=>n.e("chunk-2d0daa96").then(n.bind(null,"6d0b"))}],ae=Object(F["a"])({history:Object(F["b"])("/RPMTW-Website/"),routes:ne});ae.beforeEach((e,t,n)=>{document.title=e.meta.title||document.title,n()});var oe=ae,ce=n("5502"),re=Object(ce["a"])({state:{},mutations:{},actions:{},modules:{}});Object(a["c"])(x).use(re).use(oe).mount("main")},"58db":function(e,t,n){"use strict";n("d139")},"5aad":function(e){e.exports=JSON.parse('{"plug.header.menu.home":"首頁","plug.header.menu.assistance":"協助翻譯","plug.header.menu.Wikipedia":"維基百科","plug.header.menu.tool":"實用工具","plug.header.menu.rank":"翻譯者排名","plug.header.menu.about":"關於我們","Home.include.public.DL-STAT":"立即下載","Home.include.public.read-more":"閱讀更多","Home.include.mod.name":"自動中文化更新模組","Home.include.mod.description":"體驗前所未見的模組翻譯，讓你的模組通通變中文吧！","Home.include.atr.name.0":"ATR 1 - All The RPMTW","Home.include.atr.name.1":"模組包","Home.include.atr.description":"1.17 全新模組包，結合各種元素，盡情在織物上探險吧！","Home.top12.title":"翻譯貢獻者前12名 - 感謝你們的貢獻","Home.top12.show-more":"查看更多翻譯貢獻者","Home.announcement.datas":["Classical Chinese: The Illusionary World of Siong -> Vernacular Chinese: The Fantasy World of Cabbage!?!?"],"Home.scroll.texts":["前所未見的模組繁中化","社群協力合作","翻譯全自動更新","跳脫傳統框架","遊戲內翻譯模組","專屬為您設計","與我們一起當個創世神！"]}')},6040:function(e,t,n){"use strict";n("fed0")},6742:function(e){e.exports=JSON.parse("{}")},"8b64":function(e){e.exports=JSON.parse('[{"to":"/","name":"首頁","breadcrumb":"Home"},{"to":"/Translation-assistance","name":"協助翻譯","breadcrumb":"Assistance"},{"to":"/Wiki","name":"維基百科","breadcrumb":"Wiki"},{"to":"/ProgressQuery","name":"實用工具","breadcrumb":"ProgressQuery"},{"to":"/Contributor","name":"翻譯貢獻者排名","breadcrumb":"Contributor"},{"to":"/About","name":"關於我們","breadcrumb":"About"},{"to":"/install/version","name":"下載本模組","breadcrumb":"Version"}]')},"8dba":function(e,t,n){},9225:function(e,t,n){"use strict";var a=n("10ee"),o=n("6742"),c=n("5aad");t["a"]={set:{main:"zh_tw",langs:{zh_tw:"繁體中文",zh_cn:"简体中文",en_us:"English"}},getLang(){return localStorage.getItem("lang")||this.set.main},setLang(e){return localStorage.setItem("lang",e),window.location.reload()},i18nData:{zh_tw:a,zh_cn:o,en_us:c}}},a0f1:function(e,t,n){},a2b8:function(e,t,n){"use strict";n("f8c1")},b9ac:function(e,t,n){e.exports=n.p+"img/autoTranslation.1a4e811f.png"},c1c3:function(e,t,n){},d139:function(e,t,n){},e90b:function(e,t,n){"use strict";n("8dba")},f8c1:function(e,t,n){},fed0:function(e,t,n){}});
//# sourceMappingURL=app.b37f7aae.js.map