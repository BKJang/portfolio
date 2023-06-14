import { navigate } from "./utils/navigate";
import { $ } from "./utils/querySelector";
import { BASE_URL } from "./constants/routeInfo";
import Router from "./router";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Lottie from './components/Lottie.js';


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

  };

  init();
}

export default App;
