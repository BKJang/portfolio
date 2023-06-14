class Hamburger {
  constructor(hamburgerWrapper) {
    this.wrapper = hamburgerWrapper;
    const menu = document.querySelector('.menu');
    // const menu = $('.menu');
    this.wrapper.addEventListener("click", () => {
      this.wrapper.classList.toggle("open")
      menu.classList.toggle('open');
    })
  }
}

export default Hamburger;

