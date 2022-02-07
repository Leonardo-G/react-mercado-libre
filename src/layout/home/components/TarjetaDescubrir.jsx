import React from 'react';
import { Link } from 'react-router-dom';
import { Boton } from '../../../components/Boton';

import "../styles/TarjetaDescubrir.scss";

export const TarjetaDescubrir = ({ id, img, titulo, descripcion, url }) => {
    return (
        <div className='tarjetaDescubrir'>
            <div className='tarjetaDescubrir__texto'>
                <p className='tarjetaDescubrir__texto-titulo'>{ titulo }</p>
                <h2 className='tarjetaDescubrir__texto-descripcion'>{ descripcion }</h2>
                <div>
                    <Boton redirigir='/' value='Ver más'/>
                </div>
            </div>
            <img src={ img } alt={ "categoria " + id} />
        </div>
    ) 
};
