import Lottie from "../components/Lottie.js";
import ImageRecursive from '../components/ImageRecursive.js';

function Contact($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    // $container === <div id="app"></div>
    this.$container.innerHTML = `
    <div class="main_box">
      <div id="lottie_sample" class="hoverable"></div>
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
      <div class="image_infinite_container" data-aos="slide-left">
        <img src="https://cdn.pixabay.com/photo/2020/07/14/16/18/snow-5404785_960_720.jpg" class="image_infinite"></img>
      </div>
      <div class="image_size_up" data-aos="slide-right">
        <div>
          <img src="https://cdn.pixabay.com/photo/2020/07/14/16/18/snow-5404785_960_720.jpg" alt="">
        </div>
      </div>
      <div class="image_size_up" data-aos="slide-up" >
        <div class="hidden">
          <img src="https://cdn.pixabay.com/photo/2020/07/14/16/18/snow-5404785_960_720.jpg" alt="">
        </div>
      </div>
      <div class="image_size_down" >
        <div class="hidden">
          <img src="https://cdn.pixabay.com/photo/2020/07/14/16/18/snow-5404785_960_720.jpg" alt="">
        </div>
      </div>
    </div>
    `;
  };

  this.render();
  new ImageRecursive();

}

export default Contact;
