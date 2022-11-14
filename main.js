let elem = document.querySelectorAll(".active");
let btn = document.querySelector(".read");

let dot = document.querySelectorAll(".fa-circle");

let count = document.querySelector(".notification__count");
btn.addEventListener("click", () => {
  elem.forEach((item) => {
    item.classList.remove("active");
  });

  dot.forEach((item) => {
    item.classList.remove("fa-circle");
  });
  count.innerHTML = "0";
});
