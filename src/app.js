/* eslint-disable */
//github.com/4GeeksAcademy/vanillajs-hello

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
  document.querySelector("#excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronuns = ["A", "The"];
  let subject = ["jagger", "racoon", "dog", "driver", "comediaan", "pincone"];
  let action = ["took my", "threw my", "yelled at my", "stole my", "bit my"];
  let possetion = ["homework", "toe", "car", "shoe"];
  let where = ["on the street", "in my house", "in my room", "in my driveway"];

  let pronounsIndex = Math.floor(Math.random() * pronuns.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronuns[pronounsIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    possetion[possetionIndex] +
    " " +
    where[whereIndex]
  );
};
