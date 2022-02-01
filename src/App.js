
import './scss/_main.scss'
import './scss/_header.scss'
import './scss/_background.scss'
import './scss/_desc.scss'
import './scss/_info.scss'
import './scss/_contact.scss'
import './scss/_footer.scss'
import bg_img from './img/bg_img.png'
import box_logo from './img/box_logo.svg'
import desc_img from './img/desc_img.svg'
import separator_1 from './img/separator_1.svg'
import   Typed   from 'react-typed'
import { Element, Link } from 'react-scroll'

import {RiFacebookCircleFill} from "react-icons/ri";
import {RiWhatsappFill} from "react-icons/ri";
import {RiInstagramFill} from "react-icons/ri";
import {RiMessengerFill} from "react-icons/ri";

import icon_devices from './img/icons/icon_devices.svg'
import icon_marketing from './img/icons/icon_marketing.svg'
import icon_domain from './img/icons/icon_domain.svg'
import icon_settings from './img/icons/icon_settings.svg'

function App() {

  /*const handleChange = (event) => {
    setValue(event.target.value);
  };*/

  return (
    <>
      <header className='header'>
        <img src={box_logo} alt='box_logo'></img>
        <h3 className='header__title'>Box Solutions</h3>
      </header>

      <section className='section-background'>
        <div className='section-background__content'>
          <div className='section-background__content-text'>
            <h1 className='content-text__title'>Desarrollamos tu pagina web profesionalmente.</h1>
            <p className='content-text__p'>
              <Typed
                strings={['Comienza a invertir en tu negocio expandiendo el alcance de tus ideas a traves de toda la web.']}
                typeSpeed={30}
                smartBackspace={true}
                backSpeed={30}
                backDelay={2000}
                loop={true}
                startDelay={100}
              />
            </p>
            <Link to="contact" ><button className='content-text__btn'>Cotiza tu pagina gratis!</button></Link>
          </div>
          <div className='section-background__content-img'>
            <img src={bg_img} alt='web-design'></img>
          </div>
        </div>
      </section>
      <div className='section-background__border'> 

      </div>

      <main className='main'>
        <section className='section-description'>
          <h1 className='section-description__title'>Descubre todo lo que tenemos para ti!</h1>
          <p className='section-description__paragraph'>Nos encargamos de crear sitios web personalizados de alta calidad al mejor precio, por eso te presentamos las
            principales caracteristicas que llevan cada uno de nuestros proyectos.</p>
        </section>

        <img className='separator' src={separator_1} alt='separator'></img>

        <section className='section-info'>
          <img className='section-info__img' src={icon_devices} alt='icon_devices'></img>

          <div className='section-info__text'>
            <h1 className='text__title --margin'>Diseño Web Adaptado a Dispositivos Móviles</h1>
            <p className='text__paragraph'>Todos nuestros proyectos
              cuentan con diferentes
              resoluciones para cada uno
              de los principales
              dispositivos; smartphones,
              tablets y computadores. </p>
          </div>
        </section>

        <section className='section-info'>
          <img className='section-info__img order' src={icon_marketing} alt='icon_devices'></img>

          <div className='section-info__text order'>
            <h1 className='text__title'>Servicios de Marketing Digital y SEO</h1>
            <p className='text__paragraph'>Optimizamos el contenido de
              cada sitio web con el fin de 
              incrementar el trafico organico
              y asi lograr posicionar la
              pagina entre las primeras
              busquedas del navegador.</p>
          </div>
        </section>

        <section className='section-info'>
            <img className='section-info__img' src={icon_domain} alt='icon_devices'></img>

          <div className='section-info__text'>
            <h1 className='text__title'>Hosting y Dominio de Alta Seguridad</h1>
            <p className='text__paragraph'>La seguridad de tu sitio web
              es primordial y por eso
              nos aseguramos que tu
              hosting y dominio cuenten
              con certificado SSL para
              una mejor experiencia.</p>
          </div>
        </section>

        <section className='section-info'>
            <img className='section-info__img order' src={icon_settings} alt='icon_devices'></img>
          
          <div className='section-info__text order'>
            <h1 className='text__title'>Mantenimiento y Actualizaciones</h1>
            <p className='text__paragraph'>Los mejores proyectos siempre
              deben estar al dia, es asi como
              te ofrecemos el asesoramiento
              necesario en diferentes situaciones y/o 
              actualizaciones que mejoren
              la calidad de tu sitio web. </p>
          </div>
        </section>

        <section className='section-info'>
          <img className='section-info__img last--border' src={desc_img} alt='desc_img'></img>

          <div className='section-info__text'>
            <h1 className='text__title'>Aprovecha la tecnologia a tu favor!</h1>
            <p className='text__paragraph'>Tu sitio no solo funciona como el mostrador de tu empresa u organizacion, sino tambien como una excelente
            herramienta de trabajo que te ayudara a registrar, automatizar y modificar informacion escencial atraves de un panel de control dinamico y sencillo.</p>
          </div>
        </section>

        <img className='separator last' src={separator_1} alt='separator'></img>
      </main>

      <Element className='contact'>
        <div className='contact-content'>
          <div className='contact-content__img'>
             <img src={icon_devices} alt='contact_img'></img>
             <div className='contact__text'>
              <a href='google.com'>boxsolutions@gmail.com</a>
              <i>+57 321-4332191</i>
             </div>
             <div className='contact__icons'>
              <RiFacebookCircleFill />
              <RiWhatsappFill />
              <RiInstagramFill />
              <RiMessengerFill />
             </div>
          </div>
          <div className='contact-content__text'>
            <h1 className='section-contact__title'>Cotiza tu pagina gratis!</h1>
            <input placeholder='Nombre'></input>
            <input placeholder='Correo'></input>
            <input placeholder='Celular'></input>
            <input placeholder='Que tienes en mente?'></input>
            <button>Enviar!</button>
          </div>
        </div>
      </Element>

      <footer className='footer'>
        <div className='footer-text'>

        </div>
        <p> © Copyright 2022. All rights reserved.</p>
      </footer>
 
    </>
  );
}

export default App;
