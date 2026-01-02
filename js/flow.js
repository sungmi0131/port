document.addEventListener("DOMContentLoaded", () => {
  let dir = 1;        // 방향
  let speed = 3;      // 속도
  let loc = 0;        // 위치
  let elemWidth = 0;  // 요소 전체 너비

  const flowInner = document.querySelector(".flow__inner");
  if (!flowInner) return; // 해당 요소 없으면 실행 안 함

  function widthCalc() {
    elemWidth = 0;

    document
      .querySelectorAll(".flow__text:not(.cf)")
      .forEach(item => {
        elemWidth += item.getBoundingClientRect().width;
      });
  }

  function flowBanner() {
    loc += speed * dir;

    if (loc <= -elemWidth) {
      loc = 0;
    } else if (loc >= 0) {
      loc = -elemWidth;
    }

    flowInner.style.transform = `translateX(${loc}px)`;
    requestAnimationFrame(flowBanner);
  }

  // 실행 순서 중요
  widthCalc();
  flowBanner();

  // 마우스 올리면 멈춤
  flowInner.addEventListener("mouseenter", () => {
    speed = 0;
  });

  // 마우스 나가면 다시 흐름
  flowInner.addEventListener("mouseleave", () => {
    speed = 3;
  });

  window.addEventListener("resize", widthCalc);
});