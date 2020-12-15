(this["webpackJsonprcv-webapp"]=this["webpackJsonprcv-webapp"]||[]).push([[0],{202:function(e,a,t){e.exports=t(336)},207:function(e,a,t){},335:function(e,a,t){},336:function(e,a,t){"use strict";t.r(a);var n=t(1),i=t.n(n),r=t(53),l=t.n(r),o=(t(207),t(89)),c=t(15),s=t(357),d=t(360);var m=function(e){return i.a.createElement(s.a,{bg:"primary",variant:"dark",expand:"lg"},i.a.createElement(s.a.Brand,null,"Modeling Representation ",i.a.createElement("br",{className:"d-xs-block d-sm-none"})," with Ranked Choice Voting"),i.a.createElement(s.a.Toggle,null),i.a.createElement(s.a.Collapse,{className:"justify-content-end"},i.a.createElement(d.a,{className:"justify-content-end"},e.routes.reverse().map((function(e,a){return i.a.createElement(d.a.Item,{className:"text-right",key:e.display},i.a.createElement(d.a.Link,{as:o.b,to:e.path,key:a,href:e.path},e.display))})))))},u=t(64),p=t(21),f=t(354),h=t(349),g=t(350),b=t(361),v=t(346),y=t(347);var E=function(e){var a=e.onClick;return i.a.createElement(v.a,{onClick:a,className:"mr-0 mt-2 mb-2 d-flex justify-content-center align-items-center"},i.a.createElement(y.a,{size:18,className:"mr-1"}),"Reset")};var j=function(e){e.dataid;var a=e.fullWidth,t=e.handleChange,n=e.helperText,r=e.label,l=e.max,o=(e.maxVariable,e.min),c=e.padding,s=void 0===c||c,d=e.step,m=void 0===d?1:d,u=e.value,p=a?" col-12 ":" col-sm-6 ",f=s?" pr-2 pl-2 ":"p-0";return i.a.createElement("div",{className:"".concat(f," ").concat(p)},i.a.createElement("label",{className:"input-label"},r),i.a.createElement("input",{type:"number",onChange:t,value:u,step:m,min:o,max:l}),i.a.createElement("span",{className:"d-block input-helper-text"},n))};var x=function(e){var a=e.dataid,t=e.fullWidth,n=e.handleChange,r=(e.id,e.label),l=e.options,o=e.padding,c=void 0===o||o,s=(e.type,e.value),d=t?" col-12 ":" col-sm-6 ",m=c?" pr-2 pl-2 ":"";return i.a.createElement("div",{className:"".concat(m," ").concat(d)},i.a.createElement("label",{className:"input-label"},r),i.a.createElement("fieldset",{id:a},l.map((function(e){return i.a.createElement("div",{className:"d-flex align-items-center pb-1",key:e.id},i.a.createElement("input",{type:"radio",id:e.id,name:a,onChange:n,value:e.value,checked:e.value===parseInt(s),className:"d-inline"}),i.a.createElement("label",{htmlFor:e.id,className:"input-option-text"},e.label))}))))};var M=function(e){e.dataid;var a=e.fullWidth,t=e.handleChange,n=(e.helperText,e.id,e.label),r=e.max,l=e.maxLabel,o=e.min,c=e.minLabel,s=e.padding,d=void 0===s||s,m=e.step,u=void 0===m?1:m,p=e.value,f=a?" col-12 ":" col-sm-6 ",h=d?" pr-2 pl-2 ":"";return i.a.createElement("div",{className:"".concat(h," ").concat(f)},i.a.createElement("div",{className:"row align-items-center"},i.a.createElement("label",{className:"input-label col-8"},n),i.a.createElement("div",{className:"col-4 text-right"},i.a.createElement("input",{className:"align-self-center input-value text-right",onChange:t,type:"number",value:p,min:o,max:r,step:u}))),i.a.createElement("div",{className:"d-flex justify-content-between w-100"},i.a.createElement("span",{className:"input-helper-text align-self-center mr-1"},c),i.a.createElement("span",{className:"input-helper-text align-self-center ml-1"},l)),i.a.createElement("input",{type:"range",className:"w-100",onChange:t,value:p,min:o,max:r,step:u}))},k=t(36),C=t.n(k);var w=function(e){e.dataid;var a=e.fullWidth,t=e.handleChange,n=(e.helperText,e.id),r=e.label,l=e.max,o=e.maxLabel,c=e.min,s=e.minLabel,d=e.padding,m=void 0===d||d,u=e.step,p=void 0===u?1:u,f=e.value,h=C.a.range(c,l+p,p),g=a?" col-12 ":" col-sm-6 ",b=m?" pr-2 pl-2 ":"";return i.a.createElement("div",{className:"".concat(b," ").concat(g)},i.a.createElement("label",{className:"input-label"},r),i.a.createElement("div",{className:"d-flex justify-content-between"},i.a.createElement("span",{className:"input-helper-text align-self-center mr-1 text-left"},s),i.a.createElement("span",{className:"input-helper-text align-self-center ml-1 text-right"},o)),i.a.createElement("input",{type:"range",onChange:t,value:f,min:c,max:l,step:p,list:"".concat(n,"-steplist"),className:"w-100"}),i.a.createElement("datalist",{id:"".concat(n,"-steplist"),className:"d-flex justify-content-between ticked-slider-datalist"},h.map((function(e,a){return i.a.createElement("option",{key:e,value:e})}))))};var A=function(e){var a=e.param,t=e.formData,n=e.setFormData,r=(e.formInputs,function(e){return function(a){var i=e.updateTransform||function(e){return e},r=Object(u.a)({},t);r[e.dataid]=i(a.target.value,e.dataid,r),n(r)}});switch(a.type){case"number":return i.a.createElement(j,Object.assign({},a,{max:a.maxVariable?t[a.maxVariable]:a.max,handleChange:r(a),value:t[a.dataid]}));case"anti-number":return i.a.createElement(j,Object.assign({},a,{max:a.maxVariable?t[a.maxVariable]:a.max,handleChange:r(a),value:t[a.maxVariable]-t[a.dataid]}));case"slider":return i.a.createElement(M,Object.assign({},a,{handleChange:r(a),value:t[a.dataid]}));case"ticked-slider":return i.a.createElement(w,Object.assign({},a,{handleChange:r(a),value:t[a.dataid]}));case"anti-slider":return i.a.createElement(M,Object.assign({},a,{handleChange:r(a),value:a.max-t[a.dataid]+a.min}));case"radio":return i.a.createElement(x,Object.assign({},a,{handleChange:r(a),value:t[a.dataid],formData:t}));default:return console.warn("Seeing a new kind of parameter type: ".concat(a.type)),null}},S="Green",N="Purple",L=[{id:"ballots",dataid:"ballots",initialValue:1e3},{id:"popMajParty",dataid:"popMajParty",initialValue:70},{id:"seatsOpen",dataid:"seatsOpen",initialValue:5},{id:"majCandidates",dataid:"majCandidates",initialValue:6},{id:"minCandidates",dataid:"minCandidates",initialValue:6},{id:"percentageMajMajSupport",dataid:"percentageMajMajSupport",initialValue:70},{id:"percentageMinMinSupport",dataid:"percentageMinMinSupport",initialValue:70}],T=[{id:"ballots",dataid:"ballots",type:"number",step:10,min:10,max:1e4,label:"Voter Population",helperText:"Max 10,000",info:"The number of voters in each election simulation"},{id:"seatsOpen",dataid:"seatsOpen",type:"number",step:1,min:1,max:20,label:"Spots Up For Election",helperText:"Max 20",info:"The number of open seats open for election in each simulation"},{id:"majCandidates",dataid:"majCandidates",type:"number",step:1,min:1,max:15,helperText:"Max 15",label:"Number of ".concat(S," candidates running"),info:"The number of ".concat(S," candidates running for election in each simulation")},{id:"minCandidates",dataid:"minCandidates",type:"number",step:1,min:1,max:15,helperText:"Max 15",label:"Number of ".concat(N," candidates running"),info:"The number of ".concat(N," candidates running for election in each simulation")},{id:"popMajParty",dataid:"popMajParty",type:"slider",step:1,min:1,max:99,minLabel:"1%",maxLabel:"99%",label:"Percent of voters who are ".concat(S),helperText:"Max 99%",info:"Assuming all members of the population vote for either ".concat(S,"\n    or ").concat(N,", which percentage votes for ").concat(S,"\n    ")},{id:"popMinParty",dataid:"popMajParty",type:"anti-slider",step:1,min:1,max:99,updateTransform:function(e){return 100-e},minLabel:"1%",maxLabel:"99%",label:"Percent of voters who are ".concat(N),helperText:"Max 99%",info:"Assuming all members of the population vote for either ".concat(N,"\n    or ").concat(N,", which percentage votes for ").concat(N,"\n    ")},{id:"percentageMajMajSupport",dataid:"percentageMajMajSupport",type:"slider",step:1,min:1,max:99,minLabel:"1%",maxLabel:"99%",label:"".concat(S," voters vote for ").concat(S," candidates this percent of the time..."),helperText:"Max 99%"},{id:"percentageMajMinSupport",dataid:"percentageMajMajSupport",type:"anti-slider",step:1,min:1,max:99,updateTransform:function(e){return 100-e},minLabel:"1%",maxLabel:"99%",label:"".concat(S," voters vote for ").concat(N," candidates this percent of the time..."),helperText:"Max 99%"},{id:"percentageMinMajSupport",dataid:"percentageMinMinSupport",type:"anti-slider",step:1,min:1,max:99,updateTransform:function(e){return 100-e},minLabel:"1%",maxLabel:"99%",label:"".concat(N," voters vote for ").concat(S," candidates this percent of the time..."),helperText:"Max 99%"},{id:"percentageMinMinSupport",dataid:"percentageMinMinSupport",type:"slider",step:1,min:1,max:99,minLabel:"1%",maxLabel:"99%",label:"".concat(N," voters vote for ").concat(N," candidates this percent of the time..."),helperText:"Max 99%"}];var O=i.a.memo((function(e){var a=e.formData,t=e.setFormData,n=e.resetData;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"d-flex justify-content-between"},i.a.createElement("h1",null,"Election Parameters"),i.a.createElement(E,{onClick:n})),i.a.createElement(b.a,{className:"parameter-container flex-grow-1"},i.a.createElement(b.a.Body,{className:"d-flex flex-wrap align-content-start"},T.map((function(e){return i.a.createElement(A,{key:e.id,param:e,formData:a,setFormData:t})})))))})),V=[{id:"plackettLuce",dataid:"plackettLuce",display:"Plackett-Luce",apiEndpoint:"plackettLuce"},{id:"bradleyTerry",dataid:"bradleyTerry",display:"Bradley-Terry",apiEndpoint:"bradleyTerry"},{id:"alternatingCrossover",dataid:"alternatingCrossover",display:"Alternating Crossover",apiEndpoint:"alternatingCrossover"},{id:"cambridgeSampler",dataid:"cambridgeSampler",display:"Cambridge Sampler",apiEndpoint:"cambridgeSampler"}],D=[{id:"majMajAffinity-plackettLuce",dataid:"majMajAffinity-plackettLuce",initialValue:0},{id:"majMinAffinity-plackettLuce",dataid:"majMinAffinity-plackettLuce",initialValue:0},{id:"minMinAffinity-plackettLuce",dataid:"minMinAffinity-plackettLuce",initialValue:0},{id:"minMajAffinity-plackettLuce",dataid:"minMajAffinity-plackettLuce",initialValue:0},{id:"majMajAffinity-bradleyTerry",dataid:"majMajAffinity-bradleyTerry",initialValue:0},{id:"majMinAffinity-bradleyTerry",dataid:"majMinAffinity-bradleyTerry",initialValue:0},{id:"minMinAffinity-bradleyTerry",dataid:"minMinAffinity-bradleyTerry",initialValue:0},{id:"minMajAffinity-bradleyTerry",dataid:"minMajAffinity-bradleyTerry",initialValue:0},{id:"majMajCandidateAgreement-alternatingCrossover",dataid:"majMajCandidateAgreement-alternatingCrossover",initialValue:1},{id:"majMinCandidateAgreement-alternatingCrossover",dataid:"majMinCandidateAgreement-alternatingCrossover",initialValue:1},{id:"minMinCandidateAgreement-alternatingCrossover",dataid:"minMinCandidateAgreement-alternatingCrossover",initialValue:1},{id:"minMajCandidateAgreement-alternatingCrossover",dataid:"minMajCandidateAgreement-alternatingCrossover",initialValue:1},{id:"majMajCandidateAgreement-cambridgeSampler",dataid:"majMajCandidateAgreement-cambridgeSampler",initialValue:1},{id:"majMinCandidateAgreement-cambridgeSampler",dataid:"majMinCandidateAgreement-cambridgeSampler",initialValue:1},{id:"minMinCandidateAgreement-cambridgeSampler",dataid:"minMinCandidateAgreement-cambridgeSampler",initialValue:1},{id:"minMajCandidateAgreement-cambridgeSampler",dataid:"minMajCandidateAgreement-cambridgeSampler",initialValue:1}],F=[{id:"majMajAffinity-plackettLuce",dataid:"majMajAffinity-plackettLuce",type:"ticked-slider",fullWidth:!0,step:.5,min:-1,max:1,label:"Among ".concat(S," voters, support for ").concat(S," candidates is..."),minLabel:"Split evenly",maxLabel:"Leaning towards one candidate"},{id:"majMinAffinity-plackettLuce",dataid:"majMinAffinity-plackettLuce",type:"ticked-slider",fullWidth:!0,step:.5,min:-1,max:1,label:"Among ".concat(S," voters, support for ").concat(N," candidates is..."),minLabel:"Split evenly",maxLabel:"Leaning towards one candidate"},{id:"minMinAffinity-plackettLuce",dataid:"minMinAffinity-plackettLuce",type:"ticked-slider",fullWidth:!0,step:.5,min:-1,max:1,label:"Among ".concat(N," voters, support for ").concat(N," candidates is..."),minLabel:"Split evenly",maxLabel:"Leaning towards one candidate"},{id:"minMajAffinity-plackettLuce",dataid:"minMajAffinity-plackettLuce",type:"ticked-slider",fullWidth:!0,step:.5,min:-1,max:1,label:"Among ".concat(N," voters, support for ").concat(S," candidates is..."),minLabel:"Split evenly",maxLabel:"Leaning towards one candidate"},{id:"majMajAffinity-bradleyTerry",dataid:"majMajAffinity-bradleyTerry",type:"ticked-slider",fullWidth:!0,step:.5,min:-1,max:1,label:"Among ".concat(S," voters, support for ").concat(S," candidates is..."),minLabel:"Split evenly",maxLabel:"Leaning towards one candidate"},{id:"majMinAffinity-bradleyTerry",dataid:"majMinAffinity-bradleyTerry",type:"ticked-slider",fullWidth:!0,step:.5,min:-1,max:1,label:"Among ".concat(S," voters, support for ").concat(N," candidates is..."),minLabel:"Split evenly",maxLabel:"Leaning towards one candidate"},{id:"minMinAffinity-bradleyTerry",dataid:"minMinAffinity-bradleyTerry",type:"ticked-slider",fullWidth:!0,step:.5,min:-1,max:1,label:"Among ".concat(N," voters, support for ").concat(N," candidates is..."),minLabel:"Split evenly",maxLabel:"Leaning towards one candidate"},{id:"minMajAffinity-bradleyTerry",dataid:"minMajAffinity-bradleyTerry",type:"ticked-slider",fullWidth:!0,step:.5,min:-1,max:1,label:"Among ".concat(N," voters, support for ").concat(S," candidates is..."),minLabel:"Split evenly",maxLabel:"Leaning towards one candidate"},{id:"majMajCandidateAgreement-alternatingCrossover",dataid:"majMajCandidateAgreement-alternatingCrossover",type:"radio",label:"Among ".concat(S," voters, does everyone rank ").concat(S," candidates the same way?"),options:[{id:"uniform-majMajCandidateAgreement-alternatingCrossover",value:1,label:"Yes, ".concat(S," voters rank ").concat(S," candidates the same way")},{id:"random-majMajCandidateAgreement-alternatingCrossover",value:0,label:"No, ".concat(S," voters rank ").concat(S," candidates differently")}]},{id:"majMinCandidateAgreement-alternatingCrossover",dataid:"majMinCandidateAgreement-alternatingCrossover",type:"radio",label:"Among ".concat(S," voters, does everyone rank ").concat(N," candidates the same way?"),options:[{id:"uniform-majMinCandidateAgreement-alternatingCrossover",value:1,label:"Yes, ".concat(S," voters rank ").concat(N," candidates the same way")},{id:"random-majMinCandidateAgreement-alternatingCrossover",value:0,label:"No, ".concat(S," voters rank ").concat(N," candidates differently")}]},{id:"minMajCandidateAgreement-alternatingCrossover",dataid:"minMajCandidateAgreement-alternatingCrossover",type:"radio",label:"Among ".concat(N," voters, does everyone rank ").concat(S," candidates the same way?"),options:[{id:"uniform-minMajCandidateAgreement-alternatingCrossover",value:1,label:"Yes, ".concat(N," voters rank ").concat(S," candidates the same way")},{id:"random-minMajCandidateAgreement-alternatingCrossover",value:0,label:"No, ".concat(N," voters rank ").concat(S," candidates differently")}]},{id:"minMinCandidateAgreement-alternatingCrossover",dataid:"minMinCandidateAgreement-alternatingCrossover",type:"radio",label:"Among ".concat(N," voters, does everyone rank ").concat(N," candidates the same way?"),options:[{id:"uniform-minMinCandidateAgreement-alternatingCrossover",value:1,label:"Yes, ".concat(N," voters rank ").concat(N," candidates the same way")},{id:"random-minMinCandidateAgreement-alternatingCrossover",value:0,label:"No, ".concat(N," voters rank ").concat(N," candidates differently")}]},{id:"majMajCandidateAgreement-cambridgeSampler",dataid:"majMajCandidateAgreement-cambridgeSampler",type:"radio",label:"Among ".concat(S," voters, does everyone rank ").concat(S," candidates the same way?"),options:[{id:"uniform-majMajCandidateAgreement-cambridgeSampler",value:1,label:"Yes, ".concat(S," voters rank ").concat(S," candidates the same way")},{id:"random-majMajCandidateAgreement-cambridgeSampler",value:0,label:"No, ".concat(S," voters rank ").concat(S," candidates differently")}]},{id:"majMinCandidateAgreement-cambridgeSampler",dataid:"majMinCandidateAgreement-cambridgeSampler",type:"radio",label:"Among ".concat(S," voters, does everyone rank ").concat(N," candidates the same way?"),options:[{id:"uniform-majMinCandidateAgreement-cambridgeSampler",value:1,label:"Yes, ".concat(S," voters rank ").concat(N," candidates the same way")},{id:"random-majMinCandidateAgreement-cambridgeSampler",value:0,label:"No, ".concat(S," voters rank ").concat(N," candidates differently")}]},{id:"minMajCandidateAgreement-cambridgeSampler",dataid:"minMajCandidateAgreement-cambridgeSampler",type:"radio",label:"Among ".concat(N," voters, does everyone rank ").concat(S," candidates the same way?"),options:[{id:"uniform-minMajCandidateAgreement-cambridgeSampler",value:1,label:"Yes, ".concat(N," voters rank ").concat(S," candidates the same way")},{id:"random-minMajCandidateAgreement-cambridgeSampler",value:0,label:"No, ".concat(N," voters rank ").concat(S," candidates differently")}]},{id:"minMinCandidateAgreement-cambridgeSampler",dataid:"minMinCandidateAgreement-cambridgeSampler",type:"radio",label:"Among ".concat(N," voters, does everyone rank ").concat(N," candidates the same way?"),options:[{id:"uniform-minMinCandidateAgreement-cambridgeSampler",value:1,label:"Yes, ".concat(N," voters rank ").concat(N," candidates the same way")},{id:"random-minMinCandidateAgreement-cambridgeSampler",value:0,label:"No, ".concat(N," voters rank ").concat(N," candidates differently")}]}];function P(e){return V.find((function(a){return a.display===e}))}var B=i.a.memo((function(e){var a=e.formData,t=e.resetData,n=e.selectedModel,r=e.setFormData,l=e.setSelectedModel;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"d-flex justify-content-between"},i.a.createElement("h1",null,"Model Parameters"),i.a.createElement(E,{onClick:t})),i.a.createElement(b.a,{className:"parameter-container flex-grow-1"},i.a.createElement(b.a.Header,null,i.a.createElement(d.a,{variant:"tabs",defaultActiveKey:n,onSelect:function(e){l(e)}},V.map((function(e){return i.a.createElement(d.a.Item,{key:e.id},i.a.createElement(d.a.Link,{eventKey:e.display},e.display))})))),i.a.createElement(b.a.Body,{className:"d-flex flex-wrap align-content-start"},function(e,a){var t=P(a).dataid;return e.filter((function(e){var a=e.id.split("-");return Boolean(a[1])&&a[1]===t}))}(F,n).map((function(e){return i.a.createElement(A,{key:e.id,param:e,formData:a,setFormData:r})})))))})),W=t(59),R=t.n(W),I=t(179),G=t(180),Y=t.n(G),z=t(351),H=t(352),J=t(353),U=t(181);var q=function(){return i.a.createElement("div",{className:"d-flex justify-content-center align-items-center w-100 h-100"},i.a.createElement("div",{className:"spinner-border",style:{height:75,width:75,marginTop:-75},role:"status"},i.a.createElement("span",{className:"sr-only"},"Loading...")))},K=t(182),_=t(183),$=t(197),Q=t(196),X=t(358),Z=t(364),ee=t(355),ae=t(367),te=t(362),ne=t(365),ie=t(348),re=t(65);var le=function(){return i.a.createElement("p",null,"Nothing to display here")};function oe(e){var a=e.kv,t=void 0===a?{}:a;return 0===Object.keys(t).length?i.a.createElement(le,null):i.a.createElement(ie.a,{striped:!0,borderless:!0,hover:!0,className:"kv-table"},i.a.createElement("tbody",null,Object.entries(t).map((function(e){var a=Object(p.a)(e,2),t=a[0],n=a[1];return i.a.createElement("tr",null,i.a.createElement("td",{className:"table-key"},t),i.a.createElement("td",{className:"table-value"},n))}))))}var ce=function(e){var a=e.data,t=void 0===a?[]:a,n=e.simulationParams;console.log("data",t);var r=C.a.flatMap(t,(function(e){return e.x})),l=!C.a.isEmpty(r)&&{Min:Object(re.min)(r),Max:Object(re.max)(r),Mode:Object(re.modeFast)(r),Mean:Object(re.mean)(r).toFixed(2),"Standard Deviation":Object(re.standardDeviation)(r).toFixed(2)};return console.log("stats",l),i.a.createElement(h.a,{className:"m-0"},i.a.createElement(g.a,{sm:6,className:"pr-1 pl-1"},i.a.createElement("h5",{className:"stats-table-title"},i.a.createElement("span",{className:"literal-title"},"Parameters")),i.a.createElement(oe,{kv:n})),i.a.createElement(g.a,{sm:6,className:"pr-1 pl-1"},i.a.createElement("h5",{className:"stats-table-title"},i.a.createElement("span",{className:"literal-title"},"Statistics")),i.a.createElement(oe,{kv:l})))},se=function(e){Object($.a)(t,e);var a=Object(Q.a)(t);function t(){return Object(K.a)(this,t),a.apply(this,arguments)}return Object(_.a)(t,[{key:"shouldComponentUpdate",value:function(e,a){return e.simulationResults!==this.props.simulationResults}},{key:"render",value:function(){for(var e=this.props,a=e.electionSimulations,t=e.maxSeats,n=void 0===t?1:t,r=e.selectedModel,l=void 0===r?"":r,o=e.simulationParams,c=void 0===o?{}:o,s=e.simulationResults,d=(void 0===s?{}:s).poc_elected_rcv,m=(d||[]).map((function(e){return{x:e}})),u=d&&d.length?a-d.length:0,p=0;p<u;p++)m.push({x:0});var f=C.a.range(0,n+2,1);return i.a.createElement("div",{className:"w-100"},i.a.createElement(X.a,{style:{parent:{fontSize:12}},containerComponent:i.a.createElement(Z.a,{className:"pt-2 pb-2",style:{height:"auto",maxWidth:400,margin:"auto"}})},i.a.createElement(ee.a,{style:{labels:{fill:"black"}},cornerRadius:0,data:m,bins:f,labelComponent:i.a.createElement(ae.a,{constrainToVisibleArea:!0}),labels:function(e){var a=e.datum;return"# Elections with ".concat(a.x-.5," ").concat(N," winner(s)\n").concat(a.y)}}),i.a.createElement(te.a,{text:C.a.isUndefined(a)?"No Data":"".concat(N," Candidates Elected \n Across ").concat(a," ").concat(l," Election(s) "),x:225,y:18,textAnchor:"middle"}),i.a.createElement(ne.a,{label:"Frequency of outcome",textAnchor:"middle",axisLabelComponent:i.a.createElement(te.a,{dy:-12}),dependentAxis:!0}),i.a.createElement(ne.a,{label:"Number of ".concat(N," candidates elected"),tickLabelComponent:i.a.createElement(te.a,{dy:-5,dx:200/f.length}),tickValues:f.slice(0,f.length-1)})),i.a.createElement(ce,{data:m,simulationParams:c}))}}]),t}(i.a.Component),de=function(e){var a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=Object(n.useState)("idle"),i=Object(p.a)(t,2),r=i[0],l=i[1],o=Object(n.useState)(null),c=Object(p.a)(o,2),s=c[0],d=c[1],m=Object(n.useState)(null),u=Object(p.a)(m,2),f=u[0],h=u[1],g=Object(n.useCallback)((function(){return l("pending"),d(null),h(null),e().then((function(e){d(e),l("success")})).catch((function(e){h(e),l("error")}))}),[e]);return Object(n.useEffect)((function(){a&&g()}),[g,a]),{execute:g,status:r,value:s,error:f}},me=[{id:"numElectionsEachSimulation",dataid:"numElectionsEachSimulation",initialValue:1}],ue=[{id:"numElectionsEachSimulation",dataid:"numElectionsEachSimulation",type:"number",min:1,max:15,fullWidth:!0,padding:!1,label:"Elections to Simulate",helperText:"Max 15",info:"The number of elections to simulate with these parameters"}];function pe(e){var a=e.status,t=e.simulationResultsRef;return"success"===a&&i.a.createElement("div",{className:"d-flex justify-content-between"},i.a.createElement(v.a,{onClick:function(){Object(U.exportComponentAsPNG)(t)},className:"d-flex justify-content-center align-items-center",size:"sm"},i.a.createElement(z.a,{size:18,className:"mr-1"}),"Save Results"))}function fe(e){var a=e.execute,t=e.status;return i.a.createElement(v.a,{onClick:a,className:"mr-0 mt-2 mb-2 d-flex justify-content-center align-items-center",disabled:"pending"===t},"pending"!==t?i.a.createElement(i.a.Fragment,null,i.a.createElement(H.a,{size:18,className:"mr-1"}),"Run Simulation"):i.a.createElement(i.a.Fragment,null,i.a.createElement(J.a,{size:18,className:"mr-1"}),"Loading..."))}var he=i.a.memo((function(e){var a=e.combineFormData,t=e.formData,r=e.getSeats,l=e.getElectionSimulationCount,o=e.setFormData,c=e.selectedModel,s="https://rcv-api.herokuapp.com/api/v1/"+function(e){return P(e).apiEndpoint}(c),d=function(e,a){var t=P(a).dataid;return C.a.pick(e,Object.keys(e).filter((function(e){var a=e.split("-"),n=Boolean(a[1]);return!n||n&&a[1]===t})))}(a(),c),m=de(function(){var e=Object(I.a)(R.a.mark((function e(){var a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.a.get(s,{params:d});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),!1),u=m.execute,p=m.status,f=m.value,h=m.error,g=Object(n.useRef)();return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"d-flex justify-content-between"},i.a.createElement("h1",null,"Simulations"),i.a.createElement(fe,{execute:u,status:p})),i.a.createElement(b.a,{className:"parameter-container flex-grow-1"},i.a.createElement(b.a.Body,{className:"d-flex flex-column align-content-start"},i.a.createElement("div",null,ue.map((function(e){return i.a.createElement(A,{key:e.id,param:e,formData:t,padding:!1,setFormData:o})}))),i.a.createElement("div",{className:"d-flex flex-wrap"},i.a.createElement("div",{className:"d-flex justify-content-between w-100"},i.a.createElement("h4",null,"Results"),i.a.createElement(pe,{status:p,simulationResultsRef:g})),"error"===p&&i.a.createElement("div",null,"There was an error processing those simulations.",console.error(h)),"pending"===p&&i.a.createElement("div",{className:"d-flex flex-column w-100"},i.a.createElement("div",{style:{height:"300px"}},i.a.createElement(q,null))),"idle"===p&&i.a.createElement(se,{maxBins:r()}),"success"===p&&i.a.createElement(i.a.Fragment,null,i.a.createElement(se,{ref:g,maxSeats:r(),electionSimulations:l(),simulationResults:f,simulationParams:d,selectedModel:c}))))))}));var ge=function(e,a){var t=Object(n.useState)((function(){try{var t=window.localStorage.getItem(e);return t?JSON.parse(t):a}catch(n){return console.log(n),a}})),i=Object(p.a)(t,2),r=i[0],l=i[1];return[r,function(a){try{var t=a instanceof Function?a(r):a;l(t),window.localStorage.setItem(e,JSON.stringify(t))}catch(n){console.log(n)}}]};var be=[{path:"/about",display:"About",component:function(){return i.a.createElement(f.a,null,i.a.createElement("h1",{className:"text-center"},"About This Project"),i.a.createElement("div",null,i.a.createElement("h3",null,"Modelling voting behavior"),i.a.createElement("p",null,"Voting is an incredibly complex process, and any attempt to model it is bound to oversimplify the way people vote, especially in ranked elections, where a voter has so many more ways to make their voice heard. With this in mind, this app uses multiple models of ranking, some classical and some new. They all take the same basic input."),i.a.createElement("h3",null,"Basic inputs to the models"),i.a.createElement("p",null,"All the models take some basic inputs, namely the support from each group for each class of candidate (minority- or majority-preferred), which should be numbers between 0 and 1. These values can be estimated by analyzing single-winner elections, inferred from survey results, or set to hypothetical values. Each model interprets these support values slightly differently, as detailed below."),i.a.createElement("h3",null,"How the model works: Plackett-Luce"),i.a.createElement("p",null,"The Plackett-Luce model is a classical model of statistical ranking which has already been applied to study ranked choice voting in Ireland [1]. Let's suppose the support for Candidate A from a voting group is twice the support for Candidate B. Under the Plackett-Luce model, we take this to mean that a voter is twice as likely to put Candidate A first as to put Candidate B first. In fact, the model assumes that this trend goes ",i.a.createElement("em",null,"all the way down the ballot"),". That is, if a voter has not ranked either A or B yet on their ballot, then they are still twice as likely to write down Candidate A's name than Candidate B when they get to the next rank. See [2] for mathematical details. It is unrealistic to expect the support for each class of candidates to be completely uniform, so to divide up the total support among candidates of a given class, we sample from a symmetric Dirichlet distribution. The Dirichlet distribution has one parameter (called concentration) which can be used to choose between mostly even division of support (concentration >> 1), and support concentrated on just a few candidates (concentration << 1). The default concentration value of 1.0 makes every division of the support equally likely, roughly speaking. We therefore refer to this parameter as",i.a.createElement("em",null,"evenness of support")," in the Model input tab."),i.a.createElement("h3",null,"How the model works: Bradley-Terry"),i.a.createElement("p",null,"The paired comparison model is based on the idea that what matters in a ranking is who is preferred over whom. Suppose the support by a voting group for Candidate A is ",i.a.createElement("em",null,"a")," and the support for Candidate B is ",i.a.createElement("em",null," b"),". This the model sets the probability that a voter in the group ranks Candidate A above Candidate B at"," ",i.a.createElement("em",null,"a/(a+b)"),". The probability of a full ranking is just the product of the probabilities associated with the order of each pair of candidates, with a normalizing constant so that everything sums to one. See [2] for mathematical details. As with the Plackett-Luce model, we use a Dirichlet sampler to divide up the support among the candidates."),i.a.createElement("h3",null,"How the model works: Alternating crossover"),i.a.createElement("p",null,"This model posits that there are two kinds of voters in each group: block voters and crossover voters. Block voters always vote for ingroup candidates first and then outgroup candidates. Crossover voters alternate between the two classes of candidates, starting with an outgroup candidate (hence the name). This only tells you the type of candidate at each position in a ballot, however, so further choices are necessary to determine the exact order. For each group of voters and group of candidates, we allow two choices: random ordering by each voter, or consistent ordering by each voter. This model has been used in previous analyses of ranked voting by the MGGG at Tufts University (see [3,4] below)."),i.a.createElement("h3",null,"How the model works: Cambridge sampler"),i.a.createElement("p",null,"Each voter's first choice under this model is the same as under alternating crossover, i.e. an ingroup candidate for block voters and an outgroup candidate for crossover voters. However, instead of allowing only a block ballot or alternating ballot, the types of candidates in the rest of the ballot are determined by sampling from the ballots in a decade's worth of Cambridge MA ranked choice city council elections. Once the type of candidate (ingroup or outgroup) at each rank has been chosen, random ordering or consistent ordering is applied to fill in the ballot with candidate names just as with the alternating crossover model."),i.a.createElement("h3",null,"References"),"[1] Gormley, I.S, and Murphy, T.B."," ",i.a.createElement("em",null,"Exploring voting blocs within the Irish electorate: A mixture modeling approach.")," ","Journal of the American Statistical Association 103.483 (2008): 1014-1027.",i.a.createElement("br",null),"[2] Critchlow, D.E., Fligner, M.A. and Verducci, J.S., 1991."," ",i.a.createElement("em",null,"Probability models on rankings"),". Journal of mathematical psychology, 35(3), pp.294-318.",i.a.createElement("br",null),"[3] MGGG, ",i.a.createElement("em",null,"Election Reform in Lowell MA, ")," ",i.a.createElement("a",{href:"https://mggg.org/lowell"},"https://mggg.org/lowell"),i.a.createElement("br",null),"[4] MGGG,"," ",i.a.createElement("em",null,"Analysis of county commission elections in Yakima County WA,"," ")," ",i.a.createElement("a",{href:"https://mggg.org/uploads/yakima.pdf"},"https://mggg.org/uploads/yakima.pdf")))}},{path:"/",display:"Home",component:function(){var e=L.reduce((function(e,a){return e[a.dataid]=a.initialValue,e}),{}),a=D.reduce((function(e,a){return e[a.dataid]=a.initialValue,e}),{}),t=me.reduce((function(e,a){return e[a.dataid]=a.initialValue,e}),{}),n=ge("electionState",e),r=Object(p.a)(n,2),l=r[0],o=r[1],c=ge("modelState",a),s=Object(p.a)(c,2),d=s[0],m=s[1],b=ge("simulationState",t),v=Object(p.a)(b,2),y=v[0],E=v[1],j=ge("selectedModel",V[0].display),x=Object(p.a)(j,2),M=x[0],k=x[1];return i.a.createElement(f.a,{fluid:!0},i.a.createElement(h.a,{style:{height:"max"}},i.a.createElement(g.a,{className:"pb-2 d-flex flex-column"},i.a.createElement(O,{formData:l,setFormData:o,resetData:function(){return o(e)}}),i.a.createElement(B,{models:V,selectedModel:M,setSelectedModel:k,formData:d,setFormData:m,resetData:function(){return m(a)}})),i.a.createElement(g.a,{md:5,className:"pb-2 d-flex flex-column"},i.a.createElement(he,{combineFormData:function(){return Object(u.a)(Object(u.a)(Object(u.a)({},l),d),y)},formData:y,getSeats:function(){return parseInt(l.seatsOpen)},getElectionSimulationCount:function(){return parseInt(y.numElectionsEachSimulation)},setFormData:E,selectedModel:M}))))}}];t(335);var ve=function(){return i.a.createElement(o.a,{basename:"/rcv-webapp"},i.a.createElement(m,{routes:be}),i.a.createElement(c.c,null,be.map((function(e,a){return i.a.createElement(c.a,{path:e.path,key:a},i.a.createElement(e.component,null))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[202,1,2]]]);
//# sourceMappingURL=main.ed9f5d26.chunk.js.map