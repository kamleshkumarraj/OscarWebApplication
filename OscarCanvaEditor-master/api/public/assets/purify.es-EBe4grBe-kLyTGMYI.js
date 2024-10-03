/*! @license DOMPurify 2.4.9 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.4.9/LICENSE */function D(n){"@babel/helpers - typeof";return D=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},D(n)}function Rt(n,o){return Rt=Object.setPrototypeOf||function(a,l){return a.__proto__=l,a},Rt(n,o)}function He(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function at(n,o,a){return He()?at=Reflect.construct:at=function(l,f,b){var A=[null];A.push.apply(A,f);var K=Function.bind.apply(l,A),C=new K;return b&&Rt(C,b.prototype),C},at.apply(null,arguments)}function _(n){return ze(n)||Pe(n)||je(n)||Be()}function ze(n){if(Array.isArray(n))return Mt(n)}function Pe(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function je(n,o){if(n){if(typeof n=="string")return Mt(n,o);var a=Object.prototype.toString.call(n).slice(8,-1);if(a==="Object"&&n.constructor&&(a=n.constructor.name),a==="Map"||a==="Set")return Array.from(n);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Mt(n,o)}}function Mt(n,o){(o==null||o>n.length)&&(o=n.length);for(var a=0,l=new Array(o);a<o;a++)l[a]=n[a];return l}function Be(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ge=Object.hasOwnProperty,ie=Object.setPrototypeOf,We=Object.isFrozen,qe=Object.getPrototypeOf,$e=Object.getOwnPropertyDescriptor,y=Object.freeze,v=Object.seal,Ye=Object.create,pe=typeof Reflect<"u"&&Reflect,lt=pe.apply,It=pe.construct;lt||(lt=function(n,o,a){return n.apply(o,a)});y||(y=function(n){return n});v||(v=function(n){return n});It||(It=function(n,o){return at(n,_(o))});var Ke=E(Array.prototype.forEach),le=E(Array.prototype.pop),Y=E(Array.prototype.push),it=E(String.prototype.toLowerCase),kt=E(String.prototype.toString),ce=E(String.prototype.match),w=E(String.prototype.replace),Ve=E(String.prototype.indexOf),Xe=E(String.prototype.trim),g=E(RegExp.prototype.test),xt=Ze(TypeError);function E(n){return function(o){for(var a=arguments.length,l=new Array(a>1?a-1:0),f=1;f<a;f++)l[f-1]=arguments[f];return lt(n,o,l)}}function Ze(n){return function(){for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return It(n,a)}}function i(n,o,a){var l;a=(l=a)!==null&&l!==void 0?l:it,ie&&ie(n,null);for(var f=o.length;f--;){var b=o[f];if(typeof b=="string"){var A=a(b);A!==b&&(We(o)||(o[f]=A),b=A)}n[b]=!0}return n}function I(n){var o=Ye(null),a;for(a in n)lt(Ge,n,[a])===!0&&(o[a]=n[a]);return o}function rt(n,o){for(;n!==null;){var a=$e(n,o);if(a){if(a.get)return E(a.get);if(typeof a.value=="function")return E(a.value)}n=qe(n)}function l(f){return console.warn("fallback value for",f),null}return l}var ue=y(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Ot=y(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Lt=y(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Je=y(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Ct=y(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),Qe=y(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),se=y(["#text"]),me=y(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Dt=y(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),fe=y(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ot=y(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),tn=v(/\{\{[\w\W]*|[\w\W]*\}\}/gm),en=v(/<%[\w\W]*|[\w\W]*%>/gm),nn=v(/\${[\w\W]*}/gm),rn=v(/^data-[\-\w.\u00B7-\uFFFF]/),on=v(/^aria-[\-\w]+$/),an=v(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ln=v(/^(?:\w+script|data):/i),cn=v(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),un=v(/^html$/i),sn=v(/^[a-z][.\w]*(-[.\w]+)+$/i),mn=function(){return typeof window>"u"?null:window},fn=function(n,o){if(D(n)!=="object"||typeof n.createPolicy!="function")return null;var a=null,l="data-tt-policy-suffix";o.currentScript&&o.currentScript.hasAttribute(l)&&(a=o.currentScript.getAttribute(l));var f="dompurify"+(a?"#"+a:"");try{return n.createPolicy(f,{createHTML:function(b){return b},createScriptURL:function(b){return b}})}catch{return console.warn("TrustedTypes policy "+f+" could not be created."),null}};function de(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:mn(),o=function(t){return de(t)};if(o.version="2.4.9",o.removed=[],!n||!n.document||n.document.nodeType!==9)return o.isSupported=!1,o;var a=n.document,l=n.document,f=n.DocumentFragment,b=n.HTMLTemplateElement,A=n.Node,K=n.Element,C=n.NodeFilter,Ft=n.NamedNodeMap,he=Ft===void 0?n.NamedNodeMap||n.MozNamedAttrMap:Ft,ge=n.HTMLFormElement,ye=n.DOMParser,V=n.trustedTypes,X=K.prototype,be=rt(X,"cloneNode"),Te=rt(X,"nextSibling"),Ne=rt(X,"childNodes"),ct=rt(X,"parentNode");if(typeof b=="function"){var ut=l.createElement("template");ut.content&&ut.content.ownerDocument&&(l=ut.content.ownerDocument)}var S=fn(V,a),st=S?S.createHTML(""):"",Z=l,mt=Z.implementation,ve=Z.createNodeIterator,Ee=Z.createDocumentFragment,Ae=Z.getElementsByTagName,Se=a.importNode,Ut={};try{Ut=I(l).documentMode?l.documentMode:{}}catch{}var k={};o.isSupported=typeof ct=="function"&&mt&&mt.createHTMLDocument!==void 0&&Ut!==9;var ft=tn,pt=en,dt=nn,we=rn,_e=on,ke=ln,Ht=cn,xe=sn,ht=an,p=null,zt=i({},[].concat(_(ue),_(Ot),_(Lt),_(Ct),_(se))),d=null,Pt=i({},[].concat(_(me),_(Dt),_(fe),_(ot))),u=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),G=null,gt=null,jt=!0,yt=!0,Bt=!1,Gt=!0,F=!1,R=!1,bt=!1,Tt=!1,U=!1,J=!1,Q=!1,Wt=!0,qt=!1,Oe="user-content-",Nt=!0,W=!1,H={},z=null,$t=i({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Yt=null,Kt=i({},["audio","video","img","source","image","track"]),vt=null,Vt=i({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),tt="http://www.w3.org/1998/Math/MathML",et="http://www.w3.org/2000/svg",x="http://www.w3.org/1999/xhtml",P=x,Et=!1,At=null,Le=i({},[tt,et,x],kt),M,Ce=["application/xhtml+xml","text/html"],De="text/html",h,j=null,Re=l.createElement("form"),Xt=function(t){return t instanceof RegExp||t instanceof Function},St=function(t){j&&j===t||((!t||D(t)!=="object")&&(t={}),t=I(t),M=Ce.indexOf(t.PARSER_MEDIA_TYPE)===-1?M=De:M=t.PARSER_MEDIA_TYPE,h=M==="application/xhtml+xml"?kt:it,p="ALLOWED_TAGS"in t?i({},t.ALLOWED_TAGS,h):zt,d="ALLOWED_ATTR"in t?i({},t.ALLOWED_ATTR,h):Pt,At="ALLOWED_NAMESPACES"in t?i({},t.ALLOWED_NAMESPACES,kt):Le,vt="ADD_URI_SAFE_ATTR"in t?i(I(Vt),t.ADD_URI_SAFE_ATTR,h):Vt,Yt="ADD_DATA_URI_TAGS"in t?i(I(Kt),t.ADD_DATA_URI_TAGS,h):Kt,z="FORBID_CONTENTS"in t?i({},t.FORBID_CONTENTS,h):$t,G="FORBID_TAGS"in t?i({},t.FORBID_TAGS,h):{},gt="FORBID_ATTR"in t?i({},t.FORBID_ATTR,h):{},H="USE_PROFILES"in t?t.USE_PROFILES:!1,jt=t.ALLOW_ARIA_ATTR!==!1,yt=t.ALLOW_DATA_ATTR!==!1,Bt=t.ALLOW_UNKNOWN_PROTOCOLS||!1,Gt=t.ALLOW_SELF_CLOSE_IN_ATTR!==!1,F=t.SAFE_FOR_TEMPLATES||!1,R=t.WHOLE_DOCUMENT||!1,U=t.RETURN_DOM||!1,J=t.RETURN_DOM_FRAGMENT||!1,Q=t.RETURN_TRUSTED_TYPE||!1,Tt=t.FORCE_BODY||!1,Wt=t.SANITIZE_DOM!==!1,qt=t.SANITIZE_NAMED_PROPS||!1,Nt=t.KEEP_CONTENT!==!1,W=t.IN_PLACE||!1,ht=t.ALLOWED_URI_REGEXP||ht,P=t.NAMESPACE||x,u=t.CUSTOM_ELEMENT_HANDLING||{},t.CUSTOM_ELEMENT_HANDLING&&Xt(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(u.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&Xt(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(u.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(u.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),F&&(yt=!1),J&&(U=!0),H&&(p=i({},_(se)),d=[],H.html===!0&&(i(p,ue),i(d,me)),H.svg===!0&&(i(p,Ot),i(d,Dt),i(d,ot)),H.svgFilters===!0&&(i(p,Lt),i(d,Dt),i(d,ot)),H.mathMl===!0&&(i(p,Ct),i(d,fe),i(d,ot))),t.ADD_TAGS&&(p===zt&&(p=I(p)),i(p,t.ADD_TAGS,h)),t.ADD_ATTR&&(d===Pt&&(d=I(d)),i(d,t.ADD_ATTR,h)),t.ADD_URI_SAFE_ATTR&&i(vt,t.ADD_URI_SAFE_ATTR,h),t.FORBID_CONTENTS&&(z===$t&&(z=I(z)),i(z,t.FORBID_CONTENTS,h)),Nt&&(p["#text"]=!0),R&&i(p,["html","head","body"]),p.table&&(i(p,["tbody"]),delete G.tbody),y&&y(t),j=t)},Zt=i({},["mi","mo","mn","ms","mtext"]),Jt=i({},["foreignobject","desc","title","annotation-xml"]),Me=i({},["title","style","font","a","script"]),nt=i({},Ot);i(nt,Lt),i(nt,Je);var wt=i({},Ct);i(wt,Qe);var Ie=function(t){var r=ct(t);(!r||!r.tagName)&&(r={namespaceURI:P,tagName:"template"});var e=it(t.tagName),c=it(r.tagName);return At[t.namespaceURI]?t.namespaceURI===et?r.namespaceURI===x?e==="svg":r.namespaceURI===tt?e==="svg"&&(c==="annotation-xml"||Zt[c]):!!nt[e]:t.namespaceURI===tt?r.namespaceURI===x?e==="math":r.namespaceURI===et?e==="math"&&Jt[c]:!!wt[e]:t.namespaceURI===x?r.namespaceURI===et&&!Jt[c]||r.namespaceURI===tt&&!Zt[c]?!1:!wt[e]&&(Me[e]||!nt[e]):!!(M==="application/xhtml+xml"&&At[t.namespaceURI]):!1},B=function(t){Y(o.removed,{element:t});try{t.parentNode.removeChild(t)}catch{try{t.outerHTML=st}catch{t.remove()}}},_t=function(t,r){try{Y(o.removed,{attribute:r.getAttributeNode(t),from:r})}catch{Y(o.removed,{attribute:null,from:r})}if(r.removeAttribute(t),t==="is"&&!d[t])if(U||J)try{B(r)}catch{}else try{r.setAttribute(t,"")}catch{}},Qt=function(t){var r,e;if(Tt)t="<remove></remove>"+t;else{var c=ce(t,/^[\r\n\t ]+/);e=c&&c[0]}M==="application/xhtml+xml"&&P===x&&(t='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+t+"</body></html>");var s=S?S.createHTML(t):t;if(P===x)try{r=new ye().parseFromString(s,M)}catch{}if(!r||!r.documentElement){r=mt.createDocument(P,"template",null);try{r.documentElement.innerHTML=Et?st:s}catch{}}var N=r.body||r.documentElement;return t&&e&&N.insertBefore(l.createTextNode(e),N.childNodes[0]||null),P===x?Ae.call(r,R?"html":"body")[0]:R?r.documentElement:N},te=function(t){return ve.call(t.ownerDocument||t,t,C.SHOW_ELEMENT|C.SHOW_COMMENT|C.SHOW_TEXT|C.SHOW_PROCESSING_INSTRUCTION|C.SHOW_CDATA_SECTION,null,!1)},Fe=function(t){return t instanceof ge&&(typeof t.nodeName!="string"||typeof t.textContent!="string"||typeof t.removeChild!="function"||!(t.attributes instanceof he)||typeof t.removeAttribute!="function"||typeof t.setAttribute!="function"||typeof t.namespaceURI!="string"||typeof t.insertBefore!="function"||typeof t.hasChildNodes!="function")},q=function(t){return D(A)==="object"?t instanceof A:t&&D(t)==="object"&&typeof t.nodeType=="number"&&typeof t.nodeName=="string"},O=function(t,r,e){k[t]&&Ke(k[t],function(c){c.call(o,r,e,j)})},ee=function(t){var r;if(O("beforeSanitizeElements",t,null),Fe(t)||g(/[\u0080-\uFFFF]/,t.nodeName))return B(t),!0;var e=h(t.nodeName);if(O("uponSanitizeElement",t,{tagName:e,allowedTags:p}),t.hasChildNodes()&&!q(t.firstElementChild)&&(!q(t.content)||!q(t.content.firstElementChild))&&g(/<[/\w]/g,t.innerHTML)&&g(/<[/\w]/g,t.textContent)||e==="select"&&g(/<template/i,t.innerHTML)||t.nodeType===7)return B(t),!0;if(!p[e]||G[e]){if(!G[e]&&re(e)&&(u.tagNameCheck instanceof RegExp&&g(u.tagNameCheck,e)||u.tagNameCheck instanceof Function&&u.tagNameCheck(e)))return!1;if(Nt&&!z[e]){var c=ct(t)||t.parentNode,s=Ne(t)||t.childNodes;if(s&&c)for(var N=s.length,m=N-1;m>=0;--m)c.insertBefore(be(s[m],!0),Te(t))}return B(t),!0}return t instanceof K&&!Ie(t)||(e==="noscript"||e==="noembed"||e==="noframes")&&g(/<\/no(script|embed|frames)/i,t.innerHTML)?(B(t),!0):(F&&t.nodeType===3&&(r=t.textContent,r=w(r,ft," "),r=w(r,pt," "),r=w(r,dt," "),t.textContent!==r&&(Y(o.removed,{element:t.cloneNode()}),t.textContent=r)),O("afterSanitizeElements",t,null),!1)},ne=function(t,r,e){if(Wt&&(r==="id"||r==="name")&&(e in l||e in Re))return!1;if(!(yt&&!gt[r]&&g(we,r))&&!(jt&&g(_e,r))){if(!d[r]||gt[r]){if(!(re(t)&&(u.tagNameCheck instanceof RegExp&&g(u.tagNameCheck,t)||u.tagNameCheck instanceof Function&&u.tagNameCheck(t))&&(u.attributeNameCheck instanceof RegExp&&g(u.attributeNameCheck,r)||u.attributeNameCheck instanceof Function&&u.attributeNameCheck(r))||r==="is"&&u.allowCustomizedBuiltInElements&&(u.tagNameCheck instanceof RegExp&&g(u.tagNameCheck,e)||u.tagNameCheck instanceof Function&&u.tagNameCheck(e))))return!1}else if(!vt[r]&&!g(ht,w(e,Ht,""))&&!((r==="src"||r==="xlink:href"||r==="href")&&t!=="script"&&Ve(e,"data:")===0&&Yt[t])&&!(Bt&&!g(ke,w(e,Ht,"")))&&e)return!1}return!0},re=function(t){return t!=="annotation-xml"&&ce(t,xe)},oe=function(t){var r,e,c,s;O("beforeSanitizeAttributes",t,null);var N=t.attributes;if(N){var m={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:d};for(s=N.length;s--;){r=N[s];var $=r,L=$.name,T=$.namespaceURI;if(e=L==="value"?r.value:Xe(r.value),c=h(L),m.attrName=c,m.attrValue=e,m.keepAttr=!0,m.forceKeepAttr=void 0,O("uponSanitizeAttribute",t,m),e=m.attrValue,!m.forceKeepAttr&&(_t(L,t),!!m.keepAttr)){if(!Gt&&g(/\/>/i,e)){_t(L,t);continue}F&&(e=w(e,ft," "),e=w(e,pt," "),e=w(e,dt," "));var ae=h(t.nodeName);if(ne(ae,c,e)){if(qt&&(c==="id"||c==="name")&&(_t(L,t),e=Oe+e),S&&D(V)==="object"&&typeof V.getAttributeType=="function"&&!T)switch(V.getAttributeType(ae,c)){case"TrustedHTML":{e=S.createHTML(e);break}case"TrustedScriptURL":{e=S.createScriptURL(e);break}}try{T?t.setAttributeNS(T,L,e):t.setAttribute(L,e),le(o.removed)}catch{}}}}O("afterSanitizeAttributes",t,null)}},Ue=function t(r){var e,c=te(r);for(O("beforeSanitizeShadowDOM",r,null);e=c.nextNode();)O("uponSanitizeShadowNode",e,null),!ee(e)&&(e.content instanceof f&&t(e.content),oe(e));O("afterSanitizeShadowDOM",r,null)};return o.sanitize=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e,c,s,N,m;if(Et=!t,Et&&(t="<!-->"),typeof t!="string"&&!q(t))if(typeof t.toString=="function"){if(t=t.toString(),typeof t!="string")throw xt("dirty is not a string, aborting")}else throw xt("toString is not a function");if(!o.isSupported){if(D(n.toStaticHTML)==="object"||typeof n.toStaticHTML=="function"){if(typeof t=="string")return n.toStaticHTML(t);if(q(t))return n.toStaticHTML(t.outerHTML)}return t}if(bt||St(r),o.removed=[],typeof t=="string"&&(W=!1),W){if(t.nodeName){var $=h(t.nodeName);if(!p[$]||G[$])throw xt("root node is forbidden and cannot be sanitized in-place")}}else if(t instanceof A)e=Qt("<!---->"),c=e.ownerDocument.importNode(t,!0),c.nodeType===1&&c.nodeName==="BODY"||c.nodeName==="HTML"?e=c:e.appendChild(c);else{if(!U&&!F&&!R&&t.indexOf("<")===-1)return S&&Q?S.createHTML(t):t;if(e=Qt(t),!e)return U?null:Q?st:""}e&&Tt&&B(e.firstChild);for(var L=te(W?t:e);s=L.nextNode();)s.nodeType===3&&s===N||ee(s)||(s.content instanceof f&&Ue(s.content),oe(s),N=s);if(N=null,W)return t;if(U){if(J)for(m=Ee.call(e.ownerDocument);e.firstChild;)m.appendChild(e.firstChild);else m=e;return(d.shadowroot||d.shadowrootmod)&&(m=Se.call(a,m,!0)),m}var T=R?e.outerHTML:e.innerHTML;return R&&p["!doctype"]&&e.ownerDocument&&e.ownerDocument.doctype&&e.ownerDocument.doctype.name&&g(un,e.ownerDocument.doctype.name)&&(T="<!DOCTYPE "+e.ownerDocument.doctype.name+`>
`+T),F&&(T=w(T,ft," "),T=w(T,pt," "),T=w(T,dt," ")),S&&Q?S.createHTML(T):T},o.setConfig=function(t){St(t),bt=!0},o.clearConfig=function(){j=null,bt=!1},o.isValidAttribute=function(t,r,e){j||St({});var c=h(t),s=h(r);return ne(c,s,e)},o.addHook=function(t,r){typeof r=="function"&&(k[t]=k[t]||[],Y(k[t],r))},o.removeHook=function(t){if(k[t])return le(k[t])},o.removeHooks=function(t){k[t]&&(k[t]=[])},o.removeAllHooks=function(){k={}},o}var pn=de();export{pn as default};