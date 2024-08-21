const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let o=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;var i,o=this.t;return t&&void 0===e&&void 0===(e=(i=void 0!==o&&1===o.length)?s.get(o):e)&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i)&&s.set(o,e),e}toString(){return this.cssText}};const r=e=>new o("string"==typeof e?e:e+"",void 0,i),a=(e,...t)=>(t=1===e.length?e[0]:t.reduce(((t,i,s)=>t+(()=>{if(!0===i._$cssResult$)return i.cssText;if("number"==typeof i)return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})()+e[s+1]),e[0]),new o(t,e,i)),n=t?e=>e:e=>{if(e instanceof CSSStyleSheet){let t="";for(const i of e.cssRules)t+=i.cssText;return r(t)}return e},{is:l,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,f=globalThis,m=f.trustedTypes,g=m?m.emptyScript:"",v=f.reactiveElementPolyfillSupport,y=(e,t)=>e,w={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},b=(e,t)=>!l(e,t),$={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;class _ extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=$){var i;t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),t.noAccessor||(i=Symbol(),void 0!==(i=this.getPropertyDescriptor(e,i,t))&&c(this.prototype,e,i))}static getPropertyDescriptor(e,t,i){const{get:s,set:o}=h(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return s?.call(this)},set(t){var r=s?.call(this);o.call(this,t),this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??$}static _$Ei(){var e;this.hasOwnProperty(y("elementProperties"))||((e=u(this)).finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties))}static finalize(){if(!this.hasOwnProperty(y("finalized"))){if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const e=this.properties,t=[...d(e),...p(e)];for(const i of t)this.createProperty(i,e[i])}const i=this[Symbol.metadata];if(null!==i){var e=litPropertyMetadata.get(i);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){var t=this._$Eu(e,i);void 0!==t&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}}static finalizeStyles(e){var t=[];if(Array.isArray(e)){var i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(n(e))}else void 0!==e&&t.push(n(e));return t}static _$Eu(e,t){return!1===(t=t.attribute)?void 0:"string"==typeof t?t:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){var e=new Map;for(const t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);0<e.size&&(this._$Ep=e)}createRenderRoot(){var i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{if(t)i.adoptedStyleSheets=s.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const t of s){const s=document.createElement("style"),o=e.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=t.cssText,i.appendChild(s)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);void 0!==s&&!0===i.reflect&&(t=(void 0!==i.converter?.toAttribute?i.converter:w).toAttribute(t,i.type),this._$Em=e,null==t?this.removeAttribute(s):this.setAttribute(s,t),this._$Em=null)}_$AK(e,t){var i=this.constructor,s=i._$Eh.get(e);if(void 0!==s&&this._$Em!==s){const e=i.getPropertyOptions(s),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:w;this._$Em=s,this[s]=o.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){if(!((i??=this.constructor.getPropertyOptions(e)).hasChanged??b)(this[e],t))return;this.P(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}var e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(this.isUpdatePending){if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(0<e.size)for(const[t,i]of e)!0!==i.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],i)}let e=!1;const t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[y("elementProperties")]=new Map,_[y("finalized")]=new Map,v?.({ReactiveElement:_}),(f.reactiveElementVersions??=[]).push("2.0.4");const A=globalThis,k=A.trustedTypes,E=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,S="$lit$",P=`lit$${(Math.random()+"").slice(9)}$`,C="?"+P,U=`<${C}>`,x=document,z=()=>x.createComment(""),O=e=>null===e||"object"!=typeof e&&"function"!=typeof e,T=Array.isArray,R="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,N=/>/g,j=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,B=/"/g,F=/^(?:script|style|textarea|title)$/i,q=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),L=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),V=new WeakMap,W=x.createTreeWalker(x,129);function J(e,t){if(Array.isArray(e)&&e.hasOwnProperty("raw"))return void 0!==E?E.createHTML(t):t;throw Error("invalid template strings array")}const K=(e,t)=>{const i=e.length-1,s=[];let o,r=2===t?"<svg>":"",a=H;for(let t=0;t<i;t++){const i=e[t];let l,c,h=-1,d=0;for(;d<i.length&&(a.lastIndex=d,null!==(c=a.exec(i)));)d=a.lastIndex,a===H?"!--"===c[1]?a=M:void 0!==c[1]?a=N:void 0!==c[2]?(F.test(c[2])&&(o=RegExp("</"+c[2],"g")),a=j):void 0!==c[3]&&(a=j):a===j?">"===c[0]?(a=o??H,h=-1):void 0===c[1]?h=-2:(h=a.lastIndex-c[2].length,l=c[1],a=void 0===c[3]?j:'"'===c[3]?B:I):a===B||a===I?a=j:a===M||a===N?a=H:(a=j,o=void 0);var n=a===j&&e[t+1].startsWith("/>")?" ":"";r+=a===H?i+U:0<=h?(s.push(l),i.slice(0,h)+S+i.slice(h)+P+n):i+P+(-2===h?t:n)}return[J(e,r+(e[i]||"<?>")+(2===t?"</svg>":"")),s]};class Z{constructor({strings:e,_$litType$:t},i){var s;this.parts=[];let o=0,r=0;var a=e.length-1,n=this.parts,[e,l]=K(e,t);if(this.el=Z.createElement(e,i),W.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(s=W.nextNode())&&n.length<a;){if(1===s.nodeType){if(s.hasAttributes())for(const e of s.getAttributeNames())if(e.endsWith(S)){const t=l[r++],i=s.getAttribute(e).split(P),a=/([.?@])?(.*)/.exec(t);n.push({type:1,index:o,name:a[2],strings:i,ctor:"."===a[1]?ee:"?"===a[1]?te:"@"===a[1]?ie:Y}),s.removeAttribute(e)}else e.startsWith(P)&&(n.push({type:6,index:o}),s.removeAttribute(e));if(F.test(s.tagName)){const e=s.textContent.split(P),t=e.length-1;if(0<t){s.textContent=k?k.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],z()),W.nextNode(),n.push({type:2,index:++o});s.append(e[t],z())}}}else if(8===s.nodeType)if(s.data===C)n.push({type:2,index:o});else{let e=-1;for(;-1!==(e=s.data.indexOf(P,e+1));)n.push({type:7,index:o}),e+=P.length-1}o++}}static createElement(e,t){var i=x.createElement("template");return i.innerHTML=e,i}}function G(e,t,i=e,s){if(t!==L){let r=void 0!==s?i._$Co?.[s]:i._$Cl;var o=O(t)?void 0:t._$litDirective$;r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(e))._$AT(e,i,s),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(t=G(e,r._$AS(e,t.values),r,s))}return t}class Q{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var{el:{content:t},parts:i}=this._$AD,t=(e?.creationScope??x).importNode(t,!0);W.currentNode=t;let s=W.nextNode(),o=0,r=0,a=i[0];for(;void 0!==a;){if(o===a.index){let t;2===a.type?t=new X(s,s.nextSibling,this,e):1===a.type?t=new a.ctor(s,a.name,a.strings,this,e):6===a.type&&(t=new se(s,this,e)),this._$AV.push(t),a=i[++r]}o!==a?.index&&(s=W.nextNode(),o++)}return W.currentNode=x,t}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;var t=this._$AM;return void 0!==t&&11===e?.nodeType?t.parentNode:e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=G(this,e,t),O(e)?e===D||null==e||""===e?(this._$AH!==D&&this._$AR(),this._$AH=D):e!==this._$AH&&e!==L&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>T(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==D&&O(this._$AH)?this._$AA.nextSibling.data=e:this.T(x.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,s="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Z.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{const e=new Q(s,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=V.get(e.strings);return void 0===t&&V.set(e.strings,t=new Z(e)),t}k(e){T(this._$AH)||(this._$AH=[],this._$AR());var t=this._$AH;let i,s=0;for(const o of e)s===t.length?t.push(i=new X(this.S(z()),this.S(z()),this,this.options)):i=t[s],i._$AI(o),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,o){this.type=1,this._$AH=D,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,2<i.length||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=D}_$AI(e,t=this,i,s){var o=this.strings;let r=!1;if(void 0===o)e=G(this,e,t,0),(r=!O(e)||e!==this._$AH&&e!==L)&&(this._$AH=e);else{const s=e;let a,n;for(e=o[0],a=0;a<o.length-1;a++)(n=G(this,s[i+a],t,a))===L&&(n=this._$AH[a]),r||=!O(n)||n!==this._$AH[a],n===D?e=D:e!==D&&(e+=(n??"")+o[a+1]),this._$AH[a]=n}r&&!s&&this.j(e)}j(e){e===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ee extends Y{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===D?void 0:e}}class te extends Y{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==D)}}class ie extends Y{constructor(e,t,i,s,o){super(e,t,i,s,o),this.type=5}_$AI(e,t=this){var i,s;(e=G(this,e,t,0)??D)!==L&&(t=this._$AH,i=e===D&&t!==D||e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive,s=e!==D&&(t===D||i),i&&this.element.removeEventListener(this.name,this,t),s&&this.element.addEventListener(this.name,this,e),this._$AH=e)}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class se{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){G(this,e)}}const oe=A.litHtmlPolyfillSupport,re=(oe?.(Z,X),(A.litHtmlVersions??=[]).push("3.1.2"),(e,t,i)=>{var s=i?.renderBefore??t;let o=s._$litPart$;if(void 0===o){const e=i?.renderBefore??null;s._$litPart$=o=new X(t.insertBefore(z(),e),e,void 0,i??{})}return o._$AI(e),o});class ae extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){var t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=re(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return L}}ae._$litElement$=!0,ae.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ae});const ne=globalThis.litElementPolyfillSupport,le=(ne?.({LitElement:ae}),(globalThis.litElementVersions??=[]).push("4.0.4"),Symbol());class ce{get taskComplete(){return this.t||(1===this.status?this.t=new Promise(((e,t)=>{this.i=e,this.o=t})):3===this.status?this.t=Promise.reject(this.h):this.t=Promise.resolve(this.l)),this.t}constructor(e,t,i){this.u=0,this.status=0,(this.p=e).addController(this),e="object"==typeof t?t:{task:t,args:i},this._=e.task,this.v=e.args,this.j=e.argsEqual??he,this.m=e.onComplete,this.g=e.onError,this.autoRun=e.autoRun??!0,"initialValue"in e&&(this.l=e.initialValue,this.status=2,this.k=this.A?.())}hostUpdate(){!0===this.autoRun&&this.O()}hostUpdated(){"afterUpdate"===this.autoRun&&this.O()}A(){if(void 0!==this.v){var e=this.v();if(Array.isArray(e))return e;throw Error("The args function must return an array")}}async O(){var e=this.A(),t=this.k;(this.k=e)===t||void 0===e||void 0!==t&&this.j(t,e)||await this.run(e)}async run(e){let t,i;e??=this.A(),this.k=e,1===this.status?this.T?.abort():(this.t=void 0,this.i=void 0,this.o=void 0),this.status=1,"afterUpdate"===this.autoRun?queueMicrotask((()=>this.p.requestUpdate())):this.p.requestUpdate();var s=++this.u;this.T=new AbortController;let o=!1;try{t=await this._(e,{signal:this.T.signal})}catch(e){o=!0,i=e}if(this.u===s){if(t===le)this.status=0;else{if(!1===o){try{this.m?.(t)}catch{}this.status=2,this.i?.(t)}else{try{this.g?.(i)}catch{}this.status=3,this.o?.(i)}this.l=t,this.h=i}this.p.requestUpdate()}}abort(e){1===this.status&&this.T?.abort(e)}get value(){return this.l}get error(){return this.h}render(e){switch(this.status){case 0:return e.initial?.();case 1:return e.pending?.();case 2:return e.complete?.(this.value);case 3:return e.error?.(this.error);default:throw Error("Unexpected status: "+this.status)}}}const he=(e,t)=>e===t||e.length===t.length&&e.every(((e,i)=>!b(e,t[i]))),de=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i);var pe,ue=a`:host{position:relative;display:inline-block;overflow:hidden;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-style:normal;font-variation-settings:unset;font-weight:400;letter-spacing:normal;line-height:1;text-align:center;text-decoration:none;text-indent:0;text-rendering:optimizelegibility;user-select:none}.glyph{position:absolute;font-size:var(--font-size);inset:auto 0}`,fe=a`:host,:root{--ids-icon-size-16:1rem;--ids-icon-size-24:1.5rem;--ids-icon-size-32:2rem}`,me=function(e,t,i,s){var o,r=arguments.length,a=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;0<=n;n--)(o=e[n])&&(a=(r<3?o(a):3<r?o(t,i,a):o(t,i))||a);return 3<r&&a&&Object.defineProperty(t,i,a),a};const ge={url:"https://static.design.if.eu/ids-icon/fonts/0.11.0",fonts:{"ui-16":{name:"ui-16",size:"16",files:[{url:"ui-16.woff2?v=0.11.0",format:"woff2"},{url:"ui-16.woff?v=0.11.0",format:"woff"}],codePoints:{film:"","add-user":"",user:"",unlock:"","speach-bubble":"","shopping-cart":"","shopping-bag":"",shop:"","share-network":"","share-ios":"",settings:"","send-message":"",search:"","remove-circle":"",reload:"",preferences:"",plus:"","play-filled":"",play:"",pin:"","phone-call-end":"",phone:"",pencil:"","pause-filled":"",pause:"","outgoing-call":"","open-in-new":"",multiple:"",minus:"",microsoft:"","microphone-off":"",microphone:"",menu:"",megaphone:"",math:"","map-pin":"",logout:"",login:"",lock:"",location:"",link:"",like:"",leave:"",info:"","incomming-call":"",image:"",img:"",house:"",help:"",handshake:"",globe:"","floppy-disk":"",filter:"",file:"",email:"",edit:"",dislike:"","direct-edit":"","curved-arrow-left":"","corner-left-round":"",copy:"",cockade:"",cross:"",remove:"",clock:"",cheque:"",checkmark:"","check-circle":"",check:"",chat:"",camera:"",calculator:"",books:"","bank-card":"",attach:"",asterisk:"","arrows-right":"","arrows-left":"","arrow-up":"","arrow-top-right":"","arrow-sm-up":"","arrow-sm-right":"","arrow-sm-left":"","arrow-sm-down":"","arrow-right":"","arrow-link":"","arrow-link-back":"","arrow-left":"","arrow-down":"","video-off":"",delete:"",download:"",upload:"",preview:"","preview-off":"",calendar:"",recipe:"",share:"",warning:"",hourglass:""}},"ui-24":{name:"ui-24",size:"24",files:[{url:"ui-24.woff2?v=0.11.0",format:"woff2"},{url:"ui-24.woff?v=0.11.0",format:"woff"}],codePoints:{film:"","file-download":"","more-vertical-filled":"","more-vertical":"","more-horizontal-filled":"","more-horizontal":"",user:"",upload:"",unlock:"","speach-bubble":"","sound-on":"","sound-off":"","shopping-cart":"","shopping-bag":"",shop:"","share-network":"","share-ios":"",settings:"","send-message":"",search:"","remove-circle":"",reload:"","preview-off":"",preview:"",preferences:"",plus:"","play-filled":"",play:"",pin:"","phone-call-end":"",phone:"",pencil:"","pause-filled":"",pause:"","outgoing-call":"","open-in-new":"",multiple:"",minus:"",microsoft:"","microphone-off":"",microphone:"",menu:"",megaphone:"",math:"","map-pin":"",logout:"",login:"",lock:"",location:"",link:"",like:"",leave:"",info:"","incomming-call":"",img:"",image:"",house:"",help:"",handshake:"",globe:"","floppy-disk":"",filter:"",file:"",email:"",edit:"",download:"",dislike:"","direct-edit":"",delete:"","curved-arrow-left":"","corner-left-round":"",copy:"","computer-upload":"",cockade:"",cross:"",clock:"",cheque:"","check-circle":"",check:"",chat:"",camera:"",calendar:"",calculator:"",books:"","bank-card":"",attach:"","arrows-right":"","arrows-left":"","arrow-up":"","arrow-top-right":"","arrow-sm-up":"","arrow-sm-right":"","arrow-sm-left":"","arrow-sm-down":"","arrow-right":"","arrow-left":"","arrow-down":"","add-user":"","arrow-link":"","arrow-link-back":"",recipe:"","video-off":"",share:"",warning:"",hourglass:""}},"ui-32":{name:"ui-32",size:"32",files:[{url:"ui-32.woff2?v=0.11.0",format:"woff2"},{url:"ui-32.woff?v=0.11.0",format:"woff"}],codePoints:{user:"",upload:"",unlock:"","speach-bubble":"","sound-on":"","sound-off":"","shopping-cart":"","shopping-bag":"",shop:"","share-network":"","share-ios":"",settings:"","send-message":"",search:"",reload:"","preview-off":"",preview:"",preferences:"",plus:"","play-filled":"",play:"",pin:"","phone-call-end":"",phone:"",pencil:"","pause-filled":"",pause:"","outgoing-call":"","open-in-new":"",multiple:"","more-vertical-filled":"","more-vertical":"","more-horizontal-filled":"","more-horizontal":"",minus:"",microsoft:"","microphone-off":"",microphone:"",menu:"",megaphone:"",math:"","map-pin":"",logout:"",login:"",lock:"",location:"",link:"",like:"",leave:"",info:"","incomming-call":"",img:"",image:"",house:"",help:"",handshake:"",globe:"","floppy-disk":"",filter:"",film:"","file-download":"",file:"",email:"",edit:"",download:"",dislike:"","direct-edit":"",delete:"","corner-left-round":"",copy:"","computer-upload":"",cockade:"",cross:"",clock:"",cheque:"","check-circle":"",check:"",chat:"",camera:"",calendar:"",calculator:"",books:"","bank-card":"","back-arrow":"",attach:"","arrows-right":"","arrows-left":"","arrow-up":"","arrow-sm-up":"","arrow-sm-right":"","arrow-sm-left":"","arrow-sm-down":"","arrow-right":"","arrow-link":"","arrow-left":"","arrow-down":"","add-user":"",recipe:"","video-off":"",share:"",warning:"",hourglass:""}},"symbol-32":{name:"symbol-32",size:"32",files:[{url:"symbol-32.woff2?v=0.11.0",format:"woff2"},{url:"symbol-32.woff?v=0.11.0",format:"woff"}],codePoints:{"wrench-tool":"",worker:"","woman-symbol":"",woman:"",trophy:"","star-filled":"",star:"",spa:"","single-copy":"","single-body":"",security:"","return-policy":"",responsive:"","report-claim":"",receipt:"","percent-badge":"",people:"",parent:"","mobile-chat":"","man-symbol":"",man:"",love:"",loop:"",knight:"",interest:"",image:"","heart-person":"","headphones-mic":"",globe:"",flag:"",fingerprint:"",factory:"",energy:"",drop:"",document:"",doctor:"",dishwasher:"",deductible:"","curve-directions":"",compass:"",coins:"",chatbot:"",chart:"",cc:"","cart-return":"",cargo:"","bulb-on":"",bookmark:"",bill:"",bedroom:"",asterix:"",alarm:"","add-notification":"",umbrella:"",hospital:"",medicine:"",stack:"",translate:""}},"symbol-24":{name:"symbol-24",size:"24",files:[{url:"symbol-24.woff2?v=0.11.0",format:"woff2"},{url:"symbol-24.woff?v=0.11.0",format:"woff"}],codePoints:{"single-body":"",security:"","return-policy":"",responsive:"","report-claim":"",receipt:"",people:"","mobile-chat":"","man-symbol":"",man:"",love:"",loop:"",knight:"",interest:"",image:"","heart-person":"","headphones-mic":"",globe:"",flag:"",fingerprint:"",factory:"",energy:"",drop:"",document:"",dishwasher:"",deductible:"","curve-directions":"",compass:"",chatbot:"",cc:"","cart-return":"","bulb-on":"",bill:"",alarm:"","add-notification":"",chart:"",worker:"",cargo:"",bedroom:"",umbrella:"",coins:"",doctor:"",hospital:"",medicine:"","wrench-tool":"","woman-symbol":"",woman:"",trophy:"","star-filled":"",star:"",spa:"","single-copy":"","percent-badge":"",parent:"",bookmark:"",stack:"",translate:""}},"symbol-16":{name:"symbol-16",size:"16",files:[{url:"symbol-16.woff2?v=0.11.0",format:"woff2"},{url:"symbol-16.woff?v=0.11.0",format:"woff"}],codePoints:{worker:"",cargo:"",bedroom:"",umbrella:""}},"product-32":{name:"product-32",size:"32",files:[{url:"product-32.woff2?v=0.11.0",format:"woff2"},{url:"product-32.woff?v=0.11.0",format:"woff"}],codePoints:{traffic:"",tablet:"",watch:"",laptop:"","it-security":"",smartphone:"","if-start":"",legal:"",health:"",patch:"",glasses:"",heart:"","critical-illness":"",life:"","out-of-work-sickness":"",sickness:"",sport:"",pregnancy:"",child:"",death:"","child-2-25yo":"",student:"",paw:"",cat:"",dog:"",horse:"",car:"",forklift:"",vehicles:"",van:"",truck:"",trailer:"",tractor:"","large-truck":"","collection-truck":"","used-car":"",location:"",globe:"",bag:"","au-pair":"","one-way-ticket":"","time-share-abroad":"",plane:"",moped:"",minicar:"",mc:"","marine-cargo":"",snowmobile:"",ship:"",boat:"",atv:"","moped-car":"","small-boat":"",scooter:"",home:"","water-damage":"",flooding:"","furnished-property":"",company:"",apartment:"",cottage:"",building:"","theft-burglary":"","change-of-ownership":"","semi-detached-house":"","terraced-house":"","antique-car":"","cement-truck":"",caravan:"",bike:"",bulldozer:"",camper:"",bus:"",assistance:"",stock:"",ai:"",forest:"",liability:"",strike:"","cloud-light":"","camera-flash":"",handout:"",diamond:"","adult-50-plus":"","adult-60-plus":"",bodyshop:"","moped-eu":"","company-daughter":"","company-division":"","e-bike":"",segway:"","e-scooter":"","senior-scooter":"","e-scooter-seated":"","electric-car":"",decontamination:""}},"product-24":{name:"product-24",size:"24",files:[{url:"product-24.woff2?v=0.11.0",format:"woff2"},{url:"product-24.woff?v=0.11.0",format:"woff"}],codePoints:{traffic:"",tablet:"",watch:"",laptop:"","it-security":"",smartphone:"","if-start":"",legal:"",health:"",patch:"",glasses:"",heart:"","critical-illness":"",life:"","out-of-work-sickness":"",sickness:"",sport:"",pregnancy:"",child:"",death:"","child-2-25yo":"",student:"",paw:"",cat:"",dog:"",horse:"",car:"",forklift:"",vehicles:"",van:"",truck:"",trailer:"",tractor:"","large-truck":"","collection-truck":"","used-car":"",location:"",globe:"",bag:"","au-pair":"","one-way-ticket":"","time-share-abroad":"",plane:"",moped:"",minicar:"",mc:"","marine-cargo":"",snowmobile:"",ship:"",boat:"",atv:"","moped-car":"","small-boat":"",scooter:"",home:"","water-damage":"",flooding:"","furnished-property":"",company:"",apartment:"",cottage:"",building:"","theft-burglary":"","change-of-ownership":"","semi-detached-house":"","terraced-house":"","antique-car":"","cement-truck":"",caravan:"",bike:"",bulldozer:"",camper:"",bus:"",assistance:"",stock:"",ai:"",forest:"",liability:"",strike:"","cloud-light":"","camera-flash":"",handout:"",diamond:"","adult-50-plus":"","adult-60-plus":"",bodyshop:"","moped-eu":"","company-daughter":"","company-division":"","e-bike":"",segway:"","e-scooter":"","senior-scooter":"","e-scooter-seated":"","electric-car":"",decontamination:""}},"coverage-32":{name:"coverage-32",size:"32",files:[{url:"coverage-32.woff2?v=0.11.0",format:"woff2"},{url:"coverage-32.woff?v=0.11.0",format:"woff"}],codePoints:{"world-pin":"","windshield-damage":"",wheel:"",wallet:"",vermin:"","tv-stand":"",tooth:"",snow:"","small-child":"",school:"",sanitation:"","rental-car":"","power-failure":"",parking:"",misfuellling:"","lost-bagage":"",law:"","heating-system":"","glass-damage":"",fridge:"","flight-delayed":"","flight-cancelled":"","faq-bubble":"",evacuation:"",engine:"",disability:"",care:"","car-vandalism":"","car-fire":"","car-collision":"","building-damage":"","boat-sinking":"","boat-grounding":"","boat-collision":"","bagage-delay":"",animal:"",candle:""}},"coverage-24":{name:"coverage-24",size:"24",files:[{url:"coverage-24.woff2?v=0.11.0",format:"woff2"},{url:"coverage-24.woff?v=0.11.0",format:"woff"}],codePoints:{"world-pin":"","windshield-damage":"",wheel:"",wallet:"",vermin:"","tv-stand":"",tooth:"",snow:"","small-child":"",school:"",sanitation:"","rental-car":"","power-failure":"",parking:"",misfuellling:"","lost-bagage":"",law:"","heating-system":"","glass-damage":"",fridge:"","flight-delayed":"","flight-cancelled":"","faq-bubble":"",evacuation:"",engine:"",disability:"",care:"","car-fire":"","car-collision":"","building-damage":"","boat-sinking":"","boat-collision":"","boat-grounding":"","bagage-delay":"",animal:"","car-vandalism":"",candle:""}},"social-24":{name:"social-24",size:"24",files:[{url:"social-24.woff2?v=0.11.0",format:"woff2"},{url:"social-24.woff?v=0.11.0",format:"woff"}],codePoints:{youtube:"",twitter:"",x:"",linkedin:"",instagram:"",facebook:""}}}},ve="ids-icon";((e,t)=>{var i;document.getElementById(e)||((i=document.createElement("style")).id=e,i.textContent=t,null!=(e=document.querySelector("head"))&&e.prepend(i))})(ve,fe.cssText);let ye=pe=class extends ae{constructor(){super(...arguments),this.loadFontTask=new ce(this,{task:this.loadFont,args:()=>Array.from(this.attributes).map((e=>e.name)),autoRun:!0}),this.resizeObserver=new ResizeObserver((e=>this.updateFontSize(e)))}static get properties(){return Object.entries(ge.fonts).reduce(((e,[t,{codePoints:i}])=>(e[t]={type:Boolean},Object.keys(i).forEach((t=>{e[t]={type:Boolean}})),e)),{})}loadFont(e){return new Promise(((t,i)=>{var s=pe.findFont(e);const o=pe.findSymbolCodePoint(s,e),r=t=>`Failed to load IDS icon: ${this.outerHTML} with attributes: `+e.join(", ")+(t?" with error: "+t:"");if(s&&o){let e=pe.documentIconFonts.get(s);e||(e=new FontFace(s.name,s.files.map((e=>`url("${pe.getFontsBaseUrl()}/${e.url}") format("${e.format}")`)).join(", "),{display:"block",style:"normal",weight:"normal",stretch:"normal"}),pe.documentIconFonts.set(s,e),document.fonts.add(e),e.load()),e.loaded.then((()=>{t(o)})).catch((e=>i(r(e))))}else i(r())}))}updateFontSize(e){var t;for(const o of e){var{width:i,height:s}=o.contentRect;null!=(t=this.glyphElement)&&t.style.setProperty("--font-size",Math.min(i,s)+"px")}}connectedCallback(){super.connectedCallback(),this.resizeObserver.observe(this)}disconnectedCallback(){this.resizeObserver.disconnect(),super.disconnectedCallback()}render(){return q`<span class="glyph">${this.loadFontTask.render({initial:()=>"",pending:()=>"",complete:e=>e,error:e=>(console.error(e),"")})}</span>`}};ye.styles=[ue,r(Object.entries(ge.fonts).reduce(((e,[t,{size:i}])=>e+` :host([${t}]) {\n                        font-family: ${t};\n                        --font-size: var(--ids-icon-size-${i});\n                        width: var(--ids-icon-size-${i});\n                        min-width: var(--ids-icon-size-${i});\n                        height: var(--ids-icon-size-${i});\n                        min-height: var(--ids-icon-size-${i});\n                    }`),""))],ye.documentIconFonts=new WeakMap(Object.values(ge.fonts).map((e=>[e,void 0]))),ye.getFontsBaseUrl=()=>document.documentElement.dataset.idsIconFontsBaseUrl||document.head.dataset.idsIconFontsBaseUrl||document.body.dataset.idsIconFontsBaseUrl||ge.url,ye.findFont=e=>ge.fonts[e.find((e=>ge.fonts[e]))||""],ye.findSymbolCodePoint=(e,t)=>null==e?void 0:e.codePoints[t.find((t=>null==e?void 0:e.codePoints[t]))||""],me([function(e,t){return(i,s,o)=>{const r=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof s?i:o??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return de(i,s,{get(){let i=e.call(this);return void 0===i&&(null!==(i=r(this))||this.hasUpdated)&&t.call(this,i),i}})}return de(i,s,{get(){return r(this)}})}}(".glyph",!0)],ye.prototype,"glyphElement",void 0),ye=pe=me([(e=>function(t){customElements.get(e)||(e=>(t,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)})(e)(t)})(ve)],ye);export{ye as IdsIcon};
//# sourceMappingURL=index.js.map
