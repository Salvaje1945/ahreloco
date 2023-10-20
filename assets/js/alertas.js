// import $ from './funciones_globales/elementos_por_id.js'

export default function alertas(tipo) {

    function descargarCatalogo() {

        const form = document.createElement('form')
        form.innerHTML = `
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" required><br>
        
        <label for="email">Email:</label>
        <input type="email" id="email" required><br>
        
        <label for="opciones">Selecciona una opción:</label>
        <select id="opciones">
          <option value="A">Opción A - Texto A</option>
          <option value="B">Opción B - Texto B</option>
          <option value="C">Opción C - Texto C</option>
        </select><br>
        
        <label for="otroTexto">Otro Texto:</label>
        <input type="text" id="otroTexto" required><br>
        
        <label for="numero1">Número 1:</label>
        <input type="number" id="numero1" required><br>
        
        <label for="numero2">Número 2:</label>
        <input type="number" id="numero2" required><br>`

        Swal.fire({
            title: 'Formulario',
            html: form,
            showCancelButton: true,
            showConfirmButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Confirmar',
          }).then((result) => {
            if (result.isConfirmed) {
              // Aquí puedes agregar la lógica para abrir un archivo externo en otra pestaña
              window.open('assets/files/INTERNATIONAL FASTENERS - CATALOGO 2022 - MAQUINAS Y HERRAMIENTAS NEUMATICAS.pdf', '_blank')
            }
          })
        
        // Swal.fire({
        //     title: '<p class="contenido__confirm--h1">Por favor, complete el formulario para descargar nuestro catálogo en formato PDF:</p>',
        //     html: `<form class="contenido__form" id="form__registro">
        //         <div class="contenido__form--grupo" id="nom">
        //             <h2>Nombre</h2>
        //             <input class="contenido__form--grupo_ipt" type="text" id="nombre" placeholder="Juan Carlos">
        //             <div class="contenido__form--grupo_error" id="error-nombre">Debe introducir su nombre.</div>
        //         </div>
        //         <div class="contenido__form--grupo" id="ape">
        //             <h2>Apellido</h2>
        //             <input class="contenido__form--grupo_ipt" type="text" id="apellido" placeholder="González">
        //             <div class="contenido__form--grupo_error" id="error-apellido">Debe introducir su apellido.</div>
        //         </div>
        //         <div class="contenido__form--grupo" id="cor">
        //             <h2>Correo electrónico</h2>
        //             <input class="contenido__form--grupo_ipt" type="email" id="correo" placeholder="correo@electronico.com">
        //             <div class="contenido__form--grupo_error" id="error-correo">Debe introducir un correo válido.</div>
        //         </div>
        //         <div class="contenido__form--grupo" id="dir">
        //             <h2>Dirección</h2>
        //             <div class="contenido__form--grupo_dir">
        //                 <div class="contenido__form--grupo_dir_calle">
        //                     <p>Calle y altura</p>
        //                     <input class="contenido__form--grupo_ipt" type="text" id="direccion-calle" placeholder="Calle Falsa 123">
        //                 </div>
        //                 <div class="contenido__form--grupo_dir_dpto">
        //                     <p>Dpto</p>
        //                     <input class="contenido__form--grupo_ipt" type="text" id="direccion-dpto" placeholder="9°B">
        //                 </div>
        //             </div>
        //             <div class="contenido__form--grupo_error" id="error-direccion">Debe introducir una dirección válida.</div>
        //         </div>
        //         <div class="contenido__form--grupo" id="mov">
        //             <h2>Teléfono móvil</h2>
        //             <input class="contenido__form--grupo_ipt" type="text" id="movil" placeholder="5491147777777">
        //             <div class="contenido__form--grupo_error" id="error-movil">Debe introducir un número de móvil válido.</div>
        //         </div>
        //         <div class="contenido__form--grupo" id="pass">
        //             <h2>Contraseña</h2>
        //             <input class="contenido__form--grupo_ipt" type="password" id="pass1">
        //             <div class="contenido__form--grupo_error" id="passvacio">Debe introducir una contraseña.</div>
        //             <div class="contenido__form--grupo_error" id="passnocoin">Las contraseñas no coinciden.</div>
        //         </div>
        //         <div class="contenido__form--grupo" id="passcontr">
        //             <h2>Repita su contraseña</h2>
        //             <input class="contenido__form--grupo_ipt" type="password" id="pass2">
        //             <div class="contenido__form--grupo_error" id="passcontrvacio">Debe introducir nuevamente su contraseña.</div>
        //             <div class="contenido__form--grupo_error" id="passcontrnocoin">Las contraseñas no coinciden.</div>
        //         </div>
        //         <div class="contenido__form--grupo btn" id="btn-enviar">
        //             <button class="contenido__form--grupo_btn" type="submit" id="form__btn--enviar">REGISTRARSE</button>
        //         </div>
        //     </form>`,
        //     footer: '<p class="contenido__confirm--pie">International Fasteners S.A. garantiza la seguridad y confidencialidad de sus datos conforme a la Ley 25.326 de Protección de Datos Personales.</p>',
        //     width: '90svw',
        //     allowOutsideClick: false,
        //     allowEscapeKey: false,
        //     customClass: {
        //         confirmButton: 'contenido__confirm--btn_ok',
        //         denyButton: 'contenido__confirm--btn_mdf'
        //     },
        //     buttonsStyling: false,
        //     showDenyButton: true,
        //     //showCancelButton: true,
        //     confirmButtonText: 'Confirmar',
        //     denyButtonText: `Modificar`,
        // }).then((result) => {

        //     if (result.isConfirmed) {

        //         const clienteObj = {
        //             id: id,
        //             nombre: nombre,
        //             apellido: apellido,
        //             correo: correo,
        //             movil: movil,
        //             pass: passDos,
        //             sesionactiva: true
        //         }

        //         const direObj = {
        //             id: Date.now(),
        //             idc: id,
        //             calle: calle,
        //             dpto: dpto,
        //             comentario: '',
        //             seleccionada: true
        //         }

        //         const perfilObj = {
        //             idc: id,
        //             apodo: nombre,
        //             fechanac: '',
        //             sexo: 'Prefiero no decirlo',
        //             foto: false
        //         }

        //         // const buscaObj = {
        //         //     id: Date.now(),
        //         //     idc: id,
        //         //     claves: '',
        //         //     categ: '',
        //         //     fecha: ''
        //         // } 80603635885

        //         datosCliente.push(clienteObj)
        //         direCliente.push(direObj)
        //         perfilCliente.push(perfilObj)
        //         //console.log(datosCliente)
        //         localStorage.setItem('Cliente', JSON.stringify(datosCliente))
        //         localStorage.setItem('Direcciones', JSON.stringify(direCliente))
        //         localStorage.setItem('Perfil', JSON.stringify(perfilCliente))
        //         localStorage.setItem('Busquedas', JSON.stringify(busquedasArtificiales))

        //         Swal.fire({
        //             title: '<h1 class="contenido__confirm--h1">¡Se ha registrado con éxito!</h1>',
        //             icon: 'success',
        //             showConfirmButton: false,
        //             timer: 3500,
        //             allowOutsideClick: false,
        //             allowEscapeKey: false,
        //             allowEnterKey: false
        //         })

        //         setTimeout(estaRegistrado, 3000)

        //         //estaRegistrado()

        //     } else if (result.isDenied) {

        //         return

        //     }
        // })
    }

    if(tipo === 'catalogo') {
        descargarCatalogo()
    }

}