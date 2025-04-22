document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("datos");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (validarFormulario()) {
            form.submit();
        }
    });

    var campos = document.querySelectorAll("input[type='text'], input[type='email'], input[type='tel']");

    campos.forEach(function (campo) {
        campo.addEventListener("input", function () {
            validarFormulario();
        });
    });

    function validarFormulario() {
        var nombre = document.getElementById("nombre").value;
        var apellido = document.getElementById("apellido").value;
        var telefono = document.getElementById("telefono").value;
        var correo = document.getElementById("correo").value;

        // obtener elementos para mostrar errores
        var errorNombre = document.getElementById("errorNombre");
        var errorApellido = document.getElementById("errorApellido");
        var errorTelefono = document.getElementById("errorTelefono");
        var errorCorreo = document.getElementById("errorCorreo");

        // limpiar mensajes de error
        errorNombre.textContent = "";
        errorApellido.textContent = "";
        errorTelefono.textContent = "";
        errorCorreo.textContent = "";

        // validar el nombre
        var nombreRegrex = /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]{1,15}$/;
        if (!nombre.match(nombreRegrex)) {
            errorNombre.textContent = "Ingrese un Nombre válido.";
            return false;
        }

        // validar el apellido
        var apellidoRegrex = /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]{1,40}$/;
        if (!apellido.match(apellidoRegrex)) {
            errorApellido.textContent = "Ingrese un Apellido válido.";
            return false;
        }

        // validar el número
        var telefonoRegex = /^\d{3}-?\d{2}-?\d{2}-?\d{2}$/;
        if (!telefono.match(telefonoRegex)) {
            errorTelefono.textContent = "Ingrese un número válido.";
            return false;
        }

        // validar el correo electrónico
        var correoRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!correo.match(correoRegex)) {
            errorCorreo.textContent = "Ingrese un correo electrónico válido.";
            return false;
        }

        return true;
    }
});