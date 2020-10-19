"use strict";
const mainActivity = document.querySelector(".main-activity");
const instruction = document.getElementById("instruction");
const imageExercise = document.getElementById("img-exercise");
const buttonInicio = document.getElementById("inicio");
//botoes de controle
const divControl = document.querySelector(".control-buttons");
const timeRunnig = document.getElementById("counter");
const buttonStart = document.getElementById("start");
const buttonPause = document.getElementById("pause");
const buttonRestart = document.getElementById("restart");
const description = document.querySelector(".description");

divControl.style.display = "none";
let ss = 60;
let tempo = 1000; //Quantos milésimos valem 1 segundo?
let cron;
let nextExercise = 1;

let exercises = {
  ex1: {
    title: "1. Neck curlup",
    img:
      "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_5_Exercises_For_a_Defined_and_Muscular_Jawline_Neck_Curlup.gif?w=1155&h=840",
    time: 60,
    description: `Think of this as an abdominal curl for your neck. It’s done lying on your back with the tongue pressed on the roof of the mouth. This activates the front neck muscles.

    1. Bring your chin to your chest and then lift your head off of the ground about 2 inches. Don’t lift your stomach and don’t poke your chin out.

    2. Start by doing 3 sets for 10 repetitions and gradually build up to more.

    3. Take your time because these muscles are often underdeveloped and can cause neck strain if you try too much too fast.`,
  },
  ex2: {
    title: "2. Collar bone backup",
    img:
      "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_5_Exercises_For_a_Defined_and_Muscular_Jawline_Collar_Bone_Backup.gif?w=1155&h=840",
    time: 60,
    description: `1. Keeping your head level with the floor, bring your head back several inches to feel muscles on either side of your throat contract and relax.

    2. Start with 3 sets of 10 repetitions at first, and then progress to holding the position for more than 30 seconds.

    3. Make sure that your ears stay over your shoulders and your head stays level.`,
  },
  ex3: {
    title: "3. Tongue twister",
    img:
      "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_5_Exercises_For_a_Defined_and_Muscular_Jawline_Tounge_Twister.gif?w=1155&h=840",
    time: 60,
    description: `1. Place your tongue on the roof of your mouth directly behind your teeth.
    
    2. Press your tongue to completely close the roof of your mouth and add tension.
    
    3. Begin humming and making a vibrating sound. This will activate the muscles.
    
    4. Complete 3 sets of 15.`,
  },
  ex4: {
    title: "4. Vowel sounds",
    img:
      "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_5_Exercises_For_a_Defined_and_Muscular_Jawline_Vowel_Sounds.gif?w=1155&h=840",
    time: 60,
    description: `1. Open your mouth wide then say “O,” followed by “E.”
    
    2. Be sure to exaggerate these sounds and movements and not show or touch your teeth.
    
    3. Perform 3 sets of 15.`,
  },
  ex5: {
    title: "5. Chinup",
    img:
      "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/400x400_5_Exercises_For_a_Defined_and_Muscular_Jawline_Chinup.gif?w=1155&h=840",
    time: 60,
    description: `1. With your mouth closed, push your lower jaw out and lift your lower lip.

    2. You should feel a stretch build just under the chin and in the jawline.

    3. Hold the position for 10–15 seconds, then relax.
    
    4. Perform 3 sets of 15.`,
  },
};

let allExercises = Object.values(exercises);

//Inicia o temporizador
function start() {
  buttonStart.style.display = "none";
  buttonPause.style.display = "block";
  buttonRestart.style.display = "block";
  cron = setInterval(() => {
    timer();
  }, tempo);
}

//Para o temporizador mas não limpa as variáveis
function pause() {
  clearInterval(cron);
  buttonStart.style.display = "block";
  buttonPause.style.display = "none";
}

//Para o temporizador e limpa as variáveis
function restart() {
  buttonStart.style.display = "block";
  buttonPause.style.display = "none";
  buttonRestart.style.display = "none";
  clearInterval(cron);
  ss = 60;
  timeRunnig.innerText = "60";
}

//Faz a contagem do tempo e exibição
function timer() {
  ss--; //Incrementa +1 na variável ss

  if (ss === 0) {
    changeExercise(nextExercise);
  }

  //Insere o valor tratado no elemento counter
  timeRunnig.innerText = ss;
}

buttonStart.addEventListener("click", start);

buttonPause.addEventListener("click", pause);

buttonRestart.addEventListener("click", restart);

buttonInicio.addEventListener("click", function () {
  mainActivity.removeChild(mainActivity.lastElementChild);
  instruction.innerText = exercises.ex1.title;
  imageExercise.src = exercises.ex1.img;
  ss = exercises.ex1.time;
  start();
  description.innerText = exercises.ex1.description;
  divControl.style.display = "block";
});

const changeExercise = (exNow) => {
  instruction.innerText = allExercises[exNow].title;
  imageExercise.src = allExercises[exNow].img;
  description.innerText = allExercises[exNow].description;
  ss = allExercises[exNow].time;
  nextExercise += 1;
};
