import { navigate } from "./utils/navigate";
import { $ } from "./utils/querySelector";
import { BASE_URL } from "./constants/routeInfo";
import Router from "./router";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Lottie from './components/Lottie.js';
import MouseCursor from './components/MouseCursor.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App($container) {
  this.$container = $container;

  const init = () => {

    $(".menu-items").addEventListener("click", (e) => {
      const target = e.target.closest("a");
      if (!(target instanceof HTMLAnchorElement)) return;

      e.preventDefault();
      const targetURL = e.target.href.replace(BASE_URL, "");
      navigate(targetURL);
    });

    new Router($container);
    new Header();
    new Footer();
    new Lottie();
    new MouseCursor();
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 400, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
  };

  init();
}

export default App;
