import{x as Ct,y as Pt,p as Y,h as yt,s as st,k as Ot,r as Et,n as O}from"../chunks/scheduler.xZJLFhf8.js";import{u as ot,o as C,q as ct,n as v,S as ut,i as it,w as I,x as z,y as M,z as S,s as E,t as F,f as N,b as U,g as T,j as rt,d as m,e as g,c as b,a as B,m as P,h as d,p as W,k as Nt,l as D,A as G,E as mt,B as Z,C as Bt,F as It,D as zt}from"../chunks/index.BLf1SSDG.js";import{G as Mt,P as wt,T as St,a as Rt,l as nt,b as Lt,e as kt}from"../chunks/GraphBar.fgZMbzyB.js";function dt(n,t){const r=t.token={};function e(a,l,s,c){if(t.token!==r)return;t.resolved=c;let o=t.ctx;s!==void 0&&(o=o.slice(),o[s]=c);const _=a&&(t.current=a)(o);let k=!1;t.block&&(t.blocks?t.blocks.forEach((f,u)=>{u!==l&&f&&(ot(),C(f,1,1,()=>{t.blocks[u]===f&&(t.blocks[u]=null)}),ct())}):t.block.d(1),_.c(),v(_,1),_.m(t.mount(),t.anchor),k=!0),t.block=_,t.blocks&&(t.blocks[l]=_),k&&yt()}if(Ct(n)){const a=Pt();if(n.then(l=>{Y(a),e(t.then,1,t.value,l),Y(null)},l=>{if(Y(a),e(t.catch,2,t.error,l),Y(null),!t.hasCatch)throw l}),t.current!==t.pending)return e(t.pending,0),!0}else{if(t.current!==t.then)return e(t.then,1,t.value,n),!0;t.resolved=n}}function Dt(n,t,r){const e=t.slice(),{resolved:a}=n;n.current===n.then&&(e[n.value]=a),n.current===n.catch&&(e[n.error]=a),n.block.p(e,r)}function Ft(n){let t=0;for(let r=0;r<n.length;r++){const e=n[r];t=t+e.playcount}return t}function Ut(n){let t,r,e,a;return t=new wt({props:{total:n[1],part:n[0]}}),{c(){I(t.$$.fragment),r=E(),e=F(n[2])},l(l){z(t.$$.fragment,l),r=N(l),e=U(l,n[2])},m(l,s){M(t,l,s),T(l,r,s),T(l,e,s),a=!0},p(l,s){const c={};s&2&&(c.total=l[1]),s&1&&(c.part=l[0]),t.$set(c),(!a||s&4)&&rt(e,l[2])},i(l){a||(v(t.$$.fragment,l),a=!0)},o(l){C(t.$$.fragment,l),a=!1},d(l){l&&(m(r),m(e)),S(t,l)}}}function qt(n){let t,r;return t=new Mt({props:{size:n[3],$$slots:{default:[Ut]},$$scope:{ctx:n}}}),{c(){I(t.$$.fragment)},l(e){z(t.$$.fragment,e)},m(e,a){M(t,e,a),r=!0},p(e,[a]){const l={};a&39&&(l.$$scope={dirty:a,ctx:e}),t.$set(l)},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){C(t.$$.fragment,e),r=!1},d(e){S(t,e)}}}function jt(n,t,r){let{part:e}=t,{total:a}=t,{text:l}=t,s=c();function c(){return Math.round(e*100/a)}return n.$$set=o=>{"part"in o&&r(0,e=o.part),"total"in o&&r(1,a=o.total),"text"in o&&r(2,l=o.text)},[e,a,l,s]}class $t extends ut{constructor(t){super(),it(this,t,jt,qt,st,{part:0,total:1,text:2})}}function Gt(n){let t,r,e,a,l,s,c,o,_,k;return e=new Rt({props:{title:"#"+n[0].rank+" — "+n[0].title}}),s=new $t({props:{part:n[0].listeners,total:n[1].listeners,text:"of listeners"}}),_=new $t({props:{part:n[0].playcount,total:n[1].playcount,text:"of plays"}}),{c(){t=g("td"),r=g("p"),I(e.$$.fragment),a=E(),l=g("p"),I(s.$$.fragment),c=E(),o=g("p"),I(_.$$.fragment),this.h()},l(f){t=b(f,"TD",{class:!0});var u=B(t);r=b(u,"P",{class:!0});var p=B(r);z(e.$$.fragment,p),p.forEach(m),a=N(u),l=b(u,"P",{class:!0});var i=B(l);z(s.$$.fragment,i),i.forEach(m),c=N(u),o=b(u,"P",{class:!0});var y=B(o);z(_.$$.fragment,y),y.forEach(m),u.forEach(m),this.h()},h(){P(r,"class","svelte-1bm0020"),P(l,"class","svelte-1bm0020"),P(o,"class","svelte-1bm0020"),P(t,"class","svelte-1bm0020")},m(f,u){T(f,t,u),d(t,r),M(e,r,null),d(t,a),d(t,l),M(s,l,null),d(t,c),d(t,o),M(_,o,null),k=!0},p(f,u){const p={};u&1&&(p.title="#"+f[0].rank+" — "+f[0].title),e.$set(p);const i={};u&1&&(i.part=f[0].listeners),u&2&&(i.total=f[1].listeners),s.$set(i);const y={};u&1&&(y.part=f[0].playcount),u&2&&(y.total=f[1].playcount),_.$set(y)},i(f){k||(v(e.$$.fragment,f),v(s.$$.fragment,f),v(_.$$.fragment,f),k=!0)},o(f){C(e.$$.fragment,f),C(s.$$.fragment,f),C(_.$$.fragment,f),k=!1},d(f){f&&m(t),S(e),S(s),S(_)}}}function Ht(n){let t,r;return t=new St({props:{$$slots:{default:[Gt]},$$scope:{ctx:n}}}),{c(){I(t.$$.fragment)},l(e){z(t.$$.fragment,e)},m(e,a){M(t,e,a),r=!0},p(e,[a]){const l={};a&7&&(l.$$scope={dirty:a,ctx:e}),t.$set(l)},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){C(t.$$.fragment,e),r=!1},d(e){S(t,e)}}}function At(n,t,r){let{track:e}=t,{artist:a}=t;return n.$$set=l=>{"track"in l&&r(0,e=l.track),"artist"in l&&r(1,a=l.artist)},[e,a]}class Kt extends ut{constructor(t){super(),it(this,t,At,Ht,st,{track:0,artist:1})}}const gt=["The Knack","Vanilla Ice","The Proclaimers","Bobby McFerrin","Falco","Spin Doctors","OMC","Charles & Eddie","The Rembrandts","Passenger","Gotye","Bonnie Lou","Duck Sauce","Foster the People","Rebecca Black","Icona Pop"];function Vt(){var n=Math.floor(Math.random()*gt.length);return gt[n]}function bt(n,t,r){const e=n.slice();return e[9]=t[r],e}function vt(n){let t,r,e,a={ctx:n,current:null,token:null,hasCatch:!1,pending:Qt,then:xt,catch:Wt,value:2,blocks:[,,,]};return dt(r=n[2],a),{c(){t=W(),a.block.c()},l(l){t=W(),a.block.l(l)},m(l,s){T(l,t,s),a.block.m(l,a.anchor=s),a.mount=()=>t.parentNode,a.anchor=t,e=!0},p(l,s){n=l,a.ctx=n,s&4&&r!==(r=n[2])&&dt(r,a)||Dt(a,n,s)},i(l){e||(v(a.block),e=!0)},o(l){for(let s=0;s<3;s+=1){const c=a.blocks[s];C(c)}e=!1},d(l){l&&m(t),a.block.d(l),a.token=null,a=null}}}function Wt(n){return{c:O,l:O,m:O,p:O,i:O,o:O,d:O}}function xt(n){let t,r=n[2].artist.name+"",e,a,l=n[2].topTracks.length+"",s,c,o,_,k,f,u;return o=new wt({props:{part:n[2].topTracksPlaycount,total:n[2].artist.playcount}}),f=new Lt({props:{$$slots:{default:[Jt]},$$scope:{ctx:n}}}),{c(){t=g("p"),e=F(r),a=F("'s top "),s=F(l),c=F(" has "),I(o.$$.fragment),_=F(" of their total plays."),k=E(),I(f.$$.fragment),this.h()},l(p){t=b(p,"P",{class:!0});var i=B(t);e=U(i,r),a=U(i,"'s top "),s=U(i,l),c=U(i," has "),z(o.$$.fragment,i),_=U(i," of their total plays."),i.forEach(m),k=N(p),z(f.$$.fragment,p),this.h()},h(){P(t,"class","svelte-vhpskk")},m(p,i){T(p,t,i),d(t,e),d(t,a),d(t,s),d(t,c),M(o,t,null),d(t,_),T(p,k,i),M(f,p,i),u=!0},p(p,i){(!u||i&4)&&r!==(r=p[2].artist.name+"")&&rt(e,r),(!u||i&4)&&l!==(l=p[2].topTracks.length+"")&&rt(s,l);const y={};i&4&&(y.part=p[2].topTracksPlaycount),i&4&&(y.total=p[2].artist.playcount),o.$set(y);const H={};i&4100&&(H.$$scope={dirty:i,ctx:p}),f.$set(H)},i(p){u||(v(o.$$.fragment,p),v(f.$$.fragment,p),u=!0)},o(p){C(o.$$.fragment,p),C(f.$$.fragment,p),u=!1},d(p){p&&(m(t),m(k)),S(o),S(f,p)}}}function Tt(n){let t,r;return t=new Kt({props:{track:n[9],artist:n[2].artist}}),{c(){I(t.$$.fragment)},l(e){z(t.$$.fragment,e)},m(e,a){M(t,e,a),r=!0},p(e,a){const l={};a&4&&(l.track=e[9]),a&4&&(l.artist=e[2].artist),t.$set(l)},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){C(t.$$.fragment,e),r=!1},d(e){S(t,e)}}}function Jt(n){let t,r,e=kt(n[2].topTracks),a=[];for(let s=0;s<e.length;s+=1)a[s]=Tt(bt(n,e,s));const l=s=>C(a[s],1,1,()=>{a[s]=null});return{c(){for(let s=0;s<a.length;s+=1)a[s].c();t=W()},l(s){for(let c=0;c<a.length;c+=1)a[c].l(s);t=W()},m(s,c){for(let o=0;o<a.length;o+=1)a[o]&&a[o].m(s,c);T(s,t,c),r=!0},p(s,c){if(c&4){e=kt(s[2].topTracks);let o;for(o=0;o<e.length;o+=1){const _=bt(s,e,o);a[o]?(a[o].p(_,c),v(a[o],1)):(a[o]=Tt(_),a[o].c(),v(a[o],1),a[o].m(t.parentNode,t))}for(ot(),o=e.length;o<a.length;o+=1)l(o);ct()}},i(s){if(!r){for(let c=0;c<e.length;c+=1)v(a[c]);r=!0}},o(s){a=a.filter(Boolean);for(let c=0;c<a.length;c+=1)C(a[c]);r=!1},d(s){s&&m(t),zt(a,s)}}}function Qt(n){let t,r="Loading";return{c(){t=g("p"),t.textContent=r,this.h()},l(e){t=b(e,"P",{class:!0,"data-svelte-h":!0}),D(t)!=="svelte-1ed5rpo"&&(t.textContent=r),this.h()},h(){P(t,"class","svelte-vhpskk")},m(e,a){T(e,t,a)},p:O,i:O,o:O,d(e){e&&m(t)}}}function Xt(n){let t,r,e,a,l,s,c="Top 5 tracks",o,_="Top 10 tracks",k,f="Top 20 tracks",u,p="Top 30 tracks",i,y="Top 50 tracks",H,q,ft="Submit",x,R,pt='<a href="https://en.wikipedia.org/wiki/One-hit_wonder">One-hit wonder</a> calculator.',J,L,tt,j,et,Q,A,X,at,ht,$=typeof n[2]<"u"&&vt(n);return{c(){t=E(),r=g("form"),e=g("input"),a=E(),l=g("select"),s=g("option"),s.textContent=c,o=g("option"),o.textContent=_,k=g("option"),k.textContent=f,u=g("option"),u.textContent=p,i=g("option"),i.textContent=y,H=E(),q=g("button"),q.textContent=ft,x=E(),R=g("p"),R.innerHTML=pt,J=E(),L=g("p"),tt=F(`Use this tool to analyze how much weight does an artist's top tracks hold
    against their total plays and listener counts. e.g: `),j=g("button"),et=F(n[3]),Q=E(),$&&$.c(),A=W(),this.h()},l(h){Nt("svelte-1t7wyqk",document.head).forEach(m),t=N(h),r=b(h,"FORM",{});var K=B(r);e=b(K,"INPUT",{type:!0,placeholder:!0,class:!0}),a=N(K),l=b(K,"SELECT",{class:!0});var V=B(l);s=b(V,"OPTION",{"data-svelte-h":!0}),D(s)!=="svelte-1yizirg"&&(s.textContent=c),o=b(V,"OPTION",{"data-svelte-h":!0}),D(o)!=="svelte-16e41hb"&&(o.textContent=_),k=b(V,"OPTION",{"data-svelte-h":!0}),D(k)!=="svelte-13aq53"&&(k.textContent=f),u=b(V,"OPTION",{"data-svelte-h":!0}),D(u)!=="svelte-hwewjv"&&(u.textContent=p),i=b(V,"OPTION",{"data-svelte-h":!0}),D(i)!=="svelte-8e5bb3"&&(i.textContent=y),V.forEach(m),H=N(K),q=b(K,"BUTTON",{type:!0,"data-svelte-h":!0}),D(q)!=="svelte-1ou7dtz"&&(q.textContent=ft),K.forEach(m),x=N(h),R=b(h,"P",{class:!0,"data-svelte-h":!0}),D(R)!=="svelte-2gaftj"&&(R.innerHTML=pt),J=N(h),L=b(h,"P",{class:!0});var lt=B(L);tt=U(lt,`Use this tool to analyze how much weight does an artist's top tracks hold
    against their total plays and listener counts. e.g: `),j=b(lt,"BUTTON",{type:!0});var _t=B(j);et=U(_t,n[3]),_t.forEach(m),lt.forEach(m),Q=N(h),$&&$.l(h),A=W(),this.h()},h(){document.title="One-hit wonder calculator | Last.fm Tools",P(e,"type","text"),P(e,"placeholder","Artist name"),P(e,"class","svelte-vhpskk"),s.__value="5",G(s,s.__value),s.selected=!0,o.__value="10",G(o,o.__value),k.__value="20",G(k,k.__value),u.__value="30",G(u,u.__value),i.__value="50",G(i,i.__value),P(l,"class","svelte-vhpskk"),n[1]===void 0&&Ot(()=>n[7].call(l)),P(q,"type","submit"),P(R,"class","svelte-vhpskk"),P(j,"type","button"),P(L,"class","svelte-vhpskk")},m(h,w){T(h,t,w),T(h,r,w),d(r,e),G(e,n[0]),d(r,a),d(r,l),d(l,s),d(l,o),d(l,k),d(l,u),d(l,i),mt(l,n[1],!0),d(r,H),d(r,q),T(h,x,w),T(h,R,w),T(h,J,w),T(h,L,w),d(L,tt),d(L,j),d(j,et),T(h,Q,w),$&&$.m(h,w),T(h,A,w),X=!0,at||(ht=[Z(e,"input",n[6]),Z(l,"change",n[7]),Z(r,"submit",Bt(n[4])),Z(j,"click",n[8])],at=!0)},p(h,[w]){w&1&&e.value!==h[0]&&G(e,h[0]),w&2&&mt(l,h[1]),typeof h[2]<"u"?$?($.p(h,w),w&4&&v($,1)):($=vt(h),$.c(),v($,1),$.m(A.parentNode,A)):$&&(ot(),C($,1,1,()=>{$=null}),ct())},i(h){X||(v($),X=!0)},o(h){C($),X=!1},d(h){h&&(m(t),m(r),m(x),m(R),m(J),m(L),m(Q),m(A)),$&&$.d(h),at=!1,Et(ht)}}}function Yt(n,t,r){const e=Vt();let a,l,s;async function c(){const u=await nt.artist.getCorrection(a);r(2,s=o(u))}async function o(u){const p=await nt.artist.getInfo(u),i=await nt.artist.getTopTracks(u,l);return{artist:p,topTracks:i,topTracksPlaycount:Ft(i)}}function _(){a=this.value,r(0,a)}function k(){l=It(this),r(1,l)}return[a,l,s,e,c,o,_,k,()=>r(2,s=o(e))]}class ae extends ut{constructor(t){super(),it(this,t,Yt,Xt,st,{})}}export{ae as component};
