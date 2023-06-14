function Contact($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    // $container === <div id="app"></div>
    this.$container.innerHTML = `
      <div class="main_box">
        Contact
      </div>
    `;
  };

  this.render();
}

export default Contact;
