import App from './App.js';
import "./css/index.css";
import "./static/images/logo.svg";
import { $ } from './utils/querySelector';

window.addEventListener('DOMContentLoaded', function (e) {
  new App($("#app"))
})