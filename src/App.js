import './App.css'
import icon from './img/icon.png'
import png from './img/png.png'

function App() {
  return (
    <>
      <div className='bg'>
        <header className='header'>
          <nav className='navbar'>
            <span className='navbar-brand'><h2><img src={icon} alt="logo"/>Box</h2></span>
          </nav>
        </header>
        
        <div className='info'>
          <div className='text'>
            <div className='title'>
              <h1>
                <p>DESARROLLO</p>
                <p>DE PAGINAS WEB</p>
              </h1>
            </div>
            <div className='description'>
              <h4>
                <p>Comienza a invertir en tu negocio expandiendo</p>
                <p>el alcance de tus ideas a través</p>
                <p>de toda la web.</p>
              </h4>
              <div className="button">
                <button className="button btn-outline-success btn-lg mt-2">Cotiza tu página gratis</button>
              </div>
            </div>
          </div>
          
          <div className='rounded'>
            <div className='img'>
              <img src={png}
                alt='imagen-desarrollo'></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
