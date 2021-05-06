document.addEventListener("DOMContentLoaded", () => {

    const accordions = document.querySelectorAll(".accordion");

    // for(let i = 1; i <= accordions.length; i++) {
    //     let accordionButton = accordions[i];
    //     let symbolSpan = document.querySelector(`.accordion-symbol-${i}`);
    //     let accordionContent = document.querySelector(`.accordion-content-${i}`);
    //     let clicked
    // }





    const accordionButton1 = document.querySelector(".accordion-1");
    const symbolSpan1 = document.querySelector(".accordion-symbol-1");
    const accordionContent1 = document.querySelector(".accordion-content-1")
    let clicked1 = false;


    accordionButton1.addEventListener("click", (event) => {
        if (clicked1) {
            symbolSpan1.classList.remove("down-symbol");
            symbolSpan1.classList.add("up-symbol");
            symbolSpan1.innerHTML = "▼";

            accordionContent1.classList.add("hidden");
            accordionContent1.classList.remove("visible");
            clicked1 = false;
        } else {
            symbolSpan1.classList.remove("up-symbol");
            symbolSpan1.classList.add("down-symbol");
            symbolSpan1.innerHTML = "▲";
            accordionContent1.classList.add("visible");
            accordionContent1.classList.remove("hidden");
            clicked1 = true;
        }
    })



    const accordionButton2 = document.querySelector(".accordion-2");
    const symbolSpan2 = document.querySelector(".accordion-symbol-2");
    const accordionContent2 = document.querySelector(".accordion-content-2")
    let clicked2 = false;


    accordionButton2.addEventListener("click", (event) => {
        if (clicked2) {
            symbolSpan2.classList.remove("down-symbol");
            symbolSpan2.classList.add("up-symbol");
            symbolSpan2.innerHTML = "▼";

            accordionContent2.classList.add("hidden");
            accordionContent2.classList.remove("visible");
            clicked2 = false;
        } else {
            symbolSpan2.classList.remove("up-symbol");
            symbolSpan2.classList.add("down-symbol");
            symbolSpan2.innerHTML = "▲";
            accordionContent2.classList.add("visible");
            accordionContent2.classList.remove("hidden");
            clicked2 = true;
        }
    })



    const accordionButton3 = document.querySelector(".accordion-3");
    const symbolSpan3 = document.querySelector(".accordion-symbol-3");
    const accordionContent3 = document.querySelector(".accordion-content-3")
    let clicked3 = false;


    accordionButton3.addEventListener("click", (event) => {
        if (clicked3) {
            symbolSpan3.classList.remove("down-symbol");
            symbolSpan3.classList.add("up-symbol");
            symbolSpan3.innerHTML = "▼";

            accordionContent3.classList.add("hidden");
            accordionContent3.classList.remove("visible");
            clicked3 = false;
        } else {
            symbolSpan3.classList.remove("up-symbol");
            symbolSpan3.classList.add("down-symbol");
            symbolSpan3.innerHTML = "▲";
            accordionContent3.classList.add("visible");
            accordionContent3.classList.remove("hidden");
            clicked3 = true;
        }
    })


    const accordionButton4 = document.querySelector(".accordion-4");
    const symbolSpan4 = document.querySelector(".accordion-symbol-4");
    const accordionContent4 = document.querySelector(".accordion-content-4")
    let clicked4 = false;


    accordionButton4.addEventListener("click", (event) => {
        if (clicked4) {
            symbolSpan4.classList.remove("down-symbol");
            symbolSpan4.classList.add("up-symbol");
            symbolSpan4.innerHTML = "▼";

            accordionContent4.classList.add("hidden");
            accordionContent4.classList.remove("visible");
            clicked4 = false;
        } else {
            symbolSpan4.classList.remove("up-symbol");
            symbolSpan4.classList.add("down-symbol");
            symbolSpan4.innerHTML = "▲";
            accordionContent4.classList.add("visible");
            accordionContent4.classList.remove("hidden");
            clicked4 = true;
        }
    })

});
