const dashboard = document.getElementById("dashboard");
const workout = document.getElementById("workout");

const startButton = document.querySelector(".actions button");

startButton.addEventListener("click", () => {
  dashboard.style.display = "none";
  workout.style.display = "block";
});
