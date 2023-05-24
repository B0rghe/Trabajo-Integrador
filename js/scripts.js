function calcularPrecio() {
    var cantidadTickets = parseInt(document.getElementById('inputCantidad').value, 10),
        precioTotal,
        categoria,
        precioEstudiante,
        precioTrainee,
        precioJunior,
        precioGeneral,
        precio = 200;

    precioEstudiante = precio * 0.2;
    precioTrainee = precio * 0.5;
    precioJunior = precio * 0.85;
    precioGeneral = precio;

    if (cantidadTickets > 0 && !isNaN(cantidadTickets) && cantidadTickets % 1 == 0) {
        switch (categoria) {
            case 'Estudiante':
              precioTotal = precioEstudiante * cantidadTickets;
              break;
            case 'Trainee':
              precioTotal = precioTrainee * cantidadTickets;
              break;
            case 'Junior':
              precioTotal = precioJunior * cantidadTickets;
              break;
            case 'General':
              precioTotal = precioGeneral * cantidadTickets;
              break;
        }
        precioTotal = parseFloat(precioEstudiante * cantidadTickets).toFixed(2);
        document.getElementById('importeTotal').innerHTML = 'Total a Pagar: $' + precioTotal;
    } else { if (cantidadTickets == 0) {
                window.alert('Ingrese la cantidad de entradas');
            } else {
                window.alert('Ingrese un numero válido');
            }
    }
  }

  function borrar() {
    document.getElementById('inputNombre').value = '';
    document.getElementById('inputApellido').value = '';
    document.getElementById('inputEmail').value = '';
    document.getElementById('inputCantidad').value = '';
    document.getElementById('inputCategoria').value = 'Estudiante';
    document.getElementById('importeTotal').innerHTML = 'Total a Pagar: $';
  }