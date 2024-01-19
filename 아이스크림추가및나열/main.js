const addIceCreamButtonEl = document.getElementById("add-ice-cream");
const alertIceCreamButtonEl = document.getElementById("alert-ice-cream");
const renderIceCreamButtonEl = document.getElementById("render-ice-cream");
const iceCreamsEl = document.querySelector("p");

let iceCreamArray = [];

addIceCreamButtonEl.addEventListener("click", () => {
  let iceCream = prompt("추가하고 싶은 아이스크림을 입력해주세요.");

  iceCreamArray.push(iceCream);
  console.log(iceCreamArray);
});

alertIceCreamButtonEl.addEventListener("click", () => {
  const iceCreams = iceCreamArray.join();
  alert(iceCreams);
});

renderIceCreamButtonEl.addEventListener("click", () => {
  const iceCreams = iceCreamArray.join();
  iceCreamsEl.append(iceCreams);
});
