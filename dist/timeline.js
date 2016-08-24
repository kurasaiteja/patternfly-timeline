!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("d3")):"function"==typeof define&&define.amd?define(["d3"],e):"object"==typeof exports?exports.timeline=e(require("d3")):t.timeline=e(t.d3)}(this,function(t){return function(t){function e(a){if(n[a])return n[a].exports;var r=n[a]={exports:{},id:a,loaded:!1};return t[a].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){n(12),t.exports=n(15)},function(e,n){e.exports=t},function(t,e){"use strict";function n(){var t=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],e=arguments[1],n=e.domain(),r=a(n,2),i=r[0],o=r[1];return t.filter(function(t){return t.date>=i&&t.date<=o})}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){var n=[],a=!0,r=!1,i=void 0;try{for(var o,l=t[Symbol.iterator]();!(a=(o=l.next()).done)&&(n.push(o.value),!e||n.length!==e);a=!0);}catch(s){r=!0,i=s}finally{try{!a&&l["return"]&&l["return"]()}finally{if(r)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e["default"]=n},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t,e,n){var a=e.tickFormat.map(function(t){return t.slice(0)}),r=e.locale?e.locale.timeFormat.multi(a):i["default"].time.format.multi(a),o=i["default"].svg.axis().scale(t).orient(n).tickFormat(r);return"function"==typeof e.axisFormat&&e.axisFormat(o),o};var r=n(1),i=a(r)},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}var r=n(1),i=a(r),o={lineHeight:40,start:new Date(0),end:new Date,minScale:0,maxScale:1/0,width:null,padding:{top:30,left:40,bottom:40,right:40},labelWidth:140,sliderWidth:30,contextHeight:80,locale:null,axisFormat:null,tickFormat:[[".%L",function(t){return t.getMilliseconds()}],[":%S",function(t){return t.getSeconds()}],["%I:%M",function(t){return t.getMinutes()}],["%I %p",function(t){return t.getHours()}],["%a %d",function(t){return t.getDay()&&1!==t.getDate()}],["%b %d",function(t){return 1!==t.getDate()}],["%B",function(t){return t.getMonth()}],["%Y",function(){return!0}]],eventHover:null,eventZoom:null,eventClick:null,eventLineColor:function(t,e){switch(e%5){case 0:return"#00659c";case 1:return"#0088ce";case 2:return"#3f9c35";case 3:return"#ec7a08";case 4:return"#cc0000"}},eventColor:null,eventShape:"",eventTooltip:function(t){var e="";for(var n in t.details)e=e+n.charAt(0).toUpperCase()+n.slice(1)+": "+t.details[n]+"\n";return e=e+"Date: "+t.date},zoomable:!0,marker:!0,context:!1,slider:!0};o.dateFormat=o.locale?o.locale.timeFormat("%x %I:%M %p"):i["default"].time.format("%x %I:%M %p"),t.exports=o},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),i=a(r);n(11);e["default"]=function(t,e,n,a){return function(r){var o=function(r){var o=t.selectAll(".x-axis."+r).data([{}]);o.enter().append("g").classed("x-axis",!0).classed(r,!0).call(i["default"](e.x,n,r)).attr("transform","translate(0,"+("bottom"===r?a.height:0)+")"),o.call(i["default"](e.x,n,r)),o.exit().remove()};o("bottom")}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),i=a(r);e["default"]=function(t,e,n,a){return function(a){function r(){e.x.domain(u.empty()?e.ctx.domain():u.extent()),focus.select(".area").attr("d",c)}function o(t,e,n){var a={};for(var r in t)for(var i in t[r].data){var o=Math.floor(t[r].data[i].date/e)*e;a[o]=a[o]+1||1}for(var l in a){var s=new Date;s.setTime(+l),n.push({date:s,count:a[l]})}}var l=[],s=864e5,u=i["default"].svg.brush().x(e.ctx).on("brush",r),d=i["default"].svg.axis().scale(e.ctx).orient("bottom"),c=(i["default"].svg.axis().scale(e.cty).orient("left"),i["default"].svg.area().interpolate("monotone").x(function(t){return t.date}).y0(n.ctxHeight).y1(function(t){return t.count}));o(a,s,l),t.append("path").datum(l).attr("class","area").attr("d",c),t.append("g").attr("class","x-axis").attr("transform","translate(0,"+(n.ctxHeight-20)+")").call(d)}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t,e,n){return function(a){var r=t.selectAll(".drop-line").data(a);r.enter().append("g").classed("drop-line",!0).attr("transform",function(t,a){return"translate(0, "+(e.y(a)+n.lineHeight/2)+")"}).attr("fill",n.eventLineColor),r.each(function(t){var a=d3.select(this).selectAll(".drop").data(t.data);a.attr("transform",function(t){return"translate("+e.x(t.date)+")"});var r=a.enter().append("text").classed("drop",!0).attr("transform",function(t){return"translate("+e.x(t.date)+")"}).attr("fill",n.eventColor).attr("text-anchor","middle").attr("dominant-baseline","central").attr("data-toggle","tooltip").attr("title",n.eventTooltip).text(n.eventShape);n.eventClick&&r.on("click",n.eventClick),n.eventHover&&r.on("mouseover",n.eventHover),a.exit().on("click",null).on("mouseover",null),a.exit().remove()}),r.exit().remove()}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),i=(a(r),n(2)),o=(a(i),n(5)),l=a(o),s=n(7),u=a(s),d=n(9),c=a(d),f=n(10),p=a(f),m=n(6);a(m);e["default"]=function(t,e,n,a){var r=t.append("defs");r.append("clipPath").attr("id","drops-container-clipper").append("rect").attr("id","drops-container-rect").attr("x",0).attr("y",0).attr("width",e.width).attr("height",e.height);var i=r.append("pattern").attr("id","grid-stripes").attr("width",e.width).attr("height",2*a.lineHeight).attr("patternUnits","userSpaceOnUse");i.append("rect").attr("width",e.width).attr("height",a.lineHeight),i.append("line").attr("x1",0).attr("x2",e.width).attr("y1",a.lineHeight).attr("y2",a.lineHeight),i.append("line").attr("x1",0).attr("x2",e.width).attr("y1","1px").attr("y2","1px");var o=t.append("g").classed("grid",!0).attr("fill","url(#grid-stripes)").attr("transform","translate("+(a.padding.left+a.labelWidth)+", "+a.padding.top+")"),s=t.append("g").classed("labels",!0).attr("transform","translate("+a.padding.left+", "+a.padding.top+")"),d=t.append("g").classed("axes",!0).attr("transform","translate("+(a.padding.left+a.labelWidth)+",  "+a.padding.top+")"),f=t.append("g").classed("drops-container",!0).attr("clip-path","url(#drops-container-clipper)").attr("transform","translate("+(a.padding.left+a.labelWidth)+",  "+a.padding.top+")"),m=t.append("g").classed("timestamp",!0).attr("height",30).attr("transform","translate("+(a.padding.left+a.labelWidth)+", "+a.padding.top+")"),h=(p["default"](o,m,n,e,a.dateFormat),l["default"](d,n,a,e)),g=c["default"](s,n,a),v=u["default"](f,n,a);return function(t){v(t),g(t),h(t)}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=a(r);e["default"]=function(t,e,n){return function(a){var r=t.selectAll(".label").data(a),o=function(t){var n=i["default"](t.data,e.x).length;return t.name+(n>0?" ("+n+")":"")};r.text(o),r.enter().append("text").classed("label",!0).attr("transform",function(t,a){return"translate("+(n.labelWidth-20)+" "+(e.y(a)+n.lineHeight/2)+")"}).attr("dominant-baseline","central").attr("text-anchor","end").text(o),r.exit().remove()}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),i=a(r);e["default"]=function(t,e,n,a,r){function o(){var e=i["default"].mouse(t[0][0])[0];l.attr("transform","translate("+e+")"),u.attr("transform","translate("+(e-65)+", -25)"),d.attr("transform","translate("+e+", -9)").text(r(n.x.invert(e)))}t.append("rect").attr("width",a.width).attr("height",a.height).on("mouseover",function(){l.style("display",null),d.style("display",null),u.style("display",null)}).on("mouseout",function(){l.style("display","none"),d.style("display","none"),u.style("display","none")}).on("mousemove",o);var l=t.append("line").classed("marker",!0).attr("y1",0).attr("y2",a.height),s=n.x.domain(),u=e.append("rect").attr("height","24").attr("width","130").style("display","none"),d=e.append("text").text(r(s[1])).attr("transform","translate("+n.x.range()[1]+")").attr("text-anchor","middle")}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.drawBottomAxis=void 0;var r=n(3),i=a(r),o=function(t,e,n,a,r){t.append("g").classed("x-axis",!0).classed(a,!0).attr("transform","translate("+n.padding.left+", "+r+")").call(i["default"](e,n,a))};e.drawBottomAxis=function(t,e,n,a){return o(t,e,n,"bottom",n.padding.top+a.height)}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}function r(){function t(t){t.each(function(e){l["default"].select(this).select(".pf-timeline-chart").remove(),l["default"].select(this).selectAll(".pf-timeline-zoom").remove();var i=n.width||t.node().clientWidth,s=e.length*n.lineHeight,u={width:i-n.padding.right-n.padding.left-n.labelWidth-(n.slider?n.sliderWidth:0),height:s,ctxHeight:n.contextHeight,outer_height:s+n.padding.top+n.padding.bottom+(n.context?n.contextHeight:0)},d={x:r(u.width,[n.start,n.end]),y:a(e),ctx:r(u.width,[n.ctxStart,n.ctxEnd]),cty:o(u.ctxHeight,n.maxEvents)},c=l["default"].select(this).append("svg").classed("pf-timeline-chart",!0).attr({width:i,height:u.outer_height}),f=p["default"](c,u,d,n).bind(t);f(e),n.zoomable&&h["default"](l["default"].select(this),u,d,n,e,f)})}var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=i({},c["default"],e),a=function(t){return l["default"].scale.ordinal().domain(t.map(function(t){return t.name})).range(t.map(function(t,e){return e*n.lineHeight}))},r=function(t,e){return l["default"].time.scale().range([0,t]).domain(e)},o=function(t,e){return l["default"].scale.linear().range([t,0])};return u["default"](t,n),t}var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},o=n(1),l=a(o),s=n(14),u=a(s),d=n(4),c=a(d),f=n(8),p=a(f),m=n(13),h=a(m);l["default"].chart=l["default"].chart||{},l["default"].chart.timeline=r,t.exports=r},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),i=a(r);e["default"]=function(t,e,n,a,r,o){function l(){var t,n,a=(i["default"].event.target,.5),r=1,o=0,l=e.width/2,s=b.scaleExtent(),d={x:b.translate()[0],k:b.scale()};switch(this.id){case"zoom-in":r=b.scale()*(1+a),o=100;break;case"zoom-out":r=b.scale()*(1+-1*a),o=100;break;case"pf-timeline-slider":r=x.invert(this.value);break;default:r=b.scale()}r<s[0]?r=s[0]:r>s[1]&&(r=s[1]),t=(l-d.x)/d.k,d.k=r,n=t*d.k+d.x,d.x+=l-n,u([d.x,0],d.k,o)}function s(t){t=datepicker.datepicker("getDate");var a=d(n.x.domain()),r=document.getElementById("position-dropdown").innerHTML,i=e.width,o=b.scaleExtent(),l=b.translate()[0],s=b.scale();switch(r=r.substr(0,r.indexOf("<")-1),this.id){case"one_hour":a=p,this.parentElement.parentElement.previousElementSibling.innerHTML=this.innerHTML+' <span class="caret"></span>';break;case"one_day":a=m,this.parentElement.parentElement.previousElementSibling.innerHTML=this.innerHTML+' <span class="caret"></span>';break;case"one_week":a=h,this.parentElement.parentElement.previousElementSibling.innerHTML=this.innerHTML+' <span class="caret"></span>';break;case"one_month":a=g,this.parentElement.parentElement.previousElementSibling.innerHTML=this.innerHTML+' <span class="caret"></span>';break;case"ending":r="ending",this.parentElement.parentElement.previousElementSibling.innerHTML=this.innerHTML+' <span class="caret"></span>';break;case"starting":r="starting",this.parentElement.parentElement.previousElementSibling.innerHTML=this.innerHTML+' <span class="caret"></span>';break;case"centered":r="centered",this.parentElement.parentElement.previousElementSibling.innerHTML=this.innerHTML+' <span class="caret"></span>';break;case"datepicker":}s*=c(d(n.x.domain()),a),s<o[0]?s=o[0]:s>o[1]&&(s=o[1]),console.log(t),"ending"==r?t=new Date(t-a):"centered"==r&&(t=new Date(t-a/2)),l+=s*i*b.scale()/d(n.x.domain())*d([t,n.x.domain()[0]]),u([l,0],s,100)}function u(t,e,n){return i["default"].transition().duration(n).tween("zoom",function(){var n=i["default"].interpolate(b.translate(),t),a=i["default"].interpolate(b.scale(),e);return function(t){b.scale(a(t)).translate(n(t)),b.event(v)}})}function d(t){return t[1].getTime()-t[0].getTime()}function c(t,e){return t/e}var f=6e4,p=60*f,m=24*p,h=7*m,g=30*m,v=i["default"].select(".grid"),x=i["default"].scale.log().domain([a.minScale,a.maxScale]).range([a.minScale,a.maxScale]).base(2),b=(i["default"].selectAll(".zoom-filter > li > a").on("click",s),i["default"].behavior.zoom().size([e.width,e.height]).scaleExtent([a.minScale,a.maxScale]).x(n.x).on("zoom",function(){requestAnimationFrame(function(){return o(r)})}));return a.eventZoom&&b.on("zoomend",a.eventZoom),a.slider&&!function(){var n=t.append("button").attr("type","button").attr("class","btn btn-default pf-timeline-zoom").attr("id","zoom-in").style("top",a.padding.top+"px").style("right",a.padding.right+"px").on("click",l);n.append("i").attr("class","fa fa-plus");var i=t.append("button").attr("type","button").attr("class","btn btn-default pf-timeline-zoom").attr("id","zoom-out").style("top",a.padding.top+e.height-26+"px").style("right",a.padding.right+"px").on("click",l);i.append("i").attr("class","fa fa-minus");var s=t.append("input").attr("type","range").attr("class","pf-timeline-zoom").attr("id","pf-timeline-slider").style("width",e.height-2*n.node().offsetHeight+"px").style("top",a.padding.top+(e.height-2*n.node().offsetHeight)/2+n.node().offsetHeight-7+"px").style("right",a.padding.right-(e.height-n.node().offsetHeight)/2+n.node().offsetWidth+"px").attr("value",x(b.scale())).attr("min",a.minScale).attr("max",a.maxScale).attr("step",.1).on("input",l);b.on("zoom",function(){requestAnimationFrame(function(){return o(r)}),s.property("value",x(b.scale()))})}(),v.call(b).on("dblclick.zoom",null)}},function(t,e,n){"use strict";function a(t,e){function n(n){return function(a){return arguments.length?(e[n]=a,t):e[n]}}for(var a in e)t[a]=n(a)}t.exports=a},function(t,e){}])});
//# sourceMappingURL=timeline.js.map