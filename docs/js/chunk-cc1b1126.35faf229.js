(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cc1b1126"],{"09c0":function(e,t,o){"use strict";o.r(t);var a=o("7a23");Object(a["w"])("data-v-400dece5");const n={id:"Crowdin",class:"flex flex-down flex-item-center"},c={key:0,class:"userInfo flex flex-item-center"},s=["src"],i=["textContent"];function u(e,t,o,u,l,r){const d=Object(a["B"])("Login"),b=Object(a["B"])("SearchMod");return Object(a["t"])(),Object(a["f"])("div",n,[Object(a["g"])("div",{class:Object(a["p"])({"CrowdinLogin-blurry":l.go})},null,2),Object(a["K"])(Object(a["g"])("div",{class:Object(a["p"])(["output",{isOk:e.isOK}])},[Object(a["g"])("div",{class:"close icon x",onClick:t[0]||(t[0]=e=>l.output=null)}),Object.keys(l.output||{}).length>0?(Object(a["t"])(),Object(a["f"])("div",c,[Object(a["g"])("img",{src:l.output.avatarUrl,alt:""},null,8,s),Object(a["g"])("p",{textContent:Object(a["D"])(`${l.output.fullName}(${l.output.username}) 登入成功!!`)},null,8,i)])):Object(a["e"])("",!0)],2),[[a["H"],l.output]]),l.go?(Object(a["t"])(),Object(a["d"])(d,{key:0,onGo:t[1]||(t[1]=e=>l.go=!1)})):(Object(a["t"])(),Object(a["d"])(b,{key:1}))])}Object(a["u"])();var l=o("3529"),r=o.n(l),d=o("dae4"),b=o("ac2e"),f={name:"Crowdin",data(){return{go:null,output:null}},components:{Login:d["default"],SearchMod:b["default"]},methods:{},mounted(){r.a.getData("/user").done(e=>{this.go=!Object.keys(e).length>0,this.output=e.data,setTimeout(()=>this.output=null,3e3)}).catch(e=>{this.go=!0,401===e.status&&(this.go=!0)})}};o("f93c");f.render=u,f.__scopeId="data-v-400dece5";t["default"]=f},"24a7":function(e,t,o){e.exports=o.p+"img/go-left.c6f739c9.svg"},3529:function(e,t){let o=(e,t=null)=>$.ajax({type:"GET",headers:{Authorization:"Bearer "+(t||getCookie("crowdinToken"))},url:`${Sets.CrowdinBaseAPI}${e}`,success:e=>e}),a=30;e.exports={getData:o,functions:{getDirectories:(e="1.17",t="",n=1)=>o(`/projects/${Sets.CrowdinID}/directories?directoryId=${Sets.VersionDirID[e]}&offset=${n*a}&limit=${a}${t?"&filter=filter":""}`),getCurseFile:(e,t=1)=>o(`/projects/${Sets.CrowdinID}/files?directoryId=${e}&recursion&offset=${t*a}&limit=${a}`),getCurseForgeModInfo:e=>$.getJSON(`${Sets.actingURL}/curseForge/api/?url=addon/${e}`),getCurseForgeIndex:(e,t)=>$.getJSON(`https://raw.githubusercontent.com/RPMTW/ResourcePack-Mod-zh_tw/${{1.16:"Original"}[e]||"Original-"+e}/${e}/CurseForgeIndex.json`)}}},"35b2":function(e,t,o){},"68e1":function(e,t,o){e.exports=o.p+"img/fake-website.457f9dd8.svg"},a869:function(e,t,o){"use strict";o("e661")},ac2e:function(e,t,o){"use strict";o.r(t);var a=o("7a23");Object(a["w"])("data-v-1304f422");const n={id:"ModTranslation"},c={class:"sets"},s=Object(a["g"])("label",{for:"modId"},"搜尋模組",-1),i={id:"version"},u=["value"],l=["value"],r={class:"output flex flex-down flex-item-center"};function d(e,t,o,d,b,f){const O=Object(a["B"])("MakeModInfo");return Object(a["t"])(),Object(a["f"])("div",n,[Object(a["g"])("div",c,[s,Object(a["K"])(Object(a["g"])("input",{type:"text",id:"modId",placeholder:"請輸入模組ID","onUpdate:modelValue":t[0]||(t[0]=e=>b.data.modId=e),onKeyup:t[1]||(t[1]=Object(a["L"])((...e)=>f.setAll&&f.setAll(...e),["enter"]))},null,544),[[a["G"],b.data.modId]]),Object(a["g"])("div",{class:"btn",onClick:t[2]||(t[2]=(...e)=>f.setAll&&f.setAll(...e))},"搜尋"),Object(a["g"])("select",i,[(Object(a["t"])(),Object(a["f"])("option",{key:e.value=Object.keys(b.Sets.VersionDirID)[0],value:e.value},Object(a["D"])(e.value),9,u)),(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["z"])(Object.keys(b.Sets.VersionDirID).slice(1),e=>(Object(a["t"])(),Object(a["f"])("option",{key:e,value:e},Object(a["D"])(e),9,l))),128))])]),Object(a["g"])("div",r,[(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["z"])(b.mods,e=>(Object(a["t"])(),Object(a["d"])(O,{key:e,modData:e,a:e},null,8,["modData","a"]))),128))])])}Object(a["u"])();var b=o("3529"),f=o.n(b),O=o("f4d9"),j={name:"ModTranslation",data(){return{Sets:window.Sets,data:{version:null,modId:null},mods:null,page:0,resource:{}}},components:{MakeModInfo:O["default"]},methods:{setAll(){let e=this;e.data.version=Array.from($("#version option:checked")).map(e=>e.value)[0],f.a.functions.getDirectories(e.data.version,e.data.modId,e.page).done(t=>{e.mods=t.data.map(t=>({modName:e.resource[e.data.version][t.data.name]||t.data.name,data:t.data}))})}},mounted(){let e=this;for(let t in Sets.VersionDirID)f.a.functions.getCurseForgeIndex(t).done(o=>e.resource[t]=o)}};o("a869");j.render=d,j.__scopeId="data-v-1304f422";t["default"]=j},b711:function(e,t,o){"use strict";o("ca61")},c263:function(e,t,o){e.exports=o.p+"img/login.73ed354b.svg"},ca61:function(e,t,o){},dae4:function(e,t,o){"use strict";o.r(t);var a=o("7a23"),n=o("c263"),c=o.n(n);Object(a["w"])("data-v-33265dc0");const s={id:"CrowdinLogin"},i={class:"data flex flex-down"},u=Object(a["g"])("h2",{class:"title"},"登入 Crowdin 帳號",-1),l={class:"input-token-div"},r=["type","value"],d=Object(a["g"])("label",null,"請輸入登入權杖",-1),b=["href"],f={key:0,class:"userInfo flex flex-item-center"},O=["src"],j=["textContent"],g=["textContent"];function m(e,t,o,n,m,p){return Object(a["t"])(),Object(a["f"])("div",s,[Object(a["g"])("div",i,[u,Object(a["g"])("div",null,[Object(a["g"])("div",l,[Object(a["K"])(Object(a["g"])("input",{id:"inputToken","onUpdate:modelValue":t[0]||(t[0]=e=>m.value=e),type:m.showToken?"text":"password",class:Object(a["p"])({value:m.value}),value:m.value,onKeyup:t[1]||(t[1]=Object(a["L"])((...e)=>p.check&&p.check(...e),["enter"]))},null,42,r),[[a["F"],m.value]]),d]),Object(a["g"])("p",{onClick:t[2]||(t[2]=e=>m.showToken=!m.showToken),class:"showToken-btn user-select text-center"},Object(a["D"])(m.showToken?"隱藏":"顯示")+"登入權杖 ",1)]),Object(a["g"])("img",{class:"icon-login",src:c.a,alt:"登入",onClick:t[3]||(t[3]=(...e)=>p.check&&p.check(...e))}),Object(a["g"])("div",null,[Object(a["g"])("a",{class:"user-select",href:m.Sets.CrowdinOauthAPI},"使用其它方式",8,b)])]),Object(a["K"])(Object(a["g"])("div",{class:Object(a["p"])(["output",{isOk:m.isOK}])},[Object(a["g"])("div",{class:"close icon x",onClick:t[4]||(t[4]=e=>m.output=null)}),Object.keys(m.output||{}).length>0&&m.output.avatarUrl?(Object(a["t"])(),Object(a["f"])("div",f,[Object(a["g"])("img",{src:m.output.avatarUrl,alt:""},null,8,O),Object(a["g"])("p",{textContent:Object(a["D"])(`${m.output.fullName}(${m.output.username}) 登入成功!!`)},null,8,j)])):(Object(a["t"])(),Object(a["f"])("h2",{key:1,textContent:Object(a["D"])(m.output)},null,8,g))],2),[[a["H"],m.output]])])}Object(a["u"])();var p=o("3529"),v=o.n(p),h={name:"CrowdinLogin",data(){return{showToken:!1,value:null,output:null,isOK:!0,Sets:window.Sets}},components:{},methods:{check(e){this.value?(this.isOK=!0,this.output="登入中...",v.a.getData("/user",this.value).done(e=>{this.output=e.data,this.isOK=!0,setTimeout(()=>{document.cookie="crowdinToken="+this.value,this.$emit("go",this.value)},3e3)}).catch(e=>{401===e.status&&(this.isOK=!1,this.output="登入權杖錯誤!!")})):$("#inputToken").addClass("value-isNull")}},mounted(){v.a.getData("/user",this.$route.query.data).done(e=>{e.data&&e.data.id&&(this.value=this.$route.query.data,document.cookie="crowdinToken="+this.value,this.$emit("go",this.value))}).catch(e=>console.warn("<API> /user -> error: ",e)),this.value=getCookie("crowdinToken")}};o("b711");h.render=m,h.__scopeId="data-v-33265dc0";t["default"]=h},e661:function(e,t,o){},ef03:function(e,t,o){},f181:function(e,t,o){"use strict";o("ef03")},f4d9:function(e,t,o){"use strict";o.r(t);var a=o("7a23"),n=o("24a7"),c=o.n(n);Object(a["w"])("data-v-1a528afc");const s=["href"],i={class:"flex flex-item-center modDescription"},u=["src"],l={class:"modeName"},r={class:"auto-overflow"},d=["href"],b=Object(a["g"])("img",{class:"goBtn",src:c.a,"aria-label":"在CurseForge中查看此模組",alt:""},null,-1),f=[b];function O(e,t,o,n,c,b){return c.info?(Object(a["t"])(),Object(a["f"])("a",{key:0,id:"MakeMod",class:"flex",href:`${c.BASE_URL||"/"}Translator/AssistTranslation/${o.modData.data.id}`},[Object(a["g"])("div",i,[Object(a["g"])("img",{src:(c.info.error||!c.info.attachments[0])&&c.fake_website||c.info.attachments[0].thumbnailUrl,class:"modIcon",alt:""},null,8,u),Object(a["g"])("div",l,[Object(a["g"])("h1",r,Object(a["D"])((c.info.error||!c.info.attachments[0])&&o.modData.modName||c.info.name),1)])]),Object(a["K"])(Object(a["g"])("a",{href:c.info.websiteUrl},f,8,d),[[a["H"],c.info.websiteUrl]])],8,s)):Object(a["e"])("",!0)}Object(a["u"])();var j=o("3529"),g=o.n(j),m={name:"MakeMod",data(){return{info:null,fake_website:o("68e1"),BASE_URL:"/"}},methods:{},mounted(){let e=this;$((function(){console.log(e.modData),g.a.functions.getCurseForgeModInfo(e.modData.modName).then(t=>e.info=t)}))},props:{modData:String}};o("f181");m.render=O,m.__scopeId="data-v-1a528afc";t["default"]=m},f93c:function(e,t,o){"use strict";o("35b2")}}]);
//# sourceMappingURL=chunk-cc1b1126.35faf229.js.map