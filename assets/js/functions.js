// Función para agregar un usuario a la colección 'usuarios'
async function agregarUsuario(nombre, apellido, fechaInicio, fechaFin) {
    try {
        // Referencia a la colección 'usuarios'
        const usuariosRef = firebase.firestore().collection('usuarios');

        // Agregar un nuevo documento con los campos proporcionados
        const nuevoUsuario = await usuariosRef.add({
            nombre: nombre,
            apellido: apellido,
            fechaInicio: fechaInicio,
            fechaFin: fechaFin
        });

        console.log(`Usuario agregado con ID: ${nuevoUsuario.id}`);
    } catch (error) {
        console.error("Error al agregar el usuario:", error);
    }
}


