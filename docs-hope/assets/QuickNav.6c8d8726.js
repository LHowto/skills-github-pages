import{_ as C}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,q as o,w as r,r as c,u as i,c as p,m as _,b as a,F as f,e as d,t as h}from"./app.4503827a.js";const N={data(){return{quickNav:[{category:"搜索引擎",items:[{title:"百度",src:"https://www.baidu.com/",isPerfect:!1},{title:"必应",src:"https://cn.bing.com/",isPerfect:!0}]},{category:"开源社区",items:[{title:"Dromara",src:"https://gitee.com/dromara",isPerfect:!0},{title:"OSRC-开源运行时社区",src:"https://www.osrc.com/",isPerfect:!0},{title:"Doocs开源社区",src:"https://doocs.gitee.io/#/README_CN",isPerfect:!0}]},{category:"优质博客",items:[{title:"Road2Coding",src:"https://r2coding.com/#/",isPerfect:!0},{title:"大都督的技术博客",src:"https://www.yuque.com/renyong-jmovm/dadudu",isPerfect:!0},{title:"Gitstar Ranking",src:"https://gitstar-ranking.com/",isPerfect:!0},{title:"JeeWeiXin",src:"https://jeeweixin.com/",isPerfect:!0},{title:"徐靖峰的博客",src:"https://www.cnkirito.moe/",isPerfect:!0},{title:"芋道源码",src:"https://www.iocoder.cn/",isPerfect:!0},{title:"虫洞栈",src:"https://bugstack.cn/",isPerfect:!1},{title:"全栈知识体系",src:"https://www.pdai.tech/",isPerfect:!0},{title:"程序猿DD",src:"https://blog.didispace.com/",isPerfect:!0},{title:"LABULADONG",src:"https://labuladong.gitee.io/algo/",isPerfect:!0}]},{category:"其他导航",items:[{title:"MyOctoCat",src:"https://myoctocat.com/",isPerfect:!0},{title:"LeetCode",src:"https://leetcode.cn/",isPerfect:!0},{title:"Jar包下载",src:"https://search.maven.org/",isPerfect:!0},{title:"ghelper",src:"http://ghelper.net/",isPerfect:!0},{title:"Maven仓库",src:"https://mvnrepository.com/",isPerfect:!0}]}]}},methods:{gotoSite(l){window.open(l,"_blank").location}}};function D(l,S,q,B,g,n){const u=c("el-card"),m=c("el-col"),w=c("el-row"),P=c("el-scrollbar"),k=c("el-tab-pane"),y=c("el-tabs");return s(),o(y,{"tab-position":"left",style:{height:"600px"}},{default:r(()=>[i(" 标签页 "),(s(!0),p(f,null,_(g.quickNav,(t,v)=>(s(),o(k,{label:t.category,key:v},{default:r(()=>[i(" 使用珊格操作 "),a(P,{height:"600px"},{default:r(()=>[(s(!0),p(f,null,_(Math.ceil(t.items.length/2),(L,e)=>(s(),o(w,{gutter:10,key:e,style:{"margin-bottom":"10px"}},{default:r(()=>[i(` 
                    0-（0、1）-（i*2,i*2+1）
                    1-（2、3）-（i*2,i*2+1）
                    2-（4、5）-（i*2,i*2+1）
                 `),t.items[e*2]!=null?(s(),o(m,{key:0,span:12},{default:r(()=>[a(u,{shadow:"hover",style:{"border-radius":"10px"},onClick:b=>n.gotoSite(t.items[e*2].src)},{default:r(()=>[d(h(t.items[e*2].isPerfect?t.items[e*2].title+"⚡️":t.items[e*2].title),1)]),_:2},1032,["onClick"])]),_:2},1024)):i("v-if",!0),t.items[e*2+1]!=null?(s(),o(m,{key:1,span:12},{default:r(()=>[a(u,{shadow:"hover",style:{"border-radius":"10px"},onClick:b=>n.gotoSite(t.items[e*2+1].src)},{default:r(()=>[d(h(t.items[e*2+1].isPerfect?t.items[e*2+1].title+"⚡️":t.items[e*2+1].title),1)]),_:2},1032,["onClick"])]),_:2},1024)):i("v-if",!0)]),_:2},1024))),128))]),_:2},1024)]),_:2},1032,["label"]))),128))]),_:1})}const j=C(N,[["render",D],["__scopeId","data-v-5e891ad8"],["__file","QuickNav.vue"]]);export{j as default};
