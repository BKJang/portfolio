import { TweenMax } from 'gsap/all';

class MouseCursor {
  constructor() {
    const $bigBall = document.querySelector('.cursor__ball--big');
    const $smallBall = document.querySelector('.cursor__ball--small');
    const $hoverables = document.querySelectorAll('.hoverable');

    // Listeners
    document.body.addEventListener('mousemove', onMouseMove);
    for (let i = 0; i < $hoverables.length; i++) {
      $hoverables[i].addEventListener('mouseenter', onMouseHover);
      $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
    }

    // Move the cursor
    function onMouseMove(event) {
      const globalMousePos = { x: event.clientX, y: event.clientY };

      TweenMax.to($bigBall, .4, {
        x: globalMousePos.x - 15,
        y: globalMousePos.y - 15
      })
      TweenMax.to($smallBall, .1, {
        x: globalMousePos.x - 5,
        y: globalMousePos.y - 7
      })
    }

    // Hover an element
    function onMouseHover() {
      TweenMax.to($bigBall, .3, {
        scale: 4
      })
    }
    function onMouseHoverOut() {
      TweenMax.to($bigBall, .3, {
        scale: 1
      })
    }
  }
}

export default MouseCursor;
