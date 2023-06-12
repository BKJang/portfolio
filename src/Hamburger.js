class Hamburger {
  constructor(hamburgerWrapper) {
    this.wrapper = hamburgerWrapper;
    this.wrapper.addEventListener("click", () => {
      this.wrapper.classList.toggle("open")
    })
  }
}

export default Hamburger;

