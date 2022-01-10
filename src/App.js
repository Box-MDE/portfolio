import './App.css'
import icon from './img/icon.png'
import   Typed   from 'react-typed'
import { Element, Link } from 'react-scroll'
import Footer from './components/Footer'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

function App() {

  /*const handleChange = (event) => {
    setValue(event.target.value);
  };*/

  return (
    <>
      <header className='header'>
        <nav className='navbar'>
          <span className='navbar-brand'><h2><img src={icon} alt="logo"/>Box</h2></span>
        </nav>
      </header>

      <section className='section__background'>
        <div className='background__assets'>
          <div className='background__assets--back'>
            <div className='background__assets--circles'>
              <div className='background__assets--img'></div>
            </div>
          </div>
        </div>

        <div className='background__info'>
            <h1 className='background__info--h1'>
              <Typed
                strings={['DESARROLLO <br> DE IDEAS.', 'DESARROLLO <br> DE EMOCIONES.', 'DESARROLLO <br> DE PAGINAS WEB.']}
                typeSpeed={40}
                smartBackspace={true}
                backSpeed={25}
                backDelay={1000}
                loop={true}
                startDelay={300}
              />
            </h1>
            <p className='background__info--p'>Comienza a invertir en tu negocio expandiendo<br></br>
            el alcance de tus ideas a través<br></br>
            de toda la web.</p>
            <div className='boton-cot'>
              <Link to="contacto"><button className="background__info--button">Cotiza tu página gratis</button></Link>
            </div>
        </div>
      </section>

      <section className='section__background2'>

        <div className='box__info'>
          <div className='descrip'>
            <div className='info__title'>
              <h4>Diseño web adaptado a dispositivos móviles</h4>
              <p className='parrafo'>
                Todos nuestros proyectos cuentan con diferentes resoluciones para cada uno de los principales dispositivos:
                Smartphones, Tablets y computadores.
              </p>
            </div>
          </div>
          <div className='descrip'>
            <div className='info__title'>
              <h4>Servicios de Marketing Digital y SEO</h4>
              <p className='parrafo'>
                Optimizamos el contenido de cada sitio web con el fin de incrementar el tráfico orgánico y así lograr 
                posicionar la página entre las primeras búsquedas del navegador.
              </p>
            </div>
          </div>
          <div className='descrip'>
            <div className='info__title'>
              <h4>Diseño web adaptado a dispositivos móviles</h4>
            </div>
          </div>
        </div>
      </section>

      <Element name="contacto">
        <section className='section__background3'>
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
        </section>
      </Element>

      
      
    </>
  );
}

export default App;
