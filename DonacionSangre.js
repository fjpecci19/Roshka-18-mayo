$(document).ready(function(){
  
    $.get("http://192.168.16.90:8000/api/solicitudes", function(data){
        $.each(data.data, function(index, elemento){
            console.log(data.data[index])
            var html = `<div class="container mt-5 py-2" style="background-color: red; width: 350px; height: 600px; border-radius: 10px;">
            <div class="px3 py-2">
                <div class="row mb-3" style="border: 1px solid black;">
                    <div class="col md-2">
                        <h1 style="text-align: center; color: white;">
                            Solicitudes +
                        </h1>
                    </div>
                </div>
                <div class="row mb-2" style="border: 1px solid black;">
                    <div class="col md-2">
                        <h2 style="text-align: center; color: white;">
                            Mis solicitudes | <img
                                style="width: 30px; height: 30px; position: relative; background-color: red; border: 5px solid white;"></img>
                        </h2>
                    </div>
                </div>
            </div>
            <form id="miFormulario">
                <div class="container py-1"
                    style="background-color: white; width: 200px; height: 360px; border-radius: 10px;">
                    <h2 style="font-size: 15px; text-align: left;">
                        ${data.data[index].nombre_apellido_donatario}<img id="basurero" type="img" style="float: right; font-size: 12px;"
                            value="➙"></img><img id="flecha" type="img" style="float: right; font-size: 12px;" value="🗑️"></img>
                    </h2>
                    <h2 style="font-size: 10px; text-align: left;">
                        <label for="telefono" style="font-size: 10px; color: 1px solid black;">Teléfono:</label>
                        <input type="text" id="telefono" value="${data.data[index].telefono_contacto}" style="float: right; border: 1px solid black; width: 80px;">
                    </h2>
                    <br>
                    <h2 style="font-size: 10px; text-align: left;">
                        <label for="ci" style="font-size: 10px; color: 1px solid black;">CI:</label>
                        <input type="int" id="ci" value="${data.data[index].cedula_donatario}" style="float: right; border: 1px solid black; height: 17px; width: 80px;">
                    </h2>
                    <br>
                    <h2 style="font-size: 10px; text-align: left;">
                        <label for="lugar"
                            style="font-size: 10px; width: 5px; color: 1px solid black; text-align: left;">Lugar de
                            donación:</label>
                        <input type="int" id="lugar" value="${data.data[index].establecimiento}"
                            style="float: right; border: 1px solid black; height: 17px; width: 80px;">
                    </h2>
                    <br>
                    <h2 style="font-size: 10px; text-align: left;">
                        <label for="rh" style="font-size: 10px; color: 1px solid black;">RH:</label>
                        <input type="int" id="lugar" value="${data.data[index].tipo_sangre}"
                            style="float: right; border: 1px solid black; height: 17px; width: 80px;">
                    </h2>
                    <br>
                    <h2 style="font-size: 10px; text-align: left;">
                        <label for="vol" style="font-size: 10px; color: 1px solid black;">Volumenes:</label>
                        <input type="int" id="vol" value="${data.data[index].volumenes_necesarios}"
                            style="float: right; border: 1px solid black; height: 17px; width: 80px;">
                    </h2>
                    <br>
                    <h2 style="font-size: 10px; text-align: left;">
                        <label for="fecha" style="font-size: 10px; color: 1px solid black;">Fecha límite:</label>
                        <input id="fecha" value="${data.data[index].fecha_limite}"
                            style="float: right; border: 1px solid black; height: 17px; width: 80px;">
                    </h2>
                    <br>
                    <h2 style="text-align: center; font-size: 12px;">
                        ${data.data[index].solicitud    }
                    </h2>
            </form>
        </div>
            `
            $('.contenedor').append(html)
        })
    })
})
