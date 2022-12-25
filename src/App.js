import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import { render } from '@testing-library/react';

function App() {
  return (
    <h1></h1>
  );
}

render (
    <main>
      <div className='container-fluid mt-5'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className='mb-5'>
              <label htmlFor='FrenchTextarea' className='form-label fw-bold'>Français</label>
              <textarea className='form-control' id='FrenchTextarea' placeholder="Entrez du text" required></textarea>
              <div className='text-danger position-absolute' id='invalid'> </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className='mb-3'>
              <label htmlFor='wolofTextarea' className='form-label fw-bold'>Wolof</label>
              <textarea className='form-control' id='wolofTextarea' placeholder="Traduction" disabled></textarea>
            </div>
          </div>
          <div className='col-12'>
            <button type="submit" className='form-control btn btn-primary fw-bold' id='btn-translate'>Traduire</button>
          </div>
        </div>
      </div>
    </main>
);
export default App;
