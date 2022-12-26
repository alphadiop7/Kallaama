import '../css/textarea.css'

function Textareafrench() {
    return <textarea className="form-control" id="FrenchTextarea" placeholder="Entrez du text" required></textarea>
}

function Textareawolof() {
    let textarea = document.querySelector("#WolofTextarea");
    textarea = `nangadef`;
    return <textarea className="form-control" id="WolofTextarea" placeholder="Traduction" value={textarea} disabled></textarea>
}

export {Textareafrench, Textareawolof}