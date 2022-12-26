import { Labelfrench, Labelwolof } from './label';
import { Textareafrench, Textareawolof } from './textarea';
import Button from './button';
import '../css/main.css';
function Main() {
    return (
    <main>
      <div className='container-fluid mt-5'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className='mb-5'>
              <Labelfrench />
              <Textareafrench />
              <div className='text-danger position-absolute' id='invalid'></div>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className='mb-3'>
              <Labelwolof />
              <Textareawolof />
            </div>
          </div>
          <div className='col-12'>
            <Button />
          </div>
        </div>
      </div>
    </main>
    )
}

export default Main