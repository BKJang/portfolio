import Main from "../pages/Main.js";
import Work from "../pages/Work.js";
import Work1 from "../pages/Work1.js";
import Work2 from "../pages/Work2.js";
import Contact from "../pages/Contact.js";
import Test from "../pages/Test.js";

export const BASE_URL = "http://localhost:5050";

export const routes = [
  { path: /^\/$/, element: Main },
  { path: /^\/work$/, element: Work },
  { path: /^\/work1$/, element: Work1 },
  { path: /^\/work2$/, element: Work2 },
  { path: /^\/contact$/, element: Contact },
  { path: /^\/test$/, element: Test },
];
