import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "../styles/Item.scss"
import { faBolt, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const VentanaProducto = ({ img, titulo }) => {
    
    return (
            <Link to="/" className='item'>
                <div>
                    <img src={ img } className="img-item"/>
                </div>
                <div className='item__info'>
                    <div className='info-numero'>
                        <p className='info-precio'> $ 4.999 </p>
                        <p className='info-descuento'>40% OFF</p>
                    </div>
                    <p className='item-cuotas'>6x $ 999.83 sin interés</p>
                    <div className='item-envio'>
                        <p>Envío gratis </p>
                        <FontAwesomeIcon className='icon-full' icon={ faBolt }/>
                        <p className='envio-full'>FULL</p>
                    </div>
                    <p className='titulo-hover'>{ titulo }</p>
                </div>
                <div className='icon-fav'>
                    <FontAwesomeIcon className='' icon={ faHeart }/>
                </div>
            </Link>
    )
};
