//fonction qui sont lancer le jeux avec interval

let intervalEat = setInterval(progressEat, 1000);
let intervalDrink = setInterval(progressDrink, 1000);
let intervalSleep = setInterval(progresSleep, 1000);

//img par defaut
let imgPulpe = document.querySelector("#imgPulpe");
pulpe = `<img src="img/heureux.png" alt="img Pulpe Heureux"  />`;
imgPulpe.innerHTML = pulpe;

//les differebte jauge
let eat = document.querySelector("#eat");
let drink = document.querySelector("#drink");
let sleep = document.querySelector("#sleep");
let reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  Reset();
});
//cacher le bouton reset pour le moment
reset.style.display = "none";

//btn pour nourrir le tamagochi
let nourir = document.querySelector("#nourir");
nourir.addEventListener("click", () => {
  giveFood();
});

//btn pour donner a boire au tamagochi
let boire = document.querySelector("#boire");
boire.addEventListener("click", () => {
  giveDrink();
});

//btn pour faire dormir le tamagochi
let dormir = document.querySelector("#dormir");
dormir.addEventListener("click", () => {
  goSleep();
});

//jauge de la nourriture
function progressEat() {
  //on descent la valeur de value par 2
  eat.value -= 1;
  //fonction avec les differente condition en fonction du niveau de la jauge
  conditionNegative();

  console.log(eat.value);
}

//jauge de la soif
function progressDrink() {
  drink.value -= 2;
  conditionNegative();
}

//jauge pour dormir
function progresSleep() {
  //plus efficace de faire ca qu'une boucle for (c'est chatGpt il a dit )
  sleep.value -= 1;

  //   for (let i = 0; i < 1; i++) {
  //     sleep.value--;
  //   }
  conditionNegative();
}
//donner a manger
function giveFood() {
  eat.value += 10;
  conditionsPositive();
}

//donner a boire
function giveDrink() {
  drink.value += 10;
  conditionsPositive();
}

//faire dormir
function goSleep() {
  sleep.value = 100;
  conditionsPositive();
}
//btn reset qui renuitialise les parametre et fait apparaitre un personnage
function Reset() {
  pulpe = `<img src="img/heureux.png" alt="img Pulpe Heureux"  />`; //img du poulpe content
  imgPulpe.innerHTML = pulpe;
  reset.style.display = "none"; // le btn reset est cacher

  //toute les jauge remonte à 100%
  eat.value = 100;
  drink.value = 100;
  sleep.value = 100;

  //on reactive les btn
  nourir.disabled = false;
  boire.disabled = false;
  dormir.disabled = false;

  //recommencer le interval
  intervalEat = setInterval(progressEat, 1000);
  intervalDrink = setInterval(progressDrink, 1000);
  intervalSleep = setInterval(progresSleep, 1000);
}

//fonction qui a les condition quand la jauge diminue
function conditionNegative() {
  //si il arrive a zero un message est afficher
  //et un bouton "reset" apparait
  if (eat.value == 0 || drink.value == 0 || sleep.value == 0) {
    pulpe = `<p> Oups, ton tamagotchi c'est échaper 😓</p>  `;
    imgPulpe.innerHTML = pulpe;
    //faire reaparaitre le bouton reset
    reset.style.display = "block";
    //met toute les autre jauge à zéro
    drink.value = 0;
    sleep.value = 0;
    eat.value = 0;
    //desactive tout les bouton
    nourir.disabled = true;
    boire.disabled = true;
    dormir.disabled = true;
    //arreter les interval
    clearInterval(intervalEat);
    clearInterval(intervalDrink);
    clearInterval(intervalSleep);

    //si eat.value arrive à 50 alors il change de visage
  } else if (eat.value < 50 || drink.value < 50 || sleep.value < 50) {
    pulpe = `<img  src="img/confus.png" alt="img Pulpe triste" />   `;
    imgPulpe.innerHTML = pulpe;
  }
}

//fonction qui à la condition quand la jauge augmente
function conditionsPositive() {
  if (eat.value > 50 && drink.value > 50 && sleep.value > 50) {
    pulpe = `<img  src="img/heureux.png" alt="img Pulpe triste" />   `;
    imgPulpe.innerHTML = pulpe;
  }
}
