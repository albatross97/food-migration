(this["webpackJsonpfinal-project"]=this["webpackJsonpfinal-project"]||[]).push([[0],{165:function(e,t,n){},166:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),i=n(39),s=n.n(i),a=(n(65),n(1));var o=function(){return Object(a.jsx)("div",{className:"progress-bar",children:"Progress Bar"})};var l=function(){return Object(a.jsxs)("div",{className:"footer",children:[Object(a.jsx)("h1",{children:"Team"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"Huiwen Shi"}),Object(a.jsx)("li",{children:"Rui Wang"}),Object(a.jsx)("li",{children:"Ziyi Tang"}),Object(a.jsx)("li",{children:"Yingu Pan"})]})]})};var d=function(e){return Object(a.jsxs)("div",{className:"layout",children:[Object(a.jsx)(o,{}),Object(a.jsx)("main",{className:"main",children:e.children}),Object(a.jsx)(l,{})]})};function u(){return Object(a.jsxs)("div",{className:"section center intro",children:[Object(a.jsxs)("div",{className:"header-container",children:[Object(a.jsx)("h1",{children:"Food Security and Migration"}),Object(a.jsx)("p",{className:"subtitle",children:"A Data Visualization Story in Northern Triangle Region of Central America"})]}),Object(a.jsx)("small",{children:"SCROLL TO CONTINUE"})]})}var j=function(){return Object(a.jsx)("div",{className:"section outro",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("div",{className:"summary",children:[Object(a.jsx)("h1",{children:"Summary"}),Object(a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin ac orci phasellus egestas. Donec enim diam vulputate ut pharetra sit amet. Et magnis dis parturient montes nascetur ridiculus."}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{children:"Facilisis sed odio morbi quis commodo. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin ac orci phasellus egestas. Donec enim diam vulputate ut pharetra sit amet. Et magnis dis parturient montes nascetur ridiculus."}),Object(a.jsx)("p",{children:"Facilisis sed odio morbi quis commodo. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."})]}),Object(a.jsxs)("div",{className:"sources",children:[Object(a.jsxs)("div",{className:"reference",children:[Object(a.jsx)("h1",{children:"Reference"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),Object(a.jsx)("li",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]}),Object(a.jsxs)("div",{className:"data-source",children:[Object(a.jsx)("h1",{children:"Data Source"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),Object(a.jsx)("li",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),Object(a.jsx)("li",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]})]})]})})},h=function(e){var t=e.header,n=e.main;return Object(a.jsxs)("div",{className:"section-card",children:[Object(a.jsx)("h1",{children:t}),Object(a.jsx)("p",{children:n})]})},b=n(3),m=n(4),p=window.innerWidth,f=window.innerHeight,x=["GTM","HND","SLV"],O="#f8ad96",v="#eb5832",g="#f0f0f0",y="#bcbcbc",N=function(){var e=c.a.useRef(null),t=c.a.useRef(null),n=Object(r.useState)(null),i=Object(b.a)(n,2),s=i[0],o=i[1];Object(r.useEffect)((function(){m.j("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson").then((function(e){o(e)}))}),[]);var l=m.o(t.current).attr("width",p).attr("height",f).append("g").attr("transform","translate(".concat(7*p/8,", ").concat(f/6,")"));return Object(r.useEffect)((function(){if(s){var e=m.h().scale(p/.6/Math.PI).translate([p/2,f/2]),t=l.selectAll("path").data(s.features),n=m.o("#tooltip-map");t.enter().append("path").on("mouseover",(function(e,t){n.html("<p>In <span>".concat(t.properties.name,"</span>, around <span>(??)%</span> of the population migrate to the US.<p>")).style("left","".concat(.8*e.clientX,"px")).style("top",(function(){return e.clientY-window.innerHeight/2>0?"".concat(.8*e.clientY,"px"):"".concat(e.clientY,"px")})).classed("hidden",!1),m.o(this).attr("fill",(function(e){return x.includes(e.id)?v:y}))})).on("mouseout",(function(e,t){n.classed("hidden",!0),m.o(this).attr("fill",(function(e){return x.includes(e.id)?O:g}))})).attr("fill",g).transition().duration(1e3).attr("fill",(function(e){return x.includes(e.id)?O:g})).attr("d",m.i().projection(e)).style("stroke","#fff").style("stroke-width",1).attr("class","Country")}}),[s]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{id:"tooltip-map",className:"tooltip hidden",ref:e}),Object(a.jsx)("svg",{className:"map-chart",ref:t})]})},w=(n(163),function(){return Object(a.jsxs)("div",{className:"section migration",children:[Object(a.jsx)(N,{}),Object(a.jsxs)("div",{className:"section-card  no-hover",children:[Object(a.jsxs)("h1",{children:[Object(a.jsx)("span",{className:"red",children:"Migration status"}),Object(a.jsx)("br",{})," in the Northern Triangle Region"]}),Object(a.jsx)("p",{children:"Migration from Central America to the U.S. began rising notably in the 1980s, and continued to increase in subsequent decades."}),Object(a.jsx)("br",{}),Object(a.jsxs)("p",{children:["More recently, the number of immigrants \u2013",Object(a.jsx)("span",{children:"lawful and unauthorized"})," \u2013 from the three Northern Triangle nations ",Object(a.jsx)("span",{children:"rose by 25%"})," between 2007 and 2015. During that same period, the immigrant population from Mexico, the largest birth country for U.S. immigrants, declined 6%."]})]})]})}),S=n(9),A=n.p+"static/media/food-global.2b92dcb9.csv",D=0,M=50,k=30,E=30,F=1e3-k-E,L=450-D-M,T=["Honduras","El Salvador","Guatemala","United States of America"],R=4,I=5,q=.1,H=1,_=1,P=2,C="#6bbaad",Y="#eb5832",U="#e0e0e0",z="#808080",W=function(e){var t=e.steps,n=e.direction,i=c.a.useRef(null),s=c.a.useRef(null),o=Object(r.useState)(null),l=Object(b.a)(o,2),d=l[0],u=l[1];Object(r.useEffect)((function(){m.b(A).then((function(e){u(e)}))}),[]);var j=m.o(s.current).attr("width","100%").attr("viewBox","0 0 ".concat(F+k+E," ").concat(L+D+M)).attr("preserveAspectRatio","xMaxYMin meet").append("g").attr("transform","translate(".concat(k,", ").concat(D,")"));j.append("g").attr("transform","translate(0, ".concat(L,")"));return Object(r.useEffect)((function(){if(d){var e=m.o("#tooltip-food-global"),r=function(t,n){e.html('<p class="header"><span> '.concat(n.country,' </span></p>\n                    <p class="moderate"> Moderate Hunger: ').concat(n.moderate,"% </p>\n                    <p> Severe Hunger: ").concat(n.severe,"% </p>")).style("left","".concat(.8*t.clientX,"px")).style("top","".concat(.8*t.clientY,"px")).classed("hidden",!1),j.selectAll(".bellchart-".concat(n.index)).style("r",I).attr("stroke-width",P).attr("opacity",H)},c=function(t,n){e.classed("hidden",!0),j.selectAll(".bellchart-".concat(n.index)).style("r",R).attr("stroke-width",(function(e){return T.includes(e.country)?P:_})).attr("opacity",(function(e){return T.includes(e.country)?H:q}))},i=m.n().domain([m.l(d,(function(e){return e.severe})),m.k(d,(function(e){return e.moderate}))]).nice().range([L,0]),s=m.m().domain(d.map((function(e){return e.country}))).range([0,F]).padding(.4),a=d.filter((function(e){return T.includes(e.country)})),o=(j.append("g").attr("class","lines").selectAll("myLine").data(d).enter().append("line").attr("class",(function(e){return"bellchart-".concat(e.index)})).on("mouseover",r).on("mouseout",c).attr("x1",(function(e){return s(e.country)})).attr("x2",(function(e){return s(e.country)})).attr("y1",(function(e){return i(e.moderate)})).attr("y2",(function(e){return i(e.moderate)})).attr("y1",(function(e){return i(e.moderate)})).attr("y2",(function(e){return i(e.severe)})).attr("stroke",U).attr("stroke-width",(function(e){return T.includes(e.country)?P:_})).attr("opacity",(function(e){return T.includes(e.country)?H:q})),j.append("g").attr("class","circleModerate").selectAll("myCircle").data(d).enter().append("circle").on("mouseover",r).on("mouseout",c).attr("cx",(function(e){return s(e.country)})).attr("cy",(function(e){return i(e.moderate)})).attr("class",(function(e){return"bellchart-".concat(e.index)})).style("fill",U).attr("r",R).attr("opacity",(function(e){return T.includes(e.country)?H:q}))),l=j.append("g").attr("class","circleSevere").selectAll("myCircle").data(d).enter().append("circle").on("mouseover",r).on("mouseout",c).attr("cx",(function(e){return s(e.country)})).attr("cy",(function(e){return i(e.severe)})).attr("class",(function(e){return"bellchart-".concat(e.index)})).style("fill",U).attr("r",R).attr("opacity",(function(e){return T.includes(e.country)?H:q})),u=j.append("g").attr("class","NTlabel").selectAll("text").data(a);j.append("g").transition().ease(m.c).duration(1e3).call((function(e){return e.call(m.a(i).ticks(5).tickFormat((function(e,t){return"".concat(e,"%")}))).style("color",z)})),u.enter().append("text").attr("y",(function(e){return"El Salvador"===e.country?i(e.moderate)-30:"Guatemala"===e.country?i(e.moderate)-35:i(e.moderate)-20})).attr("x",(function(e){return s(e.country)})).attr("text-anchor","middle").attr("fill",z).attr("font-size","12px").text((function(e){return e.country})),"down"===n&&(2===t&&(o.transition().ease(m.c).duration(500).style("fill",C),l.transition().ease(m.c).duration(500).style("fill",Y)),t>2&&(o.style("fill",C),l.style("fill",Y))),"up"===n&&(t>2?(o.style("fill",C).attr("opacity",(function(e){return T.includes(e.country)?H:q})),l.style("fill",Y).attr("opacity",(function(e){return T.includes(e.country)?H:q}))):(o.transition().ease(m.c).duration(500).style("fill",U).attr("opacity",(function(e){return T.includes(e.country)?H:q})),l.transition().ease(m.c).duration(500).style("fill",U).attr("opacity",(function(e){return T.includes(e.country)?H:q}))))}}),[d,t,n]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{id:"tooltip-food-global",className:"tooltip hidden",ref:i}),Object(a.jsx)("svg",{className:"grid-chart",ref:s})]})};var B=function(){var e=Object(r.useState)(null),t=Object(b.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(null),s=Object(b.a)(i,2),o=s[0],l=s[1],d=Object(r.useState)(null),u=Object(b.a)(d,2),j=(u[0],u[1]);return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"main ",children:[Object(a.jsx)("div",{className:"main__graphic",children:Object(a.jsxs)("div",{className:"scroll-chart-content-container",children:[Object(a.jsxs)("div",{className:"title-container",children:[Object(a.jsx)("p",{className:"chart-title",children:"Food insecurity varies greatly."}),n>1&&Object(a.jsxs)("div",{className:"legend-container",children:[Object(a.jsxs)("div",{className:"legend",children:[Object(a.jsx)("div",{className:"legend-block dot yes"}),Object(a.jsx)("p",{className:"yes",children:"Moderate Hunger"})]}),Object(a.jsxs)("div",{className:"legend",children:[Object(a.jsx)("div",{className:"legend-block dot no"}),Object(a.jsx)("p",{className:"no",children:"Severe Hunger"})]})]})]}),Object(a.jsx)(W,{steps:n,direction:o})]})}),Object(a.jsx)("div",{className:"scroller",children:Object(a.jsxs)(S.a,{onStepEnter:function(e){var t=e.data,n=(e.entry,e.direction);c(t),l(n)},onStepExit:function(){},progress:!0,onStepProgress:function(e){var t=e.progress;j(t)},offset:"0.5",children:[Object(a.jsx)(S.b,{data:1,value:1,children:Object(a.jsxs)("div",{className:"step",children:[Object(a.jsx)("h2",{children:"Countries vary."}),Object(a.jsxs)("p",{children:["In the Northern Triangle Regions,",Object(a.jsx)("span",{className:"red",children:" more than 45.6 percent"})," people are likely to experience some level of hunger, compared to the United States",Object(a.jsx)("span",{className:"blue",children:" less than 2 percent"})," people are facing similar difficulty."]})]})}),Object(a.jsx)(S.b,{data:2,children:Object(a.jsxs)("div",{className:"step",children:[Object(a.jsx)("h2",{children:"Severities varies."}),Object(a.jsx)("p",{children:"The probability of experiencing moderate or severe food insecurity varies widely across countries\u2014from less than 2 percent in Liberia."})]})},2),Object(a.jsx)(S.b,{data:3,children:Object(a.jsxs)("div",{className:"step",children:[Object(a.jsx)("h2",{children:"What does it mean?"}),Object(a.jsx)("p",{children:"Since the Northern Triangle Regions are far worse in food security, we further explored the survey data to find the relationship between migration and food insecurity."})]})},3),Object(a.jsx)(S.b,{data:4,children:Object(a.jsx)("div",{className:"step"})},4)]})})]})})},G=function(){return Object(a.jsx)("div",{className:"section",children:Object(a.jsxs)("div",{className:"section-card",children:[Object(a.jsxs)("h1",{children:["Is food security ",Object(a.jsx)("span",{className:"red",children:"a solution to"}),Object(a.jsx)("br",{})," migration issue?"]}),Object(a.jsx)("p",{children:"Since those three countries are having food security issues and contribute to a large proportion of migration in the US, it is tempting to say that maybe increasing food security is a solution to migration. However, the survey suggests otherwise."})]})})};var X=n(44),J=n.p+"static/media/cari-mig.9035924e.csv",V="#B0D9D5",Z="#F8AD96",K="#EB5832",Q="#e0e0e0",$=function(e){var t=e.steps,n=e.direction;console.log(t);var i=c.a.useRef(null),s=c.a.useRef(null),o=Object(r.useState)(null),l=Object(b.a)(o,2),d=l[0],u=l[1],j=Object(r.useState)(null),h=Object(b.a)(j,2),p=(h[0],h[1],"932"),f={x:466,y:400},x=.02,O=[233,466,699,p],v=[233,466,699,p],g=m.o(s.current).style("width","100vw").style("height","800px").attr("text-anchor","middle");function y(e){return-Math.pow(e.radius,2)*x}return Object(r.useEffect)((function(){m.b(J).then((function(e){u(e.slice(0,3e3).map((function(e){return Object(X.a)(Object(X.a)({},e),{},{radius:2})})))}))}),[]),Object(r.useEffect)((function(){if(d){var e=d,r=m.e(e).velocityDecay(.2).force("x",m.f().strength(x).x(f.x)).force("y",m.g().strength(x).y(f.y)).force("charge",m.d().strength(y)).on("tick",i),c=g.selectAll("circle").data(e).join("circle").attr("r",(function(e){return e.radius})).attr("fill",(function(e){return"2"==e.cari?V:"3"==e.cari?Z:"4"==e.cari?K:Q}));function i(){c.attr("cx",(function(e){return e.x})).attr("cy",(function(e){return e.y}))}1==t&&"down"==n?r.force("x",m.f().strength(x).x(f.x)):2==t?r.force("x",m.f().strength(x).x((function(e){return v[+e.cari-1]}))):3!=t&&4!=t||r.force("x",m.f().strength(x).x((function(e){return O[+e.ifMig]})))}}),[t,d]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"survey-tooltip hidden",ref:i}),Object(a.jsx)("svg",{className:"survey-chart",ref:s})]})};var ee=function(){var e=Object(r.useState)(null),t=Object(b.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(null),s=Object(b.a)(i,2),o=(s[0],s[1]),l=Object(r.useState)(null),d=Object(b.a)(l,2),u=(d[0],d[1]);return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"main",children:[Object(a.jsx)("div",{className:"main__graphic",children:Object(a.jsx)($,{steps:n,className:"survey"})}),Object(a.jsx)("div",{className:"scroller",children:Object(a.jsxs)(S.a,{onStepEnter:function(e){var t=e.data,n=(e.entry,e.direction);u(n),c(t)},progress:!0,onStepProgress:function(e){var t=e.progress;o(t)},offset:"0.8",children:[Object(a.jsx)(S.b,{data:1,value:1,children:Object(a.jsxs)("div",{className:"step",children:[Object(a.jsx)("h2",{children:"4996 Survey response"}),Object(a.jsx)("p",{children:"In an ??-month investigation, the World Food Programme (WFP) has conducted a survey of civilians in the Northern Triangle region, compiling a database of 4996 responses with information on a number of dimensions."})]})}),Object(a.jsx)(S.b,{data:2,children:Object(a.jsxs)("div",{className:"step",children:[Object(a.jsx)("h2",{children:"The majority are suffering from food insecurity"}),Object(a.jsxs)("p",{children:["In terms of",Object(a.jsx)("span",{className:"red",children:" food insecurity level"}),", the participants are classified into 4 groups based on CARI food security indicators given from WFP."]})]})},2),Object(a.jsx)(S.b,{data:3,children:Object(a.jsxs)("div",{className:"step",children:[Object(a.jsx)("h2",{children:"Around half have migration desire"}),Object(a.jsx)("p",{children:"Of all the participants, 43% have migration desire."})]})},3),Object(a.jsx)(S.b,{data:4,children:Object(a.jsx)("div",{className:"step"})},4)]})})]})})},te=function(){var e="Food security may have some impact on people's desire and action on migration. What kind of relationship could we see from this survey? ",t="From the previous data, we can see a larger proportion of people suffering food insecurity. How many of these people may want to migrate as opposed of those who have adequate food? \n    ";return Object(a.jsx)("div",{className:"section",children:Object(a.jsx)(h,{header:e,main:t})})},ne=n.p+"static/media/sliced1000.f97036a9.csv",re=0,ce=0,ie=0,se=0,ae=960-ie-se,oe=100-re-ce,le="#6bbaad",de="#eb5832",ue="#e0e0e0",je=function(e){var t=e.steps,n=e.direction,i=c.a.useRef(null),s=c.a.useRef(null),o=Object(r.useState)(null),l=Object(b.a)(o,2),d=l[0],u=l[1],j=m.o(s.current).attr("viewBox","0 0 ".concat(ae+ie+se," ").concat(oe+re+ce)).attr("preserveAspectRatio","xMinYMin meet").append("g").attr("transform","translate(".concat(ie,", ").concat(re,")"));j.append("g").attr("id","x-axis").attr("transform","translate(0, ".concat(oe,")")),j.append("g").attr("id","y-axis");return Object(r.useEffect)((function(){m.b(ne).then((function(e){u(e)}))}),[]),Object(r.useEffect)((function(){if(d){var e=m.o("#tooltip-grid"),r=function(e){for(var t=1,n=1,r=ae/100,c=r,i=new Array,s=0,a=0;a<100;a++){i.push(new Array);for(var o=0;o<10;o++)i[a].push({x:t,y:n,width:r,height:c,visData:e[s]}),n+=c,s++;n=1,t+=r}return i}(d),c=j.selectAll(".row").data(r).enter().append("g").attr("class","row").selectAll(".square").data((function(e){return e})).enter().append("rect").attr("class","square").attr("x",(function(e){return e.x})).attr("y",(function(e){return e.y})).attr("width",(function(e){return e.width})).attr("height",(function(e){return e.height})).on("mouseover",(function(t,n){e.style("left","".concat(.8*t.clientX,"px")).style("top","".concat(.8*t.clientY,"px")).html('<p class="header"><span>'.concat(n.visData.sex,", ").concat(n.visData.age,"</span></p>\n            <p> Living in ").concat(n.visData.rural_urban," area in ").concat(n.visData.country,", with a family size of ").concat(n.visData.fam_size," which is ").concat(n.visData.fam_type," </p>")).classed("hidden",!1)})).on("mouseout",(function(t,n){e.classed("hidden",!0)})).style("fill",ue).style("stroke","#fff");"down"===n&&(2===t&&c.transition().ease(m.c).duration(500).style("fill",(function(e){return"0.0"===e.visData.mig_categ?le:de})),t>2&&c.style("fill",(function(e){return"0.0"===e.visData.mig_categ?le:de}))),"up"===n&&(t>2?c.style("fill",(function(e){return"0.0"===e.visData.mig_categ?le:de})):c.transition().ease(m.c).duration(500).style("fill",ue))}}),[d,t,n]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{id:"tooltip-grid",className:"tooltip hidden",ref:i}),Object(a.jsx)("svg",{className:"grid-chart chart-area",ref:s})]})};var he=function(){var e=Object(r.useState)(null),t=Object(b.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(null),s=Object(b.a)(i,2),o=s[0],l=s[1],d=Object(r.useState)(null),u=Object(b.a)(d,2),j=u[0],h=u[1];return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"main ",children:[Object(a.jsx)("div",{className:"main__graphic",children:Object(a.jsxs)("div",{className:"scroll-chart-content-container",children:[Object(a.jsxs)("div",{className:"title-container",children:[Object(a.jsx)("p",{className:"chart-title",children:"Food security and migration intention."}),n>1&&Object(a.jsxs)("div",{className:"legend-container",children:[Object(a.jsxs)("div",{className:"legend",children:[Object(a.jsx)("div",{className:"legend-block yes"}),Object(a.jsx)("p",{className:"yes",children:'Household answered "Yes"'})]}),Object(a.jsxs)("div",{className:"legend",children:[Object(a.jsx)("div",{className:"legend-block no"}),Object(a.jsx)("p",{className:"no",children:'Household answered "No"'})]})]})]}),Object(a.jsxs)("div",{className:"chart-wrapper",children:[Object(a.jsxs)("div",{className:"chart-container",children:[Object(a.jsx)("p",{children:"Food Secure Group"}),Object(a.jsxs)("div",{className:"axis-container",children:[Object(a.jsx)("small",{children:"0"}),Object(a.jsx)("small",{children:"100"}),Object(a.jsx)("small",{children:"200"}),Object(a.jsx)("small",{children:"300"}),Object(a.jsx)("small",{children:"400"})]}),Object(a.jsx)(je,{steps:n,direction:o})]}),Object(a.jsxs)("div",{className:"chart-container",children:[Object(a.jsx)("p",{children:"Food Insecure Group"}),Object(a.jsxs)("div",{className:"axis-container",children:[Object(a.jsx)("small",{children:"0"}),Object(a.jsx)("small",{children:"100"}),Object(a.jsx)("small",{children:"200"}),Object(a.jsx)("small",{children:"300"}),Object(a.jsx)("small",{children:"400"})]}),Object(a.jsx)(je,{steps:n,direction:o})]})]})]})}),Object(a.jsx)("div",{className:"scroller",children:Object(a.jsxs)(S.a,{onStepEnter:function(e){var t=e.data,n=(e.entry,e.direction);c(t),l(n)},onStepExit:function(){},progress:!0,onStepProgress:function(e){var t=e.progress;h(t)},offset:"0.5",children:[Object(a.jsx)(S.b,{data:1,value:1,children:Object(a.jsxs)("div",{className:"step",children:[Object(a.jsx)("h2",{children:"I. Migration Desire"}),Object(a.jsxs)("p",{children:["The probability of experiencing moderate or severe food insecurity varies widely across countries\u2014from"," ",Object(a.jsx)("span",{className:"red",children:"less than 2 percent"})," in Switzerland to ",Object(a.jsx)("span",{className:"blue",children:"85 percent"})," in Liberia."]}),Object(a.jsx)("p",{children:Math.round(1e3*j)/10+"%"})]})}),Object(a.jsx)(S.b,{data:2,children:Object(a.jsxs)("div",{className:"step",children:[Object(a.jsx)("h2",{children:"II. Migration Preparation"}),Object(a.jsx)("p",{children:"The probability of experiencing moderate or severe food insecurity varies widely across countries\u2014from less than 2 percent in Liberia."}),Object(a.jsx)("p",{children:Math.round(1e3*j)/10+"%"})]})},2),Object(a.jsx)(S.b,{data:3,children:Object(a.jsxs)("div",{className:"step",children:[Object(a.jsx)("h2",{children:"II. Migration Preparation"}),Object(a.jsx)("p",{children:"The probability of experiencing moderate or severe food insecurity varies widely across countries\u2014from less than 2 percent in Liberia."}),Object(a.jsx)("p",{children:Math.round(1e3*j)/10+"%"})]})},3),Object(a.jsx)(S.b,{data:4,children:Object(a.jsx)("div",{className:"step"})},4)]})})]})})},be=function(){var e="For those who suffer food insecurity tend to make solid plan and preparation to migrate than those don\u2019t have food issue. \n    To answer this, we need to study the how many people have to work to ensure food security and understand how economic status impact migration plan and action. ",t="It\u2019s believed that lower proportion of food expenditure indicate a better off living condition because more money could be spared on improving quality of life beside food. In 2020, U.S. consumers spent an average of 8.6 percent of their disposable personal income on food. \n    ";return Object(a.jsx)("div",{className:"section",children:Object(a.jsx)(h,{header:e,main:t})})};function me(){return Object(a.jsxs)(d,{children:[Object(a.jsx)(u,{}),Object(a.jsx)(w,{}),Object(a.jsx)(B,{}),Object(a.jsx)(G,{}),Object(a.jsx)(ee,{}),Object(a.jsx)(te,{}),Object(a.jsx)(he,{}),Object(a.jsx)(be,{}),Object(a.jsx)(j,{})]})}n(165);s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(me,{})}),document.getElementById("root"))}},[[166,1,2]]]);
//# sourceMappingURL=main.b5723a6d.chunk.js.map