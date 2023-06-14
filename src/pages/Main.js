import Lottie from "../components/Lottie.js";

function Contact($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    // $container === <div id="app"></div>
    this.$container.innerHTML = `
    <div class="main_box">
      <div id="lottie_sample"></div>
    </div>
    `;
  };

  this.render();
}

export default Contact;
