"use strict";(()=>{window.Webflow||(window.Webflow=[]);window.Webflow.push(async()=>{let n=".max-width-medium",t=document.querySelector(n);if(!t)return;let i=new URLSearchParams(window.location.search).get("id");if(!i)return;let s=await u(i);for(let o=0;o<s.length;o++){let a=s[o],c=document.createElement("button");c.innerText=a.name,c.classList.add("create-acc-button"),c.addEventListener("click",()=>{m(a.code)}),t.prepend(c)}});var m=n=>{try{document.addEventListener("copy",t=>{var e;(e=t.clipboardData)==null||e.setData("application/json",JSON.stringify(n)),t.preventDefault()}),document.execCommand("copy")}catch{}finally{document.removeEventListener("copy",t=>{var e;(e=t.clipboardData)==null||e.setData("application/json",JSON.stringify(n)),t.preventDefault()})}},u=async n=>{let t=`https://xegd-filk-1pjm.n7c.xano.io/api:gdLlipP9/shared_asset/${n}`,e={method:"GET",Headers:{"Content-Type":"application/json"}},s=await(await fetch(t,e)).json(),o=[];for(let a=0;a<s.length;a++){let{id:c}=s[a],r=`https://xegd-filk-1pjm.n7c.xano.io/api:gdLlipP9/private_component/${c}`,d=await fetch(r,e),{code:p,name:l}=await d.json();o.push({code:p,name:l})}return o};})();
