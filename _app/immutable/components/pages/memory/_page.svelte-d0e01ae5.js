import{S as re,i as ie,s as ae,k as g,q as F,a as q,l as k,m as j,r as H,h as f,c as R,n as p,p as oe,b as N,D as n,O as P,u as z,B as Y,J as ce,Q as te,R as X,T as $}from"../../../chunks/index-2bb69101.js";function ee(t,l,s){const d=t.slice();return d[16]=l[s],d[18]=s,d}function se(t){let l,s,d,a,i,y,b,c,I;function E(){return t[6](t[16],t[18])}function m(){return t[7](t[16],t[18])}return{c(){l=g("div"),s=g("img"),a=q(),i=g("img"),b=q(),this.h()},l(h){l=k(h,"DIV",{class:!0});var u=j(l);s=k(u,"IMG",{class:!0,src:!0,alt:!0}),a=R(u),i=k(u,"IMG",{class:!0,src:!0,alt:!0}),b=R(u),u.forEach(f),this.h()},h(){p(s,"class","front svelte-1451nj5"),X(s.src,d=t[16].img)||p(s,"src",d),p(s,"alt",""),p(i,"class","back svelte-1451nj5"),X(i.src,y="front.webp")||p(i,"src",y),p(i,"alt",""),p(l,"class","card svelte-1451nj5"),$(l,"flipped",t[16].flipped)},m(h,u){N(h,l,u),n(l,s),n(l,a),n(l,i),n(l,b),c||(I=[P(l,"click",E),P(l,"keypress",m)],c=!0)},p(h,u){t=h,u&8&&!X(s.src,d=t[16].img)&&p(s,"src",d),u&8&&$(l,"flipped",t[16].flipped)},d(h){h&&f(l),c=!1,te(I)}}}function pe(t){let l,s,d,a,i,y,b,c,I,E,m,h,u,A,M,x,B,D,o,w,S,V,O,C,T=t[3],_=[];for(let e=0;e<T.length;e+=1)_[e]=se(ee(t,T,e));return{c(){l=g("h1"),s=F("Memory"),d=q(),a=g("main"),i=g("div");for(let e=0;e<_.length;e+=1)_[e].c();y=q(),b=g("div"),c=g("p"),I=F(t[0]),E=q(),m=g("div"),h=g("p"),u=F(t[1]),A=q(),M=g("div"),B=q(),D=g("div"),o=g("p"),w=F("RESET"),S=q(),V=g("div"),this.h()},l(e){l=k(e,"H1",{class:!0});var v=j(l);s=H(v,"Memory"),v.forEach(f),d=R(e),a=k(e,"MAIN",{class:!0});var r=j(a);i=k(r,"DIV",{class:!0});var G=j(i);for(let U=0;U<_.length;U+=1)_[U].l(G);G.forEach(f),y=R(r),b=k(r,"DIV",{class:!0,id:!0});var J=j(b);c=k(J,"P",{});var K=j(c);I=H(K,t[0]),K.forEach(f),J.forEach(f),E=R(r),m=k(r,"DIV",{class:!0,id:!0});var L=j(m);h=k(L,"P",{});var Q=j(h);u=H(Q,t[1]),Q.forEach(f),L.forEach(f),A=R(r),M=k(r,"DIV",{class:!0,id:!0,style:!0});var le=j(M);le.forEach(f),B=R(r),D=k(r,"DIV",{class:!0,id:!0});var W=j(D);o=k(W,"P",{});var Z=j(o);w=H(Z,"RESET"),Z.forEach(f),W.forEach(f),r.forEach(f),S=R(e),V=k(e,"DIV",{style:!0}),j(V).forEach(f),this.h()},h(){p(l,"class","svelte-1451nj5"),p(i,"class","row svelte-1451nj5"),p(b,"class","box svelte-1451nj5"),p(b,"id","red-box"),p(m,"class","box svelte-1451nj5"),p(m,"id","blue-box"),p(M,"class","box svelte-1451nj5"),p(M,"id","turn-box"),p(M,"style",x=t[2]?"right: 10px;":"left:10px"),p(D,"class","box svelte-1451nj5"),p(D,"id","reset-box"),p(a,"class","svelte-1451nj5"),oe(V,"height","120px")},m(e,v){N(e,l,v),n(l,s),N(e,d,v),N(e,a,v),n(a,i);for(let r=0;r<_.length;r+=1)_[r].m(i,null);n(a,y),n(a,b),n(b,c),n(c,I),n(a,E),n(a,m),n(m,h),n(h,u),n(a,A),n(a,M),n(a,B),n(a,D),n(D,o),n(o,w),N(e,S,v),N(e,V,v),O||(C=[P(M,"click",t[8]),P(M,"keypress",t[9]),P(D,"click",t[10]),P(D,"keypress",t[11])],O=!0)},p(e,[v]){if(v&40){T=e[3];let r;for(r=0;r<T.length;r+=1){const G=ee(e,T,r);_[r]?_[r].p(G,v):(_[r]=se(G),_[r].c(),_[r].m(i,null))}for(;r<_.length;r+=1)_[r].d(1);_.length=T.length}v&1&&z(I,e[0]),v&2&&z(u,e[1]),v&4&&x!==(x=e[2]?"right: 10px;":"left:10px")&&p(M,"style",x)},i:Y,o:Y,d(e){e&&f(l),e&&f(d),e&&f(a),ce(_,e),e&&f(S),e&&f(V),O=!1,te(C)}}}function ne(t,l,s){let d=0,a=0,i=!0,y=[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];const b=["https://picsum.photos/id/70/367/267","https://picsum.photos/id/88/367/267","https://picsum.photos/id/93/367/267","/notrick.gif","https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLKkXl23RaUvFNOxUFZRcpSMeptNEDHIqhWrRx7XS8yw&s","https://www.cuponline.se/graphics/cup/teamphoto/79471-800px.jpg","https://preview.redd.it/request-for-the-gigachad-v0-1asd8y2wid0b1.jpg?width=640&crop=smart&auto=webp&s=eeeb5f5d3aebaf465668a87d6b785b02d5d8bd52","https://upload.wikimedia.org/wikipedia/commons/4/4f/Black_hole_-_Messier_87_crop_max_res.jpg"];let c=[],I,E=0;function m(){s(0,d=0),s(1,a=0),s(2,i=!0),s(3,c=[]),E=0;for(let o=0;o<100;o++){let w=Math.floor(Math.random()*18),S=Math.floor(Math.random()*18),V=y[w];y[w]=y[S],y[S]=V}for(let o=0;o<18;o++)c.push({id:y[o],img:"https://www.publicdomainpictures.net/pictures/140000/nahled/grey-white-background.jpg",flipped:!1,completed:!1});setTimeout(()=>{c.forEach(o=>{o.img=b[o.id]})},500)}m();function h(o,w){!o.flipped&&E<2&&(o.flipped=!0,s(3,c),E++,E==1&&(I=w)),E==2&&(c[I].id==o.id&&(o.completed=!0,s(3,c[I].completed=!0,c),s(3,c),i?s(1,a++,a):s(0,d++,d)),setTimeout(()=>{c.forEach(S=>{S.flipped=S.completed}),E=0,s(3,c),s(2,i=!i)},1e3))}return[d,a,i,c,m,h,(o,w)=>{h(o,w)},(o,w)=>{h(o,w)},()=>{s(2,i=!i)},()=>{s(2,i=!i)},()=>{m()},()=>{m()}]}class fe extends re{constructor(l){super(),ie(this,l,ne,pe,ae,{})}}export{fe as default};
