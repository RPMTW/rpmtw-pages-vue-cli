(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b7ba9570"],{"00c8":function(e,t,s){"use strict";s("32ae")},"32ae":function(e,t,s){},"964f":function(e,t,s){"use strict";s.r(t);var c=s("7a23");const r={id:"ProgressQuery"},n={class:"pageInfo"},a=Object(c["h"])("br",null,null,-1),i={class:"sets flex"},l={class:"flex filter"},o={class:"dropdown"},d={class:"dropHover"},p={class:"dropdownContent"},u=Object(c["h"])("div",{class:"output flex"},null,-1);function h(e,t,s,h,b,g){return Object(c["q"])(),Object(c["d"])("div",r,[Object(c["h"])("h3",n,[Object(c["h"])("h1",null,Object(c["A"])(g.i18n("ProgressQuery.title")),1),Object(c["g"])(" "+Object(c["A"])(g.i18n("ProgressQuery.description.0")),1),a,Object(c["g"])(" "+Object(c["A"])(g.i18n("ProgressQuery.description.1")),1)]),Object(c["h"])("div",i,[Object(c["h"])("div",null,[Object(c["G"])(Object(c["h"])("input",{id:"search",type:"text",placeholder:g.i18n("ProgressQuery.please.enter.CurseForgeID"),"aria-label":g.i18n("ProgressQuery.please.enter.CurseForgeID"),onKeyup:t[1]||(t[1]=Object(c["H"])((...e)=>g.generateList&&g.generateList(...e),["enter"])),onChange:t[2]||(t[2]=(...e)=>g.generateList&&g.generateList(...e)),"onUpdate:modelValue":t[3]||(t[3]=e=>b.search=e)},null,40,["placeholder","aria-label"]),[[c["C"],b.search]])]),Object(c["h"])("div",l,[Object(c["h"])("label",null,[Object(c["g"])(Object(c["A"])(g.i18n("ProgressQuery.Filter.condition"))+": ",1),Object(c["h"])("div",o,[Object(c["h"])("p",d,Object(c["A"])(g.i18n("public.Game.version")),1),Object(c["h"])("div",p,[Object(c["h"])("p",{onClick:t[4]||(t[4]=(...e)=>g.chosen&&g.chosen(...e)),"click-type":"1.12",class:"chosen"},"1.12"),Object(c["h"])("p",{onClick:t[5]||(t[5]=(...e)=>g.chosen&&g.chosen(...e)),"click-type":"1.16",class:"chosen"},"1.16"),Object(c["h"])("p",{onClick:t[6]||(t[6]=(...e)=>g.chosen&&g.chosen(...e)),"click-type":"1.17",class:"chosen"},"1.17")])])])])]),u])}var b=s("9225");function g(e,t=""){return b["a"].i18nData[b["a"].getLang()][e]||b["a"].i18nData[b["a"].set.main][e]||t}let v=()=>{for(let e of $(".circle-bar")){let t=$(e).find(".mask .percent");if(t.text().includes("NaN"))t.text("0%");else{let s=parseInt(t.text()),c=$(e).css("background-color");s<=50?$(e).find(".circle-bar-right").css("transform",`rotate(${10*s}deg)`):($(e).find(".circle-bar-right").css({transform:"rotate(0deg)","background-color":c}),$(e).find(".circle-bar-left").css("transform",`rotate(${3.6*(s-50)}deg)`))}}},f=e=>{let t=e.attr("class");return t&&t.split().includes("chosen")?e.attr("click-type"):null};var j={name:"ProgressQuery",data(){return{search:"",datas:[]}},methods:{i18n:g,chosen(e){$(e.target).toggleClass("chosen")},generateList(){let e=this.search,t=this.datas,s=[t[f($(".dropdownContent p[click-type='1.12']"))],t[f($(".dropdownContent p[click-type='1.16']"))],t[f($(".dropdownContent p[click-type='1.17']"))]];$(".output").html("");let c=0;if(e)for(let r of s)r&&Object.keys(r).map(t=>{++c>25||(t.includes(e)||r[t].ModID.includes(e))&&$(".output").append(`<div><div><h5>CurseForgeID: ${t}<br>模組ID: ${r[t].ModID}<h5></div><div class="circle-bar"><div class="circle-bar-left"></div><div class="circle-bar-right"></div><div class="mask"><span class="percent">${parseInt(r[t].Progress)}%</span></div></div></div>`)});else for(let r of s)r&&Object.keys(r).map(e=>{++c>10||$(".output").append(`<div><div><h5>CurseForgeID: ${e}<br>模組ID: ${r[e].ModID}<h5></div><div class="circle-bar"><div class="circle-bar-left"></div><div class="circle-bar-right"></div><div class="mask"><span class="percent">${parseInt(r[e].Progress)}%</span></div></div></div>`)});$(".output").html().length<0&&$(".output").html("無"),v()}},mounted(){["1.12","1.16","1.17"].map(e=>{$.getJSON(`https://raw.githubusercontent.com/RPMTW/RPMTW-website-data/main/data/CrowdinIndex-${e}.json`,t=>{this.datas[e]=t})})}};s("00c8");j.render=h;t["default"]=j}}]);
//# sourceMappingURL=chunk-b7ba9570.f24ac1f2.js.map