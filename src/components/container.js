import Dictionary from '../data/dictionary';
function Container() {
    function handleClick(e) {
      e.preventDefault();
      console.log('handleClick');
      const inputText = document.querySelector("#FrenchTextarea");
      const strings = inputText.value.trim().toLowerCase();
      let translate = Dictionary.find((word) => word.fr === strings);
      if (strings == "" || null) {
        alert('Empty');
      } else if (translate) {
        const outputText = document.querySelector("#WolofTextarea");
        outputText.value = `${translate.wo}`;
      } else {
        const invalid = document.querySelector("#invalid");
        invalid.innerHTML = `Traduction introuvable`;
      }
    }
    return (
      <div className='container-fluid mt-5'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className='mb-5'>
              <label htmlFor="FrenchTextarea" className="form-label fw-bold">Français</label>
              <textarea className="form-control" id="FrenchTextarea" placeholder="Entrez du text" required></textarea>
              <div className='text-danger position-absolute' id="invalid"></div>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className='mb-3'>
              <label htmlFor="WolofTextarea" className="form-label fw-bold">Wolof</label>
              <textarea className="form-control" id="WolofTextarea" placeholder="Traduction" disabled></textarea>
            </div>
          </div>
          <div className='col-12'>
            <button type="submit" onClick={handleClick} className="form-control btn btn-primary fw-bold" id="btn-translate">Traduire</button>
          </div>
        </div>
      </div>
    )
}

export default Container