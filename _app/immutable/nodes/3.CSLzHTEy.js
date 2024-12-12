import{x as wt,y as Ct,p as Y,h as yt,s as gt,k as Pt,r as Ot,n as P}from"../chunks/scheduler.xZJLFhf8.js";import{u as st,o as y,q as rt,n as w,S as vt,i as bt,w as F,x as U,y as q,z as j,e as g,s as I,c as v,a as S,d as m,f as z,m as C,g as T,h as k,t as B,b as M,p as V,k as Et,l as N,A as D,E as pt,B as Z,C as Nt,F as It,j as ft,D as zt}from"../chunks/index.BLf1SSDG.js";import{T as Bt,a as Mt,G as St,P as Tt,l as nt,b as Rt,e as ht}from"../chunks/TableRowTitle.DYTjaJsR.js";function _t(n,t){const s=t.token={};function a(e,r,l,c){if(t.token!==s)return;t.resolved=c;let o=t.ctx;l!==void 0&&(o=o.slice(),o[l]=c);const p=e&&(t.current=e)(o);let h=!1;t.block&&(t.blocks?t.blocks.forEach((d,_)=>{_!==r&&d&&(st(),y(d,1,1,()=>{t.blocks[_]===d&&(t.blocks[_]=null)}),rt())}):t.block.d(1),p.c(),w(p,1),p.m(t.mount(),t.anchor),h=!0),t.block=p,t.blocks&&(t.blocks[r]=p),h&&yt()}if(wt(n)){const e=Ct();if(n.then(r=>{Y(e),a(t.then,1,t.value,r),Y(null)},r=>{if(Y(e),a(t.catch,2,t.error,r),Y(null),!t.hasCatch)throw r}),t.current!==t.pending)return a(t.pending,0),!0}else{if(t.current!==t.then)return a(t.then,1,t.value,n),!0;t.resolved=n}}function Lt(n,t,s){const a=t.slice(),{resolved:e}=n;n.current===n.then&&(a[n.value]=e),n.current===n.catch&&(a[n.error]=e),n.block.p(a,s)}function Dt(n){let t=0;for(let s=0;s<n.length;s++){const a=n[s];t=t+a.playcount}return t}function Ft(n){let t,s,a;return t=new Tt({props:{total:n[1].playcount,part:n[0].playcount}}),{c(){F(t.$$.fragment),s=B(`
                of plays`)},l(e){U(t.$$.fragment,e),s=M(e,`
                of plays`)},m(e,r){q(t,e,r),T(e,s,r),a=!0},p(e,r){const l={};r&2&&(l.total=e[1].playcount),r&1&&(l.part=e[0].playcount),t.$set(l)},i(e){a||(w(t.$$.fragment,e),a=!0)},o(e){y(t.$$.fragment,e),a=!1},d(e){e&&m(s),j(t,e)}}}function Ut(n){let t,s,a,e,r,l,c;return a=new Mt({props:{title:"#"+n[0].rank+" — "+n[0].title}}),l=new St({props:{size:n[2],$$slots:{default:[Ft]},$$scope:{ctx:n}}}),{c(){t=g("td"),s=g("p"),F(a.$$.fragment),e=I(),r=g("p"),F(l.$$.fragment),this.h()},l(o){t=v(o,"TD",{class:!0});var p=S(t);s=v(p,"P",{class:!0});var h=S(s);U(a.$$.fragment,h),h.forEach(m),e=z(p),r=v(p,"P",{class:!0});var d=S(r);U(l.$$.fragment,d),d.forEach(m),p.forEach(m),this.h()},h(){C(s,"class","svelte-1bm0020"),C(r,"class","svelte-1bm0020"),C(t,"class","svelte-1bm0020")},m(o,p){T(o,t,p),k(t,s),q(a,s,null),k(t,e),k(t,r),q(l,r,null),c=!0},p(o,p){const h={};p&1&&(h.title="#"+o[0].rank+" — "+o[0].title),a.$set(h);const d={};p&4&&(d.size=o[2]),p&11&&(d.$$scope={dirty:p,ctx:o}),l.$set(d)},i(o){c||(w(a.$$.fragment,o),w(l.$$.fragment,o),c=!0)},o(o){y(a.$$.fragment,o),y(l.$$.fragment,o),c=!1},d(o){o&&m(t),j(a),j(l)}}}function qt(n){let t,s;return t=new Bt({props:{$$slots:{default:[Ut]},$$scope:{ctx:n}}}),{c(){F(t.$$.fragment)},l(a){U(t.$$.fragment,a)},m(a,e){q(t,a,e),s=!0},p(a,[e]){const r={};e&15&&(r.$$scope={dirty:e,ctx:a}),t.$set(r)},i(a){s||(w(t.$$.fragment,a),s=!0)},o(a){y(t.$$.fragment,a),s=!1},d(a){j(t,a)}}}function jt(n,t,s){let a,{track:e}=t,{artist:r}=t;return n.$$set=l=>{"track"in l&&s(0,e=l.track),"artist"in l&&s(1,r=l.artist)},n.$$.update=()=>{n.$$.dirty&3&&s(2,a=Math.round(e.playcount*100/r.playcount))},[e,r,a]}class Gt extends vt{constructor(t){super(),bt(this,t,jt,qt,gt,{track:0,artist:1})}}const mt=["The Knack","Vanilla Ice","The Proclaimers","Bobby McFerrin","Falco","Spin Doctors","OMC","Charles & Eddie","The Rembrandts","Passenger","Gotye","Bonnie Lou","Duck Sauce","Foster the People","Rebecca Black","Icona Pop"];function Ht(){var n=Math.floor(Math.random()*mt.length);return mt[n]}function dt(n,t,s){const a=n.slice();return a[9]=t[s],a}function kt(n){let t,s,a,e={ctx:n,current:null,token:null,hasCatch:!1,pending:Vt,then:xt,catch:At,value:2,blocks:[,,,]};return _t(s=n[2],e),{c(){t=V(),e.block.c()},l(r){t=V(),e.block.l(r)},m(r,l){T(r,t,l),e.block.m(r,e.anchor=l),e.mount=()=>t.parentNode,e.anchor=t,a=!0},p(r,l){n=r,e.ctx=n,l&4&&s!==(s=n[2])&&_t(s,e)||Lt(e,n,l)},i(r){a||(w(e.block),a=!0)},o(r){for(let l=0;l<3;l+=1){const c=e.blocks[l];y(c)}a=!1},d(r){r&&m(t),e.block.d(r),e.token=null,e=null}}}function At(n){return{c:P,l:P,m:P,p:P,i:P,o:P,d:P}}function xt(n){let t,s=n[2].artist.name+"",a,e,r=n[2].topTracks.length+"",l,c,o,p,h,d,_;return o=new Tt({props:{part:n[2].topTracksPlaycount,total:n[2].artist.playcount}}),d=new Rt({props:{$$slots:{default:[Kt]},$$scope:{ctx:n}}}),{c(){t=g("p"),a=B(s),e=B("'s top "),l=B(r),c=B(" has "),F(o.$$.fragment),p=B(" of their total plays."),h=I(),F(d.$$.fragment),this.h()},l(f){t=v(f,"P",{class:!0});var u=S(t);a=M(u,s),e=M(u,"'s top "),l=M(u,r),c=M(u," has "),U(o.$$.fragment,u),p=M(u," of their total plays."),u.forEach(m),h=z(f),U(d.$$.fragment,f),this.h()},h(){C(t,"class","svelte-vhpskk")},m(f,u){T(f,t,u),k(t,a),k(t,e),k(t,l),k(t,c),q(o,t,null),k(t,p),T(f,h,u),q(d,f,u),_=!0},p(f,u){(!_||u&4)&&s!==(s=f[2].artist.name+"")&&ft(a,s),(!_||u&4)&&r!==(r=f[2].topTracks.length+"")&&ft(l,r);const G={};u&4&&(G.part=f[2].topTracksPlaycount),u&4&&(G.total=f[2].artist.playcount),o.$set(G);const H={};u&4100&&(H.$$scope={dirty:u,ctx:f}),d.$set(H)},i(f){_||(w(o.$$.fragment,f),w(d.$$.fragment,f),_=!0)},o(f){y(o.$$.fragment,f),y(d.$$.fragment,f),_=!1},d(f){f&&(m(t),m(h)),j(o),j(d,f)}}}function $t(n){let t,s;return t=new Gt({props:{track:n[9],artist:n[2].artist}}),{c(){F(t.$$.fragment)},l(a){U(t.$$.fragment,a)},m(a,e){q(t,a,e),s=!0},p(a,e){const r={};e&4&&(r.track=a[9]),e&4&&(r.artist=a[2].artist),t.$set(r)},i(a){s||(w(t.$$.fragment,a),s=!0)},o(a){y(t.$$.fragment,a),s=!1},d(a){j(t,a)}}}function Kt(n){let t,s,a=ht(n[2].topTracks),e=[];for(let l=0;l<a.length;l+=1)e[l]=$t(dt(n,a,l));const r=l=>y(e[l],1,1,()=>{e[l]=null});return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=V()},l(l){for(let c=0;c<e.length;c+=1)e[c].l(l);t=V()},m(l,c){for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(l,c);T(l,t,c),s=!0},p(l,c){if(c&4){a=ht(l[2].topTracks);let o;for(o=0;o<a.length;o+=1){const p=dt(l,a,o);e[o]?(e[o].p(p,c),w(e[o],1)):(e[o]=$t(p),e[o].c(),w(e[o],1),e[o].m(t.parentNode,t))}for(st(),o=a.length;o<e.length;o+=1)r(o);rt()}},i(l){if(!s){for(let c=0;c<a.length;c+=1)w(e[c]);s=!0}},o(l){e=e.filter(Boolean);for(let c=0;c<e.length;c+=1)y(e[c]);s=!1},d(l){l&&m(t),zt(e,l)}}}function Vt(n){let t,s="Loading";return{c(){t=g("p"),t.textContent=s,this.h()},l(a){t=v(a,"P",{class:!0,"data-svelte-h":!0}),N(t)!=="svelte-1ed5rpo"&&(t.textContent=s),this.h()},h(){C(t,"class","svelte-vhpskk")},m(a,e){T(a,t,e)},p:P,i:P,o:P,d(a){a&&m(t)}}}function Wt(n){let t,s,a,e,r,l,c="Top 5 tracks",o,p="Top 10 tracks",h,d="Top 20 tracks",_,f="Top 30 tracks",u,G="Top 50 tracks",H,R,ot="Submit",W,O,ct='<a href="https://en.wikipedia.org/wiki/One-hit_wonder">One-hit wonder</a> calculator.',J,E,tt,L,et,Q,A,X,at,ut,$=typeof n[2]<"u"&&kt(n);return{c(){t=I(),s=g("form"),a=g("input"),e=I(),r=g("select"),l=g("option"),l.textContent=c,o=g("option"),o.textContent=p,h=g("option"),h.textContent=d,_=g("option"),_.textContent=f,u=g("option"),u.textContent=G,H=I(),R=g("button"),R.textContent=ot,W=I(),O=g("p"),O.innerHTML=ct,J=I(),E=g("p"),tt=B(`Use this tool to analyze how much weight does an artist's top tracks hold
    against their total plays and listener counts. e.g: `),L=g("button"),et=B(n[3]),Q=I(),$&&$.c(),A=V(),this.h()},l(i){Et("svelte-1t7wyqk",document.head).forEach(m),t=z(i),s=v(i,"FORM",{});var x=S(s);a=v(x,"INPUT",{type:!0,placeholder:!0,class:!0}),e=z(x),r=v(x,"SELECT",{class:!0});var K=S(r);l=v(K,"OPTION",{"data-svelte-h":!0}),N(l)!=="svelte-1yizirg"&&(l.textContent=c),o=v(K,"OPTION",{"data-svelte-h":!0}),N(o)!=="svelte-16e41hb"&&(o.textContent=p),h=v(K,"OPTION",{"data-svelte-h":!0}),N(h)!=="svelte-13aq53"&&(h.textContent=d),_=v(K,"OPTION",{"data-svelte-h":!0}),N(_)!=="svelte-hwewjv"&&(_.textContent=f),u=v(K,"OPTION",{"data-svelte-h":!0}),N(u)!=="svelte-8e5bb3"&&(u.textContent=G),K.forEach(m),H=z(x),R=v(x,"BUTTON",{type:!0,"data-svelte-h":!0}),N(R)!=="svelte-1ou7dtz"&&(R.textContent=ot),x.forEach(m),W=z(i),O=v(i,"P",{class:!0,"data-svelte-h":!0}),N(O)!=="svelte-2gaftj"&&(O.innerHTML=ct),J=z(i),E=v(i,"P",{class:!0});var lt=S(E);tt=M(lt,`Use this tool to analyze how much weight does an artist's top tracks hold
    against their total plays and listener counts. e.g: `),L=v(lt,"BUTTON",{type:!0});var it=S(L);et=M(it,n[3]),it.forEach(m),lt.forEach(m),Q=z(i),$&&$.l(i),A=V(),this.h()},h(){document.title="One-hit wonder calculator | Last.fm Tools",C(a,"type","text"),C(a,"placeholder","Artist name"),C(a,"class","svelte-vhpskk"),l.__value="5",D(l,l.__value),l.selected=!0,o.__value="10",D(o,o.__value),h.__value="20",D(h,h.__value),_.__value="30",D(_,_.__value),u.__value="50",D(u,u.__value),C(r,"class","svelte-vhpskk"),n[1]===void 0&&Pt(()=>n[7].call(r)),C(R,"type","submit"),C(O,"class","svelte-vhpskk"),C(L,"type","button"),C(E,"class","svelte-vhpskk")},m(i,b){T(i,t,b),T(i,s,b),k(s,a),D(a,n[0]),k(s,e),k(s,r),k(r,l),k(r,o),k(r,h),k(r,_),k(r,u),pt(r,n[1],!0),k(s,H),k(s,R),T(i,W,b),T(i,O,b),T(i,J,b),T(i,E,b),k(E,tt),k(E,L),k(L,et),T(i,Q,b),$&&$.m(i,b),T(i,A,b),X=!0,at||(ut=[Z(a,"input",n[6]),Z(r,"change",n[7]),Z(s,"submit",Nt(n[4])),Z(L,"click",n[8])],at=!0)},p(i,[b]){b&1&&a.value!==i[0]&&D(a,i[0]),b&2&&pt(r,i[1]),typeof i[2]<"u"?$?($.p(i,b),b&4&&w($,1)):($=kt(i),$.c(),w($,1),$.m(A.parentNode,A)):$&&(st(),y($,1,1,()=>{$=null}),rt())},i(i){X||(w($),X=!0)},o(i){y($),X=!1},d(i){i&&(m(t),m(s),m(W),m(O),m(J),m(E),m(Q),m(A)),$&&$.d(i),at=!1,Ot(ut)}}}function Jt(n,t,s){const a=Ht();let e,r,l;async function c(){const _=await nt.artist.getCorrection(e);s(2,l=o(_))}async function o(_){const f=await nt.artist.getInfo(_),u=await nt.artist.getTopTracks(_,r);return{artist:f,topTracks:u,topTracksPlaycount:Dt(u)}}function p(){e=this.value,s(0,e)}function h(){r=It(this),s(1,r)}return[e,r,l,a,c,o,p,h,()=>s(2,l=o(a))]}class Zt extends vt{constructor(t){super(),bt(this,t,Jt,Wt,gt,{})}}export{Zt as component};