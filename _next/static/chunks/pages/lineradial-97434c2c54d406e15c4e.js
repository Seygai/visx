_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[110],{"Cf/J":function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var a=t("aWzz"),r=t.n(a),i=t("ERkP"),o=t.n(i);function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function l(e){var n=e.children,t=e.id,a=e.from,r=e.to,i=e.x1,l=e.y1,c=e.x2,u=e.y2,d=e.fromOffset,f=void 0===d?"0%":d,p=e.fromOpacity,m=void 0===p?1:p,h=e.toOffset,g=void 0===h?"100%":h,k=e.toOpacity,v=void 0===k?1:k,y=e.rotate,O=e.transform,b=e.vertical,x=void 0===b||b,S=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["children","id","from","to","x1","y1","x2","y2","fromOffset","fromOpacity","toOffset","toOpacity","rotate","transform","vertical"]),A=i,R=c,E=l,w=u;return!x||A||R||E||w||(A="0",R="0",E="0",w="1"),o.a.createElement("defs",null,o.a.createElement("linearGradient",s({id:t,x1:A,y1:E,x2:R,y2:w,gradientTransform:y?"rotate("+y+")":O},S),!!n&&n,!n&&o.a.createElement("stop",{offset:f,stopColor:a,stopOpacity:m}),!n&&o.a.createElement("stop",{offset:g,stopColor:r,stopOpacity:v})))}l.propTypes={id:r.a.string.isRequired,from:r.a.string,to:r.a.string,x1:r.a.oneOfType([r.a.string,r.a.number]),x2:r.a.oneOfType([r.a.string,r.a.number]),y1:r.a.oneOfType([r.a.string,r.a.number]),y2:r.a.oneOfType([r.a.string,r.a.number]),fromOffset:r.a.oneOfType([r.a.string,r.a.number]),fromOpacity:r.a.oneOfType([r.a.string,r.a.number]),toOffset:r.a.oneOfType([r.a.string,r.a.number]),toOpacity:r.a.oneOfType([r.a.string,r.a.number]),rotate:r.a.oneOfType([r.a.string,r.a.number]),transform:r.a.string,children:r.a.node,vertical:r.a.bool}},HO86:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t("lEbO");function r(e,n){if(e){if("string"===typeof e)return Object(a.a)(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Object(a.a)(e,n):void 0}}},"KBH/":function(e,n,t){"use strict";t.d(n,"b",(function(){return C})),t.d(n,"a",(function(){return _}));var a=t("fGyu"),r=t("ERkP"),i=t.n(r),o=t("JmwF"),s=t("rySy"),l=t("cjvV"),c=t("i2hO"),u=t("t4/P"),d=t("oT5u"),f=t.n(d),p=t("Cf/J"),m=t("KRsa"),h=t("aWzz"),g=t.n(h),k=t("O94r"),v=t.n(k),y=t("hsl+"),O=t.n(y),b=t("nNND"),x=t("HlJr"),S=t("rkTo");function A(e){var n=e.radius,t=e.angle;return{x:n*Math.cos(t),y:n*Math.sin(t)}}function R(){return(R=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function E(e){var n=e.className,t=e.innerRadius,a=void 0===t?0:t,r=e.left,s=void 0===r?0:r,l=e.lineClassName,c=e.lineStyle,u=e.numTicks,d=void 0===u?10:u,f=e.outerRadius,p=void 0===f?0:f,m=e.scale,h=e.stroke,g=void 0===h?"#eaf0f6":h,k=e.strokeDasharray,y=e.strokeWidth,E=void 0===y?1:y,w=e.tickValues,T=e.top,L=void 0===T?0:T,j=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["className","innerRadius","left","lineClassName","lineStyle","numTicks","outerRadius","scale","stroke","strokeDasharray","strokeWidth","tickValues","top"]),P=null!=w?w:Object(b.a)(m,d);return i.a.createElement(o.a,{className:v()("visx-grid-angle",n),top:L,left:s},P.map((function(e,n){var t,r=(null!=(t=Object(x.a)(m(e)))?t:Math.PI/2)-Math.PI/2;return i.a.createElement(O.a,R({key:"polar-grid-"+e+"-"+n,className:l,from:new S.a(A({angle:r,radius:a})),to:new S.a(A({angle:r,radius:p})),stroke:g,strokeWidth:E,strokeDasharray:k,style:c},j))})))}E.propTypes={tickValues:g.a.array,innerRadius:g.a.number,outerRadius:g.a.number.isRequired,lineClassName:g.a.string};var w=t("ofak"),T=t.n(w);function L(){return(L=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function j(e){var n=e.arcThickness,t=e.className,a=e.endAngle,r=void 0===a?2*Math.PI:a,s=e.fill,l=void 0===s?"transparent":s,c=e.fillOpacity,u=void 0===c?1:c,d=e.left,f=void 0===d?0:d,p=e.lineClassName,m=e.lineStyle,h=e.numTicks,g=void 0===h?10:h,k=e.scale,y=e.startAngle,O=void 0===y?0:y,x=e.stroke,S=void 0===x?"#eaf0f6":x,A=e.strokeWidth,R=void 0===A?1:A,E=e.strokeDasharray,w=e.tickValues,j=e.top,P=void 0===j?0:j,N=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["arcThickness","className","endAngle","fill","fillOpacity","left","lineClassName","lineStyle","numTicks","scale","startAngle","stroke","strokeWidth","strokeDasharray","tickValues","top"]),C=null!=w?w:Object(b.a)(k,g),_=Math.min.apply(Math,k.domain());return i.a.createElement(o.a,{className:v()("visx-grid-radial",t),top:P,left:f},C.map((function(e,t){return i.a.createElement(T.a,L({key:"radial-grid-"+e+"-"+t,className:p,startAngle:O,endAngle:r,innerRadius:k(n?e-n:_),outerRadius:k(e),fill:l,fillOpacity:u,stroke:S,strokeWidth:R,strokeDasharray:E,style:m},N))})))}j.propTypes={tickValues:g.a.array,arcThickness:g.a.number,endAngle:g.a.number,lineClassName:g.a.string,fill:g.a.string,fillOpacity:g.a.number,startAngle:g.a.number,children:g.a.func};var P=t("1GyV"),N=i.a.createElement,C="#aeeef8",_="#744cca",D={tension:20};function M(e,n){var t=e.map(n);return[Math.min.apply(Math,Object(a.a)(t)),Math.max.apply(Math,Object(a.a)(t))]}var W=function(e){return new Date(e.date).valueOf()},G=function(e){return e.close},I=function(e){return String(e)},F=Object(l.a)({range:[0,2*Math.PI],domain:M(f.a,W)}),V=Object(c.a)({domain:M(f.a,G)}),z=function(e){var n;return null!==(n=F(W(e)))&&void 0!==n?n:0},J=function(e){var n;return null!==(n=V(G(e)))&&void 0!==n?n:0},B=f.a[0],K=f.a[f.a.length-1],q=function(e){var n=e.width,t=e.height,a=e.animate,l=void 0===a||a,c=Object(r.useRef)(null),d=Object(r.useState)(0),h=d[0],g=d[1],k=Object(r.useState)(!1),v=k[0],y=k[1],O=Object(P.useSpring)({frame:v?0:1,config:D,onRest:function(){return y(!1)}}),b=c.current;if(Object(r.useEffect)((function(){c.current&&g(c.current.getTotalLength())}),[b]),n<10)return null;V.range([0,t/2-20]);var x=V.copy().range(V.range().reverse()),S=function(){return y(!0)};return N(i.a.Fragment,null,l&&N(i.a.Fragment,null,N("button",{type:"button",onClick:S,onTouchStart:S},"Animate"),N("br",null)),N("svg",{width:n,height:t,onClick:function(){return y(!v)}},N(p.a,{from:"#e5fd3d",to:C,id:"line-gradient"}),N("rect",{width:n,height:t,fill:_,rx:14}),N(o.a,{top:t/2,left:n/2},N(E,{scale:F,outerRadius:t/2-20,stroke:"#e5fd3d",strokeWidth:1,strokeOpacity:.3,strokeDasharray:"5,2",numTicks:20}),N(j,{scale:V,numTicks:5,stroke:C,strokeWidth:1,fill:C,fillOpacity:.1,strokeOpacity:.2}),N(m.a,{top:-t/2+20,scale:x,numTicks:5,tickStroke:"none",tickLabelProps:function(e){return{fontSize:8,fill:C,fillOpacity:1,textAnchor:"middle",dx:"1em",dy:"-0.5em",stroke:"#744cca",strokeWidth:.5,paintOrder:"stroke"}},tickFormat:I,hideAxisLine:!0}),N(s.a,{angle:z,radius:J,curve:u.a},(function(e){var n=(0,e.path)(f.a)||"";return N(i.a.Fragment,null,N(P.animated.path,{d:n,ref:c,strokeWidth:2,strokeOpacity:.8,strokeLinecap:"round",fill:"none",stroke:l?"#603FA8":"url(#line-gradient)"}),v&&N(P.animated.path,{d:n,strokeWidth:2,strokeOpacity:.8,strokeLinecap:"round",fill:"none",stroke:"url(#line-gradient)",strokeDashoffset:O.frame.interpolate((function(e){return e*h})),strokeDasharray:h}))})),[B,K].map((function(e,n){var t,a,r=(null!==(t=F(W(e)))&&void 0!==t?t:0)*Math.PI/180,i=-(null!==(a=V(G(e)))&&void 0!==a?a:0);return N("circle",{key:"line-cap-".concat(n),cx:r,cy:i,fill:"#dff84d",r:3})})))))};n.c=q;try{q.displayName="Example",q.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},animate:{defaultValue:{value:!0},description:"",name:"animate",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-shape-line-radial/Example.tsx#Example"]={docgenInfo:q.__docgenInfo,name:"Example",path:"src/sandboxes/visx-shape-line-radial/Example.tsx#Example"})}catch(H){}},KRsa:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t("ERkP"),r=t.n(a),i=t("O94r"),o=t.n(i),s=t("5Nbk"),l=t("pn27");function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var u=function(){return{dx:"-0.25em",dy:"0.25em",fill:"#222",fontFamily:"Arial",fontSize:10,textAnchor:"end"}};function d(e){var n=e.axisClassName,t=e.labelOffset,a=void 0===t?36:t,i=e.tickLabelProps,d=void 0===i?u:i,f=e.tickLength,p=void 0===f?8:f,m=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["axisClassName","labelOffset","tickLabelProps","tickLength"]);return r.a.createElement(s.a,c({axisClassName:o()("visx-axis-left",n),labelOffset:a,orientation:l.a.left,tickLabelProps:d,tickLength:p},m))}},Rzvu:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lineradial",function(){return t("vFin")}])},fGyu:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t("lEbO");var r=t("HO86");function i(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},lEbO:function(e,n,t){"use strict";function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}t.d(n,"a",(function(){return a}))},oUui:function(e){e.exports=JSON.parse('{"name":"@visx/demo-shape-line-radial","description":"Standalone visx line radial demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^16","@types/react-dom":"^16","@visx/axis":"latest","@visx/curve":"latest","@visx/gradient":"latest","@visx/group":"latest","@visx/grid":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","@visx/shape":"latest","react":"^16.8","react-dom":"^16.8","react-scripts-ts":"3.1.0","react-spring":"^8.0.27","typescript":"^3"},"keywords":["visualization","d3","react","visx","shape","radial","line"]}')},ofak:function(e,n,t){"use strict";n.__esModule=!0,n.default=function(e){var n=e.className,t=e.data,o=e.innerRadius,l=e.outerRadius,c=e.cornerRadius,u=e.startAngle,d=e.endAngle,f=e.padAngle,p=e.padRadius,m=e.children,h=e.innerRef,g=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["className","data","innerRadius","outerRadius","cornerRadius","startAngle","endAngle","padAngle","padRadius","children","innerRef"]),k=(0,i.arc)({innerRadius:o,outerRadius:l,cornerRadius:c,startAngle:u,endAngle:d,padAngle:f,padRadius:p});if(m)return a.default.createElement(a.default.Fragment,null,m({path:k}));if(!t&&(null==u||null==d||null==o||null==l))return console.warn("[@visx/shape/Arc]: expected data because one of startAngle, endAngle, innerRadius, outerRadius is undefined. Bailing."),null;return a.default.createElement("path",s({ref:h,className:(0,r.default)("visx-arc",n),d:k(t)||""},g))};var a=o(t("ERkP")),r=o(t("O94r")),i=t("m2mA");function o(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}},vFin:function(e,n,t){"use strict";t.r(n);var a=t("ERkP"),r=t.n(a),i=t("6wy5"),o=t("KBH/"),s=t("oUui"),l=r.a.createElement;n.default=function(){return l(i.a,{component:o.c,title:"Line Radial",codeSandboxDirectoryName:"visx-shape-line-radial",packageJson:s},"/**\n * Animated radial line example using svg dash offset trick. See here for more\n * https://www.visualcinnamon.com/2016/01/animating-dashed-line-d3.html\n */\nimport React, { useRef, useState, useEffect } from 'react';\nimport { Group } from '@visx/group';\nimport { LineRadial } from '@visx/shape';\nimport { scaleTime, scaleLog, NumberLike } from '@visx/scale';\nimport { curveBasisOpen } from '@visx/curve';\nimport appleStock, { AppleStock } from '@visx/mock-data/lib/mocks/appleStock';\nimport { LinearGradient } from '@visx/gradient';\nimport { AxisLeft } from '@visx/axis';\nimport { GridRadial, GridAngle } from '@visx/grid';\nimport { animated, useSpring } from 'react-spring';\n\nconst green = '#e5fd3d';\nexport const blue = '#aeeef8';\nconst darkgreen = '#dff84d';\nexport const background = '#744cca';\nconst darkbackground = '#603FA8';\nconst strokeColor = '#744cca';\nconst springConfig = {\n  tension: 20,\n};\n\n// utils\nfunction extent<Datum>(data: Datum[], value: (d: Datum) => number) {\n  const values = data.map(value);\n  return [Math.min(...values), Math.max(...values)];\n}\n\n// accessors\nconst date = (d: AppleStock) => new Date(d.date).valueOf();\nconst close = (d: AppleStock) => d.close;\nconst formatTicks = (val: NumberLike) => String(val);\n\n// scales\nconst xScale = scaleTime({\n  range: [0, Math.PI * 2],\n  domain: extent(appleStock, date),\n});\nconst yScale = scaleLog<number>({\n  domain: extent(appleStock, close),\n});\n\nconst angle = (d: AppleStock) => xScale(date(d)) ?? 0;\nconst radius = (d: AppleStock) => yScale(close(d)) ?? 0;\nconst padding = 20;\n\nconst firstPoint = appleStock[0];\nconst lastPoint = appleStock[appleStock.length - 1];\n\nexport type LineRadialProps = {\n  width: number;\n  height: number;\n  animate?: boolean;\n};\n\nconst Example = ({ width, height, animate = true }: LineRadialProps) => {\n  const lineRef = useRef<SVGPathElement>(null);\n  const [lineLength, setLineLength] = useState<number>(0);\n  const [shouldAnimate, setShouldAnimate] = useState<boolean>(false);\n\n  const spring = useSpring({\n    frame: shouldAnimate ? 0 : 1,\n    config: springConfig,\n    onRest: () => setShouldAnimate(false),\n  });\n\n  // set line length once it is known after initial render\n  const effectDependency = lineRef.current;\n  useEffect(() => {\n    if (lineRef.current) {\n      setLineLength(lineRef.current.getTotalLength());\n    }\n  }, [effectDependency]);\n\n  if (width < 10) return null;\n\n  // Update scale output to match component dimensions\n  yScale.range([0, height / 2 - padding]);\n  const reverseYScale = yScale.copy().range(yScale.range().reverse());\n  const handlePress = () => setShouldAnimate(true);\n\n  return (\n    <>\n      {animate && (\n        <>\n          <button type=\"button\" onClick={handlePress} onTouchStart={handlePress}>\n            Animate\n          </button>\n          <br />\n        </>\n      )}\n      <svg width={width} height={height} onClick={() => setShouldAnimate(!shouldAnimate)}>\n        <LinearGradient from={green} to={blue} id=\"line-gradient\" />\n        <rect width={width} height={height} fill={background} rx={14} />\n        <Group top={height / 2} left={width / 2}>\n          <GridAngle\n            scale={xScale}\n            outerRadius={height / 2 - padding}\n            stroke={green}\n            strokeWidth={1}\n            strokeOpacity={0.3}\n            strokeDasharray=\"5,2\"\n            numTicks={20}\n          />\n          <GridRadial\n            scale={yScale}\n            numTicks={5}\n            stroke={blue}\n            strokeWidth={1}\n            fill={blue}\n            fillOpacity={0.1}\n            strokeOpacity={0.2}\n          />\n          <AxisLeft\n            top={-height / 2 + padding}\n            scale={reverseYScale}\n            numTicks={5}\n            tickStroke=\"none\"\n            tickLabelProps={val => ({\n              fontSize: 8,\n              fill: blue,\n              fillOpacity: 1,\n              textAnchor: 'middle',\n              dx: '1em',\n              dy: '-0.5em',\n              stroke: strokeColor,\n              strokeWidth: 0.5,\n              paintOrder: 'stroke',\n            })}\n            tickFormat={formatTicks}\n            hideAxisLine\n          />\n          <LineRadial angle={angle} radius={radius} curve={curveBasisOpen}>\n            {({ path }) => {\n              const d = path(appleStock) || '';\n              return (\n                <>\n                  <animated.path\n                    d={d}\n                    ref={lineRef}\n                    strokeWidth={2}\n                    strokeOpacity={0.8}\n                    strokeLinecap=\"round\"\n                    fill=\"none\"\n                    stroke={animate ? darkbackground : 'url(#line-gradient)'}\n                  />\n                  {shouldAnimate && (\n                    <animated.path\n                      d={d}\n                      strokeWidth={2}\n                      strokeOpacity={0.8}\n                      strokeLinecap=\"round\"\n                      fill=\"none\"\n                      stroke=\"url(#line-gradient)\"\n                      strokeDashoffset={spring.frame.interpolate(v => v * lineLength)}\n                      strokeDasharray={lineLength}\n                    />\n                  )}\n                </>\n              );\n            }}\n          </LineRadial>\n\n          {[firstPoint, lastPoint].map((d, i) => {\n            const cx = ((xScale(date(d)) ?? 0) * Math.PI) / 180;\n            const cy = -(yScale(close(d)) ?? 0);\n            return <circle key={`line-cap-${i}`} cx={cx} cy={cy} fill={darkgreen} r={3} />;\n          })}\n        </Group>\n      </svg>\n    </>\n  );\n};\n\nexport default Example;\n")}}},[["Rzvu",0,2,1,3,4,5,6,7,11,12,13,14,15,16,19]]]);