import{s as U,n as Y,r as Z}from"../chunks/scheduler.xZJLFhf8.js";import{S as q,i as D,w as P,x as L,y as B,n as h,o as v,z as E,t as M,b as O,g as _,d as u,e as b,j as C,c as w,a as R,k as T,f as d,h as k,p as x,l as tt,m as S,A as j,B as H,C as et,q as W,u as X,D as st}from"../chunks/index._22ZamY_.js";import{G as nt,T as at,a as lt,b as rt,e as J,l as it}from"../chunks/GraphBar.DoBgO8Hj.js";function ot(r){let e,n;return{c(){e=M(r[1]),n=M(" listens per listener")},l(t){e=O(t,r[1]),n=O(t," listens per listener")},m(t,s){_(t,e,s),_(t,n,s)},p:Y,d(t){t&&(u(e),u(n))}}}function ft(r){let e,n;return e=new nt({props:{title:r[0].playcount+" total plays / "+r[0].listeners+" total listeners",size:r[1]/10,$$slots:{default:[ot]},$$scope:{ctx:r}}}),{c(){P(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,s){B(e,t,s),n=!0},p(t,[s]){const i={};s&1&&(i.title=t[0].playcount+" total plays / "+t[0].listeners+" total listeners"),s&8&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function ct(r,e,n){let{artist:t}=e,s=i();function i(){return Math.round(t.playcount/t.listeners)}return r.$$set=l=>{"artist"in l&&n(0,t=l.artist)},[t,s]}class ut extends q{constructor(e){super(),D(this,e,ct,ft,U,{artist:0})}}function pt(r){let e,n,t,s,i,l,o;return t=new lt({props:{title:r[0].name}}),l=new ut({props:{artist:r[0]}}),{c(){e=b("td"),n=b("p"),P(t.$$.fragment),s=C(),i=b("p"),P(l.$$.fragment),this.h()},l(a){e=w(a,"TD",{class:!0});var p=R(e);n=w(p,"P",{class:!0});var g=R(n);L(t.$$.fragment,g),g.forEach(u),s=T(p),i=w(p,"P",{class:!0});var m=R(i);L(l.$$.fragment,m),m.forEach(u),p.forEach(u),this.h()},h(){d(n,"class","svelte-1bm0020"),d(i,"class","svelte-1bm0020"),d(e,"class","svelte-1bm0020")},m(a,p){_(a,e,p),k(e,n),B(t,n,null),k(e,s),k(e,i),B(l,i,null),o=!0},p(a,p){const g={};p&1&&(g.title=a[0].name),t.$set(g);const m={};p&1&&(m.artist=a[0]),l.$set(m)},i(a){o||(h(t.$$.fragment,a),h(l.$$.fragment,a),o=!0)},o(a){v(t.$$.fragment,a),v(l.$$.fragment,a),o=!1},d(a){a&&u(e),E(t),E(l)}}}function mt(r){let e,n;return e=new at({props:{$$slots:{default:[pt]},$$scope:{ctx:r}}}),{c(){P(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,s){B(e,t,s),n=!0},p(t,[s]){const i={};s&3&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function $t(r,e,n){let{artist:t}=e;return r.$$set=s=>{"artist"in s&&n(0,t=s.artist)},[t]}class _t extends q{constructor(e){super(),D(this,e,$t,mt,U,{artist:0})}}function K(r,e,n){const t=r.slice();return t[4]=e[n],t}function Q(r){let e,n;return e=new rt({props:{$$slots:{default:[ht]},$$scope:{ctx:r}}}),{c(){P(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,s){B(e,t,s),n=!0},p(t,s){const i={};s&130&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function V(r){let e,n;return e=new _t({props:{artist:r[4]}}),{c(){P(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,s){B(e,t,s),n=!0},p(t,s){const i={};s&2&&(i.artist=t[4]),e.$set(i)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function ht(r){let e,n,t=J(r[1]),s=[];for(let l=0;l<t.length;l+=1)s[l]=V(K(r,t,l));const i=l=>v(s[l],1,1,()=>{s[l]=null});return{c(){for(let l=0;l<s.length;l+=1)s[l].c();e=x()},l(l){for(let o=0;o<s.length;o+=1)s[o].l(l);e=x()},m(l,o){for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(l,o);_(l,e,o),n=!0},p(l,o){if(o&2){t=J(l[1]);let a;for(a=0;a<t.length;a+=1){const p=K(l,t,a);s[a]?(s[a].p(p,o),h(s[a],1)):(s[a]=V(p),s[a].c(),h(s[a],1),s[a].m(e.parentNode,e))}for(X(),a=t.length;a<s.length;a+=1)i(a);W()}},i(l){if(!n){for(let o=0;o<t.length;o+=1)h(s[o]);n=!0}},o(l){s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)v(s[o]);n=!1},d(l){l&&u(e),st(s,l)}}}function gt(r){let e,n,t,s,i,l="Add artist",o,a,p="Fanaticism calculator.",g,m,G=`Use this tool to analyze how much fanaticism an artist has. i.e: how much it
    gets listened to, on average, by each listener.`,N,y,z,F,I,c=r[1].length>0&&Q(r);return{c(){e=C(),n=b("form"),t=b("input"),s=C(),i=b("button"),i.textContent=l,o=C(),a=b("p"),a.textContent=p,g=C(),m=b("p"),m.textContent=G,N=C(),c&&c.c(),y=x(),this.h()},l(f){tt("svelte-1fdrwn4",document.head).forEach(u),e=T(f),n=w(f,"FORM",{});var A=R(n);t=w(A,"INPUT",{type:!0,placeholder:!0,class:!0}),s=T(A),i=w(A,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),S(i)!=="svelte-cv9rih"&&(i.textContent=l),A.forEach(u),o=T(f),a=w(f,"P",{class:!0,"data-svelte-h":!0}),S(a)!=="svelte-ut1xkv"&&(a.textContent=p),g=T(f),m=w(f,"P",{class:!0,"data-svelte-h":!0}),S(m)!=="svelte-14lz65a"&&(m.textContent=G),N=T(f),c&&c.l(f),y=x(),this.h()},h(){document.title="Fanaticism calculator | Last.fm Tools",d(t,"type","text"),d(t,"placeholder","Artist name"),d(t,"class","svelte-vsesf8"),d(i,"type","submit"),d(i,"class","svelte-vsesf8"),d(a,"class","svelte-vsesf8"),d(m,"class","svelte-vsesf8")},m(f,$){_(f,e,$),_(f,n,$),k(n,t),j(t,r[0]),k(n,s),k(n,i),_(f,o,$),_(f,a,$),_(f,g,$),_(f,m,$),_(f,N,$),c&&c.m(f,$),_(f,y,$),z=!0,F||(I=[H(t,"input",r[3]),H(n,"submit",et(r[2]))],F=!0)},p(f,[$]){$&1&&t.value!==f[0]&&j(t,f[0]),f[1].length>0?c?(c.p(f,$),$&2&&h(c,1)):(c=Q(f),c.c(),h(c,1),c.m(y.parentNode,y)):c&&(X(),v(c,1,1,()=>{c=null}),W())},i(f){z||(h(c),z=!0)},o(f){v(c),z=!1},d(f){f&&(u(e),u(n),u(o),u(a),u(g),u(m),u(N),u(y)),c&&c.d(f),F=!1,Z(I)}}}function dt(r,e,n){let t,s=[];async function i(){const o=await it.artist.getInfo(t);n(1,s=[...s,o]),n(0,t="")}function l(){t=this.value,n(0,t)}return[t,s,i,l]}class yt extends q{constructor(e){super(),D(this,e,dt,gt,U,{})}}export{yt as component};
