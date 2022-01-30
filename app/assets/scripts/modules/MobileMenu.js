class MobileMenu{

  constructor(){
    this.mobileMenu = document.querySelector('.site-header__menu-icon');
    this.mobileMenuIcon = document.querySelector('.site-header__menu-icon__middle');
    this.overlay = document.querySelector('.site-header__overlay');
    this.mainLink = document.querySelectorAll('.main-nav__main-link');
    this.events();
  }

  events(){
    this.mobileMenu.addEventListener('click', () => this.toggleMenu());

    this.mainLink.forEach((el) => {
      el.onclick = function () {
    
        let content = this.nextElementSibling;

        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else { 
          content.style.maxHeight = content.scrollHeight + "px";
        }
      };
    
    });

  }

  // shows menu when clicking the menu icon
  toggleMenu(){
    this.mobileMenuIcon.classList.toggle('site-header__mobile-menu-icon--close');

    if(!this.overlay.classList.contains('site-header__overlay--open')){
      document.body.style.overflow = 'hidden'
      this.overlay.classList.add('site-header__overlay--open')
      this.overlay.classList.remove('site-header__overlay--close')
    } else {
      document.body.style.overflow = 'visible'
      this.overlay.classList.remove('site-header__overlay--open')
      this.overlay.classList.add('site-header__overlay--close')
    }

  }
  

}


export default MobileMenu
