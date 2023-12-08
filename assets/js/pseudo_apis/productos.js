export default function productos() {

    const listaProductos = [
        {
            id: 1,
            categ: 'Insumos',
            subcateg: 'Grampas',
            nombre: 'Grampas V (71)',
            desc: 'Las grampas V (Insumo para herramienta neumática, código internacional: 71), por el diámetro de su alambre y su ancho tan específico, son utilizadas en trabajos de fijación donde se busca resaltar el resultado estético. Así, se las puede encontrar en la fabricación de monturas, tapicería de finos amoblamientos, y trabajos de carpintería en general.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Ancho grampa</th>
                    <th>Longitud grampa</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>V</td>
                <td>9,0</td>
                <td>08, 14</td>
                <td>0,60 X 0,75</td>
            </tr>
            <tr>
                <td><a href="grampas.html#grampas-a">A</a></td>
                <td>12,8</td>
                <td>04, 06, 08, 10, 12, 14, 16, 22, 25</td>
                <td>0,65 X 1,00</td>
            </tr>
            <tr>
                <td><a href="grampas.html#grampas-ad">AD</a></td>
                <td>12,1</td>
                <td>04, 06, 08, 10, 12, 14, 16</td>
                <td>0,55 X 0,90</td>
            </tr>
            <tr>
                <td><a href="grampas.html#grampas-o">O</a></td>
                <td>4,5</td>
                <td>06, 10, 14, 18, 22, 25</td>
                <td>0,65 X 0,95</td>
            </tr>
            </table>`,
            url: 'grampas-v',
            alt: 'Grampas tipo V.',
            thumb: 'assets/img/insumos/grampas-v.jpg',
            img1: 'assets/img/insumos/grampas-v_img1.jpg',
            img2: 'assets/img/insumos/grampas-v_img2.jpg',
            img3: 'assets/img/insumos/grampas-v_img3.jpg'
        },
        {
            id: 2,
            categ: 'Insumos',
            subcateg: 'Grampas',
            nombre: 'Grampas A (80)',
            desc: 'Nuestras grampas A (Insumo para herramientas neumáticas. Código internacional: 80) son empleadas en el tapizado de sillas, sillones, butacas de automotores y vehículos náuticos, colocación de punteras plásticas y forros de sommiers, respaldos de camas, fabricación de aberturas y carpintería. También son empleadas para la colocación denylon protector en pallets, a modo de aislante.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Ancho grampa</th>
                    <th>Longitud grampa</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>A</td>
                <td>12,8</td>
                <td>04, 06, 08, 10, 12, 14, 16, 22, 25</td>
                <td>0,65 X 1,00</td>
            </tr>
            <tr>
                <td><a href="grampas.html#grampas-o">O</a></td>
                <td>4,5</td>
                <td>06, 10, 14, 18, 22, 25</td>
                <td>0,65 X 0,95</td>
            </tr>
            <tr>
                <td><a href="grampas.html#grampas-ad">AD</a></td>
                <td>12,1</td>
                <td>04, 06, 08, 10, 12, 14, 16</td>
                <td>0,55 X 0,90</td>
            </tr>
            <tr>
                <td><a href="grampas.html#grampas-v">V</a></td>
                <td>9,0</td>
                <td>08, 14</td>
                <td>0,60 X 0,75</td>
            </tr>
            </table>`,
            url: 'grampas-a',
            alt: 'Grampas tipo A.',
            thumb: 'assets/img/insumos/grampas-a.jpg',
            img1: 'assets/img/insumos/grampas-a_img1.jpg',
            img2: 'assets/img/insumos/grampas-a_img2.jpg',
            img3: 'assets/img/insumos/grampas-a_img3.jpg'
        },
        {
            id: 3,
            categ: 'Insumos',
            subcateg: 'Grampas',
            nombre: 'Grampas AD (84)',
            desc: 'Las grampas AD (Insumo para herramientas neumáticas. Código internacional: 84) pueden ser encontradas en un vasto universo de aplicaciones. En tapicería, pueden ser empleadas en la fabricación de mobiliario, en la industria automotriz, y en el sector náutico. También son elegidas para el armado de muebles de melamina, y para la colocación de Tyvek y Ruberoid durante la construcción en viviendas en madera.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Ancho grampa</th>
                    <th>Longitud grampa</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>AD</td>
                <td>12,1</td>
                <td>04, 06, 08, 10, 12, 14, 16</td>
                <td>0,55 X 0,90</td>
            </tr>
            <tr>
                <td><a href="grampas.html#grampas-a">A</a></td>
                <td>12,8</td>
                <td>04, 06, 08, 10, 12, 14, 16, 22, 25</td>
                <td>0,65 X 1,00</td>
            </tr>
            <tr>
                <td><a href="grampas.html#grampas-v">V</a></td>
                <td>9,0</td>
                <td>08, 14</td>
                <td>0,60 X 0,75</td>
            </tr>
            <tr>
                <td><a href="grampas.html#grampas-o">O</a></td>
                <td>4,5</td>
                <td>06, 10, 14, 18, 22, 25</td>
                <td>0,65 X 0,95</td>
            </tr>
            </table>`,
            url: 'grampas-ad',
            alt: 'Grampas tipo AD.',
            thumb: 'assets/img/insumos/grampas-ad.jpg',
            img1: 'assets/img/insumos/grampas-ad_img1.jpg',
            img2: 'assets/img/insumos/grampas-ad_img2.jpg',
            img3: 'assets/img/insumos/grampas-ad_img3.jpg'
        },
        {
            id: 4,
            categ: 'Insumos',
            subcateg: 'Grampas',
            nombre: 'Grampas O (97)',
            desc: 'Las grampas O (insumo para herramienta neumática, código internacional 93 o 97) son utilizadas en rubros tan diferentes como la industria del calzado (para la sujeción temporaria de la plantilla durante el proceso de armado), la fabricación de pinceles, monturas para caballos, el ensamblado de muebles de madera maciza y melamina, escaleras y caballetes.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Ancho grampa</th>
                    <th>Longitud grampa</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>O</td>
                <td>4,5</td>
                <td>06, 10, 14, 18, 22, 25</td>
                <td>0,65 X 0,95</td>
            </tr>
            <tr>
                <td><a href="grampas.html#grampas-ad">AD</a></td>
                <td>12,1</td>
                <td>04, 06, 08, 10, 12, 14, 16</td>
                <td>0,55 X 0,90</td>
            </tr>
            <tr>
                <td><a href="grampas.html#grampas-a">A</a></td>
                <td>12,8</td>
                <td>04, 06, 08, 10, 12, 14, 16, 22, 25</td>
                <td>0,65 X 1,00</td>
            </tr>
            <tr>
                <td><a href="grampas.html#grampas-v">V</a></td>
                <td>9,0</td>
                <td>08, 14</td>
                <td>0,60 X 0,75</td>
            </tr>
            </table>`,
            url: 'grampas-o',
            alt: 'Grampas tipo O.',
            thumb: 'assets/img/insumos/grampas-o.jpg',
            img1: 'assets/img/insumos/grampas-o_img1.jpg',
            img2: 'assets/img/insumos/grampas-o_img2.jpg',
            img3: 'assets/img/insumos/grampas-o_img3.jpg'
        },
        {
            id: 5,
            categ: 'Insumos',
            subcateg: 'Grampas',
            nombre: 'Grampas E (90)',
            desc: 'La carpintería es sin dudas el principal ramo de actividad donde las Grampas E (insumo para herramienta neumática, Código internacional: 90) se destacan. Se las puede encontrar en el proceso de manufactura de sillas, mesas, roperos, bajomesadas, bases de sommiers, heladeras comerciales, cartelería comercial, embalajes livianos de madera, y el armado del interior de puertas placa.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Ancho grampa</th>
                    <th>Longitud grampa</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>E</td>
                <td>5,7</td>
                <td>16, 20, 25, 30, 35, 40, 45, 50</td>
                <td>1,00 X 1,25</td>
            </tr>
            <tr>
                <td><a href="grampas.html#grampas-h">H</a></td>
                <td>8,6</td>
                <td>21, 25, 30, 35, 40</td>
                <td>1,00 X 1,25</td>
            </tr>
            <tr>
                <td><a href="grampas.html#grampas-l">L</a></td>
                <td>10,7</td>
                <td>16, 19, 25, 30, 35, 40, 50</td>
                <td>1,40 X 1,60</td>
            </tr>
            <tr>
                <td><a href="grampas.html#grampas-b">B</a></td>
                <td>35</td>
                <td>16, 19, 22</td>
                <td>1,40 X 1,60</td>
            </tr>
            </table>`,
            url: 'grampas-e',
            alt: 'Grampas tipo E.',
            thumb: 'assets/img/insumos/grampas-e.jpg',
            img1: 'assets/img/insumos/grampas-e_img1.jpg',
            img2: 'assets/img/insumos/grampas-e_img2.jpg',
            img3: 'assets/img/insumos/grampas-e_img3.jpg'
        },
        {
            id: 6,
            categ: 'Insumos',
            subcateg: 'Grampas',
            nombre: 'Grampas H (92)',
            desc: 'La Grampa tipo H (insumo para herramienta neumática, Código internacional: 92) es una grampa sumamente específica, pero a la vez con una importante demanda en el mercado. La grampa H es de suma utilidad cuando nos referimos al proceso de fabricación en serie de aberturas de madera de alta calidad, sillas, roperos, camas, mesas y sillones, por contar con una ancha corona que eleva el nivel de la fijación.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Ancho grampa</th>
                    <th>Longitud grampa</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>H</td>
                <td>8,6</td>
                <td>21, 25, 30, 35, 40</td>
                <td>1,00 X 1,25</td>
            </tr>
            <tr>
                <td><a href="grampas.html#grampas-e">E</a></td>
                <td>5,7</td>
                <td>16, 20, 25, 30, 35, 40, 45, 50</td>
                <td>1,00 X 1,25</td>
            </tr>
            <tr>
                <td><a href="grampas.html#grampas-l">L</a></td>
                <td>10,7</td>
                <td>16, 19, 25, 30, 35, 40, 50</td>
                <td>1,40 X 1,60</td>
            </tr>
            <tr>
                <td><a href="grampas.html#grampas-b">B</a></td>
                <td>35</td>
                <td>16, 19, 22</td>
                <td>1,40 X 1,60</td>
            </tr>
            </table>`,
            url: 'grampas-h',
            alt: 'Grampas tipo H.',
            thumb: 'assets/img/insumos/grampas-h.jpg',
            img1: 'assets/img/insumos/grampas-h_img1.jpg',
            img2: 'assets/img/insumos/grampas-h_img2.jpg',
            img3: 'assets/img/insumos/grampas-h_img3.jpg'
        },
        {
            id: 7,
            categ: 'Insumos',
            subcateg: 'Grampas',
            nombre: 'Grampas L (14)',
            desc: 'Las Grampas tipo L (insumo para herramienta neumática, Código internacional: 14 o 100) son las más versátiles de nuestro catálogo. El hecho de ofrecer un rango tan amplio de longitudes -que van desde los 19 a los 65 mm de largo- las convierte en una solución sumamente durable para la fabricación de todo tipo de muebles, estructuras de sillones, heladeras comerciales, carpintería en madera plástica, escaleras de pintor, y embalajes de madera. También son elegidas para efectuar el emplacado con OSB en la construcción en madera, y la fijación de fibrocemento a modo de siding.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Ancho grampa</th>
                    <th>Longitud grampa</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>L</td>
                <td>10,7</td>
                <td>16, 19, 25, 30, 35, 40, 50</td>
                <td>1,40 X 1,60</td>
            </tr>
            <tr>
                <td><a href="grampas.html#grampas-b">B</a></td>
                <td>35</td>
                <td>16, 19, 22</td>
                <td>1,40 X 1,60</td>
            </tr>
            <tr>
                <td><a href="grampas.html#grampas-e">E</a></td>
                <td>5,7</td>
                <td>16, 20, 25, 30, 35, 40, 45, 50</td>
                <td>1,00 X 1,25</td>
            </tr>
            <tr>
                <td><a href="grampas.html#grampas-h">H</a></td>
                <td>8,6</td>
                <td>21, 25, 30, 35, 40</td>
                <td>1,00 X 1,25</td>
            </tr>
            </table>`,
            url: 'grampas-l',
            alt: 'Grampas tipo L.',
            thumb: 'assets/img/insumos/grampas-l.jpg',
            img1: 'assets/img/insumos/grampas-l_img1.jpg',
            img2: 'assets/img/insumos/grampas-l_img2.jpg',
            img3: 'assets/img/insumos/grampas-l_img3.jpg'
        },
        {
            id: 8,
            categ: 'Insumos',
            subcateg: 'Grampas',
            nombre: 'Grampas B (35)',
            desc: '¿Cuál es la grampa destinada al proceso de embalaje por excelencia? Nuestro modelo de Grampa tipo B (insumo para herramienta neumática, Código internacional: 35), cobreado y en distintas longitudes que le permiten cerrar todo tipo de cajas de cartón corrugado: sea para embalaje de televisores, electrodomésticos, sillas, vanitories, pequeños muebles en madera y melamina, válvulas esféricas, así como repuestos para automotores.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Ancho grampa</th>
                    <th>Longitud grampa</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>B</td>
                <td>35</td>
                <td>16, 19, 22</td>
                <td>1,40 X 1,60</td>
            </tr>
            <tr>
                <td><a href="grampas.html#grampas-e">E</a></td>
                <td>5,7</td>
                <td>16, 20, 25, 30, 35, 40, 45, 50</td>
                <td>1,00 X 1,25</td>
            </tr>
            <tr>
                <td><a href="grampas.html#grampas-h">H</a></td>
                <td>8,6</td>
                <td>21, 25, 30, 35, 40</td>
                <td>1,00 X 1,25</td>
            </tr>
            <tr>
                <td><a href="grampas.html#grampas-l">L</a></td>
                <td>10,7</td>
                <td>16, 19, 25, 30, 35, 40, 50</td>
                <td>1,40 X 1,60</td>
            </tr>
            </table>`,
            url: 'grampas-b',
            alt: 'Grampas tipo B.',
            thumb: 'assets/img/insumos/grampas-b.jpg',
            img1: 'assets/img/insumos/grampas-b_img1.jpg',
            img2: 'assets/img/insumos/grampas-b_img2.jpg',
            img3: 'assets/img/insumos/grampas-b_img3.jpg'
        },

        // CLAVOS 

        {
            id: 9,
            categ: 'Insumos',
            subcateg: 'Clavos',
            nombre: 'Clavos J',
            desc: 'Los Clavos tipo J (insumo para herramienta neumática, Código internacional: Tipin) o “clavillos J cabeza perdida” son un insumo que tiene múltiples utilidades: se utilizan para la fabricación de estructuras en melamina (estanterías, alacenas, bajomesadas, vanitories), la colocación de molduras en contravidrios, artesanías y muebles en MDF, colocación de machimbre en bajotechos, puertas placa, exhibidores, cartelería comercial y labores de carpintería en general.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Tipo</th>
                    <th>Cabeza clavo</th>
                    <th>Longitud clavo</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>J</td>
                <td>S/ cabeza</td>
                <td>16, 19, 25, 30, 35, 40, 45, 50</td>
                <td>1 x 1,25</td>
            </tr>
            <tr>
                <td><a href="clavos.html#clavos-n">N</a></td>
                <td>1,57</td>
                <td>19, 25, 30, 35, 40, 45, 50, 56, 63</td>
                <td>1,40 X 1,60</td>
            </tr>
            <tr>
                <td><a href="clavos.html#clavos-t">T</a></td>
                <td>7X2</td>
                <td>32, 38, 50, 60, 64</td>
                <td>2,2</td>
            </tr>
            <tr>
                <td><a href="clavos.html#clavos-rk">RK</a></td>
                <td>7</td>
                <td>65, 70, 90, 100</td>
                <td>3,1 A 3,4</td>
            </tr>
            </table>`,
            url: 'clavos-j',
            alt: 'Clavos tipo J.',
            thumb: 'assets/img/insumos/clavos-j.jpg',
            img1: 'assets/img/insumos/clavos-j_img1.jpg',
            img2: 'assets/img/insumos/clavos-j_img2.jpg',
            img3: 'assets/img/insumos/clavos-j_img3.jpg'
        },
        {
            id: 10,
            categ: 'Insumos',
            subcateg: 'Clavos',
            nombre: 'Clavos N',
            desc: 'La robustez del Clavo tipo N (insumo para herramienta neumática, Código internacional: Tip) lo hace más que apto para trabajos que involucren la instalación de pisos de maderas nobles (algarrobo, roble), la fabricación de ataúdes, aberturas de madera, muebles macizos y de estilo. Cuenta con un diámetro mayor que el clavo cabeza perdida, por lo que su resistencia al desgaste y tránsito es mucho más elevada.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Tipo</th>
                    <th>Cabeza clavo</th>
                    <th>Longitud clavo</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>N</td>
                <td>1,57</td>
                <td>19, 25, 30, 35, 40, 45, 50, 56, 63</td>
                <td>1,40 X 1,60</td>
            </tr>
            <tr>
                <td><a href="clavos.html#clavos-t">T</a></td>
                <td>7X2</td>
                <td>32, 38, 50, 60, 64</td>
                <td>2,2</td>
            </tr>
            <tr>
                <td><a href="clavos.html#clavos-rk">RK</a></td>
                <td>7</td>
                <td>65, 70, 90, 100</td>
                <td>3,1 A 3,4</td>
            </tr>
            <tr>
                <td><a href="clavos.html#clavos-j">J</a></td>
                <td>S/ cabeza</td>
                <td>16, 19, 25, 30, 35, 40, 45, 50</td>
                <td>1 x 1,25</td>
            </tr>
            </table>`,
            url: 'clavos-n',
            alt: 'Clavos tipo N.',
            thumb: 'assets/img/insumos/clavos-n.jpg',
            img1: 'assets/img/insumos/clavos-n_img1.jpg',
            img2: 'assets/img/insumos/clavos-n_img2.jpg',
            img3: 'assets/img/insumos/clavos-n_img3.jpg'
        },
        {
            id: 11,
            categ: 'Insumos',
            subcateg: 'Clavos',
            nombre: 'Clavos T',
            desc: 'Los Clavos tipo T (insumo para herramienta neumática) son un insumo sumamente específico, elegidos por expertos en el sector de la construcción tanto tradicional, como en madera. Son empleados para la colocación de zócalos de madera sobre concreto y ladrillos (tanto huecos como macizos), la construcción de cabañas, carpintería de maderas de elevada dureza, y para el anclaje de chapa sobre concreto y madera.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Tipo</th>
                    <th>Cabeza clavo</th>
                    <th>Longitud clavo</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>T</td>
                <td>7X2</td>
                <td>32, 38, 50, 60, 64</td>
                <td>2,2</td>
            </tr>
            <tr>
                <td><a href="clavos.html#clavos-rk">RK</a></td>
                <td>7</td>
                <td>65, 70, 90, 100</td>
                <td>3,1 A 3,4</td>
            </tr>
            <tr>
                <td><a href="clavos.html#clavos-j">J</a></td>
                <td>S/ cabeza</td>
                <td>16, 19, 25, 30, 35, 40, 45, 50</td>
                <td>1 x 1,25</td>
            </tr>
            <tr>
                <td><a href="clavos.html#clavos-n">N</a></td>
                <td>1,57</td>
                <td>19, 25, 30, 35, 40, 45, 50, 56, 63</td>
                <td>1,40 X 1,60</td>
            </tr>
            </table>`,
            url: 'clavos-t',
            alt: 'Clavos tipo T.',
            thumb: 'assets/img/insumos/clavos-t.jpg',
            img1: 'assets/img/insumos/clavos-t_img1.jpg',
            img2: 'assets/img/insumos/clavos-t_img2.jpg',
            img3: 'assets/img/insumos/clavos-t_img3.jpg'
        },
        {
            id: 12,
            categ: 'Insumos',
            subcateg: 'Clavos',
            nombre: 'Clavos en rollo CNR',
            desc: 'Los Clavos en rollo CNR o “roofing” (insumo para herramienta neumática) cuentan con distintas aplicaciones, todas ellas vinculadas al mundo de la construcción de viviendas: pueden emplearse para la colocación de zinguería, así como para la instalación de pizarra asfáltica en techos. Son utilizados también para la fijación de ángulos de chapa en embalajes de madera.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Tipo</th>
                    <th>Cabeza clavo</th>
                    <th>Longitud clavo</th>
                    <th>Diámetro clavo</th>
                </tr>
            </thead>
            <tr>
                <td>CNR</td>
                <td>10</td>
                <td>25, 32, 38, 45</td>
                <td>3,1</td>
            </tr>
            <tr>
                <td><a href="clavos.html#clavos-cn">CN</a></td>
                <td>5</td>
                <td>29, 40, 45, 50, 65, 80</td>
                <td>2,1 A 2,9</td>
            </tr>
            </table>`,
            url: 'clavos-cnr',
            alt: 'Clavos en rollo tipo CNR.',
            thumb: 'assets/img/insumos/clavos-cnr.jpg',
            img1: 'assets/img/insumos/clavos-cnr_img1.jpg',
            img2: 'assets/img/insumos/clavos-cnr_img2.jpg',
            img3: 'assets/img/insumos/clavos-cnr_img3.jpg'
        },
        {
            id: 13,
            categ: 'Insumos',
            subcateg: 'Clavos',
            nombre: 'Clavos en rollo CN',
            desc: 'Los Clavos CN en rollo (insumo para herramienta neumática), popularmente conocidos como “coil nailers” por su presentación en rollos electrosoldados, son el insumo que acompaña toda clavadora que se desempeñe en la fabricación de pallets y embalajes. En estos últimos años, también han sido incorporados al sistema de construcción en madera, o woodframing.e fibrocemento a modo de siding.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Tipo</th>
                    <th>Cabeza clavo</th>
                    <th>Longitud clavo</th>
                    <th>Diámetro clavo</th>
                </tr>
            </thead>
            <tr>
                <td>CN</td>
                <td>5</td>
                <td>29, 40, 45, 50, 65, 80</td>
                <td>2,1 A 2,9</td>
            </tr>
            <tr>
                <td><a href="clavos.html#clavos-cnr">CNR</a></td>
                <td>10</td>
                <td>25, 32, 38, 45</td>
                <td>3,1</td>
            </tr>
            </table>`,
            url: 'clavos-cn',
            alt: 'Clavos en rollo tipo CN.',
            thumb: 'assets/img/insumos/clavos-cn.jpg',
            img1: 'assets/img/insumos/clavos-cn_img1.jpg',
            img2: 'assets/img/insumos/clavos-cn_img2.jpg',
            img3: 'assets/img/insumos/clavos-cn_img3.jpg'
        },
        {
            id: 14,
            categ: 'Insumos',
            subcateg: 'Clavos',
            nombre: 'Clavos RK 21°',
            desc: 'Con el avance de la construcción en seco como alternativa eficiente y amigable con el medio ambiente, los Clavos RK 21° (insumo para herramienta neumática) se han convertido en el principal protagonista. Cuentan con un diámetro de 3,1 a 3,4, que los convierten en la opción indicada para tareas de emplacado, la fijación de bastidores y entramado, e instalación de tejados. También son usados para la confección de grandes embalajes en madera.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Tipo</th>
                    <th>Cabeza clavo</th>
                    <th>Longitud clavo</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>RK</td>
                <td>7</td>
                <td>65, 70, 90, 100</td>
                <td>3,1 A 3,4</td>
            </tr>
            <tr>
                <td><a href="clavos.html#clavos-j">J</a></td>
                <td>S/ cabeza</td>
                <td>16, 19, 25, 30, 35, 40, 45, 50</td>
                <td>1 x 1,25</td>
            </tr>
            <tr>
                <td><a href="clavos.html#clavos-n">N</a></td>
                <td>1,57</td>
                <td>19, 25, 30, 35, 40, 45, 50, 56, 63</td>
                <td>1,40 X 1,60</td>
            </tr>
            <tr>
                <td><a href="clavos.html#clavos-t">T</a></td>
                <td>7X2</td>
                <td>32, 38, 50, 60, 64</td>
                <td>2,2</td>
            </tr>
            </table>`,
            url: 'clavos-rk',
            alt: 'Clavos tipo RK 100.',
            thumb: 'assets/img/insumos/clavos-rk.jpg',
            img1: 'assets/img/insumos/clavos-rk_img1.jpg',
            img2: 'assets/img/insumos/clavos-rk_img2.jpg',
            img3: 'assets/img/insumos/clavos-rk_img3.jpg'
        },

        // LAMINILLAS

        {
            id: 15,
            categ: 'Insumos',
            subcateg: 'Laminillas',
            nombre: 'Laminillas Corrugadas WN (*CF)',
            desc: 'Las laminillas corrugadas WN (insumo para herramienta neumática, Código internacional: CF) son empleadas en la fabricación de muebles de algarrobo y otras maderas duras, ya que al penetrar la superficie, el su patrón genera un mayor agarre entre dos tablones puestos en paralelo. También son utilizadas en apicultura, para el clavado del ángulo del hombro en ataúdes, así como para la unión de placas para tableros en carrocerías de camiones y autobuses.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Longitud insumo</th>
                    <th>Características insumo</th>
                </tr>
            </thead>
            <tr>
                <td>10</td>
                <td>Ancho de 25mm</td>
            </tr>
            </table>`,
            url: 'laminillas-wn',
            alt: 'Laminillas Corrugadas WN.',
            thumb: 'assets/img/insumos/laminillas-wn.jpg',
            img1: 'assets/img/insumos/laminillas-wn_img1.jpg',
            img2: 'assets/img/insumos/laminillas-wn_img2.jpg',
            img3: 'assets/img/insumos/laminillas-wn_img3.jpg'
        },

        // ESPINAS

        {
            id: 16,
            categ: 'Insumos',
            subcateg: 'Espinas',
            nombre: 'Espinas AL',
            desc: 'Las espinas AL (insumo para herramienta neumática, Código internacional: Mini Pin) son la solución perfecta para todos aquellos clientes que buscan darle una estética delicada a sus creaciones. Se trata de un insumo sin cabeza, con un diámetro de apenas 0,6 mm, apto para ser empleado tanto en muebles de maderas finas, como en melamina. También se utiliza para la confección de cartelería comercial y exhibidores.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Tipo</th>
                    <th>Herramientas</th>
                    <th>Longitud insumo</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>AL</td>
                <td>Clavadora AL 20</td>
                <td>12, 15, 17, 20</td>
                <td>0,60</td>
            </tr>
            <tr>
                <td><a href="espinas.html#espinas-ga">GA</a></td>
                <td>Clavadora GA 30</td>
                <td>16, 19, 25, 30</td>
                <td>1,00 X 1,25</td>
            </tr>
            </table>`,
            url: 'espinas-al',
            alt: 'Espinas tipo AL.',
            thumb: 'assets/img/insumos/espinas-al.jpg',
            img1: 'assets/img/insumos/espinas-al_img1.jpg',
            img2: 'assets/img/insumos/espinas-al_img2.jpg',
            img3: 'assets/img/insumos/espinas-al_img3.jpg'
        },
        {
            id: 17,
            categ: 'Insumos',
            subcateg: 'Espinas',
            nombre: 'Espinas GA',
            desc: 'Las Espinas GA (insumo para herramienta neumática, Código internacional: I Pin) son un insumo elegido en la carpintería para dar finas terminaciones a distintos tipos de productos: muebles de estilo, sillas, aberturas de madera (para la fijación de molduras y contravidrios), vanitories y todo tipo de equipamiento fabricado en melamina.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Tipo</th>
                    <th>Herramientas</th>
                    <th>Longitud insumo</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>GA</td>
                <td>Clavadora GA 30</td>
                <td>16, 19, 25, 30</td>
                <td>1,00 X 1,25</td>
            </tr>
            <tr>
                <td><a href="espinas.html#espinas-al">AL</a></td>
                <td>Clavadora AL 20</td>
                <td>12, 15, 17, 20</td>
                <td>0,60</td>
            </tr>
            </table>`,
            url: 'espinas-ga',
            alt: 'Espinas tipo GA.',
            thumb: 'assets/img/insumos/espinas-ga.jpg',
            img1: 'assets/img/insumos/espinas-ga_img1.jpg',
            img2: 'assets/img/insumos/espinas-ga_img2.jpg',
            img3: 'assets/img/insumos/espinas-ga_img3.jpg'
        },

        // ENGRAMPADORAS

        {
            id: 18,
            categ: 'Herramientas',
            subcateg: 'Engrampadoras',
            nombre: 'Engrampadora V-16 (*71/16)',
            desc: 'La engrampadora neumática industrial modelo V 16 (Código internacional: 71/16) trabaja con grampas de 9,1 mm de ancho, razón por la cual es ideal para su uso en diferentes tareas relacionadas con la carpintería en madera, como la construcción de decorados o el ensamblado de muebles en maderas macizas, así como en la fabricación de monturas.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Ancho grampa</th>
                    <th>Longitud grampa</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>V 16</td>
                <td>9,1</td>
                <td>04 a 14</td>
                <td>0,50 X 0,70</td>
            </tr>
            <tr>
                <td><a href="engrampadoras.html#engrampadora-a16ln50">A 16 LN 50</a></td>
                <td>12,8</td>
                <td>04 a 16</td>
                <td>0,65 X 1,00</td>
            </tr>
            <tr>
                <td><a href="engrampadoras.html#engrampadora-a16">A 16</a></td>
                <td>12,8</td>
                <td>04 a 16</td>
                <td>0,65 X 1,00</td>
            </tr>
            </table>`,
            url: 'engrampadora-v16',
            alt: 'Engrampadora V-16.',
            thumb: 'assets/img/herramientas/engrampadora-v16.jpg',
            img1: 'assets/img/herramientas/engrampadora-v16_img1.jpg',
            img2: 'assets/img/herramientas/engrampadora-v16_img2.jpg',
            img3: 'assets/img/herramientas/engrampadora-v16_img3.jpg'
        },
        {
            id: 19,
            categ: 'Herramientas',
            subcateg: 'Engrampadoras',
            nombre: 'Engrampadora A-16 (*80/16)',
            desc: 'La engrampadora neumática industrial modelo A 16 (Código internacional: 80/16) es sin dudas la más demandada para tareas de tapicería de muebles, pero también automotriz y náutica. Se la utiliza para la fabricación de sillas, sillones, cualquier tipo de respaldo y fundas para asientos, e incluso para algunas labores de carpintería.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Ancho grampa</th>
                    <th>Longitud grampa</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>A 16</td>
                <td>12,8</td>
                <td>04 a 16</td>
                <td>0,65 X 1,00</td>
            </tr>
            <tr>
                <td><a href="engrampadoras.html#engrampadora-a16ln50">A 16 LN 50</a></td>
                <td>12,8</td>
                <td>04 a 16</td>
                <td>0,65 X 1,00</td>
            </tr>
            <tr>
                <td><a href="engrampadoras.html#engrampadora-v16">V 16</a></td>
                <td>9,1</td>
                <td>04 a 14</td>
                <td>0,50 X 0,70</td>
            </tr>
            </table>`,
            url: 'engrampadora-a16',
            alt: 'Engrampadora A-16.',
            thumb: 'assets/img/herramientas/engrampadora-a16.jpg',
            img1: 'assets/img/herramientas/engrampadora-a16_img1.jpg',
            img2: 'assets/img/herramientas/engrampadora-a16_img2.jpg',
            img3: 'assets/img/herramientas/engrampadora-a16_img3.jpg'
        },
        {
            id: 20,
            categ: 'Herramientas',
            subcateg: 'Engrampadoras',
            nombre: 'Engrampadora A-16 LN 50 (*80/16 LN 50)',
            desc: 'La engrampadora neumática industrial modelo A16 LN50 (Código internacional: 80/16 LN 50) es la única engrampadora que permite tapizar cómodamente en superficies profundas. Gracias a su boquilla extendida, logra realizar fijaciones con grampas en lugares que no quedan expuestos a la vista, mejorando el aspecto final del tapizado. Puede utilizar grampas tanto de la línea A (80) como AD (84).',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Ancho grampa</th>
                    <th>Longitud grampa</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>A 16 LN 50</td>
                <td>12,8</td>
                <td>04 a 16</td>
                <td>0,65 X 1,00</td>
            </tr>
            <tr>
                <td><a href="engrampadoras.html#engrampadora-v16">V 16</a></td>
                <td>9,1</td>
                <td>04 a 14</td>
                <td>0,50 X 0,70</td>
            </tr>
            <tr>
                <td><a href="engrampadoras.html#engrampadora-a16">A 16</a></td>
                <td>12,8</td>
                <td>04 a 16</td>
                <td>0,65 X 1,00</td>
            </tr>
            </table>`,
            url: 'engrampadora-a16ln50',
            alt: 'Engrampadora A-16 LN 50.',
            thumb: 'assets/img/herramientas/engrampadora-a-16-ln-50.jpg',
            img1: 'assets/img/herramientas/engrampadora-a-16-ln-50_img1.jpg',
            img2: 'assets/img/herramientas/engrampadora-a-16-ln-50_img2.jpg',
            img3: 'assets/img/herramientas/engrampadora-a-16-ln-50_img3.jpg'
        },
        {
            id: 21,
            categ: 'Herramientas',
            subcateg: 'Engrampadoras',
            nombre: 'Engrampadora A-25 (*80/25)',
            desc: 'La engrampadora neumática industrial modelo A 25 (Código internacional: 80/25) pertenece a una familia que le es familiar a quienes se han formado en el oficio de la carpintería: utiliza grampas de 12,8 mm de ancho, pero con la ventaja de que ofrece fijaciones de 04 a 25 mm de largo. Por eso es utilizada para la colocación de fondos de muebles, sobre todo en chapadur. También es utilizada para la fabricación de cajones de frutas y verduras.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Ancho grampa</th>
                    <th>Longitud grampa</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>A 25</td>
                <td>12,8</td>
                <td>04 a 25</td>
                <td>0,65 X 1,00</td>
            </tr>
            <tr>
                <td><a href="engrampadoras.html#engrampadora-o25">O 25</a></td>
                <td>4,5</td>
                <td>06 a 16</td>
                <td>0,65 X 0,95</td>
            </tr>
            <tr>
                <td><a href="engrampadoras.html#engrampadora-ad16">AD 16</a></td>
                <td>12,1</td>
                <td>04 a 16</td>
                <td>0,55 X 0,90</td>
            </tr>
            </table>`,
            url: 'engrampadora-a25',
            alt: 'Engrampadora A-25.',
            thumb: 'assets/img/herramientas/engrampadora-a25.jpg',
            img1: 'assets/img/herramientas/engrampadora-a25_img1.jpg',
            img2: 'assets/img/herramientas/engrampadora-a25_img2.jpg',
            img3: 'assets/img/herramientas/engrampadora-a25_img3.jpg'
        },
        {
            id: 22,
            categ: 'Herramientas',
            subcateg: 'Engrampadoras',
            nombre: 'Engrampadora AD-16 (*84/16)',
            desc: 'La engrampadora neumática industrial modelo AD 16 (Código internacional: 84/16) es sin dudas la más demandada para tareas de tapicería de muebles, pero también automotriz y náutica. Se la utiliza para la fabricación de sillas, sillones, cualquier tipo de respaldo y fundas para asientos, e incluso para algunas labores de carpintería.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Ancho grampa</th>
                    <th>Longitud grampa</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>AD 16</td>
                <td>12,1</td>
                <td>04 a 16</td>
                <td>0,55 X 0,90</td>
            </tr>
            <tr>
                <td><a href="engrampadoras.html#engrampadora-o25">O 25</a></td>
                <td>4,5</td>
                <td>06 a 16</td>
                <td>0,65 X 0,95</td>
            </tr>
            <tr>
                <td><a href="engrampadoras.html#engrampadora-a25">A 25</a></td>
                <td>12,8</td>
                <td>04 a 25</td>
                <td>0,65 X 1,00</td>
            </tr>
            </table>`,
            url: 'engrampadora-ad16',
            alt: 'Engrampadora AD-16.',
            thumb: 'assets/img/herramientas/engrampadora-ad16.jpg',
            img1: 'assets/img/herramientas/engrampadora-ad16_img1.jpg',
            img2: 'assets/img/herramientas/engrampadora-ad16_img2.jpg',
            img3: 'assets/img/herramientas/engrampadora-ad16_img3.jpg'
        },
        {
            id: 23,
            categ: 'Herramientas',
            subcateg: 'Engrampadoras',
            nombre: 'Engrampadora O-25 (*93/25 - 97/25)',
            desc: 'La engrampadora neumática industrial modelo O 25 (Código internacional: 93/25 - 97/25), de tamaño pequeño y peso reducido, es utilizada para labores industriales que requieren un alto nivel de formación de oficios. La fabricación de calzado de cuero, monturas para caballos, pinceles y brochas, son algunos de las aplicaciones en la que la O 25 está presente. También brinda soluciones para carpintería en distintas maderas.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Ancho grampa</th>
                    <th>Longitud grampa</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>O 25</td>
                <td>4,5</td>
                <td>06 a 16</td>
                <td>0,65 X 0,95</td>
            </tr>
            <tr>
                <td><a href="engrampadoras.html#engrampadora-a25">A 25</a></td>
                <td>12,8</td>
                <td>04 a 25</td>
                <td>0,65 X 1,00</td>
            </tr>
            <tr>
                <td><a href="engrampadoras.html#engrampadora-ad16">AD 16</a></td>
                <td>12,1</td>
                <td>04 a 16</td>
                <td>0,55 X 0,90</td>
            </tr>
            </table>`,
            url: 'engrampadora-o25',
            alt: 'Engrampadora O-25.',
            thumb: 'assets/img/herramientas/engrampadora-o25.jpg',
            img1: 'assets/img/herramientas/engrampadora-o25_img1.jpg',
            img2: 'assets/img/herramientas/engrampadora-o25_img2.jpg',
            img3: 'assets/img/herramientas/engrampadora-o25_img3.jpg'
        },
        {
            id: 24,
            categ: 'Herramientas',
            subcateg: 'Engrampadoras',
            nombre: 'Engrampadora J ES-32 COMBI (*Tipin/90 32)',
            desc: 'Este modelo de clavadora neumática industrial Combi J ES32 se denomina combinada, puesto que es capaz de efectuar fijaciones con grampas de 5,7 mm de ancho de corona (línea 90), y clavillos cabeza perdida (línea Tipin/SK 300). Se la puede encontrar como protagonista en distintos trabajos de carpintería en general.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Insumo</th>
                    <th>Longitud insumo</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>COMBI / J ES 32</td>
                <td><a href="grampas.html">Clavillos / Grampas</a></td>
                <td>16 a 32</td>
                <td>1,00 X 1,25</td>
            </tr>
            <tr>
                <td><a href="clavadoras.html#clavadora-al20">AL 20</a></td>
                <td><a href="espinas.html">Micro - espinas</a></td>
                <td>12 a 20</td>
                <td>0,60</td>
            </tr>
            <tr>
                <td><a href="clavadoras.html#clavadora-ga30">GA 30</a></td>
                <td><a href="espinas.html">Espinas</a></td>
                <td>15 a 30</td>
                <td>1,00 X 1,25</td>
            </tr>
            <tr>
                <td><a href="clavadoras.html#clavadora-j50">J 50</a></td>
                <td><a href="clavos.html">Clavillos</a></td>
                <td>16 a 50</td>
                <td>1,00 X 1,25</td>
            </tr>
            </table>`,
            url: 'engrampadora-jes32combi',
            alt: 'Engrampadora / Clavadora J ES-32 COMBI.',
            thumb: 'assets/img/herramientas/engrampadora-jes32combi.jpg',
            img1: 'assets/img/herramientas/engrampadora-jes32combi_img1.jpg',
            img2: 'assets/img/herramientas/engrampadora-jes32combi_img2.jpg',
            img3: 'assets/img/herramientas/engrampadora-jes32combi_img3.jpg'
        },
        {
            id: 25,
            categ: 'Herramientas',
            subcateg: 'Engrampadoras',
            nombre: 'Engrampadora E-40 (*90/40)',
            desc: 'La engrampadora neumática industrial modelo E 40 (Código internacional: 90/40) es el modelo elegido por varios de los rubros que involucran objetos construidos en madera y otros materiales, como la melamina y el MDF. La fabricación de decorados, exhibidores y stands, cartelería comercial, amoblamientos para el hogar (sillas, sillones, mesas, placards), y tantas otras labores de carpintería industrial la tienen como protagonista.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Ancho grampa</th>
                    <th>Longitud grampa</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>E 40</td>
                <td>5,7</td>
                <td>16 a 40</td>
                <td>1,00 X 1,25</td>
            </tr>
            <tr>
                <td><a href="engrampadoras.html#engrampadora-h40">H 40</a></td>
                <td>8,6</td>
                <td>20 a 40</td>
                <td>1,00 X 1,25</td>
            </tr>
            <tr>
                <td><a href="engrampadoras.html#engrampadora-l65">L 65</a></td>
                <td>10,7</td>
                <td>16 A 65</td>
                <td>1,40 X 1,60</td>
            </tr>
            <tr>
                <td><a href="engrampadoras.html#engrampadora-l50">L 50</a></td>
                <td>10,7</td>
                <td>16 a 50</td>
                <td>1,40 X 1,60</td>
            </tr>
            </table>`,
            url: 'engrampadora-e40',
            alt: 'Engrampadora E-40.',
            thumb: 'assets/img/herramientas/engrampadora-e40.jpg',
            img1: 'assets/img/herramientas/engrampadora-e40_img1.jpg',
            img2: 'assets/img/herramientas/engrampadora-e40_img2.jpg',
            img3: 'assets/img/herramientas/engrampadora-e40_img3.jpg'
        },
        {
            id: 26,
            categ: 'Herramientas',
            subcateg: 'Engrampadoras',
            nombre: 'Engrampadora H-40 (*92/40)',
            desc: 'La engrampadora neumática industrial modelo H 40 (Código internacional: 92/40) es una engrampadora neumática a la que se la puede relacionar con varios rubros distintos. Desde la fabricación de aberturas en madera, el ensamblado de estructuras para sillones y sillas, hasta labores de carpintería general, esa herramienta le da el usuario la posibilidad de trabajar con grampas en un rango de 21 a 40 mm.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Ancho grampa</th>
                    <th>Longitud grampa</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>H 40</td>
                <td>8,6</td>
                <td>20 a 40</td>
                <td>1,00 X 1,25</td>
            </tr>
            <tr>
                <td><a href="engrampadoras.html#engrampadora-l65">L 65</a></td>
                <td>10,7</td>
                <td>16 A 65</td>
                <td>1,40 X 1,60</td>
            </tr>
            <tr>
                <td><a href="engrampadoras.html#engrampadora-e40">E 40</a></td>
                <td>5,7</td>
                <td>16 a 40</td>
                <td>1,00 X 1,25</td>
            </tr>
            <tr>
                <td><a href="engrampadoras.html#engrampadora-l50">L 50</a></td>
                <td>10,7</td>
                <td>16 a 50</td>
                <td>1,40 X 1,60</td>
            </tr>
            </table>`,
            url: 'engrampadora-h40',
            alt: 'Engrampadora H-40.',
            thumb: 'assets/img/herramientas/engrampadora-h40.jpg',
            img1: 'assets/img/herramientas/engrampadora-h40_img1.jpg',
            img2: 'assets/img/herramientas/engrampadora-h40_img2.jpg',
            img3: 'assets/img/herramientas/engrampadora-h40_img3.jpg'
        },
        {
            id: 27,
            categ: 'Herramientas',
            subcateg: 'Engrampadoras',
            nombre: 'Engrampadora L-50 (*100/50 - 14/50)',
            desc: 'La engrampadora neumática industrial modelo L 50 (Código internacional: 100/50 - 14/50) uno de los modelos con usos más diversos en el universo de engrampadoras neumáticas industriales. Se la suele utilizar en la fabricación de estructuras de sillones, tarimas de madera, ataúdes, embalajes de madera, y emplacado en construcción en madera, ya que fija las grampas de mayor espesor y resistencia del mercado.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Ancho grampa</th>
                    <th>Longitud grampa</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>L 50</td>
                <td>10,7</td>
                <td>16 a 50</td>
                <td>1,40 X 1,60</td>
            </tr>
            <tr>
                <td><a href="engrampadoras.html#engrampadora-l65">L 65</a></td>
                <td>10,7</td>
                <td>16 A 65</td>
                <td>1,40 X 1,60</td>
            </tr>
            <tr>
                <td><a href="engrampadoras.html#engrampadora-e40">E 40</a></td>
                <td>5,7</td>
                <td>16 a 40</td>
                <td>1,00 X 1,25</td>
            </tr>
            <tr>
                <td><a href="engrampadoras.html#engrampadora-h40">H 40</a></td>
                <td>8,6</td>
                <td>20 a 40</td>
                <td>1,00 X 1,25</td>
            </tr>
            </table>`,
            url: 'engrampadora-l50',
            alt: 'Engrampadora L-50.',
            thumb: 'assets/img/herramientas/engrampadora-l50.jpg',
            img1: 'assets/img/herramientas/engrampadora-l50_img1.jpg',
            img2: 'assets/img/herramientas/engrampadora-l50_img2.jpg',
            img3: 'assets/img/herramientas/engrampadora-l50_img3.jpg'
        },
        {
            id: 28,
            categ: 'Herramientas',
            subcateg: 'Engrampadoras',
            nombre: 'Engrampadora L-65 (*100/65 - 14/65)',
            desc: 'La Engrampadora neumática industrial modelo L 65 (Código internacional: 100/65 - 14/65) trabaja con grampas de 10,7 mm de ancho, en longitudes que van desde los 16 a los 65 mm. Es la elegida al momento de fabricar embalajes y jaulas de madera, sillones, mobiliario de gran porte y otras aplicaciones.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Ancho grampa</th>
                    <th>Longitud grampa</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>L 65</td>
                <td>10,7</td>
                <td>16 A 65</td>
                <td>1,40 X 1,60</td>
            </tr>
            <tr>
                <td><a href="engrampadoras.html#engrampadora-e40">E 40</a></td>
                <td>5,7</td>
                <td>16 a 40</td>
                <td>1,00 X 1,25</td>
            </tr>
            <tr>
                <td><a href="engrampadoras.html#engrampadora-h40">H 40</a></td>
                <td>8,6</td>
                <td>20 a 40</td>
                <td>1,00 X 1,25</td>
            </tr>
            <tr>
                <td><a href="engrampadoras.html#engrampadora-l50">L 50</a></td>
                <td>10,7</td>
                <td>16 a 50</td>
                <td>1,40 X 1,60</td>
            </tr>
            </table>`,
            url: 'engrampadora-l65',
            alt: 'Engrampadora L-65.',
            thumb: 'assets/img/herramientas/engrampadora-l65.jpg',
            img1: 'assets/img/herramientas/engrampadora-l65_img1.jpg',
            img2: 'assets/img/herramientas/engrampadora-l65_img2.jpg',
            img3: 'assets/img/herramientas/engrampadora-l65_img3.jpg'
        },
        {
            id: 29,
            categ: 'Herramientas',
            subcateg: 'Engrampadoras',
            nombre: 'Engrampadora B-19 (*35/19)',
            desc: 'La engrampadora neumática industrial modelo B 19 (Código internacional: 35/19) es usado para el cierre de cajas de cartón corrugado en embalajes, y le da la posibilidad al usuario de trabajar con dos medidas: 5/8” (16 mm) y ¾” (19 mm). Su fabricación, en materiales de primera calidad, la convierten en la opción adecuada para su uso en la industria.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Ancho grampa</th>
                    <th>Longitud grampa</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>B-19</td>
                <td>35</td>
                <td>16 A 19</td>
                <td>1,40 X 1,60</td>
            </tr>
            </table>`,
            url: 'engrampadora-b19',
            alt: 'Engrampadora B-19.',
            thumb: 'assets/img/herramientas/engrampadora-b19.jpg',
            img1: 'assets/img/herramientas/engrampadora-b19_img1.jpg',
            img2: 'assets/img/herramientas/engrampadora-b19_img2.jpg',
            img3: 'assets/img/herramientas/engrampadora-b19_img3.jpg'
        }


        // CLAVADORAS

    ]

    return listaProductos


} 