var qs=Object.defineProperty;var Pn=a=>{throw TypeError(a)};var Gs=(a,e,n)=>e in a?qs(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n;var Q=(a,e,n)=>Gs(a,typeof e!="symbol"?e+"":e,n),Xs=(a,e,n)=>e.has(a)||Pn("Cannot "+n);var Mn=(a,e,n)=>e.has(a)?Pn("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(a):e.set(a,n);var At=(a,e,n)=>(Xs(a,e,"access private method"),n);import{s as rn,n as Qe,o as ws,r as Ws,c as Qt,u as Kt,g as en,a as tn,k as Ys}from"../chunks/scheduler.BvLojk_z.js";import{S as cn,i as hn,m as We,j as X,g as A,e as D,b as xe,c as P,d as Z,f as Ae,p as Nn,o as H,k as O,l as De,s as W,y as ze,h as Y,z as Ot,A as Ht,B as Ke,q as rt,a as ce,n as ct,t as oe,C as Js,D as un,u as pn,v as dn,w as fn,x as mn,E as Hn,H as Qs,F as Ks}from"../chunks/index.fIxOdhEb.js";import{_ as ei}from"../chunks/preload-helper.C1FmrZbK.js";function ht(a){return(a==null?void 0:a.length)!==void 0?a:Array.from(a)}function gn(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!1,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!1,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let nt=gn();function ys(a){nt=a}const vs=/[&<>"']/,ti=new RegExp(vs.source,"g"),Ts=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,ni=new RegExp(Ts.source,"g"),si={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Fn=a=>si[a];function ge(a,e){if(e){if(vs.test(a))return a.replace(ti,Fn)}else if(Ts.test(a))return a.replace(ni,Fn);return a}const ii=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Es(a){return a.replace(ii,(e,n)=>(n=n.toLowerCase(),n==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):""))}const ai=/(^|[^\[])\^/g;function ee(a,e){a=typeof a=="string"?a:a.source,e=e||"";const n={replace:(t,i)=>(i=typeof i=="object"&&"source"in i?i.source:i,i=i.replace(ai,"$1"),a=a.replace(t,i),n),getRegex:()=>new RegExp(a,e)};return n}const li=/[^\w:]/g,oi=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function zn(a,e,n){if(a){let t;try{t=decodeURIComponent(Es(n)).replace(li,"").toLowerCase()}catch{return null}if(t.indexOf("javascript:")===0||t.indexOf("vbscript:")===0||t.indexOf("data:")===0)return null}e&&!oi.test(n)&&(n=ui(e,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch{return null}return n}const Ct={},ri=/^[^:]+:\/*[^/]*$/,ci=/^([^:]+:)[\s\S]*$/,hi=/^([^:]+:\/*[^/]*)[\s\S]*$/;function ui(a,e){Ct[" "+a]||(ri.test(a)?Ct[" "+a]=a+"/":Ct[" "+a]=Mt(a,"/",!0)),a=Ct[" "+a];const n=a.indexOf(":")===-1;return e.substring(0,2)==="//"?n?e:a.replace(ci,"$1")+e:e.charAt(0)==="/"?n?e:a.replace(hi,"$1")+e:a+e}const Ft={exec:()=>null};function $n(a,e){const n=a.replace(/\|/g,(l,r,p)=>{let c=!1,h=r;for(;--h>=0&&p[h]==="\\";)c=!c;return c?"|":" |"}),t=n.split(/ \|/);let i=0;if(t[0].trim()||t.shift(),t.length>0&&!t[t.length-1].trim()&&t.pop(),e)if(t.length>e)t.splice(e);else for(;t.length<e;)t.push("");for(;i<t.length;i++)t[i]=t[i].trim().replace(/\\\|/g,"|");return t}function Mt(a,e,n){const t=a.length;if(t===0)return"";let i=0;for(;i<t;){const l=a.charAt(t-i-1);if(l===e&&!n)i++;else if(l!==e&&n)i++;else break}return a.slice(0,t-i)}function pi(a,e){if(a.indexOf(e[1])===-1)return-1;let n=0;for(let t=0;t<a.length;t++)if(a[t]==="\\")t++;else if(a[t]===e[0])n++;else if(a[t]===e[1]&&(n--,n<0))return t;return-1}function di(a,e){!a||a.silent||(e&&console.warn("marked(): callback is deprecated since version 5.0.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/using_pro#async"),(a.sanitize||a.sanitizer)&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"),(a.highlight||a.langPrefix!=="language-")&&console.warn("marked(): highlight and langPrefix parameters are deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-highlight."),a.mangle&&console.warn("marked(): mangle parameter is enabled by default, but is deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install https://www.npmjs.com/package/marked-mangle, or disable by setting `{mangle: false}`."),a.baseUrl&&console.warn("marked(): baseUrl parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-base-url."),a.smartypants&&console.warn("marked(): smartypants parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-smartypants."),a.xhtml&&console.warn("marked(): xhtml parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-xhtml."),(a.headerIds||a.headerPrefix)&&console.warn("marked(): headerIds and headerPrefix parameters enabled by default, but are deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install  https://www.npmjs.com/package/marked-gfm-heading-id, or disable by setting `{headerIds: false}`."))}function Vn(a,e,n,t){const i=e.href,l=e.title?ge(e.title):null,r=a[1].replace(/\\([\[\]])/g,"$1");if(a[0].charAt(0)!=="!"){t.state.inLink=!0;const p={type:"link",raw:n,href:i,title:l,text:r,tokens:t.inlineTokens(r)};return t.state.inLink=!1,p}return{type:"image",raw:n,href:i,title:l,text:ge(r)}}function fi(a,e){const n=a.match(/^(\s+)(?:```)/);if(n===null)return e;const t=n[1];return e.split(`
`).map(i=>{const l=i.match(/^\s+/);if(l===null)return i;const[r]=l;return r.length>=t.length?i.slice(t.length):i}).join(`
`)}class zt{constructor(e){Q(this,"options");Q(this,"rules");Q(this,"lexer");this.options=e||nt}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const t=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?t:Mt(t,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const t=n[0],i=fi(t,n[3]||"");return{type:"code",raw:t,lang:n[2]?n[2].trim().replace(this.rules.inline._escapes,"$1"):n[2],text:i}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let t=n[2].trim();if(/#$/.test(t)){const i=Mt(t,"#");(this.options.pedantic||!i||/ $/.test(i))&&(t=i.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:n[0]}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){const t=n[0].replace(/^ *>[ \t]?/gm,""),i=this.lexer.state.top;this.lexer.state.top=!0;const l=this.lexer.blockTokens(t);return this.lexer.state.top=i,{type:"blockquote",raw:n[0],tokens:l,text:t}}}list(e){let n=this.rules.block.list.exec(e);if(n){let t=n[1].trim();const i=t.length>1,l={type:"list",raw:"",ordered:i,start:i?+t.slice(0,-1):"",loose:!1,items:[]};t=i?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=i?t:"[*+-]");const r=new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`);let p="",c="",h=!1;for(;e;){let b=!1;if(!(n=r.exec(e))||this.rules.block.hr.test(e))break;p=n[0],e=e.substring(p.length);let _=n[2].split(`
`,1)[0].replace(/^\t+/,o=>" ".repeat(3*o.length)),y=e.split(`
`,1)[0],v=0;this.options.pedantic?(v=2,c=_.trimLeft()):(v=n[2].search(/[^ ]/),v=v>4?1:v,c=_.slice(v),v+=n[1].length);let k=!1;if(!_&&/^ *$/.test(y)&&(p+=y+`
`,e=e.substring(y.length+1),b=!0),!b){const o=new RegExp(`^ {0,${Math.min(3,v-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),u=new RegExp(`^ {0,${Math.min(3,v-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),d=new RegExp(`^ {0,${Math.min(3,v-1)}}(?:\`\`\`|~~~)`),m=new RegExp(`^ {0,${Math.min(3,v-1)}}#`);for(;e;){const g=e.split(`
`,1)[0];if(y=g,this.options.pedantic&&(y=y.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),d.test(y)||m.test(y)||o.test(y)||u.test(e))break;if(y.search(/[^ ]/)>=v||!y.trim())c+=`
`+y.slice(v);else{if(k||_.search(/[^ ]/)>=4||d.test(_)||m.test(_)||u.test(_))break;c+=`
`+y}!k&&!y.trim()&&(k=!0),p+=g+`
`,e=e.substring(g.length+1),_=y.slice(v)}}l.loose||(h?l.loose=!0:/\n *\n *$/.test(p)&&(h=!0));let R=null,s;this.options.gfm&&(R=/^\[[ xX]\] /.exec(c),R&&(s=R[0]!=="[ ] ",c=c.replace(/^\[[ xX]\] +/,""))),l.items.push({type:"list_item",raw:p,task:!!R,checked:s,loose:!1,text:c,tokens:[]}),l.raw+=p}l.items[l.items.length-1].raw=p.trimRight(),l.items[l.items.length-1].text=c.trimRight(),l.raw=l.raw.trimRight();for(let b=0;b<l.items.length;b++)if(this.lexer.state.top=!1,l.items[b].tokens=this.lexer.blockTokens(l.items[b].text,[]),!l.loose){const _=l.items[b].tokens.filter(v=>v.type==="space"),y=_.length>0&&_.some(v=>/\n.*\n/.test(v.raw));l.loose=y}if(l.loose)for(let b=0;b<l.items.length;b++)l.items[b].loose=!0;return l}}html(e){const n=this.rules.block.html.exec(e);if(n){const t={type:"html",block:!0,raw:n[0],pre:!this.options.sanitizer&&(n[1]==="pre"||n[1]==="script"||n[1]==="style"),text:n[0]};if(this.options.sanitize){const i=this.options.sanitizer?this.options.sanitizer(n[0]):ge(n[0]),l=t;l.type="paragraph",l.text=i,l.tokens=this.lexer.inline(i)}return t}}def(e){const n=this.rules.block.def.exec(e);if(n){const t=n[1].toLowerCase().replace(/\s+/g," "),i=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",l=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline._escapes,"$1"):n[3];return{type:"def",tag:t,raw:n[0],href:i,title:l}}}table(e){const n=this.rules.block.table.exec(e);if(n){const t={type:"table",raw:n[0],header:$n(n[1]).map(i=>({text:i,tokens:[]})),align:n[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(t.header.length===t.align.length){let i=t.align.length,l,r,p,c;for(l=0;l<i;l++){const h=t.align[l];h&&(/^ *-+: *$/.test(h)?t.align[l]="right":/^ *:-+: *$/.test(h)?t.align[l]="center":/^ *:-+ *$/.test(h)?t.align[l]="left":t.align[l]=null)}for(i=t.rows.length,l=0;l<i;l++)t.rows[l]=$n(t.rows[l],t.header.length).map(h=>({text:h,tokens:[]}));for(i=t.header.length,r=0;r<i;r++)t.header[r].tokens=this.lexer.inline(t.header[r].text);for(i=t.rows.length,r=0;r<i;r++)for(c=t.rows[r],p=0;p<c.length;p++)c[p].tokens=this.lexer.inline(c[p].text);return t}}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const t=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:t,tokens:this.lexer.inline(t)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:ge(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):ge(n[0]):n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const t=n[2].trim();if(!this.options.pedantic&&/^</.test(t)){if(!/>$/.test(t))return;const r=Mt(t.slice(0,-1),"\\");if((t.length-r.length)%2===0)return}else{const r=pi(n[2],"()");if(r>-1){const c=(n[0].indexOf("!")===0?5:4)+n[1].length+r;n[2]=n[2].substring(0,r),n[0]=n[0].substring(0,c).trim(),n[3]=""}}let i=n[2],l="";if(this.options.pedantic){const r=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);r&&(i=r[1],l=r[3])}else l=n[3]?n[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(t)?i=i.slice(1):i=i.slice(1,-1)),Vn(n,{href:i&&i.replace(this.rules.inline._escapes,"$1"),title:l&&l.replace(this.rules.inline._escapes,"$1")},n[0],this.lexer)}}reflink(e,n){let t;if((t=this.rules.inline.reflink.exec(e))||(t=this.rules.inline.nolink.exec(e))){let i=(t[2]||t[1]).replace(/\s+/g," ");if(i=n[i.toLowerCase()],!i){const l=t[0].charAt(0);return{type:"text",raw:l,text:l}}return Vn(t,i,t[0],this.lexer)}}emStrong(e,n,t=""){let i=this.rules.inline.emStrong.lDelim.exec(e);if(!i||i[3]&&t.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!t||this.rules.inline.punctuation.exec(t)){const r=[...i[0]].length-1;let p,c,h=r,b=0;const _=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(_.lastIndex=0,n=n.slice(-1*e.length+r);(i=_.exec(n))!=null;){if(p=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!p)continue;if(c=[...p].length,i[3]||i[4]){h+=c;continue}else if((i[5]||i[6])&&r%3&&!((r+c)%3)){b+=c;continue}if(h-=c,h>0)continue;c=Math.min(c,c+h+b);const y=[...e].slice(0,r+i.index+c+1).join("");if(Math.min(r,c)%2){const k=y.slice(1,-1);return{type:"em",raw:y,text:k,tokens:this.lexer.inlineTokens(k)}}const v=y.slice(2,-2);return{type:"strong",raw:y,text:v,tokens:this.lexer.inlineTokens(v)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let t=n[2].replace(/\n/g," ");const i=/[^ ]/.test(t),l=/^ /.test(t)&&/ $/.test(t);return i&&l&&(t=t.substring(1,t.length-1)),t=ge(t,!0),{type:"codespan",raw:n[0],text:t}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e,n){const t=this.rules.inline.autolink.exec(e);if(t){let i,l;return t[2]==="@"?(i=ge(this.options.mangle?n(t[1]):t[1]),l="mailto:"+i):(i=ge(t[1]),l=i),{type:"link",raw:t[0],text:i,href:l,tokens:[{type:"text",raw:i,text:i}]}}}url(e,n){let t;if(t=this.rules.inline.url.exec(e)){let i,l;if(t[2]==="@")i=ge(this.options.mangle?n(t[0]):t[0]),l="mailto:"+i;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])[0];while(r!==t[0]);i=ge(t[0]),t[1]==="www."?l="http://"+t[0]:l=t[0]}return{type:"link",raw:t[0],text:i,href:l,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e,n){const t=this.rules.inline.text.exec(e);if(t){let i;return this.lexer.state.inRawBlock?i=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):ge(t[0]):t[0]:i=ge(this.options.smartypants?n(t[0]):t[0]),{type:"text",raw:t[0],text:i}}}}const F={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Ft,lheading:/^((?:(?!^bull ).|\n(?!\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};F._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;F._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;F.def=ee(F.def).replace("label",F._label).replace("title",F._title).getRegex();F.bullet=/(?:[*+-]|\d{1,9}[.)])/;F.listItemStart=ee(/^( *)(bull) */).replace("bull",F.bullet).getRegex();F.list=ee(F.list).replace(/bull/g,F.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+F.def.source+")").getRegex();F._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";F._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;F.html=ee(F.html,"i").replace("comment",F._comment).replace("tag",F._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();F.lheading=ee(F.lheading).replace(/bull/g,F.bullet).getRegex();F.paragraph=ee(F._paragraph).replace("hr",F.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",F._tag).getRegex();F.blockquote=ee(F.blockquote).replace("paragraph",F.paragraph).getRegex();F.normal={...F};F.gfm={...F.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};F.gfm.table=ee(F.gfm.table).replace("hr",F.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",F._tag).getRegex();F.gfm.paragraph=ee(F._paragraph).replace("hr",F.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",F.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",F._tag).getRegex();F.pedantic={...F.normal,html:ee(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",F._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ft,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:ee(F.normal._paragraph).replace("hr",F.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",F.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const S={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Ft,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,rDelimAst:/^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Ft,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^((?![*_])[\spunctuation])/};S._punctuation="\\p{P}$+<=>`^|~";S.punctuation=ee(S.punctuation,"u").replace(/punctuation/g,S._punctuation).getRegex();S.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;S.anyPunctuation=/\\[punct]/g;S._escapes=/\\([punct])/g;S._comment=ee(F._comment).replace("(?:-->|$)","-->").getRegex();S.emStrong.lDelim=ee(S.emStrong.lDelim,"u").replace(/punct/g,S._punctuation).getRegex();S.emStrong.rDelimAst=ee(S.emStrong.rDelimAst,"gu").replace(/punct/g,S._punctuation).getRegex();S.emStrong.rDelimUnd=ee(S.emStrong.rDelimUnd,"gu").replace(/punct/g,S._punctuation).getRegex();S.anyPunctuation=ee(S.anyPunctuation,"gu").replace(/punct/g,S._punctuation).getRegex();S._escapes=ee(S._escapes,"gu").replace(/punct/g,S._punctuation).getRegex();S._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;S._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;S.autolink=ee(S.autolink).replace("scheme",S._scheme).replace("email",S._email).getRegex();S._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;S.tag=ee(S.tag).replace("comment",S._comment).replace("attribute",S._attribute).getRegex();S._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;S._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;S._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;S.link=ee(S.link).replace("label",S._label).replace("href",S._href).replace("title",S._title).getRegex();S.reflink=ee(S.reflink).replace("label",S._label).replace("ref",F._label).getRegex();S.nolink=ee(S.nolink).replace("ref",F._label).getRegex();S.reflinkSearch=ee(S.reflinkSearch,"g").replace("reflink",S.reflink).replace("nolink",S.nolink).getRegex();S.normal={...S};S.pedantic={...S.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:ee(/^!?\[(label)\]\((.*?)\)/).replace("label",S._label).getRegex(),reflink:ee(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",S._label).getRegex()};S.gfm={...S.normal,escape:ee(S.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};S.gfm.url=ee(S.gfm.url,"i").replace("email",S.gfm._extended_email).getRegex();S.breaks={...S.gfm,br:ee(S.br).replace("{2,}","*").getRegex(),text:ee(S.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};function mi(a){return a.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function jn(a){let e="";for(let n=0;n<a.length;n++){const t=Math.random()>.5?"x"+a.charCodeAt(n).toString(16):a.charCodeAt(n).toString();e+="&#"+t+";"}return e}class $e{constructor(e){Q(this,"tokens");Q(this,"options");Q(this,"state");Q(this,"tokenizer");Q(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||nt,this.options.tokenizer=this.options.tokenizer||new zt,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:F.normal,inline:S.normal};this.options.pedantic?(n.block=F.pedantic,n.inline=S.pedantic):this.options.gfm&&(n.block=F.gfm,this.options.breaks?n.inline=S.breaks:n.inline=S.gfm),this.tokenizer.rules=n}static get rules(){return{block:F,inline:S}}static lex(e,n){return new $e(n).lex(e)}static lexInline(e,n){return new $e(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let n;for(;n=this.inlineQueue.shift();)this.inlineTokens(n.src,n.tokens);return this.tokens}blockTokens(e,n=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(p,c,h)=>c+"    ".repeat(h.length));let t,i,l,r;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(p=>(t=p.call({lexer:this},e,n))?(e=e.substring(t.raw.length),n.push(t),!0):!1))){if(t=this.tokenizer.space(e)){e=e.substring(t.raw.length),t.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(t);continue}if(t=this.tokenizer.code(e)){e=e.substring(t.raw.length),i=n[n.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+t.raw,i.text+=`
`+t.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(t);continue}if(t=this.tokenizer.fences(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.heading(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.hr(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.blockquote(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.list(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.html(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.def(e)){e=e.substring(t.raw.length),i=n[n.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+t.raw,i.text+=`
`+t.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[t.tag]||(this.tokens.links[t.tag]={href:t.href,title:t.title});continue}if(t=this.tokenizer.table(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.lheading(e)){e=e.substring(t.raw.length),n.push(t);continue}if(l=e,this.options.extensions&&this.options.extensions.startBlock){let p=1/0;const c=e.slice(1);let h;this.options.extensions.startBlock.forEach(b=>{h=b.call({lexer:this},c),typeof h=="number"&&h>=0&&(p=Math.min(p,h))}),p<1/0&&p>=0&&(l=e.substring(0,p+1))}if(this.state.top&&(t=this.tokenizer.paragraph(l))){i=n[n.length-1],r&&i.type==="paragraph"?(i.raw+=`
`+t.raw,i.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(t),r=l.length!==e.length,e=e.substring(t.raw.length);continue}if(t=this.tokenizer.text(e)){e=e.substring(t.raw.length),i=n[n.length-1],i&&i.type==="text"?(i.raw+=`
`+t.raw,i.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(t);continue}if(e){const p="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(p);break}else throw new Error(p)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let t,i,l,r=e,p,c,h;if(this.tokens.links){const b=Object.keys(this.tokens.links);if(b.length>0)for(;(p=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)b.includes(p[0].slice(p[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,p.index)+"["+"a".repeat(p[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(p=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,p.index)+"["+"a".repeat(p[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(p=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,p.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(c||(h=""),c=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(b=>(t=b.call({lexer:this},e,n))?(e=e.substring(t.raw.length),n.push(t),!0):!1))){if(t=this.tokenizer.escape(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.tag(e)){e=e.substring(t.raw.length),i=n[n.length-1],i&&t.type==="text"&&i.type==="text"?(i.raw+=t.raw,i.text+=t.text):n.push(t);continue}if(t=this.tokenizer.link(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(t.raw.length),i=n[n.length-1],i&&t.type==="text"&&i.type==="text"?(i.raw+=t.raw,i.text+=t.text):n.push(t);continue}if(t=this.tokenizer.emStrong(e,r,h)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.codespan(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.br(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.del(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.autolink(e,jn)){e=e.substring(t.raw.length),n.push(t);continue}if(!this.state.inLink&&(t=this.tokenizer.url(e,jn))){e=e.substring(t.raw.length),n.push(t);continue}if(l=e,this.options.extensions&&this.options.extensions.startInline){let b=1/0;const _=e.slice(1);let y;this.options.extensions.startInline.forEach(v=>{y=v.call({lexer:this},_),typeof y=="number"&&y>=0&&(b=Math.min(b,y))}),b<1/0&&b>=0&&(l=e.substring(0,b+1))}if(t=this.tokenizer.inlineText(l,mi)){e=e.substring(t.raw.length),t.raw.slice(-1)!=="_"&&(h=t.raw.slice(-1)),c=!0,i=n[n.length-1],i&&i.type==="text"?(i.raw+=t.raw,i.text+=t.text):n.push(t);continue}if(e){const b="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(b);break}else throw new Error(b)}}return n}}class $t{constructor(e){Q(this,"options");this.options=e||nt}code(e,n,t){var l;const i=(l=(n||"").match(/^\S*/))==null?void 0:l[0];if(this.options.highlight){const r=this.options.highlight(e,i);r!=null&&r!==e&&(t=!0,e=r)}return e=e.replace(/\n$/,"")+`
`,i?'<pre><code class="'+this.options.langPrefix+ge(i)+'">'+(t?e:ge(e,!0))+`</code></pre>
`:"<pre><code>"+(t?e:ge(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e,n){return e}heading(e,n,t,i){if(this.options.headerIds){const l=this.options.headerPrefix+i.slug(t);return`<h${n} id="${l}">${e}</h${n}>
`}return`<h${n}>${e}</h${n}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,n,t){const i=n?"ol":"ul",l=n&&t!==1?' start="'+t+'"':"";return"<"+i+l+`>
`+e+"</"+i+`>
`}listitem(e,n,t){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>
`}table(e,n){return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+n+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,n){const t=n.header?"th":"td";return(n.align?`<${t} align="${n.align}">`:`<${t}>`)+e+`</${t}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,n,t){const i=zn(this.options.sanitize,this.options.baseUrl,e);if(i===null)return t;e=i;let l='<a href="'+e+'"';return n&&(l+=' title="'+n+'"'),l+=">"+t+"</a>",l}image(e,n,t){const i=zn(this.options.sanitize,this.options.baseUrl,e);if(i===null)return t;e=i;let l=`<img src="${e}" alt="${t}"`;return n&&(l+=` title="${n}"`),l+=this.options.xhtml?"/>":">",l}text(e){return e}}class bn{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,n,t){return""+t}image(e,n,t){return""+t}br(){return""}}class _n{constructor(){Q(this,"seen");this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,n){let t=e,i=0;if(this.seen.hasOwnProperty(t)){i=this.seen[e];do i++,t=e+"-"+i;while(this.seen.hasOwnProperty(t))}return n||(this.seen[e]=i,this.seen[t]=0),t}slug(e,n={}){const t=this.serialize(e);return this.getNextSafeSlug(t,n.dryrun)}}class Ve{constructor(e){Q(this,"options");Q(this,"renderer");Q(this,"textRenderer");Q(this,"slugger");this.options=e||nt,this.options.renderer=this.options.renderer||new $t,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new bn,this.slugger=new _n}static parse(e,n){return new Ve(n).parse(e)}static parseInline(e,n){return new Ve(n).parseInline(e)}parse(e,n=!0){let t="";for(let i=0;i<e.length;i++){const l=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[l.type]){const r=l,p=this.options.extensions.renderers[r.type].call({parser:this},r);if(p!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(r.type)){t+=p||"";continue}}switch(l.type){case"space":continue;case"hr":{t+=this.renderer.hr();continue}case"heading":{const r=l;t+=this.renderer.heading(this.parseInline(r.tokens),r.depth,Es(this.parseInline(r.tokens,this.textRenderer)),this.slugger);continue}case"code":{const r=l;t+=this.renderer.code(r.text,r.lang,!!r.escaped);continue}case"table":{const r=l;let p="",c="";for(let b=0;b<r.header.length;b++)c+=this.renderer.tablecell(this.parseInline(r.header[b].tokens),{header:!0,align:r.align[b]});p+=this.renderer.tablerow(c);let h="";for(let b=0;b<r.rows.length;b++){const _=r.rows[b];c="";for(let y=0;y<_.length;y++)c+=this.renderer.tablecell(this.parseInline(_[y].tokens),{header:!1,align:r.align[y]});h+=this.renderer.tablerow(c)}t+=this.renderer.table(p,h);continue}case"blockquote":{const r=l,p=this.parse(r.tokens);t+=this.renderer.blockquote(p);continue}case"list":{const r=l,p=r.ordered,c=r.start,h=r.loose;let b="";for(let _=0;_<r.items.length;_++){const y=r.items[_],v=y.checked,k=y.task;let R="";if(y.task){const s=this.renderer.checkbox(!!v);h?y.tokens.length>0&&y.tokens[0].type==="paragraph"?(y.tokens[0].text=s+" "+y.tokens[0].text,y.tokens[0].tokens&&y.tokens[0].tokens.length>0&&y.tokens[0].tokens[0].type==="text"&&(y.tokens[0].tokens[0].text=s+" "+y.tokens[0].tokens[0].text)):y.tokens.unshift({type:"text",text:s}):R+=s}R+=this.parse(y.tokens,h),b+=this.renderer.listitem(R,k,!!v)}t+=this.renderer.list(b,p,c);continue}case"html":{const r=l;t+=this.renderer.html(r.text,r.block);continue}case"paragraph":{const r=l;t+=this.renderer.paragraph(this.parseInline(r.tokens));continue}case"text":{let r=l,p=r.tokens?this.parseInline(r.tokens):r.text;for(;i+1<e.length&&e[i+1].type==="text";)r=e[++i],p+=`
`+(r.tokens?this.parseInline(r.tokens):r.text);t+=n?this.renderer.paragraph(p):p;continue}default:{const r='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(r),"";throw new Error(r)}}}return t}parseInline(e,n){n=n||this.renderer;let t="";for(let i=0;i<e.length;i++){const l=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[l.type]){const r=this.options.extensions.renderers[l.type].call({parser:this},l);if(r!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(l.type)){t+=r||"";continue}}switch(l.type){case"escape":{const r=l;t+=n.text(r.text);break}case"html":{const r=l;t+=n.html(r.text);break}case"link":{const r=l;t+=n.link(r.href,r.title,this.parseInline(r.tokens,n));break}case"image":{const r=l;t+=n.image(r.href,r.title,r.text);break}case"strong":{const r=l;t+=n.strong(this.parseInline(r.tokens,n));break}case"em":{const r=l;t+=n.em(this.parseInline(r.tokens,n));break}case"codespan":{const r=l;t+=n.codespan(r.text);break}case"br":{t+=n.br();break}case"del":{const r=l;t+=n.del(this.parseInline(r.tokens,n));break}case"text":{const r=l;t+=n.text(r.text);break}default:{const r='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(r),"";throw new Error(r)}}}return t}}class kt{constructor(e){Q(this,"options");this.options=e||nt}preprocess(e){return e}postprocess(e){return e}}Q(kt,"passThroughHooks",new Set(["preprocess","postprocess"]));var tt,nn,xs;class gi{constructor(...e){Mn(this,tt);Q(this,"defaults",gn());Q(this,"options",this.setOptions);Q(this,"parse",At(this,tt,nn).call(this,$e.lex,Ve.parse));Q(this,"parseInline",At(this,tt,nn).call(this,$e.lexInline,Ve.parseInline));Q(this,"Parser",Ve);Q(this,"parser",Ve.parse);Q(this,"Renderer",$t);Q(this,"TextRenderer",bn);Q(this,"Lexer",$e);Q(this,"lexer",$e.lex);Q(this,"Tokenizer",zt);Q(this,"Slugger",_n);Q(this,"Hooks",kt);this.use(...e)}walkTokens(e,n){var i,l;let t=[];for(const r of e)switch(t=t.concat(n.call(this,r)),r.type){case"table":{const p=r;for(const c of p.header)t=t.concat(this.walkTokens(c.tokens,n));for(const c of p.rows)for(const h of c)t=t.concat(this.walkTokens(h.tokens,n));break}case"list":{const p=r;t=t.concat(this.walkTokens(p.items,n));break}default:{const p=r;(l=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&l[p.type]?this.defaults.extensions.childTokens[p.type].forEach(c=>{t=t.concat(this.walkTokens(p[c],n))}):p.tokens&&(t=t.concat(this.walkTokens(p.tokens,n)))}}return t}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(t=>{const i={...t};if(i.async=this.defaults.async||i.async||!1,t.extensions&&(t.extensions.forEach(l=>{if(!l.name)throw new Error("extension name required");if("renderer"in l){const r=n.renderers[l.name];r?n.renderers[l.name]=function(...p){let c=l.renderer.apply(this,p);return c===!1&&(c=r.apply(this,p)),c}:n.renderers[l.name]=l.renderer}if("tokenizer"in l){if(!l.level||l.level!=="block"&&l.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const r=n[l.level];r?r.unshift(l.tokenizer):n[l.level]=[l.tokenizer],l.start&&(l.level==="block"?n.startBlock?n.startBlock.push(l.start):n.startBlock=[l.start]:l.level==="inline"&&(n.startInline?n.startInline.push(l.start):n.startInline=[l.start]))}"childTokens"in l&&l.childTokens&&(n.childTokens[l.name]=l.childTokens)}),i.extensions=n),t.renderer){const l=this.defaults.renderer||new $t(this.defaults);for(const r in t.renderer){const p=t.renderer[r],c=r,h=l[c];l[c]=(...b)=>{let _=p.apply(l,b);return _===!1&&(_=h.apply(l,b)),_||""}}i.renderer=l}if(t.tokenizer){const l=this.defaults.tokenizer||new zt(this.defaults);for(const r in t.tokenizer){const p=t.tokenizer[r],c=r,h=l[c];l[c]=(...b)=>{let _=p.apply(l,b);return _===!1&&(_=h.apply(l,b)),_}}i.tokenizer=l}if(t.hooks){const l=this.defaults.hooks||new kt;for(const r in t.hooks){const p=t.hooks[r],c=r,h=l[c];kt.passThroughHooks.has(r)?l[c]=b=>{if(this.defaults.async)return Promise.resolve(p.call(l,b)).then(y=>h.call(l,y));const _=p.call(l,b);return h.call(l,_)}:l[c]=(...b)=>{let _=p.apply(l,b);return _===!1&&(_=h.apply(l,b)),_}}i.hooks=l}if(t.walkTokens){const l=this.defaults.walkTokens,r=t.walkTokens;i.walkTokens=function(p){let c=[];return c.push(r.call(this,p)),l&&(c=c.concat(l.call(this,p))),c}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}}tt=new WeakSet,nn=function(e,n){return(t,i,l)=>{typeof i=="function"&&(l=i,i=null);const r={...i},p={...this.defaults,...r};this.defaults.async===!0&&r.async===!1&&(p.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),p.async=!0);const c=At(this,tt,xs).call(this,!!p.silent,!!p.async,l);if(typeof t>"u"||t===null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(di(p,l),p.hooks&&(p.hooks.options=p),l){const h=l,b=p.highlight;let _;try{p.hooks&&(t=p.hooks.preprocess(t)),_=e(t,p)}catch(k){return c(k)}const y=k=>{let R;if(!k)try{p.walkTokens&&this.walkTokens(_,p.walkTokens),R=n(_,p),p.hooks&&(R=p.hooks.postprocess(R))}catch(s){k=s}return p.highlight=b,k?c(k):h(null,R)};if(!b||b.length<3||(delete p.highlight,!_.length))return y();let v=0;this.walkTokens(_,k=>{k.type==="code"&&(v++,setTimeout(()=>{b(k.text,k.lang,(R,s)=>{if(R)return y(R);s!=null&&s!==k.text&&(k.text=s,k.escaped=!0),v--,v===0&&y()})},0))}),v===0&&y();return}if(p.async)return Promise.resolve(p.hooks?p.hooks.preprocess(t):t).then(h=>e(h,p)).then(h=>p.walkTokens?Promise.all(this.walkTokens(h,p.walkTokens)).then(()=>h):h).then(h=>n(h,p)).then(h=>p.hooks?p.hooks.postprocess(h):h).catch(c);try{p.hooks&&(t=p.hooks.preprocess(t));const h=e(t,p);p.walkTokens&&this.walkTokens(h,p.walkTokens);let b=n(h,p);return p.hooks&&(b=p.hooks.postprocess(b)),b}catch(h){return c(h)}}},xs=function(e,n,t){return i=>{if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const l="<p>An error occurred:</p><pre>"+ge(i.message+"",!0)+"</pre>";if(n)return Promise.resolve(l);if(t){t(null,l);return}return l}if(n)return Promise.reject(i);if(t){t(i);return}throw i}};const et=new gi;function K(a,e,n){return et.parse(a,e,n)}K.options=K.setOptions=function(a){return et.setOptions(a),K.defaults=et.defaults,ys(K.defaults),K};K.getDefaults=gn;K.defaults=nt;K.use=function(...a){return et.use(...a),K.defaults=et.defaults,ys(K.defaults),K};K.walkTokens=function(a,e){return et.walkTokens(a,e)};K.parseInline=et.parseInline;K.Parser=Ve;K.parser=Ve.parse;K.Renderer=$t;K.TextRenderer=bn;K.Lexer=$e;K.lexer=$e.lex;K.Tokenizer=zt;K.Slugger=_n;K.Hooks=kt;K.parse=K;K.options;K.setOptions;K.use;K.walkTokens;K.parseInline;Ve.parse;$e.lex;/*! @license DOMPurify 3.2.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.3/LICENSE */const{entries:As,setPrototypeOf:Un,isFrozen:bi,getPrototypeOf:_i,getOwnPropertyDescriptor:ki}=Object;let{freeze:ve,seal:Ie,create:Os}=Object,{apply:sn,construct:an}=typeof Reflect<"u"&&Reflect;ve||(ve=function(e){return e});Ie||(Ie=function(e){return e});sn||(sn=function(e,n,t){return e.apply(n,t)});an||(an=function(e,n){return new e(...n)});const St=Se(Array.prototype.forEach),Bn=Se(Array.prototype.pop),ft=Se(Array.prototype.push),Nt=Se(String.prototype.toLowerCase),qt=Se(String.prototype.toString),Zn=Se(String.prototype.match),mt=Se(String.prototype.replace),wi=Se(String.prototype.indexOf),yi=Se(String.prototype.trim),Le=Se(Object.prototype.hasOwnProperty),ye=Se(RegExp.prototype.test),gt=vi(TypeError);function Se(a){return function(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),i=1;i<n;i++)t[i-1]=arguments[i];return sn(a,e,t)}}function vi(a){return function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return an(a,n)}}function q(a,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Nt;Un&&Un(a,null);let t=e.length;for(;t--;){let i=e[t];if(typeof i=="string"){const l=n(i);l!==i&&(bi(e)||(e[t]=l),i=l)}a[i]=!0}return a}function Ti(a){for(let e=0;e<a.length;e++)Le(a,e)||(a[e]=null);return a}function Je(a){const e=Os(null);for(const[n,t]of As(a))Le(a,n)&&(Array.isArray(t)?e[n]=Ti(t):t&&typeof t=="object"&&t.constructor===Object?e[n]=Je(t):e[n]=t);return e}function bt(a,e){for(;a!==null;){const t=ki(a,e);if(t){if(t.get)return Se(t.get);if(typeof t.value=="function")return Se(t.value)}a=_i(a)}function n(){return null}return n}const qn=ve(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Gt=ve(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Xt=ve(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Ei=ve(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Wt=ve(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),xi=ve(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Gn=ve(["#text"]),Xn=ve(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Yt=ve(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Wn=ve(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Rt=ve(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Ai=Ie(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Oi=Ie(/<%[\w\W]*|[\w\W]*%>/gm),Ci=Ie(/\$\{[\w\W]*}/gm),Si=Ie(/^data-[\-\w.\u00B7-\uFFFF]+$/),Ri=Ie(/^aria-[\-\w]+$/),Cs=Ie(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Ii=Ie(/^(?:\w+script|data):/i),Li=Ie(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Ss=Ie(/^html$/i),Di=Ie(/^[a-z][.\w]*(-[.\w]+)+$/i);var Yn=Object.freeze({__proto__:null,ARIA_ATTR:Ri,ATTR_WHITESPACE:Li,CUSTOM_ELEMENT:Di,DATA_ATTR:Si,DOCTYPE_NAME:Ss,ERB_EXPR:Oi,IS_ALLOWED_URI:Cs,IS_SCRIPT_OR_DATA:Ii,MUSTACHE_EXPR:Ai,TMPLIT_EXPR:Ci});const _t={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Pi=function(){return typeof window>"u"?null:window},Mi=function(e,n){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let t=null;const i="data-tt-policy-suffix";n&&n.hasAttribute(i)&&(t=n.getAttribute(i));const l="dompurify"+(t?"#"+t:"");try{return e.createPolicy(l,{createHTML(r){return r},createScriptURL(r){return r}})}catch{return console.warn("TrustedTypes policy "+l+" could not be created."),null}},Jn=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function Rs(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Pi();const e=z=>Rs(z);if(e.version="3.2.3",e.removed=[],!a||!a.document||a.document.nodeType!==_t.document)return e.isSupported=!1,e;let{document:n}=a;const t=n,i=t.currentScript,{DocumentFragment:l,HTMLTemplateElement:r,Node:p,Element:c,NodeFilter:h,NamedNodeMap:b=a.NamedNodeMap||a.MozNamedAttrMap,HTMLFormElement:_,DOMParser:y,trustedTypes:v}=a,k=c.prototype,R=bt(k,"cloneNode"),s=bt(k,"remove"),o=bt(k,"nextSibling"),u=bt(k,"childNodes"),d=bt(k,"parentNode");if(typeof r=="function"){const z=n.createElement("template");z.content&&z.content.ownerDocument&&(n=z.content.ownerDocument)}let m,g="";const{implementation:w,createNodeIterator:C,createDocumentFragment:I,getElementsByTagName:M}=n,{importNode:V}=t;let E=Jn();e.isSupported=typeof As=="function"&&typeof d=="function"&&w&&w.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:N,ERB_EXPR:U,TMPLIT_EXPR:G,DATA_ATTR:J,ARIA_ATTR:pe,IS_SCRIPT_OR_DATA:Oe,ATTR_WHITESPACE:Ce,CUSTOM_ELEMENT:x}=Yn;let{IS_ALLOWED_URI:B}=Yn,j=null;const je=q({},[...qn,...Gt,...Xt,...Wt,...Gn]);let ie=null;const Pe=q({},[...Xn,...Yt,...Wn,...Rt]);let ae=Object.seal(Os(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Ue=null,Be=null,Ye=!0,be=!0,st=!1,de=!0,Me=!1,he=!0,_e=!1,ne=!1,ut=!1,$=!1,te=!1,se=!1,Re=!0,ke=!1;const wt="user-content-";let fe=!0,Xe=!1,Ze={},Te=null;const it=q({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let kn=null;const wn=q({},["audio","video","img","source","image","track"]);let Vt=null;const yn=q({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),yt="http://www.w3.org/1998/Math/MathML",vt="http://www.w3.org/2000/svg",qe="http://www.w3.org/1999/xhtml";let at=qe,jt=!1,Ut=null;const zs=q({},[yt,vt,qe],qt);let Tt=q({},["mi","mo","mn","ms","mtext"]),Et=q({},["annotation-xml"]);const $s=q({},["title","style","font","a","script"]);let pt=null;const Vs=["application/xhtml+xml","text/html"],js="text/html";let re=null,lt=null;const Us=n.createElement("form"),vn=function(f){return f instanceof RegExp||f instanceof Function},Bt=function(){let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(lt&&lt===f)){if((!f||typeof f!="object")&&(f={}),f=Je(f),pt=Vs.indexOf(f.PARSER_MEDIA_TYPE)===-1?js:f.PARSER_MEDIA_TYPE,re=pt==="application/xhtml+xml"?qt:Nt,j=Le(f,"ALLOWED_TAGS")?q({},f.ALLOWED_TAGS,re):je,ie=Le(f,"ALLOWED_ATTR")?q({},f.ALLOWED_ATTR,re):Pe,Ut=Le(f,"ALLOWED_NAMESPACES")?q({},f.ALLOWED_NAMESPACES,qt):zs,Vt=Le(f,"ADD_URI_SAFE_ATTR")?q(Je(yn),f.ADD_URI_SAFE_ATTR,re):yn,kn=Le(f,"ADD_DATA_URI_TAGS")?q(Je(wn),f.ADD_DATA_URI_TAGS,re):wn,Te=Le(f,"FORBID_CONTENTS")?q({},f.FORBID_CONTENTS,re):it,Ue=Le(f,"FORBID_TAGS")?q({},f.FORBID_TAGS,re):{},Be=Le(f,"FORBID_ATTR")?q({},f.FORBID_ATTR,re):{},Ze=Le(f,"USE_PROFILES")?f.USE_PROFILES:!1,Ye=f.ALLOW_ARIA_ATTR!==!1,be=f.ALLOW_DATA_ATTR!==!1,st=f.ALLOW_UNKNOWN_PROTOCOLS||!1,de=f.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Me=f.SAFE_FOR_TEMPLATES||!1,he=f.SAFE_FOR_XML!==!1,_e=f.WHOLE_DOCUMENT||!1,$=f.RETURN_DOM||!1,te=f.RETURN_DOM_FRAGMENT||!1,se=f.RETURN_TRUSTED_TYPE||!1,ut=f.FORCE_BODY||!1,Re=f.SANITIZE_DOM!==!1,ke=f.SANITIZE_NAMED_PROPS||!1,fe=f.KEEP_CONTENT!==!1,Xe=f.IN_PLACE||!1,B=f.ALLOWED_URI_REGEXP||Cs,at=f.NAMESPACE||qe,Tt=f.MATHML_TEXT_INTEGRATION_POINTS||Tt,Et=f.HTML_INTEGRATION_POINTS||Et,ae=f.CUSTOM_ELEMENT_HANDLING||{},f.CUSTOM_ELEMENT_HANDLING&&vn(f.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(ae.tagNameCheck=f.CUSTOM_ELEMENT_HANDLING.tagNameCheck),f.CUSTOM_ELEMENT_HANDLING&&vn(f.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(ae.attributeNameCheck=f.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),f.CUSTOM_ELEMENT_HANDLING&&typeof f.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(ae.allowCustomizedBuiltInElements=f.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Me&&(be=!1),te&&($=!0),Ze&&(j=q({},Gn),ie=[],Ze.html===!0&&(q(j,qn),q(ie,Xn)),Ze.svg===!0&&(q(j,Gt),q(ie,Yt),q(ie,Rt)),Ze.svgFilters===!0&&(q(j,Xt),q(ie,Yt),q(ie,Rt)),Ze.mathMl===!0&&(q(j,Wt),q(ie,Wn),q(ie,Rt))),f.ADD_TAGS&&(j===je&&(j=Je(j)),q(j,f.ADD_TAGS,re)),f.ADD_ATTR&&(ie===Pe&&(ie=Je(ie)),q(ie,f.ADD_ATTR,re)),f.ADD_URI_SAFE_ATTR&&q(Vt,f.ADD_URI_SAFE_ATTR,re),f.FORBID_CONTENTS&&(Te===it&&(Te=Je(Te)),q(Te,f.FORBID_CONTENTS,re)),fe&&(j["#text"]=!0),_e&&q(j,["html","head","body"]),j.table&&(q(j,["tbody"]),delete Ue.tbody),f.TRUSTED_TYPES_POLICY){if(typeof f.TRUSTED_TYPES_POLICY.createHTML!="function")throw gt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof f.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw gt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');m=f.TRUSTED_TYPES_POLICY,g=m.createHTML("")}else m===void 0&&(m=Mi(v,i)),m!==null&&typeof g=="string"&&(g=m.createHTML(""));ve&&ve(f),lt=f}},Tn=q({},[...Gt,...Xt,...Ei]),En=q({},[...Wt,...xi]),Bs=function(f){let T=d(f);(!T||!T.tagName)&&(T={namespaceURI:at,tagName:"template"});const L=Nt(f.tagName),le=Nt(T.tagName);return Ut[f.namespaceURI]?f.namespaceURI===vt?T.namespaceURI===qe?L==="svg":T.namespaceURI===yt?L==="svg"&&(le==="annotation-xml"||Tt[le]):!!Tn[L]:f.namespaceURI===yt?T.namespaceURI===qe?L==="math":T.namespaceURI===vt?L==="math"&&Et[le]:!!En[L]:f.namespaceURI===qe?T.namespaceURI===vt&&!Et[le]||T.namespaceURI===yt&&!Tt[le]?!1:!En[L]&&($s[L]||!Tn[L]):!!(pt==="application/xhtml+xml"&&Ut[f.namespaceURI]):!1},Ne=function(f){ft(e.removed,{element:f});try{d(f).removeChild(f)}catch{s(f)}},xt=function(f,T){try{ft(e.removed,{attribute:T.getAttributeNode(f),from:T})}catch{ft(e.removed,{attribute:null,from:T})}if(T.removeAttribute(f),f==="is")if($||te)try{Ne(T)}catch{}else try{T.setAttribute(f,"")}catch{}},xn=function(f){let T=null,L=null;if(ut)f="<remove></remove>"+f;else{const ue=Zn(f,/^[\r\n\t ]+/);L=ue&&ue[0]}pt==="application/xhtml+xml"&&at===qe&&(f='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+f+"</body></html>");const le=m?m.createHTML(f):f;if(at===qe)try{T=new y().parseFromString(le,pt)}catch{}if(!T||!T.documentElement){T=w.createDocument(at,"template",null);try{T.documentElement.innerHTML=jt?g:le}catch{}}const me=T.body||T.documentElement;return f&&L&&me.insertBefore(n.createTextNode(L),me.childNodes[0]||null),at===qe?M.call(T,_e?"html":"body")[0]:_e?T.documentElement:me},An=function(f){return C.call(f.ownerDocument||f,f,h.SHOW_ELEMENT|h.SHOW_COMMENT|h.SHOW_TEXT|h.SHOW_PROCESSING_INSTRUCTION|h.SHOW_CDATA_SECTION,null)},Zt=function(f){return f instanceof _&&(typeof f.nodeName!="string"||typeof f.textContent!="string"||typeof f.removeChild!="function"||!(f.attributes instanceof b)||typeof f.removeAttribute!="function"||typeof f.setAttribute!="function"||typeof f.namespaceURI!="string"||typeof f.insertBefore!="function"||typeof f.hasChildNodes!="function")},On=function(f){return typeof p=="function"&&f instanceof p};function Ge(z,f,T){St(z,L=>{L.call(e,f,T,lt)})}const Cn=function(f){let T=null;if(Ge(E.beforeSanitizeElements,f,null),Zt(f))return Ne(f),!0;const L=re(f.nodeName);if(Ge(E.uponSanitizeElement,f,{tagName:L,allowedTags:j}),f.hasChildNodes()&&!On(f.firstElementChild)&&ye(/<[/\w]/g,f.innerHTML)&&ye(/<[/\w]/g,f.textContent)||f.nodeType===_t.progressingInstruction||he&&f.nodeType===_t.comment&&ye(/<[/\w]/g,f.data))return Ne(f),!0;if(!j[L]||Ue[L]){if(!Ue[L]&&Rn(L)&&(ae.tagNameCheck instanceof RegExp&&ye(ae.tagNameCheck,L)||ae.tagNameCheck instanceof Function&&ae.tagNameCheck(L)))return!1;if(fe&&!Te[L]){const le=d(f)||f.parentNode,me=u(f)||f.childNodes;if(me&&le){const ue=me.length;for(let Ee=ue-1;Ee>=0;--Ee){const He=R(me[Ee],!0);He.__removalCount=(f.__removalCount||0)+1,le.insertBefore(He,o(f))}}}return Ne(f),!0}return f instanceof c&&!Bs(f)||(L==="noscript"||L==="noembed"||L==="noframes")&&ye(/<\/no(script|embed|frames)/i,f.innerHTML)?(Ne(f),!0):(Me&&f.nodeType===_t.text&&(T=f.textContent,St([N,U,G],le=>{T=mt(T,le," ")}),f.textContent!==T&&(ft(e.removed,{element:f.cloneNode()}),f.textContent=T)),Ge(E.afterSanitizeElements,f,null),!1)},Sn=function(f,T,L){if(Re&&(T==="id"||T==="name")&&(L in n||L in Us))return!1;if(!(be&&!Be[T]&&ye(J,T))){if(!(Ye&&ye(pe,T))){if(!ie[T]||Be[T]){if(!(Rn(f)&&(ae.tagNameCheck instanceof RegExp&&ye(ae.tagNameCheck,f)||ae.tagNameCheck instanceof Function&&ae.tagNameCheck(f))&&(ae.attributeNameCheck instanceof RegExp&&ye(ae.attributeNameCheck,T)||ae.attributeNameCheck instanceof Function&&ae.attributeNameCheck(T))||T==="is"&&ae.allowCustomizedBuiltInElements&&(ae.tagNameCheck instanceof RegExp&&ye(ae.tagNameCheck,L)||ae.tagNameCheck instanceof Function&&ae.tagNameCheck(L))))return!1}else if(!Vt[T]){if(!ye(B,mt(L,Ce,""))){if(!((T==="src"||T==="xlink:href"||T==="href")&&f!=="script"&&wi(L,"data:")===0&&kn[f])){if(!(st&&!ye(Oe,mt(L,Ce,"")))){if(L)return!1}}}}}}return!0},Rn=function(f){return f!=="annotation-xml"&&Zn(f,x)},In=function(f){Ge(E.beforeSanitizeAttributes,f,null);const{attributes:T}=f;if(!T||Zt(f))return;const L={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ie,forceKeepAttr:void 0};let le=T.length;for(;le--;){const me=T[le],{name:ue,namespaceURI:Ee,value:He}=me,dt=re(ue);let we=ue==="value"?He:yi(He);if(L.attrName=dt,L.attrValue=we,L.keepAttr=!0,L.forceKeepAttr=void 0,Ge(E.uponSanitizeAttribute,f,L),we=L.attrValue,ke&&(dt==="id"||dt==="name")&&(xt(ue,f),we=wt+we),he&&ye(/((--!?|])>)|<\/(style|title)/i,we)){xt(ue,f);continue}if(L.forceKeepAttr||(xt(ue,f),!L.keepAttr))continue;if(!de&&ye(/\/>/i,we)){xt(ue,f);continue}Me&&St([N,U,G],Dn=>{we=mt(we,Dn," ")});const Ln=re(f.nodeName);if(Sn(Ln,dt,we)){if(m&&typeof v=="object"&&typeof v.getAttributeType=="function"&&!Ee)switch(v.getAttributeType(Ln,dt)){case"TrustedHTML":{we=m.createHTML(we);break}case"TrustedScriptURL":{we=m.createScriptURL(we);break}}try{Ee?f.setAttributeNS(Ee,ue,we):f.setAttribute(ue,we),Zt(f)?Ne(f):Bn(e.removed)}catch{}}}Ge(E.afterSanitizeAttributes,f,null)},Zs=function z(f){let T=null;const L=An(f);for(Ge(E.beforeSanitizeShadowDOM,f,null);T=L.nextNode();)Ge(E.uponSanitizeShadowNode,T,null),Cn(T),In(T),T.content instanceof l&&z(T.content);Ge(E.afterSanitizeShadowDOM,f,null)};return e.sanitize=function(z){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},T=null,L=null,le=null,me=null;if(jt=!z,jt&&(z="<!-->"),typeof z!="string"&&!On(z))if(typeof z.toString=="function"){if(z=z.toString(),typeof z!="string")throw gt("dirty is not a string, aborting")}else throw gt("toString is not a function");if(!e.isSupported)return z;if(ne||Bt(f),e.removed=[],typeof z=="string"&&(Xe=!1),Xe){if(z.nodeName){const He=re(z.nodeName);if(!j[He]||Ue[He])throw gt("root node is forbidden and cannot be sanitized in-place")}}else if(z instanceof p)T=xn("<!---->"),L=T.ownerDocument.importNode(z,!0),L.nodeType===_t.element&&L.nodeName==="BODY"||L.nodeName==="HTML"?T=L:T.appendChild(L);else{if(!$&&!Me&&!_e&&z.indexOf("<")===-1)return m&&se?m.createHTML(z):z;if(T=xn(z),!T)return $?null:se?g:""}T&&ut&&Ne(T.firstChild);const ue=An(Xe?z:T);for(;le=ue.nextNode();)Cn(le),In(le),le.content instanceof l&&Zs(le.content);if(Xe)return z;if($){if(te)for(me=I.call(T.ownerDocument);T.firstChild;)me.appendChild(T.firstChild);else me=T;return(ie.shadowroot||ie.shadowrootmode)&&(me=V.call(t,me,!0)),me}let Ee=_e?T.outerHTML:T.innerHTML;return _e&&j["!doctype"]&&T.ownerDocument&&T.ownerDocument.doctype&&T.ownerDocument.doctype.name&&ye(Ss,T.ownerDocument.doctype.name)&&(Ee="<!DOCTYPE "+T.ownerDocument.doctype.name+`>
`+Ee),Me&&St([N,U,G],He=>{Ee=mt(Ee,He," ")}),m&&se?m.createHTML(Ee):Ee},e.setConfig=function(){let z=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Bt(z),ne=!0},e.clearConfig=function(){lt=null,ne=!1},e.isValidAttribute=function(z,f,T){lt||Bt({});const L=re(z),le=re(f);return Sn(L,le,T)},e.addHook=function(z,f){typeof f=="function"&&ft(E[z],f)},e.removeHook=function(z){return Bn(E[z])},e.removeHooks=function(z){E[z]=[]},e.removeAllHooks=function(){E=Jn()},e}var Ni=Rs();const Hi=[{pkg_name:"fractal_tasks_core",version:"1.5.3",task_list:[{version:"1.5.3",name:"Convert Cellvoyager to OME-Zarr",category:"Conversion",modality:"HCS",tags:["Yokogawa","Cellvoyager","2D","3D"],input_types:{},output_types:{},docs_link:"https://fractal-analytics-platform.github.io/fractal-tasks-core",docs_info:`### Purpose
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
`,type:"parallel",authors:"Fractal Core Team",install_instructions:'**How to add this task to a Fractal instance:**\n\nTrigger a PyPI task collection for package `fractal-tasks-core`, package version `1.5.3` and package extras `fractal-tasks`\n\n**How to install this task in a Python environment:**\n\nRun `pip install "fractal-tasks-core[fractal-tasks]==1.5.3"`\n'}]},{pkg_name:"fractal_faim_ipa",version:"0.6.0",task_list:[{version:"0.6.0",name:"Convert MD to OME-Zarr",category:"Conversion",modality:"HCS",tags:["Molecular Devices","Image Xpress","MD"],input_types:{},output_types:{},docs_link:"https://github.com/fractal-analytics-platform/fractal-faim-ipa",docs_info:`### Purpose
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
`,type:"non_parallel",authors:null,install_instructions:'**How to add this task to a Fractal instance:**\n\nTrigger a PyPI task collection with package `fractal-faim-ipa` and package version `0.6.0`\n\n**How to install this task in a Python environment:**\n\nRun `pip install "fractal-faim-ipa==0.6.0"`\n```\n'}]},{pkg_name:"fractal_lif_converters",version:"0.5.0",task_list:[{version:"0.5.0",name:"Convert Lif Plate to OME-Zarr",category:"Conversion",modality:"HCS",tags:["Leica","Plate converter"],input_types:{},output_types:{},docs_link:"https://github.com/fractal-analytics-platform/fractal-lif-converters",docs_info:`### Purpose

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
`,type:"compound",authors:"Fractal Core Team",install_instructions:'**How to add this task to a Fractal instance:**\n\nTrigger a PyPI task collection with package `fractal-lif-converters` and package version `0.5.0`\n\n**How to install this task in a Python environment:**\n\nRun `pip install "fractal-lif-converters==0.5.0"`\n```\n'}]},{pkg_name:"operetta_compose",version:"0.2.13",task_list:[{version:"0.2.13",name:"Harmony to OME-Zarr",category:"Conversion",modality:"HCS",tags:["Opera","Operetta","Perkin Elmer"],input_types:{},output_types:{},docs_link:"https://leukemia-kispi.github.io/operetta-compose/",docs_info:`## harmony_to_ome_zarr
Convert TIFFs which were exported from Harmony (Operetta/Opera, Perkin-Elmer) to OME-ZARR
`,type:"non_parallel",authors:"Fabio Steffen",install_instructions:'**How to add this task to a Fractal instance:**\n\nTrigger a PyPI task collection with package `operetta-compose` and package version `0.2.13`\n\n**How to install this task in a Python environment:**\n\nRun `pip install "operetta-compose==0.2.13"`\n```\n'},{version:"0.2.13",name:"Stardist segmentation",category:"Segmentation",modality:null,tags:[],input_types:{},output_types:{},docs_link:"https://leukemia-kispi.github.io/operetta-compose/",docs_info:`## stardist_segmentation
Segment cells with Stardist
`,type:"parallel",authors:"Fabio Steffen",install_instructions:'**How to add this task to a Fractal instance:**\n\nTrigger a PyPI task collection with package `operetta-compose` and package version `0.2.13`\n\n**How to install this task in a Python environment:**\n\nRun `pip install "operetta-compose==0.2.13"`\n```\n'},{version:"0.2.13",name:"Regionprops measurement",category:"Measurement",modality:null,tags:["regionprops","intensity","morphology"],input_types:{},output_types:{},docs_link:"https://leukemia-kispi.github.io/operetta-compose/",docs_info:`## regionprops_measurement
Take measurements using regionprobs and write the features to the OME-ZARR
`,type:"parallel",authors:"Fabio Steffen",install_instructions:'**How to add this task to a Fractal instance:**\n\nTrigger a PyPI task collection with package `operetta-compose` and package version `0.2.13`\n\n**How to install this task in a Python environment:**\n\nRun `pip install "operetta-compose==0.2.13"`\n```\n'},{version:"0.2.13",name:"Feature classification",category:null,modality:null,tags:["napari feature classifier","object classification"],input_types:{},output_types:{},docs_link:"https://leukemia-kispi.github.io/operetta-compose/",docs_info:`## feature_classification
Classify cells using the [napari-feature-classifier](https://github.com/fractal-napari-plugins-collection/napari-feature-classifier) and write them to the OME-ZARR
`,type:"parallel",authors:"Fabio Steffen",install_instructions:'**How to add this task to a Fractal instance:**\n\nTrigger a PyPI task collection with package `operetta-compose` and package version `0.2.13`\n\n**How to install this task in a Python environment:**\n\nRun `pip install "operetta-compose==0.2.13"`\n```\n'},{version:"0.2.13",name:"Condition registration",category:null,modality:"HCS",tags:["metadata","well conditions","perturbation","treatment"],input_types:{},output_types:{},docs_link:"https://leukemia-kispi.github.io/operetta-compose/",docs_info:"## condition_registration\nRegister the experimental (drug layout) in the OME-ZARR.\nThe table should contain at least the columns `row` and `col` identifying the well.\nIt can have an arbitrary number of additional metadata columns (e.g. drug, concentration, medium, sample).\nDrug combinations can be specified by two entries pointing to the same `row` / `col`\n",type:"parallel",authors:"Fabio Steffen",install_instructions:'**How to add this task to a Fractal instance:**\n\nTrigger a PyPI task collection with package `operetta-compose` and package version `0.2.13`\n\n**How to install this task in a Python environment:**\n\nRun `pip install "operetta-compose==0.2.13"`\n```\n'}]},{pkg_name:"fractal_helper_tasks",version:"0.3.2",task_list:[{version:"0.3.2",name:"Drop T Dimension",category:null,modality:null,tags:["Singleton time dimension"],input_types:{},output_types:{has_t:!1},docs_link:"https://github.com/jluethi/fractal-helper-tasks",docs_info:`### Purpose
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
`}]},{pkg_name:"scmultiplex",version:"0.8.12",task_list:[{version:"0.8.12",name:"scMultiplex Calculate Object Linking",category:"Registration",modality:"HCS",tags:["multiplexing","2D"],input_types:{},output_types:{},docs_link:"https://github.com/fmi-basel/gliberal-scMultipleX",docs_info:`### Purpose
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
`}]},{pkg_name:"fractal_ome_zarr_hcs_stitching",version:"0.0.10",task_list:[{version:"0.0.10",name:"Stitching Task",category:"Registration",modality:null,tags:["multiview-stitcher","Fusion","Registration","Stitching","2D","3D"],input_types:{stitched:!1},output_types:{stitched:!0},docs_link:"https://github.com/m-albert/fractal-ome-zarr-hcs-stitching",docs_info:`## stitching_task
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
`}]},{pkg_name:"abbott",version:"0.1.0",task_list:[{version:"0.1.0",name:"Compute Registration (elastix)",category:"Registration",modality:"HCS",tags:["Multiplexing"],input_types:{},output_types:{},docs_link:"https://github.com/pelkmanslab/abbott",docs_info:`### Purpose
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
`}]},{pkg_name:"apx_fractal_task_collection",version:"0.4.7",task_list:[{version:"0.4.7",name:"Measure Features",category:"Measurement",modality:null,tags:["Textures","Intensity","Morphology","scikit-image","regionprops"],input_types:{},output_types:{},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`### Purpose
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

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.7-py3-none-any.whl\`
`},{version:"0.4.7",name:"Calculate Pixel Intensity Correlation",category:"Measurement",modality:null,tags:["Correlation","Intensity","QC"],input_types:{},output_types:{},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`### Purpose
- Calculates pixel intensity correlation between two channels for each object in a label image.  
- Supports loading channels from different multiplexing acquisitions.  
- Handles multiple channel pairs per well and large datasets efficiently.  

### Outputs
- A **feature table** in the OME-Zarr structure with correlation values for specified channel pairs for each object.  

### Limitations
- Requires consistent **label and channel names** across input zarrs.  
- Assumes NGFF-compatible metadata.  
- Only validated for **level 0 resolution**.`,type:"compound",authors:"Adrian Tschan",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.7-py3-none-any.whl\`
`},{version:"0.4.7",name:"Segment Secondary Objects",category:"Segmentation",modality:"HCS",tags:[],input_types:{},output_types:{},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`### Purpose
- Segments secondary objects based on primary labels and intensity images using watershed segmentation.  
- Supports multiplexed and non-multiplexed acquisitions.  
- Optional parameters allow for flexible handling of thresholds, blurring, and masking.  

### Limitations
- Requires consistent **label and channel names** across input zarrs.  
- Assumes NGFF-compatible metadata.  
- Only tested for **level 0 resolution**.  `,type:"compound",authors:"Adrian Tschan",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.7-py3-none-any.whl\`
`},{version:"0.4.7",name:"Expand Labels",category:"Image Processing",modality:null,tags:[],input_types:{},output_types:{},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`## init_expand_labels
Initialized secondary segmentation task

This task prepares a parallelization list of all zarr_urls that need to be
used to perform expansion of a label image.
## expand_labels_skimage
Expands labels in a label image by "distance" pixels without overlapping.

Takes a primary label image and expands it by a certain distance. Direct
implementation of skimage.segmentation.expand_labels.
`,type:"compound",authors:"Adrian Tschan",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.7-py3-none-any.whl\`
`},{version:"0.4.7",name:"Convert IC6000 to OME-Zarr",category:"Conversion",modality:"HCS",tags:["IC6000","IC6K","IN Cell"],input_types:{},output_types:{},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`## init_convert_IC6000_to_ome_zarr
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

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.7-py3-none-any.whl\`
`},{version:"0.4.7",name:"Add Multiplexing Cycle IC6000",category:"Conversion",modality:"HCS",tags:["IC6000","IC6K","IN Cell"],input_types:{},output_types:{},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`## init_add_multiplexing_cycle_IC6000
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

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.7-py3-none-any.whl\`
`},{version:"0.4.7",name:"Label Assignment by Overlap",category:"Measurement",modality:null,tags:[],input_types:{},output_types:{},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`## init_label_assignment_by_overlap
Initialized label assignment by overlap task

This task prepares a parallelization list of all zarr_urls that need to be
used to perform label assignment based on overlap between two label images.
## label_assignment_by_overlap
Assign labels to each other based on overlap.

Takes a parent label image and a child label image and calculates
overlaps between their labels. Child labels will be assigned to parent
labels based on an overlap threshold.
`,type:"compound",authors:"Adrian Tschan",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.7-py3-none-any.whl\`
`},{version:"0.4.7",name:"Clip Label Image",category:"Image Processing",modality:null,tags:[],input_types:{},output_types:{},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`## init_clip_label_image
Initialized clip label image task

This task prepares a parallelization list of all zarr_urls that need to be
used to perform clipping based on two label images.
## clip_label_image
Clips a label image with a mask.

Takes two label images (or a label image and a binary mask) and replaces
all values in the first label image with 0 where the second label image has
values > 0.
`,type:"compound",authors:"Adrian Tschan",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.7-py3-none-any.whl\`
`},{version:"0.4.7",name:"Mask Label Image",category:"Image Processing",modality:null,tags:[],input_types:{},output_types:{},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`## init_mask_label_image
Initialized apply mask task

This task prepares a parallelization list of all zarr_urls that need to be
used to perform mask application based on two label images.
## mask_label_image
Applies a mask to a label image.

Takes two label images (or a label image and a binary mask) and replaces
all values in the first label image with 0 where the second label image has
values = 0.
`,type:"compound",authors:"Adrian Tschan",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.7-py3-none-any.whl\`
`},{version:"0.4.7",name:"Filter Label by Size",category:"Image Processing",modality:null,tags:[],input_types:{},output_types:{},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`## init_filter_label_by_size
Initialized Filter Label by Size task

This task prepares a parallelization list of all zarr_urls that need to be
used to perform label filtering by size.
## filter_label_by_size
Filter objects in a label image by size.
`,type:"compound",authors:"Adrian Tschan",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.7-py3-none-any.whl\`
`},{version:"0.4.7",name:"Calculate BaSiCPy Illumination Models",category:"Image Processing",modality:null,tags:[],input_types:{},output_types:{},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`## init_calculate_basicpy_illumination_models
Initialized BaSiCPy illumination correction task

This task prepares a parallelization list of all zarr_urls that need to be
used to perform illumination correction with BaSiCPy.
## calculate_basicpy_illumination_models
Calculates illumination correction profiles based on a random sample
of images for each channel_label or wavelength.
`,type:"compound",authors:"Adrian Tschan",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.7-py3-none-any.whl\`
`},{version:"0.4.7",name:"Apply BaSiCPy Illumination Models",category:"Image Processing",modality:null,tags:[],input_types:{illumination_corrected:!1},output_types:{illumination_corrected:!0},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`## apply_basicpy_illumination_models
Applies illumination correction to the images in the OME-Zarr.
`,type:"parallel",authors:"Adrian Tschan",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.7-py3-none-any.whl\`
`},{version:"0.4.7",name:"Aggregate Feature Tables",category:"Other",modality:null,tags:[],input_types:{},output_types:{},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`## init_aggregate_feature_tables
Initialized clip label image task

This task prepares a parallelization list of all zarr_urls that need to be
used to perform clipping based on two label images.
## aggregate_feature_tables
Aggregate feature tables that were calculated per zarr-image to one
Anndata table containing feature measurements across all zarr-images.
`,type:"compound",authors:"Adrian Tschan",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.7-py3-none-any.whl\`
`},{version:"0.4.7",name:"Stitch FOVs with Overlap",category:"Image Processing",modality:null,tags:["Stitching","FOV","Overlap"],input_types:{stitched:!1},output_types:{stitched:!0},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`## stitch_fovs_with_overlap
Stitches FOVs with overlap using ASHLAR (https://github.com/labsyspharm/ashlar).
`,type:"parallel",authors:"Adrian Tschan",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.7-py3-none-any.whl\`
`},{version:"0.4.7",name:"Multiplexed Pixel Clustering",category:"Measurement",modality:null,tags:["Multiplex","Clustering","Pixel","MCU"],input_types:{},output_types:{},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`## multiplexed_pixel_clustering
Perform multiplexed cell unit (MCU) analysis on a label image. Inspired by
Gabriele Gut et al., Multiplexed protein maps link subcellular
organization to cellular states. Science (2018)
DOI: 10.1126/science.aar7042
`,type:"non_parallel",authors:"Adrian Tschan",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.7-py3-none-any.whl\`
`},{version:"0.4.7",name:"Correct Chromatic Shift",category:"Image Processing",modality:null,tags:[],input_types:{chromatic_shift_corrected:!1},output_types:{chromatic_shift_corrected:!0},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`## init_correct_chromatic_shift
Initialized Correct Chromatic Shift task

This task prepares a parallelization list of all zarr_urls that need to be
used to perform chromatic shift correction based on reference images of
(for example) fluorescent beads.
## correct_chromatic_shift
Correct chromatic shift based on reference images (for example fluorescent
beads) and apply it to all images.
`,type:"compound",authors:"Adrian Tschan",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.7-py3-none-any.whl\`
`},{version:"0.4.7",name:"Convert Channel to Label",category:"Other",modality:null,tags:[],input_types:{},output_types:{},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`## init_convert_channel_to_label
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

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.7-py3-none-any.whl\`
`},{version:"0.4.7",name:"Detect Blob Centroids",category:"Segmentation",modality:null,tags:[],input_types:{},output_types:{},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`## init_detect_blob_centroids
Initialized Filter Label by Size task

This task prepares a parallelization list of all zarr_urls that need to be
used to perform Convert Channel to Label task.
## detect_blob_centroids
Detects blob centroids in an intensity image and stores the result as a
label image..
`,type:"compound",authors:"Adrian Tschan",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.7-py3-none-any.whl\`
`},{version:"0.4.7",name:"Ashlar Stitching and Registration",category:"Image Processing",modality:null,tags:["Stitching","Registration"],input_types:{stitched:!1},output_types:{stitched:!0},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`## init_ashlar_stitching_and_registration
Initializes ashlar stitching and registration task

This task prepares a parallelization list of all zarr_urls that need to be
used to perform ashlar stitching and registration.
## ashlar_stitching_and_registration
Stitches FOVs with overlap using ASHLAR (https://github.com/labsyspharm/ashlar)
and register the stitched image to the reference cycle.
`,type:"compound",authors:"Adrian Tschan",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.7-py3-none-any.whl\`
`},{version:"0.4.7",name:"Merge Plate Metadata",category:"Other",modality:null,tags:[],input_types:{},output_types:{},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`## merge_plate_metadata
Merge a metadata csv file with a Fractal feature table.

Takes a csv file containing metadata and merges it into a Fractal
feature table. The metadata columns will appear in the obs of the
feature table.
`,type:"parallel",authors:"Adrian Tschan",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.7-py3-none-any.whl\`
`},{version:"0.4.7",name:"Normalize Feature Table",category:"Feature Table Processing",modality:null,tags:["Normalization","Feature Table"],input_types:{},output_types:{},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`## init_normalize_feature_table
Initializes normalize feature table task

This task prepares a parallelization list of all zarr_urls that need to be
used to perform measurement normalization.
## normalize_feature_table
Normalize measurements in the feature table with selected method
and the selected control condition.
`,type:"compound",authors:"Adrian Tschan",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.7-py3-none-any.whl\`
`},{version:"0.4.7",name:"Correct 4i Bleaching Artifacts",category:"Feature Table Processing",modality:null,tags:["Correction","Feature Table","4i","Bleaching"],input_types:{},output_types:{},docs_link:"https://github.com/Apricot-Therapeutics/APx_fractal_task_collection",docs_info:`## init_correct_4i_bleaching_artifacts
Initializes normalize feature table task

This task prepares a parallelization list of all zarr_urls that need to be
used to perform correction of 4i bleaching artifacts.
## correct_4i_bleaching_artifacts
Correct bleaching aritfacts in the feature table with the selected control
condition. Only intensity features are corrected. Currently, the correction
is applied assuming a zig-zag (starting left-to-right) acquisition pattern.
Other acquisition patterns may be supported in the future.
`,type:"compound",authors:"Adrian Tschan",install_instructions:`**How to add this task to a Fractal instance:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Trigger a local task collection by uploading the wheel file

**How to install this task in a Python environment:**

1. Download the wheel file from [this link](https://github.com/Apricot-Therapeutics/APx_fractal_task_collection/releases/download/0.4.7/apx_fractal_task_collection-0.4.7-py3-none-any.whl)
2. Run \`pip install apx_fractal_task_collection-0.4.7-py3-none-any.whl\`
`}]},{pkg_name:"fractal_hcs_converters",version:"0.3.2",task_list:[{version:"0.3.2",name:"Convert Olympus ScanR Plate to OME-Zarr",category:"Conversion",modality:"HCS",tags:["Olympus","ScanR","Plate converter"],input_types:{},output_types:{},docs_link:"https://github.com/fractal-analytics-platform/fractal-hcs-converters",docs_info:`### Purpose

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
`}]}];var Fi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Is(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Jt={};const zi=typeof process=="object"&&Jt&&Jt.NODE_DEBUG&&/\bsemver\b/i.test(Jt.NODE_DEBUG)?(...a)=>console.error("SEMVER",...a):()=>{};var Ls=zi;const $i="2.0.0",Ds=256,Vi=Number.MAX_SAFE_INTEGER||9007199254740991,ji=16,Ui=Ds-6,Bi=["major","premajor","minor","preminor","patch","prepatch","prerelease"];var Ps={MAX_LENGTH:Ds,MAX_SAFE_COMPONENT_LENGTH:ji,MAX_SAFE_BUILD_LENGTH:Ui,MAX_SAFE_INTEGER:Vi,RELEASE_TYPES:Bi,SEMVER_SPEC_VERSION:$i,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2},ln={exports:{}};(function(a,e){const{MAX_SAFE_COMPONENT_LENGTH:n,MAX_SAFE_BUILD_LENGTH:t,MAX_LENGTH:i}=Ps,l=Ls;e=a.exports={};const r=e.re=[],p=e.safeRe=[],c=e.src=[],h=e.t={};let b=0;const _="[a-zA-Z0-9-]",y=[["\\s",1],["\\d",i],[_,t]],v=R=>{for(const[s,o]of y)R=R.split(`${s}*`).join(`${s}{0,${o}}`).split(`${s}+`).join(`${s}{1,${o}}`);return R},k=(R,s,o)=>{const u=v(s),d=b++;l(R,d,s),h[R]=d,c[d]=s,r[d]=new RegExp(s,o?"g":void 0),p[d]=new RegExp(u,o?"g":void 0)};k("NUMERICIDENTIFIER","0|[1-9]\\d*"),k("NUMERICIDENTIFIERLOOSE","\\d+"),k("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${_}*`),k("MAINVERSION",`(${c[h.NUMERICIDENTIFIER]})\\.(${c[h.NUMERICIDENTIFIER]})\\.(${c[h.NUMERICIDENTIFIER]})`),k("MAINVERSIONLOOSE",`(${c[h.NUMERICIDENTIFIERLOOSE]})\\.(${c[h.NUMERICIDENTIFIERLOOSE]})\\.(${c[h.NUMERICIDENTIFIERLOOSE]})`),k("PRERELEASEIDENTIFIER",`(?:${c[h.NUMERICIDENTIFIER]}|${c[h.NONNUMERICIDENTIFIER]})`),k("PRERELEASEIDENTIFIERLOOSE",`(?:${c[h.NUMERICIDENTIFIERLOOSE]}|${c[h.NONNUMERICIDENTIFIER]})`),k("PRERELEASE",`(?:-(${c[h.PRERELEASEIDENTIFIER]}(?:\\.${c[h.PRERELEASEIDENTIFIER]})*))`),k("PRERELEASELOOSE",`(?:-?(${c[h.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${c[h.PRERELEASEIDENTIFIERLOOSE]})*))`),k("BUILDIDENTIFIER",`${_}+`),k("BUILD",`(?:\\+(${c[h.BUILDIDENTIFIER]}(?:\\.${c[h.BUILDIDENTIFIER]})*))`),k("FULLPLAIN",`v?${c[h.MAINVERSION]}${c[h.PRERELEASE]}?${c[h.BUILD]}?`),k("FULL",`^${c[h.FULLPLAIN]}$`),k("LOOSEPLAIN",`[v=\\s]*${c[h.MAINVERSIONLOOSE]}${c[h.PRERELEASELOOSE]}?${c[h.BUILD]}?`),k("LOOSE",`^${c[h.LOOSEPLAIN]}$`),k("GTLT","((?:<|>)?=?)"),k("XRANGEIDENTIFIERLOOSE",`${c[h.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),k("XRANGEIDENTIFIER",`${c[h.NUMERICIDENTIFIER]}|x|X|\\*`),k("XRANGEPLAIN",`[v=\\s]*(${c[h.XRANGEIDENTIFIER]})(?:\\.(${c[h.XRANGEIDENTIFIER]})(?:\\.(${c[h.XRANGEIDENTIFIER]})(?:${c[h.PRERELEASE]})?${c[h.BUILD]}?)?)?`),k("XRANGEPLAINLOOSE",`[v=\\s]*(${c[h.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[h.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[h.XRANGEIDENTIFIERLOOSE]})(?:${c[h.PRERELEASELOOSE]})?${c[h.BUILD]}?)?)?`),k("XRANGE",`^${c[h.GTLT]}\\s*${c[h.XRANGEPLAIN]}$`),k("XRANGELOOSE",`^${c[h.GTLT]}\\s*${c[h.XRANGEPLAINLOOSE]}$`),k("COERCEPLAIN",`(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`),k("COERCE",`${c[h.COERCEPLAIN]}(?:$|[^\\d])`),k("COERCEFULL",c[h.COERCEPLAIN]+`(?:${c[h.PRERELEASE]})?(?:${c[h.BUILD]})?(?:$|[^\\d])`),k("COERCERTL",c[h.COERCE],!0),k("COERCERTLFULL",c[h.COERCEFULL],!0),k("LONETILDE","(?:~>?)"),k("TILDETRIM",`(\\s*)${c[h.LONETILDE]}\\s+`,!0),e.tildeTrimReplace="$1~",k("TILDE",`^${c[h.LONETILDE]}${c[h.XRANGEPLAIN]}$`),k("TILDELOOSE",`^${c[h.LONETILDE]}${c[h.XRANGEPLAINLOOSE]}$`),k("LONECARET","(?:\\^)"),k("CARETTRIM",`(\\s*)${c[h.LONECARET]}\\s+`,!0),e.caretTrimReplace="$1^",k("CARET",`^${c[h.LONECARET]}${c[h.XRANGEPLAIN]}$`),k("CARETLOOSE",`^${c[h.LONECARET]}${c[h.XRANGEPLAINLOOSE]}$`),k("COMPARATORLOOSE",`^${c[h.GTLT]}\\s*(${c[h.LOOSEPLAIN]})$|^$`),k("COMPARATOR",`^${c[h.GTLT]}\\s*(${c[h.FULLPLAIN]})$|^$`),k("COMPARATORTRIM",`(\\s*)${c[h.GTLT]}\\s*(${c[h.LOOSEPLAIN]}|${c[h.XRANGEPLAIN]})`,!0),e.comparatorTrimReplace="$1$2$3",k("HYPHENRANGE",`^\\s*(${c[h.XRANGEPLAIN]})\\s+-\\s+(${c[h.XRANGEPLAIN]})\\s*$`),k("HYPHENRANGELOOSE",`^\\s*(${c[h.XRANGEPLAINLOOSE]})\\s+-\\s+(${c[h.XRANGEPLAINLOOSE]})\\s*$`),k("STAR","(<|>)?=?\\s*\\*"),k("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),k("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")})(ln,ln.exports);var Zi=ln.exports;const qi=Object.freeze({loose:!0}),Gi=Object.freeze({}),Xi=a=>a?typeof a!="object"?qi:a:Gi;var Wi=Xi;const Qn=/^[0-9]+$/,Ms=(a,e)=>{const n=Qn.test(a),t=Qn.test(e);return n&&t&&(a=+a,e=+e),a===e?0:n&&!t?-1:t&&!n?1:a<e?-1:1},Yi=(a,e)=>Ms(e,a);var Ji={compareIdentifiers:Ms,rcompareIdentifiers:Yi};const It=Ls,{MAX_LENGTH:Kn,MAX_SAFE_INTEGER:Lt}=Ps,{safeRe:es,t:ts}=Zi,Qi=Wi,{compareIdentifiers:ot}=Ji;let Ki=class Fe{constructor(e,n){if(n=Qi(n),e instanceof Fe){if(e.loose===!!n.loose&&e.includePrerelease===!!n.includePrerelease)return e;e=e.version}else if(typeof e!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);if(e.length>Kn)throw new TypeError(`version is longer than ${Kn} characters`);It("SemVer",e,n),this.options=n,this.loose=!!n.loose,this.includePrerelease=!!n.includePrerelease;const t=e.trim().match(n.loose?es[ts.LOOSE]:es[ts.FULL]);if(!t)throw new TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+t[1],this.minor=+t[2],this.patch=+t[3],this.major>Lt||this.major<0)throw new TypeError("Invalid major version");if(this.minor>Lt||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>Lt||this.patch<0)throw new TypeError("Invalid patch version");t[4]?this.prerelease=t[4].split(".").map(i=>{if(/^[0-9]+$/.test(i)){const l=+i;if(l>=0&&l<Lt)return l}return i}):this.prerelease=[],this.build=t[5]?t[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(It("SemVer.compare",this.version,this.options,e),!(e instanceof Fe)){if(typeof e=="string"&&e===this.version)return 0;e=new Fe(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof Fe||(e=new Fe(e,this.options)),ot(this.major,e.major)||ot(this.minor,e.minor)||ot(this.patch,e.patch)}comparePre(e){if(e instanceof Fe||(e=new Fe(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let n=0;do{const t=this.prerelease[n],i=e.prerelease[n];if(It("prerelease compare",n,t,i),t===void 0&&i===void 0)return 0;if(i===void 0)return 1;if(t===void 0)return-1;if(t===i)continue;return ot(t,i)}while(++n)}compareBuild(e){e instanceof Fe||(e=new Fe(e,this.options));let n=0;do{const t=this.build[n],i=e.build[n];if(It("build compare",n,t,i),t===void 0&&i===void 0)return 0;if(i===void 0)return 1;if(t===void 0)return-1;if(t===i)continue;return ot(t,i)}while(++n)}inc(e,n,t){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",n,t);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",n,t);break;case"prepatch":this.prerelease.length=0,this.inc("patch",n,t),this.inc("pre",n,t);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",n,t),this.inc("pre",n,t);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{const i=Number(t)?1:0;if(!n&&t===!1)throw new Error("invalid increment argument: identifier is empty");if(this.prerelease.length===0)this.prerelease=[i];else{let l=this.prerelease.length;for(;--l>=0;)typeof this.prerelease[l]=="number"&&(this.prerelease[l]++,l=-2);if(l===-1){if(n===this.prerelease.join(".")&&t===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(i)}}if(n){let l=[n,i];t===!1&&(l=[n]),ot(this.prerelease[0],n)===0?isNaN(this.prerelease[1])&&(this.prerelease=l):this.prerelease=l}break}default:throw new Error(`invalid increment argument: ${e}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};var ea=Ki;const ns=ea,ta=(a,e,n)=>new ns(a,n).compare(new ns(e,n));var na=ta;const sa=na,ia=(a,e)=>sa(a,e,!0);var aa=ia;const la=Is(aa);function oa(a,e){const n=[];for(const t of a)for(const i of t.task_list){const l=t[e];let r=n.find(h=>h.groupTitle===l);const p=ca(t,i),c=t.version||"";if(r){let h=r.tasks.find(b=>Object.values(b.taskVersions).find(_=>_.task_name===i.name));h?h.taskVersions[c]=p:(h={selectedVersion:c,taskVersions:{[c]:p}},r.tasks.push(h))}else r={groupTitle:t[e],tasks:[{selectedVersion:c,taskVersions:{[c]:p}}]},n.push(r)}return ra(n),n}function ra(a){for(const e of a){for(const n of e.tasks){const t=Object.keys(n.taskVersions).filter(i=>i!=="");t.length>0&&(on(t),n.selectedVersion=t[0])}e.tasks.sort((n,t)=>n.taskVersions[n.selectedVersion].task_id<t.taskVersions[t.selectedVersion].task_id?-1:1)}a.sort((e,n)=>e.groupTitle.localeCompare(n.groupTitle,void 0,{sensitivity:"base"}))}function on(a){try{a.sort((e,n)=>e?n?la(e,n):1:-1).reverse()}catch(e){console.warn("Semver error:",e)}return a}function ca(a,e){return{pkg_name:a.pkg_name,task_id:e.id,task_name:e.name,version:a.version||"",category:e.category,modality:e.modality,authors:e.authors,tags:e.tags,input_types:e.input_types,docs_info:e.docs_info||"",docs_link:e.docs_link,install_instructions:e.install_instructions}}var Ns={exports:{}};(function(a,e){(function(n,t){a.exports=t()})(Fi,function(){class n{constructor(s){s||(s={}),this.main=s.main||"ss-main",this.placeholder=s.placeholder||"ss-placeholder",this.values=s.values||"ss-values",this.single=s.single||"ss-single",this.max=s.max||"ss-max",this.value=s.value||"ss-value",this.valueText=s.valueText||"ss-value-text",this.valueDelete=s.valueDelete||"ss-value-delete",this.valueOut=s.valueOut||"ss-value-out",this.deselect=s.deselect||"ss-deselect",this.deselectPath=s.deselectPath||"M10,10 L90,90 M10,90 L90,10",this.arrow=s.arrow||"ss-arrow",this.arrowClose=s.arrowClose||"M10,30 L50,70 L90,30",this.arrowOpen=s.arrowOpen||"M10,70 L50,30 L90,70",this.content=s.content||"ss-content",this.openAbove=s.openAbove||"ss-open-above",this.openBelow=s.openBelow||"ss-open-below",this.search=s.search||"ss-search",this.searchHighlighter=s.searchHighlighter||"ss-search-highlight",this.searching=s.searching||"ss-searching",this.addable=s.addable||"ss-addable",this.addablePath=s.addablePath||"M50,10 L50,90 M10,50 L90,50",this.list=s.list||"ss-list",this.optgroup=s.optgroup||"ss-optgroup",this.optgroupLabel=s.optgroupLabel||"ss-optgroup-label",this.optgroupLabelText=s.optgroupLabelText||"ss-optgroup-label-text",this.optgroupActions=s.optgroupActions||"ss-optgroup-actions",this.optgroupSelectAll=s.optgroupSelectAll||"ss-selectall",this.optgroupSelectAllBox=s.optgroupSelectAllBox||"M60,10 L10,10 L10,90 L90,90 L90,50",this.optgroupSelectAllCheck=s.optgroupSelectAllCheck||"M30,45 L50,70 L90,10",this.optgroupClosable=s.optgroupClosable||"ss-closable",this.option=s.option||"ss-option",this.optionDelete=s.optionDelete||"M10,10 L90,90 M10,90 L90,10",this.highlighted=s.highlighted||"ss-highlighted",this.open=s.open||"ss-open",this.close=s.close||"ss-close",this.selected=s.selected||"ss-selected",this.error=s.error||"ss-error",this.disabled=s.disabled||"ss-disabled",this.hide=s.hide||"ss-hide"}}function t(){return Math.random().toString(36).substring(2,10)}function i(R,s){function o(d,m){return m&&d&&d.classList&&d.classList.contains(m)||m&&d&&d.dataset&&d.dataset.id&&d.dataset.id===s?d:null}function u(d,m){return!d||d===document?null:o(d,m)?d:u(d.parentNode,m)}return o(R,s)||u(R,s)}function l(R,s=50,o=!1){let u;return function(...d){const m=self,g=()=>{u=null,o||R.apply(m,d)},w=o&&!u;clearTimeout(u),u=setTimeout(g,s),w&&R.apply(m,d)}}function r(R,s){return JSON.stringify(R)===JSON.stringify(s)}function p(R){const s=R.replace(/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g,o=>"-"+o.toLowerCase());return R[0]===R[0].toUpperCase()?s.substring(1):s}class c{constructor(s){if(this.id=!s.id||s.id===""?t():s.id,this.label=s.label||"",this.selectAll=s.selectAll===void 0?!1:s.selectAll,this.selectAllText=s.selectAllText||"Select All",this.closable=s.closable||"off",this.options=[],s.options)for(const o of s.options)this.options.push(new h(o))}}class h{constructor(s){this.id=!s.id||s.id===""?t():s.id,this.value=s.value===void 0?s.text:s.value,this.text=s.text||"",this.html=s.html||"",this.selected=s.selected!==void 0?s.selected:!1,this.display=s.display!==void 0?s.display:!0,this.disabled=s.disabled!==void 0?s.disabled:!1,this.mandatory=s.mandatory!==void 0?s.mandatory:!1,this.placeholder=s.placeholder!==void 0?s.placeholder:!1,this.class=s.class||"",this.style=s.style||"",this.data=s.data||{}}}class b{constructor(s,o){this.selectType="single",this.data=[],this.selectedOrder=[],this.selectType=s,this.setData(o)}validateDataArray(s){if(!Array.isArray(s))return new Error("Data must be an array");for(let o of s)if(o instanceof c||"label"in o){if(!("label"in o))return new Error("Optgroup must have a label");if("options"in o&&o.options)for(let u of o.options){const d=this.validateOption(u);if(d)return d}}else if(o instanceof h||"text"in o){const u=this.validateOption(o);if(u)return u}else return new Error("Data object must be a valid optgroup or option");return null}validateOption(s){return"text"in s?null:new Error("Option must have a text")}partialToFullData(s){let o=[];return s.forEach(u=>{if(u instanceof c||"label"in u){let d=[];"options"in u&&u.options&&u.options.forEach(m=>{d.push(new h(m))}),d.length>0&&o.push(new c(u))}(u instanceof h||"text"in u)&&o.push(new h(u))}),o}setData(s){this.data=this.partialToFullData(s),this.selectType==="single"&&this.setSelectedBy("id",this.getSelected())}getData(){return this.filter(null,!0)}getDataOptions(){return this.filter(null,!1)}addOption(s,o=!1){if(o){let u=[new h(s)];this.setData(u.concat(this.getData()))}else this.setData(this.getData().concat(new h(s)))}setSelectedBy(s,o){let u=null,d=!1;const m=[];for(let w of this.data){if(w instanceof c)for(let C of w.options)u||(u=C),C.selected=d?!1:o.includes(C[s]),C.selected&&(m.push(C),this.selectType==="single"&&(d=!0));w instanceof h&&(u||(u=w),w.selected=d?!1:o.includes(w[s]),w.selected&&(m.push(w),this.selectType==="single"&&(d=!0)))}this.selectType==="single"&&u&&!d&&(u.selected=!0,m.push(u));const g=o.map(w=>{var C;return((C=m.find(I=>I[s]===w))===null||C===void 0?void 0:C.id)||""});this.selectedOrder=g}getSelected(){return this.getSelectedOptions().map(s=>s.id)}getSelectedValues(){return this.getSelectedOptions().map(s=>s.value)}getSelectedOptions(){return this.filter(s=>s.selected,!1)}getOptgroupByID(s){for(let o of this.data)if(o instanceof c&&o.id===s)return o;return null}getOptionByID(s){let o=this.filter(u=>u.id===s,!1);return o.length?o[0]:null}getSelectType(){return this.selectType}getFirstOption(){let s=null;for(let o of this.data)if(o instanceof c?s=o.options[0]:o instanceof h&&(s=o),s)break;return s}search(s,o){return s=s.trim(),s===""?this.getData():this.filter(u=>o(u,s),!0)}filter(s,o){const u=[];return this.data.forEach(d=>{if(d instanceof c){let m=[];if(d.options.forEach(g=>{(!s||s(g))&&(o?m.push(new h(g)):u.push(new h(g)))}),m.length>0){let g=new c(d);g.options=m,u.push(g)}}d instanceof h&&(!s||s(d))&&u.push(new h(d))}),u}selectedOrderOptions(s){const o=[];return this.selectedOrder.forEach(u=>{const d=s.find(m=>m.id===u);d&&o.push(d)}),s.forEach(u=>{let d=!1;o.forEach(m=>{if(u.id===m.id){d=!0;return}}),d||o.push(u)}),o}}class _{constructor(s,o,u,d){this.store=u,this.settings=s,this.classes=o,this.callbacks=d,this.main=this.mainDiv(),this.content=this.contentDiv(),this.updateClassStyles(),this.updateAriaAttributes(),this.settings.contentLocation&&this.settings.contentLocation.appendChild(this.content.main)}enable(){this.main.main.classList.remove(this.classes.disabled),this.content.search.input.disabled=!1}disable(){this.main.main.classList.add(this.classes.disabled),this.content.search.input.disabled=!0}open(){this.main.arrow.path.setAttribute("d",this.classes.arrowOpen),this.main.main.classList.add(this.settings.openPosition==="up"?this.classes.openAbove:this.classes.openBelow),this.main.main.setAttribute("aria-expanded","true"),this.moveContent();const s=this.store.getSelectedOptions();if(s.length){const o=s[s.length-1].id,u=this.content.list.querySelector('[data-id="'+o+'"]');u&&this.ensureElementInView(this.content.list,u)}}close(){this.main.main.classList.remove(this.classes.openAbove),this.main.main.classList.remove(this.classes.openBelow),this.main.main.setAttribute("aria-expanded","false"),this.content.main.classList.remove(this.classes.openAbove),this.content.main.classList.remove(this.classes.openBelow),this.main.arrow.path.setAttribute("d",this.classes.arrowClose)}updateClassStyles(){if(this.main.main.className="",this.main.main.removeAttribute("style"),this.content.main.className="",this.content.main.removeAttribute("style"),this.main.main.classList.add(this.classes.main),this.content.main.classList.add(this.classes.content),this.settings.style!==""&&(this.main.main.style.cssText=this.settings.style,this.content.main.style.cssText=this.settings.style),this.settings.class.length)for(const s of this.settings.class)s.trim()!==""&&(this.main.main.classList.add(s.trim()),this.content.main.classList.add(s.trim()));(this.settings.contentPosition==="relative"||this.settings.contentPosition==="fixed")&&this.content.main.classList.add("ss-"+this.settings.contentPosition)}updateAriaAttributes(){this.main.main.role="combobox",this.main.main.setAttribute("aria-haspopup","listbox"),this.main.main.setAttribute("aria-controls",this.content.main.id),this.main.main.setAttribute("aria-expanded","false"),this.content.main.setAttribute("role","listbox")}mainDiv(){var s;const o=document.createElement("div");o.dataset.id=this.settings.id,o.setAttribute("aria-label",this.settings.ariaLabel),o.tabIndex=0,o.onkeydown=M=>{switch(M.key){case"ArrowUp":case"ArrowDown":return this.callbacks.open(),M.key==="ArrowDown"?this.highlight("down"):this.highlight("up"),!1;case"Tab":return this.callbacks.close(),!0;case"Enter":case" ":this.callbacks.open();const V=this.content.list.querySelector("."+this.classes.highlighted);return V&&V.click(),!1;case"Escape":return this.callbacks.close(),!1}return M.key.length===1&&this.callbacks.open(),!0},o.onclick=M=>{this.settings.disabled||(this.settings.isOpen?this.callbacks.close():this.callbacks.open())};const u=document.createElement("div");u.classList.add(this.classes.values),o.appendChild(u);const d=document.createElement("div");d.classList.add(this.classes.deselect);const m=(s=this.store)===null||s===void 0?void 0:s.getSelectedOptions();!this.settings.allowDeselect||this.settings.isMultiple&&m&&m.length<=0?d.classList.add(this.classes.hide):d.classList.remove(this.classes.hide),d.onclick=M=>{if(M.stopPropagation(),this.settings.disabled)return;let V=!0;const E=this.store.getSelectedOptions(),N=[];if(this.callbacks.beforeChange&&(V=this.callbacks.beforeChange(N,E)===!0),V){if(this.settings.isMultiple)this.callbacks.setSelected([],!1),this.updateDeselectAll();else{const U=this.store.getFirstOption(),G=U?U.id:"";this.callbacks.setSelected(G,!1)}this.settings.closeOnSelect&&this.callbacks.close(),this.callbacks.afterChange&&this.callbacks.afterChange(this.store.getSelectedOptions())}};const g=document.createElementNS("http://www.w3.org/2000/svg","svg");g.setAttribute("viewBox","0 0 100 100");const w=document.createElementNS("http://www.w3.org/2000/svg","path");w.setAttribute("d",this.classes.deselectPath),g.appendChild(w),d.appendChild(g),o.appendChild(d);const C=document.createElementNS("http://www.w3.org/2000/svg","svg");C.classList.add(this.classes.arrow),C.setAttribute("viewBox","0 0 100 100");const I=document.createElementNS("http://www.w3.org/2000/svg","path");return I.setAttribute("d",this.classes.arrowClose),this.settings.alwaysOpen&&C.classList.add(this.classes.hide),C.appendChild(I),o.appendChild(C),{main:o,values:u,deselect:{main:d,svg:g,path:w},arrow:{main:C,path:I}}}mainFocus(s){s!=="click"&&this.main.main.focus({preventScroll:!0})}placeholder(){const s=this.store.filter(d=>d.placeholder,!1);let o=this.settings.placeholderText;s.length&&(s[0].html!==""?o=s[0].html:s[0].text!==""&&(o=s[0].text));const u=document.createElement("div");return u.classList.add(this.classes.placeholder),u.innerHTML=o,u}renderValues(){if(!this.settings.isMultiple){this.renderSingleValue();return}this.renderMultipleValues(),this.updateDeselectAll()}renderSingleValue(){const s=this.store.filter(u=>u.selected&&!u.placeholder,!1),o=s.length>0?s[0]:null;if(!o)this.main.values.innerHTML=this.placeholder().outerHTML;else{const u=document.createElement("div");u.classList.add(this.classes.single),o.html?u.innerHTML=o.html:u.innerText=o.text,this.main.values.innerHTML=u.outerHTML}!this.settings.allowDeselect||!s.length?this.main.deselect.main.classList.add(this.classes.hide):this.main.deselect.main.classList.remove(this.classes.hide)}renderMultipleValues(){let s=this.main.values.childNodes,o=this.store.filter(d=>d.selected&&d.display,!1);if(o.length===0){this.main.values.innerHTML=this.placeholder().outerHTML;return}else{const d=this.main.values.querySelector("."+this.classes.placeholder);d&&d.remove()}if(o.length>this.settings.maxValuesShown){const d=document.createElement("div");d.classList.add(this.classes.max),d.textContent=this.settings.maxValuesMessage.replace("{number}",o.length.toString()),this.main.values.innerHTML=d.outerHTML;return}else{const d=this.main.values.querySelector("."+this.classes.max);d&&d.remove()}this.settings.keepOrder&&(o=this.store.selectedOrderOptions(o));let u=[];for(let d=0;d<s.length;d++){const m=s[d],g=m.getAttribute("data-id");g&&(o.filter(C=>C.id===g,!1).length||u.push(m))}for(const d of u)d.classList.add(this.classes.valueOut),setTimeout(()=>{this.main.values.hasChildNodes()&&this.main.values.contains(d)&&this.main.values.removeChild(d)},100);s=this.main.values.childNodes;for(let d=0;d<o.length;d++){let m=!0;for(let g=0;g<s.length;g++)o[d].id===String(s[g].dataset.id)&&(m=!1);m&&(this.settings.keepOrder?this.main.values.appendChild(this.multipleValue(o[d])):s.length===0?this.main.values.appendChild(this.multipleValue(o[d])):d===0?this.main.values.insertBefore(this.multipleValue(o[d]),s[d]):s[d-1].insertAdjacentElement("afterend",this.multipleValue(o[d])))}}multipleValue(s){const o=document.createElement("div");o.classList.add(this.classes.value),o.dataset.id=s.id;const u=document.createElement("div");if(u.classList.add(this.classes.valueText),u.textContent=s.text,o.appendChild(u),!s.mandatory){const d=document.createElement("div");d.classList.add(this.classes.valueDelete),d.onclick=w=>{if(w.preventDefault(),w.stopPropagation(),this.settings.disabled)return;let C=!0;const I=this.store.getSelectedOptions(),M=I.filter(V=>V.selected&&V.id!==s.id,!0);if(!(this.settings.minSelected&&M.length<this.settings.minSelected)&&(this.callbacks.beforeChange&&(C=this.callbacks.beforeChange(M,I)===!0),C)){let V=[];for(const E of M){if(E instanceof c)for(const N of E.options)V.push(N.id);E instanceof h&&V.push(E.id)}this.callbacks.setSelected(V,!1),this.settings.closeOnSelect&&this.callbacks.close(),this.callbacks.afterChange&&this.callbacks.afterChange(M),this.updateDeselectAll()}};const m=document.createElementNS("http://www.w3.org/2000/svg","svg");m.setAttribute("viewBox","0 0 100 100");const g=document.createElementNS("http://www.w3.org/2000/svg","path");g.setAttribute("d",this.classes.optionDelete),m.appendChild(g),d.appendChild(m),o.appendChild(d)}return o}contentDiv(){const s=document.createElement("div");s.dataset.id=this.settings.id;const o=this.searchDiv();s.appendChild(o.main);const u=this.listDiv();return s.appendChild(u),{main:s,search:o,list:u}}moveContent(){if(this.settings.contentPosition==="relative"){this.moveContentBelow();return}if(this.settings.openPosition==="down"){this.moveContentBelow();return}else if(this.settings.openPosition==="up"){this.moveContentAbove();return}this.putContent()==="up"?this.moveContentAbove():this.moveContentBelow()}searchDiv(){const s=document.createElement("div"),o=document.createElement("input"),u=document.createElement("div");s.classList.add(this.classes.search);const d={main:s,input:o};if(this.settings.showSearch||(s.classList.add(this.classes.hide),o.readOnly=!0),o.type="search",o.placeholder=this.settings.searchPlaceholder,o.tabIndex=-1,o.setAttribute("aria-label",this.settings.searchPlaceholder),o.setAttribute("autocapitalize","off"),o.setAttribute("autocomplete","off"),o.setAttribute("autocorrect","off"),o.oninput=l(m=>{this.callbacks.search(m.target.value)},100),o.onkeydown=m=>{switch(m.key){case"ArrowUp":case"ArrowDown":return m.key==="ArrowDown"?this.highlight("down"):this.highlight("up"),!1;case"Tab":return this.callbacks.close(),!0;case"Escape":return this.callbacks.close(),!1;case" ":const g=this.content.list.querySelector("."+this.classes.highlighted);return g?(g.click(),!1):!0;case"Enter":if(this.callbacks.addable)return u.click(),!1;{const w=this.content.list.querySelector("."+this.classes.highlighted);if(w)return w.click(),!1}return!0}return!0},s.appendChild(o),this.callbacks.addable){u.classList.add(this.classes.addable);const m=document.createElementNS("http://www.w3.org/2000/svg","svg");m.setAttribute("viewBox","0 0 100 100");const g=document.createElementNS("http://www.w3.org/2000/svg","path");g.setAttribute("d",this.classes.addablePath),m.appendChild(g),u.appendChild(m),u.onclick=w=>{if(w.preventDefault(),w.stopPropagation(),!this.callbacks.addable)return;const C=this.content.search.input.value.trim();if(C===""){this.content.search.input.focus();return}const I=V=>{let E=new h(V);if(this.callbacks.addOption(E),this.settings.isMultiple){let N=this.store.getSelected();N.push(E.id),this.callbacks.setSelected(N,!0)}else this.callbacks.setSelected([E.id],!0);this.callbacks.search(""),this.settings.closeOnSelect&&setTimeout(()=>{this.callbacks.close()},100)},M=this.callbacks.addable(C);M===!1||M===void 0||M===null||(M instanceof Promise?M.then(V=>{typeof V=="string"?I({text:V,value:V}):M instanceof Error?this.renderError(M.message):I(V)}):typeof M=="string"?I({text:M,value:M}):M instanceof Error?this.renderError(M.message):I(M))},s.appendChild(u),d.addable={main:u,svg:m,path:g}}return d}searchFocus(){this.content.search.input.focus()}getOptions(s=!1,o=!1,u=!1){let d="."+this.classes.option;return s&&(d+=":not(."+this.classes.placeholder+")"),o&&(d+=":not(."+this.classes.disabled+")"),u&&(d+=":not(."+this.classes.hide+")"),Array.from(this.content.list.querySelectorAll(d))}highlight(s){const o=this.getOptions(!0,!0,!0);if(o.length===0)return;if(o.length===1&&!o[0].classList.contains(this.classes.highlighted)){o[0].classList.add(this.classes.highlighted);return}let u=!1;for(const d of o)d.classList.contains(this.classes.highlighted)&&(u=!0);if(!u){for(const d of o)if(d.classList.contains(this.classes.selected)){d.classList.add(this.classes.highlighted);break}}for(let d=0;d<o.length;d++)if(o[d].classList.contains(this.classes.highlighted)){const m=o[d];m.classList.remove(this.classes.highlighted);const g=m.parentElement;if(g&&g.classList.contains(this.classes.open)){const I=g.querySelector("."+this.classes.optgroupLabel);I&&I.click()}let w=o[s==="down"?d+1<o.length?d+1:0:d-1>=0?d-1:o.length-1];w.classList.add(this.classes.highlighted),this.ensureElementInView(this.content.list,w);const C=w.parentElement;if(C&&C.classList.contains(this.classes.close)){const I=C.querySelector("."+this.classes.optgroupLabel);I&&I.click()}return}o[s==="down"?0:o.length-1].classList.add(this.classes.highlighted),this.ensureElementInView(this.content.list,o[s==="down"?0:o.length-1])}listDiv(){const s=document.createElement("div");return s.classList.add(this.classes.list),s}renderError(s){this.content.list.innerHTML="";const o=document.createElement("div");o.classList.add(this.classes.error),o.textContent=s,this.content.list.appendChild(o)}renderSearching(){this.content.list.innerHTML="";const s=document.createElement("div");s.classList.add(this.classes.searching),s.textContent=this.settings.searchingText,this.content.list.appendChild(s)}renderOptions(s){if(this.content.list.innerHTML="",s.length===0){const o=document.createElement("div");o.classList.add(this.classes.search),this.callbacks.addable?o.innerHTML=this.settings.addableText.replace("{value}",this.content.search.input.value):o.innerHTML=this.settings.searchText,this.content.list.appendChild(o);return}this.settings.allowDeselect&&!this.settings.isMultiple&&(this.store.filter(u=>u.placeholder,!1).length||this.store.addOption(new h({text:"",value:"",selected:!1,placeholder:!0}),!0));for(const o of s){if(o instanceof c){const u=document.createElement("div");u.classList.add(this.classes.optgroup);const d=document.createElement("div");d.classList.add(this.classes.optgroupLabel),u.appendChild(d);const m=document.createElement("div");m.classList.add(this.classes.optgroupLabelText),m.textContent=o.label,d.appendChild(m);const g=document.createElement("div");if(g.classList.add(this.classes.optgroupActions),d.appendChild(g),this.settings.isMultiple&&o.selectAll){const w=document.createElement("div");w.classList.add(this.classes.optgroupSelectAll);let C=!0;for(const N of o.options)if(!N.selected){C=!1;break}C&&w.classList.add(this.classes.selected);const I=document.createElement("span");I.textContent=o.selectAllText,w.appendChild(I);const M=document.createElementNS("http://www.w3.org/2000/svg","svg");M.setAttribute("viewBox","0 0 100 100"),w.appendChild(M);const V=document.createElementNS("http://www.w3.org/2000/svg","path");V.setAttribute("d",this.classes.optgroupSelectAllBox),M.appendChild(V);const E=document.createElementNS("http://www.w3.org/2000/svg","path");E.setAttribute("d",this.classes.optgroupSelectAllCheck),M.appendChild(E),w.addEventListener("click",N=>{N.preventDefault(),N.stopPropagation();const U=this.store.getSelected();if(C){const G=U.filter(J=>{for(const pe of o.options)if(J===pe.id)return!1;return!0});this.callbacks.setSelected(G,!0);return}else{const G=U.concat(o.options.map(J=>J.id));for(const J of o.options)this.store.getOptionByID(J.id)||this.callbacks.addOption(J);this.callbacks.setSelected(G,!0);return}}),g.appendChild(w)}if(o.closable!=="off"){const w=document.createElement("div");w.classList.add(this.classes.optgroupClosable);const C=document.createElementNS("http://www.w3.org/2000/svg","svg");C.setAttribute("viewBox","0 0 100 100"),C.classList.add(this.classes.arrow),w.appendChild(C);const I=document.createElementNS("http://www.w3.org/2000/svg","path");C.appendChild(I),o.options.some(M=>M.selected)||this.content.search.input.value.trim()!==""?(w.classList.add(this.classes.open),I.setAttribute("d",this.classes.arrowOpen)):o.closable==="open"?(u.classList.add(this.classes.open),I.setAttribute("d",this.classes.arrowOpen)):o.closable==="close"&&(u.classList.add(this.classes.close),I.setAttribute("d",this.classes.arrowClose)),d.addEventListener("click",M=>{M.preventDefault(),M.stopPropagation(),u.classList.contains(this.classes.close)?(u.classList.remove(this.classes.close),u.classList.add(this.classes.open),I.setAttribute("d",this.classes.arrowOpen)):(u.classList.remove(this.classes.open),u.classList.add(this.classes.close),I.setAttribute("d",this.classes.arrowClose))}),g.appendChild(w)}u.appendChild(d);for(const w of o.options)u.appendChild(this.option(w));this.content.list.appendChild(u)}o instanceof h&&this.content.list.appendChild(this.option(o))}}option(s){if(s.placeholder){const u=document.createElement("div");return u.classList.add(this.classes.option),u.classList.add(this.classes.hide),u}const o=document.createElement("div");return o.dataset.id=s.id,o.classList.add(this.classes.option),o.setAttribute("role","option"),s.class&&s.class.split(" ").forEach(u=>{o.classList.add(u)}),s.style&&(o.style.cssText=s.style),this.settings.searchHighlight&&this.content.search.input.value.trim()!==""?o.innerHTML=this.highlightText(s.html!==""?s.html:s.text,this.content.search.input.value,this.classes.searchHighlighter):s.html!==""?o.innerHTML=s.html:o.textContent=s.text,this.settings.showOptionTooltips&&o.textContent&&o.setAttribute("title",o.textContent),s.display||o.classList.add(this.classes.hide),s.disabled&&o.classList.add(this.classes.disabled),s.selected&&this.settings.hideSelected&&o.classList.add(this.classes.hide),s.selected?(o.classList.add(this.classes.selected),o.setAttribute("aria-selected","true"),this.main.main.setAttribute("aria-activedescendant",o.id)):(o.classList.remove(this.classes.selected),o.setAttribute("aria-selected","false")),o.addEventListener("click",u=>{u.preventDefault(),u.stopPropagation();const d=this.store.getSelected(),m=u.currentTarget,g=String(m.dataset.id);if(s.disabled||s.selected&&!this.settings.allowDeselect||this.settings.isMultiple&&this.settings.maxSelected<=d.length&&!s.selected||this.settings.isMultiple&&this.settings.minSelected>=d.length&&s.selected)return;let w=!1;const C=this.store.getSelectedOptions();let I=[];this.settings.isMultiple&&(s.selected?I=C.filter(M=>M.id!==g):I=C.concat(s)),this.settings.isMultiple||(s.selected?I=[]:I=[s]),this.callbacks.beforeChange||(w=!0),this.callbacks.beforeChange&&(this.callbacks.beforeChange(I,C)===!1?w=!1:w=!0),w&&(this.store.getOptionByID(g)||this.callbacks.addOption(s),this.callbacks.setSelected(I.map(M=>M.id),!1),this.settings.closeOnSelect&&this.callbacks.close(),this.callbacks.afterChange&&this.callbacks.afterChange(I))}),o}destroy(){this.main.main.remove(),this.content.main.remove()}highlightText(s,o,u){let d=s;const m=new RegExp("(?![^<]*>)("+o.trim()+")(?![^<]*>[^<>]*</)","i");if(!s.match(m))return s;const g=s.match(m).index,w=g+s.match(m)[0].toString().length,C=s.substring(g,w);return d=d.replace(m,`<mark class="${u}">${C}</mark>`),d}moveContentAbove(){const s=this.main.main.offsetHeight,o=this.content.main.offsetHeight;this.main.main.classList.remove(this.classes.openBelow),this.main.main.classList.add(this.classes.openAbove),this.content.main.classList.remove(this.classes.openBelow),this.content.main.classList.add(this.classes.openAbove);const u=this.main.main.getBoundingClientRect();this.content.main.style.margin="-"+(s+o-1)+"px 0px 0px 0px",this.content.main.style.top=u.top+u.height+(this.settings.contentPosition==="fixed"?0:window.scrollY)+"px",this.content.main.style.left=u.left+(this.settings.contentPosition==="fixed"?0:window.scrollX)+"px",this.content.main.style.width=u.width+"px"}moveContentBelow(){this.main.main.classList.remove(this.classes.openAbove),this.main.main.classList.add(this.classes.openBelow),this.content.main.classList.remove(this.classes.openAbove),this.content.main.classList.add(this.classes.openBelow);const s=this.main.main.getBoundingClientRect();this.content.main.style.margin="-1px 0px 0px 0px",this.settings.contentPosition!=="relative"&&(this.content.main.style.top=s.top+s.height+(this.settings.contentPosition==="fixed"?0:window.scrollY)+"px",this.content.main.style.left=s.left+(this.settings.contentPosition==="fixed"?0:window.scrollX)+"px",this.content.main.style.width=s.width+"px")}ensureElementInView(s,o){const u=s.scrollTop+s.offsetTop,d=u+s.clientHeight,m=o.offsetTop,g=m+o.clientHeight;m<u?s.scrollTop-=u-m:g>d&&(s.scrollTop+=g-d)}putContent(){const s=this.main.main.offsetHeight,o=this.main.main.getBoundingClientRect(),u=this.content.main.offsetHeight;return window.innerHeight-(o.top+s)<=u&&o.top>u?"up":"down"}updateDeselectAll(){if(!this.store||!this.settings)return;const s=this.store.getSelectedOptions(),o=s&&s.length>0,u=this.settings.isMultiple,d=this.settings.allowDeselect,m=this.main.deselect.main,g=this.classes.hide;d&&!(u&&!o)?m.classList.remove(g):m.classList.add(g)}}class y{constructor(s){this.listen=!1,this.observer=null,this.select=s,this.valueChange=this.valueChange.bind(this),this.select.addEventListener("change",this.valueChange,{passive:!0}),this.observer=new MutationObserver(this.observeCall.bind(this)),this.changeListen(!0)}enable(){this.select.disabled=!1}disable(){this.select.disabled=!0}hideUI(){this.select.tabIndex=-1,this.select.style.display="none",this.select.setAttribute("aria-hidden","true")}showUI(){this.select.removeAttribute("tabindex"),this.select.style.display="",this.select.removeAttribute("aria-hidden")}changeListen(s){this.listen=s,s&&this.observer&&this.observer.observe(this.select,{subtree:!0,childList:!0,attributes:!0}),s||this.observer&&this.observer.disconnect()}valueChange(s){return this.listen&&this.onValueChange&&this.onValueChange(this.getSelectedOptions()),!0}observeCall(s){if(!this.listen)return;let o=!1,u=!1,d=!1;for(const m of s){if(m.target===this.select&&(m.attributeName==="disabled"&&(u=!0),m.attributeName==="class"&&(o=!0),m.type==="childList")){for(const g of m.addedNodes)if(g.nodeName==="OPTION"&&g.value===this.select.value){this.select.dispatchEvent(new Event("change"));break}d=!0}(m.target.nodeName==="OPTGROUP"||m.target.nodeName==="OPTION")&&(d=!0)}o&&this.onClassChange&&this.onClassChange(this.select.className.split(" ")),u&&this.onDisabledChange&&(this.changeListen(!1),this.onDisabledChange(this.select.disabled),this.changeListen(!0)),d&&this.onOptionsChange&&(this.changeListen(!1),this.onOptionsChange(this.getData()),this.changeListen(!0))}getData(){let s=[];const o=this.select.childNodes;for(const u of o)u.nodeName==="OPTGROUP"&&s.push(this.getDataFromOptgroup(u)),u.nodeName==="OPTION"&&s.push(this.getDataFromOption(u));return s}getDataFromOptgroup(s){let o={id:s.id,label:s.label,selectAll:s.dataset?s.dataset.selectall==="true":!1,selectAllText:s.dataset?s.dataset.selectalltext:"Select all",closable:s.dataset?s.dataset.closable:"off",options:[]};const u=s.childNodes;for(const d of u)d.nodeName==="OPTION"&&o.options.push(this.getDataFromOption(d));return o}getDataFromOption(s){return{id:s.id,value:s.value,text:s.text,html:s.dataset&&s.dataset.html?s.dataset.html:"",selected:s.selected,display:s.style.display!=="none",disabled:s.disabled,mandatory:s.dataset?s.dataset.mandatory==="true":!1,placeholder:s.dataset.placeholder==="true",class:s.className,style:s.style.cssText,data:s.dataset}}getSelectedOptions(){let s=[];const o=this.select.childNodes;for(const u of o){if(u.nodeName==="OPTGROUP"){const d=u.childNodes;for(const m of d)if(m.nodeName==="OPTION"){const g=m;g.selected&&s.push(this.getDataFromOption(g))}}if(u.nodeName==="OPTION"){const d=u;d.selected&&s.push(this.getDataFromOption(d))}}return s}getSelectedValues(){return this.getSelectedOptions().map(s=>s.value)}setSelected(s){this.changeListen(!1);const o=this.select.childNodes;for(const u of o){if(u.nodeName==="OPTGROUP"){const m=u.childNodes;for(const g of m)if(g.nodeName==="OPTION"){const w=g;w.selected=s.includes(w.id)}}if(u.nodeName==="OPTION"){const d=u;d.selected=s.includes(d.id)}}this.changeListen(!0)}setSelectedByValue(s){this.changeListen(!1);const o=this.select.childNodes;for(const u of o){if(u.nodeName==="OPTGROUP"){const m=u.childNodes;for(const g of m)if(g.nodeName==="OPTION"){const w=g;w.selected=s.includes(w.value)}}if(u.nodeName==="OPTION"){const d=u;d.selected=s.includes(d.value)}}this.changeListen(!0)}updateSelect(s,o,u){this.changeListen(!1),s&&(this.select.dataset.id=s),o&&(this.select.style.cssText=o),u&&(this.select.className="",u.forEach(d=>{d.trim()!==""&&this.select.classList.add(d.trim())})),this.changeListen(!0)}updateOptions(s){this.changeListen(!1),this.select.innerHTML="";for(const o of s)o instanceof c&&this.select.appendChild(this.createOptgroup(o)),o instanceof h&&this.select.appendChild(this.createOption(o));this.select.dispatchEvent(new Event("change",{bubbles:!0})),this.changeListen(!0)}createOptgroup(s){const o=document.createElement("optgroup");if(o.id=s.id,o.label=s.label,s.selectAll&&(o.dataset.selectAll="true"),s.closable!=="off"&&(o.dataset.closable=s.closable),s.options)for(const u of s.options)o.appendChild(this.createOption(u));return o}createOption(s){const o=document.createElement("option");return o.id=s.id,o.value=s.value,o.textContent=s.text,s.html!==""&&o.setAttribute("data-html",s.html),s.selected&&(o.selected=s.selected),s.disabled&&(o.disabled=!0),s.display||(o.style.display="none"),s.placeholder&&o.setAttribute("data-placeholder","true"),s.mandatory&&o.setAttribute("data-mandatory","true"),s.class&&s.class.split(" ").forEach(u=>{o.classList.add(u)}),s.data&&typeof s.data=="object"&&Object.keys(s.data).forEach(u=>{o.setAttribute("data-"+p(u),s.data[u])}),o}destroy(){this.changeListen(!1),this.select.removeEventListener("change",this.valueChange),this.observer&&(this.observer.disconnect(),this.observer=null),delete this.select.dataset.id,this.showUI()}}class v{constructor(s){this.id="",this.style="",this.class=[],this.isMultiple=!1,this.isOpen=!1,this.isFullOpen=!1,this.intervalMove=null,s||(s={}),this.id="ss-"+t(),this.style=s.style||"",this.class=s.class||[],this.disabled=s.disabled!==void 0?s.disabled:!1,this.alwaysOpen=s.alwaysOpen!==void 0?s.alwaysOpen:!1,this.showSearch=s.showSearch!==void 0?s.showSearch:!0,this.focusSearch=s.focusSearch!==void 0?s.focusSearch:!0,this.ariaLabel=s.ariaLabel||"Combobox",this.searchPlaceholder=s.searchPlaceholder||"Search",this.searchText=s.searchText||"No Results",this.searchingText=s.searchingText||"Searching...",this.searchHighlight=s.searchHighlight!==void 0?s.searchHighlight:!1,this.closeOnSelect=s.closeOnSelect!==void 0?s.closeOnSelect:!0,this.contentLocation=s.contentLocation||document.body,this.contentPosition=s.contentPosition||"absolute",this.openPosition=s.openPosition||"auto",this.placeholderText=s.placeholderText!==void 0?s.placeholderText:"Select Value",this.allowDeselect=s.allowDeselect!==void 0?s.allowDeselect:!1,this.hideSelected=s.hideSelected!==void 0?s.hideSelected:!1,this.keepOrder=s.keepOrder!==void 0?s.keepOrder:!1,this.showOptionTooltips=s.showOptionTooltips!==void 0?s.showOptionTooltips:!1,this.minSelected=s.minSelected||0,this.maxSelected=s.maxSelected||1e3,this.timeoutDelay=s.timeoutDelay||200,this.maxValuesShown=s.maxValuesShown||20,this.maxValuesMessage=s.maxValuesMessage||"{number} selected",this.addableText=s.addableText||'Press "Enter" to add {value}'}}class k{constructor(s){var o;if(this.events={search:void 0,searchFilter:(w,C)=>w.text.toLowerCase().indexOf(C.toLowerCase())!==-1,addable:void 0,beforeChange:void 0,afterChange:void 0,beforeOpen:void 0,afterOpen:void 0,beforeClose:void 0,afterClose:void 0},this.windowResize=l(()=>{!this.settings.isOpen&&!this.settings.isFullOpen||this.render.moveContent()}),this.windowScroll=l(()=>{!this.settings.isOpen&&!this.settings.isFullOpen||this.render.moveContent()}),this.documentClick=w=>{this.settings.isOpen&&w.target&&!i(w.target,this.settings.id)&&this.close(w.type)},this.windowVisibilityChange=()=>{document.hidden&&this.close()},this.selectEl=typeof s.select=="string"?document.querySelector(s.select):s.select,!this.selectEl){s.events&&s.events.error&&s.events.error(new Error("Could not find select element"));return}if(this.selectEl.tagName!=="SELECT"){s.events&&s.events.error&&s.events.error(new Error("Element isnt of type select"));return}this.selectEl.dataset.ssid&&this.destroy(),this.settings=new v(s.settings),this.cssClasses=new n(s.cssClasses);const u=["afterChange","beforeOpen","afterOpen","beforeClose","afterClose"];for(const w in s.events)s.events.hasOwnProperty(w)&&(u.indexOf(w)!==-1?this.events[w]=l(s.events[w],100):this.events[w]=s.events[w]);this.settings.disabled=!((o=s.settings)===null||o===void 0)&&o.disabled?s.settings.disabled:this.selectEl.disabled,this.settings.isMultiple=this.selectEl.multiple,this.settings.style=this.selectEl.style.cssText,this.settings.class=this.selectEl.className.split(" "),this.select=new y(this.selectEl),this.select.updateSelect(this.settings.id,this.settings.style,this.settings.class),this.select.hideUI(),this.select.onValueChange=w=>{this.setSelected(w.map(C=>C.id))},this.select.onClassChange=w=>{this.settings.class=w,this.render.updateClassStyles()},this.select.onDisabledChange=w=>{w?this.disable():this.enable()},this.select.onOptionsChange=w=>{this.setData(w)},this.store=new b(this.settings.isMultiple?"multiple":"single",s.data?s.data:this.select.getData()),s.data&&this.select.updateOptions(this.store.getData());const d={open:this.open.bind(this),close:this.close.bind(this),addable:this.events.addable?this.events.addable:void 0,setSelected:this.setSelected.bind(this),addOption:this.addOption.bind(this),search:this.search.bind(this),beforeChange:this.events.beforeChange,afterChange:this.events.afterChange};this.render=new _(this.settings,this.cssClasses,this.store,d),this.render.renderValues(),this.render.renderOptions(this.store.getData());const m=this.selectEl.getAttribute("aria-label"),g=this.selectEl.getAttribute("aria-labelledby");m?this.render.main.main.setAttribute("aria-label",m):g&&this.render.main.main.setAttribute("aria-labelledby",g),this.selectEl.parentNode&&this.selectEl.parentNode.insertBefore(this.render.main.main,this.selectEl.nextSibling),window.addEventListener("resize",this.windowResize,!1),this.settings.openPosition==="auto"&&window.addEventListener("scroll",this.windowScroll,!1),document.addEventListener("visibilitychange",this.windowVisibilityChange),this.settings.disabled&&this.disable(),this.settings.alwaysOpen&&this.open(),this.selectEl.slim=this}enable(){this.settings.disabled=!1,this.select.enable(),this.render.enable()}disable(){this.settings.disabled=!0,this.select.disable(),this.render.disable()}getData(){return this.store.getData()}setData(s){const o=this.store.getSelected(),u=this.store.validateDataArray(s);if(u){this.events.error&&this.events.error(u);return}this.store.setData(s);const d=this.store.getData();this.select.updateOptions(d),this.render.renderValues(),this.render.renderOptions(d),this.events.afterChange&&!r(o,this.store.getSelected())&&this.events.afterChange(this.store.getSelectedOptions())}getSelected(){let s=this.store.getSelectedOptions();return this.settings.keepOrder&&(s=this.store.selectedOrderOptions(s)),s.map(o=>o.value)}setSelected(s,o=!0){const u=this.store.getSelected(),d=this.store.getDataOptions();s=Array.isArray(s)?s:[s];const m=[];for(const w of s){if(d.find(C=>C.id==w)){m.push(w);continue}for(const C of d.filter(I=>I.value==w))m.push(C.id)}this.store.setSelectedBy("id",m);const g=this.store.getData();this.select.updateOptions(g),this.render.renderValues(),this.render.content.search.input.value!==""?this.search(this.render.content.search.input.value):this.render.renderOptions(g),o&&this.events.afterChange&&!r(u,this.store.getSelected())&&this.events.afterChange(this.store.getSelectedOptions())}addOption(s){const o=this.store.getSelected();this.store.getDataOptions().some(d=>{var m;return d.value===((m=s.value)!==null&&m!==void 0?m:s.text)})||this.store.addOption(s);const u=this.store.getData();this.select.updateOptions(u),this.render.renderValues(),this.render.renderOptions(u),this.events.afterChange&&!r(o,this.store.getSelected())&&this.events.afterChange(this.store.getSelectedOptions())}open(){this.settings.disabled||this.settings.isOpen||(this.events.beforeOpen&&this.events.beforeOpen(),this.render.open(),this.settings.showSearch&&this.settings.focusSearch&&this.render.searchFocus(),this.settings.isOpen=!0,setTimeout(()=>{this.events.afterOpen&&this.events.afterOpen(),this.settings.isOpen&&(this.settings.isFullOpen=!0),document.addEventListener("click",this.documentClick)},this.settings.timeoutDelay),this.settings.contentPosition==="absolute"&&(this.settings.intervalMove&&clearInterval(this.settings.intervalMove),this.settings.intervalMove=setInterval(this.render.moveContent.bind(this.render),500)))}close(s=null){!this.settings.isOpen||this.settings.alwaysOpen||(this.events.beforeClose&&this.events.beforeClose(),this.render.close(),this.render.content.search.input.value!==""&&this.search(""),this.render.mainFocus(s),this.settings.isOpen=!1,this.settings.isFullOpen=!1,setTimeout(()=>{this.events.afterClose&&this.events.afterClose(),document.removeEventListener("click",this.documentClick)},this.settings.timeoutDelay),this.settings.intervalMove&&clearInterval(this.settings.intervalMove))}search(s){if(this.render.content.search.input.value!==s&&(this.render.content.search.input.value=s),!this.events.search){this.render.renderOptions(s===""?this.store.getData():this.store.search(s,this.events.searchFilter));return}this.render.renderSearching();const o=this.events.search(s,this.store.getSelectedOptions());if(o instanceof Promise){o.then(u=>{this.render.renderOptions(this.store.partialToFullData(u))}).catch(u=>{this.render.renderError(typeof u=="string"?u:u.message)});return}else Array.isArray(o)?this.render.renderOptions(this.store.partialToFullData(o)):this.render.renderError("Search event must return a promise or an array of data")}destroy(){document.removeEventListener("click",this.documentClick),window.removeEventListener("resize",this.windowResize,!1),this.settings.openPosition==="auto"&&window.removeEventListener("scroll",this.windowScroll,!1),document.removeEventListener("visibilitychange",this.windowVisibilityChange),this.store.setData([]),this.render.destroy(),this.select.destroy()}}return k})})(Ns);var ha=Ns.exports;const ua=Is(ha);function ss(a){let e,n;return{c(){e=D("span"),n=xe(a[0]),this.h()},l(t){e=P(t,"SPAN",{style:!0,class:!0});var i=Z(e);n=Ae(i,a[0]),i.forEach(A),this.h()},h(){Nn(e,"background-color",a[2](a[0])),H(e,"class","badge rounded-pill coloured-badge text-dark")},m(t,i){X(t,e,i),O(e,n)},p(t,i){i&1&&De(n,t[0]),i&1&&Nn(e,"background-color",t[2](t[0]))},d(t){t&&A(e)}}}function pa(a){let e,n=a[0]&&a[1]&&ss(a);return{c(){n&&n.c(),e=We()},l(t){n&&n.l(t),e=We()},m(t,i){n&&n.m(t,i),X(t,e,i)},p(t,[i]){t[0]&&t[1]?n?n.p(t,i):(n=ss(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:Qe,o:Qe,d(t){t&&A(e),n&&n.d(t)}}}function da(a,e,n){let{value:t}=e,i;function l(p){return new i({lightness:.8,saturation:.95}).hex(p)}let r=!1;return ws(async()=>{i=(await ei(async()=>{const{default:p}=await import("../chunks/esm.B-bOhdOb.js");return{default:p}},[],import.meta.url)).default,n(1,r=!0)}),a.$$set=p=>{"value"in p&&n(0,t=p.value)},[t,r,l]}class Hs extends cn{constructor(e){super(),hn(this,e,da,pa,rn,{value:0})}}function is(a,e,n){const t=a.slice();return t[32]=e[n],t}function as(a,e,n){const t=a.slice();return t[35]=e[n],t[36]=e,t[37]=n,t}const fa=a=>({task:a[0]&2}),ls=a=>({task:a[35].taskVersions[a[35].selectedVersion]});function os(a,e,n){const t=a.slice();return t[38]=e[n],t}const ma=a=>({}),rs=a=>({}),ga=a=>({}),cs=a=>({});function ba(a){let e,n,t,i,l,r,p,c,h,b,_,y,v,k,R,s,o,u,d=a[7][Fs]+"",m,g,w,C="Category",I,M,V="Modality",E,N,U="Metadata",G,J,pe="Version",Oe,Ce,x,B,j,je,ie,Pe,ae,Ue,Be=a[5]===1?"task":"tasks",Ye,be;const st=a[15]["extra-columns-colgroup"],de=Qt(st,a,a[14],cs),Me=a[15]["extra-columns-header"],he=Qt(Me,a,a[14],rs);let _e=ht(a[1]),ne=[];for(let $=0;$<_e.length;$+=1)ne[$]=ms(is(a,_e,$));const ut=$=>ce(ne[$],1,1,()=>{ne[$]=null});return{c(){e=D("div"),n=D("div"),t=D("table"),i=D("colgroup"),l=D("col"),r=W(),p=D("col"),c=W(),h=D("col"),b=W(),_=D("col"),y=W(),v=D("col"),k=W(),de&&de.c(),R=W(),s=D("thead"),o=D("tr"),u=D("th"),m=xe(d),g=W(),w=D("th"),w.textContent=C,I=W(),M=D("th"),M.textContent=V,E=W(),N=D("th"),N.textContent=U,G=W(),J=D("th"),J.textContent=pe,Oe=W(),he&&he.c(),Ce=W(),x=D("tbody");for(let $=0;$<ne.length;$+=1)ne[$].c();B=W(),j=D("p"),je=xe("Showing "),ie=xe(a[6]),Pe=xe(" of "),ae=xe(a[5]),Ue=W(),Ye=xe(Be),this.h()},l($){e=P($,"DIV",{class:!0});var te=Z(e);n=P(te,"DIV",{class:!0});var se=Z(n);t=P(se,"TABLE",{class:!0,id:!0});var Re=Z(t);i=P(Re,"COLGROUP",{});var ke=Z(i);l=P(ke,"COL",{}),r=Y(ke),p=P(ke,"COL",{}),c=Y(ke),h=P(ke,"COL",{}),b=Y(ke),_=P(ke,"COL",{}),y=Y(ke),v=P(ke,"COL",{width:!0}),k=Y(ke),de&&de.l(ke),ke.forEach(A),R=Y(Re),s=P(Re,"THEAD",{});var wt=Z(s);o=P(wt,"TR",{});var fe=Z(o);u=P(fe,"TH",{class:!0});var Xe=Z(u);m=Ae(Xe,d),Xe.forEach(A),g=Y(fe),w=P(fe,"TH",{class:!0,"data-svelte-h":!0}),ze(w)!=="svelte-10ppr1q"&&(w.textContent=C),I=Y(fe),M=P(fe,"TH",{class:!0,"data-svelte-h":!0}),ze(M)!=="svelte-slk3w9"&&(M.textContent=V),E=Y(fe),N=P(fe,"TH",{class:!0,"data-svelte-h":!0}),ze(N)!=="svelte-v7n8cf"&&(N.textContent=U),G=Y(fe),J=P(fe,"TH",{class:!0,"data-svelte-h":!0}),ze(J)!=="svelte-1mhdjxa"&&(J.textContent=pe),Oe=Y(fe),he&&he.l(fe),fe.forEach(A),wt.forEach(A),Ce=Y(Re),x=P(Re,"TBODY",{});var Ze=Z(x);for(let it=0;it<ne.length;it+=1)ne[it].l(Ze);Ze.forEach(A),Re.forEach(A),se.forEach(A),te.forEach(A),B=Y($),j=P($,"P",{class:!0});var Te=Z(j);je=Ae(Te,"Showing "),ie=Ae(Te,a[6]),Pe=Ae(Te," of "),ae=Ae(Te,a[5]),Ue=Y(Te),Ye=Ae(Te,Be),Te.forEach(A),this.h()},h(){H(v,"width","120"),H(u,"class","svelte-1h5c2ka"),H(w,"class","svelte-1h5c2ka"),H(M,"class","svelte-1h5c2ka"),H(N,"class","svelte-1h5c2ka"),H(J,"class","svelte-1h5c2ka"),H(t,"class","table table-borderless svelte-1h5c2ka"),H(t,"id","filtered-tasks-table"),H(n,"class","card-body p-0"),H(e,"class","card"),H(j,"class","mt-3 text-center mb-0")},m($,te){X($,e,te),O(e,n),O(n,t),O(t,i),O(i,l),O(i,r),O(i,p),O(i,c),O(i,h),O(i,b),O(i,_),O(i,y),O(i,v),O(i,k),de&&de.m(i,null),O(t,R),O(t,s),O(s,o),O(o,u),O(u,m),O(o,g),O(o,w),O(o,I),O(o,M),O(o,E),O(o,N),O(o,G),O(o,J),O(o,Oe),he&&he.m(o,null),O(t,Ce),O(t,x);for(let se=0;se<ne.length;se+=1)ne[se]&&ne[se].m(x,null);X($,B,te),X($,j,te),O(j,je),O(j,ie),O(j,Pe),O(j,ae),O(j,Ue),O(j,Ye),be=!0},p($,te){if(de&&de.p&&(!be||te[0]&16384)&&Kt(de,st,$,$[14],be?tn(st,$[14],te,ga):en($[14]),cs),he&&he.p&&(!be||te[0]&16384)&&Kt(he,Me,$,$[14],be?tn(Me,$[14],te,ma):en($[14]),rs),te[0]&16410){_e=ht($[1]);let se;for(se=0;se<_e.length;se+=1){const Re=is($,_e,se);ne[se]?(ne[se].p(Re,te),oe(ne[se],1)):(ne[se]=ms(Re),ne[se].c(),oe(ne[se],1),ne[se].m(x,null))}for(rt(),se=_e.length;se<ne.length;se+=1)ut(se);ct()}(!be||te[0]&64)&&De(ie,$[6]),(!be||te[0]&32)&&De(ae,$[5]),(!be||te[0]&32)&&Be!==(Be=$[5]===1?"task":"tasks")&&De(Ye,Be)},i($){if(!be){oe(de,$),oe(he,$);for(let te=0;te<_e.length;te+=1)oe(ne[te]);be=!0}},o($){ce(de,$),ce(he,$),ne=ne.filter(Boolean);for(let te=0;te<ne.length;te+=1)ce(ne[te]);be=!1},d($){$&&(A(e),A(B),A(j)),de&&de.d($),he&&he.d($),un(ne,$)}}}function _a(a){let e,n=`There are no available tasks. You can add new tasks on the
		<a href="/v2/tasks/management">Tasks management</a> page.`;return{c(){e=D("p"),e.innerHTML=n},l(t){e=P(t,"P",{"data-svelte-h":!0}),ze(e)!=="svelte-1jz05g4"&&(e.innerHTML=n)},m(t,i){X(t,e,i)},p:Qe,i:Qe,o:Qe,d(t){t&&A(e)}}}function hs(a){let e,n,t,i,l,r,p,c,h=bs(a[35].taskVersions[a[35].selectedVersion])+"",b,_,y,v,k,R,s;function o(E,N){return E[35].taskVersions[E[35].selectedVersion].docs_link?wa:ka}let u=o(a),d=u(a),m=a[35].taskVersions[a[35].selectedVersion].category&&us(a),g=a[35].taskVersions[a[35].selectedVersion].modality&&ps(a);function w(E,N){return N[0]&2&&(v=null),v==null&&(v=Object.keys(E[35].taskVersions).length>1),v?va:ya}let C=w(a,[-1,-1]),I=C(a);const M=a[15]["extra-columns"],V=Qt(M,a,a[14],ls);return{c(){e=D("tr"),n=D("td"),d.c(),t=W(),i=D("td"),m&&m.c(),l=W(),r=D("td"),g&&g.c(),p=W(),c=D("td"),b=xe(h),_=W(),y=D("td"),I.c(),k=W(),V&&V.c(),R=W(),this.h()},l(E){e=P(E,"TR",{});var N=Z(e);n=P(N,"TD",{class:!0});var U=Z(n);d.l(U),U.forEach(A),t=Y(N),i=P(N,"TD",{class:!0});var G=Z(i);m&&m.l(G),G.forEach(A),l=Y(N),r=P(N,"TD",{class:!0});var J=Z(r);g&&g.l(J),J.forEach(A),p=Y(N),c=P(N,"TD",{class:!0});var pe=Z(c);b=Ae(pe,h),pe.forEach(A),_=Y(N),y=P(N,"TD",{class:!0});var Oe=Z(y);I.l(Oe),Oe.forEach(A),k=Y(N),V&&V.l(N),R=Y(N),N.forEach(A),this.h()},h(){H(n,"class","task-name-col svelte-1h5c2ka"),H(i,"class","svelte-1h5c2ka"),H(r,"class","svelte-1h5c2ka"),H(c,"class","metadata-col svelte-1h5c2ka"),H(y,"class","version-col svelte-1h5c2ka")},m(E,N){X(E,e,N),O(e,n),d.m(n,null),O(e,t),O(e,i),m&&m.m(i,null),O(e,l),O(e,r),g&&g.m(r,null),O(e,p),O(e,c),O(c,b),O(e,_),O(e,y),I.m(y,null),O(e,k),V&&V.m(e,null),O(e,R),s=!0},p(E,N){u===(u=o(E))&&d?d.p(E,N):(d.d(1),d=u(E),d&&(d.c(),d.m(n,null))),E[35].taskVersions[E[35].selectedVersion].category?m?(m.p(E,N),N[0]&2&&oe(m,1)):(m=us(E),m.c(),oe(m,1),m.m(i,null)):m&&(rt(),ce(m,1,1,()=>{m=null}),ct()),E[35].taskVersions[E[35].selectedVersion].modality?g?(g.p(E,N),N[0]&2&&oe(g,1)):(g=ps(E),g.c(),oe(g,1),g.m(r,null)):g&&(rt(),ce(g,1,1,()=>{g=null}),ct()),(!s||N[0]&2)&&h!==(h=bs(E[35].taskVersions[E[35].selectedVersion])+"")&&De(b,h),C===(C=w(E,N))&&I?I.p(E,N):(I.d(1),I=C(E),I&&(I.c(),I.m(y,null))),V&&V.p&&(!s||N[0]&16386)&&Kt(V,M,E,E[14],s?tn(M,E[14],N,fa):en(E[14]),ls)},i(E){s||(oe(m),oe(g),oe(V,E),s=!0)},o(E){ce(m),ce(g),ce(V,E),s=!1},d(E){E&&A(e),d.d(),m&&m.d(),g&&g.d(),I.d(),V&&V.d(E)}}}function ka(a){let e=a[35].taskVersions[a[35].selectedVersion].task_name+"",n;return{c(){n=xe(e)},l(t){n=Ae(t,e)},m(t,i){X(t,n,i)},p(t,i){i[0]&2&&e!==(e=t[35].taskVersions[t[35].selectedVersion].task_name+"")&&De(n,e)},d(t){t&&A(n)}}}function wa(a){let e,n=a[35].taskVersions[a[35].selectedVersion].task_name+"",t,i;return{c(){e=D("a"),t=xe(n),this.h()},l(l){e=P(l,"A",{href:!0,target:!0});var r=Z(e);t=Ae(r,n),r.forEach(A),this.h()},h(){H(e,"href",i=a[35].taskVersions[a[35].selectedVersion].docs_link),H(e,"target","_blank")},m(l,r){X(l,e,r),O(e,t)},p(l,r){r[0]&2&&n!==(n=l[35].taskVersions[l[35].selectedVersion].task_name+"")&&De(t,n),r[0]&2&&i!==(i=l[35].taskVersions[l[35].selectedVersion].docs_link)&&H(e,"href",i)},d(l){l&&A(e)}}}function us(a){let e,n,t,i,l;n=new Hs({props:{value:a[35].taskVersions[a[35].selectedVersion].category}});function r(){return a[17](a[35])}return{c(){e=D("button"),pn(n.$$.fragment),this.h()},l(p){e=P(p,"BUTTON",{class:!0});var c=Z(e);dn(n.$$.fragment,c),c.forEach(A),this.h()},h(){H(e,"class","btn btn-link p-0")},m(p,c){X(p,e,c),fn(n,e,null),t=!0,i||(l=Ke(e,"click",r),i=!0)},p(p,c){a=p;const h={};c[0]&2&&(h.value=a[35].taskVersions[a[35].selectedVersion].category),n.$set(h)},i(p){t||(oe(n.$$.fragment,p),t=!0)},o(p){ce(n.$$.fragment,p),t=!1},d(p){p&&A(e),mn(n),i=!1,l()}}}function ps(a){let e,n,t,i,l;n=new Hs({props:{value:a[35].taskVersions[a[35].selectedVersion].modality}});function r(){return a[18](a[35])}return{c(){e=D("button"),pn(n.$$.fragment),this.h()},l(p){e=P(p,"BUTTON",{class:!0});var c=Z(e);dn(n.$$.fragment,c),c.forEach(A),this.h()},h(){H(e,"class","btn btn-link p-0")},m(p,c){X(p,e,c),fn(n,e,null),t=!0,i||(l=Ke(e,"click",r),i=!0)},p(p,c){a=p;const h={};c[0]&2&&(h.value=a[35].taskVersions[a[35].selectedVersion].modality),n.$set(h)},i(p){t||(oe(n.$$.fragment,p),t=!0)},o(p){ce(n.$$.fragment,p),t=!1},d(p){p&&A(e),mn(n),i=!1,l()}}}function ya(a){let e=a[35].taskVersions[a[35].selectedVersion].version+"",n;return{c(){n=xe(e)},l(t){n=Ae(t,e)},m(t,i){X(t,n,i)},p(t,i){i[0]&2&&e!==(e=t[35].taskVersions[t[35].selectedVersion].version+"")&&De(n,e)},d(t){t&&A(n)}}}function va(a){let e,n,t,i,l=ht(on(Object.keys(a[35].taskVersions))),r=[];for(let c=0;c<l.length;c+=1)r[c]=ds(os(a,l,c));function p(){a[19].call(e,a[36],a[37])}return{c(){e=D("select");for(let c=0;c<r.length;c+=1)r[c].c();this.h()},l(c){e=P(c,"SELECT",{class:!0,"aria-label":!0});var h=Z(e);for(let b=0;b<r.length;b+=1)r[b].l(h);h.forEach(A),this.h()},h(){H(e,"class","form-select"),H(e,"aria-label",n="Version for task "+a[35].taskVersions[a[35].selectedVersion].task_name),a[35].selectedVersion===void 0&&Ys(p)},m(c,h){X(c,e,h);for(let b=0;b<r.length;b+=1)r[b]&&r[b].m(e,null);Hn(e,a[35].selectedVersion,!0),t||(i=Ke(e,"change",p),t=!0)},p(c,h){if(a=c,h[0]&2){l=ht(on(Object.keys(a[35].taskVersions)));let b;for(b=0;b<l.length;b+=1){const _=os(a,l,b);r[b]?r[b].p(_,h):(r[b]=ds(_),r[b].c(),r[b].m(e,null))}for(;b<r.length;b+=1)r[b].d(1);r.length=l.length}h[0]&2&&n!==(n="Version for task "+a[35].taskVersions[a[35].selectedVersion].task_name)&&H(e,"aria-label",n),h[0]&2&&Hn(e,a[35].selectedVersion)},d(c){c&&A(e),un(r,c),t=!1,i()}}}function ds(a){let e,n=(a[38]||"None")+"",t,i;return{c(){e=D("option"),t=xe(n),this.h()},l(l){e=P(l,"OPTION",{});var r=Z(e);t=Ae(r,n),r.forEach(A),this.h()},h(){e.__value=i=a[38],Ht(e,e.__value)},m(l,r){X(l,e,r),O(e,t)},p(l,r){r[0]&2&&n!==(n=(l[38]||"None")+"")&&De(t,n),r[0]&2&&i!==(i=l[38])&&(e.__value=i,Ht(e,e.__value))},d(l){l&&A(e)}}}function fs(a){let e,n,t=a[35].taskVersions[a[35].selectedVersion]&&hs(a);return{c(){t&&t.c(),e=We()},l(i){t&&t.l(i),e=We()},m(i,l){t&&t.m(i,l),X(i,e,l),n=!0},p(i,l){i[35].taskVersions[i[35].selectedVersion]?t?(t.p(i,l),l[0]&2&&oe(t,1)):(t=hs(i),t.c(),oe(t,1),t.m(e.parentNode,e)):t&&(rt(),ce(t,1,1,()=>{t=null}),ct())},i(i){n||(oe(t),n=!0)},o(i){ce(t),n=!1},d(i){i&&A(e),t&&t.d(i)}}}function ms(a){let e,n,t=a[32].groupTitle+"",i,l,r,p,c=ht(a[32].tasks),h=[];for(let _=0;_<c.length;_+=1)h[_]=fs(as(a,c,_));const b=_=>ce(h[_],1,1,()=>{h[_]=null});return{c(){e=D("tr"),n=D("th"),i=xe(t),l=W();for(let _=0;_<h.length;_+=1)h[_].c();r=We(),this.h()},l(_){e=P(_,"TR",{class:!0});var y=Z(e);n=P(y,"TH",{colspan:!0,class:!0});var v=Z(n);i=Ae(v,t),v.forEach(A),y.forEach(A),l=Y(_);for(let k=0;k<h.length;k+=1)h[k].l(_);r=We(),this.h()},h(){H(n,"colspan","3"),H(n,"class","svelte-1h5c2ka"),H(e,"class","border-top")},m(_,y){X(_,e,y),O(e,n),O(n,i),X(_,l,y);for(let v=0;v<h.length;v+=1)h[v]&&h[v].m(_,y);X(_,r,y),p=!0},p(_,y){if((!p||y[0]&2)&&t!==(t=_[32].groupTitle+"")&&De(i,t),y[0]&16410){c=ht(_[32].tasks);let v;for(v=0;v<c.length;v+=1){const k=as(_,c,v);h[v]?(h[v].p(k,y),oe(h[v],1)):(h[v]=fs(k),h[v].c(),oe(h[v],1),h[v].m(r.parentNode,r))}for(rt(),v=c.length;v<h.length;v+=1)b(v);ct()}},i(_){if(!p){for(let y=0;y<c.length;y+=1)oe(h[y]);p=!0}},o(_){h=h.filter(Boolean);for(let y=0;y<h.length;y+=1)ce(h[y]);p=!1},d(_){_&&(A(e),A(l),A(r)),un(h,_)}}}function Ta(a){let e,n,t,i,l="Filter tasks",r,p,c,h,b,_,y,v,k,R="Reset",s,o,u='<div class="col"><select id="package-filter" class="invisible"></select></div> <div class="col"><select id="category-filter" class="invisible"></select></div> <div class="col"><select id="modality-filter" class="invisible"></select></div> <div class="col"><select id="tag-filter" class="invisible"></select></div>',d,m,g,w,C,I,M;const V=[_a,ba],E=[];function N(U,G){return U[0].length===0?0:1}return m=N(a),g=E[m]=V[m](a),{c(){e=D("div"),n=D("div"),t=D("div"),i=D("div"),i.textContent=l,r=W(),p=D("div"),c=D("div"),h=D("div"),b=D("div"),_=D("input"),y=W(),v=D("div"),k=D("button"),k.textContent=R,s=W(),o=D("div"),o.innerHTML=u,d=W(),g.c(),w=We(),this.h()},l(U){e=P(U,"DIV",{class:!0});var G=Z(e);n=P(G,"DIV",{class:!0});var J=Z(n);t=P(J,"DIV",{class:!0});var pe=Z(t);i=P(pe,"DIV",{class:!0,"data-svelte-h":!0}),ze(i)!=="svelte-gyxyme"&&(i.textContent=l),r=Y(pe),p=P(pe,"DIV",{class:!0});var Oe=Z(p);c=P(Oe,"DIV",{class:!0});var Ce=Z(c);h=P(Ce,"DIV",{class:!0});var x=Z(h);b=P(x,"DIV",{class:!0});var B=Z(b);_=P(B,"INPUT",{type:!0,class:!0,placeholder:!0}),B.forEach(A),x.forEach(A),y=Y(Ce),v=P(Ce,"DIV",{});var j=Z(v);k=P(j,"BUTTON",{class:!0,"data-svelte-h":!0}),ze(k)!=="svelte-1iagwg6"&&(k.textContent=R),j.forEach(A),Ce.forEach(A),Oe.forEach(A),pe.forEach(A),s=Y(J),o=P(J,"DIV",{class:!0,"data-svelte-h":!0}),ze(o)!=="svelte-1t55mms"&&(o.innerHTML=u),J.forEach(A),G.forEach(A),d=Y(U),g.l(U),w=We(),this.h()},h(){H(i,"class","col-3 col-lg-6"),H(_,"type","text"),H(_,"class","form-control ms-auto"),H(_,"placeholder","Search..."),H(b,"class","input-group input-group-sm"),H(h,"class","flex-fill"),H(k,"class","btn btn-outline-secondary btn-sm ms-3"),H(c,"class","d-flex"),H(p,"class","col-9 col-lg-6"),H(t,"class","row mb-2"),H(o,"class","row"),H(n,"class","card-body"),H(e,"class","card mb-2"),Ot(e,"invisible",a[0].length===0),Ot(e,"collapse",a[0].length===0)},m(U,G){X(U,e,G),O(e,n),O(n,t),O(t,i),O(t,r),O(t,p),O(p,c),O(c,h),O(h,b),O(b,_),Ht(_,a[2]),O(c,y),O(c,v),O(v,k),O(n,s),O(n,o),X(U,d,G),E[m].m(U,G),X(U,w,G),C=!0,I||(M=[Ke(_,"input",a[16]),Ke(k,"click",a[8])],I=!0)},p(U,G){G[0]&4&&_.value!==U[2]&&Ht(_,U[2]),(!C||G[0]&1)&&Ot(e,"invisible",U[0].length===0),(!C||G[0]&1)&&Ot(e,"collapse",U[0].length===0);let J=m;m=N(U),m===J?E[m].p(U,G):(rt(),ce(E[J],1,1,()=>{E[J]=null}),ct(),g=E[m],g?g.p(U,G):(g=E[m]=V[m](U),g.c()),oe(g,1),g.m(w.parentNode,w))},i(U){C||(oe(g),C=!0)},o(U){ce(g),C=!1},d(U){U&&(A(e),A(d),A(w)),E[m].d(U),I=!1,Ws(M)}}}let Fs="pkg_name",Ea="";function xa(a){return!0}function Dt(a,e,n){a==null||a.setData([{text:n,placeholder:!0},...e])}function gs(a,e){return[...new Set(a.flatMap(n=>n.task_list).map(e).filter(n=>n!==null))]}function Pt(a){return a.map(e=>({text:e,value:e}))}function bs(a){const e=[];return e.push(...a.tags),a.authors&&e.push(a.authors),e.join(", ")}function Aa(a,e,n){let t,i,{$$slots:l={},$$scope:r}=e,{taskGroups:p}=e,c=[],h=[],b="",_,y="",v,k="",R,s="",o,u="",d={pkg_name:"Task"};function m(){p&&(U(p),n(0,c=oa(p,Fs)),g())}function g(){n(1,h=c.map(x=>{const B=x.tasks.filter(j=>w(j.taskVersions[j.selectedVersion]));return{...x,tasks:B}}).filter(x=>x.tasks.length>0))}function w(x){return C(x)&&I(x)&&M(x)&&E(x)&&V(x)&&xa()}function C(x){if(!b)return!0;const B=b.toLowerCase();return x.task_name.toLowerCase().includes(B)||x.pkg_name.toLowerCase().includes(B)||x.category&&x.category.toLowerCase().includes(B)||x.modality&&x.modality.toLowerCase().includes(B)||x.authors&&x.authors.toLowerCase().includes(B)||Object.keys(x.input_types).find(j=>j.toLowerCase().includes(B))!==void 0||x.tags.find(j=>j.toLowerCase().includes(B))!==void 0}function I(x){return y?x.category!==null&&x.category===y:!0}function M(x){return k?x.modality!==null&&x.modality===k:!0}function V(x){return s?x.pkg_name===s:!0}function E(x){return u?x.tags.find(B=>B===u)!==void 0:!0}function N(){n(2,b=""),n(10,y=""),_==null||_.setSelected(""),v==null||v.setSelected(""),R==null||R.setSelected(""),o==null||o.setSelected("")}function U(x){Dt(_,Pt(gs(x,B=>B.category)),"Category"),Dt(v,Pt(gs(x,B=>B.modality)),"Modality"),Dt(R,Pt([...new Set(x.map(B=>B.pkg_name))]),"Package"),Dt(o,Pt([...new Set(x.flatMap(B=>B.task_list).flatMap(B=>B.tags).filter(B=>B!==null))]),"Tag")}ws(()=>{n(3,_=G("category-filter","Select category","Category",x=>{n(10,y=x)})),n(4,v=G("modality-filter","Select modality","Modality",x=>{n(11,k=x)})),R=G("package-filter","Select package","Package",x=>{n(12,s=x)}),o=G("tag-filter","Select tag","Tag",x=>{n(13,u=x)}),m()});function G(x,B,j,je){const ie=document.getElementById(x);return ie==null||ie.classList.remove("invisible"),new ua({select:`#${x}`,settings:{showSearch:!0,allowDeselect:!0,ariaLabel:B},events:{afterChange:Pe=>{Pe.length===0||Pe[0].value===j?je(""):je(Pe[0].value)}}})}function J(){b=this.value,n(2,b)}const pe=x=>_==null?void 0:_.setSelected(x.taskVersions[x.selectedVersion].category),Oe=x=>v==null?void 0:v.setSelected(x.taskVersions[x.selectedVersion].modality);function Ce(x,B){x[B].selectedVersion=Js(this),n(1,h),n(2,b),n(10,y),n(11,k),n(12,s),n(13,u),n(0,c)}return a.$$set=x=>{"taskGroups"in x&&n(9,p=x.taskGroups),"$$scope"in x&&n(14,r=x.$$scope)},a.$$.update=()=>{a.$$.dirty[0]&512&&p&&m(),a.$$.dirty[0]&15365&&(b||y||k||s||u||Ea?g():n(1,h=c)),a.$$.dirty[0]&2&&n(6,t=h.reduce((x,B)=>x+B.tasks.length,0)),a.$$.dirty[0]&1&&n(5,i=c.reduce((x,B)=>x+B.tasks.length,0))},[c,h,b,_,v,i,t,d,N,p,y,k,s,u,r,l,J,pe,Oe,Ce]}class Oa extends cn{constructor(e){super(),hn(this,e,Aa,Ta,rn,{taskGroups:9},null,[-1,-1])}}function Ca(a){let e,n,t;return{c(){e=D("col"),n=W(),t=D("col"),this.h()},l(i){e=P(i,"COL",{width:!0}),n=Y(i),t=P(i,"COL",{width:!0}),this.h()},h(){H(e,"width","60"),H(t,"width","60")},m(i,l){X(i,e,l),X(i,n,l),X(i,t,l)},p:Qe,d(i){i&&(A(e),A(n),A(t))}}}function Sa(a){let e,n,t;return{c(){e=D("th"),n=W(),t=D("th")},l(i){e=P(i,"TH",{}),Z(e).forEach(A),n=Y(i),t=P(i,"TH",{}),Z(t).forEach(A)},m(i,l){X(i,e,l),X(i,n,l),X(i,t,l)},p:Qe,d(i){i&&(A(e),A(n),A(t))}}}function _s(a){let e,n='<i class="bi bi-info-circle"></i>',t,i;function l(){return a[4](a[6])}return{c(){e=D("button"),e.innerHTML=n,this.h()},l(r){e=P(r,"BUTTON",{class:!0,"data-svelte-h":!0}),ze(e)!=="svelte-bdzzj"&&(e.innerHTML=n),this.h()},h(){H(e,"class","btn btn-info")},m(r,p){X(r,e,p),t||(i=Ke(e,"click",l),t=!0)},p(r,p){a=r},d(r){r&&A(e),t=!1,i()}}}function ks(a){let e,n='<i class="bi bi-plus-circle"></i>',t,i;function l(){return a[5](a[6])}return{c(){e=D("button"),e.innerHTML=n,this.h()},l(r){e=P(r,"BUTTON",{class:!0,"data-svelte-h":!0}),ze(e)!=="svelte-p07edj"&&(e.innerHTML=n),this.h()},h(){H(e,"class","btn btn-primary me-2")},m(r,p){X(r,e,p),t||(i=Ke(e,"click",l),t=!0)},p(r,p){a=r},d(r){r&&A(e),t=!1,i()}}}function Ra(a){let e,n,t,i=a[6].docs_info&&_s(a),l=a[6].install_instructions&&ks(a);return{c(){e=D("td"),i&&i.c(),n=W(),t=D("td"),l&&l.c()},l(r){e=P(r,"TD",{});var p=Z(e);i&&i.l(p),p.forEach(A),n=Y(r),t=P(r,"TD",{});var c=Z(t);l&&l.l(c),c.forEach(A)},m(r,p){X(r,e,p),i&&i.m(e,null),X(r,n,p),X(r,t,p),l&&l.m(t,null)},p(r,p){r[6].docs_info?i?i.p(r,p):(i=_s(r),i.c(),i.m(e,null)):i&&(i.d(1),i=null),r[6].install_instructions?l?l.p(r,p):(l=ks(r),l.c(),l.m(t,null)):l&&(l.d(1),l=null)},d(r){r&&(A(e),A(n),A(t)),i&&i.d(),l&&l.d()}}}function Ia(a){var o;let e,n,t,i,l,r,p,c=((o=a[1])==null?void 0:o.task_name)+"",h,b,_,y,v,k,R=a[0](a[2])+"",s;return e=new Oa({props:{taskGroups:Hi,$$slots:{"extra-columns":[Ra,({task:u})=>({6:u}),({task:u})=>u?64:0],"extra-columns-header":[Sa],"extra-columns-colgroup":[Ca]},$$scope:{ctx:a}}}),{c(){pn(e.$$.fragment),n=W(),t=D("div"),i=D("div"),l=D("div"),r=D("div"),p=D("h5"),h=xe(c),b=W(),_=D("button"),y=W(),v=D("div"),k=new Qs(!1),this.h()},l(u){dn(e.$$.fragment,u),n=Y(u),t=P(u,"DIV",{class:!0,id:!0,tabindex:!0});var d=Z(t);i=P(d,"DIV",{class:!0});var m=Z(i);l=P(m,"DIV",{class:!0});var g=Z(l);r=P(g,"DIV",{class:!0});var w=Z(r);p=P(w,"H5",{class:!0});var C=Z(p);h=Ae(C,c),C.forEach(A),b=Y(w),_=P(w,"BUTTON",{type:!0,class:!0,"data-bs-dismiss":!0,"aria-label":!0}),Z(_).forEach(A),w.forEach(A),y=Y(g),v=P(g,"DIV",{class:!0});var I=Z(v);k=Ks(I,!1),I.forEach(A),g.forEach(A),m.forEach(A),d.forEach(A),this.h()},h(){H(p,"class","modal-title"),H(_,"type","button"),H(_,"class","btn-close"),H(_,"data-bs-dismiss","modal"),H(_,"aria-label","Close"),H(r,"class","modal-header"),k.a=null,H(v,"class","modal-body"),H(l,"class","modal-content"),H(i,"class","modal-dialog modal-dialog-scrollable"),H(t,"class","modal modal-xl"),H(t,"id","task-info-modal"),H(t,"tabindex","-1")},m(u,d){fn(e,u,d),X(u,n,d),X(u,t,d),O(t,i),O(i,l),O(l,r),O(r,p),O(p,h),O(r,b),O(r,_),O(l,y),O(l,v),k.m(R,v),s=!0},p(u,[d]){var g;const m={};d&192&&(m.$$scope={dirty:d,ctx:u}),e.$set(m),(!s||d&2)&&c!==(c=((g=u[1])==null?void 0:g.task_name)+"")&&De(h,c),(!s||d&4)&&R!==(R=u[0](u[2])+"")&&k.p(R)},i(u){s||(oe(e.$$.fragment,u),s=!0)},o(u){ce(e.$$.fragment,u),s=!1},d(u){u&&(A(n),A(t)),mn(e,u)}}}function La(a){const e=document.getElementById(a),n=bootstrap.Modal.getInstance(e);return n||new bootstrap.Modal(e)}function Da(a,e,n){let t=null,i="";function l(h,b){n(1,t=h),n(2,i=b),La("task-info-modal").show()}function r(h){return h?Ni.sanitize(K.parse(h)):""}return[r,t,i,l,h=>l(h,h.docs_info),h=>l(h,h.install_instructions)]}class Fa extends cn{constructor(e){super(),hn(this,e,Da,Ia,rn,{formatMarkdown:0})}get formatMarkdown(){return this.$$.ctx[0]}}export{Fa as component};
