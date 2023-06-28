class ImageRecursive {
  constructor() {
    const element = document.querySelector(".image_infinite");
    let interval;
    function onMouseOver() {
      interval = setInterval(mouseOver, 500)
    }
    function mouseOver() {
      if (element.src.match("https://cdn.pixabay.com/photo/2020/07/14/16/18/snow-5404785_960_720.jpg")) {
        element.src = "https://cdn.pixabay.com/photo/2022/08/30/15/33/nature-7421337_960_720.jpg";
      }
      else if (element.src.match("https://cdn.pixabay.com/photo/2022/08/30/15/33/nature-7421337_960_720.jpg")) {
        element.src = "https://cdn.pixabay.com/photo/2018/02/21/21/30/food-3171570_1280.jpg";
      }
      else {
        element.src = "https://cdn.pixabay.com/photo/2020/07/14/16/18/snow-5404785_960_720.jpg";
      }
    }
    function mouseOut() {
      element.src = "https://cdn.pixabay.com/photo/2020/07/14/16/18/snow-5404785_960_720.jpg";
      clearInterval(interval);
    }
    element.addEventListener("mouseover", onMouseOver);
    element.addEventListener("mouseout", mouseOut);
  }
}

export default ImageRecursive;

