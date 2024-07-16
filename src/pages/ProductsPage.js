import React from "react";

const ProductsPage = (props) => {
    return (
        <main className="main">
            <div className="coleccion">
                <div className="coleccion_presentacion">
                <h2>Nuestra Colección de Muebles</h2>
                <p>En LG Amoblamientos, nos enorgullece ofrecer una extensa variedad de muebles modernos y minimalistas, cuidadosamente diseñados para embellecer y optimizar cada rincón de tu hogar. Nuestra colección abarca diversas categorías principales, facilitándote la búsqueda del mueble perfecto para cada necesidad específica. Ya sea que estés redecorando tu sala de estar, dormitorio, comedor o cualquier otro espacio, encontrarás en nuestra gama opciones que combinan estilo contemporáneo y funcionalidad, permitiendo que cada área de tu casa no solo se vea elegante, sino que también aproveche al máximo su potencial. Nos dedicamos a proporcionar soluciones de amueblamiento que reflejen las últimas tendencias en diseño de interiores, asegurando que nuestros productos no solo cumplan con altos estándares estéticos, sino también con la durabilidad y practicidad que tu hogar merece.</p>
                </div>
                <div className="coleccion_img">
                    <img src="img/armado.jpg" alt="armado" />
                </div>
            </div>

            <div className="muebles_cocina">
                <div className="muebles_cocina_text">
                    <h2>Cocina</h2>
                    <p>La cocina es el corazón del hogar, y nuestros muebles están diseñados para maximizar tanto la funcionalidad como la estética de este espacio crucial.</p>
                </div>
                <img src="img/Muebles de cocina/muebles_de_cocina.jpg" alt="mueble_cocina" />
            </div>

            <div className="coleccion_cocina">
                <div className="coleccion_cocina_alacena">
                    <h3>Alacenas y Bajomesada</h3>
                    <img src="img/Muebles de cocina/alacena_mesada.jpg" alt="alacena_mesada" />
                    <p>Soluciones de almacenamiento inteligentes que mantienen tu cocina organizada y accesible, con diseños que se adaptan a cualquier estilo.</p>
                </div>
                <div className="coleccion_cocina_isla">
                    <h3>Islas de cocina</h3>
                    <img src="img/Muebles de cocina/isla_cocina.jpg" alt="isla_cocina" />
                    <p>Piezas centrales que ofrecen espacio adicional para preparación y almacenamiento, combinando practicidad y estilo.</p>
                </div>
                <div className="coleccion_cocina_despensero">
                    <h3>Despenseros</h3>
                    <img src="img/Muebles de cocina/despensero.jpg" alt="despensero"/>
                    <p>Diseños abiertos que facilitan el acceso a utensilios e ingredientes, al mismo tiempo que aportan un toque decorativo.</p>
                </div>
            </div>

            <div className="muebles_comedor">
                <div className="muebles_comedor_text">
                    <h2>Comedor</h2>
                    <p>Transforma tu comedor en un lugar elegante y cómodo para disfrutar de comidas y reuniones con nuestros muebles diseñados para adaptarse a cualquier estilo de vida.</p>
                </div>
                <img src="img/Muebles de comedor/muebles_de_comedor.jpg" alt="mueble_comedor" />
            </div>

            <div className="coleccion_comedor">
                <div className="coleccion_comedor_mesa">
                    <h3>Mesas de Comedor</h3>
                    <img src="img/Muebles de comedor/mesa_comedor.jpg" alt="mesa_comedor" />
                    <p>Disponibles en diversas formas y tamaños, nuestras mesas son el centro perfecto para que disfrutas todas tus comidas.</p>
                </div>
                <div className="coleccion_comedor_barra">
                    <h3>Barras de desayuno</h3>
                    <img src="img/Muebles de comedor/barra_desayuno.jpg" alt="barra_desayuno" />
                    <p>Elegantes y funcionales para cuando deseas cambiar tu lugar de comidas y desayunos, siendo éste una muy buena opción.</p>
                </div>
                <div className="coleccion_comedor_aparador">
                    <h3>Aparadores</h3>
                    <img src="img/Muebles de comedor/aparador.jpg" alt="aparador" />
                    <p>Proporcionan almacenamiento adicional para vajillas, cubertería y más, manteniendo tu comedor organizado y elegante.</p>
                </div>
            </div>

            <div className="muebles_habitacion">
                <div className="muebles_habitacion_text">
                    <h2>Habitación</h2>
                    <p>Crea un refugio de paz y estilo con nuestros muebles de dormitorio, diseñados para proporcionar comodidad y funcionalidad.</p>
                </div>
                <img src="img/Muebles de habitacion/muebles_de_habitacion.jpg" alt="mueble_habitacion" />
            </div>

            <div className="coleccion_habitacion">
                <div className="coleccion_habitacion_cama">
                    <h3>Camas</h3>
                    <img src="img/Muebles de habitacion/cama.jpg" alt="camas" />
                    <p>Ofrecemos camas desde individuales hasta king size, con diseños que combinan confort y estilo para cualquier decoración.</p>
                </div>
                <div className="coleccion_habitacion_mesita">
                    <h3>Mesas de Noche</h3>
                    <img src="img/Muebles de habitacion/mesa_de_noche.jpg" alt="mesa_de_noche" />
                    <p>Las mesas de noche son una solución práctica para almacenamiento junto a la cama, disponibles en diferentes estilos y acabados.</p>
                </div>
                <div className="coleccion_habitacion_placard">
                    <h3>Placares y Armarios</h3>
                    <img src="img/Muebles de habitacion/placard.jpg" alt="placard" />
                    <p>Espaciosos y bien organizados, nuestros armarios están diseñados para mantener tu ropa y accesorios en perfectas condiciones.</p>
                </div>
            </div>

            <div className="muebles_estar">
                <div className="muebles_estar_text">
                    <h2>Sala de Estar</h2>
                    <p>La sala de estar es donde te relajas y recibes a tus invitados. Nuestros muebles están diseñados para crear un ambiente acogedor y moderno.</p>
                </div>
                <img src="img/Muebles de Sala de estar/muebles_sala_estar.jpg" alt="mueble_estar" />
            </div>

            <div className="coleccion_estar">
                <div className="coleccion_estar_rack">
                    <h3>Rack de TV</h3>
                    <img src="img/Muebles de Sala de estar/rack_tv.jpg" alt="rack_tv" />
                    <p>Soluciones elegantes y funcionales para tu sistema de entretenimiento, proporcionando espacio para todos tus dispositivos y accesorios.</p>
                </div>
                <div className="coleccion_estar_mesa">
                    <h3>Mesas de Centro</h3>
                    <img src="img/Muebles de Sala de estar/mesa_de_centro.jpg" alt="mesa_de_centro" />
                    <p>El complemento perfecto para tu sala de estar, nuestras mesas de centro están disponibles en una variedad de estilos y tamaños.</p>
                </div>
                <div className="coleccion_estar_escritorio">
                    <h3>Escritorios</h3>
                    <img src="img/Muebles de Sala de estar/escritorio.jpg" alt="escritorio" />
                    <p>Ideales para trabajar o estudiar, nuestros escritorios ofrecen un espacio de trabajo funcional sin sacrificar el estilo.</p>
                </div>
            </div>
        </main>
    );
}

export default ProductsPage;