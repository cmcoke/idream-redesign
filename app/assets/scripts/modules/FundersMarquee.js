class FundersMarquee{

  constructor(){
    this.root = document.documentElement;
    this.marqueeElementsDisplayed = getComputedStyle(this.root).getPropertyValue("--marquee-elements-displayed");
    this.marqueeContent = document.querySelector("ul.funders__logos");
    this.events();
  }

  events(){
    
    this.root.style.setProperty("--marquee-elements", this.marqueeContent.children.length);

    for(let i=0; i<this.marqueeElementsDisplayed; i++) {
      this.marqueeContent.appendChild(this.marqueeContent.children[i].cloneNode(true));
    }

  }

}


export default FundersMarquee
