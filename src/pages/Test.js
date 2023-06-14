function Test($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    // $container === <div id="app"></div>
    this.$container.innerHTML = `
      <div class="main_box_test">
        Test
      </div>
    `;
  };

  this.render();
}

export default Test;
