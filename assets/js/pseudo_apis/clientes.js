export default function clientes() {

    const listaClientes = [
        {
            id: 1,
            nom: 'Expoyer',
            web: 'https://www.expoyerweb.com.ar/',
            logo: 'assets/img/clientes/clientes_expoyer_logo_01.jpg'
        },
        {
            id: 2,
            nom: 'Fabril Maderera S.A.',
            web: 'https://fabrilmadererasa.com.ar/',
            logo: 'assets/img/clientes/clientes_fabril_logo_01.jpg'
        },
        {
            id: 3,
            nom: 'Kanji Tech',
            web: 'https://www.kanjitech.com/',
            logo: 'assets/img/clientes/clientes_kanji_logo_01.jpg'
        },
        {
            id: 4,
            nom: 'Diseños y Aberturas Moras S.A.',
            web: 'https://www.moraspuertas.com/',
            logo: 'assets/img/clientes/clientes_moras_logo_01.jpg'
        },
        {
            id: 5,
            nom: 'Novakasa Viviendas',
            web: 'https://novakasaviviendas.com.ar/',
            logo: 'assets/img/clientes/clientes_novakasa_logo_01.jpg'
        },
        {
            id: 6,
            nom: 'OBLAK Hnos.',
            web: 'https://www.oblak.com.ar/',
            logo: 'assets/img/clientes/clientes_oblak_logo_01.jpg'
        },
        {
            id: 7,
            nom: 'ORBIS',
            web: 'https://www.orbis.com.ar/',
            logo: 'assets/img/clientes/clientes_orbis_logo_01.jpg'
        },
        {
            id: 8,
            nom: 'Pinceles El Tucán',
            web: 'https://www.pinceleseltucan.com.ar/',
            logo: 'assets/img/clientes/clientes_pincelestucan_logo_01.jpg'
        },
        {
            id: 9,
            nom: 'Rheem S.A.',
            web: 'https://www.rheem.com.ar/',
            logo: 'assets/img/clientes/clientes_rheem_logo_01.jpg'
        },
        {
            id: 10,
            nom: 'Simet Fábrica & Diseño',
            web: 'https://simet.com.ar/',
            logo: 'assets/img/clientes/clientes_simet_logo_01.jpg'
        },
        {
            id: 11,
            nom: 'Viamo',
            web: 'https://www.viamo.com/',
            logo: 'assets/img/clientes/clientes_viamo_logo_01.jpg'
        },
        {
            id: 12,
            nom: 'Canal Directo Soluciones de Impresión S.A.',
            web: 'https://www.canaldirecto.com.ar/',
            logo: 'assets/img/clientes/clientes_canaldirecto_logo_01.jpg'
        }
        
        // ,
        // {
        //     id: 13,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 14,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 15,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 16,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 17,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 18,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 19,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 20,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 21,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 22,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 23,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 24,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 25,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 26,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 27,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 28,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 29,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 30,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 31,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 32,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 33,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 34,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 35,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 36,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 37,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 38,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 39,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 40,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 41,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 42,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 43,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 44,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 45,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 46,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 47,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 48,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 49,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 50,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 51,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 52,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 53,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 54,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 55,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 56,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 57,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 58,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 59,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 60,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // },
        // {
        //     id: 61,
        //     nom: '',
        //     web: '',
        //     logo: ''
        // }

    ]

    return listaClientes
}