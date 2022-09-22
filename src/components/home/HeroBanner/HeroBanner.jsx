/**
 * HeroBanner component.
 *
 * @author Javier Alejandro Corra
 */

import './HeroBanner.scss';
import heroBanner1 from '../../../assets/images/hero-banner-1.jpg';
import heroBanner2 from '../../../assets/images/hero-banner-2.jpg';
import heroBanner3 from '../../../assets/images/hero-banner-3.jpg';
import heroBanner4 from '../../../assets/images/hero-banner-4.jpg';

import { Carousel } from 'react-bootstrap';

const BANNERS = [
    {
        image: heroBanner1,
        alt: 'Banner 1',
    },
    {
        image: heroBanner2,
        alt: 'Banner 2',
    },
    {
        image: heroBanner3,
        alt: 'Banner 3',
    },
    {
        image: heroBanner4,
        alt: 'Banner 4',
    },
];

const HeroBanner = () => {
    return (
        <section className="hero-banner container p-0 mt-4" >
            <Carousel nextLabel="Siguiente" prevLabel="Anterior">
                {BANNERS.map((banner, index) => {
                    return (
                        <Carousel.Item key={index}>
                            <img
                                className="d-block w-100"
                                src={banner.image}
                                alt={banner.alt}
                            />
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </section>
    );
};

export { HeroBanner };
