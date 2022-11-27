const screen = document.querySelector("#screen");
const btn = document.querySelector("btn");

for (item of btn) {
  item.addEventListener("click", (e) => {
    btntext = e.target.innerText;
    screen.value += btntext;
  });
}
