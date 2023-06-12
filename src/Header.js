import Hamburger from './Hamburger.js';

class Header {
  constructor() {
    const hamburgerWrapper = document.getElementById('hamburger-wrapper')
    this.hamburger = new Hamburger(hamburgerWrapper);
  }
}

export default Header;
