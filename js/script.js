
/*
const bx = document.querySelector('.bx');
const menu_mobile = document.querySelector('.menu-mobile');
const link_mobile = document.querySelectorAll('.link-menu-mobile');

console.log(link_mobile);

link_mobile.forEach((item) => {
    item.addEventListener('click', () => {
        menu_mobile.classList.add('showmenu');
        console.log(menu_mobile);
        
    })
})

bx.addEventListener('click', () =>{
    bx.classList.toggle('activebx');

    menu_mobile.classList.toggle('showmenu');
    console.log(menu_mobile);
})
*/

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.querySelector('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100) nav.classList.add('active-header'); else nav.classList.remove('active-header')
}
window.addEventListener('scroll', scrollHeader)


/*==================== ACCORDION ====================*/ 
document.querySelectorAll('.accordion-button').forEach(button => {
    
    button.addEventListener('click', () => {
        //button.classList.remove('accordion-button-active');

        const accordionContent = button.nextElementSibling;

        button.classList.toggle('accordion-button-active');

        if(button.classList.contains('accordion-button-active')){
          accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        }
        else{
          accordionContent.style.maxHeight = 0;
        }
    });
    
});


//var textWrapper = document.querySelector('.letters');
//textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter-h1'>$&</span>");   


/*--=========== GSAP SCROLLTRIGGER ============- */
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

    /*--=========== TIMELINE LOADING E HERO ============- */
    var tl1 = gsap.timeline();
  
    tl1
    .to('.screen-loading', {
      duration: 2,
      opacity: 0, 
      delay: 6,
      //filter: 'blur(10px)',
      //y: "-10%",
      ease: "power4.out",
    })
    .from(".box-hero div", {
      duration: 3, 
      opacity: 0, 
      //y: 200,
      stagger:{each: 0.1},
      ease: "back.out(1.7)",
    }, '-=1.5')

    
    /*--=========== ANIMAÇÕES ============- */
    gsap.from("#text-devs",{
      opacity: 0,
      y: 80,
      ease: "power1.out",
      scrollTrigger:{
        trigger: '#text-devs',
        start: 'center 80%',
        end: 'center 60%',
        scrub: 3,
        //markers: true,
      }
    });
    gsap.from("#text-uidesigners",{
      y: 80,
      opacity: 0,
      ease: "power1.out",
      scrollTrigger:{
        trigger: '#text-uidesigners',
        start: 'center 80%',
        end: 'center 60%',
        scrub: 3,
        //markers: true,
      }
    });
    gsap.from("#text-graphicdesigners",{
      y: 80,
      opacity: 0,
      ease: "power1.out",
      scrollTrigger:{
        trigger: '#text-graphicdesigners',
        start: 'center 80%',
        end: 'center 65%',
        scrub: 3,
        //markers: true,
      }
    });
    gsap.from("#text-nocode",{
      y: 80,
      opacity: 0,
      ease: "power1.out",
      scrollTrigger:{
        trigger: '#text-nocode',
        start: 'center 80%',
        end: 'center 70%',
        scrub: 3,
        //markers: true,
      }
    });

    gsap.from("#text-simple",{
      y: -50,
      opacity: 0,
      ease: "power1.out",
      scrollTrigger:{
        trigger: '#text-simple',
        start: 'top 70%',
        end: 'top 50%',
        scrub: 3,
        //markers: true,
      }
    });

    gsap.from("#text-interactive",{
      x: 70,
      opacity: 0,
      ease: "power1.out",
      scrollTrigger:{
        trigger: '#text-interactive',
        start: 'top 70%',
        end: 'top 50%',
        scrub: 3,
        //markers: true,
      }
    });

    gsap.from("#text-compatible",{
      x: -70,
      opacity: 0,
      ease: "power1.out",
      scrollTrigger:{
        trigger: '#text-compatible',
        start: 'top 70%',
        end: 'top 50%',
        scrub: 3,
        //markers: true,
      }
    });

    gsap.from("#text-shocking",{
      x: 70,
      opacity: 0,
      ease: "power1.out",
      scrollTrigger:{
        trigger: '#text-shocking',
        start: 'top 70%',
        end: 'top 50%',
        scrub: 3,
        //markers: true,
      }
    });

    gsap.from("#text-created",{
      x: -70,
      opacity: 0,
      ease: "power1.out",
      scrollTrigger:{
        trigger: '#text-created',
        start: 'top 70%',
        end: 'top 50%',
        scrub: 3,
        //markers: true,
      }
    });

    gsap.from("#text-thought",{
      x: 70,
      opacity: 0,
      ease: "power1.out",
      scrollTrigger:{
        trigger: '#text-thought',
        start: 'top 70%',
        end: 'top 50%',
        scrub: 3,
        //markers: true,
      }
    });


    /*--================================- */
    /*--=========== TEXTOS ============- */
    /*--================================- */

    gsap.from("#text-ui",{
      x: -150,
      opacity: 0,
      ease: "back.out(1.7)",
      scrollTrigger:{
        trigger: '#text-ui',
        start: 'center 80%',
        end: 'center 50%',
        scrub: 2,
        //markers: true,
      }
    });

    

    

    gsap.from("#text-experience",{
      x: -160,
      opacity: 0,
      ease: "back.out(1.7)",
      scrollTrigger:{
        trigger: '#text-experience',
        start: 'center 80%',
        end: 'center 50%',
        scrub: 2,
        //markers: true,
      }
    });



    /*--================================- */
    /*--=========== LOADING AO SCROLL ============- */
    /*--================================- */
    gsap.from("#section-1 div",{
      y: 150,
      opacity: 0,
      ease: "power4.out",
      stagger:{each: 0.2},
      duration: 3,
      scrollTrigger:{
        trigger: '#section-1',
        start: 'top 80%',
        end: 'top 50%',
        //markers: true,
      }
    });

    gsap.from("#section-2 div",{
      y: 150,
      opacity: 0,
      ease: "power4.out",
      stagger:{each: 0.2},
      duration: 3,
      scrollTrigger:{
        trigger: '#section-2',
        start: 'top 80%',
        end: 'top 50%',
        //markers: true,
      }
    });

    gsap.from("#section-3 div",{
      y: 150,
      opacity: 0,
      ease: "power4.out",
      stagger:{each: 0.2},
      duration: 3,
      scrollTrigger:{
        trigger: '#section-3',
        start: 'top 80%',
        end: 'top 50%',
        //markers: true,
      }
    });

    

    
    
});

ScrollTrigger.addEventListener("scrollStart", () => {
  ScrollTrigger.refresh();
});


