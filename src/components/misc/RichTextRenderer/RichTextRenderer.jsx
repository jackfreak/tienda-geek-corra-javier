/**
 * RichTextRenderer component.
 *
 * Algunos valores de los productos que vienen en los servicios (por ahora mockeados)
 * tendrán contenido de tipo "RichText" ya que muy posiblemente hayan sido creados
 * a traves de algun CMS. Necesitamos sanitizar esos string -que pueden contener tags HTML-
 * para prevenir ataques XSS, y luego convertir esos strings a tags html y/o componentes React.
 *
 * De esta manera evitamos el uso de la propiedad dangerouslySetInnerHTML.
 * https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
 *
 * La contra (a evaluar para el trabajo final), es si se justifica agregar casi 60k de javascript.
 *
 * @author Javier Alejandro Corra
 */

//import './RichTextRenderer.scss';

import DOMPurify  from 'dompurify';
import htmlReactParse from 'html-react-parser';

const RichTextRenderer = ({content = ''}) => {
    const cleanContent = DOMPurify.sanitize(content, {ALLOWED_TAGS: ['p', 'span', 'br', 'strong']});
    //const cleanContent = DOMPurify.sanitize(content, { USE_PROFILES: { html: true } })

    return (
        <>
            {htmlReactParse(cleanContent)}
        </>
    );
};


export {
    RichTextRenderer
}
