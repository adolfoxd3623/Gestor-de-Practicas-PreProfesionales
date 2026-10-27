// Solo comprueba formularios. No guarda ni agrega registros.
document.querySelectorAll('form').forEach(formulario => {
    formulario.addEventListener('submit', evento => {
        evento.preventDefault();
        let error = '';
        const aviso = formulario.querySelector('.aviso');
        if (!formulario.checkValidity()) {
            error = 'Completa todos los campos y revisa su formato y longitud.';
            formulario.querySelector(':invalid').focus();
        }

        aviso.textContent = error || 'Datos válidos. Es una demostración: no se guardan cambios.';
        aviso.classList.toggle('correcto', !error);
    });
});
