import '../css/button.css'
function Button() {
    function handleClick(e) {
        e.preventDefault();
        console.log('Button clické');
        if (handleClick) {
            let name = "kallaama";
            alert('kallama');
        }
    }
    return <button type="submit" onClick={handleClick} className="form-control btn btn-primary fw-bold" id="btn-translate">Traduire</button>
}

export default Button