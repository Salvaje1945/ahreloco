import productos from './productos.js'
import $ from '../funciones_globales/elementos_por_id.js'

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

    $('#prod-nombre').textContent = elProducto[0].nombre

    $('#prod-desc').textContent = elProducto[0].desc

    $('#prod-tbl').innerHTML = elProducto[0].tbl

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