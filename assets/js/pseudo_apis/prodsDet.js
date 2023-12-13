import productos from './productos.js'
import $ from '../funciones_globales/elementos_por_id.js'
import mostrarImg from '../galeriaImg.js'

export default function detallesProducto(prod) {

    const proDuct = prod

    const losProductos = productos()

    // const direParaEditar = diresDelCliente.filter(direcciones => direcciones.id === laDireccion)

    //             console.log(direParaEditar)
    //             //console.log()

    //             const idDireccion = direParaEditar[0].id
    //             const calleOriginal = direParaEditar[0].calle
    //             const dptoOriginal = direParaEditar[0].dpto
    //             const comentOriginal = direParaEditar[0].comentario




    // let elProd

    const elProducto = losProductos.filter(item => item.url === proDuct)

    console.log(elProducto)

    const breadCrumbs = `<nav>
                            <ul>
                                <li>
                                    <a href="index.html">Inicio</a>
                                </li>
                                <li>
                                    <a href="${elProducto[0].categ}.html">${elProducto[0].categ}</a>
                                </li>
                                <li>
                                    <a href="${elProducto[0].subcateg}.html">${elProducto[0].subcateg}</a>
                                </li>
                                <li>
                                    <p>${elProducto[0].nombre}</p>
                                </li>
                            </ul>
                        </nav>`

    const laGaleria = `<div class="prod__gal--img_box"><img src="${elProducto[0].img1}" alt="${elProducto[0].alt}" /></div>
    <div class="prod__gal--img_box"><img src="${elProducto[0].img2}" alt="${elProducto[0].alt}" /></div>
    <div class="prod__gal--img_box"><img src="${elProducto[0].img3}" alt="${elProducto[0].alt}" /></div>`

    $('#prod-nombre').textContent = elProducto[0].nombre

    $('#prod-desc').textContent = elProducto[0].desc

    $('#prod-tbl').innerHTML = elProducto[0].tbl

    $('#prod-gal').innerHTML = laGaleria

    $('#contenido__breadcrumbs').innerHTML = breadCrumbs

    mostrarImg()

    // function prodsFilter(losProductos) {
    //     const filtrados = losProductos.filter(subCategoria => subCategoria.url === proDuct)
    //     const ordenados = filtrados.sort((a, b) => a.id - b.id)
    //     return ordenados
    // }

    // const listaDeProds = prodsFilter(losProductos)

    // for (const prod of listaDeProds) {
    //     elProd = document.createElement('div')
    //     elProd.id = `${prod.subcateg}_${prod.nombre}`
    //     elProd.className = 'secciones__elementos--box'
    //     elProd.innerHTML = `<h3><a href="producto.html?prod=${prod.url}">${prod.nombre}</a></h3>
    //                         <div>
    //                             <div>
    //                                 <a href="producto.html?prod=${prod.url}"><img src="${prod.thumb}" alt="${prod.alt}" /></a> 
    //                             </div>
    //                         </div>`
    //     $('#lista-productos').appendChild(elProd)
    // }


}