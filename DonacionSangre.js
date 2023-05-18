let peticion = {}
$.ajax({
    dataType: "json",
    async:false,
    url: "http://192.168.16.90:8000/api/solicitudes",
    success: function(result) {
        peticion = result.data
    }
})
console.log(peticion)
