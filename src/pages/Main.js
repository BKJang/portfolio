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
      <div class="slide_parent">
        <div class="slide_element primary">
          <img
            src="https://avatars.dicebear.com/api/adventurer/damilola-jerugba.svg"
            alt="damilola jerugba"
          />
          <img
            src="https://avatars.dicebear.com/api/adventurer/tosin-jerugba.svg"
            alt="tosin jerugba"
          />
          <img
            src="https://avatars.dicebear.com/api/adventurer/fiyin-jerugba.svg"
            alt="fiyin jerugba"
          />
          <img
            src="https://avatars.dicebear.com/api/adventurer/feyikemi-jerugba.svg"
            alt="feyikemi jerugba"
          />
          <img
            src="https://avatars.dicebear.com/api/adventurer/femi-jerugba.svg"
            alt="femi jerugba"
          />
        </div>
        <div class="slide_element secondary">
          <img
            src="https://avatars.dicebear.com/api/adventurer/damilola-jerugba.svg"
            alt="damilola jerugba"
          />
          <img
            src="https://avatars.dicebear.com/api/adventurer/tosin-jerugba.svg"
            alt="tosin jerugba"
          />
          <img
            src="https://avatars.dicebear.com/api/adventurer/fiyin-jerugba.svg"
            alt="fiyin jerugba"
          />
          <img
            src="https://avatars.dicebear.com/api/adventurer/feyikemi-jerugba.svg"
            alt="feyikemi jerugba"
          />
          <img
            src="https://avatars.dicebear.com/api/adventurer/femi-jerugba.svg"
            alt="femi jerugba"
          />
        </div>
      </div>
      <div class="slide_parent">
        <div class="slide_element primary_left">
          <img
            src="https://avatars.dicebear.com/api/adventurer/damilola-jerugba.svg"
            alt="damilola jerugba"
          />
          <img
            src="https://avatars.dicebear.com/api/adventurer/tosin-jerugba.svg"
            alt="tosin jerugba"
          />
          <img
            src="https://avatars.dicebear.com/api/adventurer/fiyin-jerugba.svg"
            alt="fiyin jerugba"
          />
          <img
            src="https://avatars.dicebear.com/api/adventurer/feyikemi-jerugba.svg"
            alt="feyikemi jerugba"
          />
          <img
            src="https://avatars.dicebear.com/api/adventurer/femi-jerugba.svg"
            alt="femi jerugba"
          />
        </div>
        <div class="slide_element secondary_left">
          <img
            src="https://avatars.dicebear.com/api/adventurer/damilola-jerugba.svg"
            alt="damilola jerugba"
          />
          <img
            src="https://avatars.dicebear.com/api/adventurer/tosin-jerugba.svg"
            alt="tosin jerugba"
          />
          <img
            src="https://avatars.dicebear.com/api/adventurer/fiyin-jerugba.svg"
            alt="fiyin jerugba"
          />
          <img
            src="https://avatars.dicebear.com/api/adventurer/feyikemi-jerugba.svg"
            alt="feyikemi jerugba"
          />
          <img
            src="https://avatars.dicebear.com/api/adventurer/femi-jerugba.svg"
            alt="femi jerugba"
          />
        </div>
      </div>
    </div>
    `;
  };

  this.render();
}

export default Contact;
