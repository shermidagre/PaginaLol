// script.js

// Recuperar usuarios del localStorage

const users = JSON.parse(localStorage.getItem('users')) || [];

// Manejar el evento de envío del formulario de creación de cuenta

document.getElementById('registerForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const newUsername = document.getElementById('newUsername').value; // Obtener el nombre de usuario
    const newPassword = document.getElementById('newPassword').value; // Obtener la contraseña

    // Verificar si el usuario ya existe

    const existingUser  = users.find(user => user.username === newUsername);
    if (existingUser ) {
        alert('El nombre de usuario ya está en uso. Por favor, elige otro.');
        return; // Salir de la función si el usuario ya existe
    }


    // Agregar nuevo usuario
    users.push({ username: newUsername, password: newPassword });
    localStorage.setItem('users', JSON.stringify(users)); // Guardar en localStorage
    alert('Cuenta creada exitosamente. Puedes iniciar sesión ahora.');
    window.location.href = 'login.html'; // Redirigir a la página de inicio de sesión
});

// Manejar el evento de envío del formulario de inicio de sesión

document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const username = document.getElementById('username').value; // Obtener el nombre de usuario
    const password = document.getElementById('password').value; // Obtener la contraseña

    // Buscar el usuario en el array de usuarios
    const user = users.find(user => user.username === username && user.password === password);

    // Verificar si el usuario existe
    if (user) {
        alert('Inicio de sesión exitoso');
        window.location.href = '../personajes.html'; // Redirigir a la página de inicio
    } else {
        alert('Nombre de usuario o contraseña incorrectos');
    }
});