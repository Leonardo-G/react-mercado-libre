import React, { useEffect, useState } from 'react';
import { Carousel } from '../components/Carousel';

const ofertas = [
    { id: 1, img: "../../assets/productos/D_Q_NP_935558-MLA45017514805_022021-AB.webp", precio: "5499", oferta: { precioAnterior: "8000", disponible: true} },
    { id: 1, img: "../../assets/productos/D_Q_NP_935558-MLA45017514805_022021-AB.webp", precio: "5499", oferta: { precioAnterior: "8000", disponible: true} },
    { id: 1, img: "../../assets/productos/D_Q_NP_935558-MLA45017514805_022021-AB.webp", precio: "5499", oferta: { precioAnterior: "8000", disponible: true} },
    { id: 1, img: "../../assets/productos/D_Q_NP_935558-MLA45017514805_022021-AB.webp", precio: "5499", oferta: { precioAnterior: "8000", disponible: true} },
    { id: 1, img: "../../assets/productos/D_Q_NP_935558-MLA45017514805_022021-AB.webp", precio: "5499", oferta: { precioAnterior: "8000", disponible: true} }
]

export const Home = () => {

    const [ofertasDisponibles, setOfertasDisponibles] = useState([]);
    
    const ofertasHome = () => {
        const encontrarOferta = ofertas.filter( o => o.oferta.disponible === true )
        setOfertasDisponibles(encontrarOferta);
    }

    useEffect( () => {
        ofertasHome()
    }, [])

    return (
        <>
            <Carousel />
            <section>
                {
                    
                }
            </section>
        </>
    )
};
