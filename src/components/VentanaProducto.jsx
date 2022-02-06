import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "../styles/Item.scss"
import { faBolt } from '@fortawesome/free-solid-svg-icons';

export const VentanaProducto = ({ img }) => {
    
    return (
        <div className='item'>
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
            </div>
        </div>
    )
};
