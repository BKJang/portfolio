import { routes } from "./constants/routeInfo.js";
import NotFound from "./pages/NotFound.js";

function Router($container) {
  // $container === <div id="app"></div>
  this.$container = $container;
  let currentPage = undefined;

  const findMatchedRoute = () =>
    routes.find((route) => route.path.test(location.pathname));

  const route = () => {
    currentPage = null;
    // contact를 클릭하면, findMantchedRoute()의 결과: { path: /^\/contact$/, element: Contact }
    const TargetPage = findMatchedRoute()?.element || NotFound;
    currentPage = new TargetPage(this.$container);
  };

  const init = () => {
    window.addEventListener("historychange", ({ detail }) => {
      const { to, isReplace } = detail;

      if (isReplace || to === location.pathname)
        history.replaceState(null, "", to);
      else history.pushState(null, "", to);

      route();
    });

    window.addEventListener("popstate", () => {
      route();
    });
  };

  init();
  route();
}

export default Router;
