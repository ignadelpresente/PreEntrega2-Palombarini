function sistemaVentaDiscos() {
  const discosDisponibles = [
    {
      nombreDisco: "Currents",
      nombreBanda: "Tame Impala",
      precioDisco: 40,
      estadoDisco: "Nuevo",
      cantidad: 2,
    },
    {
      nombreDisco: "Lonerism",
      nombreBanda: "Tame Impala",
      precioDisco: 22,
      estadoDisco: "Nuevo",
      cantidad: 1,
    },
    {
      nombreDisco: "Tattoo You",
      nombreBanda: "Rolling Stones",
      precioDisco: 20,
      estadoDisco: "Nuevo",
      cantidad: 1,
    },
    {
      nombreDisco: "Destelloz",
      nombreBanda: "Clubz",
      precioDisco: 19,
      estadoDisco: "Nuevo",
      cantidad: 1,
    },
    {
      nombreDisco: "This is it",
      nombreBanda: "The Strokes",
      precioDisco: 50,
      estadoDisco: "Nuevo",
      cantidad: 1,
    },
  ];

  let mensajeDiscosDisponibles = "Discos disponibles:\n";

  discosDisponibles.forEach((disco) => {
    mensajeDiscosDisponibles += `Nombre: ${disco.nombreDisco}, Precio: ${disco.precioDisco}\n`;
  });

  alert(mensajeDiscosDisponibles);

  const buscarDisco = (nombre) => {
    return discosDisponibles.find(
      (disco) => disco.nombreDisco.toLowerCase() === nombre.toLowerCase()
    );
  };

  const comprarDiscos = () => {
    let precioTotal = 0;
    let discosComprados = []; 

    while (true) {
      const discoBuscado = prompt("Ingrese el nombre del disco que desea comprar");
      const discoEncontrado = buscarDisco(discoBuscado);

      if (!discoEncontrado) {
        alert("El disco no está en la lista.");
        const seguirBuscando = confirm("¿Desea seguir buscando?");
        if (!seguirBuscando) {
          break; 
        } else {
          continue; 
        }
      }

      const confirmarCompra = confirm(
        `El disco "${discoEncontrado.nombreDisco}" está disponible por un precio de ${discoEncontrado.precioDisco}. ¿Desea comprarlo?`
      );

      if (confirmarCompra) {
        precioTotal += discoEncontrado.precioDisco;
        discosComprados.push({ nombreDisco: discoEncontrado.nombreDisco, precioDisco: discoEncontrado.precioDisco }); 
      }

      const continuarComprando = confirm("¿Desea comprar otro disco?");
      if (!continuarComprando) {
        break; 
      }
    }

    if (discosComprados.length === 0) {
      alert("Gracias, Vuelva pronto");
    } else {
      let mensaje = "Usted ha comprado los siguientes discos:\n";

      discosComprados.forEach((disco) => {
        mensaje += `Nombre: ${disco.nombreDisco}, Precio: ${disco.precioDisco}\n`;
      });

      mensaje += `El precio total de los discos seleccionados es: ${precioTotal}`;
      alert(mensaje);
    }
  };

  comprarDiscos();
}

sistemaVentaDiscos();
