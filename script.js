const menuButton=document.querySelector(".menu-toggle");
const nav=document.querySelector(".site-nav");
menuButton.addEventListener("click",()=>{const open=menuButton.getAttribute("aria-expanded")==="true";menuButton.setAttribute("aria-expanded",String(!open));menuButton.setAttribute("aria-label",open?"Abrir menu":"Fechar menu");nav.classList.toggle("is-open",!open)});
nav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{menuButton.setAttribute("aria-expanded","false");menuButton.setAttribute("aria-label","Abrir menu");nav.classList.remove("is-open")}));
document.addEventListener("keydown",event=>{if(event.key==="Escape"){menuButton.setAttribute("aria-expanded","false");menuButton.setAttribute("aria-label","Abrir menu");nav.classList.remove("is-open")}});
document.querySelector("#request-form").addEventListener("submit",event=>{event.preventDefault();const note=document.querySelector("#form-note");note.textContent="Simulação concluída. Nenhum dado foi enviado ou armazenado."});
