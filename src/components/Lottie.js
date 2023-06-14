

import bodymovin from "lottie-web";
import animationJson from "../static/lottie/sample.json";



class Lottie {
  constructor() {

    this.animation = bodymovin.loadAnimation({
      container: document.getElementById("lottie_sample"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationJson
    });

    // this.animation.setDirection(1);
    // this.animation.play();
  }
}

export default Lottie;

