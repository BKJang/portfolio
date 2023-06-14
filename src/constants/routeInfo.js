import Main from "../pages/Main.js";
import Work from "../pages/Work.js";
import Contact from "../pages/Contact.js";
import Test from "../pages/Test.js";

export const BASE_URL = "http://localhost:5050";

export const routes = [
  { path: /^\/$/, element: Main },
  { path: /^\/work$/, element: Work },
  // { path: /^\/post\/[\w]+$/, element: Work },
  { path: /^\/contact$/, element: Contact },
  { path: /^\/test$/, element: Test },
];
