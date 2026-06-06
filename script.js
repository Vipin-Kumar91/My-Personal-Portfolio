/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Show menu */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Hide menu */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}




/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll('.nav-link, .nav-contact')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))




/*=============== HOME TEXT CIRCULAR ===============*/
const homeText = document.getElementById('home-text'),
   letters = homeText.textContent.trim().split(''),     // converts text into array of characters
   angleStep = 360 / letters.length     // angle for each character; length counts the number of characters

homeText.textContent = ''      // clears the original content

// Iterates thorough each character
letters.forEach((char, i) => {
   const span = document.createElement('span')       // create a span for each letter
   span.textContent = char    // Inserts each character into the span
   span.style.transform =  `rotate(${i * angleStep}deg)`       // rotates each letter based on its index to form circle
   homeText.appendChild(span)    // Appends the span to the main container 
})


/*=============== HOME TEXT CIRCULAR ===============*/
const typedHome = new Typed('#home-typed', {
  strings: ['Engineer', 'Web Developer', 'Freelancer'],
  typeSpeed: 50,
  backSpeed: 30,
  delaySpeed: 2000,
  loop: true
});





/*=============== CHANGE HEADER STYLES ===============*/
const scrollHeader = () =>{
   const header = document.getElementById('header')
   // Add the .scroll-header class if the bottom scroll of the viewport is greater than 50
   this.scrollY >= 50 ? header.classList.add('scroll-header') 
                      : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)



/*=============== SWIPER WORK ===============*/
// const swiperWork = new Swiper('.work-swiper', {
//    loop: true,
//    grabCursor: true,
//    simulateTouch: true,

   
//    longSwipesRatio: 0.3,

//    pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//    },

//    mousewheel: true,
// });
 

const swiperWork = new Swiper('.work-swiper', {
   slidesPerView: 'auto',
   spaceBetween: 30,
   loop: true,
   grabCursor: true,
   speed: 600,

   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

   // navigation: {
   //    nextEl: '.swiper-button-next',
   //    prevEl: '.swiper-button-prev',
   // },

   autoplay: {
      delay: 3000,
      desableOnInteraction: false,
   }
});



// ============SERVICES ACCORDION================
const servicesCards = document.querySelectorAll('.services-card')
const servicesButtons = document.querySelectorAll('.services-button')

// It Iterares over each button
servicesButtons.forEach(button => {
   button.addEventListener('click', () => {
      const currentCard = button.closest('.services-card'),            // get the class of the clicked button(.services-cars) and arrow
            isOpen = currentCard.classList.contains('services-open')    // check already haas the services-open class returns true or false

      // close alll other services data
      servicesCards.forEach(card => {
         card.classList.replace('services-open', 'services-close')
      })

      // If the clicked card was closed, it opens it
      if(!isOpen){
         currentCard.classList.replace('services-close', 'services-open')
      }
   })
})




// ============ TESTIMONIALS OF DUPLICATE CARDS ====================
// get all testimonial sliders
const tracks = document.querySelectorAll('.testimonials-content')

// Get the child testimonial sliders and create a copy of all cards
tracks.forEach(track => {
   const cards = [...track.children]       //// (... spread operator), converts the collection into an array

// get all testimonial sliders
   for(const card of cards){
// Duplicate the card and append it at the end
      track.appendChild(card.cloneNode(true))
   }
})




// ================ CONTACT EMAIL UP ================
const contactForm = document.getElementById('contact-form')
const contactMessage = document.getElementById('contact-message')

const sendEmail = async(e) => {
   // prevent the page from reloading
   e.preventDefault()
   try {
      // serviceID - templateID - #form - publicKey
      await emailjs.sendForm('service_d0fmzfn', 'template_m3426hm', '#contact-form', 'Desn0Gc9xnZi0_pBr')

      // show sent message
      contactMessage.textContent = 'Message sent successfully ✅'

      // clear input fields
      contactForm.reset()

   }catch(error){
      // show error message
      contactMessage.textContent = 'Message not sent (service error) ❌'
   }finally{
      setTimeout(() => contactMessage.textContent = '', 5000)
   }
}
contactForm.addEventListener('submit', sendEmail)


// ===================== NEW SCROLL UP =====================
const scrollUp = () => {
   const scrollUp = document.getElementById('scroll-up')
   // add the .scroll-header class if the bottom scroll of the viewport is grater than 360
    if(window.scrollY >= 350){
      scrollUp.classList.add('show-scroll');
   }else{
      scrollUp.classList.remove('show-scroll');
   }
}
window.addEventListener('scroll', scrollUp)
 


// ===================== SCROLL SECTIONS ACTIVE LINK =====================
const sections = document.querySelectorAll('section[id]')

// link the ID of each section to each link(a href="#home")
// and activate the link with the class .active-link
const scrollActive = () => {
   // we get the position by scrilling down
   const scrollY = window.scrollY

sections.forEach(section => {
   const id = section.id,
   top = section.offsetTop-50,      // distance from the top edge
   height = section.offsetHeight,    // element height
   link = document.querySelector('.nav-menu a[href *=' + id + ']')      // id nav link

   if(!link) return 

   link.classList.toggle('active-link', scrollY > top && scrollY <= top+height)     // (class anme, condition)
})
}
window.addEventListener('scroll', scrollActive)



// =================== CUSTOM CURSOR =============
const cursor = document.querySelector('.cursor')
let mouseX = 0, mouseY = 0      // store mouse position

const cursorMove = () => {
   cursor.style.left = `${mouseX}px`   // horizontal position (X-axis)
   cursor.style.top = `${mouseY}px`   // vertical position (Y-axis)
   cursor.style.transform = `translate(-50%, -50%)`   // center the elements at the pointer

   // repeat the function with each movement
   requestAnimationFrame(cursorMove)

   // detects mouse movement and updates positions 
   document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX      // save position X
      mouseY = e.clientY
   })
}
cursorMove()






// Hide custom cursor on links
const a = document.querySelectorAll('a')
a.forEach(item => {
   item.addEventListener('mouseover', () =>{
      cursor.classList.add('hide-cursor')
   })

   item.addEventListener('mouseleave', () =>{
      cursor.classList.remove('hide-cursor')
   })
})



// =================== SCROLLREVEAL ANIMATION =============
const sr = ScrollReveal({
   origin: 'bottom',
   distance: '60px',
   duration: 1200,
   delay: 300,
    
   
   easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
   // reset: true,   // Animations repeat
})
sr.reveal(`.home-subtitle`)
sr.reveal(`.home-title`, {delay: 600})
sr.reveal(`.home-description`, {delay: 900})
sr.reveal(`.home-box1`, {delay: 1200, rotate:{z: -20}})
sr.reveal(`.home-box2`, {delay: 1300, rotate:{z: -30}})
sr.reveal(`.home-box3`, {delay: 1400, rotate:{z: -40}})
sr.reveal(`.home-img`, {delay: 1700, distance: '-60px'})
sr.reveal(`.home-circle`, {delay: 2000, distance: '-100px'})

sr.reveal(`.about-title`)
sr.reveal(`.about-description`, {delay: 600})
sr.reveal(`.about-button`, {delay: 900})

sr.reveal(`.work-swiper`)

sr.reveal(`.services-card:nth-child(odd)`, {interval:200, origin: 'left', distance: '100px'})
sr.reveal(`.services-card:nth-child(even)`, {interval:200, origin: 'right', distance: '100px'})

sr.reveal(`.skills-description`)
sr.reveal(`.skills-card`, {delay:600, interval: 200})
sr.reveal(`.skills-profession`, {delay: 900})
sr.reveal(`.skills-list`, {delay: 900, interval: 200})

sr.reveal(`.testimonials-container`)

sr.reveal(`.contact-form`)
sr.reveal(`.contact-link`, {delay: 600, interval: 200})

sr.reveal(`.footer-container`)

