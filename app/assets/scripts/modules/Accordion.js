class Accordion {

  constructor() {
    this.accordionsMenu = document.getElementsByClassName('accordion--animated');
    this.events();
  }

  events() {

    if (this.accordionsMenu.length > 0 && window.requestAnimationFrame) {
      for (var i = 0; i < this.accordionsMenu.length; i++) {


        this.accordionsMenu[i].addEventListener('change', function (event) {
          animateAccordion(event.target);
        });



      }

    }


    function animateAccordion(input) {
      var bool = input.checked,
        dropdown = input.parentNode.getElementsByClassName('accordion__sub')[0];

      Util.addClass(dropdown, 'accordion__sub--is-visible'); // make sure subnav is visible while animating height

      var initHeight = !bool ? dropdown.offsetHeight : 0,
        finalHeight = !bool ? 0 : dropdown.offsetHeight;

      Util.setHeight(initHeight, finalHeight, dropdown, 200, function () {
        Util.removeClass(dropdown, 'accordion__sub--is-visible');
        dropdown.removeAttribute('style');
      });
    }


    function Util () {};

    Util.addClass = function(el, className) {
      var classList = className.split(' ');
       if (el.classList) el.classList.add(classList[0]);
       else if (!Util.hasClass(el, classList[0])) el.className += " " + classList[0];
       if (classList.length > 1) Util.addClass(el, classList.slice(1).join(' '));
    };


    Util.removeClass = function(el, className) {
      var classList = className.split(' ');
      if (el.classList) el.classList.remove(classList[0]);	
      else if(Util.hasClass(el, classList[0])) {
        var reg = new RegExp('(\\s|^)' + classList[0] + '(\\s|$)');
        el.className=el.className.replace(reg, ' ');
      }
      if (classList.length > 1) Util.removeClass(el, classList.slice(1).join(' '));
    };

    
    Util.setHeight = function(start, to, element, duration, cb) {
      var change = to - start,
          currentTime = null;
    
      var animateHeight = function(timestamp){  
        if (!currentTime) currentTime = timestamp;         
        var progress = timestamp - currentTime;
        var val = parseInt((progress/duration)*change + start);
        element.setAttribute("style", "height:"+val+"px;");
        if(progress < duration) {
            window.requestAnimationFrame(animateHeight);
        } else {
          cb();
        }
      };
      
      //set the height of the element before starting animation -> fix bug on Safari
      element.setAttribute("style", "height:"+start+"px;");
      window.requestAnimationFrame(animateHeight);
    };


    Util.scrollTo = function(final, duration, cb) {
      var start = window.scrollY || document.documentElement.scrollTop,
          currentTime = null;
          
      var animateScroll = function(timestamp){
        if (!currentTime) currentTime = timestamp;        
        var progress = timestamp - currentTime;
        if(progress > duration) progress = duration;
        var val = Math.easeInOutQuad(progress, start, final-start, duration);
        window.scrollTo(0, val);
        if(progress < duration) {
            window.requestAnimationFrame(animateScroll);
        } else {
          cb && cb();
        }
      };
    
      window.requestAnimationFrame(animateScroll);
    };
    

  }


}



export default Accordion
