import './App.css'
import icon from './img/icon.png'
import   Typed   from 'react-typed'
import { Element, Link } from 'react-scroll'
import Footer from './components/Footer'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

function App() {

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
            <Link to="contacto"><button className="background__info--button">Cotiza tu página gratis</button></Link>
        </div>

      </section>

      <section className='section__background2'>
        aqui iria mostrar lo q hacemos
      </section>

      <Element name="contacto">
        <section className='section__background3'>
          <div className='contact'>
            <div className='title'>
              <h1>CONTACTO</h1>
            </div>
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField id="filled-basic" label="Filled" variant="filled" />
              </Box>

              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField id="filled-basic" label="Filled" variant="filled" />
              </Box>

              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField id="filled-basic" label="Filled" variant="filled" />
              </Box>

              <button className="background__info--button">Submit</button>
          </div>
        </section>
      </Element>

      <Footer />
    </>
  );
}

export default App;
