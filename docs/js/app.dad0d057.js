(function(e){function t(t){for(var a,c,s=t[0],i=t[1],l=t[2],d=0,u=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&u.push(o[c][0]),o[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);h&&h(t);while(u.length)u.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},c={app:0},o={app:0},r=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0629f60f":"c9dac39a","chunk-16a6a149":"82250753","chunk-22ea8d4c":"fd6f773a","chunk-2d0da7d0":"58291a5b","chunk-2d0daa96":"e1e9b7db","chunk-2d2105d0":"39724036","chunk-2d225de6":"c0fd1723","chunk-40f28e5b":"413acf73","chunk-477b98da":"f3f64e1a","chunk-4bf2bc4a":"e30e404c","chunk-539539c6":"aa9027f3","chunk-568e325e":"c446f051","chunk-67c1f18a":"19e94b81","chunk-692a4620":"0771ff45","chunk-6e703488":"e8905152","chunk-7cfed818":"3600d269","chunk-8464edc8":"c36d782f","chunk-8eb4d2dc":"28175613","chunk-a490d9c8":"cfe1d494","chunk-d989b56a":"7fec3fef"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-0629f60f":1,"chunk-16a6a149":1,"chunk-22ea8d4c":1,"chunk-40f28e5b":1,"chunk-477b98da":1,"chunk-4bf2bc4a":1,"chunk-539539c6":1,"chunk-67c1f18a":1,"chunk-692a4620":1,"chunk-6e703488":1,"chunk-7cfed818":1,"chunk-8464edc8":1,"chunk-8eb4d2dc":1,"chunk-a490d9c8":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-0629f60f":"9ff3768c","chunk-16a6a149":"058f84f2","chunk-22ea8d4c":"56c334ab","chunk-2d0da7d0":"31d6cfe0","chunk-2d0daa96":"31d6cfe0","chunk-2d2105d0":"31d6cfe0","chunk-2d225de6":"31d6cfe0","chunk-40f28e5b":"198d57b1","chunk-477b98da":"8aaff74e","chunk-4bf2bc4a":"b56e6ab2","chunk-539539c6":"6fde3ce6","chunk-568e325e":"31d6cfe0","chunk-67c1f18a":"28bcc5d2","chunk-692a4620":"30a9ee2f","chunk-6e703488":"4cabb673","chunk-7cfed818":"4ac87a00","chunk-8464edc8":"ab5c8c52","chunk-8eb4d2dc":"3077142f","chunk-a490d9c8":"26af00ff","chunk-d989b56a":"31d6cfe0"}[e]+".css",o=i.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var l=r[s],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===a||d===o))return t()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){l=u[s],d=l.getAttribute("data-href");if(d===a||d===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var a=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete c[e],h.parentNode.removeChild(h),n(r)},h.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(h)})).then((function(){c[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=r);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=s(e);var u=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(h);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",u.name="ChunkLoadError",u.type=a,u.request=c,n[1](u)}o[e]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var h=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0418":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),c=n("7911"),o=n.n(c);Object(a["v"])("data-v-34d4998e");const r={id:"header",class:"flex flex-down"},s={key:0,class:"discord-top-link flex",style:{width:"100%"}},i=Object(a["f"])("div",null,null,-1),l=Object(a["f"])("div",{class:"flex",style:{width:"80%"}},[Object(a["f"])("p",null," 遇到問題了?有建議要提供?想一起聊天?讓我們一起壯大 Minecraft 社群吧!! "),Object(a["f"])("a",{target:"_blank",class:"btn",href:"https://discord.com/invite/5xApZtgV2u",style:{"--thisColor":"rgb(173, 173, 173)"}},"加入 RPMTW 官方 Discord 伺服器")],-1),d={class:"flex else-discord"},u={class:"header-nav-left"},h={class:"menuButton"},m=Object(a["f"])("div",{class:"menuStyle"},null,-1),b=[m],f=Object(a["f"])("div",{class:"links flex"},[Object(a["f"])("a",{target:"_blank",href:"https://discord.com/invite/5xApZtgV2u"},[Object(a["f"])("img",{src:o.a,alt:""})]),Object(a["f"])("a",{target:"_blank",href:"https://github.com/RPMTW"},[Object(a["f"])("img",{src:"https://github.com/fluidicon.png",alt:""})]),Object(a["f"])("a",{target:"_blank",href:"https://modrinth.com/mod/rpmtw-update-mod"},[Object(a["f"])("img",{src:"https://modrinth.com/favicon.ico",alt:""})]),Object(a["f"])("a",{target:"_blank",href:"https://www.curseforge.com/minecraft/modpacks/atr1"},[Object(a["f"])("img",{src:"https://media.forgecdn.net/avatars/thumbnails/396/29/64/64/637595082272657724.png",alt:""})]),Object(a["f"])("a",{target:"_blank",href:"https://crowdin.com/project/resourcepack-mod-zhtw?already_accepted=14797842"},[Object(a["f"])("img",{src:"https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",alt:""})])],-1),p={class:"div-select flex flex-down"},g=["value"],k=Object(a["f"])("strong",{class:"main-title"},[Object(a["f"])("span",{class:"notranslate",style:{color:"#ff9900"}},"RPM"),Object(a["f"])("span",{style:{color:"#00ffff"},class:"notranslate"},"TW")],-1),O=[k],j={class:"header-nav-right"},v=Object(a["f"])("i",{class:"fas fa-sun"},null,-1),w=[v];function T(e,t,n,c,o,m){const k=Object(a["A"])("router-link");return Object(a["s"])(),Object(a["e"])("header",r,[o.discordLinkShow?(Object(a["s"])(),Object(a["e"])("div",s,[i,l,Object(a["f"])("div",{class:"icon x",onClick:t[0]||(t[0]=(...e)=>m.noDiscordLink&&m.noDiscordLink(...e))})])):Object(a["d"])("",!0),Object(a["f"])("div",d,[Object(a["f"])("div",u,[Object(a["f"])("div",h,[Object(a["f"])("div",{class:"menuStyleButton",href:"#",onClick:t[1]||(t[1]=(...e)=>m.menuButtonHtmlToggle&&m.menuButtonHtmlToggle(...e))},b),Object(a["f"])("div",{class:"menu",onMouseleave:t[4]||(t[4]=(...e)=>m.menuButtonHtmlRemove&&m.menuButtonHtmlRemove(...e))},[(Object(a["s"])(!0),Object(a["e"])(a["a"],null,Object(a["y"])(o.menuList,e=>(Object(a["s"])(),Object(a["e"])("div",{key:e,class:Object(a["o"])([{active:o.breadcrumb===e.breadcrumb},"activeBreadcrumb"])},[Object(a["i"])(k,{class:"go-to",to:e.to,onClick:[m.goTop,m.menuButtonHtmlRemove]},{default:Object(a["H"])(()=>[Object(a["h"])(Object(a["C"])(e.name),1)]),_:2},1032,["to","onClick"])],2))),128)),f,Object(a["f"])("div",p,[Object(a["f"])("h1",{class:"nowLang notranslate langMenu",onClick:t[2]||(t[2]=(...e)=>m.showLangOptions&&m.showLangOptions(...e))},Object(a["C"])(o.lang),1),(Object(a["s"])(!0),Object(a["e"])(a["a"],null,Object(a["y"])(o.langs,(e,n)=>(Object(a["s"])(),Object(a["e"])("div",{class:"div-option none langMenu notranslate",value:n,key:n,onClick:t[3]||(t[3]=(...e)=>m.setChoose&&m.setChoose(...e))},Object(a["C"])(e),9,g))),128))])],32)]),Object(a["f"])("div",{class:"blurry",onClick:t[5]||(t[5]=(...e)=>m.menuButtonHtmlRemove&&m.menuButtonHtmlRemove(...e))})]),Object(a["f"])("div",{class:"txt-logo user-select",onClick:t[6]||(t[6]=(...e)=>m.play_rpmtw&&m.play_rpmtw(...e))},O),Object(a["f"])("div",j,[Object(a["f"])("div",{class:"header-nav-setMode",onClick:t[7]||(t[7]=(...e)=>m.headerSetMode_click&&m.headerSetMode_click(...e)),rod:""},[Object(a["f"])("span",{class:Object(a["o"])({"mode-bright":o.bright,"mode-dark":!o.bright})},w,2)])])])])}Object(a["t"])();var y=n("9225"),C=n("8b64");function M(e,t=""){return y["default"].i18nData[y["default"].getLang()][e]||y["default"].i18nData[y["default"].set.main][e]||t}let P=0;var H={name:"Header",data(){return{langs:y["default"].set.langs,lang:`${y["default"].set.langs[y["default"].getLang()]} (${y["default"].getLang()})`,menuList:C,breadcrumb:null,bright:!1,discordLinkShow:!0,notHeader:!1,play_click:{title:{len:0,audio:new Audio("https://cdn.discordapp.com/attachments/761772992706904094/886181590324092938/thx-rpmtw.mp3")}}}},components:{},methods:{i18n:M,showLangOptions(){$("div.div-option.langMenu").toggleClass("none")},setChoose(e){let t=$(e.target).attr("value");this.lang=`${y["default"].set.langs[t]} (${t})`,y["default"].setLang(t)},headerSetMode_click(){let e=$("html").toggleClass("bright").attr("class").split(" ").includes("bright");this.bright=e,document.cookie="mode="+(e?"bright":"dark")},menuButtonHtmlToggle(){$("html").toggleClass("is-menu")},menuButtonHtmlRemove(){$("html").removeClass("is-menu")},goTop(){$("html").animate({scrollTop:0},400)},setBreadcrumb(){this.breadcrumb=this.$route.meta.breadcrumb},noDiscordLink(){localStorage.setItem("discordLink",0),this.discordLinkShow=!1,this.discordLinkShow&&$(":root").css("--html-margin-top","95px")||$(":root").css("--html-margin-top","45px")},checkHeader(){this.notHeader=this.$route.query.notHeader,this.notHeader?$("html").addClass("not-header"):$("html").removeClass("not-header")},play_rpmtw(){++this.play_click.title.len>10&&(this.play_click.title.len=0,this.play_click.title.audio.play())}},mounted(){let e=this;this.discordLinkShow=0!==parseInt(localStorage.getItem("discordLink")),$((function(){function t(){let e=Math.floor($(window).scrollTop()),t=$("#header"),n="slider--up",a="slider--down";0===e?(setTimeout(()=>{t.addClass(n)},250),t.removeClass(a)):P>e?(t.addClass(n),t.removeClass(a)):$("html").hasClass("is-menu")||(t.addClass(a),t.removeClass(n)),P=e}e.discordLinkShow&&$("html").css("--html-margin-top","95px")||$("html").css("--html-margin-top","45px"),$(window).on("scroll",()=>t()),t()})),this.setBreadcrumb(),"bright"==getCookie("mode")?$("html").addClass("bright"):document.cookie="mode=dark",document.cookie.length<=0&&alert("建議開啟 cookie 已獲得更好的體驗");let t=$("html").attr("class");this.bright=t&&t.split(" ").includes("bright")},watch:{$route(){this.setBreadcrumb(),this.checkHeader()}}};n("ef25"),n("481f");H.render=T,H.__scopeId="data-v-34d4998e";t["default"]=H},"0750":function(e,t,n){},"10ee":function(e){e.exports=JSON.parse('{"public.Game.version":"遊戲版本","public.goto.discord":"加入官方社群 (Discord)","plug.header.menu.home":"首頁","plug.header.menu.assistance":"協助翻譯","plug.header.menu.Wikipedia":"維基百科","plug.header.menu.tool":"實用工具","plug.header.menu.rank":"翻譯者排名","plug.header.menu.about":"關於我們","Home.include.public.DL-STAT":"立即下載","Home.include.public.read-more":"閱讀更多","Home.include.mod.name":"自動中文化更新模組","Home.include.mod.description":"體驗前所未見的模組翻譯，讓你的模組通通變中文吧！","Home.include.atr.name":"ATR 1 - All The RPMTW<br />模組包","Home.include.atr.description":"1.17 全新模組包，結合各種元素，盡情在織物上探險吧！","Home.top12.title":"翻譯貢獻者前12名 - 感謝你們的貢獻","Home.top12.show-more":"查看更多翻譯貢獻者","Home.announcement.title":"公告","Home.announcement.datas":["文言文：菘之幻界->白話文：白菜的幻想世界!?!?","RPMTW 官方模組啟動器製作中...","ATR官方伺服器目前為關閉狀態","較安全的模組下載平台/授權平台: Modrinth、CurseForge 黑名單模組下載平台：9Minecraft","Emm 偷偷說~~又有新坑了!!诶等等官方模組啟動器不適還沒做完嗎Emmmmmmm"],"Home.scroll.texts":["前所未見的模組繁中化","社群協力合作","翻譯全自動更新","跳脫傳統框架","遊戲內翻譯模組","專屬為您設計","與我們一起當個創世神！"],"ProgressQuery.please.enter.CurseForgeID":"請輸入CurseForgeID","ProgressQuery.title":"RPMTW 模組個別翻譯進度查詢器","ProgressQuery.description.0":"不知道自己喜歡的模組有沒有被翻譯呢?或者想了解模組的翻譯進度，那用這個工具就對了","ProgressQuery.description.1":"(目前仍處測試版狀態，資料庫尚未齊全，因此部分模組查無資料屬正常現象)","ProgressQuery.Filter.condition":"過濾條件","RPMTWUpdateMod.buttons.Participate":"參與模組翻譯","RPMTWUpdateMod.main.title":"體驗前所未見的模組繁中化","RPMTWUpdateMod.schedule.Full.version":"全版本模組翻譯進度"}')},2210:function(e,t,n){"use strict";n("9b16")},"291a":function(e,t,n){"use strict";n.r(t);var a=n("7a23");Object(a["v"])("data-v-3521c806");const c={id:"Enlarge"},o={key:0,class:"showImg scaleDraw"},r={class:"ImgDescription flex flex-center flex-down flex-item-center"},s=["src","alt","hover"],i=["href"];function l(e,t,n,l,d,u){return Object(a["I"])((Object(a["s"])(),Object(a["e"])("div",c,[d.showImg?(Object(a["s"])(),Object(a["e"])("div",o,[Object(a["f"])("div",r,[Object(a["f"])("img",{class:"not-enlarge",src:d.showImg,alt:d.description,hover:d.description},null,8,s),d.imgLink?(Object(a["s"])(),Object(a["e"])("a",{key:0,href:d.imgLink,class:"open-original line"},"開啟原尺寸圖片",8,i)):Object(a["d"])("",!0)])])):Object(a["d"])("",!0),Object(a["f"])("div",{class:"EnlargeImg-blurry",onClick:t[0]||(t[0]=e=>d.showImg=!1)})],512)),[[a["F"],d.showImg]])}Object(a["t"])();var d={name:"EnlargeImg",data(){return{showImg:null,description:null,imgLink:null}},methods:{},mounted(){let e=this;$((function(){$("html").on("click","img.showEl",(function(t){e.showImg=$(this).attr("src")||null,e.description=$(this).attr("alt")||null,e.imgLink=$(this).attr("src")||null,$("html").addClass("enlarge"),$("#EnlargeImg.not-enlarge").css({width:$(this).css("width"),height:$(this).css("height")})}))}))}};n("c53f"),n("2210");d.render=l,d.__scopeId="data-v-3521c806";t["default"]=d},"3dfd":function(e,t,n){"use strict";n.r(t);var a=n("7a23");const c=Object(a["f"])("div",{class:"flex flex-down"},[Object(a["f"])("img",{src:"https://cdn.discordapp.com/avatars/645588343228334080/f56a0b0223d5f32b902edcb362d08a5d.webp?size=128",alt:""})],-1),o=[c];function r(e,t,n,c,r,s){const i=Object(a["A"])("Header"),l=Object(a["A"])("router-view"),d=Object(a["A"])("Footer"),u=Object(a["A"])("EnlargeImg");return Object(a["s"])(),Object(a["e"])(a["a"],null,[Object(a["i"])(i),Object(a["i"])(l,{class:"wrapper"}),Object(a["i"])(d,{class:"footer"}),Object(a["f"])("div",{class:Object(a["o"])(["goTop",{showGoTop:r.showGoTop}]),onClick:t[0]||(t[0]=(...e)=>s.goTop&&s.goTop(...e))},o,2),Object(a["i"])(u)],64)}var s=n("0418"),i=n("fd2d"),l=n("291a"),d=(n("a0f1"),n("c1c3"),{name:"Main",components:{Header:s["default"],Footer:i["default"],EnlargeImg:l["default"]},methods:{goTop(){$("html").animate({scrollTop:0},400)}},data(){return{showGoTop:!1}},mounted(){let e=this;$((function(){$(window).on("scroll",()=>e.showGoTop=$(window).scrollTop()>=600)}))}});n("e056");d.render=r;t["default"]=d},4360:function(e,t,n){"use strict";n.r(t);var a=n("5502");t["default"]=Object(a["a"])({state:{},mutations:{},actions:{},modules:{}})},"481f":function(e,t,n){"use strict";n("97fd")},"48cc":function(e,t,n){"use strict";n("e77d")},"4aac":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),c=n("3dfd"),o=n("a18c"),r=n("4360");Object(a["c"])(c["default"]).use(r["default"]).use(o["default"]).mount("main")},"5aad":function(e){e.exports=JSON.parse('{"plug.header.menu.home":"首頁","plug.header.menu.assistance":"協助翻譯","plug.header.menu.Wikipedia":"維基百科","plug.header.menu.tool":"實用工具","plug.header.menu.rank":"翻譯者排名","plug.header.menu.about":"關於我們","Home.include.public.DL-STAT":"立即下載","Home.include.public.read-more":"閱讀更多","Home.include.mod.name":"自動中文化更新模組","Home.include.mod.description":"體驗前所未見的模組翻譯，讓你的模組通通變中文吧！","Home.include.atr.name.0":"ATR 1 - All The RPMTW","Home.include.atr.name.1":"模組包","Home.include.atr.description":"1.17 全新模組包，結合各種元素，盡情在織物上探險吧！","Home.top12.title":"翻譯貢獻者前12名 - 感謝你們的貢獻","Home.top12.show-more":"查看更多翻譯貢獻者","Home.announcement.datas":["Classical Chinese: The Illusionary World of Siong -> Vernacular Chinese: The Fantasy World of Cabbage!?!?"],"Home.scroll.texts":["前所未見的模組繁中化","社群協力合作","翻譯全自動更新","跳脫傳統框架","遊戲內翻譯模組","專屬為您設計","與我們一起當個創世神！"]}')},6742:function(e){e.exports=JSON.parse("{}")},7911:function(e,t,n){e.exports=n.p+"img/discord.84754150.png"},"8b64":function(e){e.exports=JSON.parse('[{"to":"/","name":"首頁","breadcrumb":"Home"},{"to":"/Translation-assistance","name":"協助翻譯","breadcrumb":"Assistance"},{"to":"/Wiki","name":"維基百科","breadcrumb":"Wiki"},{"to":"/ProgressQuery","name":"實用工具","breadcrumb":"ProgressQuery"},{"to":"/Contributor","name":"翻譯貢獻者排名","breadcrumb":"Contributor"},{"to":"/Partner","name":"合作夥伴","breadcrumb":"Partner"},{"to":"/Translator","name":"線上模組翻譯系統","breadcrumb":"Translator"},{"to":"/About","name":"關於我們","breadcrumb":"About"}]')},9225:function(e,t,n){"use strict";n.r(t);var a=n("10ee"),c=n("6742"),o=n("5aad");t["default"]={set:{main:"zh_tw",langs:{zh_tw:"繁體中文",zh_cn:"简体中文",en_us:"English"}},getLang(){return localStorage.getItem("lang")||this.set.main},setLang(e){return localStorage.setItem("lang",e),window.location.reload()},i18nData:{zh_tw:a,zh_cn:c,en_us:o}}},"97fd":function(e,t,n){},"9b16":function(e,t,n){},a0f1:function(e,t,n){},a18c:function(e,t,n){"use strict";n.r(t);var a=n("6c02"),c=n("c601");const o=[{path:"/",name:"Home",component:()=>n.e("chunk-67c1f18a").then(n.bind(null,"bb51")),meta:{breadcrumb:"Home"}},{path:"/about",name:"About",component:()=>n.e("chunk-6e703488").then(n.bind(null,"f820")),meta:{breadcrumb:"About"}},{path:"/Contributor",name:"Contributor",component:()=>n.e("chunk-22ea8d4c").then(n.bind(null,"dd86")),meta:{breadcrumb:"Contributor"}},{path:"/Translation-assistance",name:"Assistance",component:()=>n.e("chunk-539539c6").then(n.bind(null,"f74e")),meta:{breadcrumb:"Assistance"}},{path:"/Translation-assistance/Translation-Tutorials",name:"Tutorials",component:()=>n.e("chunk-40f28e5b").then(n.bind(null,"2d34"))},{path:"/ProgressQuery",name:"ProgressQuery",component:()=>n.e("chunk-8eb4d2dc").then(n.bind(null,"964f")),meta:{breadcrumb:"ProgressQuery"}},{path:"/Wiki",name:"WikiMenuList",meta:{breadcrumb:"Wiki",notFooter:!0},component:()=>n.e("chunk-0629f60f").then(n.bind(null,"c89e")),children:[{path:"",components:{data:c["default"]}},{path:"QandA",components:{data:c["default"]}},{path:"AssistTranslation",components:{data:()=>n.e("chunk-568e325e").then(n.bind(null,"1b8e"))}},{path:"InstallAndUse",components:{data:()=>n.e("chunk-2d225de6").then(n.bind(null,"e5dd"))}},{path:"ModInfo",components:{data:()=>n.e("chunk-d989b56a").then(n.bind(null,"38c0"))}},{path:"OtherInfo",components:{data:()=>n.e("chunk-2d0da7d0").then(n.bind(null,"6c8e"))}}]},{path:"/RPMTWUpdateMod",name:"RPMTWUpdateMod",component:()=>n.e("chunk-16a6a149").then(n.bind(null,"752c"))},{path:"/install/version",name:"version",component:()=>n.e("chunk-a490d9c8").then(n.bind(null,"733e")),meta:{breadcrumb:"Version"}},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>n.e("chunk-4bf2bc4a").then(n.bind(null,"4b62")),meta:{breadcrumb:"ProgressQuery"}},{path:"/atr1",name:"ATR1",component:()=>n.e("chunk-692a4620").then(n.bind(null,"a951"))},{path:"/test",name:"TEST",component:()=>n.e("chunk-2d0daa96").then(n.bind(null,"6d0b"))},{path:"/Partner",name:"Partner",component:()=>n.e("chunk-8464edc8").then(n.bind(null,"2764")),meta:{breadcrumb:"Partner"}},{path:"/RWL",name:"RWL",component:()=>n.e("chunk-7cfed818").then(n.bind(null,"0818"))},{path:"/Translator",name:"Translator",component:()=>n.e("chunk-477b98da").then(n.bind(null,"09c0"))},{path:"/CosmicChat",name:"CosmicChat",component:()=>n.e("chunk-2d2105d0").then(n.bind(null,"b826"))}],r=Object(a["a"])({history:Object(a["b"])("/"),routes:o});r.beforeEach((e,t,n)=>{document.title=e.meta.title||document.title,n()}),t["default"]=r},b9ac:function(e,t,n){e.exports=n.p+"img/autoTranslation.1a4e811f.png"},c1c3:function(e,t,n){},c53f:function(e,t,n){"use strict";n("fdc5")},c601:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),c=n("b9ac"),o=n.n(c);const r={id:"AssistTranslation",class:"wiki"},s={class:"content"},i=Object(a["f"])("section",{class:"section",id:"what-is-RPMTW"},[Object(a["f"])("h1",null,"什麼是 RPMTW 自動中文化更新模組?"),Object(a["f"])("p",null," 此模組是一個Minecraft模組繁體中文化的新興模組，主打「方便、快速、簡單、合作」，希望能夠打破傳統翻譯模組的方式，以及解決許多新/老手想翻譯模組但卻覺得很難/遊玩模組時被看不懂的文字困惑。 ")],-1),l={class:"section",id:"install-method"},d=Object(a["f"])("h1",null,"這模組要如何安裝?",-1),u=Object(a["h"])("<<點我查看教學>>"),h=Object(a["f"])("section",{class:"section",id:"server-need-install"},[Object(a["f"])("h1",null,"伺服器端需要安裝嗎?"),Object(a["f"])("p",null," 伺服器不用安裝，因為伺服器端不會顯示內容並不需要安裝此模組，只需客戶端安裝就能享受翻譯體驗。 ")],-1),m=Object(a["f"])("section",{class:"section",id:"RPMTW-version"},[Object(a["f"])("h1",null,"RPMTW 支援 1.12.2 以下的版本嗎? RPMTW支援那些Minecraft版本?"),Object(a["f"])("p",null,[Object(a["h"])(" RPMTW 「不打算」支援 1.12.2 以下的Minecraft版本。"),Object(a["f"])("br"),Object(a["h"])(" 目前RPMTW支援的版本有 1.12、1.16、1.17，未來有新版本釋出也會盡快更新。 ")])],-1),b=Object(a["f"])("section",{class:"section",id:"support-forge-or-fabric"},[Object(a["f"])("h1",null,"RPMTW 支援Forge嗎? 支援Fabric嗎?"),Object(a["f"])("p",null,[Object(a["f"])("span",{style:{"text-decoration":"line-through"}},"小孩子才做選擇，RPMTW 全都要"),Object(a["h"])(" (Forge/Fabric雙平台都支援)。 ")])],-1),f=Object(a["f"])("section",{class:"section",id:"discord-or-line"},[Object(a["f"])("h1",null," 有Discord或Line嗎? 我想詢問相關問題或者建議又或者想與大家一起聊天 "),Object(a["f"])("a",{target:"_blank",href:"https://discord.com/invite/5xApZtgV2u",class:"go-discord btn"},"前往 Discord 群組")],-1),p=Object(a["f"])("section",{class:"section",id:"translation-process"},[Object(a["f"])("h1",null,"這什麼原理，可以全自動化的翻譯流程?"),Object(a["f"])("p",null,"下方有一張簡易的示意圖喔w"),Object(a["f"])("br"),Object(a["f"])("img",{src:o.a,alt:"簡易的示意圖"})],-1);function g(e,t,n,c,o,g){const k=Object(a["A"])("router-link");return Object(a["s"])(),Object(a["e"])("div",r,[Object(a["f"])("div",s,[i,Object(a["f"])("section",l,[d,Object(a["i"])(k,{to:"/install/version"},{default:Object(a["H"])(()=>[u]),_:1})]),h,m,b,f,p])])}var k={name:"QandA",data(){return{}}};k.render=g;t["default"]=k},e056:function(e,t,n){"use strict";n("0750")},e77d:function(e,t,n){},ef25:function(e,t,n){"use strict";n("4aac")},fd2d:function(e,t,n){"use strict";n.r(t);var a=n("7a23");Object(a["v"])("data-v-36b75416");const c={key:0,class:"Footer"},o={class:"flex flex-down"},r=Object(a["f"])("a",{target:"_blank",href:"https://github.com/RPMTW"},"RPMTW Team",-1),s=Object(a["h"])(" and "),i=Object(a["f"])("a",{target:"_blank",href:"https://github.com/a3510377"},"猴子#3807",-1);function l(e,t,n,l,d,u){return d.notFooter?(Object(a["s"])(),Object(a["e"])("div",c,[Object(a["f"])("footer",o,[Object(a["f"])("p",null,[Object(a["h"])(" Copyright © RPMTW "+Object(a["C"])(d.newYear)+" Powered by The ",1),r,s,i])])])):Object(a["d"])("",!0)}Object(a["t"])();var d={name:"Footer",data(){return{notFooter:!0,newYear:(new Date).getFullYear()}},watch:{$route(){this.notFooter=!(this.$route.meta.notFooter||this.$route.query.notFooter)}}};n("48cc");d.render=l,d.__scopeId="data-v-36b75416";t["default"]=d},fdc5:function(e,t,n){}});
//# sourceMappingURL=app.dad0d057.js.map