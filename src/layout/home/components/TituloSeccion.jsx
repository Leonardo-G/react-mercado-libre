import React from 'react';
import { Link } from 'react-router-dom';

import "../styles/TituloSeccion.scss";

export const TituloSeccion = ({ titulo, enlace: { disponible = false, redirigir = "/", descripcion } }) => {
    return (
        <div className='titulo'>
            <h2 className='titulo__seccion'>{ titulo }</h2>
            {
                disponible &&
                <Link className='titulo__enlace' to={ redirigir }> { descripcion } </Link>
            }
        </div>
    )
};
