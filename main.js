let discoCaro = "$100.000";
let discoMedio = "$60.000";
let discoBarato = "$20.000";

function sistemaVentaDiscos() {
  let discosDisponibles = [
    { nombre: "Currents", precio: discoMedio },
    { nombre: "This is it", precio: discoMedio },
    { nombre: "Tattoo You", precio: discoCaro },
    { nombre: "Destelloz", precio: discoCaro },
    { nombre: "Lonerism", precio: discoBarato }
  ];

  let encontrado = false;

  do {
    let discoBuscado = prompt("Ingrese el nombre del disco que busca");

    encontrado = false;

    alert(`Buscando el disco "${discoBuscado}" en el inventario...`);

    for (let i = 0; i < discosDisponibles.length; i++) {
      if (discoBuscado.toLowerCase() === discosDisponibles[i].nombre.toLowerCase()) {
        encontrado = true;
        let comprar = confirm(`El disco "${discosDisponibles[i].nombre}" está disponible por un precio de ${discosDisponibles[i].precio}. ¿Desea comprarlo?`);
        if (comprar) {
          alert(`¡Compra realizada! Gracias por su compra.`);
        } else {
          alert(`Gracias por visitar nuestra tienda.`);
        }
        break;
      }
    }

    if (!encontrado) {
      let continuar = confirm(`El disco "${discoBuscado}" no está disponible en el inventario. ¿Desea seguir buscando?`);
      if (!continuar) {
        break;
      }
    }
  } while (!encontrado);
}

sistemaVentaDiscos();
