import { $ } from "../utils/querySelector";
import Work1 from "./Work1";
import Work2 from "./Work2";

function Work($container) {
  this.$container = $container;
  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
    <div id="work1_box">
    </div>
    <div id="work2_box">
    </div>
    `;
  };

  this.render();
  new Work1($('#work1_box'), true);
  new Work2($('#work2_box'), true);
}

export default Work;
