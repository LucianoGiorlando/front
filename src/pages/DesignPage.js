import React from "react";

const DesignPage = (props) => {
    return (
        <main className="d_per">
            <div class="presentacion_dper">
                <div class="presentacion_dper_a">
                    <h2 class="hola">Diseños Personalizados</h2>
                    <p>En LG Amoblamientos, entendemos que cada hogar es único y que tus muebles deben reflejar tu estilo y
                    necesidades específicas. Por eso, ofrecemos un servicio exclusivo de diseños personalizados que te
                    permite crear piezas únicas adaptadas a tu espacio y preferencias.</p>
                </div>
                <img src="img/d_per.jpg" alt="diseños_personalizados" />
            </div>

            <h3>¿Cómo Funciona Nuestro Servicio de Diseños Personalizados?</h3>

            <div className="steps">
                <div className="step_1">
                    <h4>Consulta Inicial</h4>
                    <img src="img/step_1.jpg" alt="step_1" />
                    <h5>1</h5>
                    <p>Todo comienza con una idea. Nos reunimos contigo para entender tus necesidades, gustos y el espacio donde deseas colocar el mueble. Juntos, discutiremos tus ideas y sugerencias para crear un diseño que se adapte perfectamente a tu hogar.</p>
                </div>
                <div className="step_2">
                    <h4>Diseño y Sugerencias</h4>
                    <img src="img/step_2.jpg" alt="step_2" />
                    <h5>2</h5>
                    <p>Nuestro equipo de diseñadores expertos transformará tus ideas en un diseño detallado. Te ofreceremos sugerencias para mejorar la funcionalidad y estética del mueble, asegurándonos de que el resultado final sea práctico y hermoso.</p>
                </div>
                <div className="step_3">
                    <h4>Elección de Medidas y Colores</h4>
                    <img src="img/step_3.jpg" alt="step_3" />
                    <h5>3</h5>
                    <p>Podrás elegir las medidas exactas y las combinaciones de colores que desees. Te proporcionaremos una amplia gama de opciones para asegurarnos de que el mueble se ajuste perfectamente a tu espacio y estilo.</p>
                </div>
                <div className="step_4">
                    <h4>Revisión y Ajustes</h4>
                    <img src="img/step_4.jpg" alt="step_4" />
                    <h5>4</h5>
                    <p>Te presentaremos el diseño final para tu revisión. Si hay algún detalle que desees cambiar, nuestro equipo hará los ajustes necesarios para que estés completamente satisfecho con el diseño. Tus comentarios ayudan a mejorar continuamente nuestro trabajo.</p>
                </div>
                <div className="step_5">
                    <h4>Cotización</h4>
                    <img src="img/step_5.jpg" alt="step_5" />
                    <h5>5</h5>
                    <p>Una vez que el diseño esté aprobado, te proporcionaremos una cotización detallada. Nuestro objetivo es ofrecerte transparencia en los costos y asegurarnos de que el mueble cumpla con tus expectativas tanto en calidad como en precio.</p>
                </div>
                <div className="step_6">
                    <h4>Fabricación y Entrega</h4>
                    <img src="img/step_6.jpg" alt="step_6" />
                    <h5>6</h5>
                    <p>Con el diseño y la cotización aprobados, comenzamos la fabricación de tu mueble usando materiales de alta calidad para garantizar un producto duradero y estético. Te informaremos del plazo de entrega y aseguraremos que llegue en perfecto estado.</p>
                </div>
            </div>
        </main>
    );
}

export default DesignPage;
