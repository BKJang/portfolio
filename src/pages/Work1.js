function Work1($container, isTotalWork) {
  this.$container = $container;
  this.$isTotalWork = isTotalWork
  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
    <div class="work1_box">
      <div class="image1">
        <div class="introduction">
          <div class="title" data-aos="slide-right">
            Singles day.<br/>
            Pull&Bear China.
          </div>
          <div class="content" data-aos="slide-left">
            Pull&Bear China invited me to design their campaign for the celebration of Single's Day, known also as 11.11. A huge commercial celebration, similar to Black Friday, which focuses on giving gifts to your single friends.
          ${this.$isTotalWork ? '' : `<div class="goback">
            <a href="/">GO BACK</a>
          </div>`}
        </div>
      </div>
    </div>
    <div class="flex_image">
        <div class="image2"></div>
        <div class="image3"></div>
      </div>
    <div class="image3"></div>

  </div>
    `;
  };

  this.render();
  // new Lottie();
  // new Scroll();
  // new ImageRecursive();
  // new ImageWithTextHover();
}

export default Work1;
