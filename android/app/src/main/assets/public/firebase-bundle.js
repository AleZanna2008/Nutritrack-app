(()=>{var pf=()=>{};var _f=function(r){let e=[],t=0;for(let n=0;n<r.length;n++){let i=r.charCodeAt(n);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},zy=function(r){let e=[],t=0,n=0;for(;t<r.length;){let i=r[t++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){let s=r[t++];e[n++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){let s=r[t++],o=r[t++],c=r[t++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[n++]=String.fromCharCode(55296+(u>>10)),e[n++]=String.fromCharCode(56320+(u&1023))}else{let s=r[t++],o=r[t++];e[n++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},yf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();let t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<r.length;i+=3){let s=r[i],o=i+1<r.length,c=o?r[i+1]:0,u=i+2<r.length,h=u?r[i+2]:0,f=s>>2,m=(s&3)<<4|c>>4,_=(c&15)<<2|h>>6,S=h&63;u||(S=64,o||(_=64)),n.push(t[f],t[m],t[_],t[S])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(_f(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):zy(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();let t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<r.length;){let s=t[r.charAt(i++)],c=i<r.length?t[r.charAt(i)]:0;++i;let h=i<r.length?t[r.charAt(i)]:64;++i;let m=i<r.length?t[r.charAt(i)]:64;if(++i,s==null||c==null||h==null||m==null)throw new Tc;let _=s<<2|c>>4;if(n.push(_),h!==64){let S=c<<4&240|h>>2;if(n.push(S),m!==64){let D=h<<6&192|m;n.push(D)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}},Tc=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},$y=function(r){let e=_f(r);return yf.encodeByteArray(e,!0)},hi=function(r){return $y(r).replace(/\./g,"")},xs=function(r){try{return yf.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function bc(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}var Gy=()=>bc().__FIREBASE_DEFAULTS__,Wy=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;let r=process.env.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Ky=()=>{if(typeof document=="undefined")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=r&&xs(r[1]);return e&&JSON.parse(e)},Ls=()=>{try{return pf()||Gy()||Wy()||Ky()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Sc=r=>{var e,t;return(t=(e=Ls())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},vf=r=>{let e=Sc(r);if(!e)return;let t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);let n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},Rc=()=>{var r;return(r=Ls())===null||r===void 0?void 0:r.config},Pc=r=>{var e;return(e=Ls())===null||e===void 0?void 0:e[`_${r}`]};var Vs=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}};function dt(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function di(r){return(await fetch(r,{credentials:"include"})).ok}function If(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let t={alg:"none",type:"JWT"},n=e||"demo-project",i=r.iat||0,s=r.sub||r.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},r);return[hi(JSON.stringify(t)),hi(JSON.stringify(o)),""].join(".")}var li={};function Hy(){let r={prod:[],emulator:[]};for(let e of Object.keys(li))li[e]?r.emulator.push(e):r.prod.push(e);return r}function Qy(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}var mf=!1;function Ms(r,e){if(typeof window=="undefined"||typeof document=="undefined"||!dt(window.location.host)||li[r]===e||li[r]||mf)return;li[r]=e;function t(_){return`__firebase__banner__${_}`}let n="__firebase__banner",s=Hy().prod.length>0;function o(){let _=document.getElementById(n);_&&_.remove()}function c(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function u(_,S){_.setAttribute("width","24"),_.setAttribute("id",S),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function h(){let _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{mf=!0,o()},_}function f(_,S){_.setAttribute("id",S),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function m(){let _=Qy(n),S=t("text"),D=document.getElementById(S)||document.createElement("span"),k=t("learnmore"),N=document.getElementById(k)||document.createElement("a"),$=t("preprendIcon"),B=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){let M=_.element;c(M),f(N,k);let W=h();u(B,$),M.append(B,D,N,W),document.body.appendChild(M)}s?(D.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,D.innerText="Preview backend running in this workspace."),D.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}function ce(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wf(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ce())}function Ef(){var r;let e=(r=Ls())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Tf(){return typeof navigator!="undefined"&&navigator.userAgent==="Cloudflare-Workers"}function Af(){let r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function bf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Sf(){let r=ce();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Cc(){return!Ef()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Dc(){return!Ef()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function Fs(){try{return typeof indexedDB=="object"}catch{return!1}}function Rf(){return new Promise((r,e)=>{try{let t=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}var Jy="FirebaseError",Le=class r extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Jy,Object.setPrototypeOf(this,r.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ht.prototype.create)}},ht=class{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Yy(s,n):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new Le(i,c,n)}};function Yy(r,e){return r.replace(Xy,(t,n)=>{let i=e[n];return i!=null?String(i):`<${n}?>`})}var Xy=/\{\$([^}]+)}/g;function Pf(r){for(let e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Ge(r,e){if(r===e)return!0;let t=Object.keys(r),n=Object.keys(e);for(let i of t){if(!n.includes(i))return!1;let s=r[i],o=e[i];if(gf(s)&&gf(o)){if(!Ge(s,o))return!1}else if(s!==o)return!1}for(let i of n)if(!t.includes(i))return!1;return!0}function gf(r){return r!==null&&typeof r=="object"}function $n(r){let e=[];for(let[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Gn(r){let e={};return r.replace(/^\?/,"").split("&").forEach(n=>{if(n){let[i,s]=n.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Wn(r){let e=r.indexOf("?");if(!e)return"";let t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function Cf(r,e){let t=new Ac(r,e);return t.subscribe.bind(t)}var Ac=class{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");Zy(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:n},i.next===void 0&&(i.next=Ec),i.error===void 0&&(i.error=Ec),i.complete===void 0&&(i.complete=Ec);let s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console!="undefined"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function Zy(r,e){if(typeof r!="object"||r===null)return!1;for(let t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Ec(){}var _A=4*60*60*1e3;function ye(r){return r&&r._delegate?r._delegate:r}var qe=class{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var on="[DEFAULT]";var Nc=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let n=new Vs;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tv(e))try{this.getOrInitializeService({instanceIdentifier:on})}catch{}for(let[t,n]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(t);try{let s=this.getOrInitializeService({instanceIdentifier:i});n.resolve(s)}catch{}}}}clearInstance(e=on){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=on){return this.instances.has(e)}getOptions(e=on){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[s,o]of this.instancesDeferred.entries()){let c=this.normalizeInstanceIdentifier(s);n===c&&o.resolve(i)}return i}onInit(e,t){var n;let i=this.normalizeInstanceIdentifier(t),s=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);let o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let i of n)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:ev(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=on){return this.component?this.component.multipleInstances?e:on:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function ev(r){return r===on?void 0:r}function tv(r){return r.instantiationMode==="EAGER"}var Us=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new Nc(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}};var nv=[],H;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(H||(H={}));var rv={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},iv=H.INFO,sv={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},ov=(r,e,...t)=>{if(e<r.logLevel)return;let n=new Date().toISOString(),i=sv[e];if(i)console[i](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},Pt=class{constructor(e){this.name=e,this._logLevel=iv,this._logHandler=ov,this._userLogHandler=null,nv.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}};var av=(r,e)=>e.some(t=>r instanceof t),Df,Nf;function cv(){return Df||(Df=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uv(){return Nf||(Nf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var kf=new WeakMap,Oc=new WeakMap,Of=new WeakMap,kc=new WeakMap,xc=new WeakMap;function lv(r){let e=new Promise((t,n)=>{let i=()=>{r.removeEventListener("success",s),r.removeEventListener("error",o)},s=()=>{t(Xe(r.result)),i()},o=()=>{n(r.error),i()};r.addEventListener("success",s),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&kf.set(t,r)}).catch(()=>{}),xc.set(e,r),e}function hv(r){if(Oc.has(r))return;let e=new Promise((t,n)=>{let i=()=>{r.removeEventListener("complete",s),r.removeEventListener("error",o),r.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),i()};r.addEventListener("complete",s),r.addEventListener("error",o),r.addEventListener("abort",o)});Oc.set(r,e)}var Vc={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Oc.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Of.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Xe(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Vf(r){Vc=r(Vc)}function dv(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){let n=r.call(Bs(this),e,...t);return Of.set(n,e.sort?e.sort():[e]),Xe(n)}:uv().includes(r)?function(...e){return r.apply(Bs(this),e),Xe(kf.get(this))}:function(...e){return Xe(r.apply(Bs(this),e))}}function fv(r){return typeof r=="function"?dv(r):(r instanceof IDBTransaction&&hv(r),av(r,cv())?new Proxy(r,Vc):r)}function Xe(r){if(r instanceof IDBRequest)return lv(r);if(kc.has(r))return kc.get(r);let e=fv(r);return e!==r&&(kc.set(r,e),xc.set(e,r)),e}var Bs=r=>xc.get(r);function Lf(r,e,{blocked:t,upgrade:n,blocking:i,terminated:s}={}){let o=indexedDB.open(r,e),c=Xe(o);return n&&o.addEventListener("upgradeneeded",u=>{n(Xe(o.result),u.oldVersion,u.newVersion,Xe(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}var pv=["get","getKey","getAll","getAllKeys","count"],mv=["put","add","delete","clear"],Lc=new Map;function xf(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Lc.get(e))return Lc.get(e);let t=e.replace(/FromIndex$/,""),n=e!==t,i=mv.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(i||pv.includes(t)))return;let s=async function(o,...c){let u=this.transaction(o,i?"readwrite":"readonly"),h=u.store;return n&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),i&&u.done]))[0]};return Lc.set(e,s),s}Vf(r=>({...r,get:(e,t,n)=>xf(e,t)||r.get(e,t,n),has:(e,t)=>!!xf(e,t)||r.has(e,t)}));var Fc=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(gv(t)){let n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}};function gv(r){let e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}var Uc="@firebase/app",Mf="0.13.2";var ft=new Pt("@firebase/app"),_v="@firebase/app-compat",yv="@firebase/analytics-compat",vv="@firebase/analytics",Iv="@firebase/app-check-compat",wv="@firebase/app-check",Ev="@firebase/auth",Tv="@firebase/auth-compat",Av="@firebase/database",bv="@firebase/data-connect",Sv="@firebase/database-compat",Rv="@firebase/functions",Pv="@firebase/functions-compat",Cv="@firebase/installations",Dv="@firebase/installations-compat",Nv="@firebase/messaging",kv="@firebase/messaging-compat",Ov="@firebase/performance",Vv="@firebase/performance-compat",xv="@firebase/remote-config",Lv="@firebase/remote-config-compat",Mv="@firebase/storage",Fv="@firebase/storage-compat",Uv="@firebase/firestore",Bv="@firebase/ai",qv="@firebase/firestore-compat",jv="firebase",zv="11.10.0";var Bc="[DEFAULT]",$v={[Uc]:"fire-core",[_v]:"fire-core-compat",[vv]:"fire-analytics",[yv]:"fire-analytics-compat",[wv]:"fire-app-check",[Iv]:"fire-app-check-compat",[Ev]:"fire-auth",[Tv]:"fire-auth-compat",[Av]:"fire-rtdb",[bv]:"fire-data-connect",[Sv]:"fire-rtdb-compat",[Rv]:"fire-fn",[Pv]:"fire-fn-compat",[Cv]:"fire-iid",[Dv]:"fire-iid-compat",[Nv]:"fire-fcm",[kv]:"fire-fcm-compat",[Ov]:"fire-perf",[Vv]:"fire-perf-compat",[xv]:"fire-rc",[Lv]:"fire-rc-compat",[Mv]:"fire-gcs",[Fv]:"fire-gcs-compat",[Uv]:"fire-fst",[qv]:"fire-fst-compat",[Bv]:"fire-vertex","fire-js":"fire-js",[jv]:"fire-js-all"};var qs=new Map,Gv=new Map,qc=new Map;function Ff(r,e){try{r.container.addComponent(e)}catch(t){ft.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Dt(r){let e=r.name;if(qc.has(e))return ft.debug(`There were multiple attempts to register component ${e}.`),!1;qc.set(e,r);for(let t of qs.values())Ff(t,r);for(let t of Gv.values())Ff(t,r);return!0}function Kn(r,e){let t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Oe(r){return r==null?!1:r.settings!==void 0}var Wv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ct=new ht("app","Firebase",Wv);var jc=class{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new qe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ct.create("app-deleted",{appName:this._name})}};var Nt=zv;function Gc(r,e={}){let t=r;typeof e!="object"&&(e={name:e});let n=Object.assign({name:Bc,automaticDataCollectionEnabled:!0},e),i=n.name;if(typeof i!="string"||!i)throw Ct.create("bad-app-name",{appName:String(i)});if(t||(t=Rc()),!t)throw Ct.create("no-options");let s=qs.get(i);if(s){if(Ge(t,s.options)&&Ge(n,s.config))return s;throw Ct.create("duplicate-app",{appName:i})}let o=new Us(i);for(let u of qc.values())o.addComponent(u);let c=new jc(t,n,o);return qs.set(i,c),c}function js(r=Bc){let e=qs.get(r);if(!e&&r===Bc&&Rc())return Gc();if(!e)throw Ct.create("no-app",{appName:r});return e}function We(r,e,t){var n;let i=(n=$v[r])!==null&&n!==void 0?n:r;t&&(i+=`-${t}`);let s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){let c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ft.warn(c.join(" "));return}Dt(new qe(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}var Kv="firebase-heartbeat-database",Hv=1,fi="firebase-heartbeat-store",Mc=null;function jf(){return Mc||(Mc=Lf(Kv,Hv,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(fi)}catch(t){console.warn(t)}}}}).catch(r=>{throw Ct.create("idb-open",{originalErrorMessage:r.message})})),Mc}async function Qv(r){try{let t=(await jf()).transaction(fi),n=await t.objectStore(fi).get(zf(r));return await t.done,n}catch(e){if(e instanceof Le)ft.warn(e.message);else{let t=Ct.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ft.warn(t.message)}}}async function Uf(r,e){try{let n=(await jf()).transaction(fi,"readwrite");await n.objectStore(fi).put(e,zf(r)),await n.done}catch(t){if(t instanceof Le)ft.warn(t.message);else{let n=Ct.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ft.warn(n.message)}}}function zf(r){return`${r.name}!${r.options.appId}`}var Jv=1024,Yv=30,zc=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new $c(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{let i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Bf();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Yv){let o=Zv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){ft.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";let t=Bf(),{heartbeatsToSend:n,unsentEntries:i}=Xv(this._heartbeatsCache.heartbeats),s=hi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return ft.warn(t),""}}};function Bf(){return new Date().toISOString().substring(0,10)}function Xv(r,e=Jv){let t=[],n=r.slice();for(let i of r){let s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),qf(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),qf(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}var $c=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fs()?Rf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let t=await Qv(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return Uf(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return Uf(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}};function qf(r){return hi(JSON.stringify({version:2,heartbeats:r})).length}function Zv(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}function eI(r){Dt(new qe("platform-logger",e=>new Fc(e),"PRIVATE")),Dt(new qe("heartbeat",e=>new zc(e),"PRIVATE")),We(Uc,Mf,r),We(Uc,Mf,"esm2017"),We("fire-js","")}eI("");var tI="firebase",nI="11.10.0";We(tI,nI,"app");function zs(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(r);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(r,n[i])&&(t[n[i]]=r[n[i]]);return t}function cp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var up=cp,lp=new ht("auth","Firebase",cp());var Js=new Pt("@firebase/auth");function rI(r,...e){Js.logLevel<=H.WARN&&Js.warn(`Auth (${Nt}): ${r}`,...e)}function Gs(r,...e){Js.logLevel<=H.ERROR&&Js.error(`Auth (${Nt}): ${r}`,...e)}function Ke(r,...e){throw gu(r,...e)}function et(r,...e){return gu(r,...e)}function hp(r,e,t){let n=Object.assign(Object.assign({},up()),{[e]:t});return new ht("auth","Firebase",n).create(e,{appName:r.name})}function mt(r){return hp(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function gu(r,...e){if(typeof r!="string"){let t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return lp.create(r,...e)}function U(r,e,...t){if(!r)throw gu(e,...t)}function Ze(r){let e="INTERNAL ASSERTION FAILED: "+r;throw Gs(e),new Error(e)}function gt(r,e){r||Ze(e)}function Yc(){var r;return typeof self!="undefined"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function iI(){return $f()==="http:"||$f()==="https:"}function $f(){var r;return typeof self!="undefined"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}function sI(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iI()||Af()||"connection"in navigator)?navigator.onLine:!0}function oI(){if(typeof navigator=="undefined")return null;let r=navigator;return r.languages&&r.languages[0]||r.language||null}var an=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,gt(t>e,"Short delay should be less than long delay!"),this.isMobile=wf()||bf()}get(){return sI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function _u(r,e){gt(r.emulator,"Emulator should always be set here");let{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}var Ys=class{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;Ze("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;Ze("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;Ze("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var aI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var cI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],uI=new an(3e4,6e4);function me(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Ie(r,e,t,n,i={}){return dp(r,i,async()=>{let s={},o={};n&&(e==="GET"?o=n:s={body:JSON.stringify(n)});let c=$n(Object.assign({key:r.config.apiKey},o)).slice(1),u=await r._getAdditionalHeaders();u["Content-Type"]="application/json",r.languageCode&&(u["X-Firebase-Locale"]=r.languageCode);let h=Object.assign({method:e,headers:u},s);return Tf()||(h.referrerPolicy="no-referrer"),r.emulatorConfig&&dt(r.emulatorConfig.host)&&(h.credentials="include"),Ys.fetch()(await fp(r,r.config.apiHost,t,c),h)})}async function dp(r,e,t){r._canInitEmulator=!1;let n=Object.assign(Object.assign({},aI),e);try{let i=new Xc(r),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();let o=await s.json();if("needConfirmation"in o)throw mi(r,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{let c=s.ok?o.errorMessage:o.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw mi(r,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw mi(r,"email-already-in-use",o);if(u==="USER_DISABLED")throw mi(r,"user-disabled",o);let f=n[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw hp(r,f,h);Ke(r,f)}}catch(i){if(i instanceof Le)throw i;Ke(r,"network-request-failed",{message:String(i)})}}async function Vt(r,e,t,n,i={}){let s=await Ie(r,e,t,n,i);return"mfaPendingCredential"in s&&Ke(r,"multi-factor-auth-required",{_serverResponse:s}),s}async function fp(r,e,t,n){let i=`${e}${t}?${n}`,s=r,o=s.config.emulator?_u(r.config,i):`${r.config.apiScheme}://${i}`;return cI.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function lI(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var Xc=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(et(this.auth,"network-request-failed")),uI.get())})}};function mi(r,e,t){let n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);let i=et(r,e,n);return i.customData._tokenResponse=t,i}function Gf(r){return r!==void 0&&r.enterprise!==void 0}var Xs=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return lI(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}};async function pp(r,e){return Ie(r,"GET","/v2/recaptchaConfig",me(r,e))}async function hI(r,e){return Ie(r,"POST","/v1/accounts:delete",e)}async function Zs(r,e){return Ie(r,"POST","/v1/accounts:lookup",e)}function gi(r){if(r)try{let e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mp(r,e=!1){let t=ye(r),n=await t.getIdToken(e),i=yu(n);U(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");let s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:gi(Wc(i.auth_time)),issuedAtTime:gi(Wc(i.iat)),expirationTime:gi(Wc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Wc(r){return Number(r)*1e3}function yu(r){let[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return Gs("JWT malformed, contained fewer than 3 sections"),null;try{let i=xs(t);return i?JSON.parse(i):(Gs("Failed to decode base64 JWT payload"),null)}catch(i){return Gs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Wf(r){let e=yu(r);return U(e,"internal-error"),U(typeof e.exp!="undefined","internal-error"),U(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}async function Jn(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof Le&&dI(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function dI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}var Zc=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;let i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};var vi=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=gi(this.lastLoginAt),this.creationTime=gi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function eo(r){var e;let t=r.auth,n=await r.getIdToken(),i=await Jn(r,Zs(t,{idToken:n}));U(i==null?void 0:i.users.length,t,"internal-error");let s=i.users[0];r._notifyReloadListener(s);let o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?_p(s.providerUserInfo):[],c=fI(r.providerData,o),u=r.isAnonymous,h=!(r.email&&s.passwordHash)&&!(c!=null&&c.length),f=u?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new vi(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(r,m)}async function gp(r){let e=ye(r);await eo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fI(r,e){return[...r.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function _p(r){return r.map(e=>{var{providerId:t}=e,n=zs(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}async function pI(r,e){let t=await dp(r,{},async()=>{let n=$n({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=r.config,o=await fp(r,i,"/v1/token",`key=${s}`),c=await r._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";let u={method:"POST",headers:c,body:n};return r.emulatorConfig&&dt(r.emulatorConfig.host)&&(u.credentials="include"),Ys.fetch()(o,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function mI(r,e){return Ie(r,"POST","/v2/accounts:revokeToken",me(r,e))}var _i=class r{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken!="undefined","internal-error"),U(typeof e.refreshToken!="undefined","internal-error");let t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Wf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){U(e.length!==0,"internal-error");let t=Wf(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:n,refreshToken:i,expiresIn:s}=await pI(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){let{refreshToken:n,accessToken:i,expirationTime:s}=t,o=new r;return n&&(U(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),i&&(U(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(U(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new r,this.toJSON())}_performRefresh(){return Ze("not implemented")}};function kt(r,e){U(typeof r=="string"||typeof r=="undefined","internal-error",{appName:e})}var Ot=class r{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=zs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Zc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new vi(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){let t=await Jn(this,this.stsTokenManager.getToken(this.auth,e));return U(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return mp(this,e)}reload(){return gp(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new r(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await eo(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Oe(this.auth.app))return Promise.reject(mt(this.auth));let e=await this.getIdToken();return await Jn(this,hI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,o,c,u,h,f;let m=(n=t.displayName)!==null&&n!==void 0?n:void 0,_=(i=t.email)!==null&&i!==void 0?i:void 0,S=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,D=(o=t.photoURL)!==null&&o!==void 0?o:void 0,k=(c=t.tenantId)!==null&&c!==void 0?c:void 0,N=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,$=(h=t.createdAt)!==null&&h!==void 0?h:void 0,B=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:M,emailVerified:W,isAnonymous:Y,providerData:G,stsTokenManager:I}=t;U(M&&I,e,"internal-error");let g=_i.fromJSON(this.name,I);U(typeof M=="string",e,"internal-error"),kt(m,e.name),kt(_,e.name),U(typeof W=="boolean",e,"internal-error"),U(typeof Y=="boolean",e,"internal-error"),kt(S,e.name),kt(D,e.name),kt(k,e.name),kt(N,e.name),kt($,e.name),kt(B,e.name);let v=new r({uid:M,auth:e,email:_,emailVerified:W,displayName:m,isAnonymous:Y,photoURL:D,phoneNumber:S,tenantId:k,stsTokenManager:g,createdAt:$,lastLoginAt:B});return G&&Array.isArray(G)&&(v.providerData=G.map(w=>Object.assign({},w))),N&&(v._redirectEventId=N),v}static async _fromIdTokenResponse(e,t,n=!1){let i=new _i;i.updateFromServerResponse(t);let s=new r({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await eo(s),s}static async _fromGetAccountInfoResponse(e,t,n){let i=t.users[0];U(i.localId!==void 0,"internal-error");let s=i.providerUserInfo!==void 0?_p(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new _i;c.updateFromIdToken(n);let u=new r({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new vi(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}};var Kf=new Map;function pt(r){gt(r instanceof Function,"Expected a class definition");let e=Kf.get(r);return e?(gt(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Kf.set(r,e),e)}var to=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};to.type="NONE";var eu=to;function Ws(r,e,t){return`firebase:${r}:${e}:${t}`}var no=class r{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;let{config:i,name:s}=this.auth;this.fullUserKey=Ws(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ws("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){let t=await Zs(this.auth,{idToken:e}).catch(()=>{});return t?Ot._fromGetAccountInfoResponse(this.auth,t,e):null}return Ot._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new r(pt(eu),e,n);let i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h),s=i[0]||pt(eu),o=Ws(n,e.config.apiKey,e.name),c=null;for(let h of t)try{let f=await h._get(o);if(f){let m;if(typeof f=="string"){let _=await Zs(e,{idToken:f}).catch(()=>{});if(!_)break;m=await Ot._fromGetAccountInfoResponse(e,_,f)}else m=Ot._fromJSON(e,f);h!==s&&(c=m),s=h;break}}catch{}let u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new r(s,e,n):(s=u[0],c&&await s._set(o,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new r(s,e,n))}};function Hf(r){let e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Tp(e))return"Blackberry";if(Ap(e))return"Webos";if(vp(e))return"Safari";if((e.includes("chrome/")||Ip(e))&&!e.includes("edge/"))return"Chrome";if(Ep(e))return"Android";{let t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function yp(r=ce()){return/firefox\//i.test(r)}function vp(r=ce()){let e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ip(r=ce()){return/crios\//i.test(r)}function wp(r=ce()){return/iemobile/i.test(r)}function Ep(r=ce()){return/android/i.test(r)}function Tp(r=ce()){return/blackberry/i.test(r)}function Ap(r=ce()){return/webos/i.test(r)}function vu(r=ce()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function gI(r=ce()){var e;return vu(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _I(){return Sf()&&document.documentMode===10}function bp(r=ce()){return vu(r)||Ep(r)||Ap(r)||Tp(r)||/windows phone/i.test(r)||wp(r)}function Sp(r,e=[]){let t;switch(r){case"Browser":t=Hf(ce());break;case"Worker":t=`${Hf(ce())}-${r}`;break;default:t=r}let n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Nt}/${n}`}var tu=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let n=s=>new Promise((o,c)=>{try{let u=e(s);o(u)}catch(u){c(u)}});n.onAbort=t,this.queue.push(n);let i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(let i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}};async function yI(r,e={}){return Ie(r,"GET","/v2/passwordPolicy",me(r,e))}var vI=6,nu=class{constructor(e){var t,n,i,s;let o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:vI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,i,s,o,c;let u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(n=u.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){let n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};var ru=class{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ro(this),this.idTokenSubscription=new ro(this),this.beforeStateQueue=new tu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=pt(t)),this._initializationPromise=this.queue(async()=>{var n,i,s;if(!this._deleted&&(this.persistenceManager=await no.create(this,e),(n=this._resolvePersistenceManagerAvailable)===null||n===void 0||n.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await Zs(this,{idToken:e}),n=await Ot._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Oe(this.app)){let o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}let n=await this.assertedPersistence.getCurrentUser(),i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===c)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await eo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Oe(this.app))return Promise.reject(mt(this));let t=e?ye(e):null;return t&&U(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Oe(this.app)?Promise.reject(mt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Oe(this.app)?Promise.reject(mt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await yI(this),t=new nu(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ht("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await mI(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){let n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&pt(e)||this._popupRedirectResolver;U(t,this,"argument-error"),this.redirectPersistenceManager=await no.create(this,[pt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};let s=typeof t=="function"?t:t.next.bind(t),o=!1,c=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(c,this,"internal-error"),c.then(()=>{o||s(this.currentUser)}),typeof t=="function"){let u=e.addObserver(t,n,i);return()=>{o=!0,u()}}else{let u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);let i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(Oe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;let t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&rI(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}};function _t(r){return ye(r)}var ro=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=Cf(t=>this.observer=t)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};var Eo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function II(r){Eo=r}function Rp(r){return Eo.loadJS(r)}function wI(){return Eo.recaptchaEnterpriseScript}function EI(){return Eo.gapiScript}function Pp(r){return`__${r}${Math.floor(Math.random()*1e6)}`}var iu=class{constructor(){this.enterprise=new su}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}},su=class{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}};var TI="recaptcha-enterprise",yi="NO_RECAPTCHA",io=class{constructor(e){this.type=TI,this.auth=_t(e)}async verify(e="verify",t=!1){async function n(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,c)=>{pp(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{let h=new Xs(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{c(u)})})}function i(s,o,c){let u=window.grecaptcha;Gf(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(yi)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new iu().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{n(this.auth).then(c=>{if(!t&&Gf(window.grecaptcha))i(c,s,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=wI();u.length!==0&&(u+=c),Rp(u).then(()=>{i(c,s,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}};async function pi(r,e,t,n=!1,i=!1){let s=new io(r),o;if(i)o=yi;else try{o=await s.verify(t)}catch{o=await s.verify(t,!0)}let c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){let u=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){let u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return n?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Hn(r,e,t,n,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if(!((s=r._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){let c=await pi(r,e,t,t==="getOobCode");return n(r,c)}else return n(r,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let u=await pi(r,e,t,t==="getOobCode");return n(r,u)}else return Promise.reject(c)});else if(i==="PHONE_PROVIDER")if(!((o=r._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("PHONE_PROVIDER")){let c=await pi(r,e,t);return n(r,c).catch(async u=>{var h;if(((h=r._getRecaptchaConfig())===null||h===void 0?void 0:h.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(u.code==="auth/missing-recaptcha-token"||u.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);let f=await pi(r,e,t,!1,!0);return n(r,f)}return Promise.reject(u)})}else{let c=await pi(r,e,t,!1,!0);return n(r,c)}else return Promise.reject(i+" provider is not supported.")}async function AI(r){let e=_t(r),t=await pp(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Xs(t);e.tenantId==null?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,n.isAnyProviderEnabled()&&new io(e).verify()}function Cp(r,e){let t=Kn(r,"auth");if(t.isInitialized()){let i=t.getImmediate(),s=t.getOptions();if(Ge(s,e!=null?e:{}))return i;Ke(i,"already-initialized")}return t.initialize({options:e})}function bI(r,e){let t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(pt);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function Dp(r,e,t){let n=_t(r);U(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");let i=!!(t!=null&&t.disableWarnings),s=Np(e),{host:o,port:c}=SI(e),u=c===null?"":`:${c}`,h={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!n._canInitEmulator){U(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),U(Ge(h,n.config.emulator)&&Ge(f,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=h,n.emulatorConfig=f,n.settings.appVerificationDisabledForTesting=!0,dt(o)?(di(`${s}//${o}${u}`),Ms("Auth",!0)):i||RI()}function Np(r){let e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function SI(r){let e=Np(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};let n=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){let s=i[1];return{host:s,port:Qf(n.substr(s.length+1))}}else{let[s,o]=n.split(":");return{host:s,port:Qf(o)}}}function Qf(r){if(!r)return null;let e=Number(r);return isNaN(e)?null:e}function RI(){function r(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}var cn=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ze("not implemented")}_getIdTokenResponse(e){return Ze("not implemented")}_linkToIdToken(e,t){return Ze("not implemented")}_getReauthenticationResolver(e){return Ze("not implemented")}};async function PI(r,e){return Ie(r,"POST","/v1/accounts:signUp",e)}async function CI(r,e){return Vt(r,"POST","/v1/accounts:signInWithPassword",me(r,e))}async function DI(r,e){return Vt(r,"POST","/v1/accounts:signInWithEmailLink",me(r,e))}async function NI(r,e){return Vt(r,"POST","/v1/accounts:signInWithEmailLink",me(r,e))}var Ii=class r extends cn{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new r(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new r(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hn(e,t,"signInWithPassword",CI,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return DI(e,{email:this._email,oobCode:this._password});default:Ke(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":let n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hn(e,n,"signUpPassword",PI,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return NI(e,{idToken:t,email:this._email,oobCode:this._password});default:Ke(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};async function Qn(r,e){return Vt(r,"POST","/v1/accounts:signInWithIdp",me(r,e))}var kI="http://localhost",un=class r extends cn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ke("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=zs(t,["providerId","signInMethod"]);if(!n||!i)return null;let o=new r(n,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){let t=this.buildRequest();return Qn(e,t)}_linkToIdToken(e,t){let n=this.buildRequest();return n.idToken=t,Qn(e,n)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,Qn(e,t)}buildRequest(){let e={requestUri:kI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=$n(t)}return e}};async function Jf(r,e){return Ie(r,"POST","/v1/accounts:sendVerificationCode",me(r,e))}async function OI(r,e){return Vt(r,"POST","/v1/accounts:signInWithPhoneNumber",me(r,e))}async function VI(r,e){let t=await Vt(r,"POST","/v1/accounts:signInWithPhoneNumber",me(r,e));if(t.temporaryProof)throw mi(r,"account-exists-with-different-credential",t);return t}var xI={USER_NOT_FOUND:"user-not-found"};async function LI(r,e){let t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Vt(r,"POST","/v1/accounts:signInWithPhoneNumber",me(r,t),xI)}var wi=class r extends cn{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new r({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new r({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return OI(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return VI(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return LI(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));let{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s}=e;return!n&&!t&&!i&&!s?null:new r({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s})}};function MI(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function FI(r){let e=Gn(Wn(r)).link,t=e?Gn(Wn(e)).deep_link_id:null,n=Gn(Wn(r)).deep_link_id;return(n?Gn(Wn(n)).link:null)||n||t||e||r}var so=class r{constructor(e){var t,n,i,s,o,c;let u=Gn(Wn(e)),h=(t=u.apiKey)!==null&&t!==void 0?t:null,f=(n=u.oobCode)!==null&&n!==void 0?n:null,m=MI((i=u.mode)!==null&&i!==void 0?i:null);U(h&&f&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.lang)!==null&&o!==void 0?o:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){let t=FI(e);try{return new r(t)}catch{return null}}};var ln=class r{constructor(){this.providerId=r.PROVIDER_ID}static credential(e,t){return Ii._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let n=so.parseLink(t);return U(n,"argument-error"),Ii._fromEmailAndCode(e,n.code,n.tenantId)}};ln.PROVIDER_ID="password";ln.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ln.EMAIL_LINK_SIGN_IN_METHOD="emailLink";var oo=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};var hn=class extends oo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};var Ei=class r extends hn{constructor(){super("facebook.com")}static credential(e){return un._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return r.credentialFromTaggedObject(e)}static credentialFromError(e){return r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return r.credential(e.oauthAccessToken)}catch{return null}}};Ei.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ei.PROVIDER_ID="facebook.com";var Ti=class r extends hn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return un._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return r.credentialFromTaggedObject(e)}static credentialFromError(e){return r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return r.credential(t,n)}catch{return null}}};Ti.GOOGLE_SIGN_IN_METHOD="google.com";Ti.PROVIDER_ID="google.com";var Ai=class r extends hn{constructor(){super("github.com")}static credential(e){return un._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return r.credentialFromTaggedObject(e)}static credentialFromError(e){return r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return r.credential(e.oauthAccessToken)}catch{return null}}};Ai.GITHUB_SIGN_IN_METHOD="github.com";Ai.PROVIDER_ID="github.com";var bi=class r extends hn{constructor(){super("twitter.com")}static credential(e,t){return un._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return r.credentialFromTaggedObject(e)}static credentialFromError(e){return r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return r.credential(t,n)}catch{return null}}};bi.TWITTER_SIGN_IN_METHOD="twitter.com";bi.PROVIDER_ID="twitter.com";async function UI(r,e){return Vt(r,"POST","/v1/accounts:signUp",me(r,e))}var Yn=class r{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){let s=await Ot._fromIdTokenResponse(e,n,i),o=Yf(n);return new r({user:s,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);let i=Yf(n);return new r({user:e,providerId:i,_tokenResponse:n,operationType:t})}};function Yf(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}var ou=class r extends Le{constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,r.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new r(e,t,n,i)}};function kp(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ou._fromErrorAndOperation(r,s,e,n):s})}async function BI(r,e,t=!1){let n=await Jn(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Yn._forOperation(r,"link",n)}async function qI(r,e,t=!1){let{auth:n}=r;if(Oe(n.app))return Promise.reject(mt(n));let i="reauthenticate";try{let s=await Jn(r,kp(n,i,e,r),t);U(s.idToken,n,"internal-error");let o=yu(s.idToken);U(o,n,"internal-error");let{sub:c}=o;return U(r.uid===c,n,"user-mismatch"),Yn._forOperation(r,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ke(n,"user-mismatch"),s}}async function Op(r,e,t=!1){if(Oe(r.app))return Promise.reject(mt(r));let n="signIn",i=await kp(r,n,e),s=await Yn._fromIdTokenResponse(r,n,i);return t||await r._updateCurrentUser(s.user),s}async function Vp(r,e){return Op(_t(r),e)}async function xp(r){let e=_t(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Iu(r,e,t){if(Oe(r.app))return Promise.reject(mt(r));let n=_t(r),o=await Hn(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",UI,"EMAIL_PASSWORD_PROVIDER").catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&xp(r),u}),c=await Yn._fromIdTokenResponse(n,"signIn",o);return await n._updateCurrentUser(c.user),c}function wu(r,e,t){return Oe(r.app)?Promise.reject(mt(r)):Vp(ye(r),ln.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&xp(r),n})}async function jI(r,e){return Ie(r,"POST","/v1/accounts:update",e)}async function Eu(r,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;let n=ye(r),s={idToken:await n.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Jn(n,jI(n.auth,s));n.displayName=o.displayName||null,n.photoURL=o.photoUrl||null;let c=n.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=n.displayName,c.photoURL=n.photoURL),await n._updateTokensIfNecessary(o)}function Lp(r,e,t,n){return ye(r).onIdTokenChanged(e,t,n)}function Mp(r,e,t){return ye(r).beforeAuthStateChanged(e,t)}function Tu(r,e,t,n){return ye(r).onAuthStateChanged(e,t,n)}function Au(r){return ye(r).signOut()}function Xf(r,e){return Ie(r,"POST","/v2/accounts/mfaEnrollment:start",me(r,e))}function zI(r,e){return Ie(r,"POST","/v2/accounts/mfaEnrollment:finalize",me(r,e))}function $I(r,e){return Ie(r,"POST","/v2/accounts/mfaEnrollment:start",me(r,e))}function GI(r,e){return Ie(r,"POST","/v2/accounts/mfaEnrollment:finalize",me(r,e))}var ao="__sak";var co=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ao,"1"),this.storage.removeItem(ao),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};var WI=1e3,KI=10,uo=class extends co{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=bp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,u)=>{this.notifyListeners(o,u)});return}let n=e.key;t?this.detachListener():this.stopPolling();let i=()=>{let o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},s=this.storage.getItem(n);_I()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,KI):i()}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let i of Array.from(n))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},WI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};uo.type="LOCAL";var Fp=uo;var HI=1e3;function Kc(r){var e,t;let n=r.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),i=RegExp(`${n}=([^;]+)`);return(t=(e=document.cookie.match(i))===null||e===void 0?void 0:e[1])!==null&&t!==void 0?t:null}function Hc(r){return`${window.location.protocol==="http:"?"__dev_":"__HOST-"}FIREBASE_${r.split(":")[3]}`}var au=class{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(typeof window===void 0)return e;let t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){var e;return typeof isSecureContext=="boolean"&&!isSecureContext||typeof navigator=="undefined"||typeof document=="undefined"?!1:(e=navigator.cookieEnabled)!==null&&e!==void 0?e:!0}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;let t=Hc(e);if(window.cookieStore){let n=await window.cookieStore.get(t);return n==null?void 0:n.value}return Kc(t)}async _remove(e){if(!this._isAvailable()||!await this._get(e))return;let n=Hc(e);document.cookie=`${n}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,t){if(!this._isAvailable())return;let n=Hc(e);if(window.cookieStore){let c=h=>{let f=h.changed.find(_=>_.name===n);f&&t(f.value),h.deleted.find(_=>_.name===n)&&t(null)},u=()=>window.cookieStore.removeEventListener("change",c);return this.listenerUnsubscribes.set(t,u),window.cookieStore.addEventListener("change",c)}let i=Kc(n),s=setInterval(()=>{let c=Kc(n);c!==i&&(t(c),i=c)},HI),o=()=>clearInterval(s);this.listenerUnsubscribes.set(t,o)}_removeListener(e,t){let n=this.listenerUnsubscribes.get(t);n&&(n(),this.listenerUnsubscribes.delete(t))}};au.type="COOKIE";var lo=class extends co{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}};lo.type="SESSION";var bu=lo;function QI(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}var ho=class r{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;let n=new r(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let t=e,{eventId:n,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});let c=Array.from(o).map(async h=>h(t.origin,s)),u=await QI(c);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};ho.receivers=[];function Su(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}var cu=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){let i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((c,u)=>{let h=Su("",20);i.port1.start();let f=setTimeout(()=>{u(new Error("unsupported_event"))},n);o={messageChannel:i,onMessage(m){let _=m;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(_.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}};function tt(){return window}function JI(r){tt().location.href=r}function Up(){return typeof tt().WorkerGlobalScope!="undefined"&&typeof tt().importScripts=="function"}async function YI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function XI(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function ZI(){return Up()?self:null}var Bp="firebaseLocalStorageDb",ew=1,fo="firebaseLocalStorage",qp="fbase_key",dn=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}};function To(r,e){return r.transaction([fo],e?"readwrite":"readonly").objectStore(fo)}function tw(){let r=indexedDB.deleteDatabase(Bp);return new dn(r).toPromise()}function uu(){let r=indexedDB.open(Bp,ew);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{let n=r.result;try{n.createObjectStore(fo,{keyPath:qp})}catch(i){t(i)}}),r.addEventListener("success",async()=>{let n=r.result;n.objectStoreNames.contains(fo)?e(n):(n.close(),await tw(),e(await uu()))})})}async function Zf(r,e,t){let n=To(r,!0).put({[qp]:e,value:t});return new dn(n).toPromise()}async function nw(r,e){let t=To(r,!1).get(e),n=await new dn(t).toPromise();return n===void 0?null:n.value}function ep(r,e){let t=To(r,!0).delete(e);return new dn(t).toPromise()}var rw=800,iw=3,po=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await uu(),this.db)}async _withRetries(e){let t=0;for(;;)try{let n=await this._openDb();return await e(n)}catch(n){if(t++>iw)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Up()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ho._getInstance(ZI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await YI(),!this.activeServiceWorker)return;this.sender=new cu(this.activeServiceWorker);let n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||XI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await uu();return await Zf(e,ao,"1"),await ep(e,ao),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zf(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(n=>nw(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ep(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(i=>{let s=To(i,!1).getAll();return new dn(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];let t=[],n=new Set;if(e.length!==0)for(let{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(let i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};po.type="LOCAL";var jp=po;function tp(r,e){return Ie(r,"POST","/v2/accounts/mfaSignIn:start",me(r,e))}function sw(r,e){return Ie(r,"POST","/v2/accounts/mfaSignIn:finalize",me(r,e))}function ow(r,e){return Ie(r,"POST","/v2/accounts/mfaSignIn:finalize",me(r,e))}var GA=Pp("rcb"),WA=new an(3e4,6e4);var Ks="recaptcha";async function aw(r,e,t){var n;if(!r._getRecaptchaConfig())try{await AI(r)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){let s=i.session;if("phoneNumber"in i){U(s.type==="enroll",r,"internal-error");let o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Hn(r,o,"mfaSmsEnrollment",async(f,m)=>{if(m.phoneEnrollmentInfo.captchaResponse===yi){U((t==null?void 0:t.type)===Ks,f,"argument-error");let _=await Qc(f,m,t);return Xf(f,_)}return Xf(f,m)},"PHONE_PROVIDER").catch(f=>Promise.reject(f))).phoneSessionInfo.sessionInfo}else{U(s.type==="signin",r,"internal-error");let o=((n=i.multiFactorHint)===null||n===void 0?void 0:n.uid)||i.multiFactorUid;U(o,r,"missing-multi-factor-info");let c={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Hn(r,c,"mfaSmsSignIn",async(m,_)=>{if(_.phoneSignInInfo.captchaResponse===yi){U((t==null?void 0:t.type)===Ks,m,"argument-error");let S=await Qc(m,_,t);return tp(m,S)}return tp(m,_)},"PHONE_PROVIDER").catch(m=>Promise.reject(m))).phoneResponseInfo.sessionInfo}}else{let s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Hn(r,s,"sendVerificationCode",async(h,f)=>{if(f.captchaResponse===yi){U((t==null?void 0:t.type)===Ks,h,"argument-error");let m=await Qc(h,f,t);return Jf(h,m)}return Jf(h,f)},"PHONE_PROVIDER").catch(h=>Promise.reject(h))).sessionInfo}}finally{t==null||t._reset()}}async function Qc(r,e,t){U(t.type===Ks,r,"argument-error");let n=await t.verify();U(typeof n=="string",r,"argument-error");let i=Object.assign({},e);if("phoneEnrollmentInfo"in i){let s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,c=i.phoneEnrollmentInfo.clientType,u=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:n,captchaResponse:o,clientType:c,recaptchaVersion:u}}),i}else if("phoneSignInInfo"in i){let s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,c=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:n,captchaResponse:s,clientType:o,recaptchaVersion:c}}),i}else return Object.assign(i,{recaptchaToken:n}),i}var Si=class r{constructor(e){this.providerId=r.PROVIDER_ID,this.auth=_t(e)}verifyPhoneNumber(e,t){return aw(this.auth,e,ye(t))}static credential(e,t){return wi._fromVerification(e,t)}static credentialFromResult(e){let t=e;return r.credentialFromTaggedObject(t)}static credentialFromError(e){return r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:n}=e;return t&&n?wi._fromTokenResponse(t,n):null}};Si.PROVIDER_ID="phone";Si.PHONE_SIGN_IN_METHOD="phone";function cw(r,e){return e?pt(e):(U(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}var Ri=class extends cn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Qn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Qn(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function uw(r){return Op(r.auth,new Ri(r),r.bypassAuthState)}function lw(r){let{auth:e,user:t}=r;return U(t,e,"internal-error"),qI(t,new Ri(r),r.bypassAuthState)}async function hw(r){let{auth:e,user:t}=r;return U(t,e,"internal-error"),BI(t,new Ri(r),r.bypassAuthState)}var mo=class{constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}let u={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return uw;case"linkViaPopup":case"linkViaRedirect":return hw;case"reauthViaPopup":case"reauthViaRedirect":return lw;default:Ke(this.auth,"internal-error")}}resolve(e){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};var dw=new an(2e3,1e4);var lu=class r extends mo{constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){gt(this.filter.length===1,"Popup operations only handle one event");let e=Su();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,dw.get())};e()}};lu.currentPopupAction=null;var fw="pendingRedirect",Hs=new Map,hu=class extends mo{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Hs.get(this.auth._key());if(!e){try{let n=await pw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Hs.set(this.auth._key(),e)}return this.bypassAuthState||Hs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function pw(r,e){let t=_w(e),n=gw(r);if(!await n._isAvailable())return!1;let i=await n._get(t)==="true";return await n._remove(t),i}function mw(r,e){Hs.set(r._key(),e)}function gw(r){return pt(r._redirectPersistence)}function _w(r){return Ws(fw,r.config.apiKey,r.name)}async function yw(r,e,t=!1){if(Oe(r.app))return Promise.reject(mt(r));let n=_t(r),i=cw(n,e),o=await new hu(n,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}var vw=10*60*1e3,du=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Iw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!zp(e)){let i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(et(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vw&&this.cachedEventUids.clear(),this.cachedEventUids.has(np(e))}saveEventToCache(e){this.cachedEventUids.add(np(e)),this.lastProcessedEventTime=Date.now()}};function np(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function zp({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Iw(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zp(r);default:return!1}}async function ww(r,e={}){return Ie(r,"GET","/v1/projects",e)}var Ew=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Tw=/^https?/;async function Aw(r){if(r.config.emulator)return;let{authorizedDomains:e}=await ww(r);for(let t of e)try{if(bw(t))return}catch{}Ke(r,"unauthorized-domain")}function bw(r){let e=Yc(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){let o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!Tw.test(t))return!1;if(Ew.test(r))return n===r;let i=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}var Sw=new an(3e4,6e4);function rp(){let r=tt().___jsl;if(r!=null&&r.H){for(let e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function Rw(r){return new Promise((e,t)=>{var n,i,s;function o(){rp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rp(),t(et(r,"network-request-failed"))},timeout:Sw.get()})}if(!((i=(n=tt().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=tt().gapi)===null||s===void 0)&&s.load)o();else{let c=Pp("iframefcb");return tt()[c]=()=>{gapi.load?o():t(et(r,"network-request-failed"))},Rp(`${EI()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw Qs=null,e})}var Qs=null;function Pw(r){return Qs=Qs||Rw(r),Qs}var Cw=new an(5e3,15e3),Dw="__/auth/iframe",Nw="emulator/auth/iframe",kw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ow=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vw(r){let e=r.config;U(e.authDomain,r,"auth-domain-config-required");let t=e.emulator?_u(e,Nw):`https://${r.config.authDomain}/${Dw}`,n={apiKey:e.apiKey,appName:r.name,v:Nt},i=Ow.get(r.config.apiHost);i&&(n.eid=i);let s=r._getFrameworks();return s.length&&(n.fw=s.join(",")),`${t}?${$n(n).slice(1)}`}async function xw(r){let e=await Pw(r),t=tt().gapi;return U(t,r,"internal-error"),e.open({where:document.body,url:Vw(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kw,dontclear:!0},n=>new Promise(async(i,s)=>{await n.restyle({setHideOnLeave:!1});let o=et(r,"network-request-failed"),c=tt().setTimeout(()=>{s(o)},Cw.get());function u(){tt().clearTimeout(c),i(n)}n.ping(u).then(u,()=>{s(o)})}))}var Lw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Mw=500,Fw=600,Uw="_blank",Bw="http://localhost",go=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function qw(r,e,t,n=Mw,i=Fw){let s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString(),c="",u=Object.assign(Object.assign({},Lw),{width:n.toString(),height:i.toString(),top:s,left:o}),h=ce().toLowerCase();t&&(c=Ip(h)?Uw:t),yp(h)&&(e=e||Bw,u.scrollbars="yes");let f=Object.entries(u).reduce((_,[S,D])=>`${_}${S}=${D},`,"");if(gI(h)&&c!=="_self")return jw(e||"",c),new go(null);let m=window.open(e||"",c,f);U(m,r,"popup-blocked");try{m.focus()}catch{}return new go(m)}function jw(r,e){let t=document.createElement("a");t.href=r,t.target=e;let n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}var zw="__/auth/handler",$w="emulator/auth/handler",Gw=encodeURIComponent("fac");async function ip(r,e,t,n,i,s){U(r.config.authDomain,r,"auth-domain-config-required"),U(r.config.apiKey,r,"invalid-api-key");let o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:Nt,eventId:i};if(e instanceof oo){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",Pf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(let[f,m]of Object.entries(s||{}))o[f]=m}if(e instanceof hn){let f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}r.tenantId&&(o.tid=r.tenantId);let c=o;for(let f of Object.keys(c))c[f]===void 0&&delete c[f];let u=await r._getAppCheckToken(),h=u?`#${Gw}=${encodeURIComponent(u)}`:"";return`${Ww(r)}?${$n(c).slice(1)}${h}`}function Ww({config:r}){return r.emulator?_u(r,$w):`https://${r.authDomain}/${zw}`}var Jc="webStorageSupport",fu=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bu,this._completeRedirectFn=yw,this._overrideRedirectResult=mw}async _openPopup(e,t,n,i){var s;gt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");let o=await ip(e,t,n,Yc(),i);return qw(e,o,Su())}async _openRedirect(e,t,n,i){await this._originValidation(e);let s=await ip(e,t,n,Yc(),i);return JI(s),new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(gt(s,"If manager is not set, promise should be"),s)}let n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){let t=await xw(e),n=new du(e);return t.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Jc,{type:Jc},i=>{var s;let o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Jc];o!==void 0&&t(!!o),Ke(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Aw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return bp()||vp()||vu()}},$p=fu,_o=class{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return Ze("unexpected MultiFactorSessionType")}}},pu=class r extends _o{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new r(e)}_finalizeEnroll(e,t,n){return zI(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return sw(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},yo=class{constructor(){}static assertion(e){return pu._fromCredential(e)}};yo.FACTOR_ID="phone";var vo=class{static assertionForEnrollment(e,t){return Io._fromSecret(e,t)}static assertionForSignIn(e,t){return Io._fromEnrollmentId(e,t)}static async generateSecret(e){var t;let n=e;U(typeof((t=n.user)===null||t===void 0?void 0:t.auth)!="undefined","internal-error");let i=await $I(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return wo._fromStartTotpMfaEnrollmentResponse(i,n.user.auth)}};vo.FACTOR_ID="totp";var Io=class r extends _o{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new r(t,void 0,e)}static _fromEnrollmentId(e,t){return new r(t,e)}async _finalizeEnroll(e,t,n){return U(typeof this.secret!="undefined",e,"argument-error"),GI(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){U(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");let n={verificationCode:this.otp};return ow(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}},wo=class r{constructor(e,t,n,i,s,o,c){this.sessionInfo=o,this.auth=c,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(e,t){return new r(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let i=!1;return($s(e)||$s(t))&&(i=!0),i&&($s(e)&&(e=((n=this.auth.currentUser)===null||n===void 0?void 0:n.email)||"unknownuser"),$s(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function $s(r){return typeof r=="undefined"||(r==null?void 0:r.length)===0}var sp="@firebase/auth",op="1.10.8";var mu=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function Kw(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Hw(r){Dt(new qe("auth",(e,{options:t})=>{let n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=n.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});let u={apiKey:o,authDomain:c,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sp(r)},h=new ru(n,i,s,u);return bI(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Dt(new qe("auth-internal",e=>{let t=_t(e.getProvider("auth").getImmediate());return(n=>new mu(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),We(sp,op,Kw(r)),We(sp,op,"esm2017")}var Qw=5*60,Jw=Pc("authIdTokenMaxAge")||Qw,ap=null,Yw=r=>async e=>{let t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Jw)return;let i=t==null?void 0:t.token;ap!==i&&(ap=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ru(r=js()){let e=Kn(r,"auth");if(e.isInitialized())return e.getImmediate();let t=Cp(r,{popupRedirectResolver:$p,persistence:[jp,Fp,bu]}),n=Pc("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){let s=new URL(n,location.origin);if(location.origin===s.origin){let o=Yw(s.toString());Mp(t,o,()=>o(t.currentUser)),Lp(t,c=>o(c))}}let i=Sc("auth");return i&&Dp(t,`http://${i}`),t}function Xw(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}II({loadJS(r){return new Promise((e,t)=>{let n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=i=>{let s=et("internal-error");s.customData=i,t(s)},n.type="text/javascript",n.charset="UTF-8",Xw().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Hw("Browser");var Gp=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Wp={};var yt,Pu;(function(){var r;function e(I,g){function v(){}v.prototype=g.prototype,I.D=g.prototype,I.prototype=new v,I.prototype.constructor=I,I.C=function(w,E,A){for(var y=Array(arguments.length-2),ct=2;ct<arguments.length;ct++)y[ct-2]=arguments[ct];return g.prototype[E].apply(w,y)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,g,v){v||(v=0);var w=Array(16);if(typeof g=="string")for(var E=0;16>E;++E)w[E]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(E=0;16>E;++E)w[E]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=I.g[0],v=I.g[1],E=I.g[2];var A=I.g[3],y=g+(A^v&(E^A))+w[0]+3614090360&4294967295;g=v+(y<<7&4294967295|y>>>25),y=A+(E^g&(v^E))+w[1]+3905402710&4294967295,A=g+(y<<12&4294967295|y>>>20),y=E+(v^A&(g^v))+w[2]+606105819&4294967295,E=A+(y<<17&4294967295|y>>>15),y=v+(g^E&(A^g))+w[3]+3250441966&4294967295,v=E+(y<<22&4294967295|y>>>10),y=g+(A^v&(E^A))+w[4]+4118548399&4294967295,g=v+(y<<7&4294967295|y>>>25),y=A+(E^g&(v^E))+w[5]+1200080426&4294967295,A=g+(y<<12&4294967295|y>>>20),y=E+(v^A&(g^v))+w[6]+2821735955&4294967295,E=A+(y<<17&4294967295|y>>>15),y=v+(g^E&(A^g))+w[7]+4249261313&4294967295,v=E+(y<<22&4294967295|y>>>10),y=g+(A^v&(E^A))+w[8]+1770035416&4294967295,g=v+(y<<7&4294967295|y>>>25),y=A+(E^g&(v^E))+w[9]+2336552879&4294967295,A=g+(y<<12&4294967295|y>>>20),y=E+(v^A&(g^v))+w[10]+4294925233&4294967295,E=A+(y<<17&4294967295|y>>>15),y=v+(g^E&(A^g))+w[11]+2304563134&4294967295,v=E+(y<<22&4294967295|y>>>10),y=g+(A^v&(E^A))+w[12]+1804603682&4294967295,g=v+(y<<7&4294967295|y>>>25),y=A+(E^g&(v^E))+w[13]+4254626195&4294967295,A=g+(y<<12&4294967295|y>>>20),y=E+(v^A&(g^v))+w[14]+2792965006&4294967295,E=A+(y<<17&4294967295|y>>>15),y=v+(g^E&(A^g))+w[15]+1236535329&4294967295,v=E+(y<<22&4294967295|y>>>10),y=g+(E^A&(v^E))+w[1]+4129170786&4294967295,g=v+(y<<5&4294967295|y>>>27),y=A+(v^E&(g^v))+w[6]+3225465664&4294967295,A=g+(y<<9&4294967295|y>>>23),y=E+(g^v&(A^g))+w[11]+643717713&4294967295,E=A+(y<<14&4294967295|y>>>18),y=v+(A^g&(E^A))+w[0]+3921069994&4294967295,v=E+(y<<20&4294967295|y>>>12),y=g+(E^A&(v^E))+w[5]+3593408605&4294967295,g=v+(y<<5&4294967295|y>>>27),y=A+(v^E&(g^v))+w[10]+38016083&4294967295,A=g+(y<<9&4294967295|y>>>23),y=E+(g^v&(A^g))+w[15]+3634488961&4294967295,E=A+(y<<14&4294967295|y>>>18),y=v+(A^g&(E^A))+w[4]+3889429448&4294967295,v=E+(y<<20&4294967295|y>>>12),y=g+(E^A&(v^E))+w[9]+568446438&4294967295,g=v+(y<<5&4294967295|y>>>27),y=A+(v^E&(g^v))+w[14]+3275163606&4294967295,A=g+(y<<9&4294967295|y>>>23),y=E+(g^v&(A^g))+w[3]+4107603335&4294967295,E=A+(y<<14&4294967295|y>>>18),y=v+(A^g&(E^A))+w[8]+1163531501&4294967295,v=E+(y<<20&4294967295|y>>>12),y=g+(E^A&(v^E))+w[13]+2850285829&4294967295,g=v+(y<<5&4294967295|y>>>27),y=A+(v^E&(g^v))+w[2]+4243563512&4294967295,A=g+(y<<9&4294967295|y>>>23),y=E+(g^v&(A^g))+w[7]+1735328473&4294967295,E=A+(y<<14&4294967295|y>>>18),y=v+(A^g&(E^A))+w[12]+2368359562&4294967295,v=E+(y<<20&4294967295|y>>>12),y=g+(v^E^A)+w[5]+4294588738&4294967295,g=v+(y<<4&4294967295|y>>>28),y=A+(g^v^E)+w[8]+2272392833&4294967295,A=g+(y<<11&4294967295|y>>>21),y=E+(A^g^v)+w[11]+1839030562&4294967295,E=A+(y<<16&4294967295|y>>>16),y=v+(E^A^g)+w[14]+4259657740&4294967295,v=E+(y<<23&4294967295|y>>>9),y=g+(v^E^A)+w[1]+2763975236&4294967295,g=v+(y<<4&4294967295|y>>>28),y=A+(g^v^E)+w[4]+1272893353&4294967295,A=g+(y<<11&4294967295|y>>>21),y=E+(A^g^v)+w[7]+4139469664&4294967295,E=A+(y<<16&4294967295|y>>>16),y=v+(E^A^g)+w[10]+3200236656&4294967295,v=E+(y<<23&4294967295|y>>>9),y=g+(v^E^A)+w[13]+681279174&4294967295,g=v+(y<<4&4294967295|y>>>28),y=A+(g^v^E)+w[0]+3936430074&4294967295,A=g+(y<<11&4294967295|y>>>21),y=E+(A^g^v)+w[3]+3572445317&4294967295,E=A+(y<<16&4294967295|y>>>16),y=v+(E^A^g)+w[6]+76029189&4294967295,v=E+(y<<23&4294967295|y>>>9),y=g+(v^E^A)+w[9]+3654602809&4294967295,g=v+(y<<4&4294967295|y>>>28),y=A+(g^v^E)+w[12]+3873151461&4294967295,A=g+(y<<11&4294967295|y>>>21),y=E+(A^g^v)+w[15]+530742520&4294967295,E=A+(y<<16&4294967295|y>>>16),y=v+(E^A^g)+w[2]+3299628645&4294967295,v=E+(y<<23&4294967295|y>>>9),y=g+(E^(v|~A))+w[0]+4096336452&4294967295,g=v+(y<<6&4294967295|y>>>26),y=A+(v^(g|~E))+w[7]+1126891415&4294967295,A=g+(y<<10&4294967295|y>>>22),y=E+(g^(A|~v))+w[14]+2878612391&4294967295,E=A+(y<<15&4294967295|y>>>17),y=v+(A^(E|~g))+w[5]+4237533241&4294967295,v=E+(y<<21&4294967295|y>>>11),y=g+(E^(v|~A))+w[12]+1700485571&4294967295,g=v+(y<<6&4294967295|y>>>26),y=A+(v^(g|~E))+w[3]+2399980690&4294967295,A=g+(y<<10&4294967295|y>>>22),y=E+(g^(A|~v))+w[10]+4293915773&4294967295,E=A+(y<<15&4294967295|y>>>17),y=v+(A^(E|~g))+w[1]+2240044497&4294967295,v=E+(y<<21&4294967295|y>>>11),y=g+(E^(v|~A))+w[8]+1873313359&4294967295,g=v+(y<<6&4294967295|y>>>26),y=A+(v^(g|~E))+w[15]+4264355552&4294967295,A=g+(y<<10&4294967295|y>>>22),y=E+(g^(A|~v))+w[6]+2734768916&4294967295,E=A+(y<<15&4294967295|y>>>17),y=v+(A^(E|~g))+w[13]+1309151649&4294967295,v=E+(y<<21&4294967295|y>>>11),y=g+(E^(v|~A))+w[4]+4149444226&4294967295,g=v+(y<<6&4294967295|y>>>26),y=A+(v^(g|~E))+w[11]+3174756917&4294967295,A=g+(y<<10&4294967295|y>>>22),y=E+(g^(A|~v))+w[2]+718787259&4294967295,E=A+(y<<15&4294967295|y>>>17),y=v+(A^(E|~g))+w[9]+3951481745&4294967295,I.g[0]=I.g[0]+g&4294967295,I.g[1]=I.g[1]+(E+(y<<21&4294967295|y>>>11))&4294967295,I.g[2]=I.g[2]+E&4294967295,I.g[3]=I.g[3]+A&4294967295}n.prototype.u=function(I,g){g===void 0&&(g=I.length);for(var v=g-this.blockSize,w=this.B,E=this.h,A=0;A<g;){if(E==0)for(;A<=v;)i(this,I,A),A+=this.blockSize;if(typeof I=="string"){for(;A<g;)if(w[E++]=I.charCodeAt(A++),E==this.blockSize){i(this,w),E=0;break}}else for(;A<g;)if(w[E++]=I[A++],E==this.blockSize){i(this,w),E=0;break}}this.h=E,this.o+=g},n.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var g=1;g<I.length-8;++g)I[g]=0;var v=8*this.o;for(g=I.length-8;g<I.length;++g)I[g]=v&255,v/=256;for(this.u(I),I=Array(16),g=v=0;4>g;++g)for(var w=0;32>w;w+=8)I[v++]=this.g[g]>>>w&255;return I};function s(I,g){var v=c;return Object.prototype.hasOwnProperty.call(v,I)?v[I]:v[I]=g(I)}function o(I,g){this.h=g;for(var v=[],w=!0,E=I.length-1;0<=E;E--){var A=I[E]|0;w&&A==g||(v[E]=A,w=!1)}this.g=v}var c={};function u(I){return-128<=I&&128>I?s(I,function(g){return new o([g|0],0>g?-1:0)}):new o([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return m;if(0>I)return N(h(-I));for(var g=[],v=1,w=0;I>=v;w++)g[w]=I/v|0,v*=4294967296;return new o(g,0)}function f(I,g){if(I.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(I.charAt(0)=="-")return N(f(I.substring(1),g));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(g,8)),w=m,E=0;E<I.length;E+=8){var A=Math.min(8,I.length-E),y=parseInt(I.substring(E,E+A),g);8>A?(A=h(Math.pow(g,A)),w=w.j(A).add(h(y))):(w=w.j(v),w=w.add(h(y)))}return w}var m=u(0),_=u(1),S=u(16777216);r=o.prototype,r.m=function(){if(k(this))return-N(this).m();for(var I=0,g=1,v=0;v<this.g.length;v++){var w=this.i(v);I+=(0<=w?w:4294967296+w)*g,g*=4294967296}return I},r.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(D(this))return"0";if(k(this))return"-"+N(this).toString(I);for(var g=h(Math.pow(I,6)),v=this,w="";;){var E=W(v,g).g;v=$(v,E.j(g));var A=((0<v.g.length?v.g[0]:v.h)>>>0).toString(I);if(v=E,D(v))return A+w;for(;6>A.length;)A="0"+A;w=A+w}},r.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function D(I){if(I.h!=0)return!1;for(var g=0;g<I.g.length;g++)if(I.g[g]!=0)return!1;return!0}function k(I){return I.h==-1}r.l=function(I){return I=$(this,I),k(I)?-1:D(I)?0:1};function N(I){for(var g=I.g.length,v=[],w=0;w<g;w++)v[w]=~I.g[w];return new o(v,~I.h).add(_)}r.abs=function(){return k(this)?N(this):this},r.add=function(I){for(var g=Math.max(this.g.length,I.g.length),v=[],w=0,E=0;E<=g;E++){var A=w+(this.i(E)&65535)+(I.i(E)&65535),y=(A>>>16)+(this.i(E)>>>16)+(I.i(E)>>>16);w=y>>>16,A&=65535,y&=65535,v[E]=y<<16|A}return new o(v,v[v.length-1]&-2147483648?-1:0)};function $(I,g){return I.add(N(g))}r.j=function(I){if(D(this)||D(I))return m;if(k(this))return k(I)?N(this).j(N(I)):N(N(this).j(I));if(k(I))return N(this.j(N(I)));if(0>this.l(S)&&0>I.l(S))return h(this.m()*I.m());for(var g=this.g.length+I.g.length,v=[],w=0;w<2*g;w++)v[w]=0;for(w=0;w<this.g.length;w++)for(var E=0;E<I.g.length;E++){var A=this.i(w)>>>16,y=this.i(w)&65535,ct=I.i(E)>>>16,Gr=I.i(E)&65535;v[2*w+2*E]+=y*Gr,B(v,2*w+2*E),v[2*w+2*E+1]+=A*Gr,B(v,2*w+2*E+1),v[2*w+2*E+1]+=y*ct,B(v,2*w+2*E+1),v[2*w+2*E+2]+=A*ct,B(v,2*w+2*E+2)}for(w=0;w<g;w++)v[w]=v[2*w+1]<<16|v[2*w];for(w=g;w<2*g;w++)v[w]=0;return new o(v,0)};function B(I,g){for(;(I[g]&65535)!=I[g];)I[g+1]+=I[g]>>>16,I[g]&=65535,g++}function M(I,g){this.g=I,this.h=g}function W(I,g){if(D(g))throw Error("division by zero");if(D(I))return new M(m,m);if(k(I))return g=W(N(I),g),new M(N(g.g),N(g.h));if(k(g))return g=W(I,N(g)),new M(N(g.g),g.h);if(30<I.g.length){if(k(I)||k(g))throw Error("slowDivide_ only works with positive integers.");for(var v=_,w=g;0>=w.l(I);)v=Y(v),w=Y(w);var E=G(v,1),A=G(w,1);for(w=G(w,2),v=G(v,2);!D(w);){var y=A.add(w);0>=y.l(I)&&(E=E.add(v),A=y),w=G(w,1),v=G(v,1)}return g=$(I,E.j(g)),new M(E,g)}for(E=m;0<=I.l(g);){for(v=Math.max(1,Math.floor(I.m()/g.m())),w=Math.ceil(Math.log(v)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),A=h(v),y=A.j(g);k(y)||0<y.l(I);)v-=w,A=h(v),y=A.j(g);D(A)&&(A=_),E=E.add(A),I=$(I,y)}return new M(E,I)}r.A=function(I){return W(this,I).h},r.and=function(I){for(var g=Math.max(this.g.length,I.g.length),v=[],w=0;w<g;w++)v[w]=this.i(w)&I.i(w);return new o(v,this.h&I.h)},r.or=function(I){for(var g=Math.max(this.g.length,I.g.length),v=[],w=0;w<g;w++)v[w]=this.i(w)|I.i(w);return new o(v,this.h|I.h)},r.xor=function(I){for(var g=Math.max(this.g.length,I.g.length),v=[],w=0;w<g;w++)v[w]=this.i(w)^I.i(w);return new o(v,this.h^I.h)};function Y(I){for(var g=I.g.length+1,v=[],w=0;w<g;w++)v[w]=I.i(w)<<1|I.i(w-1)>>>31;return new o(v,I.h)}function G(I,g){var v=g>>5;g%=32;for(var w=I.g.length-v,E=[],A=0;A<w;A++)E[A]=0<g?I.i(A+v)>>>g|I.i(A+v+1)<<32-g:I.i(A+v);return new o(E,I.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Pu=Wp.Md5=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,yt=Wp.Integer=o}).apply(typeof Gp!="undefined"?Gp:typeof self!="undefined"?self:typeof window!="undefined"?window:{});var Ao=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},vt={};var Cu,Zw,Xn,Du,Pi,bo,Nu,ku,Ou;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,l,d){return a==Array.prototype||a==Object.prototype||(a[l]=d.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ao=="object"&&Ao];for(var l=0;l<a.length;++l){var d=a[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function i(a,l){if(l)e:{var d=n;a=a.split(".");for(var p=0;p<a.length-1;p++){var T=a[p];if(!(T in d))break e;d=d[T]}a=a[a.length-1],p=d[a],l=l(p),l!=p&&l!=null&&e(d,a,{configurable:!0,writable:!0,value:l})}}function s(a,l){a instanceof String&&(a+="");var d=0,p=!1,T={next:function(){if(!p&&d<a.length){var R=d++;return{value:l(R,a[R]),done:!1}}return p=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}i("Array.prototype.values",function(a){return a||function(){return s(this,function(l,d){return d})}});var o=o||{},c=this||self;function u(a){var l=typeof a;return l=l!="object"?l:a?Array.isArray(a)?"array":l:"null",l=="array"||l=="object"&&typeof a.length=="number"}function h(a){var l=typeof a;return l=="object"&&a!=null||l=="function"}function f(a,l,d){return a.call.apply(a.bind,arguments)}function m(a,l,d){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,p),a.apply(l,T)}}return function(){return a.apply(l,arguments)}}function _(a,l,d){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,_.apply(null,arguments)}function S(a,l){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function D(a,l){function d(){}d.prototype=l.prototype,a.aa=l.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(p,T,R){for(var O=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)O[ne-2]=arguments[ne];return l.prototype[T].apply(p,O)}}function k(a){let l=a.length;if(0<l){let d=Array(l);for(let p=0;p<l;p++)d[p]=a[p];return d}return[]}function N(a,l){for(let d=1;d<arguments.length;d++){let p=arguments[d];if(u(p)){let T=a.length||0,R=p.length||0;a.length=T+R;for(let O=0;O<R;O++)a[T+O]=p[O]}else a.push(p)}}class ${constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function B(a){return/^[\s\xa0]*$/.test(a)}function M(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function W(a){return W[" "](a),a}W[" "]=function(){};var Y=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function G(a,l,d){for(let p in a)l.call(d,a[p],p,a)}function I(a,l){for(let d in a)l.call(void 0,a[d],d,a)}function g(a){let l={};for(let d in a)l[d]=a[d];return l}let v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(a,l){let d,p;for(let T=1;T<arguments.length;T++){p=arguments[T];for(d in p)a[d]=p[d];for(let R=0;R<v.length;R++)d=v[R],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function E(a){var l=1;a=a.split(":");let d=[];for(;0<l&&a.length;)d.push(a.shift()),l--;return a.length&&d.push(a.join(":")),d}function A(a){c.setTimeout(()=>{throw a},0)}function y(){var a=Ya;let l=null;return a.g&&(l=a.g,a.g=a.g.next,a.g||(a.h=null),l.next=null),l}class ct{constructor(){this.h=this.g=null}add(l,d){let p=Gr.get();p.set(l,d),this.h?this.h.next=p:this.g=p,this.h=p}}var Gr=new $(()=>new uy,a=>a.reset());class uy{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Wr,Kr=!1,Ya=new ct,dd=()=>{let a=c.Promise.resolve(void 0);Wr=()=>{a.then(ly)}};var ly=()=>{for(var a;a=y();){try{a.h.call(a.g)}catch(d){A(d)}var l=Gr;l.j(a),100>l.h&&(l.h++,a.next=l.g,l.g=a)}Kr=!1};function At(){this.s=this.s,this.C=this.C}At.prototype.s=!1,At.prototype.ma=function(){this.s||(this.s=!0,this.N())},At.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ee(a,l){this.type=a,this.g=this.target=l,this.defaultPrevented=!1}Ee.prototype.h=function(){this.defaultPrevented=!0};var hy=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,l=Object.defineProperty({},"passive",{get:function(){a=!0}});try{let d=()=>{};c.addEventListener("test",d,l),c.removeEventListener("test",d,l)}catch{}return a}();function Hr(a,l){if(Ee.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=l,l=a.relatedTarget){if(Y){e:{try{W(l.nodeName);var T=!0;break e}catch{}T=!1}T||(l=null)}}else d=="mouseover"?l=a.fromElement:d=="mouseout"&&(l=a.toElement);this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:dy[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Hr.aa.h.call(this)}}D(Hr,Ee);var dy={2:"touch",3:"pen",4:"mouse"};Hr.prototype.h=function(){Hr.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Qr="closure_listenable_"+(1e6*Math.random()|0),fy=0;function py(a,l,d,p,T){this.listener=a,this.proxy=null,this.src=l,this.type=d,this.capture=!!p,this.ha=T,this.key=++fy,this.da=this.fa=!1}function _s(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ys(a){this.src=a,this.g={},this.h=0}ys.prototype.add=function(a,l,d,p,T){var R=a.toString();a=this.g[R],a||(a=this.g[R]=[],this.h++);var O=Za(a,l,p,T);return-1<O?(l=a[O],d||(l.fa=!1)):(l=new py(l,this.src,R,!!p,T),l.fa=d,a.push(l)),l};function Xa(a,l){var d=l.type;if(d in a.g){var p=a.g[d],T=Array.prototype.indexOf.call(p,l,void 0),R;(R=0<=T)&&Array.prototype.splice.call(p,T,1),R&&(_s(l),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Za(a,l,d,p){for(var T=0;T<a.length;++T){var R=a[T];if(!R.da&&R.listener==l&&R.capture==!!d&&R.ha==p)return T}return-1}var ec="closure_lm_"+(1e6*Math.random()|0),tc={};function fd(a,l,d,p,T){if(p&&p.once)return md(a,l,d,p,T);if(Array.isArray(l)){for(var R=0;R<l.length;R++)fd(a,l[R],d,p,T);return null}return d=sc(d),a&&a[Qr]?a.K(l,d,h(p)?!!p.capture:!!p,T):pd(a,l,d,!1,p,T)}function pd(a,l,d,p,T,R){if(!l)throw Error("Invalid event type");var O=h(T)?!!T.capture:!!T,ne=rc(a);if(ne||(a[ec]=ne=new ys(a)),d=ne.add(l,d,p,O,R),d.proxy)return d;if(p=my(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)hy||(T=O),T===void 0&&(T=!1),a.addEventListener(l.toString(),p,T);else if(a.attachEvent)a.attachEvent(_d(l.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function my(){function a(d){return l.call(a.src,a.listener,d)}let l=gy;return a}function md(a,l,d,p,T){if(Array.isArray(l)){for(var R=0;R<l.length;R++)md(a,l[R],d,p,T);return null}return d=sc(d),a&&a[Qr]?a.L(l,d,h(p)?!!p.capture:!!p,T):pd(a,l,d,!0,p,T)}function gd(a,l,d,p,T){if(Array.isArray(l))for(var R=0;R<l.length;R++)gd(a,l[R],d,p,T);else p=h(p)?!!p.capture:!!p,d=sc(d),a&&a[Qr]?(a=a.i,l=String(l).toString(),l in a.g&&(R=a.g[l],d=Za(R,d,p,T),-1<d&&(_s(R[d]),Array.prototype.splice.call(R,d,1),R.length==0&&(delete a.g[l],a.h--)))):a&&(a=rc(a))&&(l=a.g[l.toString()],a=-1,l&&(a=Za(l,d,p,T)),(d=-1<a?l[a]:null)&&nc(d))}function nc(a){if(typeof a!="number"&&a&&!a.da){var l=a.src;if(l&&l[Qr])Xa(l.i,a);else{var d=a.type,p=a.proxy;l.removeEventListener?l.removeEventListener(d,p,a.capture):l.detachEvent?l.detachEvent(_d(d),p):l.addListener&&l.removeListener&&l.removeListener(p),(d=rc(l))?(Xa(d,a),d.h==0&&(d.src=null,l[ec]=null)):_s(a)}}}function _d(a){return a in tc?tc[a]:tc[a]="on"+a}function gy(a,l){if(a.da)a=!0;else{l=new Hr(l,this);var d=a.listener,p=a.ha||a.src;a.fa&&nc(a),a=d.call(p,l)}return a}function rc(a){return a=a[ec],a instanceof ys?a:null}var ic="__closure_events_fn_"+(1e9*Math.random()>>>0);function sc(a){return typeof a=="function"?a:(a[ic]||(a[ic]=function(l){return a.handleEvent(l)}),a[ic])}function Te(){At.call(this),this.i=new ys(this),this.M=this,this.F=null}D(Te,At),Te.prototype[Qr]=!0,Te.prototype.removeEventListener=function(a,l,d,p){gd(this,a,l,d,p)};function Ce(a,l){var d,p=a.F;if(p)for(d=[];p;p=p.F)d.push(p);if(a=a.M,p=l.type||l,typeof l=="string")l=new Ee(l,a);else if(l instanceof Ee)l.target=l.target||a;else{var T=l;l=new Ee(p,a),w(l,T)}if(T=!0,d)for(var R=d.length-1;0<=R;R--){var O=l.g=d[R];T=vs(O,p,!0,l)&&T}if(O=l.g=a,T=vs(O,p,!0,l)&&T,T=vs(O,p,!1,l)&&T,d)for(R=0;R<d.length;R++)O=l.g=d[R],T=vs(O,p,!1,l)&&T}Te.prototype.N=function(){if(Te.aa.N.call(this),this.i){var a=this.i,l;for(l in a.g){for(var d=a.g[l],p=0;p<d.length;p++)_s(d[p]);delete a.g[l],a.h--}}this.F=null},Te.prototype.K=function(a,l,d,p){return this.i.add(String(a),l,!1,d,p)},Te.prototype.L=function(a,l,d,p){return this.i.add(String(a),l,!0,d,p)};function vs(a,l,d,p){if(l=a.i.g[String(l)],!l)return!0;l=l.concat();for(var T=!0,R=0;R<l.length;++R){var O=l[R];if(O&&!O.da&&O.capture==d){var ne=O.listener,ve=O.ha||O.src;O.fa&&Xa(a.i,O),T=ne.call(ve,p)!==!1&&T}}return T&&!p.defaultPrevented}function yd(a,l,d){if(typeof a=="function")d&&(a=_(a,d));else if(a&&typeof a.handleEvent=="function")a=_(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(a,l||0)}function vd(a){a.g=yd(()=>{a.g=null,a.i&&(a.i=!1,vd(a))},a.l);let l=a.h;a.h=null,a.m.apply(null,l)}class _y extends At{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:vd(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Jr(a){At.call(this),this.h=a,this.g={}}D(Jr,At);var Id=[];function wd(a){G(a.g,function(l,d){this.g.hasOwnProperty(d)&&nc(l)},a),a.g={}}Jr.prototype.N=function(){Jr.aa.N.call(this),wd(this)},Jr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var oc=c.JSON.stringify,yy=c.JSON.parse,vy=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function ac(){}ac.prototype.h=null;function Ed(a){return a.h||(a.h=a.i())}function Td(){}var Yr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function cc(){Ee.call(this,"d")}D(cc,Ee);function uc(){Ee.call(this,"c")}D(uc,Ee);var tn={},Ad=null;function Is(){return Ad=Ad||new Te}tn.La="serverreachability";function bd(a){Ee.call(this,tn.La,a)}D(bd,Ee);function Xr(a){let l=Is();Ce(l,new bd(l))}tn.STAT_EVENT="statevent";function Sd(a,l){Ee.call(this,tn.STAT_EVENT,a),this.stat=l}D(Sd,Ee);function De(a){let l=Is();Ce(l,new Sd(l,a))}tn.Ma="timingevent";function Rd(a,l){Ee.call(this,tn.Ma,a),this.size=l}D(Rd,Ee);function Zr(a,l){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},l)}function ei(){this.g=!0}ei.prototype.xa=function(){this.g=!1};function Iy(a,l,d,p,T,R){a.info(function(){if(a.g)if(R)for(var O="",ne=R.split("&"),ve=0;ve<ne.length;ve++){var X=ne[ve].split("=");if(1<X.length){var Ae=X[0];X=X[1];var be=Ae.split("_");O=2<=be.length&&be[1]=="type"?O+(Ae+"="+X+"&"):O+(Ae+"=redacted&")}}else O=null;else O=R;return"XMLHTTP REQ ("+p+") [attempt "+T+"]: "+l+`
`+d+`
`+O})}function wy(a,l,d,p,T,R,O){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+T+"]: "+l+`
`+d+`
`+R+" "+O})}function Bn(a,l,d,p){a.info(function(){return"XMLHTTP TEXT ("+l+"): "+Ty(a,d)+(p?" "+p:"")})}function Ey(a,l){a.info(function(){return"TIMEOUT: "+l})}ei.prototype.info=function(){};function Ty(a,l){if(!a.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var p=d[a];if(!(2>p.length)){var T=p[1];if(Array.isArray(T)&&!(1>T.length)){var R=T[0];if(R!="noop"&&R!="stop"&&R!="close")for(var O=1;O<T.length;O++)T[O]=""}}}}return oc(d)}catch{return l}}var ws={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Pd={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},lc;function Es(){}D(Es,ac),Es.prototype.g=function(){return new XMLHttpRequest},Es.prototype.i=function(){return{}},lc=new Es;function bt(a,l,d,p){this.j=a,this.i=l,this.l=d,this.R=p||1,this.U=new Jr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Cd}function Cd(){this.i=null,this.g="",this.h=!1}var Dd={},hc={};function dc(a,l,d){a.L=1,a.v=Ss(ut(l)),a.m=d,a.P=!0,Nd(a,null)}function Nd(a,l){a.F=Date.now(),Ts(a),a.A=ut(a.v);var d=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),Gd(d.i,"t",p),a.C=0,d=a.j.J,a.h=new Cd,a.g=lf(a.j,d?l:null,!a.m),0<a.O&&(a.M=new _y(_(a.Y,a,a.g),a.O)),l=a.U,d=a.g,p=a.ca;var T="readystatechange";Array.isArray(T)||(T&&(Id[0]=T.toString()),T=Id);for(var R=0;R<T.length;R++){var O=fd(d,T[R],p||l.handleEvent,!1,l.h||l);if(!O)break;l.g[O.key]=O}l=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,l)):(a.u="GET",a.g.ea(a.A,a.u,null,l)),Xr(),Iy(a.i,a.u,a.A,a.l,a.R,a.m)}bt.prototype.ca=function(a){a=a.target;let l=this.M;l&&lt(a)==3?l.j():this.Y(a)},bt.prototype.Y=function(a){try{if(a==this.g)e:{let be=lt(this.g);var l=this.g.Ba();let zn=this.g.Z();if(!(3>be)&&(be!=3||this.g&&(this.h.h||this.g.oa()||Xd(this.g)))){this.J||be!=4||l==7||(l==8||0>=zn?Xr(3):Xr(2)),fc(this);var d=this.g.Z();this.X=d;t:if(kd(this)){var p=Xd(this.g);a="";var T=p.length,R=lt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){nn(this),ti(this);var O="";break t}this.h.i=new c.TextDecoder}for(l=0;l<T;l++)this.h.h=!0,a+=this.h.i.decode(p[l],{stream:!(R&&l==T-1)});p.length=0,this.h.g+=a,this.C=0,O=this.h.g}else O=this.g.oa();if(this.o=d==200,wy(this.i,this.u,this.A,this.l,this.R,be,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ne,ve=this.g;if((ne=ve.g?ve.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(ne)){var X=ne;break t}}X=null}if(d=X)Bn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,pc(this,d);else{this.o=!1,this.s=3,De(12),nn(this),ti(this);break e}}if(this.P){d=!0;let $e;for(;!this.J&&this.C<O.length;)if($e=Ay(this,O),$e==hc){be==4&&(this.s=4,De(14),d=!1),Bn(this.i,this.l,null,"[Incomplete Response]");break}else if($e==Dd){this.s=4,De(15),Bn(this.i,this.l,O,"[Invalid Chunk]"),d=!1;break}else Bn(this.i,this.l,$e,null),pc(this,$e);if(kd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),be!=4||O.length!=0||this.h.h||(this.s=1,De(16),d=!1),this.o=this.o&&d,!d)Bn(this.i,this.l,O,"[Invalid Chunked Response]"),nn(this),ti(this);else if(0<O.length&&!this.W){this.W=!0;var Ae=this.j;Ae.g==this&&Ae.ba&&!Ae.M&&(Ae.j.info("Great, no buffering proxy detected. Bytes received: "+O.length),Ic(Ae),Ae.M=!0,De(11))}}else Bn(this.i,this.l,O,null),pc(this,O);be==4&&nn(this),this.o&&!this.J&&(be==4?of(this.j,this):(this.o=!1,Ts(this)))}else qy(this.g),d==400&&0<O.indexOf("Unknown SID")?(this.s=3,De(12)):(this.s=0,De(13)),nn(this),ti(this)}}}catch{}finally{}};function kd(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Ay(a,l){var d=a.C,p=l.indexOf(`
`,d);return p==-1?hc:(d=Number(l.substring(d,p)),isNaN(d)?Dd:(p+=1,p+d>l.length?hc:(l=l.slice(p,p+d),a.C=p+d,l)))}bt.prototype.cancel=function(){this.J=!0,nn(this)};function Ts(a){a.S=Date.now()+a.I,Od(a,a.I)}function Od(a,l){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Zr(_(a.ba,a),l)}function fc(a){a.B&&(c.clearTimeout(a.B),a.B=null)}bt.prototype.ba=function(){this.B=null;let a=Date.now();0<=a-this.S?(Ey(this.i,this.A),this.L!=2&&(Xr(),De(17)),nn(this),this.s=2,ti(this)):Od(this,this.S-a)};function ti(a){a.j.G==0||a.J||of(a.j,a)}function nn(a){fc(a);var l=a.M;l&&typeof l.ma=="function"&&l.ma(),a.M=null,wd(a.U),a.g&&(l=a.g,a.g=null,l.abort(),l.ma())}function pc(a,l){try{var d=a.j;if(d.G!=0&&(d.g==a||mc(d.h,a))){if(!a.K&&mc(d.h,a)&&d.G==3){try{var p=d.Da.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var T=p;if(T[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Ns(d),Cs(d);else break e;vc(d),De(18)}}else d.za=T[1],0<d.za-d.T&&37500>T[2]&&d.F&&d.v==0&&!d.C&&(d.C=Zr(_(d.Za,d),6e3));if(1>=Ld(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else sn(d,11)}else if((a.K||d.g==a)&&Ns(d),!B(l))for(T=d.Da.g.parse(l),l=0;l<T.length;l++){let X=T[l];if(d.T=X[0],X=X[1],d.G==2)if(X[0]=="c"){d.K=X[1],d.ia=X[2];let Ae=X[3];Ae!=null&&(d.la=Ae,d.j.info("VER="+d.la));let be=X[4];be!=null&&(d.Aa=be,d.j.info("SVER="+d.Aa));let zn=X[5];zn!=null&&typeof zn=="number"&&0<zn&&(p=1.5*zn,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;let $e=a.g;if($e){let Os=$e.g?$e.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Os){var R=p.h;R.g||Os.indexOf("spdy")==-1&&Os.indexOf("quic")==-1&&Os.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(gc(R,R.h),R.h=null))}if(p.D){let wc=$e.g?$e.g.getResponseHeader("X-HTTP-Session-Id"):null;wc&&(p.ya=wc,re(p.I,p.D,wc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var O=a;if(p.qa=uf(p,p.J?p.ia:null,p.W),O.K){Md(p.h,O);var ne=O,ve=p.L;ve&&(ne.I=ve),ne.B&&(fc(ne),Ts(ne)),p.g=O}else rf(p);0<d.i.length&&Ds(d)}else X[0]!="stop"&&X[0]!="close"||sn(d,7);else d.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?sn(d,7):yc(d):X[0]!="noop"&&d.l&&d.l.ta(X),d.v=0)}}Xr(4)}catch{}}var by=class{constructor(a,l){this.g=a,this.map=l}};function Vd(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function xd(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ld(a){return a.h?1:a.g?a.g.size:0}function mc(a,l){return a.h?a.h==l:a.g?a.g.has(l):!1}function gc(a,l){a.g?a.g.add(l):a.h=l}function Md(a,l){a.h&&a.h==l?a.h=null:a.g&&a.g.has(l)&&a.g.delete(l)}Vd.prototype.cancel=function(){if(this.i=Fd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(let a of this.g.values())a.cancel();this.g.clear()}};function Fd(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let l=a.i;for(let d of a.g.values())l=l.concat(d.D);return l}return k(a.i)}function Sy(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map!="undefined"&&a instanceof Map||typeof Set!="undefined"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var l=[],d=a.length,p=0;p<d;p++)l.push(a[p]);return l}l=[],d=0;for(p in a)l[d++]=a[p];return l}function Ry(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map!="undefined"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set!="undefined"&&a instanceof Set)){if(u(a)||typeof a=="string"){var l=[];a=a.length;for(var d=0;d<a;d++)l.push(d);return l}l=[],d=0;for(let p in a)l[d++]=p;return l}}}function Ud(a,l){if(a.forEach&&typeof a.forEach=="function")a.forEach(l,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,l,void 0);else for(var d=Ry(a),p=Sy(a),T=p.length,R=0;R<T;R++)l.call(void 0,p[R],d&&d[R],a)}var Bd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Py(a,l){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var p=a[d].indexOf("="),T=null;if(0<=p){var R=a[d].substring(0,p);T=a[d].substring(p+1)}else R=a[d];l(R,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function rn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof rn){this.h=a.h,As(this,a.j),this.o=a.o,this.g=a.g,bs(this,a.s),this.l=a.l;var l=a.i,d=new ii;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),qd(this,d),this.m=a.m}else a&&(l=String(a).match(Bd))?(this.h=!1,As(this,l[1]||"",!0),this.o=ni(l[2]||""),this.g=ni(l[3]||"",!0),bs(this,l[4]),this.l=ni(l[5]||"",!0),qd(this,l[6]||"",!0),this.m=ni(l[7]||"")):(this.h=!1,this.i=new ii(null,this.h))}rn.prototype.toString=function(){var a=[],l=this.j;l&&a.push(ri(l,jd,!0),":");var d=this.g;return(d||l=="file")&&(a.push("//"),(l=this.o)&&a.push(ri(l,jd,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ri(d,d.charAt(0)=="/"?Ny:Dy,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ri(d,Oy)),a.join("")};function ut(a){return new rn(a)}function As(a,l,d){a.j=d?ni(l,!0):l,a.j&&(a.j=a.j.replace(/:$/,""))}function bs(a,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);a.s=l}else a.s=null}function qd(a,l,d){l instanceof ii?(a.i=l,Vy(a.i,a.h)):(d||(l=ri(l,ky)),a.i=new ii(l,a.h))}function re(a,l,d){a.i.set(l,d)}function Ss(a){return re(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ni(a,l){return a?l?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ri(a,l,d){return typeof a=="string"?(a=encodeURI(a).replace(l,Cy),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Cy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var jd=/[#\/\?@]/g,Dy=/[#\?:]/g,Ny=/[#\?]/g,ky=/[#\?@]/g,Oy=/#/g;function ii(a,l){this.h=this.g=null,this.i=a||null,this.j=!!l}function St(a){a.g||(a.g=new Map,a.h=0,a.i&&Py(a.i,function(l,d){a.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}r=ii.prototype,r.add=function(a,l){St(this),this.i=null,a=qn(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(l),this.h+=1,this};function zd(a,l){St(a),l=qn(a,l),a.g.has(l)&&(a.i=null,a.h-=a.g.get(l).length,a.g.delete(l))}function $d(a,l){return St(a),l=qn(a,l),a.g.has(l)}r.forEach=function(a,l){St(this),this.g.forEach(function(d,p){d.forEach(function(T){a.call(l,T,p,this)},this)},this)},r.na=function(){St(this);let a=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let p=0;p<l.length;p++){let T=a[p];for(let R=0;R<T.length;R++)d.push(l[p])}return d},r.V=function(a){St(this);let l=[];if(typeof a=="string")$d(this,a)&&(l=l.concat(this.g.get(qn(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)l=l.concat(a[d])}return l},r.set=function(a,l){return St(this),this.i=null,a=qn(this,a),$d(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[l]),this.h+=1,this},r.get=function(a,l){return a?(a=this.V(a),0<a.length?String(a[0]):l):l};function Gd(a,l,d){zd(a,l),0<d.length&&(a.i=null,a.g.set(qn(a,l),k(d)),a.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";let a=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var p=l[d];let R=encodeURIComponent(String(p)),O=this.V(p);for(p=0;p<O.length;p++){var T=R;O[p]!==""&&(T+="="+encodeURIComponent(String(O[p]))),a.push(T)}}return this.i=a.join("&")};function qn(a,l){return l=String(l),a.j&&(l=l.toLowerCase()),l}function Vy(a,l){l&&!a.j&&(St(a),a.i=null,a.g.forEach(function(d,p){var T=p.toLowerCase();p!=T&&(zd(this,p),Gd(this,T,d))},a)),a.j=l}function xy(a,l){let d=new ei;if(c.Image){let p=new Image;p.onload=S(Rt,d,"TestLoadImage: loaded",!0,l,p),p.onerror=S(Rt,d,"TestLoadImage: error",!1,l,p),p.onabort=S(Rt,d,"TestLoadImage: abort",!1,l,p),p.ontimeout=S(Rt,d,"TestLoadImage: timeout",!1,l,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else l(!1)}function Ly(a,l){let d=new ei,p=new AbortController,T=setTimeout(()=>{p.abort(),Rt(d,"TestPingServer: timeout",!1,l)},1e4);fetch(a,{signal:p.signal}).then(R=>{clearTimeout(T),R.ok?Rt(d,"TestPingServer: ok",!0,l):Rt(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(T),Rt(d,"TestPingServer: error",!1,l)})}function Rt(a,l,d,p,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),p(d)}catch{}}function My(){this.g=new vy}function Fy(a,l,d){let p=d||"";try{Ud(a,function(T,R){let O=T;h(T)&&(O=oc(T)),l.push(p+R+"="+encodeURIComponent(O))})}catch(T){throw l.push(p+"type="+encodeURIComponent("_badmap")),T}}function si(a){this.l=a.Ub||null,this.j=a.eb||!1}D(si,ac),si.prototype.g=function(){return new Rs(this.l,this.j)},si.prototype.i=function(a){return function(){return a}}({});function Rs(a,l){Te.call(this),this.D=a,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(Rs,Te),r=Rs.prototype,r.open=function(a,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=l,this.readyState=1,ai(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;let l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(l.body=a),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,oi(this)),this.readyState=0},r.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ai(this)),this.g&&(this.readyState=3,ai(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream!="undefined"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Wd(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Wd(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}r.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var l=a.value?a.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!a.done}))&&(this.response=this.responseText+=l)}a.done?oi(this):ai(this),this.readyState==3&&Wd(this)}},r.Ra=function(a){this.g&&(this.response=this.responseText=a,oi(this))},r.Qa=function(a){this.g&&(this.response=a,oi(this))},r.ga=function(){this.g&&oi(this)};function oi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ai(a)}r.setRequestHeader=function(a,l){this.u.append(a,l)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";let a=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=l.next();return a.join(`\r
`)};function ai(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Rs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Kd(a){let l="";return G(a,function(d,p){l+=p,l+=":",l+=d,l+=`\r
`}),l}function _c(a,l,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Kd(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):re(a,l,d))}function ae(a){Te.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(ae,Te);var Uy=/^https?$/i,By=["POST","PUT"];r=ae.prototype,r.Ha=function(a){this.J=a},r.ea=function(a,l,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);l=l?l.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():lc.g(),this.v=this.o?Ed(this.o):Ed(lc),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(l,String(a),!0),this.B=!1}catch(R){Hd(this,R);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var T in p)d.set(T,p[T]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(let R of p.keys())d.set(R,p.get(R));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(R=>R.toLowerCase()=="content-type"),T=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(By,l,void 0))||p||T||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(let[R,O]of d)this.g.setRequestHeader(R,O);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Yd(this),this.u=!0,this.g.send(a),this.u=!1}catch(R){Hd(this,R)}};function Hd(a,l){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=l,a.m=5,Qd(a),Ps(a)}function Qd(a){a.A||(a.A=!0,Ce(a,"complete"),Ce(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ce(this,"complete"),Ce(this,"abort"),Ps(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ps(this,!0)),ae.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Jd(this):this.bb())},r.bb=function(){Jd(this)};function Jd(a){if(a.h&&typeof o!="undefined"&&(!a.v[1]||lt(a)!=4||a.Z()!=2)){if(a.u&&lt(a)==4)yd(a.Ea,0,a);else if(Ce(a,"readystatechange"),lt(a)==4){a.h=!1;try{let O=a.Z();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var p;if(p=O===0){var T=String(a.D).match(Bd)[1]||null;!T&&c.self&&c.self.location&&(T=c.self.location.protocol.slice(0,-1)),p=!Uy.test(T?T.toLowerCase():"")}d=p}if(d)Ce(a,"complete"),Ce(a,"success");else{a.m=6;try{var R=2<lt(a)?a.g.statusText:""}catch{R=""}a.l=R+" ["+a.Z()+"]",Qd(a)}}finally{Ps(a)}}}}function Ps(a,l){if(a.g){Yd(a);let d=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,l||Ce(a,"ready");try{d.onreadystatechange=p}catch{}}}function Yd(a){a.I&&(c.clearTimeout(a.I),a.I=null)}r.isActive=function(){return!!this.g};function lt(a){return a.g?a.g.readyState:0}r.Z=function(){try{return 2<lt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(a){if(this.g){var l=this.g.responseText;return a&&l.indexOf(a)==0&&(l=l.substring(a.length)),yy(l)}};function Xd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function qy(a){let l={};a=(a.g&&2<=lt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(B(a[p]))continue;var d=E(a[p]);let T=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();let R=l[T]||[];l[T]=R,R.push(d)}I(l,function(p){return p.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ci(a,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||l}function Zd(a){this.Aa=0,this.i=[],this.j=new ei,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ci("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ci("baseRetryDelayMs",5e3,a),this.cb=ci("retryDelaySeedMs",1e4,a),this.Wa=ci("forwardChannelMaxRetries",2,a),this.wa=ci("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Vd(a&&a.concurrentRequestLimit),this.Da=new My,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Zd.prototype,r.la=8,r.G=1,r.connect=function(a,l,d,p){De(0),this.W=a,this.H=l||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=uf(this,null,this.W),Ds(this)};function yc(a){if(ef(a),a.G==3){var l=a.U++,d=ut(a.I);if(re(d,"SID",a.K),re(d,"RID",l),re(d,"TYPE","terminate"),ui(a,d),l=new bt(a,a.j,l),l.L=2,l.v=Ss(ut(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=l.v,d=!0),d||(l.g=lf(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Ts(l)}cf(a)}function Cs(a){a.g&&(Ic(a),a.g.cancel(),a.g=null)}function ef(a){Cs(a),a.u&&(c.clearTimeout(a.u),a.u=null),Ns(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Ds(a){if(!xd(a.h)&&!a.s){a.s=!0;var l=a.Ga;Wr||dd(),Kr||(Wr(),Kr=!0),Ya.add(l,a),a.B=0}}function jy(a,l){return Ld(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=l.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Zr(_(a.Ga,a,l),af(a,a.B)),a.B++,!0)}r.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;let T=new bt(this,this.j,a),R=this.o;if(this.S&&(R?(R=g(R),w(R,this.S)):R=this.S),this.m!==null||this.O||(T.H=R,R=null),this.P)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,4096<l){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=nf(this,T,l),d=ut(this.I),re(d,"RID",a),re(d,"CVER",22),this.D&&re(d,"X-HTTP-Session-Id",this.D),ui(this,d),R&&(this.O?l="headers="+encodeURIComponent(String(Kd(R)))+"&"+l:this.m&&_c(d,this.m,R)),gc(this.h,T),this.Ua&&re(d,"TYPE","init"),this.P?(re(d,"$req",l),re(d,"SID","null"),T.T=!0,dc(T,d,null)):dc(T,d,l),this.G=2}}else this.G==3&&(a?tf(this,a):this.i.length==0||xd(this.h)||tf(this))};function tf(a,l){var d;l?d=l.l:d=a.U++;let p=ut(a.I);re(p,"SID",a.K),re(p,"RID",d),re(p,"AID",a.T),ui(a,p),a.m&&a.o&&_c(p,a.m,a.o),d=new bt(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),l&&(a.i=l.D.concat(a.i)),l=nf(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),gc(a.h,d),dc(d,p,l)}function ui(a,l){a.H&&G(a.H,function(d,p){re(l,p,d)}),a.l&&Ud({},function(d,p){re(l,p,d)})}function nf(a,l,d){d=Math.min(a.i.length,d);var p=a.l?_(a.l.Na,a.l,a):null;e:{var T=a.i;let R=-1;for(;;){let O=["count="+d];R==-1?0<d?(R=T[0].g,O.push("ofs="+R)):R=0:O.push("ofs="+R);let ne=!0;for(let ve=0;ve<d;ve++){let X=T[ve].g,Ae=T[ve].map;if(X-=R,0>X)R=Math.max(0,T[ve].g-100),ne=!1;else try{Fy(Ae,O,"req"+X+"_")}catch{p&&p(Ae)}}if(ne){p=O.join("&");break e}}}return a=a.i.splice(0,d),l.D=a,p}function rf(a){if(!a.g&&!a.u){a.Y=1;var l=a.Fa;Wr||dd(),Kr||(Wr(),Kr=!0),Ya.add(l,a),a.v=0}}function vc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Zr(_(a.Fa,a),af(a,a.v)),a.v++,!0)}r.Fa=function(){if(this.u=null,sf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Zr(_(this.ab,this),a)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,De(10),Cs(this),sf(this))};function Ic(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function sf(a){a.g=new bt(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var l=ut(a.qa);re(l,"RID","rpc"),re(l,"SID",a.K),re(l,"AID",a.T),re(l,"CI",a.F?"0":"1"),!a.F&&a.ja&&re(l,"TO",a.ja),re(l,"TYPE","xmlhttp"),ui(a,l),a.m&&a.o&&_c(l,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Ss(ut(l)),d.m=null,d.P=!0,Nd(d,a)}r.Za=function(){this.C!=null&&(this.C=null,Cs(this),vc(this),De(19))};function Ns(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function of(a,l){var d=null;if(a.g==l){Ns(a),Ic(a),a.g=null;var p=2}else if(mc(a.h,l))d=l.D,Md(a.h,l),p=1;else return;if(a.G!=0){if(l.o)if(p==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var T=a.B;p=Is(),Ce(p,new Rd(p,d)),Ds(a)}else rf(a);else if(T=l.s,T==3||T==0&&0<l.X||!(p==1&&jy(a,l)||p==2&&vc(a)))switch(d&&0<d.length&&(l=a.h,l.i=l.i.concat(d)),T){case 1:sn(a,5);break;case 4:sn(a,10);break;case 3:sn(a,6);break;default:sn(a,2)}}}function af(a,l){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*l}function sn(a,l){if(a.j.info("Error code "+l),l==2){var d=_(a.fb,a),p=a.Xa;let T=!p;p=new rn(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||As(p,"https"),Ss(p),T?xy(p.toString(),d):Ly(p.toString(),d)}else De(2);a.G=0,a.l&&a.l.sa(l),cf(a),ef(a)}r.fb=function(a){a?(this.j.info("Successfully pinged google.com"),De(2)):(this.j.info("Failed to ping google.com"),De(1))};function cf(a){if(a.G=0,a.ka=[],a.l){let l=Fd(a.h);(l.length!=0||a.i.length!=0)&&(N(a.ka,l),N(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function uf(a,l,d){var p=d instanceof rn?ut(d):new rn(d);if(p.g!="")l&&(p.g=l+"."+p.g),bs(p,p.s);else{var T=c.location;p=T.protocol,l=l?l+"."+T.hostname:T.hostname,T=+T.port;var R=new rn(null);p&&As(R,p),l&&(R.g=l),T&&bs(R,T),d&&(R.l=d),p=R}return d=a.D,l=a.ya,d&&l&&re(p,d,l),re(p,"VER",a.la),ui(a,p),p}function lf(a,l,d){if(l&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=a.Ca&&!a.pa?new ae(new si({eb:d})):new ae(a.pa),l.Ha(a.J),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function hf(){}r=hf.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function ks(){}ks.prototype.g=function(a,l){return new xe(a,l)};function xe(a,l){Te.call(this),this.g=new Zd(l),this.l=a,this.h=l&&l.messageUrlParams||null,a=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(a?a["X-WebChannel-Content-Type"]=l.messageContentType:a={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(a?a["X-WebChannel-Client-Profile"]=l.va:a={"X-WebChannel-Client-Profile":l.va}),this.g.S=a,(a=l&&l.Sb)&&!B(a)&&(this.g.m=a),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!B(l)&&(this.g.D=l,a=this.h,a!==null&&l in a&&(a=this.h,l in a&&delete a[l])),this.j=new jn(this)}D(xe,Te),xe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},xe.prototype.close=function(){yc(this.g)},xe.prototype.o=function(a){var l=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=oc(a),a=d);l.i.push(new by(l.Ya++,a)),l.G==3&&Ds(l)},xe.prototype.N=function(){this.g.l=null,delete this.j,yc(this.g),delete this.g,xe.aa.N.call(this)};function df(a){cc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var l=a.__sm__;if(l){e:{for(let d in l){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,l=l!==null&&a in l?l[a]:void 0),this.data=l}else this.data=a}D(df,cc);function ff(){uc.call(this),this.status=1}D(ff,uc);function jn(a){this.g=a}D(jn,hf),jn.prototype.ua=function(){Ce(this.g,"a")},jn.prototype.ta=function(a){Ce(this.g,new df(a))},jn.prototype.sa=function(a){Ce(this.g,new ff)},jn.prototype.ra=function(){Ce(this.g,"b")},ks.prototype.createWebChannel=ks.prototype.g,xe.prototype.send=xe.prototype.o,xe.prototype.open=xe.prototype.m,xe.prototype.close=xe.prototype.close,Ou=vt.createWebChannelTransport=function(){return new ks},ku=vt.getStatEventTarget=function(){return Is()},Nu=vt.Event=tn,bo=vt.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ws.NO_ERROR=0,ws.TIMEOUT=8,ws.HTTP_ERROR=6,Pi=vt.ErrorCode=ws,Pd.COMPLETE="complete",Du=vt.EventType=Pd,Td.EventType=Yr,Yr.OPEN="a",Yr.CLOSE="b",Yr.ERROR="c",Yr.MESSAGE="d",Te.prototype.listen=Te.prototype.K,Xn=vt.WebChannel=Td,Zw=vt.FetchXmlHttpFactory=si,ae.prototype.listenOnce=ae.prototype.L,ae.prototype.getLastError=ae.prototype.Ka,ae.prototype.getLastErrorCode=ae.prototype.Ba,ae.prototype.getStatus=ae.prototype.Z,ae.prototype.getResponseJson=ae.prototype.Oa,ae.prototype.getResponseText=ae.prototype.oa,ae.prototype.send=ae.prototype.ea,ae.prototype.setWithCredentials=ae.prototype.Ha,Cu=vt.XhrIo=ae}).apply(typeof Ao!="undefined"?Ao:typeof self!="undefined"?self:typeof window!="undefined"?window:{});var Kp="@firebase/firestore",Hp="4.8.0";var de=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};de.UNAUTHENTICATED=new de(null),de.GOOGLE_CREDENTIALS=new de("google-credentials-uid"),de.FIRST_PARTY=new de("first-party-uid"),de.MOCK_USER=new de("mock-user");var qr="11.10.0";var Rn=new Pt("@firebase/firestore");function sr(){return Rn.logLevel}function C(r,...e){if(Rn.logLevel<=H.DEBUG){let t=e.map(Mh);Rn.debug(`Firestore (${qr}): ${r}`,...t)}}function ue(r,...e){if(Rn.logLevel<=H.ERROR){let t=e.map(Mh);Rn.error(`Firestore (${qr}): ${r}`,...t)}}function wt(r,...e){if(Rn.logLevel<=H.WARN){let t=e.map(Mh);Rn.warn(`Firestore (${qr}): ${r}`,...t)}}function Mh(r){if(typeof r=="string")return r;try{return function(t){return JSON.stringify(t)}(r)}catch{return r}}function L(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,og(r,n,t)}function og(r,e,t){let n=`FIRESTORE (${qr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw ue(n),new Error(n)}function q(r,e,t,n){let i="Unexpected state";typeof t=="string"?i=t:n=t,r||og(e,i,n)}function F(r,e){return r}var P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},V=class extends Le{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var je=class{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};var Uo=class{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},qu=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(de.UNAUTHENTICATED))}shutdown(){}},ju=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}},zu=class{constructor(e){this.t=e,this.currentUser=de.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){q(this.o===void 0,42304);let n=this.i,i=u=>this.i!==n?(n=this.i,t(u)):Promise.resolve(),s=new je;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new je,e.enqueueRetryable(()=>i(this.currentUser))};let o=()=>{let u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},c=u=>{C("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){let u=this.t.getImmediate({optional:!0});u?c(u):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new je)}},0),o()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(q(typeof n.accessToken=="string",31837,{l:n}),new Uo(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return q(e===null||typeof e=="string",2055,{h:e}),new de(e)}},$u=class{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=de.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);let e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}},Gu=class{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new $u(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(de.FIRST_PARTY))}shutdown(){}invalidateToken(){}},Bo=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},Wu=class{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Oe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){q(this.o===void 0,3512);let n=s=>{s.error!=null&&C("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);let o=s.token!==this.m;return this.m=s.token,C("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>n(s))};let i=s=>{C("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){let s=this.V.getImmediate({optional:!0});s?i(s):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Bo(this.p));let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(q(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Bo(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}};function eE(r){let e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}function ag(){return new TextEncoder}var $i=class{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516),n="";for(;n.length<20;){let i=eE(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<t&&(n+=e.charAt(i[s]%62))}return n}};function z(r,e){return r<e?-1:r>e?1:0}function Ku(r,e){let t=0;for(;t<r.length&&t<e.length;){let n=r.codePointAt(t),i=e.codePointAt(t);if(n!==i){if(n<128&&i<128)return z(n,i);{let s=ag(),o=tE(s.encode(Qp(r,t)),s.encode(Qp(e,t)));return o!==0?o:z(n,i)}}t+=n>65535?2:1}return z(r.length,e.length)}function Qp(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function tE(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return z(r[t],e[t]);return z(r.length,e.length)}function gr(r,e,t){return r.length===e.length&&r.every((n,i)=>t(n,e[i]))}function cg(r){return r+"\0"}var Jp="__name__",qo=class r{constructor(e,t,n){t===void 0?t=0:t>e.length&&L(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&L(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return r.comparator(this,e)===0}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof r?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let i=0;i<n;i++){let s=r.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return z(e.length,t.length)}static compareSegments(e,t){let n=r.isNumericId(e),i=r.isNumericId(t);return n&&!i?-1:!n&&i?1:n&&i?r.extractNumericId(e).compare(r.extractNumericId(t)):Ku(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return yt.fromString(e.substring(4,e.length-2))}},Z=class r extends qo{construct(e,t,n){return new r(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new V(P.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(i=>i.length>0))}return new r(t)}static emptyPath(){return new r([])}},nE=/^[_a-zA-Z][_a-zA-Z0-9]*$/,ge=class r extends qo{construct(e,t,n){return new r(e,t,n)}static isValidIdentifier(e){return nE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),r.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Jp}static keyField(){return new r([Jp])}static fromServerFormat(e){let t=[],n="",i=0,s=()=>{if(n.length===0)throw new V(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},o=!1;for(;i<e.length;){let c=e[i];if(c==="\\"){if(i+1===e.length)throw new V(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new V(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=u,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(n+=c,i++):(s(),i++)}if(s(),o)throw new V(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new r(t)}static emptyPath(){return new r([])}};var x=class r{constructor(e){this.path=e}static fromPath(e){return new r(Z.fromString(e))}static fromName(e){return new r(Z.fromString(e).popFirst(5))}static empty(){return new r(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Z.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Z.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new r(new Z(e.slice()))}};function ug(r,e,t){if(!t)throw new V(P.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function rE(r,e,t,n){if(e===!0&&n===!0)throw new V(P.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Yp(r){if(!x.isDocumentKey(r))throw new V(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Xp(r){if(x.isDocumentKey(r))throw new V(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function lg(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Fh(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{let e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":L(12329,{type:typeof r})}function Pn(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new V(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let t=Fh(r);throw new V(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}function fe(r,e){let t={typeString:r};return e&&(t.value=e),t}function ds(r,e){if(!lg(r))throw new V(P.INVALID_ARGUMENT,"JSON must be an object");let t;for(let n in e)if(e[n]){let i=e[n].typeString,s="value"in e[n]?{value:e[n].value}:void 0;if(!(n in r)){t=`JSON missing required field: '${n}'`;break}let o=r[n];if(i&&typeof o!==i){t=`JSON field '${n}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){t=`Expected '${n}' field to equal '${s.value}'`;break}}if(t)throw new V(P.INVALID_ARGUMENT,t);return!0}var Zp=-62135596800,em=1e6,oe=class r{static now(){return r.fromMillis(Date.now())}static fromDate(e){return r.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*em);return new r(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Zp)throw new V(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/em}_compareTo(e){return this.seconds===e.seconds?z(this.nanoseconds,e.nanoseconds):z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:r._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ds(e,r._jsonSchema))return new r(e.seconds,e.nanoseconds)}valueOf(){let e=this.seconds-Zp;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};oe._jsonSchemaVersion="firestore/timestamp/1.0",oe._jsonSchema={type:fe("string",oe._jsonSchemaVersion),seconds:fe("number"),nanoseconds:fe("number")};var j=class r{static fromTimestamp(e){return new r(e)}static min(){return new r(new oe(0,0))}static max(){return new r(new oe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var _r=-1,yr=class{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}};function Hu(r){return r.fields.find(e=>e.kind===2)}function pn(r){return r.fields.filter(e=>e.kind!==2)}yr.UNKNOWN_ID=-1;var dr=class{constructor(e,t){this.fieldPath=e,this.kind=t}};var Gi=class r{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new r(0,ze.min())}};function hg(r,e){let t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=j.fromTimestamp(n===1e9?new oe(t+1,0):new oe(t,n));return new ze(i,x.empty(),e)}function dg(r){return new ze(r.readTime,r.key,_r)}var ze=class r{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new r(j.min(),x.empty(),_r)}static max(){return new r(j.max(),x.empty(),_r)}};function Uh(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=x.comparator(r.documentKey,e.documentKey),t!==0?t:z(r.largestBatchId,e.largestBatchId))}var fg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",jo=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};async function Xt(r){if(r.code!==P.FAILED_PRECONDITION||r.message!==fg)throw r;C("LocalStore","Unexpectedly lost primary lease")}var b=class r{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&L(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new r((n,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(n,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(n,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof r?t:r.resolve(t)}catch(t){return r.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):r.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):r.reject(t)}static resolve(e){return new r((t,n)=>{t(e)})}static reject(e){return new r((t,n)=>{n(e)})}static waitFor(e){return new r((t,n)=>{let i=0,s=0,o=!1;e.forEach(c=>{++i,c.next(()=>{++s,o&&s===i&&t()},u=>n(u))}),o=!0,s===i&&t()})}static or(e){let t=r.resolve(!1);for(let n of e)t=t.next(i=>i?r.resolve(i):n());return t}static forEach(e,t){let n=[];return e.forEach((i,s)=>{n.push(t.call(this,i,s))}),this.waitFor(n)}static mapArray(e,t){return new r((n,i)=>{let s=e.length,o=new Array(s),c=0;for(let u=0;u<s;u++){let h=u;t(e[h]).next(f=>{o[h]=f,++c,c===s&&n(o)},f=>i(f))}})}static doWhile(e,t){return new r((n,i)=>{let s=()=>{e()===!0?t().next(()=>{s()},i):n()};s()})}};var Me="SimpleDb",zo=class r{static open(e,t,n,i){try{return new r(t,e.transaction(i,n))}catch(s){throw new En(t,s)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new je,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new En(e,t.error)):this.S.resolve()},this.transaction.onerror=n=>{let i=Bh(n.target.error);this.S.reject(new En(e,i))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(C(Me,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){let e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){let t=this.transaction.objectStore(e);return new Ju(t)}},vr=class r{static delete(e){return C(Me,"Removing database:",e),gn(bc().indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!Fs())return!1;if(r.F())return!0;let e=ce(),t=r.M(e),n=0<t&&t<10,i=pg(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||s)}static F(){var e;return typeof process!="undefined"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.O)==="YES"}static N(e,t){return e.store(t)}static M(e){let t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.B=n,this.L=null,r.M(ce())===12.2&&ue("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(e){return this.db||(C(Me,"Opening database:",this.name),this.db=await new Promise((t,n)=>{let i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{let o=s.target.result;t(o)},i.onblocked=()=>{n(new En(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{let o=s.target.error;o.name==="VersionError"?n(new V(P.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new V(P.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new En(e,o))},i.onupgradeneeded=s=>{C(Me,'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);let o=s.target.result;if(this.L!==null&&this.L!==s.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${s.oldVersion}, event.newVersion=${s.newVersion}, db.version=${o.version}`);this.B.q(o,i.transaction,s.oldVersion,this.version).next(()=>{C(Me,"Database upgrade to version "+this.version+" complete")})}}),this.db.addEventListener("close",t=>{let n=t.target;this.L=n.version},{passive:!0})),this.db.addEventListener("versionchange",t=>{var n;t.newVersion===null&&(wt('Received "versionchange" event with newVersion===null; notifying the registered DatabaseDeletedListener, if any'),(n=this.databaseDeletedListener)===null||n===void 0||n.call(this))},{passive:!0}),this.db}setDatabaseDeletedListener(e){if(this.databaseDeletedListener)throw new Error("setDatabaseDeletedListener() may only be called once, and it has already been called");this.databaseDeletedListener=e}async runTransaction(e,t,n,i){let s=t==="readonly",o=0;for(;;){++o;try{this.db=await this.k(e);let c=zo.open(this.db,e,s?"readonly":"readwrite",n),u=i(c).next(h=>(c.v(),h)).catch(h=>(c.abort(h),b.reject(h))).toPromise();return u.catch(()=>{}),await c.D,u}catch(c){let u=c,h=u.name!=="FirebaseError"&&o<3;if(C(Me,"Transaction failed with error:",u.message,"Retrying:",h),this.close(),!h)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}};function pg(r){let e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}var Qu=class{constructor(e){this.$=e,this.U=!1,this.K=null}get isDone(){return this.U}get W(){return this.K}set cursor(e){this.$=e}done(){this.U=!0}G(e){this.K=e}delete(){return gn(this.$.delete())}},En=class extends V{constructor(e,t){super(P.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}};function Zt(r){return r.name==="IndexedDbTransactionError"}var Ju=class{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(C(Me,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(C(Me,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),gn(n)}add(e){return C(Me,"ADD",this.store.name,e,e),gn(this.store.add(e))}get(e){return gn(this.store.get(e)).next(t=>(t===void 0&&(t=null),C(Me,"GET",this.store.name,e,t),t))}delete(e){return C(Me,"DELETE",this.store.name,e),gn(this.store.delete(e))}count(){return C(Me,"COUNT",this.store.name),gn(this.store.count())}j(e,t){let n=this.options(e,t),i=n.index?this.store.index(n.index):this.store;if(typeof i.getAll=="function"){let s=i.getAll(n.range);return new b((o,c)=>{s.onerror=u=>{c(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{let s=this.cursor(n),o=[];return this.J(s,(c,u)=>{o.push(u)}).next(()=>o)}}H(e,t){let n=this.store.getAll(e,t===null?void 0:t);return new b((i,s)=>{n.onerror=o=>{s(o.target.error)},n.onsuccess=o=>{i(o.target.result)}})}Y(e,t){C(Me,"DELETE ALL",this.store.name);let n=this.options(e,t);n.Z=!1;let i=this.cursor(n);return this.J(i,(s,o,c)=>c.delete())}X(e,t){let n;t?n=e:(n={},t=e);let i=this.cursor(n);return this.J(i,t)}ee(e){let t=this.cursor({});return new b((n,i)=>{t.onerror=s=>{let o=Bh(s.target.error);i(o)},t.onsuccess=s=>{let o=s.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():n()}):n()}})}J(e,t){let n=[];return new b((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{let c=o.target.result;if(!c)return void i();let u=new Qu(c),h=t(c.primaryKey,c.value,u);if(h instanceof b){let f=h.catch(m=>(u.done(),b.reject(m)));n.push(f)}u.isDone?i():u.W===null?c.continue():c.continue(u.W)}}).next(()=>b.waitFor(n))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){let n=this.store.index(e.index);return e.Z?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}};function gn(r){return new b((e,t)=>{r.onsuccess=n=>{let i=n.target.result;e(i)},r.onerror=n=>{let i=Bh(n.target.error);t(i)}})}var tm=!1;function Bh(r){let e=vr.M(ce());if(e>=12.2&&e<13){let t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){let n=new V("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return tm||(tm=!0,setTimeout(()=>{throw n},0)),n}}return r}var xi="IndexBackfiller",Yu=class{constructor(e,t){this.asyncQueue=e,this.te=t,this.task=null}start(){this.ne(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ne(e){C(xi,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{let t=await this.te.re();C(xi,`Documents written: ${t}`)}catch(t){Zt(t)?C(xi,"Ignoring IndexedDB error during index backfill: ",t):await Xt(t)}await this.ne(6e4)})}},Xu=class{constructor(e,t){this.localStore=e,this.persistence=t}async re(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.ie(t,e))}ie(e,t){let n=new Set,i=t,s=!0;return b.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!n.has(o))return C(xi,`Processing collection: ${o}`),this.se(e,o,i).next(c=>{i-=c,n.add(o)});s=!1})).next(()=>t-i)}se(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,n).next(s=>{let o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.oe(i,s)).next(c=>(C(xi,`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}oe(e,t){let n=e;return t.changes.forEach((i,s)=>{let o=dg(s);Uh(o,n)>0&&(n=o)}),new ze(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}};var Re=class{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this._e(n),this.ae=n=>t.writeSequenceNumber(n))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ae&&this.ae(e),e}};Re.ue=-1;var Tn=-1;function Ua(r){return r==null}function Wi(r){return r===0&&1/r==-1/0}function mg(r){return typeof r=="number"&&Number.isInteger(r)&&!Wi(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}var $o="";function Pe(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=nm(e)),e=iE(r.get(t),e);return nm(e)}function iE(r,e){let t=e,n=r.length;for(let i=0;i<n;i++){let s=r.charAt(i);switch(s){case"\0":t+="";break;case $o:t+="";break;default:t+=s}}return t}function nm(r){return r+$o+""}function rt(r){let e=r.length;if(q(e>=2,64408,{path:r}),e===2)return q(r.charAt(0)===$o&&r.charAt(1)==="",56145,{path:r}),Z.emptyPath();let t=e-2,n=[],i="";for(let s=0;s<e;){let o=r.indexOf($o,s);switch((o<0||o>t)&&L(50515,{path:r}),r.charAt(o+1)){case"":let c=r.substring(s,o),u;i.length===0?u=c:(i+=c,u=i,i=""),n.push(u);break;case"":i+=r.substring(s,o),i+="\0";break;case"":i+=r.substring(s,o+1);break;default:L(61167,{path:r})}s=o+2}return new Z(n)}var mn="remoteDocuments",fs="owner",Zn="owner",Ki="mutationQueues",sE="userId",He="mutations",rm="batchId",In="userMutationsIndex",im=["userId","batchId"];function No(r,e){return[r,Pe(e)]}function gg(r,e,t){return[r,Pe(e),t]}var oE={},Ir="documentMutations",Go="remoteDocumentsV14",aE=["prefixPath","collectionGroup","readTime","documentId"],ko="documentKeyIndex",cE=["prefixPath","collectionGroup","documentId"],_g="collectionGroupIndex",uE=["collectionGroup","readTime","prefixPath","documentId"],Hi="remoteDocumentGlobal",Zu="remoteDocumentGlobalKey",wr="targets",yg="queryTargetsIndex",lE=["canonicalId","targetId"],Er="targetDocuments",hE=["targetId","path"],qh="documentTargetsIndex",dE=["path","targetId"],Wo="targetGlobalKey",An="targetGlobal",Qi="collectionParents",fE=["collectionId","parent"],Tr="clientMetadata",pE="clientId",Ba="bundles",mE="bundleId",qa="namedQueries",gE="name",jh="indexConfiguration",_E="indexId",el="collectionGroupIndex",yE="collectionGroup",Li="indexState",vE=["indexId","uid"],vg="sequenceNumberIndex",IE=["uid","sequenceNumber"],Mi="indexEntries",wE=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Ig="documentKeyIndex",EE=["indexId","uid","orderedDocumentKey"],ja="documentOverlays",TE=["userId","collectionPath","documentId"],tl="collectionPathOverlayIndex",AE=["userId","collectionPath","largestBatchId"],wg="collectionGroupOverlayIndex",bE=["userId","collectionGroup","largestBatchId"],zh="globals",SE="name",Eg=[Ki,He,Ir,mn,wr,fs,An,Er,Tr,Hi,Qi,Ba,qa],RE=[...Eg,ja],Tg=[Ki,He,Ir,Go,wr,fs,An,Er,Tr,Hi,Qi,Ba,qa,ja],Ag=Tg,$h=[...Ag,jh,Li,Mi],PE=$h,bg=[...$h,zh],CE=bg;var Ji=class extends jo{constructor(e,t){super(),this.ce=e,this.currentSequenceNumber=t}};function _e(r,e){let t=F(r);return vr.N(t.ce,e)}function sm(r){let e=0;for(let t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Mn(r,e){for(let t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Sg(r){for(let e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}var ie=class r{constructor(e,t){this.comparator=e,this.root=t||st.EMPTY}insert(e,t){return new r(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,st.BLACK,null,null))}remove(e){return new r(this.comparator,this.root.remove(e,this.comparator).copy(null,null,st.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let i=this.comparator(e,n.key);if(i===0)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new lr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new lr(this.root,e,this.comparator,!1)}getReverseIterator(){return new lr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new lr(this.root,e,this.comparator,!0)}},lr=class{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},st=class r{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=n!=null?n:r.RED,this.left=i!=null?i:r.EMPTY,this.right=s!=null?s:r.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,s){return new r(e!=null?e:this.key,t!=null?t:this.value,n!=null?n:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this,s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return r.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return r.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){let e=this.copy(null,null,r.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,r.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw L(43730,{key:this.key,value:this.value});if(this.right.isRed())throw L(14113,{key:this.key,value:this.value});let e=this.left.check();if(e!==this.right.check())throw L(27949);return e+(this.isRed()?0:1)}};st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw L(57766)}get value(){throw L(16141)}get color(){throw L(16727)}get left(){throw L(29726)}get right(){throw L(36894)}copy(e,t,n,i,s){return this}insert(e,t,n){return new st(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var te=class r{constructor(e){this.comparator=e,this.data=new ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ko(this.data.getIterator())}getIteratorFrom(e){return new Ko(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof r)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let i=t.getNext().key,s=n.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new r(this.comparator);return t.data=e,t}},Ko=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};function er(r){return r.hasNext()?r.getNext():void 0}var Qe=class r{constructor(e){this.fields=e,e.sort(ge.comparator)}static empty(){return new r([])}unionWith(e){let t=new te(ge.comparator);for(let n of this.fields)t=t.add(n);for(let n of e)t=t.add(n);return new r(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return gr(this.fields,e.fields,(t,n)=>t.isEqual(n))}};var Ho=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var pe=class r{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(i){try{return atob(i)}catch(s){throw typeof DOMException!="undefined"&&s instanceof DOMException?new Ho("Invalid base64 string: "+s):s}}(e);return new r(t)}static fromUint8Array(e){let t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new r(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){let n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};pe.EMPTY_BYTE_STRING=new pe("");var DE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Et(r){if(q(!!r,39018),typeof r=="string"){let e=0,t=DE.exec(r);if(q(!!t,46558,{timestamp:r}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}let n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:se(r.seconds),nanos:se(r.nanos)}}function se(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Tt(r){return typeof r=="string"?pe.fromBase64String(r):pe.fromUint8Array(r)}var Rg="server_timestamp",Pg="__type__",Cg="__previous_value__",Dg="__local_write_time__";function Gh(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[Pg])===null||t===void 0?void 0:t.stringValue)===Rg}function za(r){let e=r.mapValue.fields[Cg];return Gh(e)?za(e):e}function Yi(r){let e=Et(r.mapValue.fields[Dg].timestampValue);return new oe(e.seconds,e.nanos)}var nl=class{constructor(e,t,n,i,s,o,c,u,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}},Xi="(default)",Ar=class r{constructor(e,t){this.projectId=e,this.database=t||Xi}static empty(){return new r("","")}get isDefaultDatabase(){return this.database===Xi}isEqual(e){return e instanceof r&&e.projectId===this.projectId&&e.database===this.database}};var Wh="__type__",Ng="__max__",Ut={mapValue:{fields:{__type__:{stringValue:Ng}}}},Kh="__vector__",br="value",Oo={nullValue:"NULL_VALUE"};function $t(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Gh(r)?4:kg(r)?9007199254740991:$a(r)?10:11:L(28295,{value:r})}function ot(r,e){if(r===e)return!0;let t=$t(r);if(t!==$t(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Yi(r).isEqual(Yi(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;let o=Et(i.timestampValue),c=Et(s.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(i,s){return Tt(i.bytesValue).isEqual(Tt(s.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(i,s){return se(i.geoPointValue.latitude)===se(s.geoPointValue.latitude)&&se(i.geoPointValue.longitude)===se(s.geoPointValue.longitude)}(r,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return se(i.integerValue)===se(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){let o=se(i.doubleValue),c=se(s.doubleValue);return o===c?Wi(o)===Wi(c):isNaN(o)&&isNaN(c)}return!1}(r,e);case 9:return gr(r.arrayValue.values||[],e.arrayValue.values||[],ot);case 10:case 11:return function(i,s){let o=i.mapValue.fields||{},c=s.mapValue.fields||{};if(sm(o)!==sm(c))return!1;for(let u in o)if(o.hasOwnProperty(u)&&(c[u]===void 0||!ot(o[u],c[u])))return!1;return!0}(r,e);default:return L(52216,{left:r})}}function Zi(r,e){return(r.values||[]).find(t=>ot(t,e))!==void 0}function Gt(r,e){if(r===e)return 0;let t=$t(r),n=$t(e);if(t!==n)return z(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return z(r.booleanValue,e.booleanValue);case 2:return function(s,o){let c=se(s.integerValue||s.doubleValue),u=se(o.integerValue||o.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(r,e);case 3:return om(r.timestampValue,e.timestampValue);case 4:return om(Yi(r),Yi(e));case 5:return Ku(r.stringValue,e.stringValue);case 6:return function(s,o){let c=Tt(s),u=Tt(o);return c.compareTo(u)}(r.bytesValue,e.bytesValue);case 7:return function(s,o){let c=s.split("/"),u=o.split("/");for(let h=0;h<c.length&&h<u.length;h++){let f=z(c[h],u[h]);if(f!==0)return f}return z(c.length,u.length)}(r.referenceValue,e.referenceValue);case 8:return function(s,o){let c=z(se(s.latitude),se(o.latitude));return c!==0?c:z(se(s.longitude),se(o.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return am(r.arrayValue,e.arrayValue);case 10:return function(s,o){var c,u,h,f;let m=s.fields||{},_=o.fields||{},S=(c=m[br])===null||c===void 0?void 0:c.arrayValue,D=(u=_[br])===null||u===void 0?void 0:u.arrayValue,k=z(((h=S==null?void 0:S.values)===null||h===void 0?void 0:h.length)||0,((f=D==null?void 0:D.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:am(S,D)}(r.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ut.mapValue&&o===Ut.mapValue)return 0;if(s===Ut.mapValue)return 1;if(o===Ut.mapValue)return-1;let c=s.fields||{},u=Object.keys(c),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){let _=Ku(u[m],f[m]);if(_!==0)return _;let S=Gt(c[u[m]],h[f[m]]);if(S!==0)return S}return z(u.length,f.length)}(r.mapValue,e.mapValue);default:throw L(23264,{le:t})}}function om(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return z(r,e);let t=Et(r),n=Et(e),i=z(t.seconds,n.seconds);return i!==0?i:z(t.nanos,n.nanos)}function am(r,e){let t=r.values||[],n=e.values||[];for(let i=0;i<t.length&&i<n.length;++i){let s=Gt(t[i],n[i]);if(s)return s}return z(t.length,n.length)}function Sr(r){return rl(r)}function rl(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){let n=Et(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return Tt(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return x.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",i=!0;for(let s of t.values||[])i?i=!1:n+=",",n+=rl(s);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){let n=Object.keys(t.fields||{}).sort(),i="{",s=!0;for(let o of n)s?s=!1:i+=",",i+=`${o}:${rl(t.fields[o])}`;return i+"}"}(r.mapValue):L(61005,{value:r})}function Vo(r){switch($t(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let e=za(r);return e?16+Vo(e):16;case 5:return 2*r.stringValue.length;case 6:return Tt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((i,s)=>i+Vo(s),0)}(r.arrayValue);case 10:case 11:return function(n){let i=0;return Mn(n.fields,(s,o)=>{i+=s.length+Vo(o)}),i}(r.mapValue);default:throw L(13486,{value:r})}}function Hh(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function il(r){return!!r&&"integerValue"in r}function es(r){return!!r&&"arrayValue"in r}function cm(r){return!!r&&"nullValue"in r}function um(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function xo(r){return!!r&&"mapValue"in r}function $a(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[Wh])===null||t===void 0?void 0:t.stringValue)===Kh}function Fi(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){let e={mapValue:{fields:{}}};return Mn(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Fi(n)),e}if(r.arrayValue){let e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Fi(r.arrayValue.values[t]);return e}return Object.assign({},r)}function kg(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Ng}var Og={mapValue:{fields:{[Wh]:{stringValue:Kh},[br]:{arrayValue:{}}}}};function NE(r){return"nullValue"in r?Oo:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?Hh(Ar.empty(),x.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?$a(r)?Og:{mapValue:{}}:L(35942,{value:r})}function kE(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?Hh(Ar.empty(),x.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?Og:"mapValue"in r?$a(r)?{mapValue:{}}:Ut:L(61959,{value:r})}function lm(r,e){let t=Gt(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function hm(r,e){let t=Gt(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}var Fe=class r{constructor(e){this.value=e}static empty(){return new r({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!xo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fi(t)}setAll(e){let t=ge.emptyPath(),n={},i=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){let u=this.getFieldsMap(t);this.applyChanges(u,n,i),n={},i=[],t=c.popLast()}o?n[c.lastSegment()]=Fi(o):i.push(c.lastSegment())});let s=this.getFieldsMap(t);this.applyChanges(s,n,i)}delete(e){let t=this.field(e.popLast());xo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ot(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];xo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){Mn(t,(i,s)=>e[i]=s);for(let i of n)delete e[i]}clone(){return new r(Fi(this.value))}};function Vg(r){let e=[];return Mn(r.fields,(t,n)=>{let i=new ge([t]);if(xo(n)){let s=Vg(n.mapValue).fields;if(s.length===0)e.push(i);else for(let o of s)e.push(i.child(o))}else e.push(i)}),new Qe(e)}var we=class r{constructor(e,t,n,i,s,o,c){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=s,this.data=o,this.documentState=c}static newInvalidDocument(e){return new r(e,0,j.min(),j.min(),j.min(),Fe.empty(),0)}static newFoundDocument(e,t,n,i){return new r(e,1,t,j.min(),n,i,0)}static newNoDocument(e,t){return new r(e,2,t,j.min(),j.min(),Fe.empty(),0)}static newUnknownDocument(e,t){return new r(e,3,t,j.min(),j.min(),Fe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Fe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Fe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof r&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new r(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var Wt=class{constructor(e,t){this.position=e,this.inclusive=t}};function dm(r,e,t){let n=0;for(let i=0;i<r.position.length;i++){let s=e[i],o=r.position[i];if(s.field.isKeyField()?n=x.comparator(x.fromName(o.referenceValue),t.key):n=Gt(o,t.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function fm(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!ot(r.position[t],e.position[t]))return!1;return!0}var Rr=class{constructor(e,t="asc"){this.field=e,this.dir=t}};function OE(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}var Qo=class{},Q=class r extends Qo{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new al(e,t,n):t==="array-contains"?new ll(e,n):t==="in"?new Jo(e,n):t==="not-in"?new hl(e,n):t==="array-contains-any"?new dl(e,n):new r(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new cl(e,n):new ul(e,n)}matches(e){let t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Gt(t,this.value)):t!==null&&$t(this.value)===$t(t)&&this.matchesComparison(Gt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return L(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},ee=class r extends Qo{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new r(e,t)}matches(e){return Pr(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}};function Pr(r){return r.op==="and"}function sl(r){return r.op==="or"}function Qh(r){return xg(r)&&Pr(r)}function xg(r){for(let e of r.filters)if(e instanceof ee)return!1;return!0}function ol(r){if(r instanceof Q)return r.field.canonicalString()+r.op.toString()+Sr(r.value);if(Qh(r))return r.filters.map(e=>ol(e)).join(",");{let e=r.filters.map(t=>ol(t)).join(",");return`${r.op}(${e})`}}function Lg(r,e){return r instanceof Q?function(n,i){return i instanceof Q&&n.op===i.op&&n.field.isEqual(i.field)&&ot(n.value,i.value)}(r,e):r instanceof ee?function(n,i){return i instanceof ee&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,o,c)=>s&&Lg(o,i.filters[c]),!0):!1}(r,e):void L(19439)}function Mg(r,e){let t=r.filters.concat(e);return ee.create(t,r.op)}function Fg(r){return r instanceof Q?function(t){return`${t.field.canonicalString()} ${t.op} ${Sr(t.value)}`}(r):r instanceof ee?function(t){return t.op.toString()+" {"+t.getFilters().map(Fg).join(" ,")+"}"}(r):"Filter"}var al=class extends Q{constructor(e,t,n){super(e,t,n),this.key=x.fromName(n.referenceValue)}matches(e){let t=x.comparator(e.key,this.key);return this.matchesComparison(t)}},cl=class extends Q{constructor(e,t){super(e,"in",t),this.keys=Ug("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}},ul=class extends Q{constructor(e,t){super(e,"not-in",t),this.keys=Ug("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}};function Ug(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>x.fromName(n.referenceValue))}var ll=class extends Q{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return es(t)&&Zi(t.arrayValue,this.value)}},Jo=class extends Q{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return t!==null&&Zi(this.value.arrayValue,t)}},hl=class extends Q{constructor(e,t){super(e,"not-in",t)}matches(e){if(Zi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Zi(this.value.arrayValue,t)}},dl=class extends Q{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!es(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>Zi(this.value.arrayValue,n))}};var fl=class{constructor(e,t=null,n=[],i=[],s=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=o,this.endAt=c,this.Pe=null}};function pl(r,e=null,t=[],n=[],i=null,s=null,o=null){return new fl(r,e,t,n,i,s,o)}function Cn(r){let e=F(r);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>ol(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(s){return s.field.canonicalString()+s.dir}(n)).join(","),Ua(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>Sr(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>Sr(n)).join(",")),e.Pe=t}return e.Pe}function ps(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!OE(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Lg(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!fm(r.startAt,e.startAt)&&fm(r.endAt,e.endAt)}function Yo(r){return x.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Xo(r,e){return r.filters.filter(t=>t instanceof Q&&t.field.isEqual(e))}function pm(r,e,t){let n=Oo,i=!0;for(let s of Xo(r,e)){let o=Oo,c=!0;switch(s.op){case"<":case"<=":o=NE(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,c=!1;break;case"!=":case"not-in":o=Oo}lm({value:n,inclusive:i},{value:o,inclusive:c})<0&&(n=o,i=c)}if(t!==null){for(let s=0;s<r.orderBy.length;++s)if(r.orderBy[s].field.isEqual(e)){let o=t.position[s];lm({value:n,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(n=o,i=t.inclusive);break}}return{value:n,inclusive:i}}function mm(r,e,t){let n=Ut,i=!0;for(let s of Xo(r,e)){let o=Ut,c=!0;switch(s.op){case">=":case">":o=kE(s.value),c=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,c=!1;break;case"!=":case"not-in":o=Ut}hm({value:n,inclusive:i},{value:o,inclusive:c})>0&&(n=o,i=c)}if(t!==null){for(let s=0;s<r.orderBy.length;++s)if(r.orderBy[s].field.isEqual(e)){let o=t.position[s];hm({value:n,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(n=o,i=t.inclusive);break}}return{value:n,inclusive:i}}var Cr=class{constructor(e,t=null,n=[],i=[],s=null,o="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=o,this.startAt=c,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}};function Bg(r,e,t,n,i,s,o,c){return new Cr(r,e,t,n,i,s,o,c)}function Jh(r){return new Cr(r)}function gm(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function VE(r){return r.collectionGroup!==null}function Ui(r){let e=F(r);if(e.Te===null){e.Te=[];let t=new Set;for(let s of e.explicitOrderBy)e.Te.push(s),t.add(s.field.canonicalString());let n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new te(ge.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.Te.push(new Rr(s,n))}),t.has(ge.keyField().canonicalString())||e.Te.push(new Rr(ge.keyField(),n))}return e.Te}function Be(r){let e=F(r);return e.Ie||(e.Ie=xE(e,Ui(r))),e.Ie}function xE(r,e){if(r.limitType==="F")return pl(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(i=>{let s=i.dir==="desc"?"asc":"desc";return new Rr(i.field,s)});let t=r.endAt?new Wt(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Wt(r.startAt.position,r.startAt.inclusive):null;return pl(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function ml(r,e,t){return new Cr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Ga(r,e){return ps(Be(r),Be(e))&&r.limitType===e.limitType}function qg(r){return`${Cn(Be(r))}|lt:${r.limitType}`}function or(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(i=>Fg(i)).join(", ")}]`),Ua(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>Sr(i)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>Sr(i)).join(",")),`Target(${n})`}(Be(r))}; limitType=${r.limitType})`}function ms(r,e){return e.isFoundDocument()&&function(n,i){let s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):x.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(r,e)&&function(n,i){for(let s of Ui(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(r,e)&&function(n,i){for(let s of n.filters)if(!s.matches(i))return!1;return!0}(r,e)&&function(n,i){return!(n.startAt&&!function(o,c,u){let h=dm(o,c,u);return o.inclusive?h<=0:h<0}(n.startAt,Ui(n),i)||n.endAt&&!function(o,c,u){let h=dm(o,c,u);return o.inclusive?h>=0:h>0}(n.endAt,Ui(n),i))}(r,e)}function jg(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function zg(r){return(e,t)=>{let n=!1;for(let i of Ui(r)){let s=LE(i,e,t);if(s!==0)return s;n=n||i.field.isKeyField()}return 0}}function LE(r,e,t){let n=r.field.isKeyField()?x.comparator(e.key,t.key):function(s,o,c){let u=o.data.field(s),h=c.data.field(s);return u!==null&&h!==null?Gt(u,h):L(42886)}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return L(19790,{direction:r.dir})}}var Ye=class{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(let[i,s]of n)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){let n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Mn(this.inner,(t,n)=>{for(let[i,s]of n)e(i,s)})}isEmpty(){return Sg(this.inner)}size(){return this.innerSize}};var ME=new ie(x.comparator);function Ue(){return ME}var $g=new ie(x.comparator);function Oi(...r){let e=$g;for(let t of r)e=e.insert(t.key,t);return e}function Gg(r){let e=$g;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function it(){return Bi()}function Wg(){return Bi()}function Bi(){return new Ye(r=>r.toString(),(r,e)=>r.isEqual(e))}var FE=new ie(x.comparator),UE=new te(x.comparator);function K(...r){let e=UE;for(let t of r)e=e.add(t);return e}var BE=new te(z);function Yh(){return BE}function Xh(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wi(e)?"-0":e}}function Kg(r){return{integerValue:""+r}}function qE(r,e){return mg(e)?Kg(e):Xh(r,e)}var Dr=class{constructor(){this._=void 0}};function jE(r,e,t){return r instanceof Dn?function(i,s){let o={fields:{[Pg]:{stringValue:Rg},[Dg]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Gh(s)&&(s=za(s)),s&&(o.fields[Cg]=s),{mapValue:o}}(t,e):r instanceof Kt?Qg(r,e):r instanceof Ht?Jg(r,e):function(i,s){let o=Hg(i,s),c=_m(o)+_m(i.Ee);return il(o)&&il(i.Ee)?Kg(c):Xh(i.serializer,c)}(r,e)}function zE(r,e,t){return r instanceof Kt?Qg(r,e):r instanceof Ht?Jg(r,e):t}function Hg(r,e){return r instanceof Nn?function(n){return il(n)||function(s){return!!s&&"doubleValue"in s}(n)}(e)?e:{integerValue:0}:null}var Dn=class extends Dr{},Kt=class extends Dr{constructor(e){super(),this.elements=e}};function Qg(r,e){let t=Yg(e);for(let n of r.elements)t.some(i=>ot(i,n))||t.push(n);return{arrayValue:{values:t}}}var Ht=class extends Dr{constructor(e){super(),this.elements=e}};function Jg(r,e){let t=Yg(e);for(let n of r.elements)t=t.filter(i=>!ot(i,n));return{arrayValue:{values:t}}}var Nn=class extends Dr{constructor(e,t){super(),this.serializer=e,this.Ee=t}};function _m(r){return se(r.integerValue||r.doubleValue)}function Yg(r){return es(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}var gl=class{constructor(e,t){this.field=e,this.transform=t}};function $E(r,e){return r.field.isEqual(e.field)&&function(n,i){return n instanceof Kt&&i instanceof Kt||n instanceof Ht&&i instanceof Ht?gr(n.elements,i.elements,ot):n instanceof Nn&&i instanceof Nn?ot(n.Ee,i.Ee):n instanceof Dn&&i instanceof Dn}(r.transform,e.transform)}var _l=class{constructor(e,t){this.version=e,this.transformResults=t}},Je=class r{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new r}static exists(e){return new r(void 0,e)}static updateTime(e){return new r(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function Lo(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}var Nr=class{};function Xg(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new ts(r.key,Je.none()):new Qt(r.key,r.data,Je.none());{let t=r.data,n=Fe.empty(),i=new te(ge.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?n.delete(s):n.set(s,o),i=i.add(s)}return new at(r.key,n,new Qe(i.toArray()),Je.none())}}function GE(r,e,t){r instanceof Qt?function(i,s,o){let c=i.value.clone(),u=vm(i.fieldTransforms,s,o.transformResults);c.setAll(u),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(r,e,t):r instanceof at?function(i,s,o){if(!Lo(i.precondition,s))return void s.convertToUnknownDocument(o.version);let c=vm(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Zg(i)),u.setAll(c),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(r,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function qi(r,e,t,n){return r instanceof Qt?function(s,o,c,u){if(!Lo(s.precondition,o))return c;let h=s.value.clone(),f=Im(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(r,e,t,n):r instanceof at?function(s,o,c,u){if(!Lo(s.precondition,o))return c;let h=Im(s.fieldTransforms,u,o),f=o.data;return f.setAll(Zg(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(r,e,t,n):function(s,o,c){return Lo(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(r,e,t)}function WE(r,e){let t=null;for(let n of r.fieldTransforms){let i=e.data.field(n.field),s=Hg(n.transform,i||null);s!=null&&(t===null&&(t=Fe.empty()),t.set(n.field,s))}return t||null}function ym(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&gr(n,i,(s,o)=>$E(s,o))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}var Qt=class extends Nr{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}},at=class extends Nr{constructor(e,t,n,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}};function Zg(r){let e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){let n=r.data.field(t);e.set(t,n)}}),e}function vm(r,e,t){let n=new Map;q(r.length===t.length,32656,{Ae:t.length,Re:r.length});for(let i=0;i<t.length;i++){let s=r[i],o=s.transform,c=e.data.field(s.field);n.set(s.field,zE(o,c,t[i]))}return n}function Im(r,e,t){let n=new Map;for(let i of r){let s=i.transform,o=t.data.field(i.field);n.set(i.field,jE(s,o,e))}return n}var ts=class extends Nr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},Zo=class extends Nr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var ns=class{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){let s=this.mutations[i];s.key.isEqual(e.key)&&GE(s,e,n[i])}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=qi(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=qi(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=Wg();return this.mutations.forEach(i=>{let s=e.get(i.key),o=s.overlayedDocument,c=this.applyToLocalView(o,s.mutatedFields);c=t.has(i.key)?null:c;let u=Xg(o,c);u!==null&&n.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(j.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),K())}isEqual(e){return this.batchId===e.batchId&&gr(this.mutations,e.mutations,(t,n)=>ym(t,n))&&gr(this.baseMutations,e.baseMutations,(t,n)=>ym(t,n))}},yl=class r{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){q(e.mutations.length===n.length,58842,{Ve:e.mutations.length,me:n.length});let i=function(){return FE}(),s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,n[o].version);return new r(e,t,n,i)}};var rs=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};var vl=class{constructor(e,t){this.count=e,this.unchangedNames=t}};var le,J;function KE(r){switch(r){case P.OK:return L(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return L(15467,{code:r})}}function e_(r){if(r===void 0)return ue("GRPC error has no .code"),P.UNKNOWN;switch(r){case le.OK:return P.OK;case le.CANCELLED:return P.CANCELLED;case le.UNKNOWN:return P.UNKNOWN;case le.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case le.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case le.INTERNAL:return P.INTERNAL;case le.UNAVAILABLE:return P.UNAVAILABLE;case le.UNAUTHENTICATED:return P.UNAUTHENTICATED;case le.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case le.NOT_FOUND:return P.NOT_FOUND;case le.ALREADY_EXISTS:return P.ALREADY_EXISTS;case le.PERMISSION_DENIED:return P.PERMISSION_DENIED;case le.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case le.ABORTED:return P.ABORTED;case le.OUT_OF_RANGE:return P.OUT_OF_RANGE;case le.UNIMPLEMENTED:return P.UNIMPLEMENTED;case le.DATA_LOSS:return P.DATA_LOSS;default:return L(39323,{code:r})}}(J=le||(le={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";var wm=null;var HE=new yt([4294967295,4294967295],0);function Em(r){let e=ag().encode(r),t=new Pu;return t.update(e),new Uint8Array(t.digest())}function Tm(r){let e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new yt([t,n],0),new yt([i,s],0)]}var Il=class r{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new wn(`Invalid padding: ${t}`);if(n<0)throw new wn(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new wn(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new wn(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=yt.fromNumber(this.fe)}pe(e,t,n){let i=e.add(t.multiply(yt.fromNumber(n)));return i.compare(HE)===1&&(i=new yt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;let t=Em(e),[n,i]=Tm(t);for(let s=0;s<this.hashCount;s++){let o=this.pe(n,i,s);if(!this.ye(o))return!1}return!0}static create(e,t,n){let i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new r(s,i,t);return n.forEach(c=>o.insert(c)),o}insert(e){if(this.fe===0)return;let t=Em(e),[n,i]=Tm(t);for(let s=0;s<this.hashCount;s++){let o=this.pe(n,i,s);this.we(o)}}we(e){let t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}},wn=class extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};var is=class r{constructor(e,t,n,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let i=new Map;return i.set(e,ss.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new r(j.min(),i,new ie(z),Ue(),K())}},ss=class r{constructor(e,t,n,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new r(n,t,K(),K(),K())}};var fr=class{constructor(e,t,n,i){this.Se=e,this.removedTargetIds=t,this.key=n,this.be=i}},ea=class{constructor(e,t){this.targetId=e,this.De=t}},ta=class{constructor(e,t,n=pe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}},na=class{constructor(){this.ve=0,this.Ce=Am(),this.Fe=pe.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=K(),t=K(),n=K();return this.Ce.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:L(38017,{changeType:s})}}),new ss(this.Fe,this.Me,e,t,n)}ke(){this.xe=!1,this.Ce=Am()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,q(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}},wl=class{constructor(e){this.We=e,this.Ge=new Map,this.ze=Ue(),this.je=So(),this.Je=So(),this.He=new ie(z)}Ye(e){for(let t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(let t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{let n=this.tt(t);switch(e.state){case 0:this.nt(t)&&n.Be(e.resumeToken);break;case 1:n.Ue(),n.Oe||n.ke(),n.Be(e.resumeToken);break;case 2:n.Ue(),n.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(n.Ke(),n.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),n.Be(e.resumeToken));break;default:L(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((n,i)=>{this.nt(i)&&t(i)})}it(e){let t=e.targetId,n=e.De.count,i=this.st(t);if(i){let s=i.target;if(Yo(s))if(n===0){let o=new x(s.path);this.Xe(t,o,we.newNoDocument(o,j.min()))}else q(n===1,20013,{expectedCount:n});else{let o=this.ot(t);if(o!==n){let c=this._t(e),u=c?this.ut(c,e,o):1;if(u!==0){this.rt(t);let h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,h)}wm==null||wm.ct(function(f,m,_,S,D){var k,N,$,B,M,W;let Y={localCacheCount:f,existenceFilterCount:m.count,databaseId:_.database,projectId:_.projectId},G=m.unchangedNames;return G&&(Y.bloomFilter={applied:D===0,hashCount:(k=G==null?void 0:G.hashCount)!==null&&k!==void 0?k:0,bitmapLength:(B=($=(N=G==null?void 0:G.bits)===null||N===void 0?void 0:N.bitmap)===null||$===void 0?void 0:$.length)!==null&&B!==void 0?B:0,padding:(W=(M=G==null?void 0:G.bits)===null||M===void 0?void 0:M.padding)!==null&&W!==void 0?W:0,mightContain:I=>{var g;return(g=S==null?void 0:S.mightContain(I))!==null&&g!==void 0&&g}}),Y}(o,e.De,this.We.lt(),c,u))}}}}_t(e){let t=e.De.unchangedNames;if(!t||!t.bits)return null;let{bits:{bitmap:n="",padding:i=0},hashCount:s=0}=t,o,c;try{o=Tt(n).toUint8Array()}catch(u){if(u instanceof Ho)return wt("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Il(o,i,s)}catch(u){return wt(u instanceof wn?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.fe===0?null:c}ut(e,t,n){return t.De.count===n-this.ht(e,t.targetId)?0:2}ht(e,t){let n=this.We.getRemoteKeysForTarget(t),i=0;return n.forEach(s=>{let o=this.We.lt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.Xe(t,s,null),i++)}),i}Pt(e){let t=new Map;this.Ge.forEach((s,o)=>{let c=this.st(o);if(c){if(s.current&&Yo(c.target)){let u=new x(c.target.path);this.Tt(u).has(o)||this.It(o,u)||this.Xe(o,u,we.newNoDocument(u,e))}s.Ne&&(t.set(o,s.Le()),s.ke())}});let n=K();this.Je.forEach((s,o)=>{let c=!0;o.forEachWhile(u=>{let h=this.st(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(s))}),this.ze.forEach((s,o)=>o.setReadTime(e));let i=new is(e,t,this.He,this.ze,n);return this.ze=Ue(),this.je=So(),this.Je=So(),this.He=new ie(z),i}Ze(e,t){if(!this.nt(e))return;let n=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,n),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,n){if(!this.nt(e))return;let i=this.tt(e);this.It(e,t)?i.qe(t,1):i.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),n&&(this.ze=this.ze.insert(t,n))}removeTarget(e){this.Ge.delete(e)}ot(e){let t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new na,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new te(z),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new te(z),this.je=this.je.insert(e,t)),t}nt(e){let t=this.st(e)!==null;return t||C("WatchChangeAggregator","Detected inactive target",e),t}st(e){let t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new na),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}};function So(){return new ie(x.comparator)}function Am(){return new ie(x.comparator)}var QE={asc:"ASCENDING",desc:"DESCENDING"},JE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},YE={and:"AND",or:"OR"},El=class{constructor(e,t){this.databaseId=e,this.useProto3Json=t}};function Tl(r,e){return r.useProto3Json||Ua(e)?e:{value:e}}function kr(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function t_(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function XE(r,e){return kr(r,e.toTimestamp())}function Ne(r){return q(!!r,49232),j.fromTimestamp(function(t){let n=Et(t);return new oe(n.seconds,n.nanos)}(r))}function Zh(r,e){return Al(r,e).canonicalString()}function Al(r,e){let t=function(i){return new Z(["projects",i.projectId,"databases",i.database])}(r).child("documents");return e===void 0?t:t.child(e)}function n_(r){let e=Z.fromString(r);return q(h_(e),10190,{key:e.toString()}),e}function ra(r,e){return Zh(r.databaseId,e.path)}function bn(r,e){let t=n_(e);if(t.get(1)!==r.databaseId.projectId)throw new V(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new V(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new x(s_(t))}function r_(r,e){return Zh(r.databaseId,e)}function i_(r){let e=n_(r);return e.length===4?Z.emptyPath():s_(e)}function bl(r){return new Z(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function s_(r){return q(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function bm(r,e,t){return{name:ra(r,e),fields:t.value.mapValue.fields}}function ZE(r,e,t){let n=bn(r,e.name),i=Ne(e.updateTime),s=e.createTime?Ne(e.createTime):j.min(),o=new Fe({mapValue:{fields:e.fields}}),c=we.newFoundDocument(n,i,s,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function eT(r,e){let t;if("targetChange"in e){e.targetChange;let n=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:L(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(q(f===void 0||typeof f=="string",58123),pe.fromBase64String(f||"")):(q(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),pe.fromUint8Array(f||new Uint8Array))}(r,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){let f=h.code===void 0?P.UNKNOWN:e_(h.code);return new V(f,h.message||"")}(o);t=new ta(n,i,s,c||null)}else if("documentChange"in e){e.documentChange;let n=e.documentChange;n.document,n.document.name,n.document.updateTime;let i=bn(r,n.document.name),s=Ne(n.document.updateTime),o=n.document.createTime?Ne(n.document.createTime):j.min(),c=new Fe({mapValue:{fields:n.document.fields}}),u=we.newFoundDocument(i,s,o,c),h=n.targetIds||[],f=n.removedTargetIds||[];t=new fr(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;let n=e.documentDelete;n.document;let i=bn(r,n.document),s=n.readTime?Ne(n.readTime):j.min(),o=we.newNoDocument(i,s),c=n.removedTargetIds||[];t=new fr([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;let n=e.documentRemove;n.document;let i=bn(r,n.document),s=n.removedTargetIds||[];t=new fr([],s,i,null)}else{if(!("filter"in e))return L(11601,{At:e});{e.filter;let n=e.filter;n.targetId;let{count:i=0,unchangedNames:s}=n,o=new vl(i,s),c=n.targetId;t=new ea(c,o)}}return t}function ia(r,e){let t;if(e instanceof Qt)t={update:bm(r,e.key,e.value)};else if(e instanceof ts)t={delete:ra(r,e.key)};else if(e instanceof at)t={update:bm(r,e.key,e.data),updateMask:oT(e.fieldMask)};else{if(!(e instanceof Zo))return L(16599,{Rt:e.type});t={verify:ra(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(s,o){let c=o.transform;if(c instanceof Dn)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Kt)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ht)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Nn)return{fieldPath:o.field.canonicalString(),increment:c.Ee};throw L(20930,{transform:o.transform})}(0,n))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:XE(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:L(27497)}(r,e.precondition)),t}function Sl(r,e){let t=e.currentDocument?function(s){return s.updateTime!==void 0?Je.updateTime(Ne(s.updateTime)):s.exists!==void 0?Je.exists(s.exists):Je.none()}(e.currentDocument):Je.none(),n=e.updateTransforms?e.updateTransforms.map(i=>function(o,c){let u=null;if("setToServerValue"in c)q(c.setToServerValue==="REQUEST_TIME",16630,{proto:c}),u=new Dn;else if("appendMissingElements"in c){let f=c.appendMissingElements.values||[];u=new Kt(f)}else if("removeAllFromArray"in c){let f=c.removeAllFromArray.values||[];u=new Ht(f)}else"increment"in c?u=new Nn(o,c.increment):L(16584,{proto:c});let h=ge.fromServerFormat(c.fieldPath);return new gl(h,u)}(r,i)):[];if(e.update){e.update.name;let i=bn(r,e.update.name),s=new Fe({mapValue:{fields:e.update.fields}});if(e.updateMask){let o=function(u){let h=u.fieldPaths||[];return new Qe(h.map(f=>ge.fromServerFormat(f)))}(e.updateMask);return new at(i,s,o,t,n)}return new Qt(i,s,t,n)}if(e.delete){let i=bn(r,e.delete);return new ts(i,t)}if(e.verify){let i=bn(r,e.verify);return new Zo(i,t)}return L(1463,{proto:e})}function tT(r,e){return r&&r.length>0?(q(e!==void 0,14353),r.map(t=>function(i,s){let o=i.updateTime?Ne(i.updateTime):Ne(s);return o.isEqual(j.min())&&(o=Ne(s)),new _l(o,i.transformResults||[])}(t,e))):[]}function o_(r,e){return{documents:[r_(r,e.path)]}}function a_(r,e){let t={structuredQuery:{}},n=e.path,i;e.collectionGroup!==null?(i=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=r_(r,i);let s=function(h){if(h.length!==0)return l_(ee.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);let o=function(h){if(h.length!==0)return h.map(f=>function(_){return{field:ar(_.field),direction:rT(_.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);let c=Tl(r,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{Vt:t,parent:i}}function c_(r){let e=i_(r.parent),t=r.structuredQuery,n=t.from?t.from.length:0,i=null;if(n>0){q(n===1,65062);let f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(m){let _=u_(m);return _ instanceof ee&&Qh(_)?_.getFilters():[_]}(t.where));let o=[];t.orderBy&&(o=function(m){return m.map(_=>function(D){return new Rr(cr(D.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(_))}(t.orderBy));let c=null;t.limit&&(c=function(m){let _;return _=typeof m=="object"?m.value:m,Ua(_)?null:_}(t.limit));let u=null;t.startAt&&(u=function(m){let _=!!m.before,S=m.values||[];return new Wt(S,_)}(t.startAt));let h=null;return t.endAt&&(h=function(m){let _=!m.before,S=m.values||[];return new Wt(S,_)}(t.endAt)),Bg(e,i,o,s,c,"F",u,h)}function nT(r,e){let t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function u_(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":let n=cr(t.unaryFilter.field);return Q.create(n,"==",{doubleValue:NaN});case"IS_NULL":let i=cr(t.unaryFilter.field);return Q.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let s=cr(t.unaryFilter.field);return Q.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let o=cr(t.unaryFilter.field);return Q.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return L(61313);default:return L(60726)}}(r):r.fieldFilter!==void 0?function(t){return Q.create(cr(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return L(58110);default:return L(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return ee.create(t.compositeFilter.filters.map(n=>u_(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L(1026)}}(t.compositeFilter.op))}(r):L(30097,{filter:r})}function rT(r){return QE[r]}function iT(r){return JE[r]}function sT(r){return YE[r]}function ar(r){return{fieldPath:r.canonicalString()}}function cr(r){return ge.fromServerFormat(r.fieldPath)}function l_(r){return r instanceof Q?function(t){if(t.op==="=="){if(um(t.value))return{unaryFilter:{field:ar(t.field),op:"IS_NAN"}};if(cm(t.value))return{unaryFilter:{field:ar(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(um(t.value))return{unaryFilter:{field:ar(t.field),op:"IS_NOT_NAN"}};if(cm(t.value))return{unaryFilter:{field:ar(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ar(t.field),op:iT(t.op),value:t.value}}}(r):r instanceof ee?function(t){let n=t.getFilters().map(i=>l_(i));return n.length===1?n[0]:{compositeFilter:{op:sT(t.op),filters:n}}}(r):L(54877,{filter:r})}function oT(r){let e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function h_(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}var Or=class r{constructor(e,t,n,i,s=j.min(),o=j.min(),c=pe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new r(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new r(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}};var sa=class{constructor(e){this.gt=e}};function aT(r,e){let t;if(e.document)t=ZE(r.gt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){let n=x.fromSegments(e.noDocument.path),i=On(e.noDocument.readTime);t=we.newNoDocument(n,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return L(56709);{let n=x.fromSegments(e.unknownDocument.path),i=On(e.unknownDocument.version);t=we.newUnknownDocument(n,i)}}return e.readTime&&t.setReadTime(function(i){let s=new oe(i[0],i[1]);return j.fromTimestamp(s)}(e.readTime)),t}function Sm(r,e){let t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:oa(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=function(s,o){return{name:ra(s,o.key),fields:o.data.value.mapValue.fields,updateTime:kr(s,o.version.toTimestamp()),createTime:kr(s,o.createTime.toTimestamp())}}(r.gt,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:kn(e.version)};else{if(!e.isUnknownDocument())return L(57904,{document:e});n.unknownDocument={path:t.path.toArray(),version:kn(e.version)}}return n}function oa(r){let e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function kn(r){let e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function On(r){let e=new oe(r.seconds,r.nanoseconds);return j.fromTimestamp(e)}function _n(r,e){let t=(e.baseMutations||[]).map(s=>Sl(r.gt,s));for(let s=0;s<e.mutations.length-1;++s){let o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){let c=e.mutations[s+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}let n=e.mutations.map(s=>Sl(r.gt,s)),i=oe.fromMillis(e.localWriteTimeMs);return new ns(e.batchId,i,t,n)}function Vi(r){let e=On(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?On(r.lastLimboFreeSnapshotVersion):j.min(),n;return n=function(s){return s.documents!==void 0}(r.query)?function(s){let o=s.documents.length;return q(o===1,1966,{count:o}),Be(Jh(i_(s.documents[0])))}(r.query):function(s){return Be(c_(s))}(r.query),new Or(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,pe.fromBase64String(r.resumeToken))}function d_(r,e){let t=kn(e.snapshotVersion),n=kn(e.lastLimboFreeSnapshotVersion),i;i=Yo(e.target)?o_(r.gt,e.target):a_(r.gt,e.target).Vt;let s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Cn(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:i}}function f_(r){let e=c_({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?ml(e,e.limit,"L"):e}function Vu(r,e){return new rs(e.largestBatchId,Sl(r.gt,e.overlayMutation))}function Rm(r,e){let t=e.path.lastSegment();return[r,Pe(e.path.popLast()),t]}function Pm(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:kn(n.readTime),documentKey:Pe(n.documentKey.path),largestBatchId:n.largestBatchId}}var Rl=class{getBundleMetadata(e,t){return Cm(e).get(t).next(n=>{if(n)return function(s){return{id:s.bundleId,createTime:On(s.createTime),version:s.version}}(n)})}saveBundleMetadata(e,t){return Cm(e).put(function(i){return{bundleId:i.id,createTime:kn(Ne(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return Dm(e).get(t).next(n=>{if(n)return function(s){return{name:s.name,query:f_(s.bundledQuery),readTime:On(s.readTime)}}(n)})}saveNamedQuery(e,t){return Dm(e).put(function(i){return{name:i.name,readTime:kn(Ne(i.readTime)),bundledQuery:i.bundledQuery}}(t))}};function Cm(r){return _e(r,Ba)}function Dm(r){return _e(r,qa)}var aa=class r{constructor(e,t){this.serializer=e,this.userId=t}static yt(e,t){let n=t.uid||"";return new r(e,n)}getOverlay(e,t){return Ci(e).get(Rm(this.userId,t)).next(n=>n?Vu(this.serializer,n):null)}getOverlays(e,t){let n=it();return b.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&n.set(i,s)})).next(()=>n)}saveOverlays(e,t,n){let i=[];return n.forEach((s,o)=>{let c=new rs(t,o);i.push(this.wt(e,c))}),b.waitFor(i)}removeOverlaysForBatchId(e,t,n){let i=new Set;t.forEach(o=>i.add(Pe(o.getCollectionPath())));let s=[];return i.forEach(o=>{let c=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);s.push(Ci(e).Y(tl,c))}),b.waitFor(s)}getOverlaysForCollection(e,t,n){let i=it(),s=Pe(t),o=IDBKeyRange.bound([this.userId,s,n],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Ci(e).j(tl,o).next(c=>{for(let u of c){let h=Vu(this.serializer,u);i.set(h.getKey(),h)}return i})}getOverlaysForCollectionGroup(e,t,n,i){let s=it(),o,c=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Ci(e).X({index:wg,range:c},(u,h,f)=>{let m=Vu(this.serializer,h);s.size()<i||m.largestBatchId===o?(s.set(m.getKey(),m),o=m.largestBatchId):f.done()}).next(()=>s)}wt(e,t){return Ci(e).put(function(i,s,o){let[c,u,h]=Rm(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:h,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:ia(i.gt,o.mutation)}}(this.serializer,this.userId,t))}};function Ci(r){return _e(r,ja)}var Pl=class{St(e){return _e(e,zh)}getSessionToken(e){return this.St(e).get("sessionToken").next(t=>{let n=t==null?void 0:t.value;return n?pe.fromUint8Array(n):pe.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.St(e).put({name:"sessionToken",value:t.toUint8Array()})}};var It=class{constructor(){}bt(e,t){this.Dt(e,t),t.vt()}Dt(e,t){if("nullValue"in e)this.Ct(t,5);else if("booleanValue"in e)this.Ct(t,10),t.Ft(e.booleanValue?1:0);else if("integerValue"in e)this.Ct(t,15),t.Ft(se(e.integerValue));else if("doubleValue"in e){let n=se(e.doubleValue);isNaN(n)?this.Ct(t,13):(this.Ct(t,15),Wi(n)?t.Ft(0):t.Ft(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Ct(t,20),typeof n=="string"&&(n=Et(n)),t.Mt(`${n.seconds||""}`),t.Ft(n.nanos||0)}else if("stringValue"in e)this.xt(e.stringValue,t),this.Ot(t);else if("bytesValue"in e)this.Ct(t,30),t.Nt(Tt(e.bytesValue)),this.Ot(t);else if("referenceValue"in e)this.Bt(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.Ct(t,45),t.Ft(n.latitude||0),t.Ft(n.longitude||0)}else"mapValue"in e?kg(e)?this.Ct(t,Number.MAX_SAFE_INTEGER):$a(e)?this.Lt(e.mapValue,t):(this.kt(e.mapValue,t),this.Ot(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Ot(t)):L(19022,{Qt:e})}xt(e,t){this.Ct(t,25),this.$t(e,t)}$t(e,t){t.Mt(e)}kt(e,t){let n=e.fields||{};this.Ct(t,55);for(let i of Object.keys(n))this.xt(i,t),this.Dt(n[i],t)}Lt(e,t){var n,i;let s=e.fields||{};this.Ct(t,53);let o=br,c=((i=(n=s[o].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.length)||0;this.Ct(t,15),t.Ft(se(c)),this.xt(o,t),this.Dt(s[o],t)}qt(e,t){let n=e.values||[];this.Ct(t,50);for(let i of n)this.Dt(i,t)}Bt(e,t){this.Ct(t,37),x.fromName(e).path.forEach(n=>{this.Ct(t,60),this.$t(n,t)})}Ct(e,t){e.Ft(t)}Ot(e){e.Ft(2)}};It.Ut=new It;var tr=255;function cT(r){if(r===0)return 8;let e=0;return r>>4||(e+=4,r<<=4),r>>6||(e+=2,r<<=2),r>>7||(e+=1),e}function Nm(r){let e=64-function(n){let i=0;for(let s=0;s<8;++s){let o=cT(255&n[s]);if(i+=o,o!==8)break}return i}(r);return Math.ceil(e/8)}var Cl=class{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Kt(e){let t=e[Symbol.iterator](),n=t.next();for(;!n.done;)this.Wt(n.value),n=t.next();this.Gt()}zt(e){let t=e[Symbol.iterator](),n=t.next();for(;!n.done;)this.jt(n.value),n=t.next();this.Jt()}Ht(e){for(let t of e){let n=t.charCodeAt(0);if(n<128)this.Wt(n);else if(n<2048)this.Wt(960|n>>>6),this.Wt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Wt(480|n>>>12),this.Wt(128|63&n>>>6),this.Wt(128|63&n);else{let i=t.codePointAt(0);this.Wt(240|i>>>18),this.Wt(128|63&i>>>12),this.Wt(128|63&i>>>6),this.Wt(128|63&i)}}this.Gt()}Yt(e){for(let t of e){let n=t.charCodeAt(0);if(n<128)this.jt(n);else if(n<2048)this.jt(960|n>>>6),this.jt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.jt(480|n>>>12),this.jt(128|63&n>>>6),this.jt(128|63&n);else{let i=t.codePointAt(0);this.jt(240|i>>>18),this.jt(128|63&i>>>12),this.jt(128|63&i>>>6),this.jt(128|63&i)}}this.Jt()}Zt(e){let t=this.Xt(e),n=Nm(t);this.en(1+n),this.buffer[this.position++]=255&n;for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=255&t[i]}tn(e){let t=this.Xt(e),n=Nm(t);this.en(1+n),this.buffer[this.position++]=~(255&n);for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}nn(){this.rn(tr),this.rn(255)}sn(){this._n(tr),this._n(255)}reset(){this.position=0}seed(e){this.en(e.length),this.buffer.set(e,this.position),this.position+=e.length}an(){return this.buffer.slice(0,this.position)}Xt(e){let t=function(s){let o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let i=1;i<t.length;++i)t[i]^=n?255:0;return t}Wt(e){let t=255&e;t===0?(this.rn(0),this.rn(255)):t===tr?(this.rn(tr),this.rn(0)):this.rn(t)}jt(e){let t=255&e;t===0?(this._n(0),this._n(255)):t===tr?(this._n(tr),this._n(0)):this._n(e)}Gt(){this.rn(0),this.rn(1)}Jt(){this._n(0),this._n(1)}rn(e){this.en(1),this.buffer[this.position++]=e}_n(e){this.en(1),this.buffer[this.position++]=~e}en(e){let t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);let i=new Uint8Array(n);i.set(this.buffer),this.buffer=i}},Dl=class{constructor(e){this.un=e}Nt(e){this.un.Kt(e)}Mt(e){this.un.Ht(e)}Ft(e){this.un.Zt(e)}vt(){this.un.nn()}},Nl=class{constructor(e){this.un=e}Nt(e){this.un.zt(e)}Mt(e){this.un.Yt(e)}Ft(e){this.un.tn(e)}vt(){this.un.sn()}},yn=class{constructor(){this.un=new Cl,this.cn=new Dl(this.un),this.ln=new Nl(this.un)}seed(e){this.un.seed(e)}hn(e){return e===0?this.cn:this.ln}an(){return this.un.an()}reset(){this.un.reset()}};var vn=class r{constructor(e,t,n,i){this.Pn=e,this.Tn=t,this.In=n,this.dn=i}En(){let e=this.dn.length,t=e===0||this.dn[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.dn,0),t!==e?n.set([0],this.dn.length):++n[n.length-1],new r(this.Pn,this.Tn,this.In,n)}An(e,t,n){return{indexId:this.Pn,uid:e,arrayValue:Mo(this.In),directionalValue:Mo(this.dn),orderedDocumentKey:Mo(t),documentKey:n.path.toArray()}}Rn(e,t,n){let i=this.An(e,t,n);return[i.indexId,i.uid,i.arrayValue,i.directionalValue,i.orderedDocumentKey,i.documentKey]}};function xt(r,e){let t=r.Pn-e.Pn;return t!==0?t:(t=km(r.In,e.In),t!==0?t:(t=km(r.dn,e.dn),t!==0?t:x.comparator(r.Tn,e.Tn)))}function km(r,e){for(let t=0;t<r.length&&t<e.length;++t){let n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}function Mo(r){return Dc()?function(t){let n="";for(let i=0;i<t.length;i++)n+=String.fromCharCode(t[i]);return n}(r):r}function Om(r){return typeof r!="string"?r:function(t){let n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}(r)}var ca=class{constructor(e){this.Vn=new te((t,n)=>ge.comparator(t.field,n.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.mn=e.orderBy,this.fn=[];for(let t of e.filters){let n=t;n.isInequality()?this.Vn=this.Vn.add(n):this.fn.push(n)}}get gn(){return this.Vn.size>1}pn(e){if(q(e.collectionGroup===this.collectionId,49279),this.gn)return!1;let t=Hu(e);if(t!==void 0&&!this.yn(t))return!1;let n=pn(e),i=new Set,s=0,o=0;for(;s<n.length&&this.yn(n[s]);++s)i=i.add(n[s].fieldPath.canonicalString());if(s===n.length)return!0;if(this.Vn.size>0){let c=this.Vn.getIterator().getNext();if(!i.has(c.field.canonicalString())){let u=n[s];if(!this.wn(c,u)||!this.Sn(this.mn[o++],u))return!1}++s}for(;s<n.length;++s){let c=n[s];if(o>=this.mn.length||!this.Sn(this.mn[o++],c))return!1}return!0}bn(){if(this.gn)return null;let e=new te(ge.comparator),t=[];for(let n of this.fn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new dr(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new dr(n.field,0))}for(let n of this.mn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new dr(n.field,n.dir==="asc"?0:1)));return new yr(yr.UNKNOWN_ID,this.collectionId,t,Gi.empty())}yn(e){for(let t of this.fn)if(this.wn(t,e))return!0;return!1}wn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;let n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}Sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}};function p_(r){var e,t;if(q(r instanceof Q||r instanceof ee,20012),r instanceof Q){if(r instanceof Jo){let i=((t=(e=r.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>Q.create(r.field,"==",s)))||[];return ee.create(i,"or")}return r}let n=r.filters.map(i=>p_(i));return ee.create(n,r.op)}function uT(r){if(r.getFilters().length===0)return[];let e=Vl(p_(r));return q(m_(e),7391),kl(e)||Ol(e)?[e]:e.getFilters()}function kl(r){return r instanceof Q}function Ol(r){return r instanceof ee&&Qh(r)}function m_(r){return kl(r)||Ol(r)||function(t){if(t instanceof ee&&sl(t)){for(let n of t.getFilters())if(!kl(n)&&!Ol(n))return!1;return!0}return!1}(r)}function Vl(r){if(q(r instanceof Q||r instanceof ee,34018),r instanceof Q)return r;if(r.filters.length===1)return Vl(r.filters[0]);let e=r.filters.map(n=>Vl(n)),t=ee.create(e,r.op);return t=ua(t),m_(t)?t:(q(t instanceof ee,64498),q(Pr(t),40251),q(t.filters.length>1,57927),t.filters.reduce((n,i)=>ed(n,i)))}function ed(r,e){let t;return q(r instanceof Q||r instanceof ee,38388),q(e instanceof Q||e instanceof ee,25473),t=r instanceof Q?e instanceof Q?function(i,s){return ee.create([i,s],"and")}(r,e):Vm(r,e):e instanceof Q?Vm(e,r):function(i,s){if(q(i.filters.length>0&&s.filters.length>0,48005),Pr(i)&&Pr(s))return Mg(i,s.getFilters());let o=sl(i)?i:s,c=sl(i)?s:i,u=o.filters.map(h=>ed(h,c));return ee.create(u,"or")}(r,e),ua(t)}function Vm(r,e){if(Pr(e))return Mg(e,r.getFilters());{let t=e.filters.map(n=>ed(r,n));return ee.create(t,"or")}}function ua(r){if(q(r instanceof Q||r instanceof ee,11850),r instanceof Q)return r;let e=r.getFilters();if(e.length===1)return ua(e[0]);if(xg(r))return r;let t=e.map(i=>ua(i)),n=[];return t.forEach(i=>{i instanceof Q?n.push(i):i instanceof ee&&(i.op===r.op?n.push(...i.filters):n.push(i))}),n.length===1?n[0]:ee.create(n,r.op)}var xl=class{constructor(){this.Dn=new os}addToCollectionParentIndex(e,t){return this.Dn.add(t),b.resolve()}getCollectionParents(e,t){return b.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return b.resolve()}deleteFieldIndex(e,t){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,t){return b.resolve()}getDocumentsMatchingTarget(e,t){return b.resolve(null)}getIndexType(e,t){return b.resolve(0)}getFieldIndexes(e,t){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,t){return b.resolve(ze.min())}getMinOffsetFromCollectionGroup(e,t){return b.resolve(ze.min())}updateCollectionGroup(e,t,n){return b.resolve()}updateIndexEntries(e,t){return b.resolve()}},os=class{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new te(Z.comparator),s=!i.has(n);return this.index[t]=i.add(n),s}has(e){let t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new te(Z.comparator)).toArray()}};var xm="IndexedDbIndexManager",Ro=new Uint8Array(0),Ll=class{constructor(e,t){this.databaseId=t,this.vn=new os,this.Cn=new Ye(n=>Cn(n),(n,i)=>ps(n,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.vn.has(t)){let n=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.vn.add(t)});let s={collectionId:n,parent:Pe(i)};return Lm(e).put(s)}return b.resolve()}getCollectionParents(e,t){let n=[],i=IDBKeyRange.bound([t,""],[cg(t),""],!1,!0);return Lm(e).j(i).next(s=>{for(let o of s){if(o.collectionId!==t)break;n.push(rt(o.parent))}return n})}addFieldIndex(e,t){let n=Di(e),i=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(t);delete i.indexId;let s=n.add(i);if(t.indexState){let o=rr(e);return s.next(c=>{o.put(Pm(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){let n=Di(e),i=rr(e),s=nr(e);return n.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){let t=Di(e),n=nr(e),i=rr(e);return t.Y().next(()=>n.Y()).next(()=>i.Y())}createTargetIndexes(e,t){return b.forEach(this.Fn(t),n=>this.getIndexType(e,n).next(i=>{if(i===0||i===1){let s=new ca(n).bn();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){let n=nr(e),i=!0,s=new Map;return b.forEach(this.Fn(t),o=>this.Mn(e,o).next(c=>{i&&(i=!!c),s.set(o,c)})).next(()=>{if(i){let o=K(),c=[];return b.forEach(s,(u,h)=>{C(xm,`Using index ${function(M){return`id=${M.indexId}|cg=${M.collectionGroup}|f=${M.fields.map(W=>`${W.fieldPath}:${W.kind}`).join(",")}`}(u)} to execute ${Cn(t)}`);let f=function(M,W){let Y=Hu(W);if(Y===void 0)return null;for(let G of Xo(M,Y.fieldPath))switch(G.op){case"array-contains-any":return G.value.arrayValue.values||[];case"array-contains":return[G.value]}return null}(h,u),m=function(M,W){let Y=new Map;for(let G of pn(W))for(let I of Xo(M,G.fieldPath))switch(I.op){case"==":case"in":Y.set(G.fieldPath.canonicalString(),I.value);break;case"not-in":case"!=":return Y.set(G.fieldPath.canonicalString(),I.value),Array.from(Y.values())}return null}(h,u),_=function(M,W){let Y=[],G=!0;for(let I of pn(W)){let g=I.kind===0?pm(M,I.fieldPath,M.startAt):mm(M,I.fieldPath,M.startAt);Y.push(g.value),G&&(G=g.inclusive)}return new Wt(Y,G)}(h,u),S=function(M,W){let Y=[],G=!0;for(let I of pn(W)){let g=I.kind===0?mm(M,I.fieldPath,M.endAt):pm(M,I.fieldPath,M.endAt);Y.push(g.value),G&&(G=g.inclusive)}return new Wt(Y,G)}(h,u),D=this.xn(u,h,_),k=this.xn(u,h,S),N=this.On(u,h,m),$=this.Nn(u.indexId,f,D,_.inclusive,k,S.inclusive,N);return b.forEach($,B=>n.H(B,t.limit).next(M=>{M.forEach(W=>{let Y=x.fromSegments(W.documentKey);o.has(Y)||(o=o.add(Y),c.push(Y))})}))}).next(()=>c)}return b.resolve(null)})}Fn(e){let t=this.Cn.get(e);return t||(e.filters.length===0?t=[e]:t=uT(ee.create(e.filters,"and")).map(n=>pl(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt)),this.Cn.set(e,t),t)}Nn(e,t,n,i,s,o,c){let u=(t!=null?t.length:1)*Math.max(n.length,s.length),h=u/(t!=null?t.length:1),f=[];for(let m=0;m<u;++m){let _=t?this.Bn(t[m/h]):Ro,S=this.Ln(e,_,n[m%h],i),D=this.kn(e,_,s[m%h],o),k=c.map(N=>this.Ln(e,_,N,!0));f.push(...this.createRange(S,D,k))}return f}Ln(e,t,n,i){let s=new vn(e,x.empty(),t,n);return i?s:s.En()}kn(e,t,n,i){let s=new vn(e,x.empty(),t,n);return i?s.En():s}Mn(e,t){let n=new ca(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(let c of s)n.pn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let n=2,i=this.Fn(t);return b.forEach(i,s=>this.Mn(e,s).next(o=>{o?n!==0&&o.fields.length<function(u){let h=new te(ge.comparator),f=!1;for(let m of u.filters)for(let _ of m.getFlattenedFilters())_.field.isKeyField()||(_.op==="array-contains"||_.op==="array-contains-any"?f=!0:h=h.add(_.field));for(let m of u.orderBy)m.field.isKeyField()||(h=h.add(m.field));return h.size+(f?1:0)}(s)&&(n=1):n=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&n===2?1:n)}qn(e,t){let n=new yn;for(let i of pn(e)){let s=t.data.field(i.fieldPath);if(s==null)return null;let o=n.hn(i.kind);It.Ut.bt(s,o)}return n.an()}Bn(e){let t=new yn;return It.Ut.bt(e,t.hn(0)),t.an()}Qn(e,t){let n=new yn;return It.Ut.bt(Hh(this.databaseId,t),n.hn(function(s){let o=pn(s);return o.length===0?0:o[o.length-1].kind}(e))),n.an()}On(e,t,n){if(n===null)return[];let i=[];i.push(new yn);let s=0;for(let o of pn(e)){let c=n[s++];for(let u of i)if(this.$n(t,o.fieldPath)&&es(c))i=this.Un(i,o,c);else{let h=u.hn(o.kind);It.Ut.bt(c,h)}}return this.Kn(i)}xn(e,t,n){return this.On(e,t,n.position)}Kn(e){let t=[];for(let n=0;n<e.length;++n)t[n]=e[n].an();return t}Un(e,t,n){let i=[...e],s=[];for(let o of n.arrayValue.values||[])for(let c of i){let u=new yn;u.seed(c.an()),It.Ut.bt(o,u.hn(t.kind)),s.push(u)}return s}$n(e,t){return!!e.filters.find(n=>n instanceof Q&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(e,t){let n=Di(e),i=rr(e);return(t?n.j(el,IDBKeyRange.bound(t,t)):n.j()).next(s=>{let o=[];return b.forEach(s,c=>i.get([c.indexId,this.uid]).next(u=>{o.push(function(f,m){let _=m?new Gi(m.sequenceNumber,new ze(On(m.readTime),new x(rt(m.documentKey)),m.largestBatchId)):Gi.empty(),S=f.fields.map(([D,k])=>new dr(ge.fromServerFormat(D),k));return new yr(f.indexId,f.collectionGroup,S,_)}(c,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((n,i)=>{let s=n.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:z(n.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,n){let i=Di(e),s=rr(e);return this.Wn(e).next(o=>i.j(el,IDBKeyRange.bound(t,t)).next(c=>b.forEach(c,u=>s.put(Pm(u.indexId,this.uid,o,n)))))}updateIndexEntries(e,t){let n=new Map;return b.forEach(t,(i,s)=>{let o=n.get(i.collectionGroup);return(o?b.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(c=>(n.set(i.collectionGroup,c),b.forEach(c,u=>this.Gn(e,i,u).next(h=>{let f=this.zn(s,u);return h.isEqual(f)?b.resolve():this.jn(e,s,u,h,f)}))))})}Jn(e,t,n,i){return nr(e).put(i.An(this.uid,this.Qn(n,t.key),t.key))}Hn(e,t,n,i){return nr(e).delete(i.Rn(this.uid,this.Qn(n,t.key),t.key))}Gn(e,t,n){let i=nr(e),s=new te(xt);return i.X({index:Ig,range:IDBKeyRange.only([n.indexId,this.uid,Mo(this.Qn(n,t))])},(o,c)=>{s=s.add(new vn(n.indexId,t,Om(c.arrayValue),Om(c.directionalValue)))}).next(()=>s)}zn(e,t){let n=new te(xt),i=this.qn(t,e);if(i==null)return n;let s=Hu(t);if(s!=null){let o=e.data.field(s.fieldPath);if(es(o))for(let c of o.arrayValue.values||[])n=n.add(new vn(t.indexId,e.key,this.Bn(c),i))}else n=n.add(new vn(t.indexId,e.key,Ro,i));return n}jn(e,t,n,i,s){C(xm,"Updating index entries for document '%s'",t.key);let o=[];return function(u,h,f,m,_){let S=u.getIterator(),D=h.getIterator(),k=er(S),N=er(D);for(;k||N;){let $=!1,B=!1;if(k&&N){let M=f(k,N);M<0?B=!0:M>0&&($=!0)}else k!=null?B=!0:$=!0;$?(m(N),N=er(D)):B?(_(k),k=er(S)):(k=er(S),N=er(D))}}(i,s,xt,c=>{o.push(this.Jn(e,t,n,c))},c=>{o.push(this.Hn(e,t,n,c))}),b.waitFor(o)}Wn(e){let t=1;return rr(e).X({index:vg,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((o,c)=>xt(o,c)).filter((o,c,u)=>!c||xt(o,u[c-1])!==0);let i=[];i.push(e);for(let o of n){let c=xt(o,e),u=xt(o,t);if(c===0)i[0]=e.En();else if(c>0&&u<0)i.push(o),i.push(o.En());else if(u>0)break}i.push(t);let s=[];for(let o=0;o<i.length;o+=2){if(this.Yn(i[o],i[o+1]))return[];let c=i[o].Rn(this.uid,Ro,x.empty()),u=i[o+1].Rn(this.uid,Ro,x.empty());s.push(IDBKeyRange.bound(c,u))}return s}Yn(e,t){return xt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Mm)}getMinOffset(e,t){return b.mapArray(this.Fn(t),n=>this.Mn(e,n).next(i=>i||L(44426))).next(Mm)}};function Lm(r){return _e(r,Qi)}function nr(r){return _e(r,Mi)}function Di(r){return _e(r,jh)}function rr(r){return _e(r,Li)}function Mm(r){q(r.length!==0,28825);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){let i=r[n].indexState.offset;Uh(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new ze(e.readTime,e.documentKey,t)}var Fm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},g_=41943040,Ve=class r{static withCacheSize(e){return new r(e,r.DEFAULT_COLLECTION_PERCENTILE,r.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}};function __(r,e,t){let n=r.store(He),i=r.store(Ir),s=[],o=IDBKeyRange.only(t.batchId),c=0,u=n.X({range:o},(f,m,_)=>(c++,_.delete()));s.push(u.next(()=>{q(c===1,47070,{batchId:t.batchId})}));let h=[];for(let f of t.mutations){let m=gg(e,f.key.path,t.batchId);s.push(i.delete(m)),h.push(f.key)}return b.waitFor(s).next(()=>h)}function la(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw L(14731);e=r.noDocument}return JSON.stringify(e).length}Ve.DEFAULT_COLLECTION_PERCENTILE=10,Ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ve.DEFAULT=new Ve(g_,Ve.DEFAULT_COLLECTION_PERCENTILE,Ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ve.DISABLED=new Ve(-1,0,0);var ha=class r{constructor(e,t,n,i){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=i,this.Zn={}}static yt(e,t,n,i){q(e.uid!=="",64387);let s=e.isAuthenticated()?e.uid:"";return new r(s,t,n,i)}checkEmpty(e){let t=!0,n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Lt(e).X({index:In,range:n},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,n,i){let s=ur(e),o=Lt(e);return o.add({}).next(c=>{q(typeof c=="number",49019);let u=new ns(c,t,n,i),h=function(S,D,k){let N=k.baseMutations.map(B=>ia(S.gt,B)),$=k.mutations.map(B=>ia(S.gt,B));return{userId:D,batchId:k.batchId,localWriteTimeMs:k.localWriteTime.toMillis(),baseMutations:N,mutations:$}}(this.serializer,this.userId,u),f=[],m=new te((_,S)=>z(_.canonicalString(),S.canonicalString()));for(let _ of i){let S=gg(this.userId,_.key.path,c);m=m.add(_.key.path.popLast()),f.push(o.put(h)),f.push(s.put(S,oE))}return m.forEach(_=>{f.push(this.indexManager.addToCollectionParentIndex(e,_))}),e.addOnCommittedListener(()=>{this.Zn[c]=u.keys()}),b.waitFor(f).next(()=>u)})}lookupMutationBatch(e,t){return Lt(e).get(t).next(n=>n?(q(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:t}),_n(this.serializer,n)):null)}Xn(e,t){return this.Zn[t]?b.resolve(this.Zn[t]):this.lookupMutationBatch(e,t).next(n=>{if(n){let i=n.keys();return this.Zn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){let n=t+1,i=IDBKeyRange.lowerBound([this.userId,n]),s=null;return Lt(e).X({index:In,range:i},(o,c,u)=>{c.userId===this.userId&&(q(c.batchId>=n,47524,{er:n}),s=_n(this.serializer,c)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){let t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),n=Tn;return Lt(e).X({index:In,range:t,reverse:!0},(i,s,o)=>{n=s.batchId,o.done()}).next(()=>n)}getAllMutationBatches(e){let t=IDBKeyRange.bound([this.userId,Tn],[this.userId,Number.POSITIVE_INFINITY]);return Lt(e).j(In,t).next(n=>n.map(i=>_n(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){let n=No(this.userId,t.path),i=IDBKeyRange.lowerBound(n),s=[];return ur(e).X({range:i},(o,c,u)=>{let[h,f,m]=o,_=rt(f);if(h===this.userId&&t.path.isEqual(_))return Lt(e).get(m).next(S=>{if(!S)throw L(61480,{tr:o,batchId:m});q(S.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:S.userId,batchId:m}),s.push(_n(this.serializer,S))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new te(z),i=[];return t.forEach(s=>{let o=No(this.userId,s.path),c=IDBKeyRange.lowerBound(o),u=ur(e).X({range:c},(h,f,m)=>{let[_,S,D]=h,k=rt(S);_===this.userId&&s.path.isEqual(k)?n=n.add(D):m.done()});i.push(u)}),b.waitFor(i).next(()=>this.nr(e,n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,i=n.length+1,s=No(this.userId,n),o=IDBKeyRange.lowerBound(s),c=new te(z);return ur(e).X({range:o},(u,h,f)=>{let[m,_,S]=u,D=rt(_);m===this.userId&&n.isPrefixOf(D)?D.length===i&&(c=c.add(S)):f.done()}).next(()=>this.nr(e,c))}nr(e,t){let n=[],i=[];return t.forEach(s=>{i.push(Lt(e).get(s).next(o=>{if(o===null)throw L(35274,{batchId:s});q(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:s}),n.push(_n(this.serializer,o))}))}),b.waitFor(i).next(()=>n)}removeMutationBatch(e,t){return __(e.ce,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.rr(t.batchId)}),b.forEach(n,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}rr(e){delete this.Zn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return b.resolve();let n=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return ur(e).X({range:n},(s,o,c)=>{if(s[0]===this.userId){let u=rt(s[1]);i.push(u)}else c.done()}).next(()=>{q(i.length===0,56720,{ir:i.map(s=>s.canonicalString())})})})}containsKey(e,t){return y_(e,this.userId,t)}sr(e){return v_(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:Tn,lastStreamToken:""})}};function y_(r,e,t){let n=No(e,t.path),i=n[1],s=IDBKeyRange.lowerBound(n),o=!1;return ur(r).X({range:s,Z:!0},(c,u,h)=>{let[f,m,_]=c;f===e&&m===i&&(o=!0),h.done()}).next(()=>o)}function Lt(r){return _e(r,He)}function ur(r){return _e(r,Ir)}function v_(r){return _e(r,Ki)}var Vr=class r{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new r(0)}static ur(){return new r(-1)}};var Ml=class{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.cr(e).next(t=>{let n=new Vr(t.highestTargetId);return t.highestTargetId=n.next(),this.lr(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.cr(e).next(t=>j.fromTimestamp(new oe(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.cr(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.cr(e).next(i=>(i.highestListenSequenceNumber=t,n&&(i.lastRemoteSnapshotVersion=n.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.lr(e,i)))}addTargetData(e,t){return this.hr(e,t).next(()=>this.cr(e).next(n=>(n.targetCount+=1,this.Pr(t,n),this.lr(e,n))))}updateTargetData(e,t){return this.hr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>ir(e).delete(t.targetId)).next(()=>this.cr(e)).next(n=>(q(n.targetCount>0,8065),n.targetCount-=1,this.lr(e,n)))}removeTargets(e,t,n){let i=0,s=[];return ir(e).X((o,c)=>{let u=Vi(c);u.sequenceNumber<=t&&n.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>b.waitFor(s)).next(()=>i)}forEachTarget(e,t){return ir(e).X((n,i)=>{let s=Vi(i);t(s)})}cr(e){return Um(e).get(Wo).next(t=>(q(t!==null,2888),t))}lr(e,t){return Um(e).put(Wo,t)}hr(e,t){return ir(e).put(d_(this.serializer,t))}Pr(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.cr(e).next(t=>t.targetCount)}getTargetData(e,t){let n=Cn(t),i=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]),s=null;return ir(e).X({range:i,index:yg},(o,c,u)=>{let h=Vi(c);ps(t,h.target)&&(s=h,u.done())}).next(()=>s)}addMatchingKeys(e,t,n){let i=[],s=Ft(e);return t.forEach(o=>{let c=Pe(o.path);i.push(s.put({targetId:n,path:c})),i.push(this.referenceDelegate.addReference(e,n,o))}),b.waitFor(i)}removeMatchingKeys(e,t,n){let i=Ft(e);return b.forEach(t,s=>{let o=Pe(s.path);return b.waitFor([i.delete([n,o]),this.referenceDelegate.removeReference(e,n,s)])})}removeMatchingKeysForTargetId(e,t){let n=Ft(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(i)}getMatchingKeysForTargetId(e,t){let n=IDBKeyRange.bound([t],[t+1],!1,!0),i=Ft(e),s=K();return i.X({range:n,Z:!0},(o,c,u)=>{let h=rt(o[1]),f=new x(h);s=s.add(f)}).next(()=>s)}containsKey(e,t){let n=Pe(t.path),i=IDBKeyRange.bound([n],[cg(n)],!1,!0),s=0;return Ft(e).X({index:qh,Z:!0,range:i},([o,c],u,h)=>{o!==0&&(s++,h.done())}).next(()=>s>0)}Et(e,t){return ir(e).get(t).next(n=>n?Vi(n):null)}};function ir(r){return _e(r,wr)}function Um(r){return _e(r,An)}function Ft(r){return _e(r,Er)}var Bm="LruGarbageCollector",I_=1048576;function qm([r,e],[t,n]){let i=z(r,t);return i===0?z(e,n):i}var Fl=class{constructor(e){this.Tr=e,this.buffer=new te(qm),this.Ir=0}dr(){return++this.Ir}Er(e){let t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{let n=this.buffer.last();qm(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}},da=class{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){C(Bm,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Zt(t)?C(Bm,"Ignoring IndexedDB error during garbage collection: ",t):await Xt(t)}await this.Rr(3e5)})}},Ul=class{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return b.resolve(Re.ue);let n=new Fl(t);return this.Vr.forEachTarget(e,i=>n.Er(i.sequenceNumber)).next(()=>this.Vr.gr(e,i=>n.Er(i))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Vr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(C("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(Fm)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(C("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Fm):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let n,i,s,o,c,u,h,f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(C("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(n=m,c=Date.now(),this.removeTargets(e,n,t))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,n))).next(m=>(h=Date.now(),sr()<=H.DEBUG&&C("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(c-o)+`ms
	Removed ${s} targets in `+(u-c)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}};function w_(r,e){return new Ul(r,e)}var Bl=class{constructor(e,t){this.db=e,this.garbageCollector=w_(this,t)}mr(e){let t=this.yr(e);return this.db.getTargetCache().getTargetCount(e).next(n=>t.next(i=>n+i))}yr(e){let t=0;return this.gr(e,n=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}gr(e,t){return this.wr(e,(n,i)=>t(i))}addReference(e,t,n){return Po(e,n)}removeReference(e,t,n){return Po(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Po(e,t)}Sr(e,t){return function(i,s){let o=!1;return v_(i).ee(c=>y_(i,c,s).next(u=>(u&&(o=!0),b.resolve(!u)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){let n=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[],s=0;return this.wr(e,(o,c)=>{if(c<=t){let u=this.Sr(e,o).next(h=>{if(!h)return s++,n.getEntry(e,o).next(()=>(n.removeEntry(o,j.min()),Ft(e).delete(function(m){return[0,Pe(m.path)]}(o))))});i.push(u)}}).next(()=>b.waitFor(i)).next(()=>n.apply(e)).next(()=>s)}removeTarget(e,t){let n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Po(e,t)}wr(e,t){let n=Ft(e),i,s=Re.ue;return n.X({index:qh},([o,c],{path:u,sequenceNumber:h})=>{o===0?(s!==Re.ue&&t(new x(rt(i)),s),s=h,i=u):s=Re.ue}).next(()=>{s!==Re.ue&&t(new x(rt(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}};function Po(r,e){return Ft(r).put(function(n,i){return{targetId:0,path:Pe(n.path),sequenceNumber:i}}(e,r.currentSequenceNumber))}var fa=class{constructor(){this.changes=new Ye(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,we.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return n!==void 0?b.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}};var ql=class{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return fn(e).put(n)}removeEntry(e,t,n){return fn(e).delete(function(s,o){let c=s.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],oa(o),c[c.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.br(e,n)))}getEntry(e,t){let n=we.newInvalidDocument(t);return fn(e).X({index:ko,range:IDBKeyRange.only(Ni(t))},(i,s)=>{n=this.Dr(t,s)}).next(()=>n)}vr(e,t){let n={size:0,document:we.newInvalidDocument(t)};return fn(e).X({index:ko,range:IDBKeyRange.only(Ni(t))},(i,s)=>{n={document:this.Dr(t,s),size:la(s)}}).next(()=>n)}getEntries(e,t){let n=Ue();return this.Cr(e,t,(i,s)=>{let o=this.Dr(i,s);n=n.insert(i,o)}).next(()=>n)}Fr(e,t){let n=Ue(),i=new ie(x.comparator);return this.Cr(e,t,(s,o)=>{let c=this.Dr(s,o);n=n.insert(s,c),i=i.insert(s,la(o))}).next(()=>({documents:n,Mr:i}))}Cr(e,t,n){if(t.isEmpty())return b.resolve();let i=new te($m);t.forEach(u=>i=i.add(u));let s=IDBKeyRange.bound(Ni(i.first()),Ni(i.last())),o=i.getIterator(),c=o.getNext();return fn(e).X({index:ko,range:s},(u,h,f)=>{let m=x.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;c&&$m(c,m)<0;)n(c,null),c=o.getNext();c&&c.isEqual(m)&&(n(c,h),c=o.hasNext()?o.getNext():null),c?f.G(Ni(c)):f.done()}).next(()=>{for(;c;)n(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,n,i,s){let o=t.path,c=[o.popLast().toArray(),o.lastSegment(),oa(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return fn(e).j(IDBKeyRange.bound(c,u,!0)).next(h=>{s==null||s.incrementDocumentReadCount(h.length);let f=Ue();for(let m of h){let _=this.Dr(x.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);_.isFoundDocument()&&(ms(t,_)||i.has(_.key))&&(f=f.insert(_.key,_))}return f})}getAllFromCollectionGroup(e,t,n,i){let s=Ue(),o=zm(t,n),c=zm(t,ze.max());return fn(e).X({index:_g,range:IDBKeyRange.bound(o,c,!0)},(u,h,f)=>{let m=this.Dr(x.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);s=s.insert(m.key,m),s.size===i&&f.done()}).next(()=>s)}newChangeBuffer(e){return new jl(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return jm(e).get(Zu).next(t=>(q(!!t,20021),t))}br(e,t){return jm(e).put(Zu,t)}Dr(e,t){if(t){let n=aT(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(j.min())))return n}return we.newInvalidDocument(e)}};function E_(r){return new ql(r)}var jl=class extends fa{constructor(e,t){super(),this.Or=e,this.trackRemovals=t,this.Nr=new Ye(n=>n.toString(),(n,i)=>n.isEqual(i))}applyChanges(e){let t=[],n=0,i=new te((s,o)=>z(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{let c=this.Nr.get(s);if(t.push(this.Or.removeEntry(e,s,c.readTime)),o.isValidDocument()){let u=Sm(this.Or.serializer,o);i=i.add(s.path.popLast());let h=la(u);n+=h-c.size,t.push(this.Or.addEntry(e,s,u))}else if(n-=c.size,this.trackRemovals){let u=Sm(this.Or.serializer,o.convertToNoDocument(j.min()));t.push(this.Or.addEntry(e,s,u))}}),i.forEach(s=>{t.push(this.Or.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.Or.updateMetadata(e,n)),b.waitFor(t)}getFromCache(e,t){return this.Or.vr(e,t).next(n=>(this.Nr.set(t,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(e,t){return this.Or.Fr(e,t).next(({documents:n,Mr:i})=>(i.forEach((s,o)=>{this.Nr.set(s,{size:o,readTime:n.get(s).readTime})}),n))}};function jm(r){return _e(r,Hi)}function fn(r){return _e(r,Go)}function Ni(r){let e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function zm(r,e){let t=e.documentKey.path.toArray();return[r,oa(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function $m(r,e){let t=r.path.toArray(),n=e.path.toArray(),i=0;for(let s=0;s<t.length-2&&s<n.length-2;++s)if(i=z(t[s],n[s]),i)return i;return i=z(t.length,n.length),i||(i=z(t[t.length-2],n[n.length-2]),i||z(t[t.length-1],n[n.length-1]))}var zl=class{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}};var pa=class{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(n=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(n!==null&&qi(n.mutation,i,Qe.empty(),oe.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,K()).next(()=>n))}getLocalViewOfDocuments(e,t,n=K()){let i=it();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,n).next(s=>{let o=Oi();return s.forEach((c,u)=>{o=o.insert(c,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){let n=it();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,K()))}populateOverlays(e,t,n){let i=[];return n.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,n,i){let s=Ue(),o=Bi(),c=function(){return Bi()}();return t.forEach((u,h)=>{let f=n.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof at)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),qi(f.mutation,h,f.mutation.getFieldMask(),oe.now())):o.set(h.key,Qe.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>{var m;return c.set(h,new zl(f,(m=o.get(h))!==null&&m!==void 0?m:null))}),c))}recalculateAndSaveOverlays(e,t){let n=Bi(),i=new ie((o,c)=>o-c),s=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(let c of o)c.keys().forEach(u=>{let h=t.get(u);if(h===null)return;let f=n.get(u)||Qe.empty();f=c.applyToLocalView(h,f),n.set(u,f);let m=(i.get(c.batchId)||K()).add(u);i=i.insert(c.batchId,m)})}).next(()=>{let o=[],c=i.getReverseIterator();for(;c.hasNext();){let u=c.getNext(),h=u.key,f=u.value,m=Wg();f.forEach(_=>{if(!s.has(_)){let S=Xg(t.get(_),n.get(_));S!==null&&m.set(_,S),s=s.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return b.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,i){return function(o){return x.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):VE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next(s=>{let o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-s.size):b.resolve(it()),c=_r,u=s;return o.next(h=>b.forEach(h,(f,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),s.get(f)?b.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{u=u.insert(f,_)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,K())).next(f=>({batchId:c,changes:Gg(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new x(t)).next(n=>{let i=Oi();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){let s=t.collectionGroup,o=Oi();return this.indexManager.getCollectionParents(e,s).next(c=>b.forEach(c,u=>{let h=function(m,_){return new Cr(_,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,n,i).next(f=>{f.forEach((m,_)=>{o=o.insert(m,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,i))).next(o=>{s.forEach((u,h)=>{let f=h.getKey();o.get(f)===null&&(o=o.insert(f,we.newInvalidDocument(f)))});let c=Oi();return o.forEach((u,h)=>{let f=s.get(u);f!==void 0&&qi(f.mutation,h,Qe.empty(),oe.now()),ms(t,h)&&(c=c.insert(u,h))}),c})}};var $l=class{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return b.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Ne(i.createTime)}}(t)),b.resolve()}getNamedQuery(e,t){return b.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(i){return{name:i.name,query:f_(i.bundledQuery),readTime:Ne(i.readTime)}}(t)),b.resolve()}};var Gl=class{constructor(){this.overlays=new ie(x.comparator),this.kr=new Map}getOverlay(e,t){return b.resolve(this.overlays.get(t))}getOverlays(e,t){let n=it();return b.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&n.set(i,s)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((i,s)=>{this.wt(e,t,s)}),b.resolve()}removeOverlaysForBatchId(e,t,n){let i=this.kr.get(n);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.kr.delete(n)),b.resolve()}getOverlaysForCollection(e,t,n){let i=it(),s=t.length+1,o=new x(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){let u=c.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>n&&i.set(u.getKey(),u)}return b.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let s=new ie((h,f)=>h-f),o=this.overlays.getIterator();for(;o.hasNext();){let h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>n){let f=s.get(h.largestBatchId);f===null&&(f=it(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}let c=it(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=i)););return b.resolve(c)}wt(e,t,n){let i=this.overlays.get(n.key);if(i!==null){let o=this.kr.get(i.largestBatchId).delete(n.key);this.kr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new rs(t,n));let s=this.kr.get(t);s===void 0&&(s=K(),this.kr.set(t,s)),this.kr.set(t,s.add(n.key))}};var Wl=class{constructor(){this.sessionToken=pe.EMPTY_BYTE_STRING}getSessionToken(e){return b.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,b.resolve()}};var as=class{constructor(){this.qr=new te(he.Qr),this.$r=new te(he.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){let n=new he(e,t);this.qr=this.qr.add(n),this.$r=this.$r.add(n)}Kr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Wr(new he(e,t))}Gr(e,t){e.forEach(n=>this.removeReference(n,t))}zr(e){let t=new x(new Z([])),n=new he(t,e),i=new he(t,e+1),s=[];return this.$r.forEachInRange([n,i],o=>{this.Wr(o),s.push(o.key)}),s}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){let t=new x(new Z([])),n=new he(t,e),i=new he(t,e+1),s=K();return this.$r.forEachInRange([n,i],o=>{s=s.add(o.key)}),s}containsKey(e){let t=new he(e,0),n=this.qr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}},he=class{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return x.comparator(e.key,t.key)||z(e.Hr,t.Hr)}static Ur(e,t){return z(e.Hr,t.Hr)||x.comparator(e.key,t.key)}};var Kl=class{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new te(he.Qr)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,i){let s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let o=new ns(s,t,n,i);this.mutationQueue.push(o);for(let c of i)this.Yr=this.Yr.add(new he(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,t){return b.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){let n=t+1,i=this.Xr(n),s=i<0?0:i;return b.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?Tn:this.er-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new he(t,0),i=new he(t,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([n,i],o=>{let c=this.Zr(o.Hr);s.push(c)}),b.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new te(z);return t.forEach(i=>{let s=new he(i,0),o=new he(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,o],c=>{n=n.add(c.Hr)})}),b.resolve(this.ei(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,i=n.length+1,s=n;x.isDocumentKey(s)||(s=s.child(""));let o=new he(new x(s),0),c=new te(z);return this.Yr.forEachWhile(u=>{let h=u.key.path;return!!n.isPrefixOf(h)&&(h.length===i&&(c=c.add(u.Hr)),!0)},o),b.resolve(this.ei(c))}ei(e){let t=[];return e.forEach(n=>{let i=this.Zr(n);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){q(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Yr;return b.forEach(t.mutations,i=>{let s=new he(i.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Yr=n})}rr(e){}containsKey(e,t){let n=new he(t,0),i=this.Yr.firstAfterOrEqual(n);return b.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){let t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}};var Hl=class{constructor(e){this.ni=e,this.docs=function(){return new ie(x.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,i=this.docs.get(n),s=i?i.size:0,o=this.ni(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return b.resolve(n?n.document.mutableCopy():we.newInvalidDocument(t))}getEntries(e,t){let n=Ue();return t.forEach(i=>{let s=this.docs.get(i);n=n.insert(i,s?s.document.mutableCopy():we.newInvalidDocument(i))}),b.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let s=Ue(),o=t.path,c=new x(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){let{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Uh(dg(f),n)<=0||(i.has(f.key)||ms(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return b.resolve(s)}getAllFromCollectionGroup(e,t,n,i){L(9500)}ri(e,t){return b.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new Ql(this)}getSize(e){return b.resolve(this.size)}},Ql=class extends fa{constructor(e){super(),this.Or=e}applyChanges(e){let t=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?t.push(this.Or.addEntry(e,i)):this.Or.removeEntry(n)}),b.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}};var Jl=class{constructor(e){this.persistence=e,this.ii=new Ye(t=>Cn(t),ps),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.si=0,this.oi=new as,this.targetCount=0,this._i=Vr.ar()}forEachTarget(e,t){return this.ii.forEach((n,i)=>t(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.si&&(this.si=t),b.resolve()}hr(e){this.ii.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this._i=new Vr(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,b.resolve()}updateTargetData(e,t){return this.hr(t),b.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,t,n){let i=0,s=[];return this.ii.forEach((o,c)=>{c.sequenceNumber<=t&&n.get(c.targetId)===null&&(this.ii.delete(o),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),b.waitFor(s).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,t){let n=this.ii.get(t)||null;return b.resolve(n)}addMatchingKeys(e,t,n){return this.oi.Kr(t,n),b.resolve()}removeMatchingKeys(e,t,n){this.oi.Gr(t,n);let i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),b.resolve()}getMatchingKeysForTargetId(e,t){let n=this.oi.Jr(t);return b.resolve(n)}containsKey(e,t){return b.resolve(this.oi.containsKey(t))}};var cs=class{constructor(e,t){this.ai={},this.overlays={},this.ui=new Re(0),this.ci=!1,this.ci=!0,this.li=new Wl,this.referenceDelegate=e(this),this.hi=new Jl(this),this.indexManager=new xl,this.remoteDocumentCache=function(i){return new Hl(i)}(n=>this.referenceDelegate.Pi(n)),this.serializer=new sa(t),this.Ti=new $l(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Gl,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ai[e.toKey()];return n||(n=new Kl(t,this.referenceDelegate),this.ai[e.toKey()]=n),n}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,n){C("MemoryPersistence","Starting transaction:",e);let i=new Yl(this.ui.next());return this.referenceDelegate.Ii(),n(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,t){return b.or(Object.values(this.ai).map(n=>()=>n.containsKey(e,t)))}},Yl=class extends jo{constructor(e){super(),this.currentSequenceNumber=e}},ma=class r{constructor(e){this.persistence=e,this.Ai=new as,this.Ri=null}static Vi(e){return new r(e)}get mi(){if(this.Ri)return this.Ri;throw L(60996)}addReference(e,t,n){return this.Ai.addReference(n,t),this.mi.delete(n.toString()),b.resolve()}removeReference(e,t,n){return this.Ai.removeReference(n,t),this.mi.add(n.toString()),b.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),b.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(i=>this.mi.add(i.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.mi.add(s.toString()))}).next(()=>n.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.mi,n=>{let i=x.fromPath(n);return this.fi(e,i).next(s=>{s||t.removeEntry(i,j.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(n=>{n?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return b.or([()=>b.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}},ga=class r{constructor(e,t){this.persistence=e,this.gi=new Ye(n=>Pe(n.path),(n,i)=>n.isEqual(i)),this.garbageCollector=w_(this,t)}static Vi(e,t){return new r(e,t)}Ii(){}di(e){return b.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){let t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(i=>n+i))}yr(e){let t=0;return this.gr(e,n=>{t++}).next(()=>t)}gr(e,t){return b.forEach(this.gi,(n,i)=>this.Sr(e,n,i).next(s=>s?b.resolve():t(i)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0,i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,o=>this.Sr(e,o,t).next(c=>{c||(n++,s.removeEntry(o,j.min()))})).next(()=>s.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),b.resolve()}removeTarget(e,t){let n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.gi.set(n,e.currentSequenceNumber),b.resolve()}removeReference(e,t,n){return this.gi.set(n,e.currentSequenceNumber),b.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),b.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Vo(e.data.value)),t}Sr(e,t,n){return b.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let i=this.gi.get(t);return b.resolve(i!==void 0&&i>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}};var Xl=class{constructor(e){this.serializer=e}q(e,t,n,i){let s=new zo("createOrUpgrade",t);n<1&&i>=1&&(function(u){u.createObjectStore(fs)}(e),function(u){u.createObjectStore(Ki,{keyPath:sE}),u.createObjectStore(He,{keyPath:rm,autoIncrement:!0}).createIndex(In,im,{unique:!0}),u.createObjectStore(Ir)}(e),Gm(e),function(u){u.createObjectStore(mn)}(e));let o=b.resolve();return n<3&&i>=3&&(n!==0&&(function(u){u.deleteObjectStore(Er),u.deleteObjectStore(wr),u.deleteObjectStore(An)}(e),Gm(e)),o=o.next(()=>function(u){let h=u.store(An),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:j.min().toTimestamp(),targetCount:0};return h.put(Wo,f)}(s))),n<4&&i>=4&&(n!==0&&(o=o.next(()=>function(u,h){return h.store(He).j().next(m=>{u.deleteObjectStore(He),u.createObjectStore(He,{keyPath:rm,autoIncrement:!0}).createIndex(In,im,{unique:!0});let _=h.store(He),S=m.map(D=>_.put(D));return b.waitFor(S)})}(e,s))),o=o.next(()=>{(function(u){u.createObjectStore(Tr,{keyPath:pE})})(e)})),n<5&&i>=5&&(o=o.next(()=>this.pi(s))),n<6&&i>=6&&(o=o.next(()=>(function(u){u.createObjectStore(Hi)}(e),this.yi(s)))),n<7&&i>=7&&(o=o.next(()=>this.wi(s))),n<8&&i>=8&&(o=o.next(()=>this.Si(e,s))),n<9&&i>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),n<10&&i>=10&&(o=o.next(()=>this.bi(s))),n<11&&i>=11&&(o=o.next(()=>{(function(u){u.createObjectStore(Ba,{keyPath:mE})})(e),function(u){u.createObjectStore(qa,{keyPath:gE})}(e)})),n<12&&i>=12&&(o=o.next(()=>{(function(u){let h=u.createObjectStore(ja,{keyPath:TE});h.createIndex(tl,AE,{unique:!1}),h.createIndex(wg,bE,{unique:!1})})(e)})),n<13&&i>=13&&(o=o.next(()=>function(u){let h=u.createObjectStore(Go,{keyPath:aE});h.createIndex(ko,cE),h.createIndex(_g,uE)}(e)).next(()=>this.Di(e,s)).next(()=>e.deleteObjectStore(mn))),n<14&&i>=14&&(o=o.next(()=>this.Ci(e,s))),n<15&&i>=15&&(o=o.next(()=>function(u){u.createObjectStore(jh,{keyPath:_E,autoIncrement:!0}).createIndex(el,yE,{unique:!1}),u.createObjectStore(Li,{keyPath:vE}).createIndex(vg,IE,{unique:!1}),u.createObjectStore(Mi,{keyPath:wE}).createIndex(Ig,EE,{unique:!1})}(e))),n<16&&i>=16&&(o=o.next(()=>{t.objectStore(Li).clear()}).next(()=>{t.objectStore(Mi).clear()})),n<17&&i>=17&&(o=o.next(()=>{(function(u){u.createObjectStore(zh,{keyPath:SE})})(e)})),n<18&&i>=18&&Dc()&&(o=o.next(()=>{t.objectStore(Li).clear()}).next(()=>{t.objectStore(Mi).clear()})),o}yi(e){let t=0;return e.store(mn).X((n,i)=>{t+=la(i)}).next(()=>{let n={byteSize:t};return e.store(Hi).put(Zu,n)})}pi(e){let t=e.store(Ki),n=e.store(He);return t.j().next(i=>b.forEach(i,s=>{let o=IDBKeyRange.bound([s.userId,Tn],[s.userId,s.lastAcknowledgedBatchId]);return n.j(In,o).next(c=>b.forEach(c,u=>{q(u.userId===s.userId,18650,"Cannot process batch from unexpected user",{batchId:u.batchId});let h=_n(this.serializer,u);return __(e,s.userId,h).next(()=>{})}))}))}wi(e){let t=e.store(Er),n=e.store(mn);return e.store(An).get(Wo).next(i=>{let s=[];return n.X((o,c)=>{let u=new Z(o),h=function(m){return[0,Pe(m)]}(u);s.push(t.get(h).next(f=>f?b.resolve():(m=>t.put({targetId:0,path:Pe(m),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>b.waitFor(s))})}Si(e,t){e.createObjectStore(Qi,{keyPath:fE});let n=t.store(Qi),i=new os,s=o=>{if(i.add(o)){let c=o.lastSegment(),u=o.popLast();return n.put({collectionId:c,parent:Pe(u)})}};return t.store(mn).X({Z:!0},(o,c)=>{let u=new Z(o);return s(u.popLast())}).next(()=>t.store(Ir).X({Z:!0},([o,c,u],h)=>{let f=rt(c);return s(f.popLast())}))}bi(e){let t=e.store(wr);return t.X((n,i)=>{let s=Vi(i),o=d_(this.serializer,s);return t.put(o)})}Di(e,t){let n=t.store(mn),i=[];return n.X((s,o)=>{let c=t.store(Go),u=function(m){return m.document?new x(Z.fromString(m.document.name).popFirst(5)):m.noDocument?x.fromSegments(m.noDocument.path):m.unknownDocument?x.fromSegments(m.unknownDocument.path):L(36783)}(o).path.toArray(),h={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(c.put(h))}).next(()=>b.waitFor(i))}Ci(e,t){let n=t.store(He),i=E_(this.serializer),s=new cs(ma.Vi,this.serializer.gt);return n.j().next(o=>{let c=new Map;return o.forEach(u=>{var h;let f=(h=c.get(u.userId))!==null&&h!==void 0?h:K();_n(this.serializer,u).keys().forEach(m=>f=f.add(m)),c.set(u.userId,f)}),b.forEach(c,(u,h)=>{let f=new de(h),m=aa.yt(this.serializer,f),_=s.getIndexManager(f),S=ha.yt(f,this.serializer,_,s.referenceDelegate);return new pa(i,S,m,_).recalculateAndSaveOverlaysForDocumentKeys(new Ji(t,Re.ue),u).next()})})}};function Gm(r){r.createObjectStore(Er,{keyPath:hE}).createIndex(qh,dE,{unique:!0}),r.createObjectStore(wr,{keyPath:"targetId"}).createIndex(yg,lE,{unique:!0}),r.createObjectStore(An)}var Mt="IndexedDbPersistence",xu=18e5,Lu=5e3,Mu="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",lT="main",Zl=class r{constructor(e,t,n,i,s,o,c,u,h,f,m=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Fi=s,this.window=o,this.document=c,this.Mi=h,this.xi=f,this.Oi=m,this.ui=null,this.ci=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ni=null,this.inForeground=!1,this.Bi=null,this.Li=null,this.ki=Number.NEGATIVE_INFINITY,this.qi=_=>Promise.resolve(),!r.C())throw new V(P.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Bl(this,i),this.Qi=t+lT,this.serializer=new sa(u),this.$i=new vr(this.Qi,this.Oi,new Xl(this.serializer)),this.li=new Pl,this.hi=new Ml(this.referenceDelegate,this.serializer),this.remoteDocumentCache=E_(this.serializer),this.Ti=new Rl,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,f===!1&&ue(Mt,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ki().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new V(P.FAILED_PRECONDITION,Mu);return this.Wi(),this.Gi(),this.zi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.hi.getHighestSequenceNumber(e))}).then(e=>{this.ui=new Re(e,this.Mi)}).then(()=>{this.ci=!0}).catch(e=>(this.$i&&this.$i.close(),Promise.reject(e)))}ji(e){return this.qi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.$i.setDatabaseDeletedListener(e)}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Fi.enqueueAndForget(async()=>{this.started&&await this.Ki()}))}Ki(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Co(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ji(e).next(t=>{t||(this.isPrimary=!1,this.Fi.enqueueRetryable(()=>this.qi(!1)))})}).next(()=>this.Hi(e)).next(t=>this.isPrimary&&!t?this.Yi(e).next(()=>!1):!!t&&this.Zi(e).next(()=>!0))).catch(e=>{if(Zt(e))return C(Mt,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return C(Mt,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Fi.enqueueRetryable(()=>this.qi(e)),this.isPrimary=e})}Ji(e){return ki(e).get(Zn).next(t=>b.resolve(this.Xi(t)))}es(e){return Co(e).delete(this.clientId)}async ts(){if(this.isPrimary&&!this.ns(this.ki,xu)){this.ki=Date.now();let e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{let n=_e(t,Tr);return n.j().next(i=>{let s=this.rs(i,xu),o=i.filter(c=>s.indexOf(c)===-1);return b.forEach(o,c=>n.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ui)for(let t of e)this.Ui.removeItem(this.ss(t.clientId))}}zi(){this.Li=this.Fi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ki().then(()=>this.ts()).then(()=>this.zi()))}Xi(e){return!!e&&e.ownerId===this.clientId}Hi(e){return this.xi?b.resolve(!0):ki(e).get(Zn).next(t=>{if(t!==null&&this.ns(t.leaseTimestampMs,Lu)&&!this._s(t.ownerId)){if(this.Xi(t)&&this.networkEnabled)return!0;if(!this.Xi(t)){if(!t.allowTabSynchronization)throw new V(P.FAILED_PRECONDITION,Mu);return!1}}return!(!this.networkEnabled||!this.inForeground)||Co(e).j().next(n=>this.rs(n,Lu).find(i=>{if(this.clientId!==i.clientId){let s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,c=this.networkEnabled===i.networkEnabled;if(s||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&C(Mt,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.ci=!1,this.us(),this.Li&&(this.Li.cancel(),this.Li=null),this.cs(),this.ls(),await this.$i.runTransaction("shutdown","readwrite",[fs,Tr],e=>{let t=new Ji(e,Re.ue);return this.Yi(t).next(()=>this.es(t))}),this.$i.close(),this.hs()}rs(e,t){return e.filter(n=>this.ns(n.updateTimeMs,t)&&!this._s(n.clientId))}Ps(){return this.runTransaction("getActiveClients","readonly",e=>Co(e).j().next(t=>this.rs(t,xu).map(n=>n.clientId)))}get started(){return this.ci}getGlobalsCache(){return this.li}getMutationQueue(e,t){return ha.yt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Ll(e,this.serializer.gt.databaseId)}getDocumentOverlayCache(e){return aa.yt(this.serializer,e)}getBundleCache(){return this.Ti}runTransaction(e,t,n){C(Mt,"Starting transaction:",e);let i=t==="readonly"?"readonly":"readwrite",s=function(u){return u===18?CE:u===17?bg:u===16?PE:u===15?$h:u===14?Ag:u===13?Tg:u===12?RE:u===11?Eg:void L(60245)}(this.Oi),o;return this.$i.runTransaction(e,i,s,c=>(o=new Ji(c,this.ui?this.ui.next():Re.ue),t==="readwrite-primary"?this.Ji(o).next(u=>!!u||this.Hi(o)).next(u=>{if(!u)throw ue(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Fi.enqueueRetryable(()=>this.qi(!1)),new V(P.FAILED_PRECONDITION,fg);return n(o)}).next(u=>this.Zi(o).next(()=>u)):this.Ts(o).next(()=>n(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}Ts(e){return ki(e).get(Zn).next(t=>{if(t!==null&&this.ns(t.leaseTimestampMs,Lu)&&!this._s(t.ownerId)&&!this.Xi(t)&&!(this.xi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new V(P.FAILED_PRECONDITION,Mu)})}Zi(e){let t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ki(e).put(Zn,t)}static C(){return vr.C()}Yi(e){let t=ki(e);return t.get(Zn).next(n=>this.Xi(n)?(C(Mt,"Releasing primary lease."),t.delete(Zn)):b.resolve())}ns(e,t){let n=Date.now();return!(e<n-t)&&(!(e>n)||(ue(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Wi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Bi=()=>{this.Fi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ki()))},this.document.addEventListener("visibilitychange",this.Bi),this.inForeground=this.document.visibilityState==="visible")}cs(){this.Bi&&(this.document.removeEventListener("visibilitychange",this.Bi),this.Bi=null)}Gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ni=()=>{this.us();let t=/(?:Version|Mobile)\/1[456]/;Cc()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Fi.enterRestrictedMode(!0),this.Fi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ni))}ls(){this.Ni&&(this.window.removeEventListener("pagehide",this.Ni),this.Ni=null)}_s(e){var t;try{let n=((t=this.Ui)===null||t===void 0?void 0:t.getItem(this.ss(e)))!==null;return C(Mt,`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return ue(Mt,"Failed to get zombied client id.",n),!1}}us(){if(this.Ui)try{this.Ui.setItem(this.ss(this.clientId),String(Date.now()))}catch(e){ue("Failed to set zombie client id.",e)}}hs(){if(this.Ui)try{this.Ui.removeItem(this.ss(this.clientId))}catch{}}ss(e){return`firestore_zombie_${this.persistenceKey}_${e}`}};function ki(r){return _e(r,fs)}function Co(r){return _e(r,Tr)}function T_(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}var eh=class r{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Is=n,this.ds=i}static Es(e,t){let n=K(),i=K();for(let s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new r(e,t.fromCache,n,i)}};var th=class{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}};var _a=class{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return Cc()?8:pg(ce())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,n,i){let s={result:null};return this.ps(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ys(e,t,i,n).next(o=>{s.result=o})}).next(()=>{if(s.result)return;let o=new th;return this.ws(e,t,o).next(c=>{if(s.result=c,this.Rs)return this.Ss(e,t,o,c.size)})}).next(()=>s.result)}Ss(e,t,n,i){return n.documentReadCount<this.Vs?(sr()<=H.DEBUG&&C("QueryEngine","SDK will not create cache indexes for query:",or(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),b.resolve()):(sr()<=H.DEBUG&&C("QueryEngine","Query:",or(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.fs*i?(sr()<=H.DEBUG&&C("QueryEngine","The SDK decides to create cache indexes for query:",or(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Be(t))):b.resolve())}ps(e,t){if(gm(t))return b.resolve(null);let n=Be(t);return this.indexManager.getIndexType(e,n).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=ml(t,null,"F"),n=Be(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(s=>{let o=K(...s);return this.gs.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,n).next(u=>{let h=this.bs(t,c);return this.Ds(t,h,o,u.readTime)?this.ps(e,ml(t,null,"F")):this.vs(e,h,t,u)}))})))}ys(e,t,n,i){return gm(t)||i.isEqual(j.min())?b.resolve(null):this.gs.getDocuments(e,n).next(s=>{let o=this.bs(t,s);return this.Ds(t,o,n,i)?b.resolve(null):(sr()<=H.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),or(t)),this.vs(e,o,t,hg(i,_r)).next(c=>c))})}bs(e,t){let n=new te(zg(e));return t.forEach((i,s)=>{ms(e,s)&&(n=n.add(s))}),n}Ds(e,t,n,i){if(e.limit===null)return!1;if(n.size!==t.size)return!0;let s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,t,n){return sr()<=H.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",or(t)),this.gs.getDocumentsMatchingQuery(e,t,ze.min(),n)}vs(e,t,n,i){return this.gs.getDocumentsMatchingQuery(e,n,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}};var td="LocalStore",hT=3e8,nh=class{constructor(e,t,n,i){this.persistence=e,this.Cs=t,this.serializer=i,this.Fs=new ie(z),this.Ms=new Ye(s=>Cn(s),ps),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(n)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new pa(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}};function A_(r,e,t,n){return new nh(r,e,t,n)}async function b_(r,e){let t=F(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let i;return t.mutationQueue.getAllMutationBatches(n).next(s=>(i=s,t.Ns(e),t.mutationQueue.getAllMutationBatches(n))).next(s=>{let o=[],c=[],u=K();for(let h of i){o.push(h.batchId);for(let f of h.mutations)u=u.add(f.key)}for(let h of s){c.push(h.batchId);for(let f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(n,u).next(h=>({Bs:h,removedBatchIds:o,addedBatchIds:c}))})})}function dT(r,e){let t=F(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{let i=e.batch.keys(),s=t.Os.newChangeBuffer({trackRemovals:!0});return function(c,u,h,f){let m=h.batch,_=m.keys(),S=b.resolve();return _.forEach(D=>{S=S.next(()=>f.getEntry(u,D)).next(k=>{let N=h.docVersions.get(D);q(N!==null,48541),k.version.compareTo(N)<0&&(m.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),f.addEntry(k)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(u,m))}(t,n,e,s).next(()=>s.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let u=K();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(n,i))})}function S_(r){let e=F(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function fT(r,e){let t=F(r),n=e.snapshotVersion,i=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{let o=t.Os.newChangeBuffer({trackRemovals:!0});i=t.Fs;let c=[];e.targetChanges.forEach((f,m)=>{let _=i.get(m);if(!_)return;c.push(t.hi.removeMatchingKeys(s,f.removedDocuments,m).next(()=>t.hi.addMatchingKeys(s,f.addedDocuments,m)));let S=_.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?S=S.withResumeToken(pe.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,n)),i=i.insert(m,S),function(k,N,$){return k.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=hT?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(_,S,f)&&c.push(t.hi.updateTargetData(s,S))});let u=Ue(),h=K();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),c.push(pT(s,o,e.documentUpdates).next(f=>{u=f.Ls,h=f.ks})),!n.isEqual(j.min())){let f=t.hi.getLastRemoteSnapshotVersion(s).next(m=>t.hi.setTargetsMetadata(s,s.currentSequenceNumber,n));c.push(f)}return b.waitFor(c).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(t.Fs=i,s))}function pT(r,e,t){let n=K(),i=K();return t.forEach(s=>n=n.add(s)),e.getEntries(r,n).next(s=>{let o=Ue();return t.forEach((c,u)=>{let h=s.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(c)),u.isNoDocument()&&u.version.isEqual(j.min())?(e.removeEntry(c,u.readTime),o=o.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(c,u)):C(td,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)}),{Ls:o,ks:i}})}function mT(r,e){let t=F(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=Tn),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function ya(r,e){let t=F(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return t.hi.getTargetData(n,e).next(s=>s?(i=s,b.resolve(i)):t.hi.allocateTargetId(n).next(o=>(i=new Or(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.hi.addTargetData(n,i).next(()=>i))))}).then(n=>{let i=t.Fs.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(n.targetId,n),t.Ms.set(e,n.targetId)),n})}async function xr(r,e,t){let n=F(r),i=n.Fs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",s,o=>n.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Zt(o))throw o;C(td,`Failed to update sequence numbers for target ${e}: ${o}`)}n.Fs=n.Fs.remove(e),n.Ms.delete(i.target)}function va(r,e,t){let n=F(r),i=j.min(),s=K();return n.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){let m=F(u),_=m.Ms.get(f);return _!==void 0?b.resolve(m.Fs.get(_)):m.hi.getTargetData(h,f)}(n,o,Be(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,n.hi.getMatchingKeysForTargetId(o,c.targetId).next(u=>{s=u})}).next(()=>n.Cs.getDocumentsMatchingQuery(o,e,t?i:j.min(),t?s:K())).next(c=>(C_(n,jg(e),c),{documents:c,qs:s})))}function R_(r,e){let t=F(r),n=F(t.hi),i=t.Fs.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>n.Et(s,e).next(o=>o?o.target:null))}function P_(r,e){let t=F(r),n=t.xs.get(e)||j.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.Os.getAllFromCollectionGroup(i,e,hg(n,_r),Number.MAX_SAFE_INTEGER)).then(i=>(C_(t,e,i),i))}function C_(r,e,t){let n=r.xs.get(e)||j.min();t.forEach((i,s)=>{s.readTime.compareTo(n)>0&&(n=s.readTime)}),r.xs.set(e,n)}var D_="firestore_clients";function Wm(r,e){return`${D_}_${r}_${e}`}var N_="firestore_mutations";function Km(r,e,t){let n=`${N_}_${r}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}var k_="firestore_targets";function Fu(r,e){return`${k_}_${r}_${e}`}var nt="SharedClientState",Ia=class r{constructor(e,t,n,i){this.user=e,this.batchId=t,this.state=n,this.error=i}static Ks(e,t,n){let i=JSON.parse(n),s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new V(i.error.code,i.error.message))),o?new r(e,t,i.state,s):(ue(nt,`Failed to parse mutation state for ID '${t}': ${n}`),null)}Ws(){let e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}},ji=class r{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Ks(e,t){let n=JSON.parse(t),i,s=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return s&&n.error&&(s=typeof n.error.message=="string"&&typeof n.error.code=="string",s&&(i=new V(n.error.code,n.error.message))),s?new r(e,n.state,i):(ue(nt,`Failed to parse target state for ID '${e}': ${t}`),null)}Ws(){let e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}},wa=class r{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ks(e,t){let n=JSON.parse(t),i=typeof n=="object"&&n.activeTargetIds instanceof Array,s=Yh();for(let o=0;i&&o<n.activeTargetIds.length;++o)i=mg(n.activeTargetIds[o]),s=s.add(n.activeTargetIds[o]);return i?new r(e,s):(ue(nt,`Failed to parse client data for instance '${e}': ${t}`),null)}},rh=class r{constructor(e,t){this.clientId=e,this.onlineState=t}static Ks(e){let t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new r(t.clientId,t.onlineState):(ue(nt,`Failed to parse online state: ${e}`),null)}},us=class{constructor(){this.activeTargetIds=Yh()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}},zi=class{constructor(e,t,n,i,s){this.window=e,this.Fi=t,this.persistenceKey=n,this.js=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Js=this.Hs.bind(this),this.Ys=new ie(z),this.started=!1,this.Zs=[];let o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Xs=Wm(this.persistenceKey,this.js),this.eo=function(u){return`firestore_sequence_number_${u}`}(this.persistenceKey),this.Ys=this.Ys.insert(this.js,new us),this.no=new RegExp(`^${D_}_${o}_([^_]*)$`),this.ro=new RegExp(`^${N_}_${o}_(\\d+)(?:_(.*))?$`),this.io=new RegExp(`^${k_}_${o}_(\\d+)$`),this.so=function(u){return`firestore_online_state_${u}`}(this.persistenceKey),this.oo=function(u){return`firestore_bundle_loaded_v2_${u}`}(this.persistenceKey),this.window.addEventListener("storage",this.Js)}static C(e){return!(!e||!e.localStorage)}async start(){let e=await this.syncEngine.Ps();for(let n of e){if(n===this.js)continue;let i=this.getItem(Wm(this.persistenceKey,n));if(i){let s=wa.Ks(n,i);s&&(this.Ys=this.Ys.insert(s.clientId,s))}}this._o();let t=this.storage.getItem(this.so);if(t){let n=this.ao(t);n&&this.uo(n)}for(let n of this.Zs)this.Hs(n);this.Zs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.eo,JSON.stringify(e))}getAllActiveQueryTargets(){return this.co(this.Ys)}isActiveQueryTarget(e){let t=!1;return this.Ys.forEach((n,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.lo(e,"pending")}updateMutationState(e,t,n){this.lo(e,t,n),this.ho(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){let i=this.storage.getItem(Fu(this.persistenceKey,e));if(i){let s=ji.Ks(e,i);s&&(n=s.state)}}return t&&this.Po.Gs(e),this._o(),n}removeLocalQueryTarget(e){this.Po.zs(e),this._o()}isLocalQueryTarget(e){return this.Po.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Fu(this.persistenceKey,e))}updateQueryState(e,t,n){this.To(e,t,n)}handleUserChange(e,t,n){t.forEach(i=>{this.ho(i)}),this.currentUser=e,n.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Io(e)}notifyBundleLoaded(e){this.Eo(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Js),this.removeItem(this.Xs),this.started=!1)}getItem(e){let t=this.storage.getItem(e);return C(nt,"READ",e,t),t}setItem(e,t){C(nt,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){C(nt,"REMOVE",e),this.storage.removeItem(e)}Hs(e){let t=e;if(t.storageArea===this.storage){if(C(nt,"EVENT",t.key,t.newValue),t.key===this.Xs)return void ue("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Fi.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.no.test(t.key)){if(t.newValue==null){let n=this.Ao(t.key);return this.Ro(n,null)}{let n=this.Vo(t.key,t.newValue);if(n)return this.Ro(n.clientId,n)}}else if(this.ro.test(t.key)){if(t.newValue!==null){let n=this.mo(t.key,t.newValue);if(n)return this.fo(n)}}else if(this.io.test(t.key)){if(t.newValue!==null){let n=this.po(t.key,t.newValue);if(n)return this.yo(n)}}else if(t.key===this.so){if(t.newValue!==null){let n=this.ao(t.newValue);if(n)return this.uo(n)}}else if(t.key===this.eo){let n=function(s){let o=Re.ue;if(s!=null)try{let c=JSON.parse(s);q(typeof c=="number",30636,{wo:s}),o=c}catch(c){ue(nt,"Failed to read sequence number from WebStorage",c)}return o}(t.newValue);n!==Re.ue&&this.sequenceNumberHandler(n)}else if(t.key===this.oo){let n=this.So(t.newValue);await Promise.all(n.map(i=>this.syncEngine.bo(i)))}}}else this.Zs.push(t)})}}get Po(){return this.Ys.get(this.js)}_o(){this.setItem(this.Xs,this.Po.Ws())}lo(e,t,n){let i=new Ia(this.currentUser,e,t,n),s=Km(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Ws())}ho(e){let t=Km(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Io(e){let t={clientId:this.js,onlineState:e};this.storage.setItem(this.so,JSON.stringify(t))}To(e,t,n){let i=Fu(this.persistenceKey,e),s=new ji(e,t,n);this.setItem(i,s.Ws())}Eo(e){let t=JSON.stringify(Array.from(e));this.setItem(this.oo,t)}Ao(e){let t=this.no.exec(e);return t?t[1]:null}Vo(e,t){let n=this.Ao(e);return wa.Ks(n,t)}mo(e,t){let n=this.ro.exec(e),i=Number(n[1]),s=n[2]!==void 0?n[2]:null;return Ia.Ks(new de(s),i,t)}po(e,t){let n=this.io.exec(e),i=Number(n[1]);return ji.Ks(i,t)}ao(e){return rh.Ks(e)}So(e){return JSON.parse(e)}async fo(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Do(e.batchId,e.state,e.error);C(nt,`Ignoring mutation for non-active user ${e.user.uid}`)}yo(e){return this.syncEngine.vo(e.targetId,e.state,e.error)}Ro(e,t){let n=t?this.Ys.insert(e,t):this.Ys.remove(e),i=this.co(this.Ys),s=this.co(n),o=[],c=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||c.push(u)}),this.syncEngine.Co(o,c).then(()=>{this.Ys=n})}uo(e){this.Ys.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}co(e){let t=Yh();return e.forEach((n,i)=>{t=t.unionWith(i.activeTargetIds)}),t}},Ea=class{constructor(){this.Fo=new us,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,n){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new us,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}};var ih=class{xo(e){}shutdown(){}};var Hm="ConnectivityMonitor",Ta=class{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){C(Hm,"Network connectivity changed: AVAILABLE");for(let e of this.ko)e(0)}Lo(){C(Hm,"Network connectivity changed: UNAVAILABLE");for(let e of this.ko)e(1)}static C(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}};var Do=null;function sh(){return Do===null?Do=function(){return 268435456+Math.round(2147483648*Math.random())}():Do++,"0x"+Do.toString(16)}var Uu="RestConnection",gT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"},oh=class{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${n}/databases/${i}`,this.Ko=this.databaseId.database===Xi?`project_id=${n}`:`project_id=${n}&database_id=${i}`}Wo(e,t,n,i,s){let o=sh(),c=this.Go(e,t.toUriEncodedString());C(Uu,`Sending RPC '${e}' ${o}:`,c,n);let u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,i,s);let{host:h}=new URL(c),f=dt(h);return this.jo(e,c,u,n,f).then(m=>(C(Uu,`Received RPC '${e}' ${o}: `,m),m),m=>{throw wt(Uu,`RPC '${e}' ${o} failed with error: `,m,"url: ",c,"request:",n),m})}Jo(e,t,n,i,s,o){return this.Wo(e,t,n,i,s)}zo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),n&&n.headers.forEach((i,s)=>e[s]=i)}Go(e,t){let n=gT[e];return`${this.$o}/v1/${t}:${n}`}terminate(){}};var ah=class{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}};var Se="WebChannelConnection",ch=class extends oh{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,n,i,s){let o=sh();return new Promise((c,u)=>{let h=new Cu;h.setWithCredentials(!0),h.listenOnce(Du.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Pi.NO_ERROR:let m=h.getResponseJson();C(Se,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),c(m);break;case Pi.TIMEOUT:C(Se,`RPC '${e}' ${o} timed out`),u(new V(P.DEADLINE_EXCEEDED,"Request time out"));break;case Pi.HTTP_ERROR:let _=h.getStatus();if(C(Se,`RPC '${e}' ${o} failed with status:`,_,"response text:",h.getResponseText()),_>0){let S=h.getResponseJson();Array.isArray(S)&&(S=S[0]);let D=S==null?void 0:S.error;if(D&&D.status&&D.message){let k=function($){let B=$.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(B)>=0?B:P.UNKNOWN}(D.status);u(new V(k,D.message))}else u(new V(P.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new V(P.UNAVAILABLE,"Connection failed."));break;default:L(9055,{c_:e,streamId:o,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{C(Se,`RPC '${e}' ${o} completed.`)}});let f=JSON.stringify(i);C(Se,`RPC '${e}' ${o} sending request:`,i),h.send(t,"POST",f,n,15)})}P_(e,t,n){let i=sh(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Ou(),c=ku(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,t,n),u.encodeInitMessageHeaders=!0;let f=s.join("");C(Se,`Creating RPC '${e}' stream ${i}: ${f}`,u);let m=o.createWebChannel(f,u);this.T_(m);let _=!1,S=!1,D=new ah({Ho:N=>{S?C(Se,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(_||(C(Se,`Opening RPC '${e}' stream ${i} transport.`),m.open(),_=!0),C(Se,`RPC '${e}' stream ${i} sending:`,N),m.send(N))},Yo:()=>m.close()}),k=(N,$,B)=>{N.listen($,M=>{try{B(M)}catch(W){setTimeout(()=>{throw W},0)}})};return k(m,Xn.EventType.OPEN,()=>{S||(C(Se,`RPC '${e}' stream ${i} transport opened.`),D.s_())}),k(m,Xn.EventType.CLOSE,()=>{S||(S=!0,C(Se,`RPC '${e}' stream ${i} transport closed`),D.__(),this.I_(m))}),k(m,Xn.EventType.ERROR,N=>{S||(S=!0,wt(Se,`RPC '${e}' stream ${i} transport errored. Name:`,N.name,"Message:",N.message),D.__(new V(P.UNAVAILABLE,"The operation could not be completed")))}),k(m,Xn.EventType.MESSAGE,N=>{var $;if(!S){let B=N.data[0];q(!!B,16349);let M=B,W=(M==null?void 0:M.error)||(($=M[0])===null||$===void 0?void 0:$.error);if(W){C(Se,`RPC '${e}' stream ${i} received error:`,W);let Y=W.status,G=function(v){let w=le[v];if(w!==void 0)return e_(w)}(Y),I=W.message;G===void 0&&(G=P.INTERNAL,I="Unknown error status: "+Y+" with message "+W.message),S=!0,D.__(new V(G,I)),m.close()}else C(Se,`RPC '${e}' stream ${i} received:`,B),D.a_(B)}}),k(c,Nu.STAT_EVENT,N=>{N.stat===bo.PROXY?C(Se,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===bo.NOPROXY&&C(Se,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{D.o_()},0),D}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}};function O_(){return typeof window!="undefined"?window:null}function Fo(){return typeof document!="undefined"?document:null}function Wa(r){return new El(r,!0)}var Aa=class{constructor(e,t,n=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=t,this.d_=n,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();let t=Math.floor(this.R_+this.p_()),n=Math.max(0,Date.now()-this.m_),i=Math.max(0,t-n);i>0&&C("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}};var Qm="PersistentStream",ba=class{constructor(e,t,n,i,s,o,c,u){this.Fi=e,this.w_=n,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Aa(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(ue(t.toString()),ue("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;let e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.b_===t&&this.W_(n,i)},n=>{e(()=>{let i=new V(P.UNKNOWN,"Fetching auth token failed: "+n.message);return this.G_(i)})})}W_(e,t){let n=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{n(()=>this.listener.Zo())}),this.stream.e_(()=>{n(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(i=>{n(()=>this.G_(i))}),this.stream.onMessage(i=>{n(()=>++this.C_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return C(Qm,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(C(Qm,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}},uh=class extends ba{constructor(e,t,n,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,o),this.serializer=s}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();let t=eT(this.serializer,e),n=function(s){if(!("targetChange"in s))return j.min();let o=s.targetChange;return o.targetIds&&o.targetIds.length?j.min():o.readTime?Ne(o.readTime):j.min()}(e);return this.listener.J_(t,n)}H_(e){let t={};t.database=bl(this.serializer),t.addTarget=function(s,o){let c,u=o.target;if(c=Yo(u)?{documents:o_(s,u)}:{query:a_(s,u).Vt},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=t_(s,o.resumeToken);let h=Tl(s,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(j.min())>0){c.readTime=kr(s,o.snapshotVersion.toTimestamp());let h=Tl(s,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);let n=nT(this.serializer,e);n&&(t.labels=n),this.k_(t)}Y_(e){let t={};t.database=bl(this.serializer),t.removeTarget=e,this.k_(t)}},lh=class extends ba{constructor(e,t,n,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,o),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return q(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,q(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){q(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();let t=tT(e.writeResults,e.commitTime),n=Ne(e.commitTime);return this.listener.ta(n,t)}na(){let e={};e.database=bl(this.serializer),this.k_(e)}X_(e){let t={streamToken:this.lastStreamToken,writes:e.map(n=>ia(this.serializer,n))};this.k_(t)}};var hh=class{},dh=class extends hh{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new V(P.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,n,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,Al(t,n),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new V(P.UNKNOWN,s.toString())})}Jo(e,t,n,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Jo(e,Al(t,n),i,o,c,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new V(P.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}},fh=class{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(ue(t),this._a=!1):C("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}};var Vn="RemoteStore",ph=class{constructor(e,t,n,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo(o=>{n.enqueueAndForget(async()=>{Fn(this)&&(C(Vn,"Restarting streams for network reachability change."),await async function(u){let h=F(u);h.Ia.add(4),await gs(h),h.Aa.set("Unknown"),h.Ia.delete(4),await Ka(h)}(this))})}),this.Aa=new fh(n,i)}};async function Ka(r){if(Fn(r))for(let e of r.da)await e(!0)}async function gs(r){for(let e of r.da)await e(!1)}function Ha(r,e){let t=F(r);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),id(t)?rd(t):zr(t).x_()&&nd(t,e))}function Lr(r,e){let t=F(r),n=zr(t);t.Ta.delete(e),n.x_()&&V_(t,e),t.Ta.size===0&&(n.x_()?n.B_():Fn(t)&&t.Aa.set("Unknown"))}function nd(r,e){if(r.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(j.min())>0){let t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}zr(r).H_(e)}function V_(r,e){r.Ra.$e(e),zr(r).Y_(e)}function rd(r){r.Ra=new wl({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>r.Ta.get(e)||null,lt:()=>r.datastore.serializer.databaseId}),zr(r).start(),r.Aa.aa()}function id(r){return Fn(r)&&!zr(r).M_()&&r.Ta.size>0}function Fn(r){return F(r).Ia.size===0}function x_(r){r.Ra=void 0}async function _T(r){r.Aa.set("Online")}async function yT(r){r.Ta.forEach((e,t)=>{nd(r,e)})}async function vT(r,e){x_(r),id(r)?(r.Aa.la(e),rd(r)):r.Aa.set("Unknown")}async function IT(r,e,t){if(r.Aa.set("Online"),e instanceof ta&&e.state===2&&e.cause)try{await async function(i,s){let o=s.cause;for(let c of s.targetIds)i.Ta.has(c)&&(await i.remoteSyncer.rejectListen(c,o),i.Ta.delete(c),i.Ra.removeTarget(c))}(r,e)}catch(n){C(Vn,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Sa(r,n)}else if(e instanceof fr?r.Ra.Ye(e):e instanceof ea?r.Ra.it(e):r.Ra.et(e),!t.isEqual(j.min()))try{let n=await S_(r.localStore);t.compareTo(n)>=0&&await function(s,o){let c=s.Ra.Pt(o);return c.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){let f=s.Ta.get(h);f&&s.Ta.set(h,f.withResumeToken(u.resumeToken,o))}}),c.targetMismatches.forEach((u,h)=>{let f=s.Ta.get(u);if(!f)return;s.Ta.set(u,f.withResumeToken(pe.EMPTY_BYTE_STRING,f.snapshotVersion)),V_(s,u);let m=new Or(f.target,u,h,f.sequenceNumber);nd(s,m)}),s.remoteSyncer.applyRemoteEvent(c)}(r,t)}catch(n){C(Vn,"Failed to raise snapshot:",n),await Sa(r,n)}}async function Sa(r,e,t){if(!Zt(e))throw e;r.Ia.add(1),await gs(r),r.Aa.set("Offline"),t||(t=()=>S_(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{C(Vn,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await Ka(r)})}function L_(r,e){return e().catch(t=>Sa(r,t,e))}async function jr(r){let e=F(r),t=Jt(e),n=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Tn;for(;wT(e);)try{let i=await mT(e.localStore,n);if(i===null){e.Pa.length===0&&t.B_();break}n=i.batchId,ET(e,i)}catch(i){await Sa(e,i)}M_(e)&&F_(e)}function wT(r){return Fn(r)&&r.Pa.length<10}function ET(r,e){r.Pa.push(e);let t=Jt(r);t.x_()&&t.Z_&&t.X_(e.mutations)}function M_(r){return Fn(r)&&!Jt(r).M_()&&r.Pa.length>0}function F_(r){Jt(r).start()}async function TT(r){Jt(r).na()}async function AT(r){let e=Jt(r);for(let t of r.Pa)e.X_(t.mutations)}async function bT(r,e,t){let n=r.Pa.shift(),i=yl.from(n,e,t);await L_(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await jr(r)}async function ST(r,e){e&&Jt(r).Z_&&await async function(n,i){if(function(o){return KE(o)&&o!==P.ABORTED}(i.code)){let s=n.Pa.shift();Jt(n).N_(),await L_(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i)),await jr(n)}}(r,e),M_(r)&&F_(r)}async function Jm(r,e){let t=F(r);t.asyncQueue.verifyOperationInProgress(),C(Vn,"RemoteStore received new credentials");let n=Fn(t);t.Ia.add(3),await gs(t),n&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Ka(t)}async function mh(r,e){let t=F(r);e?(t.Ia.delete(2),await Ka(t)):e||(t.Ia.add(2),await gs(t),t.Aa.set("Unknown"))}function zr(r){return r.Va||(r.Va=function(t,n,i){let s=F(t);return s.ia(),new uh(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{Zo:_T.bind(null,r),e_:yT.bind(null,r),n_:vT.bind(null,r),J_:IT.bind(null,r)}),r.da.push(async e=>{e?(r.Va.N_(),id(r)?rd(r):r.Aa.set("Unknown")):(await r.Va.stop(),x_(r))})),r.Va}function Jt(r){return r.ma||(r.ma=function(t,n,i){let s=F(t);return s.ia(),new lh(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:TT.bind(null,r),n_:ST.bind(null,r),ea:AT.bind(null,r),ta:bT.bind(null,r)}),r.da.push(async e=>{e?(r.ma.N_(),await jr(r)):(await r.ma.stop(),r.Pa.length>0&&(C(Vn,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))})),r.ma}var gh=class r{constructor(e,t,n,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new je,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,s){let o=Date.now()+n,c=new r(e,t,o,i,s);return c.start(n),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function Qa(r,e){if(ue("AsyncQueue",`${e}: ${r}`),Zt(r))return new V(P.UNAVAILABLE,`${e}: ${r}`);throw r}var Ra=class r{static emptySet(e){return new r(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||x.comparator(t.key,n.key):(t,n)=>x.comparator(t.key,n.key),this.keyedMap=Oi(),this.sortedSet=new ie(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof r)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let i=t.getNext().key,s=n.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){let n=new r;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}};var Pa=class{constructor(){this.fa=new ie(x.comparator)}track(e){let t=e.doc.key,n=this.fa.get(t);n?e.type!==0&&n.type===3?this.fa=this.fa.insert(t,e):e.type===3&&n.type!==1?this.fa=this.fa.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.fa=this.fa.remove(t):e.type===1&&n.type===2?this.fa=this.fa.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):L(63341,{At:e,ga:n}):this.fa=this.fa.insert(t,e)}pa(){let e=[];return this.fa.inorderTraversal((t,n)=>{e.push(n)}),e}},Mr=class r{constructor(e,t,n,i,s,o,c,u,h){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,n,i,s){let o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new r(e,t,Ra.emptySet(t),o,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ga(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}};var _h=class{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}},yh=class{constructor(){this.queries=Ym(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,n){let i=F(t),s=i.queries;i.queries=Ym(),s.forEach((o,c)=>{for(let u of c.wa)u.onError(n)})})(this,new V(P.ABORTED,"Firestore shutting down"))}};function Ym(){return new Ye(r=>qg(r),Ga)}async function RT(r,e){let t=F(r),n=3,i=e.query,s=t.queries.get(i);s?!s.Sa()&&e.ba()&&(n=2):(s=new _h,n=e.ba()?0:1);try{switch(n){case 0:s.ya=await t.onListen(i,!0);break;case 1:s.ya=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){let c=Qa(o,`Initialization of query '${or(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.wa.push(e),e.va(t.onlineState),s.ya&&e.Ca(s.ya)&&sd(t)}async function PT(r,e){let t=F(r),n=e.query,i=3,s=t.queries.get(n);if(s){let o=s.wa.indexOf(e);o>=0&&(s.wa.splice(o,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function CT(r,e){let t=F(r),n=!1;for(let i of e){let s=i.query,o=t.queries.get(s);if(o){for(let c of o.wa)c.Ca(i)&&(n=!0);o.ya=i}}n&&sd(t)}function DT(r,e,t){let n=F(r),i=n.queries.get(e);if(i)for(let s of i.wa)s.onError(t);n.queries.delete(e)}function sd(r){r.Da.forEach(e=>{e.next()})}var vh,Xm;(Xm=vh||(vh={})).Fa="default",Xm.Cache="cache";var Ih=class{constructor(e,t,n){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=n||{}}Ca(e){if(!this.options.includeMetadataChanges){let n=[];for(let i of e.docChanges)i.type!==3&&n.push(i);e=new Mr(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;let n=t!=="Offline";return(!this.options.ka||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;let t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Mr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==vh.Cache}};var Ca=class{constructor(e){this.key=e}},Da=class{constructor(e){this.key=e}},Na=class{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=K(),this.mutatedKeys=K(),this.Xa=zg(e),this.eu=new Ra(this.Xa)}get tu(){return this.Ha}nu(e,t){let n=t?t.ru:new Pa,i=t?t.eu:this.eu,s=t?t.mutatedKeys:this.mutatedKeys,o=i,c=!1,u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{let _=i.get(f),S=ms(this.query,m)?m:null,D=!!_&&this.mutatedKeys.has(_.key),k=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations),N=!1;_&&S?_.data.isEqual(S.data)?D!==k&&(n.track({type:3,doc:S}),N=!0):this.iu(_,S)||(n.track({type:2,doc:S}),N=!0,(u&&this.Xa(S,u)>0||h&&this.Xa(S,h)<0)&&(c=!0)):!_&&S?(n.track({type:0,doc:S}),N=!0):_&&!S&&(n.track({type:1,doc:_}),N=!0,(u||h)&&(c=!0)),N&&(S?(o=o.add(S),s=k?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){let f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),n.track({type:1,doc:f})}return{eu:o,ru:n,Ds:c,mutatedKeys:s}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){let s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;let o=e.ru.pa();o.sort((f,m)=>function(S,D){let k=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L(20277,{At:N})}};return k(S)-k(D)}(f.type,m.type)||this.Xa(f.doc,m.doc)),this.su(n),i=i!=null&&i;let c=t&&!i?this.ou():[],u=this.Za.size===0&&this.current&&!i?1:0,h=u!==this.Ya;return this.Ya=u,o.length!==0||h?{snapshot:new Mr(this.query,e.eu,s,o,e.mutatedKeys,u===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Pa,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];let e=this.Za;this.Za=K(),this.eu.forEach(n=>{this.au(n.key)&&(this.Za=this.Za.add(n.key))});let t=[];return e.forEach(n=>{this.Za.has(n)||t.push(new Da(n))}),this.Za.forEach(n=>{e.has(n)||t.push(new Ca(n))}),t}uu(e){this.Ha=e.qs,this.Za=K();let t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Mr.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}},$r="SyncEngine",wh=class{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}},Eh=class{constructor(e){this.key=e,this.lu=!1}},Th=class{constructor(e,t,n,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new Ye(c=>qg(c),Ga),this.Tu=new Map,this.Iu=new Set,this.du=new ie(x.comparator),this.Eu=new Map,this.Au=new as,this.Ru={},this.Vu=new Map,this.mu=Vr.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}};async function NT(r,e,t=!0){let n=Ja(r),i,s=n.Pu.get(e);return s?(n.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await U_(n,e,t,!0),i}async function kT(r,e){let t=Ja(r);await U_(t,e,!0,!1)}async function U_(r,e,t,n){let i=await ya(r.localStore,Be(e)),s=i.targetId,o=r.sharedClientState.addLocalQueryTarget(s,t),c;return n&&(c=await od(r,e,s,o==="current",i.resumeToken)),r.isPrimaryClient&&t&&Ha(r.remoteStore,i),c}async function od(r,e,t,n,i){r.gu=(m,_,S)=>async function(k,N,$,B){let M=N.view.nu($);M.Ds&&(M=await va(k.localStore,N.query,!1).then(({documents:I})=>N.view.nu(I,M)));let W=B&&B.targetChanges.get(N.targetId),Y=B&&B.targetMismatches.get(N.targetId)!=null,G=N.view.applyChanges(M,k.isPrimaryClient,W,Y);return Ah(k,N.targetId,G._u),G.snapshot}(r,m,_,S);let s=await va(r.localStore,e,!0),o=new Na(e,s.qs),c=o.nu(s.documents),u=ss.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",i),h=o.applyChanges(c,r.isPrimaryClient,u);Ah(r,t,h._u);let f=new wh(e,t,o);return r.Pu.set(e,f),r.Tu.has(t)?r.Tu.get(t).push(e):r.Tu.set(t,[e]),h.snapshot}async function OT(r,e,t){let n=F(r),i=n.Pu.get(e),s=n.Tu.get(i.targetId);if(s.length>1)return n.Tu.set(i.targetId,s.filter(o=>!Ga(o,e))),void n.Pu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await xr(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),t&&Lr(n.remoteStore,i.targetId),Fr(n,i.targetId)}).catch(Xt)):(Fr(n,i.targetId),await xr(n.localStore,i.targetId,!0))}async function VT(r,e){let t=F(r),n=t.Pu.get(e),i=t.Tu.get(n.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Lr(t.remoteStore,n.targetId))}async function xT(r,e,t){let n=ld(r);try{let i=await function(o,c){let u=F(o),h=oe.now(),f=c.reduce((S,D)=>S.add(D.key),K()),m,_;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let D=Ue(),k=K();return u.Os.getEntries(S,f).next(N=>{D=N,D.forEach(($,B)=>{B.isValidDocument()||(k=k.add($))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,D)).next(N=>{m=N;let $=[];for(let B of c){let M=WE(B,m.get(B.key).overlayedDocument);M!=null&&$.push(new at(B.key,M,Vg(M.value.mapValue),Je.exists(!0)))}return u.mutationQueue.addMutationBatch(S,h,$,c)}).next(N=>{_=N;let $=N.applyToLocalDocumentSet(m,k);return u.documentOverlayCache.saveOverlays(S,N.batchId,$)})}).then(()=>({batchId:_.batchId,changes:Gg(m)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(i.batchId),function(o,c,u){let h=o.Ru[o.currentUser.toKey()];h||(h=new ie(z)),h=h.insert(c,u),o.Ru[o.currentUser.toKey()]=h}(n,i.batchId,t),await en(n,i.changes),await jr(n.remoteStore)}catch(i){let s=Qa(i,"Failed to persist write");t.reject(s)}}async function B_(r,e){let t=F(r);try{let n=await fT(t.localStore,e);e.targetChanges.forEach((i,s)=>{let o=t.Eu.get(s);o&&(q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.lu=!0:i.modifiedDocuments.size>0?q(o.lu,14607):i.removedDocuments.size>0&&(q(o.lu,42227),o.lu=!1))}),await en(t,n,e)}catch(n){await Xt(n)}}function Zm(r,e,t){let n=F(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){let i=[];n.Pu.forEach((s,o)=>{let c=o.view.va(e);c.snapshot&&i.push(c.snapshot)}),function(o,c){let u=F(o);u.onlineState=c;let h=!1;u.queries.forEach((f,m)=>{for(let _ of m.wa)_.va(c)&&(h=!0)}),h&&sd(u)}(n.eventManager,e),i.length&&n.hu.J_(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function LT(r,e,t){let n=F(r);n.sharedClientState.updateQueryState(e,"rejected",t);let i=n.Eu.get(e),s=i&&i.key;if(s){let o=new ie(x.comparator);o=o.insert(s,we.newNoDocument(s,j.min()));let c=K().add(s),u=new is(j.min(),new Map,new ie(z),o,c);await B_(n,u),n.du=n.du.remove(s),n.Eu.delete(e),ud(n)}else await xr(n.localStore,e,!1).then(()=>Fr(n,e,t)).catch(Xt)}async function MT(r,e){let t=F(r),n=e.batch.batchId;try{let i=await dT(t.localStore,e);cd(t,n,null),ad(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await en(t,i)}catch(i){await Xt(i)}}async function FT(r,e,t){let n=F(r);try{let i=await function(o,c){let u=F(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,c).next(m=>(q(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(n.localStore,e);cd(n,e,t),ad(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await en(n,i)}catch(i){await Xt(i)}}function ad(r,e){(r.Vu.get(e)||[]).forEach(t=>{t.resolve()}),r.Vu.delete(e)}function cd(r,e,t){let n=F(r),i=n.Ru[n.currentUser.toKey()];if(i){let s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),n.Ru[n.currentUser.toKey()]=i}}function Fr(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(let n of r.Tu.get(e))r.Pu.delete(n),t&&r.hu.pu(n,t);r.Tu.delete(e),r.isPrimaryClient&&r.Au.zr(e).forEach(n=>{r.Au.containsKey(n)||q_(r,n)})}function q_(r,e){r.Iu.delete(e.path.canonicalString());let t=r.du.get(e);t!==null&&(Lr(r.remoteStore,t),r.du=r.du.remove(e),r.Eu.delete(t),ud(r))}function Ah(r,e,t){for(let n of t)n instanceof Ca?(r.Au.addReference(n.key,e),UT(r,n)):n instanceof Da?(C($r,"Document no longer in limbo: "+n.key),r.Au.removeReference(n.key,e),r.Au.containsKey(n.key)||q_(r,n.key)):L(19791,{yu:n})}function UT(r,e){let t=e.key,n=t.path.canonicalString();r.du.get(t)||r.Iu.has(n)||(C($r,"New document in limbo: "+t),r.Iu.add(n),ud(r))}function ud(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){let e=r.Iu.values().next().value;r.Iu.delete(e);let t=new x(Z.fromString(e)),n=r.mu.next();r.Eu.set(n,new Eh(t)),r.du=r.du.insert(t,n),Ha(r.remoteStore,new Or(Be(Jh(t.path)),n,"TargetPurposeLimboResolution",Re.ue))}}async function en(r,e,t){let n=F(r),i=[],s=[],o=[];n.Pu.isEmpty()||(n.Pu.forEach((c,u)=>{o.push(n.gu(u,e,t).then(h=>{var f;if((h||t)&&n.isPrimaryClient){let m=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);let m=eh.Es(u.targetId,h);s.push(m)}}))}),await Promise.all(o),n.hu.J_(i),await async function(u,h){let f=F(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>b.forEach(h,_=>b.forEach(_.Is,S=>f.persistence.referenceDelegate.addReference(m,_.targetId,S)).next(()=>b.forEach(_.ds,S=>f.persistence.referenceDelegate.removeReference(m,_.targetId,S)))))}catch(m){if(!Zt(m))throw m;C(td,"Failed to update sequence numbers: "+m)}for(let m of h){let _=m.targetId;if(!m.fromCache){let S=f.Fs.get(_),D=S.snapshotVersion,k=S.withLastLimboFreeSnapshotVersion(D);f.Fs=f.Fs.insert(_,k)}}}(n.localStore,s))}async function BT(r,e){let t=F(r);if(!t.currentUser.isEqual(e)){C($r,"User change. New user:",e.toKey());let n=await b_(t.localStore,e);t.currentUser=e,function(s,o){s.Vu.forEach(c=>{c.forEach(u=>{u.reject(new V(P.CANCELLED,o))})}),s.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await en(t,n.Bs)}}function qT(r,e){let t=F(r),n=t.Eu.get(e);if(n&&n.lu)return K().add(n.key);{let i=K(),s=t.Tu.get(e);if(!s)return i;for(let o of s){let c=t.Pu.get(o);i=i.unionWith(c.view.tu)}return i}}async function jT(r,e){let t=F(r),n=await va(t.localStore,e.query,!0),i=e.view.uu(n);return t.isPrimaryClient&&Ah(t,e.targetId,i._u),i}async function zT(r,e){let t=F(r);return P_(t.localStore,e).then(n=>en(t,n))}async function $T(r,e,t,n){let i=F(r),s=await function(c,u){let h=F(c),f=F(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",m=>f.Xn(m,u).next(_=>_?h.localDocuments.getDocuments(m,_):b.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await jr(i.remoteStore):t==="acknowledged"||t==="rejected"?(cd(i,e,n||null),ad(i,e),function(c,u){F(F(c).mutationQueue).rr(u)}(i.localStore,e)):L(6720,"Unknown batchState",{wu:t}),await en(i,s)):C($r,"Cannot apply mutation batch with id: "+e)}async function GT(r,e){let t=F(r);if(Ja(t),ld(t),e===!0&&t.fu!==!0){let n=t.sharedClientState.getAllActiveQueryTargets(),i=await eg(t,n.toArray());t.fu=!0,await mh(t.remoteStore,!0);for(let s of i)Ha(t.remoteStore,s)}else if(e===!1&&t.fu!==!1){let n=[],i=Promise.resolve();t.Tu.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?n.push(o):i=i.then(()=>(Fr(t,o),xr(t.localStore,o,!0))),Lr(t.remoteStore,o)}),await i,await eg(t,n),function(o){let c=F(o);c.Eu.forEach((u,h)=>{Lr(c.remoteStore,h)}),c.Au.jr(),c.Eu=new Map,c.du=new ie(x.comparator)}(t),t.fu=!1,await mh(t.remoteStore,!1)}}async function eg(r,e,t){let n=F(r),i=[],s=[];for(let o of e){let c,u=n.Tu.get(o);if(u&&u.length!==0){c=await ya(n.localStore,Be(u[0]));for(let h of u){let f=n.Pu.get(h),m=await jT(n,f);m.snapshot&&s.push(m.snapshot)}}else{let h=await R_(n.localStore,o);c=await ya(n.localStore,h),await od(n,j_(h),o,!1,c.resumeToken)}i.push(c)}return n.hu.J_(s),i}function j_(r){return Bg(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function WT(r){return function(t){return F(F(t).persistence).Ps()}(F(r).localStore)}async function KT(r,e,t,n){let i=F(r);if(i.fu)return void C($r,"Ignoring unexpected query state notification.");let s=i.Tu.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{let o=await P_(i.localStore,jg(s[0])),c=is.createSynthesizedRemoteEventForCurrentChange(e,t==="current",pe.EMPTY_BYTE_STRING);await en(i,o,c);break}case"rejected":await xr(i.localStore,e,!0),Fr(i,e,n);break;default:L(64155,t)}}async function HT(r,e,t){let n=Ja(r);if(n.fu){for(let i of e){if(n.Tu.has(i)&&n.sharedClientState.isActiveQueryTarget(i)){C($r,"Adding an already active target "+i);continue}let s=await R_(n.localStore,i),o=await ya(n.localStore,s);await od(n,j_(s),o.targetId,!1,o.resumeToken),Ha(n.remoteStore,o)}for(let i of t)n.Tu.has(i)&&await xr(n.localStore,i,!1).then(()=>{Lr(n.remoteStore,i),Fr(n,i)}).catch(Xt)}}function Ja(r){let e=F(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=B_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=LT.bind(null,e),e.hu.J_=CT.bind(null,e.eventManager),e.hu.pu=DT.bind(null,e.eventManager),e}function ld(r){let e=F(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=MT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=FT.bind(null,e),e}var xn=class{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Wa(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return A_(this.persistence,new _a,e.initialUser,this.serializer)}Du(e){return new cs(ma.Vi,this.serializer)}bu(e){return new Ea}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}};xn.provider={build:()=>new xn};var bh=class extends xn{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){q(this.persistence.referenceDelegate instanceof ga,46915);let n=this.persistence.referenceDelegate.garbageCollector;return new da(n,e.asyncQueue,t)}Du(e){let t=this.cacheSizeBytes!==void 0?Ve.withCacheSize(this.cacheSizeBytes):Ve.DEFAULT;return new cs(n=>ga.Vi(n,t),this.serializer)}},ka=class extends xn{constructor(e,t,n){super(),this.Mu=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Mu.initialize(this,e),await ld(this.Mu.syncEngine),await jr(this.Mu.remoteStore),await this.persistence.ji(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}vu(e){return A_(this.persistence,new _a,e.initialUser,this.serializer)}Cu(e,t){let n=this.persistence.referenceDelegate.garbageCollector;return new da(n,e.asyncQueue,t)}Fu(e,t){let n=new Xu(t,this.persistence);return new Yu(e.asyncQueue,n)}Du(e){let t=T_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Ve.withCacheSize(this.cacheSizeBytes):Ve.DEFAULT;return new Zl(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,O_(),Fo(),this.serializer,this.sharedClientState,!!this.forceOwnership)}bu(e){return new Ea}},Sh=class extends ka{constructor(e,t){super(e,t,!1),this.Mu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);let t=this.Mu.syncEngine;this.sharedClientState instanceof zi&&(this.sharedClientState.syncEngine={Do:$T.bind(null,t),vo:KT.bind(null,t),Co:HT.bind(null,t),Ps:WT.bind(null,t),bo:zT.bind(null,t)},await this.sharedClientState.start()),await this.persistence.ji(async n=>{await GT(this.Mu.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())})}bu(e){let t=O_();if(!zi.C(t))throw new V(P.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");let n=T_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new zi(t,e.asyncQueue,n,e.clientId,e.initialUser)}},Ln=class{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Zm(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=BT.bind(null,this.syncEngine),await mh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new yh}()}createDatastore(e){let t=Wa(e.databaseInfo.databaseId),n=function(s){return new ch(s)}(e.databaseInfo);return function(s,o,c,u){return new dh(s,o,c,u)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,i,s,o,c){return new ph(n,i,s,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Zm(this.syncEngine,t,0),function(){return Ta.C()?new Ta:new ih}())}createSyncEngine(e,t){return function(i,s,o,c,u,h,f){let m=new Th(i,s,o,c,u,h);return f&&(m.fu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){let s=F(i);C(Vn,"RemoteStore shutting down."),s.Ia.add(5),await gs(s),s.Ea.shutdown(),s.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}};Ln.provider={build:()=>new Ln};var Rh=class{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):ue("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}};var Yt="FirestoreClient",Ph=class{constructor(e,t,n,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=de.UNAUTHENTICATED,this.clientId=$i.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,async o=>{C(Yt,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(C(Yt,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new je;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){let n=Qa(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}};async function Bu(r,e){r.asyncQueue.verifyOperationInProgress(),C(Yt,"Initializing OfflineComponentProvider");let t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await b_(e.localStore,i),n=i)}),e.persistence.setDatabaseDeletedListener(()=>{wt("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then(()=>{C("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(i=>{wt("Terminating Firestore due to IndexedDb database deletion failed",i)})}),r._offlineComponents=e}async function tg(r,e){r.asyncQueue.verifyOperationInProgress();let t=await z_(r);C(Yt,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>Jm(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>Jm(e.remoteStore,i)),r._onlineComponents=e}async function z_(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){C(Yt,"Using user provided OfflineComponentProvider");try{await Bu(r,r._uninitializedComponentsProvider._offline)}catch(e){let t=e;if(!function(i){return i.name==="FirebaseError"?i.code===P.FAILED_PRECONDITION||i.code===P.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;wt("Error using user provided cache. Falling back to memory cache: "+t),await Bu(r,new xn)}}else C(Yt,"Using default OfflineComponentProvider"),await Bu(r,new bh(void 0));return r._offlineComponents}async function $_(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(C(Yt,"Using user provided OnlineComponentProvider"),await tg(r,r._uninitializedComponentsProvider._online)):(C(Yt,"Using default OnlineComponentProvider"),await tg(r,new Ln))),r._onlineComponents}function QT(r){return z_(r).then(e=>e.localStore)}function JT(r){return $_(r).then(e=>e.syncEngine)}async function YT(r){let e=await $_(r),t=e.eventManager;return t.onListen=NT.bind(null,e.syncEngine),t.onUnlisten=OT.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=kT.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=VT.bind(null,e.syncEngine),t}function XT(r,e){let t=new je;return r.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{let c=await va(i,s,!0),u=new Na(s,c.qs),h=u.nu(c.documents),f=u.applyChanges(h,!1);o.resolve(f.snapshot)}catch(c){let u=Qa(c,`Failed to execute query '${s} against cache`);o.reject(u)}}(await QT(r),e,t)),t.promise}function ZT(r,e,t={}){let n=new je;return r.asyncQueue.enqueueAndForget(async()=>function(s,o,c,u,h){let f=new Rh({next:_=>{f.Ou(),o.enqueueAndForget(()=>PT(s,m)),_.fromCache&&u.source==="server"?h.reject(new V(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),m=new Ih(c,f,{includeMetadataChanges:!0,ka:!0});return RT(s,m)}(await YT(r),r.asyncQueue,e,t,n)),n.promise}function G_(r){let e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}var ng=new Map;var W_="firestore.googleapis.com",rg=!0,Oa=class{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new V(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=W_,this.ssl=rg}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:rg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=g_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<I_)throw new V(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}rE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=G_((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new V(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new V(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new V(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}},Ur=class{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Oa({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Oa(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new qu;switch(n.type){case"firstParty":return new Gu(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new V(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){let n=ng.get(t);n&&(C("ComponentProvider","Removing Datastore"),ng.delete(t),n.terminate())}(this),Promise.resolve()}};function eA(r,e,t,n={}){var i;r=Pn(r,Ur);let s=dt(e),o=r._getSettings(),c=Object.assign(Object.assign({},o),{emulatorOptions:r._getEmulatorOptions()}),u=`${e}:${t}`;s&&(di(`https://${u}`),Ms("Firestore",!0)),o.host!==W_&&o.host!==u&&wt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");let h=Object.assign(Object.assign({},o),{host:u,ssl:s,emulatorOptions:n});if(!Ge(h,c)&&(r._setSettings(h),n.mockUserToken)){let f,m;if(typeof n.mockUserToken=="string")f=n.mockUserToken,m=de.MOCK_USER;else{f=If(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);let _=n.mockUserToken.sub||n.mockUserToken.user_id;if(!_)throw new V(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new de(_)}r._authCredentials=new ju(new Uo(f,m))}}var ls=class r{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new r(this.firestore,e,this._query)}},ke=class r{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new r(this.firestore,e,this._key)}toJSON(){return{type:r._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(ds(t,r._jsonSchema))return new r(e,n||null,new x(Z.fromString(t.referencePath)))}};ke._jsonSchemaVersion="firestore/documentReference/1.0",ke._jsonSchema={type:fe("string",ke._jsonSchemaVersion),referencePath:fe("string")};var Bt=class r extends ls{constructor(e,t,n){super(e,t,Jh(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new ke(this.firestore,null,new x(e))}withConverter(e){return new r(this.firestore,e,this._path)}};function K_(r,e,...t){if(r=ye(r),ug("collection","path",e),r instanceof Ur){let n=Z.fromString(e,...t);return Xp(n),new Bt(r,null,n)}{if(!(r instanceof ke||r instanceof Bt))throw new V(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=r._path.child(Z.fromString(e,...t));return Xp(n),new Bt(r.firestore,null,n)}}function H_(r,e,...t){if(r=ye(r),arguments.length===1&&(e=$i.newId()),ug("doc","path",e),r instanceof Ur){let n=Z.fromString(e,...t);return Yp(n),new ke(r,null,new x(n))}{if(!(r instanceof ke||r instanceof Bt))throw new V(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=r._path.child(Z.fromString(e,...t));return Yp(n),new ke(r.firestore,r instanceof Bt?r.converter:null,new x(n))}}var ig="AsyncQueue",Va=class{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Aa(this,"async_queue_retry"),this.oc=()=>{let n=Fo();n&&C(ig,"Visibility state changed to "+n.visibilityState),this.F_.y_()},this._c=e;let t=Fo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;let t=Fo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});let t=new je;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Zt(e))throw e;C(ig,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){let t=this._c.then(()=>(this.nc=!0,e().catch(n=>{throw this.tc=n,this.nc=!1,ue("INTERNAL UNHANDLED ERROR: ",sg(n)),n}).then(n=>(this.nc=!1,n))));return this._c=t,t}enqueueAfterDelay(e,t,n){this.ac(),this.sc.indexOf(e)>-1&&(t=0);let i=gh.createAndSchedule(this,e,t,n,s=>this.lc(s));return this.ec.push(i),i}ac(){this.tc&&L(47125,{hc:sg(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(let t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(let t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){let t=this.ec.indexOf(e);this.ec.splice(t,1)}};function sg(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}var Br=class extends Ur{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new Va,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new Va(e),this._firestoreClient=void 0,await e}}};function Q_(r,e,t){t||(t=Xi);let n=Kn(r,"firestore");if(n.isInitialized(t)){let i=n.getImmediate({identifier:t}),s=n.getOptions(t);if(Ge(s,e))return i;throw new V(P.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new V(P.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<I_)throw new V(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&dt(e.host)&&di(e.host),n.initialize({options:e,instanceIdentifier:t})}function J_(r,e){let t=typeof r=="object"?r:js(),n=typeof r=="string"?r:e||Xi,i=Kn(t,"firestore").getImmediate({identifier:n});if(!i._initialized){let s=vf("firestore");s&&eA(i,...s)}return i}function hd(r){if(r._terminated)throw new V(P.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||tA(r),r._firestoreClient}function tA(r){var e,t,n;let i=r._freezeSettings(),s=function(c,u,h,f){return new nl(c,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,G_(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new Ph(r._authCredentials,r._appCheckCredentials,r._queue,s,r._componentsProvider&&function(c){let u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(r._componentsProvider))}var qt=class r{constructor(e){this._byteString=e}static fromBase64String(e){try{return new r(pe.fromBase64String(e))}catch(t){throw new V(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new r(pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:r._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ds(e,r._jsonSchema))return r.fromBase64String(e.bytes)}};qt._jsonSchemaVersion="firestore/bytes/1.0",qt._jsonSchema={type:fe("string",qt._jsonSchemaVersion),bytes:fe("string")};var hs=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};var xa=class{constructor(e){this._methodName=e}};var jt=class r{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return z(this._lat,e._lat)||z(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:r._jsonSchemaVersion}}static fromJSON(e){if(ds(e,r._jsonSchema))return new r(e.latitude,e.longitude)}};jt._jsonSchemaVersion="firestore/geoPoint/1.0",jt._jsonSchema={type:fe("string",jt._jsonSchemaVersion),latitude:fe("number"),longitude:fe("number")};var zt=class r{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,i){if(n.length!==i.length)return!1;for(let s=0;s<n.length;++s)if(n[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:r._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ds(e,r._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new r(e.vectorValues);throw new V(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}};zt._jsonSchemaVersion="firestore/vectorValue/1.0",zt._jsonSchema={type:fe("string",zt._jsonSchemaVersion),vectorValues:fe("object")};var nA=/^__.*__$/,Ch=class{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new at(e,this.data,this.fieldMask,t,this.fieldTransforms):new Qt(e,this.data,t,this.fieldTransforms)}};function Y_(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L(40011,{Ec:r})}}var Dh=class r{constructor(e,t,n,i,s,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new r(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;let n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:n,mc:!1});return i.fc(e),i}gc(e){var t;let n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:n,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return La(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Y_(this.Ec)&&nA.test(e))throw this.wc('Document fields cannot begin and end with "__"')}},Nh=class{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Wa(e)}Dc(e,t,n,i=!1){return new Dh({Ec:e,methodName:t,bc:n,path:ge.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function rA(r){let e=r._freezeSettings(),t=Wa(r._databaseId);return new Nh(r._databaseId,!!e.ignoreUndefinedProperties,t)}function iA(r,e,t,n,i,s={}){let o=r.Dc(s.merge||s.mergeFields?2:0,e,t,i);ty("Data must be an object, but it was:",o,n);let c=Z_(n,o),u,h;if(s.merge)u=new Qe(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){let f=[];for(let m of s.mergeFields){let _=sA(e,m,t);if(!o.contains(_))throw new V(P.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);aA(f,_)||f.push(_)}u=new Qe(f),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new Ch(new Fe(c),u,h)}function X_(r,e){if(ey(r=ye(r)))return ty("Unsupported field value:",e,r),Z_(r,e);if(r instanceof xa)return function(n,i){if(!Y_(i.Ec))throw i.wc(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${n._methodName}() is not currently supported inside arrays`);let s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(n,i){let s=[],o=0;for(let c of n){let u=X_(c,i.yc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(r,e)}return function(n,i){if((n=ye(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return qE(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){let s=oe.fromDate(n);return{timestampValue:kr(i.serializer,s)}}if(n instanceof oe){let s=new oe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:kr(i.serializer,s)}}if(n instanceof jt)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof qt)return{bytesValue:t_(i.serializer,n._byteString)};if(n instanceof ke){let s=i.databaseId,o=n.firestore._databaseId;if(!o.isEqual(s))throw i.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Zh(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof zt)return function(o,c){return{mapValue:{fields:{[Wh]:{stringValue:Kh},[br]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw c.wc("VectorValues must only contain numeric values.");return Xh(c.serializer,h)})}}}}}}(n,i);throw i.wc(`Unsupported field value: ${Fh(n)}`)}(r,e)}function Z_(r,e){let t={};return Sg(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Mn(r,(n,i)=>{let s=X_(i,e.Vc(n));s!=null&&(t[n]=s)}),{mapValue:{fields:t}}}function ey(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof oe||r instanceof jt||r instanceof qt||r instanceof ke||r instanceof xa||r instanceof zt)}function ty(r,e,t){if(!ey(t)||!lg(t)){let n=Fh(t);throw n==="an object"?e.wc(r+" a custom object"):e.wc(r+" "+n)}}function sA(r,e,t){if((e=ye(e))instanceof hs)return e._internalPath;if(typeof e=="string")return ny(r,e);throw La("Field path arguments must be of type string or ",r,!1,void 0,t)}var oA=new RegExp("[~\\*/\\[\\]]");function ny(r,e,t){if(e.search(oA)>=0)throw La(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new hs(...e.split("."))._internalPath}catch{throw La(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function La(r,e,t,n,i){let s=n&&!n.isEmpty(),o=i!==void 0,c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${n}`),o&&(u+=` in document ${i}`),u+=")"),new V(P.INVALID_ARGUMENT,c+r+u)}function aA(r,e){return r.some(t=>t.isEqual(e))}var Ma=class{constructor(e,t,n,i,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let e=new kh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(ry("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},kh=class extends Ma{data(){return super.data()}};function ry(r,e){return typeof e=="string"?ny(r,e):e instanceof hs?e._internalPath:e._delegate._internalPath}function cA(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new V(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var Oh=class{convertValue(e,t="none"){switch($t(e)){case 0:return null;case 1:return e.booleanValue;case 2:return se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Tt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw L(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let n={};return Mn(e,(i,s)=>{n[i]=this.convertValue(s,t)}),n}convertVectorValue(e){var t,n,i;let s=(i=(n=(t=e.fields)===null||t===void 0?void 0:t[br].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(o=>se(o.doubleValue));return new zt(s)}convertGeoPoint(e){return new jt(se(e.latitude),se(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=za(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Yi(e));default:return null}}convertTimestamp(e){let t=Et(e);return new oe(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=Z.fromString(e);q(h_(n),9688,{name:e});let i=new Ar(n.get(1),n.get(3)),s=new x(n.popFirst(5));return i.isEqual(t)||ue(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}};function uA(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}var hr=class{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}},pr=class r extends Ma{constructor(e,t,n,i,s,o){super(e,t,n,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new mr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(ry("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new V(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");let e=this._document,t={};return t.type=r._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}};pr._jsonSchemaVersion="firestore/documentSnapshot/1.0",pr._jsonSchema={type:fe("string",pr._jsonSchemaVersion),bundleSource:fe("string","DocumentSnapshot"),bundleName:fe("string"),bundle:fe("string")};var mr=class extends pr{data(e={}){return super.data(e)}},Sn=class r{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new hr(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new mr(this._firestore,this._userDataWriter,n.key,n,new hr(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(c=>{let u=new mr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new hr(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{let u=new mr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new hr(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter),h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:lA(c.type),doc:u,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new V(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");let e={};e.type=r._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=$i.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;let t=[],n=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(t.push(s._document),n.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}};function lA(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L(61501,{type:r})}}Sn._jsonSchemaVersion="firestore/querySnapshot/1.0",Sn._jsonSchema={type:fe("string",Sn._jsonSchemaVersion),bundleSource:fe("string","QuerySnapshot"),bundleName:fe("string"),bundle:fe("string")};var Fa=class extends Oh{constructor(e){super(),this.firestore=e}convertBytes(e){return new qt(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new ke(this.firestore,null,t)}};function iy(r){r=Pn(r,ls);let e=Pn(r.firestore,Br),t=hd(e),n=new Fa(e);return cA(r._query),ZT(t,r._query).then(i=>new Sn(e,n,r,i))}function sy(r){r=Pn(r,ls);let e=Pn(r.firestore,Br),t=hd(e),n=new Fa(e);return XT(t,r._query).then(i=>new Sn(e,n,r,i))}function oy(r,e,t){r=Pn(r,ke);let n=Pn(r.firestore,Br),i=uA(r.converter,e,t);return hA(n,[iA(rA(n),"setDoc",r._key,i,r.converter!==null,t).toMutation(r._key,Je.none())])}function hA(r,e){return function(n,i){let s=new je;return n.asyncQueue.enqueueAndForget(async()=>xT(await JT(n),i,s)),s.promise}(hd(r),e)}var Vh=class{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=dA(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}};function ay(r){return new Vh(r)}var xh=class{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Ln.provider,this._offlineComponentProvider={build:t=>new ka(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}},Lh=class{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Ln.provider,this._offlineComponentProvider={build:t=>new Sh(t,e==null?void 0:e.cacheSizeBytes)}}};function dA(r){return new xh(r==null?void 0:r.forceOwnership)}function cy(){return new Lh}(function(e,t=!0){(function(i){qr=i})(Nt),Dt(new qe("firestore",(n,{instanceIdentifier:i,options:s})=>{let o=n.getProvider("app").getImmediate(),c=new Br(new zu(n.getProvider("auth-internal")),new Wu(o,n.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new V(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ar(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),We(Kp,Hp,e),We(Kp,Hp,"esm2017")})();var Un=window.NT_CONFIG,fA=!!(Un&&Un.apiKey&&Un.projectId&&Un.appId&&!String(Un.apiKey).startsWith("INCOLLA")&&!String(Un.projectId).startsWith("INCOLLA"));fA?pA():window.NT_ERRORE_CONFIG=!0;function pA(){let r=Gc(Un),e=Ru(r),t;try{t=Q_(r,{localCache:ay({tabManager:cy()})})}catch{t=J_(r)}let n="nutritrack.app",i=h=>`${String(h).trim().toLowerCase()}@${n}`,s=(h,f)=>({uid:h.uid,username:f||h.displayName||(h.email||"").split("@")[0]}),o=h=>`nt_sync_${h}`;function c(h,f){return new Promise((m,_)=>{let S=setTimeout(()=>_(new Error("timeout")),f);h.then(D=>{clearTimeout(S),m(D)},D=>{clearTimeout(S),_(D)})})}function u(h){let f={};return h.forEach(m=>{let _=m.data().v;typeof _=="string"&&(f[m.id]=_)}),f}window.NT={attendiUtente(){return new Promise(h=>{let f=Tu(e,m=>{f(),h(m?s(m):null)})})},async registra(h,f){let m=await Iu(e,i(h),f);try{await Eu(m.user,{displayName:h})}catch{}try{localStorage.setItem(o(m.user.uid),"1")}catch{}return s(m.user,h)},async accedi(h,f){let m=await wu(e,i(h),f);return s(m.user)},async esci(){await Au(e)},async carica(h){let f=K_(t,"users",h,"dati"),m=null;try{m=await c(iy(f),1e4)}catch{m=null}let _=!1;try{_=localStorage.getItem(o(h))==="1"}catch{}if(m&&!m.metadata.fromCache){try{localStorage.setItem(o(h),"1")}catch{}return{dati:u(m),daCache:!1}}if(!_){let S=new Error("offline");throw S.code="nt/offline",S}return m||(m=await sy(f)),{dati:u(m),daCache:!0}},salva(h,f,m){return oy(H_(t,"users",h,"dati",f),{v:m,agg:Date.now()})}}}})();
/*! Bundled license information:

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/component/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/logger/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/webchannel-wrapper/dist/bloom-blob/esm/bloom_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/webchannel-wrapper/dist/webchannel-blob/esm/webchannel_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law | agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
