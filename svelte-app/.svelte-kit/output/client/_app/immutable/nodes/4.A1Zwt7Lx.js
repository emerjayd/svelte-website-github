import{s as X,n as B,r as z}from"../chunks/scheduler.DYmyj1sh.js";import{S as G,i as J,e as i,s as I,c,k as w,g as H,a as P,h as v,b as e,d as K,m as a,p as y,q}from"../chunks/index.CvmLd2yw.js";function Q(h){let o,p,x="Contact",_,m,k=`Please fill out the form below and I will get back to you as soon as possible. <br/>Form will
		be processed by Formspree.io <br/>`,N,t,b,r,D,C,l,V,E,d,S,T,n,U,g,M="Send",F,O;return{c(){o=i("div"),p=i("h1"),p.textContent=x,_=I(),m=i("p"),m.innerHTML=k,N=I(),t=i("form"),b=i("div"),r=i("input"),D=I(),C=i("div"),l=i("input"),V=I(),E=i("div"),d=i("input"),S=I(),T=i("div"),n=i("textarea"),U=I(),g=i("button"),g.textContent=M,this.h()},l(s){o=c(s,"DIV",{class:!0});var u=w(o);p=c(u,"H1",{class:!0,"data-svelte-h":!0}),H(p)!=="svelte-19hw6t1"&&(p.textContent=x),_=P(u),m=c(u,"P",{class:!0,"data-svelte-h":!0}),H(m)!=="svelte-u009dj"&&(m.innerHTML=k),N=P(u),t=c(u,"FORM",{target:!0,action:!0,method:!0,class:!0});var f=w(t);b=c(f,"DIV",{class:!0});var A=w(b);r=c(A,"INPUT",{type:!0,name:!0,autocomplete:!0,class:!0,placeholder:!0}),A.forEach(v),D=P(f),C=c(f,"DIV",{class:!0});var L=w(C);l=c(L,"INPUT",{type:!0,name:!0,autocomplete:!0,class:!0,placeholder:!0}),L.forEach(v),V=P(f),E=c(f,"DIV",{class:!0});var R=w(E);d=c(R,"INPUT",{type:!0,name:!0,autocomplete:!0,class:!0,placeholder:!0}),R.forEach(v),S=P(f),T=c(f,"DIV",{class:!0});var j=w(T);n=c(j,"TEXTAREA",{name:!0,placeholder:!0,autocomplete:!0,class:!0,rows:!0}),w(n).forEach(v),j.forEach(v),U=P(f),g=c(f,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),H(g)!=="svelte-1q0tlcm"&&(g.textContent=M),f.forEach(v),u.forEach(v),this.h()},h(){e(p,"class","text-center text-3xl font-bold mb-6 text-white"),e(m,"class","text-center text-white mb-6"),e(r,"type","text"),e(r,"name","name"),e(r,"autocomplete","name"),e(r,"class","appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"),e(r,"placeholder","Name"),r.required=!0,e(b,"class","mb-4"),e(l,"type","email"),e(l,"name","email"),e(l,"autocomplete","email"),e(l,"class","appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"),e(l,"placeholder","Email *"),l.required=!0,e(C,"class","mb-4"),e(d,"type","text"),e(d,"name","phoneNumber"),e(d,"autocomplete","tel"),e(d,"class","appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"),e(d,"placeholder","Phone number"),e(E,"class","mb-4"),e(n,"name","message"),e(n,"placeholder","Comment"),e(n,"autocomplete","off"),e(n,"class","appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"),e(n,"rows","4"),n.required=!0,e(T,"class","mb-4"),e(g,"type","submit"),e(g,"class","shadow bg-black hover:bg-gray-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full"),e(t,"target","_blank"),e(t,"action","https://formspree.io/f/xwkgbpnk"),e(t,"method","POST"),e(t,"class","w-full max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg"),e(o,"class","container mx-auto px-4 py-8")},m(s,u){K(s,o,u),a(o,p),a(o,_),a(o,m),a(o,N),a(o,t),a(t,b),a(b,r),y(r,h[0]),a(t,D),a(t,C),a(C,l),y(l,h[1]),a(t,V),a(t,E),a(E,d),y(d,h[2]),a(t,S),a(t,T),a(T,n),y(n,h[3]),a(t,U),a(t,g),F||(O=[q(r,"input",h[4]),q(l,"input",h[5]),q(d,"input",h[6]),q(n,"input",h[7])],F=!0)},p(s,[u]){u&1&&r.value!==s[0]&&y(r,s[0]),u&2&&l.value!==s[1]&&y(l,s[1]),u&4&&d.value!==s[2]&&y(d,s[2]),u&8&&y(n,s[3])},i:B,o:B,d(s){s&&v(o),F=!1,z(O)}}}function W(h,o,p){let x="",_="",m="",k="";function N(){x=this.value,p(0,x)}function t(){_=this.value,p(1,_)}function b(){m=this.value,p(2,m)}function r(){k=this.value,p(3,k)}return[x,_,m,k,N,t,b,r]}class $ extends G{constructor(o){super(),J(this,o,W,Q,X,{})}}export{$ as component};
