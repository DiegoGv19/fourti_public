var i, text;
i =0;


let sections = Array.from(document.querySelectorAll('section'));
let sectionsScrollTop = sections.map(section => section.getBoundingClientRect().top - (innerHeight/1.5));


const toggle__menu = () => {
  const t = document.getElementById("toggle__menu");
  t.addEventListener("click",()=>{
      const m = document.getElementById("main__menu");
      const b = document.body;

      if(t.classList.contains("animation--revers")) t.classList.remove("animation--revers");
      m.classList.toggle("traslate");
      t.classList.toggle("animation");
      if(!t.classList.contains("animation")) {t.classList.add("animation--revers");}

    })
}

 
const typing = () => {
 
  text= "No esperes que el mundo cambie, cambia tú a este nuevo mundo."
  if(i<text.length){
    const main__title = document.getElementById("main__title");
    if(main__title !== null){
      main__title.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing,70);
    }
  }
  
}
const animar__section = () => {
  window.addEventListener('scroll',()=>{
    sectionsScrollTop.forEach((el,i)=>{
      if(scrollY >= el && i !== 0 && i !== sections.length){
        sections[i].classList.add("animar");
      }
    })
  })
}


typing()
toggle__menu()
animar__section()