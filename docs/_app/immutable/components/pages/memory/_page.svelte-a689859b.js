import{S as G,i as N,s as P,k as _,l as d,m as g,h as u,n as p,b as E,D as h,B as k,J as S,a as q,c as y,N as m,O as b,P as I,Q as V}from"../../../chunks/index-4d6c9ba6.js";function $(n,l,t){const r=n.slice();return r[5]=l[t],r[7]=t,r}function D(n){let l,t,r,a,e,c,s,i,v;function M(){return n[2](n[5])}function w(){return n[3](n[5])}return{c(){l=_("div"),t=_("img"),a=q(),e=_("img"),s=q(),this.h()},l(f){l=d(f,"DIV",{class:!0});var o=g(l);t=d(o,"IMG",{class:!0,src:!0,alt:!0}),a=y(o),e=d(o,"IMG",{class:!0,src:!0,alt:!0}),s=y(o),o.forEach(u),this.h()},h(){p(t,"class","front svelte-1p5l2qp"),m(t.src,r=n[5].img)||p(t,"src",r),p(t,"alt",""),p(e,"class","back svelte-1p5l2qp"),m(e.src,c="front.webp")||p(e,"src",c),p(e,"alt",""),p(l,"class","card svelte-1p5l2qp"),b(l,"flipped",n[5].flipped)},m(f,o){E(f,l,o),h(l,t),h(l,a),h(l,e),h(l,s),i||(v=[I(l,"click",M),I(l,"keypress",w)],i=!0)},p(f,o){n=f,o&1&&!m(t.src,r=n[5].img)&&p(t,"src",r),o&1&&b(l,"flipped",n[5].flipped)},d(f){f&&u(l),i=!1,V(v)}}}function A(n){let l,t,r=n[0],a=[];for(let e=0;e<r.length;e+=1)a[e]=D($(n,r,e));return{c(){l=_("main"),t=_("div");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){l=d(e,"MAIN",{class:!0});var c=g(l);t=d(c,"DIV",{class:!0});var s=g(t);for(let i=0;i<a.length;i+=1)a[i].l(s);s.forEach(u),c.forEach(u),this.h()},h(){p(t,"class","row svelte-1p5l2qp"),p(l,"class","svelte-1p5l2qp")},m(e,c){E(e,l,c),h(l,t);for(let s=0;s<a.length;s+=1)a[s].m(t,null)},p(e,[c]){if(c&3){r=e[0];let s;for(s=0;s<r.length;s+=1){const i=$(e,r,s);a[s]?a[s].p(i,c):(a[s]=D(i),a[s].c(),a[s].m(t,null))}for(;s<a.length;s+=1)a[s].d(1);a.length=r.length}},i:k,o:k,d(e){e&&u(l),S(a,e)}}}function B(n,l,t){let r=[];for(let i=0;i<12;i++)r.push({id:5,img:"/notrick.gif",flipped:!1,completed:!1});let a=0;function e(i){i.flipped&&a<2?t(0,r):alert("chill")}return[r,e,i=>{e(i)},i=>{e(i)}]}class J extends G{constructor(l){super(),N(this,l,B,A,P,{})}}export{J as default};
