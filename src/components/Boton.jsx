import React from 'react';
import { Link } from 'react-router-dom';

import "./Boton.scss";

export const Boton = ({ redirigir = "", value = ""}) => {
    return (
        <div>
            <Link className='btn-a' to={ redirigir }>
                { value }
            </Link>
        </div>
    ) 
};
