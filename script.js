document.addEventListener("DOMContentLoaded", () => {

  const exerciseAnswers = document.querySelectorAll(".exercise-answer");
  

  const inpuTb4 = document.querySelector("#b4");
  const inpuTa5 = document.querySelector("#a5");
  const inpuTa6 = document.querySelector("#a6");
  const inpuTb6 = document.querySelector("#b6");
  const inpuTa9 = document.querySelector("#a9");
  const inpuTb9 = document.querySelector("#b9");
  const inpuTa13 = document.querySelector("#a13");
  const inpuTb13 = document.querySelector("#b13");


  const degrees = Math.PI / 180;

  const Pi = 180;


  const ex1 = Math.cos(3 / 7 * Pi * degrees);

  const ex2 =
    Math.pow(Math.E, -2) + Math.pow(Math.sin(3 * Pi * degrees), 2);

  const ex3 =
    Math.sqrt(Math.tan(7 / 9 * Pi * degrees));

  const ex7 =
    Math.pow(Math.sin(3 / 8 * Pi * degrees), 2) - Math.sqrt(963 - Math.pow(27, 2));

  const ex8 = Math.log(3) + Math.log10(4);

  const ex10 = 
    Math.pow(Math.cos(3 * Pi * degrees), 3) + Math.sqrt(Math.E) + Math.pow(Math.E, -8); 

  const ex11 = 
    Math.sqrt(Math.sin(5 * Pi * degrees)) + Math.sqrt(Math.abs(Math.cos(5 * Pi * degrees)));

  const ex12 = Math.asin(0.73);

  function valueThatChanging() {

    inpuTb4Value = +inpuTb4.value;
    inpuTa5Value = +inpuTa5.value;
    inpuTa6Value = +inpuTa6.value;
    inpuTb6Value = +inpuTb6.value;
    inpuTa9Value = +inpuTa9.value;
    inpuTb9Value = +inpuTb9.value;
    inpuTa13Value = +inpuTa13.value;
    inpuTb13Value = +inpuTb13.value;


    let ex4 = Math.log(2 * inpuTb4Value / 3) + Math.E;

    let ex5 = Math.log2(256) + Math.pow(2, inpuTa5Value);

    let ex6 = Math.cbrt(12 + inpuTa6Value) - Math.log(7) / (inpuTb6Value + 3);

    let ex9 =
      (Math.sin(inpuTb9Value * degrees) + Math.cos(inpuTa9Value * degrees + 2 * inpuTb9Value * degrees)) / 2;

    let ex13 = 
      (Math.abs(inpuTa13Value - 3) - 5 * Math.sqrt(Math.abs(inpuTb13Value - 2))) / (inpuTa13Value + 2 * inpuTb13Value);


    const exercises = [ex1, ex2, ex3, ex4, ex5, ex6, ex7, ex8, ex9, ex10, ex11, ex12, ex13];

    for (let i = 0; i < exerciseAnswers.length; i++) {

      const e = exerciseAnswers[i];
      e.innerHTML = ` = ${exercises[i]};`;

      if (e.innerHTML === ` = ${NaN};`) {
        e.innerHTML = ` = ${NaN} ...(Неможливо!);`;
      }else {
        e.innerHTML = ` = ${exercises[i]};`;
      }
    }

  }

  valueThatChanging();


  const allInputs = document.querySelectorAll('.number-input');

  allInputs.forEach((e) => {

    e.oninput = function () {

      if (e.value <= 0) {
        e.value = 1;
      } if (e.value >= 100) {
        e.value = 99;
      }


      valueThatChanging();
    }
  });

});