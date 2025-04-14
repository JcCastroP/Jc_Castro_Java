document.addEventListener("DOMContentLoaded", function () {
    var producto = document.getElementById("producto");
    var plazo = document.getElementById("plazo");
    var extras = document.querySelectorAll("input[type='checkbox']");
    var presupuestoInput = document.getElementById("presupuesto");

    // precios base por producto
    var preciosBase = {
        redessociales: 100,
        branding: 600,
        fotomontaje: 300,
        atl: 800
    };

    // costos extra
    var costoExtras = 100;

    // multiplicador por tiempo (dias de trabajo)
    var multiplicadorTiempo = 40;

    function calcularPresupuesto() {
        let total = 0;
        let productoSeleccionado = producto.value;
        let dias = parseInt(plazo.value) || 0;

        if (productoSeleccionado in preciosBase) {
            total = preciosBase[productoSeleccionado];
        } else {
            presupuestoInput.value = "Seleccione un producto";
            return;
        }

        // sumar costo por el plazo de entrega
        if (dias > 0) {
            total += dias * multiplicadorTiempo;
        }

        // sumar los extras seleccionados (máximo 3)
        let extrasSeleccionados = Array.from(extras).filter(extra => extra.checked);
        total += Math.min(extrasSeleccionados.length, 3) * costoExtras;

        // mostrar resultado
        presupuestoInput.value = `$${total}`;
    }

    // eventos para actualizar el presupuesto
    producto.addEventListener("change", calcularPresupuesto);
    plazo.addEventListener("input", calcularPresupuesto);
    extras.forEach(extra => extra.addEventListener("change", calcularPresupuesto));
});