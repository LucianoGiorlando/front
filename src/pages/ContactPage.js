import React from "react";
import '../styles/ContactPage.css';

const ContactPage = (props) => {
    return (
        <main className="q_somos">
            <section>
                <article>
                    <h2>¿Quiénes Somos?</h2>
                    <p>Somos una empresa dedicada a transformar espacios con diseños únicos y personalizados que combinan funcionalidad, durabilidad y estética.</p>
                    <h3>Nuestra Historia</h3>
                    <p>LG Amoblamientos nació de la pasión por el diseño y la creación de muebles que mejoran la vida de las personas. Con años de experiencia en la industria del mueble, hemos desarrollado una comprensión profunda de las necesidades y deseos de nuestros clientes. Nuestra misión es ofrecer muebles de alta calidad que reflejen tu estilo y se adapten perfectamente a tu hogar.</p>
                    <h3>Nuestro Compromiso</h3>
                    <p>Nos comprometemos a:</p>
                    <ul>
                        <li>Calidad Superior: Utilizamos MDF de alta calidad y técnicas de fabricación avanzadas para asegurar que cada pieza sea duradera y estéticamente agradable.</li>
                        <li>Diseño Personalizado: Entendemos que cada hogar es único. Por eso, ofrecemos un servicio de diseño personalizado para crear muebles que se ajusten a tus necesidades y gustos específicos.</li>
                        <li>Sostenibilidad: Nos esforzamos por ser respetuosos con el medio ambiente utilizando materiales sostenibles y procesos de fabricación responsables.</li>
                        <li>Satisfacción del Cliente: Tu satisfacción es nuestra prioridad. Desde la consulta inicial hasta la entrega final, nos aseguramos de que cada detalle cumpla con tus expectativas.</li>
                    </ul>
                    <h3>Nuestro Equipo</h3>
                    <p>Somos un equipo pequeño pero apasionado, compuesto por Sol (mi novia), Nina (nuestra gata) y yo (Luciano). Juntos, combinamos nuestras habilidades y creatividad para ofrecerte muebles únicos y personalizados que transformarán tu hogar.</p>
                    <div className="team">
                        <div className="sol">
                            <h3>Sol</h3>
                            <img src="img/equipo/sol.jpg" alt="Sol" />
                            <p>Es la mente creativa detrás de cada proyecto. Con un ojo impecable para los detalles y una gran experiencia en diseño de interiores, trabaja mano a mano conmigo para asegurarse de que cada mueble refleje perfectamente las necesidades y gustos de nuestros clientes.</p>
                        </div>
                        <div className="nina">
                            <h3>Nina</h3>
                            <img src="img/equipo/nina.jpg" alt="Nina" />
                            <p>Dueña y fundadora de la empresa. Su tarea principal es asegurarse de que cada mueble sea resistente. Siempre está presente durante el proceso de armado, probando la resistencia de los muebles al subirse sobre ellos y observando atentamente cada detalle de la fabricación.</p>
                        </div>
                        <div className="yo">
                            <h3>Luciano</h3>
                            <img src="img/equipo/luciano.jpg" alt="Luciano" />
                            <p>Responsable del diseño y la fabricación. Me dedico a convertir ideas en piezas únicas y funcionales, combinando estética y practicidad. Me aseguro de que cada mueble cumpla su propósito y realce la belleza de tu hogar.</p>
                        </div>
                    </div>
                </article>
            </section>

            <aside>              
                <form action="" className="form">
                    <h2>Contáctanos</h2>
                
                    <label htmlFor="nombre">Nombre y Apellido <span>*</span></label>
                    <input type="text" name="nombre" autocomplete="off" required />

                    <label htmlFor="celular">Celular <span>*</span></label>
                    <input type="number" name="celular" autocomplete="off" required /> 

                    <label htmlFor="email">Email <span>*</span></label>
                    <input type="email" name="email" autocomplete="off" required />

                    <br/>
                
                    <label htmlFor="idea-text">Cuéntanos sobre tu idea <span>*</span></label>
                    <textarea name="idea-text" id="idea-text" required placeholder="Tipo de mueble, ubicación, medidas, colores y todo los detalles que creas necesarios."></textarea>
                
                    <label htmlFor="idea">Tu idea en una imagen <span>**</span></label>
                    <input type="file" name="idea" id="file" />

                    <br/>

                    <input type="submit" id="submit" />

                    <p className="requerido"><span>*</span>Requerido; <span>**</span>Opcional</p>
                
                </form>

                <div className="redes">
                    <h3>¡Siguenos en nuestras redes!</h3>
                    <div className="redes_iconos">
                        <div className="whatsapp">
                            <a href="https://www.whatsapp.com/?lang=es_LA" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-whatsapp"></i>
                                <h5>WhatsApp</h5>
                            </a>
                        </div>
                        <div className="instagram">
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <i class="fa-brands fa-instagram"></i>
                                <h5>Instagram</h5>
                            </a>
                        </div>
                        <div className="facebook">
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-facebook-f"></i>
                                <h5>Facebook</h5>
                            </a>
                        </div>
                    </div>
                </div>
            </aside>
        </main>
    );
}

export default ContactPage;