const e=Symbol("comlinkProxyValue"),t=["ArrayBuffer","MessagePort","OffscreenCanvas"].filter(e=>e in self).map(e=>self[e]),n=Math.floor(Math.random()*Number.MAX_SAFE_INTEGER),r=Symbol("throw"),a=new Map([["PROXY",{canHandle:t=>!!t&&!0===t[e],serialize:t=>{const{port1:n,port2:o}=new MessageChannel;return function(t,n){if(v(n)&&(n=c(n)),!f(n))throw Error("endpoint does not have all of addEventListener, removeEventListener and postMessage defined");p(n),d(n,async function(o){if(!o.data.id||!o.data.callPath)return;const s=o.data;let i=await s.callPath.slice(0,-1).reduce((e,t)=>e[t],t),l=await s.callPath.reduce((e,t)=>e[t],t),c=l,f=[];if("APPLY"!==s.type&&"CONSTRUCT"!==s.type||(f=s.argumentsList.map(u)),"APPLY"===s.type)try{c=await l.apply(i,f)}catch(e){(c=e)[r]=!0}if("CONSTRUCT"===s.type)try{c=function(t){const n=t;return n[e]=!0,n}(c=new l(...f))}catch(e){(c=e)[r]=!0}return"SET"===s.type&&(l[s.property]=s.value,c=!0),(c=function(e){for(const[t,n]of a)if(n.canHandle(e))return{value:{type:t,value:n.serialize(e)}};return{value:{type:"RAW",value:e}}}(c)).id=s.id,n.postMessage(c,w([c]))})}(t,n),o},deserialize:e=>s(e)}],["THROW",{canHandle:e=>e&&e[r],serialize:e=>Object.assign({},e,{message:e&&e.message,stack:e&&e.stack}),deserialize:e=>{throw Object.assign(Error(),e)}}]]);let o=0;function s(e,t){if(v(e)&&(e=c(e)),!f(e))throw Error("endpoint does not have all of addEventListener, removeEventListener and postMessage defined");return p(e),function e(t,n=[],r=function(){}){return new Proxy(r,{construct:(e,r,a)=>t({type:"CONSTRUCT",callPath:n,argumentsList:r}),apply:(r,a,o)=>"bind"===n[n.length-1]?e(t,n.slice(0,-1)):t({type:"APPLY",callPath:n,argumentsList:o}),get(r,a,o){if("then"===a&&0===n.length)return{then:()=>o};if("then"===a){const e=t({type:"GET",callPath:n});return Promise.resolve(e).then.bind(e)}return e(t,n.concat(a),r[a])},set:(e,r,a,o)=>t({type:"SET",callPath:n,property:r,value:a})})}(async t=>{let r=[];return"APPLY"!==t.type&&"CONSTRUCT"!==t.type||(r=t.argumentsList.map(i)),u((await function(e,t,r){const a=`${n}-${o++}`;return new Promise(n=>{d(e,function t(r){r.data.id===a&&(function(e,n){e.removeEventListener("message",t)}(e),n(r))}),t=Object.assign({},t,{id:a}),e.postMessage(t,r)})}(e,Object.assign({},t,{argumentsList:r}),w(r))).data.value)},[],t)}function i(e){for(const[t,n]of a)if(n.canHandle(e))return{type:t,value:n.serialize(e)};let t=[];for(const n of y(e))for(const[e,r]of a)r.canHandle(n.value)&&t.push({path:n.path,wrappedValue:{type:e,value:r.serialize(n.value)}});for(const n of t)n.path.slice(0,-1).reduce((e,t)=>e[t],e)[n.path[n.path.length-1]]=null;return{type:"RAW",value:e,wrappedChildren:t}}function u(e){if(a.has(e.type))return a.get(e.type).deserialize(e.value);if(function(e){return"RAW"===e.type}(e)){for(const t of e.wrappedChildren||[]){if(!a.has(t.wrappedValue.type))throw Error(`Unknown value type "${e.type}" at ${t.path.join(".")}`);const n=a.get(t.wrappedValue.type).deserialize(t.wrappedValue.value);l(e.value,t.path,n)}return e.value}throw Error(`Unknown value type "${e.type}"`)}function l(e,t,n){const r=t.slice(-1)[0];t.slice(0,-1).reduce((e,t)=>e[t],e)[r]=n}function c(e){if("Window"!==self.constructor.name)throw Error("self is not a window");return{addEventListener:self.addEventListener.bind(self),removeEventListener:self.removeEventListener.bind(self),postMessage:(t,n)=>e.postMessage(t,"*",n)}}function f(e){return"addEventListener"in e&&"removeEventListener"in e&&"postMessage"in e}function p(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.start()}function d(e,t){e.addEventListener("message",t)}function v(e){return["window","length","location","parent","opener"].every(t=>t in e)}function h(e){return t.some(t=>e instanceof t)}function*y(e,t=[],n=null){if(!e)return;if(n||(n=new WeakSet),n.has(e))return;if("string"==typeof e)return;if("object"==typeof e&&n.add(e),ArrayBuffer.isView(e))return;yield{value:e,path:t};const r=Object.keys(e);for(const a of r)yield*y(e[a],[...t,a],n)}function w(e){const t=[];for(const n of y(e))h(n.value)&&t.push(n.value);return t}var m="1.8.1".split(".")[0];export default function(e,t){void 0===t&&(t="https://squoosh.app");try{return e.src=t,Promise.resolve(new Promise(function(t){return e.onload=t})).then(function(){return e.contentWindow.postMessage("READY?","*"),Promise.resolve(new Promise(function(e){window.addEventListener("message",function t(n){var r=n.data;if(r&&"READY"===r.type){if(r.version!==m)throw Error("Version mismatch. SDK version "+m+", Squoosh version "+r.version);n.stopPropagation(),window.removeEventListener("message",t),e()}})})).then(function(){return s(e.contentWindow)})})}catch(e){return Promise.reject(e)}}
//# sourceMappingURL=sdk.mjs.map
