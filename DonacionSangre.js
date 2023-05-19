$(document).ready(function() {
    $('#miFormulario').submit(function(event) {
      event.preventDefault()
      
      var telefono = $('#telefono').val()
      var ci = $('#ci').val()
      var lugar = $('#lugar').val()
      var rh = $('#rh').val()
      var vol = $('#vol').val()
      var fecha = $('#fecha').val()
      
      console.log('Telefono:', telefono)
      console.log('CI:', ci)
      console.log('Lugar:', lugar)
      console.log('RH:', rh)
      console.log('Volumenes:', vol)
      console.log('Fecha límite:', fecha)

      $('#miFormulario')[0].reset()
    })

    $("#botoncinho").click(function(){
        $.get("http://192.168.16.90:8000/api/solicitudes", function(data, status){
            console.log(data)
        })
    })
})

function crearcarta(record){
    let carta = ""
}