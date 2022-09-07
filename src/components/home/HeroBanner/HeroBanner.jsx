import './HeroBanner.scss';
import heroBanner1 from '../../../assets/images/heroBanner1.webp';

import { Container } from 'react-bootstrap';


const HeroBanner = () => {
    return (
        <Container className='hero-banner p-0' as='section'>
            <img className='img-fluid' src={heroBanner1} alt='Hero 1'/>
        </Container>
    );
}


export {
    HeroBanner,
}
