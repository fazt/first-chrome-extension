const mensaje = document.querySelector("div");
const boton = document.getElementById("cambiar-mensaje");

boton.addEventListener("click", () => {
  mensaje.textContent = "Nuevo mensaje";
  alert("works")
});
