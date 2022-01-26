
import './scss/_main.scss'
import './scss/_header.scss'
import './scss/_background.scss'
import './scss/_desc.scss'
import './scss/_frames.scss'
import './scss/_contact.scss'
import './scss/_footer.scss'
import bg_img from './img/bg_img.png'
import box_logo from './img/box_logo.svg'
import desc_img from './img/desc_img.svg'
import separator_1 from './img/separator_1.svg'

import icon_devices from './img/icons/icon_devices.svg'
import icon_marketing from './img/icons/icon_marketing.svg'
import icon_domain from './img/icons/icon_domain.svg'
import icon_settings from './img/icons/icon_settings.svg'

// import icon from './img/icon.png'
// import   Typed   from 'react-typed'
// import { Element, Link } from 'react-scroll'
// import Footer from './components/Footer'
// import Box from '@mui/material/Box'
// import TextField from '@mui/material/TextField'

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
            <p className='content-text__p'>Comienza a invertir en tu negocio expandiendo
              el alcance de tus ideas a traves 
              de toda la web.</p>
            <a href='section-contact' className='content-text__btn'>Cotiza tu pagina gratis!</a>
          </div>
          <div className='section-background__content-img'>
            <img src={bg_img} alt='web-design'></img>
          </div>
        </div>
      </section>
      <div className='section-background__border'> 

      </div>

      <main className='section-info'>
        <section className='section-info__content-frames'>
          <h1 className='content-frames__title'>Descubre lo que tenemos para ti!</h1>
          <p className='content-frames__p'>Nos encargamos de crear sitios web personalizados de alta calidad al mejor precio, por eso te presentamos las
            principales caracteristicas que llevan cada uno de nuestros proyectos.</p>
          <img className='separator' src={separator_1} alt='separator'></img>
          <div className='content-frames__section-caract'>
            <h1 className='section-caract__title --margin'>Diseño Web Adaptado a Dispositivos Móviles</h1>
            <img className='section-caract__img' src={icon_devices} alt='icon_devices'></img>
            <p className='section-caract__p'>Todos nuestros proyectos
              cuentan con diferentes
              resoluciones para cada uno
              de los principales
              dispositivos; smartphones,
              tablets y computadores. </p>
          </div>
          <div className='content-frames__section-caract'>
            <h1 className='section-caract__title'>Servicios de Marketing Digital y SEO</h1>
            <img className='section-caract__img' src={icon_marketing} alt='icon_devices'></img>
            <p className='section-caract__p'>Optimizamos el contenido de
              cada sitio web con el fin de 
              incrementar el trafico organico
              y asi lograr posicionar la
              pagina entre las primeras
              busquedas del navegador.</p>
          </div>
          <div className='content-frames__section-caract'>
            <h1 className='section-caract__title'>Hosting y Dominio de Alta Seguridad</h1>
            <div className='aa'>
              <img className='section-caract__img' src={icon_domain} alt='icon_devices'></img>
            </div>
            <p className='section-caract__p'>La seguridad de tu sitio web
              es primordial y por eso
              nos aseguramos que tu
              hosting y dominio cuenten
              con certificado SSL para
              una mejor experiencia.</p>
          </div>
          <div className='content-frames__section-caract'>
            <h1 className='section-caract__title'>Mantenimiento y Actualizaciones</h1>
            <div>
              <img className='section-caract__img' src={icon_settings} alt='icon_devices'></img>
            </div>
            <p className='section-caract__p'>Los mejores proyectos siempre
              deben estar al dia, es asi como
              te ofrecemos el asesoramiento
              necesario en errores y/o 
              actualizaciones que mejoren
              la calidad de tu sitio web. </p>
          </div>
        </section>

        <img className='separator last' src={separator_1} alt='separator'></img>

        <section className='section-info__content-desc'>
          <h1 className='contect-desc__title'>Aprovecha la tecnologia a tu favor!</h1>
          <p className='content-desc__p'>Tu sitio no solo funciona como el mostrador de tu empresa u organizacion, sino tambien como una excelente
          herramienta de trabajo que te ayudara a registrar y automatizar todos los aspectos claves atraves de un panel de control dinamico y sencillo.</p>
            <img src={desc_img} alt='desc_img'></img>
        </section>
      </main>

      <section className='section-contact'>
        <h1 className='section-contact__title'>Cotiza tu pagina gratis!</h1>
        <input placeholder='Nombre'></input>
        <input placeholder='Correo'></input>
        <input placeholder='Celular'></input>
        <input placeholder='Comentanos tus ideas'></input>
        <button>Enviar!</button>
      </section>

      <footer className='footer'>
        <p> © Copyright 2022. All rights reserved.</p>
      </footer>

      {/* <section className='section__background3'>
        <div className='title'>
          <h1>CONTACTO</h1>
        </div>
        <div className='contact'>
          <div className='redes'>
            <div className='descrip-redes'>
              <h4>Puedes comunicarte a través de nuestras líneas de atención.</h4>  
              <div className='email'>
                <p>Para un mejor y personalizado contacto, envíanos un email.</p>
                <h6>boxmde2021@gmail.com</h6>
              </div>
              <div className='logos'>
                <div className='img'>
                  <img src={icon}  alt='logo-box'/>
                </div>
                <div className='text'>
                  <h5>THINKING OUT <br/> OF THE BOX</h5>
                </div>
              </div> 
            </div>        
          </div>
          <div className='form'>
            <div className='descrip-form'>
              <h3>¿Cómo podemos ayudarte?</h3>
            </div>
          <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '100%' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="filled-basic" label="Nombre" variant="filled" />
            </Box>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '100%' },
              }}
              Validate
              autoComplete="off"
            >
              <TextField id="filled-basic" label="E-mail" variant="filled" type="email" />
            </Box>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '100%' },
              }}
              Validate
              autoComplete="off"
            >
              <TextField id="filled-basic" label="Celular" variant="filled" type="tel" />
            </Box>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '100%' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="filled-textarea"
                label="Deja tu mensaje"
                placeholder="Escribe tu mensaje aquí..."
                multiline
                variant="filled"
              />
            </Box>
            <button className="background__info--button">Submit</button>
          </div>
            
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </section> */}

      
      
    </>
  );
}

export default App;
