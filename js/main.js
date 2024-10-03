

// Principal botones
// variables
const btnA = document.getElementById("btnA");
const infoA = document.getElementById("Acont");
const btnM = document.getElementById("btnM");
const infoM = document.getElementById("Mcont");
const btnV = document.getElementById("btnV");
const infoV = document.getElementById("Vcont");
const btnC = document.getElementById("btnC");
const infoC = document.getElementById("Ccont");

//clicks
btnA.addEventListener("click", () => {

  console.log("animacion");
  return window.location.href = "html/animacion.html";


})

btnM.addEventListener("click", () => {
  console.log("modelado");
  window.location.href = "html/modelado.html";
})

btnV.addEventListener("click", () => {
  console.log("videojuegos");
  window.location.href = "html/videojuegos.html";
})

btnC.addEventListener("click", () => {
  console.log("contacto");
  window.location.href = "html/contacto.html";
})
//hover
btnA.addEventListener("mouseover", () => {
  setTimeout(() => {
    infoA.innerHTML = ` <p id="Acont">
          Videos 
        </p>`
  }, 750);


})
btnA.addEventListener("mouseout", () => {
  infoA.innerHTML = ` `
})

btnM.addEventListener("mouseover", () => {
  setTimeout(() => {
    infoM.innerHTML = ` <p id="Mcont">
         Renders 3d
        </p>`
  }, 750);


})
btnM.addEventListener("mouseout", () => {
  infoM.innerHTML = ` `
})
btnV.addEventListener("mouseover", () => {
  setTimeout(() => {
    infoV.innerHTML = ` <p id="Vcont">
          Trailers
        </p>`
  }, 750);


})
btnV.addEventListener("mouseout", () => {
  infoV.innerHTML = ` `
})

btnC.addEventListener("mouseover", () => {
  setTimeout(() => {
    infoC.innerHTML = ` <p id="Ccont">
          enlaces
        </p>`
  }, 750);

})

btnC.addEventListener("mouseout", () => {
  infoC.innerHTML = ` `
})
// boton  que te lleve a otra pagina

