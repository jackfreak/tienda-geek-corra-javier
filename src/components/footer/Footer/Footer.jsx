/**
 * Footer component.
 *
 * @author Javier Alejandro Corra
 */

import { FOOTER_IMAGES as IMGS } from './FOOTER_IMAGES';
import { Link } from 'react-router-dom';
import './Footer.scss';


const Footer = () => {
    return (
        <footer className='main-footer'>
            <div className='main-footer__top'>
                <div className='container main-footer__links'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <h3>NEWSLETTER</h3>
                            <div className='main-footer__box'>
                                <p>TO-DO</p>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <h3>MEDIOS DE PAGO</h3>
                            <div className='main-footer__payments'>
                                <img src={IMGS.visa} className="main-footer__payment-logo" alt="visa" />
                                <img src={IMGS.mastercard} className="main-footer__payment-logo" alt="mastercard" />
                                <img src={IMGS.amex} className="main-footer__payment-logo" alt="amex" />
                                <img src={IMGS.diners} className="main-footer__payment-logo" alt="diners" />
                                <img src={IMGS.paypal} className="main-footer__payment-logo" alt="paypal" />
                                <img src={IMGS.banelco} className="main-footer__payment-logo" alt="banelco" />
                                <img src={IMGS.cabal} className="main-footer__payment-logo" alt="cabal" />
                                <img src={IMGS.tarjetaNaranja} className="main-footer__payment-logo" alt="tarjeta naranja" />
                                <img src={IMGS.tarjetaShopping} className="main-footer__payment-logo" alt="tarjeta shopping" />
                                <img src={IMGS.mercadopago} className="main-footer__payment-logo" alt="mercadopago" />
                                <img src={IMGS.argencard} className="main-footer__payment-logo" alt="argencard" />
                                <img src={IMGS.nativa} className="main-footer__payment-logo" alt="nativa" />
                                <img src={IMGS.cencosud} className="main-footer__payment-logo" alt="cencosud" />
                                <img src={IMGS.pagofacil} className="main-footer__payment-logo" alt="pagofacil" />
                                <img src={IMGS.rapipago} className="main-footer__payment-logo" alt="rapipago" />
                            </div>

                            <h3>FORMAS DE ENVIOS</h3>
                            <div className='main-footer__shipment'>
                                <img src={IMGS.correoargentino} className="main-footer__shipment-logo" alt="Correo Argentino" />
                                <img src={IMGS.mercadoenvios} className="main-footer__shipment-logo" alt="Mercado Envios" />
                                <img src={IMGS.personalizado} className="main-footer__shipment-logo" alt="Personalizado" />
                                <img src={IMGS.retirolocal} className="main-footer__shipment-logo" alt="Retiro en Local" />
                            </div>
                            <p>Envíos a todos el país.</p>
                        </div>

                        <div className='col-md-4'>
                            <h3>Nuestras Redes</h3>
                            <div className='main-footer__box'></div>

                            <h3>Contacto</h3>
                            <div className='main-footer__box'>
                                <i></i><span><a href='mailto:contacto@tiendageek.netlify.io'>contacto@tiendageek.netlify.io</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='main-footer__middle'>
                <div className='container main-footer__links'>
                    <Link to='/terminos-y-condiciones'>Términos y condiciones</Link>
                    <Link to='/politica-de-privacidad'>Política de privacidad</Link>
                    <Link to='/costos-financiacion'>Costos de financiación</Link>
                    <Link to='/boton-de-arrepentimiento'>Botón de arrepentimiento</Link>
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
