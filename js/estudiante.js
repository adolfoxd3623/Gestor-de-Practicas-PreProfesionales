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
        if (!error && formulario.id === 'formHoras') {
            const fecha = formulario.elements.fecha.value;
            const entrada = formulario.elements.entrada.value;
            const salida = formulario.elements.salida.value;
            const minutos = hora => Number(hora.slice(0, 2)) * 60 + Number(hora.slice(3));
            const duracion = minutos(salida) - minutos(entrada);
            if (duracion <= 0 || duracion > 480) error = 'La jornada debe durar entre 1 minuto y 8 horas.';
            if (new Date(fecha + 'T00:00:00') > new Date()) error = 'No puedes registrar una fecha futura.';
        }
        if (!error && formulario.id === 'formDocumento') {
            const archivo = formulario.elements.archivo.files[0];
            if (!/\.pdf$/i.test(archivo.name)) error = 'Selecciona un archivo con extensión PDF.';
            else if (!archivo.size || archivo.size > 5 * 1024 * 1024) error = 'El PDF debe pesar entre 1 byte y 5 MB.';
        }

        aviso.textContent = error || 'Datos válidos. Es una demostración: no se guardan cambios.';
        aviso.classList.toggle('correcto', !error);
    });
});
