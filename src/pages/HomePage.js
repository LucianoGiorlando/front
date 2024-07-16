import React from "react";

const HomePage = (props) => {
    return (
        <main>
            <div class="banner_presentacion"></div>
            <div className="presentacion">
                <h1>LG AMOBLAMIENTOS</h1>
                <p>Diseño y fabricación de muebles con estilo</p>
            </div>

            <div className="iconos">
                <div className="icono">
                    <i className="fa-solid fa-truck-fast fa-2xl"></i>
                    <p>Hacemos envíos</p>
                </div>
                <div className="icono">
                    <i className="fa-solid fa-credit-card fa-2xl"></i>
                    <p>Cuotas sin interés</p>
                </div>
                <div className="icono">
                    <i className="fa-solid fa-hand-holding-dollar fa-2xl"></i>
                    <p>20% off en efectivo</p>
                </div>
                <div className="icono">
                    <i className="fa-solid fa-receipt fa-2xl"></i>
                    <p>Pide tu cotización</p>
                </div>
            </div>

            <div className="bienvenida">
            <img src="img/rack_tv.jpg" alt="rack_tv" /> 
            {/* revisar */}
            <div className="text_box">
                <h2>¡Bienvenidos a LG Amoblamientos!</h2>
                <p>¡Nos alegra que nos visites! En LG Amoblamientos, estamos dedicados a transformar tus espacios con muebles modernos y minimalistas hechos de MDF, un material que combina la elegancia con la sostenibilidad. Nuestra misión es ofrecerte muebles que no solo embellezcan tu hogar, sino que también proporcionen la funcionalidad y durabilidad que necesitas para tu vida diaria.</p>
                <h3>Muebles Modernos y Minimalistas en MDF para tu Hogar</h3>
                <p>En LG Amoblamientos, nos especializamos en la creación de muebles únicos y personalizados para todos los rincones de tu hogar. Ya sea que estés buscando renovar tu cocina, comedor, sala de estar, habitación o cualquier otro espacio, tenemos soluciones que se adaptan perfectamente a tus necesidades y gustos.</p>
                <h4>¿Por Qué Elegir MDF?</h4>
                <p>El MDF, o tablero de fibra de densidad media, es un material versátil y ecológico que nos permite ofrecerte muebles de alta calidad con un acabado impecable. Sus ventajas incluyen:</p>
                <ul>
                    <li>Durabilidad: Resistente y de larga duración, ideal para el uso diario.</li>
                    <li>Versatilidad: Fácil de trabajar, lo que nos permite crear diseños detallados y personalizados.</li>
                    <li>Estética: Su superficie suave y uniforme permite acabados perfectos, adaptándose a cualquier estilo decorativo.</li>
                </ul>
                <h4 id="diseño_exclusivo">Diseño Exclusivo</h4>
                <p>Cada hogar es único, y tus muebles deberían serlo también. Ofrecemos un servicio de diseño exclusivo donde trabajamos contigo para crear piezas a medida que se ajusten a tus necesidades específicas. Desde la consulta inicial hasta la instalación final, nos aseguramos de que cada detalle cumpla con tus expectativas.</p> 
            </div>

            <div className="info">
            <div className="text_box_2">
                <img src="img/mesa_de_noche.jpg" alt="mesa_de_noche" />
                <h4>Variedad de Muebles</h4>
                <p>Nuestra colección incluye una amplia variedad de muebles para diferentes espacios:</p>
                <ul>
                    <li>Cocina: Alacenas y bajomesada, islas, despenseros.</li>
                    <li>Comedor: Mesas de comedor, barras de desayuno y aparadores.</li>
                    <li>Habitaciones: Camas, mesas de noche, placares y armarios.</li>
                    <li>Sala de estar: Rack de TV, mesas de centro, escritorios.</li>
                </ul>
                <h4>Compromiso con la Calidad</h4>
                <p>Cada pieza que fabricamos pasa por un riguroso control de calidad para garantizar que recibas un producto que no solo cumpla con los estándares estéticos, sino que también sea funcional y duradero. Nos enorgullece utilizar MDF de alta calidad y técnicas de fabricación avanzadas para ofrecerte lo mejor.</p>
                <h4>Tu Hogar, Tu Estilo</h4>
                <p>Sabemos que el mobiliario juega un papel crucial en la creación de un hogar acogedor y estilizado. Nuestro equipo de diseñadores y artesanos está aquí para ayudarte a realizar tus ideas, asegurando que cada pieza refleje tu personalidad y estilo de vida.</p>
                <h4>Descubre la Diferencia</h4>
                <p>Te invitamos a explorar nuestra web y descubrir cómo podemos ayudarte a transformar tu hogar con muebles modernos y minimalistas de MDF. En LG Amoblamientos, tu satisfacción es nuestra prioridad, y trabajamos cada día para ofrecerte lo mejor en diseño y calidad.</p>
                <p>Gracias por elegir LG Amoblamientos. Estamos emocionados de ser parte de tu hogar.</p>
            </div>
        </div>
        </div>
        </main>
    );
}

export default HomePage;    