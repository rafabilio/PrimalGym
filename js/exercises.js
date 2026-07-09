const exerciseOptions = document.querySelector(".exercise-options");

let exercisesData = {};

async function loadExercises() {
  const response = await fetch("data/exercises.json");

  exercisesData = await response.json();

  exerciseOptions.innerHTML = "";

  for (const group in exercisesData) {
    const button = document.createElement("button");

    button.textContent = `${group} ➜`;

    button.classList.add("exercise-item");

    button.addEventListener("click", () => {
      showExercises(group);
    });

    exerciseOptions.appendChild(button);
  }
}

function showExercises(group) {
  exerciseOptions.innerHTML = "";

  const backButton = document.createElement("button");

  backButton.textContent = "← Voltar";

  backButton.classList.add("exercise-item");

  backButton.addEventListener("click", () => {
    loadExercises();
  });

  exerciseOptions.appendChild(backButton);

  const title = document.createElement("h3");

  title.textContent = group;

  exerciseOptions.appendChild(title);

  exercisesData[group].forEach((exercise) => {
    const button = document.createElement("button");

    button.textContent = exercise.nome;

    button.classList.add("exercise-item");

    exerciseOptions.appendChild(button);
  });
}
