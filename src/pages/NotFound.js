function NotFound($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
      <div class="main_box">
        404 NOT FOUND
      </div>
    `;
  };

  this.render();
}

export default NotFound;
