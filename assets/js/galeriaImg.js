import $ from './funciones_globales/elementos_por_id.js'

export default function mostrarImg() {

    const btnCierra = $('#btn-cierra')

    const btnRetro = $('#btn-retro')

    const btnAvz = $('#btn-avz')

    const imagenesGal = document.querySelectorAll('#prod-gal div img')

    const lightBox = $('#prod-gal-cont')

    const imgAct = $('#img-act')

    let indiceImg = 0

    const abreLightBox = (evt) => {
        
        lightBox.classList.remove('prod-gal-cont_no')
        lightBox.classList.add('prod-gal-cont_si')

        imgAct.src = evt.target.src

        indiceImg = Array.from(imagenesGal).indexOf(evt.target)

    }

    imagenesGal.forEach((imagen) => {
        imagen.addEventListener('click', abreLightBox)
    })

    btnCierra.addEventListener('click', ()=> {
        lightBox.classList.remove('prod-gal-cont_si')
        lightBox.classList.add('prod-gal-cont_no')
    })

    const adelantar = ()=> {
        if(indiceImg === imagenesGal.length -1) {
            indiceImg = -1
        }


        imgAct.src = imagenesGal[indiceImg + 1].src
        indiceImg++
    }

    btnAvz.addEventListener('click', adelantar)

    const retroceder = ()=> {

        if(indiceImg === 0) {
            indiceImg = imagenesGal.length
        }

        imgAct.src = imagenesGal[indiceImg -1].src
        indiceImg--

    }

    btnRetro.addEventListener('click', retroceder)



}