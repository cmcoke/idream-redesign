import '../styles/styles.css'
import 'lazysizes'
import 'picturefill'
import MobileMenu from './modules/MobileMenu'
import FundersMarquee from './modules/FundersMarquee'
import Accordion from './modules/Accordion'
import Modal from './modules/Modal'

new MobileMenu();
new FundersMarquee();
new Accordion();
new Modal();















// allows webpack-dev-server to be executed by allowing hot module replacements and accepts updates on the fly
if(module.hot) {
  module.hot.accept()
}
