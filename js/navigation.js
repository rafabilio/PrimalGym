const dashboard = document.getElementById("dashboard");
const workout = document.getElementById("workout");

const startButton = document.querySelector(".actions button");
const backDashboardButton = document.getElementById("back-dashboard");

function showDashboard() {
  dashboard.style.display = "block";
  workout.style.display = "none";
  modal.style.display = "none";
}

function showWorkout() {
  dashboard.style.display = "none";
  workout.style.display = "block";
}

startButton.addEventListener("click", showWorkout);

backDashboardButton.addEventListener("click", showDashboard);
