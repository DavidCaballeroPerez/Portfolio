
// volver
/*
const btnvolver = document.getElementById("volver")
btnvolver.addEventListener("click", () => {
  console.log("hola");
})
*/
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
  window.location.href = "html/animacion.html";

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
  infoA.innerHTML = ` <p id="Acont">
          videos animados
        </p>`

})
btnA.addEventListener("mouseout", () => {
  infoA.innerHTML = ` `
})

btnM.addEventListener("mouseover", () => {
  infoM.innerHTML = ` <p id="Mcont">
          Modelados 3d
        </p>`

})
btnM.addEventListener("mouseout", () => {
  infoM.innerHTML = ` `
})
btnV.addEventListener("mouseover", () => {
  infoV.innerHTML = ` <p id="Vcont">
          Trailers  y enlaces
        </p>`

})
btnV.addEventListener("mouseout", () => {
  infoV.innerHTML = ` `
})

btnC.addEventListener("mouseover", () => {
  infoC.innerHTML = ` <p id="Ccont">
          Contacto
        </p>`
})

btnC.addEventListener("mouseout", () => {
  infoC.innerHTML = ` `
})
// boton  que te lleve a otra pagina

