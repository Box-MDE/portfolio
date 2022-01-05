import './App.css'
import icon from './img/icon.png'
import   Typed   from 'react-typed'

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
            <button className="background__info--button">Cotiza tu página gratis</button>
        </div>

      </section>

      <section className='section__background2'>
        aqui iria mostrar lo q hacemos
      </section>

      <section className='section__background3'>
        aqui iria contacto
      </section>
    </>
  );
}

export default App;
