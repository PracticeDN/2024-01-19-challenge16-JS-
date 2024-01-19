const imageContainerEl = document.querySelector("div");
const images = [
  "https://img1.daumcdn.net/thumb/R750x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbb07kA%2Fbtq4l9NgzNC%2FDodfmPS2rEIdRl5siRltZk%2Fimg.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkdDy1MPyAklifM98twCxSuRj7EVJPO0cmHg&usqp=CAU",
  "https://modulabs.co.kr/wp-content/uploads/2023/11/image-1536x864.jpeg",
];

let currentIndex = 0;

const interval = setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  imageContainerEl.style.backgroundImage = `url('${images[currentIndex]}')`;
}, 300);

const buttonEl = document.querySelector("button");

buttonEl.addEventListener("click", () => {
  clearInterval(interval);
});
