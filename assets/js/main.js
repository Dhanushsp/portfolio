/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('checkoutForm');
const contactMessage = document.getElementById('contact-message');

contactForm.addEventListener('submit', async (e) => {
   e.preventDefault(); // Prevent default form submission

   // FormData to get all form input values
   const formData = new FormData(contactForm);

   // Send the form data using fetch to Web3Forms API
   try {
      const response = await fetch('https://api.web3forms.com/submit', {
         method: 'POST',
         body: formData
      });

      const result = await response.json();

      if (result.success) {
         // Show success message
         contactMessage.textContent = 'Message sent successfully ✅';
         contactMessage.style.color = 'green';

         // Clear form fields
         contactForm.reset();

         // Remove message after 5 seconds
         setTimeout(() => {
            contactMessage.textContent = '';
         }, 5000);
      } else {
         // Show error message
         contactMessage.textContent = 'Message not sent (error) ❌';
         contactMessage.style.color = 'red';
      }
   } catch (error) {
      console.error('Error:', error);
      contactMessage.textContent = 'Message not sent (server error) ❌';
      contactMessage.style.color = 'red';
   }
});


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
   // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2500,
   delay: 400,
   // reset: true, // Animations repeat
})

sr.reveal(`.perfil, .contact__form`)
sr.reveal(`.info`, {origin: 'left', delay: 800})
sr.reveal(`.skills`, {origin: 'left', delay: 1000})
sr.reveal(`.about`, {origin: 'right', delay: 1200})
sr.reveal(`.projects__card, .services__card, .experience__card`, {interval: 100})

