!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.droply=t():e.droply=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=7)}([function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(n[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&n[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),e.push(i))}},e}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o="data:image/jpeg;base64,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";t.default={props:{url:{type:String,required:!0},limitInMB:{type:Number,default:5}},data:function(){return{uploadList:[],previewList:[],allUpload:!1,FILE_SIZE_LIMIT:1048576*this.limitInMB}},methods:{fileReader:function(e,t){var r=new FileReader;r.onload=function(e){t&&t(e.target.result)},r.readAsDataURL(e)},handleWrapperClick:function(){this.$refs.fileInput.click()},handleChange:function(e){var t=this,r=!0,n=!1,a=void 0;try{for(var i,A=e.target.files[Symbol.iterator]();!(r=(i=A.next()).done);r=!0)!function(){var e=i.value;console.log(e),e.size>t.FILE_SIZE_LIMIT?alert("文件"+e.name+",超出大小限制！"):-1===e.type.indexOf("image")?(t.previewList.push({data:o,isUploaded:!1}),t.uploadList.push(e)):t.fileReader(e,function(r){t.previewList.push({data:r,isUploaded:!1}),t.uploadList.push(e)})}()}catch(e){n=!0,a=e}finally{try{!r&&A.return&&A.return()}finally{if(n)throw a}}console.log(this.previewList)},handleRemove:function(e){this.uploadList.splice(e,1),this.previewList.splice(e,1)},handleDrop:function(e){var t=this,r=!0,a=!1,i=void 0;try{for(var A,s=e.dataTransfer.files[Symbol.iterator]();!(r=(A=s.next()).done);r=!0){var p=function(){var e=A.value;if(t.uploadList.some(function(t){return t.name===e.name}))return{v:void 0};e.size>t.FILE_SIZE_LIMIT?alert("文件"+e.name+",超出大小限制！"):-1===e.type.indexOf("image")?(t.previewList.push({data:o,isUploaded:!1}),t.uploadList.push(e)):t.fileReader(e,function(r){t.previewList.push({data:r,isUploaded:!1}),t.uploadList.push(e)})}();if("object"===(void 0===p?"undefined":n(p)))return p.v}}catch(e){a=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(a)throw i}}},handleUpload:function(){var e=this;if(!this.uploadList.length)return void alert("请选择上传文件！");if(!this.url)throw new Error("url is undefined");var t=this.uploadList.length,r=0;this.uploadList.forEach(function(n){var o=new FormData;o.append("file",n);var a=new XMLHttpRequest;a.open("post",e.url,!0),a.onload=function(){a.status>=200&&a.status<207?(e.previewList[r].isUploaded=!0,e.$emit("onProgress",r++/t,n),r===t&&(e.allUpload=!0,e.$emit("onSuccess",JSON.parse(a.response)))):e.$emit("onError",a)},a.send(o)})},handleDragEnter:function(e){this.$emit("dragenter")},handleDragLeave:function(e){this.$emit("dragleave")},fileSize:function(e){return e/1024/1024<1?(e/1024).toFixed(2)+"KB":(e/1024/1024).toFixed(2)+"MB"}},mounted:function(){document.addEventListener("drop",function(e){e.preventDefault()})}}},function(e,t){e.exports=function(e,t,r,n,o){var a,i=e=e||{},A=typeof e.default;"object"!==A&&"function"!==A||(a=e,i=e.default);var s="function"==typeof i?i.options:i;t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n);var p;if(o?(p=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},s._ssrRegister=p):r&&(p=r),p){var d=s.functional,l=d?s.render:s.beforeCreate;d?s.render=function(e,t){return p.call(t),l(e,t)}:s.beforeCreate=l?[].concat(l,p):[p]}return{esModule:a,exports:i,options:s}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{ref:"dropzone",staticClass:"dropzone-wrapper clearfix",on:{click:e.handleWrapperClick,dragover:function(e){e.preventDefault()},dragenter:e.handleDragEnter,dragleave:e.handleDragLeave,drop:function(t){t.preventDefault(),e.handleDrop(t)}}},[e.uploadList.length?r("ul",{staticClass:"preview-list",on:{click:function(e){e.stopPropagation()}}},e._l(e.previewList,function(t,n){return r("li",{staticClass:"preview-wrapper"},[r("figure",[r("transition",{attrs:{name:"fly-top"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.isUploaded,expression:"item.isUploaded"}],staticClass:"progress"})]),e._v(" "),r("img",{attrs:{src:t.data}}),e._v(" "),r("figcaption",[r("h5",[e._v(e._s(e.uploadList[n].name))]),e._v(" "),r("a",{staticClass:"close",on:{click:function(t){e.handleRemove(n)}}},[e._v("移除("+e._s(e.fileSize(e.uploadList[n].size))+")")])])],1)])})):e._t("default"),e._v(" "),r("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file",name:"file",multiple:"multiple"},on:{change:e.handleChange}}),e._v(" "),r("div",{staticClass:"btn-group"},[e.uploadList.length&&!e.allUpload?r("input",{attrs:{type:"button",value:"上传"},on:{click:function(t){t.stopPropagation(),e.handleUpload(t)}}}):e._e()])],2)},staticRenderFns:[]}},function(e,t,r){var n=r(5);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(8)("65d7c0d8",n,!0)},function(e,t,r){t=e.exports=r(0)(),t.i(r(6),""),t.push([e.i,".dropzone-wrapper[data-v-0edc7e69]{position:relative;width:100%;padding:40px 30px;border:4px dashed #cbb3c2;font-size:40px;color:#d1d1d1;user-select:none;transition:.5s;background-color:#fff;cursor:pointer}.dropzone-wrapper[data-v-0edc7e69]:hover{background-color:#e8fffd}.dropzone-wrapper .preview-wrapper[data-v-0edc7e69]{position:relative;float:left;width:250px;margin-top:10px;transition:.4s;font-size:20px}.dropzone-wrapper .preview-wrapper figure[data-v-0edc7e69]{position:relative;overflow:hidden;width:250px;height:250px}.dropzone-wrapper .preview-wrapper figure img[data-v-0edc7e69]{width:250px;height:250px;transition:transform .4s}.dropzone-wrapper .preview-wrapper figure figcaption[data-v-0edc7e69]{width:100%;height:80px;padding:10px;transform:translateY(0);background-color:#2c3f50;color:#ed4466;opacity:0;transition:transform .4s,opacity .3s}.dropzone-wrapper .preview-wrapper figure figcaption h5[data-v-0edc7e69]{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;text-align:left}.dropzone-wrapper .preview-wrapper figure figcaption .close[data-v-0edc7e69]{display:block;margin-top:5px;border:1px solid #eee;background-color:#fff;transition:.4s}.dropzone-wrapper .preview-wrapper figure figcaption .close[data-v-0edc7e69]:hover{background-color:#636363;color:#fff}.dropzone-wrapper .preview-wrapper figure .progress[data-v-0edc7e69]{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#56ffa1;opacity:.2}.dropzone-wrapper .preview-wrapper:hover figure img[data-v-0edc7e69]{transform:translateY(-30px)}.dropzone-wrapper .preview-wrapper:hover figure figcaption[data-v-0edc7e69]{transform:translateY(-100%);opacity:1}.dropzone-wrapper .btn-group[data-v-0edc7e69]{position:absolute;left:50%;bottom:0;transform:translateX(-40px)}.dropzone-wrapper .btn-group input[data-v-0edc7e69]{font-size:20px;width:80px;border:1px solid gray;transition:.4s}.dropzone-wrapper .btn-group input[data-v-0edc7e69]:hover{border-color:#fff;background-color:gray;color:#fff}.fly-top-enter-active[data-v-0edc7e69],.fly-top-leave-active[data-v-0edc7e69]{transition:transform .2s cubic-bezier(.55,.53,.25,.94)}.fly-top-enter[data-v-0edc7e69],.fly-top-leave-active[data-v-0edc7e69]{transform:translate3d(0,-100%,0)}",""])},function(e,t,r){t=e.exports=r(0)(),t.push([e.i,'body,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,legend,ol,p,ul{margin:0;padding:0}body{font-family:PingFang SC,Helvetica Neue,Helvetica,Arial,Microsoft YaHei,微软雅黑,sans-serif}ol,ul{list-style:none!important}b,em,h1,h2,h3,h4,h5,h6,i,strong{font-weight:400;font-style:normal}a{text-decoration:none;color:#000;-webkit-tap-highlight-color:rgba(0,0,0,0)}img{vertical-align:middle}img,input{border:none}input{padding:0;background:none;-webkit-tap-highlight-color:transparent;-webkit-appearance:none}textarea{resize:none}button,input,select,textarea{outline:0}legend{border:0}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}.clearfix:after{content:"";display:block;clear:both;overflow:hidden;height:0;visibility:hidden}.clearfix{zoom:1}',""])},function(e,t,r){function n(e){r(4)}var o=r(2)(r(1),r(3),n,"data-v-0edc7e69",null);e.exports=o.exports},function(e,t,r){function n(e){for(var t=0;t<e.length;t++){var r=e[t],n=d[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(a(r.parts[o]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{for(var i=[],o=0;o<r.parts.length;o++)i.push(a(r.parts[o]));d[r.id]={id:r.id,refs:1,parts:i}}}}function o(){var e=document.createElement("style");return e.type="text/css",l.appendChild(e),e}function a(e){var t,r,n=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(n){if(u)return v;n.parentNode.removeChild(n)}if(h){var a=f++;n=c||(c=o()),t=i.bind(null,n,a,!1),r=i.bind(null,n,a,!0)}else n=o(),t=A.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}function i(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function A(e,t){var r=t.css,n=t.media,o=t.sourceMap;if(n&&e.setAttribute("media",n),o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var p=r(9),d={},l=s&&(document.head||document.getElementsByTagName("head")[0]),c=null,f=0,u=!1,v=function(){},h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,r){u=r;var o=p(e,t);return n(o),function(t){for(var r=[],a=0;a<o.length;a++){var i=o[a],A=d[i.id];A.refs--,r.push(A)}t?(o=p(e,t),n(o)):o=[];for(var a=0;a<r.length;a++){var A=r[a];if(0===A.refs){for(var s=0;s<A.parts.length;s++)A.parts[s]();delete d[A.id]}}}};var g=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var r=[],n={},o=0;o<t.length;o++){var a=t[o],i=a[0],A=a[1],s=a[2],p=a[3],d={id:e+":"+o,css:A,media:s,sourceMap:p};n[i]?n[i].parts.push(d):r.push(n[i]={id:i,parts:[d]})}return r}}])});
//# sourceMappingURL=mdc-dropzone.js.map