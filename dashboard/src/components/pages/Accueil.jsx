import { useRef } from "react";


export default function Accueil(){


  return(
    <>
      <h2 className="main-title">Accueil</h2>
      <form className="formulaire">
        <div className="form-group">
          <span>Titre de la page</span>
          <input type="text" ></input>
        </div>
        <div className="form-group">
          <span>Sous titre</span>
          <input type="text" ></input>
        </div>
        <div className="form-group">
          <span>Conteunu</span>
          <input type="text" ></input>
        </div>
      
        <div className="form-group">
          <input className="btn-principal" type="submit" value='Valide' placeholder="page  title" onClick={(e)=>{e.preventDefault()}}></input>
        </div>
      </form>
    </>
    )
}