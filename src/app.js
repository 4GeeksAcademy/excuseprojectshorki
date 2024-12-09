/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  function random(arreglo) {
    let number = Math.floor(Math.random() * arreglo.length);
    return number;
  }

  for (let i = 0; i < 1; i++) {
    let randomWho = who[random(who)];
    let randomAction = action[random(action)];
    let randomWhat = what[random(what)];
    let randomWhen = when[random(when)];

    console.log(
      randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen
    );
  }
  //write your code here
  console.log("Hello Rigo from the console!");
};
