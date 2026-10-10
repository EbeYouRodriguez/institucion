
const formulario = document.getElementById('formulario');

if (formulario) {
  formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    const datos = {
      nombre: document.getElementById('nombre').value,
      documento: document.getElementById('documento').value,
      email: document.getElementById('email').value,
      telefono: document.getElementById('telefono').value,
      carrera: document.getElementById('carrera').value,
      modalidad: document.getElementById('modalidad').value,
      sede: document.getElementById('sede').value
    };

    console.log('Datos enviados:', datos);
    alert('¡Formulario enviado correctamente!');
  });
}