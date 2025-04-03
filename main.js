const predictBtn = document.querySelector("#predictBtn");

predictBtn.addEventListener("click", () => {
  const result = document.querySelector(".result");
  const random = Math.floor(Math.random(0, 2) * 3);

  //
  result.innerHTML = random;
});
