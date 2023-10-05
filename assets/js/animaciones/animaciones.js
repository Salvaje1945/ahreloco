import $ from '../funciones_globales/elementos_por_id.js'

export default function animaciones(elAncho, elElemento) {

    const anchoPantalla = elAncho

    let elementoTipo = elElemento

    const alturaCabecera = $('#cabecera').offsetHeight

    const alturaCarrousel = $('#contenido_carousel-slider').offsetHeight

    const alturaNosotrosH2 = $('#contenido-nosotros-h2').offsetHeight

    const alturaNosotros = $('#nosotros').offsetHeight

    const alturaClientesH2 = $('#contenido-clientes-h2').offsetHeight

    const alturaClientes = $('#clientes').offsetHeight

    const alturaPostventa = $('#postventa').offsetHeight

    const alturaServicioTec = $('#serviciotecnico').offsetHeight

    const alturaEntrega = $('#entrega').offsetHeight

    function animacionIconos() {

        // const alturaIconoIndustrial = alturaCabecera + alturaCarrousel + alturaNosotros + (alturaClientes /4)

        const alturaIconoIndustrial = alturaCabecera + alturaCarrousel + alturaNosotros + alturaClientesH2

        const alturaIconoPostventa = alturaCabecera + alturaCarrousel + alturaNosotros + (alturaClientes /2)

        const alturaIconoTecnico = alturaCabecera + alturaCarrousel + alturaNosotros + (alturaClientes /2) + (alturaClientes /4)

        const alturaIconoEntrega = alturaCabecera + alturaCarrousel + alturaNosotros + alturaClientes

        if(anchoPantalla < 768) {

            window.addEventListener('scroll', function () {
    
                let scrollActual = window.pageYOffset || document.documentElement.scrollTop
    
                if (scrollActual >= alturaIconoIndustrial) {
    
                    $('#industrial').classList.add('animacion')
    
                }

                if (scrollActual >= alturaIconoPostventa) {
    
                    $('#postventa').classList.add('animacion')
    
                }

                if (scrollActual >= alturaIconoTecnico) {
    
                    $('#serviciotecnico').classList.add('animacion')
    
                }

                if (scrollActual >= alturaIconoEntrega) {
    
                    $('#entrega').classList.add('animacion')
    
                }

            })

        }

    }

    function animacionCualidades() {

        // const alturaIconoIndustrial = alturaCabecera + alturaCarrousel + alturaNosotros + (alturaClientes /4)

        const alturaMaterial = alturaCabecera + alturaCarrousel + alturaNosotros + alturaClientes + alturaPostventa

        const alturaTerminacion = alturaCabecera + alturaCarrousel + alturaNosotros + alturaClientes + alturaPostventa + alturaServicioTec

        const alturaResultado = alturaCabecera + alturaCarrousel + alturaNosotros + alturaClientes + alturaPostventa + alturaServicioTec + alturaEntrega

        const alturaIconoEntrega = alturaCabecera + alturaCarrousel + alturaNosotros + alturaClientes

        if(anchoPantalla < 768) {

            window.addEventListener('scroll', function () {
    
                let scrollActual = window.pageYOffset || document.documentElement.scrollTop
    
                if (scrollActual >= alturaMaterial) {
    
                    $('#material').classList.add('animacion')
    
                }

                if (scrollActual >= alturaTerminacion) {
    
                    $('#terminacion').classList.add('animacion')
    
                }

                if (scrollActual >= alturaResultado) {
    
                    $('#resultado').classList.add('animacion')
    
                }

            })

        }

    }

    function animacionesEncabezados() {

        function fadeIn() {

            const alturaParaNosotros = alturaCabecera + alturaCarrousel / 40
    
            const alturaParaClientes = alturaCabecera + alturaCarrousel + (alturaNosotrosH2 / 2)
    
            window.addEventListener('scroll', function () {
    
                let scrollActual = window.pageYOffset || document.documentElement.scrollTop
    
                if (scrollActual >= alturaParaNosotros) {
    
                    $('#contenido-nosotros-h2').classList.add('animacion')
    
                }
    
                if (scrollActual >= alturaParaClientes) {
    
                    $('#contenido-clientes-h2').classList.add('animacion')
    
                }
            })
    
        }
    
        fadeIn()

    }

    if (elementoTipo === 'encabezados') {
        animacionesEncabezados()
    }

    if (elementoTipo === 'iconos') {
        animacionIconos()
    }

    if (elementoTipo === 'cualidades') {
        animacionCualidades()
    }

}

// export default function animacionesEncabezados() {

//     const alturaCabecera = $('#cabecera').offsetHeight

//     const alturaCarrousel = $('#contenido_carousel-slider').offsetHeight

//     const alturaNosotros = $('#contenido-nosotros-h2').offsetHeight

//     function fadeIn() {

//         const alturaParaNosotros = alturaCabecera + alturaCarrousel / 40

//         const alturaParaClientes = alturaCabecera + alturaCarrousel + (alturaNosotros / 2)

//         window.addEventListener('scroll', function () {

//             let scrollActual = window.pageYOffset || document.documentElement.scrollTop

//             if (scrollActual >= alturaParaNosotros) {

//                 $('#contenido-nosotros-h2').classList.add('animacion')

//             }

//             if (scrollActual >= alturaParaClientes) {

//                 $('#contenido-clientes-h2').classList.add('animacion')

//             }
//         })

//     }

//     fadeIn()

//     // const sumaAlturaCabezaMasCarrusel = alturaCabecera + alturaCarrousel

//     // window.addEventListener('scroll', function () {

//     //     let scrollActual = window.pageYOffset || document.documentElement.scrollTop

//     //     console.log('**********')
//     //     console.log('La sección:')
//     //     console.log(seccion)
//     //     console.log('**********')

//     //     if (scrollActual >= sumaAlturaCabezaMasCarrusel) {

//     //         $('#contenido-clientes-h2').classList.add('animacion')

//     //     }

//     // })

// }

// export default function animacionNosotros(elAncho) {

//     const alturaCabecera = $('#cabecera').offsetHeight

//     const alturaCarrousel = $('#contenido_carousel-slider').offsetHeight

//     const sumaAlturaCabezaMasCarrusel = alturaCabecera + alturaCarrousel

//     const anchoEjecusion = elAncho

//     // *** CONSOLA ***

//     console.log('*** ALTO DE LA CABECERA ***')

//     console.log(alturaCabecera)

//     console.log('******')

//     console.log('*** ALTO DEL CAROUSEL ***')

//     console.log(alturaCarrousel)

//     console.log('******')

//     console.log('*** ALTO DE PANTALLA ***')

//     console.log(sumaAlturaCabezaMasCarrusel)

//     console.log('******')

//     console.log('*** ANCHO DE PANTALLA ***')

//     console.log(anchoEjecusion)

//     function ejecutarAnimacion() {

//         window.addEventListener('scroll', function () {

//             if (anchoEjecusion < 768) {

//                 let scrollActual = window.pageYOffset || document.documentElement.scrollTop

//                 //console.log('*** ')

//                 let porcentajeScroll = (scrollActual * 100) / sumaAlturaCabezaMasCarrusel

//                 let posicionElemento = porcentajeScroll - 100

//                 $('#nuestra-empresa').style.left = posicionElemento + "%"

//                 //$('#nosotros-contenido-texto').style.right = posicionElemento + "%"

//                 if (scrollActual >= sumaAlturaCabezaMasCarrusel) {
//                     $('#nuestra-empresa').style.left = 'auto'
//                     // $('#nosotros-contenido-texto').style.right = 'auto'
//                     // $('#nosotros-cabecera-box').classList.add('fijo')
//                 }

//                 // if (scrollActual <= sumaAlturaCabezaMasCarrusel) {
//                 //     $('#nosotros-cabecera-box').classList.remove('fijo')
//                 // }

//             } else {

//                 console.log('acá es mayor a 768, no debería funcar')

//                 // $('#nosotros-cabecera-titulo').style.left = "-100%"

//                 // $('#nosotros-contenido-texto').style.right = "-100%"

//                 //return
//             }
    
//         })
//     }

//     ejecutarAnimacion()

//     // if(anchoEjecusion < 768){
//     //     ejecutarAnimacion()
//     // } else {

//     //     console.log('acá es mayor a 768, no debería funcar')

//     //     $('#nosotros-cabecera-titulo').style.left = "-100%"
    
//     //     $('#nosotros-contenido-texto').style.right = "-100%"

//     //     return
//     // }

// }