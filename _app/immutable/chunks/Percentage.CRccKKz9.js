import{s as p,n as f}from"./scheduler.xZJLFhf8.js";import{S as g,i as v,e as P,t as u,c as S,a as b,b as m,d as c,f as h,g as F,h as _,s as N}from"./index._22ZamY_.js";function q(e){let t,r=d(e[0],e[1])+"",s,i,n;return{c(){t=P("span"),s=u(r),i=u("%"),this.h()},l(a){t=S(a,"SPAN",{title:!0});var o=b(t);s=m(o,r),i=m(o,"%"),o.forEach(c),this.h()},h(){h(t,"title",n=l(e[0])+" out of "+l(e[1]))},m(a,o){F(a,t,o),_(t,s),_(t,i)},p(a,[o]){o&3&&r!==(r=d(a[0],a[1])+"")&&N(s,r),o&3&&n!==(n=l(a[0])+" out of "+l(a[1]))&&h(t,"title",n)},i:f,o:f,d(a){a&&c(t)}}}function l(e){return new Intl.NumberFormat(navigator.language??"en-US").format(e)}function d(e,t){return(e*100/t).toFixed(2)}function w(e,t,r){let{part:s}=t,{total:i}=t;return e.$$set=n=>{"part"in n&&r(0,s=n.part),"total"in n&&r(1,i=n.total)},[s,i]}class C extends g{constructor(t){super(),v(this,t,w,q,p,{part:0,total:1})}}export{C as P};
