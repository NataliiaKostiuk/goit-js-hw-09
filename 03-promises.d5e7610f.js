!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r=i("6JpON"),u=document.querySelector(".form"),l=document.querySelector("input[name=amount"),a=document.querySelector("input[name=delay]"),c=document.querySelector("input[name=step]");function d(n,t){new Promise((function(e,o){Math.random()>.3?e({position:n,delay:t}):o({position:n,delay:t})})).then((function(n){var t=n.position,o=n.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(t+1," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(r).Notify.warning("❌ Rejected promise ".concat(t+1," in ").concat(o,"ms"))}))}document.querySelector("button").addEventListener("click",(function(n){if(n.preventDefault(),""!==l.value&&""!==a.value&&""!==c.value){var t=Number(l.value),o=Number(a.value),i=Number(c.value);!function(e,n,t){for(var o=0;o<e;o+=1)setTimeout(d,n,o,n),n+=t}(t,o,i),u.reset()}else e(r).Notify.warning("Please fill in all the fields!!!")}))}();
//# sourceMappingURL=03-promises.d5e7610f.js.map