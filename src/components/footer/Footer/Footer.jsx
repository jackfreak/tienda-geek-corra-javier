/**
 * Footer component.
 *
 * @author Javier Alejandro Corra
 */

import './Footer.scss';
import { FOOTER_IMAGES as IMGS } from './FOOTER_IMAGES';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';


const Footer = () => {

    const onSubmit = (e) => {
        e.preventDefault();

        // TODO
    };

    return (
        <footer className='main-footer'>
            <div className='main-footer__top'>
                <div className='container main-footer__links'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='newsletter'>
                                <h3>NEWSLETTER</h3>
                                <div className='main-footer__box'>
                                    <form action=''>
                                        <div className='mb-3'>
                                            <label htmlFor='inputEmail' className='form-label'>Email</label>
                                            <input type='email' className='form-control' id='inputEmail' aria-describedby='emailHelp' />
                                            <div id='emailHelp' className='form-text'>Recibí las últimas novedades en tu correo</div>
                                        </div>

                                        <button type='submit' className='btn btn-primary' onClick={ onSubmit }>Suscribirse</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='payments'>
                                <h3>MEDIOS DE PAGO</h3>

                                <div className='payments__list'>
                                    <img src={IMGS.visa} className="payment-logo" alt="visa" />
                                    <img src={IMGS.mastercard} className="payment-logo" alt="mastercard" />
                                    <img src={IMGS.amex} className="payment-logo" alt="amex" />
                                    <img src={IMGS.diners} className="payment-logo" alt="diners" />
                                    <img src={IMGS.paypal} className="payment-logo" alt="paypal" />
                                    <img src={IMGS.banelco} className="payment-logo" alt="banelco" />
                                    <img src={IMGS.cabal} className="payment-logo" alt="cabal" />
                                    <img src={IMGS.tarjetaNaranja} className="payment-logo" alt="tarjeta naranja" />
                                    <img src={IMGS.tarjetaShopping} className="payment-logo" alt="tarjeta shopping" />
                                    <img src={IMGS.mercadopago} className="payment-logo" alt="mercadopago" />
                                    <img src={IMGS.argencard} className="payment-logo" alt="argencard" />
                                    <img src={IMGS.nativa} className="payment-logo" alt="nativa" />
                                    <img src={IMGS.cencosud} className="payment-logo" alt="cencosud" />
                                    <img src={IMGS.pagofacil} className="payment-logo" alt="pagofacil" />
                                    <img src={IMGS.rapipago} className="payment-logo" alt="rapipago" />
                                </div>
                            </div>

                            <div className='shipment'>
                                <h3>FORMAS DE ENVIOS</h3>

                                <div className='shipment__list'>
                                    <img src={IMGS.correoargentino} className="shipment-logo" alt="Correo Argentino" />
                                    <img src={IMGS.mercadoenvios} className="shipment-logo" alt="Mercado Envios" />
                                    <img src={IMGS.personalizado} className="shipment-logo" alt="Personalizado" />
                                    <img src={IMGS.retirolocal} className="shipment-logo" alt="Retiro en Local" />
                                </div>

                                <p>Envíos a todos el país.</p>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='social'>
                                <h3>Nuestras Redes</h3>

                                <ul className='main-footer__box social__list'>
                                    <li><a href='https://www.facebook.com/' target='_blank' rel='noreferrer' title='Facebook'><BsFacebook className='social__icon'></BsFacebook></a></li>
                                    <li><a href='https://www.instagram.com/' target='_blank' rel='noreferrer' title='Instagram'><BsInstagram className='social__icon'></BsInstagram></a></li>
                                    <li><a href='https://www.twitter.com/' target='_blank' rel='noreferrer' title='Twitter'><BsTwitter className='social__icon'></BsTwitter></a></li>
                                    <li><a href='https://www.youtube.com/' target='_blank' rel='noreferrer' title='YouTube'><BsYoutube className='social__icon'></BsYoutube></a></li>
                                </ul>
                            </div>

                            <div className='contact'>
                                <h3>Contacto</h3>
                                <div className='main-footer__box'>
                                    <i></i><span><a href='mailto:contacto@tiendageek.netlify.io'>contacto@tiendageek.netlify.io</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='main-footer__middle'>
                <div className='container main-footer__links'>
                    <a href='./terminos-y-condiciones.html' target='_blank' rel='noopener noreferrer'>Términos y condiciones</a>
                    <a href='./politica-de-privacidad.html' target='_blank' rel='noopener noreferrer'>Política de privacidad</a>
                    <a href='./costos-financiacion.html' target='_blank' rel='noopener noreferrer'>Costos de financiación</a>
                    <a href='./boton-de-arrepentimiento.html' target='_blank' rel='noopener noreferrer'>Botón de arrepentimiento</a>
                </div>
            </div>

            <div className='main-footer__bottom'>
                <div className='container main-footer__legal'>
                    <p>Tienda Geek &#127279; Copyleft 2022. Todos los derechos no reservados.</p>
                </div>
            </div>
        </footer>
    );
};


export {
    Footer
}
