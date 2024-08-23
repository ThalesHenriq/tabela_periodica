// script.js
document.querySelectorAll(".elemento").forEach((elemento) => {
  elemento.addEventListener("click", () => {
    const simbolo = elemento.getAttribute("data-simbolo");
    const nome = elemento.getAttribute("data-nome");
    const numero = elemento.getAttribute("data-numero");
    const mass = elemento.getAttribute("mass-atomico");
    alert(
      `Elemento: ${nome}\nSímbolo: ${simbolo}\nNúmero Atômico: ${numero}\nMassa Atomico:${mass}`
    );
  });
});
