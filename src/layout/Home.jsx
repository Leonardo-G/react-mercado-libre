import React, { useEffect, useState } from 'react';
import { Carousel } from '../components/Carousel';
import { VentanaProducto } from '../components/VentanaProducto';

import "../styles/flex-item.scss";
import "../styles/home.scss";

const ofertas = [
    { id: 1, img: "../../assets/productos/D_Q_NP_935558-MLA45017514805_022021-AB.webp", precio: "5499", oferta: { precioAnterior: "8000", disponible: true}, titulo: "Heladera w1321 asdas da 21321 2e", envio: { disponible: true, tipo: "basico"} },
    { id: 2, img: "../../assets/productos/D_Q_NP_935558-MLA45017514805_022021-AB.webp", precio: "5499", oferta: { precioAnterior: "8000", disponible: true}, titulo: "Heladera w1321 asdas da 21321 2e", envio: { disponible: true, tipo: "completo"} },
    { id: 3, img: "../../assets/productos/D_Q_NP_935558-MLA45017514805_022021-AB.webp", precio: "5499", oferta: { precioAnterior: "8000", disponible: true}, titulo: "Heladera w1321 asdas da 21321 2e", envio: { disponible: false, tipo: "null"} },
    { id: 4, img: "../../assets/productos/D_Q_NP_935558-MLA45017514805_022021-AB.webp", precio: "5499", oferta: { precioAnterior: "8000", disponible: true}, titulo: "Heladera w1321 asdas da 21321 2e", envio: { disponible: true, tipo: "basico"} },
    { id: 5, img: "../../assets/productos/D_Q_NP_935558-MLA45017514805_022021-AB.webp", precio: "5499", oferta: { precioAnterior: "8000", disponible: true}, titulo: "Heladera w1321 asdas da 21321 2e", envio: { disponible: true, tipo: "basico"} }
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
            <div className='container'>
                <section className='ofertas'>
                    <h2 className='titulo__seccion'>Ofertas</h2>
                    <div className='flex-item'>
                        {
                            ofertasDisponibles.map( producto => (
                                <VentanaProducto key={ producto.id } { ...producto }/>
                            ))
                        }
                    </div>
                </section>
            </div>
        </>
    )
};
