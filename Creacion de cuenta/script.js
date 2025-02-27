// script.js

try {
    // Recuperar usuarios del localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    console.log('Usuarios iniciales:', users); // Mensaje de depuración

    // Manejar el evento de envío del formulario de creación de cuenta
    document.getElementById('registerForm')?.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

        const newUsername = document.getElementById('newUsername').value; // Obtener el nombre de usuario
        const newPassword = document.getElementById('newPassword').value; // Obtener la contraseña

        console.log('Nuevo usuario:', newUsername, newPassword); // Mensaje de depuración

        // Verificar si el usuario ya existe
        const existingUser = users.find(user => user.username === newUsername);
        if (existingUser) {
            alert('El nombre de usuario ya está en uso. Por favor, elige otro.');
            console.log('El usuario ya existe:', existingUser); // Mensaje de depuración
            return; // Salir de la función si el usuario ya existe
        }

        // Agregar nuevo usuario
        users.push({ username: newUsername, password: newPassword });
        console.log('Usuarios después de agregar:', users); // Mensaje de depuración
        localStorage.setItem('users', JSON.stringify(users)); // Guardar en localStorage

        // Verificar que los datos se guardaron correctamente
        console.log('Usuarios guardados en localStorage:', JSON.parse(localStorage.getItem('users')));

        alert('Cuenta creada exitosamente. Puedes iniciar sesión ahora.');
        window.location.href = 'index.html'; // Redirigir a la página de inicio de sesión
    });

    // Manejar el evento de envío del formulario de inicio de sesión
    document.getElementById('loginForm')?.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

        const username = document.getElementById('username').value; // Obtener el nombre de usuario
        const password = document.getElementById('password').value; // Obtener la contraseña

        console.log('Intentando iniciar sesión con:', username, password); // Mensaje de depuración

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
} catch (error) {
    console.error('Error encontrado:', error); // Mostrar cualquier error en la consola
}