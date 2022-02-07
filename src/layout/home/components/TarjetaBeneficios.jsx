import React from 'react';
import "../styles/TarjetaBeneficio.scss";

export const TarjetaBeneficios = ({ titulo, portada, img, beneficio }) => {
    return (
        <div className='tarjetaBeneficio'>
            <img className='tajetaBeneficio__img' src={ portada } alt={ titulo } />
            <div className='tarjetaBeneficio__absolute'>
                <img className='tarjetaBeneficio__absolute-img' src={ img } alt={ titulo } />
                <div className='tarjetaBeneficio__absolute-texto'>
                    {
                        beneficio.disponible 
                        ?   <>
                                <p className='absolute-texto--dias'>{ beneficio.dias.toUpperCase() }</p>
                                <p className='absolute-texto--principal'>Hasta { beneficio.descuento } OFF</p>
                                <p className='absolute-texto--titulo'>{ titulo }</p>
                            </>
                        :   <>
                                <p className='absolute-texto--principal'>Conseguí acá los mejores beneficios</p>
                                <p className='absolute-texto--titulo'>{ titulo }</p>
                            </>
                    }
                </div>
            </div>
        </div>
    ) 
};
