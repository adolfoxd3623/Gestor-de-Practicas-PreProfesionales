// Comprueba las tres cuentas de demostración y abre su página.
const cuentas = [
    { nombre: 'Bryan Chiquito', clave: 'estudiante123', pagina: 'estudiante.html' },
    { nombre: 'Maykel Castro', clave: 'docente123', pagina: 'docente.html' },
    { nombre: 'Adolfo Meneses', clave: 'admin123', pagina: 'administrador.html' }
];

document.getElementById('formLogin').addEventListener('submit', evento => {
    evento.preventDefault();
    const nombre = document.getElementById('usuario').value.trim().toLowerCase();
    const clave = document.getElementById('clave').value;
    const aviso = document.getElementById('aviso');

    if (!nombre || !clave) {
        aviso.textContent = 'Completa el usuario y la contraseña.';
        return;
    }
    const cuenta = cuentas.find(c => c.nombre.toLowerCase() === nombre && c.clave === clave);
    if (!cuenta) {
        aviso.textContent = 'Usuario o contraseña incorrectos.';
        return;
    }
    window.location.href = cuenta.pagina;
});
