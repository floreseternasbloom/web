// 🌸 Mensaje de bienvenida
window.addEventListener("load", () => {
  alert("¡Bienvenido a Bloom∞!");
});

// 💐 Animación suave al hacer scroll
const sections = document.querySelectorAll("section");

sections.forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
});

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
      section.style.transition = "all 0.8s ease-out";
    }
  });
});


// 📝 Manejo del formulario de registro
const formRegistro = document.getElementById("formRegistro");

if (formRegistro) {
  formRegistro.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;

    alert(`Gracias ${nombre} 💐\nTe contactaremos pronto al número ${telefono}.`);

    console.log("Registro guardado:");
    console.log("Nombre:", nombre);
    console.log("Teléfono:", telefono);

    formRegistro.reset();
  });
}

// Agregar clase fade-in a todas las secciones
window.addEventListener("load", () => {
  const sections = document.querySelectorAll("section, header, footer");
  sections.forEach((section, index) => {
    section.style.setProperty('--delay', `${index * 0.3}s`);
    section.classList.add("fade-in");
  });
});



