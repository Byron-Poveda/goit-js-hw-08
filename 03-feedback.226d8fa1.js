function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="Expected a function",r=NaN,o="[object Symbol]",i=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,m=s||d||Function("return this")(),g=Object.prototype.toString,p=Math.max,v=Math.min,b=function(){return m.Date.now()};function y(e,t,n){var r,o,i,l,u,f,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(a);function g(t){var n=r,a=o;return r=o=void 0,c=t,l=e.apply(a,n)}function y(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=i}function h(){var e=b();if(y(e))return j(e);u=setTimeout(h,function(e){var n=t-(e-f);return d?v(n,i-(e-c)):n}(e))}function j(e){return u=void 0,m&&r?g(e):(r=o=void 0,l)}function T(){var e=b(),n=y(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return function(e){return c=e,u=setTimeout(h,t),s?g(e):l}(f);if(d)return u=setTimeout(h,t),g(f)}return void 0===u&&(u=setTimeout(h,t)),l}return t=O(t)||0,S(n)&&(s=!!n.leading,i=(d="maxWait"in n)?p(O(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=f=o=u=void 0},T.flush=function(){return void 0===u?l:j(b())},T}function S(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function O(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&g.call(e)==o}(e))return r;if(S(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=S(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=u.test(e);return n||f.test(e)?c(e.slice(2),n?2:8):l.test(e)?r:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(a);return S(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};const h=document.querySelector('[name="email"]'),j=document.querySelector('[name="message"]'),T=e(t)((e=>{const t={emailData:h.value,messageData:j.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),1e3);JSON.parse(localStorage.getItem("feedback-form-state"))?(h.value=JSON.parse(localStorage.getItem("feedback-form-state")).emailData,j.value=JSON.parse(localStorage.getItem("feedback-form-state")).messageData):(h.value="",j.value=""),document.querySelector("form").addEventListener("submit",(e=>{e.preventDefault();try{console.log(`Valor del input: ${JSON.parse(localStorage.getItem("feedback-form-state")).emailData} \n Valor del textarea: ${JSON.parse(localStorage.getItem("feedback-form-state")).messageData}`)}catch{alert("Por favor llene los espacios en blanco para poder enviar el formulario :)")}localStorage.clear(),e.currentTarget.reset()})),h.addEventListener("input",T),j.addEventListener("input",T);
//# sourceMappingURL=03-feedback.226d8fa1.js.map