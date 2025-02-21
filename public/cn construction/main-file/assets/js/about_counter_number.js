// const counters = document.querySelectorAll(".counters span");
// const container = document.querySelector(".counters");

// let activated = false;

// window.addEventListener("scroll", () => {
//   if (
//     pageYOffset > container.offsetTop - container.offsetHeight - 200 &&
//     activated === false
//   ) {
//     counters.forEach((counter) => {
//       counter.innerText = 0; // Reset counters
//     });

//     let count = 0;
//     const duration = 4000; // Duration for counting (2 seconds)
//     const startTime = performance.now();

//     function updateCount(currentTime) {
//       const elapsedTime = currentTime - startTime;
//       const progress = Math.min(elapsedTime / duration, 1);

//       counters.forEach((counter) => {
//         const target = parseInt(counter.dataset.count);
//         const currentCount = Math.floor(target * progress);
//         counter.innerText = currentCount;
//       });

//       if (progress < 1) {
//         requestAnimationFrame(updateCount);
//       } else {
//         counters.forEach((counter) => {
//           const target = parseInt(counter.dataset.count);
//           counter.innerText = target;
//         });
//       }
//     }

//     requestAnimationFrame(updateCount);
//     activated = true;
//   } else if (
//     pageYOffset < container.offsetTop - container.clientHeight - 500 ||
//     (pageYOffset === 0 && activated === true)
//   ) {
//     counters.forEach((counter) => {
//       counter.innerText = 0; // Reset counters when scrolled back up
//     });

//     activated = false;
//   }
// });
const counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".counters");

let activated = false;

window.addEventListener("scroll", () => {
  // Get the bounding box of the container
  const containerPosition = container.getBoundingClientRect();

  // Trigger the counting when the container is in the viewport
  if (
    containerPosition.top >= 0 && // Container is above the bottom of the viewport
    containerPosition.bottom <= window.innerHeight && // Container is within the viewport
    activated === false
  ) {
    counters.forEach((counter) => {
      counter.innerText = 0; // Reset counters
    });

    let count = 0;
    const duration = 4000; // Duration for counting (4 seconds)
    const startTime = performance.now();

    function updateCount(currentTime) {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      counters.forEach((counter) => {
        const target = parseInt(counter.dataset.count);
        const currentCount = Math.floor(target * progress);
        counter.innerText = currentCount;
      });

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        counters.forEach((counter) => {
          const target = parseInt(counter.dataset.count);
          counter.innerText = target;
        });
      }
    }

    requestAnimationFrame(updateCount);
    activated = true; // Ensure counting doesn't happen multiple times
  } else if (
    pageYOffset < container.offsetTop - container.clientHeight - 500 ||
    (pageYOffset === 0 && activated === true)
  ) {
    // Reset when scrolling back up
    counters.forEach((counter) => {
      counter.innerText = 0; // Reset counters when scrolled back up
    });

    activated = false;
  }
});
