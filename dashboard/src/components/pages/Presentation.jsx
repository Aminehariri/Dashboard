import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function Accueil() {
  const editorRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <>
      <h2 className="main-title">Qui-sommes nous</h2>
      <form className="formulaire" onSubmit={handleSubmit}>
        <div className="form-group">
          <span>Titre de la page</span>
          <input type="text" name="pageTitle" />
        </div>
        <div className="form-group">
          <span>Sous titre</span>
          <input type="text" name="subTitle"  />
        </div>
        <div className="form-group">
          <span>Conteunu</span>
          <Editor 
            apiKey='8tf26jpmdrxbefwfqqtljzgts7c8np39l5ah9xeqtecq0il4'
            init={{
              plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
              toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
              tinycomments_mode: 'embedded',
              tinycomments_author: 'Author name',
              mergetags_list: [
                { value: 'First.Name', title: 'First Name' },
                { value: 'Email', title: 'Email' },
              ],
              ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
            }}
            initialValue="Welcome to TinyMCE!"
          />
        </div>
        <div className="form-group">
          <input className="btn-principal" type="submit" value='Valide' />
        </div>
      </form>
    </>
  );
}
