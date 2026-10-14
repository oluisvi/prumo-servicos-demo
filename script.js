const menuButton=document.querySelector(".menu-toggle");
const nav=document.querySelector(".site-nav");
if(menuButton&&nav){
  const closeMenu=()=>{menuButton.setAttribute("aria-expanded","false");menuButton.setAttribute("aria-label","Abrir menu");nav.classList.remove("is-open")};
  menuButton.addEventListener("click",()=>{const open=menuButton.getAttribute("aria-expanded")==="true";menuButton.setAttribute("aria-expanded",String(!open));menuButton.setAttribute("aria-label",open?"Abrir menu":"Fechar menu");nav.classList.toggle("is-open",!open)});
  nav.querySelectorAll("a").forEach(link=>link.addEventListener("click",closeMenu));
  document.addEventListener("keydown",event=>{if(event.key==="Escape")closeMenu()});
}

const chapterLinks=[...document.querySelectorAll(".chapter-nav a")];
const chapters=chapterLinks.map(link=>document.querySelector(link.getAttribute("href"))).filter(Boolean);
if("IntersectionObserver" in window&&chapters.length){
  const observer=new IntersectionObserver(entries=>{
    entries.filter(entry=>entry.isIntersecting).forEach(entry=>{
      chapterLinks.forEach(link=>{
        const active=link.hash===`#${entry.target.id}`;
        link.classList.toggle("is-current",active);
        if(active)link.setAttribute("aria-current","location");else link.removeAttribute("aria-current");
      });
    });
  },{rootMargin:"-24% 0px -62% 0px",threshold:0});
  chapters.forEach(chapter=>observer.observe(chapter));
}

const requestForm=document.querySelector("#request-form");
if(requestForm)requestForm.addEventListener("submit",event=>{event.preventDefault();const note=document.querySelector("#form-note");if(note)note.textContent="Simulação concluída. Nenhum dado foi enviado ou armazenado."});
