$(document).ready(function() {
    // Manejar el evento de envío del formulario
    $('#miFormulario').submit(function(event) {
      event.preventDefault(); // Evitar el envío del formulario por defecto
      
      // Obtener los valores de los campos del formulario
      var telefono = $('#telefono').val();
      var ci = $('#ci').val();
      
      // Realizar validaciones si es necesario
      
      // Realizar acciones con los datos del formulario
      // Por ejemplo, mostrarlos en la consola
      console.log('Telefono:', telefono);
      console.log('CI:', ci);
      
      // Puedes realizar otras acciones, como enviar los datos al servidor mediante AJAX
      
      // Restablecer el formulario
      $('#miFormulario')[0].reset();
    });
  });
  
