var Ma=Object.defineProperty;var Dn=i=>{throw TypeError(i)};var La=(i,e,n)=>e in i?Ma(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n;var q=(i,e,n)=>La(i,typeof e!="symbol"?e+"":e,n),Ha=(i,e,n)=>e.has(i)||Dn("Cannot "+n);var Rn=(i,e,n)=>e.has(i)?Dn("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,n);var Zt=(i,e,n)=>(Ha(i,e,"access private method"),n);import{b as Pn,e as za,c as ca,a as X,t as ae,d as In}from"../chunks/itiVRFp6.js";import{s as Mn,j as Ln,m as Fa,o as Jt,w as Vt,h as re,q as Dt,F as Na,x as bn,b as Ba,S as P,R as ja,J as Za,K as Hn,v as ln,c as Je,y as qa,L as ha,a as ua,M as Ua,C as pa,k as $a,Y as Va,am as zn,an as on,ao as kn,ap as Fn,aq as Ga,B as Xa,ar as Wa,d as Ya,as as vn,at as Ja,r as da,au as fa,ah as Ka,av as Qa,ab as be,aw as es,z as ts,t as ns,ax as as,ay as ss,az as is,aA as ls,aB as os,aC as rs,g as cs,ag as hs,af as ma,aD as us,G as xn,X as fe,aj as Se,f as Ke,I as Tn,ac as N,ad as z,W as Nn,u as Bn,ae as ne,aE as Gt,n as Xt,al as jn}from"../chunks/B3ueqKpf.js";import{s as Te,d as ga}from"../chunks/Z6FKpxSH.js";import{_ as ps,i as ye,p as Zn}from"../chunks/iAtHzW3P.js";import{s as rn}from"../chunks/BoiVpHfa.js";import{o as ba}from"../chunks/7OCZpAxk.js";let qn=!1;function _a(){qn||(qn=!0,document.addEventListener("reset",i=>{Promise.resolve().then(()=>{var e;if(!i.defaultPrevented)for(const n of i.target.elements)(e=n.__on_r)==null||e.call(n)})},{capture:!0}))}function ds(i){var e=Fa,n=Jt;Mn(null),Ln(null);try{return i()}finally{Mn(e),Ln(n)}}function ya(i,e,n,t=n){i.addEventListener(e,()=>ds(n));const s=i.__on_r;s?i.__on_r=()=>{s(),t(!0)}:i.__on_r=()=>t(!0),_a()}function Un(i,e){return e}function fs(i,e,n,t){for(var s=[],o=e.length,r=0;r<o;r++)Ga(e[r].e,s,!0);var p=o>0&&s.length===0&&n!==null;if(p){var f=n.parentNode;Xa(f),f.append(n),t.clear(),je(i,e[0].prev,e[o-1].next)}Wa(s,()=>{for(var m=0;m<o;m++){var b=e[m];p||(t.delete(b.k),je(i,b.prev,b.next)),Ya(b.e,!p)}})}function cn(i,e,n,t,s,o=null){var r=i,p={flags:e,items:new Map,first:null},f=(e&fa)!==0;if(f){var m=i;r=re?Vt(Dt(m)):m.appendChild(Na())}re&&bn();var b=null,v=!1,_=ja(()=>{var A=n();return $a(A)?A:A==null?[]:pa(A)});Ba(()=>{var A=P(_),x=A.length;if(v&&x===0)return;v=x===0;let E=!1;if(re){var a=r.data===Za;a!==(x===0)&&(r=Hn(),Vt(r),ln(!1),E=!0)}if(re){for(var l=null,c,h=0;h<x;h++){if(Je.nodeType===8&&Je.data===qa){r=Je,E=!0,ln(!1);break}var d=A[h],g=t(d,h);c=wa(Je,p,l,null,d,g,h,s,e,n),p.items.set(g,c),l=c}x>0&&Vt(Hn())}re||ms(A,p,r,s,e,t,n),o!==null&&(x===0?b?ha(b):b=ua(()=>o(r)):b!==null&&Ua(b,()=>{b=null})),E&&ln(!0),P(_)}),re&&(r=Je)}function ms(i,e,n,t,s,o,r){var te,me,ke,Ze;var p=(s&Qa)!==0,f=(s&(vn|kn))!==0,m=i.length,b=e.items,v=e.first,_=v,A,x=null,E,a=[],l=[],c,h,d,g;if(p)for(g=0;g<m;g+=1)c=i[g],h=o(c,g),d=b.get(h),d!==void 0&&((te=d.a)==null||te.measure(),(E??(E=new Set)).add(d));for(g=0;g<m;g+=1){if(c=i[g],h=o(c,g),d=b.get(h),d===void 0){var y=_?_.e.nodes_start:n;x=wa(y,e,x,x===null?e.first:x.next,c,h,g,t,s,r),b.set(h,x),a=[],l=[],_=x.next;continue}if(f&&gs(d,c,g,s),d.e.f&on&&(ha(d.e),p&&((me=d.a)==null||me.unfix(),(E??(E=new Set)).delete(d))),d!==_){if(A!==void 0&&A.has(d)){if(a.length<l.length){var C=l[0],R;x=C.prev;var M=a[0],Z=a[a.length-1];for(R=0;R<a.length;R+=1)$n(a[R],C,n);for(R=0;R<l.length;R+=1)A.delete(l[R]);je(e,M.prev,Z.next),je(e,x,M),je(e,Z,C),_=C,x=Z,g-=1,a=[],l=[]}else A.delete(d),$n(d,_,n),je(e,d.prev,d.next),je(e,d,x===null?e.first:x.next),je(e,x,d),x=d;continue}for(a=[],l=[];_!==null&&_.k!==h;)_.e.f&on||(A??(A=new Set)).add(_),l.push(_),_=_.next;if(_===null)continue;d=_}a.push(d),x=d,_=d.next}if(_!==null||A!==void 0){for(var F=A===void 0?[]:pa(A);_!==null;)_.e.f&on||F.push(_),_=_.next;var W=F.length;if(W>0){var K=s&fa&&m===0?n:null;if(p){for(g=0;g<W;g+=1)(ke=F[g].a)==null||ke.measure();for(g=0;g<W;g+=1)(Ze=F[g].a)==null||Ze.fix()}fs(e,F,K,b)}}p&&Ka(()=>{var Ce;if(E!==void 0)for(d of E)(Ce=d.a)==null||Ce.apply()}),Jt.first=e.first&&e.first.e,Jt.last=x&&x.e}function gs(i,e,n,t){t&vn&&Fn(i.v,e),t&kn?Fn(i.i,n):i.i=n}function wa(i,e,n,t,s,o,r,p,f,m){var b=(f&vn)!==0,v=(f&Ja)===0,_=b?v?Va(s):zn(s):s,A=f&kn?zn(r):r,x={i:A,v:_,k:o,a:null,e:null,prev:n,next:t};try{return x.e=ua(()=>p(i,_,A,m),re),x.e.prev=n&&n.e,x.e.next=t&&t.e,n===null?e.first=x:(n.next=x,n.e.next=x.e),t!==null&&(t.prev=x,t.e.prev=x.e),x}finally{}}function $n(i,e,n){for(var t=i.next?i.next.e.nodes_start:n,s=e?e.e.nodes_start:n,o=i.e.nodes_start;o!==t;){var r=da(o);s.before(o),o=r}}function je(i,e,n){e===null?i.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}function bs(i,e,n=!1,t=!1,s=!1){var o=i,r="";be(()=>{var p=Jt;if(r===(r=e()??"")){re&&bn();return}if(p.nodes_start!==null&&(es(p.nodes_start,p.nodes_end),p.nodes_start=p.nodes_end=null),r!==""){if(re){Je.data;for(var f=bn(),m=f;f!==null&&(f.nodeType!==8||f.data!=="");)m=f,f=da(f);if(f===null)throw ts(),ns;Pn(Je,m),o=Vt(f);return}var b=r+"";n?b=`<svg>${b}</svg>`:t&&(b=`<math>${b}</math>`);var v=za(b);if((n||t)&&(v=Dt(v)),Pn(Dt(v),v.lastChild),n||t)for(;Dt(v);)o.before(Dt(v));else o.before(v)}})}const Vn=[...` 	
\r\f \v\uFEFF`];function _s(i,e,n){var t=""+i;if(n){for(var s in n)if(n[s])t=t?t+" "+s:s;else if(t.length)for(var o=s.length,r=0;(r=t.indexOf(s,r))>=0;){var p=r+o;(r===0||Vn.includes(t[r-1]))&&(p===t.length||Vn.includes(t[p]))?t=(r===0?"":t.substring(0,r))+t.substring(p+1):r=p}}return t===""?null:t}function ys(i,e){return i==null?null:String(i)}function ws(i,e,n,t,s,o){var r=i.__className;if(re||r!==n||r===void 0){var p=_s(n,t,o);(!re||p!==i.getAttribute("class"))&&(p==null?i.removeAttribute("class"):i.className=p),i.__className=n}else if(o&&s!==o)for(var f in o){var m=!!o[f];(s==null||m!==!!s[f])&&i.classList.toggle(f,m)}return o}function ks(i,e,n,t){var s=i.__style;if(re||s!==e){var o=ys(e);(!re||o!==i.getAttribute("style"))&&(o==null?i.removeAttribute("style"):i.style.cssText=o),i.__style=e}return t}const vs=Symbol("is custom element"),xs=Symbol("is html");function Ts(i){if(re){var e=!1,n=()=>{if(!e){if(e=!0,i.hasAttribute("value")){var t=i.value;Kt(i,"value",null),i.value=t}if(i.hasAttribute("checked")){var s=i.checked;Kt(i,"checked",null),i.checked=s}}};i.__on_r=n,as(n),_a()}}function Kt(i,e,n,t){var s=As(i);re&&(s[e]=i.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&i.nodeName==="LINK")||s[e]!==(s[e]=n)&&(e==="loading"&&(i[ss]=n),n==null?i.removeAttribute(e):typeof n!="string"&&Cs(i).includes(e)?i[e]=n:i.setAttribute(e,n))}function As(i){return i.__attributes??(i.__attributes={[vs]:i.nodeName.includes("-"),[xs]:i.namespaceURI===is})}var Gn=new Map;function Cs(i){var e=Gn.get(i.nodeName);if(e)return e;Gn.set(i.nodeName,e=[]);for(var n,t=i,s=Element.prototype;s!==t;){n=os(t);for(var o in n)n[o].set&&e.push(o);t=ls(t)}return e}function Os(i,e,n=e){var t=rs();ya(i,"input",s=>{var o=s?i.defaultValue:i.value;if(o=hn(i)?un(o):o,n(o),t&&o!==(o=e())){var r=i.selectionStart,p=i.selectionEnd;i.value=o??"",p!==null&&(i.selectionStart=r,i.selectionEnd=Math.min(p,i.value.length))}}),(re&&i.defaultValue!==i.value||cs(e)==null&&i.value)&&n(hn(i)?un(i.value):i.value),hs(()=>{var s=e();hn(i)&&s===un(i.value)||i.type==="date"&&!s&&!i.value||s!==i.value&&(i.value=s??"")})}function hn(i){var e=i.type;return e==="number"||e==="range"}function un(i){return i===""?null:+i}function ka(i,e,n){if(i.multiple)return Ds(i,e);for(var t of i.options){var s=Rt(t);if(us(s,e)){t.selected=!0;return}}(!n||e!==void 0)&&(i.selectedIndex=-1)}function Ss(i,e){ma(()=>{var n=new MutationObserver(()=>{var t=i.__value;ka(i,t)});return n.observe(i,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{n.disconnect()}})}function Es(i,e,n=e){var t=!0;ya(i,"change",s=>{var o=s?"[selected]":":checked",r;if(i.multiple)r=[].map.call(i.querySelectorAll(o),Rt);else{var p=i.querySelector(o)??i.querySelector("option:not([disabled])");r=p&&Rt(p)}n(r)}),ma(()=>{var s=e();if(ka(i,s,t),t&&s===void 0){var o=i.querySelector(":checked");o!==null&&(s=Rt(o),n(s))}i.__value=s,t=!1}),Ss(i)}function Ds(i,e){for(var n of i.options)n.selected=~e.indexOf(Rt(n))}function Rt(i){return"__value"in i?i.__value:i.value}function An(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!1,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!1,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let tt=An();function va(i){tt=i}const xa=/[&<>"']/,Rs=new RegExp(xa.source,"g"),Ta=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Ps=new RegExp(Ta.source,"g"),Is={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Xn=i=>Is[i];function oe(i,e){if(e){if(xa.test(i))return i.replace(Rs,Xn)}else if(Ta.test(i))return i.replace(Ps,Xn);return i}const Ms=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Aa(i){return i.replace(Ms,(e,n)=>(n=n.toLowerCase(),n==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):""))}const Ls=/(^|[^\[])\^/g;function $(i,e){i=typeof i=="string"?i:i.source,e=e||"";const n={replace:(t,s)=>(s=typeof s=="object"&&"source"in s?s.source:s,s=s.replace(Ls,"$1"),i=i.replace(t,s),n),getRegex:()=>new RegExp(i,e)};return n}const Hs=/[^\w:]/g,zs=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function Wn(i,e,n){if(i){let t;try{t=decodeURIComponent(Aa(n)).replace(Hs,"").toLowerCase()}catch{return null}if(t.indexOf("javascript:")===0||t.indexOf("vbscript:")===0||t.indexOf("data:")===0)return null}e&&!zs.test(n)&&(n=js(e,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch{return null}return n}const qt={},Fs=/^[^:]+:\/*[^/]*$/,Ns=/^([^:]+:)[\s\S]*$/,Bs=/^([^:]+:\/*[^/]*)[\s\S]*$/;function js(i,e){qt[" "+i]||(Fs.test(i)?qt[" "+i]=i+"/":qt[" "+i]=Wt(i,"/",!0)),i=qt[" "+i];const n=i.indexOf(":")===-1;return e.substring(0,2)==="//"?n?e:i.replace(Ns,"$1")+e:e.charAt(0)==="/"?n?e:i.replace(Bs,"$1")+e:i+e}const Qt={exec:()=>null};function Yn(i,e){const n=i.replace(/\|/g,(o,r,p)=>{let f=!1,m=r;for(;--m>=0&&p[m]==="\\";)f=!f;return f?"|":" |"}),t=n.split(/ \|/);let s=0;if(t[0].trim()||t.shift(),t.length>0&&!t[t.length-1].trim()&&t.pop(),e)if(t.length>e)t.splice(e);else for(;t.length<e;)t.push("");for(;s<t.length;s++)t[s]=t[s].trim().replace(/\\\|/g,"|");return t}function Wt(i,e,n){const t=i.length;if(t===0)return"";let s=0;for(;s<t;){const o=i.charAt(t-s-1);if(o===e&&!n)s++;else if(o!==e&&n)s++;else break}return i.slice(0,t-s)}function Zs(i,e){if(i.indexOf(e[1])===-1)return-1;let n=0;for(let t=0;t<i.length;t++)if(i[t]==="\\")t++;else if(i[t]===e[0])n++;else if(i[t]===e[1]&&(n--,n<0))return t;return-1}function qs(i,e){!i||i.silent||(e&&console.warn("marked(): callback is deprecated since version 5.0.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/using_pro#async"),(i.sanitize||i.sanitizer)&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"),(i.highlight||i.langPrefix!=="language-")&&console.warn("marked(): highlight and langPrefix parameters are deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-highlight."),i.mangle&&console.warn("marked(): mangle parameter is enabled by default, but is deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install https://www.npmjs.com/package/marked-mangle, or disable by setting `{mangle: false}`."),i.baseUrl&&console.warn("marked(): baseUrl parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-base-url."),i.smartypants&&console.warn("marked(): smartypants parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-smartypants."),i.xhtml&&console.warn("marked(): xhtml parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-xhtml."),(i.headerIds||i.headerPrefix)&&console.warn("marked(): headerIds and headerPrefix parameters enabled by default, but are deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install  https://www.npmjs.com/package/marked-gfm-heading-id, or disable by setting `{headerIds: false}`."))}function Jn(i,e,n,t){const s=e.href,o=e.title?oe(e.title):null,r=i[1].replace(/\\([\[\]])/g,"$1");if(i[0].charAt(0)!=="!"){t.state.inLink=!0;const p={type:"link",raw:n,href:s,title:o,text:r,tokens:t.inlineTokens(r)};return t.state.inLink=!1,p}return{type:"image",raw:n,href:s,title:o,text:oe(r)}}function Us(i,e){const n=i.match(/^(\s+)(?:```)/);if(n===null)return e;const t=n[1];return e.split(`
`).map(s=>{const o=s.match(/^\s+/);if(o===null)return s;const[r]=o;return r.length>=t.length?s.slice(t.length):s}).join(`
`)}class en{constructor(e){q(this,"options");q(this,"rules");q(this,"lexer");this.options=e||tt}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const t=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?t:Wt(t,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const t=n[0],s=Us(t,n[3]||"");return{type:"code",raw:t,lang:n[2]?n[2].trim().replace(this.rules.inline._escapes,"$1"):n[2],text:s}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let t=n[2].trim();if(/#$/.test(t)){const s=Wt(t,"#");(this.options.pedantic||!s||/ $/.test(s))&&(t=s.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:n[0]}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){const t=n[0].replace(/^ *>[ \t]?/gm,""),s=this.lexer.state.top;this.lexer.state.top=!0;const o=this.lexer.blockTokens(t);return this.lexer.state.top=s,{type:"blockquote",raw:n[0],tokens:o,text:t}}}list(e){let n=this.rules.block.list.exec(e);if(n){let t=n[1].trim();const s=t.length>1,o={type:"list",raw:"",ordered:s,start:s?+t.slice(0,-1):"",loose:!1,items:[]};t=s?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=s?t:"[*+-]");const r=new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`);let p="",f="",m=!1;for(;e;){let b=!1;if(!(n=r.exec(e))||this.rules.block.hr.test(e))break;p=n[0],e=e.substring(p.length);let v=n[2].split(`
`,1)[0].replace(/^\t+/,l=>" ".repeat(3*l.length)),_=e.split(`
`,1)[0],A=0;this.options.pedantic?(A=2,f=v.trimLeft()):(A=n[2].search(/[^ ]/),A=A>4?1:A,f=v.slice(A),A+=n[1].length);let x=!1;if(!v&&/^ *$/.test(_)&&(p+=_+`
`,e=e.substring(_.length+1),b=!0),!b){const l=new RegExp(`^ {0,${Math.min(3,A-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),c=new RegExp(`^ {0,${Math.min(3,A-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),h=new RegExp(`^ {0,${Math.min(3,A-1)}}(?:\`\`\`|~~~)`),d=new RegExp(`^ {0,${Math.min(3,A-1)}}#`);for(;e;){const g=e.split(`
`,1)[0];if(_=g,this.options.pedantic&&(_=_.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),h.test(_)||d.test(_)||l.test(_)||c.test(e))break;if(_.search(/[^ ]/)>=A||!_.trim())f+=`
`+_.slice(A);else{if(x||v.search(/[^ ]/)>=4||h.test(v)||d.test(v)||c.test(v))break;f+=`
`+_}!x&&!_.trim()&&(x=!0),p+=g+`
`,e=e.substring(g.length+1),v=_.slice(A)}}o.loose||(m?o.loose=!0:/\n *\n *$/.test(p)&&(m=!0));let E=null,a;this.options.gfm&&(E=/^\[[ xX]\] /.exec(f),E&&(a=E[0]!=="[ ] ",f=f.replace(/^\[[ xX]\] +/,""))),o.items.push({type:"list_item",raw:p,task:!!E,checked:a,loose:!1,text:f,tokens:[]}),o.raw+=p}o.items[o.items.length-1].raw=p.trimRight(),o.items[o.items.length-1].text=f.trimRight(),o.raw=o.raw.trimRight();for(let b=0;b<o.items.length;b++)if(this.lexer.state.top=!1,o.items[b].tokens=this.lexer.blockTokens(o.items[b].text,[]),!o.loose){const v=o.items[b].tokens.filter(A=>A.type==="space"),_=v.length>0&&v.some(A=>/\n.*\n/.test(A.raw));o.loose=_}if(o.loose)for(let b=0;b<o.items.length;b++)o.items[b].loose=!0;return o}}html(e){const n=this.rules.block.html.exec(e);if(n){const t={type:"html",block:!0,raw:n[0],pre:!this.options.sanitizer&&(n[1]==="pre"||n[1]==="script"||n[1]==="style"),text:n[0]};if(this.options.sanitize){const s=this.options.sanitizer?this.options.sanitizer(n[0]):oe(n[0]),o=t;o.type="paragraph",o.text=s,o.tokens=this.lexer.inline(s)}return t}}def(e){const n=this.rules.block.def.exec(e);if(n){const t=n[1].toLowerCase().replace(/\s+/g," "),s=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",o=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline._escapes,"$1"):n[3];return{type:"def",tag:t,raw:n[0],href:s,title:o}}}table(e){const n=this.rules.block.table.exec(e);if(n){const t={type:"table",raw:n[0],header:Yn(n[1]).map(s=>({text:s,tokens:[]})),align:n[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(t.header.length===t.align.length){let s=t.align.length,o,r,p,f;for(o=0;o<s;o++){const m=t.align[o];m&&(/^ *-+: *$/.test(m)?t.align[o]="right":/^ *:-+: *$/.test(m)?t.align[o]="center":/^ *:-+ *$/.test(m)?t.align[o]="left":t.align[o]=null)}for(s=t.rows.length,o=0;o<s;o++)t.rows[o]=Yn(t.rows[o],t.header.length).map(m=>({text:m,tokens:[]}));for(s=t.header.length,r=0;r<s;r++)t.header[r].tokens=this.lexer.inline(t.header[r].text);for(s=t.rows.length,r=0;r<s;r++)for(f=t.rows[r],p=0;p<f.length;p++)f[p].tokens=this.lexer.inline(f[p].text);return t}}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const t=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:t,tokens:this.lexer.inline(t)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:oe(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):oe(n[0]):n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const t=n[2].trim();if(!this.options.pedantic&&/^</.test(t)){if(!/>$/.test(t))return;const r=Wt(t.slice(0,-1),"\\");if((t.length-r.length)%2===0)return}else{const r=Zs(n[2],"()");if(r>-1){const f=(n[0].indexOf("!")===0?5:4)+n[1].length+r;n[2]=n[2].substring(0,r),n[0]=n[0].substring(0,f).trim(),n[3]=""}}let s=n[2],o="";if(this.options.pedantic){const r=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);r&&(s=r[1],o=r[3])}else o=n[3]?n[3].slice(1,-1):"";return s=s.trim(),/^</.test(s)&&(this.options.pedantic&&!/>$/.test(t)?s=s.slice(1):s=s.slice(1,-1)),Jn(n,{href:s&&s.replace(this.rules.inline._escapes,"$1"),title:o&&o.replace(this.rules.inline._escapes,"$1")},n[0],this.lexer)}}reflink(e,n){let t;if((t=this.rules.inline.reflink.exec(e))||(t=this.rules.inline.nolink.exec(e))){let s=(t[2]||t[1]).replace(/\s+/g," ");if(s=n[s.toLowerCase()],!s){const o=t[0].charAt(0);return{type:"text",raw:o,text:o}}return Jn(t,s,t[0],this.lexer)}}emStrong(e,n,t=""){let s=this.rules.inline.emStrong.lDelim.exec(e);if(!s||s[3]&&t.match(/[\p{L}\p{N}]/u))return;if(!(s[1]||s[2]||"")||!t||this.rules.inline.punctuation.exec(t)){const r=[...s[0]].length-1;let p,f,m=r,b=0;const v=s[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(v.lastIndex=0,n=n.slice(-1*e.length+r);(s=v.exec(n))!=null;){if(p=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!p)continue;if(f=[...p].length,s[3]||s[4]){m+=f;continue}else if((s[5]||s[6])&&r%3&&!((r+f)%3)){b+=f;continue}if(m-=f,m>0)continue;f=Math.min(f,f+m+b);const _=[...e].slice(0,r+s.index+f+1).join("");if(Math.min(r,f)%2){const x=_.slice(1,-1);return{type:"em",raw:_,text:x,tokens:this.lexer.inlineTokens(x)}}const A=_.slice(2,-2);return{type:"strong",raw:_,text:A,tokens:this.lexer.inlineTokens(A)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let t=n[2].replace(/\n/g," ");const s=/[^ ]/.test(t),o=/^ /.test(t)&&/ $/.test(t);return s&&o&&(t=t.substring(1,t.length-1)),t=oe(t,!0),{type:"codespan",raw:n[0],text:t}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e,n){const t=this.rules.inline.autolink.exec(e);if(t){let s,o;return t[2]==="@"?(s=oe(this.options.mangle?n(t[1]):t[1]),o="mailto:"+s):(s=oe(t[1]),o=s),{type:"link",raw:t[0],text:s,href:o,tokens:[{type:"text",raw:s,text:s}]}}}url(e,n){let t;if(t=this.rules.inline.url.exec(e)){let s,o;if(t[2]==="@")s=oe(this.options.mangle?n(t[0]):t[0]),o="mailto:"+s;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])[0];while(r!==t[0]);s=oe(t[0]),t[1]==="www."?o="http://"+t[0]:o=t[0]}return{type:"link",raw:t[0],text:s,href:o,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e,n){const t=this.rules.inline.text.exec(e);if(t){let s;return this.lexer.state.inRawBlock?s=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):oe(t[0]):t[0]:s=oe(this.options.smartypants?n(t[0]):t[0]),{type:"text",raw:t[0],text:s}}}}const D={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Qt,lheading:/^((?:(?!^bull ).|\n(?!\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};D._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;D._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;D.def=$(D.def).replace("label",D._label).replace("title",D._title).getRegex();D.bullet=/(?:[*+-]|\d{1,9}[.)])/;D.listItemStart=$(/^( *)(bull) */).replace("bull",D.bullet).getRegex();D.list=$(D.list).replace(/bull/g,D.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+D.def.source+")").getRegex();D._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";D._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;D.html=$(D.html,"i").replace("comment",D._comment).replace("tag",D._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();D.lheading=$(D.lheading).replace(/bull/g,D.bullet).getRegex();D.paragraph=$(D._paragraph).replace("hr",D.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",D._tag).getRegex();D.blockquote=$(D.blockquote).replace("paragraph",D.paragraph).getRegex();D.normal={...D};D.gfm={...D.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};D.gfm.table=$(D.gfm.table).replace("hr",D.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",D._tag).getRegex();D.gfm.paragraph=$(D._paragraph).replace("hr",D.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",D.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",D._tag).getRegex();D.pedantic={...D.normal,html:$(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",D._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Qt,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:$(D.normal._paragraph).replace("hr",D.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",D.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const T={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Qt,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,rDelimAst:/^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Qt,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^((?![*_])[\spunctuation])/};T._punctuation="\\p{P}$+<=>`^|~";T.punctuation=$(T.punctuation,"u").replace(/punctuation/g,T._punctuation).getRegex();T.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;T.anyPunctuation=/\\[punct]/g;T._escapes=/\\([punct])/g;T._comment=$(D._comment).replace("(?:-->|$)","-->").getRegex();T.emStrong.lDelim=$(T.emStrong.lDelim,"u").replace(/punct/g,T._punctuation).getRegex();T.emStrong.rDelimAst=$(T.emStrong.rDelimAst,"gu").replace(/punct/g,T._punctuation).getRegex();T.emStrong.rDelimUnd=$(T.emStrong.rDelimUnd,"gu").replace(/punct/g,T._punctuation).getRegex();T.anyPunctuation=$(T.anyPunctuation,"gu").replace(/punct/g,T._punctuation).getRegex();T._escapes=$(T._escapes,"gu").replace(/punct/g,T._punctuation).getRegex();T._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;T._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;T.autolink=$(T.autolink).replace("scheme",T._scheme).replace("email",T._email).getRegex();T._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;T.tag=$(T.tag).replace("comment",T._comment).replace("attribute",T._attribute).getRegex();T._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;T._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;T._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;T.link=$(T.link).replace("label",T._label).replace("href",T._href).replace("title",T._title).getRegex();T.reflink=$(T.reflink).replace("label",T._label).replace("ref",D._label).getRegex();T.nolink=$(T.nolink).replace("ref",D._label).getRegex();T.reflinkSearch=$(T.reflinkSearch,"g").replace("reflink",T.reflink).replace("nolink",T.nolink).getRegex();T.normal={...T};T.pedantic={...T.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:$(/^!?\[(label)\]\((.*?)\)/).replace("label",T._label).getRegex(),reflink:$(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",T._label).getRegex()};T.gfm={...T.normal,escape:$(T.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};T.gfm.url=$(T.gfm.url,"i").replace("email",T.gfm._extended_email).getRegex();T.breaks={...T.gfm,br:$(T.br).replace("{2,}","*").getRegex(),text:$(T.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};function $s(i){return i.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function Kn(i){let e="";for(let n=0;n<i.length;n++){const t=Math.random()>.5?"x"+i.charCodeAt(n).toString(16):i.charCodeAt(n).toString();e+="&#"+t+";"}return e}class Ee{constructor(e){q(this,"tokens");q(this,"options");q(this,"state");q(this,"tokenizer");q(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||tt,this.options.tokenizer=this.options.tokenizer||new en,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:D.normal,inline:T.normal};this.options.pedantic?(n.block=D.pedantic,n.inline=T.pedantic):this.options.gfm&&(n.block=D.gfm,this.options.breaks?n.inline=T.breaks:n.inline=T.gfm),this.tokenizer.rules=n}static get rules(){return{block:D,inline:T}}static lex(e,n){return new Ee(n).lex(e)}static lexInline(e,n){return new Ee(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let n;for(;n=this.inlineQueue.shift();)this.inlineTokens(n.src,n.tokens);return this.tokens}blockTokens(e,n=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(p,f,m)=>f+"    ".repeat(m.length));let t,s,o,r;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(p=>(t=p.call({lexer:this},e,n))?(e=e.substring(t.raw.length),n.push(t),!0):!1))){if(t=this.tokenizer.space(e)){e=e.substring(t.raw.length),t.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(t);continue}if(t=this.tokenizer.code(e)){e=e.substring(t.raw.length),s=n[n.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+t.raw,s.text+=`
`+t.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text):n.push(t);continue}if(t=this.tokenizer.fences(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.heading(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.hr(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.blockquote(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.list(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.html(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.def(e)){e=e.substring(t.raw.length),s=n[n.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+t.raw,s.text+=`
`+t.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text):this.tokens.links[t.tag]||(this.tokens.links[t.tag]={href:t.href,title:t.title});continue}if(t=this.tokenizer.table(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.lheading(e)){e=e.substring(t.raw.length),n.push(t);continue}if(o=e,this.options.extensions&&this.options.extensions.startBlock){let p=1/0;const f=e.slice(1);let m;this.options.extensions.startBlock.forEach(b=>{m=b.call({lexer:this},f),typeof m=="number"&&m>=0&&(p=Math.min(p,m))}),p<1/0&&p>=0&&(o=e.substring(0,p+1))}if(this.state.top&&(t=this.tokenizer.paragraph(o))){s=n[n.length-1],r&&s.type==="paragraph"?(s.raw+=`
`+t.raw,s.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):n.push(t),r=o.length!==e.length,e=e.substring(t.raw.length);continue}if(t=this.tokenizer.text(e)){e=e.substring(t.raw.length),s=n[n.length-1],s&&s.type==="text"?(s.raw+=`
`+t.raw,s.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):n.push(t);continue}if(e){const p="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(p);break}else throw new Error(p)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let t,s,o,r=e,p,f,m;if(this.tokens.links){const b=Object.keys(this.tokens.links);if(b.length>0)for(;(p=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)b.includes(p[0].slice(p[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,p.index)+"["+"a".repeat(p[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(p=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,p.index)+"["+"a".repeat(p[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(p=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,p.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(f||(m=""),f=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(b=>(t=b.call({lexer:this},e,n))?(e=e.substring(t.raw.length),n.push(t),!0):!1))){if(t=this.tokenizer.escape(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.tag(e)){e=e.substring(t.raw.length),s=n[n.length-1],s&&t.type==="text"&&s.type==="text"?(s.raw+=t.raw,s.text+=t.text):n.push(t);continue}if(t=this.tokenizer.link(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(t.raw.length),s=n[n.length-1],s&&t.type==="text"&&s.type==="text"?(s.raw+=t.raw,s.text+=t.text):n.push(t);continue}if(t=this.tokenizer.emStrong(e,r,m)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.codespan(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.br(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.del(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.autolink(e,Kn)){e=e.substring(t.raw.length),n.push(t);continue}if(!this.state.inLink&&(t=this.tokenizer.url(e,Kn))){e=e.substring(t.raw.length),n.push(t);continue}if(o=e,this.options.extensions&&this.options.extensions.startInline){let b=1/0;const v=e.slice(1);let _;this.options.extensions.startInline.forEach(A=>{_=A.call({lexer:this},v),typeof _=="number"&&_>=0&&(b=Math.min(b,_))}),b<1/0&&b>=0&&(o=e.substring(0,b+1))}if(t=this.tokenizer.inlineText(o,$s)){e=e.substring(t.raw.length),t.raw.slice(-1)!=="_"&&(m=t.raw.slice(-1)),f=!0,s=n[n.length-1],s&&s.type==="text"?(s.raw+=t.raw,s.text+=t.text):n.push(t);continue}if(e){const b="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(b);break}else throw new Error(b)}}return n}}class tn{constructor(e){q(this,"options");this.options=e||tt}code(e,n,t){var o;const s=(o=(n||"").match(/^\S*/))==null?void 0:o[0];if(this.options.highlight){const r=this.options.highlight(e,s);r!=null&&r!==e&&(t=!0,e=r)}return e=e.replace(/\n$/,"")+`
`,s?'<pre><code class="'+this.options.langPrefix+oe(s)+'">'+(t?e:oe(e,!0))+`</code></pre>
`:"<pre><code>"+(t?e:oe(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e,n){return e}heading(e,n,t,s){if(this.options.headerIds){const o=this.options.headerPrefix+s.slug(t);return`<h${n} id="${o}">${e}</h${n}>
`}return`<h${n}>${e}</h${n}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,n,t){const s=n?"ol":"ul",o=n&&t!==1?' start="'+t+'"':"";return"<"+s+o+`>
`+e+"</"+s+`>
`}listitem(e,n,t){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>
`}table(e,n){return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+n+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,n){const t=n.header?"th":"td";return(n.align?`<${t} align="${n.align}">`:`<${t}>`)+e+`</${t}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,n,t){const s=Wn(this.options.sanitize,this.options.baseUrl,e);if(s===null)return t;e=s;let o='<a href="'+e+'"';return n&&(o+=' title="'+n+'"'),o+=">"+t+"</a>",o}image(e,n,t){const s=Wn(this.options.sanitize,this.options.baseUrl,e);if(s===null)return t;e=s;let o=`<img src="${e}" alt="${t}"`;return n&&(o+=` title="${n}"`),o+=this.options.xhtml?"/>":">",o}text(e){return e}}class Cn{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,n,t){return""+t}image(e,n,t){return""+t}br(){return""}}class On{constructor(){q(this,"seen");this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,n){let t=e,s=0;if(this.seen.hasOwnProperty(t)){s=this.seen[e];do s++,t=e+"-"+s;while(this.seen.hasOwnProperty(t))}return n||(this.seen[e]=s,this.seen[t]=0),t}slug(e,n={}){const t=this.serialize(e);return this.getNextSafeSlug(t,n.dryrun)}}class De{constructor(e){q(this,"options");q(this,"renderer");q(this,"textRenderer");q(this,"slugger");this.options=e||tt,this.options.renderer=this.options.renderer||new tn,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Cn,this.slugger=new On}static parse(e,n){return new De(n).parse(e)}static parseInline(e,n){return new De(n).parseInline(e)}parse(e,n=!0){let t="";for(let s=0;s<e.length;s++){const o=e[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const r=o,p=this.options.extensions.renderers[r.type].call({parser:this},r);if(p!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(r.type)){t+=p||"";continue}}switch(o.type){case"space":continue;case"hr":{t+=this.renderer.hr();continue}case"heading":{const r=o;t+=this.renderer.heading(this.parseInline(r.tokens),r.depth,Aa(this.parseInline(r.tokens,this.textRenderer)),this.slugger);continue}case"code":{const r=o;t+=this.renderer.code(r.text,r.lang,!!r.escaped);continue}case"table":{const r=o;let p="",f="";for(let b=0;b<r.header.length;b++)f+=this.renderer.tablecell(this.parseInline(r.header[b].tokens),{header:!0,align:r.align[b]});p+=this.renderer.tablerow(f);let m="";for(let b=0;b<r.rows.length;b++){const v=r.rows[b];f="";for(let _=0;_<v.length;_++)f+=this.renderer.tablecell(this.parseInline(v[_].tokens),{header:!1,align:r.align[_]});m+=this.renderer.tablerow(f)}t+=this.renderer.table(p,m);continue}case"blockquote":{const r=o,p=this.parse(r.tokens);t+=this.renderer.blockquote(p);continue}case"list":{const r=o,p=r.ordered,f=r.start,m=r.loose;let b="";for(let v=0;v<r.items.length;v++){const _=r.items[v],A=_.checked,x=_.task;let E="";if(_.task){const a=this.renderer.checkbox(!!A);m?_.tokens.length>0&&_.tokens[0].type==="paragraph"?(_.tokens[0].text=a+" "+_.tokens[0].text,_.tokens[0].tokens&&_.tokens[0].tokens.length>0&&_.tokens[0].tokens[0].type==="text"&&(_.tokens[0].tokens[0].text=a+" "+_.tokens[0].tokens[0].text)):_.tokens.unshift({type:"text",text:a}):E+=a}E+=this.parse(_.tokens,m),b+=this.renderer.listitem(E,x,!!A)}t+=this.renderer.list(b,p,f);continue}case"html":{const r=o;t+=this.renderer.html(r.text,r.block);continue}case"paragraph":{const r=o;t+=this.renderer.paragraph(this.parseInline(r.tokens));continue}case"text":{let r=o,p=r.tokens?this.parseInline(r.tokens):r.text;for(;s+1<e.length&&e[s+1].type==="text";)r=e[++s],p+=`
`+(r.tokens?this.parseInline(r.tokens):r.text);t+=n?this.renderer.paragraph(p):p;continue}default:{const r='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(r),"";throw new Error(r)}}}return t}parseInline(e,n){n=n||this.renderer;let t="";for(let s=0;s<e.length;s++){const o=e[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const r=this.options.extensions.renderers[o.type].call({parser:this},o);if(r!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){t+=r||"";continue}}switch(o.type){case"escape":{const r=o;t+=n.text(r.text);break}case"html":{const r=o;t+=n.html(r.text);break}case"link":{const r=o;t+=n.link(r.href,r.title,this.parseInline(r.tokens,n));break}case"image":{const r=o;t+=n.image(r.href,r.title,r.text);break}case"strong":{const r=o;t+=n.strong(this.parseInline(r.tokens,n));break}case"em":{const r=o;t+=n.em(this.parseInline(r.tokens,n));break}case"codespan":{const r=o;t+=n.codespan(r.text);break}case"br":{t+=n.br();break}case"del":{const r=o;t+=n.del(this.parseInline(r.tokens,n));break}case"text":{const r=o;t+=n.text(r.text);break}default:{const r='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(r),"";throw new Error(r)}}}return t}}class Pt{constructor(e){q(this,"options");this.options=e||tt}preprocess(e){return e}postprocess(e){return e}}q(Pt,"passThroughHooks",new Set(["preprocess","postprocess"]));var et,_n,Ca;class Vs{constructor(...e){Rn(this,et);q(this,"defaults",An());q(this,"options",this.setOptions);q(this,"parse",Zt(this,et,_n).call(this,Ee.lex,De.parse));q(this,"parseInline",Zt(this,et,_n).call(this,Ee.lexInline,De.parseInline));q(this,"Parser",De);q(this,"parser",De.parse);q(this,"Renderer",tn);q(this,"TextRenderer",Cn);q(this,"Lexer",Ee);q(this,"lexer",Ee.lex);q(this,"Tokenizer",en);q(this,"Slugger",On);q(this,"Hooks",Pt);this.use(...e)}walkTokens(e,n){var s,o;let t=[];for(const r of e)switch(t=t.concat(n.call(this,r)),r.type){case"table":{const p=r;for(const f of p.header)t=t.concat(this.walkTokens(f.tokens,n));for(const f of p.rows)for(const m of f)t=t.concat(this.walkTokens(m.tokens,n));break}case"list":{const p=r;t=t.concat(this.walkTokens(p.items,n));break}default:{const p=r;(o=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&o[p.type]?this.defaults.extensions.childTokens[p.type].forEach(f=>{t=t.concat(this.walkTokens(p[f],n))}):p.tokens&&(t=t.concat(this.walkTokens(p.tokens,n)))}}return t}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(t=>{const s={...t};if(s.async=this.defaults.async||s.async||!1,t.extensions&&(t.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){const r=n.renderers[o.name];r?n.renderers[o.name]=function(...p){let f=o.renderer.apply(this,p);return f===!1&&(f=r.apply(this,p)),f}:n.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const r=n[o.level];r?r.unshift(o.tokenizer):n[o.level]=[o.tokenizer],o.start&&(o.level==="block"?n.startBlock?n.startBlock.push(o.start):n.startBlock=[o.start]:o.level==="inline"&&(n.startInline?n.startInline.push(o.start):n.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(n.childTokens[o.name]=o.childTokens)}),s.extensions=n),t.renderer){const o=this.defaults.renderer||new tn(this.defaults);for(const r in t.renderer){const p=t.renderer[r],f=r,m=o[f];o[f]=(...b)=>{let v=p.apply(o,b);return v===!1&&(v=m.apply(o,b)),v||""}}s.renderer=o}if(t.tokenizer){const o=this.defaults.tokenizer||new en(this.defaults);for(const r in t.tokenizer){const p=t.tokenizer[r],f=r,m=o[f];o[f]=(...b)=>{let v=p.apply(o,b);return v===!1&&(v=m.apply(o,b)),v}}s.tokenizer=o}if(t.hooks){const o=this.defaults.hooks||new Pt;for(const r in t.hooks){const p=t.hooks[r],f=r,m=o[f];Pt.passThroughHooks.has(r)?o[f]=b=>{if(this.defaults.async)return Promise.resolve(p.call(o,b)).then(_=>m.call(o,_));const v=p.call(o,b);return m.call(o,v)}:o[f]=(...b)=>{let v=p.apply(o,b);return v===!1&&(v=m.apply(o,b)),v}}s.hooks=o}if(t.walkTokens){const o=this.defaults.walkTokens,r=t.walkTokens;s.walkTokens=function(p){let f=[];return f.push(r.call(this,p)),o&&(f=f.concat(o.call(this,p))),f}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}}et=new WeakSet,_n=function(e,n){return(t,s,o)=>{typeof s=="function"&&(o=s,s=null);const r={...s},p={...this.defaults,...r};this.defaults.async===!0&&r.async===!1&&(p.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),p.async=!0);const f=Zt(this,et,Ca).call(this,!!p.silent,!!p.async,o);if(typeof t>"u"||t===null)return f(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return f(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(qs(p,o),p.hooks&&(p.hooks.options=p),o){const m=o,b=p.highlight;let v;try{p.hooks&&(t=p.hooks.preprocess(t)),v=e(t,p)}catch(x){return f(x)}const _=x=>{let E;if(!x)try{p.walkTokens&&this.walkTokens(v,p.walkTokens),E=n(v,p),p.hooks&&(E=p.hooks.postprocess(E))}catch(a){x=a}return p.highlight=b,x?f(x):m(null,E)};if(!b||b.length<3||(delete p.highlight,!v.length))return _();let A=0;this.walkTokens(v,x=>{x.type==="code"&&(A++,setTimeout(()=>{b(x.text,x.lang,(E,a)=>{if(E)return _(E);a!=null&&a!==x.text&&(x.text=a,x.escaped=!0),A--,A===0&&_()})},0))}),A===0&&_();return}if(p.async)return Promise.resolve(p.hooks?p.hooks.preprocess(t):t).then(m=>e(m,p)).then(m=>p.walkTokens?Promise.all(this.walkTokens(m,p.walkTokens)).then(()=>m):m).then(m=>n(m,p)).then(m=>p.hooks?p.hooks.postprocess(m):m).catch(f);try{p.hooks&&(t=p.hooks.preprocess(t));const m=e(t,p);p.walkTokens&&this.walkTokens(m,p.walkTokens);let b=n(m,p);return p.hooks&&(b=p.hooks.postprocess(b)),b}catch(m){return f(m)}}},Ca=function(e,n,t){return s=>{if(s.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const o="<p>An error occurred:</p><pre>"+oe(s.message+"",!0)+"</pre>";if(n)return Promise.resolve(o);if(t){t(null,o);return}return o}if(n)return Promise.reject(s);if(t){t(s);return}throw s}};const Qe=new Vs;function U(i,e,n){return Qe.parse(i,e,n)}U.options=U.setOptions=function(i){return Qe.setOptions(i),U.defaults=Qe.defaults,va(U.defaults),U};U.getDefaults=An;U.defaults=tt;U.use=function(...i){return Qe.use(...i),U.defaults=Qe.defaults,va(U.defaults),U};U.walkTokens=function(i,e){return Qe.walkTokens(i,e)};U.parseInline=Qe.parseInline;U.Parser=De;U.parser=De.parse;U.Renderer=tn;U.TextRenderer=Cn;U.Lexer=Ee;U.lexer=Ee.lex;U.Tokenizer=en;U.Slugger=On;U.Hooks=Pt;U.parse=U;U.options;U.setOptions;U.use;U.walkTokens;U.parseInline;De.parse;Ee.lex;/*! @license DOMPurify 3.2.4 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.4/LICENSE */const{entries:Oa,setPrototypeOf:Qn,isFrozen:Gs,getPrototypeOf:Xs,getOwnPropertyDescriptor:Ws}=Object;let{freeze:he,seal:we,create:Sa}=Object,{apply:yn,construct:wn}=typeof Reflect<"u"&&Reflect;he||(he=function(e){return e});we||(we=function(e){return e});yn||(yn=function(e,n,t){return e.apply(n,t)});wn||(wn=function(e,n){return new e(...n)});const Ut=ue(Array.prototype.forEach),Ys=ue(Array.prototype.lastIndexOf),ea=ue(Array.prototype.pop),At=ue(Array.prototype.push),Js=ue(Array.prototype.splice),Yt=ue(String.prototype.toLowerCase),pn=ue(String.prototype.toString),ta=ue(String.prototype.match),Ct=ue(String.prototype.replace),Ks=ue(String.prototype.indexOf),Qs=ue(String.prototype.trim),Ae=ue(Object.prototype.hasOwnProperty),ce=ue(RegExp.prototype.test),Ot=ei(TypeError);function ue(i){return function(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),s=1;s<n;s++)t[s-1]=arguments[s];return yn(i,e,t)}}function ei(i){return function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return wn(i,n)}}function B(i,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Yt;Qn&&Qn(i,null);let t=e.length;for(;t--;){let s=e[t];if(typeof s=="string"){const o=n(s);o!==s&&(Gs(e)||(e[t]=o),s=o)}i[s]=!0}return i}function ti(i){for(let e=0;e<i.length;e++)Ae(i,e)||(i[e]=null);return i}function Ye(i){const e=Sa(null);for(const[n,t]of Oa(i))Ae(i,n)&&(Array.isArray(t)?e[n]=ti(t):t&&typeof t=="object"&&t.constructor===Object?e[n]=Ye(t):e[n]=t);return e}function St(i,e){for(;i!==null;){const t=Ws(i,e);if(t){if(t.get)return ue(t.get);if(typeof t.value=="function")return ue(t.value)}i=Xs(i)}function n(){return null}return n}const na=he(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),dn=he(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),fn=he(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),ni=he(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),mn=he(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),ai=he(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),aa=he(["#text"]),sa=he(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),gn=he(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),ia=he(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),$t=he(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),si=we(/\{\{[\w\W]*|[\w\W]*\}\}/gm),ii=we(/<%[\w\W]*|[\w\W]*%>/gm),li=we(/\$\{[\w\W]*/gm),oi=we(/^data-[\-\w.\u00B7-\uFFFF]+$/),ri=we(/^aria-[\-\w]+$/),Ea=we(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ci=we(/^(?:\w+script|data):/i),hi=we(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Da=we(/^html$/i),ui=we(/^[a-z][.\w]*(-[.\w]+)+$/i);var la=Object.freeze({__proto__:null,ARIA_ATTR:ri,ATTR_WHITESPACE:hi,CUSTOM_ELEMENT:ui,DATA_ATTR:oi,DOCTYPE_NAME:Da,ERB_EXPR:ii,IS_ALLOWED_URI:Ea,IS_SCRIPT_OR_DATA:ci,MUSTACHE_EXPR:si,TMPLIT_EXPR:li});const Et={element:1,text:3,progressingInstruction:7,comment:8,document:9},pi=function(){return typeof window>"u"?null:window},di=function(e,n){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let t=null;const s="data-tt-policy-suffix";n&&n.hasAttribute(s)&&(t=n.getAttribute(s));const o="dompurify"+(t?"#"+t:"");try{return e.createPolicy(o,{createHTML(r){return r},createScriptURL(r){return r}})}catch{return console.warn("TrustedTypes policy "+o+" could not be created."),null}},oa=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function Ra(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:pi();const e=S=>Ra(S);if(e.version="3.2.4",e.removed=[],!i||!i.document||i.document.nodeType!==Et.document||!i.Element)return e.isSupported=!1,e;let{document:n}=i;const t=n,s=t.currentScript,{DocumentFragment:o,HTMLTemplateElement:r,Node:p,Element:f,NodeFilter:m,NamedNodeMap:b=i.NamedNodeMap||i.MozNamedAttrMap,HTMLFormElement:v,DOMParser:_,trustedTypes:A}=i,x=f.prototype,E=St(x,"cloneNode"),a=St(x,"remove"),l=St(x,"nextSibling"),c=St(x,"childNodes"),h=St(x,"parentNode");if(typeof r=="function"){const S=n.createElement("template");S.content&&S.content.ownerDocument&&(n=S.content.ownerDocument)}let d,g="";const{implementation:y,createNodeIterator:C,createDocumentFragment:R,getElementsByTagName:M}=n,{importNode:Z}=t;let F=oa();e.isSupported=typeof Oa=="function"&&typeof h=="function"&&y&&y.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:W,ERB_EXPR:K,TMPLIT_EXPR:te,DATA_ATTR:me,ARIA_ATTR:ke,IS_SCRIPT_OR_DATA:Ze,ATTR_WHITESPACE:Ce,CUSTOM_ELEMENT:nn}=la;let{IS_ALLOWED_URI:qe}=la,Q=null;const ut=B({},[...na,...dn,...fn,...mn,...aa]);let Y=null;const pt=B({},[...sa,...gn,...ia,...$t]);let G=Object.seal(Sa(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Le=null,nt=null,dt=!0,Ue=!0,ft=!1,mt=!0,Re=!1,gt=!0,Pe=!1,bt=!1,_t=!1,k=!1,I=!1,J=!1,He=!0,Ie=!1;const Me="user-content-";let at=!0,$e=!1,ze={},Oe=null;const yt=B({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let st=null;const It=B({},["audio","video","img","source","image","track"]);let it=null;const Mt=B({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),lt="http://www.w3.org/1998/Math/MathML",Ve="http://www.w3.org/2000/svg",_e="http://www.w3.org/1999/xhtml";let Fe=_e,ge=!1,pe=null;const Sn=B({},[lt,Ve,_e],pn);let Ge=B({},["mi","mo","mn","ms","mtext"]),Ne=B({},["annotation-xml"]);const Lt=B({},["title","style","font","a","script"]);let Xe=null;const an=["application/xhtml+xml","text/html"],wt="text/html";let j=null,ve=null;const En=n.createElement("form"),kt=function(u){return u instanceof RegExp||u instanceof Function},vt=function(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(ve&&ve===u)){if((!u||typeof u!="object")&&(u={}),u=Ye(u),Xe=an.indexOf(u.PARSER_MEDIA_TYPE)===-1?wt:u.PARSER_MEDIA_TYPE,j=Xe==="application/xhtml+xml"?pn:Yt,Q=Ae(u,"ALLOWED_TAGS")?B({},u.ALLOWED_TAGS,j):ut,Y=Ae(u,"ALLOWED_ATTR")?B({},u.ALLOWED_ATTR,j):pt,pe=Ae(u,"ALLOWED_NAMESPACES")?B({},u.ALLOWED_NAMESPACES,pn):Sn,it=Ae(u,"ADD_URI_SAFE_ATTR")?B(Ye(Mt),u.ADD_URI_SAFE_ATTR,j):Mt,st=Ae(u,"ADD_DATA_URI_TAGS")?B(Ye(It),u.ADD_DATA_URI_TAGS,j):It,Oe=Ae(u,"FORBID_CONTENTS")?B({},u.FORBID_CONTENTS,j):yt,Le=Ae(u,"FORBID_TAGS")?B({},u.FORBID_TAGS,j):{},nt=Ae(u,"FORBID_ATTR")?B({},u.FORBID_ATTR,j):{},ze=Ae(u,"USE_PROFILES")?u.USE_PROFILES:!1,dt=u.ALLOW_ARIA_ATTR!==!1,Ue=u.ALLOW_DATA_ATTR!==!1,ft=u.ALLOW_UNKNOWN_PROTOCOLS||!1,mt=u.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Re=u.SAFE_FOR_TEMPLATES||!1,gt=u.SAFE_FOR_XML!==!1,Pe=u.WHOLE_DOCUMENT||!1,k=u.RETURN_DOM||!1,I=u.RETURN_DOM_FRAGMENT||!1,J=u.RETURN_TRUSTED_TYPE||!1,_t=u.FORCE_BODY||!1,He=u.SANITIZE_DOM!==!1,Ie=u.SANITIZE_NAMED_PROPS||!1,at=u.KEEP_CONTENT!==!1,$e=u.IN_PLACE||!1,qe=u.ALLOWED_URI_REGEXP||Ea,Fe=u.NAMESPACE||_e,Ge=u.MATHML_TEXT_INTEGRATION_POINTS||Ge,Ne=u.HTML_INTEGRATION_POINTS||Ne,G=u.CUSTOM_ELEMENT_HANDLING||{},u.CUSTOM_ELEMENT_HANDLING&&kt(u.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(G.tagNameCheck=u.CUSTOM_ELEMENT_HANDLING.tagNameCheck),u.CUSTOM_ELEMENT_HANDLING&&kt(u.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(G.attributeNameCheck=u.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),u.CUSTOM_ELEMENT_HANDLING&&typeof u.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(G.allowCustomizedBuiltInElements=u.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Re&&(Ue=!1),I&&(k=!0),ze&&(Q=B({},aa),Y=[],ze.html===!0&&(B(Q,na),B(Y,sa)),ze.svg===!0&&(B(Q,dn),B(Y,gn),B(Y,$t)),ze.svgFilters===!0&&(B(Q,fn),B(Y,gn),B(Y,$t)),ze.mathMl===!0&&(B(Q,mn),B(Y,ia),B(Y,$t))),u.ADD_TAGS&&(Q===ut&&(Q=Ye(Q)),B(Q,u.ADD_TAGS,j)),u.ADD_ATTR&&(Y===pt&&(Y=Ye(Y)),B(Y,u.ADD_ATTR,j)),u.ADD_URI_SAFE_ATTR&&B(it,u.ADD_URI_SAFE_ATTR,j),u.FORBID_CONTENTS&&(Oe===yt&&(Oe=Ye(Oe)),B(Oe,u.FORBID_CONTENTS,j)),at&&(Q["#text"]=!0),Pe&&B(Q,["html","head","body"]),Q.table&&(B(Q,["tbody"]),delete Le.tbody),u.TRUSTED_TYPES_POLICY){if(typeof u.TRUSTED_TYPES_POLICY.createHTML!="function")throw Ot('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof u.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Ot('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');d=u.TRUSTED_TYPES_POLICY,g=d.createHTML("")}else d===void 0&&(d=di(A,s)),d!==null&&typeof g=="string"&&(g=d.createHTML(""));he&&he(u),ve=u}},Ht=B({},[...dn,...fn,...ni]),ot=B({},[...mn,...ai]),xt=function(u){let w=h(u);(!w||!w.tagName)&&(w={namespaceURI:Fe,tagName:"template"});const O=Yt(u.tagName),V=Yt(w.tagName);return pe[u.namespaceURI]?u.namespaceURI===Ve?w.namespaceURI===_e?O==="svg":w.namespaceURI===lt?O==="svg"&&(V==="annotation-xml"||Ge[V]):!!Ht[O]:u.namespaceURI===lt?w.namespaceURI===_e?O==="math":w.namespaceURI===Ve?O==="math"&&Ne[V]:!!ot[O]:u.namespaceURI===_e?w.namespaceURI===Ve&&!Ne[V]||w.namespaceURI===lt&&!Ge[V]?!1:!ot[O]&&(Lt[O]||!Ht[O]):!!(Xe==="application/xhtml+xml"&&pe[u.namespaceURI]):!1},de=function(u){At(e.removed,{element:u});try{h(u).removeChild(u)}catch{a(u)}},rt=function(u,w){try{At(e.removed,{attribute:w.getAttributeNode(u),from:w})}catch{At(e.removed,{attribute:null,from:w})}if(w.removeAttribute(u),u==="is")if(k||I)try{de(w)}catch{}else try{w.setAttribute(u,"")}catch{}},zt=function(u){let w=null,O=null;if(_t)u="<remove></remove>"+u;else{const se=ta(u,/^[\r\n\t ]+/);O=se&&se[0]}Xe==="application/xhtml+xml"&&Fe===_e&&(u='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+u+"</body></html>");const V=d?d.createHTML(u):u;if(Fe===_e)try{w=new _().parseFromString(V,Xe)}catch{}if(!w||!w.documentElement){w=y.createDocument(Fe,"template",null);try{w.documentElement.innerHTML=ge?g:V}catch{}}const le=w.body||w.documentElement;return u&&O&&le.insertBefore(n.createTextNode(O),le.childNodes[0]||null),Fe===_e?M.call(w,Pe?"html":"body")[0]:Pe?w.documentElement:le},Ft=function(u){return C.call(u.ownerDocument||u,u,m.SHOW_ELEMENT|m.SHOW_COMMENT|m.SHOW_TEXT|m.SHOW_PROCESSING_INSTRUCTION|m.SHOW_CDATA_SECTION,null)},We=function(u){return u instanceof v&&(typeof u.nodeName!="string"||typeof u.textContent!="string"||typeof u.removeChild!="function"||!(u.attributes instanceof b)||typeof u.removeAttribute!="function"||typeof u.setAttribute!="function"||typeof u.namespaceURI!="string"||typeof u.insertBefore!="function"||typeof u.hasChildNodes!="function")},Nt=function(u){return typeof p=="function"&&u instanceof p};function xe(S,u,w){Ut(S,O=>{O.call(e,u,w,ve)})}const ct=function(u){let w=null;if(xe(F.beforeSanitizeElements,u,null),We(u))return de(u),!0;const O=j(u.nodeName);if(xe(F.uponSanitizeElement,u,{tagName:O,allowedTags:Q}),u.hasChildNodes()&&!Nt(u.firstElementChild)&&ce(/<[/\w]/g,u.innerHTML)&&ce(/<[/\w]/g,u.textContent)||u.nodeType===Et.progressingInstruction||gt&&u.nodeType===Et.comment&&ce(/<[/\w]/g,u.data))return de(u),!0;if(!Q[O]||Le[O]){if(!Le[O]&&jt(O)&&(G.tagNameCheck instanceof RegExp&&ce(G.tagNameCheck,O)||G.tagNameCheck instanceof Function&&G.tagNameCheck(O)))return!1;if(at&&!Oe[O]){const V=h(u)||u.parentNode,le=c(u)||u.childNodes;if(le&&V){const se=le.length;for(let L=se-1;L>=0;--L){const H=E(le[L],!0);H.__removalCount=(u.__removalCount||0)+1,V.insertBefore(H,l(u))}}}return de(u),!0}return u instanceof f&&!xt(u)||(O==="noscript"||O==="noembed"||O==="noframes")&&ce(/<\/no(script|embed|frames)/i,u.innerHTML)?(de(u),!0):(Re&&u.nodeType===Et.text&&(w=u.textContent,Ut([W,K,te],V=>{w=Ct(w,V," ")}),u.textContent!==w&&(At(e.removed,{element:u.cloneNode()}),u.textContent=w)),xe(F.afterSanitizeElements,u,null),!1)},Bt=function(u,w,O){if(He&&(w==="id"||w==="name")&&(O in n||O in En))return!1;if(!(Ue&&!nt[w]&&ce(me,w))){if(!(dt&&ce(ke,w))){if(!Y[w]||nt[w]){if(!(jt(u)&&(G.tagNameCheck instanceof RegExp&&ce(G.tagNameCheck,u)||G.tagNameCheck instanceof Function&&G.tagNameCheck(u))&&(G.attributeNameCheck instanceof RegExp&&ce(G.attributeNameCheck,w)||G.attributeNameCheck instanceof Function&&G.attributeNameCheck(w))||w==="is"&&G.allowCustomizedBuiltInElements&&(G.tagNameCheck instanceof RegExp&&ce(G.tagNameCheck,O)||G.tagNameCheck instanceof Function&&G.tagNameCheck(O))))return!1}else if(!it[w]){if(!ce(qe,Ct(O,Ce,""))){if(!((w==="src"||w==="xlink:href"||w==="href")&&u!=="script"&&Ks(O,"data:")===0&&st[u])){if(!(ft&&!ce(Ze,Ct(O,Ce,"")))){if(O)return!1}}}}}}return!0},jt=function(u){return u!=="annotation-xml"&&ta(u,nn)},ht=function(u){xe(F.beforeSanitizeAttributes,u,null);const{attributes:w}=u;if(!w||We(u))return;const O={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Y,forceKeepAttr:void 0};let V=w.length;for(;V--;){const le=w[V],{name:se,namespaceURI:L,value:H}=le,ee=j(se);let ie=se==="value"?H:Qs(H);if(O.attrName=ee,O.attrValue=ie,O.keepAttr=!0,O.forceKeepAttr=void 0,xe(F.uponSanitizeAttribute,u,O),ie=O.attrValue,Ie&&(ee==="id"||ee==="name")&&(rt(se,u),ie=Me+ie),gt&&ce(/((--!?|])>)|<\/(style|title)/i,ie)){rt(se,u);continue}if(O.forceKeepAttr||(rt(se,u),!O.keepAttr))continue;if(!mt&&ce(/\/>/i,ie)){rt(se,u);continue}Re&&Ut([W,K,te],Tt=>{ie=Ct(ie,Tt," ")});const Be=j(u.nodeName);if(Bt(Be,ee,ie)){if(d&&typeof A=="object"&&typeof A.getAttributeType=="function"&&!L)switch(A.getAttributeType(Be,ee)){case"TrustedHTML":{ie=d.createHTML(ie);break}case"TrustedScriptURL":{ie=d.createScriptURL(ie);break}}try{L?u.setAttributeNS(L,se,ie):u.setAttribute(se,ie),We(u)?de(u):ea(e.removed)}catch{}}}xe(F.afterSanitizeAttributes,u,null)},sn=function S(u){let w=null;const O=Ft(u);for(xe(F.beforeSanitizeShadowDOM,u,null);w=O.nextNode();)xe(F.uponSanitizeShadowNode,w,null),ct(w),ht(w),w.content instanceof o&&S(w.content);xe(F.afterSanitizeShadowDOM,u,null)};return e.sanitize=function(S){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},w=null,O=null,V=null,le=null;if(ge=!S,ge&&(S="<!-->"),typeof S!="string"&&!Nt(S))if(typeof S.toString=="function"){if(S=S.toString(),typeof S!="string")throw Ot("dirty is not a string, aborting")}else throw Ot("toString is not a function");if(!e.isSupported)return S;if(bt||vt(u),e.removed=[],typeof S=="string"&&($e=!1),$e){if(S.nodeName){const H=j(S.nodeName);if(!Q[H]||Le[H])throw Ot("root node is forbidden and cannot be sanitized in-place")}}else if(S instanceof p)w=zt("<!---->"),O=w.ownerDocument.importNode(S,!0),O.nodeType===Et.element&&O.nodeName==="BODY"||O.nodeName==="HTML"?w=O:w.appendChild(O);else{if(!k&&!Re&&!Pe&&S.indexOf("<")===-1)return d&&J?d.createHTML(S):S;if(w=zt(S),!w)return k?null:J?g:""}w&&_t&&de(w.firstChild);const se=Ft($e?S:w);for(;V=se.nextNode();)ct(V),ht(V),V.content instanceof o&&sn(V.content);if($e)return S;if(k){if(I)for(le=R.call(w.ownerDocument);w.firstChild;)le.appendChild(w.firstChild);else le=w;return(Y.shadowroot||Y.shadowrootmode)&&(le=Z.call(t,le,!0)),le}let L=Pe?w.outerHTML:w.innerHTML;return Pe&&Q["!doctype"]&&w.ownerDocument&&w.ownerDocument.doctype&&w.ownerDocument.doctype.name&&ce(Da,w.ownerDocument.doctype.name)&&(L="<!DOCTYPE "+w.ownerDocument.doctype.name+`>
`+L),Re&&Ut([W,K,te],H=>{L=Ct(L,H," ")}),d&&J?d.createHTML(L):L},e.setConfig=function(){let S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};vt(S),bt=!0},e.clearConfig=function(){ve=null,bt=!1},e.isValidAttribute=function(S,u,w){ve||vt({});const O=j(S),V=j(u);return Bt(O,V,w)},e.addHook=function(S,u){typeof u=="function"&&At(F[S],u)},e.removeHook=function(S,u){if(u!==void 0){const w=Ys(F[S],u);return w===-1?void 0:Js(F[S],w,1)[0]}return ea(F[S])},e.removeHooks=function(S){F[S]=[]},e.removeAllHooks=function(){F=oa()},e}var fi=Ra();const mi=[["abbott",[{pkg_name:"abbott",version:"0.1.0",task_list:[{version:"0.1.0",name:"Compute Registration (elastix)",category:"Registration",modality:"HCS",tags:["Multiplexing"],input_types:{},output_types:{},docs_link:"https://github.com/pelkmanslab/abbott",docs_info:`### Purpose
- **Computes image-based registration** transformations for acquisitions in **HCS** OME-Zarr datasets using the elastix library.
- Needs Elastix profiles to configure the registration.
- Processes images grouped by well, under the assumption that each well contains one image per acquisition.
- Calculates transformations for **specified regions of interest (ROIs)** and stores the results in a registration subfolder per OME-Zarr image.
- Typically used as the first task in a workflow, followed by \`Apply Registration (elastix)\`.

### Limitations
- Supports only HCS OME-Zarr datasets, leveraging their acquisition metadata and well-based image grouping.
- Assumes each well contains a single image per acquisition.`,type:"compound",authors:"Ruth Hornbachner",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/pelkmanslab/abbott/releases/download/v0.1.0/abbott-0.1.0-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/pelkmanslab/abbott/releases/download/v0.1.0/abbott-0.1.0-py3-none-any.whl)
2. Run \`pip install abbott-0.1.0-py3-none-any.whl\`
`},{version:"0.1.0",name:"Apply Registration (elastix)",category:"Registration",modality:"HCS",tags:["Multiplexing"],input_types:{registered:!1},output_types:{registered:!0},docs_link:"https://github.com/pelkmanslab/abbott",docs_info:"### Purpose\n- **Applies pre-calculated registration** from `Compute Registration elastix` task to images in an **HCS** OME-Zarr dataset, aligning all acquisitions to a specified reference acquisition.\n- Replaces the non-aligned image with the newly aligned image in the dataset if `overwrite input` is selected.\n- Typically used as the second task in a workflow, following `Calculate Registration (elastix)`.\n\n### Limitations\n- If `overwrite input` is selected, the non-aligned image is permanently deleted, which may impact workflows requiring access to the original images.\n",type:"parallel",authors:"Ruth Hornbachner",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/pelkmanslab/abbott/releases/download/v0.1.0/abbott-0.1.0-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/pelkmanslab/abbott/releases/download/v0.1.0/abbott-0.1.0-py3-none-any.whl)
2. Run \`pip install abbott-0.1.0-py3-none-any.whl\`
`},{version:"0.1.0",name:"Compute Registration per ROI (elastix)",category:"Registration",modality:"HCS",tags:["Multiplexing"],input_types:{},output_types:{},docs_link:"https://github.com/pelkmanslab/abbott",docs_info:`### Purpose
- **Computes image-based registration** transformations for acquisitions in **HCS** OME-Zarr datasets using the elastix library.
- Needs Elastix profiles to configure the registration.
- Can handle cases where there are more than one embryo / organoid in a FOV.
- Processes images grouped by well, under the assumption that each ROI e.g. embryo / organoid is masked by a linked label (e.g. calculated by
    \`scMultiplex Calculate Object Linking\`)  and corresponding masking_roi_table.
- Calculates transformations for **specified regions of interest (ROIs)** and stores the results in a registration subfolder per OME-Zarr image.
- Typically used as the first task in a workflow, followed by \`Apply Registration ROI (elastix)\`.

### Limitations
- Supports only HCS OME-Zarr datasets, leveraging their acquisition metadata and well-based image grouping.
- Assumes each well contains a single image per acquisition.
`,type:"compound",authors:"Ruth Hornbachner",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/pelkmanslab/abbott/releases/download/v0.1.0/abbott-0.1.0-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/pelkmanslab/abbott/releases/download/v0.1.0/abbott-0.1.0-py3-none-any.whl)
2. Run \`pip install abbott-0.1.0-py3-none-any.whl\`
`},{version:"0.1.0",name:"Apply Registration per ROI (elastix)",category:"Registration",modality:"HCS",tags:["Multiplexing"],input_types:{registered:!1},output_types:{registered:!0},docs_link:"https://github.com/pelkmanslab/abbott",docs_info:"### Purpose\n- **Applies pre-calculated registration** from `Compute Registration ROI (elastix)` task to images in an **HCS** OME-Zarr dataset, aligning all acquisitions to a specified reference acquisition.\n- Replaces the non-aligned image with the newly aligned image in the dataset if `overwrite input` is selected.\n- Typically used as the second task in a workflow, following `Compute Registration ROI (elastix)`.\n\n### Limitations\n- If `overwrite input` is selected, the non-aligned image is permanently deleted, which may impact workflows requiring access to the original images.\n",type:"parallel",authors:"Ruth Hornbachner",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/pelkmanslab/abbott/releases/download/v0.1.0/abbott-0.1.0-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/pelkmanslab/abbott/releases/download/v0.1.0/abbott-0.1.0-py3-none-any.whl)
2. Run \`pip install abbott-0.1.0-py3-none-any.whl\`
`},{version:"0.1.0",name:"Compute Channel Registration (elastix)",category:"Registration",modality:"HCS",tags:["Multiplexing"],input_types:{channels_registered:!1},output_types:{},docs_link:"https://github.com/pelkmanslab/abbott",docs_info:`### Purpose
- **Computes image-based registration** transformations for acquisitions in **HCS** OME-Zarr datasets using the elastix library.
- Needs Elastix profiles to configure the registration.
- Processes images grouped by well, under the assumption that each well contains one image per acquisition.
- Calculates transformations for **specified regions of interest (ROIs)** and stores the results in a registration subfolder per OME-Zarr image.
- Typically used as the first task in a workflow, followed by \`Apply Channel Registration (elastix)\`.

### Limitations
- Supports only HCS OME-Zarr datasets, leveraging their acquisition metadata and well-based image grouping.
- Assumes each well contains a single image per acquisition.
`,type:"parallel",authors:"Ruth Hornbachner",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/pelkmanslab/abbott/releases/download/v0.1.0/abbott-0.1.0-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/pelkmanslab/abbott/releases/download/v0.1.0/abbott-0.1.0-py3-none-any.whl)
2. Run \`pip install abbott-0.1.0-py3-none-any.whl\`
`},{version:"0.1.0",name:"Apply Channel Registration (elastix)",category:"Registration",modality:"HCS",tags:["Multiplexing"],input_types:{channels_registered:!1},output_types:{channels_registered:!0},docs_link:"https://github.com/pelkmanslab/abbott",docs_info:"### Purpose\n- **Applies pre-calculated registration** from `Calculate Channel Registration (elastix)` task to images in an **HCS** OME-Zarr dataset, aligning all channels of an acquisition to a specified reference wavelength.\n- This task is useful if there are wavelength- and sample-dependent chromatic shifts.\n- Replaces the non-aligned image with the newly aligned image in the dataset if `overwrite input` is selected.\n- Typically used as the second task in a workflow, following `Calculate Channel Registration (elastix)`.\n\n### Limitations\n- If `overwrite input` is selected, the non-aligned image is permanently deleted, which may impact workflows requiring access to the original images.\n",type:"parallel",authors:"Ruth Hornbachner",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/pelkmanslab/abbott/releases/download/v0.1.0/abbott-0.1.0-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/pelkmanslab/abbott/releases/download/v0.1.0/abbott-0.1.0-py3-none-any.whl)
2. Run \`pip install abbott-0.1.0-py3-none-any.whl\`
`},{version:"0.1.0",name:"Convert Cellvoyager Multiplexing to existing OME-Zarr",category:"Conversion",modality:"HCS",tags:["Yokogawa","Cellvoyager","2D","3D"],input_types:{},output_types:{},docs_link:"https://github.com/pelkmanslab/abbott",docs_info:`### Purpose
- Converts **multiplexed 2D and 3D images from CellVoyager CV7000/8000** systems into OME-Zarr format, storing each acquisition as a separate OME-Zarr image, **extending an existing** OME-Zarr plate.
- Creates **OME-Zarr HCS plates**, combining all fields of view for each acquisition in a well into a single image.
- Saves Fractal **region-of-interest (ROI) tables** for both individual fields of view and the entire well.
- Handles overlapping fields of view by adjusting their positions to be non-overlapping, while preserving the original position data as additional columns in the ROI tables.

### Limitations
- This task currently does not support time-resolved data and ignores the time fields in CellVoyager metadata.
`,type:"compound",authors:"Ruth Hornbachner",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/pelkmanslab/abbott/releases/download/v0.1.0/abbott-0.1.0-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/pelkmanslab/abbott/releases/download/v0.1.0/abbott-0.1.0-py3-none-any.whl)
2. Run \`pip install abbott-0.1.0-py3-none-any.whl\`
`},{version:"0.1.0",name:"Stardist Segmentation",category:"Segmentation",modality:null,tags:["Deep Learning","Convolutional Neural Network","Instance Segmentation","2D","3D"],input_types:{},output_types:{},docs_link:"https://github.com/pelkmanslab/abbott",docs_info:`### Purpose
- **Segments images using Stardist models**.
- Supports both **built-in Stardist models** (shipped with Stardist) and **user-trained models**.
- Accepts single channel image input for segmentation.
- Can process **arbitrary regions of interest (ROIs)**, including whole images, fields of view (FOVs), or masked outputs from prior segmentations, based on corresponding ROI tables.
- Provides access to all advanced Stardist parameters.
`,type:"parallel",authors:"Ruth Hornbachner",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/pelkmanslab/abbott/releases/download/v0.1.0/abbott-0.1.0-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/pelkmanslab/abbott/releases/download/v0.1.0/abbott-0.1.0-py3-none-any.whl)
2. Run \`pip install abbott-0.1.0-py3-none-any.whl\`
`},{version:"0.1.0",name:"Seeded Segmentation",category:"Segmentation",modality:null,tags:["scikit-image","itk,2D","3D"],input_types:{},output_types:{},docs_link:"https://github.com/pelkmanslab/abbott",docs_info:`### Purpose
- **Seeded Segmentation to retrieve e.g. Cell Segmentation**.
- Accepts label_name of label image to use as seeds (e.g. nuclei) and single channel image input that contains boundary (e.g. membrane) marker.
- Can process **arbitrary regions of interest (ROIs)**, including whole images, fields of view (FOVs), or masked outputs from prior segmentations, based on corresponding ROI tables.
- If masked segmentation should be performed, use ROI table of type masking_roi_table.

### Limitations
- This task assumes that label_name and channel image are in same zarr_url.
`,type:"parallel",authors:"Ruth Hornbachner",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/pelkmanslab/abbott/releases/download/v0.1.0/abbott-0.1.0-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/pelkmanslab/abbott/releases/download/v0.1.0/abbott-0.1.0-py3-none-any.whl)
2. Run \`pip install abbott-0.1.0-py3-none-any.whl\`
`},{version:"0.1.0",name:"Upsample Label Image",category:"Image Processing",modality:null,tags:[],input_types:{},output_types:{},docs_link:"https://github.com/pelkmanslab/abbott",docs_info:`### Purpose
- Upsamples segmented **labels** in 2D or 3D images to the highest image resolution.
- Useful if segmentation was performed at a lower resolution (e.g. level 1).

### Outputs
- A new **upsampled label image** with resolution matching those of the OME-Zarr images.
- Preserves the integer label values from the original segmentation.
`,type:"compound",authors:"Ruth Hornbachner",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/pelkmanslab/abbott/releases/download/v0.1.0/abbott-0.1.0-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/pelkmanslab/abbott/releases/download/v0.1.0/abbott-0.1.0-py3-none-any.whl)
2. Run \`pip install abbott-0.1.0-py3-none-any.whl\`
`}]}]],["abbott_features",[{pkg_name:"abbott_features",version:"0.0.9",task_list:[{version:"0.0.9",name:"Measure Features",category:"Measurement",modality:null,tags:["3D","Morphology","Intensity","Distance","Colocalization","regionprops","itk","Feature Table"],input_types:{},output_types:{},docs_link:"https://github.com/pelkmanslab/abbott-features",docs_info:`### Purpose
- Calculates **morphology**, **intensity**, **distance**, and **colocalization features** for objects in a 3D label image.
- Supports **2D (not tested) and 3D measurements** across multiple regions of interest (ROIs).

### Outputs
- A  **feature table** saved in the OME-Zarr structure with .parquet backend.
  - Morphology features 
  - Intensity features (e.g., mean, max, min intensity per object).
  - Distance features (e.g., densities and number of neighbours).
- Updated ROI metadata with border and well location information.

### Limitations
- Does not support measurements for label images that do not have the same resolution as the intensity images.`,type:"parallel",authors:"Ruth Hornbachner, Maks Hess",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/pelkmanslab/abbott-features/releases/download/v0.0.9/abbott_features-0.0.9-cp311-cp311-linux_x86_64.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/pelkmanslab/abbott-features/releases/download/v0.0.9/abbott_features-0.0.9-cp311-cp311-linux_x86_64.whl)
2. Run \`pip install abbott_features-0.0.9-cp311-cp311-linux_x86_64.whl\`
`},{version:"0.0.9",name:"Get Cellvoyager Time Decay",category:"Measurement",modality:"HCS",tags:["3D","Yokogawa","Intensity Correction","Feature Table"],input_types:{},output_types:{},docs_link:"https://github.com/pelkmanslab/abbott-features",docs_info:`### Purpose
- Calculates time-decay correction factors per ROI, channel and acquisition to correct for acquisition bias dependent intensity decay (aka imaging snake).
- Time decay models can be of type Exp, ExpNoOffset, Linear and LogLinear calculated with linear loss.
- Supports **2D (not tested) and 3D measurements** across multiple regions of interest (ROIs).

### Outputs
- A  **generic table** saved in the OME-Zarr plate /path_to_ome_zarr_fld/tables with .parquet backend.
- Two plots saved in /path_to_ome_zarr_fld/__plots : 
1. \`equivalent_spherical_radius_cutoff\` - adjustable via the \`spherical_radius_cutoff\` parameter used for outlier removal.
2. \`time_decay_models\` - fitted time decay correction models for each channel label

### Limitations
- This task only supports time-decay correction for images from CellVoyager microscopes.`,type:"non_parallel",authors:"Ruth Hornbachner, Maks Hess",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/pelkmanslab/abbott-features/releases/download/v0.0.9/abbott_features-0.0.9-cp311-cp311-linux_x86_64.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/pelkmanslab/abbott-features/releases/download/v0.0.9/abbott_features-0.0.9-cp311-cp311-linux_x86_64.whl)
2. Run \`pip install abbott_features-0.0.9-cp311-cp311-linux_x86_64.whl\`
`},{version:"0.0.9",name:"Get Z Decay Models",category:"Measurement",modality:"HCS",tags:["3D","Intensity Correction","Feature Table"],input_types:{},output_types:{},docs_link:"https://github.com/pelkmanslab/abbott-features",docs_info:"### Purpose\n- Calculates z-decay correction models per channel label to correct intensity decay across z.\n- Z decay models can be of type Exp, Linear and LogLinear calculated with linear or huber loss. For each type, z decay bias is corrected either 1D or 2D (by partioning light path into medium and sample path).\n- Z decay models are available in three types: Exponential (Exp), Linear, and LogLinear, each computed using either linear or Huber loss. For all model types, z-decay bias correction models are saved as 1D (uniform correction across the entire light path) and 2D mode (with light path divided into medium path and sample path).\n\n### Outputs\n- Z-decay models saved in the OME-Zarr plate /path_to_ome_zarr_fld/models/z_decay/ \n- Plots saved in /path_to_ome_zarr_fld/models/__plots containing overview of \n1. `overview__one_step` / `overview__two_step` - 1D & 2D decay models fit to channels.\n2. `equivalent_spherical_radius_cutoff` - adjustable via the `spherical_radius_cutoff` parameter used for outlier removal.\n3. `roundness_cutoff` - adjustable via the `roundness_cutoff` parameter used for outlier removal.\n",type:"non_parallel",authors:"Ruth Hornbachner, Maks Hess",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/pelkmanslab/abbott-features/releases/download/v0.0.9/abbott_features-0.0.9-cp311-cp311-linux_x86_64.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/pelkmanslab/abbott-features/releases/download/v0.0.9/abbott_features-0.0.9-cp311-cp311-linux_x86_64.whl)
2. Run \`pip install abbott_features-0.0.9-cp311-cp311-linux_x86_64.whl\`
`}]}]],["apx_fractal_task_collection",[{pkg_name:"apx_fractal_task_collection",version:"0.4.8",task_list:[{version:"0.4.8",name:"Measure Features",category:"Measurement",modality:null,tags:["Textures","Intensity","Morphology","scikit-image","regionprops"],input_types:{},output_types:{},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`### Purpose
- Calculates **morphology**, **intensity**, **texture**, and **population features** for objects in a label image.
- Supports **2D and 3D measurements** across multiple regions of interest (ROIs).
- Extracts features for intensity images using configurable channel inclusion/exclusion.

### Outputs
- A **feature table** saved in the OME-Zarr structure, containing:
  - Morphology features (e.g., size, shape, well coordinates).
  - Intensity features (e.g., mean, max, min intensity per object).
  - Texture features (e.g., Haralick, Laws' texture energy).
  - Population features (e.g., densities and number of neighbours).
- Updated ROI metadata with border and well location information.

### Limitations
- Does not support measurements for label images that do not have the same resolution as the intensity images.`,type:"parallel",authors:"Adrian Tschan",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.8-py3-none-any.whl\`
`},{version:"0.4.8",name:"Calculate Pixel Intensity Correlation",category:"Measurement",modality:null,tags:["Correlation","Intensity","QC"],input_types:{},output_types:{},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`### Purpose
- Calculates pixel intensity correlation between two channels for each object in a label image.  
- Supports loading channels from different multiplexing acquisitions.  
- Handles multiple channel pairs per well and large datasets efficiently.  

### Outputs
- A **feature table** in the OME-Zarr structure with correlation values for specified channel pairs for each object.  

### Limitations
- Requires consistent **label and channel names** across input zarrs.  
- Assumes NGFF-compatible metadata.  
- Only validated for **level 0 resolution**.`,type:"compound",authors:"Adrian Tschan",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.8-py3-none-any.whl\`
`},{version:"0.4.8",name:"Segment Secondary Objects",category:"Segmentation",modality:"HCS",tags:[],input_types:{},output_types:{},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`### Purpose
- Segments secondary objects based on primary labels and intensity images using watershed segmentation.  
- Supports multiplexed and non-multiplexed acquisitions.  
- Optional parameters allow for flexible handling of thresholds, blurring, and masking.  

### Limitations
- Requires consistent **label and channel names** across input zarrs.  
- Assumes NGFF-compatible metadata.  
- Only tested for **level 0 resolution**.  `,type:"compound",authors:"Adrian Tschan",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.8-py3-none-any.whl\`
`},{version:"0.4.8",name:"Expand Labels",category:"Image Processing",modality:null,tags:[],input_types:{},output_types:{},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`## init_expand_labels
Initialized secondary segmentation task

This task prepares a parallelization list of all zarr_urls that need to be
used to perform expansion of a label image.
## expand_labels_skimage
Expands labels in a label image by "distance" pixels without overlapping.

Takes a primary label image and expands it by a certain distance. Direct
implementation of skimage.segmentation.expand_labels.
`,type:"compound",authors:"Adrian Tschan",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.8-py3-none-any.whl\`
`},{version:"0.4.8",name:"Convert IC6000 to OME-Zarr",category:"Conversion",modality:"HCS",tags:["IC6000","IC6K","IN Cell"],input_types:{},output_types:{},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`## init_convert_IC6000_to_ome_zarr
Create OME-NGFF structure and metadata to host a multiplexing dataset.

This task takes a set of image folders (i.e. different acquisition cycles)
and build the internal structure and metadata of a OME-NGFF zarr group,
without actually loading/writing the image data.

Each element in input_paths should be treated as a different acquisition.
## convert_IC6000_to_ome_zarr
Convert IC6000 output (png, tif) to zarr file.

This task is run after "init_convert_IC6000_to_ome_zarr"
and populates the empty OME-Zarr files that were prepared.
`,type:"compound",authors:"Adrian Tschan",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.8-py3-none-any.whl\`
`},{version:"0.4.8",name:"Add Multiplexing Cycle IC6000",category:"Conversion",modality:"HCS",tags:["IC6000","IC6K","IN Cell"],input_types:{},output_types:{},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`## init_add_multiplexing_cycle_IC6000
Create OME-NGFF structure and metadata to host a multiplexing dataset.

This task takes an existing zarr file and a set of image folders
(i.e. different acquisition cycles) and builds the internal structure and
metadata of a OME-NGFF zarr group, without actually loading/writing the
 image data.

Each element in input_paths should be treated as a different acquisition.
## convert_IC6000_to_ome_zarr
Convert IC6000 output (png, tif) to zarr file.

This task is run after "init_convert_IC6000_to_ome_zarr"
and populates the empty OME-Zarr files that were prepared.
`,type:"compound",authors:"Adrian Tschan",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.8-py3-none-any.whl\`
`},{version:"0.4.8",name:"Label Assignment by Overlap",category:"Measurement",modality:null,tags:[],input_types:{},output_types:{},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`## init_label_assignment_by_overlap
Initialized label assignment by overlap task

This task prepares a parallelization list of all zarr_urls that need to be
used to perform label assignment based on overlap between two label images.
## label_assignment_by_overlap
Assign labels to each other based on overlap.

Takes a parent label image and a child label image and calculates
overlaps between their labels. Child labels will be assigned to parent
labels based on an overlap threshold.
`,type:"compound",authors:"Adrian Tschan",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.8-py3-none-any.whl\`
`},{version:"0.4.8",name:"Clip Label Image",category:"Image Processing",modality:null,tags:[],input_types:{},output_types:{},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`## init_clip_label_image
Initialized clip label image task

This task prepares a parallelization list of all zarr_urls that need to be
used to perform clipping based on two label images.
## clip_label_image
Clips a label image with a mask.

Takes two label images (or a label image and a binary mask) and replaces
all values in the first label image with 0 where the second label image has
values > 0.
`,type:"compound",authors:"Adrian Tschan",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.8-py3-none-any.whl\`
`},{version:"0.4.8",name:"Mask Label Image",category:"Image Processing",modality:null,tags:[],input_types:{},output_types:{},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`## init_mask_label_image
Initialized apply mask task

This task prepares a parallelization list of all zarr_urls that need to be
used to perform mask application based on two label images.
## mask_label_image
Applies a mask to a label image.

Takes two label images (or a label image and a binary mask) and replaces
all values in the first label image with 0 where the second label image has
values = 0.
`,type:"compound",authors:"Adrian Tschan",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.8-py3-none-any.whl\`
`},{version:"0.4.8",name:"Filter Label by Size",category:"Image Processing",modality:null,tags:[],input_types:{},output_types:{},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`## init_filter_label_by_size
Initialized Filter Label by Size task

This task prepares a parallelization list of all zarr_urls that need to be
used to perform label filtering by size.
## filter_label_by_size
Filter objects in a label image by size.
`,type:"compound",authors:"Adrian Tschan",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.8-py3-none-any.whl\`
`},{version:"0.4.8",name:"Calculate BaSiCPy Illumination Models",category:"Image Processing",modality:null,tags:[],input_types:{},output_types:{},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`## init_calculate_basicpy_illumination_models
Initialized BaSiCPy illumination correction task

This task prepares a parallelization list of all zarr_urls that need to be
used to perform illumination correction with BaSiCPy.
## calculate_basicpy_illumination_models
Calculates illumination correction profiles based on a random sample
of images for each channel_label or wavelength.
`,type:"compound",authors:"Adrian Tschan",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.8-py3-none-any.whl\`
`},{version:"0.4.8",name:"Apply BaSiCPy Illumination Models",category:"Image Processing",modality:null,tags:[],input_types:{illumination_corrected:!1},output_types:{illumination_corrected:!0},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`## apply_basicpy_illumination_models
Applies illumination correction to the images in the OME-Zarr.
`,type:"parallel",authors:"Adrian Tschan",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.8-py3-none-any.whl\`
`},{version:"0.4.8",name:"Aggregate Feature Tables",category:"Other",modality:null,tags:[],input_types:{},output_types:{},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`## init_aggregate_feature_tables
Initialized clip label image task

This task prepares a parallelization list of all zarr_urls that need to be
used to perform clipping based on two label images.
## aggregate_feature_tables
Aggregate feature tables that were calculated per zarr-image to one
Anndata table containing feature measurements across all zarr-images.
`,type:"compound",authors:"Adrian Tschan",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.8-py3-none-any.whl\`
`},{version:"0.4.8",name:"Stitch FOVs with Overlap",category:"Image Processing",modality:null,tags:["Stitching","FOV","Overlap"],input_types:{stitched:!1},output_types:{stitched:!0},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`## stitch_fovs_with_overlap
Stitches FOVs with overlap using ASHLAR (https://github.com/labsyspharm/ashlar).
`,type:"parallel",authors:"Adrian Tschan",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.8-py3-none-any.whl\`
`},{version:"0.4.8",name:"Multiplexed Pixel Clustering",category:"Measurement",modality:null,tags:["Multiplex","Clustering","Pixel","MCU"],input_types:{},output_types:{},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`## multiplexed_pixel_clustering
Perform multiplexed cell unit (MCU) analysis on a label image. Inspired by
Gabriele Gut et al., Multiplexed protein maps link subcellular
organization to cellular states. Science (2018)
DOI: 10.1126/science.aar7042
`,type:"non_parallel",authors:"Adrian Tschan",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.8-py3-none-any.whl\`
`},{version:"0.4.8",name:"Correct Chromatic Shift",category:"Image Processing",modality:null,tags:[],input_types:{chromatic_shift_corrected:!1},output_types:{chromatic_shift_corrected:!0},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`## init_correct_chromatic_shift
Initialized Correct Chromatic Shift task

This task prepares a parallelization list of all zarr_urls that need to be
used to perform chromatic shift correction based on reference images of
(for example) fluorescent beads.
## correct_chromatic_shift
Correct chromatic shift based on reference images (for example fluorescent
beads) and apply it to all images.
`,type:"compound",authors:"Adrian Tschan",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.8-py3-none-any.whl\`
`},{version:"0.4.8",name:"Convert Channel to Label",category:"Other",modality:null,tags:[],input_types:{},output_types:{},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`## init_convert_channel_to_label
Initialized Filter Label by Size task

This task prepares a parallelization list of all zarr_urls that need to be
used to perform Convert Channel to Label task.
## convert_channel_to_label
Convert a channel of an OME-Zarr image to a label image.

Args:
    zarr_url: Path or url to the individual OME-Zarr image to be processed.
        (standard argument for Fractal tasks, managed by Fractal server).
    init_args: Intialization arguments provided by
    \`init_convert_channel_to_label\`.
    output_label_name: Name of the label to be created.
    overwrite: If True, overwrite existing label image with same name.
`,type:"compound",authors:"Adrian Tschan",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.8-py3-none-any.whl\`
`},{version:"0.4.8",name:"Detect Blob Centroids",category:"Segmentation",modality:null,tags:[],input_types:{},output_types:{},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`## init_detect_blob_centroids
Initialized Filter Label by Size task

This task prepares a parallelization list of all zarr_urls that need to be
used to perform Convert Channel to Label task.
## detect_blob_centroids
Detects blob centroids in an intensity image and stores the result as a
label image..
`,type:"compound",authors:"Adrian Tschan",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.8-py3-none-any.whl\`
`},{version:"0.4.8",name:"Ashlar Stitching and Registration",category:"Image Processing",modality:null,tags:["Stitching","Registration"],input_types:{stitched:!1},output_types:{stitched:!0},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`## init_ashlar_stitching_and_registration
Initializes ashlar stitching and registration task

This task prepares a parallelization list of all zarr_urls that need to be
used to perform ashlar stitching and registration.
## ashlar_stitching_and_registration
Stitches FOVs with overlap using ASHLAR (https://github.com/labsyspharm/ashlar)
and register the stitched image to the reference cycle.
`,type:"compound",authors:"Adrian Tschan",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.8-py3-none-any.whl\`
`},{version:"0.4.8",name:"Merge Plate Metadata",category:"Other",modality:null,tags:[],input_types:{},output_types:{},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`## merge_plate_metadata
Merge a metadata csv file with a Fractal feature table.

Takes a csv file containing metadata and merges it into a Fractal
feature table. The metadata columns will appear in the obs of the
feature table.
`,type:"parallel",authors:"Adrian Tschan",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.8-py3-none-any.whl\`
`},{version:"0.4.8",name:"Normalize Feature Table",category:"Feature Table Processing",modality:null,tags:["Normalization","Feature Table"],input_types:{},output_types:{},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`## init_normalize_feature_table
Initializes normalize feature table task

This task prepares a parallelization list of all zarr_urls that need to be
used to perform measurement normalization.
## normalize_feature_table
Normalize measurements in the feature table with selected method
and the selected control condition.
`,type:"compound",authors:"Adrian Tschan",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.8-py3-none-any.whl\`
`},{version:"0.4.8",name:"Correct 4i Bleaching Artifacts",category:"Feature Table Processing",modality:null,tags:["Correction","Feature Table","4i","Bleaching"],input_types:{},output_types:{},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`## init_correct_4i_bleaching_artifacts
Initializes normalize feature table task

This task prepares a parallelization list of all zarr_urls that need to be
used to perform correction of 4i bleaching artifacts.
## correct_4i_bleaching_artifacts
Correct bleaching artifacts in the feature table of a 4i image.

Correct bleaching aritfacts in the feature table with the selected control
condition. Only intensity features are corrected. Currently, the correction
is applied assuming a zig-zag (starting left-to-right) acquisition pattern.
Other acquisition patterns may be supported in the future.
`,type:"compound",authors:"Adrian Tschan",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.8/apx_fractal_task_collection-0.4.8-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.8-py3-none-any.whl\`
`}]}]],["fractal_faim_ipa",[{pkg_name:"fractal_faim_ipa",version:"0.6.0",task_list:[{version:"0.6.0",name:"Convert MD to OME-Zarr",category:"Conversion",modality:"HCS",tags:["Molecular Devices","Image Xpress","MD"],input_types:{},output_types:{},docs_link:"https://github.com/fractal-analytics-platform/fractal-faim-ipa",docs_info:`### Purpose
- Converts **2D and 3D images from MD Molecular Devices** systems into OME-Zarr format, creating OME-Zarr HCS plates and combining all fields of view in a well into a single image.
- Saves Fractal **region-of-interest (ROI) tables** for both individual fields of view and the entire well.
- Handles overlapping fields of view by either fusing images or saving them in grid tiles (depending on the \`tile_alignment\` option).

### Limitations
- The \`image_dir\` needs to be set to the the parent folder containing the following sub-folders: YYYY-MM-DD / Project_ID / Actual image files (potentially in ZStep folders). If it is run directly from the folder containing the images, it will fail.
`,type:"non_parallel",authors:null,install_instructions:'**How to add this task to a Fractal instance:**\n\nTrigger a PyPI task collection with package `fractal-faim-ipa` and package version `0.6.0`\n\n**How to install this task in a Python environment:**\n\nRun `pip install "fractal-faim-ipa==0.6.0"`\n```\n'},{version:"0.6.0",name:"FAIM-IPA Convert Cellvoyager to OME-Zarr",category:"Conversion",modality:"HCS",tags:["Molecular Devices","Image Xpress","MD"],input_types:{},output_types:{},docs_link:"https://github.com/fractal-analytics-platform/fractal-faim-ipa",docs_info:`### Purpose
- Converts **2D and 3D images from MD Molecular Devices** systems into OME-Zarr format, creating OME-Zarr HCS plates and combining all fields of view in a well into a single image.
- Saves Fractal **region-of-interest (ROI) tables** for both individual fields of view and the entire well.
- Handles overlapping fields of view by either fusing images or saving them in grid tiles (depending on the \`tile_alignment\` option).

### Limitations
- The \`image_dir\` needs to be set to the the parent folder containing the following sub-folders: YYYY-MM-DD / Project_ID / Actual image files (potentially in ZStep folders). If it is run directly from the folder containing the images, it will fail.
`,type:"non_parallel",authors:null,install_instructions:'**How to add this task to a Fractal instance:**\n\nTrigger a PyPI task collection with package `fractal-faim-ipa` and package version `0.6.0`\n\n**How to install this task in a Python environment:**\n\nRun `pip install "fractal-faim-ipa==0.6.0"`\n```\n'}]}]],["fractal_hcs_converters",[{pkg_name:"fractal_hcs_converters",version:"0.3.2",task_list:[{version:"0.3.2",name:"Convert Olympus ScanR Plate to OME-Zarr",category:"Conversion",modality:"HCS",tags:["Olympus","ScanR","Plate converter"],input_types:{},output_types:{},docs_link:"https://github.com/fractal-analytics-platform/fractal-hcs-converters",docs_info:`### Purpose

- Convert images acquired with an Olympus ScanR microscope to a OME-Zarr Plate.

### Outputs

- A OME-Zarr Plate.

### Limitations

- This task has been tested on a limited set of acquisitions. It may not work on all Olympus ScanR acquisitions.

### Expected inputs

The following directory structure is expected:

\`\`\`text
/plate_dir/
----/data/
--------/metadata.ome.xml
--------/B2--W00014--P00001--Z00000--T00000--DAPi.tif
--------/B2--W00014--P00001--Z00000--T00000--TRITC.tif
--------/...
\`\`\`
`,type:"compound",authors:"Fractal Core Team",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/fractal-analytics-platform/fractal-uzh-converters/releases/download/v0.3.2/fractal_hcs_converters-0.3.2-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/fractal-analytics-platform/fractal-uzh-converters/releases/download/v0.3.2/fractal_hcs_converters-0.3.2-py3-none-any.whl)
2. Run \`pip install fractal_hcs_converters-0.3.2-py3-none-any.whl\`
`}]}]],["fractal_helper_tasks",[{pkg_name:"fractal_helper_tasks",version:"0.3.2",task_list:[{version:"0.3.2",name:"Drop T Dimension",category:null,modality:null,tags:["Singleton time dimension"],input_types:{},output_types:{has_t:!1},docs_link:"https://github.com/jluethi/fractal-helper-tasks",docs_info:`### Purpose
- Removes a **singleton time (T) dimension** from an OME-Zarr image.  
- Creates a new OME-Zarr image with updated metadata and dimensions.
- Optionally overwrites the input image if \`overwrite_input\` is set to True.

### Outputs
- A **new Zarr image** without the singleton T-dimension, stored with a configurable suffix.  

### Limitations
- Only processes OME-Zarr images where the **T-axis is the first axis**.  
- Assumes the T-dimension is **singleton**; does not process non-singleton time axes.  
- Does not copy associated **label images** or **ROI tables** to the new Zarr structure.  `,type:"parallel",authors:"Joel Luethi",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/fractal-analytics-platform/fractal-helper-tasks/releases/download/v0.3.2/fractal_helper_tasks-0.3.2-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/fractal-analytics-platform/fractal-helper-tasks/releases/download/v0.3.2/fractal_helper_tasks-0.3.2-py3-none-any.whl)
2. Run \`pip install fractal_helper_tasks-0.3.2-py3-none-any.whl\`
`},{version:"0.3.2",name:"Convert 2D segmentation to 3D",category:null,modality:null,tags:["Mixed modality","2D to 3D workflows"],input_types:{is_3D:!1},output_types:{is_3D:!0},docs_link:"https://github.com/jluethi/fractal-helper-tasks",docs_info:`### Purpose
- Converts a **2D segmentation** image into a **3D segmentation** by replicating the 2D segmentation across Z-slices.  
- Supports OME-Zarr datasets where **2D and 3D images** share the same base name but differ by suffixes.  
- Optionally copies associated ROI tables and adjusts them to align with the replicated Z-dimensions.  

### Outputs
- A **3D segmentation label image** saved with a new name.  
- Updated **ROI tables** adjusted for Z-dimensions (optional).  

### Limitations
- Only supports **same-base 2D and 3D Zarr names**; full flexibility in file names is not yet implemented.  
- Assumes **2D OME-Zarr images** and corresponding 3D images are stored in the same base folder and just differ with a suffix before the .zarr.  
`,type:"parallel",authors:"Joel Luethi",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/fractal-analytics-platform/fractal-helper-tasks/releases/download/v0.3.2/fractal_helper_tasks-0.3.2-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/fractal-analytics-platform/fractal-helper-tasks/releases/download/v0.3.2/fractal_helper_tasks-0.3.2-py3-none-any.whl)
2. Run \`pip install fractal_helper_tasks-0.3.2-py3-none-any.whl\`
`},{version:"0.3.2",name:"Rechunk OME-Zarr",category:null,modality:null,tags:["Rechunking","Many files"],input_types:{},output_types:{},docs_link:"https://github.com/jluethi/fractal-helper-tasks",docs_info:`### Purpose
- Rechunks OME-Zarr to new chunking parameters: Changes whether the array is stored as many small files or few larger files.
- Optionally applies the same rechunking to label images.

### Outputs
- A **new Zarr image** that is rechunked.
`,type:"parallel",authors:"Joel Luethi",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/fractal-analytics-platform/fractal-helper-tasks/releases/download/v0.3.2/fractal_helper_tasks-0.3.2-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/fractal-analytics-platform/fractal-helper-tasks/releases/download/v0.3.2/fractal_helper_tasks-0.3.2-py3-none-any.whl)
2. Run \`pip install fractal_helper_tasks-0.3.2-py3-none-any.whl\`
`}]}]],["fractal_lif_converters",[{pkg_name:"fractal_lif_converters",version:"0.5.0",task_list:[{version:"0.5.0",name:"Convert Lif Plate to OME-Zarr",category:"Conversion",modality:"HCS",tags:["Leica","Plate converter"],input_types:{},output_types:{},docs_link:"https://github.com/fractal-analytics-platform/fractal-lif-converters",docs_info:`### Purpose

- Convert a Leica LIF plate to a OME-Zarr Plate.

### Outputs

- A OME-Zarr Plate.

### Limitations

- This task has been tested on a limited set of acquisitions. It may not work on all Leica LIF acquisitions.
- This converter is does not support images exported in auto-saved mode.

### Expected inputs

The following plate layout are supported:

* Single Position Plates

    \`\`\`text
    /{Project.lif}
    ----/{Tilescan 1}/
    --------/A
    ------------/1 (Simple Image)
    \`\`\`

    \`\`\`text
    /{Project.lif}
    ----/{Tilescan 1}/
    --------/A1 (Simple Image)
    --------/...
    \`\`\`

* Multi Position Plates

    \`\`\`text
    /{Project.lif}
    ----/{Tilescan 1}/
    --------/A
    ------------/1
    ----------------/R1 (Simple Image)
    ----------------/R2 (Simple Image)
    ----------------/...
    \`\`\`

    \`\`\`text
    /{Project.lif}
    ----/{Tilescan 1}/
    --------/A1
    ------------/R1 (Simple Image)
    ------------/R2 (Simple Image)
    ------------/...
    \`\`\`

* Mosaique Plates

    \`\`\`text
    /{Project.lif}
    ----/{Tilescan 1}/
    --------/A
    ------------/1 (Mosaic Image)
    ------------/...
    \`\`\`

    \`\`\`text
    /{Project.lif}
    ----/{Tilescan 1}/
    --------/A1 (Mosaic Image)
    --------/...
    \`\`\`

The names in curly braces \`{}\` can be freely chosen by the user. 

While the othe names must follow the following format:

* The well name must be a singe or duble letter followed by a positive integer.
Valid examples are \`A1\`, \`A2\`, \`B1\`, \`AA1\`, \`AA12\` etc.
* Alternatively, the well can be hierarchically structured, for example \`A/1\`, \`A/2\`, \`B/1\`, \`AA/1\`, \`AA/12\` etc.
* If the well is a multi-position well, the positions must be named \`R\` followed by a positive integer. Valid examples are \`R1\`, \`R2\`, \`R3\`, \`R12\` etc.
* In case of more complex plate formats, for example FLIM  data, the converter will ignore the data that does not follow the above formats. For example:

  \`\`\`text
  /{Project.lif}
  ----/{Tilescan 1}/
  --------/A/1/R1 (Converted)
  --------/A/1/R1/FLIM/Intensity (Ignored)
  --------------------/Fast Flim (Ignored)
  --------------------/Standard Deviation (Ignored)
  \`\`\`

`,type:"compound",authors:"Fractal Core Team",install_instructions:'**How to add this task to a Fractal instance:**\n\nTrigger a PyPI task collection with package `fractal-lif-converters` and package version `0.5.0`\n\n**How to install this task in a Python environment:**\n\nRun `pip install "fractal-lif-converters==0.5.0"`\n```\n'},{version:"0.5.0",name:"Convert Lif Scene to OME-Zarr",category:"Conversion",modality:null,tags:["Leica","Single Image Converter"],input_types:{},output_types:{},docs_link:"https://github.com/fractal-analytics-platform/fractal-lif-converters",docs_info:`### Purpose

- Convert a Leica LIF acquisition to a OME-Zarr Image.

### Outputs

- A OME-Zarr Image.

### Limitations

- This task has been tested on a limited set of acquisitions. It may not work on all Leica LIF acquisitions.
- This converter is does not support images exported in auto-saved mode.

### Expected inputs

The following image layout are supported:

* Single Position Image

    \`\`\`text
    /{Project.lif}
    ----/{Tilescan 1} (Simple Image)
    \`\`\`

* Multi Position Image
  
    \`\`\`text
    /{Project.lif}
    ----/{Tilescan 1}/
    --------/Position 1 (Simple Image)
    --------/Position 2 (Simple Image)
    --------/...
    \`\`\`

* Mosaique Image
  
    \`\`\`text
    /{Project.lif}
    ----/{Tilescan 1} (Mosaic Image)
    \`\`\`


The names in curly braces \`{}\` can be freely chosen by the user. While
the othe names must follow the following format:

If the scene is a multi-position image, the positions must be named \`Position\` followed by a space and a positive integer. Valid examples are \`Position 1\`, \`Position 2\`, \`Position 3\`, \`Position 12\` etc.

Moreover, if the lif file contains scans that do not follow the above formats, the converter will ignore them.
`,type:"compound",authors:"Fractal Core Team",install_instructions:'**How to add this task to a Fractal instance:**\n\nTrigger a PyPI task collection with package `fractal-lif-converters` and package version `0.5.0`\n\n**How to install this task in a Python environment:**\n\nRun `pip install "fractal-lif-converters==0.5.0"`\n```\n'}]}]],["fractal_ome_zarr_hcs_stitching",[{pkg_name:"fractal_ome_zarr_hcs_stitching",version:"0.0.10",task_list:[{version:"0.0.10",name:"Stitching Task",category:"Registration",modality:null,tags:["multiview-stitcher","Fusion","Registration","Stitching","2D","3D"],input_types:{stitched:!1},output_types:{stitched:!0},docs_link:"https://github.com/m-albert/fractal-ome-zarr-hcs-stitching",docs_info:`## stitching_task
Stitches FOVs from an OME-Zarr image.

Performs registration and fusion of FOVs indicated
in the FOV_ROI_table of the OME-Zarr image. Writes the
fused image back to a "fused" group in the same Zarr array.

Todo:
  - include and update output metadata / FOV ROI table
  - test 2D / 3D
  - optimize for large data
  - currently optimized for search first mode, need to implement
    registration pair finding for "grid" (?) mode
`,type:"parallel",authors:"Marvin Albert, Joel Luethi, Nicole Repina",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/m-albert/fractal-ome-zarr-hcs-stitching/releases/download/v0.0.11/fractal_ome_zarr_hcs_stitching-0.0.10-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/m-albert/fractal-ome-zarr-hcs-stitching/releases/download/v0.0.11/fractal_ome_zarr_hcs_stitching-0.0.10-py3-none-any.whl)
2. Run \`pip install fractal_ome_zarr_hcs_stitching-0.0.10-py3-none-any.whl\`
`}]}]],["fractal_tasks_core",[{pkg_name:"fractal_tasks_core",version:"1.5.3",task_list:[{version:"1.5.3",name:"Convert Cellvoyager to OME-Zarr",category:"Conversion",modality:"HCS",tags:["Yokogawa","Cellvoyager","2D","3D"],input_types:{},output_types:{},docs_link:"https://fractal-analytics-platform.github.io/fractal-tasks-core",docs_info:`### Purpose
- Converts **2D and 3D images from CellVoyager CV7000/8000** systems into OME-Zarr format, creating OME-Zarr HCS plates and combining all fields of view in a well into a single image.
- Saves Fractal **region-of-interest (ROI) tables** for both individual fields of view and the entire well.
- Handles overlapping fields of view by adjusting their positions to be non-overlapping while retaining the original position data as additional columns in the ROI tables.
- Supports processing multiple plates in a single task.

### Limitations
- Currently, this task does not support time-resolved data and ignores the time fields in CellVoyager metadata.
`,type:"compound",authors:"Fractal Core Team",install_instructions:'**How to add this task to a Fractal instance:**\n\nTrigger a PyPI task collection for package `fractal-tasks-core`, package version `1.5.3` and package extras `fractal-tasks`\n\n**How to install this task in a Python environment:**\n\nRun `pip install "fractal-tasks-core[fractal-tasks]==1.5.3"`\n'},{version:"1.5.3",name:"Convert Cellvoyager Multiplexing to OME-Zarr",category:"Conversion",modality:"HCS",tags:["Yokogawa","Cellvoyager","2D","3D"],input_types:{},output_types:{},docs_link:"https://fractal-analytics-platform.github.io/fractal-tasks-core",docs_info:`### Purpose
- Converts **multiplexed 2D and 3D images from CellVoyager CV7000/8000** systems into OME-Zarr format, storing each acquisition as a separate OME-Zarr image in the same OME-Zarr plate.
- Creates **OME-Zarr HCS plates**, combining all fields of view for each acquisition in a well into a single image.
- Saves Fractal **region-of-interest (ROI) tables** for both individual fields of view and the entire well.
- Handles overlapping fields of view by adjusting their positions to be non-overlapping, while preserving the original position data as additional columns in the ROI tables.

### Limitations
- This task currently does not support time-resolved data and ignores the time fields in CellVoyager metadata.
`,type:"compound",authors:"Fractal Core Team",install_instructions:'**How to add this task to a Fractal instance:**\n\nTrigger a PyPI task collection for package `fractal-tasks-core`, package version `1.5.3` and package extras `fractal-tasks`\n\n**How to install this task in a Python environment:**\n\nRun `pip install "fractal-tasks-core[fractal-tasks]==1.5.3"`\n'},{version:"1.5.3",name:"Project Image (HCS Plate)",category:"Image Processing",modality:"HCS",tags:["Preprocessing","3D"],input_types:{is_3D:!0},output_types:{is_3D:!1},docs_link:"https://fractal-analytics-platform.github.io/fractal-tasks-core",docs_info:`### Purpose
- Performs **Z-axis projection of intensity images** using a specified projection method.
- **Generates a new OME-Zarr HCS plate** to store the projected data.

### Limitations
- Supports projections only for OME-Zarr HCS plates; other collections of OME-Zarrs are not yet supported.
- Currently limited to data in the CZYX format.
`,type:"compound",authors:"Fractal Core Team",install_instructions:'**How to add this task to a Fractal instance:**\n\nTrigger a PyPI task collection for package `fractal-tasks-core`, package version `1.5.3` and package extras `fractal-tasks`\n\n**How to install this task in a Python environment:**\n\nRun `pip install "fractal-tasks-core[fractal-tasks]==1.5.3"`\n'},{version:"1.5.3",name:"Illumination Correction",category:"Image Processing",modality:null,tags:["Preprocessing","2D","3D"],input_types:{illumination_corrected:!1},output_types:{illumination_corrected:!0},docs_link:"https://fractal-analytics-platform.github.io/fractal-tasks-core",docs_info:`### Purpose
- **Corrects illumination** in OME-Zarr images using **pre-calculated flatfield profiles**.
- Optionally performs **background subtraction**.

### Limitations
- Requires pre-calculated flatfield profiles in TIFF format.
- Supports only fixed-value background subtraction; background subtraction profiles are not supported.
`,type:"parallel",authors:"Fractal Core Team",install_instructions:'**How to add this task to a Fractal instance:**\n\nTrigger a PyPI task collection for package `fractal-tasks-core`, package version `1.5.3` and package extras `fractal-tasks`\n\n**How to install this task in a Python environment:**\n\nRun `pip install "fractal-tasks-core[fractal-tasks]==1.5.3"`\n'},{version:"1.5.3",name:"Cellpose Segmentation",category:"Segmentation",modality:null,tags:["Deep Learning","Convolutional Neural Network","Instance Segmentation","2D","3D"],input_types:{},output_types:{},docs_link:"https://fractal-analytics-platform.github.io/fractal-tasks-core",docs_info:`### Purpose
- **Segments images using Cellpose models**.
- Supports both **built-in Cellpose models** (shipped with Cellpose) and **user-trained models**.
- Accepts dual image input for segmentation.
- Can process **arbitrary regions of interest (ROIs)**, including whole images, fields of view (FOVs), or masked outputs from prior segmentations, based on corresponding ROI tables.
- Provides access to all advanced Cellpose parameters.
- Allows custom rescaling options per channel, particularly useful for sparse images.

### Limitations
- Compatible only with Cellpose 2.x models; does not yet support 3.x models.
`,type:"parallel",authors:"Fractal Core Team",install_instructions:'**How to add this task to a Fractal instance:**\n\nTrigger a PyPI task collection for package `fractal-tasks-core`, package version `1.5.3` and package extras `fractal-tasks`\n\n**How to install this task in a Python environment:**\n\nRun `pip install "fractal-tasks-core[fractal-tasks]==1.5.3"`\n'},{version:"1.5.3",name:"Calculate Registration (image-based)",category:"Registration",modality:"HCS",tags:["Multiplexing","2D","3D"],input_types:{},output_types:{},docs_link:"https://fractal-analytics-platform.github.io/fractal-tasks-core",docs_info:`### Purpose
- **Computes image-based registration** transformations for acquisitions in **HCS** OME-Zarr datasets.
- Processes images grouped by well, under the assumption that each well contains one image per acquisition.
- Calculates transformations for **specified regions of interest (ROIs)** and stores the results in the corresponding ROI table.
- Typically used as the first task in a workflow, followed by \`Find Registration Consensus\` and optionally \`Apply Registration to Image\`.

### Limitations
- Supports only HCS OME-Zarr datasets, leveraging their acquisition metadata and well-based image grouping.
- Assumes each well contains a single image per acquisition.
`,type:"compound",authors:"Fractal Core Team",install_instructions:'**How to add this task to a Fractal instance:**\n\nTrigger a PyPI task collection for package `fractal-tasks-core`, package version `1.5.3` and package extras `fractal-tasks`\n\n**How to install this task in a Python environment:**\n\nRun `pip install "fractal-tasks-core[fractal-tasks]==1.5.3"`\n'},{version:"1.5.3",name:"Find Registration Consensus",category:"Registration",modality:"HCS",tags:["Multiplexing","2D","3D"],input_types:{},output_types:{},docs_link:"https://fractal-analytics-platform.github.io/fractal-tasks-core",docs_info:`### Purpose
- Determines the **consensus alignment** region across all selected acquisitions **within each well of an HCS OME-Zarr dataset**.
- Generates a new ROI table for each image, defining consensus regions that are aligned across all acquisitions.
- Typically used as the second task in a workflow, following \`Calculate Registration (image-based)\` and optionally preceding \`Apply Registration to Image\`.

### Limitations
- Supports only HCS OME-Zarr datasets, leveraging their acquisition metadata and well-based image grouping.
`,type:"compound",authors:"Fractal Core Team",install_instructions:'**How to add this task to a Fractal instance:**\n\nTrigger a PyPI task collection for package `fractal-tasks-core`, package version `1.5.3` and package extras `fractal-tasks`\n\n**How to install this task in a Python environment:**\n\nRun `pip install "fractal-tasks-core[fractal-tasks]==1.5.3"`\n'},{version:"1.5.3",name:"Apply Registration to Image",category:"Registration",modality:"HCS",tags:["Multiplexing","2D","3D"],input_types:{registered:!1},output_types:{registered:!0},docs_link:"https://fractal-analytics-platform.github.io/fractal-tasks-core",docs_info:"### Purpose\n- **Applies pre-calculated registration** transformations to images in an **HCS** OME-Zarr dataset, aligning all acquisitions to a specified reference acquisition.\n- **Masks regions not included** in the registered ROI table and aligns both intensity and label images.\n- Replaces the non-aligned image with the newly aligned image in the dataset if `overwrite input` is selected.\n- Typically used as the third task in a workflow, following `Calculate Registration (image-based)` and `Find Registration Consensus`.\n\n### Limitations\n- If `overwrite input` is selected, the non-aligned image is permanently deleted, which may impact workflows requiring access to the original images.\n",type:"parallel",authors:"Fractal Core Team",install_instructions:'**How to add this task to a Fractal instance:**\n\nTrigger a PyPI task collection for package `fractal-tasks-core`, package version `1.5.3` and package extras `fractal-tasks`\n\n**How to install this task in a Python environment:**\n\nRun `pip install "fractal-tasks-core[fractal-tasks]==1.5.3"`\n'},{version:"1.5.3",name:"Import OME-Zarr",category:null,modality:null,tags:["2D","3D"],input_types:{},output_types:{},docs_link:"https://fractal-analytics-platform.github.io/fractal-tasks-core",docs_info:`### Purpose
- Imports a **single OME-Zarr dataset** into the Fractal framework for further processing.
- Supports importing either a **full OME-Zarr HCS plate** or an **individual OME-Zarr image**.
- Ensures the OME-Zarr dataset is located in the \`zarr_dir\` specified by the dataset.
- Generates the necessary **image list metadata** required for processing the OME-Zarr with Fractal.
- Optionally **adds new ROI tables** to the existing OME-Zarr, enabling compatibility with many other tasks.

### Limitations
- Supports only OME-Zarr datasets already present in the \`zarr_dir\` of the corresponding dataset.
- Assumes the input OME-Zarr is correctly structured and formatted for compatibility with the Fractal framework.
`,type:"non_parallel",authors:"Fractal Core Team",install_instructions:'**How to add this task to a Fractal instance:**\n\nTrigger a PyPI task collection for package `fractal-tasks-core`, package version `1.5.3` and package extras `fractal-tasks`\n\n**How to install this task in a Python environment:**\n\nRun `pip install "fractal-tasks-core[fractal-tasks]==1.5.3"`\n'},{version:"1.5.3",name:"Napari Workflows Wrapper",category:"Measurement",modality:null,tags:["2D","3D"],input_types:{},output_types:{},docs_link:"https://fractal-analytics-platform.github.io/fractal-tasks-core",docs_info:`### Purpose
- Executes a **napari workflow** on the regions of interest (ROIs) within a single OME-NGFF image.
- Processes specified images and labels as inputs to the workflow, producing outputs such as new labels and data tables.
- Offers **flexibility in defining input and output** specifications to customize the workflow for specific datasets and analysis needs.

### Limitations
- Currently supports only Napari workflows that utilize functions from the \`napari-segment-blobs-and-things-with-membranes\` module. Other Napari-compatible modules are not supported.

### Input Specifications
Napari workflows require explicit definitions of input and output data.
Example of valid \`input_specs\`:
\`\`\`json
{
    "in_1": {"type": "image", "channel": {"wavelength_id": "A01_C02"}},
    "in_2": {"type": "image", "channel": {"label": "DAPI"}},
    "in_3": {"type": "label", "label_name": "label_DAPI"}
}
\`\`\`

Example of valid \`output_specs\`:
\`\`\`json
{
    "out_1": {"type": "label", "label_name": "label_DAPI_new"},
    "out_2": {"type": "dataframe", "table_name": "measurements"},
}
\`\`\`
`,type:"parallel",authors:"Fractal Core Team",install_instructions:'**How to add this task to a Fractal instance:**\n\nTrigger a PyPI task collection for package `fractal-tasks-core`, package version `1.5.3` and package extras `fractal-tasks`\n\n**How to install this task in a Python environment:**\n\nRun `pip install "fractal-tasks-core[fractal-tasks]==1.5.3"`\n'}]}]],["operetta_compose",[{pkg_name:"operetta_compose",version:"0.2.13",task_list:[{version:"0.2.13",name:"Harmony to OME-Zarr",category:"Conversion",modality:"HCS",tags:["Opera","Operetta","Perkin Elmer"],input_types:{},output_types:{},docs_link:"https://leukemia-kispi.github.io/operetta-compose/",docs_info:`## harmony_to_ome_zarr
Convert TIFFs which were exported from Harmony (Operetta/Opera, Perkin-Elmer) to OME-ZARR
`,type:"non_parallel",authors:"Fabio Steffen",install_instructions:'**How to add this task to a Fractal instance:**\n\nTrigger a PyPI task collection with package `operetta-compose` and package version `0.2.13`\n\n**How to install this task in a Python environment:**\n\nRun `pip install "operetta-compose==0.2.13"`\n```\n'},{version:"0.2.13",name:"Stardist segmentation",category:"Segmentation",modality:null,tags:[],input_types:{},output_types:{},docs_link:"https://leukemia-kispi.github.io/operetta-compose/",docs_info:`## stardist_segmentation
Segment cells with Stardist
`,type:"parallel",authors:"Fabio Steffen",install_instructions:'**How to add this task to a Fractal instance:**\n\nTrigger a PyPI task collection with package `operetta-compose` and package version `0.2.13`\n\n**How to install this task in a Python environment:**\n\nRun `pip install "operetta-compose==0.2.13"`\n```\n'},{version:"0.2.13",name:"Regionprops measurement",category:"Measurement",modality:null,tags:["regionprops","intensity","morphology"],input_types:{},output_types:{},docs_link:"https://leukemia-kispi.github.io/operetta-compose/",docs_info:`## regionprops_measurement
Take measurements using regionprobs and write the features to the OME-ZARR
`,type:"parallel",authors:"Fabio Steffen",install_instructions:'**How to add this task to a Fractal instance:**\n\nTrigger a PyPI task collection with package `operetta-compose` and package version `0.2.13`\n\n**How to install this task in a Python environment:**\n\nRun `pip install "operetta-compose==0.2.13"`\n```\n'},{version:"0.2.13",name:"Feature classification",category:null,modality:null,tags:["napari feature classifier","object classification"],input_types:{},output_types:{},docs_link:"https://leukemia-kispi.github.io/operetta-compose/",docs_info:`## feature_classification
Classify cells using the [napari-feature-classifier](https://github.com/fractal-napari-plugins-collection/napari-feature-classifier) and write them to the OME-ZARR
`,type:"parallel",authors:"Fabio Steffen",install_instructions:'**How to add this task to a Fractal instance:**\n\nTrigger a PyPI task collection with package `operetta-compose` and package version `0.2.13`\n\n**How to install this task in a Python environment:**\n\nRun `pip install "operetta-compose==0.2.13"`\n```\n'},{version:"0.2.13",name:"Condition registration",category:null,modality:"HCS",tags:["metadata","well conditions","perturbation","treatment"],input_types:{},output_types:{},docs_link:"https://leukemia-kispi.github.io/operetta-compose/",docs_info:"## condition_registration\nRegister the experimental (drug layout) in the OME-ZARR.\nThe table should contain at least the columns `row` and `col` identifying the well.\nIt can have an arbitrary number of additional metadata columns (e.g. drug, concentration, medium, sample).\nDrug combinations can be specified by two entries pointing to the same `row` / `col`\n",type:"parallel",authors:"Fabio Steffen",install_instructions:'**How to add this task to a Fractal instance:**\n\nTrigger a PyPI task collection with package `operetta-compose` and package version `0.2.13`\n\n**How to install this task in a Python environment:**\n\nRun `pip install "operetta-compose==0.2.13"`\n```\n'}]}]],["scmultiplex",[{pkg_name:"scmultiplex",version:"0.8.12",task_list:[{version:"0.8.12",name:"scMultiplex Calculate Object Linking",category:"Registration",modality:"HCS",tags:["multiplexing","2D"],input_types:{},output_types:{},docs_link:"https://github.com/fmi-basel/gliberal-scMultipleX",docs_info:`### Purpose
- Links segmented objects between a reference and an alignment acquisition within a single well of an HCS OME-Zarr dataset.
- Calculates object shifts using segmentation label maps, aligns objects, and identifies matching labels based on an Intersection over Union (IoU) cutoff threshold.
- Generates a linking table that maps object labels from the reference acquisition to those in the alignment acquisition.

### Outputs
- A linking table stored in the alignment acquisition directory.
- The table includes matched object pairs and their IoU scores.

### Limitations
- Only works for HCS OME-Zarr datasets where a **single well ROI** is used for linking. Multi-ROI processing (e.g., for FOV ROI tables) is not yet supported.
- Requires segmentation label maps to be provided for both the reference and alignment acquisitions.
- Matching is performed using an IoU threshold; objects below the threshold are not linked.
- Pixel sizes must match between the reference and alignment acquisitions for accurate registration.
`,type:"compound",authors:"Nicole Repina, Enrico Tagliavini, Tim-Oliver Buchholz, Joel Luethi",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/fmi-basel/gliberal-scMultipleX/releases/download/v0.8.12/scmultiplex-0.8.12-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file, with package extras \`fractal-tasks\`

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/fmi-basel/gliberal-scMultipleX/releases/download/v0.8.12/scmultiplex-0.8.12-py3-none-any.whl)
2. Run \`pip install "scmultiplex-0.8.12-py3-none-any.whl[fractal-tasks]"\`
`},{version:"0.8.12",name:"scMultiplex Calculate Linking Consensus",category:"Registration",modality:"HCS",tags:["multiplexing","2D","3D"],input_types:{},output_types:{},docs_link:"https://github.com/fmi-basel/gliberal-scMultipleX",docs_info:`### Purpose
- Calculates a **consensus linking table** across all multiplexing rounds in an HCS OME-Zarr dataset.
- Aligns object labels from all acquisitions to a reference acquisition, ensuring consistent object identities across rounds.
- Stores the resulting consensus table in the reference acquisition directory.

### Outputs
- A **consensus linking table** that maps object labels from all rounds to a single, aligned consensus.
- The table includes:
  - Original object labels from each round (e.g., \`R0_label\`, \`R1_label\`, ...).
  - A new consensus label (\`consensus_label\`) and index (\`consensus_index\`) for aligned objects.

### Limitations
- Requires pre-existing linking tables generated by a previous linking task (e.g., \`Calculate Object Linking\`).
- Assumes that the input linking tables follow a consistent structure across rounds.
`,type:"compound",authors:"Nicole Repina, Enrico Tagliavini, Tim-Oliver Buchholz, Joel Luethi",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/fmi-basel/gliberal-scMultipleX/releases/download/v0.8.12/scmultiplex-0.8.12-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file, with package extras \`fractal-tasks\`

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/fmi-basel/gliberal-scMultipleX/releases/download/v0.8.12/scmultiplex-0.8.12-py3-none-any.whl)
2. Run \`pip install "scmultiplex-0.8.12-py3-none-any.whl[fractal-tasks]"\`
`},{version:"0.8.12",name:"scMultiplex Relabel by Linking Consensus",category:"Registration",modality:"HCS",tags:["multiplexing","2D","3D"],input_types:{},output_types:{},docs_link:"https://github.com/fmi-basel/gliberal-scMultipleX",docs_info:`### Purpose
- Relabels segmentation images and ROI tables in an OME-Zarr dataset based on a pre-calculated **consensus linking table**.
- Aligns object labels across multiplexing rounds to ensure consistency with the consensus object identities.
- Outputs new segmentation images and ROI tables with updated labels.
- Requires a valid **consensus linking table** as input, typically generated by the \`Calculate Linking Consensus\` task.
- Non-consensus objects are set to background and excluded from the outputs.

### Outputs
- A **new segmentation image** where object labels match the consensus labels.
- A **relabelled ROI table** corresponding to the updated segmentation image, saved with a \`_linked\` suffix.

### Limitations
- Only supports **single well ROI tables**; multi-ROI processing (e.g., field of view ROIs) is not yet implemented.
- Input segmentation images and ROI tables must match in terms of object labels; inconsistencies will cause errors.
`,type:"compound",authors:"Nicole Repina, Enrico Tagliavini, Tim-Oliver Buchholz, Joel Luethi",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/fmi-basel/gliberal-scMultipleX/releases/download/v0.8.12/scmultiplex-0.8.12-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file, with package extras \`fractal-tasks\`

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/fmi-basel/gliberal-scMultipleX/releases/download/v0.8.12/scmultiplex-0.8.12-py3-none-any.whl)
2. Run \`pip install "scmultiplex-0.8.12-py3-none-any.whl[fractal-tasks]"\`
`},{version:"0.8.12",name:"scMultiplex Calculate Platymatch Registration",category:"Registration",modality:"HCS",tags:["multiplexing","3D"],input_types:{},output_types:{},docs_link:"https://github.com/fmi-basel/gliberal-scMultipleX",docs_info:`### Purpose
- Calculates point-cloud-based registration between segmentation images using **PlatyMatch**.
- Works well for **complex 3D registration**.
- Aligns sub-objects (e.g., nuclei) that belong to parent objects (e.g., organoids) by calculating **affine** and optionally **free-form deformation** transformations.
- Outputs linking tables of matched sub-objects and optionally saves transformation matrices to disk.

### Outputs
- A **linking table** that maps sub-objects between reference and alignment rounds using affine and/or free-form deformation (FFD) transformations.
- Transformation matrices (optional), saved on disk for each object pair.

### Limitations
- Only supports **single well ROI tables**; multi-ROI processing (e.g., FOV ROIs) is not yet implemented.
- Requires parent objects to be linked in a prior step using a **consensus linking table**.
- Assumes consistent pixel sizes between reference and alignment rounds for accurate registration.
- Relies on sufficient sub-object counts for alignment; regions with fewer than 3 sub-objects are skipped.
`,type:"compound",authors:"Nicole Repina, Enrico Tagliavini, Tim-Oliver Buchholz, Joel Luethi",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/fmi-basel/gliberal-scMultipleX/releases/download/v0.8.12/scmultiplex-0.8.12-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file, with package extras \`fractal-tasks\`

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/fmi-basel/gliberal-scMultipleX/releases/download/v0.8.12/scmultiplex-0.8.12-py3-none-any.whl)
2. Run \`pip install "scmultiplex-0.8.12-py3-none-any.whl[fractal-tasks]"\`
`},{version:"0.8.12",name:"scMultiplex Surface Mesh Multiscale",category:"Image Processing",modality:"HCS",tags:["3D","mesh"],input_types:{},output_types:{},docs_link:"https://github.com/fmi-basel/gliberal-scMultipleX",docs_info:`### Purpose
- Calculates **3D surface meshes** for parent objects (e.g., tissues, organoids) based on 3D child-level segmentation (e.g., nuclei).
- Optionally applies **multiscale label fusion** to estimate a smooth parent shape by merging child objects.
- Generates smoothened surface meshes using **VTK algorithms**, with optional mesh decimation for reduced complexity.
- Outputs 3D meshes in \`.stl\` or \`.vtp\` format and a new well label map in the dataset.

### Outputs
- **Surface meshes** of parent objects, saved as \`.stl\` (single object) or \`.vtp\` (multi-object) files in the dataset’s \`meshes\` folder.
- A **new label map** containing fused child-level objects, saved in the OME-Zarr dataset (only if multiscale processing is enabled).
- A **bounding-box ROI table** corresponding to the new label map.

### Limitations
- Requires pre-segmented child objects and a parent object ROI table.
- Multiscale processing requires a **parent label** for accurate object grouping and fusion.
- Label map outputs may have **overlaps clipped**, where higher-label IDs take precedence in dense regions.
- Mesh quality can vary with complex geometries; manual tuning of smoothing parameters may be needed for optimal results.
`,type:"compound",authors:"Nicole Repina, Enrico Tagliavini, Tim-Oliver Buchholz, Joel Luethi",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/fmi-basel/gliberal-scMultipleX/releases/download/v0.8.12/scmultiplex-0.8.12-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file, with package extras \`fractal-tasks\`

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/fmi-basel/gliberal-scMultipleX/releases/download/v0.8.12/scmultiplex-0.8.12-py3-none-any.whl)
2. Run \`pip install "scmultiplex-0.8.12-py3-none-any.whl[fractal-tasks]"\`
`},{version:"0.8.12",name:"scMultiplex Segment by Intensity Threshold",category:"Segmentation",modality:"HCS",tags:["Classical segmentation","3D"],input_types:{},output_types:{},docs_link:"https://github.com/fmi-basel/gliberal-scMultipleX",docs_info:`### Purpose
- Performs **full 3D object segmentation** of raw intensity images using intensity thresholding.
- Combines two intensity channels, applies **Gaussian smoothing** and **Canny edge detection** for refined masks.
- Filters out debris and neighboring objects by selecting the **largest connected component** within a masked region.
- Outputs a new 3D segmentation label image and an updated masking ROI table.

### Outputs
- A **new 3D label image** stored in the dataset, with refined object segmentation.
- A corresponding **bounding-box ROI table** saved as \`{output_label_name}_ROI_table\`.

### Limitations
- Requires pre-segmented 2D MIP-based ROI regions as input for masking.
- Supports intensity thresholding with either **Otsu's method** or a user-defined threshold.
- Assumes consistent image resolution and pixel intensities across channels.
- Regions with extreme intensity variations or overlapping objects may require manual parameter tuning for optimal results.
`,type:"compound",authors:"Nicole Repina, Enrico Tagliavini, Tim-Oliver Buchholz, Joel Luethi",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/fmi-basel/gliberal-scMultipleX/releases/download/v0.8.12/scmultiplex-0.8.12-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file, with package extras \`fractal-tasks\`

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/fmi-basel/gliberal-scMultipleX/releases/download/v0.8.12/scmultiplex-0.8.12-py3-none-any.whl)
2. Run \`pip install "scmultiplex-0.8.12-py3-none-any.whl[fractal-tasks]"\`
`},{version:"0.8.12",name:"scMultiplex Spherical Harmonics from Label Image",category:"Measurement",modality:"HCS",tags:["3D"],input_types:{},output_types:{},docs_link:"https://github.com/fmi-basel/gliberal-scMultipleX",docs_info:`### Purpose
- Computes **spherical harmonics** for 3D segmented objects in a label image using the **aics_shparam** library.
- Calculates and analyzes the **shape features** of objects, including reconstruction error.
- Outputs spherical harmonic coefficients and optionally saves reconstructed surface meshes.

### Outputs
- A **feature table** containing spherical harmonic coefficients and reconstruction error (**MSE**) per object.
- Optionally, the **computed surface mesh** and the **reconstructed mesh** (from harmonics), saved as \`.stl\` files in a new \`meshes\` folder.

### Limitations
- Input label image must contain 3D segmented objects; neighboring objects are removed by masking.
- The accuracy of spherical harmonics depends on the chosen **maximum degree (\`lmax\`)** and input label quality.
- Mesh reconstruction might smooth out fine details in highly complex shapes.
`,type:"compound",authors:"Nicole Repina, Enrico Tagliavini, Tim-Oliver Buchholz, Joel Luethi",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/fmi-basel/gliberal-scMultipleX/releases/download/v0.8.12/scmultiplex-0.8.12-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file, with package extras \`fractal-tasks\`

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/fmi-basel/gliberal-scMultipleX/releases/download/v0.8.12/scmultiplex-0.8.12-py3-none-any.whl)
2. Run \`pip install "scmultiplex-0.8.12-py3-none-any.whl[fractal-tasks]"\`
`},{version:"0.8.12",name:"scMultiplex Mesh Measurements",category:"Measurement",modality:"HCS",tags:["3D","mesh","morphology"],input_types:{},output_types:{},docs_link:"https://github.com/fmi-basel/gliberal-scMultipleX",docs_info:`### Purpose
- Extracts detailed **shape features** from 3D meshes, including volume, surface area, solidity, concavity, and aspect ratio.
- Optionally calculates **Gaussian curvature** for mesh surfaces and **spherical harmonics** to decompose mesh geometry.
- Outputs feature tables, curvature meshes, and optional harmonic-reconstructed meshes.

### Outputs
1. A **feature table** with extracted mesh measurements, including:
   - Volume, surface area, aspect ratio, concavity, normalized surface area-to-volume ratio, and more.
2. Optional **spherical harmonic coefficients** and reconstruction error (MSE), saved as a separate table.
3. Optional **reconstructed meshes** from spherical harmonics saved as \`.stl\`.
4. Optional **Gaussian curvature meshes** saved as \`.vtp\` files in a new \`curvature\` folder.
5. Optional **convex hull** and **bounding box** meshes saved as \`.vtp\` files.

### Limitations
- Requires pre-existing **.stl meshes** within the Zarr structure (e.g., generated by the **Surface Mesh Multiscale** task).
- Mesh files must match the **object labels** specified in the ROI table.
- Computational cost increases when enabling **Gaussian curvature** or **spherical harmonics** calculations.
- Mesh quality and accuracy depend on the input segmentation and mesh generation parameters.
`,type:"compound",authors:"Nicole Repina, Enrico Tagliavini, Tim-Oliver Buchholz, Joel Luethi",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/fmi-basel/gliberal-scMultipleX/releases/download/v0.8.12/scmultiplex-0.8.12-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file, with package extras \`fractal-tasks\`

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/fmi-basel/gliberal-scMultipleX/releases/download/v0.8.12/scmultiplex-0.8.12-py3-none-any.whl)
2. Run \`pip install "scmultiplex-0.8.12-py3-none-any.whl[fractal-tasks]"\`
`},{version:"0.8.12",name:"scMultiplex Feature Measurements",category:"Measurement",modality:null,tags:["regionprops","morphology","intensity"],input_types:{},output_types:{},docs_link:"https://github.com/fmi-basel/gliberal-scMultipleX",docs_info:`### Purpose
- **Measures intensity and morphology features** from existing segmentation images in an OME-Zarr dataset.
- Computes advanced 3D morphology metrics, including surface area, using extended \`regionprops\` measurements.
- Supports both intensity-based and morphology-only measurements:
   - If no input intensity channels are provided, the task calculates morphology features only.
   - For intensity measurements, channels can be specified individually, allowing flexibility across different image inputs.
- Enables **measurements within masked objects** (e.g., measuring nuclei properties within organoids) by specifying an \`input_ROI_table\` that defines parent regions, such as organoid ROIs.

### Limitations
- Currently tested only on image data in the **CZYX** format.
- Measurement accuracy and performance may depend on the spacing and resolution of input images.
- Does not support measurements at lower resolutions (e.g., beyond level 0).
`,type:"parallel",authors:"Nicole Repina, Enrico Tagliavini, Tim-Oliver Buchholz, Joel Luethi",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/fmi-basel/gliberal-scMultipleX/releases/download/v0.8.12/scmultiplex-0.8.12-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file, with package extras \`fractal-tasks\`

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/fmi-basel/gliberal-scMultipleX/releases/download/v0.8.12/scmultiplex-0.8.12-py3-none-any.whl)
2. Run \`pip install "scmultiplex-0.8.12-py3-none-any.whl[fractal-tasks]"\`
`},{version:"0.8.12",name:"scMultiplex Expand Labels",category:"Image Processing",modality:null,tags:["2D","3D"],input_types:{},output_types:{},docs_link:"https://github.com/fmi-basel/gliberal-scMultipleX",docs_info:`### Purpose
- Expands segmented **labels** in 2D or 3D images **without overlap**.
- Supports expansion by a fixed pixel distance or dynamically based on **label size**.
- Optionally masks expanded labels using **parent objects** to prevent spillover.
- Outputs an expanded label image and preserves non-overlapping object boundaries.

### Outputs
- A new **expanded label image** saved with an \`_expanded\` suffix.

### Limitations
- If masking by parent is enabled, the parent object label image must be provided.
- Expansion beyond object boundaries may be clipped, depending on the surrounding labels and image dimensions.
`,type:"parallel",authors:"Nicole Repina, Enrico Tagliavini, Tim-Oliver Buchholz, Joel Luethi",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/fmi-basel/gliberal-scMultipleX/releases/download/v0.8.12/scmultiplex-0.8.12-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file, with package extras \`fractal-tasks\`

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/fmi-basel/gliberal-scMultipleX/releases/download/v0.8.12/scmultiplex-0.8.12-py3-none-any.whl)
2. Run \`pip install "scmultiplex-0.8.12-py3-none-any.whl[fractal-tasks]"\`
`},{version:"0.8.12",name:"scMultiplex Calculate Z-Illumination Correction",category:"Image Processing",modality:"HCS",tags:["3D","illumination correction"],input_types:{z_illum_corrected:!1,is_3D:!0},output_types:{},docs_link:"https://github.com/fmi-basel/gliberal-scMultipleX",docs_info:`### Purpose
- Apply z-illumination correction per object in 3D image.
- Task takes as input user-defined channels and z-illumination correction tables,
    and applies correction to the channel images. The channel of the table is matched to the channel of the
    input image based on wavelength id or label. For multiplexing experiments, the user can specify which round(s) and
    channel(s) the z-illumination correction should be applied to.
- The z-illumination correction is applied per object, as different objects can have different z-illumination
    profiles. The object segmentation image is provided with "label_name" and corresponding "roi_table" task inputs.
    The label IDs of these objects must match the ID's that z-illumination calculation was run on (e.g. by running
    Calculate Object Linking).
- Processing proceeds as follows, with chunk-wise parallelization by Dask:
- (1) The input correction table (anndata) is used to generate a 3D correction array that matches the size and
    chunking of the label image. The correction array values are initialized to 1, and for regions where a segmented
    object exists, 1 is replaced with the value of the z-correction table for the object and z-position. If the
    correction table has been generated by the Calculate Z-Illumination Correction task, values of array are 0 to 1;
    values closer to 0 will have a stronger correction.
- (2) Background (user-specified per input channel) is subtracted from the channel image prior to correction. Task
    assumes that background is not object-dependent.
- (3) The channel image is divided element-wise by the correction array.
- (4) Background is added back.

### Outputs
- Output is the input zarr image array, with channels selected for correction replaced with the corrected version.
    Channels in zarr that were not selected but still present in zarr remain unmodified. The output zarr has data
    type "z_illum_corrected", even if some channels remain uncorrected.
- The user has option to overwrite input (=True), in which case the uncorrected zarr is deleted and replaced with
    the corrected zarr. If False, a new zarr is generated (warning - this causes data duplication) with the
    specified suffix added, output_group_suffix.
`,type:"compound",authors:"Nicole Repina, Enrico Tagliavini, Tim-Oliver Buchholz, Joel Luethi",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/fmi-basel/gliberal-scMultipleX/releases/download/v0.8.12/scmultiplex-0.8.12-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file, with package extras \`fractal-tasks\`

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/fmi-basel/gliberal-scMultipleX/releases/download/v0.8.12/scmultiplex-0.8.12-py3-none-any.whl)
2. Run \`pip install "scmultiplex-0.8.12-py3-none-any.whl[fractal-tasks]"\`
`},{version:"0.8.12",name:"scMultiplex Apply Z-Illumination Correction",category:"Image Processing",modality:"HCS",tags:["3D","illumination correction"],input_types:{z_illum_corrected:!1,is_3D:!0},output_types:{z_illum_corrected:!0,is_3D:!0},docs_link:"https://github.com/fmi-basel/gliberal-scMultipleX",docs_info:`### Purpose
- Apply z-illumination correction per object in 3D image.
- Task takes as input user-defined channels and z-illumination correction tables,
    and applies correction to the channel images. The channel of the table is matched to the channel of the
    input image based on wavelength id or label. For multiplexing experiments, the user can specify which round(s) and
    channel(s) the z-illumination correction should be applied to.
- The z-illumination correction is applied per object, as different objects can have different z-illumination
    profiles. The object segmentation image is provided with "label_name" and corresponding "roi_table" task inputs.
    The label IDs of these objects must match the ID's that z-illumination calculation was run on (e.g. by running
    Calculate Object Linking).
- Processing proceeds as follows, with chunk-wise parallelization by Dask:
- (1) The input correction table (anndata) is used to generate a 3D correction array that matches the size and
    chunking of the label image. The correction array values are initialized to 1, and for regions where a segmented
    object exists, 1 is replaced with the value of the z-correction table for the object and z-position. If the
    correction table has been generated by the Calculate Z-Illumination Correction task, values of array are 0 to 1;
    values closer to 0 will have a stronger correction.
- (2) Background (user-specified per input channel) is subtracted from the channel image prior to correction. Task
    assumes that background is not object-dependent.
- (3) The channel image is divided element-wise by the correction array.
- (4) Background is added back.

### Outputs
- Output is the input zarr image array, with channels selected for correction replaced with the corrected version.
    Channels in zarr that were not selected but still present in zarr remain unmodified. The output zarr has data
    type "z_illum_corrected", even if some channels remain uncorrected.
- The user has option to overwrite input (=True), in which case the uncorrected zarr is deleted and replaced with
    the corrected zarr. If False, a new zarr is generated (warning - this causes data duplication) with the
    specified suffix added, output_group_suffix.
`,type:"compound",authors:"Nicole Repina, Enrico Tagliavini, Tim-Oliver Buchholz, Joel Luethi",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/fmi-basel/gliberal-scMultipleX/releases/download/v0.8.12/scmultiplex-0.8.12-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file, with package extras \`fractal-tasks\`

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/fmi-basel/gliberal-scMultipleX/releases/download/v0.8.12/scmultiplex-0.8.12-py3-none-any.whl)
2. Run \`pip install "scmultiplex-0.8.12-py3-none-any.whl[fractal-tasks]"\`
`},{version:"0.8.12",name:"scMultiplex Fuse Touching Labels",category:"Image Processing",modality:null,tags:["2D"],input_types:{},output_types:{},docs_link:"https://github.com/fmi-basel/gliberal-scMultipleX",docs_info:`### Purpose
- Fuse touching labels in segmentation images, in 2D or 3D. Connected components are identified during labeling
    based on the connectivity argument. For a more detailed explanation of 1- or 2- connectivity, see documentation
    of skimage.measure.label() function. When set to None (default), full connectivity (ndim of input array) is used.

- Input is segmentation image with 0 value for background. Anything above 0 is assumed to be a labeled object.
    Touching labels are labeled in numerically increasing order starting from 1 to n, where n is the number of
    connected components (objects) identified.

- This task has been tested for fusion of 2D MIP segmentation. Since fusion must occur on the full well numpy
    array loaded into memory, performance may be poor for large 3D arrays.

### Outputs
- The fused label image is saved as a new label in zarr, with name {label_name_to_fuse}_fused.
- The new ROI table for the fused label image is saved as a masking ROI table, with name
    {label_name_to_fuse}_fused_ROI_table.
`,type:"parallel",authors:"Nicole Repina, Enrico Tagliavini, Tim-Oliver Buchholz, Joel Luethi",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/fmi-basel/gliberal-scMultipleX/releases/download/v0.8.12/scmultiplex-0.8.12-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file, with package extras \`fractal-tasks\`

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/fmi-basel/gliberal-scMultipleX/releases/download/v0.8.12/scmultiplex-0.8.12-py3-none-any.whl)
2. Run \`pip install "scmultiplex-0.8.12-py3-none-any.whl[fractal-tasks]"\`
`},{version:"0.8.12",name:"Convert 3D Segmentation to MIP",category:null,modality:null,tags:["Mixed modality","3D to 2D workflows"],input_types:{is_3D:!0},output_types:{is_3D:!1},docs_link:"https://github.com/fmi-basel/gliberal-scMultipleX",docs_info:`### Purpose
- Convert 3D segmentations into 2D maximum intensity projection (MIP) segmentations
- Creates MIP along z axis
- Useful for generating 2D MIP for multiplexed registration

### Outputs
- A new **MIP label image** saved as a label in the \`_mip\` 2D zarr.
- A new **masking ROI table** saved as \`{new_label_name}_ROI_table\` in the 2D zarr.

### Limitations
- If multiple labels overlap along z, they are collapsed into a single value corresponding to the higher label id number (max) of the labels.
`,type:"parallel",authors:"Nicole Repina, Enrico Tagliavini, Tim-Oliver Buchholz, Joel Luethi",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/fmi-basel/gliberal-scMultipleX/releases/download/v0.8.12/scmultiplex-0.8.12-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file, with package extras \`fractal-tasks\`

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/fmi-basel/gliberal-scMultipleX/releases/download/v0.8.12/scmultiplex-0.8.12-py3-none-any.whl)
2. Run \`pip install "scmultiplex-0.8.12-py3-none-any.whl[fractal-tasks]"\`
`},{version:"0.8.12",name:"Build Label Image",category:"Image Processing",modality:null,tags:["Mixed modality"],input_types:{},output_types:{},docs_link:"https://github.com/fmi-basel/gliberal-scMultipleX",docs_info:`### Purpose
- Clean up incomplete label image on disk
- Build pyramid structure on disk for label image
- Make masking ROI table based on label image
- This is useful if a segmentation task was run but failed with OoM error at pyramid building step.
- Works on both 2D and 3D zarr arrays

### Outputs
- Pyramid structure for label image (optional), matching chunking and number of levels of parent zarr array
- Masking ROI table (optional)

### Limitations
- Only works for label images, not image arrays
`,type:"parallel",authors:"Nicole Repina, Enrico Tagliavini, Tim-Oliver Buchholz, Joel Luethi",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/fmi-basel/gliberal-scMultipleX/releases/download/v0.8.12/scmultiplex-0.8.12-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file, with package extras \`fractal-tasks\`

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/fmi-basel/gliberal-scMultipleX/releases/download/v0.8.12/scmultiplex-0.8.12-py3-none-any.whl)
2. Run \`pip install "scmultiplex-0.8.12-py3-none-any.whl[fractal-tasks]"\`
`}]}]]];function gi(i){const e=[];for(const[n,t]of i){const s=[];for(const o of t)for(const r of o.task_list){const p=bi(o,r);let f=!1;for(const m of s)if(m.taskVersions.find(b=>b.task_name===r.name)){m.taskVersions.push(p),f=!0;break}f||s.push({selectedVersion:o.version||"",taskVersions:[p]})}e.push({pkg_name:n,tasks:s})}return e}function bi(i,e){return{pkg_name:i.pkg_name,task_id:e.id,task_name:e.name,version:i.version||"",category:e.category,modality:e.modality,authors:e.authors,tags:e.tags,input_types:e.input_types,docs_info:e.docs_info||"",docs_link:e.docs_link,install_instructions:e.install_instructions}}var _i=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yi(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Pa={exports:{}};(function(i,e){(function(n,t){i.exports=t()})(_i,function(){class n{constructor(a){a||(a={}),this.main=a.main||"ss-main",this.placeholder=a.placeholder||"ss-placeholder",this.values=a.values||"ss-values",this.single=a.single||"ss-single",this.max=a.max||"ss-max",this.value=a.value||"ss-value",this.valueText=a.valueText||"ss-value-text",this.valueDelete=a.valueDelete||"ss-value-delete",this.valueOut=a.valueOut||"ss-value-out",this.deselect=a.deselect||"ss-deselect",this.deselectPath=a.deselectPath||"M10,10 L90,90 M10,90 L90,10",this.arrow=a.arrow||"ss-arrow",this.arrowClose=a.arrowClose||"M10,30 L50,70 L90,30",this.arrowOpen=a.arrowOpen||"M10,70 L50,30 L90,70",this.content=a.content||"ss-content",this.openAbove=a.openAbove||"ss-open-above",this.openBelow=a.openBelow||"ss-open-below",this.search=a.search||"ss-search",this.searchHighlighter=a.searchHighlighter||"ss-search-highlight",this.searching=a.searching||"ss-searching",this.addable=a.addable||"ss-addable",this.addablePath=a.addablePath||"M50,10 L50,90 M10,50 L90,50",this.list=a.list||"ss-list",this.optgroup=a.optgroup||"ss-optgroup",this.optgroupLabel=a.optgroupLabel||"ss-optgroup-label",this.optgroupLabelText=a.optgroupLabelText||"ss-optgroup-label-text",this.optgroupActions=a.optgroupActions||"ss-optgroup-actions",this.optgroupSelectAll=a.optgroupSelectAll||"ss-selectall",this.optgroupSelectAllBox=a.optgroupSelectAllBox||"M60,10 L10,10 L10,90 L90,90 L90,50",this.optgroupSelectAllCheck=a.optgroupSelectAllCheck||"M30,45 L50,70 L90,10",this.optgroupClosable=a.optgroupClosable||"ss-closable",this.option=a.option||"ss-option",this.optionDelete=a.optionDelete||"M10,10 L90,90 M10,90 L90,10",this.highlighted=a.highlighted||"ss-highlighted",this.open=a.open||"ss-open",this.close=a.close||"ss-close",this.selected=a.selected||"ss-selected",this.error=a.error||"ss-error",this.disabled=a.disabled||"ss-disabled",this.hide=a.hide||"ss-hide"}}function t(){return Math.random().toString(36).substring(2,10)}function s(E,a){function l(h,d){return d&&h&&h.classList&&h.classList.contains(d)||d&&h&&h.dataset&&h.dataset.id&&h.dataset.id===a?h:null}function c(h,d){return!h||h===document?null:l(h,d)?h:c(h.parentNode,d)}return l(E,a)||c(E,a)}function o(E,a=50,l=!1){let c;return function(...h){const d=self,g=()=>{c=null,l||E.apply(d,h)},y=l&&!c;clearTimeout(c),c=setTimeout(g,a),y&&E.apply(d,h)}}function r(E,a){return JSON.stringify(E)===JSON.stringify(a)}function p(E){const a=E.replace(/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g,l=>"-"+l.toLowerCase());return E[0]===E[0].toUpperCase()?a.substring(1):a}class f{constructor(a){if(this.id=!a.id||a.id===""?t():a.id,this.label=a.label||"",this.selectAll=a.selectAll===void 0?!1:a.selectAll,this.selectAllText=a.selectAllText||"Select All",this.closable=a.closable||"off",this.options=[],a.options)for(const l of a.options)this.options.push(new m(l))}}class m{constructor(a){this.id=!a.id||a.id===""?t():a.id,this.value=a.value===void 0?a.text:a.value,this.text=a.text||"",this.html=a.html||"",this.selected=a.selected!==void 0?a.selected:!1,this.display=a.display!==void 0?a.display:!0,this.disabled=a.disabled!==void 0?a.disabled:!1,this.mandatory=a.mandatory!==void 0?a.mandatory:!1,this.placeholder=a.placeholder!==void 0?a.placeholder:!1,this.class=a.class||"",this.style=a.style||"",this.data=a.data||{}}}class b{constructor(a,l){this.selectType="single",this.data=[],this.selectedOrder=[],this.selectType=a,this.setData(l)}validateDataArray(a){if(!Array.isArray(a))return new Error("Data must be an array");for(let l of a)if(l instanceof f||"label"in l){if(!("label"in l))return new Error("Optgroup must have a label");if("options"in l&&l.options)for(let c of l.options){const h=this.validateOption(c);if(h)return h}}else if(l instanceof m||"text"in l){const c=this.validateOption(l);if(c)return c}else return new Error("Data object must be a valid optgroup or option");return null}validateOption(a){return"text"in a?null:new Error("Option must have a text")}partialToFullData(a){let l=[];return a.forEach(c=>{if(c instanceof f||"label"in c){let h=[];"options"in c&&c.options&&c.options.forEach(d=>{h.push(new m(d))}),h.length>0&&l.push(new f(c))}(c instanceof m||"text"in c)&&l.push(new m(c))}),l}setData(a){this.data=this.partialToFullData(a),this.selectType==="single"&&this.setSelectedBy("id",this.getSelected())}getData(){return this.filter(null,!0)}getDataOptions(){return this.filter(null,!1)}addOption(a,l=!1){if(l){let c=[new m(a)];this.setData(c.concat(this.getData()))}else this.setData(this.getData().concat(new m(a)))}setSelectedBy(a,l){let c=null,h=!1;const d=[];for(let y of this.data){if(y instanceof f)for(let C of y.options)c||(c=C),C.selected=h?!1:l.includes(C[a]),C.selected&&(d.push(C),this.selectType==="single"&&(h=!0));y instanceof m&&(c||(c=y),y.selected=h?!1:l.includes(y[a]),y.selected&&(d.push(y),this.selectType==="single"&&(h=!0)))}this.selectType==="single"&&c&&!h&&(c.selected=!0,d.push(c));const g=l.map(y=>{var C;return((C=d.find(R=>R[a]===y))===null||C===void 0?void 0:C.id)||""});this.selectedOrder=g}getSelected(){return this.getSelectedOptions().map(a=>a.id)}getSelectedValues(){return this.getSelectedOptions().map(a=>a.value)}getSelectedOptions(){return this.filter(a=>a.selected,!1)}getOptgroupByID(a){for(let l of this.data)if(l instanceof f&&l.id===a)return l;return null}getOptionByID(a){let l=this.filter(c=>c.id===a,!1);return l.length?l[0]:null}getSelectType(){return this.selectType}getFirstOption(){let a=null;for(let l of this.data)if(l instanceof f?a=l.options[0]:l instanceof m&&(a=l),a)break;return a}search(a,l){return a=a.trim(),a===""?this.getData():this.filter(c=>l(c,a),!0)}filter(a,l){const c=[];return this.data.forEach(h=>{if(h instanceof f){let d=[];if(h.options.forEach(g=>{(!a||a(g))&&(l?d.push(new m(g)):c.push(new m(g)))}),d.length>0){let g=new f(h);g.options=d,c.push(g)}}h instanceof m&&(!a||a(h))&&c.push(new m(h))}),c}selectedOrderOptions(a){const l=[];return this.selectedOrder.forEach(c=>{const h=a.find(d=>d.id===c);h&&l.push(h)}),a.forEach(c=>{let h=!1;l.forEach(d=>{if(c.id===d.id){h=!0;return}}),h||l.push(c)}),l}}class v{constructor(a,l,c,h){this.store=c,this.settings=a,this.classes=l,this.callbacks=h,this.main=this.mainDiv(),this.content=this.contentDiv(),this.updateClassStyles(),this.updateAriaAttributes(),this.settings.contentLocation&&this.settings.contentLocation.appendChild(this.content.main)}enable(){this.main.main.classList.remove(this.classes.disabled),this.content.search.input.disabled=!1}disable(){this.main.main.classList.add(this.classes.disabled),this.content.search.input.disabled=!0}open(){this.main.arrow.path.setAttribute("d",this.classes.arrowOpen),this.main.main.classList.add(this.settings.openPosition==="up"?this.classes.openAbove:this.classes.openBelow),this.main.main.setAttribute("aria-expanded","true"),this.moveContent();const a=this.store.getSelectedOptions();if(a.length){const l=a[a.length-1].id,c=this.content.list.querySelector('[data-id="'+l+'"]');c&&this.ensureElementInView(this.content.list,c)}}close(){this.main.main.classList.remove(this.classes.openAbove),this.main.main.classList.remove(this.classes.openBelow),this.main.main.setAttribute("aria-expanded","false"),this.content.main.classList.remove(this.classes.openAbove),this.content.main.classList.remove(this.classes.openBelow),this.main.arrow.path.setAttribute("d",this.classes.arrowClose)}updateClassStyles(){if(this.main.main.className="",this.main.main.removeAttribute("style"),this.content.main.className="",this.content.main.removeAttribute("style"),this.main.main.classList.add(this.classes.main),this.content.main.classList.add(this.classes.content),this.settings.style!==""&&(this.main.main.style.cssText=this.settings.style,this.content.main.style.cssText=this.settings.style),this.settings.class.length)for(const a of this.settings.class)a.trim()!==""&&(this.main.main.classList.add(a.trim()),this.content.main.classList.add(a.trim()));(this.settings.contentPosition==="relative"||this.settings.contentPosition==="fixed")&&this.content.main.classList.add("ss-"+this.settings.contentPosition)}updateAriaAttributes(){this.main.main.role="combobox",this.main.main.setAttribute("aria-haspopup","listbox"),this.main.main.setAttribute("aria-controls",this.content.main.id),this.main.main.setAttribute("aria-expanded","false"),this.content.main.setAttribute("role","listbox")}mainDiv(){var a;const l=document.createElement("div");l.dataset.id=this.settings.id,l.setAttribute("aria-label",this.settings.ariaLabel),l.tabIndex=0,l.onkeydown=M=>{switch(M.key){case"ArrowUp":case"ArrowDown":return this.callbacks.open(),M.key==="ArrowDown"?this.highlight("down"):this.highlight("up"),!1;case"Tab":return this.callbacks.close(),!0;case"Enter":case" ":this.callbacks.open();const Z=this.content.list.querySelector("."+this.classes.highlighted);return Z&&Z.click(),!1;case"Escape":return this.callbacks.close(),!1}return M.key.length===1&&this.callbacks.open(),!0},l.onclick=M=>{this.settings.disabled||(this.settings.isOpen?this.callbacks.close():this.callbacks.open())};const c=document.createElement("div");c.classList.add(this.classes.values),l.appendChild(c);const h=document.createElement("div");h.classList.add(this.classes.deselect);const d=(a=this.store)===null||a===void 0?void 0:a.getSelectedOptions();!this.settings.allowDeselect||this.settings.isMultiple&&d&&d.length<=0?h.classList.add(this.classes.hide):h.classList.remove(this.classes.hide),h.onclick=M=>{if(M.stopPropagation(),this.settings.disabled)return;let Z=!0;const F=this.store.getSelectedOptions(),W=[];if(this.callbacks.beforeChange&&(Z=this.callbacks.beforeChange(W,F)===!0),Z){if(this.settings.isMultiple)this.callbacks.setSelected([],!1),this.updateDeselectAll();else{const K=this.store.getFirstOption(),te=K?K.id:"";this.callbacks.setSelected(te,!1)}this.settings.closeOnSelect&&this.callbacks.close(),this.callbacks.afterChange&&this.callbacks.afterChange(this.store.getSelectedOptions())}};const g=document.createElementNS("http://www.w3.org/2000/svg","svg");g.setAttribute("viewBox","0 0 100 100");const y=document.createElementNS("http://www.w3.org/2000/svg","path");y.setAttribute("d",this.classes.deselectPath),g.appendChild(y),h.appendChild(g),l.appendChild(h);const C=document.createElementNS("http://www.w3.org/2000/svg","svg");C.classList.add(this.classes.arrow),C.setAttribute("viewBox","0 0 100 100");const R=document.createElementNS("http://www.w3.org/2000/svg","path");return R.setAttribute("d",this.classes.arrowClose),this.settings.alwaysOpen&&C.classList.add(this.classes.hide),C.appendChild(R),l.appendChild(C),{main:l,values:c,deselect:{main:h,svg:g,path:y},arrow:{main:C,path:R}}}mainFocus(a){a!=="click"&&this.main.main.focus({preventScroll:!0})}placeholder(){const a=this.store.filter(h=>h.placeholder,!1);let l=this.settings.placeholderText;a.length&&(a[0].html!==""?l=a[0].html:a[0].text!==""&&(l=a[0].text));const c=document.createElement("div");return c.classList.add(this.classes.placeholder),c.innerHTML=l,c}renderValues(){if(!this.settings.isMultiple){this.renderSingleValue();return}this.renderMultipleValues(),this.updateDeselectAll()}renderSingleValue(){const a=this.store.filter(c=>c.selected&&!c.placeholder,!1),l=a.length>0?a[0]:null;if(!l)this.main.values.innerHTML=this.placeholder().outerHTML;else{const c=document.createElement("div");c.classList.add(this.classes.single),l.html?c.innerHTML=l.html:c.innerText=l.text,this.main.values.innerHTML=c.outerHTML}!this.settings.allowDeselect||!a.length?this.main.deselect.main.classList.add(this.classes.hide):this.main.deselect.main.classList.remove(this.classes.hide)}renderMultipleValues(){let a=this.main.values.childNodes,l=this.store.filter(h=>h.selected&&h.display,!1);if(l.length===0){this.main.values.innerHTML=this.placeholder().outerHTML;return}else{const h=this.main.values.querySelector("."+this.classes.placeholder);h&&h.remove()}if(l.length>this.settings.maxValuesShown){const h=document.createElement("div");h.classList.add(this.classes.max),h.textContent=this.settings.maxValuesMessage.replace("{number}",l.length.toString()),this.main.values.innerHTML=h.outerHTML;return}else{const h=this.main.values.querySelector("."+this.classes.max);h&&h.remove()}this.settings.keepOrder&&(l=this.store.selectedOrderOptions(l));let c=[];for(let h=0;h<a.length;h++){const d=a[h],g=d.getAttribute("data-id");g&&(l.filter(C=>C.id===g,!1).length||c.push(d))}for(const h of c)h.classList.add(this.classes.valueOut),setTimeout(()=>{this.main.values.hasChildNodes()&&this.main.values.contains(h)&&this.main.values.removeChild(h)},100);a=this.main.values.childNodes;for(let h=0;h<l.length;h++){let d=!0;for(let g=0;g<a.length;g++)l[h].id===String(a[g].dataset.id)&&(d=!1);d&&(this.settings.keepOrder?this.main.values.appendChild(this.multipleValue(l[h])):a.length===0?this.main.values.appendChild(this.multipleValue(l[h])):h===0?this.main.values.insertBefore(this.multipleValue(l[h]),a[h]):a[h-1].insertAdjacentElement("afterend",this.multipleValue(l[h])))}}multipleValue(a){const l=document.createElement("div");l.classList.add(this.classes.value),l.dataset.id=a.id;const c=document.createElement("div");if(c.classList.add(this.classes.valueText),c.textContent=a.text,l.appendChild(c),!a.mandatory){const h=document.createElement("div");h.classList.add(this.classes.valueDelete),h.onclick=y=>{if(y.preventDefault(),y.stopPropagation(),this.settings.disabled)return;let C=!0;const R=this.store.getSelectedOptions(),M=R.filter(Z=>Z.selected&&Z.id!==a.id,!0);if(!(this.settings.minSelected&&M.length<this.settings.minSelected)&&(this.callbacks.beforeChange&&(C=this.callbacks.beforeChange(M,R)===!0),C)){let Z=[];for(const F of M){if(F instanceof f)for(const W of F.options)Z.push(W.id);F instanceof m&&Z.push(F.id)}this.callbacks.setSelected(Z,!1),this.settings.closeOnSelect&&this.callbacks.close(),this.callbacks.afterChange&&this.callbacks.afterChange(M),this.updateDeselectAll()}};const d=document.createElementNS("http://www.w3.org/2000/svg","svg");d.setAttribute("viewBox","0 0 100 100");const g=document.createElementNS("http://www.w3.org/2000/svg","path");g.setAttribute("d",this.classes.optionDelete),d.appendChild(g),h.appendChild(d),l.appendChild(h)}return l}contentDiv(){const a=document.createElement("div");a.dataset.id=this.settings.id;const l=this.searchDiv();a.appendChild(l.main);const c=this.listDiv();return a.appendChild(c),{main:a,search:l,list:c}}moveContent(){if(this.settings.contentPosition==="relative"){this.moveContentBelow();return}if(this.settings.openPosition==="down"){this.moveContentBelow();return}else if(this.settings.openPosition==="up"){this.moveContentAbove();return}this.putContent()==="up"?this.moveContentAbove():this.moveContentBelow()}searchDiv(){const a=document.createElement("div"),l=document.createElement("input"),c=document.createElement("div");a.classList.add(this.classes.search);const h={main:a,input:l};if(this.settings.showSearch||(a.classList.add(this.classes.hide),l.readOnly=!0),l.type="search",l.placeholder=this.settings.searchPlaceholder,l.tabIndex=-1,l.setAttribute("aria-label",this.settings.searchPlaceholder),l.setAttribute("autocapitalize","off"),l.setAttribute("autocomplete","off"),l.setAttribute("autocorrect","off"),l.oninput=o(d=>{this.callbacks.search(d.target.value)},100),l.onkeydown=d=>{switch(d.key){case"ArrowUp":case"ArrowDown":return d.key==="ArrowDown"?this.highlight("down"):this.highlight("up"),!1;case"Tab":return this.callbacks.close(),!0;case"Escape":return this.callbacks.close(),!1;case" ":const g=this.content.list.querySelector("."+this.classes.highlighted);return g?(g.click(),!1):!0;case"Enter":if(this.callbacks.addable)return c.click(),!1;{const y=this.content.list.querySelector("."+this.classes.highlighted);if(y)return y.click(),!1}return!0}return!0},a.appendChild(l),this.callbacks.addable){c.classList.add(this.classes.addable);const d=document.createElementNS("http://www.w3.org/2000/svg","svg");d.setAttribute("viewBox","0 0 100 100");const g=document.createElementNS("http://www.w3.org/2000/svg","path");g.setAttribute("d",this.classes.addablePath),d.appendChild(g),c.appendChild(d),c.onclick=y=>{if(y.preventDefault(),y.stopPropagation(),!this.callbacks.addable)return;const C=this.content.search.input.value.trim();if(C===""){this.content.search.input.focus();return}const R=Z=>{let F=new m(Z);if(this.callbacks.addOption(F),this.settings.isMultiple){let W=this.store.getSelected();W.push(F.id),this.callbacks.setSelected(W,!0)}else this.callbacks.setSelected([F.id],!0);this.callbacks.search(""),this.settings.closeOnSelect&&setTimeout(()=>{this.callbacks.close()},100)},M=this.callbacks.addable(C);M===!1||M===void 0||M===null||(M instanceof Promise?M.then(Z=>{typeof Z=="string"?R({text:Z,value:Z}):M instanceof Error?this.renderError(M.message):R(Z)}):typeof M=="string"?R({text:M,value:M}):M instanceof Error?this.renderError(M.message):R(M))},a.appendChild(c),h.addable={main:c,svg:d,path:g}}return h}searchFocus(){this.content.search.input.focus()}getOptions(a=!1,l=!1,c=!1){let h="."+this.classes.option;return a&&(h+=":not(."+this.classes.placeholder+")"),l&&(h+=":not(."+this.classes.disabled+")"),c&&(h+=":not(."+this.classes.hide+")"),Array.from(this.content.list.querySelectorAll(h))}highlight(a){const l=this.getOptions(!0,!0,!0);if(l.length===0)return;if(l.length===1&&!l[0].classList.contains(this.classes.highlighted)){l[0].classList.add(this.classes.highlighted);return}let c=!1;for(const h of l)h.classList.contains(this.classes.highlighted)&&(c=!0);if(!c){for(const h of l)if(h.classList.contains(this.classes.selected)){h.classList.add(this.classes.highlighted);break}}for(let h=0;h<l.length;h++)if(l[h].classList.contains(this.classes.highlighted)){const d=l[h];d.classList.remove(this.classes.highlighted);const g=d.parentElement;if(g&&g.classList.contains(this.classes.open)){const R=g.querySelector("."+this.classes.optgroupLabel);R&&R.click()}let y=l[a==="down"?h+1<l.length?h+1:0:h-1>=0?h-1:l.length-1];y.classList.add(this.classes.highlighted),this.ensureElementInView(this.content.list,y);const C=y.parentElement;if(C&&C.classList.contains(this.classes.close)){const R=C.querySelector("."+this.classes.optgroupLabel);R&&R.click()}return}l[a==="down"?0:l.length-1].classList.add(this.classes.highlighted),this.ensureElementInView(this.content.list,l[a==="down"?0:l.length-1])}listDiv(){const a=document.createElement("div");return a.classList.add(this.classes.list),a}renderError(a){this.content.list.innerHTML="";const l=document.createElement("div");l.classList.add(this.classes.error),l.textContent=a,this.content.list.appendChild(l)}renderSearching(){this.content.list.innerHTML="";const a=document.createElement("div");a.classList.add(this.classes.searching),a.textContent=this.settings.searchingText,this.content.list.appendChild(a)}renderOptions(a){if(this.content.list.innerHTML="",a.length===0){const l=document.createElement("div");l.classList.add(this.classes.search),this.callbacks.addable?l.innerHTML=this.settings.addableText.replace("{value}",this.content.search.input.value):l.innerHTML=this.settings.searchText,this.content.list.appendChild(l);return}this.settings.allowDeselect&&!this.settings.isMultiple&&(this.store.filter(c=>c.placeholder,!1).length||this.store.addOption(new m({text:"",value:"",selected:!1,placeholder:!0}),!0));for(const l of a){if(l instanceof f){const c=document.createElement("div");c.classList.add(this.classes.optgroup);const h=document.createElement("div");h.classList.add(this.classes.optgroupLabel),c.appendChild(h);const d=document.createElement("div");d.classList.add(this.classes.optgroupLabelText),d.textContent=l.label,h.appendChild(d);const g=document.createElement("div");if(g.classList.add(this.classes.optgroupActions),h.appendChild(g),this.settings.isMultiple&&l.selectAll){const y=document.createElement("div");y.classList.add(this.classes.optgroupSelectAll);let C=!0;for(const W of l.options)if(!W.selected){C=!1;break}C&&y.classList.add(this.classes.selected);const R=document.createElement("span");R.textContent=l.selectAllText,y.appendChild(R);const M=document.createElementNS("http://www.w3.org/2000/svg","svg");M.setAttribute("viewBox","0 0 100 100"),y.appendChild(M);const Z=document.createElementNS("http://www.w3.org/2000/svg","path");Z.setAttribute("d",this.classes.optgroupSelectAllBox),M.appendChild(Z);const F=document.createElementNS("http://www.w3.org/2000/svg","path");F.setAttribute("d",this.classes.optgroupSelectAllCheck),M.appendChild(F),y.addEventListener("click",W=>{W.preventDefault(),W.stopPropagation();const K=this.store.getSelected();if(C){const te=K.filter(me=>{for(const ke of l.options)if(me===ke.id)return!1;return!0});this.callbacks.setSelected(te,!0);return}else{const te=K.concat(l.options.map(me=>me.id));for(const me of l.options)this.store.getOptionByID(me.id)||this.callbacks.addOption(me);this.callbacks.setSelected(te,!0);return}}),g.appendChild(y)}if(l.closable!=="off"){const y=document.createElement("div");y.classList.add(this.classes.optgroupClosable);const C=document.createElementNS("http://www.w3.org/2000/svg","svg");C.setAttribute("viewBox","0 0 100 100"),C.classList.add(this.classes.arrow),y.appendChild(C);const R=document.createElementNS("http://www.w3.org/2000/svg","path");C.appendChild(R),l.options.some(M=>M.selected)||this.content.search.input.value.trim()!==""?(y.classList.add(this.classes.open),R.setAttribute("d",this.classes.arrowOpen)):l.closable==="open"?(c.classList.add(this.classes.open),R.setAttribute("d",this.classes.arrowOpen)):l.closable==="close"&&(c.classList.add(this.classes.close),R.setAttribute("d",this.classes.arrowClose)),h.addEventListener("click",M=>{M.preventDefault(),M.stopPropagation(),c.classList.contains(this.classes.close)?(c.classList.remove(this.classes.close),c.classList.add(this.classes.open),R.setAttribute("d",this.classes.arrowOpen)):(c.classList.remove(this.classes.open),c.classList.add(this.classes.close),R.setAttribute("d",this.classes.arrowClose))}),g.appendChild(y)}c.appendChild(h);for(const y of l.options)c.appendChild(this.option(y));this.content.list.appendChild(c)}l instanceof m&&this.content.list.appendChild(this.option(l))}}option(a){if(a.placeholder){const c=document.createElement("div");return c.classList.add(this.classes.option),c.classList.add(this.classes.hide),c}const l=document.createElement("div");return l.dataset.id=a.id,l.classList.add(this.classes.option),l.setAttribute("role","option"),a.class&&a.class.split(" ").forEach(c=>{l.classList.add(c)}),a.style&&(l.style.cssText=a.style),this.settings.searchHighlight&&this.content.search.input.value.trim()!==""?l.innerHTML=this.highlightText(a.html!==""?a.html:a.text,this.content.search.input.value,this.classes.searchHighlighter):a.html!==""?l.innerHTML=a.html:l.textContent=a.text,this.settings.showOptionTooltips&&l.textContent&&l.setAttribute("title",l.textContent),a.display||l.classList.add(this.classes.hide),a.disabled&&l.classList.add(this.classes.disabled),a.selected&&this.settings.hideSelected&&l.classList.add(this.classes.hide),a.selected?(l.classList.add(this.classes.selected),l.setAttribute("aria-selected","true"),this.main.main.setAttribute("aria-activedescendant",l.id)):(l.classList.remove(this.classes.selected),l.setAttribute("aria-selected","false")),l.addEventListener("click",c=>{c.preventDefault(),c.stopPropagation();const h=this.store.getSelected(),d=c.currentTarget,g=String(d.dataset.id);if(a.disabled||a.selected&&!this.settings.allowDeselect||this.settings.isMultiple&&this.settings.maxSelected<=h.length&&!a.selected||this.settings.isMultiple&&this.settings.minSelected>=h.length&&a.selected)return;let y=!1;const C=this.store.getSelectedOptions();let R=[];this.settings.isMultiple&&(a.selected?R=C.filter(M=>M.id!==g):R=C.concat(a)),this.settings.isMultiple||(a.selected?R=[]:R=[a]),this.callbacks.beforeChange||(y=!0),this.callbacks.beforeChange&&(this.callbacks.beforeChange(R,C)===!1?y=!1:y=!0),y&&(this.store.getOptionByID(g)||this.callbacks.addOption(a),this.callbacks.setSelected(R.map(M=>M.id),!1),this.settings.closeOnSelect&&this.callbacks.close(),this.callbacks.afterChange&&this.callbacks.afterChange(R))}),l}destroy(){this.main.main.remove(),this.content.main.remove()}highlightText(a,l,c){let h=a;const d=new RegExp("(?![^<]*>)("+l.trim()+")(?![^<]*>[^<>]*</)","i");if(!a.match(d))return a;const g=a.match(d).index,y=g+a.match(d)[0].toString().length,C=a.substring(g,y);return h=h.replace(d,`<mark class="${c}">${C}</mark>`),h}moveContentAbove(){const a=this.main.main.offsetHeight,l=this.content.main.offsetHeight;this.main.main.classList.remove(this.classes.openBelow),this.main.main.classList.add(this.classes.openAbove),this.content.main.classList.remove(this.classes.openBelow),this.content.main.classList.add(this.classes.openAbove);const c=this.main.main.getBoundingClientRect();this.content.main.style.margin="-"+(a+l-1)+"px 0px 0px 0px",this.content.main.style.top=c.top+c.height+(this.settings.contentPosition==="fixed"?0:window.scrollY)+"px",this.content.main.style.left=c.left+(this.settings.contentPosition==="fixed"?0:window.scrollX)+"px",this.content.main.style.width=c.width+"px"}moveContentBelow(){this.main.main.classList.remove(this.classes.openAbove),this.main.main.classList.add(this.classes.openBelow),this.content.main.classList.remove(this.classes.openAbove),this.content.main.classList.add(this.classes.openBelow);const a=this.main.main.getBoundingClientRect();this.content.main.style.margin="-1px 0px 0px 0px",this.settings.contentPosition!=="relative"&&(this.content.main.style.top=a.top+a.height+(this.settings.contentPosition==="fixed"?0:window.scrollY)+"px",this.content.main.style.left=a.left+(this.settings.contentPosition==="fixed"?0:window.scrollX)+"px",this.content.main.style.width=a.width+"px")}ensureElementInView(a,l){const c=a.scrollTop+a.offsetTop,h=c+a.clientHeight,d=l.offsetTop,g=d+l.clientHeight;d<c?a.scrollTop-=c-d:g>h&&(a.scrollTop+=g-h)}putContent(){const a=this.main.main.offsetHeight,l=this.main.main.getBoundingClientRect(),c=this.content.main.offsetHeight;return window.innerHeight-(l.top+a)<=c&&l.top>c?"up":"down"}updateDeselectAll(){if(!this.store||!this.settings)return;const a=this.store.getSelectedOptions(),l=a&&a.length>0,c=this.settings.isMultiple,h=this.settings.allowDeselect,d=this.main.deselect.main,g=this.classes.hide;h&&!(c&&!l)?d.classList.remove(g):d.classList.add(g)}}class _{constructor(a){this.listen=!1,this.observer=null,this.select=a,this.valueChange=this.valueChange.bind(this),this.select.addEventListener("change",this.valueChange,{passive:!0}),this.observer=new MutationObserver(this.observeCall.bind(this)),this.changeListen(!0)}enable(){this.select.disabled=!1}disable(){this.select.disabled=!0}hideUI(){this.select.tabIndex=-1,this.select.style.display="none",this.select.setAttribute("aria-hidden","true")}showUI(){this.select.removeAttribute("tabindex"),this.select.style.display="",this.select.removeAttribute("aria-hidden")}changeListen(a){this.listen=a,a&&this.observer&&this.observer.observe(this.select,{subtree:!0,childList:!0,attributes:!0}),a||this.observer&&this.observer.disconnect()}valueChange(a){return this.listen&&this.onValueChange&&this.onValueChange(this.getSelectedOptions()),!0}observeCall(a){if(!this.listen)return;let l=!1,c=!1,h=!1;for(const d of a){if(d.target===this.select&&(d.attributeName==="disabled"&&(c=!0),d.attributeName==="class"&&(l=!0),d.type==="childList")){for(const g of d.addedNodes)if(g.nodeName==="OPTION"&&g.value===this.select.value){this.select.dispatchEvent(new Event("change"));break}h=!0}(d.target.nodeName==="OPTGROUP"||d.target.nodeName==="OPTION")&&(h=!0)}l&&this.onClassChange&&this.onClassChange(this.select.className.split(" ")),c&&this.onDisabledChange&&(this.changeListen(!1),this.onDisabledChange(this.select.disabled),this.changeListen(!0)),h&&this.onOptionsChange&&(this.changeListen(!1),this.onOptionsChange(this.getData()),this.changeListen(!0))}getData(){let a=[];const l=this.select.childNodes;for(const c of l)c.nodeName==="OPTGROUP"&&a.push(this.getDataFromOptgroup(c)),c.nodeName==="OPTION"&&a.push(this.getDataFromOption(c));return a}getDataFromOptgroup(a){let l={id:a.id,label:a.label,selectAll:a.dataset?a.dataset.selectall==="true":!1,selectAllText:a.dataset?a.dataset.selectalltext:"Select all",closable:a.dataset?a.dataset.closable:"off",options:[]};const c=a.childNodes;for(const h of c)h.nodeName==="OPTION"&&l.options.push(this.getDataFromOption(h));return l}getDataFromOption(a){return{id:a.id,value:a.value,text:a.text,html:a.dataset&&a.dataset.html?a.dataset.html:"",selected:a.selected,display:a.style.display!=="none",disabled:a.disabled,mandatory:a.dataset?a.dataset.mandatory==="true":!1,placeholder:a.dataset.placeholder==="true",class:a.className,style:a.style.cssText,data:a.dataset}}getSelectedOptions(){let a=[];const l=this.select.childNodes;for(const c of l){if(c.nodeName==="OPTGROUP"){const h=c.childNodes;for(const d of h)if(d.nodeName==="OPTION"){const g=d;g.selected&&a.push(this.getDataFromOption(g))}}if(c.nodeName==="OPTION"){const h=c;h.selected&&a.push(this.getDataFromOption(h))}}return a}getSelectedValues(){return this.getSelectedOptions().map(a=>a.value)}setSelected(a){this.changeListen(!1);const l=this.select.childNodes;for(const c of l){if(c.nodeName==="OPTGROUP"){const d=c.childNodes;for(const g of d)if(g.nodeName==="OPTION"){const y=g;y.selected=a.includes(y.id)}}if(c.nodeName==="OPTION"){const h=c;h.selected=a.includes(h.id)}}this.changeListen(!0)}setSelectedByValue(a){this.changeListen(!1);const l=this.select.childNodes;for(const c of l){if(c.nodeName==="OPTGROUP"){const d=c.childNodes;for(const g of d)if(g.nodeName==="OPTION"){const y=g;y.selected=a.includes(y.value)}}if(c.nodeName==="OPTION"){const h=c;h.selected=a.includes(h.value)}}this.changeListen(!0)}updateSelect(a,l,c){this.changeListen(!1),a&&(this.select.dataset.id=a),l&&(this.select.style.cssText=l),c&&(this.select.className="",c.forEach(h=>{h.trim()!==""&&this.select.classList.add(h.trim())})),this.changeListen(!0)}updateOptions(a){this.changeListen(!1),this.select.innerHTML="";for(const l of a)l instanceof f&&this.select.appendChild(this.createOptgroup(l)),l instanceof m&&this.select.appendChild(this.createOption(l));this.select.dispatchEvent(new Event("change",{bubbles:!0})),this.changeListen(!0)}createOptgroup(a){const l=document.createElement("optgroup");if(l.id=a.id,l.label=a.label,a.selectAll&&(l.dataset.selectAll="true"),a.closable!=="off"&&(l.dataset.closable=a.closable),a.options)for(const c of a.options)l.appendChild(this.createOption(c));return l}createOption(a){const l=document.createElement("option");return l.id=a.id,l.value=a.value,l.textContent=a.text,a.html!==""&&l.setAttribute("data-html",a.html),a.selected&&(l.selected=a.selected),a.disabled&&(l.disabled=!0),a.display||(l.style.display="none"),a.placeholder&&l.setAttribute("data-placeholder","true"),a.mandatory&&l.setAttribute("data-mandatory","true"),a.class&&a.class.split(" ").forEach(c=>{l.classList.add(c)}),a.data&&typeof a.data=="object"&&Object.keys(a.data).forEach(c=>{l.setAttribute("data-"+p(c),a.data[c])}),l}destroy(){this.changeListen(!1),this.select.removeEventListener("change",this.valueChange),this.observer&&(this.observer.disconnect(),this.observer=null),delete this.select.dataset.id,this.showUI()}}class A{constructor(a){this.id="",this.style="",this.class=[],this.isMultiple=!1,this.isOpen=!1,this.isFullOpen=!1,this.intervalMove=null,a||(a={}),this.id="ss-"+t(),this.style=a.style||"",this.class=a.class||[],this.disabled=a.disabled!==void 0?a.disabled:!1,this.alwaysOpen=a.alwaysOpen!==void 0?a.alwaysOpen:!1,this.showSearch=a.showSearch!==void 0?a.showSearch:!0,this.focusSearch=a.focusSearch!==void 0?a.focusSearch:!0,this.ariaLabel=a.ariaLabel||"Combobox",this.searchPlaceholder=a.searchPlaceholder||"Search",this.searchText=a.searchText||"No Results",this.searchingText=a.searchingText||"Searching...",this.searchHighlight=a.searchHighlight!==void 0?a.searchHighlight:!1,this.closeOnSelect=a.closeOnSelect!==void 0?a.closeOnSelect:!0,this.contentLocation=a.contentLocation||document.body,this.contentPosition=a.contentPosition||"absolute",this.openPosition=a.openPosition||"auto",this.placeholderText=a.placeholderText!==void 0?a.placeholderText:"Select Value",this.allowDeselect=a.allowDeselect!==void 0?a.allowDeselect:!1,this.hideSelected=a.hideSelected!==void 0?a.hideSelected:!1,this.keepOrder=a.keepOrder!==void 0?a.keepOrder:!1,this.showOptionTooltips=a.showOptionTooltips!==void 0?a.showOptionTooltips:!1,this.minSelected=a.minSelected||0,this.maxSelected=a.maxSelected||1e3,this.timeoutDelay=a.timeoutDelay||200,this.maxValuesShown=a.maxValuesShown||20,this.maxValuesMessage=a.maxValuesMessage||"{number} selected",this.addableText=a.addableText||'Press "Enter" to add {value}'}}class x{constructor(a){var l;if(this.events={search:void 0,searchFilter:(y,C)=>y.text.toLowerCase().indexOf(C.toLowerCase())!==-1,addable:void 0,beforeChange:void 0,afterChange:void 0,beforeOpen:void 0,afterOpen:void 0,beforeClose:void 0,afterClose:void 0},this.windowResize=o(()=>{!this.settings.isOpen&&!this.settings.isFullOpen||this.render.moveContent()}),this.windowScroll=o(()=>{!this.settings.isOpen&&!this.settings.isFullOpen||this.render.moveContent()}),this.documentClick=y=>{this.settings.isOpen&&y.target&&!s(y.target,this.settings.id)&&this.close(y.type)},this.windowVisibilityChange=()=>{document.hidden&&this.close()},this.selectEl=typeof a.select=="string"?document.querySelector(a.select):a.select,!this.selectEl){a.events&&a.events.error&&a.events.error(new Error("Could not find select element"));return}if(this.selectEl.tagName!=="SELECT"){a.events&&a.events.error&&a.events.error(new Error("Element isnt of type select"));return}this.selectEl.dataset.ssid&&this.destroy(),this.settings=new A(a.settings),this.cssClasses=new n(a.cssClasses);const c=["afterChange","beforeOpen","afterOpen","beforeClose","afterClose"];for(const y in a.events)a.events.hasOwnProperty(y)&&(c.indexOf(y)!==-1?this.events[y]=o(a.events[y],100):this.events[y]=a.events[y]);this.settings.disabled=!((l=a.settings)===null||l===void 0)&&l.disabled?a.settings.disabled:this.selectEl.disabled,this.settings.isMultiple=this.selectEl.multiple,this.settings.style=this.selectEl.style.cssText,this.settings.class=this.selectEl.className.split(" "),this.select=new _(this.selectEl),this.select.updateSelect(this.settings.id,this.settings.style,this.settings.class),this.select.hideUI(),this.select.onValueChange=y=>{this.setSelected(y.map(C=>C.id))},this.select.onClassChange=y=>{this.settings.class=y,this.render.updateClassStyles()},this.select.onDisabledChange=y=>{y?this.disable():this.enable()},this.select.onOptionsChange=y=>{this.setData(y)},this.store=new b(this.settings.isMultiple?"multiple":"single",a.data?a.data:this.select.getData()),a.data&&this.select.updateOptions(this.store.getData());const h={open:this.open.bind(this),close:this.close.bind(this),addable:this.events.addable?this.events.addable:void 0,setSelected:this.setSelected.bind(this),addOption:this.addOption.bind(this),search:this.search.bind(this),beforeChange:this.events.beforeChange,afterChange:this.events.afterChange};this.render=new v(this.settings,this.cssClasses,this.store,h),this.render.renderValues(),this.render.renderOptions(this.store.getData());const d=this.selectEl.getAttribute("aria-label"),g=this.selectEl.getAttribute("aria-labelledby");d?this.render.main.main.setAttribute("aria-label",d):g&&this.render.main.main.setAttribute("aria-labelledby",g),this.selectEl.parentNode&&this.selectEl.parentNode.insertBefore(this.render.main.main,this.selectEl.nextSibling),window.addEventListener("resize",this.windowResize,!1),this.settings.openPosition==="auto"&&window.addEventListener("scroll",this.windowScroll,!1),document.addEventListener("visibilitychange",this.windowVisibilityChange),this.settings.disabled&&this.disable(),this.settings.alwaysOpen&&this.open(),this.selectEl.slim=this}enable(){this.settings.disabled=!1,this.select.enable(),this.render.enable()}disable(){this.settings.disabled=!0,this.select.disable(),this.render.disable()}getData(){return this.store.getData()}setData(a){const l=this.store.getSelected(),c=this.store.validateDataArray(a);if(c){this.events.error&&this.events.error(c);return}this.store.setData(a);const h=this.store.getData();this.select.updateOptions(h),this.render.renderValues(),this.render.renderOptions(h),this.events.afterChange&&!r(l,this.store.getSelected())&&this.events.afterChange(this.store.getSelectedOptions())}getSelected(){let a=this.store.getSelectedOptions();return this.settings.keepOrder&&(a=this.store.selectedOrderOptions(a)),a.map(l=>l.value)}setSelected(a,l=!0){const c=this.store.getSelected(),h=this.store.getDataOptions();a=Array.isArray(a)?a:[a];const d=[];for(const y of a){if(h.find(C=>C.id==y)){d.push(y);continue}for(const C of h.filter(R=>R.value==y))d.push(C.id)}this.store.setSelectedBy("id",d);const g=this.store.getData();this.select.updateOptions(g),this.render.renderValues(),this.render.content.search.input.value!==""?this.search(this.render.content.search.input.value):this.render.renderOptions(g),l&&this.events.afterChange&&!r(c,this.store.getSelected())&&this.events.afterChange(this.store.getSelectedOptions())}addOption(a){const l=this.store.getSelected();this.store.getDataOptions().some(h=>{var d;return h.value===((d=a.value)!==null&&d!==void 0?d:a.text)})||this.store.addOption(a);const c=this.store.getData();this.select.updateOptions(c),this.render.renderValues(),this.render.renderOptions(c),this.events.afterChange&&!r(l,this.store.getSelected())&&this.events.afterChange(this.store.getSelectedOptions())}open(){this.settings.disabled||this.settings.isOpen||(this.events.beforeOpen&&this.events.beforeOpen(),this.render.open(),this.settings.showSearch&&this.settings.focusSearch&&this.render.searchFocus(),this.settings.isOpen=!0,setTimeout(()=>{this.events.afterOpen&&this.events.afterOpen(),this.settings.isOpen&&(this.settings.isFullOpen=!0),document.addEventListener("click",this.documentClick)},this.settings.timeoutDelay),this.settings.contentPosition==="absolute"&&(this.settings.intervalMove&&clearInterval(this.settings.intervalMove),this.settings.intervalMove=setInterval(this.render.moveContent.bind(this.render),500)))}close(a=null){!this.settings.isOpen||this.settings.alwaysOpen||(this.events.beforeClose&&this.events.beforeClose(),this.render.close(),this.render.content.search.input.value!==""&&this.search(""),this.render.mainFocus(a),this.settings.isOpen=!1,this.settings.isFullOpen=!1,setTimeout(()=>{this.events.afterClose&&this.events.afterClose(),document.removeEventListener("click",this.documentClick)},this.settings.timeoutDelay),this.settings.intervalMove&&clearInterval(this.settings.intervalMove))}search(a){if(this.render.content.search.input.value!==a&&(this.render.content.search.input.value=a),!this.events.search){this.render.renderOptions(a===""?this.store.getData():this.store.search(a,this.events.searchFilter));return}this.render.renderSearching();const l=this.events.search(a,this.store.getSelectedOptions());if(l instanceof Promise){l.then(c=>{this.render.renderOptions(this.store.partialToFullData(c))}).catch(c=>{this.render.renderError(typeof c=="string"?c:c.message)});return}else Array.isArray(l)?this.render.renderOptions(this.store.partialToFullData(l)):this.render.renderError("Search event must return a promise or an array of data")}destroy(){document.removeEventListener("click",this.documentClick),window.removeEventListener("resize",this.windowResize,!1),this.settings.openPosition==="auto"&&window.removeEventListener("scroll",this.windowScroll,!1),document.removeEventListener("visibilitychange",this.windowVisibilityChange),this.store.setData([]),this.render.destroy(),this.select.destroy()}}return x})})(Pa);var wi=Pa.exports;const ki=yi(wi);var vi=ae('<span class="badge rounded-pill coloured-badge text-dark"> </span>');function ra(i,e){xn(e,!0);let n;function t(f){return new n({lightness:.8,saturation:.95}).hex(f)}let s=Se(!1);ba(async()=>{n=(await ps(async()=>{const{default:f}=await import("../chunks/B-bOhdOb.js");return{default:f}},[],import.meta.url)).default,fe(s,!0)});var o=ca(),r=Ke(o);{var p=f=>{var m=vi(),b=N(m,!0);z(m),be(v=>{ks(m,`background-color: ${v??""}`),Te(b,e.value)},[()=>t(e.value)]),X(f,m)};ye(r,f=>{e.value&&P(s)&&f(p)})}X(i,o),Tn()}var xi=ae('<p>There are no available tasks. You can add new tasks on the <a href="/v2/tasks/management">Tasks management</a> page.</p>'),Ti=ae("<col>"),Ai=ae('<th class="svelte-yi1y07">Author</th>'),Ci=ae('<a target="_blank"> </a>'),Oi=ae('<button class="btn btn-link p-0"><!></button>'),Si=ae('<button class="btn btn-link p-0"><!></button>'),Ei=ae('<td class="author-col svelte-yi1y07"> </td>'),Di=ae("<option> </option>"),Ri=ae('<select class="form-select"></select>'),Pi=ae('<tr class="svelte-yi1y07"><td class="task-name-col svelte-yi1y07"><!></td><td class="svelte-yi1y07"><!></td><td class="svelte-yi1y07"><!></td><td class="metadata-col svelte-yi1y07"> </td><!><td class="version-col svelte-yi1y07"><!></td><!></tr>'),Ii=ae('<tr class="border-top svelte-yi1y07"><th colspan="3" class="svelte-yi1y07"> </th></tr> <!>',1),Mi=ae('<div class="card"><div class="card-body p-0"><table class="table table-borderless svelte-yi1y07" id="filtered-tasks-table"><colgroup><col><col><col><col><!><col width="120"><!></colgroup><thead><tr class="svelte-yi1y07"><th class="svelte-yi1y07"> </th><th class="svelte-yi1y07">Category</th><th class="svelte-yi1y07">Modality</th><th class="svelte-yi1y07">Metadata</th><!><th class="svelte-yi1y07">Version</th><!></tr></thead><tbody></tbody></table></div></div> <p class="mt-3 text-center mb-0"> </p>',1),Li=ae('<div><div class="card-body"><div class="row mb-2"><div class="col-3 col-lg-6">Filter tasks</div> <div class="col-9 col-lg-6"><div class="d-flex"><div class="flex-fill"><div class="input-group input-group-sm"><input type="text" id="taskGenericSearchInput" class="form-control ms-auto" placeholder="Search..."></div></div> <div><button class="btn btn-outline-secondary btn-sm ms-3">Reset</button></div></div></div></div> <div class="row"><div class="col"><select id="package-filter" class="invisible"></select></div> <div class="col"><select id="category-filter" class="invisible"></select></div> <div class="col"><select id="modality-filter" class="invisible"></select></div> <div class="col"><select id="tag-filter" class="invisible"></select></div></div></div></div> <!>',1);function Hi(i,e){xn(e,!0);let n=Zn(e,"showAuthorsInSeparateColumn",3,!0),t=Zn(e,"showDocLinksInTable",3,!1),s=Se(Nn([])),o=Se(Nn([])),r="pkg_name",p=Se(""),f,m=Se(""),b,v=Se(""),_,A=Se(""),x,E=Se(""),a="",l={pkg_name:"Task"},c;Bn(()=>{c!==e.taskGroups&&(c=e.taskGroups,g())});const h=jn(()=>P(o).reduce((k,I)=>k+I.tasks.length,0)),d=jn(()=>P(s).reduce((k,I)=>k+I.tasks.length,0));Bn(()=>{P(p)||P(m)||P(v)||P(A)||P(E)||a?y():fe(o,P(s),!0)});function g(){e.taskGroups&&(fe(p,""),me(e.taskGroups.map(k=>k[1]).flatMap(k=>k)),fe(s,gi(e.taskGroups),!0),y())}function y(){fe(o,P(s).map(k=>{const I=k.tasks.filter(J=>C(Q(J)));return{...k,tasks:I}}).filter(k=>k.tasks.length>0),!0)}function C(k){return R(k)&&M(k)&&Z(k)&&W(k)&&F(k)&&K()}function R(k){if(!P(p))return!0;const I=P(p).toLowerCase();return k.task_name.toLowerCase().includes(I)||k.pkg_name.toLowerCase().includes(I)||k.category&&k.category.toLowerCase().includes(I)||k.modality&&k.modality.toLowerCase().includes(I)||k.authors&&k.authors.toLowerCase().includes(I)||Object.keys(k.input_types).find(J=>J.toLowerCase().includes(I))!==void 0||k.tags.find(J=>J.toLowerCase().includes(I))!==void 0}function M(k){return P(m)?k.category!==null&&k.category===P(m):!0}function Z(k){return P(v)?k.modality!==null&&k.modality===P(v):!0}function F(k){return P(A)?k.pkg_name===P(A):!0}function W(k){return P(E)?k.tags.find(I=>I===P(E))!==void 0:!0}function K(k){return!0}function te(){fe(p,""),fe(m,""),f==null||f.setSelected(""),b==null||b.setSelected(""),_==null||_.setSelected(""),x==null||x.setSelected("")}function me(k){ke(f,Ce(Ze(k,I=>I.category)),"Category"),ke(b,Ce(Ze(k,I=>I.modality)),"Modality"),ke(_,Ce([...new Set(k.map(I=>I.pkg_name))]),"Package"),ke(x,Ce([...new Set(k.flatMap(I=>I.task_list).flatMap(I=>I.tags).filter(I=>I!==null))]),"Tag")}function ke(k,I,J){k==null||k.setData([{text:J,placeholder:!0},...I])}function Ze(k,I){return[...new Set(k.flatMap(J=>J.task_list).map(I).filter(J=>J!==null))]}function Ce(k){return k.map(I=>({text:I,value:I}))}function nn(k){const I=[];return I.push(...k.tags),k.authors&&!n()&&I.push(k.authors),I.join(", ")}ba(()=>{f=qe("category-filter","Select category","Category",k=>{fe(m,k,!0)}),b=qe("modality-filter","Select modality","Modality",k=>{fe(v,k,!0)}),_=qe("package-filter","Select package","Package",k=>{fe(A,k,!0)}),x=qe("tag-filter","Select tag","Tag",k=>{fe(E,k,!0)}),g()});function qe(k,I,J,He){const Ie=document.getElementById(k);return Ie==null||Ie.classList.remove("invisible"),new ki({select:`#${k}`,settings:{maxValuesShown:5,showSearch:!0,allowDeselect:!0,ariaLabel:I},events:{afterChange:Me=>{Me.length===0||Me[0].value===J?He(""):He(Me[0].value)}}})}function Q(k){return k.taskVersions.find(I=>I.version===k.selectedVersion)}var ut=Li(),Y=Ke(ut);let pt;var G=N(Y),Le=N(G),nt=ne(N(Le),2),dt=N(nt),Ue=N(dt),ft=N(Ue),mt=N(ft);Ts(mt),z(ft),z(Ue);var Re=ne(Ue,2),gt=N(Re);gt.__click=te,z(Re),z(dt),z(nt),z(Le),Gt(2),z(G),z(Y);var Pe=ne(Y,2);{var bt=k=>{var I=xi();X(k,I)},_t=k=>{var I=Mi(),J=Ke(I),He=N(J),Ie=N(He),Me=N(Ie),at=ne(N(Me),4);{var $e=ge=>{var pe=Ti();X(ge,pe)};ye(at,ge=>{n()&&ge($e)})}var ze=ne(at,2);rn(ze,()=>e.extraColumnsColgroup??Xt),z(Me);var Oe=ne(Me),yt=N(Oe),st=N(yt),It=N(st,!0);z(st);var it=ne(st,4);{var Mt=ge=>{var pe=Ai();X(ge,pe)};ye(it,ge=>{n()&&ge(Mt)})}var lt=ne(it,2);rn(lt,()=>e.extraColumnsHeader??Xt),z(yt),z(Oe);var Ve=ne(Oe);cn(Ve,21,()=>P(o),Un,(ge,pe,Sn)=>{var Ge=Ii(),Ne=Ke(Ge),Lt=N(Ne),Xe=N(Lt,!0);z(Lt),z(Ne);var an=ne(Ne,2);cn(an,17,()=>P(pe).tasks.map(wt=>Q(wt)),Un,(wt,j,ve,En)=>{var kt=ca(),vt=Ke(kt);{var Ht=ot=>{var xt=Pi(),de=N(xt),rt=N(de);{var zt=L=>{var H=Ci(),ee=N(H,!0);z(H),be(()=>{Kt(H,"href",P(j).docs_link),Te(ee,P(j).task_name)}),X(L,H)},Ft=L=>{var H=In();be(()=>Te(H,P(j).task_name)),X(L,H)};ye(rt,L=>{t()&&P(j).docs_link?L(zt):L(Ft,!1)})}z(de);var We=ne(de),Nt=N(We);{var xe=L=>{var H=Oi();H.__click=()=>f==null?void 0:f.setSelected(P(j).category);var ee=N(H);ra(ee,{get value(){return P(j).category}}),z(H),X(L,H)};ye(Nt,L=>{P(j).category&&L(xe)})}z(We);var ct=ne(We),Bt=N(ct);{var jt=L=>{var H=Si();H.__click=()=>b==null?void 0:b.setSelected(P(j).modality);var ee=N(H);ra(ee,{get value(){return P(j).modality}}),z(H),X(L,H)};ye(Bt,L=>{P(j).modality&&L(jt)})}z(ct);var ht=ne(ct),sn=N(ht,!0);z(ht);var S=ne(ht);{var u=L=>{var H=Ei(),ee=N(H,!0);z(H),be(()=>Te(ee,P(j).authors||"-")),X(L,H)};ye(S,L=>{n()&&L(u)})}var w=ne(S),O=N(w);{var V=L=>{var H=Ri();cn(H,20,()=>P(pe).tasks[ve].taskVersions.map(ee=>ee.version),ee=>ee,(ee,ie)=>{var Be=Di(),Tt={},Ia=N(Be,!0);z(Be),be(()=>{Tt!==(Tt=ie)&&(Be.value=(Be.__value=ie)??""),Te(Ia,ie||"None")}),X(ee,Be)}),z(H),be(()=>Kt(H,"aria-label",`Version for task ${P(j).task_name??""}`)),Es(H,()=>P(pe).tasks[ve].selectedVersion,ee=>P(pe).tasks[ve].selectedVersion=ee),X(L,H)},le=L=>{var H=In();be(()=>Te(H,P(j).version)),X(L,H)};ye(O,L=>{P(pe).tasks[ve].taskVersions.length>1?L(V):L(le,!1)})}z(w);var se=ne(w);rn(se,()=>e.extraColumns??Xt,()=>P(j)),z(xt),be(L=>Te(sn,L),[()=>nn(P(j))]),X(ot,xt)};ye(vt,ot=>{P(j)&&ot(Ht)})}X(wt,kt)}),be(()=>Te(Xe,P(pe).pkg_name)),X(ge,Ge)}),z(Ve),z(Ie),z(He),z(J);var _e=ne(J,2),Fe=N(_e);z(_e),be(()=>{Te(It,l[r]),Te(Fe,`Showing ${P(h)??""} of ${P(d)??""}
		${P(d)===1?"task":"tasks"}`)}),X(k,I)};ye(Pe,k=>{P(s).length===0?k(bt):k(_t,!1)})}be(k=>pt=ws(Y,1,"card mb-2",null,pt,k),[()=>({invisible:P(s).length===0,collapse:P(s).length===0})]),Os(mt,()=>P(p),k=>fe(p,k)),X(i,ut),Tn()}ga(["click"]);var zi=ae('<col width="60"> <col width="60">',1),Fi=ae("<th></th> <th></th>",1),Ni=(i,e,n)=>e(n(),n().docs_info),Bi=ae('<button class="btn btn-info"><i class="bi bi-info-circle"></i></button>'),ji=(i,e,n)=>e(n(),n().install_instructions),Zi=ae('<button class="btn btn-primary me-2"><i class="bi bi-plus-circle"></i></button>'),qi=ae("<td><!></td> <td><!></td>",1),Ui=ae('<!> <div class="modal modal-xl" id="task-info-modal" tabindex="-1"><div class="modal-dialog modal-dialog-scrollable"><div class="modal-content"><div class="modal-header"><h5 class="modal-title"> </h5> <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div> <div class="modal-body"><!></div></div></div></div>',1);function Ki(i,e){xn(e,!0);let n=Se(null),t=Se("");function s(l,c){fe(n,l,!0),fe(t,c,!0),o("task-info-modal").show()}function o(l){const c=document.getElementById(l),h=bootstrap.Modal.getInstance(c);return h||new bootstrap.Modal(c)}function r(l){return l?fi.sanitize(U.parse(l)):""}var p=Ui(),f=Ke(p);Hi(f,{taskGroups:mi,showDocLinksInTable:!0,extraColumnsColgroup:d=>{var g=zi();Gt(2),X(d,g)},extraColumnsHeader:d=>{var g=Fi();Gt(2),X(d,g)},extraColumns:(d,g=Xt)=>{var y=qi(),C=Ke(y),R=N(C);{var M=K=>{var te=Bi();te.__click=[Ni,s,g],X(K,te)};ye(R,K=>{g().docs_info&&K(M)})}z(C);var Z=ne(C,2),F=N(Z);{var W=K=>{var te=Zi();te.__click=[ji,s,g],X(K,te)};ye(F,K=>{g().install_instructions&&K(W)})}z(Z),X(d,y)},$$slots:{extraColumnsColgroup:!0,extraColumnsHeader:!0,extraColumns:!0}});var m=ne(f,2),b=N(m),v=N(b),_=N(v),A=N(_),x=N(A,!0);z(A),Gt(2),z(_);var E=ne(_,2),a=N(E);return bs(a,()=>r(P(t))),z(E),z(v),z(b),z(m),be(()=>{var l;return Te(x,(l=P(n))==null?void 0:l.task_name)}),X(i,p),Tn({formatMarkdown:r})}ga(["click"]);export{Ki as component};
