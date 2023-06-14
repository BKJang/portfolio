

import bodymovin from "lottie-web";
import animationJson from "../static/lottie/sample.json";



class Lottie {
  constructor() {
    const target = document.getElementById("lottie_sample");
    const animation = bodymovin.loadAnimation({
      container: target,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: animationJson
    });

    target.addEventListener('click', function () {
      console.log(animation);
      animation.setDirection(-1);
      animation.playSegments([0, 200], false);

    })
  }
}

export default Lottie;

