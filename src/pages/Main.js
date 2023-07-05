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
          <img src="https://cdn.pixabay.com/photo/2020/07/14/16/18/snow-5404785_960_720.jpg" />
          <img src="https://cdn.pixabay.com/photo/2022/08/30/15/33/nature-7421337_960_720.jpg" />
          <img src="https://cdn.pixabay.com/photo/2018/02/21/21/30/food-3171570_1280.jpg" />
          <img src="https://cdn.pixabay.com/photo/2022/08/30/15/33/nature-7421337_960_720.jpg" />
          <div>2</div>
          <div>3</div>
        </div>
      <a href="/work2">
        <div class="image_size_up" data-aos="slide-right">
          <div>
            <img src="https://cdn.pixabay.com/photo/2020/07/14/16/18/snow-5404785_960_720.jpg" alt="">
          </div>
        </div>
      </a>
      <div class="image_size_up" data-aos="slide-up" >
        <div class="hidden">
          <img src="https://cdn.pixabay.com/photo/2020/07/14/16/18/snow-5404785_960_720.jpg" alt="">
        </div>
      </div>
      <div class="image_size_down">
        <div class="hidden">
          <img src="https://cdn.pixabay.com/photo/2020/07/14/16/18/snow-5404785_960_720.jpg" alt="">
        </div>
      </div>
    </div>
    `;
  };
  this.render();
  new Lottie();
}

export default Contact;
